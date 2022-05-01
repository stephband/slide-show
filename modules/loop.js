
import rect from '../../dom/modules/rect.js';

import { $data }  from './consts.js';
import { jumpTo } from './active.js';


const loopOverflow = 2400;


function toLoopGhost(slide, i) {
    const ghost = slide.cloneNode(true);
    ghost.dataset.slideIndex = i;
    ghost.removeAttribute('id');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.tabIndex = '-1';
    return ghost;
}

function render(data) {
    const { active, children, host, scroller } = data;

    if (children.length < 2) {
        return;
    }

    // Expand children to the left and right by loopOverflow px
    const boxes = children.map(rect);
    const left  = boxes[0].left;
    const right = boxes[boxes.length - 1].right;

    let n = 0;
    while (boxes[++n] && boxes[n].left < left + loopOverflow);
    const appends = children.slice(0, n).map(toLoopGhost);

    n = boxes.length - 1;
    while (boxes[--n] && boxes[n].right > right - loopOverflow);
    const prepends = children.slice(++n).map((slide, i) => toLoopGhost(slide, n + i));

    host.prepend.apply(host, prepends);
    host.append.apply(host, appends);

    data.loop.prepends = prepends;
    data.loop.appends  = appends;

    jumpTo(scroller, active || children[0]);
}

export function enable(host) {
    const data = host[$data];
    const { mutations } = data;

    // Add an object to store loop state
    const loop = data.loop = {};

    if (!data.loaded) {
        return;
    }

    // Render buttons when children change
    loop.mutations = mutations.each(() => render(data));
}

export function disable(host) {
    const data = host[$data];
    if (data.loop) {
        data.loop.prepends && data.loop.prepends.forEach((slide) => slide.remove());
        data.loop.appends  && data.loop.appends.forEach((slide) => slide.remove());
        data.loop.mutations.stop();
        data.loop = undefined;
    }
}

export function getState(host) {
    const data = host[$data];
    return !!data.loop;
}
