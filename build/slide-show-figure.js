/* slide-show 
   1.2.0
   By Stephen Band
   Built 2022-06-01 14:00 */

var Ke=Object.defineProperty;var Rt=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Ut=(t,e)=>{var o={};for(var r in t)Ze.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&Rt)for(var r of Rt(t))e.indexOf(r)<0&&Qe.call(t,r)&&(o[r]=t[r]);return o};var _=(t,e)=>{for(var o in e)Ke(t,o,{get:e[o],enumerable:!0})};function K(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var Je=Array.prototype;function tn(t,e){return typeof t=="function"?t.apply(null,e):t}function Wt(t,e,o){o=o||t.length;var r=o===1?e?t:K(t):K(function(i){return Wt(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):tn(r(s),Je.slice.call(arguments,1))}}var S=Wt;function en(t,e){return 1-Math.pow(1-e,t)}var Vt=S(en);function y(){}function ht(t,e){return e(t)}function T(t){return t}var nn=Array.prototype;function gt(){let t=arguments;return t.length?e=>nn.reduce.call(t,ht,e):T}function wt(t,e,o){return o*(e-t)+t}var on=window.performance,qt=window.requestAnimationFrame,rn=window.cancelAnimationFrame;function vt(t,e,o){var r=on.now();function i(c){var a=(c-r)/(t*1e3);a<1?(a>0&&e(a),s=qt(i)):(e(1),o&&o())}var s=qt(i);return function(){rn(s)}}function Z(t,e,o,r,i,s){let c=r[o];return vt(t,gt(e,a=>wt(c,i,a),a=>r[o]=a),s)}function sn(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function L(t){return t===window?sn():t.getClientRects()[0]||t.getBoundingClientRect()}var B={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Vt(3)},Nt=y;function cn(t,e){if(e.behavior==="smooth"){let o=t.style.getPropertyValue("scroll-snap-type"),r=()=>{let i=t.scrollLeft,s=t.scrollTop;t.style.setProperty("scroll-snap-type",o),t.scrollLeft=i,t.scrollTop=s};if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let i=t===document.body?window.innerWidth:L(t).width,s=B.scrollDuration+B.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/i;Nt=Z(s,B.scrollTransform,"scrollLeft",t,e.left,r)}else{let i=t===document.body?window.innerHeight:L(t).height,s=B.scrollDuration+B.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/i;Nt=Z(s,B.scrollTransform,"scrollTop",t,e.top,r)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){window.console&&console.log("Polyfilling Element.scrollTo(options)");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(o){typeof o=="object"?cn(this,o):e.apply(this,arguments)}}function x(t,e){return function(){let r=t.apply(this,arguments),i=e[r]||e.default;if(!i)throw new Error('overload() no handler for "'+r+'"');return i.apply(this,arguments)}}var un=x(T,{is:y,tag:y,html:function(t,e,o){e.innerHTML=o},text:function(t,e,o){e.textContent=o},children:function(t,e,o){e.innerHTML="",e.append.apply(e,o)},points:D,cx:D,cy:D,r:D,preserveAspectRatio:D,viewBox:D,default:function(t,e,o){t in e?e[t]=o:e.setAttribute(t,o)}});function D(t,e,o){e.setAttribute(t,o)}function ln(t,e){for(var o=Object.keys(e),r=o.length;r--;)un(o[r],t,e[o[r]]);return t}var Q=S(ln,!0);var yt="http://www.w3.org/2000/svg",$t=document.createElement("div"),bt=(t,e)=>e&&typeof e;function Xt(t,e){let o=document.createRange();return o.selectNode(t),o.createContextualFragment(e)}var k=x(bt,{string:function(t,e){let o=document.createElementNS(yt,t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElementNS(yt,t);return typeof e.length=="number"?o.append.apply(o,e):Q(o,e),o},default:t=>document.createElementNS(yt,t)}),an=x(bt,{string:function(t,e){let o=document.createElement(t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElement(t);return typeof e.length=="number"?o.append.apply(o,e):Q(o,e),o},default:t=>document.createElement(t)}),pn=x(T,{comment:function(t,e){return document.createComment(e||"")},fragment:x(bt,{string:function(t,e,o){if(o)return Xt(o,e);let r=document.createDocumentFragment();$t.innerHTML=e;let i=$t.childNodes;for(;i[0];)r.appendChild(i[0]);return r},object:function(t,e,o){let r=o?Xt(o):document.createDocumentFragment();return typeof e.length=="number"?r.append.apply(r,e):Q(r,e),r},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:k,ellipse:k,g:k,glyph:k,image:k,line:k,rect:k,use:k,path:k,pattern:k,polygon:k,polyline:k,svg:k,default:an}),b=pn;function xt(t,e,o){let r;typeof o!="string"&&o.input!==void 0&&o.index!==void 0&&(r=o,o=r.input.slice(o.index+o[0].length+(o.consumed||0)));let i=t.exec(o);if(!i)return;let s=e(i);return r&&(r.consumed=(r.consumed||0)+i.index+i[0].length+(i.consumed||0)),s}var Er=S(xt,!0);function fn(t,e,o){throw o.input!==void 0&&o.index!==void 0&&(o=o.input),new Error('Cannot parse string "'+(o.length>128?o.length.slice(0,128)+"…":o)+'"')}function dn(t,e,o){let r=-1;for(;++r<o.length;)e=o[r]!==void 0&&t[r]?t[r](e,o):e;return t.done?t.done(e,o):t.close?t.close(e,o):e}function mn(t,e,o,r){let i=xt(t,s=>dn(e,o,s),r);return i===void 0?e.catch?e.catch(o,r):fn(t,e,r):i}var Yt=S(mn,!0);var Et=y;var P=Symbol("internals"),M=Symbol("shadow"),Kt=Object.defineProperties,hn={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},gn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[P].form}},labels:{get:function(){return this[P].labels}},validity:{get:function(){return this[P].validity}},validationMessage:{get:function(){return this[P].validationMessage}},willValidate:{get:function(){return this[P].willValidate}},checkValidity:{value:function(){return this[P].checkValidity()}},reportValidity:{value:function(){return this[P].reportValidity()}}},wn={},Zt={once:!0},vn=0,Qt=!1;function yn(t){return hn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var bn=Yt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function xn(t,e){if(t.hasOwnProperty(e)){let o=t[e];delete t[e],t[e]=o}return t}function En(t,e,o){t._initialLoad=!0;let r=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(o){let i=b("link",{rel:"stylesheet",href:o});r.append(i)}return t[M]=r,r}function Sn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=b("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(o){this.input.value=o},e}function Tn(t){t._initialAttributes={},t._n=0}function Ln(t,e,o){let r=t._initialAttributes;for(;t._n<e.length&&r[e[t._n]]!==void 0;)o[e[t._n]].call(t,r[e[t._n]]),++t._n}function Jt(t,e,o){if(!t._initialAttributes)return;let r=t._initialAttributes;for(;t._n<e.length;)r[e[t._n]]!==void 0&&o[e[t._n]]&&o[e[t._n]].call(t,r[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function kn(t){return!!t.attribute}function Pn(t){return t.set||t.get||t.hasOwnProperty("value")}function te(t,e){return kn(e[1])&&(t.attributes[e[0]]=e[1].attribute),Pn(e[1])&&(t.properties[e[0]]=e[1]),t}function St(t,e,o,r){let{name:i,tag:s}=bn(t),c=typeof s=="string"?yn(s):HTMLElement,{attributes:a,properties:d}=o?Object.entries(o).reduce(te,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(te,{attributes:{},properties:{}}):wn;function p(){let f=Reflect.construct(c,arguments,p),v=e.construct&&e.construct.length>vn?En(f,e,r||e.stylesheet):void 0,l=p.formAssociated&&Sn(f);return s&&(Qt=!0),e.construct&&e.construct.call(f,v,l),a&&(Tn(f),Promise.resolve(1).then(function(){Jt(f,p.observedAttributes,a)})),d&&Object.keys(d).reduce(xn,f),f}return p.prototype=Object.create(c.prototype,d),d&&d.value&&(p.formAssociated=!0,Kt(p.prototype,gn),(e.enable||e.disable)&&(p.prototype.formDisabledCallback=function(f){return f?e.disable&&e.disable.call(this,this[M],this[P]):e.enable&&e.enable.call(this,this[M],this[P])}),e.reset&&(p.prototype.formResetCallback=function(){return e.reset.call(this,this[M],this[P])}),e.restore&&(p.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[M],this[P])})),a&&(p.observedAttributes=Object.keys(a),p.prototype.attributeChangedCallback=function(f,v,l){if(!this._initialAttributes)return a[f].call(this,l);this._initialAttributes[f]=l,Ln(this,p.observedAttributes,a)}),p.prototype.connectedCallback=function(){let f=this,v=f[M],l=f[P];if(f._initialAttributes&&Jt(f,p.observedAttributes,a),f._initialLoad){let u=v.querySelectorAll('link[rel="stylesheet"]');if(u.length){let j=0,mt=u.length,_t=function(Xe){++j>=u.length&&(delete f._initialLoad,e.load&&(Et("element()","loaded",Array.from(u).map(Ye=>Ye.href).join(`
`)),e.load.call(f,v)))},Ne=_t;for(;mt--;)u[mt].addEventListener("load",_t,Zt),u[mt].addEventListener("error",Ne,Zt);e.connect&&e.connect.call(this,v,l)}else e.connect&&e.connect.call(this,v,l),e.load&&e.load.call(this,v,l)}else e.connect&&e.connect.call(this,v,l)},e.disconnect&&(p.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[M],this[P])}),Et("element()","<"+(s?s+" is="+i:i)+">"),window.customElements.define(i,p,s&&{extends:s}),s&&!Qt&&document.querySelectorAll('[is="'+i+'"]').forEach(f=>{Kt(f,d),e.construct&&e.construct.apply(f);let v;for(v in a){let l=f.attributes[v];l&&a[v].call(f,l.value)}e.connect&&e.connect.apply(f)}),p}function ee(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let o=Object.keys(t),r=Object.keys(e),i=o.length;for(;i--;){if(t[o[i]]===void 0){if(e[o[i]]!==void 0)return!1}else if(!e.hasOwnProperty(o[i])||!ee(t[o[i]],e[o[i]]))return!1;let s=r.indexOf(o[i]);s>-1&&r.splice(s,1)}for(i=r.length;i--;)if(e[r[i]]===void 0){if(t[r[i]]!==void 0)return!1}else return!1;return!0}var ne=S(ee,!0);function Fn(t,e){return e[t]}var G=S(Fn,!0);var On=Object.freeze;function oe(){return this}var F=On({shift:y,push:y,forEach:y,join:function(){return""},map:oe,filter:oe,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:y,pipe:T,start:y,stop:y,done:y,valueOf:function(){return null}});function Tt(){return this}function Lt(t){return t&&t[Symbol.iterator]}var An=Object.assign;function Mn(t){return t.stop?t.stop():t()}function In(t){t.forEach(Mn),t.length=0}function z(){}An(z.prototype,{stop:function(){return this.stopables&&In(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var Cn=Object.assign;function J(t){z.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,J(o)}function w(){}Cn(w.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&J(this[0]),this}});var O=Object.assign,A=Object.create;function R(t,e){e!==void 0&&t[0].push(e)}function Hn(t,e){if(t[1]){let o=-1;for(;t[++o]&&t[o]!==e;);for(;t[o++];)t[o-1]=t[o];J(e)}else t.stop()}function m(t){this.input=t}O(m.prototype,z.prototype,{push:function(t){R(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new re(this,t)},filter:function(t){return new ie(this,t)},split:function(t){return new ce(this,t)},flatMap:function(t){return new se(this,t)},take:function(t){return new ue(this,t)},each:function(t){return new pe(this,t)},reduce:function(t,e){return new le(this,t,e)},scan:function(t,e){return new ae(this,t,e)},stop:function(){return Hn(this.input,this),this}});function re(t,e){this.input=t,this.fn=e}re.prototype=O(A(m.prototype),{push:function(e){let o=this.fn;R(this,o(e))}});function ie(t,e){this.input=t,this.fn=e}ie.prototype=O(A(m.prototype),{push:function(e){this.fn(e)&&R(this,e)}});function se(t,e){this.input=t,this.fn=e}se.prototype=O(A(m.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(Lt(r))for(let i of r)R(this,i);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function ce(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}ce.prototype=O(A(m.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(R(this,o),this.chunk=[]):o.push(e)}});function ue(t,e){this.input=t,this.count=e}ue.prototype=O(A(m.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function le(t,e,o){return this.input=t,this.fn=e,this.value=o,this.i=0,t.pipe(this),o}le.prototype=O(A(m.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function ae(t,e,o){this.input=t,this.fn=e,this.value=o}ae.prototype=O(A(m.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function pe(t,e){this.input=t,this.push=e,t.pipe(this)}pe.prototype=O(A(m.prototype),{each:null,reduce:null,pipe:null});var jn=Array.prototype,Bn=Object.assign,Dn=Object.create;function U(t){this.buffer=t||[]}U.prototype=Bn(Dn(m.prototype),w.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(jn.shift.apply(this.buffer));return this.buffer=this[0],t}});var fe=Object.assign,Gn=Promise.resolve(),zn={schedule:function(){Gn.then(this.fire)},unschedule:y},_n={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},Rn={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function W(t,e){m.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},fe(this,e==="tick"?zn:e==="frame"?_n:Rn)}fe(W.prototype,m.prototype,{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=m.of(t),this[0].push(this.output),this.schedule())},stop:function(){this.timer&&this.fire(),m.prototype.stop.apply(this,arguments)}});var Un=Object.assign,Wn=Object.create;function V(t,e){m.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(F)}V.prototype=Un(Wn(m.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var Vn=Object.assign;function tt(t){this.promise=t}Vn(tt.prototype,w.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(o=>this[0].push(o)).finally(o=>this.stop())},stop:function(){w.prototype.stop.apply(this,arguments),this[0]=F}});var me=Object.assign,he=Object.keys;function de(t,e,o){let r=t.values,i=t.names,s=t[0];r[e]=o,(t.active||(t.active=he(r).length===i.length))&&s.push(me({},r))}function et(t){this.inputs=t,this.active=!1}me(et.prototype,w.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=he(e),this[0]=t;for(let o in e){let r=e[o];r.pipe?t.done(r.each(i=>de(this,o,i))):r.then?r.then(i=>de(this,o,i)):console.log("Todo: combine() raw values ?")}}});var qn=Object.assign;function nt(t){this.inputs=t}qn(nt.prototype,w.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let o=-1,r;for(;r=e[++o];)if(r.pipe)r.pipe(t);else if(r.then)r.then(i=>t.push(i));else{let i=-1;for(;++i<r.length;)t.push(r[i])}},stop:function(){let t=this.inputs,e=-1,o;for(;o=t[++e];)o.stop&&o.stop();return w.prototype.stop.apply(this,arguments)}});var Pt=Array.prototype,Nn=Object.assign;function $n(t){return t.length>0}function Xn(t,e,o){return t[o]=e.shift(),t}function Yn(t){return[]}function kt(t,e,o,r){o.push(r),e.every($n)&&t.push(e.reduce(Xn,{}))}function ot(t){this.inputs=t,this.buffers=Pt.map.call(t,Yn)}Nn(ot.prototype,w.prototype,{pipe:function(t){let e=this.inputs,o=this.buffers;this[0]=t,Pt.forEach.call(e,(r,i)=>{let s=o[i];r.each?t.done(r.each(c=>kt(t,o,s,c))):r.then?r.then(c=>kt(t,o,s,c)):Pt.forEach.call(r,c=>kt(t,o,s,c))})},stop:function(){let t=this.inputs,e=-1,o;for(;o=t[++e];)o.stop();return w.prototype.stop.apply(this,arguments)}});var Kn=Array.prototype,ge=Object.assign;function Zn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var g=ge(m,{of:function(){return new U(Kn.slice.apply(arguments))},from:function(t){return t.pipe?new m(t):t.then?new m(new tt(t)):typeof t.length=="number"?new U(t):Zn(t)},burst:function(e){return new W(F,e)},broadcast:function(e){return new V(F,e)},combine:function(e){return new m(new et(e))},merge:function(){return new m(new nt(arguments))},zip:function(){return new m(new ot(arguments))}});ge(m.prototype,{log:Tt,burst:function(t){return new W(this,t)},broadcast:function(t){return new V(this,t)}});var Qn=Object.assign,Jn=/\s+/,we={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function ve(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var ye=0;window.addEventListener("click",t=>ye=t.timeStamp);function to(t,e){return t.node.addEventListener(we[e]||e,t,t.options),t}function eo(t,e){return t.node.removeEventListener(we[e]||e,t),t}function be(t,e,o){this.types=t.split(Jn),this.options=e,this.node=o,this.select=e&&e.select}Qn(be.prototype,w.prototype,{pipe:function(t){this[0]=t,this.types.reduce(to,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=ye)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(eo,this),w.prototype.stop.apply(this,arguments)}});function E(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new g(new be(t,o,e))}function Ft(t){return typeof t}var no=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function q(t){return function(o){if(typeof o=="number")return o;var r=no.exec(o);if(!r||!t[r[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+o+'" (accepted units '+Object.keys(t).join(", ")+")");return r?t.catch(parseFloat(r[1]),r[2]):t.catch(parseFloat(o))}return t[r[2]||""](parseFloat(r[1]))}}var oo=/px$/,xe={"transform:translateX":function(t){var e=N("transform",t);if(!e||e==="none")return 0;var o=rt(e);return parseFloat(o[4])},"transform:translateY":function(t){var e=N("transform",t);if(!e||e==="none")return 0;var o=rt(e);return parseFloat(o[5])},"transform:scale":function(t){var e=N("transform",t);if(!e||e==="none")return 0;var o=rt(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.sqrt(r*r+i*i)},"transform:rotate":function(t){var e=N("transform",t);if(!e||e==="none")return 0;var o=rt(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.atan2(i,r)}};function rt(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function N(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function it(t,e){if(xe[t])return xe[t](e);var o=N(t,e);return typeof o=="string"&&oo.test(o)?parseFloat(o):o}var st,ct;function ro(){if(!st){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",st=it("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return st}function io(){return ct||(ct=it("font-size",document.documentElement)),ct}window.addEventListener("resize",()=>{st=void 0,ct=void 0});var I=x(Ft,{number:T,string:q({px:T,em:t=>ro()*t,rem:t=>io()*t,vw:t=>window.innerWidth*t/100,vh:t=>window.innerHeight*t/100,vmin:t=>window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100,vmax:t=>window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100})}),Ee=I;var Ot=Object.assign,ut={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function so(t,e,o){var r=o.clientX-e.clientX,i=o.clientY-e.clientY;return!(r*r+i*i<t*t)}function Se(t,e,o){this.stream=t,this.events=e,this.options=o,this.pointerId=e[0].pointerId,this.threshold=Ee(o.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}Ot(Se.prototype,{handleEvent:x(G("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&so(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=g.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function co(t){var e=t.target.tagName;return e&&(!!ut.ignoreTags[e.toLowerCase()]||t.target.draggable)}function Te(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}Ot(Te.prototype,w.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!co(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new Se(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),w.prototype.stop.apply(this,arguments)}});function At(t,e){return t=e&&t?Ot({},ut,t):ut,e=e||t,new g(new Te(e,t))}var uo=Object.assign,$={bubbles:!0,cancelable:!0};function Mt(t,e){var p;let o=$,r,i,s,c,a,d;return typeof t=="object"?(p=t,{type:t,detail:i,bubbles:s,cancelable:c,composed:a}=p,r=Ut(p,["type","detail","bubbles","cancelable","composed"]),d=uo(new CustomEvent(t,{detail:i,bubbles:s||$.bubbles,cancelable:c||$.cancelable,composed:a||$.composed}),r)):d=new CustomEvent(t,$),e.dispatchEvent(d)}var qi=S(Mt,!0);var h=Symbol("data"),X={minScrollInterval:.0375,maxScrollInterval:.18},Le=X.maxScrollInterval;function ke(t){let e=t.length,o=0;for(;--e;){let r=t[e]-t[e-1];o=r>o?r:o}o=o<X.minScrollInterval?X.minScrollInterval:o,Le=1.4*o>X.maxScrollInterval?X.maxScrollInterval:1.4*o}function lt(){return Le}function Pe(t){let e=L(t),o=window.getComputedStyle(t,null),r=I(o.getPropertyValue("padding-left")),i=I(o.getPropertyValue("padding-right"));return e.leftPadding=e.left+r,e.rightPadding=e.left+e.width-i,e.centrePadding=e.leftPadding+(e.width-r-i)/2,e}function Fe(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function Oe(t,e,o){let r=Pe(t),i=L(e),s=Fe(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(s==="left"?i.left-r.leftPadding:s==="right"?i.right-r.rightPadding:i.left+i.width/2-r.centrePadding),behavior:o})}function Ae(t,e){return Oe(t,e,"smooth"),e}function C(t,e){return t.style.setProperty("scroll-behavior","auto","important"),Oe(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function Me(t,e){let{leftPadding:o,rightPadding:r,centrePadding:i}=Pe(t),s=e.length,c;for(;c=e[--s];){let a=L(c);if(!a)continue;let d=Fe(c),p=a.width/2+(d==="left"?o:d==="right"?r:i);if((d==="left"?a.left:d==="right"?a.right:a.left+a.width/2)<=p)break}return c}function Ie(t){return!!t.dataset.slideIndex}function Ce(t){let{scroller:e,elements:o,children:r}=t,i=Me(e,o);return Ie(i)?r[i.dataset.slideIndex]:i}function He(t){let{scroller:e,children:o,elements:r}=t,i=Me(e,r),s;!i||(Ie(i)?(s=o[i.dataset.slideIndex],C(e,s)):s=i,t.activations.push(s))}function at(t,e,o){let r=e[o];!r||(t.active=r)}function je(t,e,o){let r=e.indexOf(o)+1;at(t,e,r)}function Be(t,e,o){let r=e.indexOf(o)-1;at(t,e,r)}function lo(t,e){t.style.setProperty("scroll-snap-type",""),e.stop()}var De=x((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let o=e.clientX,r=e.clientY;if(!t.gesturing){if(Math.abs(o-t.x0)<Math.abs(r-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let i=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-i,t},default:function(t,e){let o=t.scroller;t.clickSuppressTime=e.timeStamp;let r=o.scrollLeft;o.style.setProperty("scroll-snap-type","");let i=o.scrollLeft;if(r===i)o.style.setProperty("scroll-behavior","");else{let s=Ce(t);t.activations.push(s),o.style.setProperty("scroll-snap-type","none","important"),o.scrollLeft=r,o.style.setProperty("scroll-behavior",""),o.scrollTo({top:o.scrollTop,left:i,behavior:"smooth"}),E({type:"scroll",passive:!0},o).reduce((c,a,d,p)=>(clearTimeout(c),setTimeout(lo,lt()*1e3,o,p)))}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var ao=Object.assign,po={capture:!0,passive:!0};function fo(t,e){t.timer=void 0,t.stream.push(e);let o=t.times;o.length>1&&ke(o),o.length=0}function Ge(t){this.element=t,this.times=[]}ao(Ge.prototype,w.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,po)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(fo,lt()*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),w.prototype.stop.apply(this,arguments)}});function It(t){return new g(new Ge(t))}function mo(t,e,o){let r=o.length,i=-1/0;for(;r--;){let p=L(o[r]),f=p.x+p.width;i=f>i?f:i}let s=L(e),c=getComputedStyle(t),a=I(c.paddingLeft||0),d=I(c.paddingRight||0);return a+d+i-s.x}function ho(t,e,o){let r=mo(t,e,o);t.style.setProperty("--scroll-width",r+"px")}function go(t){return!t.dataset.slideIndex}var ze={construct:function(t){let e=b("slot",{part:"slides"}),o=b("div",{class:"scroller",children:[e]}),r=b("nav",{part:"controls",children:[b("slot",{name:"controls"})]});t.append(o,r);let i=g.broadcast(),s=g.broadcast(),c=g.combine({host:s,elements:E("slotchange",e).map(u=>l.elements=e.assignedElements())}).broadcast({memory:!0}),a=c.map(u=>{let j=u.elements.filter(go);return ne(l.children,j)?void 0:l.children=j}).broadcast({memory:!0,hot:!0}),d=g.of(),p=g.of(),f=p.map(u=>u.dataset.slideIndex?l.children[u.dataset.slideIndex]:u).filter(u=>l.active!==u&&Mt("slide-active",u)).map(u=>l.active=u).broadcast({memory:!0,hot:!0}),v=E("click",t).filter(ve).broadcast(),l=this[h]={clickSuppressTime:-1/0,connected:!1,host:this,style:window.getComputedStyle(this),elements:F,children:F,device:void 0,shadow:t,scroller:o,slides:e,controls:r,connects:i,load:s,views:d,activations:p,actives:f,slotchanges:c,mutations:a,clicks:v};g.merge(c,E("resize",window)).filter(u=>e.offsetWidth>0&&e.offsetHeight>0).each(u=>(console.log("updateWidth",e.offsetWidth,e.offsetHeight,e.offsetParent,this),ho(o,e,l.elements))),g.combine({slotchanges:c,connects:i}).map(u=>l.elements.includes(l.active)?l.active:l.children[0]).map(u=>(console.log("A"),l.connected?C(o,u):u)).pipe(p),g.combine({host:s,child:d}).map(u=>l.elements.includes(u.child)&&l.active!==u.child?u.child:void 0).map(u=>(console.log("B"),l.connected?l.active?Ae(o,u):C(o,u):u)).pipe(p),It(o).filter(u=>l.connected&&!l.gesturing).each(u=>He(l)),At({threshold:"0.25rem",device:"mouse"},t).filter(()=>l.children.length>1).each(u=>{l.pointers=u,u.reduce(De,l)}),v.each(u=>{u.timeStamp-l.clickSuppressTime<120&&(u.preventDefault(),u.stopPropagation())}),E("fullscreenchange",window).filter(u=>l.active).each(u=>{(u.target===this||u.target.contains(this))&&(console.log("FULLSCREEN",e.offsetWidth,e.offsetHeight,e.offsetParent,l.active),C(o,l.active))}),g.merge(E("pointerdown",this),E("keydown",this)).each(u=>l.device=u.type==="keydown"?"keyboard":u.pointerType),E("focusin",this).filter(u=>l.device==="keyboard").map(u=>l.children.indexOf(u.target)!==-1?u.target:l.children.find(j=>j.contains(u.target))).pipe(d),E("keydown",this).filter(()=>document.activeElement===this||this.contains(document.activeElement)).map(x(G("keyCode"),{37:u=>(u.preventDefault(),l.elements[l.elements.indexOf(l.active)-1]),39:u=>(u.preventDefault(),l.elements[l.elements.indexOf(l.active)+1]),default:y})).pipe(d)},load:function(t){this[h].load.push(this)},connect:function(t){let e=this[h];e.connected=!0,e.connects.push(!0)},disconnect:function(t){let e=this[h];e.connected=!1}};function pt(t,e){function o(r,i){if(t.getState(r)!==i)return t[i?"enable":"disable"](r)}return{attribute:function(r){return o(this,r!==null)},set:function(r){return o(this,!!r)},get:function(){return t.getState(this)}}}function Ct(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return e}var Ls=S(Ct,!0);var wo=Object.assign;function Y(t,e){this.element=t,this.definitions=e,this.tokens=[]}wo(Y.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),Ct(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var vo=Array.prototype;function yo(t,e){let o=t.tokens.slice(),r=vo.slice.apply(e),i=o.length;for(;i--;)r.includes(o[i])&&o.splice(i,1);t.remove.apply(t,o),t.add.apply(t,r)}function Ht(t){let e=Symbol("TokenList");function o(r,i){let s=r[e]||(r[e]=new Y(r,t));yo(s,i.trim().split(/\s+/))}return{attribute:function(r){o(this,r||"")},set:function(r){o(this,r+"")},get:function(){return this[e]||(this[e]=new Y(this,t))}}}var jt={};_(jt,{disable:()=>To,enable:()=>So,getState:()=>Lo});var bo=q({s:T,ms:t=>t/1e3});function xo(t){let{active:e,children:o,elements:r,host:i}=t,s=r.indexOf(e),c=r[s+1]||o[0];t.autoplay.timer=null,!!c&&(i.active=c)}function Eo(t){let{active:e,style:o}=t,r=bo(window.getComputedStyle(e).getPropertyValue("--slide-duration")||o.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(xo,r*1e3,t)}function _e(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function So(t){let e=t[h],{actives:o}=e,r=e.autoplay={},i=g.merge([!1],E("pointerenter pointerleave",t).map(c=>c.type==="pointerenter")),s=g.merge([t.contains(document.activeElement)],E("focusin focusout",t).map(x(G("type"),{focusin:c=>!0,focusout:c=>t.contains(c.relatedTarget)}))).map((c=>a=>c===a?void 0:c=a)());r.updates=g.combine({active:o,hover:i,focus:s}).each(c=>c.hover||c.focus?_e(e):Eo(e))}function To(t){let e=t[h];_e(e),e.autoplay.updates.stop(),e.autoplay=void 0}function Lo(t){return!!t[h].autoplay}var Bt={};_(Bt,{disable:()=>Fo,enable:()=>Po,getState:()=>Oo});function Re(t,e){let o=t.cloneNode(!0);return o.dataset.slideIndex=e,o.removeAttribute("id"),o.setAttribute("aria-hidden","true"),o.tabIndex="-1",o}function ko(t){let{active:e,children:o,host:r,scroller:i}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(l=>l.remove()),t.loop.appends.forEach(l=>l.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),o.length<2){t.elements=t.slides.assignedElements();return}let s=r.clientWidth,c=o.map(L),a=c[1].left,d=c[c.length-2].right,p=1;for(;c[++p]&&c[p].left<a+s;);let f=o.slice(0,p).map(Re);for(p=c.length-2;c[--p]&&c[p].right>d-s;);let v=o.slice(++p).map((l,u)=>Re(l,p+u));r.prepend.apply(r,v),r.append.apply(r,f),t.loop.prepends=v,t.loop.appends=f,t.elements=t.slides.assignedElements(),C(i,e||o[0])}function Po(t){let e=t[h],{mutations:o}=e,r=e.loop={};r.renders=o.each(i=>ko(e))}function Fo(t){let e=t[h];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(o=>o.remove()),e.loop.appends&&e.loop.appends.forEach(o=>o.remove()),e.loop.renders.stop(),e.loop=void 0)}function Oo(t){return!!t[h].loop}var Dt={};_(Dt,{disable:()=>Io,enable:()=>Mo,getState:()=>Co});function H(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(r){let i=r.target,s=-1;for(;e[++s];){let c=i.closest(e[s]);if(c)return t[e[s]](c,...arguments)}}}function Ao(t,e,o,r){r===0?t.hidden=!0:t.hidden=!1,r===o.length-1?e.hidden=!0:e.hidden=!1}function Mo(t){let e=t[h],{actives:o,clicks:r,slotchanges:i}=e,s=e.navigation={prev:b("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",children:[b("slot",{name:"prev-button",html:`
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M19,9 L9,20 L19,31"></path>
                    </svg>
                    Previous
                `})]}),next:b("button",{part:"next-button",type:"button",name:"navigation",value:"1",children:[b("slot",{name:"next-button",html:`
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M11,9 L21,20 L11,31"></path>
                    </svg>
                    Next
                `})]})};e.controls.prepend(s.prev,s.next),s.updates=g.combine({active:o,changes:i}).each(c=>Ao(s.prev,s.next,c.changes.elements,c.changes.elements.indexOf(c.active))),s.clicks=r.each(H({'[slot="prev-button"]':(c,a)=>{Be(t,e.elements,e.active)},'[slot="next-button"]':(c,a)=>{je(t,e.elements,e.active)},'[name="navigation"]':(c,a)=>{let d=e.elements.indexOf(e.active)+parseFloat(c.value);at(t,e.elements,d)}}))}function Io(t){let e=t[h];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function Co(t){return!!t[h].navigation}var Gt={};_(Gt,{disable:()=>Bo,enable:()=>jo,getState:()=>Do});function Ue(t,e,o){let{active:r,buttons:i,index:s}=t;if(r===o)return;s>-1&&(t.activeSpan.remove(),i.children[s].part.remove("page-button-active"));let c=e.indexOf(o);c!==-1&&(i.children[c].part.add("page-button-active"),i.children[c].append(t.activeSpan),t.index=c,t.active=o)}function Ho(t,e,o,r){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),r.length<2||(e.buttons=b("div",{part:"pagination",children:r.map((i,s)=>b("button",{part:"page-button",type:"button",name:"pagination",value:s}))}),t.append(e.buttons)),r.length}function jo(t){let e=t[h],{shadow:o,actives:r,clicks:i,mutations:s}=e,c=e.pagination={activeSpan:b("span",{class:"invisible",text:"(Current slide)"})};c.mutations=s.each(()=>Ho(e.controls,c,o,e.children)),c.updates=g.combine({active:r,children:s}).filter(a=>a.children.length>1).each(a=>Ue(c,e.children,e.active)),c.clicks=i.each(H({'[name="pagination"]':function(a,d){let{host:p}=e,f=e.children,v=f[a.value];!v||(p.active=v,Ue(c,f,v))}}))}function Bo(t){let e=t[h];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function Do(t){return!!t[h].pagination}var zt={};_(zt,{disable:()=>zo,enable:()=>Go,getState:()=>_o});var We=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function ft(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Ve(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function dt(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function Go(t){let e=t[h];if(!We)return;let o=e.fullscreen={button:b("button",{part:"fullscreen-button",type:"button",name:"fullscreen",children:[b("slot",{name:"fullscreen-button",html:`
                    <svg viewBox="0 0 40 40" aria-hidden="true">
                        <path class="fullscreen-hidden" d="M9,9 L17,17 M9,15 L9,9 L15,9 M9,31 L17,23 M9,25 L9,31 L15,31 M31,31 L23,23 M25,31 L31,31 L31,25 M31,9 L23,17 M25,9 L31,9 L31,15"></path>
                        <path class="fullscreen-shown"  d="M9,9 L31,31 M9,31 L31,9"></path>
                    </svg>
                    <span class="fullscreen-hidden">Open in fullscreen</span>
                    <span class="fullscreen-shown">Close fullscreen</span>
                `})]})};e.controls.append(o.button),o.changes=E("fullscreenchange",t).filter(r=>ft()===t).each(r=>{document.activeElement!==t&&(o.tabIndex=t.tabIndex,t.tabIndex<0&&(t.tabIndex=0),t.focus());let i=E("fullscreenchange",t).each(s=>{t.tabIndex=o.tabIndex,o.tabIndex=void 0,i.stop()})}),o.clicks=e.clicks.each(H({'[name="fullscreen"]':(r,i)=>{let s=ft();if(s===t){dt();return}s&&dt(),Ve(t)}}))}function zo(t){let e=t[h];ft()===t&&dt(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen.changes.stop(),e.fullscreen=void 0}function _o(t){return!!t[h].fullscreen}var qe={active:{attribute:function(t){this.active=t},set:function(t){let e=this[h],o=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);e.views.push(o)},get:function(){return this[h].active}},autoplay:pt(jt,"autoplay"),controls:Ht({navigation:Dt,pagination:Gt,fullscreen:zt}),loop:pt(Bt,"loop")};var Ro=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),hc=St('<figure is="slide-show-figure">',ze,qe,Ro);export{hc as default};
