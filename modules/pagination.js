
import Stream   from 'fn/stream.js';
import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';

import { $data }          from './consts.js';


function update(pagination, children, target) {
    const { active, buttons, index } = pagination;

    // Do nothing where target is already the active page-button
    if (active === target) { return; }

    if (index > -1) {
        pagination.activeSpan.remove();
        buttons.children[index].part.remove('page-button-active');
    }

    const i = children.indexOf(target);
    if (i === -1) { return; }

    buttons.children[i].part.add('page-button-active');
    buttons.children[i].append(pagination.activeSpan);
    pagination.index  = i;
    pagination.active = target;
}

function render(controls, pagination, shadow, children) {
    if (pagination.buttons) {
        pagination.buttons.remove();
        pagination.buttons = undefined;
    }

    // Don't generate pagination when there are 0 or 1 slides
    if (children.length < 2) { return children.length; }

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
    return children.length;
}

export function enable(host) {
    const data = host[$data];
    const { shadow, actives, clicks, mutations } = data;

    // Add an object to store autoplay state
    const pagination = data.pagination = {
        // Element containing accessibility text marking a button as active
        activeSpan: create('span', { class: 'invisible', text: '(Current slide)' })
    };

    // Render buttons when children change
    pagination.mutations = mutations
    .each(() => render(data.controls, pagination, shadow, data.children));

    // Create a new stream of updates that happen when a slide activates and
    // when enough children become available for pagination
    pagination.updates = Stream
    .combine({ active: actives, children: mutations })
    .filter((state) => state.children.length > 1)
    .each((state) => update(pagination, data.children, data.active));

    pagination.clicks = clicks.each(delegate({
        '[name="pagination"]': function(button, e) {
            const { host } = data;
            const children = data.children;
            const target = children[button.value];

            if (!target) { return; }
            host.active = target;

            // Preemptively highlight pagination button
            update(pagination, children, target);
        }
    }));
}

export function disable(host) {
    const data = host[$data];
    data.pagination.buttons.remove();
    data.pagination.mutations.stop();
    data.pagination.updates.stop();
    data.pagination.clicks.stop();
    data.pagination = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.pagination;
}
