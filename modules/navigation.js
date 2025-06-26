
/**
slot="previous"

Available when the slideshow has `controls="navigation"` enabled, this slot
allows the inclusion of html content into the 'previous' navigation button. By
default the slot contains an inline SVG of an icon, and some text (in English).
Defining HTML for the slot replaces that default content:

```html
<slide-show controls="navigation">
    <svg slot="previous" aria-hidden="true">
        <use href="#back-icon" />
    </svg>
    <span slot="previous">Dernière</span>
</slide-show>
```
**/

/**
slot="next"
Available when the slideshow has `controls="navigation"` enabled, this slot
allows the inclusion of html content into the 'next' navigation button. By
default the slot contains an inline SVG of an icon, and some text (in English).
Defining HTML for the slot replaces that default content:

```html
<slide-show controls="navigation">
    <svg slot="next" aria-hidden="true">
        <use href="#forward-icon" />
    </svg>
    <span slot="next">Prochaine</span>
</slide-show>
```
**/

import Stream   from 'fn/stream.js';
import create   from 'dom/create.js';
import delegate from 'dom/delegate.js';

import { activatePrevious, activateNext, activateIndex } from './active.js';
import { $data }         from './consts.js';

function update(slides, prev, next, elements, i) {
    // Preemptively hide buttons now (before new active is detected at
    // end of scroll)
    if (i === 0 || slides.scrollLeft === 0) {
        prev.disabled = true;
        //prev.style.visibility = 'hidden';
    }
    else {
        prev.disabled = false;
        //prev.style.visibility = '';
    }

    if (i === elements.length - 1 || slides.scrollLeft >= slides.scrollWidth - slides.clientWidth) {
        next.disabled = true;
        //next.style.visibility = 'hidden';
    }
    else {
        next.disabled = false;
        //next.style.visibility = '';
    }
}

export function enable(host) {
    const data = host[$data];
    const { actives, clicks, slotchanges, slides, scrolls } = data;

    // Add an object to store navigation state
    const navigation = data.navigation = {
        prev: create('button', {
            part: 'previous',
            type: "button",
            name: "navigation",
            value: "-1",
            children: [create('slot', {
                name: 'previous',
                html: `
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M19,9 L9,20 L19,31"></path>
                    </svg>
                    Previous
                `
            })]
        }),

        next: create('button', {
            part: 'next',
            type: "button",
            name: "navigation",
            value: "1",
            children: [create('slot', {
                name: 'next',
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
        slides,
        navigation.prev,
        navigation.next,
        state.changes.elements,
        state.changes.elements.indexOf(state.active)
    ));

    navigation.clicks = clicks.each(delegate({
        // Slotted content does not delegate through it's parent element, but it
        // does delegate through shadow, weirdly
        '[slot="previous"]':   (node, e) => activatePrevious(host, data.elements, data.active),
        '[slot="next"]':       (node, e) => activateNext(host, data.elements, data.active),
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
