
import events   from '../../dom/modules/events.js';
import overload from '../../fn/modules/overload.js';

import { getActive }         from './active.js';
import { getScrollInterval } from './consts.js';

function resetScroll(scroller, scrolls) {
    scroller.style.setProperty('scroll-snap-type', '');
    scrolls.stop();
}

export const processPointers = overload((data, e) => e.type, {
    pointerdown: function(data, e) {
        // First event is touchstart or mousedown
        data.e0 = e;
        data.x0 = e.clientX;
        data.y0 = e.clientY;

        return data;
    },

    pointermove: function(data, e) {
        const x1 = e.clientX;
        const y1 = e.clientY;

        // Determine whether to start a gesture
        if (!data.gesturing) {
            // If the movement is more vertical than horizontal, don't count it
            // as a swipe. Stop the stream and get out of here.
            if (Math.abs(x1 - data.x0) < Math.abs(y1 - data.y0)) {
                data.pointers.stop();
                data.pointers = undefined;
                data.e0 = undefined;
                data.x0 = undefined;
                data.y0 = undefined;
                return;
            }

            data.scrollLeft0 = data.scroller.scrollLeft;
            data.scroller.style.setProperty('scroll-snap-type', 'none', 'important');
            data.scroller.style.setProperty('scroll-behavior', 'auto', 'important');
            data.gesturing = true;
        }

        const dx = e.clientX - data.x0;
        data.scroller.scrollLeft = data.scrollLeft0 - dx;

        return data;
    },

    // Catches pointerup and pointercancel
    default: function(data, e) {
        const scroller = data.scroller;

        // Track the end of click to allow click suppression
        data.clickSuppressTime = e.timeStamp;

        // Here we must go through a whole rigmarole in an attempt to avoid
        // scroll jumps at the end of a swipe. Find out where it is, ...
        const scrollLeft1 = scroller.scrollLeft;
        scroller.style.setProperty('scroll-snap-type', '');

        // and where it would snap to.
        const scrollLeft2 = scroller.scrollLeft;

        // If those numbers are the same we are probably in FF, where removing
        // scroll-snap does not cause an immediate jump to a snap alignment.
        if (scrollLeft1 === scrollLeft2) {
            // We can trust the browser to smooth scroll when we reset it.
            scroller.style.setProperty('scroll-behavior', '');
        }
        else {
            // Otherwise we have to do things the hard way. We may as well
            // preemptively update the active slide now, since we are sitting
            // in the new position. This is not a crucial step, just makes the
            // UI react a bit more quickly.
            const active = getActive(data);
            data.activations.push(active);

            // Switch scroll-snap off again and put scroll back to position 1...
            scroller.style.setProperty('scroll-snap-type', 'none', 'important');
            scroller.scrollLeft = scrollLeft1;

            // then manually smooth scroll over to position 2...
            scroller.style.setProperty('scroll-behavior', '');
            scroller.scrollTo({
                top:  scroller.scrollTop,
                left: scrollLeft2,
                behavior: 'smooth'
            });

            // and finally, switch scroll snapping back on when that scroll
            // comes to rest (scrollInterval passes without an event).
            events({ type: 'scroll', passive: true }, scroller)
            .reduce((frame, e, i, stream) => {
                clearTimeout(frame);
                return setTimeout(resetScroll, getScrollInterval() * 1000, scroller, stream);
            });

            // Ooof. What a polava.
        }

        data.gesturing = false;
        data.e0 = undefined;
        data.x0 = undefined;
        data.y0 = undefined;
        data.pointers  = undefined;
        data.scrollLeft0 = undefined;

        return data;
    }
});
