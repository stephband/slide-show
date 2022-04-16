
import create   from '../../dom/modules/create.js';
import Stream   from '../../fn/stream/stream.js';
import delegate from '../../dom/modules/delegate.js';


function update(data) {
    //console.log('NAVIGATION UPDATE');

    const { active, children, navigation: { prev, next } } = data;
    const i = children.indexOf(active);

    if (i === 0) {
        prev.hidden = true;
    }
    else {
        prev.hidden = false;
    }

    if (i === children.length - 1) {
        next.hidden = true;
    }
    else {
        next.hidden = false;
    }
}

export function enableNavigation(data, state) {
    const { shadow, clicks } = data;

    // Create a new stream of actives starting with the current active
    // TODO: Make distributor push initial value?
    const actives = Stream.merge(
        [data.active],
        // TEMP - needs .map() to create a new stream from the distributor
        data.actives.map((o) => o)
    );

    const prev = create('button', { part: 'prev-button', name: "navigation", value: "-1", html: 'Previous' });
    const next = create('button', { part: 'next-button', name: "navigation", value: "1", html: 'Next' });
    const nav  = data.nav || (data.nav = create('nav'));
    nav.append(prev, next);
    shadow.append(nav);

    // Add an object to store autoplay state
    const navigation = data.navigation = {
        prev, next, nav
    };

    // Add object for storing navigation state
    navigation.slotchanges = data.slotchanges.each(() => update(data));

    navigation.actives     = actives.each(() => update(data));

    navigation.clicks      = clicks.each(delegate({
        '[name="navigation"]': function(button, e) {
            const { active, children, host } = data;
            const value  = parseFloat(button.value);
            const i      = children.indexOf(active) + value;
            const target = children[i];

            if (!target) { return; }

            host.active = target;

            // Preemptively hide buttons now (before new active is detected at
            // end of scroll)
            if (i === 0) {
                prev.hidden = true;
            }
            else {
                prev.hidden = false;
            }

            if (i === children.length - 1) {
                next.hidden = true;
            }
            else {
                next.hidden = false;
            }
        }
    }));
}

export function disableNavigation(data) {
    data.navigation.prev.remove();
    data.navigation.next.remove();
    data.navigation.nav.remove();
    data.navigation.slotchanges.stop();
    data.navigation.actives.stop();
    data.navigation.clicks.stop();
    data.navigation = undefined;
}
