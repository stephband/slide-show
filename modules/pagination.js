

/* Pagination */

function addPartOn(node) {
    node.part.add('on');
}

function removePartOn(node) {
    node.part.remove('on');
}

function updatePagination(data, active) {
    console.log('updatePagination');

    /*
    const shadow = this.shadow;

    // Remove `on` class from currently highlighted links
    if (this.active) {
        const id = this.active.dataset && this.active.dataset.loopId || this.active.id;
        select('[href="#' + id +'"]', shadow).forEach(removePartOn)
    }

    // Highlight links with `on` class
    const id = active.dataset.loopId || active.id;
    select('[href="#' + id +'"]', shadow).forEach(addPartOn);

    // Keep a note of currently active
    this.active = active;
    */
}

function renderPagination(data, active) {
    console.log('renderPagination');

    /*
    const view     = this.view;
    const children = view.children;

    // Empty nav then create a dot link for each slide
    this.pagination.innerHTML = '';

    // Don't generate pagination when there are 0 or 1 slides
    if (items.length < 2) {
        return;
    }

    children.forEach((slide) => {
        // Id other content and create nav links for them
        const id = slide.id;
        this.pagination.appendChild(create('a', {
            part: view.active === slide ? 'link on' : 'link',
            href: '#' + id,
            html: id
        }));
    });

    return items;
    */
}

export function setupPagination(data, state) {
    const update = new Stream((stream) => stream.each(updatePagination));
    const render = new Stream((stream) => stream.each(renderPagination));

    data.reflows.pipe(update);
    data.activates.pipe(render);
    data.pagination = { update, render };

    /*
    this.pagination = create('nav', {
        part: 'pagination'
    });

    this.slotchange(this.view.children);
    this.shadow.appendChild(this.pagination);
    this.actives.on(this.activateFn = (active) => this.activate(active));
    this.slotchanges.on(this.slotchangeFn = (items) => this.slotchange(items));
    */
}

export function teardownPagination() {
    const { update, render } = data.pagination;
    update.stop();
    render.stop();
    data.pagination = undefined;

    /*
    this.pagination.remove();
    this.pagination = undefined;
    this.actives.off(this.activateFn);
    this.slotchanges.off(this.slotchangeFn);
    */
}
