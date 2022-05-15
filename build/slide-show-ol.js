/* slide-show 
   1.1.4
   By Stephen Band
   Built 2022-05-15 04:56 */

var _e=Object.defineProperty;var Mt=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Bt=(t,e)=>{var n={};for(var o in t)Re.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Mt)for(var o of Mt(t))e.indexOf(o)<0&&qe.call(t,o)&&(n[o]=t[o]);return n};var I=(t,e)=>{for(var n in e)_e(t,n,{get:e[n],enumerable:!0})};function W(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Ve=Array.prototype;function Ue(t,e){return typeof t=="function"?t.apply(null,e):t}function Dt(t,e,n){n=n||t.length;var o=n===1?e?t:W(t):W(function(r){return Dt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Ue(o(i),Ve.slice.call(arguments,1))}}var w=Dt;function We(t,e){return 1-Math.pow(1-e,t)}var It=w(We);function v(){}function ut(t,e){return e(t)}function E(t){return t}var $e=Array.prototype;function lt(){let t=arguments;return t.length?e=>$e.reduce.call(t,ut,e):E}function at(t,e,n){return n*(e-t)+t}var Ne=window.performance,zt=window.requestAnimationFrame,Xe=window.cancelAnimationFrame;function pt(t,e,n){var o=Ne.now();function r(s){var u=(s-o)/(t*1e3);u<1?(u>0&&e(u),i=zt(r)):(e(1),n&&n())}var i=zt(r);return function(){Xe(i)}}function $(t,e,n,o,r,i){let s=o[n];return pt(t,lt(e,u=>at(s,r,u),u=>o[n]=u),i)}function Ye(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function S(t){return t===window?Ye():t.getClientRects()[0]||t.getBoundingClientRect()}var j={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:It(3)},Gt=v;function Ke(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:S(t).width,i=j.scrollDuration+j.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;Gt=$(i,j.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:S(t).height,i=j.scrollDuration+j.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;Gt=$(i,j.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?Ke(this,n):e.apply(this,arguments)}}function b(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var Ze=b(E,{is:v,tag:v,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:H,cx:H,cy:H,r:H,preserveAspectRatio:H,viewBox:H,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function H(t,e,n){e.setAttribute(t,n)}function Qe(t,e){for(var n=Object.keys(e),o=n.length;o--;)Ze(n[o],t,e[n[o]]);return t}var ft=w(Qe,!0);var Je="http://www.w3.org/2000/svg",_t=document.createElement("div");var Rt=(t,e)=>e&&typeof e;function qt(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function T(t,e){var n=document.createElementNS(Je,t);return e&&(n.innerHTML=e),n}var tn=b(E,{comment:function(t,e){return document.createComment(e||"")},fragment:b(Rt,{string:function(t,e,n){if(n)return qt(n,e);let o=document.createDocumentFragment();_t.innerHTML=e;let r=_t.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?qt(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):ft(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:T,ellipse:T,g:T,glyph:T,image:T,line:T,rect:T,use:T,path:T,pattern:T,polygon:T,polyline:T,svg:T,default:b(Rt,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):ft(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),y=tn;function dt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var ur=w(dt,!0);function en(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function nn(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function on(t,e,n,o){let r=dt(t,i=>nn(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):en(t,e,o):r}var Vt=w(on,!0);var mt=v;var L=Symbol("internals"),A=Symbol("shadow"),Ut=Object.defineProperties,rn={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},sn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[L].form}},labels:{get:function(){return this[L].labels}},validity:{get:function(){return this[L].validity}},validationMessage:{get:function(){return this[L].validationMessage}},willValidate:{get:function(){return this[L].willValidate}},checkValidity:{value:function(){return this[L].checkValidity()}},reportValidity:{value:function(){return this[L].reportValidity()}}},cn={},Wt={once:!0},un=0,$t=!1;function ln(t){return rn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var an=Vt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function pn(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function fn(t,e,n){t._initialLoad=!0;let o=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(n){let r=y("link",{rel:"stylesheet",href:n});o.append(r)}return t[A]=o,o}function dn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=y("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function mn(t){t._initialAttributes={},t._n=0}function hn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function Nt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function gn(t){return!!t.attribute}function wn(t){return t.set||t.get||t.hasOwnProperty("value")}function Xt(t,e){return gn(e[1])&&(t.attributes[e[0]]=e[1].attribute),wn(e[1])&&(t.properties[e[0]]=e[1]),t}function ht(t,e,n,o){let{name:r,tag:i}=an(t),s=typeof i=="string"?ln(i):HTMLElement,{attributes:u,properties:f}=n?Object.entries(n).reduce(Xt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Xt,{attributes:{},properties:{}}):cn;function l(){let a=Reflect.construct(s,arguments,l),p=e.construct&&e.construct.length>un?fn(a,e,o||e.stylesheet):void 0,c=l.formAssociated&&dn(a);return i&&($t=!0),e.construct&&e.construct.call(a,p,c),u&&(mn(a),Promise.resolve(1).then(function(){Nt(a,l.observedAttributes,u)})),f&&Object.keys(f).reduce(pn,a),a}return l.prototype=Object.create(s.prototype,f),f&&f.value&&(l.formAssociated=!0,Ut(l.prototype,sn),(e.enable||e.disable)&&(l.prototype.formDisabledCallback=function(a){return a?e.disable&&e.disable.call(this,this[A],this[L]):e.enable&&e.enable.call(this,this[A],this[L])}),e.reset&&(l.prototype.formResetCallback=function(){return e.reset.call(this,this[A],this[L])}),e.restore&&(l.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[A],this[L])})),u&&(l.observedAttributes=Object.keys(u),l.prototype.attributeChangedCallback=function(a,p,c){if(!this._initialAttributes)return u[a].call(this,c);this._initialAttributes[a]=c,hn(this,l.observedAttributes,u)}),l.prototype.connectedCallback=function(){let a=this,p=a[A],c=a[L];if(a._initialAttributes&&Nt(a,l.observedAttributes,u),a._initialLoad){let x=p.querySelectorAll('link[rel="stylesheet"]');if(x.length){let Be=0,ct=x.length,Ht=function(ze){++Be>=x.length&&(delete a._initialLoad,e.load&&(mt("element()","loaded",Array.from(x).map(Ge=>Ge.href).join(`
`)),e.load.call(a,p)))},De=Ht;for(;ct--;)x[ct].addEventListener("load",Ht,Wt),x[ct].addEventListener("error",De,Wt);e.connect&&e.connect.call(this,p,c)}else e.connect&&e.connect.call(this,p,c),e.load&&e.load.call(this,p,c)}else e.connect&&e.connect.call(this,p,c)},e.disconnect&&(l.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[A],this[L])}),mt("element()","<"+(i?i+" is="+r:r)+">"),window.customElements.define(r,l,i&&{extends:i}),i&&!$t&&document.querySelectorAll('[is="'+r+'"]').forEach(a=>{Ut(a,f),e.construct&&e.construct.apply(a);let p;for(p in u){let c=a.attributes[p];c&&u[p].call(a,c.value)}e.connect&&e.connect.apply(a)}),l}function Yt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Yt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Kt=w(Yt,!0);var vn=Object.freeze;function Zt(){return this}var M=vn({shift:v,push:v,forEach:v,join:function(){return""},map:Zt,filter:Zt,reduce:function(t,e){return e},length:0,each:v,pipe:E,start:v,stop:v,done:v,valueOf:function(){return null}});function gt(t){return t&&t[Symbol.iterator]}var yn=Object.assign;function bn(t){return t.stop?t.stop():t()}function xn(t){t.forEach(bn),t.length=0}function B(){}yn(B.prototype,{stop:function(){return this.stopables&&xn(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var En=Object.assign;function N(t){B.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,N(n)}function m(){}En(m.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return N(this[0]),this}});var k=Object.assign,F=Object.create;function z(t,e){e!==void 0&&t[0].push(e)}function Sn(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];N(e)}else t.stop()}function h(t){this.input=t}k(h.prototype,B.prototype,{push:function(t){z(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new Qt(this,t)},filter:function(t){return new Jt(this,t)},chunk:function(t){return new ee(this,t)},flatMap:function(t){return new te(this,t)},take:function(t){return new ne(this,t)},each:function(t){return new ie(this,t)},reduce:function(t,e){return new oe(this,t,e)},scan:function(t,e){return new re(this,t,e)},stop:function(){return Sn(this.input,this),this}});function Qt(t,e){this.input=t,this.fn=e}Qt.prototype=k(F(h.prototype),{push:function(e){let n=this.fn;z(this,n(e))}});function Jt(t,e){this.input=t,this.fn=e}Jt.prototype=k(F(h.prototype),{push:function(e){this.fn(e)&&z(this,e)}});function te(t,e){this.input=t,this.fn=e}te.prototype=k(F(h.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(gt(o))for(let r of o)z(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function ee(t,e){this.input=t,this.chunk=[],typeof e=="number"?this.n=e:typeof e=="function"&&(this.fn=e)}ee.prototype=k(F(h.prototype),{fn:function(t){return t.length===this.n},push:function(e){let n=this.chunk;n.push(e),this.fn(n)&&(z(this,n),this.chunk=[])}});function ne(t,e){this.input=t,this.count=e}ne.prototype=k(F(h.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function oe(t,e,n){this.input=t,this.fn=e,this.value=n,t.pipe(this)}oe.prototype=k(F(h.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function re(t,e,n){this.input=t,this.fn=e,this.value=n}re.prototype=k(F(h.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function ie(t,e){this.input=t,this.push=e,t.pipe(this)}ie.prototype=k(F(h.prototype),{each:null,reduce:null,pipe:null});var Tn=Array.prototype,Ln=Object.assign,Pn=Object.create;function G(t){this.buffer=t||[]}G.prototype=Ln(Pn(h.prototype),m.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(Tn.shift.apply(this.buffer));return this.buffer=this[0],t}});var kn=Object.assign,Fn=Object.create;function _(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(M)}_.prototype=kn(Fn(h.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var An=Object.assign;function X(t){this.promise=t}An(X.prototype,m.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){m.prototype.stop.apply(this,arguments),this[0]=M}});var ce=Object.assign,ue=Object.keys;function se(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=ue(o).length===r.length))&&i.push(ce({},o))}function Y(t){this.inputs=t,this.active=!1}ce(Y.prototype,m.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=ue(e),this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>se(this,n,r))):o.then?o.then(r=>se(this,n,r)):console.log("Todo: combine() raw values ?")}}});var On=Object.assign;function K(t){this.inputs=t}On(K.prototype,m.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return m.prototype.stop.apply(this,arguments)}});var vt=Array.prototype,Cn=Object.assign;function jn(t){return t.length>0}function Hn(t,e,n){return t[n]=e.shift(),t}function Mn(t){return[]}function wt(t,e,n,o){n.push(o),e.every(jn)&&t.push(e.reduce(Hn,{}))}function Z(t){this.inputs=t,this.buffers=vt.map.call(t,Mn)}Cn(Z.prototype,m.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,vt.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(s=>wt(t,n,i,s))):o.then?o.then(s=>wt(t,n,i,s)):vt.forEach.call(o,s=>wt(t,n,i,s))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return m.prototype.stop.apply(this,arguments)}});var Bn=Array.prototype,le=Object.assign;function Dn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var g=le(h,{of:function(){return new G(Bn.slice.apply(arguments))},from:function(t){return t.pipe?new h(t):t.then?new h(new X(t)):typeof t.length=="number"?new G(t):Dn(t)},broadcast:function(e){return new _(M,e)},combine:function(e){return new h(new Y(e))},merge:function(){return new h(new K(arguments))},zip:function(){return new h(new Z(arguments))}});le(h.prototype,{broadcast:function(t){return new _(this,t)}});var In=Object.assign,zn=/\s+/;function ae(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var pe=0;window.addEventListener("click",t=>pe=t.timeStamp);function Gn(t,e){return t.node.addEventListener(e,t,t.options),t}function _n(t,e){return t.node.removeEventListener(e,t),t}function fe(t,e,n){this.types=t.split(zn),this.options=e,this.node=n,this.select=e&&e.select}In(fe.prototype,m.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Gn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=pe)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(_n,this),m.prototype.stop.apply(this,arguments)}});function P(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new g(new fe(t,n,e))}function Rn(t,e){return e[t]}var Q=w(Rn,!0);function yt(t){return typeof t}var qn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function Vn(t,e){if(typeof e=="number")return e;var n=qn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var J=w(Vn);var Un=/px$/,de={"transform:translateX":function(t){var e=R("transform",t);if(!e||e==="none")return 0;var n=tt(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=R("transform",t);if(!e||e==="none")return 0;var n=tt(e);return parseFloat(n[5])},"transform:scale":function(t){var e=R("transform",t);if(!e||e==="none")return 0;var n=tt(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=R("transform",t);if(!e||e==="none")return 0;var n=tt(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function tt(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function R(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function et(t,e){if(de[t])return de[t](e);var n=R(t,e);return typeof n=="string"&&Un.test(n)?parseFloat(n):n}var nt,ot;function Wn(){if(!nt){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",nt=et("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return nt}function $n(){return ot||(ot=et("font-size",document.documentElement)),ot}window.addEventListener("resize",()=>{nt=void 0,ot=void 0});var O=b(yt,{number:E,string:J({em:function(t){return Wn()*t},px:function(t){return t},rem:function(t){return $n()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),me=O;var bt=Object.assign,rt={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function Nn(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function he(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=me(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}bt(he.prototype,{handleEvent:b(Q("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&Nn(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=g.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function Xn(t){var e=t.target.tagName;return e&&(!!rt.ignoreTags[e.toLowerCase()]||t.target.draggable)}function ge(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}bt(ge.prototype,m.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!Xn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new he(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),m.prototype.stop.apply(this,arguments)}});function xt(t,e){return t=e&&t?bt({},rt,t):rt,e=e||t,new g(new ge(e,t))}var Yn=Object.assign,q={bubbles:!0,cancelable:!0};function Et(t,e){var l;let n=q,o,r,i,s,u,f;return typeof t=="object"?(l=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:u}=l,o=Bt(l,["type","detail","bubbles","cancelable","composed"]),f=Yn(new CustomEvent(t,{detail:r,bubbles:i||q.bubbles,cancelable:s||q.cancelable,composed:u||q.composed}),o)):f=new CustomEvent(t,q),e.dispatchEvent(f)}var Ti=w(Et,!0);var d=Symbol("data");function we(t){let e=S(t),n=window.getComputedStyle(t,null),o=O(n.getPropertyValue("padding-left")),r=O(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function ve(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function ye(t,e,n){let o=we(t),r=S(e),i=ve(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function St(t,e){return ye(t,e,"smooth"),e}function D(t,e){return t.style.setProperty("scroll-behavior","auto","important"),ye(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function be(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=we(t),i=e.length,s;for(;s=e[--i];){let u=S(s);if(!u)continue;let f=ve(s),l=u.width/2+(f==="left"?n:f==="right"?o:r);if((f==="left"?u.left:f==="right"?u.right:u.left+u.width/2)<=l)break}return s}function xe(t){return!!t.dataset.slideIndex}function Ee(t){let{scroller:e,elements:n,children:o}=t,r=be(e,n);return xe(r)?o[r.dataset.slideIndex]:r}function Se(t){let{scroller:e,children:n,elements:o}=t,r=be(e,o),i;!r||(xe(r)?(i=n[r.dataset.slideIndex],D(e,i)):i=r,t.activations.push(i))}var Te=b((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{let i=Ee(t);t.activations.push(i),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let s,u=P({type:"scroll",passive:!0},n).each(()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>s=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),u.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var Kn=Object.assign,Zn={capture:!0,passive:!0},V={minScrollEventInterval:.0375,maxScrollEventInterval:.18},Le=V.maxScrollEventInterval;function Qn(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<V.minScrollEventInterval?V.minScrollEventInterval:n,Le=1.4*n>V.maxScrollEventInterval?V.maxScrollEventInterval:1.4*n}function Jn(t,e){t.timer=void 0,t.stream.push(e);let n=t.times;n.length>1&&Qn(n),n.length=0}function Pe(t){this.element=t,this.times=[]}Kn(Pe.prototype,m.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,Zn)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(Jn,Le*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),m.prototype.stop.apply(this,arguments)}});function Tt(t){return new g(new Pe(t))}function to(t,e,n){let o=n.length,r=-1/0;for(;o--;){let l=S(n[o]),a=l.x+l.width;r=a>r?a:r}let i=S(e),s=getComputedStyle(t),u=O(s.paddingLeft||0),f=O(s.paddingRight||0);return u+f+r-i.x}function eo(t,e,n){let o=to(t,e,n);t.style.setProperty("--scroll-width",o+"px")}function no(t){return!t.dataset.slideIndex}var ke={construct:function(t){let e=y("slot",{part:"slides"}),n=y("div",{class:"scroller",children:[e]}),o=y("nav",{part:"controls"});t.append(n,o);let r=g.of(),i=g.combine({host:r,elements:P("slotchange",e).map(c=>p.elements=e.assignedElements())}).broadcast({memory:!0}),s=i.map(c=>{let x=c.elements.filter(no);return Kt(p.children,x)?void 0:p.children=x}).broadcast({memory:!0}),u=g.of(null),f=g.of(),l=f.filter(c=>p.active!==c&&Et("slide-active",c)).map(c=>p.active=c).broadcast({memory:!0,hot:!0}),a=P("click",t).filter(ae).broadcast(),p=this[d]={clickSuppressTime:-1/0,host:this,style:window.getComputedStyle(this),scroller:n,slides:e,controls:o,load:r,views:u,activations:f,actives:l,slotchanges:i,mutations:s,clicks:a};g.merge(i,P("resize",window)).each(c=>eo(n,e,p.elements)),g.combine({children:s,child:u}).map(c=>!p.active||p.active===c.child?D(n,c.children.includes(c.child)?c.child:c.children[0]):(St(n,c.child),c.child.dataset.slideIndex?c.children[c.child.dataset.slideIndex]:c.child)).pipe(f),Tt(n).filter(()=>!p.gesturing).each(c=>Se(p)),xt({threshold:"0.25rem",device:"mouse"},t).filter(()=>p.children.length>1).each(c=>{p.pointers=c,c.reduce(Te,p)}),a.each(c=>{c.timeStamp-p.clickSuppressTime<120&&(c.preventDefault(),c.stopPropagation())}),P("fullscreenchange",window).each(c=>{(c.target===this||c.target.contains(this))&&D(n,p.active)}),P("focusin",this).map(c=>p.children.indexOf(c.target)!==-1?c.target:p.children.find(x=>x.contains(c.target))).each(c=>St(p.scroller,c))},load:function(t){this[d].load.push(this)}};function it(t,e){function n(o,r){if(t.getState(o)!==r)return t[r?"enable":"disable"](o)}return{attribute:function(o){return n(this,o!==null)},set:function(o){return n(this,!!o)},get:function(){return t.getState(this)}}}function Lt(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Qi=w(Lt,!0);var oo=Object.assign;function U(t,e){this.element=t,this.definitions=e,this.tokens=[]}oo(U.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),Lt(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var ro=Array.prototype;function io(t,e){let n=t.tokens.slice(),o=ro.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function Pt(t){let e=Symbol("TokenList");function n(o,r){let i=o[e]||(o[e]=new U(o,t));io(i,r.trim().split(/\s+/))}return{attribute:function(o){n(this,o||"")},set:function(o){n(this,o+"")},get:function(){return this[e]||(this[e]=new U(this,t))}}}var kt={};I(kt,{disable:()=>ao,enable:()=>lo,getState:()=>po});var so=J({s:E,ms:t=>t/1e3});function co(t){let{active:e,children:n,elements:o,host:r}=t,i=o.indexOf(e),s=o[i+1]||n[0];t.autoplay.timer=null,!!s&&(r.active=s)}function uo(t){let{active:e,style:n}=t,o=so(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(co,o*1e3,t)}function Fe(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function lo(t){let e=t[d],{actives:n}=e,o=e.autoplay={},r=g.merge([!1],P("pointerenter pointerleave",t).map(s=>s.type==="pointerenter")),i=g.merge([t.contains(document.activeElement)],P("focusin focusout",t).map(b(Q("type"),{focusin:s=>!0,focusout:s=>t.contains(s.relatedTarget)}))).map((s=>u=>s===u?void 0:s=u)());o.updates=g.combine({active:n,hover:r,focus:i}).each(s=>s.hover||s.focus?Fe(e):uo(e))}function ao(t){let e=t[d];Fe(e),e.autoplay.updates.stop(),e.autoplay=void 0}function po(t){return!!t[d].autoplay}var Ft={};I(Ft,{disable:()=>ho,enable:()=>mo,getState:()=>go});function Ae(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function fo(t){let{active:e,children:n,host:o,scroller:r}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(c=>c.remove()),t.loop.appends.forEach(c=>c.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),n.length<2){t.elements=t.slides.assignedElements();return}let i=o.clientWidth,s=n.map(S),u=s[1].left,f=s[s.length-2].right,l=1;for(;s[++l]&&s[l].left<u+i;);let a=n.slice(0,l).map(Ae);for(l=s.length-2;s[--l]&&s[l].right>f-i;);let p=n.slice(++l).map((c,x)=>Ae(c,l+x));o.prepend.apply(o,p),o.append.apply(o,a),t.loop.prepends=p,t.loop.appends=a,t.elements=t.slides.assignedElements(),D(r,e||n[0])}function mo(t){let e=t[d],{mutations:n}=e,o=e.loop={};o.renders=n.each(r=>fo(e))}function ho(t){let e=t[d];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(n=>n.remove()),e.loop.appends&&e.loop.appends.forEach(n=>n.remove()),e.loop.renders.stop(),e.loop=void 0)}function go(t){return!!t[d].loop}var At={};I(At,{disable:()=>vo,enable:()=>wo,getState:()=>yo});function C(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function Oe(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function wo(t){let e=t[d],{actives:n,clicks:o,slotchanges:r}=e,i=e.navigation={prev:y("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:y("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};e.controls.prepend(i.prev,i.next),i.updates=g.combine({active:n,changes:r}).each(s=>Oe(i.prev,i.next,s.changes.elements,s.changes.elements.indexOf(s.active))),i.clicks=o.each(C({'[name="navigation"]':function(s,u){let f=parseFloat(s.value),l=e.elements.indexOf(e.active)+f,a=e.elements[l];!a||(t.active=a,Oe(i.prev,i.next,e.elements,l))}}))}function vo(t){let e=t[d];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function yo(t){return!!t[d].navigation}var Ot={};I(Ot,{disable:()=>Eo,enable:()=>xo,getState:()=>So});function Ce(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function bo(t,e,n,o){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),o.length<2||(e.buttons=y("div",{part:"pagination",children:o.map((r,i)=>y("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons)),o.length}function xo(t){let e=t[d],{shadow:n,actives:o,clicks:r,mutations:i}=e,s=e.pagination={activeSpan:y("span",{class:"invisible",text:"(Current slide)"})};s.mutations=i.each(()=>bo(e.controls,s,n,e.children)),s.updates=g.combine({active:o,children:i}).filter(u=>u.children.length>1).each(u=>Ce(s,e.children,e.active)),s.clicks=r.each(C({'[name="pagination"]':function(u,f){let{host:l}=e,a=e.children,p=a[u.value];!p||(l.active=p,Ce(s,a,p))}}))}function Eo(t){let e=t[d];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function So(t){return!!t[d].pagination}var jt={};I(jt,{disable:()=>Lo,enable:()=>To,getState:()=>Po});var je=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function Ct(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function He(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function st(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function To(t){let e=t[d];if(!je)return;let n=e.fullscreen={button:y("button",{part:"fullscreen-button",type:"button",name:"fullscreen",html:"Open in fullscreen"})};e.controls.append(n.button),n.clicks=e.clicks.each(C({'[name="fullscreen"]':(o,r)=>{let i=Ct();if(i===t){st(),n.button.part.remove("fullscreen-button-active"),n.button.innerHTML="Open in fullscreen";return}i&&st(),He(t),n.button.part.add("fullscreen-button-active"),n.button.innerHTML="Close fullscreen"}}))}function Lo(t){let e=t[d];Ct()===t&&st(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen=void 0}function Po(t){return!!t[d].fullscreen}var Me={active:{attribute:function(t){this.active=t},set:function(t){let e=this[d],n=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);if(!n)throw new Error("Cannot set active – not a child of slide-show");e.views.push(n)},get:function(){return this[d].active}},autoplay:it(kt,"autoplay"),controls:Pt({navigation:At,pagination:Ot,fullscreen:jt}),loop:it(Ft,"loop")};var ko=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),_s=ht('<ol is="slide-show-ol">',ke,Me,ko);export{_s as default};
