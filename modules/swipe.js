
import overload from '../../fn/modules/overload.js';

export const processSwipe = overload((data, e) => e.type, {
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

        // If the gesture is more vertical than horizontal, don't count it
        // as a swipe. Stop the stream and get out of here.
        if (!data.isSwipe) {
            if (Math.abs(x1 - data.x0) < Math.abs(y1 - data.y0)) {
                data.pointers.stop();
                data.pointers = undefined;
                return;
            }

            data.isSwipe = true;
            data.scrollLeft0 = data.scroller.scrollLeft;
            data.scroller.classList.add('gesturing');
            data.gesturing = true;
        }

        const dx = e.clientX - data.x0;
        data.scroller.scrollLeft = data.scrollLeft0 - dx;

        return data;
    },

    default: function(data, e) {
        //data.view.clickSuppressTime = window.performance.now();
        data.clickSuppressTime = e.timeStamp;

        // Dodgy. If we simple remove the class the end of the gesture
        // jumps.
        const scrollLeft = data.scroller.scrollLeft;
        data.scroller.classList.remove('gesturing');
        data.scroller.scrollLeft = scrollLeft;
        data.gesturing  = false;
        data.pointers = undefined;

        return data;
    }
});
