/* <slide-show> 2.0.0
   By Stephen Band
   Built 2022-04-17 16:12 */

function V(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var we=Array.prototype;function ve(t,e){return typeof t=="function"?t.apply(null,e):t}function Pt(t,e,n){n=n||t.length;var o=n===1?e?t:V(t):V(function(r){return Pt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):ve(o(i),we.slice.call(arguments,1))}}var g=Pt;function ye(t,e){return 1-Math.pow(1-e,t)}var At=g(ye);function h(){}function Z(t,e){return e(t)}function v(t){return t}var be=Array.prototype;function tt(){let t=arguments;return t.length?e=>be.reduce.call(t,Z,e):v}function et(t,e,n){return n*(e-t)+t}var xe=window.performance,Ct=window.requestAnimationFrame,Ee=window.cancelAnimationFrame;function nt(t,e,n){var o=xe.now();function r(s){var a=(s-o)/(t*1e3);a<1?(a>0&&e(a),i=Ct(r)):(e(1),n&&n())}var i=Ct(r);return function(){Ee(i)}}function W(t,e,n,o,r,i){let s=o[n];return nt(t,tt(e,a=>et(s,r,a),a=>o[n]=a),i)}function Le(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function E(t){return t===window?Le():t.getClientRects()[0]||t.getBoundingClientRect()}var F={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:At(3)},Ot=h;function Se(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:E(t).width,i=F.scrollDuration+F.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;Ot=W(i,F.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:E(t).height,i=F.scrollDuration+F.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;Ot=W(i,F.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?Se(this,n):e.apply(this,arguments)}}var Te=Object.defineProperties,Pe=Object.freeze;function Ht(){return this}var N=Pe(Te([],{shift:{value:h},push:{value:h},each:{value:h},forEach:{value:h},start:{value:h},stop:{value:h},done:{value:h},join:{value:function(){return""}},map:{value:Ht},filter:{value:Ht},reduce:{value:function(t,e){return e}}}));function ot(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Qn=g(ot,!0);function rt(t){return t&&t[Symbol.iterator]}var O=Object.assign,H=Object.create,M=Object.defineProperties,kt={source:{writable:!0},target:{writable:!0}};function Ae(t){return t.stop?t.stop():t()}function Ce(t){t.forEach(Ae),t.length=0}function j(t){this.setup=t}O(j.prototype,{pipe:function(t){this.target=t},start:function(){this.setup(this.target,arguments),++c.count},stop:function(){this.stopables&&Ce(this.stopables),--c.count},done:function(e){(this.stopables||(this.stopables=[])).push(e)}});function c(t){if(!c.prototype.isPrototypeOf(this))return new c(t);this.source=typeof t=="function"?new j(t):t,this.source.pipe(this)}O(c,{from:function(t){return new c(t.length?e=>e.push.apply(e,t):h)},of:function(){return this.from(arguments)},combine:function(e){return Oe(e)},merge:function(){return He(arguments)},count:0});O(c.prototype,{push:function(){let t=this.target,e=arguments.length,n=-1;for(;++n<e;)arguments[n]!==void 0&&t.push(arguments[n]);return this},map:function(t){return this.target=new st(this.source,t)},filter:function(t){return this.target=new ct(this.source,t)},flatMap:function(t){return this.target=new at(this.source,t)},reduce:function(t,e){return this.pipe(new lt(this.source,t,e))},scan:function(t,e){return this.target=new pt(this.source,t,e)},take:function(t){return this.target=new ut(this.source,t)},each:function(t){return this.pipe(new Ft(this.source,t))},pipe:function(t){return this.target=t,this.start(),t},start:function(){return this.source.start.apply(this.source,arguments),this},stop:function(){return this.source.stop.apply(this.source,arguments),this},done:function(t){return this.source.done(t),this}});var S=O({fn:{value:v}},kt);function st(t,e){S.source.value=t,S.fn.value=e,M(this,S)}st.prototype=H(c.prototype);st.prototype.push=function(e){return e=this.fn(e),e!==void 0&&this.target.push(e),this};function ct(t,e){S.source.value=t,S.fn.value=e,M(this,S)}ct.prototype=H(c.prototype);ct.prototype.push=function(e){return this.fn(e)&&this.target.push(e),this};function at(t,e){S.source.value=t,S.fn.value=e,M(this,S)}at.prototype=H(c.prototype);at.prototype.push=function(e){let n=this.fn(e);if(n!==void 0)if(rt(n))for(let o of n)o!==void 0&&this.target.push(o);else throw new Error("Cannot .flatMap() non-iterable values");return this};var it=O({n:{value:0,writable:!0}},kt);function ut(t,e){if(typeof e!="number"||e<1)throw new Error("stream.take(n) accepts non-zero positive integers as n ("+e+")");it.source.value=t,it.n.value=e,M(this,it)}ut.prototype=H(c.prototype);ut.prototype.push=function(e){return this.target.push(e),--this.n||this.stop(),this};var A=O({value:{writable:!0}},S);function lt(t,e,n){A.source.value=t,A.fn.value=e,A.value.value=n,M(this,A)}lt.prototype=H(c.prototype);lt.prototype.push=function(e){return e=this.fn(this.value,e),e!==void 0&&(this.value=e),new Promise((n,o)=>{this.done(()=>n(this.value))})};function pt(t,e,n){A.source.value=t,A.fn.value=e,A.value.value=n,M(this,A)}pt.prototype=H(c.prototype);pt.prototype.push=function(e){return e=this.fn(this.value,e),e!==void 0&&(this.value=e,this.target.push(e)),this};var Mt={source:{writable:!0}};function Ft(t,e){Mt.source.value=t,M(this,Mt),this.push=e}Ft.prototype=H(c.prototype,{each:{value:null},pipe:{value:null}});var Dt=Object.keys;function Oe(t){return new c(e=>{let n={},o=Dt(t),r=!1;function i(s,a){n[s]=a,(r||(r=Dt(n).length===o.length))&&e.push(O({},n))}for(let s in t){let a=t[s];a.each?(a.each(u=>i(s,u)),e.done(a)):a.then?a.then(u=>i(s,u)):console.log("Todo: combine() raw values ?")}})}function He(t){return new c(e=>{let n=-1,o;for(;o=t[++n];)o.each?(o.each(r=>e.push(r)),e.done(o)):o.then?o.then(r=>e.push(r)):e.push.apply(e,o)})}var Me=Object.assign;function C(){this.streams=[]}var De=Me(C.prototype,{push:function(){let t=-1,e;for(;e=this.streams[++t];)e.push.apply(e,arguments);return this}});["map","filter","reduce","scan","take","each","pipe"].forEach(t=>{De[t]=function(){let e=new c(n=>{this.streams.push(n),n.done(()=>ot(this.streams,n))});return e[t].apply(e,arguments)}});function y(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var ke=y(v,{is:h,tag:h,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:B,cx:B,cy:B,r:B,preserveAspectRatio:B,viewBox:B,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function B(t,e,n){e.setAttribute(t,n)}function Fe(t,e){for(var n=Object.keys(e),o=n.length;o--;)ke(n[o],t,e[n[o]]);return t}var ft=g(Fe,!0);var Be="http://www.w3.org/2000/svg",Bt=document.createElement("div");var It=(t,e)=>e&&typeof e;function jt(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function b(t,e){var n=document.createElementNS(Be,t);return e&&(n.innerHTML=e),n}var Ie=y(v,{comment:function(t,e){return document.createComment(e||"")},fragment:y(It,{string:function(t,e,n){if(n)return jt(n,e);let o=document.createDocumentFragment();Bt.innerHTML=e;let r=Bt.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?jt(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):ft(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:b,ellipse:b,g:b,glyph:b,image:b,line:b,rect:b,use:b,path:b,pattern:b,polygon:b,polyline:b,svg:b,default:y(It,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):ft(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),w=Ie;function G(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function dt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var bo=g(dt,!0);function je(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function Ge(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function _e(t,e,n,o){let r=dt(t,i=>Ge(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):je(t,e,o):r}var Gt=g(_e,!0);var ht=h;var x=Symbol("internals"),D=Symbol("shadow"),_t=Object.defineProperties,ze={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},Ue={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[x].form}},labels:{get:function(){return this[x].labels}},validity:{get:function(){return this[x].validity}},validationMessage:{get:function(){return this[x].validationMessage}},willValidate:{get:function(){return this[x].willValidate}},checkValidity:{value:function(){return this[x].checkValidity()}},reportValidity:{value:function(){return this[x].reportValidity()}}},Ve={},zt={once:!0},We=0,Ut=!1;function Ne(t){return ze[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var Re=Gt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function Xe(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function qe(t,e){t._initialLoad=!0;let n=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(e.stylesheet){let o=w("link",{rel:"stylesheet",href:e.stylesheet});n.append(o)}return t[D]=n,n}function Ye(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=w("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function $e(t){t._initialAttributes={},t._n=0}function Ke(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function Vt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function Qe(t){return!!t.attribute}function Je(t){return t.set||t.get||t.hasOwnProperty("value")}function Wt(t,e){return Qe(e[1])&&(t.attributes[e[0]]=e[1].attribute),Je(e[1])&&(t.properties[e[0]]=e[1]),t}function mt(t,e,n){let{name:o,tag:r}=Re(t),i=typeof r=="string"?Ne(r):HTMLElement,{attributes:s,properties:a}=n?Object.entries(n).reduce(Wt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Wt,{attributes:{},properties:{}}):Ve;function u(){let l=Reflect.construct(i,arguments,u),p=e.construct&&e.construct.length>We?qe(l,e):void 0,m=u.formAssociated&&Ye(l);return r&&(Ut=!0),e.construct&&e.construct.call(l,p,m),s&&($e(l),Promise.resolve(1).then(function(){Vt(l,u.observedAttributes,s)})),a&&Object.keys(a).reduce(Xe,l),l}return u.prototype=Object.create(i.prototype,a),a&&a.value&&(u.formAssociated=!0,_t(u.prototype,Ue),(e.enable||e.disable)&&(u.prototype.formDisabledCallback=function(l){return l?e.disable&&e.disable.call(this,this[D],this[x]):e.enable&&e.enable.call(this,this[D],this[x])}),e.reset&&(u.prototype.formResetCallback=function(){return e.reset.call(this,this[D],this[x])}),e.restore&&(u.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[D],this[x])})),s&&(u.observedAttributes=Object.keys(s),u.prototype.attributeChangedCallback=function(l,p,m){if(!this._initialAttributes)return s[l].call(this,m);this._initialAttributes[l]=m,Ke(this,u.observedAttributes,s)}),u.prototype.connectedCallback=function(){let l=this,p=l[D],m=l[x];if(l._initialAttributes&&Vt(l,u.observedAttributes,s),l._initialLoad){let d=p.querySelectorAll('link[rel="stylesheet"]');if(d.length){let U=0,f=d.length,T=function(me){++U>=d.length&&(delete l._initialLoad,e.load&&(ht("element()","loaded",Array.from(d).map(ge=>ge.href).join(`
`)),e.load.call(l,p)))},J=T;for(;f--;)d[f].addEventListener("load",T,zt),d[f].addEventListener("error",J,zt);e.connect&&e.connect.call(this,p,m)}else e.connect&&e.connect.call(this,p,m),e.load&&e.load.call(this,p,m)}else e.connect&&e.connect.call(this,p,m)},e.disconnect&&(u.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[D],this[x])}),ht("element()","<"+(r?r+" is="+o:o)+">"),window.customElements.define(o,u,r&&{extends:r}),r&&!Ut&&document.querySelectorAll('[is="'+o+'"]').forEach(l=>{_t(l,a),e.construct&&e.construct.apply(l);let p;for(p in s){let m=l.attributes[p];m&&s[p].call(l,m.value)}e.connect&&e.connect.apply(l)}),u}var Ze=Object.assign,tn=/\s+/,Nt=0;window.addEventListener("click",t=>Nt=t.timeStamp);function en(t,e){return t.node.addEventListener(e,t,t.options),t}function nn(t,e){return t.node.removeEventListener(e,t),t}function Rt(t,e,n,o){this.controller=t,this.types=e.split(tn),this.options=n,this.node=o,this.select=n&&n.select,this.types.reduce(en,this)}Ze(Rt.prototype,{stop:function(){this.types.reduce(nn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=Nt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this.controller.push(t)}}});function L(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new c(o=>o.done(new Rt(o,t,n,e)))}function Xt(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}function on(t,e){return e[t]}var qt=g(on,!0);function gt(t){return typeof t}var rn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function sn(t,e){if(typeof e=="number")return e;var n=rn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var R=g(sn);var cn=/px$/,Yt={"transform:translateX":function(t){var e=_("transform",t);if(!e||e==="none")return 0;var n=X(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=_("transform",t);if(!e||e==="none")return 0;var n=X(e);return parseFloat(n[5])},"transform:scale":function(t){var e=_("transform",t);if(!e||e==="none")return 0;var n=X(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=_("transform",t);if(!e||e==="none")return 0;var n=X(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function X(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function _(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function q(t,e){if(Yt[t])return Yt[t](e);var n=_(t,e);return typeof n=="string"&&cn.test(n)?parseFloat(n):n}var Y,$;function an(){if(!Y){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",Y=q("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return Y}function un(){return $||($=q("font-size",document.documentElement)),$}window.addEventListener("resize",()=>{Y=void 0,$=void 0});var k=y(gt,{number:v,string:R({em:function(t){return an()*t},px:function(t){return t},rem:function(t){return un()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),$t=k;var wt=Object.assign,K={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function ln(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function Kt(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=$t(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}wt(Kt.prototype,{handleEvent:y(qt("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&ln(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.stream.push(new c(t=>{t.push.apply(t,this.events),this.events=t}))},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function pn(t){var e=t.target.tagName;return e&&(!!K.ignoreTags[e.toLowerCase()]||t.target.draggable)}function Qt(t,e,n){this.stream=t,this.node=e,this.options=n,this.node.addEventListener("pointerdown",this)}wt(Qt.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!pn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new Kt(this.stream,[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this)}});function vt(t,e){return t=e&&t?wt({},K,t):K,e=e||t,new c(n=>n.done(new Qt(n,e,t)))}var fn=Object.assign,dn={capture:!0,passive:!0},z={minScrollEventInterval:.0375,maxScrollEventInterval:.18},Jt=z.maxScrollEventInterval;function hn(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<z.minScrollEventInterval?z.minScrollEventInterval:n,Jt=1.4*n>z.maxScrollEventInterval?z.maxScrollEventInterval:1.4*n}function mn(t,e){let{times:n}=t;t.value.stop(),t.value=void 0,n.length>1&&hn(n),n.length=0}function Zt(t){this.element=t,this.times=[]}fn(Zt.prototype,j.prototype,{start:function(){this.element.addEventListener("scroll",this,dn),++c.count},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.value?(clearTimeout(this.timer),this.value.push(t)):(this.value=c.of(t),this.target.push(this.value)),this.timer=setTimeout(mn,Jt*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",scroll),j.prototype.stop.apply(this,arguments)}});function yt(t){return new c(new Zt(t))}var bt=Object.assign,gn=window.CustomEvent,xt={bubbles:!0,cancelable:!0};function Et(t,e){let n;typeof t=="object"&&(n=bt({},xt,t),t=n.type,delete n.type),e&&e.detail&&(n?n.detail=e.detail:n=bt({detail:e.detail},xt));var o=new gn(t,n||xt);return e&&(delete e.detail,bt(o,e)),o}function Lt(t,e){let n;typeof t=="object"&&(n=t,t=n.type,delete n.type);let o=Et(t,n);return e.dispatchEvent(o)}var er=g(Lt,!0);function te(t){let e=E(t),n=window.getComputedStyle(t,null),o=k(n.getPropertyValue("padding-left")),r=k(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function ee(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function St(t,e){let n=te(t),o=E(e),r=ee(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(r==="left"?o.left-n.leftPadding:r==="right"?o.right-n.rightPadding:o.left+o.width/2-n.centrePadding),behavior:"smooth"})}function wn(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=te(t),i=e.length,s;for(;s=e[--i];){let a=E(s);if(!a)continue;let u=ee(s),l=a.width/2+(u==="left"?n:u==="right"?o:r);if((u==="left"?a.left:u==="right"?a.right:a.left+a.width/2)<=l)break}return s}function I(t){let{scroller:e,children:n}=t,o=wn(e,n);o!==t.active&&(t.active=o,o!==void 0&&(t.actives.push(o),Lt("slide-active",o)))}var ne=y((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{I(t),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let i,s=L("scroll",n).each(()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>i=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),s.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var vn=R({s:v,ms:t=>t/1e3});function yn(t){let{active:e,children:n,host:o}=t,r=n.indexOf(e),i=n[r+1]||n[0];t.autoplay.timer=null,!!i&&(o.active=i)}function bn(t){let{active:e,style:n}=t,o=vn(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(yn,o*1e3,t)}function oe(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function re(t){let{host:e}=t,n=t.autoplay={},o=c.merge([t.active],t.actives.map(i=>i)),r=c.merge([!1],L("pointerenter pointerleave",e).map(i=>i.type==="pointerenter"));n.updates=c.combine({active:o,hover:r}).each(i=>i.hover?oe(t):bn(t))}function ie(t){oe(t),t.autoplay.updates.stop(),t.autoplay=void 0}function xn(t,e,n){let o=n.length,r=-1/0;for(;o--;){let l=E(n[o]),p=l.x+l.width;r=p>r?p:r}let i=E(e),s=getComputedStyle(t),a=k(s.paddingLeft),u=k(s.paddingRight);return a+u+r-i.x}function Tt(t){let{children:e,scroller:n,slides:o,slotchanges:r,resizes:i}=t;function s(a){let u=xn(n,o,e);n.style.setProperty("--scroll-width",u+"px")}t.noloop={slotchanges:c.merge([{}],r,i).each(s),resizes:i.each(s)}}function se(t){t.noloop&&(t.noloop.slotchanges.stop(),t.noloop.resizes.stop(),t.noloop=void 0)}function ce(t){Tt(t)}function Q(t){if(!t.controls){let e=w("nav",{part:"controls"});t.shadow.append(e),t.controls=e}}function ae(t){let{active:e,children:n,navigation:{prev:o,next:r}}=t,i=n.indexOf(e);i===0?o.hidden=!0:o.hidden=!1,i===n.length-1?r.hidden=!0:r.hidden=!1}function ue(t,e){let{actives:n,clicks:o,slotchanges:r}=t;Q(t);let i=w("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),s=w("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"});t.controls.prepend(i,s);let a=t.navigation={prev:i,next:s};a.slotchanges=r.each(()=>ae(t)),a.actives=c.merge([t.active],n.map(u=>u)).each(()=>ae(t)),a.clicks=o.each(G({'[name="navigation"]':function(u,l){let{active:p,children:m,host:d}=t,U=parseFloat(u.value),f=m.indexOf(p)+U,T=m[f];!T||(d.active=T,f===0?i.hidden=!0:i.hidden=!1,f===m.length-1?s.hidden=!0:s.hidden=!1)}}))}function le(t){t.navigation.prev.remove(),t.navigation.next.remove(),t.navigation.nav.remove(),t.navigation.slotchanges.stop(),t.navigation.actives.stop(),t.navigation.clicks.stop(),t.navigation=void 0}function pe(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&r.children[i].part.remove("page-button-active");let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),t.index=s,t.active=n)}function En(t,e,n,o){e.buttons&&(e.buttons.remove(),e.buttons=void 0),!(o.length<2)&&(e.buttons=w("div",{part:"pagination",children:o.map((r,i)=>w("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons))}function fe(t,e){let{shadow:n,actives:o,clicks:r}=t;Q(t);let i=t.pagination={};i.slotchanges=c.merge([N],t.slotchanges.map(s=>s)).each(()=>En(t.controls,i,n,t.children)),i.actives=c.merge([t.active],o.map(s=>s)).each(()=>pe(i,t.children,t.active)),i.clicks=r.each(G({'[name="pagination"]':function(s,a){let{children:u,host:l}=t,p=u[s.value];!p||(l.active=p,pe(i,t.children,p))}}))}function de(t){t.pagination.buttons.remove(),t.pagination.slotchanges.stop(),t.pagination.actives.stop(),t.pagination.clicks.stop(),t.pagination=void 0}var P=Symbol("data");function Ln(t,e){return scrollAuto(t.host,t.slot,e),t.slot.scrollWidth<=t.slot.clientWidth?t.slot.classList.remove("scrollable"):t.slot.classList.add("scrollable"),t.active=e,t}var Sn={stylesheet:window.customElementStylesheetPath&&window.customElementStylesheetPath+"slide-show.shadow.css"||window.elementSlideShowStylesheet||import.meta.url.replace(/\/[^\/]*([?#].*)?$/,"/")+"shadow.css",construct:function(t){let e=w("slot",{part:"slides"}),n=w("div",{class:"scroller",children:[e]});t.append(n);let o=L("slotchange",e).pipe(new C),r=L("click",t).filter(Xt).pipe(new C),i=L("focusin",this),s=L("resize",window).pipe(new C),a=L("fullscreenchange",window),u=yt(n).pipe(new C),l=vt({threshold:"0.25rem",device:"mouse"},t).filter(()=>d.children.length>1),p=c.of().pipe(new C),m={},d=this[P]={clickSuppressTime:-1/0,host:this,children:N,style:window.getComputedStyle(this),shadow:t,scroller:n,slides:e,actives:p,scrolls:u,slotchanges:o,clicks:r,resizes:s,fullscreens:a,swipes:l},U=c.of().reduce(Ln,d);o.each(()=>d.children=e.assignedElements()),r.each(function(f){window.performance.now()-d.clickSuppressTime<120&&(f.preventDefault(),f.stopPropagation())}),l.each(f=>{d.pointers=f,f.reduce(ne,d)}),a.each(f=>{f.target===this||f.target.contains(this)}),u.each(f=>f.each(()=>{}).done(()=>I(d))),i.each(f=>{let T=d.children.indexOf(f.target)!==-1?f.target:d.children.find(J=>J.contains(f.target));!T||St(d.scroller,T)})},load:function(t){let e=this[P];this.loop||Tt(e),I(e),e.slotchanges.each(()=>I(e))}},Tn={active:{set:function(t){let e=this[P],n=typeof t!="object"?this.querySelector("#"+(/^\d/.test((id+"")[0])?"\\3"+(id+"")[0]+" "+(id+"").slice(1):t)):t;if(!n)throw new Error("Cannot set active – not a child of slide-show");St(e.scroller,n)},get:function(){return this[P].active}},autoplay:{attribute:function(t){this.autoplay=t!==null},set:function(t){let e=this[P];return!t==!e.autoplay?void 0:t?re(e):ie(e)},get:function(){return!!this[P].autoplay}},controls:{attribute:function(t){let e=this[P],n,o;if(typeof t=="string"&&t!==""){let r=t.split(/\s+/);n=r.includes("navigation"),o=r.includes("pagination")}else{let r=t!==null;n=r,o=r}!!n!=!!e.navigation&&(n?ue(e):le(e)),!!o!=!!e.pagination&&(o?fe(e):de(e))}},loop:{attribute:function(t){this.loop=t!==null},set:function(t){let e=this[P];return!t==!e.loop?void 0:t?se(e):ce(e)},get:function(){return!!this[P].loop}}},Kr=mt("slide-show",Sn,Tn);export{Kr as default};
//# sourceMappingURL=element.js.map
