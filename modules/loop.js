

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

export function setupLoop() {
    const update = new Stream((stream) => stream.each(updateLoop));
    const render = new Stream((stream) => stream.each(renderLoop));

    data.reflows.pipe(update);
    data.activates.pipe(render);
    data.loop = { update, render };

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

export function teardownLoop() {
    const { update, render } = data.loop;
    update.stop();
    render.stop();
    data.loop = undefined;

    /*
    this.remove();
    this.slotchanges.off(this.slotchangeFn);
    this.slotchangeFn = undefined;
    this.scrollends.stop();
    */
}
