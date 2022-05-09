
import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';
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

    fullscreen.clicks = data.clicks.each(delegate({
        '[name="fullscreen"]': (button, e) => {
            const fullscreenCurrent = getFullscreenElement();

            // Make button act as toggle: close the fullscreen
            if (fullscreenCurrent === host) {
                exitFullscreen();
                fullscreen.button.part.remove('fullscreen-button-active');
                fullscreen.button.innerHTML = 'Open in fullscreen';
                return;
            }

            if (fullscreenCurrent) {
                exitFullscreen();
            }

            enterFullscreen(host);
            fullscreen.button.part.add('fullscreen-button-active');
            fullscreen.button.innerHTML = 'Close fullscreen';
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
    data.fullscreen = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.fullscreen;
}
