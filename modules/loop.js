
import Stream from '../../fn/stream/stream.js';
import rect   from '../../dom/modules/rect.js';
import { px } from '../../dom/modules/parse-length.js';

/* Loop */

function createLoopGhost(slide) {
    const ghost = slide.cloneNode(true);
    ghost.dataset.loopId = ghost.id;
    ghost.removeAttribute('id');
    ghost.setAttribute('aria-hidden', 'true');
    return ghost;
}

function updateLoop(data, active) {
    console.log('updateLoop');
    /*
    const id = this.view.active.dataset.loopId;

    // Active child is an original slide, not a copy: do nothing
    if (!id) { return; }

    // Realign the original slide as the active slide.
    const target = this.element.getRootNode().getElementById(id);
    this.view.reposition(target);
    this.view.actives.push(target);
    */
}

function renderLoop(data, active) {
    console.log('renderLoop');
    /*
    const view     = this.view;
    const children = view.children;

    // Will trigger a slotchange
    this.remove();
    this.add(children);

    // This was originally AFTER the loop and nav stuff...
    if (view.active) {
        view.reposition(view.active);
    }

    return items;
    */
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

export function initialiseLoop(data) {
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

export function enableLoop(data) {
    if (data.noloop) {
        data.noloop.slotchanges.stop();
        data.noloop.resizes.stop();
        data.noloop = undefined;
    }

    //const update = new Stream((stream) => stream.each(updateLoop));
    //const render = new Stream((stream) => stream.each(renderLoop));

    //data.reflows.pipe(update);
    //data.activates.pipe(render);
    //data.loop = { update, render };

    /*
    const view     = this.view;
    const children = view.children;

    this.add(children);
    this.slotchanges.on(this.slotchangeFn = (items) => this.slotchange(items));
    this.scrollends = scrollends(this.view.slot).each((e) => {
        // Ignore scrollends while a finger is gesturing
        if (this.view.gesturing) { return; }
        this.update();
    });

    if (view.active) {
        this.view.reposition(view.active);
    }
    */
}

export function disableLoop(data) {
    //const { update, render } = data.loop;
    //update.stop();
    //render.stop();
    //data.loop = undefined;

    /*
    this.remove();
    this.slotchanges.off(this.slotchangeFn);
    this.slotchangeFn = undefined;
    this.scrollends.stop();
    */

    initialiseLoop(data);
}
