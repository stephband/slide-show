
import nothing  from '../../fn/modules/nothing.js';
import Stream   from '../../fn/stream/stream.js';
import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';

import { enableControls } from './controls.js';


function update(pagination, children, target) {
    const { active, buttons, index } = pagination;

    // Do nothing where target is already the active page-button
    if (active === target) { return; }

    if (index > -1) {
        buttons.children[index].part.remove('page-button-active');
    }

    const i = children.indexOf(target);

    if (i === -1) {
        return;
    }
    buttons.children[i].part.add('page-button-active');
    pagination.index  = i;
    pagination.active = target;
}

function render(controls, pagination, shadow, children) {
    if (pagination.buttons) {
        pagination.buttons.remove();
        pagination.buttons = undefined;
    }

    console.log('PAGINATION RENDER', children.length);

    // Don't generate pagination when there are 0 or 1 slides
    if (children.length < 2) {
        return;
    }

    pagination.buttons = create('div', {
        part: 'pagination',
        children: children.map((slide, i) => create('button', {
            part: 'page-button',
            type: 'button',
            name: 'pagination',
            value: i
        }))
    });

    controls.append(pagination.buttons);
}

export function enablePagination(data, state) {
    const { shadow, actives, clicks } = data;

    // Set up nav::part(controls) element
    enableControls(data);

    // Add an object to store autoplay state
    const pagination = data.pagination = {};

    // Render buttons when children change
    pagination.slotchanges = Stream.merge(
        [nothing],
        data.slotchanges.map((o) => o)
    )
    .each(() => render(data.controls, pagination, shadow, data.children));

    // Create a new stream of actives starting with the current active
    // TODO: Make distributor push initial value?
    pagination.actives = Stream.merge(
        [data.active],
        // TEMP - needs .map() to create a new stream from the distributor
        actives.map((o) => o)
    )
    .each(() => update(pagination, data.children, data.active));

    pagination.clicks = clicks.each(delegate({
        '[name="pagination"]': function(button, e) {
            const { children, host } = data;
            const target = children[button.value];

            if (!target) { return; }
            host.active = target;

            // Preemptively highlight pagination button
            update(pagination, data.children, target);
        }
    }));
}

export function disablePagination(data) {
    data.pagination.buttons.remove();
    data.pagination.slotchanges.stop();
    data.pagination.actives.stop();
    data.pagination.clicks.stop();
    data.pagination = undefined;
}
