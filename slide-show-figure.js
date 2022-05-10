
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** <figure is="slide-show-figure">

Import `./build/slide-show-figure.js` to register the customised built-in:

```html
<figure is="slide-show-figure">
    <img src="…" />
</figure>
```
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet = import.meta.url.replace(/\/[^\/]*\.js/, '/slide-show-shadow.css');

export default element('<figure is="slide-show-figure">', lifecycle, properties, stylesheet);
