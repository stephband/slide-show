
/*
Autoplay
*/

import id         from '../../fn/modules/id.js';
import parseValue from '../../fn/modules/parse-value.js';
import Stream     from '../../fn/stream/stream.js';
import events     from '../../dom/modules/events.js';


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
    const { active, children, host } = data;
    const i = children.indexOf(active);
    const target = children[i + 1] || children[0];
    //console.log('AUTOPLAY CHANGE', target);
    data.autoplay.timer = null;
    if (!target) { return; }

    host.active = target;
}

function update(data) {
    const { active, host } = data;
    const duration = parseTime(
        window
        .getComputedStyle(active)
        .getPropertyValue('--slide-duration') || host.duration
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

export function enableAutoplay(data) {
    const { host } = data;

    // Add an object to store autoplay state
    const autoplay = data.autoplay = {};

    // Create a new stream of actives starting with the current active
    // TODO: Make distributor push initial value?
    const actives = Stream.merge(
        [data.active],
        // TEMP - needs .map() to create a new stream from the distributor
        data.actives.map((o) => o)
    );

    // Create a stream of hover states starting with false. Note that this is
    // an assumption - the cursor may well be in hover state when autoplay is
    // enabled. TODO: detect current hover state (move this stream to a 'permanent'
    // stram in element.js? Make distributor push initial value?)
    const hovers = Stream.merge(
        [false],
        events('pointerenter pointerleave', host)
        .map((e) => e.type === 'pointerenter')
    );

    // Schedule a change timer on every activate where the user is not
    // hovering, or at the end of the hover
    autoplay.updates = Stream
        .combine({ active: actives, hover:  hovers })
        .each((state) => (state.hover ?
            cancel(data) :
            update(data)
        ));
}

export function disableAutoplay(data) {
    cancel(data);
    data.autoplay.updates.stop();
    data.autoplay = undefined;
}
