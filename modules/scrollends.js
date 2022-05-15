
// Much of this code has been purloined from targetable.js – do we need the
// hashchange tracking here? I have commented it

import Stream   from '../../fn/modules/stream.js';
import Producer from '../../fn/modules/stream/producer.js';

const assign = Object.assign;

// Capture scroll events in capture phase, as scroll events from elements
// other than document do not bubble.
const captureOptions = {
    capture: true,
    passive: true
};

const config = {
    minScrollEventInterval: 0.0375,
    maxScrollEventInterval: 0.18
};

var trackingInterval = config.maxScrollEventInterval;

function adjustTrackingInterval(times) {
    // Dynamically adjust maxScrollEventInterval to tighten it up,
    // imposing a baseline of 60ms (0.0375s * 1.6)

    let n = times.length;
    let interval = 0;

    while (--n) {
        const t = times[n] - times[n - 1];
        interval = t > interval ? t : interval;
    }

    interval = interval < config.minScrollEventInterval ?
        config.minScrollEventInterval :
        interval ;

    trackingInterval = (1.4 * interval) > config.maxScrollEventInterval ?
        config.maxScrollEventInterval :
        (1.4 * interval) ;
}

function fire(producer, e) {
    producer.timer = undefined;
    producer.stream.push(e);

    const times = producer.times;
    if (times.length > 1) { adjustTrackingInterval(times); }
    times.length = 0;
}

function ScrollendsProducer(element) {
    this.element = element;
    this.times   = [];
}

assign(ScrollendsProducer.prototype, Producer.prototype, {
    pipe: function(stream) {
        this.stream = stream;
        this.element.addEventListener('scroll', this, captureOptions);
    },

    handleEvent: function(e) {
        const time = e.timeStamp / 1000;
        this.times.push(time);

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(fire, trackingInterval * 1000, this, e);
    },

    stop: function() {
        this.element.removeEventListener('scroll', this);
        Producer.prototype.stop.apply(this, arguments);
    }
});

export default function scrollends(element) {
    return new Stream(new ScrollendsProducer(element));
}
