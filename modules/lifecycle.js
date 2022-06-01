
import equals        from '../../fn/modules/equals.js';
import get           from '../../fn/modules/get.js';
import noop          from '../../fn/modules/noop.js';
import nothing       from '../../fn/modules/nothing.js';
import overload      from '../../fn/modules/overload.js';
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
        const controls = create('nav',  { part: 'controls', children: [
            create('slot', { name: 'controls' })
        ] });

        // Add slots to shadow
        shadow.append(scroller, controls);

        // Stream to push load to
        const connects = Stream.broadcast();
        const load     = Stream.broadcast();

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
            .broadcast({ memory: true, hot: true });

        // Buffer stream for pushing children to scroll into view then activate
        const views = Stream.of();

        // Buffer stream for pushing children to activate
        const activations = Stream.of();

        // Broadcast stream for listening to changes to active
        const actives = activations
            .map((child) => (child.dataset.slideIndex ?
                data.children[child.dataset.slideIndex] :
                child
            ))
            .filter((child) => (data.active !== child && trigger('slide-active', child)))
            .map((child) => data.active = child)
            .broadcast({ memory: true, hot: true });

        const clicks = events('click', shadow)
            .filter(isPrimaryButton)
            .broadcast();

        // Private data
        const data = this[$data] = {
            clickSuppressTime: -Infinity,
            connected: false,
            host:      this,
            style:     window.getComputedStyle(this),
            elements:  nothing,
            children:  nothing,
            device:    undefined,
            shadow,
            scroller,
            slides,
            controls,
            connects,
            load,
            views,
            activations,
            actives,
            slotchanges,
            mutations,
            clicks
        };

        // Create a stream of width updates on slotchanges and resizes. We
        // cannot know the slide-show becomes visible – it may have display: none
        // on upgrade – so we must protect against update in cases where it is not,
        // and hope to goodness it is updated somehow when it is made visible.
        Stream
        .merge(slotchanges, events('resize', window))
        .filter((e) => (this.offsetWidth > 0 && this.offsetHeight > 0))
        .each((e) => updateWidth(scroller, slides, data.elements));

        // Wait for first slotchange/load, then maintain active position. In
        // Chrome this fails on connect, as it appears the style is not applied
        // immediately, so jumpTo() can't measure positions properly.
        Stream
        .combine({ slotchanges, connects })
        .map((state) => (data.elements.includes(data.active) ?
            data.active :
            data.children[0]
        ))
        .map((child) => (data.connected ?
            jumpTo(scroller, child) :
            child
        ))
        .pipe(activations);

        // On change of .active view, check it is a child element that is not
        // already active and scroll to it
        Stream
        .combine({ host: load, child: views })
        .map((state) => (data.elements.includes(state.child) && data.active !== state.child ?
            state.child :
            undefined
        ))
        .map((child) => (data.connected ?
            data.active ?
                // This is a activation, scroll to the new active child
                scrollTo(scroller, child) :
                // If active is not yet defined jump to the newly active child
                jumpTo(scroller, child) :
            // If not connected pass the child through
            child
        ))
        .pipe(activations);

        // Update active when scroll comes to rest, but not mid-gesture.
        scrollends(scroller)
        .filter((e) => (data.connected && !data.gesturing))
        // Of course, this causes a scroll, which causes a scrollend...
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
        // focused slide. Start by tracking the latest input device...
        Stream
        .merge(events('pointerdown', this), events('keydown', this))
        .each((e) => (data.device = e.type === 'keydown' ?
            'keyboard' :
            e.pointerType
        ));

        // Then listen to focus events. Todo: FF not getting this.
        events('focusin', this)
        .filter((e) => (data.device === 'keyboard'))
        .map((e) => (
            // Is e.target a slide
            data.children.indexOf(e.target) !== -1 ? e.target :
            // Or inside a slide
            data.children.find((child) => child.contains(e.target))
        ))
        .pipe(views);

        // While the slide-show is focused allow left and right arrows to
        // navigate.
        events('keydown', this)
        .filter(() => document.activeElement === this || this.contains(document.activeElement))
        .map(overload(get('keyCode'), {
            // Left arrow
            37: (e) => {
                // If we don't preventDefault FF jumps two slides - it scrolls
                // once for the handler and once for its default scroll paging
                e.preventDefault();
                return data.elements[data.elements.indexOf(data.active) - 1];
            },
            // Right arrow
            39: (e) => {
                // If we don't preventDefault FF jumps two slides - it scrolls
                // once for the handler and once for its default scroll paging
                e.preventDefault();
                return data.elements[data.elements.indexOf(data.active) + 1];
            },
            // Other keys
            default: noop
        }))
        .pipe(views);

        // Neuter streams intended as push-only, just as a sanity check
        if (window.DEBUG) {
            load.pipe = null;
        }
    },

    load: function (shadow) {
        const data = this[$data];
        data.load.push(this);
    },

    connect: function(shadow) {
        const data = this[$data];
        data.connected = true;
        data.connects.push(true);
    },

    disconnect: function(shadow) {
        const data = this[$data];
        data.connected = false;
        //data.connects.push(false);
    }
};
