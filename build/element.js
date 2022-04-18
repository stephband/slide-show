/* <slide-show> 
   2.0.0
   By Stephen Band
   Built 2022-04-18 02:03 */

function U(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Le=Array.prototype;function Pe(t,e){return typeof t=="function"?t.apply(null,e):t}function Ot(t,e,n){n=n||t.length;var o=n===1?e?t:U(t):U(function(r){return Ot(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Pe(o(i),Le.slice.call(arguments,1))}}var h=Ot;function Ae(t,e){return 1-Math.pow(1-e,t)}var Ct=h(Ae);function g(){}function Z(t,e){return e(t)}function y(t){return t}var Oe=Array.prototype;function tt(){let t=arguments;return t.length?e=>Oe.reduce.call(t,Z,e):y}function et(t,e,n){return n*(e-t)+t}var Ce=window.performance,kt=window.requestAnimationFrame,ke=window.cancelAnimationFrame;function nt(t,e,n){var o=Ce.now();function r(s){var u=(s-o)/(t*1e3);u<1?(u>0&&e(u),i=kt(r)):(e(1),n&&n())}var i=kt(r);return function(){ke(i)}}function N(t,e,n,o,r,i){let s=o[n];return nt(t,tt(e,u=>et(s,r,u),u=>o[n]=u),i)}function He(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function b(t){return t===window?He():t.getClientRects()[0]||t.getBoundingClientRect()}var I={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Ct(3)},Ht=g;function Me(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:b(t).width,i=I.scrollDuration+I.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;Ht=N(i,I.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:b(t).height,i=I.scrollDuration+I.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;Ht=N(i,I.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?Me(this,n):e.apply(this,arguments)}}function Mt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Mt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Dt=h(Mt,!0);var De=Object.defineProperties,Fe=Object.freeze;function Ft(){return this}var C=Fe(De([],{shift:{value:g},push:{value:g},each:{value:g},forEach:{value:g},start:{value:g},stop:{value:g},done:{value:g},join:{value:function(){return""}},map:{value:Ft},filter:{value:Ft},reduce:{value:function(t,e){return e}}}));function ot(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var co=h(ot,!0);function rt(t){return t&&t[Symbol.iterator]}var k=Object.assign,H=Object.create,M=Object.defineProperties,Bt={source:{writable:!0},target:{writable:!0}};function Ie(t){return t.stop?t.stop():t()}function je(t){t.forEach(Ie),t.length=0}function G(t){this.setup=t}k(G.prototype,{pipe:function(t){this.target=t},start:function(){this.setup(this.target,arguments),++l.count},stop:function(){this.stopables&&je(this.stopables),--l.count},done:function(e){(this.stopables||(this.stopables=[])).push(e)}});function l(t){if(!l.prototype.isPrototypeOf(this))return new l(t);this.source=typeof t=="function"?new G(t):t,this.source.pipe(this)}k(l,{from:function(t){return new l(t.length?e=>e.push.apply(e,t):g)},of:function(){return this.from(arguments)},combine:function(e){return Be(e)},merge:function(){return Ge(arguments)},count:0});k(l.prototype,{push:function(){let t=this.target,e=arguments.length,n=-1;for(;++n<e;)arguments[n]!==void 0&&t.push(arguments[n]);return this},map:function(t){return this.target=new st(this.source,t)},filter:function(t){return this.target=new ut(this.source,t)},flatMap:function(t){return this.target=new ct(this.source,t)},reduce:function(t,e){return this.pipe(new lt(this.source,t,e))},scan:function(t,e){return this.target=new pt(this.source,t,e)},take:function(t){return this.target=new at(this.source,t)},each:function(t){return this.pipe(new Gt(this.source,t))},pipe:function(t){return this.target=t,this.start(),t},start:function(){return this.source.start.apply(this.source,arguments),this},stop:function(){return this.source.stop.apply(this.source,arguments),this},done:function(t){return this.source.done(t),this}});var S=k({fn:{value:y}},Bt);function st(t,e){S.source.value=t,S.fn.value=e,M(this,S)}st.prototype=H(l.prototype);st.prototype.push=function(e){return e=this.fn(e),e!==void 0&&this.target.push(e),this};function ut(t,e){S.source.value=t,S.fn.value=e,M(this,S)}ut.prototype=H(l.prototype);ut.prototype.push=function(e){return this.fn(e)&&this.target.push(e),this};function ct(t,e){S.source.value=t,S.fn.value=e,M(this,S)}ct.prototype=H(l.prototype);ct.prototype.push=function(e){let n=this.fn(e);if(n!==void 0)if(rt(n))for(let o of n)o!==void 0&&this.target.push(o);else throw new Error("Cannot .flatMap() non-iterable values");return this};var it=k({n:{value:0,writable:!0}},Bt);function at(t,e){if(typeof e!="number"||e<1)throw new Error("stream.take(n) accepts non-zero positive integers as n ("+e+")");it.source.value=t,it.n.value=e,M(this,it)}at.prototype=H(l.prototype);at.prototype.push=function(e){return this.target.push(e),--this.n||this.stop(),this};var A=k({value:{writable:!0}},S);function lt(t,e,n){A.source.value=t,A.fn.value=e,A.value.value=n,M(this,A)}lt.prototype=H(l.prototype);lt.prototype.push=function(e){return e=this.fn(this.value,e),e!==void 0&&(this.value=e),new Promise((n,o)=>{this.done(()=>n(this.value))})};function pt(t,e,n){A.source.value=t,A.fn.value=e,A.value.value=n,M(this,A)}pt.prototype=H(l.prototype);pt.prototype.push=function(e){return e=this.fn(this.value,e),e!==void 0&&(this.value=e,this.target.push(e)),this};var It={source:{writable:!0}};function Gt(t,e){It.source.value=t,M(this,It),this.push=e}Gt.prototype=H(l.prototype,{each:{value:null},pipe:{value:null}});var jt=Object.keys;function Be(t){return new l(e=>{let n={},o=jt(t),r=!1;function i(s,u){n[s]=u,(r||(r=jt(n).length===o.length))&&e.push(k({},n))}for(let s in t){let u=t[s];u.each?(u.each(c=>i(s,c)),e.done(u)):u.then?u.then(c=>i(s,c)):console.log("Todo: combine() raw values ?")}})}function Ge(t){return new l(e=>{let n=-1,o;for(;o=t[++n];)o.each?(o.each(r=>e.push(r)),e.done(o)):o.then?o.then(r=>e.push(r)):e.push.apply(e,o)})}var _e=Object.assign;function L(){this.streams=[]}var ze=_e(L.prototype,{push:function(){let t=-1,e;for(;e=this.streams[++t];)e.push.apply(e,arguments);return this}});["map","filter","reduce","scan","take","each","pipe"].forEach(t=>{ze[t]=function(){let e=new l(n=>{this.streams.push(n),n.done(()=>ot(this.streams,n))});return e[t].apply(e,arguments)}});function w(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var Ve=w(y,{is:g,tag:g,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:j,cx:j,cy:j,r:j,preserveAspectRatio:j,viewBox:j,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function j(t,e,n){e.setAttribute(t,n)}function Re(t,e){for(var n=Object.keys(e),o=n.length;o--;)Ve(n[o],t,e[n[o]]);return t}var ft=h(Re,!0);var Ue="http://www.w3.org/2000/svg",_t=document.createElement("div");var zt=(t,e)=>e&&typeof e;function Vt(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function x(t,e){var n=document.createElementNS(Ue,t);return e&&(n.innerHTML=e),n}var Ne=w(y,{comment:function(t,e){return document.createComment(e||"")},fragment:w(zt,{string:function(t,e,n){if(n)return Vt(n,e);let o=document.createDocumentFragment();_t.innerHTML=e;let r=_t.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?Vt(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):ft(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:x,ellipse:x,g:x,glyph:x,image:x,line:x,rect:x,use:x,path:x,pattern:x,polygon:x,polyline:x,svg:x,default:w(zt,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):ft(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),v=Ne;function _(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function dt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var Ho=h(dt,!0);function We(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function qe(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function Xe(t,e,n,o){let r=dt(t,i=>qe(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):We(t,e,o):r}var Rt=h(Xe,!0);var mt=g;var E=Symbol("internals"),D=Symbol("shadow"),Ut=Object.defineProperties,Ye={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},$e={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[E].form}},labels:{get:function(){return this[E].labels}},validity:{get:function(){return this[E].validity}},validationMessage:{get:function(){return this[E].validationMessage}},willValidate:{get:function(){return this[E].willValidate}},checkValidity:{value:function(){return this[E].checkValidity()}},reportValidity:{value:function(){return this[E].reportValidity()}}},Ke={},Nt={once:!0},Qe=0,Wt=!1;function Je(t){return Ye[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var Ze=Rt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function tn(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function en(t,e){t._initialLoad=!0;let n=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(e.stylesheet){let o=v("link",{rel:"stylesheet",href:e.stylesheet});n.append(o)}return t[D]=n,n}function nn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=v("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function on(t){t._initialAttributes={},t._n=0}function rn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function qt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function sn(t){return!!t.attribute}function un(t){return t.set||t.get||t.hasOwnProperty("value")}function Xt(t,e){return sn(e[1])&&(t.attributes[e[0]]=e[1].attribute),un(e[1])&&(t.properties[e[0]]=e[1]),t}function ht(t,e,n){let{name:o,tag:r}=Ze(t),i=typeof r=="string"?Je(r):HTMLElement,{attributes:s,properties:u}=n?Object.entries(n).reduce(Xt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Xt,{attributes:{},properties:{}}):Ke;function c(){let a=Reflect.construct(i,arguments,c),p=e.construct&&e.construct.length>Qe?en(a,e):void 0,d=c.formAssociated&&nn(a);return r&&(Wt=!0),e.construct&&e.construct.call(a,p,d),s&&(on(a),Promise.resolve(1).then(function(){qt(a,c.observedAttributes,s)})),u&&Object.keys(u).reduce(tn,a),a}return c.prototype=Object.create(i.prototype,u),u&&u.value&&(c.formAssociated=!0,Ut(c.prototype,$e),(e.enable||e.disable)&&(c.prototype.formDisabledCallback=function(a){return a?e.disable&&e.disable.call(this,this[D],this[E]):e.enable&&e.enable.call(this,this[D],this[E])}),e.reset&&(c.prototype.formResetCallback=function(){return e.reset.call(this,this[D],this[E])}),e.restore&&(c.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[D],this[E])})),s&&(c.observedAttributes=Object.keys(s),c.prototype.attributeChangedCallback=function(a,p,d){if(!this._initialAttributes)return s[a].call(this,d);this._initialAttributes[a]=d,rn(this,c.observedAttributes,s)}),c.prototype.connectedCallback=function(){let a=this,p=a[D],d=a[E];if(a._initialAttributes&&qt(a,c.observedAttributes,s),a._initialLoad){let f=p.querySelectorAll('link[rel="stylesheet"]');if(f.length){let m=0,O=f.length,R=function(Te){++m>=f.length&&(delete a._initialLoad,e.load&&(mt("element()","loaded",Array.from(f).map(Se=>Se.href).join(`
`)),e.load.call(a,p)))},xe=R;for(;O--;)f[O].addEventListener("load",R,Nt),f[O].addEventListener("error",xe,Nt);e.connect&&e.connect.call(this,p,d)}else e.connect&&e.connect.call(this,p,d),e.load&&e.load.call(this,p,d)}else e.connect&&e.connect.call(this,p,d)},e.disconnect&&(c.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[D],this[E])}),mt("element()","<"+(r?r+" is="+o:o)+">"),window.customElements.define(o,c,r&&{extends:r}),r&&!Wt&&document.querySelectorAll('[is="'+o+'"]').forEach(a=>{Ut(a,u),e.construct&&e.construct.apply(a);let p;for(p in s){let d=a.attributes[p];d&&s[p].call(a,d.value)}e.connect&&e.connect.apply(a)}),c}var cn=Object.assign,an=/\s+/,Yt=0;window.addEventListener("click",t=>Yt=t.timeStamp);function ln(t,e){return t.node.addEventListener(e,t,t.options),t}function pn(t,e){return t.node.removeEventListener(e,t),t}function $t(t,e,n,o){this.controller=t,this.types=e.split(an),this.options=n,this.node=o,this.select=n&&n.select,this.types.reduce(ln,this)}cn($t.prototype,{stop:function(){this.types.reduce(pn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=Yt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this.controller.push(t)}}});function T(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new l(o=>o.done(new $t(o,t,n,e)))}function Kt(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}function fn(t,e){return e[t]}var W=h(fn,!0);function gt(t){return typeof t}var dn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function mn(t,e){if(typeof e=="number")return e;var n=dn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var q=h(mn);var hn=/px$/,Qt={"transform:translateX":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=X(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=X(e);return parseFloat(n[5])},"transform:scale":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=X(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=X(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function X(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function z(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function Y(t,e){if(Qt[t])return Qt[t](e);var n=z(t,e);return typeof n=="string"&&hn.test(n)?parseFloat(n):n}var $,K;function gn(){if(!$){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",$=Y("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return $}function wn(){return K||(K=Y("font-size",document.documentElement)),K}window.addEventListener("resize",()=>{$=void 0,K=void 0});var F=w(gt,{number:y,string:q({em:function(t){return gn()*t},px:function(t){return t},rem:function(t){return wn()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),Jt=F;var wt=Object.assign,Q={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function vn(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function Zt(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=Jt(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}wt(Zt.prototype,{handleEvent:w(W("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&vn(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.stream.push(new l(t=>{t.push.apply(t,this.events),this.events=t}))},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function yn(t){var e=t.target.tagName;return e&&(!!Q.ignoreTags[e.toLowerCase()]||t.target.draggable)}function te(t,e,n){this.stream=t,this.node=e,this.options=n,this.node.addEventListener("pointerdown",this)}wt(te.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!yn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new Zt(this.stream,[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this)}});function vt(t,e){return t=e&&t?wt({},Q,t):Q,e=e||t,new l(n=>n.done(new te(n,e,t)))}var bn=Object.assign,xn={capture:!0,passive:!0},V={minScrollEventInterval:.0375,maxScrollEventInterval:.18},ee=V.maxScrollEventInterval;function En(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<V.minScrollEventInterval?V.minScrollEventInterval:n,ee=1.4*n>V.maxScrollEventInterval?V.maxScrollEventInterval:1.4*n}function Tn(t,e){let{times:n}=t;t.value.stop(),t.value=void 0,n.length>1&&En(n),n.length=0}function ne(t){this.element=t,this.times=[]}bn(ne.prototype,G.prototype,{start:function(){this.element.addEventListener("scroll",this,xn),++l.count},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.value?(clearTimeout(this.timer),this.value.push(t)):(this.value=l.of(t),this.target.push(this.value)),this.timer=setTimeout(Tn,ee*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",scroll),G.prototype.stop.apply(this,arguments)}});function yt(t){return new l(new ne(t))}var bt=Object.assign,Sn=window.CustomEvent,xt={bubbles:!0,cancelable:!0};function Et(t,e){let n;typeof t=="object"&&(n=bt({},xt,t),t=n.type,delete n.type),e&&e.detail&&(n?n.detail=e.detail:n=bt({detail:e.detail},xt));var o=new Sn(t,n||xt);return e&&(delete e.detail,bt(o,e)),o}function Tt(t,e){let n;typeof t=="object"&&(n=t,t=n.type,delete n.type);let o=Et(t,n);return e.dispatchEvent(o)}var fr=h(Tt,!0);function oe(t){let e=b(t),n=window.getComputedStyle(t,null),o=F(n.getPropertyValue("padding-left")),r=F(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function re(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function ie(t,e,n){let o=oe(t),r=b(e),i=re(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function St(t,e,n){ie(t,e,"smooth")}function Lt(t,e){t.style.setProperty("scroll-behavior","auto","important"),ie(t,e,"auto"),t.style.setProperty("scroll-behavior","")}function Ln(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=oe(t),i=e.length,s;for(;s=e[--i];){let u=b(s);if(!u)continue;let c=re(s),a=u.width/2+(c==="left"?n:c==="right"?o:r);if((c==="left"?u.left:c==="right"?u.right:u.left+u.width/2)<=a)break}return s}function Pn(t){return!!t.dataset.slideIndex}function B(t){let{scroller:e,children:n,elements:o}=t,r=Ln(e,o),i;Pn(r)?(i=n[r.dataset.slideIndex],Lt(e,i)):i=r,i!==t.active&&(t.active=i,i!==void 0&&(t.actives.push(i),Tt("slide-active",i)))}var se=w((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{B(t),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let i,s=T({type:"scroll",passive:!0},n).each(()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>i=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),s.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var An=q({s:y,ms:t=>t/1e3});function On(t){let{active:e,children:n,host:o}=t,r=n.indexOf(e),i=n[r+1]||n[0];t.autoplay.timer=null,!!i&&(o.active=i)}function Cn(t){let{active:e,style:n}=t,o=An(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(On,o*1e3,t)}function ue(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function ce(t){let{host:e}=t,n=t.autoplay={},o=l.merge([t.active],t.actives.map(s=>s)),r=l.merge([!1],T("pointerenter pointerleave",e).map(s=>s.type==="pointerenter")),i=l.merge([e.contains(document.activeElement)],T("focusin focusout",e).map(w(W("type"),{focusin:s=>!0,focusout:s=>e.contains(s.relatedTarget)}))).map((s=>u=>s===u?void 0:s=u)());n.updates=l.combine({active:o,hover:r,focus:i}).each(s=>s.hover||s.focus?ue(t):Cn(t))}function ae(t){ue(t),t.autoplay.updates.stop(),t.autoplay=void 0}var le=2400;function pe(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function fe(t){return!t.dataset.slideIndex}function kn(t){let{active:e,children:n,host:o,scroller:r}=t;if(n.length<2)return;let i=n.map(b),s=i[0].left,u=i[i.length-1].right,c=0;for(;i[++c]&&i[c].left<s+le;);let a=n.slice(0,c).map(pe);for(c=i.length-1;i[--c]&&i[c].right>u-le;);let p=n.slice(++c).map((d,f)=>pe(d,c+f));console.log("LOOP RENDER",p.length,a.length,e),o.prepend.apply(o,p),o.append.apply(o,a),t.loop.prepends=p,t.loop.appends=a,Lt(r,e||n[0])}function Pt(t){let{mutations:e}=t,n=t.loop={};!t.loaded||(n.mutations=l.merge([C],e.map(o=>o)).each(()=>kn(t)))}function At(t){t.loop&&(t.loop.prepends&&t.loop.prepends.forEach(e=>e.remove()),t.loop.appends&&t.loop.appends.forEach(e=>e.remove()),t.loop.mutations.stop(),t.loop.actives.stop(),t.loop=void 0)}function J(t){if(!t.controls){let e=v("nav",{part:"controls"});t.shadow.append(e),t.controls=e}}function me(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function de(t){let{active:e,elements:n,navigation:{prev:o,next:r}}=t,i=n.indexOf(e);me(o,r,n,i)}function he(t,e){let{host:n,actives:o,clicks:r,mutations:i}=t;J(t);let s=t.navigation={prev:v("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:v("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};t.controls.prepend(s.prev,s.next),s.mutations=i.each(()=>de(t)),s.actives=l.merge([t.active],o.map(u=>u)).each(()=>de(t)),s.clicks=r.each(_({'[name="navigation"]':function(u,c){let a=parseFloat(u.value),p=t.elements.indexOf(t.active)+a,d=t.elements[p];!d||(n.active=d,me(s.prev,s.next,t.elements,p))}}))}function ge(t){t.navigation.prev.remove(),t.navigation.next.remove(),t.navigation.nav.remove(),t.navigation.mutations.stop(),t.navigation.actives.stop(),t.navigation.clicks.stop(),t.navigation=void 0}function we(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function Hn(t,e,n,o){e.buttons&&(e.buttons.remove(),e.buttons=void 0),!(o.length<2)&&(e.buttons=v("div",{part:"pagination",children:o.map((r,i)=>v("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons))}function ve(t,e){let{shadow:n,actives:o,clicks:r}=t;J(t);let i=t.pagination={activeSpan:v("span",{class:"invisible",text:"(Current slide)"})};i.mutations=l.merge([C],t.mutations.map(s=>s)).each(()=>Hn(t.controls,i,n,t.children.filter(s=>!s.dataset.slideIndex))),i.actives=l.merge([t.active],o.map(s=>s)).each(()=>we(i,t.children.filter(s=>!s.dataset.slideIndex),t.active)),i.clicks=r.each(_({'[name="pagination"]':function(s,u){let{host:c}=t,a=t.children.filter(d=>!d.dataset.slideIndex),p=a[s.value];!p||(c.active=p,we(i,a,p))}}))}function ye(t){t.pagination.buttons.remove(),t.pagination.mutations.stop(),t.pagination.actives.stop(),t.pagination.clicks.stop(),t.pagination=void 0}var P=Symbol("data");function Mn(t,e,n){let o=n.length,r=-1/0;for(;o--;){let a=b(n[o]),p=a.x+a.width;r=p>r?p:r}let i=b(e),s=getComputedStyle(t),u=F(s.paddingLeft),c=F(s.paddingRight);return u+c+r-i.x}function be(t,e,n){let o=Mn(t,e,n);t.style.setProperty("--scroll-width",o+"px")}var Dn={stylesheet:window.customElementStylesheetPath&&window.customElementStylesheetPath+"slide-show.shadow.css"||window.elementSlideShowStylesheet||import.meta.url.replace(/\/[^\/]*([?#].*)?$/,"/")+"shadow.css",construct:function(t){let e=v("slot",{part:"slides"}),n=v("div",{class:"scroller",children:[e]});t.append(n);let o=T("slotchange",e).pipe(new L),r=new L,i=T("click",t).filter(Kt).pipe(new L),s=T("focusin",this),u=T("resize",window).pipe(new L),c=T("fullscreenchange",window),a=yt(n).pipe(new L),p=vt({threshold:"0.25rem",device:"mouse"},t).filter(()=>f.children.length>1),d=new L,f=this[P]={clickSuppressTime:-1/0,host:this,style:window.getComputedStyle(this),elements:C,children:C,shadow:t,scroller:n,slides:e,actives:d,scrolls:a,slotchanges:o,mutations:r,clicks:i,resizes:u,fullscreens:c,swipes:p};o.each(()=>{f.elements=e.assignedElements(),be(f.scroller,f.slides,f.elements)}),u.each(()=>be(f.scroller,f.slides,f.elements)),o.map(()=>{let m=f.elements.filter(fe);return Dt(f.children,m)?void 0:f.children=m}).pipe(r),i.each(function(m){window.performance.now()-f.clickSuppressTime<120&&(m.preventDefault(),m.stopPropagation())}),p.each(m=>{f.pointers=m,m.reduce(se,f)}),c.each(m=>{m.target===this||m.target.contains(this)}),a.each(m=>m.each(()=>{}).done(()=>B(f))),s.each(m=>{let O=f.children.indexOf(m.target)!==-1?m.target:f.children.find(R=>R.contains(m.target));!O||St(f.scroller,O)})},load:function(t){let e=this[P];e.loaded=!0,this.loop?Pt(e):At(e),B(e),e.slotchanges.each(()=>B(e))}},Fn={active:{set:function(t){let e=this[P],n=typeof t!="object"?this.querySelector("#"+(/^\d/.test((id+"")[0])?"\\3"+(id+"")[0]+" "+(id+"").slice(1):t)):t;if(!n)throw new Error("Cannot set active – not a child of slide-show");St(e.scroller,n)},get:function(){return this[P].active}},autoplay:{attribute:function(t){this.autoplay=t!==null},set:function(t){let e=this[P];return!t==!e.autoplay?void 0:t?ce(e):ae(e)},get:function(){return!!this[P].autoplay}},controls:{attribute:function(t){let e=this[P],n,o;if(typeof t=="string"&&t!==""){let r=t.split(/\s+/);n=r.includes("navigation"),o=r.includes("pagination")}else{let r=t!==null;n=r,o=r}!!n!=!!e.navigation&&(n?he(e):ge(e)),!!o!=!!e.pagination&&(o?ve(e):ye(e))}},loop:{attribute:function(t){this.loop=t!==null},set:function(t){let e=this[P];return!t==!e.loop?void 0:t?Pt(e):At(e)},get:function(){return!!this[P].loop}},previous:{value:function(){console.log("Todo: advance slide")}},next:{value:function(){console.log("Todo: back slide")}}},mi=ht("slide-show",Dn,Fn);export{mi as default};
//# sourceMappingURL=element.js.map
