
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** Get started

Download the latest release.

Then include the JS and CSS files in your HTML:

```html
<link rel="stylesheet" href="./build/element.css" />
<script type="module" src="./build/element.js"></script>
```

You can now use the `<slide-show>` in your HTML. The `<slide-show>` example
above looks something like this:

```html
<slide-show autoplay loop controls="navigation pagination fullscreen">
   <img src="./images/donkeys.jpg" draggable="false" />
   <img src="./images/tractor.jpg" draggable="false" />
   <img src="./images/mauverin.jpg" draggable="false" />
</slide-show>
```

A `<slide-show>` element lays out its children as slides, by default in
`grid` mode, although other horizontal modes (`flex`, `inline-block`) are
supported. `<slide-show>`s are not only for images – they take any arbitrary
HTML.
**/

import equals          from '../fn/modules/equals.js';
import noop            from '../fn/modules/noop.js';
import nothing         from '../fn/modules/nothing.js';
import Stream          from '../fn/modules/stream.js';
import create          from '../dom/modules/create.js';
import delegate        from '../dom/modules/delegate.js';
import element         from '../dom/modules/element.js';
import createBoolean   from '../dom/modules/element/create-boolean.js';
import createTokenList from '../dom/modules/element/create-token-list.js';
import events, { isPrimaryButton } from '../dom/modules/events.js';
import gestures        from '../dom/modules/gestures.js';
import { px }          from '../dom/modules/parse-length.js';
import rect            from '../dom/modules/rect.js';
import Scrolls         from '../dom/modules/scrolls.js';

import { $data }       from './modules/consts.js';
import { scrollTo, jumpTo, updateActive } from './modules/active.js';
import { processPointers } from './modules/swipes.js';

import * as autoplay   from './modules/autoplay.js';
import * as loop       from './modules/loop.js';
import * as navigation from './modules/navigation.js';
import * as pagination from './modules/pagination.js';
import * as fullscreen from './modules/fullscreen.js';


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

function isSlide(slide) {
    // Filter out loop ghosts
    return !slide.dataset.slideIndex;
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
        const ui       = create('slot', { part: 'ui', name: 'ui' });

        // Add slots to shadow
        shadow.append(scroller, ui);

        const slotchanges  = events('slotchange', slides).broadcast();
        const mutations    = Stream.broadcast({ memory: true });
        const clicks       = events('click', shadow).filter(isPrimaryButton).broadcast();
        const focuses      = events('focusin', this);
        const resizes      = events('resize', window);
        const fullscreens  = events('fullscreenchange', window);
        const scrolls      = Scrolls(scroller);
        const swipes       = gestures({ threshold: '0.25rem', device: 'mouse' }, shadow).filter(() => data.children.length > 1);
        const actives      = Stream.broadcast({ memory: true });

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
            loop.enable(this);
        }
        else {
            loop.disable(this);
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
    /**
    .active
    Gets or sets the currently scroll-snapped child element.

    ```js
    const activeSlide = slideshow.active;
    ```

    May be set to one of the child elements, or to the id of one of the
    child elements, which causes the `slide-show` to scroll.

    ```js
    slideshow.active = 'slide-1';
    ```
    **/

    active: {


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

    /**
    autoplay=""
    Boolean attribute. When present the `slide-show` activates the next
    slide after a pause. The pause duration may be set with the CSS variable
    `--slide-duration`. Autoplay is also paused when a mouse pointer is
    inside the `slide-show`, or when a slide has focus.
    **/

    /**
    .autoplay

    Boolean property. When `true` the slide-show activates the next
    slide after a pause. The pause duration may be set with the CSS variable
    `--slide-duration`. Autoplay is also paused when a mouse pointer is
    inside the `slide-show`, or when a slide has focus.

    ```js
    document.querySelector('slide-show').autoplay = true;
    ```
    **/

    autoplay: createBoolean(autoplay),

    /**
    controls=""
    An attribute that accepts the tokens `"navigation"`, `"pagination"`
    and `"fullscreen"`. The presence of one of these tokens enables the
    corresponding controls.
    **/

    /**
    .controls
    A TokenList object (like `.classList`) that supports the tokens `"navigation"`,
    `"pagination"` and `"fullscreen"`.

    ```js
    document.querySelector('slide-show').controls.add('pagination');
    ```
    **/

    controls: createTokenList({
        'navigation': navigation,
        'pagination': pagination,
        'fullscreen': fullscreen
    }),

    /**
    loop=""
    Boolean attribute. When present, the `slide-show` behaves as a continuous
    loop. Looping works by duplicating some of the children of the `slide-show`.
    Duplicate content is given `aria-hidden="true"` and `tab-index="-1"`, and
    has `id` attributes stripped off in an attempt to make it inert.
    **/

    /**
    .loop
    Boolean property. When `true`, the `slide-show` behaves as a continuous loop.
    Looping works by duplicating some of the children of the `slide-show`.
    Duplicate content is given `aria-hidden="true"` and `tab-index="-1"`, and
    has `id` attributes stripped off in an attempt to make it inert.

    ```js
    document.querySelector('slide-show').loop = true;
    ```
    **/

    loop: createBoolean(loop)
};

export default element('slide-show', lifecycle, properties);
