
/*
Autoplay
*/

import id         from 'fn/id.js';
import get        from 'fn/get.js';
import overload   from 'fn/overload.js';
import parseValue from 'fn/parse-value.js';
import Stream     from 'fn/stream.js';
import events     from '../../dom/modules/events.js';

import { $data }  from './consts.js';

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
    const { active, children, elements, host } = data;
    const i = elements.indexOf(active);
    const target = elements[i + 1] || children[0];
    //console.log('AUTOPLAY CHANGE', target);
    data.autoplay.timer = null;
    if (!target) { return; }
    host.active = target;
}

function update(data) {
    const { active, style } = data;
    const duration = parseTime(
        window
        .getComputedStyle(active)
        .getPropertyValue('--slide-duration') ||
        style.getPropertyValue('--slide-duration')
    );

    clearTimeout(data.autoplay.timer);
    //console.log('AUTOPLAY UPDATE', duration);
    data.autoplay.timer = setTimeout(change, duration * 1000, data);
}

function cancel(data) {
    //console.log('AUTOPLAY CANCEL');
    clearTimeout(data.autoplay.timer);
    data.autoplay.timer = null;
}

export function enable(host) {
    const data = host[$data];
    const { actives } = data;

    // Add an object to store autoplay state
    const autoplay = data.autoplay = {};

    // Create a stream of hover states starting with false. Note that this is
    // an assumption - the cursor may well be in hover state when autoplay is
    // enabled.
    const hovers = Stream.merge(
        [false],
        events('pointerenter pointerleave', host)
        .map((e) => e.type === 'pointerenter')
    );

    // Create a stream of focus inside state
    const focuses = Stream.merge(
        [host.contains(document.activeElement)],
        events('focusin focusout', host)
        .map(overload(get('type'), {
            'focusin': (e) => true,
            'focusout': (e) => host.contains(e.relatedTarget)
        }))
    )
    // Deduplicate
    .map(((v) => (value) => (v === value ? undefined : (v = value)))());

    // Schedule a change timer on every activate where the user is not
    // hovering, or at the end of the hover
    autoplay.updates = Stream
        .combine({ active: actives, hover: hovers, focus: focuses })
        .each((state) => (state.hover || state.focus ?
            cancel(data) :
            update(data)
        ));
}

export function disable(host) {
    const data = host[$data];
    cancel(data);
    data.autoplay.updates.stop();
    data.autoplay = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.autoplay;
}
