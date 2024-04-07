function Sh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cf={exports:{}},Ho={},ff={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),xh=Symbol.for("react.portal"),kh=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Ch=Symbol.for("react.provider"),Oh=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),Ph=Symbol.for("react.memo"),Nh=Symbol.for("react.lazy"),Bu=Symbol.iterator;function jh(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pf=Object.assign,hf={};function wr(e,t,n){this.props=e,this.context=t,this.refs=hf,this.updater=n||df}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=wr.prototype;function da(e,t,n){this.props=e,this.context=t,this.refs=hf,this.updater=n||df}var pa=da.prototype=new mf;pa.constructor=da;pf(pa,wr.prototype);pa.isPureReactComponent=!0;var Uu=Array.isArray,yf=Object.prototype.hasOwnProperty,ha={current:null},gf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)yf.call(t,r)&&!gf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),p=0;p<s;p++)a[p]=arguments[p+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ci,type:e,key:o,ref:l,props:i,_owner:ha.current}}function Ih(e,t){return{$$typeof:Ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ci}function Lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vu=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lh(""+e.key):t.toString(36)}function io(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ci:case xh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+$l(l,0):r,Uu(i)?(n="",e!=null&&(n=e.replace(Vu,"$&/")+"/"),io(i,t,n,"",function(p){return p})):i!=null&&(ma(i)&&(i=Ih(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Vu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Uu(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+$l(o,s);l+=io(o,t,n,a,i)}else if(a=jh(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+$l(o,s++),l+=io(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Di(e,t,n){if(e==null)return e;var r=[],i=0;return io(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Rh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},oo={transition:null},zh={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:oo,ReactCurrentOwner:ha};te.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=wr;te.Fragment=kh;te.Profiler=Th;te.PureComponent=da;te.StrictMode=Eh;te.Suspense=_h;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ha.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)yf.call(t,a)&&!gf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var p=0;p<a;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:Ci,type:e.type,key:i,ref:o,props:r,_owner:l}};te.createContext=function(e){return e={$$typeof:Oh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ch,_context:e},e.Consumer=e};te.createElement=vf;te.createFactory=function(e){var t=vf.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:bh,render:e}};te.isValidElement=ma;te.lazy=function(e){return{$$typeof:Nh,_payload:{_status:-1,_result:e},_init:Rh}};te.memo=function(e,t){return{$$typeof:Ph,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return Ke.current.useCallback(e,t)};te.useContext=function(e){return Ke.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};te.useEffect=function(e,t){return Ke.current.useEffect(e,t)};te.useId=function(){return Ke.current.useId()};te.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Ke.current.useMemo(e,t)};te.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};te.useRef=function(e){return Ke.current.useRef(e)};te.useState=function(e){return Ke.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return Ke.current.useTransition()};te.version="18.2.0";ff.exports=te;var J=ff.exports;const Yr=uf(J),Hu=Sh({__proto__:null,default:Yr},[J]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=J,Dh=Symbol.for("react.element"),Fh=Symbol.for("react.fragment"),$h=Object.prototype.hasOwnProperty,Ah=Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wh={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$h.call(t,r)&&!Wh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dh,type:e,key:o,ref:l,props:i,_owner:Ah.current}}Ho.Fragment=Fh;Ho.jsx=wf;Ho.jsxs=wf;cf.exports=Ho;var $=cf.exports,ps={},Sf={exports:{}},ut={},xf={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(W,G){var X=W.length;W.push(G);e:for(;0<X;){var ye=X-1>>>1,Ee=W[ye];if(0<i(Ee,G))W[ye]=G,W[X]=Ee,X=ye;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var G=W[0],X=W.pop();if(X!==G){W[0]=X;e:for(var ye=0,Ee=W.length,Gt=Ee>>>1;ye<Gt;){var dt=2*(ye+1)-1,Or=W[dt],Dt=dt+1,Dn=W[Dt];if(0>i(Or,X))Dt<Ee&&0>i(Dn,Or)?(W[ye]=Dn,W[Dt]=X,ye=Dt):(W[ye]=Or,W[dt]=X,ye=dt);else if(Dt<Ee&&0>i(Dn,X))W[ye]=Dn,W[Dt]=X,ye=Dt;else break e}}return G}function i(W,G){var X=W.sortIndex-G.sortIndex;return X!==0?X:W.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],p=[],m=1,S=null,w=3,k=!1,E=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(W){for(var G=n(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=W)r(p),G.sortIndex=G.expirationTime,t(a,G);else break;G=n(p)}}function b(W){if(C=!1,v(W),!E)if(n(a)!==null)E=!0,Tr(z);else{var G=n(p);G!==null&&Cr(b,G.startTime-W)}}function z(W,G){E=!1,C&&(C=!1,y(Q),Q=-1),k=!0;var X=w;try{for(v(G),S=n(a);S!==null&&(!(S.expirationTime>G)||W&&!nt());){var ye=S.callback;if(typeof ye=="function"){S.callback=null,w=S.priorityLevel;var Ee=ye(S.expirationTime<=G);G=e.unstable_now(),typeof Ee=="function"?S.callback=Ee:S===n(a)&&r(a),v(G)}else r(a);S=n(a)}if(S!==null)var Gt=!0;else{var dt=n(p);dt!==null&&Cr(b,dt.startTime-G),Gt=!1}return Gt}finally{S=null,w=X,k=!1}}var D=!1,N=null,Q=-1,he=5,ee=-1;function nt(){return!(e.unstable_now()-ee<he)}function vn(){if(N!==null){var W=e.unstable_now();ee=W;var G=!0;try{G=N(!0,W)}finally{G?wn():(D=!1,N=null)}}else D=!1}var wn;if(typeof d=="function")wn=function(){d(vn)};else if(typeof MessageChannel<"u"){var ji=new MessageChannel,Ii=ji.port2;ji.port1.onmessage=vn,wn=function(){Ii.postMessage(null)}}else wn=function(){M(vn,0)};function Tr(W){N=W,D||(D=!0,wn())}function Cr(W,G){Q=M(function(){W(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){E||k||(E=!0,Tr(z))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(W){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var X=w;w=G;try{return W()}finally{w=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,G){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=w;w=W;try{return G()}finally{w=X}},e.unstable_scheduleCallback=function(W,G,X){var ye=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ye+X:ye):X=ye,W){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=X+Ee,W={id:m++,callback:G,priorityLevel:W,startTime:X,expirationTime:Ee,sortIndex:-1},X>ye?(W.sortIndex=X,t(p,W),n(a)===null&&W===n(p)&&(C?(y(Q),Q=-1):C=!0,Cr(b,X-ye))):(W.sortIndex=Ee,t(a,W),E||k||(E=!0,Tr(z))),W},e.unstable_shouldYield=nt,e.unstable_wrapCallback=function(W){var G=w;return function(){var X=w;w=G;try{return W.apply(this,arguments)}finally{w=X}}}})(kf);xf.exports=kf;var Bh=xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=J,at=Bh;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tf=new Set,ii={};function zn(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(ii[e]=t,e=0;e<t.length;e++)Tf.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,Uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Ku={};function Vh(e){return hs.call(Ku,e)?!0:hs.call(Qu,e)?!1:Uh.test(e)?Ku[e]=!0:(Qu[e]=!0,!1)}function Hh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qh(e,t,n,r){if(t===null||typeof t>"u"||Hh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ya=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ya,ga);Fe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ya,ga);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ya,ga);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function va(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qh(t,n,i,r)&&(n=null),r||i===null?Vh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),Sa=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),gs=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Al;function Vr(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Wl=!1;function Bl(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Kh(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case ms:return"Profiler";case wa:return"StrictMode";case ys:return"Suspense";case gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Of:return(e.displayName||"Context")+".Consumer";case Cf:return(e._context.displayName||"Context")+".Provider";case Sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function Yh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e){var t=_f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=Gh(e))}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ws(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nf(e,t){t=t.checked,t!=null&&va(e,"checked",t,!1)}function Ss(e,t){Nf(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&xs(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xs(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ks(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Hr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function jf(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function If(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?If(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ai,Lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ai=Ai||document.createElement("div"),Ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xh=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){Xh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function Rf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function zf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qh=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ts(e,t){if(t){if(qh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Os=null;function ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,or=null,lr=null;function Ju(e){if(e=_i(e)){if(typeof bs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Xo(t),bs(e.stateNode,e.type,t))}}function Mf(e){or?lr?lr.push(e):lr=[e]:or=e}function Df(){if(or){var e=or,t=lr;if(lr=or=null,Ju(e),t)for(e=0;e<t.length;e++)Ju(t[e])}}function Ff(e,t){return e(t)}function $f(){}var Ul=!1;function Af(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return Ff(e,t,n)}finally{Ul=!1,(or!==null||lr!==null)&&($f(),Df())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var _s=!1;if(Vt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{_s=!1}function Zh(e,t,n,r,i,o,l,s,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(m){this.onError(m)}}var Xr=!1,xo=null,ko=!1,Ps=null,Jh={onError:function(e){Xr=!0,xo=e}};function e0(e,t,n,r,i,o,l,s,a){Xr=!1,xo=null,Zh.apply(Jh,arguments)}function t0(e,t,n,r,i,o,l,s,a){if(e0.apply(this,arguments),Xr){if(Xr){var p=xo;Xr=!1,xo=null}else throw Error(P(198));ko||(ko=!0,Ps=p)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ec(e){if(Mn(e)!==e)throw Error(P(188))}function n0(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ec(i),e;if(o===r)return ec(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Bf(e){return e=n0(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Vf=at.unstable_scheduleCallback,tc=at.unstable_cancelCallback,r0=at.unstable_shouldYield,i0=at.unstable_requestPaint,Ce=at.unstable_now,o0=at.unstable_getCurrentPriorityLevel,Ea=at.unstable_ImmediatePriority,Hf=at.unstable_UserBlockingPriority,Eo=at.unstable_NormalPriority,l0=at.unstable_LowPriority,Qf=at.unstable_IdlePriority,Qo=null,Lt=null;function s0(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:c0,a0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(a0(e)/u0|0)|0}var Wi=64,Bi=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Qr(s):(o&=l,o!==0&&(r=Qr(o)))}else l=n&~i,l!==0?r=Qr(l):o!==0&&(r=Qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Tt(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=f0(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Ns(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kf(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ae=0;function Yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gf,Ca,Xf,qf,Zf,js=!1,Ui=[],on=null,ln=null,sn=null,si=new Map,ai=new Map,en=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=_i(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m0(e,t,n,r,i){switch(t){case"focusin":return on=Dr(on,e,t,n,r,i),!0;case"dragenter":return ln=Dr(ln,e,t,n,r,i),!0;case"mouseover":return sn=Dr(sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return si.set(o,Dr(si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ai.set(o,Dr(ai.get(o)||null,e,t,n,r,i)),!0}return!1}function Jf(e){var t=Cn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wf(n),t!==null){e.blockedOn=t,Zf(e.priority,function(){Xf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Os=r,n.target.dispatchEvent(r),Os=null}else return t=_i(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){lo(e)&&n.delete(t)}function y0(){js=!1,on!==null&&lo(on)&&(on=null),ln!==null&&lo(ln)&&(ln=null),sn!==null&&lo(sn)&&(sn=null),si.forEach(rc),ai.forEach(rc)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,y0)))}function ui(e){function t(i){return Fr(i,e)}if(0<Ui.length){Fr(Ui[0],e);for(var n=1;n<Ui.length;n++){var r=Ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Fr(on,e),ln!==null&&Fr(ln,e),sn!==null&&Fr(sn,e),si.forEach(t),ai.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Jf(n),n.blockedOn===null&&en.shift()}var sr=Yt.ReactCurrentBatchConfig,Co=!0;function g0(e,t,n,r){var i=ae,o=sr.transition;sr.transition=null;try{ae=1,Oa(e,t,n,r)}finally{ae=i,sr.transition=o}}function v0(e,t,n,r){var i=ae,o=sr.transition;sr.transition=null;try{ae=4,Oa(e,t,n,r)}finally{ae=i,sr.transition=o}}function Oa(e,t,n,r){if(Co){var i=Is(e,t,n,r);if(i===null)es(e,t,r,Oo,n),nc(e,r);else if(m0(i,e,t,n,r))r.stopPropagation();else if(nc(e,r),t&4&&-1<h0.indexOf(e)){for(;i!==null;){var o=_i(i);if(o!==null&&Gf(o),o=Is(e,t,n,r),o===null&&es(e,t,r,Oo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else es(e,t,r,null,n)}}var Oo=null;function Is(e,t,n,r){if(Oo=null,e=ka(r),e=Cn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case Ea:return 1;case Hf:return 4;case Eo:case l0:return 16;case Qf:return 536870912;default:return 16}default:return 16}}var nn=null,ba=null,so=null;function td(){if(so)return so;var e,t=ba,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return so=i.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function ic(){return!1}function ct(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vi:ic,this.isPropagationStopped=ic,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=ct(Sr),bi=Se({},Sr,{view:0,detail:0}),w0=ct(bi),Hl,Ql,$r,Ko=Se({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Hl=e.screenX-$r.screenX,Ql=e.screenY-$r.screenY):Ql=Hl=0,$r=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),oc=ct(Ko),S0=Se({},Ko,{dataTransfer:0}),x0=ct(S0),k0=Se({},bi,{relatedTarget:0}),Kl=ct(k0),E0=Se({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=ct(E0),C0=Se({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=ct(C0),b0=Se({},Sr,{data:0}),lc=ct(b0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function Pa(){return j0}var I0=Se({},bi,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=ct(I0),R0=Se({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=ct(R0),z0=Se({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),M0=ct(z0),D0=Se({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=ct(D0),$0=Se({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=ct($0),W0=[9,13,27,32],Na=Vt&&"CompositionEvent"in window,qr=null;Vt&&"documentMode"in document&&(qr=document.documentMode);var B0=Vt&&"TextEvent"in window&&!qr,nd=Vt&&(!Na||qr&&8<qr&&11>=qr),ac=" ",uc=!1;function rd(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function U0(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(uc=!0,ac);case"textInput":return e=t.data,e===ac&&uc?null:e;default:return null}}function V0(e,t){if(Yn)return e==="compositionend"||!Na&&rd(e,t)?(e=td(),so=ba=nn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nd&&t.locale!=="ko"?null:t.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H0[e.type]:t==="textarea"}function od(e,t,n,r){Mf(r),t=bo(t,"onChange"),0<t.length&&(n=new _a("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,ci=null;function Q0(e){yd(e,0)}function Yo(e){var t=qn(e);if(Pf(t))return e}function K0(e,t){if(e==="change")return t}var ld=!1;if(Vt){var Yl;if(Vt){var Gl="oninput"in document;if(!Gl){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),Gl=typeof fc.oninput=="function"}Yl=Gl}else Yl=!1;ld=Yl&&(!document.documentMode||9<document.documentMode)}function dc(){Zr&&(Zr.detachEvent("onpropertychange",sd),ci=Zr=null)}function sd(e){if(e.propertyName==="value"&&Yo(ci)){var t=[];od(t,ci,e,ka(e)),Af(Q0,t)}}function Y0(e,t,n){e==="focusin"?(dc(),Zr=t,ci=n,Zr.attachEvent("onpropertychange",sd)):e==="focusout"&&dc()}function G0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(ci)}function X0(e,t){if(e==="click")return Yo(t)}function q0(e,t){if(e==="input"||e==="change")return Yo(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:Z0;function fi(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hs.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var n=pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pc(n)}}function ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ud(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function J0(e){var t=ud(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ad(n.ownerDocument.documentElement,n)){if(r!==null&&ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hc(n,o);var l=hc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var em=Vt&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ls=null,Jr=null,Rs=!1;function mc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rs||Gn==null||Gn!==So(r)||(r=Gn,"selectionStart"in r&&ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&fi(Jr,r)||(Jr=r,r=bo(Ls,"onSelect"),0<r.length&&(t=new _a("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Xl={},cd={};Vt&&(cd=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Go(e){if(Xl[e])return Xl[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cd)return Xl[e]=t[n];return e}var fd=Go("animationend"),dd=Go("animationiteration"),pd=Go("animationstart"),hd=Go("transitionend"),md=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){md.set(e,t),zn(t,[e])}for(var ql=0;ql<yc.length;ql++){var Zl=yc[ql],tm=Zl.toLowerCase(),nm=Zl[0].toUpperCase()+Zl.slice(1);mn(tm,"on"+nm)}mn(fd,"onAnimationEnd");mn(dd,"onAnimationIteration");mn(pd,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(hd,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,p=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;gc(i,s,p),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,p=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;gc(i,s,p),o=a}}}if(ko)throw e=Ps,ko=!1,Ps=null,e}function de(e,t){var n=t[$s];n===void 0&&(n=t[$s]=new Set);var r=e+"__bubble";n.has(r)||(gd(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),gd(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[Qi]){e[Qi]=!0,Tf.forEach(function(n){n!=="selectionchange"&&(rm.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,Jl("selectionchange",!1,t))}}function gd(e,t,n,r){switch(ed(t)){case 1:var i=g0;break;case 4:i=v0;break;default:i=Oa}n=i.bind(null,t,n,e),i=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function es(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Cn(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Af(function(){var p=o,m=ka(n),S=[];e:{var w=md.get(e);if(w!==void 0){var k=_a,E=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":k=L0;break;case"focusin":E="focus",k=Kl;break;case"focusout":E="blur",k=Kl;break;case"beforeblur":case"afterblur":k=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=M0;break;case fd:case dd:case pd:k=T0;break;case hd:k=F0;break;case"scroll":k=w0;break;case"wheel":k=A0;break;case"copy":case"cut":case"paste":k=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sc}var C=(t&4)!==0,M=!C&&e==="scroll",y=C?w!==null?w+"Capture":null:w;C=[];for(var d=p,v;d!==null;){v=d;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,y!==null&&(b=li(d,y),b!=null&&C.push(pi(d,b,v)))),M)break;d=d.return}0<C.length&&(w=new k(w,E,null,n,m),S.push({event:w,listeners:C}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",w&&n!==Os&&(E=n.relatedTarget||n.fromElement)&&(Cn(E)||E[Ht]))break e;if((k||w)&&(w=m.window===m?m:(w=m.ownerDocument)?w.defaultView||w.parentWindow:window,k?(E=n.relatedTarget||n.toElement,k=p,E=E?Cn(E):null,E!==null&&(M=Mn(E),E!==M||E.tag!==5&&E.tag!==6)&&(E=null)):(k=null,E=p),k!==E)){if(C=oc,b="onMouseLeave",y="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=sc,b="onPointerLeave",y="onPointerEnter",d="pointer"),M=k==null?w:qn(k),v=E==null?w:qn(E),w=new C(b,d+"leave",k,n,m),w.target=M,w.relatedTarget=v,b=null,Cn(m)===p&&(C=new C(y,d+"enter",E,n,m),C.target=v,C.relatedTarget=M,b=C),M=b,k&&E)t:{for(C=k,y=E,d=0,v=C;v;v=Hn(v))d++;for(v=0,b=y;b;b=Hn(b))v++;for(;0<d-v;)C=Hn(C),d--;for(;0<v-d;)y=Hn(y),v--;for(;d--;){if(C===y||y!==null&&C===y.alternate)break t;C=Hn(C),y=Hn(y)}C=null}else C=null;k!==null&&vc(S,w,k,C,!1),E!==null&&M!==null&&vc(S,M,E,C,!0)}}e:{if(w=p?qn(p):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var z=K0;else if(cc(w))if(ld)z=q0;else{z=G0;var D=Y0}else(k=w.nodeName)&&k.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(z=X0);if(z&&(z=z(e,p))){od(S,z,n,m);break e}D&&D(e,w,p),e==="focusout"&&(D=w._wrapperState)&&D.controlled&&w.type==="number"&&xs(w,"number",w.value)}switch(D=p?qn(p):window,e){case"focusin":(cc(D)||D.contentEditable==="true")&&(Gn=D,Ls=p,Jr=null);break;case"focusout":Jr=Ls=Gn=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,mc(S,n,m);break;case"selectionchange":if(em)break;case"keydown":case"keyup":mc(S,n,m)}var N;if(Na)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Yn?rd(e,n)&&(Q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(nd&&n.locale!=="ko"&&(Yn||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Yn&&(N=td()):(nn=m,ba="value"in nn?nn.value:nn.textContent,Yn=!0)),D=bo(p,Q),0<D.length&&(Q=new lc(Q,e,null,n,m),S.push({event:Q,listeners:D}),N?Q.data=N:(N=id(n),N!==null&&(Q.data=N)))),(N=B0?U0(e,n):V0(e,n))&&(p=bo(p,"onBeforeInput"),0<p.length&&(m=new lc("onBeforeInput","beforeinput",null,n,m),S.push({event:m,listeners:p}),m.data=N))}yd(S,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=li(e,n),o!=null&&r.unshift(pi(e,o,i)),o=li(e,t),o!=null&&r.push(pi(e,o,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,p=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&p!==null&&(s=p,i?(a=li(n,o),a!=null&&l.unshift(pi(n,a,s))):i||(a=li(n,o),a!=null&&l.push(pi(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var im=/\r\n?/g,om=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(im,`
`).replace(om,"")}function Ki(e,t,n){if(t=wc(t),wc(e)!==t&&n)throw Error(P(425))}function _o(){}var zs=null,Ms=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc<"u"?function(e){return Sc.resolve(null).then(e).catch(am)}:Fs;function am(e){setTimeout(function(){throw e})}function ts(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),It="__reactFiber$"+xr,hi="__reactProps$"+xr,Ht="__reactContainer$"+xr,$s="__reactEvents$"+xr,um="__reactListeners$"+xr,cm="__reactHandles$"+xr;function Cn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xc(e);e!==null;){if(n=e[It])return n;e=xc(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[It]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Xo(e){return e[hi]||null}var As=[],Zn=-1;function yn(e){return{current:e}}function pe(e){0>Zn||(e.current=As[Zn],As[Zn]=null,Zn--)}function fe(e,t){Zn++,As[Zn]=e.current,e.current=t}var hn={},Ue=yn(hn),Ze=yn(!1),Nn=hn;function dr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function Po(){pe(Ze),pe(Ue)}function kc(e,t,n){if(Ue.current!==hn)throw Error(P(168));fe(Ue,t),fe(Ze,n)}function vd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Yh(e)||"Unknown",i));return Se({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Nn=Ue.current,fe(Ue,e),fe(Ze,Ze.current),!0}function Ec(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=vd(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,pe(Ze),pe(Ue),fe(Ue,e)):pe(Ze),fe(Ze,n)}var At=null,qo=!1,ns=!1;function wd(e){At===null?At=[e]:At.push(e)}function fm(e){qo=!0,wd(e)}function gn(){if(!ns&&At!==null){ns=!0;var e=0,t=ae;try{var n=At;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,qo=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),Vf(Ea,gn),i}finally{ae=t,ns=!1}}return null}var Jn=[],er=0,jo=null,Io=0,pt=[],ht=0,jn=null,Wt=1,Bt="";function En(e,t){Jn[er++]=Io,Jn[er++]=jo,jo=e,Io=t}function Sd(e,t,n){pt[ht++]=Wt,pt[ht++]=Bt,pt[ht++]=jn,jn=e;var r=Wt;e=Bt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var o=32-Tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Tt(t)+i|n<<i|r,Bt=o+e}else Wt=1<<o|n<<i|r,Bt=e}function Ia(e){e.return!==null&&(En(e,1),Sd(e,1,0))}function La(e){for(;e===jo;)jo=Jn[--er],Jn[er]=null,Io=Jn[--er],Jn[er]=null;for(;e===jn;)jn=pt[--ht],pt[ht]=null,Bt=pt[--ht],pt[ht]=null,Wt=pt[--ht],pt[ht]=null}var lt=null,ot=null,me=!1,Et=null;function xd(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,ot=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,ot=null,!0):!1;default:return!1}}function Ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(me){var t=ot;if(t){var n=t;if(!Tc(e,t)){if(Ws(e))throw Error(P(418));t=an(n.nextSibling);var r=lt;t&&Tc(e,t)?xd(r,n):(e.flags=e.flags&-4097|2,me=!1,lt=e)}}else{if(Ws(e))throw Error(P(418));e.flags=e.flags&-4097|2,me=!1,lt=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function Yi(e){if(e!==lt)return!1;if(!me)return Cc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=ot)){if(Ws(e))throw kd(),Error(P(418));for(;t;)xd(e,t),t=an(t.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=lt?an(e.stateNode.nextSibling):null;return!0}function kd(){for(var e=ot;e;)e=an(e.nextSibling)}function pr(){ot=lt=null,me=!1}function Ra(e){Et===null?Et=[e]:Et.push(e)}var dm=Yt.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Lo=yn(null),Ro=null,tr=null,za=null;function Ma(){za=tr=Ro=null}function Da(e){var t=Lo.current;pe(Lo),e._currentValue=t}function Us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Ro=e,za=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Ro===null)throw Error(P(308));tr=e,Ro.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var On=null;function Fa(e){On===null?On=[e]:On.push(e)}function Ed(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Fa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}function Oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,p=a.next;a.next=null,l===null?o=p:l.next=p,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=p:s.next=p,m.lastBaseUpdate=a))}if(o!==null){var S=i.baseState;l=0,m=p=a=null,s=o;do{var w=s.lane,k=s.eventTime;if((r&w)===w){m!==null&&(m=m.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,C=s;switch(w=t,k=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){S=E.call(k,S,w);break e}S=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,w=typeof E=="function"?E.call(k,S,w):E,w==null)break e;S=Se({},S,w);break e;case 2:Jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[s]:w.push(s))}else k={eventTime:k,lane:w,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(p=m=k,a=S):m=m.next=k,l|=w;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;w=s,s=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(m===null&&(a=S),i.baseState=a,i.firstBaseUpdate=p,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=S}}function bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Cd=new Ef.Component().refs;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=fn(e),o=Ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(Ct(t,e,i,r),uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=fn(e),o=Ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(Ct(t,e,i,r),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=fn(e),i=Ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(Ct(t,e,r,n),uo(t,e,r))}};function _c(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!fi(n,r)||!fi(i,o):!0}function Od(e,t,n){var r=!1,i=hn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=Je(t)?Nn:Ue.current,r=t.contextTypes,o=(r=r!=null)?dr(e,i):hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Cd,$a(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=Je(t)?Nn:Ue.current,i.context=dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zo.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Cd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nc(e){var t=e._init;return t(e._payload)}function bd(e){function t(y,d){if(e){var v=y.deletions;v===null?(y.deletions=[d],y.flags|=16):v.push(d)}}function n(y,d){if(!e)return null;for(;d!==null;)t(y,d),d=d.sibling;return null}function r(y,d){for(y=new Map;d!==null;)d.key!==null?y.set(d.key,d):y.set(d.index,d),d=d.sibling;return y}function i(y,d){return y=dn(y,d),y.index=0,y.sibling=null,y}function o(y,d,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<d?(y.flags|=2,d):v):(y.flags|=2,d)):(y.flags|=1048576,d)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,d,v,b){return d===null||d.tag!==6?(d=us(v,y.mode,b),d.return=y,d):(d=i(d,v),d.return=y,d)}function a(y,d,v,b){var z=v.type;return z===Kn?m(y,d,v.props.children,b,v.key):d!==null&&(d.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zt&&Nc(z)===d.type)?(b=i(d,v.props),b.ref=Ar(y,d,v),b.return=y,b):(b=yo(v.type,v.key,v.props,null,y.mode,b),b.ref=Ar(y,d,v),b.return=y,b)}function p(y,d,v,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=cs(v,y.mode,b),d.return=y,d):(d=i(d,v.children||[]),d.return=y,d)}function m(y,d,v,b,z){return d===null||d.tag!==7?(d=Pn(v,y.mode,b,z),d.return=y,d):(d=i(d,v),d.return=y,d)}function S(y,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=us(""+d,y.mode,v),d.return=y,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fi:return v=yo(d.type,d.key,d.props,null,y.mode,v),v.ref=Ar(y,null,d),v.return=y,v;case Qn:return d=cs(d,y.mode,v),d.return=y,d;case Zt:var b=d._init;return S(y,b(d._payload),v)}if(Hr(d)||zr(d))return d=Pn(d,y.mode,v,null),d.return=y,d;Gi(y,d)}return null}function w(y,d,v,b){var z=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return z!==null?null:s(y,d,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:return v.key===z?a(y,d,v,b):null;case Qn:return v.key===z?p(y,d,v,b):null;case Zt:return z=v._init,w(y,d,z(v._payload),b)}if(Hr(v)||zr(v))return z!==null?null:m(y,d,v,b,null);Gi(y,v)}return null}function k(y,d,v,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return y=y.get(v)||null,s(d,y,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fi:return y=y.get(b.key===null?v:b.key)||null,a(d,y,b,z);case Qn:return y=y.get(b.key===null?v:b.key)||null,p(d,y,b,z);case Zt:var D=b._init;return k(y,d,v,D(b._payload),z)}if(Hr(b)||zr(b))return y=y.get(v)||null,m(d,y,b,z,null);Gi(d,b)}return null}function E(y,d,v,b){for(var z=null,D=null,N=d,Q=d=0,he=null;N!==null&&Q<v.length;Q++){N.index>Q?(he=N,N=null):he=N.sibling;var ee=w(y,N,v[Q],b);if(ee===null){N===null&&(N=he);break}e&&N&&ee.alternate===null&&t(y,N),d=o(ee,d,Q),D===null?z=ee:D.sibling=ee,D=ee,N=he}if(Q===v.length)return n(y,N),me&&En(y,Q),z;if(N===null){for(;Q<v.length;Q++)N=S(y,v[Q],b),N!==null&&(d=o(N,d,Q),D===null?z=N:D.sibling=N,D=N);return me&&En(y,Q),z}for(N=r(y,N);Q<v.length;Q++)he=k(N,y,Q,v[Q],b),he!==null&&(e&&he.alternate!==null&&N.delete(he.key===null?Q:he.key),d=o(he,d,Q),D===null?z=he:D.sibling=he,D=he);return e&&N.forEach(function(nt){return t(y,nt)}),me&&En(y,Q),z}function C(y,d,v,b){var z=zr(v);if(typeof z!="function")throw Error(P(150));if(v=z.call(v),v==null)throw Error(P(151));for(var D=z=null,N=d,Q=d=0,he=null,ee=v.next();N!==null&&!ee.done;Q++,ee=v.next()){N.index>Q?(he=N,N=null):he=N.sibling;var nt=w(y,N,ee.value,b);if(nt===null){N===null&&(N=he);break}e&&N&&nt.alternate===null&&t(y,N),d=o(nt,d,Q),D===null?z=nt:D.sibling=nt,D=nt,N=he}if(ee.done)return n(y,N),me&&En(y,Q),z;if(N===null){for(;!ee.done;Q++,ee=v.next())ee=S(y,ee.value,b),ee!==null&&(d=o(ee,d,Q),D===null?z=ee:D.sibling=ee,D=ee);return me&&En(y,Q),z}for(N=r(y,N);!ee.done;Q++,ee=v.next())ee=k(N,y,Q,ee.value,b),ee!==null&&(e&&ee.alternate!==null&&N.delete(ee.key===null?Q:ee.key),d=o(ee,d,Q),D===null?z=ee:D.sibling=ee,D=ee);return e&&N.forEach(function(vn){return t(y,vn)}),me&&En(y,Q),z}function M(y,d,v,b){if(typeof v=="object"&&v!==null&&v.type===Kn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:e:{for(var z=v.key,D=d;D!==null;){if(D.key===z){if(z=v.type,z===Kn){if(D.tag===7){n(y,D.sibling),d=i(D,v.props.children),d.return=y,y=d;break e}}else if(D.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zt&&Nc(z)===D.type){n(y,D.sibling),d=i(D,v.props),d.ref=Ar(y,D,v),d.return=y,y=d;break e}n(y,D);break}else t(y,D);D=D.sibling}v.type===Kn?(d=Pn(v.props.children,y.mode,b,v.key),d.return=y,y=d):(b=yo(v.type,v.key,v.props,null,y.mode,b),b.ref=Ar(y,d,v),b.return=y,y=b)}return l(y);case Qn:e:{for(D=v.key;d!==null;){if(d.key===D)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(y,d.sibling),d=i(d,v.children||[]),d.return=y,y=d;break e}else{n(y,d);break}else t(y,d);d=d.sibling}d=cs(v,y.mode,b),d.return=y,y=d}return l(y);case Zt:return D=v._init,M(y,d,D(v._payload),b)}if(Hr(v))return E(y,d,v,b);if(zr(v))return C(y,d,v,b);Gi(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(y,d.sibling),d=i(d,v),d.return=y,y=d):(n(y,d),d=us(v,y.mode,b),d.return=y,y=d),l(y)):n(y,d)}return M}var hr=bd(!0),_d=bd(!1),Pi={},Rt=yn(Pi),mi=yn(Pi),yi=yn(Pi);function bn(e){if(e===Pi)throw Error(P(174));return e}function Aa(e,t){switch(fe(yi,t),fe(mi,e),fe(Rt,Pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Es(t,e)}pe(Rt),fe(Rt,t)}function mr(){pe(Rt),pe(mi),pe(yi)}function Pd(e){bn(yi.current);var t=bn(Rt.current),n=Es(t,e.type);t!==n&&(fe(mi,e),fe(Rt,n))}function Wa(e){mi.current===e&&(pe(Rt),pe(mi))}var ve=yn(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function Ba(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var co=Yt.ReactCurrentDispatcher,is=Yt.ReactCurrentBatchConfig,In=0,we=null,_e=null,je=null,Do=!1,ei=!1,gi=0,pm=0;function $e(){throw Error(P(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Va(e,t,n,r,i,o){if(In=o,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,co.current=e===null||e.memoizedState===null?gm:vm,e=n(r,i),ei){o=0;do{if(ei=!1,gi=0,25<=o)throw Error(P(301));o+=1,je=_e=null,t.updateQueue=null,co.current=wm,e=n(r,i)}while(ei)}if(co.current=Fo,t=_e!==null&&_e.next!==null,In=0,je=_e=we=null,Do=!1,t)throw Error(P(300));return e}function Ha(){var e=gi!==0;return gi=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=e:je=je.next=e,je}function vt(){if(_e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=je===null?we.memoizedState:je.next;if(t!==null)je=t,_e=e;else{if(e===null)throw Error(P(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},je===null?we.memoizedState=je=e:je=je.next=e}return je}function vi(e,t){return typeof t=="function"?t(e):t}function os(e){var t=vt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,p=o;do{var m=p.lane;if((In&m)===m)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var S={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(s=a=S,l=r):a=a.next=S,we.lanes|=m,Ln|=m}p=p.next}while(p!==null&&p!==o);a===null?l=r:a.next=s,Ot(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,we.lanes|=o,Ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ls(e){var t=vt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ot(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nd(){}function jd(e,t){var n=we,r=vt(),i=t(),o=!Ot(r.memoizedState,i);if(o&&(r.memoizedState=i,qe=!0),r=r.queue,Qa(Rd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,wi(9,Ld.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(P(349));In&30||Id(n,t,i)}return i}function Id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ld(e,t,n,r){t.value=n,t.getSnapshot=r,zd(t)&&Md(e)}function Rd(e,t,n){return n(function(){zd(t)&&Md(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function Md(e){var t=Qt(e,1);t!==null&&Ct(t,e,1,-1)}function jc(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=ym.bind(null,we,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dd(){return vt().memoizedState}function fo(e,t,n,r){var i=Pt();we.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(_e!==null){var l=_e.memoizedState;if(o=l.destroy,r!==null&&Ua(r,l.deps)){i.memoizedState=wi(t,n,o,r);return}}we.flags|=e,i.memoizedState=wi(1|t,n,o,r)}function Ic(e,t){return fo(8390656,8,e,t)}function Qa(e,t){return Jo(2048,8,e,t)}function Fd(e,t){return Jo(4,2,e,t)}function $d(e,t){return Jo(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,Ad.bind(null,t,e),n)}function Ka(){}function Bd(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ud(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vd(e,t,n){return In&21?(Ot(n,t)||(n=Kf(),we.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function hm(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=is.transition;is.transition={};try{e(!1),t()}finally{ae=n,is.transition=r}}function Hd(){return vt().memoizedState}function mm(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qd(e))Kd(t,n);else if(n=Ed(e,t,n,r),n!==null){var i=Qe();Ct(n,e,r,i),Yd(n,t,r)}}function ym(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qd(e))Kd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ot(s,l)){var a=t.interleaved;a===null?(i.next=i,Fa(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Ed(e,t,i,r),n!==null&&(i=Qe(),Ct(n,e,r,i),Yd(n,t,r))}}function Qd(e){var t=e.alternate;return e===we||t!==null&&t===we}function Kd(e,t){ei=Do=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}var Fo={readContext:gt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},gm={readContext:gt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mm.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:jc,useDebugValue:Ka,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=jc(!1),t=e[0];return e=hm.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Pt();if(me){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ie===null)throw Error(P(349));In&30||Id(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ic(Rd.bind(null,r,o,e),[e]),r.flags|=2048,wi(9,Ld.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Ie.identifierPrefix;if(me){var n=Bt,r=Wt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vm={readContext:gt,useCallback:Bd,useContext:gt,useEffect:Qa,useImperativeHandle:Wd,useInsertionEffect:Fd,useLayoutEffect:$d,useMemo:Ud,useReducer:os,useRef:Dd,useState:function(){return os(vi)},useDebugValue:Ka,useDeferredValue:function(e){var t=vt();return Vd(t,_e.memoizedState,e)},useTransition:function(){var e=os(vi)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:jd,useId:Hd,unstable_isNewReconciler:!1},wm={readContext:gt,useCallback:Bd,useContext:gt,useEffect:Qa,useImperativeHandle:Wd,useInsertionEffect:Fd,useLayoutEffect:$d,useMemo:Ud,useReducer:ls,useRef:Dd,useState:function(){return ls(vi)},useDebugValue:Ka,useDeferredValue:function(e){var t=vt();return _e===null?t.memoizedState=e:Vd(t,_e.memoizedState,e)},useTransition:function(){var e=ls(vi)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:jd,useId:Hd,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=Kh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,na=r),Qs(e,t)},n}function Xd(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rm.bind(null,e,t,n),t.then(e,e))}function Rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var xm=Yt.ReactCurrentOwner,qe=!1;function He(e,t,n,r){t.child=e===null?_d(t,null,n,r):hr(t,e.child,n,r)}function Mc(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=Va(e,t,n,r,o,i),n=Ha(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(me&&n&&Ia(t),t.flags|=1,He(e,t,r,i),t.child)}function Dc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qd(e,t,o,r,i)):(e=yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:fi,n(l,r)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(fi(o,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return Ks(e,t,n,r,i)}function Zd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(rr,it),it|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(rr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,fe(rr,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,fe(rr,it),it|=r;return He(e,t,i,n),t.child}function Jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var o=Je(n)?Nn:Ue.current;return o=dr(t,o),ar(t,i),n=Va(e,t,n,r,o,i),r=Ha(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(me&&r&&Ia(t),t.flags|=1,He(e,t,n,i),t.child)}function Fc(e,t,n,r,i){if(Je(n)){var o=!0;No(t)}else o=!1;if(ar(t,i),t.stateNode===null)po(e,t),Od(t,n,r),Hs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=gt(p):(p=Je(n)?Nn:Ue.current,p=dr(t,p));var m=n.getDerivedStateFromProps,S=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";S||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==p)&&Pc(t,l,r,p),Jt=!1;var w=t.memoizedState;l.state=w,zo(t,r,l,i),a=t.memoizedState,s!==r||w!==a||Ze.current||Jt?(typeof m=="function"&&(Vs(t,n,m,r),a=t.memoizedState),(s=Jt||_c(t,n,s,r,w,a,p))?(S||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=p,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Td(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:xt(t.type,s),l.props=p,S=t.pendingProps,w=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=gt(a):(a=Je(n)?Nn:Ue.current,a=dr(t,a));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==S||w!==a)&&Pc(t,l,r,a),Jt=!1,w=t.memoizedState,l.state=w,zo(t,r,l,i);var E=t.memoizedState;s!==S||w!==E||Ze.current||Jt?(typeof k=="function"&&(Vs(t,n,k,r),E=t.memoizedState),(p=Jt||_c(t,n,p,r,w,E,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=a,r=p):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Ys(e,t,n,r,o,i)}function Ys(e,t,n,r,i,o){Jd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ec(t,n,!1),Kt(e,t,o);r=t.stateNode,xm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hr(t,e.child,null,o),t.child=hr(t,null,s,o)):He(e,t,s,o),t.memoizedState=r.state,i&&Ec(t,n,!0),t.child}function ep(e){var t=e.stateNode;t.pendingContext?kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kc(e,t.context,!1),Aa(e,t.containerInfo)}function $c(e,t,n,r,i){return pr(),Ra(i),t.flags|=256,He(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(ve,i&1),e===null)return Bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=nl(l,r,0,null),e=Pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xs(n),t.memoizedState=Gs,e):Ya(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return km(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=dn(s,o):(o=Pn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Xs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xi(e,t,n,r){return r!==null&&Ra(r),hr(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ss(Error(P(422))),Xi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=nl({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hr(t,e.child,null,l),t.child.memoizedState=Xs(l),t.memoizedState=Gs,o);if(!(t.mode&1))return Xi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=ss(o,r,void 0),Xi(e,t,l,r)}if(s=(l&e.childLanes)!==0,qe||s){if(r=Ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),Ct(r,e,i,-1))}return eu(),r=ss(Error(P(421))),Xi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=an(i.nextSibling),lt=t,me=!0,Et=null,e!==null&&(pt[ht++]=Wt,pt[ht++]=Bt,pt[ht++]=jn,Wt=e.id,Bt=e.overflow,jn=t),t=Ya(t,r.children),t.flags|=4096,t)}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Us(e.return,t,n)}function as(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function np(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),as(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}as(t,!0,n,null,o);break;case"together":as(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Em(e,t,n){switch(t.tag){case 3:ep(t),pr();break;case 5:Pd(t);break;case 1:Je(t.type)&&No(t);break;case 4:Aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;fe(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?tp(e,t,n):(fe(ve,ve.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);fe(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return np(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,n)}return Kt(e,t,n)}var rp,qs,ip,op;rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qs=function(){};ip=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bn(Rt.current);var o=null;switch(n){case"input":i=ws(e,i),r=ws(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=ks(e,i),r=ks(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_o)}Ts(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var s=i[p];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ii.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var a=r[p];if(s=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&a!==s&&(a!=null||s!=null))if(p==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ii.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&de("scroll",e),o||s===a||(o=[])):(o=o||[]).push(p,a))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};op=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tm(e,t,n){var r=t.pendingProps;switch(La(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Je(t.type)&&Po(),Ae(t),null;case 3:return r=t.stateNode,mr(),pe(Ze),pe(Ue),Ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(oa(Et),Et=null))),qs(e,t),Ae(t),null;case 5:Wa(t);var i=bn(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)ip(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ae(t),null}if(e=bn(Rt.current),Yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[hi]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)de(Kr[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Gu(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":qu(r,o),de("invalid",r)}Ts(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,s,e),i=["children",""+s]):ii.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&de("scroll",r)}switch(n){case"input":$i(r),Xu(r,o,!0);break;case"textarea":$i(r),Zu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_o)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=If(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[hi]=r,rp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Cs(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)de(Kr[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":Gu(e,r),i=ws(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),de("invalid",e);break;case"textarea":qu(e,r),i=ks(e,r),de("invalid",e);break;default:i=r}Ts(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?zf(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&oi(e,a):typeof a=="number"&&oi(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?a!=null&&o==="onScroll"&&de("scroll",e):a!=null&&va(e,o,a,l))}switch(n){case"input":$i(e),Xu(e,r,!1);break;case"textarea":$i(e),Zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)op(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=bn(yi.current),bn(Rt.current),Yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(o=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ae(t),null;case 13:if(pe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ot!==null&&t.mode&1&&!(t.flags&128))kd(),pr(),t.flags|=98560,o=!1;else if(o=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[It]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else Et!==null&&(oa(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Pe===0&&(Pe=3):eu())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return mr(),qs(e,t),e===null&&di(t.stateNode.containerInfo),Ae(t),null;case 10:return Da(t.type._context),Ae(t),null;case 17:return Je(t.type)&&Po(),Ae(t),null;case 19:if(pe(ve),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Wr(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Mo(e),l!==null){for(t.flags|=128,Wr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>gr&&(t.flags|=128,r=!0,Wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!me)return Ae(t),null}else 2*Ce()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Wr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=ve.current,fe(ve,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Cm(e,t){switch(La(t),t.tag){case 1:return Je(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),pe(Ze),pe(Ue),Ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return mr(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var qi=!1,Be=!1,Om=typeof WeakSet=="function"?WeakSet:Set,B=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function Zs(e,t,n){try{n()}catch(r){ke(e,t,r)}}var Wc=!1;function bm(e,t){if(zs=Co,e=ud(),ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,p=0,m=0,S=e,w=null;t:for(;;){for(var k;S!==n||i!==0&&S.nodeType!==3||(s=l+i),S!==o||r!==0&&S.nodeType!==3||(a=l+r),S.nodeType===3&&(l+=S.nodeValue.length),(k=S.firstChild)!==null;)w=S,S=k;for(;;){if(S===e)break t;if(w===n&&++p===i&&(s=l),w===o&&++m===r&&(a=l),(k=S.nextSibling)!==null)break;S=w,w=S.parentNode}S=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},Co=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,M=E.memoizedState,y=t.stateNode,d=y.getSnapshotBeforeUpdate(t.elementType===t.type?C:xt(t.type,C),M);y.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(b){ke(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return E=Wc,Wc=!1,E}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zs(t,n,o)}i=i.next}while(i!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Js(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lp(e){var t=e.alternate;t!==null&&(e.alternate=null,lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[hi],delete t[$s],delete t[um],delete t[cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_o));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var ze=null,kt=!1;function qt(e,t,n){for(n=n.child;n!==null;)ap(e,t,n),n=n.sibling}function ap(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:Be||nr(n,t);case 6:var r=ze,i=kt;ze=null,qt(e,t,n),ze=r,kt=i,ze!==null&&(kt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(kt?(e=ze,n=n.stateNode,e.nodeType===8?ts(e.parentNode,n):e.nodeType===1&&ts(e,n),ui(e)):ts(ze,n.stateNode));break;case 4:r=ze,i=kt,ze=n.stateNode.containerInfo,kt=!0,qt(e,t,n),ze=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Zs(n,t,l),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!Be&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ke(n,t,s)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,qt(e,t,n),Be=r):qt(e,t,n);break;default:qt(e,t,n)}}function Uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Om),t.forEach(function(r){var i=Mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ze=s.stateNode,kt=!1;break e;case 3:ze=s.stateNode.containerInfo,kt=!0;break e;case 4:ze=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(ze===null)throw Error(P(160));ap(o,l,i),ze=null,kt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(p){ke(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),_t(e),r&4){try{ti(3,e,e.return),el(3,e)}catch(C){ke(e,e.return,C)}try{ti(5,e,e.return)}catch(C){ke(e,e.return,C)}}break;case 1:St(t,e),_t(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(St(t,e),_t(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(C){ke(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Nf(i,o),Cs(s,l);var p=Cs(s,o);for(l=0;l<a.length;l+=2){var m=a[l],S=a[l+1];m==="style"?zf(i,S):m==="dangerouslySetInnerHTML"?Lf(i,S):m==="children"?oi(i,S):va(i,m,S,p)}switch(s){case"input":Ss(i,o);break;case"textarea":jf(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?ir(i,!!o.multiple,k,!1):w!==!!o.multiple&&(o.defaultValue!=null?ir(i,!!o.multiple,o.defaultValue,!0):ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(C){ke(e,e.return,C)}}break;case 6:if(St(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){ke(e,e.return,C)}}break;case 3:if(St(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(C){ke(e,e.return,C)}break;case 4:St(t,e),_t(e);break;case 13:St(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qa=Ce())),r&4&&Uc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(p=Be)||m,St(t,e),Be=p):St(t,e),_t(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(B=e,m=e.child;m!==null;){for(S=B=m;B!==null;){switch(w=B,k=w.child,w.tag){case 0:case 11:case 14:case 15:ti(4,w,w.return);break;case 1:nr(w,w.return);var E=w.stateNode;if(typeof E.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(C){ke(r,n,C)}}break;case 5:nr(w,w.return);break;case 22:if(w.memoizedState!==null){Hc(S);continue}}k!==null?(k.return=w,B=k):Hc(S)}m=m.sibling}e:for(m=null,S=e;;){if(S.tag===5){if(m===null){m=S;try{i=S.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=S.stateNode,a=S.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Rf("display",l))}catch(C){ke(e,e.return,C)}}}else if(S.tag===6){if(m===null)try{S.stateNode.nodeValue=p?"":S.memoizedProps}catch(C){ke(e,e.return,C)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;m===S&&(m=null),S=S.return}m===S&&(m=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:St(t,e),_t(e),r&4&&Uc(e);break;case 21:break;default:St(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=Bc(e);ta(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Bc(e);ea(e,s,l);break;default:throw Error(P(161))}}catch(a){ke(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _m(e,t,n){B=e,cp(e)}function cp(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||qi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Be;s=qi;var p=Be;if(qi=l,(Be=a)&&!p)for(B=i;B!==null;)l=B,a=l.child,l.tag===22&&l.memoizedState!==null?Qc(i):a!==null?(a.return=l,B=a):Qc(i);for(;o!==null;)B=o,cp(o),o=o.sibling;B=i,qi=s,Be=p}Vc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):Vc(e)}}function Vc(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var S=m.dehydrated;S!==null&&ui(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Be||t.flags&512&&Js(t)}catch(w){ke(t,t.return,w)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Hc(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Qc(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{el(4,t)}catch(a){ke(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ke(t,i,a)}}var o=t.return;try{Js(t)}catch(a){ke(t,o,a)}break;case 5:var l=t.return;try{Js(t)}catch(a){ke(t,l,a)}}}catch(a){ke(t,t.return,a)}if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}var Pm=Math.ceil,$o=Yt.ReactCurrentDispatcher,Ga=Yt.ReactCurrentOwner,yt=Yt.ReactCurrentBatchConfig,re=0,Ie=null,be=null,De=0,it=0,rr=yn(0),Pe=0,Si=null,Ln=0,tl=0,Xa=0,ni=null,Xe=null,qa=0,gr=1/0,$t=null,Ao=!1,na=null,cn=null,Zi=!1,rn=null,Wo=0,ri=0,ra=null,ho=-1,mo=0;function Qe(){return re&6?Ce():ho!==-1?ho:ho=Ce()}function fn(e){return e.mode&1?re&2&&De!==0?De&-De:dm.transition!==null?(mo===0&&(mo=Kf()),mo):(e=ae,e!==0||(e=window.event,e=e===void 0?16:ed(e.type)),e):1}function Ct(e,t,n,r){if(50<ri)throw ri=0,ra=null,Error(P(185));Oi(e,n,r),(!(re&2)||e!==Ie)&&(e===Ie&&(!(re&2)&&(tl|=n),Pe===4&&tn(e,De)),et(e,r),n===1&&re===0&&!(t.mode&1)&&(gr=Ce()+500,qo&&gn()))}function et(e,t){var n=e.callbackNode;d0(e,t);var r=To(e,e===Ie?De:0);if(r===0)n!==null&&tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tc(n),t===1)e.tag===0?fm(Kc.bind(null,e)):wd(Kc.bind(null,e)),sm(function(){!(re&6)&&gn()}),n=null;else{switch(Yf(r)){case 1:n=Ea;break;case 4:n=Hf;break;case 16:n=Eo;break;case 536870912:n=Qf;break;default:n=Eo}n=vp(n,fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fp(e,t){if(ho=-1,mo=0,re&6)throw Error(P(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=To(e,e===Ie?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bo(e,r);else{t=r;var i=re;re|=2;var o=pp();(Ie!==e||De!==t)&&($t=null,gr=Ce()+500,_n(e,t));do try{Im();break}catch(s){dp(e,s)}while(!0);Ma(),$o.current=o,re=i,be!==null?t=0:(Ie=null,De=0,t=Pe)}if(t!==0){if(t===2&&(i=Ns(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=Si,_n(e,0),tn(e,r),et(e,Ce()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nm(i)&&(t=Bo(e,r),t===2&&(o=Ns(e),o!==0&&(r=o,t=ia(e,o))),t===1))throw n=Si,_n(e,0),tn(e,r),et(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Tn(e,Xe,$t);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=qa+500-Ce(),10<t)){if(To(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fs(Tn.bind(null,e,Xe,$t),t);break}Tn(e,Xe,$t);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pm(r/1960))-r,10<r){e.timeoutHandle=Fs(Tn.bind(null,e,Xe,$t),r);break}Tn(e,Xe,$t);break;case 5:Tn(e,Xe,$t);break;default:throw Error(P(329))}}}return et(e,Ce()),e.callbackNode===n?fp.bind(null,e):null}function ia(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&oa(t)),e}function oa(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Nm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Xa,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function Kc(e){if(re&6)throw Error(P(327));ur();var t=To(e,0);if(!(t&1))return et(e,Ce()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=Ns(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=Si,_n(e,0),tn(e,t),et(e,Ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Xe,$t),et(e,Ce()),null}function Za(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(gr=Ce()+500,qo&&gn())}}function Rn(e){rn!==null&&rn.tag===0&&!(re&6)&&ur();var t=re;re|=1;var n=yt.transition,r=ae;try{if(yt.transition=null,ae=1,e)return e()}finally{ae=r,yt.transition=n,re=t,!(re&6)&&gn()}}function Ja(){it=rr.current,pe(rr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lm(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(La(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:mr(),pe(Ze),pe(Ue),Ba();break;case 5:Wa(r);break;case 4:mr();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Da(r.type._context);break;case 22:case 23:Ja()}n=n.return}if(Ie=e,be=e=dn(e.current,null),De=it=t,Pe=0,Si=null,Xa=tl=Ln=0,Xe=ni=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}On=null}return e}function dp(e,t){do{var n=be;try{if(Ma(),co.current=Fo,Do){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Do=!1}if(In=0,je=_e=we=null,ei=!1,gi=0,Ga.current=null,n===null||n.return===null){Pe=1,Si=t,be=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=De,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,m=s,S=m.tag;if(!(m.mode&1)&&(S===0||S===11||S===15)){var w=m.alternate;w?(m.updateQueue=w.updateQueue,m.memoizedState=w.memoizedState,m.lanes=w.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Rc(l);if(k!==null){k.flags&=-257,zc(k,l,s,o,t),k.mode&1&&Lc(o,p,t),t=k,a=p;var E=t.updateQueue;if(E===null){var C=new Set;C.add(a),t.updateQueue=C}else E.add(a);break e}else{if(!(t&1)){Lc(o,p,t),eu();break e}a=Error(P(426))}}else if(me&&s.mode&1){var M=Rc(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),zc(M,l,s,o,t),Ra(yr(a,s));break e}}o=a=yr(a,s),Pe!==4&&(Pe=2),ni===null?ni=[o]:ni.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Gd(o,a,t);Oc(o,y);break e;case 1:s=a;var d=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cn===null||!cn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Xd(o,s,t);Oc(o,b);break e}}o=o.return}while(o!==null)}mp(n)}catch(z){t=z,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function pp(){var e=$o.current;return $o.current=Fo,e===null?Fo:e}function eu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ie===null||!(Ln&268435455)&&!(tl&268435455)||tn(Ie,De)}function Bo(e,t){var n=re;re|=2;var r=pp();(Ie!==e||De!==t)&&($t=null,_n(e,t));do try{jm();break}catch(i){dp(e,i)}while(!0);if(Ma(),re=n,$o.current=r,be!==null)throw Error(P(261));return Ie=null,De=0,Pe}function jm(){for(;be!==null;)hp(be)}function Im(){for(;be!==null&&!r0();)hp(be)}function hp(e){var t=gp(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?mp(e):be=t,Ga.current=null}function mp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cm(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,be=null;return}}else if(n=Tm(n,t,it),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Pe===0&&(Pe=5)}function Tn(e,t,n){var r=ae,i=yt.transition;try{yt.transition=null,ae=1,Lm(e,t,n,r)}finally{yt.transition=i,ae=r}return null}function Lm(e,t,n,r){do ur();while(rn!==null);if(re&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(p0(e,o),e===Ie&&(be=Ie=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,vp(Eo,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var l=ae;ae=1;var s=re;re|=4,Ga.current=null,bm(e,n),up(n,e),J0(Ms),Co=!!zs,Ms=zs=null,e.current=n,_m(n),i0(),re=s,ae=l,yt.transition=o}else e.current=n;if(Zi&&(Zi=!1,rn=e,Wo=i),o=e.pendingLanes,o===0&&(cn=null),s0(n.stateNode),et(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ao)throw Ao=!1,e=na,na=null,e;return Wo&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===ra?ri++:(ri=0,ra=e):ri=0,gn(),null}function ur(){if(rn!==null){var e=Yf(Wo),t=yt.transition,n=ae;try{if(yt.transition=null,ae=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Wo=0,re&6)throw Error(P(331));var i=re;for(re|=4,B=e.current;B!==null;){var o=B,l=o.child;if(B.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var p=s[a];for(B=p;B!==null;){var m=B;switch(m.tag){case 0:case 11:case 15:ti(8,m,o)}var S=m.child;if(S!==null)S.return=m,B=S;else for(;B!==null;){m=B;var w=m.sibling,k=m.return;if(lp(m),m===p){B=null;break}if(w!==null){w.return=k,B=w;break}B=k}}}var E=o.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var M=C.sibling;C.sibling=null,C=M}while(C!==null)}}B=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,B=l;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ti(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,B=y;break e}B=o.return}}var d=e.current;for(B=d;B!==null;){l=B;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,B=v;else e:for(l=d;B!==null;){if(s=B,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:el(9,s)}}catch(z){ke(s,s.return,z)}if(s===l){B=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,B=b;break e}B=s.return}}if(re=i,gn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{ae=n,yt.transition=t}}return!1}function Yc(e,t,n){t=yr(n,t),t=Gd(e,t,1),e=un(e,t,1),t=Qe(),e!==null&&(Oi(e,1,t),et(e,t))}function ke(e,t,n){if(e.tag===3)Yc(e,e,n);else for(;t!==null;){if(t.tag===3){Yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=yr(n,e),e=Xd(t,e,1),t=un(t,e,1),e=Qe(),t!==null&&(Oi(t,1,e),et(t,e));break}}t=t.return}}function Rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(De&n)===n&&(Pe===4||Pe===3&&(De&130023424)===De&&500>Ce()-qa?_n(e,0):Xa|=n),et(e,t)}function yp(e,t){t===0&&(e.mode&1?(t=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):t=1);var n=Qe();e=Qt(e,t),e!==null&&(Oi(e,t,n),et(e,n))}function zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yp(e,n)}function Mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),yp(e,n)}var gp;gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,Em(e,t,n);qe=!!(e.flags&131072)}else qe=!1,me&&t.flags&1048576&&Sd(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var i=dr(t,Ue.current);ar(t,n),i=Va(null,t,r,e,i,n);var o=Ha();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(o=!0,No(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$a(t),i.updater=Zo,t.stateNode=i,i._reactInternals=t,Hs(t,r,e,n),t=Ys(null,t,r,!0,o,n)):(t.tag=0,me&&o&&Ia(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fm(r),e=xt(r,e),i){case 0:t=Ks(null,t,r,e,n);break e;case 1:t=Fc(null,t,r,e,n);break e;case 11:t=Mc(null,t,r,e,n);break e;case 14:t=Dc(null,t,r,xt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ks(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Fc(e,t,r,i,n);case 3:e:{if(ep(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Td(e,t),zo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=yr(Error(P(423)),t),t=$c(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(P(424)),t),t=$c(e,t,r,n,i);break e}else for(ot=an(t.stateNode.containerInfo.firstChild),lt=t,me=!0,Et=null,n=_d(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===i){t=Kt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Pd(t),e===null&&Bs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ds(r,i)?l=null:o!==null&&Ds(r,o)&&(t.flags|=32),Jd(e,t),He(e,t,l,n),t.child;case 6:return e===null&&Bs(t),null;case 13:return tp(e,t,n);case 4:return Aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Mc(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,fe(Lo,r._currentValue),r._currentValue=l,o!==null)if(Ot(o.value,l)){if(o.children===i.children&&!Ze.current){t=Kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ut(-1,n&-n),a.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?a.next=a:(a.next=m.next,m.next=a),p.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Us(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Us(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=gt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),Dc(e,t,r,i,n);case 15:return qd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),po(e,t),t.tag=1,Je(r)?(e=!0,No(t)):e=!1,ar(t,n),Od(t,r,i),Hs(t,r,i,n),Ys(null,t,r,!0,e,n);case 19:return np(e,t,n);case 22:return Zd(e,t,n)}throw Error(P(156,t.tag))};function vp(e,t){return Vf(e,t)}function Dm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Dm(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sa)return 11;if(e===xa)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return Pn(n.children,i,o,t);case wa:l=8,i|=8;break;case ms:return e=mt(12,n,t,i|2),e.elementType=ms,e.lanes=o,e;case ys:return e=mt(13,n,t,i),e.elementType=ys,e.lanes=o,e;case gs:return e=mt(19,n,t,i),e.elementType=gs,e.lanes=o,e;case bf:return nl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cf:l=10;break e;case Of:l=9;break e;case Sa:l=11;break e;case xa:l=14;break e;case Zt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=mt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function nl(e,t,n,r){return e=mt(22,e,r,t),e.elementType=bf,e.lanes=n,e.stateNode={isHidden:!1},e}function us(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function cs(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $m(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,o,l,s,a){return e=new $m(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(o),e}function Am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wp(e){if(!e)return hn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Je(n))return vd(e,n,t)}return t}function Sp(e,t,n,r,i,o,l,s,a){return e=nu(n,r,!0,e,i,o,l,s,a),e.context=wp(null),n=e.current,r=Qe(),i=fn(n),o=Ut(r,i),o.callback=t??null,un(n,o,i),e.current.lanes=i,Oi(e,i,r),et(e,r),e}function rl(e,t,n,r){var i=t.current,o=Qe(),l=fn(i);return n=wp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,l),e!==null&&(Ct(e,i,l,o),uo(e,i,l)),l}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}function Wm(){return null}var xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}il.prototype.render=iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));rl(e,t,null,null)};il.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){rl(null,e,null,null)}),t[Ht]=null}};function il(e){this._internalRoot=e}il.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Jf(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function Bm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=Uo(l);o.call(p)}}var l=Sp(t,r,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=l,e[Ht]=l.current,di(e.nodeType===8?e.parentNode:e),Rn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var p=Uo(a);s.call(p)}}var a=nu(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=a,e[Ht]=a.current,di(e.nodeType===8?e.parentNode:e),Rn(function(){rl(t,a,n,r)}),a}function ll(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Uo(l);s.call(a)}}rl(t,l,e,i)}else l=Bm(n,t,e,i,r);return Uo(l)}Gf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Ta(t,n|1),et(t,Ce()),!(re&6)&&(gr=Ce()+500,gn()))}break;case 13:Rn(function(){var r=Qt(e,1);if(r!==null){var i=Qe();Ct(r,e,1,i)}}),ru(e,1)}};Ca=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Qe();Ct(t,e,134217728,n)}ru(e,134217728)}};Xf=function(e){if(e.tag===13){var t=fn(e),n=Qt(e,t);if(n!==null){var r=Qe();Ct(n,e,t,r)}ru(e,t)}};qf=function(){return ae};Zf=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};bs=function(e,t,n){switch(t){case"input":if(Ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xo(r);if(!i)throw Error(P(90));Pf(r),Ss(r,i)}}}break;case"textarea":jf(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};Ff=Za;$f=Rn;var Um={usingClientEntryPoint:!1,Events:[_i,qn,Xo,Mf,Df,Za]},Br={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Vm={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bf(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Qo=Ji.inject(Vm),Lt=Ji}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(P(200));return Am(e,t,null,n)};ut.createRoot=function(e,t){if(!ou(e))throw Error(P(299));var n=!1,r="",i=xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,di(e.nodeType===8?e.parentNode:e),new iu(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Bf(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return Rn(e)};ut.hydrate=function(e,t,n){if(!ol(t))throw Error(P(200));return ll(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sp(t,null,e,1,n??null,i,!1,o,l),e[Ht]=t.current,di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new il(t)};ut.render=function(e,t,n){if(!ol(t))throw Error(P(200));return ll(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!ol(e))throw Error(P(40));return e._reactRootContainer?(Rn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};ut.unstable_batchedUpdates=Za;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ll(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";function kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp)}catch(e){console.error(e)}}kp(),Sf.exports=ut;var Hm=Sf.exports,qc=Hm;ps.createRoot=qc.createRoot,ps.hydrateRoot=qc.hydrateRoot;function Qm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Km(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ym=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Km(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Qm(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),We="-ms-",Vo="-moz-",ie="-webkit-",Ep="comm",lu="rule",su="decl",Gm="@import",Tp="@keyframes",Xm="@layer",qm=Math.abs,sl=String.fromCharCode,Zm=Object.assign;function Jm(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function Cp(e){return e.trim()}function ey(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function la(e,t){return e.indexOf(t)}function Me(e,t){return e.charCodeAt(t)|0}function xi(e,t,n){return e.slice(t,n)}function Nt(e){return e.length}function au(e){return e.length}function eo(e,t){return t.push(e),e}function ty(e,t){return e.map(t).join("")}var al=1,vr=1,Op=0,tt=0,Oe=0,kr="";function ul(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:al,column:vr,length:l,return:""}}function Ur(e,t){return Zm(ul("",null,null,"",null,null,0),e,{length:-e.length},t)}function ny(){return Oe}function ry(){return Oe=tt>0?Me(kr,--tt):0,vr--,Oe===10&&(vr=1,al--),Oe}function st(){return Oe=tt<Op?Me(kr,tt++):0,vr++,Oe===10&&(vr=1,al++),Oe}function zt(){return Me(kr,tt)}function go(){return tt}function Ni(e,t){return xi(kr,e,t)}function ki(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bp(e){return al=vr=1,Op=Nt(kr=e),tt=0,[]}function _p(e){return kr="",e}function vo(e){return Cp(Ni(tt-1,sa(e===91?e+2:e===40?e+1:e)))}function iy(e){for(;(Oe=zt())&&Oe<33;)st();return ki(e)>2||ki(Oe)>3?"":" "}function oy(e,t){for(;--t&&st()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Ni(e,go()+(t<6&&zt()==32&&st()==32))}function sa(e){for(;st();)switch(Oe){case e:return tt;case 34:case 39:e!==34&&e!==39&&sa(Oe);break;case 40:e===41&&sa(e);break;case 92:st();break}return tt}function ly(e,t){for(;st()&&e+Oe!==57;)if(e+Oe===84&&zt()===47)break;return"/*"+Ni(t,tt-1)+"*"+sl(e===47?e:st())}function sy(e){for(;!ki(zt());)st();return Ni(e,tt)}function ay(e){return _p(wo("",null,null,null,[""],e=bp(e),0,[0],e))}function wo(e,t,n,r,i,o,l,s,a){for(var p=0,m=0,S=l,w=0,k=0,E=0,C=1,M=1,y=1,d=0,v="",b=i,z=o,D=r,N=v;M;)switch(E=d,d=st()){case 40:if(E!=108&&Me(N,S-1)==58){la(N+=oe(vo(d),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:N+=vo(d);break;case 9:case 10:case 13:case 32:N+=iy(E);break;case 92:N+=oy(go()-1,7);continue;case 47:switch(zt()){case 42:case 47:eo(uy(ly(st(),go()),t,n),a);break;default:N+="/"}break;case 123*C:s[p++]=Nt(N)*y;case 125*C:case 59:case 0:switch(d){case 0:case 125:M=0;case 59+m:y==-1&&(N=oe(N,/\f/g,"")),k>0&&Nt(N)-S&&eo(k>32?Jc(N+";",r,n,S-1):Jc(oe(N," ","")+";",r,n,S-2),a);break;case 59:N+=";";default:if(eo(D=Zc(N,t,n,p,m,i,s,v,b=[],z=[],S),o),d===123)if(m===0)wo(N,t,D,D,b,o,S,s,z);else switch(w===99&&Me(N,3)===110?100:w){case 100:case 108:case 109:case 115:wo(e,D,D,r&&eo(Zc(e,D,D,0,0,i,s,v,i,b=[],S),z),i,z,S,s,r?b:z);break;default:wo(N,D,D,D,[""],z,0,s,z)}}p=m=k=0,C=y=1,v=N="",S=l;break;case 58:S=1+Nt(N),k=E;default:if(C<1){if(d==123)--C;else if(d==125&&C++==0&&ry()==125)continue}switch(N+=sl(d),d*C){case 38:y=m>0?1:(N+="\f",-1);break;case 44:s[p++]=(Nt(N)-1)*y,y=1;break;case 64:zt()===45&&(N+=vo(st())),w=zt(),m=S=Nt(v=N+=sy(go())),d++;break;case 45:E===45&&Nt(N)==2&&(C=0)}}return o}function Zc(e,t,n,r,i,o,l,s,a,p,m){for(var S=i-1,w=i===0?o:[""],k=au(w),E=0,C=0,M=0;E<r;++E)for(var y=0,d=xi(e,S+1,S=qm(C=l[E])),v=e;y<k;++y)(v=Cp(C>0?w[y]+" "+d:oe(d,/&\f/g,w[y])))&&(a[M++]=v);return ul(e,t,n,i===0?lu:s,a,p,m)}function uy(e,t,n){return ul(e,t,n,Ep,sl(ny()),xi(e,2,-2),0)}function Jc(e,t,n,r){return ul(e,t,n,su,xi(e,0,r),xi(e,r+1,-1),r)}function cr(e,t){for(var n="",r=au(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function cy(e,t,n,r){switch(e.type){case Xm:if(e.children.length)break;case Gm:case su:return e.return=e.return||e.value;case Ep:return"";case Tp:return e.return=e.value+"{"+cr(e.children,r)+"}";case lu:e.value=e.props.join(",")}return Nt(n=cr(e.children,r))?e.return=e.value+"{"+n+"}":""}function fy(e){var t=au(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function dy(e){return function(t){t.root||(t=t.return)&&e(t)}}function py(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var hy=function(t,n,r){for(var i=0,o=0;i=o,o=zt(),i===38&&o===12&&(n[r]=1),!ki(o);)st();return Ni(t,tt)},my=function(t,n){var r=-1,i=44;do switch(ki(i)){case 0:i===38&&zt()===12&&(n[r]=1),t[r]+=hy(tt-1,n,r);break;case 2:t[r]+=vo(i);break;case 4:if(i===44){t[++r]=zt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=sl(i)}while(i=st());return t},yy=function(t,n){return _p(my(bp(t),n))},ef=new WeakMap,gy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ef.get(r))&&!i){ef.set(t,!0);for(var o=[],l=yy(n,o),s=r.props,a=0,p=0;a<l.length;a++)for(var m=0;m<s.length;m++,p++)t.props[p]=o[a]?l[a].replace(/&\f/g,s[m]):s[m]+" "+l[a]}}},vy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pp(e,t){switch(Jm(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+Vo+e+We+e+e;case 6828:case 4268:return ie+e+We+e+e;case 6165:return ie+e+We+"flex-"+e+e;case 5187:return ie+e+oe(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+We+"flex-$1$2")+e;case 5443:return ie+e+We+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return ie+e+We+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return ie+e+We+oe(e,"shrink","negative")+e;case 5292:return ie+e+We+oe(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+oe(e,"-grow","")+ie+e+We+oe(e,"grow","positive")+e;case 4554:return ie+oe(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+Vo+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~la(e,"stretch")?Pp(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Me(e,t+1)!==115)break;case 6444:switch(Me(e,Nt(e)-3-(~la(e,"!important")&&10))){case 107:return oe(e,":",":"+ie)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(Me(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+We+"$2box$3")+e}break;case 5936:switch(Me(e,t+11)){case 114:return ie+e+We+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+We+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+We+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ie+e+We+e+e}return e}var wy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case su:t.return=Pp(t.value,t.length);break;case Tp:return cr([Ur(t,{value:oe(t.value,"@","@"+ie)})],i);case lu:if(t.length)return ty(t.props,function(o){switch(ey(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return cr([Ur(t,{props:[oe(o,/:(read-\w+)/,":"+Vo+"$1")]})],i);case"::placeholder":return cr([Ur(t,{props:[oe(o,/:(plac\w+)/,":"+ie+"input-$1")]}),Ur(t,{props:[oe(o,/:(plac\w+)/,":"+Vo+"$1")]}),Ur(t,{props:[oe(o,/:(plac\w+)/,We+"input-$1")]})],i)}return""})}},Sy=[wy],xy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(C){var M=C.getAttribute("data-emotion");M.indexOf(" ")!==-1&&(document.head.appendChild(C),C.setAttribute("data-s",""))})}var i=t.stylisPlugins||Sy,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(C){for(var M=C.getAttribute("data-emotion").split(" "),y=1;y<M.length;y++)o[M[y]]=!0;s.push(C)});var a,p=[gy,vy];{var m,S=[cy,dy(function(C){m.insert(C)})],w=fy(p.concat(i,S)),k=function(M){return cr(ay(M),w)};a=function(M,y,d,v){m=d,k(M?M+"{"+y.styles+"}":y.styles),v&&(E.inserted[y.name]=!0)}}var E={key:n,sheet:new Ym({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return E.sheet.hydrate(s),E},Np={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,uu=Le?Symbol.for("react.element"):60103,cu=Le?Symbol.for("react.portal"):60106,cl=Le?Symbol.for("react.fragment"):60107,fl=Le?Symbol.for("react.strict_mode"):60108,dl=Le?Symbol.for("react.profiler"):60114,pl=Le?Symbol.for("react.provider"):60109,hl=Le?Symbol.for("react.context"):60110,fu=Le?Symbol.for("react.async_mode"):60111,ml=Le?Symbol.for("react.concurrent_mode"):60111,yl=Le?Symbol.for("react.forward_ref"):60112,gl=Le?Symbol.for("react.suspense"):60113,ky=Le?Symbol.for("react.suspense_list"):60120,vl=Le?Symbol.for("react.memo"):60115,wl=Le?Symbol.for("react.lazy"):60116,Ey=Le?Symbol.for("react.block"):60121,Ty=Le?Symbol.for("react.fundamental"):60117,Cy=Le?Symbol.for("react.responder"):60118,Oy=Le?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uu:switch(e=e.type,e){case fu:case ml:case cl:case dl:case fl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case hl:case yl:case wl:case vl:case pl:return e;default:return t}}case cu:return t}}}function jp(e){return ft(e)===ml}ue.AsyncMode=fu;ue.ConcurrentMode=ml;ue.ContextConsumer=hl;ue.ContextProvider=pl;ue.Element=uu;ue.ForwardRef=yl;ue.Fragment=cl;ue.Lazy=wl;ue.Memo=vl;ue.Portal=cu;ue.Profiler=dl;ue.StrictMode=fl;ue.Suspense=gl;ue.isAsyncMode=function(e){return jp(e)||ft(e)===fu};ue.isConcurrentMode=jp;ue.isContextConsumer=function(e){return ft(e)===hl};ue.isContextProvider=function(e){return ft(e)===pl};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uu};ue.isForwardRef=function(e){return ft(e)===yl};ue.isFragment=function(e){return ft(e)===cl};ue.isLazy=function(e){return ft(e)===wl};ue.isMemo=function(e){return ft(e)===vl};ue.isPortal=function(e){return ft(e)===cu};ue.isProfiler=function(e){return ft(e)===dl};ue.isStrictMode=function(e){return ft(e)===fl};ue.isSuspense=function(e){return ft(e)===gl};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cl||e===ml||e===dl||e===fl||e===gl||e===ky||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===vl||e.$$typeof===pl||e.$$typeof===hl||e.$$typeof===yl||e.$$typeof===Ty||e.$$typeof===Cy||e.$$typeof===Oy||e.$$typeof===Ey)};ue.typeOf=ft;Np.exports=ue;var by=Np.exports,Ip=by,_y={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Py={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lp={};Lp[Ip.ForwardRef]=_y;Lp[Ip.Memo]=Py;var Ny=!0;function Rp(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var du=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Ny===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},zp=function(t,n,r){du(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function jy(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Iy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ly=/[A-Z]|^ms/g,Ry=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Mp=function(t){return t.charCodeAt(1)===45},tf=function(t){return t!=null&&typeof t!="boolean"},fs=py(function(e){return Mp(e)?e:e.replace(Ly,"-$&").toLowerCase()}),nf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ry,function(r,i,o){return jt={name:i,styles:o,next:jt},i})}return Iy[t]!==1&&!Mp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ei(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return jt={name:n.name,styles:n.styles,next:jt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)jt={name:r.name,styles:r.styles,next:jt},r=r.next;var i=n.styles+";";return i}return zy(e,t,n)}case"function":{if(e!==void 0){var o=jt,l=n(e);return jt=o,Ei(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function zy(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ei(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":tf(l)&&(r+=fs(o)+":"+nf(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)tf(l[s])&&(r+=fs(o)+":"+nf(o,l[s])+";");else{var a=Ei(e,t,l);switch(o){case"animation":case"animationName":{r+=fs(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var rf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,jt,pu=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";jt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Ei(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Ei(r,n,t[s]),i&&(o+=l[s]);rf.lastIndex=0;for(var a="",p;(p=rf.exec(o))!==null;)a+="-"+p[1];var m=jy(o)+a;return{name:m,styles:o,next:jt}},My=function(t){return t()},Dy=Hu.useInsertionEffect?Hu.useInsertionEffect:!1,Dp=Dy||My,hu={}.hasOwnProperty,Fp=J.createContext(typeof HTMLElement<"u"?xy({key:"css"}):null);Fp.Provider;var $p=function(t){return J.forwardRef(function(n,r){var i=J.useContext(Fp);return t(n,i,r)})},Ap=J.createContext({}),aa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Fy=function(t,n){var r={};for(var i in n)hu.call(n,i)&&(r[i]=n[i]);return r[aa]=t,r},$y=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return du(n,r,i),Dp(function(){return zp(n,r,i)}),null},Ay=$p(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[aa],o=[r],l="";typeof e.className=="string"?l=Rp(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var s=pu(o,void 0,J.useContext(Ap));l+=t.key+"-"+s.name;var a={};for(var p in e)hu.call(e,p)&&p!=="css"&&p!==aa&&(a[p]=e[p]);return a.ref=n,a.className=l,J.createElement(J.Fragment,null,J.createElement($y,{cache:t,serialized:s,isStringTag:typeof i=="string"}),J.createElement(i,a))}),Wy=Ay,By=$.Fragment;function Ne(e,t,n){return hu.call(t,"css")?$.jsx(Wy,Fy(e,t),n):$.jsx(e,t,n)}function Wp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return pu(t)}var R=function(){var t=Wp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Uy=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var l=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))l=e(o);else{l="";for(var s in o)o[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=o}l&&(i&&(i+=" "),i+=l)}}return i};function Vy(e,t,n){var r=[],i=Rp(e,r,n);return r.length<2?n:i+t(r)}var Hy=function(t){var n=t.cache,r=t.serializedArr;return Dp(function(){for(var i=0;i<r.length;i++)zp(n,r[i],!1)}),null},ds=$p(function(e,t){var n=!1,r=[],i=function(){for(var p=arguments.length,m=new Array(p),S=0;S<p;S++)m[S]=arguments[S];var w=pu(m,t.registered);return r.push(w),du(t,w,!1),t.key+"-"+w.name},o=function(){for(var p=arguments.length,m=new Array(p),S=0;S<p;S++)m[S]=arguments[S];return Vy(t.registered,i,Uy(m))},l={css:i,cx:o,theme:J.useContext(Ap)},s=e.children(l);return n=!0,J.createElement(J.Fragment,null,J.createElement(Hy,{cache:t,serializedArr:r}),s)}),Qy=Object.defineProperty,Ky=(e,t,n)=>t in e?Qy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,to=(e,t,n)=>(Ky(e,typeof t!="symbol"?t+"":t,n),n),ua=new Map,no=new WeakMap,of=0,Yy=void 0;function Gy(e){return e?(no.has(e)||(of+=1,no.set(e,of.toString())),no.get(e)):"0"}function Xy(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Gy(e.root):e[t]}`).toString()}function qy(e){const t=Xy(e);let n=ua.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(l=>{l.forEach(s=>{var a;const p=s.isIntersecting&&i.some(m=>s.intersectionRatio>=m);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=p),(a=r.get(s.target))==null||a.forEach(m=>{m(p,s)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},ua.set(t,n)}return n}function Bp(e,t,n={},r=Yy){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:i,observer:o,elements:l}=qy(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),ua.delete(i))}}function Zy(e){return typeof e.children!="function"}var lf=class extends J.Component{constructor(e){super(e),to(this,"node",null),to(this,"_unobserveCb",null),to(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),to(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Zy(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=Bp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:k,entry:E}=this.state;return e({inView:k,entry:E,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:l,skip:s,trackVisibility:a,delay:p,initialInView:m,fallbackInView:S,...w}=this.props;return J.createElement(t||"div",{ref:this.handleNode,...w},e)}};function Up({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:l,initialInView:s,fallbackInView:a,onChange:p}={}){var m;const[S,w]=J.useState(null),k=J.useRef(),[E,C]=J.useState({inView:!!s,entry:void 0});k.current=p,J.useEffect(()=>{if(l||!S)return;let v;return v=Bp(S,(b,z)=>{C({inView:b,entry:z}),k.current&&k.current(b,z),z.isIntersecting&&o&&v&&(v(),v=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,S,i,r,o,l,n,a,t]);const M=(m=E.entry)==null?void 0:m.target,y=J.useRef();!S&&M&&!o&&!l&&y.current!==M&&(y.current=M,C({inView:!!s,entry:void 0}));const d=[w,E.inView,E.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}var Vp={exports:{}},ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu=Symbol.for("react.element"),yu=Symbol.for("react.portal"),Sl=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),El=Symbol.for("react.provider"),Tl=Symbol.for("react.context"),Jy=Symbol.for("react.server_context"),Cl=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),Pl=Symbol.for("react.lazy"),eg=Symbol.for("react.offscreen"),Hp;Hp=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mu:switch(e=e.type,e){case Sl:case kl:case xl:case Ol:case bl:return e;default:switch(e=e&&e.$$typeof,e){case Jy:case Tl:case Cl:case Pl:case _l:case El:return e;default:return t}}case yu:return t}}}ce.ContextConsumer=Tl;ce.ContextProvider=El;ce.Element=mu;ce.ForwardRef=Cl;ce.Fragment=Sl;ce.Lazy=Pl;ce.Memo=_l;ce.Portal=yu;ce.Profiler=kl;ce.StrictMode=xl;ce.Suspense=Ol;ce.SuspenseList=bl;ce.isAsyncMode=function(){return!1};ce.isConcurrentMode=function(){return!1};ce.isContextConsumer=function(e){return wt(e)===Tl};ce.isContextProvider=function(e){return wt(e)===El};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mu};ce.isForwardRef=function(e){return wt(e)===Cl};ce.isFragment=function(e){return wt(e)===Sl};ce.isLazy=function(e){return wt(e)===Pl};ce.isMemo=function(e){return wt(e)===_l};ce.isPortal=function(e){return wt(e)===yu};ce.isProfiler=function(e){return wt(e)===kl};ce.isStrictMode=function(e){return wt(e)===xl};ce.isSuspense=function(e){return wt(e)===Ol};ce.isSuspenseList=function(e){return wt(e)===bl};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Sl||e===kl||e===xl||e===Ol||e===bl||e===eg||typeof e=="object"&&e!==null&&(e.$$typeof===Pl||e.$$typeof===_l||e.$$typeof===El||e.$$typeof===Tl||e.$$typeof===Cl||e.$$typeof===Hp||e.getModuleId!==void 0)};ce.typeOf=wt;Vp.exports=ce;var tg=Vp.exports;R`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;R`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;R`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;R`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;R`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;R`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;R`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;R`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;R`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;R`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;R`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;R`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const ng=R`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,rg=R`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ig=R`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,og=R`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lg=R`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gu=R`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sg=R`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ag=R`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ug=R`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cg=R`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fg=R`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dg=R`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pg=R`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function hg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=gu,iterationCount:i=1}){return Wp`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function mg(e){return e==null}function yg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Qp(e,t){return n=>n?e():t()}function Ti(e){return Qp(e,()=>null)}function ca(e){return Ti(()=>({opacity:0}))(e)}const Kp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:l=gu,triggerOnce:s=!1,className:a,style:p,childClassName:m,childStyle:S,children:w,onVisibilityChange:k}=e,E=J.useMemo(()=>hg({keyframes:l,duration:i}),[i,l]);return mg(w)?null:yg(w)?Ne(vg,{...e,animationStyles:E,children:String(w)}):tg.isFragment(w)?Ne(Yp,{...e,animationStyles:E}):Ne(By,{children:J.Children.map(w,(C,M)=>{if(!J.isValidElement(C))return null;const y=r+(t?M*i*n:0);switch(C.type){case"ol":case"ul":return Ne(ds,{children:({cx:d})=>Ne(C.type,{...C.props,className:d(a,C.props.className),style:Object.assign({},p,C.props.style),children:Ne(Kp,{...e,children:C.props.children})})});case"li":return Ne(lf,{threshold:o,triggerOnce:s,onChange:k,children:({inView:d,ref:v})=>Ne(ds,{children:({cx:b})=>Ne(C.type,{...C.props,ref:v,className:b(m,C.props.className),css:Ti(()=>E)(d),style:Object.assign({},S,C.props.style,ca(!d),{animationDelay:y+"ms"})})})});default:return Ne(lf,{threshold:o,triggerOnce:s,onChange:k,children:({inView:d,ref:v})=>Ne("div",{ref:v,className:a,css:Ti(()=>E)(d),style:Object.assign({},p,ca(!d),{animationDelay:y+"ms"}),children:Ne(ds,{children:({cx:b})=>Ne(C.type,{...C.props,className:b(m,C.props.className),style:Object.assign({},S,C.props.style)})})})})}})})},gg={display:"inline-block",whiteSpace:"pre"},vg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:p,children:m,onVisibilityChange:S}=e,{ref:w,inView:k}=Up({triggerOnce:s,threshold:l,onChange:S});return Qp(()=>Ne("div",{ref:w,className:a,style:Object.assign({},p,gg),children:m.split("").map((E,C)=>Ne("span",{css:Ti(()=>t)(k),style:{animationDelay:i+C*o*r+"ms"},children:E},C))}),()=>Ne(Yp,{...e,children:m}))(n)},Yp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:l,onVisibilityChange:s}=e,{ref:a,inView:p}=Up({triggerOnce:r,threshold:n,onChange:s});return Ne("div",{ref:a,className:i,css:Ti(()=>t)(p),style:Object.assign({},o,ca(!p)),children:l})};R`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;R`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;R`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;R`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;R`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const wg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Sg=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,xg=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,kg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Eg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Tg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Cg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Og=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,bg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,_g=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Pg=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ng=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,jg=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ig(e,t,n){switch(n){case"bottom-left":return t?Sg:rg;case"bottom-right":return t?xg:ig;case"down":return e?t?Eg:lg:t?kg:og;case"left":return e?t?Cg:sg:t?Tg:gu;case"right":return e?t?bg:ug:t?Og:ag;case"top-left":return t?_g:cg;case"top-right":return t?Pg:fg;case"up":return e?t?jg:pg:t?Ng:dg;default:return t?wg:ng}}const Mt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=J.useMemo(()=>Ig(t,r,n),[t,n,r]);return Ne(Kp,{keyframes:o,...i})};R`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;R`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;R`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;R`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;R`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;R`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;R`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;R`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;R`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;R`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;R`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Lg({headerRef:e}){return $.jsx("header",{className:"bg-neutral-50 p-4 border-b border-neutralSand sm:rounded-t-lg",ref:e,children:$.jsx(Mt,{children:$.jsx("figure",{className:"mx-auto w-72 sm:w-96",children:$.jsx("img",{src:"/porto-logo.png",alt:"porto santo logo"})})})})}function ro({link:e,name:t,handleScroll:n,domRef:r}){return $.jsx("li",{className:"inline-block sm:text-lg",children:$.jsx("a",{href:`#${e}`,onClick:()=>n(r.current),className:"text-primary font-bold transition-colors hover:text-light",children:t})})}function Rg({handleScroll:e,headerRef:t,overviewRef:n,galleryRef:r,contactRef:i}){return $.jsx("nav",{className:"bg-neutral-50 shadow-lg py-4 w-full sticky top-0 z-50 flex justify-center m-auto px-4 pb-4",children:$.jsx("ul",{className:"flex justify-between w-full sm:w-[500px]",children:$.jsxs(Mt,{cascade:!0,duration:500,children:[$.jsx(ro,{link:"hero",name:"Inicio",handleScroll:e,domRef:t}),$.jsx(ro,{link:"overview",name:"Descripción",handleScroll:e,domRef:n}),$.jsx(ro,{link:"gallery",name:"Galería",handleScroll:e,domRef:r}),$.jsx(ro,{link:"contact",name:"Contacto",handleScroll:e,domRef:i})]})})})}function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var zg={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},Mg=new(function(){function e(){}var t=e.prototype;return t.load=function(n,r,i){if(n.el=typeof i=="string"?document.querySelector(i):i,n.options=fa({},zg,r),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(p){return p.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(n.stringsElement.children),l=o.length;if(l)for(var s=0;s<l;s+=1)n.strings.push(o[s].innerHTML.trim())}for(var a in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[a]=a;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},t.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},t.appendCursorAnimationCss=function(n){var r="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+r+"]")){var i=document.createElement("style");i.setAttribute(r,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(n){var r="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+r+"]")){var i=document.createElement("style");i.setAttribute(r,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},e}()),sf=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(n,r,i){if(i.contentType!=="html")return r;var o=n.substring(r).charAt(0);if(o==="<"||o==="&"){var l;for(l=o==="<"?">":";";n.substring(r+1).charAt(0)!==l&&!(1+ ++r>n.length););r++}return r},t.backSpaceHtmlChars=function(n,r,i){if(i.contentType!=="html")return r;var o=n.substring(r).charAt(0);if(o===">"||o===";"){var l;for(l=o===">"?"<":"&";n.substring(r-1).charAt(0)!==l&&!(--r<0););r--}return r},e}()),Dg=function(){function e(n,r){Mg.load(this,r,n),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},t.typewrite=function(n,r){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),l=1;this.pause.status!==!0?this.timeout=setTimeout(function(){r=sf.typeHtmlChars(n,r,i);var s=0,a=n.substring(r);if(a.charAt(0)==="^"&&/^\^\d+/.test(a)){var p=1;p+=(a=/\d+/.exec(a)[0]).length,s=parseInt(a),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),n=n.substring(0,r)+n.substring(r+p),i.toggleBlinking(!0)}if(a.charAt(0)==="`"){for(;n.substring(r+l).charAt(0)!=="`"&&(l++,!(r+l>n.length)););var m=n.substring(0,r),S=n.substring(m.length+1,r+l),w=n.substring(r+l+1);n=m+S+w,l--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),r>=n.length?i.doneTyping(n,r):i.keepTyping(n,r,l),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},s)},o):this.setPauseStatus(n,r,!0)},t.keepTyping=function(n,r,i){r===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=n.substring(0,r+=i);this.replaceText(o),this.typewrite(n,r)},t.doneTyping=function(n,r){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(n,r)},this.backDelay))},t.backspace=function(n,r){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){r=sf.backSpaceHtmlChars(n,r,i);var l=n.substring(0,r);if(i.replaceText(l),i.smartBackspace){var s=i.strings[i.arrayPos+1];i.stopNum=s&&l===s.substring(0,r)?r:0}r>i.stopNum?(r--,i.backspace(n,r)):r<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],r))},o)}else this.setPauseStatus(n,r,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(n,r,i){this.pause.typewrite=i,this.pause.curString=n,this.pause.curStrPos=r},t.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(n){return Math.round(Math.random()*n/2)+n},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},t.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(r){n.stop()}),this.el.addEventListener("blur",function(r){n.el.value&&n.el.value.length!==0||n.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const Fg=J.memo(({style:e,className:t,typedRef:n,parseRef:r,stopped:i,children:o,startWhenVisible:l,...s})=>{const a=J.useRef(null),p=J.useMemo(()=>{var S;return[...Object.values(s).filter(w=>typeof w=="boolean"||typeof w=="number"||typeof w=="string"),(S=s.strings)==null?void 0:S.join(",")]},[s]);J.useEffect(()=>{const S=r&&r(a)||a.current,w=new Dg(S,{...s});if((i||l)&&(w==null||w.stop()),l){const k=new IntersectionObserver(([E])=>{E.isIntersecting&&(w==null||w.start(),k.disconnect())});k.observe(S)}return n&&w&&n(w),()=>{w.destroy()}},p);const m=o?Yr.cloneElement(o,{ref:a}):Yr.createElement("span",{style:e,ref:a});return Yr.createElement("span",{style:e,className:t,"data-testid":"react-typed"},m)});function $g(){return $.jsx("div",{className:"flex flex-col items-center justify-center bg-hero bg-cover h-[500px]",children:$.jsx("h2",{className:"bg-neutral-50/20 text-zinc-100 text-5xl font-bold p-2 rounded-lg",children:$.jsx(Fg,{startWhenVisible:!0,strings:["Lechería te espera!"],typeSpeed:90})})})}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ag={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=(e,t)=>{const n=J.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:s="",children:a,...p},m)=>J.createElement("svg",{ref:m,...Ag,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Wg(e)}`,s].join(" "),...p},[...t.map(([S,w])=>J.createElement(S,w)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=Er("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=Er("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=Er("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=Er("TreePalm",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=Er("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=Er("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);function af({title:e,children:t,flexDirection:n,imgSrc:r,imgAlt:i}){return $.jsxs("div",{className:`flex gap-4 flex-col sm:${n}`,children:[$.jsxs("div",{className:"flex-1 sm:text-left",children:[$.jsx(Mt,{direction:"down",children:$.jsx("h3",{className:"text-2xl text-secondary mb-4 md:text-3xl",children:e})}),t]}),$.jsx("picture",{className:"flex-1 rounded-lg overflow-hidden",children:$.jsx(Mt,{delay:100,children:$.jsx("img",{src:r,alt:i,className:" w-full h-full object-cover rounded-lg shadow-xl"})})})]})}function Yg({overviewRef:e}){return $.jsxs("div",{className:"bg-neutral-50 py-8 px-4 mt-4 flex flex-col gap-8 sm:gap-10 sm:rounded-lg sm:shadow-xl md:p-12",ref:e,children:[$.jsx(af,{title:"Bienvenidos",imgSrc:"/living-1.jpeg",imgAlt:"sala de estar",flexDirection:"flex sm:flex-row",children:$.jsxs(Mt,{delay:200,children:[$.jsx("p",{className:"text-primary md:text-lg",children:"Sumérgete en la serenidad de nuestro encantador departamento, situado en una de las ciudades más vibrantes de Venezuela. Con todas las comodidades del hogar, nuestro espacio es el refugio perfecto para relajarse y recargar energías."}),$.jsx("p",{className:"text-primary md:text-lg pt-2",children:"Con una ubicación privilegiada a pocos metros de Playa Lido y con variedad de servicios y restaurantes, podrás disfrutar de unas vacaciones inolvidables."})]})}),$.jsx(af,{title:"Qué encontrarás?",imgSrc:"/living-2.png",imgAlt:"sala de estar",flexDirection:"flex sm:flex-row-reverse",children:$.jsx("ul",{className:"flex flex-col gap-2 md:text-lg",children:$.jsxs(Mt,{cascade:!0,children:[$.jsxs("li",{className:"flex items-center gap-2 text-primary ",children:[$.jsx(Ug,{color:"#55c4d7"})," 3 habitaciones"]}),$.jsxs("li",{className:"flex gap-2 items-center  text-primary",children:[$.jsx(Bg,{color:"#55c4d7"})," 3 baños"]}),$.jsxs("li",{className:"flex gap-2 items-center  text-primary",children:[$.jsx(Qg,{color:"#55c4d7"})," Cocina totalmente equipada"]}),$.jsxs("li",{className:"flex gap-2 items-center  text-primary",children:[$.jsx(Kg,{color:"#55c4d7"})," Conexión a internet"]}),$.jsxs("li",{className:"flex gap-2 items-center  text-primary",children:[$.jsx(Hg,{color:"#55c4d7"})," Playa a 300 metros"]}),$.jsxs("li",{className:"flex gap-2 items-center  text-primary",children:[$.jsx(Vg,{color:"#55c4d7"})," Estacionamiento gratuito"]})]})})})]})}var Gp={exports:{}};(function(e,t){(function(n,r){e.exports=r(J)})(Rr,n=>(()=>{var r={703:(s,a,p)=>{var m=p(414);function S(){}function w(){}w.resetWarningCache=S,s.exports=function(){function k(M,y,d,v,b,z){if(z!==m){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}function E(){return k}k.isRequired=k;var C={array:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:E,element:k,elementType:k,instanceOf:E,node:k,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:w,resetWarningCache:S};return C.PropTypes=C,C}},697:(s,a,p)=>{s.exports=p(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},590:s=>{var a=typeof Element<"u",p=typeof Map=="function",m=typeof Set=="function",S=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function w(k,E){if(k===E)return!0;if(k&&E&&typeof k=="object"&&typeof E=="object"){if(k.constructor!==E.constructor)return!1;var C,M,y,d;if(Array.isArray(k)){if((C=k.length)!=E.length)return!1;for(M=C;M--!=0;)if(!w(k[M],E[M]))return!1;return!0}if(p&&k instanceof Map&&E instanceof Map){if(k.size!==E.size)return!1;for(d=k.entries();!(M=d.next()).done;)if(!E.has(M.value[0]))return!1;for(d=k.entries();!(M=d.next()).done;)if(!w(M.value[1],E.get(M.value[0])))return!1;return!0}if(m&&k instanceof Set&&E instanceof Set){if(k.size!==E.size)return!1;for(d=k.entries();!(M=d.next()).done;)if(!E.has(M.value[0]))return!1;return!0}if(S&&ArrayBuffer.isView(k)&&ArrayBuffer.isView(E)){if((C=k.length)!=E.length)return!1;for(M=C;M--!=0;)if(k[M]!==E[M])return!1;return!0}if(k.constructor===RegExp)return k.source===E.source&&k.flags===E.flags;if(k.valueOf!==Object.prototype.valueOf)return k.valueOf()===E.valueOf();if(k.toString!==Object.prototype.toString)return k.toString()===E.toString();if((C=(y=Object.keys(k)).length)!==Object.keys(E).length)return!1;for(M=C;M--!=0;)if(!Object.prototype.hasOwnProperty.call(E,y[M]))return!1;if(a&&k instanceof Element)return!1;for(M=C;M--!=0;)if((y[M]!=="_owner"&&y[M]!=="__v"&&y[M]!=="__o"||!k.$$typeof)&&!w(k[y[M]],E[y[M]]))return!1;return!0}return k!=k&&E!=E}s.exports=function(k,E){try{return w(k,E)}catch(C){if((C.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw C}}},359:s=>{s.exports=n}},i={};function o(s){var a=i[s];if(a!==void 0)return a.exports;var p=i[s]={exports:{}};return r[s](p,p.exports,o),p.exports}o.n=s=>{var a=s&&s.__esModule?()=>s.default:()=>s;return o.d(a,{a}),a},o.d=(s,a)=>{for(var p in a)o.o(a,p)&&!o.o(s,p)&&Object.defineProperty(s,p,{enumerable:!0,get:a[p]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var l={};return(()=>{function s(h){var u,g,x="";if(typeof h=="string"||typeof h=="number")x+=h;else if(typeof h=="object")if(Array.isArray(h))for(u=0;u<h.length;u++)h[u]&&(g=s(h[u]))&&(x&&(x+=" "),x+=g);else for(u in h)h[u]&&(x&&(x+=" "),x+=u);return x}function a(){for(var h,u,g=0,x="";g<arguments.length;)(h=arguments[g++])&&(u=s(h))&&(x&&(x+=" "),x+=u);return x}o.r(l),o.d(l,{default:()=>vh});var p=o(359),m=o.n(p);const S=function(h){var u=typeof h;return h!=null&&(u=="object"||u=="function")},w=typeof Rr=="object"&&Rr&&Rr.Object===Object&&Rr;var k=typeof self=="object"&&self&&self.Object===Object&&self;const E=w||k||Function("return this")(),C=function(){return E.Date.now()};var M=/\s/,y=/^\s+/;const d=function(h){return h&&h.slice(0,function(u){for(var g=u.length;g--&&M.test(u.charAt(g)););return g}(h)+1).replace(y,"")},v=E.Symbol;var b=Object.prototype,z=b.hasOwnProperty,D=b.toString,N=v?v.toStringTag:void 0,Q=Object.prototype.toString,he=v?v.toStringTag:void 0;const ee=function(h){return h==null?h===void 0?"[object Undefined]":"[object Null]":he&&he in Object(h)?function(u){var g=z.call(u,N),x=u[N];try{u[N]=void 0;var I=!0}catch{}var V=D.call(u);return I&&(g?u[N]=x:delete u[N]),V}(h):function(u){return Q.call(u)}(h)};var nt=/^[-+]0x[0-9a-f]+$/i,vn=/^0b[01]+$/i,wn=/^0o[0-7]+$/i,ji=parseInt;const Ii=function(h){if(typeof h=="number")return h;if(function(x){return typeof x=="symbol"||function(I){return I!=null&&typeof I=="object"}(x)&&ee(x)=="[object Symbol]"}(h))return NaN;if(S(h)){var u=typeof h.valueOf=="function"?h.valueOf():h;h=S(u)?u+"":u}if(typeof h!="string")return h===0?h:+h;h=d(h);var g=vn.test(h);return g||wn.test(h)?ji(h.slice(2),g?2:8):nt.test(h)?NaN:+h};var Tr=Math.max,Cr=Math.min;const W=function(h,u,g){var x,I,V,ne,f,c,T=0,_=!1,L=!1,j=!0;if(typeof h!="function")throw new TypeError("Expected a function");function Y(H){var Z=x,le=I;return x=I=void 0,T=H,ne=h.apply(le,Z)}function K(H){return T=H,f=setTimeout(F,u),_?Y(H):ne}function q(H){var Z=H-c;return c===void 0||Z>=u||Z<0||L&&H-T>=V}function F(){var H=C();if(q(H))return A(H);f=setTimeout(F,function(Z){var le=u-(Z-c);return L?Cr(le,V-(Z-T)):le}(H))}function A(H){return f=void 0,j&&x?Y(H):(x=I=void 0,ne)}function U(){var H=C(),Z=q(H);if(x=arguments,I=this,c=H,Z){if(f===void 0)return K(c);if(L)return clearTimeout(f),f=setTimeout(F,u),Y(c)}return f===void 0&&(f=setTimeout(F,u)),ne}return u=Ii(u)||0,S(g)&&(_=!!g.leading,V=(L="maxWait"in g)?Tr(Ii(g.maxWait)||0,u):V,j="trailing"in g?!!g.trailing:j),U.cancel=function(){f!==void 0&&clearTimeout(f),T=0,x=c=I=f=void 0},U.flush=function(){return f===void 0?ne:A(C())},U},G=function(h,u,g){var x=!0,I=!0;if(typeof h!="function")throw new TypeError("Expected a function");return S(g)&&(x="leading"in g?!!g.leading:x,I="trailing"in g?!!g.trailing:I),W(h,u,{leading:x,maxWait:u,trailing:I})};var X=o(590),ye=o.n(X),Ee=function(){if(typeof Map<"u")return Map;function h(u,g){var x=-1;return u.some(function(I,V){return I[0]===g&&(x=V,!0)}),x}return function(){function u(){this.__entries__=[]}return Object.defineProperty(u.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),u.prototype.get=function(g){var x=h(this.__entries__,g),I=this.__entries__[x];return I&&I[1]},u.prototype.set=function(g,x){var I=h(this.__entries__,g);~I?this.__entries__[I][1]=x:this.__entries__.push([g,x])},u.prototype.delete=function(g){var x=this.__entries__,I=h(x,g);~I&&x.splice(I,1)},u.prototype.has=function(g){return!!~h(this.__entries__,g)},u.prototype.clear=function(){this.__entries__.splice(0)},u.prototype.forEach=function(g,x){x===void 0&&(x=null);for(var I=0,V=this.__entries__;I<V.length;I++){var ne=V[I];g.call(x,ne[1],ne[0])}},u}()}(),Gt=typeof window<"u"&&typeof document<"u"&&window.document===document,dt=o.g!==void 0&&o.g.Math===Math?o.g:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")(),Or=typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(dt):function(h){return setTimeout(function(){return h(Date.now())},1e3/60)},Dt=["top","right","bottom","left","width","height","size","weight"],Dn=typeof MutationObserver<"u",Xp=function(){function h(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(u,g){var x=!1,I=!1,V=0;function ne(){x&&(x=!1,u()),I&&c()}function f(){Or(ne)}function c(){var T=Date.now();if(x){if(T-V<2)return;I=!0}else x=!0,I=!1,setTimeout(f,20);V=T}return c}(this.refresh.bind(this))}return h.prototype.addObserver=function(u){~this.observers_.indexOf(u)||this.observers_.push(u),this.connected_||this.connect_()},h.prototype.removeObserver=function(u){var g=this.observers_,x=g.indexOf(u);~x&&g.splice(x,1),!g.length&&this.connected_&&this.disconnect_()},h.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},h.prototype.updateObservers_=function(){var u=this.observers_.filter(function(g){return g.gatherActive(),g.hasActive()});return u.forEach(function(g){return g.broadcastActive()}),u.length>0},h.prototype.connect_=function(){Gt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Dn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},h.prototype.disconnect_=function(){Gt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},h.prototype.onTransitionEnd_=function(u){var g=u.propertyName,x=g===void 0?"":g;Dt.some(function(I){return!!~x.indexOf(I)})&&this.refresh()},h.getInstance=function(){return this.instance_||(this.instance_=new h),this.instance_},h.instance_=null,h}(),vu=function(h,u){for(var g=0,x=Object.keys(u);g<x.length;g++){var I=x[g];Object.defineProperty(h,I,{value:u[I],enumerable:!1,writable:!1,configurable:!0})}return h},Fn=function(h){return h&&h.ownerDocument&&h.ownerDocument.defaultView||dt},wu=Ri(0,0,0,0);function Li(h){return parseFloat(h)||0}function Su(h){for(var u=[],g=1;g<arguments.length;g++)u[g-1]=arguments[g];return u.reduce(function(x,I){return x+Li(h["border-"+I+"-width"])},0)}var qp=typeof SVGGraphicsElement<"u"?function(h){return h instanceof Fn(h).SVGGraphicsElement}:function(h){return h instanceof Fn(h).SVGElement&&typeof h.getBBox=="function"};function Zp(h){return Gt?qp(h)?function(u){var g=u.getBBox();return Ri(0,0,g.width,g.height)}(h):function(u){var g=u.clientWidth,x=u.clientHeight;if(!g&&!x)return wu;var I=Fn(u).getComputedStyle(u),V=function(j){for(var Y={},K=0,q=["top","right","bottom","left"];K<q.length;K++){var F=q[K],A=j["padding-"+F];Y[F]=Li(A)}return Y}(I),ne=V.left+V.right,f=V.top+V.bottom,c=Li(I.width),T=Li(I.height);if(I.boxSizing==="border-box"&&(Math.round(c+ne)!==g&&(c-=Su(I,"left","right")+ne),Math.round(T+f)!==x&&(T-=Su(I,"top","bottom")+f)),!function(j){return j===Fn(j).document.documentElement}(u)){var _=Math.round(c+ne)-g,L=Math.round(T+f)-x;Math.abs(_)!==1&&(c-=_),Math.abs(L)!==1&&(T-=L)}return Ri(V.left,V.top,c,T)}(h):wu}function Ri(h,u,g,x){return{x:h,y:u,width:g,height:x}}var Jp=function(){function h(u){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ri(0,0,0,0),this.target=u}return h.prototype.isActive=function(){var u=Zp(this.target);return this.contentRect_=u,u.width!==this.broadcastWidth||u.height!==this.broadcastHeight},h.prototype.broadcastRect=function(){var u=this.contentRect_;return this.broadcastWidth=u.width,this.broadcastHeight=u.height,u},h}(),eh=function(h,u){var g,x,I,V,ne,f,c,T=(x=(g=u).x,I=g.y,V=g.width,ne=g.height,f=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(f.prototype),vu(c,{x,y:I,width:V,height:ne,top:I,right:x+V,bottom:ne+I,left:x}),c);vu(this,{target:h,contentRect:T})},th=function(){function h(u,g,x){if(this.activeObservations_=[],this.observations_=new Ee,typeof u!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=u,this.controller_=g,this.callbackCtx_=x}return h.prototype.observe=function(u){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element<"u"&&Element instanceof Object){if(!(u instanceof Fn(u).Element))throw new TypeError('parameter 1 is not of type "Element".');var g=this.observations_;g.has(u)||(g.set(u,new Jp(u)),this.controller_.addObserver(this),this.controller_.refresh())}},h.prototype.unobserve=function(u){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element<"u"&&Element instanceof Object){if(!(u instanceof Fn(u).Element))throw new TypeError('parameter 1 is not of type "Element".');var g=this.observations_;g.has(u)&&(g.delete(u),g.size||this.controller_.removeObserver(this))}},h.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},h.prototype.gatherActive=function(){var u=this;this.clearActive(),this.observations_.forEach(function(g){g.isActive()&&u.activeObservations_.push(g)})},h.prototype.broadcastActive=function(){if(this.hasActive()){var u=this.callbackCtx_,g=this.activeObservations_.map(function(x){return new eh(x.target,x.broadcastRect())});this.callback_.call(u,g,u),this.clearActive()}},h.prototype.clearActive=function(){this.activeObservations_.splice(0)},h.prototype.hasActive=function(){return this.activeObservations_.length>0},h}(),xu=typeof WeakMap<"u"?new WeakMap:new Ee,ku=function h(u){if(!(this instanceof h))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var g=Xp.getInstance(),x=new th(u,g,this);xu.set(this,x)};["observe","unobserve","disconnect"].forEach(function(h){ku.prototype[h]=function(){var u;return(u=xu.get(this))[h].apply(u,arguments)}});const Eu=dt.ResizeObserver!==void 0?dt.ResizeObserver:ku,$n="Left",Sn="Right",An="Up",xn="Down",Wn={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},Nl={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Tu="mousemove",Cu="mouseup";function Ou(h,u){if(u===0)return h;const g=Math.PI/180*u;return[h[0]*Math.cos(g)+h[1]*Math.sin(g),h[1]*Math.cos(g)-h[0]*Math.sin(g)]}function nh(h){const{trackMouse:u}=h,g=p.useRef(Object.assign({},Nl)),x=p.useRef(Object.assign({},Wn)),I=p.useRef(Object.assign({},x.current));let V;for(V in I.current=Object.assign({},x.current),x.current=Object.assign(Object.assign({},Wn),h),Wn)x.current[V]===void 0&&(x.current[V]=Wn[V]);const[ne,f]=p.useMemo(()=>function(c,T){const _=F=>{const A="touches"in F;A&&F.touches.length>1||c((U,H)=>{H.trackMouse&&!A&&(document.addEventListener(Tu,L),document.addEventListener(Cu,Y));const{clientX:Z,clientY:le}=A?F.touches[0]:F,xe=Ou([Z,le],H.rotationAngle);return H.onTouchStartOrOnMouseDown&&H.onTouchStartOrOnMouseDown({event:F}),Object.assign(Object.assign(Object.assign({},U),Nl),{initial:xe.slice(),xy:xe,start:F.timeStamp||0})})},L=F=>{c((A,U)=>{const H="touches"in F;if(H&&F.touches.length>1)return A;if(F.timeStamp-A.start>U.swipeDuration)return A.swiping?Object.assign(Object.assign({},A),{swiping:!1}):A;const{clientX:Z,clientY:le}=H?F.touches[0]:F,[xe,Ge]=Ou([Z,le],U.rotationAngle),Ve=xe-A.xy[0],Re=Ge-A.xy[1],ge=Math.abs(Ve),se=Math.abs(Re),Xt=(F.timeStamp||0)-A.start,Nr=Math.sqrt(ge*ge+se*se)/(Xt||1),jr=[Ve/(Xt||1),Re/(Xt||1)],Ft=function(Ir,Vn,Lr,rt){return Ir>Vn?Lr>0?Sn:$n:rt>0?xn:An}(ge,se,Ve,Re),kn=typeof U.delta=="number"?U.delta:U.delta[Ft.toLowerCase()]||Wn.delta;if(ge<kn&&se<kn&&!A.swiping)return A;const bt={absX:ge,absY:se,deltaX:Ve,deltaY:Re,dir:Ft,event:F,first:A.first,initial:A.initial,velocity:Nr,vxvy:jr};bt.first&&U.onSwipeStart&&U.onSwipeStart(bt),U.onSwiping&&U.onSwiping(bt);let Un=!1;return(U.onSwiping||U.onSwiped||U[`onSwiped${Ft}`])&&(Un=!0),Un&&U.preventScrollOnSwipe&&U.trackTouch&&F.cancelable&&F.preventDefault(),Object.assign(Object.assign({},A),{first:!1,eventData:bt,swiping:!0})})},j=F=>{c((A,U)=>{let H;if(A.swiping&&A.eventData){if(F.timeStamp-A.start<U.swipeDuration){H=Object.assign(Object.assign({},A.eventData),{event:F}),U.onSwiped&&U.onSwiped(H);const Z=U[`onSwiped${H.dir}`];Z&&Z(H)}}else U.onTap&&U.onTap({event:F});return U.onTouchEndOrOnMouseUp&&U.onTouchEndOrOnMouseUp({event:F}),Object.assign(Object.assign(Object.assign({},A),Nl),{eventData:H})})},Y=F=>{document.removeEventListener(Tu,L),document.removeEventListener(Cu,Y),j(F)},K=(F,A)=>{let U=()=>{};if(F&&F.addEventListener){const H=Object.assign(Object.assign({},Wn.touchEventOptions),A.touchEventOptions),Z=[["touchstart",_,H],["touchmove",L,Object.assign(Object.assign({},H),A.preventScrollOnSwipe?{passive:!1}:{})],["touchend",j,H]];Z.forEach(([le,xe,Ge])=>F.addEventListener(le,xe,Ge)),U=()=>Z.forEach(([le,xe])=>F.removeEventListener(le,xe))}return U},q={ref:F=>{F!==null&&c((A,U)=>{if(A.el===F)return A;const H={};return A.el&&A.el!==F&&A.cleanUpTouch&&(A.cleanUpTouch(),H.cleanUpTouch=void 0),U.trackTouch&&F&&(H.cleanUpTouch=K(F,U)),Object.assign(Object.assign(Object.assign({},A),{el:F}),H)})}};return T.trackMouse&&(q.onMouseDown=_),[q,K]}(c=>g.current=c(g.current,x.current),{trackMouse:u}),[u]);return g.current=function(c,T,_,L){return T.trackTouch&&c.el?c.cleanUpTouch?T.preventScrollOnSwipe!==_.preventScrollOnSwipe||T.touchEventOptions.passive!==_.touchEventOptions.passive?(c.cleanUpTouch(),Object.assign(Object.assign({},c),{cleanUpTouch:L(c.el,T)})):c:Object.assign(Object.assign({},c),{cleanUpTouch:L(c.el,T)}):(c.cleanUpTouch&&c.cleanUpTouch(),Object.assign(Object.assign({},c),{cleanUpTouch:void 0}))}(g.current,x.current,I.current,f),ne}var O=o(697);function br(h){return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},br(h)}function bu(h,u){var g=Object.keys(h);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(h);u&&(x=x.filter(function(I){return Object.getOwnPropertyDescriptor(h,I).enumerable})),g.push.apply(g,x)}return g}function _u(h){for(var u=1;u<arguments.length;u++){var g=arguments[u]!=null?arguments[u]:{};u%2?bu(Object(g),!0).forEach(function(x){rh(h,x,g[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(g)):bu(Object(g)).forEach(function(x){Object.defineProperty(h,x,Object.getOwnPropertyDescriptor(g,x))})}return h}function rh(h,u,g){return(u=function(x){var I=function(V,ne){if(br(V)!=="object"||V===null)return V;var f=V[Symbol.toPrimitive];if(f!==void 0){var c=f.call(V,ne);if(br(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(V)}(x,"string");return br(I)==="symbol"?I:String(I)}(u))in h?Object.defineProperty(h,u,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[u]=g,h}var ih={description:"",fullscreen:"",isFullscreen:!1,originalAlt:"",originalHeight:"",originalWidth:"",originalTitle:"",sizes:"",srcSet:"",loading:"eager"},jl=m().memo(function(h){var u=_u(_u({},ih),h),g=u.description,x=u.fullscreen,I=u.handleImageLoaded,V=u.isFullscreen,ne=u.onImageError,f=u.original,c=u.originalAlt,T=u.originalHeight,_=u.originalWidth,L=u.originalTitle,j=u.sizes,Y=u.srcSet,K=u.loading,q=V&&x||f;return m().createElement(m().Fragment,null,m().createElement("img",{className:"image-gallery-image",src:q,alt:c,srcSet:Y,height:T,width:_,sizes:j,title:L,onLoad:function(F){return I(F,f)},onError:ne,loading:K}),g&&m().createElement("span",{className:"image-gallery-description"},g))});jl.displayName="Item",jl.propTypes={description:O.string,fullscreen:O.string,handleImageLoaded:O.func.isRequired,isFullscreen:O.bool,onImageError:O.func.isRequired,original:O.string.isRequired,originalAlt:O.string,originalHeight:O.string,originalWidth:O.string,originalTitle:O.string,sizes:O.string,srcSet:O.string,loading:O.string};const oh=jl;function _r(h){return _r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},_r(h)}function Pu(h,u){var g=Object.keys(h);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(h);u&&(x=x.filter(function(I){return Object.getOwnPropertyDescriptor(h,I).enumerable})),g.push.apply(g,x)}return g}function Nu(h){for(var u=1;u<arguments.length;u++){var g=arguments[u]!=null?arguments[u]:{};u%2?Pu(Object(g),!0).forEach(function(x){lh(h,x,g[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(g)):Pu(Object(g)).forEach(function(x){Object.defineProperty(h,x,Object.getOwnPropertyDescriptor(g,x))})}return h}function lh(h,u,g){return(u=function(x){var I=function(V,ne){if(_r(V)!=="object"||V===null)return V;var f=V[Symbol.toPrimitive];if(f!==void 0){var c=f.call(V,ne);if(_r(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(V)}(x,"string");return _r(I)==="symbol"?I:String(I)}(u))in h?Object.defineProperty(h,u,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[u]=g,h}var sh={left:m().createElement("polyline",{points:"15 18 9 12 15 6"}),right:m().createElement("polyline",{points:"9 18 15 12 9 6"}),maximize:m().createElement("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}),minimize:m().createElement("path",{d:"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}),play:m().createElement("polygon",{points:"5 3 19 12 5 21 5 3"}),pause:m().createElement(m().Fragment,null,m().createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),m().createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))},ah={strokeWidth:1,viewBox:"0 0 24 24"},ju=function(h){var u=Nu(Nu({},ah),h),g=u.strokeWidth,x=u.viewBox,I=u.icon;return m().createElement("svg",{className:"image-gallery-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:x,fill:"none",stroke:"currentColor",strokeWidth:g,strokeLinecap:"round",strokeLinejoin:"round"},sh[I])};ju.propTypes={strokeWidth:O.number,viewBox:O.string,icon:(0,O.oneOf)(["left","right","maximize","minimize","play","pause"]).isRequired};const zi=ju;var Il=m().memo(function(h){var u=h.isFullscreen,g=h.onClick;return m().createElement("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button",onClick:g,"aria-label":"Open Fullscreen"},m().createElement(zi,{strokeWidth:2,icon:u?"minimize":"maximize"}))});Il.displayName="Fullscreen",Il.propTypes={isFullscreen:O.bool.isRequired,onClick:O.func.isRequired};const uh=Il;var Ll=m().memo(function(h){var u=h.disabled,g=h.onClick;return m().createElement("button",{type:"button",className:"image-gallery-icon image-gallery-left-nav",disabled:u,onClick:g,"aria-label":"Previous Slide"},m().createElement(zi,{icon:"left",viewBox:"6 0 12 24"}))});Ll.displayName="LeftNav",Ll.propTypes={disabled:O.bool.isRequired,onClick:O.func.isRequired};const ch=Ll;var Rl=m().memo(function(h){var u=h.disabled,g=h.onClick;return m().createElement("button",{type:"button",className:"image-gallery-icon image-gallery-right-nav",disabled:u,onClick:g,"aria-label":"Next Slide"},m().createElement(zi,{icon:"right",viewBox:"6 0 12 24"}))});Rl.displayName="RightNav",Rl.propTypes={disabled:O.bool.isRequired,onClick:O.func.isRequired};const fh=Rl;var zl=m().memo(function(h){var u=h.isPlaying,g=h.onClick;return m().createElement("button",{type:"button",className:"image-gallery-icon image-gallery-play-button",onClick:g,"aria-label":"Play or Pause Slideshow"},m().createElement(zi,{strokeWidth:2,icon:u?"pause":"play"}))});zl.displayName="PlayPause",zl.propTypes={isPlaying:O.bool.isRequired,onClick:O.func.isRequired};const dh=zl;function Pr(h){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Pr(h)}function Ml(){return Ml=Object.assign?Object.assign.bind():function(h){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var x in g)Object.prototype.hasOwnProperty.call(g,x)&&(h[x]=g[x])}return h},Ml.apply(this,arguments)}function Iu(h,u){var g=Object.keys(h);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(h);u&&(x=x.filter(function(I){return Object.getOwnPropertyDescriptor(h,I).enumerable})),g.push.apply(g,x)}return g}function Lu(h){for(var u=1;u<arguments.length;u++){var g=arguments[u]!=null?arguments[u]:{};u%2?Iu(Object(g),!0).forEach(function(x){ph(h,x,g[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(g)):Iu(Object(g)).forEach(function(x){Object.defineProperty(h,x,Object.getOwnPropertyDescriptor(g,x))})}return h}function ph(h,u,g){return(u=function(x){var I=function(V,ne){if(Pr(V)!=="object"||V===null)return V;var f=V[Symbol.toPrimitive];if(f!==void 0){var c=f.call(V,ne);if(Pr(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(V)}(x,"string");return Pr(I)==="symbol"?I:String(I)}(u))in h?Object.defineProperty(h,u,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[u]=g,h}var hh={className:"",delta:0,onSwiping:function(){},onSwiped:function(){}},Ru=function(h){var u=Lu(Lu({},hh),h),g=u.children,x=u.className,I=nh({delta:u.delta,onSwiping:u.onSwiping,onSwiped:u.onSwiped});return m().createElement("div",Ml({},I,{className:x}),g)};Ru.propTypes={children:O.node.isRequired,className:O.string,delta:O.number,onSwiped:O.func,onSwiping:O.func};const zu=Ru;function Bn(h){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Bn(h)}function Mu(h,u){var g=Object.keys(h);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(h);u&&(x=x.filter(function(I){return Object.getOwnPropertyDescriptor(h,I).enumerable})),g.push.apply(g,x)}return g}function Du(h){for(var u=1;u<arguments.length;u++){var g=arguments[u]!=null?arguments[u]:{};u%2?Mu(Object(g),!0).forEach(function(x){Fu(h,x,g[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(g)):Mu(Object(g)).forEach(function(x){Object.defineProperty(h,x,Object.getOwnPropertyDescriptor(g,x))})}return h}function mh(h,u){for(var g=0;g<u.length;g++){var x=u[g];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(h,$u(x.key),x)}}function Dl(h,u){return Dl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,x){return g.__proto__=x,g},Dl(h,u)}function yh(h,u){if(u&&(Bn(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Te(h)}function Te(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function Mi(h){return Mi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Mi(h)}function Fu(h,u,g){return(u=$u(u))in h?Object.defineProperty(h,u,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[u]=g,h}function $u(h){var u=function(g,x){if(Bn(g)!=="object"||g===null)return g;var I=g[Symbol.toPrimitive];if(I!==void 0){var V=I.call(g,x);if(Bn(V)!=="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(h,"string");return Bn(u)==="symbol"?u:String(u)}var Au=["fullscreenchange","MSFullscreenChange","mozfullscreenchange","webkitfullscreenchange"],gh=(0,O.arrayOf)((0,O.shape)({srcSet:O.string,media:O.string}));function Wu(h){var u=parseInt(h.keyCode||h.which||0,10);return u===66||u===62}var Fl=function(h){(function(f,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(c&&c.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),Object.defineProperty(f,"prototype",{writable:!1}),c&&Dl(f,c)})(ne,h);var u,g,x,I,V=(x=ne,I=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var f,c=Mi(x);if(I){var T=Mi(this).constructor;f=Reflect.construct(c,arguments,T)}else f=c.apply(this,arguments);return yh(this,f)});function ne(f){var c;return function(T,_){if(!(T instanceof _))throw new TypeError("Cannot call a class as a function")}(this,ne),Fu(Te(c=V.call(this,f)),"onBulletClick",function(T,_){var L=c.props,j=L.onBulletClick,Y=L.items,K=c.state.currentIndex;T.target.blur(),K!==_&&(Y.length===2?c.slideToIndexWithStyleReset(_,T):c.slideToIndex(_,T)),j&&j(T,_)}),c.state={currentIndex:f.startIndex,thumbsTranslate:0,thumbsSwipedTranslate:0,currentSlideOffset:0,galleryWidth:0,thumbnailsWrapperWidth:0,thumbnailsWrapperHeight:0,thumbsStyle:{transition:"all ".concat(f.slideDuration,"ms ease-out")},isFullscreen:!1,isSwipingThumbnail:!1,isPlaying:!1},c.loadedImages={},c.imageGallery=m().createRef(),c.thumbnailsWrapper=m().createRef(),c.thumbnails=m().createRef(),c.imageGallerySlideWrapper=m().createRef(),c.handleImageLoaded=c.handleImageLoaded.bind(Te(c)),c.handleKeyDown=c.handleKeyDown.bind(Te(c)),c.handleMouseDown=c.handleMouseDown.bind(Te(c)),c.handleResize=c.handleResize.bind(Te(c)),c.handleTouchMove=c.handleTouchMove.bind(Te(c)),c.handleOnSwiped=c.handleOnSwiped.bind(Te(c)),c.handleScreenChange=c.handleScreenChange.bind(Te(c)),c.handleSwiping=c.handleSwiping.bind(Te(c)),c.handleThumbnailSwiping=c.handleThumbnailSwiping.bind(Te(c)),c.handleOnThumbnailSwiped=c.handleOnThumbnailSwiped.bind(Te(c)),c.onThumbnailMouseLeave=c.onThumbnailMouseLeave.bind(Te(c)),c.handleImageError=c.handleImageError.bind(Te(c)),c.pauseOrPlay=c.pauseOrPlay.bind(Te(c)),c.renderThumbInner=c.renderThumbInner.bind(Te(c)),c.renderItem=c.renderItem.bind(Te(c)),c.slideLeft=c.slideLeft.bind(Te(c)),c.slideRight=c.slideRight.bind(Te(c)),c.toggleFullScreen=c.toggleFullScreen.bind(Te(c)),c.togglePlay=c.togglePlay.bind(Te(c)),c.unthrottledSlideToIndex=c.slideToIndex,c.slideToIndex=G(c.unthrottledSlideToIndex,f.slideDuration,{trailing:!1}),f.lazyLoad&&(c.lazyLoaded=[]),c}return u=ne,g=[{key:"componentDidMount",value:function(){var f=this.props,c=f.autoPlay,T=f.useWindowKeyDown;c&&this.play(),T?window.addEventListener("keydown",this.handleKeyDown):this.imageGallery.current.addEventListener("keydown",this.handleKeyDown),window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.initSlideWrapperResizeObserver(this.imageGallerySlideWrapper),this.initThumbnailWrapperResizeObserver(this.thumbnailsWrapper),this.addScreenChangeEvent()}},{key:"componentDidUpdate",value:function(f,c){var T=this.props,_=T.items,L=T.lazyLoad,j=T.slideDuration,Y=T.slideInterval,K=T.startIndex,q=T.thumbnailPosition,F=T.showThumbnails,A=T.useWindowKeyDown,U=this.state,H=U.currentIndex,Z=U.isPlaying,le=f.items.length!==_.length,xe=!ye()(f.items,_),Ge=f.startIndex!==K,Ve=f.thumbnailPosition!==q,Re=f.showThumbnails!==F;Y===f.slideInterval&&j===f.slideDuration||Z&&(this.pause(),this.play()),Ve&&(this.removeResizeObserver(),this.initSlideWrapperResizeObserver(this.imageGallerySlideWrapper),this.initThumbnailWrapperResizeObserver(this.thumbnailsWrapper)),Re&&F&&this.initThumbnailWrapperResizeObserver(this.thumbnailsWrapper),Re&&!F&&this.removeThumbnailsResizeObserver(),(le||Re)&&this.handleResize(),c.currentIndex!==H&&this.slideThumbnailBar(),f.slideDuration!==j&&(this.slideToIndex=G(this.unthrottledSlideToIndex,j,{trailing:!1})),!L||f.lazyLoad&&!xe||(this.lazyLoaded=[]),A!==f.useWindowKeyDown&&(A?(this.imageGallery.current.removeEventListener("keydown",this.handleKeyDown),window.addEventListener("keydown",this.handleKeyDown)):(window.removeEventListener("keydown",this.handleKeyDown),this.imageGallery.current.addEventListener("keydown",this.handleKeyDown))),(Ge||xe)&&this.setState({currentIndex:K,slideStyle:{transition:"none"}})}},{key:"componentWillUnmount",value:function(){var f=this.props.useWindowKeyDown;window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("touchmove",this.handleTouchMove),this.removeScreenChangeEvent(),this.removeResizeObserver(),this.playPauseIntervalId&&(window.clearInterval(this.playPauseIntervalId),this.playPauseIntervalId=null),this.transitionTimer&&window.clearTimeout(this.transitionTimer),f?window.removeEventListener("keydown",this.handleKeyDown):this.imageGallery.current.removeEventListener("keydown",this.handleKeyDown)}},{key:"onSliding",value:function(){var f=this,c=this.state,T=c.currentIndex,_=c.isTransitioning,L=this.props,j=L.onSlide,Y=L.slideDuration;this.transitionTimer=window.setTimeout(function(){_&&(f.setState({isTransitioning:!_,isSwipingThumbnail:!1}),j&&j(T))},Y+50)}},{key:"onThumbnailClick",value:function(f,c){var T=this.props,_=T.onThumbnailClick,L=T.items,j=this.state.currentIndex;f.target.parentNode.parentNode.blur(),j!==c&&(L.length===2?this.slideToIndexWithStyleReset(c,f):this.slideToIndex(c,f)),_&&_(f,c)}},{key:"onThumbnailMouseOver",value:function(f,c){var T=this;this.thumbnailMouseOverTimer&&(window.clearTimeout(this.thumbnailMouseOverTimer),this.thumbnailMouseOverTimer=null),this.thumbnailMouseOverTimer=window.setTimeout(function(){T.slideToIndex(c),T.pause()},300)}},{key:"onThumbnailMouseLeave",value:function(){if(this.thumbnailMouseOverTimer){var f=this.props.autoPlay;window.clearTimeout(this.thumbnailMouseOverTimer),this.thumbnailMouseOverTimer=null,f&&this.play()}}},{key:"setThumbsTranslate",value:function(f){this.setState({thumbsTranslate:f})}},{key:"setModalFullscreen",value:function(f){var c=this.props.onScreenChange;this.setState({modalFullscreen:f}),c&&c(f)}},{key:"getThumbsTranslate",value:function(f){var c,T=this.props,_=T.disableThumbnailScroll,L=T.items,j=this.state,Y=j.thumbnailsWrapperWidth,K=j.thumbnailsWrapperHeight,q=this.thumbnails&&this.thumbnails.current;if(_)return 0;if(q){if(this.isThumbnailVertical()){if(q.scrollHeight<=K)return 0;c=q.scrollHeight-K}else{if(q.scrollWidth<=Y||Y<=0)return 0;c=q.scrollWidth-Y}return f*(c/(L.length-1))}return 0}},{key:"getThumbnailPositionClassName",value:function(f){switch(f){case"left":f=" ".concat("image-gallery-thumbnails-left");break;case"right":f=" ".concat("image-gallery-thumbnails-right");break;case"bottom":f=" ".concat("image-gallery-thumbnails-bottom");break;case"top":f=" ".concat("image-gallery-thumbnails-top")}return f}},{key:"getAlignmentClassName",value:function(f){var c=this.state.currentIndex,T=this.props,_=T.infinite,L=T.items,j="",Y="image-gallery-left",K="image-gallery-right";switch(f){case c-1:j=" ".concat(Y);break;case c:j=" ".concat("image-gallery-center");break;case c+1:j=" ".concat(K)}return L.length>=3&&_&&(f===0&&c===L.length-1?j=" ".concat(K):f===L.length-1&&c===0&&(j=" ".concat(Y))),j}},{key:"getTranslateXForTwoSlide",value:function(f){var c=this.state,T=c.currentIndex,_=c.currentSlideOffset,L=c.previousIndex,j=T!==L,Y=f===0&&L===0,K=f===1&&L===1,q=f===0&&T===1,F=f===1&&T===0,A=_===0,U=-100*T+100*f+_;return _>0?this.direction="left":_<0&&(this.direction="right"),F&&_>0&&(U=-100+_),q&&_<0&&(U=100+_),j?Y&&A&&this.direction==="left"?U=100:K&&A&&this.direction==="right"&&(U=-100):(F&&A&&this.direction==="left"&&(U=-100),q&&A&&this.direction==="right"&&(U=100)),U}},{key:"getThumbnailBarHeight",value:function(){return this.isThumbnailVertical()?{height:this.state.gallerySlideWrapperHeight}:{}}},{key:"getSlideStyle",value:function(f){var c=this.state,T=c.currentIndex,_=c.currentSlideOffset,L=c.slideStyle,j=this.props,Y=j.infinite,K=j.items,q=j.useTranslate3D,F=j.isRTL,A=-100*T,U=K.length-1,H=(A+100*f)*(F?-1:1)+_;Y&&K.length>2&&(T===0&&f===U?H=-100*(F?-1:1)+_:T===U&&f===0&&(H=100*(F?-1:1)+_)),Y&&K.length===2&&(H=this.getTranslateXForTwoSlide(f));var Z="translate(".concat(H,"%, 0)");return q&&(Z="translate3d(".concat(H,"%, 0, 0)")),Du({display:this.isSlideVisible(f)?"inherit":"none",WebkitTransform:Z,MozTransform:Z,msTransform:Z,OTransform:Z,transform:Z},L)}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"getThumbnailStyle",value:function(){var f,c=this.props,T=c.useTranslate3D,_=c.isRTL,L=this.state,j=L.thumbsTranslate,Y=L.thumbsStyle,K=_?-1*j:j;return this.isThumbnailVertical()?(f="translate(0, ".concat(j,"px)"),T&&(f="translate3d(0, ".concat(j,"px, 0)"))):(f="translate(".concat(K,"px, 0)"),T&&(f="translate3d(".concat(K,"px, 0, 0)"))),Du({WebkitTransform:f,MozTransform:f,msTransform:f,OTransform:f,transform:f},Y)}},{key:"getSlideItems",value:function(){var f=this,c=this.state.currentIndex,T=this.props,_=T.items,L=T.slideOnThumbnailOver,j=T.onClick,Y=T.lazyLoad,K=T.onTouchMove,q=T.onTouchEnd,F=T.onTouchStart,A=T.onMouseOver,U=T.onMouseLeave,H=T.renderItem,Z=T.renderThumbInner,le=T.showThumbnails,xe=T.showBullets,Ge=[],Ve=[],Re=[];return _.forEach(function(ge,se){var Xt=f.getAlignmentClassName(se),Nr=ge.originalClass?" ".concat(ge.originalClass):"",jr=ge.thumbnailClass?" ".concat(ge.thumbnailClass):"",Ft=ge.renderItem||H||f.renderItem,kn=ge.renderThumbInner||Z||f.renderThumbInner,bt=!Y||Xt||f.lazyLoaded[se];bt&&Y&&!f.lazyLoaded[se]&&(f.lazyLoaded[se]=!0);var Un=f.getSlideStyle(se),Ir=m().createElement("div",{"aria-label":"Go to Slide ".concat(se+1),key:"slide-".concat(se),tabIndex:"-1",className:"image-gallery-slide ".concat(Xt," ").concat(Nr),style:Un,onClick:j,onKeyUp:f.handleSlideKeyUp,onTouchMove:K,onTouchEnd:q,onTouchStart:F,onMouseOver:A,onFocus:A,onMouseLeave:U,role:"button"},bt?Ft(ge):m().createElement("div",{style:{height:"100%"}}));if(Ge.push(Ir),le&&ge.thumbnail){var Vn=a("image-gallery-thumbnail",jr,{active:c===se});Ve.push(m().createElement("button",{key:"thumbnail-".concat(se),type:"button",tabIndex:"0","aria-pressed":c===se?"true":"false","aria-label":"Go to Slide ".concat(se+1),className:Vn,onMouseLeave:L?f.onThumbnailMouseLeave:null,onMouseOver:function(rt){return f.handleThumbnailMouseOver(rt,se)},onFocus:function(rt){return f.handleThumbnailMouseOver(rt,se)},onKeyUp:function(rt){return f.handleThumbnailKeyUp(rt,se)},onClick:function(rt){return f.onThumbnailClick(rt,se)}},kn(ge)))}if(xe){var Lr=a("image-gallery-bullet",ge.bulletClass,{active:c===se});Re.push(m().createElement("button",{type:"button",key:"bullet-".concat(se),className:Lr,onClick:function(rt){return f.onBulletClick(rt,se)},"aria-pressed":c===se?"true":"false","aria-label":"Go to Slide ".concat(se+1)}))}}),{slides:Ge,thumbnails:Ve,bullets:Re}}},{key:"ignoreIsTransitioning",value:function(){var f=this.props.items,c=this.state,T=c.previousIndex,_=c.currentIndex,L=f.length-1;return Math.abs(T-_)>1&&!(T===0&&_===L)&&!(T===L&&_===0)}},{key:"isFirstOrLastSlide",value:function(f){return f===this.props.items.length-1||f===0}},{key:"slideIsTransitioning",value:function(f){var c=this.state,T=c.isTransitioning,_=c.previousIndex,L=c.currentIndex;return T&&!(f===_||f===L)}},{key:"isSlideVisible",value:function(f){return!this.slideIsTransitioning(f)||this.ignoreIsTransitioning()&&!this.isFirstOrLastSlide(f)}},{key:"slideThumbnailBar",value:function(){var f=this.state,c=f.currentIndex,T=f.isSwipingThumbnail,_=-this.getThumbsTranslate(c);T||(c===0?this.setState({thumbsTranslate:0,thumbsSwipedTranslate:0}):this.setState({thumbsTranslate:_,thumbsSwipedTranslate:_}))}},{key:"canSlide",value:function(){return this.props.items.length>=2}},{key:"canSlideLeft",value:function(){return this.props.infinite||this.canSlidePrevious()}},{key:"canSlideRight",value:function(){return this.props.infinite||this.canSlideNext()}},{key:"canSlidePrevious",value:function(){return this.state.currentIndex>0}},{key:"canSlideNext",value:function(){return this.state.currentIndex<this.props.items.length-1}},{key:"handleSwiping",value:function(f){var c=f.event,T=f.absX,_=f.dir,L=this.props,j=L.disableSwipe,Y=L.stopPropagation,K=this.state,q=K.galleryWidth,F=K.isTransitioning,A=K.swipingUpDown,U=K.swipingLeftRight;if(_!==An&&_!==xn&&!A||U){if(_!==$n&&_!==Sn||U||this.setState({swipingLeftRight:!0}),!j){var H=this.props.swipingTransitionDuration;if(Y&&c.preventDefault(),F)this.setState({currentSlideOffset:0});else{var Z=_===Sn?1:-1,le=T/q*100;Math.abs(le)>=100&&(le=100);var xe={transition:"transform ".concat(H,"ms ease-out")};this.setState({currentSlideOffset:Z*le,slideStyle:xe})}}}else A||this.setState({swipingUpDown:!0})}},{key:"handleThumbnailSwiping",value:function(f){var c=f.event,T=f.absX,_=f.absY,L=f.dir,j=this.props,Y=j.stopPropagation,K=j.swipingThumbnailTransitionDuration,q=this.state,F=q.thumbsSwipedTranslate,A=q.thumbnailsWrapperHeight,U=q.thumbnailsWrapperWidth,H=q.swipingUpDown,Z=q.swipingLeftRight;if(this.isThumbnailVertical()){if((L===$n||L===Sn||Z)&&!H)return void(Z||this.setState({swipingLeftRight:!0}));L!==An&&L!==xn||H||this.setState({swipingUpDown:!0})}else{if((L===An||L===xn||H)&&!Z)return void(H||this.setState({swipingUpDown:!0}));L!==$n&&L!==Sn||Z||this.setState({swipingLeftRight:!0})}var le,xe,Ge,Ve,Re,ge=this.thumbnails&&this.thumbnails.current;if(this.isThumbnailVertical()?(le=F+(L===xn?_:-_),xe=ge.scrollHeight-A+20,Ge=Math.abs(le)>xe,Ve=le>20,Re=ge.scrollHeight<=A):(le=F+(L===Sn?T:-T),xe=ge.scrollWidth-U+20,Ge=Math.abs(le)>xe,Ve=le>20,Re=ge.scrollWidth<=U),!Re&&(L!==$n&&L!==An||!Ge)&&(L!==Sn&&L!==xn||!Ve)){Y&&c.stopPropagation();var se={transition:"transform ".concat(K,"ms ease-out")};this.setState({thumbsTranslate:le,thumbsStyle:se})}}},{key:"handleOnThumbnailSwiped",value:function(){var f=this.state.thumbsTranslate,c=this.props.slideDuration;this.resetSwipingDirection(),this.setState({isSwipingThumbnail:!0,thumbsSwipedTranslate:f,thumbsStyle:{transition:"all ".concat(c,"ms ease-out")}})}},{key:"sufficientSwipe",value:function(){var f=this.state.currentSlideOffset,c=this.props.swipeThreshold;return Math.abs(f)>c}},{key:"resetSwipingDirection",value:function(){var f=this.state,c=f.swipingUpDown,T=f.swipingLeftRight;c&&this.setState({swipingUpDown:!1}),T&&this.setState({swipingLeftRight:!1})}},{key:"handleOnSwiped",value:function(f){var c=f.event,T=f.dir,_=f.velocity,L=this.props,j=L.disableSwipe,Y=L.stopPropagation,K=L.flickThreshold;if(!j){var q=this.props.isRTL;Y&&c.stopPropagation(),this.resetSwipingDirection();var F=(T===$n?1:-1)*(q?-1:1),A=_>K&&!(T===An||T===xn);this.handleOnSwipedTo(F,A)}}},{key:"handleOnSwipedTo",value:function(f,c){var T=this.state,_=T.currentIndex,L=T.isTransitioning,j=_;!this.sufficientSwipe()&&!c||L||(j+=f),(f===-1&&!this.canSlideLeft()||f===1&&!this.canSlideRight())&&(j=_),this.unthrottledSlideToIndex(j)}},{key:"handleTouchMove",value:function(f){this.state.swipingLeftRight&&f.preventDefault()}},{key:"handleMouseDown",value:function(){this.imageGallery.current.classList.add("image-gallery-using-mouse")}},{key:"handleKeyDown",value:function(f){var c=this.props,T=c.disableKeyDown,_=c.useBrowserFullscreen,L=this.state.isFullscreen;if(this.imageGallery.current.classList.remove("image-gallery-using-mouse"),!T)switch(parseInt(f.keyCode||f.which||0,10)){case 37:this.canSlideLeft()&&!this.playPauseIntervalId&&this.slideLeft(f);break;case 39:this.canSlideRight()&&!this.playPauseIntervalId&&this.slideRight(f);break;case 27:L&&!_&&this.exitFullScreen()}}},{key:"handleImageError",value:function(f){var c=this.props.onErrorImageURL;c&&f.target.src.indexOf(c)===-1&&(f.target.src=c)}},{key:"removeThumbnailsResizeObserver",value:function(){this.resizeThumbnailWrapperObserver&&this.thumbnailsWrapper&&this.thumbnailsWrapper.current&&(this.resizeThumbnailWrapperObserver.unobserve(this.thumbnailsWrapper.current),this.resizeThumbnailWrapperObserver=null)}},{key:"removeResizeObserver",value:function(){this.resizeSlideWrapperObserver&&this.imageGallerySlideWrapper&&this.imageGallerySlideWrapper.current&&(this.resizeSlideWrapperObserver.unobserve(this.imageGallerySlideWrapper.current),this.resizeSlideWrapperObserver=null),this.removeThumbnailsResizeObserver()}},{key:"handleResize",value:function(){var f=this.state.currentIndex;this.imageGallery&&(this.imageGallery&&this.imageGallery.current&&this.setState({galleryWidth:this.imageGallery.current.offsetWidth}),this.imageGallerySlideWrapper&&this.imageGallerySlideWrapper.current&&this.setState({gallerySlideWrapperHeight:this.imageGallerySlideWrapper.current.offsetHeight}),this.setThumbsTranslate(-this.getThumbsTranslate(f)))}},{key:"initSlideWrapperResizeObserver",value:function(f){var c=this;f&&!f.current||(this.resizeSlideWrapperObserver=new Eu(W(function(T){T&&T.forEach(function(_){c.setState({thumbnailsWrapperWidth:_.contentRect.width},c.handleResize)})},50)),this.resizeSlideWrapperObserver.observe(f.current))}},{key:"initThumbnailWrapperResizeObserver",value:function(f){var c=this;f&&!f.current||(this.resizeThumbnailWrapperObserver=new Eu(W(function(T){T&&T.forEach(function(_){c.setState({thumbnailsWrapperHeight:_.contentRect.height},c.handleResize)})},50)),this.resizeThumbnailWrapperObserver.observe(f.current))}},{key:"toggleFullScreen",value:function(){this.state.isFullscreen?this.exitFullScreen():this.fullScreen()}},{key:"togglePlay",value:function(){this.playPauseIntervalId?this.pause():this.play()}},{key:"handleScreenChange",value:function(){var f=this.props,c=f.onScreenChange,T=f.useBrowserFullscreen,_=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement,L=this.imageGallery.current===_;c&&c(L),T&&this.setState({isFullscreen:L})}},{key:"slideToIndex",value:function(f,c){var T=this.state,_=T.currentIndex,L=T.isTransitioning,j=this.props,Y=j.items,K=j.slideDuration,q=j.onBeforeSlide;if(!L){c&&this.playPauseIntervalId&&(this.pause(!1),this.play(!1));var F=Y.length-1,A=f;f<0?A=F:f>F&&(A=0),q&&A!==_&&q(A),this.setState({previousIndex:_,currentIndex:A,isTransitioning:A!==_,currentSlideOffset:0,slideStyle:{transition:"all ".concat(K,"ms ease-out")}},this.onSliding)}}},{key:"slideLeft",value:function(f){var c=this.props.isRTL;this.slideTo(f,c?"right":"left")}},{key:"slideRight",value:function(f){var c=this.props.isRTL;this.slideTo(f,c?"left":"right")}},{key:"slideTo",value:function(f,c){var T=this.state,_=T.currentIndex,L=T.isTransitioning,j=this.props.items,Y=_+(c==="left"?-1:1);L||(j.length===2?this.slideToIndexWithStyleReset(Y,f):this.slideToIndex(Y,f))}},{key:"slideToIndexWithStyleReset",value:function(f,c){var T=this,_=this.state,L=_.currentIndex,j=_.currentSlideOffset;this.setState({currentSlideOffset:j+(L>f?.001:-.001),slideStyle:{transition:"none"}},function(){window.setTimeout(function(){return T.slideToIndex(f,c)},25)})}},{key:"handleThumbnailMouseOver",value:function(f,c){this.props.slideOnThumbnailOver&&this.onThumbnailMouseOver(f,c)}},{key:"handleThumbnailKeyUp",value:function(f,c){Wu(f)&&this.onThumbnailClick(f,c)}},{key:"handleSlideKeyUp",value:function(f){Wu(f)&&(0,this.props.onClick)(f)}},{key:"isThumbnailVertical",value:function(){var f=this.props.thumbnailPosition;return f==="left"||f==="right"}},{key:"addScreenChangeEvent",value:function(){var f=this;Au.forEach(function(c){document.addEventListener(c,f.handleScreenChange)})}},{key:"removeScreenChangeEvent",value:function(){var f=this;Au.forEach(function(c){document.removeEventListener(c,f.handleScreenChange)})}},{key:"fullScreen",value:function(){var f=this.props.useBrowserFullscreen,c=this.imageGallery.current;f?c.requestFullscreen?c.requestFullscreen():c.msRequestFullscreen?c.msRequestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullscreen?c.webkitRequestFullscreen():this.setModalFullscreen(!0):this.setModalFullscreen(!0),this.setState({isFullscreen:!0})}},{key:"exitFullScreen",value:function(){var f=this.state.isFullscreen,c=this.props.useBrowserFullscreen;f&&(c?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this.setModalFullscreen(!1):this.setModalFullscreen(!1),this.setState({isFullscreen:!1}))}},{key:"pauseOrPlay",value:function(){var f=this.props.infinite,c=this.state.currentIndex;f||this.canSlideRight()?this.slideToIndex(c+1):this.pause()}},{key:"play",value:function(){var f=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],c=this.props,T=c.onPlay,_=c.slideInterval,L=c.slideDuration,j=this.state.currentIndex;this.playPauseIntervalId||(this.setState({isPlaying:!0}),this.playPauseIntervalId=window.setInterval(this.pauseOrPlay,Math.max(_,L)),T&&f&&T(j))}},{key:"pause",value:function(){var f=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],c=this.props.onPause,T=this.state.currentIndex;this.playPauseIntervalId&&(window.clearInterval(this.playPauseIntervalId),this.playPauseIntervalId=null,this.setState({isPlaying:!1}),c&&f&&c(T))}},{key:"isImageLoaded",value:function(f){return!!this.loadedImages[f.original]||(this.loadedImages[f.original]=!0,!1)}},{key:"handleImageLoaded",value:function(f,c){var T=this.props.onImageLoad;!this.loadedImages[c]&&T&&(this.loadedImages[c]=!0,T(f))}},{key:"renderItem",value:function(f){var c=this.state.isFullscreen,T=this.props.onImageError||this.handleImageError;return m().createElement(oh,{description:f.description,fullscreen:f.fullscreen,handleImageLoaded:this.handleImageLoaded,isFullscreen:c,onImageError:T,original:f.original,originalAlt:f.originalAlt,originalHeight:f.originalHeight,originalWidth:f.originalWidth,originalTitle:f.originalTitle,sizes:f.sizes,loading:f.loading,srcSet:f.srcSet})}},{key:"renderThumbInner",value:function(f){var c=this.props.onThumbnailError||this.handleImageError;return m().createElement("span",{className:"image-gallery-thumbnail-inner"},m().createElement("img",{className:"image-gallery-thumbnail-image",src:f.thumbnail,height:f.thumbnailHeight,width:f.thumbnailWidth,alt:f.thumbnailAlt,title:f.thumbnailTitle,loading:f.thumbnailLoading,onError:c}),f.thumbnailLabel&&m().createElement("div",{className:"image-gallery-thumbnail-label"},f.thumbnailLabel))}},{key:"render",value:function(){var f=this.state,c=f.currentIndex,T=f.isFullscreen,_=f.modalFullscreen,L=f.isPlaying,j=this.props,Y=j.additionalClass,K=j.disableThumbnailSwipe,q=j.indexSeparator,F=j.isRTL,A=j.items,U=j.thumbnailPosition,H=j.renderFullscreenButton,Z=j.renderCustomControls,le=j.renderLeftNav,xe=j.renderRightNav,Ge=j.showBullets,Ve=j.showFullscreenButton,Re=j.showIndex,ge=j.showThumbnails,se=j.showNav,Xt=j.showPlayButton,Nr=j.renderPlayPauseButton,jr=this.getThumbnailStyle(),Ft=this.getSlideItems(),kn=Ft.slides,bt=Ft.thumbnails,Un=Ft.bullets,Ir=a("image-gallery-slide-wrapper",this.getThumbnailPositionClassName(U),{"image-gallery-rtl":F}),Vn=m().createElement("div",{ref:this.imageGallerySlideWrapper,className:Ir},Z&&Z(),this.canSlide()?m().createElement(m().Fragment,null,se&&m().createElement(m().Fragment,null,le(this.slideLeft,!this.canSlideLeft()),xe(this.slideRight,!this.canSlideRight())),m().createElement(zu,{className:"image-gallery-swipe",delta:0,onSwiping:this.handleSwiping,onSwiped:this.handleOnSwiped},m().createElement("div",{className:"image-gallery-slides"},kn))):m().createElement("div",{className:"image-gallery-slides"},kn),Xt&&Nr(this.togglePlay,L),Ge&&m().createElement("div",{className:"image-gallery-bullets"},m().createElement("div",{className:"image-gallery-bullets-container",role:"navigation","aria-label":"Bullet Navigation"},Un)),Ve&&H(this.toggleFullScreen,T),Re&&m().createElement("div",{className:"image-gallery-index"},m().createElement("span",{className:"image-gallery-index-current"},c+1),m().createElement("span",{className:"image-gallery-index-separator"},q),m().createElement("span",{className:"image-gallery-index-total"},A.length))),Lr=a("image-gallery",Y,{"fullscreen-modal":_}),rt=a("image-gallery-content",this.getThumbnailPositionClassName(U),{fullscreen:T}),wh=a("image-gallery-thumbnails-wrapper",this.getThumbnailPositionClassName(U),{"thumbnails-wrapper-rtl":!this.isThumbnailVertical()&&F},{"thumbnails-swipe-horizontal":!this.isThumbnailVertical()&&!K},{"thumbnails-swipe-vertical":this.isThumbnailVertical()&&!K});return m().createElement("div",{ref:this.imageGallery,className:Lr,"aria-live":"polite"},m().createElement("div",{className:rt},(U==="bottom"||U==="right")&&Vn,ge&&bt.length>0?m().createElement(zu,{className:wh,delta:0,onSwiping:!K&&this.handleThumbnailSwiping,onSwiped:!K&&this.handleOnThumbnailSwiped},m().createElement("div",{className:"image-gallery-thumbnails",ref:this.thumbnailsWrapper,style:this.getThumbnailBarHeight()},m().createElement("nav",{ref:this.thumbnails,className:"image-gallery-thumbnails-container",style:jr,"aria-label":"Thumbnail Navigation"},bt))):null,(U==="top"||U==="left")&&Vn))}}],g&&mh(u.prototype,g),Object.defineProperty(u,"prototype",{writable:!1}),ne}(m().Component);Fl.propTypes={flickThreshold:O.number,items:(0,O.arrayOf)((0,O.shape)({bulletClass:O.string,bulletOnClick:O.func,description:O.string,original:O.string,originalHeight:O.number,originalWidth:O.number,loading:O.string,thumbnailHeight:O.number,thumbnailWidth:O.number,thumbnailLoading:O.string,fullscreen:O.string,originalAlt:O.string,originalTitle:O.string,thumbnail:O.string,thumbnailAlt:O.string,thumbnailLabel:O.string,thumbnailTitle:O.string,originalClass:O.string,thumbnailClass:O.string,renderItem:O.func,renderThumbInner:O.func,imageSet:gh,srcSet:O.string,sizes:O.string})).isRequired,showNav:O.bool,autoPlay:O.bool,lazyLoad:O.bool,infinite:O.bool,showIndex:O.bool,showBullets:O.bool,showThumbnails:O.bool,showPlayButton:O.bool,showFullscreenButton:O.bool,disableThumbnailScroll:O.bool,disableKeyDown:O.bool,disableSwipe:O.bool,disableThumbnailSwipe:O.bool,useBrowserFullscreen:O.bool,onErrorImageURL:O.string,indexSeparator:O.string,thumbnailPosition:(0,O.oneOf)(["top","bottom","left","right"]),startIndex:O.number,slideDuration:O.number,slideInterval:O.number,slideOnThumbnailOver:O.bool,swipeThreshold:O.number,swipingTransitionDuration:O.number,swipingThumbnailTransitionDuration:O.number,onSlide:O.func,onBeforeSlide:O.func,onScreenChange:O.func,onPause:O.func,onPlay:O.func,onClick:O.func,onImageLoad:O.func,onImageError:O.func,onTouchMove:O.func,onTouchEnd:O.func,onTouchStart:O.func,onMouseOver:O.func,onMouseLeave:O.func,onBulletClick:O.func,onThumbnailError:O.func,onThumbnailClick:O.func,renderCustomControls:O.func,renderLeftNav:O.func,renderRightNav:O.func,renderPlayPauseButton:O.func,renderFullscreenButton:O.func,renderItem:O.func,renderThumbInner:O.func,stopPropagation:O.bool,additionalClass:O.string,useTranslate3D:O.bool,isRTL:O.bool,useWindowKeyDown:O.bool},Fl.defaultProps={onErrorImageURL:"",additionalClass:"",showNav:!0,autoPlay:!1,lazyLoad:!1,infinite:!0,showIndex:!1,showBullets:!1,showThumbnails:!0,showPlayButton:!0,showFullscreenButton:!0,disableThumbnailScroll:!1,disableKeyDown:!1,disableSwipe:!1,disableThumbnailSwipe:!1,useTranslate3D:!0,isRTL:!1,useBrowserFullscreen:!0,flickThreshold:.4,stopPropagation:!1,indexSeparator:" / ",thumbnailPosition:"bottom",startIndex:0,slideDuration:450,swipingTransitionDuration:0,swipingThumbnailTransitionDuration:0,onSlide:null,onBeforeSlide:null,onScreenChange:null,onPause:null,onPlay:null,onClick:null,onImageLoad:null,onImageError:null,onTouchMove:null,onTouchEnd:null,onTouchStart:null,onMouseOver:null,onMouseLeave:null,onBulletClick:null,onThumbnailError:null,onThumbnailClick:null,renderCustomControls:null,renderThumbInner:null,renderItem:null,slideInterval:3e3,slideOnThumbnailOver:!1,swipeThreshold:30,renderLeftNav:function(h,u){return m().createElement(ch,{onClick:h,disabled:u})},renderRightNav:function(h,u){return m().createElement(fh,{onClick:h,disabled:u})},renderPlayPauseButton:function(h,u){return m().createElement(dh,{onClick:h,isPlaying:u})},renderFullscreenButton:function(h,u){return m().createElement(uh,{onClick:h,isFullscreen:u})},useWindowKeyDown:!0};const vh=Fl})(),l})())})(Gp);var Gg=Gp.exports;const Xg=uf(Gg);function qg({galleryRef:e}){const t=[{original:"/living-1.jpeg",thumbnail:"/living-1.png"},{original:"/living-3.jpeg",thumbnail:"/living-3.jpeg"},{original:"/living-2.png",thumbnail:"/living-2.png"},{original:"/dinning.jpeg",thumbnail:"/dinning.jpeg"},{original:"/bedroom-1.jpeg",thumbnail:"/bedroom-1.jpeg"},{original:"/bathroom-on-suite.jpeg",thumbnail:"/bathroom-on-suite.jpeg"},{original:"/bedroom-2.jpeg",thumbnail:"/bedroom-2.jpeg"},{original:"/bedroom-3.jpeg",thumbnail:"/bedroom-3.jpeg"},{original:"/bathroom-2.png",thumbnail:"/bathroom-2.png"}];return $.jsxs("div",{ref:e,className:"bg-neutral-50 my-4 py-8 px-4 sm:rounded-lg sm:shadow-xl md:p-12",children:[$.jsx(Mt,{direction:"down",children:$.jsx("h3",{className:"text-2xl text-secondary my-4 md:text-3xl",children:"Galería"})}),$.jsx(Mt,{children:$.jsx(Xg,{items:t,showPlayButton:!1,showNav:!1,showBullets:!0})})]})}function Zg({contactRef:e}){return $.jsxs("div",{ref:e,className:"bg-neutral-50 pt-4 pb-6 px-4 flex flex-col items-center justify-center gap-2 h-[300px] sm:rounded-t-lg",children:[$.jsx(Mt,{direction:"down",children:$.jsx("h3",{className:"text-2xl text-secondary md:text-3xl",children:"Haz una reserva"})}),$.jsxs(Mt,{cascade:!0,children:[$.jsx("p",{className:"text-primary md:text-lg max-w-[500px]",children:"¡Reserva tu escapada perfecta hoy mismo y descubre todo lo que nuestro encantador departamento tiene para ofrecer!"}),$.jsxs("p",{className:"text-primary md:text-lg",children:["No esperes más y contáctanos"," ",$.jsx("a",{href:"https://wa.me/+584168840028",target:"_blank",className:"inline-block underline hover:transition-all hover:text-light hover:scale-125 hover:-translate-y-2",children:"aquí"})]}),$.jsx("p",{className:"text-primary md:text-lg",children:"Estaremos felices de atenderte y despejar todas tus dudas"})]})]})}function Jg(){return $.jsx("div",{className:"h-[60px] flex items-center justify-center bg-dark text-secondary sm:rounded-b-lg",children:"Porto Santo Inn 2024 © Todos los derechos reservados"})}function ev(){const e=J.useRef(null),t=J.useRef(null),n=J.useRef(null),r=J.useRef(null),i=o=>{window.scrollTo({top:o.offsetTop-50,left:0,behavior:"smooth"})};return $.jsxs("div",{className:"bg-transparent mx-auto text-center max-w-[1000px] sm:rounded-lg shadow-lg my-4",children:[$.jsx(Lg,{headerRef:e}),$.jsx(Rg,{handleScroll:i,headerRef:e,overviewRef:t,galleryRef:n,contactRef:r}),$.jsx($g,{}),$.jsx(Yg,{overviewRef:t}),$.jsx(qg,{galleryRef:n}),$.jsx(Zg,{contactRef:r}),$.jsx(Jg,{})]})}ps.createRoot(document.getElementById("root")).render($.jsx(Yr.StrictMode,{children:$.jsx(ev,{})}));
