
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** <slide-show>

Import `<slide-show>` custom element. This registers the custom
element and upgrades instances already in the DOM.

```html
<script type="module" src="./build/element.js"></script>

<slide-show loop controls="navigation">
   <img src="./images/bourg.jpg" draggable="false" />
   <img src="./images/tractor.jpg" draggable="false" />
   <img src="./images/bourg.jpg" draggable="false" />
   <img src="./images/bourg.jpg" draggable="false" />
</slide-show>
```

By default children of `<slide-show>` are interpreted as 'slides', but
elements with a `slot` attribute are not. Slides have default style of
`scroll-snap-align: center`. Apply `start` or `end` to change the alignment.
**/

import nothing     from '../fn/modules/nothing.js';
import Distributor from '../fn/stream/distributor.js';
import Stream      from '../fn/stream/stream.js';
import create      from '../dom/modules/create.js';
import delegate    from '../dom/modules/delegate.js';
import element     from '../dom/modules/element.js';
import events, { isPrimaryButton } from '../dom/modules/events.js';
import gestures    from '../dom/modules/gestures.js';
import Scrolls     from '../dom/modules/scrolls.js';

import { scrollTo, updateActive } from './modules/active.js';
import { processPointers } from './modules/swipe.js';
import { enableAutoplay,   disableAutoplay } from './modules/autoplay.js';
import { enableLoop,       disableLoop } from './modules/loop.js';
import { enableNavigation, disableNavigation } from './modules/navigation.js';
import { enablePagination, disablePagination } from './modules/pagination.js';

const $data = Symbol('data');


/* Slot */

function reflow(data, target) {
    if (window.DEBUG) {
        console.log('%c<slide-show>', 'color: #46789a; font-weight: 600;', 'reflow');
    }

    /*
    this.ignore = true;
    */

    scrollAuto(data.host, data.slot, target);

    // If scrollable, style accordingly. Currently this class simply updates
    // the cursor to ew-resize
    if (data.slot.scrollWidth <= data.slot.clientWidth) {
        data.slot.classList.remove('scrollable')
    }
    else {
        data.slot.classList.add('scrollable');
    }

    data.active = target;
    return data;
}


/* Element */

