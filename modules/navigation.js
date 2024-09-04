
/**
slot="prev-button"

Available when the slideshow has `controls="navigation"` enabled, this slot
allows the inclusion of html content into the 'previous' navigation button. By
default the slot contains an inline SVG of an icon, and some text (in English).
Defining HTML for the slot replaces that default content:

```html
<slide-show controls="navigation">
    <svg slot="prev-button" aria-hidden="true">
        <use href="#back-icon" />
    </svg>
    <span slot="prev-button">Dernière</span>
</slide-show>
```
**/

/**
slot="next-button"
Available when the slideshow has `controls="navigation"` enabled, this slot
allows the inclusion of html content into the 'next' navigation button. By
default the slot contains an inline SVG of an icon, and some text (in English).
Defining HTML for the slot replaces that default content:

```html
<slide-show controls="navigation">
    <svg slot="next-button" aria-hidden="true">
        <use href="#forward-icon" />
    </svg>
    <span slot="next-button">Prochaine</span>
</slide-show>
```
**/

import Stream   from 'fn/stream.js';
import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';

import { activatePrevious, activateNext, activateIndex } from './active.js';
import { $data }         from './consts.js';

function update(scroller, prev, next, elements, i) {
    // Preemptively hide buttons now (before new active is detected at
    // end of scroll)
    if (i === 0 || scroller.scrollLeft === 0) {
        prev.hidden = true;
    }
    else {
        prev.hidden = false;
    }

    if (i === elements.length - 1 || scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
        next.hidden = true;
    }
    else {
        next.hidden = false;
    }
}

export function enable(host) {
    const data = host[$data];
    const { actives, clicks, slotchanges, scroller, scrolls } = data;

    // Add an object to store navigation state
    const navigation = data.navigation = {
        prev: create('button', {
            part: 'prev-button',
            type: "button",
            name: "navigation",
            value: "-1",
            children: [create('slot', {
                name: 'prev-button',
                html: `
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M19,9 L9,20 L19,31"></path>
                    </svg>
                    Previous
                `
            })]
        }),

        next: create('button', {
            part: 'next-button',
            type: "button",
            name: "navigation",
            value: "1",
            children: [create('slot', {
                name: 'next-button',
                html: `
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M11,9 L21,20 L11,31"></path>
                    </svg>
                    Next
                `
            })]
        })
    };

    data.controls.prepend(navigation.prev, navigation.next);

    // Create a stream of updates starting with the current active
    navigation.updates = Stream
    .combine({ active: actives, changes: slotchanges, scroll: scrolls })
    .each((state) => update(
        scroller,
        navigation.prev,
        navigation.next,
        state.changes.elements,
        state.changes.elements.indexOf(state.active)
    ));

    navigation.clicks = clicks.each(delegate({
        // Slotted content does not delegate through it's parent element, but it
        // does delegate through shadow, weirdly
        '[slot="prev-button"]': (node, e) => {
            activatePrevious(host, data.elements, data.active);
        },

        '[slot="next-button"]': (node, e) => {
            activateNext(host, data.elements, data.active);
        },

        '[name="navigation"]': (button, e) => {
            const i = data.elements.indexOf(data.active) + parseFloat(button.value);
            activateIndex(host, data.elements, i);
        }
    }));
}

export function disable(host) {
    const data = host[$data];
    data.navigation.prev.remove();
    data.navigation.next.remove();
    data.navigation.updates.stop();
    data.navigation.clicks.stop();
    data.navigation = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.navigation;
}
