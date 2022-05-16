/* slide-show 
   1.1.4
   By Stephen Band
   Built 2022-05-16 15:09 */

var Re=Object.defineProperty;var It=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var Bt=(t,e)=>{var n={};for(var o in t)qe.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&It)for(var o of It(t))e.indexOf(o)<0&&Ue.call(t,o)&&(n[o]=t[o]);return n};var z=(t,e)=>{for(var n in e)Re(t,n,{get:e[n],enumerable:!0})};function N(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Ve=Array.prototype;function We(t,e){return typeof t=="function"?t.apply(null,e):t}function Dt(t,e,n){n=n||t.length;var o=n===1?e?t:N(t):N(function(r){return Dt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):We(o(i),Ve.slice.call(arguments,1))}}var y=Dt;function $e(t,e){return 1-Math.pow(1-e,t)}var Gt=y($e);function v(){}function at(t,e){return e(t)}function S(t){return t}var Ne=Array.prototype;function pt(){let t=arguments;return t.length?e=>Ne.reduce.call(t,at,e):S}function ft(t,e,n){return n*(e-t)+t}var Xe=window.performance,zt=window.requestAnimationFrame,Ye=window.cancelAnimationFrame;function dt(t,e,n){var o=Xe.now();function r(s){var u=(s-o)/(t*1e3);u<1?(u>0&&e(u),i=zt(r)):(e(1),n&&n())}var i=zt(r);return function(){Ye(i)}}function X(t,e,n,o,r,i){let s=o[n];return dt(t,pt(e,u=>ft(s,r,u),u=>o[n]=u),i)}function Ke(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function T(t){return t===window?Ke():t.getClientRects()[0]||t.getBoundingClientRect()}var H={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Gt(3)},_t=v;function Ze(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:T(t).width,i=H.scrollDuration+H.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;_t=X(i,H.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:T(t).height,i=H.scrollDuration+H.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;_t=X(i,H.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?Ze(this,n):e.apply(this,arguments)}}function x(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var Qe=x(S,{is:v,tag:v,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:M,cx:M,cy:M,r:M,preserveAspectRatio:M,viewBox:M,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function M(t,e,n){e.setAttribute(t,n)}function Je(t,e){for(var n=Object.keys(e),o=n.length;o--;)Qe(n[o],t,e[n[o]]);return t}var mt=y(Je,!0);var tn="http://www.w3.org/2000/svg",Rt=document.createElement("div");var qt=(t,e)=>e&&typeof e;function Ut(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function L(t,e){var n=document.createElementNS(tn,t);return e&&(n.innerHTML=e),n}var en=x(S,{comment:function(t,e){return document.createComment(e||"")},fragment:x(qt,{string:function(t,e,n){if(n)return Ut(n,e);let o=document.createDocumentFragment();Rt.innerHTML=e;let r=Rt.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?Ut(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):mt(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:L,ellipse:L,g:L,glyph:L,image:L,line:L,rect:L,use:L,path:L,pattern:L,polygon:L,polyline:L,svg:L,default:x(qt,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):mt(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),b=en;function ht(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var lr=y(ht,!0);function nn(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function on(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function rn(t,e,n,o){let r=ht(t,i=>on(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):nn(t,e,o):r}var Vt=y(rn,!0);var gt=v;var k=Symbol("internals"),O=Symbol("shadow"),Wt=Object.defineProperties,sn={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},cn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[k].form}},labels:{get:function(){return this[k].labels}},validity:{get:function(){return this[k].validity}},validationMessage:{get:function(){return this[k].validationMessage}},willValidate:{get:function(){return this[k].willValidate}},checkValidity:{value:function(){return this[k].checkValidity()}},reportValidity:{value:function(){return this[k].reportValidity()}}},un={},$t={once:!0},ln=0,Nt=!1;function an(t){return sn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var pn=Vt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function fn(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function dn(t,e,n){t._initialLoad=!0;let o=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(n){let r=b("link",{rel:"stylesheet",href:n});o.append(r)}return t[O]=o,o}function mn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=b("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function hn(t){t._initialAttributes={},t._n=0}function gn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function Xt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function wn(t){return!!t.attribute}function vn(t){return t.set||t.get||t.hasOwnProperty("value")}function Yt(t,e){return wn(e[1])&&(t.attributes[e[0]]=e[1].attribute),vn(e[1])&&(t.properties[e[0]]=e[1]),t}function wt(t,e,n,o){let{name:r,tag:i}=pn(t),s=typeof i=="string"?an(i):HTMLElement,{attributes:u,properties:f}=n?Object.entries(n).reduce(Yt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Yt,{attributes:{},properties:{}}):un;function l(){let p=Reflect.construct(s,arguments,l),h=e.construct&&e.construct.length>ln?dn(p,e,o||e.stylesheet):void 0,a=l.formAssociated&&mn(p);return i&&(Nt=!0),e.construct&&e.construct.call(p,h,a),u&&(hn(p),Promise.resolve(1).then(function(){Xt(p,l.observedAttributes,u)})),f&&Object.keys(f).reduce(fn,p),p}return l.prototype=Object.create(s.prototype,f),f&&f.value&&(l.formAssociated=!0,Wt(l.prototype,cn),(e.enable||e.disable)&&(l.prototype.formDisabledCallback=function(p){return p?e.disable&&e.disable.call(this,this[O],this[k]):e.enable&&e.enable.call(this,this[O],this[k])}),e.reset&&(l.prototype.formResetCallback=function(){return e.reset.call(this,this[O],this[k])}),e.restore&&(l.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[O],this[k])})),u&&(l.observedAttributes=Object.keys(u),l.prototype.attributeChangedCallback=function(p,h,a){if(!this._initialAttributes)return u[p].call(this,a);this._initialAttributes[p]=a,gn(this,l.observedAttributes,u)}),l.prototype.connectedCallback=function(){let p=this,h=p[O],a=p[k];if(p._initialAttributes&&Xt(p,l.observedAttributes,u),p._initialLoad){let c=h.querySelectorAll('link[rel="stylesheet"]');if(c.length){let j=0,lt=c.length,Mt=function(ze){++j>=c.length&&(delete p._initialLoad,e.load&&(gt("element()","loaded",Array.from(c).map(_e=>_e.href).join(`
`)),e.load.call(p,h)))},De=Mt;for(;lt--;)c[lt].addEventListener("load",Mt,$t),c[lt].addEventListener("error",De,$t);e.connect&&e.connect.call(this,h,a)}else e.connect&&e.connect.call(this,h,a),e.load&&e.load.call(this,h,a)}else e.connect&&e.connect.call(this,h,a)},e.disconnect&&(l.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[O],this[k])}),gt("element()","<"+(i?i+" is="+r:r)+">"),window.customElements.define(r,l,i&&{extends:i}),i&&!Nt&&document.querySelectorAll('[is="'+r+'"]').forEach(p=>{Wt(p,f),e.construct&&e.construct.apply(p);let h;for(h in u){let a=p.attributes[h];a&&u[h].call(p,a.value)}e.connect&&e.connect.apply(p)}),l}function Kt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Kt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Zt=y(Kt,!0);function yn(t,e){return e[t]}var I=y(yn,!0);var bn=Object.freeze;function Qt(){return this}var B=bn({shift:v,push:v,forEach:v,join:function(){return""},map:Qt,filter:Qt,reduce:function(t,e){return e},length:0,each:v,pipe:S,start:v,stop:v,done:v,valueOf:function(){return null}});function vt(t){return t&&t[Symbol.iterator]}var xn=Object.assign;function En(t){return t.stop?t.stop():t()}function Sn(t){t.forEach(En),t.length=0}function D(){}xn(D.prototype,{stop:function(){return this.stopables&&Sn(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var Tn=Object.assign;function Y(t){D.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,Y(n)}function m(){}Tn(m.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return Y(this[0]),this}});var P=Object.assign,F=Object.create;function _(t,e){e!==void 0&&t[0].push(e)}function Ln(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];Y(e)}else t.stop()}function g(t){this.input=t}P(g.prototype,D.prototype,{push:function(t){_(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new Jt(this,t)},filter:function(t){return new te(this,t)},chunk:function(t){return new ne(this,t)},flatMap:function(t){return new ee(this,t)},take:function(t){return new oe(this,t)},each:function(t){return new se(this,t)},reduce:function(t,e){return new re(this,t,e)},scan:function(t,e){return new ie(this,t,e)},stop:function(){return Ln(this.input,this),this}});function Jt(t,e){this.input=t,this.fn=e}Jt.prototype=P(F(g.prototype),{push:function(e){let n=this.fn;_(this,n(e))}});function te(t,e){this.input=t,this.fn=e}te.prototype=P(F(g.prototype),{push:function(e){this.fn(e)&&_(this,e)}});function ee(t,e){this.input=t,this.fn=e}ee.prototype=P(F(g.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(vt(o))for(let r of o)_(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function ne(t,e){this.input=t,this.chunk=[],typeof e=="number"?this.n=e:typeof e=="function"&&(this.fn=e)}ne.prototype=P(F(g.prototype),{fn:function(t){return t.length===this.n},push:function(e){let n=this.chunk;n.push(e),this.fn(n)&&(_(this,n),this.chunk=[])}});function oe(t,e){this.input=t,this.count=e}oe.prototype=P(F(g.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function re(t,e,n){this.input=t,this.fn=e,this.value=n,t.pipe(this)}re.prototype=P(F(g.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function ie(t,e,n){this.input=t,this.fn=e,this.value=n}ie.prototype=P(F(g.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function se(t,e){this.input=t,this.push=e,t.pipe(this)}se.prototype=P(F(g.prototype),{each:null,reduce:null,pipe:null});var kn=Array.prototype,Pn=Object.assign,Fn=Object.create;function R(t){this.buffer=t||[]}R.prototype=Pn(Fn(g.prototype),m.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(kn.shift.apply(this.buffer));return this.buffer=this[0],t}});var On=Object.assign,An=Object.create;function q(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(B)}q.prototype=On(An(g.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var Cn=Object.assign;function K(t){this.promise=t}Cn(K.prototype,m.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){m.prototype.stop.apply(this,arguments),this[0]=B}});var ue=Object.assign,le=Object.keys;function ce(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=le(o).length===r.length))&&i.push(ue({},o))}function Z(t){this.inputs=t,this.active=!1}ue(Z.prototype,m.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=le(e),this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>ce(this,n,r))):o.then?o.then(r=>ce(this,n,r)):console.log("Todo: combine() raw values ?")}}});var jn=Object.assign;function Q(t){this.inputs=t}jn(Q.prototype,m.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return m.prototype.stop.apply(this,arguments)}});var bt=Array.prototype,Hn=Object.assign;function Mn(t){return t.length>0}function In(t,e,n){return t[n]=e.shift(),t}function Bn(t){return[]}function yt(t,e,n,o){n.push(o),e.every(Mn)&&t.push(e.reduce(In,{}))}function J(t){this.inputs=t,this.buffers=bt.map.call(t,Bn)}Hn(J.prototype,m.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,bt.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(s=>yt(t,n,i,s))):o.then?o.then(s=>yt(t,n,i,s)):bt.forEach.call(o,s=>yt(t,n,i,s))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return m.prototype.stop.apply(this,arguments)}});var Dn=Array.prototype,ae=Object.assign;function Gn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var w=ae(g,{of:function(){return new R(Dn.slice.apply(arguments))},from:function(t){return t.pipe?new g(t):t.then?new g(new K(t)):typeof t.length=="number"?new R(t):Gn(t)},broadcast:function(e){return new q(B,e)},combine:function(e){return new g(new Z(e))},merge:function(){return new g(new Q(arguments))},zip:function(){return new g(new J(arguments))}});ae(g.prototype,{log:v,broadcast:function(t){return new q(this,t)}});var zn=Object.assign,_n=/\s+/,pe={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function fe(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var de=0;window.addEventListener("click",t=>de=t.timeStamp);function Rn(t,e){return t.node.addEventListener(pe[e]||e,t,t.options),t}function qn(t,e){return t.node.removeEventListener(pe[e]||e,t),t}function me(t,e,n){this.types=t.split(_n),this.options=e,this.node=n,this.select=e&&e.select}zn(me.prototype,m.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Rn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=de)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(qn,this),m.prototype.stop.apply(this,arguments)}});function E(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new w(new me(t,n,e))}function xt(t){return typeof t}var Un=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function Vn(t,e){if(typeof e=="number")return e;var n=Un.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var tt=y(Vn);var Wn=/px$/,he={"transform:translateX":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=et(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=et(e);return parseFloat(n[5])},"transform:scale":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=et(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=et(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function et(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function U(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function nt(t,e){if(he[t])return he[t](e);var n=U(t,e);return typeof n=="string"&&Wn.test(n)?parseFloat(n):n}var ot,rt;function $n(){if(!ot){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",ot=nt("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return ot}function Nn(){return rt||(rt=nt("font-size",document.documentElement)),rt}window.addEventListener("resize",()=>{ot=void 0,rt=void 0});var A=x(xt,{number:S,string:tt({em:function(t){return $n()*t},px:function(t){return t},rem:function(t){return Nn()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),ge=A;var Et=Object.assign,it={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function Xn(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function we(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=ge(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}Et(we.prototype,{handleEvent:x(I("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&Xn(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=w.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function Yn(t){var e=t.target.tagName;return e&&(!!it.ignoreTags[e.toLowerCase()]||t.target.draggable)}function ve(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}Et(ve.prototype,m.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!Yn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new we(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),m.prototype.stop.apply(this,arguments)}});function St(t,e){return t=e&&t?Et({},it,t):it,e=e||t,new w(new ve(e,t))}var Kn=Object.assign,V={bubbles:!0,cancelable:!0};function Tt(t,e){var l;let n=V,o,r,i,s,u,f;return typeof t=="object"?(l=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:u}=l,o=Bt(l,["type","detail","bubbles","cancelable","composed"]),f=Kn(new CustomEvent(t,{detail:r,bubbles:i||V.bubbles,cancelable:s||V.cancelable,composed:u||V.composed}),o)):f=new CustomEvent(t,V),e.dispatchEvent(f)}var ki=y(Tt,!0);var d=Symbol("data");function ye(t){let e=T(t),n=window.getComputedStyle(t,null),o=A(n.getPropertyValue("padding-left")),r=A(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function be(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function xe(t,e,n){let o=ye(t),r=T(e),i=be(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function Lt(t,e){return xe(t,e,"smooth"),e}function G(t,e){return t.style.setProperty("scroll-behavior","auto","important"),xe(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function Ee(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=ye(t),i=e.length,s;for(;s=e[--i];){let u=T(s);if(!u)continue;let f=be(s),l=u.width/2+(f==="left"?n:f==="right"?o:r);if((f==="left"?u.left:f==="right"?u.right:u.left+u.width/2)<=l)break}return s}function Se(t){return!!t.dataset.slideIndex}function Te(t){let{scroller:e,elements:n,children:o}=t,r=Ee(e,n);return Se(r)?o[r.dataset.slideIndex]:r}function Le(t){let{scroller:e,children:n,elements:o}=t,r=Ee(e,o),i;!r||(Se(r)?(i=n[r.dataset.slideIndex],G(e,i)):i=r,t.activations.push(i))}var ke=x((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{let i=Te(t);t.activations.push(i),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let s,u=E({type:"scroll",passive:!0},n).each(()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>s=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),u.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var Zn=Object.assign,Qn={capture:!0,passive:!0},W={minScrollEventInterval:.0375,maxScrollEventInterval:.18},Pe=W.maxScrollEventInterval;function Jn(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<W.minScrollEventInterval?W.minScrollEventInterval:n,Pe=1.4*n>W.maxScrollEventInterval?W.maxScrollEventInterval:1.4*n}function to(t,e){t.timer=void 0,t.stream.push(e);let n=t.times;n.length>1&&Jn(n),n.length=0}function Fe(t){this.element=t,this.times=[]}Zn(Fe.prototype,m.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,Qn)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(to,Pe*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),m.prototype.stop.apply(this,arguments)}});function kt(t){return new w(new Fe(t))}function eo(t,e,n){let o=n.length,r=-1/0;for(;o--;){let l=T(n[o]),p=l.x+l.width;r=p>r?p:r}let i=T(e),s=getComputedStyle(t),u=A(s.paddingLeft||0),f=A(s.paddingRight||0);return u+f+r-i.x}function no(t,e,n){let o=eo(t,e,n);t.style.setProperty("--scroll-width",o+"px")}function oo(t){return!t.dataset.slideIndex}var Oe={construct:function(t){let e=b("slot",{name:"header"}),n=b("slot",{part:"slides"}),o=b("div",{class:"scroller",children:[n]}),r=b("nav",{part:"controls",children:[b("slot",{name:"controls"})]});t.append(e,o,r);let i=w.of(),s=w.combine({host:i,elements:E("slotchange",n).map(c=>a.elements=n.assignedElements())}).broadcast({memory:!0}),u=s.map(c=>{let j=c.elements.filter(oo);return Zt(a.children,j)?void 0:a.children=j}).broadcast({memory:!0}),f=w.of(null),l=w.of(),p=l.filter(c=>a.active!==c&&Tt("slide-active",c)).map(c=>a.active=c).broadcast({memory:!0,hot:!0}),h=E("click",t).filter(fe).broadcast(),a=this[d]={clickSuppressTime:-1/0,host:this,style:window.getComputedStyle(this),scroller:o,slides:n,controls:r,load:i,views:f,activations:l,actives:p,slotchanges:s,mutations:u,clicks:h};w.merge(s,E("resize",window)).each(c=>no(o,n,a.elements)),w.combine({children:u,child:f}).map(c=>!a.active||a.active===c.child?G(o,c.children.includes(c.child)?c.child:c.children[0]):(Lt(o,c.child),c.child.dataset.slideIndex?c.children[c.child.dataset.slideIndex]:c.child)).pipe(l),kt(o).filter(()=>!a.gesturing).each(c=>Le(a)),St({threshold:"0.25rem",device:"mouse"},t).filter(()=>a.children.length>1).each(c=>{a.pointers=c,c.reduce(ke,a)}),h.each(c=>{c.timeStamp-a.clickSuppressTime<120&&(c.preventDefault(),c.stopPropagation())}),E("fullscreenchange",window).each(c=>{(c.target===this||c.target.contains(this))&&G(o,a.active)}),E("focusin",this).map(c=>a.children.indexOf(c.target)!==-1?c.target:a.children.find(j=>j.contains(c.target))).each(c=>Lt(a.scroller,c)),E("keydown",this).filter(()=>document.activeElement===this).map(x(I("keyCode"),{37:c=>a.elements[a.elements.indexOf(a.active)-1],39:c=>a.elements[a.elements.indexOf(a.active)+1],default:v})).pipe(f)},load:function(t){this[d].load.push(this)}};function st(t,e){function n(o,r){if(t.getState(o)!==r)return t[r?"enable":"disable"](o)}return{attribute:function(o){return n(this,o!==null)},set:function(o){return n(this,!!o)},get:function(){return t.getState(this)}}}function Pt(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var os=y(Pt,!0);var ro=Object.assign;function $(t,e){this.element=t,this.definitions=e,this.tokens=[]}ro($.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),Pt(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var io=Array.prototype;function so(t,e){let n=t.tokens.slice(),o=io.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function Ft(t){let e=Symbol("TokenList");function n(o,r){let i=o[e]||(o[e]=new $(o,t));so(i,r.trim().split(/\s+/))}return{attribute:function(o){n(this,o||"")},set:function(o){n(this,o+"")},get:function(){return this[e]||(this[e]=new $(this,t))}}}var Ot={};z(Ot,{disable:()=>po,enable:()=>ao,getState:()=>fo});var co=tt({s:S,ms:t=>t/1e3});function uo(t){let{active:e,children:n,elements:o,host:r}=t,i=o.indexOf(e),s=o[i+1]||n[0];t.autoplay.timer=null,!!s&&(r.active=s)}function lo(t){let{active:e,style:n}=t,o=co(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(uo,o*1e3,t)}function Ae(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function ao(t){let e=t[d],{actives:n}=e,o=e.autoplay={},r=w.merge([!1],E("pointerenter pointerleave",t).map(s=>s.type==="pointerenter")),i=w.merge([t.contains(document.activeElement)],E("focusin focusout",t).map(x(I("type"),{focusin:s=>!0,focusout:s=>t.contains(s.relatedTarget)}))).map((s=>u=>s===u?void 0:s=u)());o.updates=w.combine({active:n,hover:r,focus:i}).each(s=>s.hover||s.focus?Ae(e):lo(e))}function po(t){let e=t[d];Ae(e),e.autoplay.updates.stop(),e.autoplay=void 0}function fo(t){return!!t[d].autoplay}var At={};z(At,{disable:()=>go,enable:()=>ho,getState:()=>wo});function Ce(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function mo(t){let{active:e,children:n,host:o,scroller:r}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(a=>a.remove()),t.loop.appends.forEach(a=>a.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),n.length<2){t.elements=t.slides.assignedElements();return}let i=o.clientWidth,s=n.map(T),u=s[1].left,f=s[s.length-2].right,l=1;for(;s[++l]&&s[l].left<u+i;);let p=n.slice(0,l).map(Ce);for(l=s.length-2;s[--l]&&s[l].right>f-i;);let h=n.slice(++l).map((a,c)=>Ce(a,l+c));o.prepend.apply(o,h),o.append.apply(o,p),t.loop.prepends=h,t.loop.appends=p,t.elements=t.slides.assignedElements(),G(r,e||n[0])}function ho(t){let e=t[d],{mutations:n}=e,o=e.loop={};o.renders=n.each(r=>mo(e))}function go(t){let e=t[d];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(n=>n.remove()),e.loop.appends&&e.loop.appends.forEach(n=>n.remove()),e.loop.renders.stop(),e.loop=void 0)}function wo(t){return!!t[d].loop}var Ct={};z(Ct,{disable:()=>yo,enable:()=>vo,getState:()=>bo});function C(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function je(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function vo(t){let e=t[d],{actives:n,clicks:o,slotchanges:r}=e,i=e.navigation={prev:b("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:b("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};e.controls.prepend(i.prev,i.next),i.updates=w.combine({active:n,changes:r}).each(s=>je(i.prev,i.next,s.changes.elements,s.changes.elements.indexOf(s.active))),i.clicks=o.each(C({'[name="navigation"]':function(s,u){let f=parseFloat(s.value),l=e.elements.indexOf(e.active)+f,p=e.elements[l];!p||(t.active=p,je(i.prev,i.next,e.elements,l))}}))}function yo(t){let e=t[d];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function bo(t){return!!t[d].navigation}var jt={};z(jt,{disable:()=>So,enable:()=>Eo,getState:()=>To});function He(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function xo(t,e,n,o){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),o.length<2||(e.buttons=b("div",{part:"pagination",children:o.map((r,i)=>b("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons)),o.length}function Eo(t){let e=t[d],{shadow:n,actives:o,clicks:r,mutations:i}=e,s=e.pagination={activeSpan:b("span",{class:"invisible",text:"(Current slide)"})};s.mutations=i.each(()=>xo(e.controls,s,n,e.children)),s.updates=w.combine({active:o,children:i}).filter(u=>u.children.length>1).each(u=>He(s,e.children,e.active)),s.clicks=r.each(C({'[name="pagination"]':function(u,f){let{host:l}=e,p=e.children,h=p[u.value];!h||(l.active=h,He(s,p,h))}}))}function So(t){let e=t[d];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function To(t){return!!t[d].pagination}var Ht={};z(Ht,{disable:()=>ko,enable:()=>Lo,getState:()=>Po});var Me=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function ct(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Ie(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function ut(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function Lo(t){let e=t[d];if(!Me)return;let n=e.fullscreen={button:b("button",{part:"fullscreen-button",type:"button",name:"fullscreen",html:"Open in fullscreen"})};e.controls.append(n.button),n.changes=E("fullscreenchange",t).filter(o=>ct()===t).each(o=>{n.button.part.add("fullscreen-button-active"),n.button.innerHTML="Close fullscreen",document.activeElement!==t&&(n.tabIndex=t.tabIndex,t.tabIndex<0&&(t.tabIndex=0),t.focus());let r=E("fullscreenchange",t).each(i=>{n.button.part.remove("fullscreen-button-active"),n.button.innerHTML="Open in fullscreen",t.tabIndex=n.tabIndex,n.tabIndex=void 0,r.stop()})}),n.clicks=e.clicks.each(C({'[name="fullscreen"]':(o,r)=>{let i=ct();if(i===t){ut();return}i&&ut(),Ie(t)}}))}function ko(t){let e=t[d];ct()===t&&ut(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen.changes.stop(),e.fullscreen=void 0}function Po(t){return!!t[d].fullscreen}var Be={active:{attribute:function(t){this.active=t},set:function(t){let e=this[d],n=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);if(!n)throw new Error("Cannot set active – not a child of slide-show");e.views.push(n)},get:function(){return this[d].active}},autoplay:st(Ot,"autoplay"),controls:Ft({navigation:Ct,pagination:jt,fullscreen:Ht}),loop:st(At,"loop")};var Fo=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),$s=wt('<ol is="slide-show-ol">',Oe,Be,Fo);export{$s as default};
