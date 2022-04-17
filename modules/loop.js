
import nothing from '../../fn/modules/nothing.js';
import Stream  from '../../fn/stream/stream.js';
import rect    from '../../dom/modules/rect.js';
import { px }  from '../../dom/modules/parse-length.js';

import { jumpTo } from './active.js';

const loopOverflow = 800;


function toLoopGhost(slide, i) {
    const ghost = slide.cloneNode(true);
    ghost.dataset.slideIndex = i;
    ghost.removeAttribute('id');
    ghost.setAttribute('aria-hidden', 'true');
    return ghost;
}

function render(data) {
    if (data.ignoreSLOTCHANGE) {
        return;
    }

    console.log('renderLoop');

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

    data.ignoreSLOTCHANGE = true;

    // Will cause slotchange event
    console.log('LOOP RENDER', prepends.length, appends.length, active);
    host.prepend.apply(host, prepends);
    host.append.apply(host, appends);

    data.loop.prepends = prepends;
    data.loop.appends  = appends;

    jumpTo(scroller, active || children[0]);
}

function getWidth(scroller, slides, children) {
    let n = children.length;
    let r = -Infinity;

    while (n--) {
        const box   = rect(children[n]);
        const right = box.x + box.width;
        r = right > r ? right : r;
    }

    const box   = rect(slides);
    const style = getComputedStyle(scroller);
    const pl    = px(style.paddingLeft);
    const pr    = px(style.paddingRight);

    return pl + pr + r - box.x;
}



export function enableLoop(data) {
    if (data.noloop) {
        data.noloop.slotchanges.stop();
        data.noloop.resizes.stop();
        data.noloop = undefined;
    }

    const { scroller, slotchanges } = data;

    // Add an object to store loop state
    const loop = data.loop = {};

    if (!data.loaded) {
        return;
    }

    // Negate width hack
    scroller.style.setProperty('--scroll-width', '0');

    // Render buttons when children change
    loop.slotchanges = Stream.merge(
        [nothing],
        slotchanges.map((o) => o)
    )
    .each(() => render(data));
}

export function disableLoop(data) {
    if (data.loop) {
        data.loop.prepends && data.loop.prepends.forEach((slide) => slide.remove());
        data.loop.appends  && data.loop.appends.forEach((slide) => slide.remove());
        data.loop.slotchanges.stop();
        data.loop.actives.stop();
        data.loop = undefined;
    }

    const { children, scroller, slides, slotchanges, resizes } = data;

    function updateWidth(e) {
        const width = getWidth(scroller, slides, children);
        scroller.style.setProperty('--scroll-width', width + 'px');
    }

    data.noloop = {
        slotchanges: Stream.merge([{}], slotchanges, resizes).each(updateWidth),
        resizes:     resizes.each(updateWidth)
    };
}
