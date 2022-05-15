
import equals        from '../../fn/modules/equals.js';
import Stream        from '../../fn/modules/stream.js';
import create        from '../../dom/modules/create.js';
import events, { isPrimaryButton } from '../../dom/modules/events.js';
import gestures      from '../../dom/modules/gestures.js';
import { px }        from '../../dom/modules/parse-length.js';
import rect          from '../../dom/modules/rect.js';
import { trigger }   from '../../dom/modules/trigger.js';

import { $data }     from './consts.js';
import { scrollTo, jumpTo, updateActive } from './active.js';
import { processPointers } from './swipes.js';
import scrollends    from './scrollends.js';


function getWidth(scroller, slides, children) {
    let n = children.length;
    let r = -Infinity;

    while (n--) {
        const box   = rect(children[n]);
        const right = box.x + box.width;
        r = right > r ? right : r;
    }

    const box   = rect(slides);
    const style = getComputedStyle(scroller);
    const pl    = px(style.paddingLeft || 0);
    const pr    = px(style.paddingRight || 0);

    return pl + pr + r - box.x;
}

function updateWidth(scroller, slides, children) {
    const width = getWidth(scroller, slides, children);
    scroller.style.setProperty('--scroll-width', width + 'px');
}

function isSlide(slide) {
    // Filter out loop ghosts
    return !slide.dataset.slideIndex;
}


/* Lifecycle */

/**
'slide-active'
Emitted by a slide when it is brought into scroll-snap alignment.
**/

export default {
    construct: function(shadow) {
        // Shadow DOM
        const slides   = create('slot', { part: 'slides' });
        const scroller = create('div',  { class: 'scroller', children: [slides] });
        const controls = create('nav',  { part: 'controls' });

        // Add slots to shadow
        shadow.append(scroller, controls);

        // Stream to push load to
        const load = Stream.of();

        // In Chrome and FF initial `slotchange` event is always sent before
        // load, but not so in Safari where either order may happen (at a guess
        // due to some caching strategy). Here we sanitise order by making
        // slotchanges stream always fire after load.
        const slotchanges = Stream
            .combine({
                host: load,
                elements: events('slotchange', slides)
                    .map((e) => data.elements = slides.assignedElements()),
            })
            .broadcast({ memory: true });

        const mutations = slotchanges
            .map((state) => {
                const children = state.elements.filter(isSlide);
                return equals(data.children, children) ?
                    undefined :
                    (data.children = children) ;
            })
            .broadcast({ memory: true });

        // Buffer stream for pushing children to scroll into view then activate
        const views = Stream.of(null);

        // Buffer stream for pushing children to activate
        const activations = Stream.of();

        // Broadcast stream for listening to changes to active
        const actives = activations
            .filter((child) => (data.active !== child && trigger('slide-active', child)))
            .map((child) => data.active = child)
            .broadcast({ memory: true, hot: true });

        const clicks = events('click', shadow)
            .filter(isPrimaryButton)
            .broadcast();

        // Private data
        const data = this[$data] = {
            clickSuppressTime: -Infinity,
            host:  this,
            style: window.getComputedStyle(this),
            scroller,
            slides,
            controls,
            load,
            views,
            activations,
            actives,
            slotchanges,
            mutations,
            clicks
        };

        // Create a stream of width updates on slotchanges and resizes
        Stream
        .merge(slotchanges, events('resize', window))
        .each((e) => updateWidth(scroller, slides, data.elements));

        // Wait for fist slotchange/load, then on mutation maintain active
        // position, or on activation scroll to new child, then pipe the child
        // to be activated.
        Stream
        .combine({ children: mutations, child: views })
        .map((state) => {
            // Is previous child not yet defined, or the new one the same as it?
            if (!data.active || data.active === state.child) {
                // This is a mutation, so jump to the active child if it is
                // still there, or the first child if not
                return jumpTo(scroller, state.children.includes(state.child) ?
                    state.child :
                    state.children[0]
                );
            }

            // This is an activation, scroll to the new active child without
            // a check for being in children, we may be activating a ghost
            scrollTo(scroller, state.child);

            // If it is a ghost, activate the original not the ghost
            return state.child.dataset.slideIndex ?
                state.children[state.child.dataset.slideIndex] :
                state.child ;
        })
        .pipe(activations);

        // Update active when scroll comes to rest, but not mid-gesture.
        scrollends(scroller)
        .filter(() => !data.gesturing)
        .each((e) => updateActive(data));

        // Enable single finger scroll on mouse devices. Dodgy idea in my
        // opinion, but it does add support for mouse-only devices.
        gestures({ threshold: '0.25rem', device: 'mouse' }, shadow)
        .filter(() => data.children.length > 1)
        .each((pointers) => {
            // Keep a reference to pointers, it's used inside processPointers
            data.pointers = pointers;
            pointers.reduce(processPointers, data);
        });

        // Prevent default on immediate clicks after a gesture, and don't let
        // them out: this is a gesture not a click.
        clicks
        .each((e) => {
            if (e.timeStamp - data.clickSuppressTime < 120) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // Update positions on entry or exit from fullscreen.
        events('fullscreenchange', window)
        .each((e) => {
            // If this slide-show was involved in the fullscreen change
            // reposition the active slide, it may have been shuftied.
            if (e.target === this || e.target.contains(this)) {
                jumpTo(scroller, data.active);
            }
        });

        // Chrome behaves nicely when shifting focus between slides, Safari and
        // FF not so much. Let's give them a helping hand at displaying the
        // focused slide. Todo: FF not getting this.
        events('focusin', this)
        .map((e) => (
            // Is e.target a slide
            data.children.indexOf(e.target) !== -1 ? e.target :
            // Or inside a slide
            data.children.find((child) => child.contains(e.target))
        ))
        .each((target) => scrollTo(data.scroller, target));
    },

    load: function (shadow) {
        const data = this[$data];
        data.load.push(this);
    }
};
