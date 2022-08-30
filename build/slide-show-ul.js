/* slide-show 
   1.2.2
   By Stephen Band
   Built 2022-08-30 14:00 */

var Qe=Object.defineProperty;var _t=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var Rt=(t,e)=>{var o={};for(var r in t)Je.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&_t)for(var r of _t(t))e.indexOf(r)<0&&Ze.call(t,r)&&(o[r]=t[r]);return o};var _=(t,e)=>{for(var o in e)Qe(t,o,{get:e[o],enumerable:!0})};function Z(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var tn=Array.prototype;function en(t,e){return typeof t=="function"?t.apply(null,e):t}function Wt(t,e,o){o=o||t.length;var r=o===1?e?t:Z(t):Z(function(i){return Wt(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):en(r(s),tn.slice.call(arguments,1))}}var S=Wt;function nn(t,e){return 1-Math.pow(1-e,t)}var Vt=S(nn);function v(){}function ht(t,e){return e(t)}function L(t){return t}var on=Array.prototype;function gt(){let t=arguments;return t.length?e=>on.reduce.call(t,ht,e):L}function wt(t,e,o){return o*(e-t)+t}var rn=window.performance,qt=window.requestAnimationFrame,sn=window.cancelAnimationFrame;function vt(t,e,o){var r=rn.now();function i(c){var u=(c-r)/(t*1e3);u<1?(u>0&&e(u),s=qt(i)):(e(1),o&&o())}var s=qt(i);return function(){sn(s)}}function tt(t,e,o,r,i,s){let c=r[o];return vt(t,gt(e,u=>wt(c,i,u),u=>r[o]=u),s)}function cn(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function k(t){return t===window?cn():t.getClientRects()[0]||t.getBoundingClientRect()}var z={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Vt(3)},Nt=v;function ln(t,e){if(e.behavior==="smooth"){let o=t.style.getPropertyValue("scroll-snap-type"),r=()=>{let i=t.scrollLeft,s=t.scrollTop;t.style.setProperty("scroll-snap-type",o),t.scrollLeft=i,t.scrollTop=s};if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let i=t===document.body?window.innerWidth:k(t).width,s=z.scrollDuration+z.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/i;Nt=tt(s,z.scrollTransform,"scrollLeft",t,e.left,r)}else{let i=t===document.body?window.innerHeight:k(t).height,s=z.scrollDuration+z.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/i;Nt=tt(s,z.scrollTransform,"scrollTop",t,e.top,r)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){window.console&&console.log("Polyfilling Element.scrollTo(options)");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(o){typeof o=="object"?ln(this,o):e.apply(this,arguments)}}function x(t,e){return function(){let r=t.apply(this,arguments),i=e[r]||e.default;if(!i)throw new Error('overload() no handler for "'+r+'"');return i.apply(this,arguments)}}var an=x(L,{is:v,tag:v,data:function(t,e,o){Object.assign(e.dataset,o)},html:function(t,e,o){e.innerHTML=o},text:function(t,e,o){e.textContent=o},children:function(t,e,o){e.innerHTML="",e.append.apply(e,o)},points:j,cx:j,cy:j,r:j,preserveAspectRatio:j,transform:j,viewBox:j,default:function(t,e,o){t in e?e[t]=o:e.setAttribute(t,o)}});function j(t,e,o){e.setAttribute(t,o)}function un(t,e){for(var o=Object.keys(e),r=o.length;r--;)an(o[r],t,e[o[r]]);return t}var et=S(un,!0);var yt="http://www.w3.org/2000/svg",$t=document.createElement("div"),bt=(t,e)=>e&&typeof e;function Xt(t,e){let o=document.createRange();return o.selectNode(t),o.createContextualFragment(e)}var F=x(bt,{string:function(t,e){let o=document.createElementNS(yt,t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElementNS(yt,t);return typeof e.length=="number"?o.append.apply(o,e):et(o,e),o},default:t=>document.createElementNS(yt,t)}),pn=x(bt,{string:function(t,e){let o=document.createElement(t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElement(t);return typeof e.length=="number"?o.append.apply(o,e):et(o,e),o},default:t=>document.createElement(t)}),fn=x(L,{comment:function(t,e){return document.createComment(e||"")},fragment:x(bt,{string:function(t,e,o){if(o)return Xt(o,e);let r=document.createDocumentFragment();$t.innerHTML=e;let i=$t.childNodes;for(;i[0];)r.appendChild(i[0]);return r},object:function(t,e,o){let r=o?Xt(o):document.createDocumentFragment();return typeof e.length=="number"?r.append.apply(r,e):et(r,e),r},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:F,ellipse:F,g:F,glyph:F,image:F,line:F,rect:F,use:F,path:F,pattern:F,polygon:F,polyline:F,svg:F,default:pn}),y=fn;function xt(t,e,o){let r;typeof o!="string"&&o.input!==void 0&&o.index!==void 0&&(r=o,o=r.input.slice(o.index+o[0].length+(o.consumed||0)));let i=t.exec(o);if(!i)return;let s=e(i);return r&&(r.consumed=(r.consumed||0)+i.index+i[0].length+(i.consumed||0)),s}var Sr=S(xt,!0);function dn(t,e,o){throw o.input!==void 0&&o.index!==void 0&&(o=o.input),new Error('Cannot parse string "'+(o.length>128?o.length.slice(0,128)+"…":o)+'"')}function mn(t,e,o){let r=-1;for(;++r<o.length;)e=o[r]!==void 0&&t[r]?t[r](e,o):e;return t.done?t.done(e,o):t.close?t.close(e,o):e}function hn(t,e,o,r){let i=xt(t,s=>mn(e,o,s),r);return i===void 0?e.catch?e.catch(o,r):dn(t,e,r):i}var Yt=S(hn,!0);var Et=v;var O=Symbol("internals"),H=Symbol("shadow"),Kt=Object.defineProperties,gn={a:HTMLAnchorElement,article:HTMLElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,section:HTMLElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},wn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[O].form}},labels:{get:function(){return this[O].labels}},validity:{get:function(){return this[O].validity}},validationMessage:{get:function(){return this[O].validationMessage}},willValidate:{get:function(){return this[O].willValidate}},checkValidity:{value:function(){return this[O].checkValidity()}},reportValidity:{value:function(){return this[O].reportValidity()}}},vn={},Qt={once:!0},yn=0,Jt=!1;function bn(t){return gn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var xn=Yt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function En(t,e){if(t.hasOwnProperty(e)){let o=t[e];delete t[e],t[e]=o}return t}function Sn(t,e,o){t._initialLoad=!0;let r=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(o){let i=y("link",{rel:"stylesheet",href:o});r.append(i)}return t[H]=r,r}function Tn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=y("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(o){this.input.value=o},e}function Ln(t){t._initialAttributes={},t._n=0}function kn(t,e,o){let r=t._initialAttributes;for(;t._n<e.length&&r[e[t._n]]!==void 0;)o[e[t._n]].call(t,r[e[t._n]]),++t._n}function Zt(t,e,o){if(!t._initialAttributes)return;let r=t._initialAttributes;for(;t._n<e.length;)r[e[t._n]]!==void 0&&o[e[t._n]]&&o[e[t._n]].call(t,r[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function Fn(t){return!!t.attribute}function On(t){return t.set||t.get||t.hasOwnProperty("value")}function te(t,e){return Fn(e[1])&&(t.attributes[e[0]]=e[1].attribute),On(e[1])&&(t.properties[e[0]]=e[1]),t}function St(t,e,o,r){let{name:i,tag:s}=xn(t),c=typeof s=="string"?bn(s):HTMLElement,{attributes:u,properties:m}=o?Object.entries(o).reduce(te,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(te,{attributes:{},properties:{}}):vn;function p(){let d=Reflect.construct(c,arguments,p),g=e.construct&&e.construct.length>yn?Sn(d,e,r||e.stylesheet):void 0,w=p.formAssociated&&Tn(d);return s&&(Jt=!0),e.construct&&e.construct.call(d,g,w),u&&(Ln(d),Promise.resolve(1).then(function(){Zt(d,p.observedAttributes,u)})),m&&Object.keys(m).reduce(En,d),d}return p.prototype=Object.create(c.prototype,m),m&&m.value&&(p.formAssociated=!0,Kt(p.prototype,wn),(e.enable||e.disable)&&(p.prototype.formDisabledCallback=function(d){return d?e.disable&&e.disable.call(this,this[H],this[O]):e.enable&&e.enable.call(this,this[H],this[O])}),e.reset&&(p.prototype.formResetCallback=function(){return e.reset.call(this,this[H],this[O])}),e.restore&&(p.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[H],this[O])})),u&&(p.observedAttributes=Object.keys(u),p.prototype.attributeChangedCallback=function(d,g,w){if(!this._initialAttributes)return u[d].call(this,w);this._initialAttributes[d]=w,kn(this,p.observedAttributes,u)}),p.prototype.connectedCallback=function(){let d=this,g=d[H],w=d[O];if(d._initialAttributes&&Zt(d,p.observedAttributes,u),d._initialLoad){let f=g.querySelectorAll('link[rel="stylesheet"]');if(f.length){let a=0,M=f.length,Ut=function(Ye){++a>=f.length&&(delete d._initialLoad,e.load&&(Et("element()","loaded",Array.from(f).map(Ke=>Ke.href).join(`
`)),e.load.call(d,g)))},$e=Ut;for(;M--;)f[M].addEventListener("load",Ut,Qt),f[M].addEventListener("error",$e,Qt);e.connect&&e.connect.call(this,g,w)}else e.connect&&e.connect.call(this,g,w),e.load&&e.load.call(this,g,w)}else e.connect&&e.connect.call(this,g,w)},e.disconnect&&(p.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[H],this[O])}),Et("element()","<"+(s?s+" is="+i:i)+">"),window.customElements.define(i,p,s&&{extends:s}),s&&!Jt&&document.querySelectorAll('[is="'+i+'"]').forEach(d=>{o&&Kt(d,o),e.construct&&e.construct.apply(d);let g;for(g in u){let w=d.attributes[g];w&&u[g].call(d,w.value)}e.connect&&e.connect.apply(d)}),p}function ee(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let o=Object.keys(t),r=Object.keys(e),i=o.length;for(;i--;){if(t[o[i]]===void 0){if(e[o[i]]!==void 0)return!1}else if(!e.hasOwnProperty(o[i])||!ee(t[o[i]],e[o[i]]))return!1;let s=r.indexOf(o[i]);s>-1&&r.splice(s,1)}for(i=r.length;i--;)if(e[r[i]]===void 0){if(t[r[i]]!==void 0)return!1}else return!1;return!0}var ne=S(ee,!0);function Pn(t,e){return e[t]}var U=S(Pn,!0);var An=Object.freeze;function oe(){return this}var P=An({shift:v,push:v,forEach:v,join:function(){return""},map:oe,filter:oe,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:v,pipe:L,start:v,stop:v,done:v,valueOf:function(){return null}});function Tt(){return this}function R(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return e}var Wr=S(R,!0);function Lt(t){return t&&t[Symbol.iterator]}var Mn=Object.assign;function In(t){return t.stop?t.stop():t()}function W(){}Mn(W.prototype,{stop:function(){let t=this.stopables;return this.stopables=void 0,t&&t.forEach(In),this},done:function(t){return(this.stopables||(this.stopables=[])).push(t),this}});var A=Object.assign,I=Object.create;function V(t,e){t[0]=e,e.done(t)}function re(t,e){let o=t[e].stopables;o&&R(o,t),t[e]=void 0}function b(t,e){t&&t.push(e)}function T(t){W.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,o.stop()}function l(t){this.input=t}A(l.prototype,W.prototype,{push:function(t){b(this[0],t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,t.done(this),this.input.pipe(this),t},map:function(t){return new ie(this,t)},filter:function(t){return new se(this,t)},split:function(t){return new le(this,t)},flatMap:function(t){return new ce(this,t)},take:function(t){return new ae(this,t)},each:function(t){return this.pipe(new fe(t))},reduce:function(t,e){return this.pipe(new ue(t,e)).value},scan:function(t,e){return new pe(this,t,e)},stop:function(){return T(this),this}});function ie(t,e){this.input=t,this.fn=e}ie.prototype=A(I(l.prototype),{push:function(e){let r=this.fn(e);r!==void 0&&b(this[0],r)}});function se(t,e){this.input=t,this.fn=e}se.prototype=A(I(l.prototype),{push:function(e){this.fn(e)&&b(this[0],e)}});function ce(t,e){this.input=t,this.fn=e}ce.prototype=A(I(l.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(Lt(r))for(let i of r)b(this[0],i);else r.pipe&&this.done(r.each(i=>b(this[0],i)))}});function le(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}le.prototype=A(I(l.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(b(this[0],o),this.chunk=[]):o.push(e)}});function ae(t,e){this.input=t,this.count=e}ae.prototype=A(I(l.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function ue(t,e){this.fn=t,this.value=e,this.i=0}ue.prototype=A(I(l.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function pe(t,e,o){this.input=t,this.fn=e,this.value=o}pe.prototype=A(I(l.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function fe(t){this.push=t}fe.prototype=A(I(l.prototype),{each:null,reduce:null,pipe:null});var jn=Object.assign,Hn=Object.create;function Cn(t,e){if(t[1]){let o=-1;for(;t[++o]&&t[o]!==e;);for(;t[o++];)t[o-1]=t[o]}else t.stop()}function q(t,e){l.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(P)}q.prototype=jn(Hn(l.prototype),{push:function(t){if(t===void 0)return;this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)},pipe:function(t){let e=-1;for(;this[++e];);return this.memory&&e===0&&this.input.pipe(this),this[e]=t,t.done(()=>Cn(this,t)),this.value!==void 0&&t.push(this.value),!this.memory&&e===0&&this.input.pipe(this),t}});var Bn=Array.prototype,Dn=Object.assign,Gn=Object.create;function zn(t){return t!==void 0}function N(t){this.buffer=t?t.filter?t.filter(zn):t:[]}N.prototype=Dn(Gn(l.prototype),{push:function(t){t!==void 0&&b(this.buffer,t)},pipe:function(t){for(t.done(this),this[0]=t;this.buffer.length;)b(this[0],Bn.shift.apply(this.buffer));return this.buffer=t,t},stop:function(){return this.buffer=void 0,T(this),this}});var de=Object.assign,Un=Object.create,_n=Promise.resolve(),Rn={schedule:function(){_n.then(this.fire)},unschedule:v},Wn={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},Vn={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function C(t,e){l.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},de(this,e==="tick"?Rn:e==="frame"?Wn:Vn)}C.prototype=de(Un(l.prototype),{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=l.of(t),this[0].push(this.output),this.schedule())},stop:function(){return this.timer&&this.fire(),l.prototype.stop.apply(this,arguments)}});var kt=Object.assign,qn=Object.create,me=Object.keys;function Ft(t,e,o,r,i){this.stream=t,this.names=e,this.values=o,this.name=r,this.input=i}kt(Ft.prototype,{push:function(t){let e=this.stream,o=this.values,r=this.name;o[r]=t,(e.active||(e.active=me(o).length===this.names.length))&&b(e[0],kt({},o))},stop:function(){--this.stream.count===0&&T(this.stream)},done:function(t){this.stream.done(t)}});function nt(t){this.inputs=t,this.active=!1}nt.prototype=kt(qn(l.prototype),{push:null,pipe:function(t){let e=this.inputs,o=me(e),r={};this.count=o.length,this[0]=t,t.done(this);let i;for(i in e){let s=e[i];if(s.pipe){let c=new Ft(this,o,r,i,s);s.pipe(c)}else if(s.then){let c=new Ft(this,o,r,i,s);s.then(u=>c.push(u)),s.finally(()=>c.stop())}else r[i]=s,--this.count}return t}});var he=Object.assign,Nn=Object.create;function ge(t){this.stream=t}he(ge.prototype,{push:function(t){b(this.stream[0],t)},stop:function(){--this.stream.count===0&&T(this.stream)},done:function(t){this.stream.done(t)}});function ot(t){this.inputs=t}ot.prototype=he(Nn(l.prototype),{push:null,pipe:function(t){let e=this.inputs;this.count=e.length,this[0]=t,t.done(this);let o=new ge(this),r=-1,i;for(;i=e[++r];)if(i.pipe)i.pipe(o);else if(i.then)i.then(s=>o.push(s)),i.finally(()=>o.stop());else{let s=-1;for(;++s<i.length;)o.push(i[s]);o.stop()}return t}});var $n=Object.assign,Xn=Object.create;function rt(t){this.promise=t}rt.prototype=$n(Xn(l.prototype),{push:null,pipe:function(t){let e=this.promise;return this[0]=t,t.done(this),e.then(o=>b(this,o)),e.finally(()=>T(this)),t}});var Yn=Array.prototype,we=Object.assign;function Kn(t){throw new TypeError("Stream cannot be created from "+typeof object)}we(l,{of:function(){return new N(Yn.slice.apply(arguments))},from:function(t){return t.pipe?new l(t):t.then?new rt(t):typeof t.length=="number"?new N(t):Kn(t)},batch:t=>new C(P,t),burst:t=>(console.warn("Stream.burst() is now Stream.batch()"),new C(P,t)),broadcast:t=>new q(P,t),combine:t=>new nt(t),merge:function(){return new ot(arguments)}});we(l.prototype,{log:Tt,batch:function(t){return new C(this,t)},burst:function(t){return console.warn("stream.burst() is now stream.batch()"),new C(this,t)},broadcast:function(t){return new q(this,t)}});var Qn=Object.assign,Jn=/\s+/,ve={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function ye(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var be=0;window.addEventListener("click",t=>be=t.timeStamp);function Zn(t,e){return t.node.addEventListener(ve[e]||e,t,t.options),t}function to(t,e){return t.node.removeEventListener(ve[e]||e,t),t}function xe(t,e,o){this.types=t.split(Jn),this.options=e,this.node=o,this.select=e&&e.select}Qn(xe.prototype,{pipe:function(t){V(this,t),this.types.reduce(Zn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=be)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}b(this[0],t)}},stop:function(){this.types.reduce(to,this),T(this[0])}});function E(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new l(new xe(t,o,e))}function Ot(t){return typeof t}var eo=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function $(t){return function(o){if(typeof o=="number")return o;var r=eo.exec(o);if(!r||!t[r[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+o+'" (accepted units '+Object.keys(t).join(", ")+")");return r?t.catch(parseFloat(r[1]),r[2]):t.catch(parseFloat(o))}return t[r[2]||""](parseFloat(r[1]))}}var no=/px$/,Ee={"transform:translateX":function(t){var e=X("transform",t);if(!e||e==="none")return 0;var o=it(e);return parseFloat(o[4])},"transform:translateY":function(t){var e=X("transform",t);if(!e||e==="none")return 0;var o=it(e);return parseFloat(o[5])},"transform:scale":function(t){var e=X("transform",t);if(!e||e==="none")return 0;var o=it(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.sqrt(r*r+i*i)},"transform:rotate":function(t){var e=X("transform",t);if(!e||e==="none")return 0;var o=it(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.atan2(i,r)}};function it(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function X(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function st(t,e){if(Ee[t])return Ee[t](e);var o=X(t,e);return typeof o=="string"&&no.test(o)?parseFloat(o):o}var ct,lt;function oo(){if(!ct){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",ct=st("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return ct}function ro(){return lt||(lt=st("font-size",document.documentElement)),lt}window.addEventListener("resize",()=>{ct=void 0,lt=void 0});var B=x(Ot,{number:L,string:$({px:L,em:t=>oo()*t,rem:t=>ro()*t,vw:t=>window.innerWidth*t/100,vh:t=>window.innerHeight*t/100,vmin:t=>window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100,vmax:t=>window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100})}),Se=B;var io=Array.prototype,At=Object.assign,Pt="webkitUserSelect"in document.body.style?"webkitUserSelect":"userSelect",at={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function so(t,e,o){return e*e+o*o>=t*t}function Te(t,e,o){if(this.stream=t,this.events=e,this.options=o,this.pointerId=e[0].pointerId,typeof o.threshold=="function")this.checkThreshold=o.threshold;else{let r=Se(o.threshold);this.checkThreshold=(i,s)=>so(r,i,s)}document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this)}At(Te.prototype,{handleEvent:x(U("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}if(this.events.push(t),!this.isGesture){let e=this.events[0],o=t.clientX-e.clientX,r=t.clientY-e.clientY,i=(t.timeStamp-e.timeStamp)/1e3;this.checkThreshold(o,r,i)&&this.createGesture()}},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.userSelectState=document.body.style[Pt],document.body.style[Pt]="none",this.stream.push(new l(this))},pipe:function(t){for(V(this,t);this.events.length;)b(this[0],io.shift.apply(this.events));this.events=t},stop:function(){if(document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this),this.isGesture&&(document.body.style[Pt]=this.userSelectState),this[0]){let t=this[0];re(this,0),T(t)}}});function co(t){var e=t.target.tagName;return e&&(!!at.ignoreTags[e.toLowerCase()]||t.target.draggable)}function Le(t,e){this.node=t,this.options=e}At(Le.prototype,{pipe:function(t){return this[0]=t,this.node.addEventListener("pointerdown",this),t},handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!co(t)&&!(this.options.select&&!t.target.closest(this.options.select))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new Te(this[0],[e],this.options)}},stop:function(){return this[0]&&(this.node.removeEventListener("pointerdown",this),T(this[0])),this}});function Mt(t,e){return t=e&&t?At({},at,t):at,e=e||t,new l(new Le(e,t))}var lo=Object.assign,Y={bubbles:!0,cancelable:!0};function It(t,e){var p;let o=Y,r,i,s,c,u,m;return typeof t=="object"?(p=t,{type:t,detail:i,bubbles:s,cancelable:c,composed:u}=p,r=Rt(p,["type","detail","bubbles","cancelable","composed"]),m=lo(new CustomEvent(t,{detail:i,bubbles:s||Y.bubbles,cancelable:c||Y.cancelable,composed:u||Y.composed}),r)):m=new CustomEvent(t,Y),e.dispatchEvent(m)}var Ri=S(It,!0);var h=Symbol("data"),K={minScrollInterval:.0375,maxScrollInterval:.18},ke=K.maxScrollInterval;function Fe(t){let e=t.length,o=0;for(;--e;){let r=t[e]-t[e-1];o=r>o?r:o}o=o<K.minScrollInterval?K.minScrollInterval:o,ke=1.4*o>K.maxScrollInterval?K.maxScrollInterval:1.4*o}function ut(){return ke}function Oe(t){let e=k(t),o=window.getComputedStyle(t,null),r=B(o.getPropertyValue("padding-left")),i=B(o.getPropertyValue("padding-right"));return e.leftPadding=e.left+r,e.rightPadding=e.left+e.width-i,e.centrePadding=e.leftPadding+(e.width-r-i)/2,e}function Pe(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function Ae(t,e,o){let r=Oe(t),i=k(e),s=Pe(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(s==="left"?i.left-r.leftPadding:s==="right"?i.right-r.rightPadding:i.left+i.width/2-r.centrePadding),behavior:o})}function Me(t,e){return Ae(t,e,"smooth"),e}function D(t,e){return t.style.setProperty("scroll-behavior","auto","important"),Ae(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function Ie(t,e){let{leftPadding:o,rightPadding:r,centrePadding:i}=Oe(t),s=e.length,c;for(;c=e[--s];){let u=k(c);if(!u)continue;let m=Pe(c),p=u.width/2+(m==="left"?o:m==="right"?r:i);if((m==="left"?u.left:m==="right"?u.right:u.left+u.width/2)<=p)break}return c}function je(t){return!!t.dataset.slideIndex}function He(t){let{scroller:e,elements:o,children:r}=t,i=Ie(e,o);return je(i)?r[i.dataset.slideIndex]:i}function Ce(t){let{scroller:e,children:o,elements:r}=t,i=Ie(e,r),s;!i||(je(i)?(s=o[i.dataset.slideIndex],D(e,s)):s=i,t.activations.push(s))}function pt(t,e,o){let r=e[o];!r||(t.active=r)}function Be(t,e,o){let r=e.indexOf(o)+1;pt(t,e,r)}function De(t,e,o){let r=e.indexOf(o)-1;pt(t,e,r)}function ao(t,e){t.style.setProperty("scroll-snap-type",""),e.stop()}var Ge=x((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let o=e.clientX,r=e.clientY;if(!t.gesturing){if(Math.abs(o-t.x0)<Math.abs(r-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let i=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-i,t},default:function(t,e){let o=t.scroller;t.clickSuppressTime=e.timeStamp;let r=o.scrollLeft;o.style.setProperty("scroll-snap-type","");let i=o.scrollLeft;if(r===i)o.style.setProperty("scroll-behavior","");else{let s=He(t);t.activations.push(s),o.style.setProperty("scroll-snap-type","none","important"),o.scrollLeft=r,o.style.setProperty("scroll-behavior",""),o.scrollTo({top:o.scrollTop,left:i,behavior:"smooth"}),E({type:"scroll",passive:!0},o).reduce((c,u,m,p)=>(clearTimeout(c),setTimeout(ao,ut()*1e3,o,p)))}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var uo=Object.assign;function Q(){}uo(Q.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&l(this[0]),this}});var po=Object.assign,fo={capture:!0,passive:!0};function mo(t,e){t.timer=void 0,t.stream.push(e);let o=t.times;o.length>1&&Fe(o),o.length=0}function ze(t){this.element=t,this.times=[]}po(ze.prototype,Q.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,fo)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(mo,ut()*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),Q.prototype.stop.apply(this,arguments)}});function jt(t){return new l(new ze(t))}function ho(t,e,o){let r=o.length,i=-1/0;for(;r--;){let p=k(o[r]),d=p.x+p.width;i=d>i?d:i}let s=k(e),c=getComputedStyle(t),u=B(c.paddingLeft||0),m=B(c.paddingRight||0);return u+m+i-s.x}function go(t,e,o){let r=ho(t,e,o);t.style.setProperty("--scroll-width",r+"px")}function wo(t){return!t.dataset.slideIndex}var Ue={construct:function(t){let e=y("slot",{part:"slides"}),o=y("div",{class:"scroller",children:[e]}),r=y("nav",{part:"controls",children:[y("slot",{name:"controls"})]});t.append(o,r);let i=l.broadcast(),s=l.broadcast(),c=l.combine({host:s,elements:E("slotchange",e).map(a=>f.elements=e.assignedElements())}).broadcast({memory:!0}),u=c.map(a=>{let M=a.elements.filter(wo);return ne(f.children,M)?void 0:f.children=M}).broadcast({memory:!0,hot:!0}),m=l.of(),p=l.of(),d=p.map(a=>a.dataset.slideIndex?f.children[a.dataset.slideIndex]:a).filter(a=>f.active!==a&&It("slide-active",a)).map(a=>f.active=a).broadcast({memory:!0,hot:!0}),g=E("click",t).filter(ye).broadcast(),w=jt(o).filter(a=>f.connected&&!f.gesturing).broadcast(),f=this[h]={clickSuppressTime:-1/0,connected:!1,host:this,style:window.getComputedStyle(this),elements:P,children:P,device:void 0,shadow:t,scroller:o,slides:e,controls:r,connects:i,load:s,views:m,activations:p,actives:d,slotchanges:c,mutations:u,clicks:g,scrolls:w};l.merge(c,E("resize",window)).filter(a=>e.offsetWidth&&e.offsetHeight).each(a=>go(o,e,f.elements)),l.combine({slotchanges:c,connects:i}).map(a=>f.elements.includes(f.active)?f.active:f.children[0]).map(a=>f.connected?D(o,a):a).pipe(p),l.combine({host:s,child:m}).map(a=>f.elements.includes(a.child)&&f.active!==a.child?a.child:void 0).map(a=>f.connected?f.active?Me(o,a):D(o,a):a).pipe(p),w.each(a=>Ce(f)),Mt({threshold:"0.25rem",device:"mouse"},t).filter(()=>f.children.length>1).each(a=>{f.pointers=a,a.reduce(Ge,f)}),g.each(a=>{a.timeStamp-f.clickSuppressTime<120&&(a.preventDefault(),a.stopPropagation())}),E("fullscreenchange",window).filter(a=>f.active&&e.offsetWidth&&e.offsetHeight).each(a=>{(a.target===this||a.target.contains(this))&&D(o,f.active)}),l.merge(E("pointerdown",this),E("keydown",this)).each(a=>f.device=a.type==="keydown"?"keyboard":a.pointerType),E("focusin",this).filter(a=>f.device==="keyboard").map(a=>f.children.indexOf(a.target)!==-1?a.target:f.children.find(M=>M.contains(a.target))).pipe(m),E("keydown",this).filter(()=>document.activeElement===this||this.contains(document.activeElement)).map(x(U("keyCode"),{37:a=>(a.preventDefault(),f.elements[f.elements.indexOf(f.active)-1]),39:a=>(a.preventDefault(),f.elements[f.elements.indexOf(f.active)+1]),default:v})).pipe(m)},load:function(t){this[h].load.push(this)},connect:function(t){let e=this[h];e.connected=!0,e.connects.push(!0)},disconnect:function(t){let e=this[h];e.connected=!1}};function ft(t,e){function o(r,i){if(t.getState(r)!==i)return t[i?"enable":"disable"](r)}return{attribute:function(r){return o(this,r!==null)},set:function(r){return o(this,!!r)},get:function(){return t.getState(this)},enumerable:!0}}var vo=Object.assign;function J(t,e){this.element=t,this.definitions=e,this.tokens=[]}vo(J.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),R(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var yo=Array.prototype;function bo(t,e){let o=t.tokens.slice(),r=yo.slice.apply(e),i=o.length;for(;i--;)r.includes(o[i])&&o.splice(i,1);t.remove.apply(t,o),t.add.apply(t,r)}function Ht(t){let e=Symbol("TokenList");function o(r,i){let s=r[e]||(r[e]=new J(r,t));bo(s,i.trim().split(/\s+/))}return{attribute:function(r){o(this,r||"")},set:function(r){o(this,r+"")},get:function(){return this[e]||(this[e]=new J(this,t))},enumerable:!0}}var Ct={};_(Ct,{disable:()=>Lo,enable:()=>To,getState:()=>ko});var xo=$({s:L,ms:t=>t/1e3});function Eo(t){let{active:e,children:o,elements:r,host:i}=t,s=r.indexOf(e),c=r[s+1]||o[0];t.autoplay.timer=null,!!c&&(i.active=c)}function So(t){let{active:e,style:o}=t,r=xo(window.getComputedStyle(e).getPropertyValue("--slide-duration")||o.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(Eo,r*1e3,t)}function _e(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function To(t){let e=t[h],{actives:o}=e,r=e.autoplay={},i=l.merge([!1],E("pointerenter pointerleave",t).map(c=>c.type==="pointerenter")),s=l.merge([t.contains(document.activeElement)],E("focusin focusout",t).map(x(U("type"),{focusin:c=>!0,focusout:c=>t.contains(c.relatedTarget)}))).map((c=>u=>c===u?void 0:c=u)());r.updates=l.combine({active:o,hover:i,focus:s}).each(c=>c.hover||c.focus?_e(e):So(e))}function Lo(t){let e=t[h];_e(e),e.autoplay.updates.stop(),e.autoplay=void 0}function ko(t){return!!t[h].autoplay}var Bt={};_(Bt,{disable:()=>Po,enable:()=>Oo,getState:()=>Ao});function Re(t,e){let o=t.cloneNode(!0);return o.dataset.slideIndex=e,o.removeAttribute("id"),o.setAttribute("aria-hidden","true"),o.tabIndex="-1",o}function Fo(t){let{active:e,children:o,host:r,scroller:i}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(w=>w.remove()),t.loop.appends.forEach(w=>w.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),o.length<2){t.elements=t.slides.assignedElements();return}let s=r.clientWidth,c=o.map(k),u=c[1].left,m=c[c.length-2].right,p=1;for(;c[++p]&&c[p].left<u+s;);let d=o.slice(0,p).map(Re);for(p=c.length-2;c[--p]&&c[p].right>m-s;);let g=o.slice(++p).map((w,f)=>Re(w,p+f));r.prepend.apply(r,g),r.append.apply(r,d),t.loop.prepends=g,t.loop.appends=d,t.elements=t.slides.assignedElements(),D(i,e||o[0])}function Oo(t){let e=t[h],{mutations:o}=e,r=e.loop={};r.renders=o.each(i=>Fo(e))}function Po(t){let e=t[h];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(o=>o.remove()),e.loop.appends&&e.loop.appends.forEach(o=>o.remove()),e.loop.renders.stop(),e.loop=void 0)}function Ao(t){return!!t[h].loop}var Dt={};_(Dt,{disable:()=>jo,enable:()=>Io,getState:()=>Ho});function G(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(r){let i=r.target,s=-1;for(;e[++s];){let c=i.closest(e[s]);if(c)return t[e[s]](c,...arguments)}}}function Mo(t,e,o,r,i){i===0||t.scrollLeft===0?e.hidden=!0:e.hidden=!1,i===r.length-1||t.scrollLeft>=t.scrollWidth-t.clientWidth?o.hidden=!0:o.hidden=!1}function Io(t){let e=t[h],{actives:o,clicks:r,slotchanges:i,scroller:s,scrolls:c}=e,u=e.navigation={prev:y("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",children:[y("slot",{name:"prev-button",html:`
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M19,9 L9,20 L19,31"></path>
                    </svg>
                    Previous
                `})]}),next:y("button",{part:"next-button",type:"button",name:"navigation",value:"1",children:[y("slot",{name:"next-button",html:`
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M11,9 L21,20 L11,31"></path>
                    </svg>
                    Next
                `})]})};e.controls.prepend(u.prev,u.next),u.updates=l.combine({active:o,changes:i,scroll:c}).each(m=>Mo(s,u.prev,u.next,m.changes.elements,m.changes.elements.indexOf(m.active))),u.clicks=r.each(G({'[slot="prev-button"]':(m,p)=>{De(t,e.elements,e.active)},'[slot="next-button"]':(m,p)=>{Be(t,e.elements,e.active)},'[name="navigation"]':(m,p)=>{let d=e.elements.indexOf(e.active)+parseFloat(m.value);pt(t,e.elements,d)}}))}function jo(t){let e=t[h];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function Ho(t){return!!t[h].navigation}var Gt={};_(Gt,{disable:()=>Do,enable:()=>Bo,getState:()=>Go});function We(t,e,o){let{active:r,buttons:i,index:s}=t;if(r===o)return;s>-1&&(t.activeSpan.remove(),i.children[s].part.remove("page-button-active"));let c=e.indexOf(o);c!==-1&&(i.children[c].part.add("page-button-active"),i.children[c].append(t.activeSpan),t.index=c,t.active=o)}function Co(t,e,o,r){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),r.length<2||(e.buttons=y("div",{part:"pagination",children:r.map((i,s)=>y("button",{part:"page-button",type:"button",name:"pagination",value:s}))}),t.append(e.buttons)),r.length}function Bo(t){let e=t[h],{shadow:o,actives:r,clicks:i,mutations:s}=e,c=e.pagination={activeSpan:y("span",{class:"invisible",text:"(Current slide)"})};c.mutations=s.each(()=>Co(e.controls,c,o,e.children)),c.updates=l.combine({active:r,children:s}).filter(u=>u.children.length>1).each(u=>We(c,e.children,e.active)),c.clicks=i.each(G({'[name="pagination"]':function(u,m){let{host:p}=e,d=e.children,g=d[u.value];!g||(p.active=g,We(c,d,g))}}))}function Do(t){let e=t[h];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function Go(t){return!!t[h].pagination}var zt={};_(zt,{disable:()=>Uo,enable:()=>zo,getState:()=>_o});var Ve=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function dt(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function qe(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function mt(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function zo(t){let e=t[h];if(!Ve)return;let o=e.fullscreen={button:y("button",{part:"fullscreen-button",type:"button",name:"fullscreen",children:[y("slot",{name:"fullscreen-button",html:`
                    <svg viewBox="0 0 40 40" aria-hidden="true">
                        <path class="fullscreen-hidden" d="M9,9 L17,17 M9,15 L9,9 L15,9 M9,31 L17,23 M9,25 L9,31 L15,31 M31,31 L23,23 M25,31 L31,31 L31,25 M31,9 L23,17 M25,9 L31,9 L31,15"></path>
                        <path class="fullscreen-shown"  d="M9,9 L31,31 M9,31 L31,9"></path>
                    </svg>
                    <span class="fullscreen-hidden">Open in fullscreen</span>
                    <span class="fullscreen-shown">Close fullscreen</span>
                `})]})};e.controls.append(o.button),o.changes=E("fullscreenchange",t).filter(r=>dt()===t).each(r=>{document.activeElement!==t&&(o.tabIndex=t.tabIndex,t.tabIndex<0&&(t.tabIndex=0),t.focus());let i=E("fullscreenchange",t).each(s=>{t.tabIndex=o.tabIndex,o.tabIndex=void 0,i.stop()})}),o.clicks=e.clicks.each(G({'[slot="fullscreen-button"], [name="fullscreen"]':(r,i)=>{let s=dt();if(s===t){mt();return}s&&mt(),qe(t)}}))}function Uo(t){let e=t[h];dt()===t&&mt(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen.changes.stop(),e.fullscreen=void 0}function _o(t){return!!t[h].fullscreen}var Ne={active:{attribute:function(t){this.active=t},set:function(t){let e=this[h],o=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);e.views.push(o)},get:function(){return this[h].active}},autoplay:ft(Ct,"autoplay"),controls:Ht({navigation:Dt,pagination:Gt,fullscreen:zt}),loop:ft(Bt,"loop")};var Ro=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),ac=St('<ul is="slide-show-ul">',Ue,Ne,Ro);export{ac as default};
