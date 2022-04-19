
import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';

import { $data }  from './consts.js';
import { enableControls } from './controls.js';

function updateButtons(prev, next, elements, i) {
    // Preemptively hide buttons now (before new active is detected at
    // end of scroll)
    if (i === 0) {
        prev.hidden = true;
    }
    else {
        prev.hidden = false;
    }

    if (i === elements.length - 1) {
        next.hidden = true;
    }
    else {
        next.hidden = false;
    }
}

function update(data) {
    const { active, elements, navigation: { prev, next } } = data;
    const i = elements.indexOf(active);
    updateButtons(prev, next, elements, i)
}

export function enable(host) {
    const data = host[$data];
    const { actives, clicks, mutations } = data;

    // Set up nav::part(controls) element
    enableControls(data);

    // Add an object to store navigation state
    const navigation = data.navigation = {
        prev: create('button', { part: 'prev-button', type: "button", name: "navigation", value: "-1", html: 'Previous' }),
        next: create('button', { part: 'next-button', type: "button", name: "navigation", value: "1", html: 'Next' })
    };

    data.controls.prepend(navigation.prev, navigation.next);

    // Add object for storing navigation state
    navigation.mutations = mutations.each(() => update(data));

    // Create a new stream of actives starting with the current active
    navigation.actives = actives.each(() => update(data));

    navigation.clicks = clicks.each(delegate({
        '[name="navigation"]': function(button, e) {
            const value  = parseFloat(button.value);
            const i      = data.elements.indexOf(data.active) + value;
            const target = data.elements[i];

            if (!target) { return; }

            host.active = target;
            updateButtons(navigation.prev, navigation.next, data.elements, i);
        }
    }));
}

export function disable(host) {
    const data = host[$data];
    data.navigation.prev.remove();
    data.navigation.next.remove();
    data.navigation.mutations.stop();
    data.navigation.actives.stop();
    data.navigation.clicks.stop();
    data.navigation = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.navigation;
}
