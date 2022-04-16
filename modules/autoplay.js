
/*
Autoplay
*/

import id         from 'https://stephen.band/fn/modules/id.js';
import parseValue from 'https://stephen.band/fn/modules/parse-value.js';

const parseTime = parseValue({
   's':  id,
   'ms': (n) => n / 1000
});

/*
TODO: dont autoplay when hidden??

events('visibilitychange', document).each((e) => {
    if (document.hidden) {

    }
    else {

    }
});
*/

function change(data) {
    console.log('AUTOPLAY CHANGE');
    const { active, children, host } = data;
    const i = children.indexOf(active);
    const target = children[i + 1] || children[0];

    data.autoplay.timer = null;
    if (!target) { return; }

    host.active = target;
}

function update(data) {
    console.log('AUTOPLAY UPDATE');
    const { active, host } = data;
    const duration = parseTime(
        window
        .getComputedStyle(active)
        .getPropertyValue('--duration') || host.duration
    );

    clearTimeout(data.autoplay.timer);
    data.autoplay.timer = setTimeout(change, duration * 1000, data);
}

export function enableAutoplay(data) {
    // Add an object to store autoplay state
    data.autoplay = {
        // Schedule a change timer on every activate
        actives: data.actives.each(() => update(data)),

        // Refuse to change while any scrolling is going on
        // TODO: this should be implemented on hover (pointerenter / pointerleave)
        scrolls: data.scrolls.each((stream) => {
            clearTimeout(data.autoplay.timer);
            data.autoplay.timer = null;
        }),

        timer: null
    };
}

export function disableAutoplay(data) {
    clearTimeout(data.autoplay.timer);
    data.autoplay.scrolls.stop();
    data.autoplay.actives.stop();
    data.autoplay = undefined;
}
