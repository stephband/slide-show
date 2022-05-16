
import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';
import events   from '../../dom/modules/events.js';
import { fullscreenEnabled, getFullscreenElement, enterFullscreen, exitFullscreen } from '../../dom/modules/fullscreen.js';

import { $data }          from './consts.js';


export function enable(host) {
    const data = host[$data];

    if (!fullscreenEnabled) {
        if (window.DEBUG) {
            console.warn('Fullscreen mode not available in this browser');
        }

        return;
    }

    // Add an object to store navigation state
    const fullscreen = data.fullscreen = {
        button: create('button', {
            part: 'fullscreen-button',
            type: "button",
            name: "fullscreen",
            html: 'Open in fullscreen'
        }),
    };

    data.controls.append(fullscreen.button);

    fullscreen.changes = events('fullscreenchange webkitfullscreenchange', host)
    .filter((e) => getFullscreenElement() === host)
    .each((e) => {
        // Setup fullscreen
        fullscreen.button.part.add('fullscreen-button-active');
        fullscreen.button.innerHTML = 'Close fullscreen';

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
        const fullscreenend = events('fullscreenchange webkitfullscreenchange', host)
        .each((e) => {
            fullscreen.button.part.remove('fullscreen-button-active');
            fullscreen.button.innerHTML = 'Open in fullscreen';
            host.tabIndex = fullscreen.tabIndex;
            fullscreen.tabIndex = undefined;
            fullscreenend.stop();
        });
    });

    fullscreen.clicks = data.clicks.each(delegate({
        '[name="fullscreen"]': (button, e) => {
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
