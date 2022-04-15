
/*
Autoplay
*/

import id         from 'https://stephen.band/fn/modules/id.js';
import parseValue from 'https://stephen.band/fn/modules/parse-value.js';

const parseTime = parseValue({
   's':  id,
   'ms': (n) => n / 1000
});


function change(data) {
    const { active, children, host } = data;
    const i = children.indexOf(active);
    const target = children[i + 1] || children[0];

    data.autoplayTimer = undefined;
    if (!target) { return; }
    host.active = target;
}

function update(data) {
    const { active, host } = data;

    clearTimeout(data.autoplayTimer);
    data.autoplayTimer = undefined;

    if (!active) { return; }

    const duration = parseTime(
        window
        .getComputedStyle(active)
        .getPropertyValue('--duration') || host.duration
    );

    data.autoplayTimer = setTimeout(change, duration * 1000, data);
}

export function enableAutoplay(data) {
    data.actives.each((active) => update(data));
    data.autoplay = true;
}

export function disableAutoplay(data) {
    clearTimeout(data.autoplayTimer);
    data.autoplayTimer = undefined;
    data.autoplay = false;
}
