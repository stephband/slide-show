
/* Navigation */

function updateNavigation(data, active) {
    console.log('updateNavigation');

    /*
    // Change href of prev and next buttons, and hide them where there are
    // no previous or next siblings. Href updates are purely a help for the
    // end user, as we pick up clicks on part(previous) and part(next)
    // before we interrogate link hrefs.

    if (this.slot.scrollWidth <= this.slot.clientWidth) {
        // Nowhere to scroll to
        this.previous.hidden = true;
        this.next.hidden = true;
        return;
    }

    const prevChild = previous(active);

    if (prevChild) {
        this.previous.hidden = false;
        this.previous.href = '#' + (prevChild.id || prevChild.dataset.loopId);
    }
    else {
        this.previous.hidden = true;
    }

    const nextChild = next(active);
    if (nextChild) {
        this.next.hidden = false;
        this.next.href = '#' + (nextChild.id || nextChild.dataset.loopId);
    }
    else {
        this.next.hidden = true;
    }

    /* console.log(
        'previous', prevChild && Array.prototype.indexOf.call(prevChild.parentNode.children, prevChild),
        'active', active && Array.prototype.indexOf.call(active.parentNode.children, active),
        'next', nextChild && Array.prototype.indexOf.call(nextChild.parentNode.children, nextChild)
    ); */
}

function renderNavigation(data, active) {
    console.log('renderNavigation');
    /*
    this.previous.style.setProperty('display', items.length < 2 ? 'none' : '');
    this.next.style.setProperty('display', items.length < 2 ? 'none' : '');
    return items;
    */
}

export function setupNavigation(data, state) {
    const update = new Stream((stream) => stream.each(updateNavigation));
    const render = new Stream((stream) => stream.each(renderNavigation));

    data.reflows.pipe(update);
    data.activates.pipe(render);
    data.navigation = { update, render };
    /*
    this.previous = create('a', { part: 'previous', html: config.trans['Previous'] });
    this.next     = create('a', { part: 'next', html: config.trans['Next'] });
    this.parent.appendChild(this.previous);
    this.parent.appendChild(this.next);
    this.activates.on(this.activateFn = (active) => this.activate(active));
    this.changes.on(this.changesFn = (items) => this.slotchange(items));
    */
}

export function teardownNavigation() {
    const { update, render } = data.navigation;
    update.stop();
    render.stop();
    data.navigation = undefined;

    /*
    this.previous.remove();
    this.next.remove();
    this.previous = undefined;
    this.next = undefined;
    this.activates.off(this.activateFn);
    this.activateFn = undefined;
    this.changes.off(this.changesFn);
    this.changesFn = undefined;
    */
}
