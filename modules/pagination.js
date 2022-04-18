
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
    if (children.length < 2) { return; }

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
    const pagination = data.pagination = {
        // Element containing accessibility text marking a button as active
        activeSpan: create('span', { class: 'invisible', text: '(Current slide)' })
    };

    // Render buttons when children change
    pagination.mutations = Stream.merge(
        [nothing],
        data.mutations.map((o) => o)
    )
    .each(() => render(data.controls, pagination, shadow, data.children.filter((slide) => !slide.dataset.slideIndex)));

    // Create a new stream of actives starting with the current active
    // TODO: Make distributor push initial value?
    pagination.actives = Stream.merge(
        [data.active],
        // TEMP - needs .map() to create a new stream from the distributor
        actives.map((o) => o)
    )
    .each(() => update(pagination, data.children.filter((slide) => !slide.dataset.slideIndex), data.active));

    pagination.clicks = clicks.each(delegate({
        '[name="pagination"]': function(button, e) {
            const { host } = data;
            const children = data.children.filter((slide) => !slide.dataset.slideIndex);
            const target = children[button.value];

            if (!target) { return; }
            host.active = target;

            // Preemptively highlight pagination button
            update(pagination, children, target);
        }
    }));
}

export function disablePagination(data) {
    data.pagination.buttons.remove();
    data.pagination.mutations.stop();
    data.pagination.actives.stop();
    data.pagination.clicks.stop();
    data.pagination = undefined;
}
