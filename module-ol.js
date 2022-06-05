
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** <ol is="slide-show-ol">

Import `./build/slide-show-ol.js` to register the customised built-in:

```html
<ol is="slide-show-ol">
    <li>…</li>
</ol>
```
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet = import.meta.url.replace(/\/[^\/]*\.js/, '/slide-show-shadow.css');

export default element('<ol is="slide-show-ol">', lifecycle, properties, stylesheet);
