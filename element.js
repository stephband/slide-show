
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** <slide-show>

Import `<slide-show>` custom element. This registers the custom
element and upgrades instances already in the DOM.

```html
<script type="module" src="./build/element.js"></script>

<slide-show loop controls="navigation">
   <img src="./images/donkeys.jpg" draggable="false" />
   <img src="./images/tractor.jpg" draggable="false" />
   <img src="./images/mauverin.jpg" draggable="false" />
</slide-show>
```

Children of a `<slide-show>` are displayed as slides in a horizontal grid.
**/

import equals      from '../fn/modules/equals.js';
import noop        from '../fn/modules/noop.js';
import nothing     from '../fn/modules/nothing.js';
import Distributor from '../fn/modules/stream/distributor.js';
import Stream      from '../fn/modules/stream.js';
import create      from '../dom/modules/create.js';
import delegate    from '../dom/modules/delegate.js';
import element     from '../dom/modules/element.js';
import events, { isPrimaryButton } from '../dom/modules/events.js';
import gestures    from '../dom/modules/gestures.js';
import { px }      from '../dom/modules/parse-length.js';
import rect        from '../dom/modules/rect.js';
import Scrolls     from '../dom/modules/scrolls.js';

import { scrollTo, jumpTo, updateActive } from './modules/active.js';
import { processPointers } from './modules/swipe.js';
import { enableAutoplay, disableAutoplay } from './modules/autoplay.js';
import { enableLoop, disableLoop, isSlide } from './modules/loop.js';
import { enableNavigation, disableNavigation } from './modules/navigation.js';
import { enablePagination, disablePagination } from './modules/pagination.js';
import { enableFullscreen, disableFullscreen } from './modules/fullscreen.js';

const $data = Symbol('data');


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

function updateWidth(scroller, slides, children) {
    const width = getWidth(scroller, slides, children);
    scroller.style.setProperty('--scroll-width', width + 'px');
}


/* Element */

const lifecycle = {
    // Get path to dir of this module
    stylesheet:
        // Support the old path system baked into the Nendaz project
        window.customElementStylesheetPath && window.customElementStylesheetPath + 'slide-show.shadow.css' ||
        window.elementSlideShowStylesheet ||
        import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'shadow.css',

    construct: function(shadow) {
        // Shadow DOM
        const slides   = create('slot', { part: 'slides' });
        const scroller = create('div',  { class: 'scroller', children: [slides] });

        // A place to put optional UI (fullscreen close buttons etc)
        //const optional = create('slot', { name: 'ui', part: 'ui' });

        // Add slots to shadow
        shadow.append(scroller);

        const slotchanges  = events('slotchange', slides).distribute();
        const mutations    = Stream.of().distribute({ memory: true });
        const clicks       = events('click', shadow).filter(isPrimaryButton).distribute();
        const focuses      = events('focusin', this);
        const resizes      = events('resize', window);
        const fullscreens  = events('fullscreenchange', window);
        const scrolls      = Scrolls(scroller);
        const swipes       = gestures({ threshold: '0.25rem', device: 'mouse' }, shadow).filter(() => data.children.length > 1);
        const actives      = Stream.of().distribute({ memory: true });

        // Private data
        const data = this[$data] = {
            clickSuppressTime: -Infinity,
            host:     this,
            style:    window.getComputedStyle(this),
            elements: nothing,
            children: nothing,
            shadow,
            scroller,
            slides,
            actives,
            slotchanges,
            mutations,
            clicks
        };

        slotchanges.each(() => {
            const elements = slides.assignedElements();
            data.elements = elements;
            updateWidth(data.scroller, data.slides, data.elements);

            const children = data.elements.filter(isSlide);
            if (!equals(data.children, children)) {
                data.children = children;
                mutations.push(children);
            }
        });

        resizes.each(() =>
            updateWidth(data.scroller, data.slides, data.elements)
        );

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
            // Keep a reference to pointers, it's used inside processPointers
            data.pointers = pointers;
            pointers.reduce(processPointers, data);
        });

        fullscreens.each((e) => {
            // If this slide-show was involved in the fullscreen change
            // reposition the active slide, it may have been shuftied.
            if (e.target === this || e.target.contains(this)) {
                jumpTo(scroller, data.active);
            }
        });

        scrolls.each((stream) =>
            stream
            .each(noop)
            .done(() => updateActive(data))
        );

        // Chrome behaves nicely when shifting focus between slides, Safari and
        // FF not so much. Let's give them a helping hand at displaying the
        // focused slide. Todo: FF not getting this.
        focuses.map((e) =>
            // Is e.target a slide
            data.children.indexOf(e.target) !== -1 ? e.target :
            // Or inside a slide
            data.children.find((child) => child.contains(e.target))
        )
        .each((target) => scrollTo(data.scroller, target));
    },

    load: function (shadow) {
        const data = this[$data];
        data.loaded = true;

        if (this.loop) {
            enableLoop(data);
        }
        else {
            disableLoop(data);
        }

        // Update width hack now we have some style loaded
        updateWidth(data.scroller, data.slides, data.elements);

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
        Returns the currently scroll-snapped child element.

        ```js
        const activeSlide = slideshow.active;
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
            let navigationState, paginationState, fullscreenState;

            // If value is a string of tokens
            if (typeof value === 'string' && value !== '') {
                const state = value.split(/\s+/);
                navigationState = state.includes('navigation');
                paginationState = state.includes('pagination');
                fullscreenState = state.includes('fullscreen');
            }
            else {
                const state = value !== null;
                navigationState = state;
                paginationState = state;
                fullscreenState = state;
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

            if (!!fullscreenState !== !!data.fullscreen) {
                if (fullscreenState) {
                    enableFullscreen(data);
                }
                else {
                    disableFullscreen(data);
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
    },

    previous: {
        value: function prev() {
            console.log('Todo: advance slide');
        }
    },

    next: {
        value: function next() {
            console.log('Todo: back slide');
        }
    }
};

export default element('slide-show', lifecycle, properties);
