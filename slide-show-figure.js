
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

export default element('<figure is="slide-show-figure">', lifecycle, properties);
