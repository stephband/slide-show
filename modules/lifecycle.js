
import equals        from '../../fn/modules/equals.js';
import noop          from '../../fn/modules/noop.js';
import nothing       from '../../fn/modules/nothing.js';
import Stream        from '../../fn/modules/stream.js';
import create        from '../../dom/modules/create.js';
import events, { isPrimaryButton } from '../../dom/modules/events.js';
import gestures      from '../../dom/modules/gestures.js';
import { px }        from '../../dom/modules/parse-length.js';
import rect          from '../../dom/modules/rect.js';
import scrollStreams from '../../dom/modules/scrolls.js';

import { $data } from './consts.js';
import { scrollTo, jumpTo, updateActive } from './active.js';
import { processPointers } from './swipes.js';


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

export default {
    construct: function(shadow) {
        // Shadow DOM
        const slides   = create('slot', { part: 'slides' });
        const scroller = create('div',  { class: 'scroller', children: [slides] });
        const controls = create('nav',  { part: 'controls' });

        // Add slots to shadow
        shadow.append(scroller, controls);

        // Create streams from things that happen to slide-show
        const load = Stream.of();

        // In Chrome and FF initial `slotchange` event is always sent before
        // load, but not so in Safari where either order may happen, at a guess
        // due to some caching strategy. Here we sanitise order by making
        // slotchanges stream dependent on load. There's little point in doing
        // much before load anyway, as active slide is dependent on loaded
        // stylesheet.
        const slotchanges = Stream
            .combine({
                host: load,
                elements: events({ type: 'slotchange', select: '[part="slides"]' }, slides)
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

        const clicks = events('click', shadow)
            .filter(isPrimaryButton)
            .broadcast();

        const swipes = gestures({ threshold: '0.25rem', device: 'mouse' }, shadow)
            .filter(() => data.children.length > 1);

        const scrolls     = scrollStreams(scroller);
        const focuses     = events('focusin', this);
        const resizes     = events('resize', window);
        const fullscreens = events('fullscreenchange', window);
        const activates   = Stream.of();
        const actives     = Stream.broadcast({ memory: true });

        // Private data
        const data = this[$data] = {
            clickSuppressTime: -Infinity,
            host:     this,
            style:    window.getComputedStyle(this),
            elements: nothing,
            children: nothing,
            shadow,
            scroller,
            slides,
            controls,
            load,
            activates,
            actives,
            slotchanges,
            mutations,
            clicks
        };

        // Create a stream of width updates
        Stream
        .merge(slotchanges, resizes)
        .each(() => updateWidth(data.scroller, data.slides, data.elements));

        // let count = 0;
        Stream
        .combine({ changes: slotchanges, child: activates })
        .each((state) => (data.loaded ?
            scrollTo(data.scroller, state.child) :
            jumpTo(data.scroller, state.child)
        ));

        slotchanges.each((state) => updateActive(data));

        // Prevent default on immediate clicks after a gesture, and don't let
        // them out: this is a gesture not a click
        clicks
        .each((e) => {
            if (e.timeStamp - data.clickSuppressTime < 120) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // Enable single finger scroll on mouse devices. Bad idea in my opinion,
        // but designers tend to like it to support mouse only devices.
        swipes
        .each((pointers) => {
            // Keep a reference to pointers, it's used inside processPointers
            data.pointers = pointers;
            pointers.reduce(processPointers, data);
        });

        fullscreens
        .each((e) => {
            // If this slide-show was involved in the fullscreen change
            // reposition the active slide, it may have been shuftied.
            if (e.target === this || e.target.contains(this)) {
                jumpTo(scroller, data.active);
            }
        });

        // Update active when scroll comes to rest
        scrolls
        .each((stream) => stream
            .each(noop)
            .done(() => updateActive(data))
        );

        // Chrome behaves nicely when shifting focus between slides, Safari and
        // FF not so much. Let's give them a helping hand at displaying the
        // focused slide. Todo: FF not getting this.
        focuses
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
        data.loaded = true;
    }
};
