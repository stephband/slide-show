
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** Get started

Download the latest release:

[github.com/stephband/slide-show/releases](https://github.com/stephband/slide-show/releases)

Then include the JS and CSS files in your HTML:

```html
<link rel="stylesheet" href="./build/slide-show.css" />
<script type="module" src="./build/slide-show.js"></script>
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

A `<slide-show>` lays out its children horizontally, by default in `grid` layout.
Content is horizontally scrollable via touch or trackpad, draggable with a mouse
(making it a Good Idea to add `draggable="false"`to images and links), and also
navigable via keyboard focus.

A `<slide-show>` is not just for images. Content may be any HTML.
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet = import.meta.url.replace(/\/[^\/]*\.js/, '/slide-show-shadow.css');

export default element('slide-show', lifecycle, properties, stylesheet);

window.console && window.console.log('%c<slide-show>%c registered (documentation at %chttps://stephen.band/slide-show/%c)', 'color: #3a8ab0; font-weight: 600;', 'color: #888888; font-weight: 400;', 'color: inherit; font-weight: 400;', 'color: #888888; font-weight: 400;');
