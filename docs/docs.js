/* slide-show 
   1.2.2
   By Stephen Band
   Built 2023-02-22 14:54 */

var nt=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable;var ot=(t,e)=>{var o={};for(var r in t)At.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&nt)for(var r of nt(t))e.indexOf(r)<0&&Bt.call(t,r)&&(o[r]=t[r]);return o};function w(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var Dt=Array.prototype;function Lt(t,e){return typeof t=="function"?t.apply(null,e):t}function rt(t,e,o){o=o||t.length;var r=o===1?e?t:w(t):w(function(i){return rt(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):Lt(r(s),Dt.slice.call(arguments,1))}}var c=rt;function B(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return t}var me=c(B,!0);function U(t){return document.getElementById(t)||void 0}function P(t){return t.tagName&&t.tagName.toLowerCase()}function Tt(t,e){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):e.webkitMatchesSelector?e.webkitMatchesSelector(t):e.mozMatchesSelector?e.mozMatchesSelector(t):e.msMatchesSelector?e.msMatchesSelector(t):e.oMatchesSelector?e.oMatchesSelector(t):P(e)===t}var m=c(Tt,!0);function it(t,e){var o=arguments[2];if(!(!e||e===document||e===o||e.nodeType===11))return e=e.correspondingUseElement||e,m(t,e)?e:it(t,e.parentNode,o)}var st=c(it,!0);function G(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function q(t){return t&&t[Symbol.iterator]}var Ot=Object.assign;function Ft(t){return t.stop?t.stop():t()}function E(){}Ot(E.prototype,{stop:function(){let t=this.stopables;return this.stopables=void 0,t&&t.forEach(Ft),this},done:function(t){return(this.stopables||(this.stopables=[])).push(t),this}});var l=Object.assign,d=Object.create;function ct(t,e){t[0]=e,e.done(t)}function h(t,e){t&&t.push(e)}function H(t){E.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,o.stop()}function a(t){this.input=t}l(a.prototype,E.prototype,{push:function(t){h(this[0],t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with .broadcast().");return this[0]=t,t.done(this),this.input.pipe(this),t},map:function(t){return new ut(this,t)},filter:function(t){return new at(this,t)},split:function(t){return new lt(this,t)},flatMap:function(t){return new ft(this,t)},slice:function(t,e){return new j(this,t,e)},take:function(t){return console.warn(".take(a) superseded by .slice(0, a)"),new j(this,0,t)},each:function(t){return this.pipe(new ht(t))},reduce:function(t,e){return this.pipe(new pt(t,e)).value},scan:function(t,e){return new mt(this,t,e)},stop:function(){return H(this),this}});function ut(t,e){this.input=t,this.fn=e}ut.prototype=l(d(a.prototype),{push:function(e){let r=this.fn(e);r!==void 0&&h(this[0],r)}});function at(t,e){this.input=t,this.fn=e}at.prototype=l(d(a.prototype),{push:function(e){this.fn(e)&&h(this[0],e)}});function ft(t,e){this.input=t,this.fn=e}ft.prototype=l(d(a.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(q(r))for(let i of r)h(this[0],i);else r.pipe&&this.done(r.each(i=>h(this[0],i)))}});function lt(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}lt.prototype=l(d(a.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(h(this[0],o),this.chunk=[]):o.push(e)}});function j(t,e,o=1/0){this.input=t,this.index=-e,this.indexEnd=e+o}j.prototype=l(d(a.prototype),{push:function(e){++this.index>0&&this[0].push(e),this.index===this.indexEnd&&this.stop()}});function pt(t,e){this.fn=t,this.value=e,this.i=0}pt.prototype=l(d(a.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function mt(t,e,o){this.input=t,this.fn=e,this.value=o}mt.prototype=l(d(a.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function ht(t){this.push=t}ht.prototype=l(d(a.prototype),{each:null,reduce:null,pipe:null});var Mt=Object.assign,Nt=/\s+/,D={fullscreenchange:w(()=>"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"mozFullScreenElement"in document?"mozfullscreenchange":"msFullscreenElement"in document?"MSFullscreenChange":"fullscreenchange")},dt=0;window.addEventListener("click",t=>dt=t.timeStamp);function It(t,e){return t.node.addEventListener(D[e]?D[e]():e,t,t.options),t}function Ut(t,e){return t.node.removeEventListener(D[e]?D[e]():e,t),t}function gt(t,e,o){this.types=t.split(Nt),this.options=e,this.node=o,this.select=e&&e.select}Mt(gt.prototype,{pipe:function(t){ct(this,t),this.types.reduce(It,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=dt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}h(this[0],t)}},stop:function(){this.types.reduce(Ut,this),H(this[0])}});function u(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new a(new gt(t,o,e))}function k(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}function yt(t){return t.nodeType===1}function Pt(t){return(/^\//.test(t)?"":"/")+t}function S(t){var e=window.location;return(!t.hostname||e.hostname===t.hostname)&&e.pathname===Pt(t.pathname)}function $(t){return!!t||t!=null&&!Number.isNaN(t)}function z(){}function R(t,e){let o=Object.keys(e),r=o.map(i=>RegExp(i));return function(s){let f=t.apply(this,arguments);if(!!f){for(var y=-1,v,p;v=r[++y];)if(p=v.exec(f),p){let et=0;for(;p[++et];)arguments[arguments.length]=p[et],arguments.length+=1;return e[o[y]].apply(this,arguments)}e.default&&e.default.apply(this,arguments)}}}function L(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(r){let i=r.target,s=-1;for(;e[++s];){let f=i.closest(e[s]);if(f)return t[e[s]](f,...arguments)}}}var Gt=Object.assign,C={bubbles:!0,cancelable:!0};function qt(t,e){var p;let o=C,r,i,s,f,y,v;return typeof t=="object"?(p=t,{type:t,detail:i,bubbles:s,cancelable:f,composed:y}=p,r=ot(p,["type","detail","bubbles","cancelable","composed"]),v=Gt(new CustomEvent(t,{detail:i,bubbles:s||C.bubbles,cancelable:f||C.cancelable,composed:y||C.composed}),r)):v=new CustomEvent(t,C),e.dispatchEvent(v)}var T=c(qt,!0);function _(t){if(t.toArray)return t.toArray();var e=[],o=t.length,r;if(typeof t.length!="number")return e;for(e.length=o,r=0;r<o;r++)e[r]=t[r];return e}function jt(t,e){return _(e.querySelectorAll(t))}var b=c(jt,!0);var Ht=Array.prototype,$t=window.location,O=$t.hash,x={activeClass:"active",onClass:"on"},F={},K=T("dom-activate");function xt(t){return b('[href$="#'+t+'"]',document.body).filter(S).concat(b('[value="#'+t+'"]',document))}function zt(t){if(t.type==="mousedown"){let e=u("click",t.currentTarget).each(function(r){e.stop(),r.preventDefault()})}}function Rt(t){if(t.defaultPrevented||!k(t)||(t.type==="keydown"||t.type==="keyup")&&t.keyCode!==13)return!0}function _t(t){return($(t.hash)?t.hash:t.getAttribute("href")).substring(1)}function Kt(t){t.classlist.add(x.onClass)}function Wt(t){t.classlist.remove(x.onClass)}function vt(t,e){if(!T({type:"dom-activate",relatedTarget:e},t))return;let r=xt(t.id);t.classList.add(x.activeClass),r.forEach(Kt);let i=t.querySelector(".active-focus");return i&&requestAnimationFrame(()=>requestAnimationFrame(()=>i.focus())),!0}function W(t,e){if(!T({type:"dom-deactivate",relatedTarget:e},t))return;let r=xt(t.id);return t.classList.remove(x.activeClass),r.forEach(Wt),!0}var wt=R(t=>t.value.trim(),{"^#":t=>document.getElementById(t.value.slice(1)),"^next-element$":t=>t.nextElementSibling,"^previous-element$":t=>t.previousElementSibling,"^closest\\((.+)\\)$":(t,e)=>t.closest(e),"^$":z,default:t=>document.querySelector(t.value)});u("click",document).each(L({"a[href]":function(t,e){if(!Rt(e)&&!(t.hostname&&!S(t))){var o=_t(t);if(!!o){var r=document.getElementById(o);if(!!r){if(r.classList.contains("active")){e.preventDefault();return}Object.keys(F).find(i=>r.matches(i))||(e.preventDefault(),e.type==="mousedown"&&zt(e),vt(r,t))}}}},'[name="activate"]':function(t,e){let o=wt(t);if(!o)throw new Error('Button action name="activate" target value="'+t.value+'" not found');e.preventDefault(),!o.classList.contains("active")&&vt(o,t)},'[name="deactivate"]':function(t,e){let o=wt(t);if(!o)throw new Error('Button action name="deactivate" target "'+t.value+'" not found');e.preventDefault(),!!o.classList.contains("active")&&W(o,t)}}));var Et=new WeakSet;function kt(t){Et.add(t)}function bt(t){return!Et.has(t)}function Vt(t,e){let o=(window.location.hash?window.location.hash+", ":"")+("."+x.activeClass),r=b(o,e).filter(bt);return e.matches(o)&&bt(e)&&r.push(e),r.length&&(t.push.apply(t,r),r.forEach(kt)),t}function Jt(t,e){return Ht.filter.call(e.addedNodes,yt).reduce(Vt,t)}u("DOMContentLoaded",document).each(function(){let t=b("."+x.activeClass,document);t.length&&t.forEach(K),new MutationObserver((o,r)=>{if(o[0].type!=="childList")throw new Error("Not childList",o);let i=o.reduce(Jt,[]);i.length&&(i.forEach(K),i.forEach(kt))}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});u("load",window).each(function(){if(!(!O||!/^#\S+$/.test(O)))try{b(O,document).forEach(K)}catch(t){console.warn("dom: Cannot activate "+O,t.message)}});u("dom-activate",document).each(L(F));var V=[];function Qt(t){return(t.hash?t.hash:t.getAttribute("href")).substring(1)}u("click",document.documentElement).each(t=>{if(!t.defaultPrevented&&!!k(t)){var e=st("a[href]",t.target);if(!!e&&!(e.hostname&&!S(e))){var o=Qt(e);!o||V.indexOf(o)!==-1&&(W(U(o),e),t.preventDefault())}}});F["[data-toggleable]"]=t=>V.push(G(t.target));var Xt=m("[data-toggleable]");u("dom-deactivate",document).each(t=>{var e=t.target;!Xt(e)||B(V,e.id)});function Yt(t,e){return e[t]}var A=c(Yt,!0);var M=A("classList"),St=M;function Zt(t,e){M(e).add(t)}function te(t,e){M(e).remove(t)}function ee(t,e){(function o(r){return t--?requestAnimationFrame(o):e(r)})()}function ne(t,e){var o=M(e);o.add(t),ee(2,()=>o.remove(t))}var dn=c(Zt,!0),gn=c(te,!0),yn=c(ne,!0);var g={simulatedEventDelay:.08,keyClass:"key-device",mouseClass:"mouse-device",touchClass:"touch-device",keyType:"key",mouseType:"mouse",touchType:"touch"},Q={type:"mouse"},Ct=St(document.documentElement),J,N;function X(t){J!==t&&(Ct.remove(J),Ct.add(t),J=t)}function oe(t){t.timeStamp<N+g.simulatedEventDelay*1e3||(N=void 0,X(g.mouseClass),Q.type=g.mouseType)}function re(t){["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Space","Escape","Tab"].indexOf(t.code)!==-1&&(X(g.keyClass),Q.type=g.keyType,N=t.timeStamp)}function ie(t){N=t.timeStamp,X(g.touchClass),Q.type=g.touchType}document.addEventListener("mousedown",oe);document.addEventListener("keydown",re);document.addEventListener("touchend",ie);function Y(t){return function(o,...r){var i=t[o]||t.default;return i&&i.apply(this,r)}}function Z(t){if(t&&typeof t=="object"&&typeof t.length=="number")return t[t.length-1]}function I(t){return t===void 0?void 0:parseInt(t,10)}function tt(t){return t.replace(/-(\w)?/g,function(e,o){return o?o.toUpperCase():""})}function se(t){return t.offsetParent!==null}u("dom-activate",document.body).map(A("target")).filter(m(".toggle-block")).each(function(t){if(!se(t)||m(".loading .toggle-block")){t.style.maxHeight="";return}let e=t.getBoundingClientRect(),o=getComputedStyle(t),r=Z(t.children),i=r&&r.getBoundingClientRect().bottom,s=I(o.paddingBottom)+I(o.borderBottomWidth)+i-e.top;t.style.maxHeight=s+"px";let f=u("transitionend",t).each(function(y){f.stop(),t.style.maxHeight=""})});var ce=Y({maxHeight:t=>t.clientHeight+"px",default:(t,e,o)=>e[o]});u("dom-deactivate",document.body).map(A("target")).filter(m(".toggle-block")).each(function(t){let e=t.getAttribute("style"),o=getComputedStyle(t),r=o["transition-property"].split(/\s*,\s*/).map(tt);t.style.transition="none",r.forEach(i=>t.style[i]=ce(i,t,o,i)),requestAnimationFrame(function(){e?t.setAttribute("style",e):t.removeAttribute("style")})});
