
import create      from 'https://stephen.band/dom/modules/create.js';


/* Navigation */

function update(data, active) {
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
    const { shadow } = data;

    const prev = create('a', { part: 'previous', html: config.trans['Previous'] });
    const next = create('a', { part: 'next', html: config.trans['Next'] });
    const nav  = data.nav || (data.nav = create('nav'));
    nav.append(prev, next);
    shadow.append(nav);

    // Add object for storing navigation state
    data.navigation = {
        slotchanges: data.slotchanges.each(() => update(data)),
        actives: data.actives.each(() => update(data)),
        prev,
        next
    };
}

export function teardownNavigation() {
    data.navigation.prev.remove();
    data.navigation.next.remove();
    data.navigation.slotchanges.stop();
    data.navigation.actives.stop();
    data.navigation = undefined;
}
