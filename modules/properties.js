
import createBoolean   from '../../dom/modules/element/create-boolean.js';
import createTokenList from '../../dom/modules/element/create-token-list.js';

import { $data }       from './consts.js';
import { scrollTo }    from './active.js';
import * as autoplay   from './autoplay.js';
import * as loop       from './loop.js';
import * as navigation from './navigation.js';
import * as pagination from './pagination.js';
import * as fullscreen from './fullscreen.js';


/* Properties */

export default {
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
    slide after a pause.

    ```html
    <slide-show autoplay>…</slide-show>
    ```

    The pause duration may be set with the CSS variable
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
    slideshow.autoplay = true;
    ```
    **/

    autoplay: createBoolean(autoplay, 'autoplay'),

    /**
    controls=""
    An attribute that accepts the tokens `"navigation"`, `"pagination"`
    and `"fullscreen"`. The presence of one of these tokens enables the
    corresponding controls.

    ```html
    <slide-show controls="navigation fullscreen">…</slide-show>
    ```
    **/

    /**
    .controls
    A TokenList object (like `.classList`) that supports the tokens
    `"navigation"`, `"pagination"` and `"fullscreen"`.

    ```js
    slideshow.controls.add('pagination');
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
    loop.

    ```html
    <slide-show loop>…</slide-show>
    ```

    Looping works by duplicating some of the children of the `slide-show`.
    Duplicate elements are given `aria-hidden="true"` and `tab-index="-1"`, and
    have `id` attributes stripped off in an attempt to make them inert.
    **/

    /**
    .loop
    Boolean property. When `true`, the `slide-show` behaves as a continuous loop.

    ```js
    slideshow.loop = true;
    ```

    Looping works by duplicating some of the children of the `slide-show`.
    Duplicate elements are given `aria-hidden="true"` and `tab-index="-1"`, and
    have `id` attributes stripped off in an attempt to make them inert.
    **/

    loop: createBoolean(loop, 'loop')
};
