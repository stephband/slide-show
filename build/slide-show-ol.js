/* slide-show 
   1.0.0
   By Stephen Band
   Built 2022-05-09 20:17 */

var De=Object.defineProperty;var Dt=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var It=(t,e)=>{var n={};for(var o in t)Ie.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Dt)for(var o of Dt(t))e.indexOf(o)<0&&ze.call(t,o)&&(n[o]=t[o]);return n};var _=(t,e)=>{for(var n in e)De(t,n,{get:e[n],enumerable:!0})};function X(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Ge=Array.prototype;function _e(t,e){return typeof t=="function"?t.apply(null,e):t}function zt(t,e,n){n=n||t.length;var o=n===1?e?t:X(t):X(function(r){return zt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):_e(o(i),Ge.slice.call(arguments,1))}}var v=zt;function Re(t,e){return 1-Math.pow(1-e,t)}var Gt=v(Re);function y(){}function ft(t,e){return e(t)}function S(t){return t}var Ve=Array.prototype;function dt(){let t=arguments;return t.length?e=>Ve.reduce.call(t,ft,e):S}function mt(t,e,n){return n*(e-t)+t}var Ue=window.performance,_t=window.requestAnimationFrame,qe=window.cancelAnimationFrame;function ht(t,e,n){var o=Ue.now();function r(s){var c=(s-o)/(t*1e3);c<1?(c>0&&e(c),i=_t(r)):(e(1),n&&n())}var i=_t(r);return function(){qe(i)}}function Y(t,e,n,o,r,i){let s=o[n];return ht(t,dt(e,c=>mt(s,r,c),c=>o[n]=c),i)}function We(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function T(t){return t===window?We():t.getClientRects()[0]||t.getBoundingClientRect()}var D={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Gt(3)},Rt=y;function $e(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:T(t).width,i=D.scrollDuration+D.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;Rt=Y(i,D.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:T(t).height,i=D.scrollDuration+D.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;Rt=Y(i,D.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?$e(this,n):e.apply(this,arguments)}}function E(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var Ne=E(S,{is:y,tag:y,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:I,cx:I,cy:I,r:I,preserveAspectRatio:I,viewBox:I,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function I(t,e,n){e.setAttribute(t,n)}function Xe(t,e){for(var n=Object.keys(e),o=n.length;o--;)Ne(n[o],t,e[n[o]]);return t}var gt=v(Xe,!0);var Ye="http://www.w3.org/2000/svg",Vt=document.createElement("div");var Ut=(t,e)=>e&&typeof e;function qt(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function L(t,e){var n=document.createElementNS(Ye,t);return e&&(n.innerHTML=e),n}var Ke=E(S,{comment:function(t,e){return document.createComment(e||"")},fragment:E(Ut,{string:function(t,e,n){if(n)return qt(n,e);let o=document.createDocumentFragment();Vt.innerHTML=e;let r=Vt.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?qt(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):gt(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:L,ellipse:L,g:L,glyph:L,image:L,line:L,rect:L,use:L,path:L,pattern:L,polygon:L,polyline:L,svg:L,default:E(Ut,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):gt(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),x=Ke;function wt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var sr=v(wt,!0);function Ze(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function Qe(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function Je(t,e,n,o){let r=wt(t,i=>Qe(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):Ze(t,e,o):r}var Wt=v(Je,!0);var vt=y;var P=Symbol("internals"),j=Symbol("shadow"),$t=Object.defineProperties,tn={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},en={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[P].form}},labels:{get:function(){return this[P].labels}},validity:{get:function(){return this[P].validity}},validationMessage:{get:function(){return this[P].validationMessage}},willValidate:{get:function(){return this[P].willValidate}},checkValidity:{value:function(){return this[P].checkValidity()}},reportValidity:{value:function(){return this[P].reportValidity()}}},nn={},Nt={once:!0},on=0,Xt=!1;function rn(t){return tn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var sn=Wt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function cn(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function un(t,e,n){t._initialLoad=!0;let o=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(n){let r=x("link",{rel:"stylesheet",href:n});o.append(r)}return t[j]=o,o}function ln(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=x("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function an(t){t._initialAttributes={},t._n=0}function pn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function Yt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function fn(t){return!!t.attribute}function dn(t){return t.set||t.get||t.hasOwnProperty("value")}function Kt(t,e){return fn(e[1])&&(t.attributes[e[0]]=e[1].attribute),dn(e[1])&&(t.properties[e[0]]=e[1]),t}function yt(t,e,n,o){let{name:r,tag:i}=sn(t),s=typeof i=="string"?rn(i):HTMLElement,{attributes:c,properties:p}=n?Object.entries(n).reduce(Kt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Kt,{attributes:{},properties:{}}):nn;function u(){let l=Reflect.construct(s,arguments,u),m=e.construct&&e.construct.length>on?un(l,e,o||e.stylesheet):void 0,w=u.formAssociated&&ln(l);return i&&(Xt=!0),e.construct&&e.construct.call(l,m,w),c&&(an(l),Promise.resolve(1).then(function(){Yt(l,u.observedAttributes,c)})),p&&Object.keys(p).reduce(cn,l),l}return u.prototype=Object.create(s.prototype,p),p&&p.value&&(u.formAssociated=!0,$t(u.prototype,en),(e.enable||e.disable)&&(u.prototype.formDisabledCallback=function(l){return l?e.disable&&e.disable.call(this,this[j],this[P]):e.enable&&e.enable.call(this,this[j],this[P])}),e.reset&&(u.prototype.formResetCallback=function(){return e.reset.call(this,this[j],this[P])}),e.restore&&(u.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[j],this[P])})),c&&(u.observedAttributes=Object.keys(c),u.prototype.attributeChangedCallback=function(l,m,w){if(!this._initialAttributes)return c[l].call(this,w);this._initialAttributes[l]=w,pn(this,u.observedAttributes,c)}),u.prototype.connectedCallback=function(){let l=this,m=l[j],w=l[P];if(l._initialAttributes&&Yt(l,u.observedAttributes,c),l._initialLoad){let k=m.querySelectorAll('link[rel="stylesheet"]');if(k.length){let b=0,d=k.length,A=function(Me){++b>=k.length&&(delete l._initialLoad,e.load&&(vt("element()","loaded",Array.from(k).map(Be=>Be.href).join(`
`)),e.load.call(l,m)))},je=A;for(;d--;)k[d].addEventListener("load",A,Nt),k[d].addEventListener("error",je,Nt);e.connect&&e.connect.call(this,m,w)}else e.connect&&e.connect.call(this,m,w),e.load&&e.load.call(this,m,w)}else e.connect&&e.connect.call(this,m,w)},e.disconnect&&(u.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[j],this[P])}),vt("element()","<"+(i?i+" is="+r:r)+">"),window.customElements.define(r,u,i&&{extends:i}),i&&!Xt&&document.querySelectorAll('[is="'+r+'"]').forEach(l=>{$t(l,p),e.construct&&e.construct.apply(l);let m;for(m in c){let w=l.attributes[m];w&&c[m].call(l,w.value)}e.connect&&e.connect.apply(l)}),u}function Zt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Zt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Qt=v(Zt,!0);var mn=Object.freeze;function Jt(){return this}var O=mn({shift:y,push:y,forEach:y,join:function(){return""},map:Jt,filter:Jt,reduce:function(t,e){return e},length:0,each:y,pipe:S,start:y,stop:y,done:y,valueOf:function(){return null}});function bt(t){return t&&t[Symbol.iterator]}var hn=Object.assign;function gn(t){return t.stop?t.stop():t()}function wn(t){t.forEach(gn),t.length=0}function z(){}hn(z.prototype,{stop:function(){return this.stopables&&wn(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var vn=Object.assign;function K(t){z.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,K(n)}function f(){}vn(f.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return K(this[0]),this}});var C=Object.assign,H=Object.create;function Z(t,e){e!==void 0&&t[0].push(e)}function yn(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];K(e)}else t.stop()}function g(t){this.input=t}C(g.prototype,z.prototype,{push:function(t){Z(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new te(this,t)},filter:function(t){return new ee(this,t)},flatMap:function(t){return new ne(this,t)},take:function(t){return new oe(this,t)},each:function(t){return new se(this,t)},reduce:function(t,e){return new re(this,t,e)},scan:function(t,e){return new ie(this,t,e)},stop:function(){return yn(this.input,this),this}});function te(t,e){this.input=t,this.fn=e}te.prototype=C(H(g.prototype),{push:function(e){let n=this.fn;Z(this,n(e))}});function ee(t,e){this.input=t,this.fn=e}ee.prototype=C(H(g.prototype),{push:function(e){this.fn(e)&&Z(this,e)}});function ne(t,e){this.input=t,this.fn=e}ne.prototype=C(H(g.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(bt(o))for(let r of o)Z(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function oe(t,e){this.input=t,this.count=e}oe.prototype=C(H(g.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function re(t,e,n){this.input=t,this.fn=e,this.value=n,t.pipe(this)}re.prototype=C(H(g.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function ie(t,e,n){this.input=t,this.fn=e,this.value=n}ie.prototype=C(H(g.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function se(t,e){this.input=t,this.push=e,t.pipe(this)}se.prototype=C(H(g.prototype),{each:null,reduce:null,pipe:null});var bn=Array.prototype,xn=Object.assign,En=Object.create;function R(t){this.buffer=t||[]}R.prototype=xn(En(g.prototype),f.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(bn.shift.apply(this.buffer));return this.buffer=this[0],t}});var Sn=Object.assign,Tn=Object.create;function V(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(O)}V.prototype=Sn(Tn(g.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var Ln=Object.assign;function Q(t){this.promise=t}Ln(Q.prototype,f.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){f.prototype.stop.apply(this,arguments),this[0]=O}});var ue=Object.assign,le=Object.keys;function ce(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=le(o).length===r.length))&&i.push(ue({},o))}function J(t){this.inputs=t}ue(J.prototype,f.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=le(e),this.active=!1,this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>ce(this,n,r))):o.then?o.then(r=>ce(this,n,r)):console.log("Todo: combine() raw values ?")}}});var Pn=Object.assign;function tt(t){this.inputs=t}Pn(tt.prototype,f.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return f.prototype.stop.apply(this,arguments)}});var Et=Array.prototype,Fn=Object.assign;function kn(t){return t.length>0}function On(t,e,n){return t[n]=e.shift(),t}function An(t){return[]}function xt(t,e,n,o){n.push(o),e.every(kn)&&t.push(e.reduce(On,{}))}function et(t){this.inputs=t,this.buffers=Et.map.call(t,An)}Fn(et.prototype,f.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,Et.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(s=>xt(t,n,i,s))):o.then?o.then(s=>xt(t,n,i,s)):Et.forEach.call(o,s=>xt(t,n,i,s))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return f.prototype.stop.apply(this,arguments)}});var Cn=Array.prototype,ae=Object.assign;function jn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var h=ae(g,{of:function(){return new R(Cn.slice.apply(arguments))},from:function(t){return t.pipe?new g(t):t.then?new g(new Q(t)):typeof t.length=="number"?new R(t):jn(t)},broadcast:function(e){return new V(O,e)},combine:function(e){return new g(new J(e))},merge:function(){return new g(new tt(arguments))},zip:function(){return new g(new et(arguments))}});ae(g.prototype,{broadcast:function(t){return new V(this,t)}});var Hn=Object.assign,Mn=/\s+/;function pe(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var fe=0;window.addEventListener("click",t=>fe=t.timeStamp);function Bn(t,e){return t.node.addEventListener(e,t,t.options),t}function Dn(t,e){return t.node.removeEventListener(e,t),t}function de(t,e,n){this.types=t.split(Mn),this.options=e,this.node=n,this.select=e&&e.select}Hn(de.prototype,f.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Bn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=fe)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(Dn,this),f.prototype.stop.apply(this,arguments)}});function F(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new h(new de(t,n,e))}function In(t,e){return e[t]}var nt=v(In,!0);function St(t){return typeof t}var zn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function Gn(t,e){if(typeof e=="number")return e;var n=zn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var ot=v(Gn);var _n=/px$/,me={"transform:translateX":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e);return parseFloat(n[5])},"transform:scale":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=rt(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function rt(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function U(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function it(t,e){if(me[t])return me[t](e);var n=U(t,e);return typeof n=="string"&&_n.test(n)?parseFloat(n):n}var st,ct;function Rn(){if(!st){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",st=it("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return st}function Vn(){return ct||(ct=it("font-size",document.documentElement)),ct}window.addEventListener("resize",()=>{st=void 0,ct=void 0});var M=E(St,{number:S,string:ot({em:function(t){return Rn()*t},px:function(t){return t},rem:function(t){return Vn()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),he=M;var Tt=Object.assign,ut={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function Un(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function ge(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=he(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}Tt(ge.prototype,{handleEvent:E(nt("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&Un(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=h.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function qn(t){var e=t.target.tagName;return e&&(!!ut.ignoreTags[e.toLowerCase()]||t.target.draggable)}function we(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}Tt(we.prototype,f.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!qn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new ge(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),f.prototype.stop.apply(this,arguments)}});function Lt(t,e){return t=e&&t?Tt({},ut,t):ut,e=e||t,new h(new we(e,t))}var Wn=Object.assign,$n={capture:!0,passive:!0},q={minScrollEventInterval:.0375,maxScrollEventInterval:.18},ve=q.maxScrollEventInterval;function Nn(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<q.minScrollEventInterval?q.minScrollEventInterval:n,ve=1.4*n>q.maxScrollEventInterval?q.maxScrollEventInterval:1.4*n}function Xn(t,e){let{times:n}=t;t.value.stop(),t.value=void 0,n.length>1&&Nn(n),n.length=0}function ye(t){this.element=t,this.times=[]}Wn(ye.prototype,f.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,$n)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.value?(clearTimeout(this.timer),this.value.push(t)):(this.value=h.of(t),this.stream.push(this.value)),this.timer=setTimeout(Xn,ve*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),f.prototype.stop.apply(this,arguments)}});function Pt(t){return new h(new ye(t))}var a=Symbol("data");var Yn=Object.assign,W={bubbles:!0,cancelable:!0};function Ft(t,e){var u;let n=W,o,r,i,s,c,p;return typeof t=="object"?(u=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:c}=u,o=It(u,["type","detail","bubbles","cancelable","composed"]),p=Yn(new CustomEvent(t,{detail:r,bubbles:i||W.bubbles,cancelable:s||W.cancelable,composed:c||W.composed}),o)):p=new CustomEvent(t,W),e.dispatchEvent(p)}var Pi=v(Ft,!0);function be(t){let e=T(t),n=window.getComputedStyle(t,null),o=M(n.getPropertyValue("padding-left")),r=M(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function xe(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function Ee(t,e,n){let o=be(t),r=T(e),i=xe(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function lt(t,e){Ee(t,e,"smooth")}function $(t,e){t.style.setProperty("scroll-behavior","auto","important"),Ee(t,e,"auto"),t.style.setProperty("scroll-behavior","")}function Kn(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=be(t),i=e.length,s;for(;s=e[--i];){let c=T(s);if(!c)continue;let p=xe(s),u=c.width/2+(p==="left"?n:p==="right"?o:r);if((p==="left"?c.left:p==="right"?c.right:c.left+c.width/2)<=u)break}return s}function Zn(t){return!!t.dataset.slideIndex}function G(t){let{scroller:e,children:n,elements:o}=t,r=Kn(e,o),i;!r||(Zn(r)?(i=n[r.dataset.slideIndex],$(e,i)):i=r,i!==t.active&&(t.active=i,i!==void 0&&(t.actives.push(i),Ft("slide-active",i))))}var Se=E((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{G(t),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let i,s=F({type:"scroll",passive:!0},n).each(()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>i=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),s.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});function Qn(t,e,n){let o=n.length,r=-1/0;for(;o--;){let u=T(n[o]),l=u.x+u.width;r=l>r?l:r}let i=T(e),s=getComputedStyle(t),c=M(s.paddingLeft),p=M(s.paddingRight);return c+p+r-i.x}function Jn(t,e,n){let o=Qn(t,e,n);t.style.setProperty("--scroll-width",o+"px")}function to(t){return!t.dataset.slideIndex}var Te={construct:function(t){let e=x("slot",{part:"slides"}),n=x("div",{class:"scroller",children:[e]}),o=x("nav",{part:"controls"});t.append(n,o);let r=h.of(),i=F("slotchange",e).map(d=>b.elements=e.assignedElements()).broadcast({memory:!0}),s=i.map(d=>{let A=d.filter(to);return Qt(b.children,A)?void 0:b.children=A}).broadcast({memory:!0}),c=F("click",t).filter(pe).broadcast(),p=Lt({threshold:"0.25rem",device:"mouse"},t).filter(()=>b.children.length>1),u=Pt(n),l=F("focusin",this),m=F("resize",window),w=F("fullscreenchange",window),k=h.broadcast({memory:!0}),b=this[a]={clickSuppressTime:-1/0,host:this,style:window.getComputedStyle(this),elements:O,children:O,shadow:t,scroller:n,slides:e,controls:o,load:r,actives:k,slotchanges:i,mutations:s,clicks:c};h.merge(r,i,m).each(()=>Jn(b.scroller,b.slides,b.elements)),c.each(function(d){window.performance.now()-b.clickSuppressTime<120&&(d.preventDefault(),d.stopPropagation())}),p.each(d=>{b.pointers=d,d.reduce(Se,b)}),w.each(d=>{(d.target===this||d.target.contains(this))&&$(n,b.active)}),u.each(d=>d.each(y).done(()=>G(b))),l.map(d=>b.children.indexOf(d.target)!==-1?d.target:b.children.find(A=>A.contains(d.target))).each(d=>lt(b.scroller,d))},load:function(t){let e=this[a];e.load.push(this),G(e),e.slotchanges.each(n=>G(e))}};function at(t,e){function n(o,r){if(t.getState(o)!==r)return t[r?"enable":"disable"](o)}return{attribute:function(o){return n(this,o!==null)},set:function(o){return n(this,!!o)},get:function(){return t.getState(this)}}}function kt(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Qi=v(kt,!0);var eo=Object.assign;function N(t,e){this.element=t,this.definitions=e,this.tokens=[]}eo(N.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),kt(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var no=Array.prototype;function oo(t,e){let n=t.tokens.slice(),o=no.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function Ot(t){let e=Symbol("TokenList");function n(o,r){let i=o[e]||(o[e]=new N(o,t));oo(i,r.trim().split(/\s+/))}return{attribute:function(o){n(this,o||"")},set:function(o){n(this,o+"")},get:function(){return this[e]||(this[e]=new N(this,t))}}}var At={};_(At,{disable:()=>uo,enable:()=>co,getState:()=>lo});var ro=ot({s:S,ms:t=>t/1e3});function io(t){let{active:e,children:n,elements:o,host:r}=t,i=o.indexOf(e),s=o[i+1]||n[0];t.autoplay.timer=null,!!s&&(r.active=s)}function so(t){let{active:e,style:n}=t,o=ro(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(io,o*1e3,t)}function Le(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function co(t){let e=t[a],{actives:n}=e,o=e.autoplay={},r=h.merge([!1],F("pointerenter pointerleave",t).map(s=>s.type==="pointerenter")),i=h.merge([t.contains(document.activeElement)],F("focusin focusout",t).map(E(nt("type"),{focusin:s=>!0,focusout:s=>t.contains(s.relatedTarget)}))).map((s=>c=>s===c?void 0:s=c)());o.updates=h.combine({active:n,hover:r,focus:i}).each(s=>s.hover||s.focus?Le(e):so(e))}function uo(t){let e=t[a];Le(e),e.autoplay.updates.stop(),e.autoplay=void 0}function lo(t){return!!t[a].autoplay}var Ct={};_(Ct,{disable:()=>fo,enable:()=>po,getState:()=>mo});function Pe(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function ao(t){let{active:e,children:n,host:o,scroller:r}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(w=>w.remove()),t.loop.appends.forEach(w=>w.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),n.length<2){t.elements=t.slides.assignedElements();return}let i=o.clientWidth,s=n.map(T),c=s[1].left,p=s[s.length-2].right,u=1;for(;s[++u]&&s[u].left<c+i;);let l=n.slice(0,u).map(Pe);for(u=s.length-2;s[--u]&&s[u].right>p-i;);let m=n.slice(++u).map((w,k)=>Pe(w,u+k));o.prepend.apply(o,m),o.append.apply(o,l),t.loop.prepends=m,t.loop.appends=l,t.elements=t.slides.assignedElements(),$(r,e||n[0])}function po(t){let e=t[a],{load:n,mutations:o}=e,r=e.loop={};r.renders=h.combine({loaded:n,children:o}).each(i=>ao(e))}function fo(t){let e=t[a];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(n=>n.remove()),e.loop.appends&&e.loop.appends.forEach(n=>n.remove()),e.loop.renders.stop(),e.loop=void 0)}function mo(t){return!!t[a].loop}var jt={};_(jt,{disable:()=>go,enable:()=>ho,getState:()=>wo});function B(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function Fe(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function ho(t){let e=t[a],{actives:n,clicks:o,slotchanges:r}=e,i=e.navigation={prev:x("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:x("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};e.controls.prepend(i.prev,i.next),i.updates=h.combine({active:n,elements:r}).each(s=>Fe(i.prev,i.next,s.elements,s.elements.indexOf(s.active))),i.clicks=o.each(B({'[name="navigation"]':function(s,c){let p=parseFloat(s.value),u=e.elements.indexOf(e.active)+p,l=e.elements[u];!l||(t.active=l,Fe(i.prev,i.next,e.elements,u))}}))}function go(t){let e=t[a];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function wo(t){return!!t[a].navigation}var Ht={};_(Ht,{disable:()=>bo,enable:()=>yo,getState:()=>xo});function ke(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function vo(t,e,n,o){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),o.length<2||(e.buttons=x("div",{part:"pagination",children:o.map((r,i)=>x("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons)),o.length}function yo(t){let e=t[a],{shadow:n,actives:o,clicks:r,mutations:i}=e,s=e.pagination={activeSpan:x("span",{class:"invisible",text:"(Current slide)"})};s.mutations=i.each(()=>vo(e.controls,s,n,e.children)),s.updates=h.combine({active:o,children:i}).filter(c=>c.children.length>1).each(c=>ke(s,e.children,e.active)),s.clicks=r.each(B({'[name="pagination"]':function(c,p){let{host:u}=e,l=e.children,m=l[c.value];!m||(u.active=m,ke(s,l,m))}}))}function bo(t){let e=t[a];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function xo(t){return!!t[a].pagination}var Bt={};_(Bt,{disable:()=>So,enable:()=>Eo,getState:()=>To});var Oe=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function Mt(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Ae(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function pt(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function Eo(t){let e=t[a];if(!Oe)return;let n=e.fullscreen={button:x("button",{part:"fullscreen-button",type:"button",name:"fullscreen",html:"Open in fullscreen"})};e.controls.append(n.button),n.clicks=e.clicks.each(B({'[name="fullscreen"]':(o,r)=>{let i=Mt();if(i===t){pt(),n.button.part.remove("fullscreen-button-active"),n.button.innerHTML="Open in fullscreen";return}i&&pt(),Ae(t),n.button.part.add("fullscreen-button-active"),n.button.innerHTML="Close fullscreen"}}))}function So(t){let e=t[a];Mt()===t&&pt(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen=void 0}function To(t){return!!t[a].fullscreen}var Ce={active:{set:function(t){let e=this[a],n=typeof t!="object"?this.querySelector("#"+(/^\d/.test((id+"")[0])?"\\3"+(id+"")[0]+" "+(id+"").slice(1):t)):t;if(!n)throw new Error("Cannot set active – not a child of slide-show");lt(e.scroller,n)},get:function(){return this[a].active}},autoplay:at(At,"autoplay"),controls:Ot({navigation:jt,pagination:Ht,fullscreen:Bt}),loop:at(Ct,"loop")};var Lo=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),zs=yt('<ol is="slide-show-ol">',Te,Ce,Lo);export{zs as default};
