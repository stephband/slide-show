
/**
slot="fullscreen-button"

Available when the slideshow has `controls="fullscreen"` enabled, this slot
allows the inclusion of html content into the fullscreen button. By default the
slot contains an inline SVG of an icon, and some text (in English). Defining
HTML for the slot replaces that default content:

```html
<slide-show controls="fullscreen">
    <svg slot="fullscreen-button" aria-hidden="true">
        <use href="#fullscreen-icon" />
    </svg>
    <span slot="fullscreen-button">Plein écran</span>
</slide-show>
```
**/

import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';
import events   from '../../dom/modules/events.js';
import { fullscreenEnabled, getFullscreenElement, enterFullscreen, exitFullscreen } from '../../dom/modules/fullscreen.js';

import { $data }          from './consts.js';


export function enable(host) {
    const data = host[$data];

    if (!fullscreenEnabled) {
        if (window.DEBUG) {
            console.warn('<slide-show> fullscreen mode not available in this browser, fullscreen controls not rendered');
        }

        return;
    }

    // Add an object to store navigation state
    const fullscreen = data.fullscreen = {
        button: create('button', {
            part: 'fullscreen-button',
            type: "button",
            name: "fullscreen",
            children: [create('slot', {
                name: 'fullscreen-button',
                html: `
                    <svg viewBox="0 0 40 40" aria-hidden="true">
                        <path class="fullscreen-hidden" d="M9,9 L17,17 M9,15 L9,9 L15,9 M9,31 L17,23 M9,25 L9,31 L15,31 M31,31 L23,23 M25,31 L31,31 L31,25 M31,9 L23,17 M25,9 L31,9 L31,15"></path>
                        <path class="fullscreen-shown"  d="M9,9 L31,31 M9,31 L31,9"></path>
                    </svg>
                    <span class="fullscreen-hidden">Open in fullscreen</span>
                    <span class="fullscreen-shown">Close fullscreen</span>
                `
            })]
        }),
    };

    //data.fullscreen.button.append(text);
    data.controls.append(fullscreen.button);

    fullscreen.changes = events('fullscreenchange', host)
    .filter((e) => getFullscreenElement() === host)
    .each((e) => {
        // Setup fullscreen

        // In Chrome and FF, the fullscreen element receives focus without an
        // explicit tabIndex, in Safari we must encourage it by adding one.
        // When focus is inside a custom element document.activeElement points
        // to the host (or is this true only for closed shadows?)
        if (document.activeElement !== host) {
            fullscreen.tabIndex = host.tabIndex;
            if (host.tabIndex < 0) { host.tabIndex = 0; }
            host.focus();
        }

        // Setup fullscreen exit
        const fullscreenend = events('fullscreenchange', host)
        .each((e) => {
            host.tabIndex = fullscreen.tabIndex;
            fullscreen.tabIndex = undefined;
            fullscreenend.stop();
        });
    });

    fullscreen.clicks = data.clicks.each(delegate({
        // Slotted content does not delegate through it's parent element, but it
        // does delegate through shadow, weirdly
        '[slot="fullscreen-button"], [name="fullscreen"]': (target, e) => {
            const fullscreenCurrent = getFullscreenElement();

            // Make button act as toggle: close the fullscreen
            if (fullscreenCurrent === host) {
                exitFullscreen();
                return;
            }

            if (fullscreenCurrent) {
                exitFullscreen();
            }

            enterFullscreen(host);
        }
    }));
}

export function disable(host) {
    const data = host[$data];
    const fullscreenCurrent = getFullscreenElement();

    if (fullscreenCurrent === host) {
        exitFullscreen();
    }

    data.fullscreen.button.remove();
    data.fullscreen.clicks.stop();
    data.fullscreen.changes.stop();
    data.fullscreen = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.fullscreen;
}