const lifecycle = {
    // Get path to dir of this module
    stylesheet:
        // Support the old path system baked into the Nendaz project
        window.customElementStylesheetPath && window.customElementStylesheetPath + 'slide-show.shadow.css' ||
        window.elementSlideShowStylesheet ||
        import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'shadow.css',

    /**
    Create a shadow DOM containing:

    ```html
    <!-- The main scrollable grid -->
    <slot part="grid"></slot>
    <!-- With controls="navigation" -->
    <a part="previous" href=""></a>
    <a part="next" href=""></a>
    <!-- With controls="pagination" -->
    <nav>
        <a part="link" href="#id"></a>
        <a part="link" href="#id"></a>
    </nav>
    <!-- With overflow script -->
    <slot name="overflow"></slot>
    ```
    **/

    construct: function(shadow) {
        // Shadow DOM
        const slides   = create('slot', { part: 'slides' });
        const scroller = create('div',  { class: 'scroller', children: [slides] });

        // A place to put optional UI (fullscreen close buttons etc)
        //const optional = create('slot', { name: 'optional', part: 'optional' });
        // A place to put overflow menu stuff
        //const overflow = create('slot', { name: 'overflow', part: 'overflow' });

        // Add slots to shadow
        shadow.append(scroller/*, optional, overflow*/);

        const slotchanges = events('slotchange', slides)
            //.filter(() => !data.ignoreSLOTCHANGE)
            .pipe(new Distributor());
        const clicks      = events('click', shadow).filter(isPrimaryButton).pipe(new Distributor());
        const focuses     = events('focusin', this);
        const resizes     = events('resize', window).pipe(new Distributor());
        const fullscreens = events('fullscreenchange', window);
        const scrolls     = Scrolls(scroller).pipe(new Distributor());
        const swipes      = gestures({ threshold: '0.25rem', device: 'mouse' }, shadow).filter(() => data.children.length > 1);
        const actives     = Stream.of().pipe(new Distributor());
        const clickables  = {};

        // Private data
        const data = this[$data] = {
            clickSuppressTime: -Infinity,
            host:     this,
            children: nothing,
            style:    window.getComputedStyle(this),
            shadow,
            scroller,
            slides,
            actives,
            scrolls,
            slotchanges,
            clicks,
            resizes,
            fullscreens,
            swipes
        };

        /*const actives = new Stream((source) => {
            source.push = function(node) {
                console.log('PUSH ACTIVE');
                trigger('slide-active', node);
            };
        });*/

        const reflows = Stream.of().reduce(reflow, data);

        slotchanges.each(() =>
            data.children = slides.assignedElements()
        );

        // Hijack links to slides to avoid the document scrolling, (but make
        // sure they go in the history anyway, or not)


        // Prevent default on immediate clicks after a gesture, and don't let
        // them out: this is a gesture not a click
        clicks.each(function(e) {
            const time = window.performance.now();
            if (time - data.clickSuppressTime < 120) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // Enable single finger scroll on mouse devices. Bad idea in my opinion,
        // but designers tend to want it.
        swipes.each((pointers) => {
            // We keep a reference to pointers so that it may be stopped inside
            // processPointers
            data.pointers = pointers;
            pointers.reduce(processPointers, data);
        });

        // Reposition everything on resize
        /*resizes.each(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => reflows.push(data.active || this.firstElementChild), 120);
        });*/

        fullscreens.each((e) => {
            // If this slide-show was involved in the fullscreen change
            if (e.target === this || e.target.contains(this)) {
                //this.actives.push(this.active);
            }
        });

        scrolls.each((stream) =>
            stream
            /* TEMP Only here so the stream is started, not needed when distributed */
            .each(() => {})
            .done(() => updateActive(data))
        );

        // Chrome behaves nicely when shifting focus between slides, Safari and
        // FF not so much. Let's give them a helping hand at displaying the
        // focused slide. Todo: FF not getting this.
        focuses.each((e) => {
            const target =
                // Is e.target a slide
                data.children.indexOf(e.target) !== -1 ? e.target :
                // Or inside a slide
                data.children.find((child) => child.contains(e.target)) ;

            // Or in some other slot
            if (!target) { return; }

            scrollTo(data.scroller, target)
        });
    },

    load: function (shadow) {
        const data = this[$data];
        data.loaded = true;

        // If loop is off we must set up the slider:before width hack now we
        // have some style loaded.
        if (this.loop) {
            enableLoop(data);
        }
        else {
            disableLoop(data);
        }

        // Update and bind to slotchanges on load so that initial `slide-active`
        // event is guaranteed to be sent after initialisation. (In Chrome and
        // FF initial `slotchange` event is always sent before load, but not so
        // in Safari where either order may happen.)
        updateActive(data);
        data.slotchanges.each(() => updateActive(data));
    }
};

const properties = {
    active: {
        /**
        .active
        Returns the currently active child element - the current slide.

        ```js
        const activeSlideElement = slideshow.active;
        ```

        May be set to one of the child elements, or to the id of one of the
        child elements. Setting this property causes the slide to change.

        ```js
        slideshow.active = 'slide-1';
        ```
        **/

        set: function(target) {
            const data = this[$data];

            // Accept an id
            const child = typeof target !== 'object' ?
                this.querySelector('#' + (/^\d/.test((id + '')[0]) ?
                    '\\3' + (id + '')[0] + ' ' + (id + '').slice(1) :
                    target)
                ) : target ;

            if (!child) {
                throw new Error('Cannot set active – not a child of slide-show');
            }

            scrollTo(data.scroller, child);
        },

        get: function() {
            return this[$data].active;
        }
    },

    autoplay: {
        /**
        autoplay=""
        Boolean attribute. When present the slide-show activates the next
        slide after a pause. The pause duration may be set in CSS via the
        `--slide-duration` variable.
        **/
        attribute: function(value) {
            // Delegate to property
            this.autoplay = (value !== null);
        },

        /**
        .autoplay
        Boolean property. When `true` the slide-show activates the next
        slide after a pause. The pause duration may be set in CSS via the
        `--slide-duration` variable.
        **/
        set: function(state) {
            const data = this[$data];
            return !state === !data.autoplay ?
                undefined :
                state ?
                    enableAutoplay(data) :
                    disableAutoplay(data) ;
        },

        get: function() {
            const data = this[$data];
            return !!data.autoplay;
        }
    },

    controls: {
        /**
        controls=""

        Treated as a boolean or a token list. If it is present but empty
        all tokens are considered to be true. Otherwise, possible tokens are:

        <strong>navigation</strong> enables previous and next buttons. The
        buttons may be styled with `::part(previous)` and `::part(next)`
        selectors. To change their text content, import and modify
        `config.trans`:

        ```js
        import { config } from './bolt/elements/slide-show/module.js';
        config.trans['Previous'] = 'Précédent';
        config.trans['Next']     = 'Suivant';
        ```

        <strong>pagination</strong> enables a row of pagination dots. The
        dots may be styled with `::part(page)`.
        **/
        attribute: function(value) {
            const data = this[$data];
            let navigationState, paginationState;

            // If value is a string of tokens
            if (typeof value === 'string' && value !== '') {
                const state = value.split(/\s+/);
                navigationState = state.includes('navigation');
                paginationState = state.includes('pagination');
            }
            else {
                const state = value !== null;
                navigationState = state;
                paginationState = state;
            }

            if (!!navigationState !== !!data.navigation) {
                if (navigationState) {
                    enableNavigation(data);
                }
                else {
                    disableNavigation(data);
                }
            }

            if (!!paginationState !== !!data.pagination) {
                if (paginationState) {
                    enablePagination(data);
                }
                else {
                    disablePagination(data);
                }
            }
        }
    },

    loop: {
        /**
        loop=""
        Boolean attribute. Makes the slideshow behave as a continuous loop.
        **/
        attribute: function(value) {
            // Delegate to property
            this.loop = (value !== null);
        },

        /**
        .loop
        Boolean property. Makes the slideshow behave as a continuous loop.
        **/
        set: function(state) {
            const data = this[$data];
            return !state === !data.loop ?
                undefined :
                state ?
                    enableLoop(data) :
                    disableLoop(data) ;
        },

        get: function() {
            const data = this[$data];
            return !!data.loop;
        }
    }
};

export default element('slide-show', lifecycle, properties);
