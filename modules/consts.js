
export const $data = Symbol('data');

export const config = {
    minScrollInterval: 0.0375,
    maxScrollInterval: 0.18
};


/*
scrollInterval
Keep a heuristic of the shortest 'safe' time between scroll events, used by
scroll and swipe streams to determine when a scroll may have come to rest.
*/

let scrollInterval = config.maxScrollInterval;

export function updateScrollInterval(times) {
    // Dynamically adjust scrollInterval to tighten it up,
    // imposing a baseline of config.minScrollInterval (0.0375s * 1.4)

    let n = times.length;
    let interval = 0;

    while (--n) {
        const t = times[n] - times[n - 1];
        interval = t > interval ? t : interval;
    }

    interval = interval < config.minScrollInterval ?
        config.minScrollInterval :
        interval ;

    scrollInterval = (1.4 * interval) > config.maxScrollInterval ?
        config.maxScrollInterval :
        (1.4 * interval) ;
}

export function getScrollInterval() {
    return scrollInterval;
}
