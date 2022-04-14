
/* Autoplay */
/*
function change() {
    this.timer   = null;
    const target = next(this.view.active);

    // Have we reached the end?
    if (!target) { return; }

    scrollSmooth(this.view.element, this.view.slot, target);
}
*/
function updateAutoplay(data, active) {
    console.log('updateAutoplay');
/*
    if (!active) { return; }

    if (this.timer) {
        clearTimeout(this.timer);
    }

    // Set a new autoplay timeout
    const duration = parseTime(
        window
        .getComputedStyle(this.view.active)
        .getPropertyValue('--duration') || config.duration
    );

    this.timer = setTimeout(() => this.change(), duration * 1000);
*/
}

export function setupAutoplay() {
    const update = new Stream((stream) => stream.each(updateAutoplay));

    data.reflows.pipe(update);
    data.activates.pipe(render);
    data.autoplay = { update, render };
    /*
    this.activates.on(this.activateFn = (active) => this.activate(active));

    if (this.view.active) {
        this.activate(this.view.active);
    }

    // Expose state as loop view needs to know about autoplay
    this.state = true;
    */
}

export function teardownAutoplay() {
    const { update, render } = data.loop;
    update.stop();
    render.stop();
    data.autoplay = undefined;

    /*
    this.timer && clearTimeout(this.timer);
    this.activates.off(this.activateFn);
    this.state  = false;
    */
}

