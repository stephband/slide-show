
import rect   from '../../dom/modules/rect.js';

import { $data }  from './consts.js';
import { jumpTo } from './active.js';


function toLoopGhost(slide, i) {
    const ghost = slide.cloneNode(true);
    ghost.dataset.slideIndex = i;
    ghost.removeAttribute('id');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.tabIndex = '-1';
    return ghost;
}

function render(data) {
    const { active, children, host, slides } = data;

    if (data.loop.prepends) {
        data.loop.prepends.forEach((slide) => slide.remove());
        data.loop.appends.forEach((slide) => slide.remove());
        data.loop.prepends = undefined;
        data.loop.appends = undefined;
    }

    if (children.length < 2) {
        // Dont wait for the slotchange event, which is fired after the one
        // that caused this render has completed. Synchronously update
        // data.elements or our state is out of sync for the activation of
        // other components.
        data.elements = data.slot.assignedElements();
        return;
    }

    // Expand children to the left and right by at least 1 slide plus the width
    // of the host slide-show. Todo: by rights, this should change on resize.
    const loopOverflow = host.clientWidth;
    const boxes        = children.map(rect);
    const left         = boxes[1].left;
    const right        = boxes[boxes.length - 2].right;

    // Always append a minimum of 1 slide
    let n = 1;
    while (boxes[++n] && boxes[n].left < left + loopOverflow);
    const appends = children.slice(0, n).map(toLoopGhost);

    // Always prepend a minimum of 1 slide
    n = boxes.length - 2;
    while (boxes[--n] && boxes[n].right > right - loopOverflow);
    const prepends = children.slice(++n).map((slide, i) => toLoopGhost(slide, n + i));

    host.prepend.apply(host, prepends);
    host.append.apply(host, appends);
    data.loop.prepends = prepends;
    data.loop.appends  = appends;

    // Dont wait for the slotchange event, which is fired after the one
    // that caused this render has completed. Synchronously update
    // data.elements or our state is out of sync for the activation of
    // other components.
    data.elements = data.slot.assignedElements();

    jumpTo(slides, active || children[0]);
}

export function enable(host) {
    const data = host[$data];
    const { mutations } = data;

    // Add an object to store loop state
    const loop = data.loop = {};

    // Render ghosts when children change
    loop.renders = mutations.each((children) => render(data));
}

export function disable(host) {
    const data = host[$data];
    if (data.loop) {
        data.loop.prepends && data.loop.prepends.forEach((slide) => slide.remove());
        data.loop.appends  && data.loop.appends.forEach((slide) => slide.remove());
        data.loop.renders.stop();
        data.loop = undefined;
    }
}

export function getState(host) {
    const data = host[$data];
    return !!data.loop;
}
