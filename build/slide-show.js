/* <slide-show> 
   1.0.0
   By Stephen Band
   Built 2022-04-30 21:01 */

var Ge=Object.defineProperty;var Gt=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var _t=(t,e)=>{var n={};for(var o in t)_e.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Gt)for(var o of Gt(t))e.indexOf(o)<0&&Re.call(t,o)&&(n[o]=t[o]);return n};var _=(t,e)=>{for(var n in e)Ge(t,n,{get:e[n],enumerable:!0})};function $(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Ve=Array.prototype;function Ue(t,e){return typeof t=="function"?t.apply(null,e):t}function Rt(t,e,n){n=n||t.length;var o=n===1?e?t:$(t):$(function(r){return Rt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Ue(o(i),Ve.slice.call(arguments,1))}}var w=Rt;function qe(t,e){return 1-Math.pow(1-e,t)}var Vt=w(qe);function v(){}function lt(t,e){return e(t)}function E(t){return t}var We=Array.prototype;function pt(){let t=arguments;return t.length?e=>We.reduce.call(t,lt,e):E}function ft(t,e,n){return n*(e-t)+t}var Ne=window.performance,Ut=window.requestAnimationFrame,$e=window.cancelAnimationFrame;function dt(t,e,n){var o=Ne.now();function r(s){var a=(s-o)/(t*1e3);a<1?(a>0&&e(a),i=Ut(r)):(e(1),n&&n())}var i=Ut(r);return function(){$e(i)}}function X(t,e,n,o,r,i){let s=o[n];return dt(t,pt(e,a=>ft(s,r,a),a=>o[n]=a),i)}function Xe(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function S(t){return t===window?Xe():t.getClientRects()[0]||t.getBoundingClientRect()}var B={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Vt(3)},qt=v;function Ye(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:S(t).width,i=B.scrollDuration+B.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;qt=X(i,B.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:S(t).height,i=B.scrollDuration+B.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;qt=X(i,B.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?Ye(this,n):e.apply(this,arguments)}}function Wt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Wt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Nt=w(Wt,!0);var Ke=Object.freeze;function $t(){return this}var O=Ke({shift:v,push:v,forEach:v,join:function(){return""},map:$t,filter:$t,reduce:function(t,e){return e},length:0,each:v,pipe:E,start:v,stop:v,done:v,valueOf:function(){return null}});function mt(t){return t&&t[Symbol.iterator]}var Ze=Object.assign;function Qe(t){return t.stop?t.stop():t()}function Je(t){t.forEach(Qe),t.length=0}function D(){}Ze(D.prototype,{stop:function(){return this.stopables&&Je(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var tn=Object.assign;function Y(t){D.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,Y(n)}function d(){}tn(d.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return Y(this[0]),this}});var A=Object.assign,C=Object.create;function K(t,e){e!==void 0&&t[0].push(e)}function en(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];Y(e)}else t.stop()}function h(t){this.input=t}A(h.prototype,D.prototype,{push:function(t){K(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new Xt(this,t)},filter:function(t){return new Yt(this,t)},flatMap:function(t){return new Kt(this,t)},take:function(t){return new Zt(this,t)},each:function(t){return new te(this,t)},reduce:function(t,e){return new Qt(this,t,e)},scan:function(t,e){return new Jt(this,t,e)},stop:function(){return en(this.input,this),this}});function Xt(t,e){this.input=t,this.fn=e}Xt.prototype=A(C(h.prototype),{push:function(e){let n=this.fn;K(this,n(e))}});function Yt(t,e){this.input=t,this.fn=e}Yt.prototype=A(C(h.prototype),{push:function(e){this.fn(e)&&K(this,e)}});function Kt(t,e){this.input=t,this.fn=e}Kt.prototype=A(C(h.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(mt(o))for(let r of o)K(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function Zt(t,e){this.input=t,this.count=e}Zt.prototype=A(C(h.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function Qt(t,e,n){return this.input=t,this.fn=e,this.value=n,t.pipe(this),n}Qt.prototype=A(C(h.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function Jt(t,e,n){this.input=t,this.fn=e,this.value=n}Jt.prototype=A(C(h.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function te(t,e){this.input=t,this.push=e,t.pipe(this)}te.prototype=A(C(h.prototype),{each:null,reduce:null,pipe:null});var nn=Array.prototype,on=Object.assign,rn=Object.create;function R(t){this.buffer=t||[]}R.prototype=on(rn(h.prototype),d.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(nn.shift.apply(this.buffer));return this.buffer=this[0],t}});var sn=Object.assign,cn=Object.create;function V(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(O)}V.prototype=sn(cn(h.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var un=Object.assign;function Z(t){this.promise=t}un(Z.prototype,d.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){d.prototype.stop.apply(this,arguments),this[0]=O}});var ne=Object.assign,oe=Object.keys;function ee(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=oe(o).length===r.length))&&i.push(ne({},o))}function Q(t){this.sources=t}ne(Q.prototype,d.prototype,{pipe:function(t){let e=this.sources;this.values={},this.names=oe(e),this.active=!1,this[0]=t;for(let n in e){let o=e[n];o.each?t.done(o.each(r=>ee(this,n,r))):o.then?o.then(r=>ee(this,n,r)):console.log("Todo: combine() raw values ?")}}});var an=Object.assign;function J(t){this.inputs=t}an(J.prototype,d.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.each)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}}});var gt=Array.prototype,ln=Object.assign;function pn(t){return t.length>0}function fn(t,e,n){return t[n]=e.shift(),t}function dn(t){return[]}function ht(t,e,n,o){n.push(o),e.every(pn)&&t.push(e.reduce(fn,{}))}function tt(t){this.inputs=t,this.buffers=gt.map.call(t,dn)}ln(tt.prototype,d.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,gt.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(s=>ht(t,n,i,s))):o.then?o.then(s=>ht(t,n,i,s)):gt.forEach.call(o,s=>ht(t,n,i,s))})}});var mn=Array.prototype,re=Object.assign;function hn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var b=re(h,{of:function(){return new R(mn.slice.apply(arguments))},from:function(t){return t.pipe?new h(t):t.then?new h(new Z(t)):typeof t.length=="number"?new R(t):hn(t)},broadcast:function(e){return new V(O,e)},combine:function(e){return new h(new Q(e))},merge:function(){return new h(new J(arguments))},zip:function(){return new h(new tt(arguments))}});re(h.prototype,{broadcast:function(t){return new V(this,t)}});function x(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var gn=x(E,{is:v,tag:v,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:I,cx:I,cy:I,r:I,preserveAspectRatio:I,viewBox:I,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function I(t,e,n){e.setAttribute(t,n)}function wn(t,e){for(var n=Object.keys(e),o=n.length;o--;)gn(n[o],t,e[n[o]]);return t}var wt=w(wn,!0);var vn="http://www.w3.org/2000/svg",ie=document.createElement("div");var se=(t,e)=>e&&typeof e;function ce(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function T(t,e){var n=document.createElementNS(vn,t);return e&&(n.innerHTML=e),n}var yn=x(E,{comment:function(t,e){return document.createComment(e||"")},fragment:x(se,{string:function(t,e,n){if(n)return ce(n,e);let o=document.createDocumentFragment();ie.innerHTML=e;let r=ie.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?ce(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):wt(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:T,ellipse:T,g:T,glyph:T,image:T,line:T,rect:T,use:T,path:T,pattern:T,polygon:T,polyline:T,svg:T,default:x(se,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):wt(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),y=yn;function j(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function vt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var Wr=w(vt,!0);function bn(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function xn(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function En(t,e,n,o){let r=vt(t,i=>xn(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):bn(t,e,o):r}var ue=w(En,!0);var yt=v;var L=Symbol("internals"),H=Symbol("shadow"),ae=Object.defineProperties,Sn={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},Tn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[L].form}},labels:{get:function(){return this[L].labels}},validity:{get:function(){return this[L].validity}},validationMessage:{get:function(){return this[L].validationMessage}},willValidate:{get:function(){return this[L].willValidate}},checkValidity:{value:function(){return this[L].checkValidity()}},reportValidity:{value:function(){return this[L].reportValidity()}}},Ln={},le={once:!0},Pn=0,pe=!1;function Fn(t){return Sn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var kn=ue(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function On(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function An(t,e){t._initialLoad=!0;let n=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(e.stylesheet){let o=y("link",{rel:"stylesheet",href:e.stylesheet});n.append(o)}return t[H]=n,n}function Cn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=y("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function jn(t){t._initialAttributes={},t._n=0}function Hn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function fe(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function Mn(t){return!!t.attribute}function Bn(t){return t.set||t.get||t.hasOwnProperty("value")}function de(t,e){return Mn(e[1])&&(t.attributes[e[0]]=e[1].attribute),Bn(e[1])&&(t.properties[e[0]]=e[1]),t}function bt(t,e,n){let{name:o,tag:r}=kn(t),i=typeof r=="string"?Fn(r):HTMLElement,{attributes:s,properties:a}=n?Object.entries(n).reduce(de,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(de,{attributes:{},properties:{}}):Ln;function u(){let c=Reflect.construct(i,arguments,u),l=e.construct&&e.construct.length>Pn?An(c,e):void 0,g=u.formAssociated&&Cn(c);return r&&(pe=!0),e.construct&&e.construct.call(c,l,g),s&&(jn(c),Promise.resolve(1).then(function(){fe(c,u.observedAttributes,s)})),a&&Object.keys(a).reduce(On,c),c}return u.prototype=Object.create(i.prototype,a),a&&a.value&&(u.formAssociated=!0,ae(u.prototype,Tn),(e.enable||e.disable)&&(u.prototype.formDisabledCallback=function(c){return c?e.disable&&e.disable.call(this,this[H],this[L]):e.enable&&e.enable.call(this,this[H],this[L])}),e.reset&&(u.prototype.formResetCallback=function(){return e.reset.call(this,this[H],this[L])}),e.restore&&(u.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[H],this[L])})),s&&(u.observedAttributes=Object.keys(s),u.prototype.attributeChangedCallback=function(c,l,g){if(!this._initialAttributes)return s[c].call(this,g);this._initialAttributes[c]=g,Hn(this,u.observedAttributes,s)}),u.prototype.connectedCallback=function(){let c=this,l=c[H],g=c[L];if(c._initialAttributes&&fe(c,u.observedAttributes,s),c._initialLoad){let F=l.querySelectorAll('link[rel="stylesheet"]');if(F.length){let m=0,f=F.length,k=function(Ie){++m>=F.length&&(delete c._initialLoad,e.load&&(yt("element()","loaded",Array.from(F).map(ze=>ze.href).join(`
`)),e.load.call(c,l)))},Be=k;for(;f--;)F[f].addEventListener("load",k,le),F[f].addEventListener("error",Be,le);e.connect&&e.connect.call(this,l,g)}else e.connect&&e.connect.call(this,l,g),e.load&&e.load.call(this,l,g)}else e.connect&&e.connect.call(this,l,g)},e.disconnect&&(u.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[H],this[L])}),yt("element()","<"+(r?r+" is="+o:o)+">"),window.customElements.define(o,u,r&&{extends:r}),r&&!pe&&document.querySelectorAll('[is="'+o+'"]').forEach(c=>{ae(c,a),e.construct&&e.construct.apply(c);let l;for(l in s){let g=c.attributes[l];g&&s[l].call(c,g.value)}e.connect&&e.connect.apply(c)}),u}function et(t){function e(n,o){if(t.getState(n)!==o)return t[o?"enable":"disable"](n)}return{attribute:function(n){return e(this,n!==null)},set:function(n){return e(this,!!n)},get:function(){return t.getState(this)}}}function xt(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var ri=w(xt,!0);var Dn=Array.prototype,In=Object.assign;function zn(t,e){let n=t.tokens.slice(),o=Dn.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function Et(t,e){this.element=t,this.definitions=e,this.tokens=[]}In(Et.prototype,{add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),xt(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});function St(t){var e;function n(o,r){e=e||new Et(o,t),zn(e,r.trim().split(/\s+/))}return{attribute:function(o){n(this,o||"")},set:function(o){n(this,o+"")},get:function(){return e=e||new Et(this,t),e}}}var Gn=Object.assign,_n=/\s+/;function me(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var he=0;window.addEventListener("click",t=>he=t.timeStamp);function Rn(t,e){return t.node.addEventListener(e,t,t.options),t}function Vn(t,e){return t.node.removeEventListener(e,t),t}function ge(t,e,n){this.types=t.split(_n),this.options=e,this.node=n,this.select=e&&e.select}Gn(ge.prototype,d.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Rn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=he)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(Vn,this),d.prototype.stop.apply(this,arguments)}});function P(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new b(new ge(t,n,e))}function Un(t,e){return e[t]}var nt=w(Un,!0);function Tt(t){return typeof t}var qn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function Wn(t,e){if(typeof e=="number")return e;var n=qn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var ot=w(Wn);var Nn=/px$/,we={"transform:translateX":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e);return parseFloat(n[5])},"transform:scale":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function rt(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function U(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function it(t,e){if(we[t])return we[t](e);var n=U(t,e);return typeof n=="string"&&Nn.test(n)?parseFloat(n):n}var st,ct;function $n(){if(!st){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",st=it("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return st}function Xn(){return ct||(ct=it("font-size",document.documentElement)),ct}window.addEventListener("resize",()=>{st=void 0,ct=void 0});var M=x(Tt,{number:E,string:ot({em:function(t){return $n()*t},px:function(t){return t},rem:function(t){return Xn()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),ve=M;var Lt=Object.assign,ut={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function Yn(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function ye(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=ve(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}Lt(ye.prototype,{handleEvent:x(nt("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&Yn(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=b.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function Kn(t){var e=t.target.tagName;return e&&(!!ut.ignoreTags[e.toLowerCase()]||t.target.draggable)}function be(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}Lt(be.prototype,d.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!Kn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new ye(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),d.prototype.stop.apply(this,arguments)}});function Pt(t,e){return t=e&&t?Lt({},ut,t):ut,e=e||t,new b(new be(e,t))}var Zn=Object.assign,Qn={capture:!0,passive:!0},q={minScrollEventInterval:.0375,maxScrollEventInterval:.18},xe=q.maxScrollEventInterval;function Jn(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<q.minScrollEventInterval?q.minScrollEventInterval:n,xe=1.4*n>q.maxScrollEventInterval?q.maxScrollEventInterval:1.4*n}function to(t,e){let{times:n}=t;t.value.stop(),t.value=void 0,n.length>1&&Jn(n),n.length=0}function Ee(t){this.element=t,this.times=[]}Zn(Ee.prototype,d.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,Qn)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.value?(clearTimeout(this.timer),this.value.push(t)):(this.value=b.of(t),this.stream.push(this.value)),this.timer=setTimeout(to,xe*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),d.prototype.stop.apply(this,arguments)}});function Ft(t){return new b(new Ee(t))}var p=Symbol("data");var eo=Object.assign,W={bubbles:!0,cancelable:!0};function kt(t,e){var c;let n=W,o,r,i,s,a,u;return typeof t=="object"?(c=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:a}=c,o=_t(c,["type","detail","bubbles","cancelable","composed"]),u=eo(new CustomEvent(t,{detail:r,bubbles:i||W.bubbles,cancelable:s||W.cancelable,composed:a||W.composed}),o)):u=new CustomEvent(t,W),e.dispatchEvent(u)}var Mi=w(kt,!0);function Se(t){let e=S(t),n=window.getComputedStyle(t,null),o=M(n.getPropertyValue("padding-left")),r=M(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function Te(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function Le(t,e,n){let o=Se(t),r=S(e),i=Te(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function Ot(t,e,n){Le(t,e,"smooth")}function N(t,e){t.style.setProperty("scroll-behavior","auto","important"),Le(t,e,"auto"),t.style.setProperty("scroll-behavior","")}function no(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=Se(t),i=e.length,s;for(;s=e[--i];){let a=S(s);if(!a)continue;let u=Te(s),c=a.width/2+(u==="left"?n:u==="right"?o:r);if((u==="left"?a.left:u==="right"?a.right:a.left+a.width/2)<=c)break}return s}function oo(t){return!!t.dataset.slideIndex}function z(t){let{scroller:e,children:n,elements:o}=t,r=no(e,o),i;!r||(oo(r)?(i=n[r.dataset.slideIndex],N(e,i)):i=r,i!==t.active&&(t.active=i,i!==void 0&&(t.actives.push(i),kt("slide-active",i))))}var Pe=x((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{z(t),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let i,s=P({type:"scroll",passive:!0},n).each(()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>i=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),s.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var At={};_(At,{disable:()=>uo,enable:()=>co,getState:()=>ao});var ro=ot({s:E,ms:t=>t/1e3});function io(t){let{active:e,children:n,elements:o,host:r}=t,i=o.indexOf(e),s=o[i+1]||n[0];t.autoplay.timer=null,!!s&&(r.active=s)}function so(t){let{active:e,style:n}=t,o=ro(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(io,o*1e3,t)}function Fe(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function co(t){let e=t[p],{actives:n}=e,o=e.autoplay={},r=b.merge([!1],P("pointerenter pointerleave",t).map(s=>s.type==="pointerenter")),i=b.merge([t.contains(document.activeElement)],P("focusin focusout",t).map(x(nt("type"),{focusin:s=>!0,focusout:s=>t.contains(s.relatedTarget)}))).map((s=>a=>s===a?void 0:s=a)());o.updates=b.combine({active:n,hover:r,focus:i}).each(s=>s.hover||s.focus?Fe(e):so(e))}function uo(t){let e=t[p];Fe(e),e.autoplay.updates.stop(),e.autoplay=void 0}function ao(t){return!!t[p].autoplay}var Ht={};_(Ht,{disable:()=>jt,enable:()=>Ct,getState:()=>po});var ke=2400;function Oe(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function lo(t){let{active:e,children:n,host:o,scroller:r}=t;if(n.length<2)return;let i=n.map(S),s=i[0].left,a=i[i.length-1].right,u=0;for(;i[++u]&&i[u].left<s+ke;);let c=n.slice(0,u).map(Oe);for(u=i.length-1;i[--u]&&i[u].right>a-ke;);let l=n.slice(++u).map((g,F)=>Oe(g,u+F));o.prepend.apply(o,l),o.append.apply(o,c),t.loop.prepends=l,t.loop.appends=c,N(r,e||n[0])}function Ct(t){let e=t[p],{mutations:n}=e,o=e.loop={};!e.loaded||(o.mutations=n.map(r=>r).each(()=>lo(e)))}function jt(t){let e=t[p];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(n=>n.remove()),e.loop.appends&&e.loop.appends.forEach(n=>n.remove()),e.loop.mutations.stop(),e.loop=void 0)}function po(t){return!!t[p].loop}var Mt={};_(Mt,{disable:()=>mo,enable:()=>fo,getState:()=>ho});function G(t){if(!t.controls){let e=y("nav",{part:"controls"});t.shadow.append(e),t.controls=e}}function Ce(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function Ae(t){let{active:e,elements:n,navigation:{prev:o,next:r}}=t,i=n.indexOf(e);Ce(o,r,n,i)}function fo(t){let e=t[p],{actives:n,clicks:o,mutations:r}=e;G(e);let i=e.navigation={prev:y("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:y("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};e.controls.prepend(i.prev,i.next),i.mutations=r.each(()=>Ae(e)),i.actives=n.each(()=>Ae(e)),i.clicks=o.each(j({'[name="navigation"]':function(s,a){let u=parseFloat(s.value),c=e.elements.indexOf(e.active)+u,l=e.elements[c];!l||(t.active=l,Ce(i.prev,i.next,e.elements,c))}}))}function mo(t){let e=t[p];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.mutations.stop(),e.navigation.actives.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function ho(t){return!!t[p].navigation}var Bt={};_(Bt,{disable:()=>vo,enable:()=>wo,getState:()=>yo});function je(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function go(t,e,n,o){e.buttons&&(e.buttons.remove(),e.buttons=void 0),!(o.length<2)&&(e.buttons=y("div",{part:"pagination",children:o.map((r,i)=>y("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons))}function wo(t){let e=t[p],{shadow:n,actives:o,clicks:r,mutations:i}=e;G(e);let s=e.pagination={activeSpan:y("span",{class:"invisible",text:"(Current slide)"})};s.mutations=i.each(()=>go(e.controls,s,n,e.children)),s.actives=o.each(()=>je(s,e.children,e.active)),s.clicks=r.each(j({'[name="pagination"]':function(a,u){let{host:c}=e,l=e.children,g=l[a.value];!g||(c.active=g,je(s,l,g))}}))}function vo(t){let e=t[p];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.actives.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function yo(t){return!!t[p].pagination}var It={};_(It,{disable:()=>xo,enable:()=>bo,getState:()=>Eo});var He=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function Dt(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Me(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function at(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function bo(t){let e=t[p];if(!He)return;G(e);let n=e.fullscreen={button:y("button",{part:"fullscreen-button",type:"button",name:"fullscreen",html:"Open in fullscreen"})};e.controls.append(n.button),n.clicks=e.clicks.each(j({'[name="fullscreen"]':(o,r)=>{let i=Dt();if(i===t){at(),n.button.part.remove("fullscreen-button-active"),n.button.innerHTML="Open in fullscreen";return}i&&at(),Me(t),n.button.part.add("fullscreen-button-active"),n.button.innerHTML="Close fullscreen"}}))}function xo(t){let e=t[p];Dt()===t&&at(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen=void 0}function Eo(t){return!!t[p].fullscreen}function So(t,e,n){let o=n.length,r=-1/0;for(;o--;){let c=S(n[o]),l=c.x+c.width;r=l>r?l:r}let i=S(e),s=getComputedStyle(t),a=M(s.paddingLeft),u=M(s.paddingRight);return a+u+r-i.x}function zt(t,e,n){let o=So(t,e,n);t.style.setProperty("--scroll-width",o+"px")}function To(t){return!t.dataset.slideIndex}console.log(import.meta.url);var Lo={stylesheet:import.meta.url.replace(/\.js/,"-shadow.css"),construct:function(t){let e=y("slot",{part:"slides"}),n=y("div",{class:"scroller",children:[e]}),o=y("slot",{part:"ui",name:"ui"});t.append(n,o);let r=P("slotchange",e).broadcast(),i=b.broadcast({memory:!0}),s=P("click",t).filter(me).broadcast(),a=P("focusin",this),u=P("resize",window),c=P("fullscreenchange",window),l=Ft(n),g=Pt({threshold:"0.25rem",device:"mouse"},t).filter(()=>m.children.length>1),F=b.broadcast({memory:!0}),m=this[p]={clickSuppressTime:-1/0,host:this,style:window.getComputedStyle(this),elements:O,children:O,shadow:t,scroller:n,slides:e,actives:F,slotchanges:r,mutations:i,clicks:s};r.each(()=>{let f=e.assignedElements();m.elements=f,zt(m.scroller,m.slides,m.elements);let k=m.elements.filter(To);Nt(m.children,k)||(m.children=k,i.push(k))}),u.each(()=>zt(m.scroller,m.slides,m.elements)),s.each(function(f){window.performance.now()-m.clickSuppressTime<120&&(f.preventDefault(),f.stopPropagation())}),g.each(f=>{m.pointers=f,f.reduce(Pe,m)}),c.each(f=>{(f.target===this||f.target.contains(this))&&N(n,m.active)}),l.each(f=>f.each(v).done(()=>z(m))),a.map(f=>m.children.indexOf(f.target)!==-1?f.target:m.children.find(k=>k.contains(f.target))).each(f=>Ot(m.scroller,f))},load:function(t){let e=this[p];e.loaded=!0,this.loop?Ct(this):jt(this),zt(e.scroller,e.slides,e.elements),z(e),e.slotchanges.each(()=>z(e))}},Po={active:{set:function(t){let e=this[p],n=typeof t!="object"?this.querySelector("#"+(/^\d/.test((id+"")[0])?"\\3"+(id+"")[0]+" "+(id+"").slice(1):t)):t;if(!n)throw new Error("Cannot set active – not a child of slide-show");Ot(e.scroller,n)},get:function(){return this[p].active}},autoplay:et(At),controls:St({navigation:Mt,pagination:Bt,fullscreen:It}),loop:et(Ht)},Bs=bt("slide-show",Lo,Po);export{Bs as default};
