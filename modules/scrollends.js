
// Much of this code has been purloined from targetable.js – do we need the
// hashchange tracking here? I have commented it

import Stream from 'fn/stream/stream.js';
import { getScrollInterval, updateScrollInterval } from './consts.js';

const assign = Object.assign;

// Capture scroll events in capture phase, as scroll events from elements
// other than document do not bubble.
const captureOptions = {
    capture: true,
    passive: true
};

function fire(stream, e) {
    stream.timer = undefined;
    Stream.push(stream, e);
    const times = stream.times;
    if (times.length > 1) { updateScrollInterval(times); }
    times.length = 0;
}

function Scrollends(element) {
    this.element = element;
    this.times   = [];
}

assign(Scrollends.prototype, Stream.prototype, {
    start: function(stream) {
        this.element.addEventListener('scroll', this, captureOptions);
        return this;
    },

    handleEvent: function(e) {
        const time = e.timeStamp / 1000;
        this.times.push(time);

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(fire, getScrollInterval() * 1000, this, e);
    },

    stop: function() {
        this.element.removeEventListener('scroll', this);
        return Stream.stop(this);
    }
});

export default function scrollends(element) {
    return new Scrollends(element);
}
