var i$=Object.defineProperty;var s$=(t,r,i)=>r in t?i$(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;var as=(t,r,i)=>(s$(t,typeof r!="symbol"?r+"":r,i),i);function a$(t,r){for(var i=0;i<r.length;i++){const l=r[i];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in t)){const p=Object.getOwnPropertyDescriptor(l,u);p&&Object.defineProperty(t,u,p.get?p:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ws(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var QM={exports:{}},Sw={},ZM={exports:{}},kt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=Symbol.for("react.element"),l$=Symbol.for("react.portal"),c$=Symbol.for("react.fragment"),d$=Symbol.for("react.strict_mode"),u$=Symbol.for("react.profiler"),h$=Symbol.for("react.provider"),p$=Symbol.for("react.context"),f$=Symbol.for("react.forward_ref"),m$=Symbol.for("react.suspense"),g$=Symbol.for("react.memo"),b$=Symbol.for("react.lazy"),XT=Symbol.iterator;function w$(t){return t===null||typeof t!="object"?null:(t=XT&&t[XT]||t["@@iterator"],typeof t=="function"?t:null)}var JM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},XM=Object.assign,e5={};function Bu(t,r,i){this.props=t,this.context=r,this.refs=e5,this.updater=i||JM}Bu.prototype.isReactComponent={};Bu.prototype.setState=function(t,r){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,r,"setState")};Bu.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t5(){}t5.prototype=Bu.prototype;function qA(t,r,i){this.props=t,this.context=r,this.refs=e5,this.updater=i||JM}var GA=qA.prototype=new t5;GA.constructor=qA;XM(GA,Bu.prototype);GA.isPureReactComponent=!0;var eN=Array.isArray,n5=Object.prototype.hasOwnProperty,KA={current:null},r5={key:!0,ref:!0,__self:!0,__source:!0};function o5(t,r,i){var l,u={},p=null,m=null;if(r!=null)for(l in r.ref!==void 0&&(m=r.ref),r.key!==void 0&&(p=""+r.key),r)n5.call(r,l)&&!r5.hasOwnProperty(l)&&(u[l]=r[l]);var w=arguments.length-2;if(w===1)u.children=i;else if(1<w){for(var b=Array(w),y=0;y<w;y++)b[y]=arguments[y+2];u.children=b}if(t&&t.defaultProps)for(l in w=t.defaultProps,w)u[l]===void 0&&(u[l]=w[l]);return{$$typeof:tf,type:t,key:p,ref:m,props:u,_owner:KA.current}}function k$(t,r){return{$$typeof:tf,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}function YA(t){return typeof t=="object"&&t!==null&&t.$$typeof===tf}function v$(t){var r={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return r[i]})}var tN=/\/+/g;function x0(t,r){return typeof t=="object"&&t!==null&&t.key!=null?v$(""+t.key):r.toString(36)}function ig(t,r,i,l,u){var p=typeof t;(p==="undefined"||p==="boolean")&&(t=null);var m=!1;if(t===null)m=!0;else switch(p){case"string":case"number":m=!0;break;case"object":switch(t.$$typeof){case tf:case l$:m=!0}}if(m)return m=t,u=u(m),t=l===""?"."+x0(m,0):l,eN(u)?(i="",t!=null&&(i=t.replace(tN,"$&/")+"/"),ig(u,r,i,"",function(y){return y})):u!=null&&(YA(u)&&(u=k$(u,i+(!u.key||m&&m.key===u.key?"":(""+u.key).replace(tN,"$&/")+"/")+t)),r.push(u)),1;if(m=0,l=l===""?".":l+":",eN(t))for(var w=0;w<t.length;w++){p=t[w];var b=l+x0(p,w);m+=ig(p,r,i,b,u)}else if(b=w$(t),typeof b=="function")for(t=b.call(t),w=0;!(p=t.next()).done;)p=p.value,b=l+x0(p,w++),m+=ig(p,r,i,b,u);else if(p==="object")throw r=String(t),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return m}function Dm(t,r,i){if(t==null)return t;var l=[],u=0;return ig(t,l,"","",function(p){return r.call(i,p,u++)}),l}function y$(t){if(t._status===-1){var r=t._result;r=r(),r.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=r)}if(t._status===1)return t._result.default;throw t._result}var Hr={current:null},sg={transition:null},C$={ReactCurrentDispatcher:Hr,ReactCurrentBatchConfig:sg,ReactCurrentOwner:KA};kt.Children={map:Dm,forEach:function(t,r,i){Dm(t,function(){r.apply(this,arguments)},i)},count:function(t){var r=0;return Dm(t,function(){r++}),r},toArray:function(t){return Dm(t,function(r){return r})||[]},only:function(t){if(!YA(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};kt.Component=Bu;kt.Fragment=c$;kt.Profiler=u$;kt.PureComponent=qA;kt.StrictMode=d$;kt.Suspense=m$;kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C$;kt.cloneElement=function(t,r,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var l=XM({},t.props),u=t.key,p=t.ref,m=t._owner;if(r!=null){if(r.ref!==void 0&&(p=r.ref,m=KA.current),r.key!==void 0&&(u=""+r.key),t.type&&t.type.defaultProps)var w=t.type.defaultProps;for(b in r)n5.call(r,b)&&!r5.hasOwnProperty(b)&&(l[b]=r[b]===void 0&&w!==void 0?w[b]:r[b])}var b=arguments.length-2;if(b===1)l.children=i;else if(1<b){w=Array(b);for(var y=0;y<b;y++)w[y]=arguments[y+2];l.children=w}return{$$typeof:tf,type:t.type,key:u,ref:p,props:l,_owner:m}};kt.createContext=function(t){return t={$$typeof:p$,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h$,_context:t},t.Consumer=t};kt.createElement=o5;kt.createFactory=function(t){var r=o5.bind(null,t);return r.type=t,r};kt.createRef=function(){return{current:null}};kt.forwardRef=function(t){return{$$typeof:f$,render:t}};kt.isValidElement=YA;kt.lazy=function(t){return{$$typeof:b$,_payload:{_status:-1,_result:t},_init:y$}};kt.memo=function(t,r){return{$$typeof:g$,type:t,compare:r===void 0?null:r}};kt.startTransition=function(t){var r=sg.transition;sg.transition={};try{t()}finally{sg.transition=r}};kt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};kt.useCallback=function(t,r){return Hr.current.useCallback(t,r)};kt.useContext=function(t){return Hr.current.useContext(t)};kt.useDebugValue=function(){};kt.useDeferredValue=function(t){return Hr.current.useDeferredValue(t)};kt.useEffect=function(t,r){return Hr.current.useEffect(t,r)};kt.useId=function(){return Hr.current.useId()};kt.useImperativeHandle=function(t,r,i){return Hr.current.useImperativeHandle(t,r,i)};kt.useInsertionEffect=function(t,r){return Hr.current.useInsertionEffect(t,r)};kt.useLayoutEffect=function(t,r){return Hr.current.useLayoutEffect(t,r)};kt.useMemo=function(t,r){return Hr.current.useMemo(t,r)};kt.useReducer=function(t,r,i){return Hr.current.useReducer(t,r,i)};kt.useRef=function(t){return Hr.current.useRef(t)};kt.useState=function(t){return Hr.current.useState(t)};kt.useSyncExternalStore=function(t,r,i){return Hr.current.useSyncExternalStore(t,r,i)};kt.useTransition=function(){return Hr.current.useTransition()};kt.version="18.2.0";ZM.exports=kt;var D=ZM.exports;const _e=ws(D),A$=a$({__proto__:null,default:_e},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _$=D,x$=Symbol.for("react.element"),S$=Symbol.for("react.fragment"),E$=Object.prototype.hasOwnProperty,j$=_$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D$={key:!0,ref:!0,__self:!0,__source:!0};function i5(t,r,i){var l,u={},p=null,m=null;i!==void 0&&(p=""+i),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(m=r.ref);for(l in r)E$.call(r,l)&&!D$.hasOwnProperty(l)&&(u[l]=r[l]);if(t&&t.defaultProps)for(l in r=t.defaultProps,r)u[l]===void 0&&(u[l]=r[l]);return{$$typeof:x$,type:t,key:p,ref:m,props:u,_owner:j$.current}}Sw.Fragment=S$;Sw.jsx=i5;Sw.jsxs=i5;QM.exports=Sw;var d=QM.exports;function s5(t,r){return function(){return t.apply(r,arguments)}}const{toString:T$}=Object.prototype,{getPrototypeOf:QA}=Object,Ew=(t=>r=>{const i=T$.call(r);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),ks=t=>(t=t.toLowerCase(),r=>Ew(r)===t),jw=t=>r=>typeof r===t,{isArray:Ru}=Array,Dp=jw("undefined");function N$(t){return t!==null&&!Dp(t)&&t.constructor!==null&&!Dp(t.constructor)&&ei(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const a5=ks("ArrayBuffer");function I$(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&a5(t.buffer),r}const M$=jw("string"),ei=jw("function"),l5=jw("number"),Dw=t=>t!==null&&typeof t=="object",P$=t=>t===!0||t===!1,ag=t=>{if(Ew(t)!=="object")return!1;const r=QA(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},L$=ks("Date"),O$=ks("File"),B$=ks("Blob"),R$=ks("FileList"),z$=t=>Dw(t)&&ei(t.pipe),F$=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||ei(t.append)&&((r=Ew(t))==="formdata"||r==="object"&&ei(t.toString)&&t.toString()==="[object FormData]"))},$$=ks("URLSearchParams"),H$=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function nf(t,r,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let l,u;if(typeof t!="object"&&(t=[t]),Ru(t))for(l=0,u=t.length;l<u;l++)r.call(null,t[l],l,t);else{const p=i?Object.getOwnPropertyNames(t):Object.keys(t),m=p.length;let w;for(l=0;l<m;l++)w=p[l],r.call(null,t[w],w,t)}}function c5(t,r){r=r.toLowerCase();const i=Object.keys(t);let l=i.length,u;for(;l-- >0;)if(u=i[l],r===u.toLowerCase())return u;return null}const d5=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),u5=t=>!Dp(t)&&t!==d5;function wC(){const{caseless:t}=u5(this)&&this||{},r={},i=(l,u)=>{const p=t&&c5(r,u)||u;ag(r[p])&&ag(l)?r[p]=wC(r[p],l):ag(l)?r[p]=wC({},l):Ru(l)?r[p]=l.slice():r[p]=l};for(let l=0,u=arguments.length;l<u;l++)arguments[l]&&nf(arguments[l],i);return r}const V$=(t,r,i,{allOwnKeys:l}={})=>(nf(r,(u,p)=>{i&&ei(u)?t[p]=s5(u,i):t[p]=u},{allOwnKeys:l}),t),U$=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),W$=(t,r,i,l)=>{t.prototype=Object.create(r.prototype,l),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),i&&Object.assign(t.prototype,i)},q$=(t,r,i,l)=>{let u,p,m;const w={};if(r=r||{},t==null)return r;do{for(u=Object.getOwnPropertyNames(t),p=u.length;p-- >0;)m=u[p],(!l||l(m,t,r))&&!w[m]&&(r[m]=t[m],w[m]=!0);t=i!==!1&&QA(t)}while(t&&(!i||i(t,r))&&t!==Object.prototype);return r},G$=(t,r,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=r.length;const l=t.indexOf(r,i);return l!==-1&&l===i},K$=t=>{if(!t)return null;if(Ru(t))return t;let r=t.length;if(!l5(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=t[r];return i},Y$=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&QA(Uint8Array)),Q$=(t,r)=>{const l=(t&&t[Symbol.iterator]).call(t);let u;for(;(u=l.next())&&!u.done;){const p=u.value;r.call(t,p[0],p[1])}},Z$=(t,r)=>{let i;const l=[];for(;(i=t.exec(r))!==null;)l.push(i);return l},J$=ks("HTMLFormElement"),X$=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,u){return l.toUpperCase()+u}),nN=(({hasOwnProperty:t})=>(r,i)=>t.call(r,i))(Object.prototype),eH=ks("RegExp"),h5=(t,r)=>{const i=Object.getOwnPropertyDescriptors(t),l={};nf(i,(u,p)=>{let m;(m=r(u,p,t))!==!1&&(l[p]=m||u)}),Object.defineProperties(t,l)},tH=t=>{h5(t,(r,i)=>{if(ei(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=t[i];if(ei(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},nH=(t,r)=>{const i={},l=u=>{u.forEach(p=>{i[p]=!0})};return Ru(t)?l(t):l(String(t).split(r)),i},rH=()=>{},oH=(t,r)=>(t=+t,Number.isFinite(t)?t:r),S0="abcdefghijklmnopqrstuvwxyz",rN="0123456789",p5={DIGIT:rN,ALPHA:S0,ALPHA_DIGIT:S0+S0.toUpperCase()+rN},iH=(t=16,r=p5.ALPHA_DIGIT)=>{let i="";const{length:l}=r;for(;t--;)i+=r[Math.random()*l|0];return i};function sH(t){return!!(t&&ei(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const aH=t=>{const r=new Array(10),i=(l,u)=>{if(Dw(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[u]=l;const p=Ru(l)?[]:{};return nf(l,(m,w)=>{const b=i(m,u+1);!Dp(b)&&(p[w]=b)}),r[u]=void 0,p}}return l};return i(t,0)},lH=ks("AsyncFunction"),cH=t=>t&&(Dw(t)||ei(t))&&ei(t.then)&&ei(t.catch),me={isArray:Ru,isArrayBuffer:a5,isBuffer:N$,isFormData:F$,isArrayBufferView:I$,isString:M$,isNumber:l5,isBoolean:P$,isObject:Dw,isPlainObject:ag,isUndefined:Dp,isDate:L$,isFile:O$,isBlob:B$,isRegExp:eH,isFunction:ei,isStream:z$,isURLSearchParams:$$,isTypedArray:Y$,isFileList:R$,forEach:nf,merge:wC,extend:V$,trim:H$,stripBOM:U$,inherits:W$,toFlatObject:q$,kindOf:Ew,kindOfTest:ks,endsWith:G$,toArray:K$,forEachEntry:Q$,matchAll:Z$,isHTMLForm:J$,hasOwnProperty:nN,hasOwnProp:nN,reduceDescriptors:h5,freezeMethods:tH,toObjectSet:nH,toCamelCase:X$,noop:rH,toFiniteNumber:oH,findKey:c5,global:d5,isContextDefined:u5,ALPHABET:p5,generateString:iH,isSpecCompliantForm:sH,toJSONObject:aH,isAsyncFn:lH,isThenable:cH};function xt(t,r,i,l,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),l&&(this.request=l),u&&(this.response=u)}me.inherits(xt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:me.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const f5=xt.prototype,m5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{m5[t]={value:t}});Object.defineProperties(xt,m5);Object.defineProperty(f5,"isAxiosError",{value:!0});xt.from=(t,r,i,l,u,p)=>{const m=Object.create(f5);return me.toFlatObject(t,m,function(b){return b!==Error.prototype},w=>w!=="isAxiosError"),xt.call(m,t.message,r,i,l,u),m.cause=t,m.name=t.name,p&&Object.assign(m,p),m};const dH=null;function kC(t){return me.isPlainObject(t)||me.isArray(t)}function g5(t){return me.endsWith(t,"[]")?t.slice(0,-2):t}function oN(t,r,i){return t?t.concat(r).map(function(u,p){return u=g5(u),!i&&p?"["+u+"]":u}).join(i?".":""):r}function uH(t){return me.isArray(t)&&!t.some(kC)}const hH=me.toFlatObject(me,{},null,function(r){return/^is[A-Z]/.test(r)});function Tw(t,r,i){if(!me.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,i=me.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,P){return!me.isUndefined(P[R])});const l=i.metaTokens,u=i.visitor||C,p=i.dots,m=i.indexes,b=(i.Blob||typeof Blob<"u"&&Blob)&&me.isSpecCompliantForm(r);if(!me.isFunction(u))throw new TypeError("visitor must be a function");function y(M){if(M===null)return"";if(me.isDate(M))return M.toISOString();if(!b&&me.isBlob(M))throw new xt("Blob is not supported. Use a Buffer instead.");return me.isArrayBuffer(M)||me.isTypedArray(M)?b&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function C(M,R,P){let B=M;if(M&&!P&&typeof M=="object"){if(me.endsWith(R,"{}"))R=l?R:R.slice(0,-2),M=JSON.stringify(M);else if(me.isArray(M)&&uH(M)||(me.isFileList(M)||me.endsWith(R,"[]"))&&(B=me.toArray(M)))return R=g5(R),B.forEach(function(O,H){!(me.isUndefined(O)||O===null)&&r.append(m===!0?oN([R],H,p):m===null?R:R+"[]",y(O))}),!1}return kC(M)?!0:(r.append(oN(P,R,p),y(M)),!1)}const _=[],x=Object.assign(hH,{defaultVisitor:C,convertValue:y,isVisitable:kC});function j(M,R){if(!me.isUndefined(M)){if(_.indexOf(M)!==-1)throw Error("Circular reference detected in "+R.join("."));_.push(M),me.forEach(M,function(B,I){(!(me.isUndefined(B)||B===null)&&u.call(r,B,me.isString(I)?I.trim():I,R,x))===!0&&j(B,R?R.concat(I):[I])}),_.pop()}}if(!me.isObject(t))throw new TypeError("data must be an object");return j(t),r}function iN(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function ZA(t,r){this._pairs=[],t&&Tw(t,this,r)}const b5=ZA.prototype;b5.append=function(r,i){this._pairs.push([r,i])};b5.toString=function(r){const i=r?function(l){return r.call(this,l,iN)}:iN;return this._pairs.map(function(u){return i(u[0])+"="+i(u[1])},"").join("&")};function pH(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function w5(t,r,i){if(!r)return t;const l=i&&i.encode||pH,u=i&&i.serialize;let p;if(u?p=u(r,i):p=me.isURLSearchParams(r)?r.toString():new ZA(r,i).toString(l),p){const m=t.indexOf("#");m!==-1&&(t=t.slice(0,m)),t+=(t.indexOf("?")===-1?"?":"&")+p}return t}class fH{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){me.forEach(this.handlers,function(l){l!==null&&r(l)})}}const sN=fH,k5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mH=typeof URLSearchParams<"u"?URLSearchParams:ZA,gH=typeof FormData<"u"?FormData:null,bH=typeof Blob<"u"?Blob:null,wH=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kH=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Di={isBrowser:!0,classes:{URLSearchParams:mH,FormData:gH,Blob:bH},isStandardBrowserEnv:wH,isStandardBrowserWebWorkerEnv:kH,protocols:["http","https","file","blob","url","data"]};function vH(t,r){return Tw(t,new Di.classes.URLSearchParams,Object.assign({visitor:function(i,l,u,p){return Di.isNode&&me.isBuffer(i)?(this.append(l,i.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},r))}function yH(t){return me.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function CH(t){const r={},i=Object.keys(t);let l;const u=i.length;let p;for(l=0;l<u;l++)p=i[l],r[p]=t[p];return r}function v5(t){function r(i,l,u,p){let m=i[p++];const w=Number.isFinite(+m),b=p>=i.length;return m=!m&&me.isArray(u)?u.length:m,b?(me.hasOwnProp(u,m)?u[m]=[u[m],l]:u[m]=l,!w):((!u[m]||!me.isObject(u[m]))&&(u[m]=[]),r(i,l,u[m],p)&&me.isArray(u[m])&&(u[m]=CH(u[m])),!w)}if(me.isFormData(t)&&me.isFunction(t.entries)){const i={};return me.forEachEntry(t,(l,u)=>{r(yH(l),u,i,0)}),i}return null}function AH(t,r,i){if(me.isString(t))try{return(r||JSON.parse)(t),me.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(t)}const JA={transitional:k5,adapter:Di.isNode?"http":"xhr",transformRequest:[function(r,i){const l=i.getContentType()||"",u=l.indexOf("application/json")>-1,p=me.isObject(r);if(p&&me.isHTMLForm(r)&&(r=new FormData(r)),me.isFormData(r))return u&&u?JSON.stringify(v5(r)):r;if(me.isArrayBuffer(r)||me.isBuffer(r)||me.isStream(r)||me.isFile(r)||me.isBlob(r))return r;if(me.isArrayBufferView(r))return r.buffer;if(me.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let w;if(p){if(l.indexOf("application/x-www-form-urlencoded")>-1)return vH(r,this.formSerializer).toString();if((w=me.isFileList(r))||l.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return Tw(w?{"files[]":r}:r,b&&new b,this.formSerializer)}}return p||u?(i.setContentType("application/json",!1),AH(r)):r}],transformResponse:[function(r){const i=this.transitional||JA.transitional,l=i&&i.forcedJSONParsing,u=this.responseType==="json";if(r&&me.isString(r)&&(l&&!this.responseType||u)){const m=!(i&&i.silentJSONParsing)&&u;try{return JSON.parse(r)}catch(w){if(m)throw w.name==="SyntaxError"?xt.from(w,xt.ERR_BAD_RESPONSE,this,null,this.response):w}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Di.classes.FormData,Blob:Di.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};me.forEach(["delete","get","head","post","put","patch"],t=>{JA.headers[t]={}});const XA=JA,_H=me.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xH=t=>{const r={};let i,l,u;return t&&t.split(`
`).forEach(function(m){u=m.indexOf(":"),i=m.substring(0,u).trim().toLowerCase(),l=m.substring(u+1).trim(),!(!i||r[i]&&_H[i])&&(i==="set-cookie"?r[i]?r[i].push(l):r[i]=[l]:r[i]=r[i]?r[i]+", "+l:l)}),r},aN=Symbol("internals");function Lh(t){return t&&String(t).trim().toLowerCase()}function lg(t){return t===!1||t==null?t:me.isArray(t)?t.map(lg):String(t)}function SH(t){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(t);)r[l[1]]=l[2];return r}const EH=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function E0(t,r,i,l,u){if(me.isFunction(l))return l.call(this,r,i);if(u&&(r=i),!!me.isString(r)){if(me.isString(l))return r.indexOf(l)!==-1;if(me.isRegExp(l))return l.test(r)}}function jH(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function DH(t,r){const i=me.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+i,{value:function(u,p,m){return this[l].call(this,r,u,p,m)},configurable:!0})})}class Nw{constructor(r){r&&this.set(r)}set(r,i,l){const u=this;function p(w,b,y){const C=Lh(b);if(!C)throw new Error("header name must be a non-empty string");const _=me.findKey(u,C);(!_||u[_]===void 0||y===!0||y===void 0&&u[_]!==!1)&&(u[_||b]=lg(w))}const m=(w,b)=>me.forEach(w,(y,C)=>p(y,C,b));return me.isPlainObject(r)||r instanceof this.constructor?m(r,i):me.isString(r)&&(r=r.trim())&&!EH(r)?m(xH(r),i):r!=null&&p(i,r,l),this}get(r,i){if(r=Lh(r),r){const l=me.findKey(this,r);if(l){const u=this[l];if(!i)return u;if(i===!0)return SH(u);if(me.isFunction(i))return i.call(this,u,l);if(me.isRegExp(i))return i.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=Lh(r),r){const l=me.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||E0(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let u=!1;function p(m){if(m=Lh(m),m){const w=me.findKey(l,m);w&&(!i||E0(l,l[w],w,i))&&(delete l[w],u=!0)}}return me.isArray(r)?r.forEach(p):p(r),u}clear(r){const i=Object.keys(this);let l=i.length,u=!1;for(;l--;){const p=i[l];(!r||E0(this,this[p],p,r,!0))&&(delete this[p],u=!0)}return u}normalize(r){const i=this,l={};return me.forEach(this,(u,p)=>{const m=me.findKey(l,p);if(m){i[m]=lg(u),delete i[p];return}const w=r?jH(p):String(p).trim();w!==p&&delete i[p],i[w]=lg(u),l[w]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return me.forEach(this,(l,u)=>{l!=null&&l!==!1&&(i[u]=r&&me.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const l=new this(r);return i.forEach(u=>l.set(u)),l}static accessor(r){const l=(this[aN]=this[aN]={accessors:{}}).accessors,u=this.prototype;function p(m){const w=Lh(m);l[w]||(DH(u,m),l[w]=!0)}return me.isArray(r)?r.forEach(p):p(r),this}}Nw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);me.reduceDescriptors(Nw.prototype,({value:t},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(l){this[i]=l}}});me.freezeMethods(Nw);const Gs=Nw;function j0(t,r){const i=this||XA,l=r||i,u=Gs.from(l.headers);let p=l.data;return me.forEach(t,function(w){p=w.call(i,p,u.normalize(),r?r.status:void 0)}),u.normalize(),p}function y5(t){return!!(t&&t.__CANCEL__)}function rf(t,r,i){xt.call(this,t??"canceled",xt.ERR_CANCELED,r,i),this.name="CanceledError"}me.inherits(rf,xt,{__CANCEL__:!0});function TH(t,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?t(i):r(new xt("Request failed with status code "+i.status,[xt.ERR_BAD_REQUEST,xt.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}const NH=Di.isStandardBrowserEnv?function(){return{write:function(i,l,u,p,m,w){const b=[];b.push(i+"="+encodeURIComponent(l)),me.isNumber(u)&&b.push("expires="+new Date(u).toGMTString()),me.isString(p)&&b.push("path="+p),me.isString(m)&&b.push("domain="+m),w===!0&&b.push("secure"),document.cookie=b.join("; ")},read:function(i){const l=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function IH(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function MH(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t}function C5(t,r){return t&&!IH(r)?MH(t,r):r}const PH=Di.isStandardBrowserEnv?function(){const r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");let l;function u(p){let m=p;return r&&(i.setAttribute("href",m),m=i.href),i.setAttribute("href",m),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return l=u(window.location.href),function(m){const w=me.isString(m)?u(m):m;return w.protocol===l.protocol&&w.host===l.host}}():function(){return function(){return!0}}();function LH(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function OH(t,r){t=t||10;const i=new Array(t),l=new Array(t);let u=0,p=0,m;return r=r!==void 0?r:1e3,function(b){const y=Date.now(),C=l[p];m||(m=y),i[u]=b,l[u]=y;let _=p,x=0;for(;_!==u;)x+=i[_++],_=_%t;if(u=(u+1)%t,u===p&&(p=(p+1)%t),y-m<r)return;const j=C&&y-C;return j?Math.round(x*1e3/j):void 0}}function lN(t,r){let i=0;const l=OH(50,250);return u=>{const p=u.loaded,m=u.lengthComputable?u.total:void 0,w=p-i,b=l(w),y=p<=m;i=p;const C={loaded:p,total:m,progress:m?p/m:void 0,bytes:w,rate:b||void 0,estimated:b&&m&&y?(m-p)/b:void 0,event:u};C[r?"download":"upload"]=!0,t(C)}}const BH=typeof XMLHttpRequest<"u",RH=BH&&function(t){return new Promise(function(i,l){let u=t.data;const p=Gs.from(t.headers).normalize(),m=t.responseType;let w;function b(){t.cancelToken&&t.cancelToken.unsubscribe(w),t.signal&&t.signal.removeEventListener("abort",w)}me.isFormData(u)&&(Di.isStandardBrowserEnv||Di.isStandardBrowserWebWorkerEnv?p.setContentType(!1):p.setContentType("multipart/form-data;",!1));let y=new XMLHttpRequest;if(t.auth){const j=t.auth.username||"",M=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.set("Authorization","Basic "+btoa(j+":"+M))}const C=C5(t.baseURL,t.url);y.open(t.method.toUpperCase(),w5(C,t.params,t.paramsSerializer),!0),y.timeout=t.timeout;function _(){if(!y)return;const j=Gs.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),R={data:!m||m==="text"||m==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:j,config:t,request:y};TH(function(B){i(B),b()},function(B){l(B),b()},R),y=null}if("onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(_)},y.onabort=function(){y&&(l(new xt("Request aborted",xt.ECONNABORTED,t,y)),y=null)},y.onerror=function(){l(new xt("Network Error",xt.ERR_NETWORK,t,y)),y=null},y.ontimeout=function(){let M=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const R=t.transitional||k5;t.timeoutErrorMessage&&(M=t.timeoutErrorMessage),l(new xt(M,R.clarifyTimeoutError?xt.ETIMEDOUT:xt.ECONNABORTED,t,y)),y=null},Di.isStandardBrowserEnv){const j=(t.withCredentials||PH(C))&&t.xsrfCookieName&&NH.read(t.xsrfCookieName);j&&p.set(t.xsrfHeaderName,j)}u===void 0&&p.setContentType(null),"setRequestHeader"in y&&me.forEach(p.toJSON(),function(M,R){y.setRequestHeader(R,M)}),me.isUndefined(t.withCredentials)||(y.withCredentials=!!t.withCredentials),m&&m!=="json"&&(y.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&y.addEventListener("progress",lN(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",lN(t.onUploadProgress)),(t.cancelToken||t.signal)&&(w=j=>{y&&(l(!j||j.type?new rf(null,t,y):j),y.abort(),y=null)},t.cancelToken&&t.cancelToken.subscribe(w),t.signal&&(t.signal.aborted?w():t.signal.addEventListener("abort",w)));const x=LH(C);if(x&&Di.protocols.indexOf(x)===-1){l(new xt("Unsupported protocol "+x+":",xt.ERR_BAD_REQUEST,t));return}y.send(u||null)})},cg={http:dH,xhr:RH};me.forEach(cg,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const A5={getAdapter:t=>{t=me.isArray(t)?t:[t];const{length:r}=t;let i,l;for(let u=0;u<r&&(i=t[u],!(l=me.isString(i)?cg[i.toLowerCase()]:i));u++);if(!l)throw l===!1?new xt(`Adapter ${i} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(me.hasOwnProp(cg,i)?`Adapter '${i}' is not available in the build`:`Unknown adapter '${i}'`);if(!me.isFunction(l))throw new TypeError("adapter is not a function");return l},adapters:cg};function D0(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new rf(null,t)}function cN(t){return D0(t),t.headers=Gs.from(t.headers),t.data=j0.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),A5.getAdapter(t.adapter||XA.adapter)(t).then(function(l){return D0(t),l.data=j0.call(t,t.transformResponse,l),l.headers=Gs.from(l.headers),l},function(l){return y5(l)||(D0(t),l&&l.response&&(l.response.data=j0.call(t,t.transformResponse,l.response),l.response.headers=Gs.from(l.response.headers))),Promise.reject(l)})}const dN=t=>t instanceof Gs?t.toJSON():t;function ku(t,r){r=r||{};const i={};function l(y,C,_){return me.isPlainObject(y)&&me.isPlainObject(C)?me.merge.call({caseless:_},y,C):me.isPlainObject(C)?me.merge({},C):me.isArray(C)?C.slice():C}function u(y,C,_){if(me.isUndefined(C)){if(!me.isUndefined(y))return l(void 0,y,_)}else return l(y,C,_)}function p(y,C){if(!me.isUndefined(C))return l(void 0,C)}function m(y,C){if(me.isUndefined(C)){if(!me.isUndefined(y))return l(void 0,y)}else return l(void 0,C)}function w(y,C,_){if(_ in r)return l(y,C);if(_ in t)return l(void 0,y)}const b={url:p,method:p,data:p,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:w,headers:(y,C)=>u(dN(y),dN(C),!0)};return me.forEach(Object.keys(Object.assign({},t,r)),function(C){const _=b[C]||u,x=_(t[C],r[C],C);me.isUndefined(x)&&_!==w||(i[C]=x)}),i}const _5="1.5.0",e_={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{e_[t]=function(l){return typeof l===t||"a"+(r<1?"n ":" ")+t}});const uN={};e_.transitional=function(r,i,l){function u(p,m){return"[Axios v"+_5+"] Transitional option '"+p+"'"+m+(l?". "+l:"")}return(p,m,w)=>{if(r===!1)throw new xt(u(m," has been removed"+(i?" in "+i:"")),xt.ERR_DEPRECATED);return i&&!uN[m]&&(uN[m]=!0,console.warn(u(m," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(p,m,w):!0}};function zH(t,r,i){if(typeof t!="object")throw new xt("options must be an object",xt.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let u=l.length;for(;u-- >0;){const p=l[u],m=r[p];if(m){const w=t[p],b=w===void 0||m(w,p,t);if(b!==!0)throw new xt("option "+p+" must be "+b,xt.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new xt("Unknown option "+p,xt.ERR_BAD_OPTION)}}const vC={assertOptions:zH,validators:e_},Ba=vC.validators;class Ib{constructor(r){this.defaults=r,this.interceptors={request:new sN,response:new sN}}request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=ku(this.defaults,i);const{transitional:l,paramsSerializer:u,headers:p}=i;l!==void 0&&vC.assertOptions(l,{silentJSONParsing:Ba.transitional(Ba.boolean),forcedJSONParsing:Ba.transitional(Ba.boolean),clarifyTimeoutError:Ba.transitional(Ba.boolean)},!1),u!=null&&(me.isFunction(u)?i.paramsSerializer={serialize:u}:vC.assertOptions(u,{encode:Ba.function,serialize:Ba.function},!0)),i.method=(i.method||this.defaults.method||"get").toLowerCase();let m=p&&me.merge(p.common,p[i.method]);p&&me.forEach(["delete","get","head","post","put","patch","common"],M=>{delete p[M]}),i.headers=Gs.concat(m,p);const w=[];let b=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(i)===!1||(b=b&&R.synchronous,w.unshift(R.fulfilled,R.rejected))});const y=[];this.interceptors.response.forEach(function(R){y.push(R.fulfilled,R.rejected)});let C,_=0,x;if(!b){const M=[cN.bind(this),void 0];for(M.unshift.apply(M,w),M.push.apply(M,y),x=M.length,C=Promise.resolve(i);_<x;)C=C.then(M[_++],M[_++]);return C}x=w.length;let j=i;for(_=0;_<x;){const M=w[_++],R=w[_++];try{j=M(j)}catch(P){R.call(this,P);break}}try{C=cN.call(this,j)}catch(M){return Promise.reject(M)}for(_=0,x=y.length;_<x;)C=C.then(y[_++],y[_++]);return C}getUri(r){r=ku(this.defaults,r);const i=C5(r.baseURL,r.url);return w5(i,r.params,r.paramsSerializer)}}me.forEach(["delete","get","head","options"],function(r){Ib.prototype[r]=function(i,l){return this.request(ku(l||{},{method:r,url:i,data:(l||{}).data}))}});me.forEach(["post","put","patch"],function(r){function i(l){return function(p,m,w){return this.request(ku(w||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}Ib.prototype[r]=i(),Ib.prototype[r+"Form"]=i(!0)});const dg=Ib;class t_{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(p){i=p});const l=this;this.promise.then(u=>{if(!l._listeners)return;let p=l._listeners.length;for(;p-- >0;)l._listeners[p](u);l._listeners=null}),this.promise.then=u=>{let p;const m=new Promise(w=>{l.subscribe(w),p=w}).then(u);return m.cancel=function(){l.unsubscribe(p)},m},r(function(p,m,w){l.reason||(l.reason=new rf(p,m,w),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}static source(){let r;return{token:new t_(function(u){r=u}),cancel:r}}}const FH=t_;function $H(t){return function(i){return t.apply(null,i)}}function HH(t){return me.isObject(t)&&t.isAxiosError===!0}const yC={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yC).forEach(([t,r])=>{yC[r]=t});const VH=yC;function x5(t){const r=new dg(t),i=s5(dg.prototype.request,r);return me.extend(i,dg.prototype,r,{allOwnKeys:!0}),me.extend(i,r,null,{allOwnKeys:!0}),i.create=function(u){return x5(ku(t,u))},i}const Gn=x5(XA);Gn.Axios=dg;Gn.CanceledError=rf;Gn.CancelToken=FH;Gn.isCancel=y5;Gn.VERSION=_5;Gn.toFormData=Tw;Gn.AxiosError=xt;Gn.Cancel=Gn.CanceledError;Gn.all=function(r){return Promise.all(r)};Gn.spread=$H;Gn.isAxiosError=HH;Gn.mergeConfig=ku;Gn.AxiosHeaders=Gs;Gn.formToJSON=t=>v5(me.isHTMLForm(t)?new FormData(t):t);Gn.getAdapter=A5.getAdapter;Gn.HttpStatusCode=VH;Gn.default=Gn;const n_=Gn;window.axios=n_;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var CC={},S5={exports:{}},So={},E5={exports:{}},j5={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function r(ee,ie){var Ce=ee.length;ee.push(ie);e:for(;0<Ce;){var Me=Ce-1>>>1,we=ee[Me];if(0<u(we,ie))ee[Me]=ie,ee[Ce]=we,Ce=Me;else break e}}function i(ee){return ee.length===0?null:ee[0]}function l(ee){if(ee.length===0)return null;var ie=ee[0],Ce=ee.pop();if(Ce!==ie){ee[0]=Ce;e:for(var Me=0,we=ee.length,le=we>>>1;Me<le;){var ye=2*(Me+1)-1,qe=ee[ye],Ye=ye+1,Be=ee[Ye];if(0>u(qe,Ce))Ye<we&&0>u(Be,qe)?(ee[Me]=Be,ee[Ye]=Ce,Me=Ye):(ee[Me]=qe,ee[ye]=Ce,Me=ye);else if(Ye<we&&0>u(Be,Ce))ee[Me]=Be,ee[Ye]=Ce,Me=Ye;else break e}}return ie}function u(ee,ie){var Ce=ee.sortIndex-ie.sortIndex;return Ce!==0?Ce:ee.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;t.unstable_now=function(){return p.now()}}else{var m=Date,w=m.now();t.unstable_now=function(){return m.now()-w}}var b=[],y=[],C=1,_=null,x=3,j=!1,M=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(ee){for(var ie=i(y);ie!==null;){if(ie.callback===null)l(y);else if(ie.startTime<=ee)l(y),ie.sortIndex=ie.expirationTime,r(b,ie);else break;ie=i(y)}}function H(ee){if(R=!1,O(ee),!M)if(i(b)!==null)M=!0,ne(q);else{var ie=i(y);ie!==null&&fe(H,ie.startTime-ee)}}function q(ee,ie){M=!1,R&&(R=!1,B(z),z=-1),j=!0;var Ce=x;try{for(O(ie),_=i(b);_!==null&&(!(_.expirationTime>ie)||ee&&!ge());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,x=_.priorityLevel;var we=Me(_.expirationTime<=ie);ie=t.unstable_now(),typeof we=="function"?_.callback=we:_===i(b)&&l(b),O(ie)}else l(b);_=i(b)}if(_!==null)var le=!0;else{var ye=i(y);ye!==null&&fe(H,ye.startTime-ie),le=!1}return le}finally{_=null,x=Ce,j=!1}}var K=!1,G=null,z=-1,te=5,se=-1;function ge(){return!(t.unstable_now()-se<te)}function ce(){if(G!==null){var ee=t.unstable_now();se=ee;var ie=!0;try{ie=G(!0,ee)}finally{ie?oe():(K=!1,G=null)}}else K=!1}var oe;if(typeof I=="function")oe=function(){I(ce)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,J=re.port2;re.port1.onmessage=ce,oe=function(){J.postMessage(null)}}else oe=function(){P(ce,0)};function ne(ee){G=ee,K||(K=!0,oe())}function fe(ee,ie){z=P(function(){ee(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ee){ee.callback=null},t.unstable_continueExecution=function(){M||j||(M=!0,ne(q))},t.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<ee?Math.floor(1e3/ee):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return i(b)},t.unstable_next=function(ee){switch(x){case 1:case 2:case 3:var ie=3;break;default:ie=x}var Ce=x;x=ie;try{return ee()}finally{x=Ce}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ee,ie){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var Ce=x;x=ee;try{return ie()}finally{x=Ce}},t.unstable_scheduleCallback=function(ee,ie,Ce){var Me=t.unstable_now();switch(typeof Ce=="object"&&Ce!==null?(Ce=Ce.delay,Ce=typeof Ce=="number"&&0<Ce?Me+Ce:Me):Ce=Me,ee){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Ce+we,ee={id:C++,callback:ie,priorityLevel:ee,startTime:Ce,expirationTime:we,sortIndex:-1},Ce>Me?(ee.sortIndex=Ce,r(y,ee),i(b)===null&&ee===i(y)&&(R?(B(z),z=-1):R=!0,fe(H,Ce-Me))):(ee.sortIndex=we,r(b,ee),M||j||(M=!0,ne(q))),ee},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(ee){var ie=x;return function(){var Ce=x;x=ie;try{return ee.apply(this,arguments)}finally{x=Ce}}}})(j5);E5.exports=j5;var UH=E5.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D5=D,yo=UH;function xe(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T5=new Set,Tp={};function Vc(t,r){vu(t,r),vu(t+"Capture",r)}function vu(t,r){for(Tp[t]=r,t=0;t<r.length;t++)T5.add(r[t])}var Qs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),AC=Object.prototype.hasOwnProperty,WH=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hN={},pN={};function qH(t){return AC.call(pN,t)?!0:AC.call(hN,t)?!1:WH.test(t)?pN[t]=!0:(hN[t]=!0,!1)}function GH(t,r,i,l){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KH(t,r,i,l){if(r===null||typeof r>"u"||GH(t,r,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Vr(t,r,i,l,u,p,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=m}var Ar={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ar[t]=new Vr(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Ar[r]=new Vr(r,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ar[t]=new Vr(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ar[t]=new Vr(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ar[t]=new Vr(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ar[t]=new Vr(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ar[t]=new Vr(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ar[t]=new Vr(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ar[t]=new Vr(t,5,!1,t.toLowerCase(),null,!1,!1)});var r_=/[\-:]([a-z])/g;function o_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(r_,o_);Ar[r]=new Vr(r,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(r_,o_);Ar[r]=new Vr(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(r_,o_);Ar[r]=new Vr(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ar[t]=new Vr(t,1,!1,t.toLowerCase(),null,!1,!1)});Ar.xlinkHref=new Vr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ar[t]=new Vr(t,1,!1,t.toLowerCase(),null,!0,!0)});function i_(t,r,i,l){var u=Ar.hasOwnProperty(r)?Ar[r]:null;(u!==null?u.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(KH(r,i,u,l)&&(i=null),l||u===null?qH(r)&&(i===null?t.removeAttribute(r):t.setAttribute(r,""+i)):u.mustUseProperty?t[u.propertyName]=i===null?u.type===3?!1:"":i:(r=u.attributeName,l=u.attributeNamespace,i===null?t.removeAttribute(r):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?t.setAttributeNS(l,r,i):t.setAttribute(r,i))))}var ta=D5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tm=Symbol.for("react.element"),Vd=Symbol.for("react.portal"),Ud=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),_C=Symbol.for("react.profiler"),N5=Symbol.for("react.provider"),I5=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),xC=Symbol.for("react.suspense"),SC=Symbol.for("react.suspense_list"),l_=Symbol.for("react.memo"),$a=Symbol.for("react.lazy"),M5=Symbol.for("react.offscreen"),fN=Symbol.iterator;function Oh(t){return t===null||typeof t!="object"?null:(t=fN&&t[fN]||t["@@iterator"],typeof t=="function"?t:null)}var An=Object.assign,T0;function Zh(t){if(T0===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);T0=r&&r[1]||""}return`
`+T0+t}var N0=!1;function I0(t,r){if(!t||N0)return"";N0=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var l=y}Reflect.construct(t,[],r)}else{try{r.call()}catch(y){l=y}t.call(r.prototype)}else{try{throw Error()}catch(y){l=y}t()}}catch(y){if(y&&l&&typeof y.stack=="string"){for(var u=y.stack.split(`
`),p=l.stack.split(`
`),m=u.length-1,w=p.length-1;1<=m&&0<=w&&u[m]!==p[w];)w--;for(;1<=m&&0<=w;m--,w--)if(u[m]!==p[w]){if(m!==1||w!==1)do if(m--,w--,0>w||u[m]!==p[w]){var b=`
`+u[m].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=m&&0<=w);break}}}finally{N0=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Zh(t):""}function YH(t){switch(t.tag){case 5:return Zh(t.type);case 16:return Zh("Lazy");case 13:return Zh("Suspense");case 19:return Zh("SuspenseList");case 0:case 2:case 15:return t=I0(t.type,!1),t;case 11:return t=I0(t.type.render,!1),t;case 1:return t=I0(t.type,!0),t;default:return""}}function EC(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ud:return"Fragment";case Vd:return"Portal";case _C:return"Profiler";case s_:return"StrictMode";case xC:return"Suspense";case SC:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I5:return(t.displayName||"Context")+".Consumer";case N5:return(t._context.displayName||"Context")+".Provider";case a_:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case l_:return r=t.displayName||null,r!==null?r:EC(t.type)||"Memo";case $a:r=t._payload,t=t._init;try{return EC(t(r))}catch{}}return null}function QH(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return EC(r);case 8:return r===s_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function hl(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P5(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ZH(t){var r=P5(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,p=i.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(m){l=""+m,p.call(this,m)}}),Object.defineProperty(t,r,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Nm(t){t._valueTracker||(t._valueTracker=ZH(t))}function L5(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var i=r.getValue(),l="";return t&&(l=P5(t)?t.checked?"true":"false":t.value),t=l,t!==i?(r.setValue(t),!0):!1}function Mb(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jC(t,r){var i=r.checked;return An({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function mN(t,r){var i=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;i=hl(r.value!=null?r.value:i),t._wrapperState={initialChecked:l,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function O5(t,r){r=r.checked,r!=null&&i_(t,"checked",r,!1)}function DC(t,r){O5(t,r);var i=hl(r.value),l=r.type;if(i!=null)l==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?TC(t,r.type,i):r.hasOwnProperty("defaultValue")&&TC(t,r.type,hl(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function gN(t,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,i||r===t.value||(t.value=r),t.defaultValue=r}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function TC(t,r,i){(r!=="number"||Mb(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Jh=Array.isArray;function iu(t,r,i,l){if(t=t.options,r){r={};for(var u=0;u<i.length;u++)r["$"+i[u]]=!0;for(i=0;i<t.length;i++)u=r.hasOwnProperty("$"+t[i].value),t[i].selected!==u&&(t[i].selected=u),u&&l&&(t[i].defaultSelected=!0)}else{for(i=""+hl(i),r=null,u=0;u<t.length;u++){if(t[u].value===i){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function NC(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(xe(91));return An({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bN(t,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(xe(92));if(Jh(i)){if(1<i.length)throw Error(xe(93));i=i[0]}r=i}r==null&&(r=""),i=r}t._wrapperState={initialValue:hl(i)}}function B5(t,r){var i=hl(r.value),l=hl(r.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),r.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),l!=null&&(t.defaultValue=""+l)}function wN(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function R5(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function IC(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?R5(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Im,z5=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,l,u){MSApp.execUnsafeLocalFunction(function(){return t(r,i,l,u)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Im=Im||document.createElement("div"),Im.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Im.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Np(t,r){if(r){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=r;return}}t.textContent=r}var sp={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JH=["Webkit","ms","Moz","O"];Object.keys(sp).forEach(function(t){JH.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),sp[r]=sp[t]})});function F5(t,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||sp.hasOwnProperty(t)&&sp[t]?(""+r).trim():r+"px"}function $5(t,r){t=t.style;for(var i in r)if(r.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=F5(i,r[i],l);i==="float"&&(i="cssFloat"),l?t.setProperty(i,u):t[i]=u}}var XH=An({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function MC(t,r){if(r){if(XH[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(xe(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(xe(61))}if(r.style!=null&&typeof r.style!="object")throw Error(xe(62))}}function PC(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var LC=null;function c_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var OC=null,su=null,au=null;function kN(t){if(t=af(t)){if(typeof OC!="function")throw Error(xe(280));var r=t.stateNode;r&&(r=Ow(r),OC(t.stateNode,t.type,r))}}function H5(t){su?au?au.push(t):au=[t]:su=t}function V5(){if(su){var t=su,r=au;if(au=su=null,kN(t),r)for(t=0;t<r.length;t++)kN(r[t])}}function U5(t,r){return t(r)}function W5(){}var M0=!1;function q5(t,r,i){if(M0)return t(r,i);M0=!0;try{return U5(t,r,i)}finally{M0=!1,(su!==null||au!==null)&&(W5(),V5())}}function Ip(t,r){var i=t.stateNode;if(i===null)return null;var l=Ow(i);if(l===null)return null;i=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(xe(231,r,typeof i));return i}var BC=!1;if(Qs)try{var Bh={};Object.defineProperty(Bh,"passive",{get:function(){BC=!0}}),window.addEventListener("test",Bh,Bh),window.removeEventListener("test",Bh,Bh)}catch{BC=!1}function eV(t,r,i,l,u,p,m,w,b){var y=Array.prototype.slice.call(arguments,3);try{r.apply(i,y)}catch(C){this.onError(C)}}var ap=!1,Pb=null,Lb=!1,RC=null,tV={onError:function(t){ap=!0,Pb=t}};function nV(t,r,i,l,u,p,m,w,b){ap=!1,Pb=null,eV.apply(tV,arguments)}function rV(t,r,i,l,u,p,m,w,b){if(nV.apply(this,arguments),ap){if(ap){var y=Pb;ap=!1,Pb=null}else throw Error(xe(198));Lb||(Lb=!0,RC=y)}}function Uc(t){var r=t,i=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(i=r.return),t=r.return;while(t)}return r.tag===3?i:null}function G5(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function vN(t){if(Uc(t)!==t)throw Error(xe(188))}function oV(t){var r=t.alternate;if(!r){if(r=Uc(t),r===null)throw Error(xe(188));return r!==t?null:t}for(var i=t,l=r;;){var u=i.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===i)return vN(u),t;if(p===l)return vN(u),r;p=p.sibling}throw Error(xe(188))}if(i.return!==l.return)i=u,l=p;else{for(var m=!1,w=u.child;w;){if(w===i){m=!0,i=u,l=p;break}if(w===l){m=!0,l=u,i=p;break}w=w.sibling}if(!m){for(w=p.child;w;){if(w===i){m=!0,i=p,l=u;break}if(w===l){m=!0,l=p,i=u;break}w=w.sibling}if(!m)throw Error(xe(189))}}if(i.alternate!==l)throw Error(xe(190))}if(i.tag!==3)throw Error(xe(188));return i.stateNode.current===i?t:r}function K5(t){return t=oV(t),t!==null?Y5(t):null}function Y5(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Y5(t);if(r!==null)return r;t=t.sibling}return null}var Q5=yo.unstable_scheduleCallback,yN=yo.unstable_cancelCallback,iV=yo.unstable_shouldYield,sV=yo.unstable_requestPaint,Bn=yo.unstable_now,aV=yo.unstable_getCurrentPriorityLevel,d_=yo.unstable_ImmediatePriority,Z5=yo.unstable_UserBlockingPriority,Ob=yo.unstable_NormalPriority,lV=yo.unstable_LowPriority,J5=yo.unstable_IdlePriority,Iw=null,ms=null;function cV(t){if(ms&&typeof ms.onCommitFiberRoot=="function")try{ms.onCommitFiberRoot(Iw,t,void 0,(t.current.flags&128)===128)}catch{}}var Ti=Math.clz32?Math.clz32:hV,dV=Math.log,uV=Math.LN2;function hV(t){return t>>>=0,t===0?32:31-(dV(t)/uV|0)|0}var Mm=64,Pm=4194304;function Xh(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bb(t,r){var i=t.pendingLanes;if(i===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,m=i&268435455;if(m!==0){var w=m&~u;w!==0?l=Xh(w):(p&=m,p!==0&&(l=Xh(p)))}else m=i&~u,m!==0?l=Xh(m):p!==0&&(l=Xh(p));if(l===0)return 0;if(r!==0&&r!==l&&!(r&u)&&(u=l&-l,p=r&-r,u>=p||u===16&&(p&4194240)!==0))return r;if(l&4&&(l|=i&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)i=31-Ti(r),u=1<<i,l|=t[i],r&=~u;return l}function pV(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fV(t,r){for(var i=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var m=31-Ti(p),w=1<<m,b=u[m];b===-1?(!(w&i)||w&l)&&(u[m]=pV(w,r)):b<=r&&(t.expiredLanes|=w),p&=~w}}function zC(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X5(){var t=Mm;return Mm<<=1,!(Mm&4194240)&&(Mm=64),t}function P0(t){for(var r=[],i=0;31>i;i++)r.push(t);return r}function of(t,r,i){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Ti(r),t[r]=i}function mV(t,r){var i=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<i;){var u=31-Ti(i),p=1<<u;r[u]=0,l[u]=-1,t[u]=-1,i&=~p}}function u_(t,r){var i=t.entangledLanes|=r;for(t=t.entanglements;i;){var l=31-Ti(i),u=1<<l;u&r|t[l]&r&&(t[l]|=r),i&=~u}}var zt=0;function eP(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tP,h_,nP,rP,oP,FC=!1,Lm=[],Xa=null,el=null,tl=null,Mp=new Map,Pp=new Map,qa=[],gV="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function CN(t,r){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":el=null;break;case"mouseover":case"mouseout":tl=null;break;case"pointerover":case"pointerout":Mp.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pp.delete(r.pointerId)}}function Rh(t,r,i,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},r!==null&&(r=af(r),r!==null&&h_(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function bV(t,r,i,l,u){switch(r){case"focusin":return Xa=Rh(Xa,t,r,i,l,u),!0;case"dragenter":return el=Rh(el,t,r,i,l,u),!0;case"mouseover":return tl=Rh(tl,t,r,i,l,u),!0;case"pointerover":var p=u.pointerId;return Mp.set(p,Rh(Mp.get(p)||null,t,r,i,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Pp.set(p,Rh(Pp.get(p)||null,t,r,i,l,u)),!0}return!1}function iP(t){var r=xc(t.target);if(r!==null){var i=Uc(r);if(i!==null){if(r=i.tag,r===13){if(r=G5(i),r!==null){t.blockedOn=r,oP(t.priority,function(){nP(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ug(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var i=$C(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);LC=l,i.target.dispatchEvent(l),LC=null}else return r=af(i),r!==null&&h_(r),t.blockedOn=i,!1;r.shift()}return!0}function AN(t,r,i){ug(t)&&i.delete(r)}function wV(){FC=!1,Xa!==null&&ug(Xa)&&(Xa=null),el!==null&&ug(el)&&(el=null),tl!==null&&ug(tl)&&(tl=null),Mp.forEach(AN),Pp.forEach(AN)}function zh(t,r){t.blockedOn===r&&(t.blockedOn=null,FC||(FC=!0,yo.unstable_scheduleCallback(yo.unstable_NormalPriority,wV)))}function Lp(t){function r(u){return zh(u,t)}if(0<Lm.length){zh(Lm[0],t);for(var i=1;i<Lm.length;i++){var l=Lm[i];l.blockedOn===t&&(l.blockedOn=null)}}for(Xa!==null&&zh(Xa,t),el!==null&&zh(el,t),tl!==null&&zh(tl,t),Mp.forEach(r),Pp.forEach(r),i=0;i<qa.length;i++)l=qa[i],l.blockedOn===t&&(l.blockedOn=null);for(;0<qa.length&&(i=qa[0],i.blockedOn===null);)iP(i),i.blockedOn===null&&qa.shift()}var lu=ta.ReactCurrentBatchConfig,Rb=!0;function kV(t,r,i,l){var u=zt,p=lu.transition;lu.transition=null;try{zt=1,p_(t,r,i,l)}finally{zt=u,lu.transition=p}}function vV(t,r,i,l){var u=zt,p=lu.transition;lu.transition=null;try{zt=4,p_(t,r,i,l)}finally{zt=u,lu.transition=p}}function p_(t,r,i,l){if(Rb){var u=$C(t,r,i,l);if(u===null)U0(t,r,l,zb,i),CN(t,l);else if(bV(u,t,r,i,l))l.stopPropagation();else if(CN(t,l),r&4&&-1<gV.indexOf(t)){for(;u!==null;){var p=af(u);if(p!==null&&tP(p),p=$C(t,r,i,l),p===null&&U0(t,r,l,zb,i),p===u)break;u=p}u!==null&&l.stopPropagation()}else U0(t,r,l,null,i)}}var zb=null;function $C(t,r,i,l){if(zb=null,t=c_(l),t=xc(t),t!==null)if(r=Uc(t),r===null)t=null;else if(i=r.tag,i===13){if(t=G5(r),t!==null)return t;t=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return zb=t,null}function sP(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aV()){case d_:return 1;case Z5:return 4;case Ob:case lV:return 16;case J5:return 536870912;default:return 16}default:return 16}}var Ya=null,f_=null,hg=null;function aP(){if(hg)return hg;var t,r=f_,i=r.length,l,u="value"in Ya?Ya.value:Ya.textContent,p=u.length;for(t=0;t<i&&r[t]===u[t];t++);var m=i-t;for(l=1;l<=m&&r[i-l]===u[p-l];l++);return hg=u.slice(t,1<l?1-l:void 0)}function pg(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Om(){return!0}function _N(){return!1}function Eo(t){function r(i,l,u,p,m){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=m,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(i=t[w],this[w]=i?i(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Om:_N,this.isPropagationStopped=_N,this}return An(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Om)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Om)},persist:function(){},isPersistent:Om}),r}var zu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},m_=Eo(zu),sf=An({},zu,{view:0,detail:0}),yV=Eo(sf),L0,O0,Fh,Mw=An({},sf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:g_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fh&&(Fh&&t.type==="mousemove"?(L0=t.screenX-Fh.screenX,O0=t.screenY-Fh.screenY):O0=L0=0,Fh=t),L0)},movementY:function(t){return"movementY"in t?t.movementY:O0}}),xN=Eo(Mw),CV=An({},Mw,{dataTransfer:0}),AV=Eo(CV),_V=An({},sf,{relatedTarget:0}),B0=Eo(_V),xV=An({},zu,{animationName:0,elapsedTime:0,pseudoElement:0}),SV=Eo(xV),EV=An({},zu,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jV=Eo(EV),DV=An({},zu,{data:0}),SN=Eo(DV),TV={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NV={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IV={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MV(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=IV[t])?!!r[t]:!1}function g_(){return MV}var PV=An({},sf,{key:function(t){if(t.key){var r=TV[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=pg(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NV[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:g_,charCode:function(t){return t.type==="keypress"?pg(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pg(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LV=Eo(PV),OV=An({},Mw,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),EN=Eo(OV),BV=An({},sf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:g_}),RV=Eo(BV),zV=An({},zu,{propertyName:0,elapsedTime:0,pseudoElement:0}),FV=Eo(zV),$V=An({},Mw,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HV=Eo($V),VV=[9,13,27,32],b_=Qs&&"CompositionEvent"in window,lp=null;Qs&&"documentMode"in document&&(lp=document.documentMode);var UV=Qs&&"TextEvent"in window&&!lp,lP=Qs&&(!b_||lp&&8<lp&&11>=lp),jN=String.fromCharCode(32),DN=!1;function cP(t,r){switch(t){case"keyup":return VV.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dP(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wd=!1;function WV(t,r){switch(t){case"compositionend":return dP(r);case"keypress":return r.which!==32?null:(DN=!0,jN);case"textInput":return t=r.data,t===jN&&DN?null:t;default:return null}}function qV(t,r){if(Wd)return t==="compositionend"||!b_&&cP(t,r)?(t=aP(),hg=f_=Ya=null,Wd=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return lP&&r.locale!=="ko"?null:r.data;default:return null}}var GV={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function TN(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!GV[t.type]:r==="textarea"}function uP(t,r,i,l){H5(l),r=Fb(r,"onChange"),0<r.length&&(i=new m_("onChange","change",null,i,l),t.push({event:i,listeners:r}))}var cp=null,Op=null;function KV(t){CP(t,0)}function Pw(t){var r=Kd(t);if(L5(r))return t}function YV(t,r){if(t==="change")return r}var hP=!1;if(Qs){var R0;if(Qs){var z0="oninput"in document;if(!z0){var NN=document.createElement("div");NN.setAttribute("oninput","return;"),z0=typeof NN.oninput=="function"}R0=z0}else R0=!1;hP=R0&&(!document.documentMode||9<document.documentMode)}function IN(){cp&&(cp.detachEvent("onpropertychange",pP),Op=cp=null)}function pP(t){if(t.propertyName==="value"&&Pw(Op)){var r=[];uP(r,Op,t,c_(t)),q5(KV,r)}}function QV(t,r,i){t==="focusin"?(IN(),cp=r,Op=i,cp.attachEvent("onpropertychange",pP)):t==="focusout"&&IN()}function ZV(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pw(Op)}function JV(t,r){if(t==="click")return Pw(r)}function XV(t,r){if(t==="input"||t==="change")return Pw(r)}function eU(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Mi=typeof Object.is=="function"?Object.is:eU;function Bp(t,r){if(Mi(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var i=Object.keys(t),l=Object.keys(r);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!AC.call(r,u)||!Mi(t[u],r[u]))return!1}return!0}function MN(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function PN(t,r){var i=MN(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=r&&l>=r)return{node:i,offset:r-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=MN(i)}}function fP(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?fP(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function mP(){for(var t=window,r=Mb();r instanceof t.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)t=r.contentWindow;else break;r=Mb(t.document)}return r}function w_(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function tU(t){var r=mP(),i=t.focusedElem,l=t.selectionRange;if(r!==i&&i&&i.ownerDocument&&fP(i.ownerDocument.documentElement,i)){if(l!==null&&w_(i)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(t,i.value.length);else if(t=(r=i.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=i.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=PN(i,p);var m=PN(i,l);u&&m&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=i;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)t=r[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nU=Qs&&"documentMode"in document&&11>=document.documentMode,qd=null,HC=null,dp=null,VC=!1;function LN(t,r,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;VC||qd==null||qd!==Mb(l)||(l=qd,"selectionStart"in l&&w_(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dp&&Bp(dp,l)||(dp=l,l=Fb(HC,"onSelect"),0<l.length&&(r=new m_("onSelect","select",null,r,i),t.push({event:r,listeners:l}),r.target=qd)))}function Bm(t,r){var i={};return i[t.toLowerCase()]=r.toLowerCase(),i["Webkit"+t]="webkit"+r,i["Moz"+t]="moz"+r,i}var Gd={animationend:Bm("Animation","AnimationEnd"),animationiteration:Bm("Animation","AnimationIteration"),animationstart:Bm("Animation","AnimationStart"),transitionend:Bm("Transition","TransitionEnd")},F0={},gP={};Qs&&(gP=document.createElement("div").style,"AnimationEvent"in window||(delete Gd.animationend.animation,delete Gd.animationiteration.animation,delete Gd.animationstart.animation),"TransitionEvent"in window||delete Gd.transitionend.transition);function Lw(t){if(F0[t])return F0[t];if(!Gd[t])return t;var r=Gd[t],i;for(i in r)if(r.hasOwnProperty(i)&&i in gP)return F0[t]=r[i];return t}var bP=Lw("animationend"),wP=Lw("animationiteration"),kP=Lw("animationstart"),vP=Lw("transitionend"),yP=new Map,ON="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gl(t,r){yP.set(t,r),Vc(r,[t])}for(var $0=0;$0<ON.length;$0++){var H0=ON[$0],rU=H0.toLowerCase(),oU=H0[0].toUpperCase()+H0.slice(1);gl(rU,"on"+oU)}gl(bP,"onAnimationEnd");gl(wP,"onAnimationIteration");gl(kP,"onAnimationStart");gl("dblclick","onDoubleClick");gl("focusin","onFocus");gl("focusout","onBlur");gl(vP,"onTransitionEnd");vu("onMouseEnter",["mouseout","mouseover"]);vu("onMouseLeave",["mouseout","mouseover"]);vu("onPointerEnter",["pointerout","pointerover"]);vu("onPointerLeave",["pointerout","pointerover"]);Vc("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vc("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vc("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vc("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vc("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vc("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ep="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iU=new Set("cancel close invalid load scroll toggle".split(" ").concat(ep));function BN(t,r,i){var l=t.type||"unknown-event";t.currentTarget=i,rV(l,r,void 0,t),t.currentTarget=null}function CP(t,r){r=(r&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],u=l.event;l=l.listeners;e:{var p=void 0;if(r)for(var m=l.length-1;0<=m;m--){var w=l[m],b=w.instance,y=w.currentTarget;if(w=w.listener,b!==p&&u.isPropagationStopped())break e;BN(u,w,y),p=b}else for(m=0;m<l.length;m++){if(w=l[m],b=w.instance,y=w.currentTarget,w=w.listener,b!==p&&u.isPropagationStopped())break e;BN(u,w,y),p=b}}}if(Lb)throw t=RC,Lb=!1,RC=null,t}function an(t,r){var i=r[KC];i===void 0&&(i=r[KC]=new Set);var l=t+"__bubble";i.has(l)||(AP(r,t,2,!1),i.add(l))}function V0(t,r,i){var l=0;r&&(l|=4),AP(i,t,l,r)}var Rm="_reactListening"+Math.random().toString(36).slice(2);function Rp(t){if(!t[Rm]){t[Rm]=!0,T5.forEach(function(i){i!=="selectionchange"&&(iU.has(i)||V0(i,!1,t),V0(i,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Rm]||(r[Rm]=!0,V0("selectionchange",!1,r))}}function AP(t,r,i,l){switch(sP(r)){case 1:var u=kV;break;case 4:u=vV;break;default:u=p_}i=u.bind(null,r,i,t),u=void 0,!BC||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(r,i,{capture:!0,passive:u}):t.addEventListener(r,i,!0):u!==void 0?t.addEventListener(r,i,{passive:u}):t.addEventListener(r,i,!1)}function U0(t,r,i,l,u){var p=l;if(!(r&1)&&!(r&2)&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(m===4)for(m=l.return;m!==null;){var b=m.tag;if((b===3||b===4)&&(b=m.stateNode.containerInfo,b===u||b.nodeType===8&&b.parentNode===u))return;m=m.return}for(;w!==null;){if(m=xc(w),m===null)return;if(b=m.tag,b===5||b===6){l=p=m;continue e}w=w.parentNode}}l=l.return}q5(function(){var y=p,C=c_(i),_=[];e:{var x=yP.get(t);if(x!==void 0){var j=m_,M=t;switch(t){case"keypress":if(pg(i)===0)break e;case"keydown":case"keyup":j=LV;break;case"focusin":M="focus",j=B0;break;case"focusout":M="blur",j=B0;break;case"beforeblur":case"afterblur":j=B0;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=xN;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=AV;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=RV;break;case bP:case wP:case kP:j=SV;break;case vP:j=FV;break;case"scroll":j=yV;break;case"wheel":j=HV;break;case"copy":case"cut":case"paste":j=jV;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=EN}var R=(r&4)!==0,P=!R&&t==="scroll",B=R?x!==null?x+"Capture":null:x;R=[];for(var I=y,O;I!==null;){O=I;var H=O.stateNode;if(O.tag===5&&H!==null&&(O=H,B!==null&&(H=Ip(I,B),H!=null&&R.push(zp(I,H,O)))),P)break;I=I.return}0<R.length&&(x=new j(x,M,null,i,C),_.push({event:x,listeners:R}))}}if(!(r&7)){e:{if(x=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",x&&i!==LC&&(M=i.relatedTarget||i.fromElement)&&(xc(M)||M[Zs]))break e;if((j||x)&&(x=C.window===C?C:(x=C.ownerDocument)?x.defaultView||x.parentWindow:window,j?(M=i.relatedTarget||i.toElement,j=y,M=M?xc(M):null,M!==null&&(P=Uc(M),M!==P||M.tag!==5&&M.tag!==6)&&(M=null)):(j=null,M=y),j!==M)){if(R=xN,H="onMouseLeave",B="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(R=EN,H="onPointerLeave",B="onPointerEnter",I="pointer"),P=j==null?x:Kd(j),O=M==null?x:Kd(M),x=new R(H,I+"leave",j,i,C),x.target=P,x.relatedTarget=O,H=null,xc(C)===y&&(R=new R(B,I+"enter",M,i,C),R.target=O,R.relatedTarget=P,H=R),P=H,j&&M)t:{for(R=j,B=M,I=0,O=R;O;O=Ld(O))I++;for(O=0,H=B;H;H=Ld(H))O++;for(;0<I-O;)R=Ld(R),I--;for(;0<O-I;)B=Ld(B),O--;for(;I--;){if(R===B||B!==null&&R===B.alternate)break t;R=Ld(R),B=Ld(B)}R=null}else R=null;j!==null&&RN(_,x,j,R,!1),M!==null&&P!==null&&RN(_,P,M,R,!0)}}e:{if(x=y?Kd(y):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var q=YV;else if(TN(x))if(hP)q=XV;else{q=ZV;var K=QV}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(q=JV);if(q&&(q=q(t,y))){uP(_,q,i,C);break e}K&&K(t,x,y),t==="focusout"&&(K=x._wrapperState)&&K.controlled&&x.type==="number"&&TC(x,"number",x.value)}switch(K=y?Kd(y):window,t){case"focusin":(TN(K)||K.contentEditable==="true")&&(qd=K,HC=y,dp=null);break;case"focusout":dp=HC=qd=null;break;case"mousedown":VC=!0;break;case"contextmenu":case"mouseup":case"dragend":VC=!1,LN(_,i,C);break;case"selectionchange":if(nU)break;case"keydown":case"keyup":LN(_,i,C)}var G;if(b_)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Wd?cP(t,i)&&(z="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(z="onCompositionStart");z&&(lP&&i.locale!=="ko"&&(Wd||z!=="onCompositionStart"?z==="onCompositionEnd"&&Wd&&(G=aP()):(Ya=C,f_="value"in Ya?Ya.value:Ya.textContent,Wd=!0)),K=Fb(y,z),0<K.length&&(z=new SN(z,t,null,i,C),_.push({event:z,listeners:K}),G?z.data=G:(G=dP(i),G!==null&&(z.data=G)))),(G=UV?WV(t,i):qV(t,i))&&(y=Fb(y,"onBeforeInput"),0<y.length&&(C=new SN("onBeforeInput","beforeinput",null,i,C),_.push({event:C,listeners:y}),C.data=G))}CP(_,r)})}function zp(t,r,i){return{instance:t,listener:r,currentTarget:i}}function Fb(t,r){for(var i=r+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=Ip(t,i),p!=null&&l.unshift(zp(t,p,u)),p=Ip(t,r),p!=null&&l.push(zp(t,p,u))),t=t.return}return l}function Ld(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function RN(t,r,i,l,u){for(var p=r._reactName,m=[];i!==null&&i!==l;){var w=i,b=w.alternate,y=w.stateNode;if(b!==null&&b===l)break;w.tag===5&&y!==null&&(w=y,u?(b=Ip(i,p),b!=null&&m.unshift(zp(i,b,w))):u||(b=Ip(i,p),b!=null&&m.push(zp(i,b,w)))),i=i.return}m.length!==0&&t.push({event:r,listeners:m})}var sU=/\r\n?/g,aU=/\u0000|\uFFFD/g;function zN(t){return(typeof t=="string"?t:""+t).replace(sU,`
`).replace(aU,"")}function zm(t,r,i){if(r=zN(r),zN(t)!==r&&i)throw Error(xe(425))}function $b(){}var UC=null,WC=null;function qC(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var GC=typeof setTimeout=="function"?setTimeout:void 0,lU=typeof clearTimeout=="function"?clearTimeout:void 0,FN=typeof Promise=="function"?Promise:void 0,cU=typeof queueMicrotask=="function"?queueMicrotask:typeof FN<"u"?function(t){return FN.resolve(null).then(t).catch(dU)}:GC;function dU(t){setTimeout(function(){throw t})}function W0(t,r){var i=r,l=0;do{var u=i.nextSibling;if(t.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){t.removeChild(u),Lp(r);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);Lp(r)}function nl(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function $N(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return t;r--}else i==="/$"&&r++}t=t.previousSibling}return null}var Fu=Math.random().toString(36).slice(2),fs="__reactFiber$"+Fu,Fp="__reactProps$"+Fu,Zs="__reactContainer$"+Fu,KC="__reactEvents$"+Fu,uU="__reactListeners$"+Fu,hU="__reactHandles$"+Fu;function xc(t){var r=t[fs];if(r)return r;for(var i=t.parentNode;i;){if(r=i[Zs]||i[fs]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(t=$N(t);t!==null;){if(i=t[fs])return i;t=$N(t)}return r}t=i,i=t.parentNode}return null}function af(t){return t=t[fs]||t[Zs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kd(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function Ow(t){return t[Fp]||null}var YC=[],Yd=-1;function bl(t){return{current:t}}function cn(t){0>Yd||(t.current=YC[Yd],YC[Yd]=null,Yd--)}function en(t,r){Yd++,YC[Yd]=t.current,t.current=r}var pl={},Mr=bl(pl),no=bl(!1),Pc=pl;function yu(t,r){var i=t.type.contextTypes;if(!i)return pl;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in i)u[p]=r[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function ro(t){return t=t.childContextTypes,t!=null}function Hb(){cn(no),cn(Mr)}function HN(t,r,i){if(Mr.current!==pl)throw Error(xe(168));en(Mr,r),en(no,i)}function _P(t,r,i){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in r))throw Error(xe(108,QH(t)||"Unknown",u));return An({},i,l)}function Vb(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pl,Pc=Mr.current,en(Mr,t),en(no,no.current),!0}function VN(t,r,i){var l=t.stateNode;if(!l)throw Error(xe(169));i?(t=_P(t,r,Pc),l.__reactInternalMemoizedMergedChildContext=t,cn(no),cn(Mr),en(Mr,t)):cn(no),en(no,i)}var Us=null,Bw=!1,q0=!1;function xP(t){Us===null?Us=[t]:Us.push(t)}function pU(t){Bw=!0,xP(t)}function wl(){if(!q0&&Us!==null){q0=!0;var t=0,r=zt;try{var i=Us;for(zt=1;t<i.length;t++){var l=i[t];do l=l(!0);while(l!==null)}Us=null,Bw=!1}catch(u){throw Us!==null&&(Us=Us.slice(t+1)),Q5(d_,wl),u}finally{zt=r,q0=!1}}return null}var Qd=[],Zd=0,Ub=null,Wb=0,Qo=[],Zo=0,Lc=null,Ws=1,qs="";function bc(t,r){Qd[Zd++]=Wb,Qd[Zd++]=Ub,Ub=t,Wb=r}function SP(t,r,i){Qo[Zo++]=Ws,Qo[Zo++]=qs,Qo[Zo++]=Lc,Lc=t;var l=Ws;t=qs;var u=32-Ti(l)-1;l&=~(1<<u),i+=1;var p=32-Ti(r)+u;if(30<p){var m=u-u%5;p=(l&(1<<m)-1).toString(32),l>>=m,u-=m,Ws=1<<32-Ti(r)+u|i<<u|l,qs=p+t}else Ws=1<<p|i<<u|l,qs=t}function k_(t){t.return!==null&&(bc(t,1),SP(t,1,0))}function v_(t){for(;t===Ub;)Ub=Qd[--Zd],Qd[Zd]=null,Wb=Qd[--Zd],Qd[Zd]=null;for(;t===Lc;)Lc=Qo[--Zo],Qo[Zo]=null,qs=Qo[--Zo],Qo[Zo]=null,Ws=Qo[--Zo],Qo[Zo]=null}var vo=null,ko=null,mn=!1,Ei=null;function EP(t,r){var i=Xo(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=t,r=t.deletions,r===null?(t.deletions=[i],t.flags|=16):r.push(i)}function UN(t,r){switch(t.tag){case 5:var i=t.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,vo=t,ko=nl(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,vo=t,ko=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=Lc!==null?{id:Ws,overflow:qs}:null,t.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=Xo(18,null,null,0),i.stateNode=r,i.return=t,t.child=i,vo=t,ko=null,!0):!1;default:return!1}}function QC(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ZC(t){if(mn){var r=ko;if(r){var i=r;if(!UN(t,r)){if(QC(t))throw Error(xe(418));r=nl(i.nextSibling);var l=vo;r&&UN(t,r)?EP(l,i):(t.flags=t.flags&-4097|2,mn=!1,vo=t)}}else{if(QC(t))throw Error(xe(418));t.flags=t.flags&-4097|2,mn=!1,vo=t}}}function WN(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vo=t}function Fm(t){if(t!==vo)return!1;if(!mn)return WN(t),mn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!qC(t.type,t.memoizedProps)),r&&(r=ko)){if(QC(t))throw jP(),Error(xe(418));for(;r;)EP(t,r),r=nl(r.nextSibling)}if(WN(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(r===0){ko=nl(t.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}t=t.nextSibling}ko=null}}else ko=vo?nl(t.stateNode.nextSibling):null;return!0}function jP(){for(var t=ko;t;)t=nl(t.nextSibling)}function Cu(){ko=vo=null,mn=!1}function y_(t){Ei===null?Ei=[t]:Ei.push(t)}var fU=ta.ReactCurrentBatchConfig;function xi(t,r){if(t&&t.defaultProps){r=An({},r),t=t.defaultProps;for(var i in t)r[i]===void 0&&(r[i]=t[i]);return r}return r}var qb=bl(null),Gb=null,Jd=null,C_=null;function A_(){C_=Jd=Gb=null}function __(t){var r=qb.current;cn(qb),t._currentValue=r}function JC(t,r,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===i)break;t=t.return}}function cu(t,r){Gb=t,C_=Jd=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(eo=!0),t.firstContext=null)}function ri(t){var r=t._currentValue;if(C_!==t)if(t={context:t,memoizedValue:r,next:null},Jd===null){if(Gb===null)throw Error(xe(308));Jd=t,Gb.dependencies={lanes:0,firstContext:t}}else Jd=Jd.next=t;return r}var Sc=null;function x_(t){Sc===null?Sc=[t]:Sc.push(t)}function DP(t,r,i,l){var u=r.interleaved;return u===null?(i.next=i,x_(r)):(i.next=u.next,u.next=i),r.interleaved=i,Js(t,l)}function Js(t,r){t.lanes|=r;var i=t.alternate;for(i!==null&&(i.lanes|=r),i=t,t=t.return;t!==null;)t.childLanes|=r,i=t.alternate,i!==null&&(i.childLanes|=r),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Ha=!1;function S_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TP(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ks(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function rl(t,r,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,St&2){var u=l.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r,Js(t,i)}return u=l.interleaved,u===null?(r.next=r,x_(l)):(r.next=u.next,u.next=r),l.interleaved=r,Js(t,i)}function fg(t,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,i|=l,r.lanes=i,u_(t,i)}}function qN(t,r){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var m={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?u=p=m:p=p.next=m,i=i.next}while(i!==null);p===null?u=p=r:p=p.next=r}else u=p=r;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=r:t.next=r,i.lastBaseUpdate=r}function Kb(t,r,i,l){var u=t.updateQueue;Ha=!1;var p=u.firstBaseUpdate,m=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var b=w,y=b.next;b.next=null,m===null?p=y:m.next=y,m=b;var C=t.alternate;C!==null&&(C=C.updateQueue,w=C.lastBaseUpdate,w!==m&&(w===null?C.firstBaseUpdate=y:w.next=y,C.lastBaseUpdate=b))}if(p!==null){var _=u.baseState;m=0,C=y=b=null,w=p;do{var x=w.lane,j=w.eventTime;if((l&x)===x){C!==null&&(C=C.next={eventTime:j,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var M=t,R=w;switch(x=r,j=i,R.tag){case 1:if(M=R.payload,typeof M=="function"){_=M.call(j,_,x);break e}_=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=R.payload,x=typeof M=="function"?M.call(j,_,x):M,x==null)break e;_=An({},_,x);break e;case 2:Ha=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,x=u.effects,x===null?u.effects=[w]:x.push(w))}else j={eventTime:j,lane:x,tag:w.tag,payload:w.payload,callback:w.callback,next:null},C===null?(y=C=j,b=_):C=C.next=j,m|=x;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;x=w,w=x.next,x.next=null,u.lastBaseUpdate=x,u.shared.pending=null}}while(1);if(C===null&&(b=_),u.baseState=b,u.firstBaseUpdate=y,u.lastBaseUpdate=C,r=u.shared.interleaved,r!==null){u=r;do m|=u.lane,u=u.next;while(u!==r)}else p===null&&(u.shared.lanes=0);Bc|=m,t.lanes=m,t.memoizedState=_}}function GN(t,r,i){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(xe(191,u));u.call(l)}}}var NP=new D5.Component().refs;function XC(t,r,i,l){r=t.memoizedState,i=i(l,r),i=i==null?r:An({},r,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Rw={isMounted:function(t){return(t=t._reactInternals)?Uc(t)===t:!1},enqueueSetState:function(t,r,i){t=t._reactInternals;var l=$r(),u=il(t),p=Ks(l,u);p.payload=r,i!=null&&(p.callback=i),r=rl(t,p,u),r!==null&&(Ni(r,t,u,l),fg(r,t,u))},enqueueReplaceState:function(t,r,i){t=t._reactInternals;var l=$r(),u=il(t),p=Ks(l,u);p.tag=1,p.payload=r,i!=null&&(p.callback=i),r=rl(t,p,u),r!==null&&(Ni(r,t,u,l),fg(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var i=$r(),l=il(t),u=Ks(i,l);u.tag=2,r!=null&&(u.callback=r),r=rl(t,u,l),r!==null&&(Ni(r,t,l,i),fg(r,t,l))}};function KN(t,r,i,l,u,p,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,m):r.prototype&&r.prototype.isPureReactComponent?!Bp(i,l)||!Bp(u,p):!0}function IP(t,r,i){var l=!1,u=pl,p=r.contextType;return typeof p=="object"&&p!==null?p=ri(p):(u=ro(r)?Pc:Mr.current,l=r.contextTypes,p=(l=l!=null)?yu(t,u):pl),r=new r(i,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Rw,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),r}function YN(t,r,i,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,l),r.state!==t&&Rw.enqueueReplaceState(r,r.state,null)}function eA(t,r,i,l){var u=t.stateNode;u.props=i,u.state=t.memoizedState,u.refs=NP,S_(t);var p=r.contextType;typeof p=="object"&&p!==null?u.context=ri(p):(p=ro(r)?Pc:Mr.current,u.context=yu(t,p)),u.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(XC(t,r,p,i),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Rw.enqueueReplaceState(u,u.state,null),Kb(t,i,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function $h(t,r,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(xe(309));var l=i.stateNode}if(!l)throw Error(xe(147,t));var u=l,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(m){var w=u.refs;w===NP&&(w=u.refs={}),m===null?delete w[p]:w[p]=m},r._stringRef=p,r)}if(typeof t!="string")throw Error(xe(284));if(!i._owner)throw Error(xe(290,t))}return t}function $m(t,r){throw t=Object.prototype.toString.call(r),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function QN(t){var r=t._init;return r(t._payload)}function MP(t){function r(B,I){if(t){var O=B.deletions;O===null?(B.deletions=[I],B.flags|=16):O.push(I)}}function i(B,I){if(!t)return null;for(;I!==null;)r(B,I),I=I.sibling;return null}function l(B,I){for(B=new Map;I!==null;)I.key!==null?B.set(I.key,I):B.set(I.index,I),I=I.sibling;return B}function u(B,I){return B=sl(B,I),B.index=0,B.sibling=null,B}function p(B,I,O){return B.index=O,t?(O=B.alternate,O!==null?(O=O.index,O<I?(B.flags|=2,I):O):(B.flags|=2,I)):(B.flags|=1048576,I)}function m(B){return t&&B.alternate===null&&(B.flags|=2),B}function w(B,I,O,H){return I===null||I.tag!==6?(I=X0(O,B.mode,H),I.return=B,I):(I=u(I,O),I.return=B,I)}function b(B,I,O,H){var q=O.type;return q===Ud?C(B,I,O.props.children,H,O.key):I!==null&&(I.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===$a&&QN(q)===I.type)?(H=u(I,O.props),H.ref=$h(B,I,O),H.return=B,H):(H=vg(O.type,O.key,O.props,null,B.mode,H),H.ref=$h(B,I,O),H.return=B,H)}function y(B,I,O,H){return I===null||I.tag!==4||I.stateNode.containerInfo!==O.containerInfo||I.stateNode.implementation!==O.implementation?(I=ey(O,B.mode,H),I.return=B,I):(I=u(I,O.children||[]),I.return=B,I)}function C(B,I,O,H,q){return I===null||I.tag!==7?(I=Tc(O,B.mode,H,q),I.return=B,I):(I=u(I,O),I.return=B,I)}function _(B,I,O){if(typeof I=="string"&&I!==""||typeof I=="number")return I=X0(""+I,B.mode,O),I.return=B,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Tm:return O=vg(I.type,I.key,I.props,null,B.mode,O),O.ref=$h(B,null,I),O.return=B,O;case Vd:return I=ey(I,B.mode,O),I.return=B,I;case $a:var H=I._init;return _(B,H(I._payload),O)}if(Jh(I)||Oh(I))return I=Tc(I,B.mode,O,null),I.return=B,I;$m(B,I)}return null}function x(B,I,O,H){var q=I!==null?I.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return q!==null?null:w(B,I,""+O,H);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Tm:return O.key===q?b(B,I,O,H):null;case Vd:return O.key===q?y(B,I,O,H):null;case $a:return q=O._init,x(B,I,q(O._payload),H)}if(Jh(O)||Oh(O))return q!==null?null:C(B,I,O,H,null);$m(B,O)}return null}function j(B,I,O,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return B=B.get(O)||null,w(I,B,""+H,q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Tm:return B=B.get(H.key===null?O:H.key)||null,b(I,B,H,q);case Vd:return B=B.get(H.key===null?O:H.key)||null,y(I,B,H,q);case $a:var K=H._init;return j(B,I,O,K(H._payload),q)}if(Jh(H)||Oh(H))return B=B.get(O)||null,C(I,B,H,q,null);$m(I,H)}return null}function M(B,I,O,H){for(var q=null,K=null,G=I,z=I=0,te=null;G!==null&&z<O.length;z++){G.index>z?(te=G,G=null):te=G.sibling;var se=x(B,G,O[z],H);if(se===null){G===null&&(G=te);break}t&&G&&se.alternate===null&&r(B,G),I=p(se,I,z),K===null?q=se:K.sibling=se,K=se,G=te}if(z===O.length)return i(B,G),mn&&bc(B,z),q;if(G===null){for(;z<O.length;z++)G=_(B,O[z],H),G!==null&&(I=p(G,I,z),K===null?q=G:K.sibling=G,K=G);return mn&&bc(B,z),q}for(G=l(B,G);z<O.length;z++)te=j(G,B,z,O[z],H),te!==null&&(t&&te.alternate!==null&&G.delete(te.key===null?z:te.key),I=p(te,I,z),K===null?q=te:K.sibling=te,K=te);return t&&G.forEach(function(ge){return r(B,ge)}),mn&&bc(B,z),q}function R(B,I,O,H){var q=Oh(O);if(typeof q!="function")throw Error(xe(150));if(O=q.call(O),O==null)throw Error(xe(151));for(var K=q=null,G=I,z=I=0,te=null,se=O.next();G!==null&&!se.done;z++,se=O.next()){G.index>z?(te=G,G=null):te=G.sibling;var ge=x(B,G,se.value,H);if(ge===null){G===null&&(G=te);break}t&&G&&ge.alternate===null&&r(B,G),I=p(ge,I,z),K===null?q=ge:K.sibling=ge,K=ge,G=te}if(se.done)return i(B,G),mn&&bc(B,z),q;if(G===null){for(;!se.done;z++,se=O.next())se=_(B,se.value,H),se!==null&&(I=p(se,I,z),K===null?q=se:K.sibling=se,K=se);return mn&&bc(B,z),q}for(G=l(B,G);!se.done;z++,se=O.next())se=j(G,B,z,se.value,H),se!==null&&(t&&se.alternate!==null&&G.delete(se.key===null?z:se.key),I=p(se,I,z),K===null?q=se:K.sibling=se,K=se);return t&&G.forEach(function(ce){return r(B,ce)}),mn&&bc(B,z),q}function P(B,I,O,H){if(typeof O=="object"&&O!==null&&O.type===Ud&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Tm:e:{for(var q=O.key,K=I;K!==null;){if(K.key===q){if(q=O.type,q===Ud){if(K.tag===7){i(B,K.sibling),I=u(K,O.props.children),I.return=B,B=I;break e}}else if(K.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===$a&&QN(q)===K.type){i(B,K.sibling),I=u(K,O.props),I.ref=$h(B,K,O),I.return=B,B=I;break e}i(B,K);break}else r(B,K);K=K.sibling}O.type===Ud?(I=Tc(O.props.children,B.mode,H,O.key),I.return=B,B=I):(H=vg(O.type,O.key,O.props,null,B.mode,H),H.ref=$h(B,I,O),H.return=B,B=H)}return m(B);case Vd:e:{for(K=O.key;I!==null;){if(I.key===K)if(I.tag===4&&I.stateNode.containerInfo===O.containerInfo&&I.stateNode.implementation===O.implementation){i(B,I.sibling),I=u(I,O.children||[]),I.return=B,B=I;break e}else{i(B,I);break}else r(B,I);I=I.sibling}I=ey(O,B.mode,H),I.return=B,B=I}return m(B);case $a:return K=O._init,P(B,I,K(O._payload),H)}if(Jh(O))return M(B,I,O,H);if(Oh(O))return R(B,I,O,H);$m(B,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,I!==null&&I.tag===6?(i(B,I.sibling),I=u(I,O),I.return=B,B=I):(i(B,I),I=X0(O,B.mode,H),I.return=B,B=I),m(B)):i(B,I)}return P}var Au=MP(!0),PP=MP(!1),lf={},gs=bl(lf),$p=bl(lf),Hp=bl(lf);function Ec(t){if(t===lf)throw Error(xe(174));return t}function E_(t,r){switch(en(Hp,r),en($p,t),en(gs,lf),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:IC(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=IC(r,t)}cn(gs),en(gs,r)}function _u(){cn(gs),cn($p),cn(Hp)}function LP(t){Ec(Hp.current);var r=Ec(gs.current),i=IC(r,t.type);r!==i&&(en($p,t),en(gs,i))}function j_(t){$p.current===t&&(cn(gs),cn($p))}var kn=bl(0);function Yb(t){for(var r=t;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var G0=[];function D_(){for(var t=0;t<G0.length;t++)G0[t]._workInProgressVersionPrimary=null;G0.length=0}var mg=ta.ReactCurrentDispatcher,K0=ta.ReactCurrentBatchConfig,Oc=0,yn=null,rr=null,hr=null,Qb=!1,up=!1,Vp=0,mU=0;function jr(){throw Error(xe(321))}function T_(t,r){if(r===null)return!1;for(var i=0;i<r.length&&i<t.length;i++)if(!Mi(t[i],r[i]))return!1;return!0}function N_(t,r,i,l,u,p){if(Oc=p,yn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,mg.current=t===null||t.memoizedState===null?kU:vU,t=i(l,u),up){p=0;do{if(up=!1,Vp=0,25<=p)throw Error(xe(301));p+=1,hr=rr=null,r.updateQueue=null,mg.current=yU,t=i(l,u)}while(up)}if(mg.current=Zb,r=rr!==null&&rr.next!==null,Oc=0,hr=rr=yn=null,Qb=!1,r)throw Error(xe(300));return t}function I_(){var t=Vp!==0;return Vp=0,t}function hs(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hr===null?yn.memoizedState=hr=t:hr=hr.next=t,hr}function oi(){if(rr===null){var t=yn.alternate;t=t!==null?t.memoizedState:null}else t=rr.next;var r=hr===null?yn.memoizedState:hr.next;if(r!==null)hr=r,rr=t;else{if(t===null)throw Error(xe(310));rr=t,t={memoizedState:rr.memoizedState,baseState:rr.baseState,baseQueue:rr.baseQueue,queue:rr.queue,next:null},hr===null?yn.memoizedState=hr=t:hr=hr.next=t}return hr}function Up(t,r){return typeof r=="function"?r(t):r}function Y0(t){var r=oi(),i=r.queue;if(i===null)throw Error(xe(311));i.lastRenderedReducer=t;var l=rr,u=l.baseQueue,p=i.pending;if(p!==null){if(u!==null){var m=u.next;u.next=p.next,p.next=m}l.baseQueue=u=p,i.pending=null}if(u!==null){p=u.next,l=l.baseState;var w=m=null,b=null,y=p;do{var C=y.lane;if((Oc&C)===C)b!==null&&(b=b.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),l=y.hasEagerState?y.eagerState:t(l,y.action);else{var _={lane:C,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};b===null?(w=b=_,m=l):b=b.next=_,yn.lanes|=C,Bc|=C}y=y.next}while(y!==null&&y!==p);b===null?m=l:b.next=w,Mi(l,r.memoizedState)||(eo=!0),r.memoizedState=l,r.baseState=m,r.baseQueue=b,i.lastRenderedState=l}if(t=i.interleaved,t!==null){u=t;do p=u.lane,yn.lanes|=p,Bc|=p,u=u.next;while(u!==t)}else u===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function Q0(t){var r=oi(),i=r.queue;if(i===null)throw Error(xe(311));i.lastRenderedReducer=t;var l=i.dispatch,u=i.pending,p=r.memoizedState;if(u!==null){i.pending=null;var m=u=u.next;do p=t(p,m.action),m=m.next;while(m!==u);Mi(p,r.memoizedState)||(eo=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),i.lastRenderedState=p}return[p,l]}function OP(){}function BP(t,r){var i=yn,l=oi(),u=r(),p=!Mi(l.memoizedState,u);if(p&&(l.memoizedState=u,eo=!0),l=l.queue,M_(FP.bind(null,i,l,t),[t]),l.getSnapshot!==r||p||hr!==null&&hr.memoizedState.tag&1){if(i.flags|=2048,Wp(9,zP.bind(null,i,l,u,r),void 0,null),fr===null)throw Error(xe(349));Oc&30||RP(i,r,u)}return u}function RP(t,r,i){t.flags|=16384,t={getSnapshot:r,value:i},r=yn.updateQueue,r===null?(r={lastEffect:null,stores:null},yn.updateQueue=r,r.stores=[t]):(i=r.stores,i===null?r.stores=[t]:i.push(t))}function zP(t,r,i,l){r.value=i,r.getSnapshot=l,$P(r)&&HP(t)}function FP(t,r,i){return i(function(){$P(r)&&HP(t)})}function $P(t){var r=t.getSnapshot;t=t.value;try{var i=r();return!Mi(t,i)}catch{return!0}}function HP(t){var r=Js(t,1);r!==null&&Ni(r,t,1,-1)}function ZN(t){var r=hs();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:t},r.queue=t,t=t.dispatch=wU.bind(null,yn,t),[r.memoizedState,t]}function Wp(t,r,i,l){return t={tag:t,create:r,destroy:i,deps:l,next:null},r=yn.updateQueue,r===null?(r={lastEffect:null,stores:null},yn.updateQueue=r,r.lastEffect=t.next=t):(i=r.lastEffect,i===null?r.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,r.lastEffect=t)),t}function VP(){return oi().memoizedState}function gg(t,r,i,l){var u=hs();yn.flags|=t,u.memoizedState=Wp(1|r,i,void 0,l===void 0?null:l)}function zw(t,r,i,l){var u=oi();l=l===void 0?null:l;var p=void 0;if(rr!==null){var m=rr.memoizedState;if(p=m.destroy,l!==null&&T_(l,m.deps)){u.memoizedState=Wp(r,i,p,l);return}}yn.flags|=t,u.memoizedState=Wp(1|r,i,p,l)}function JN(t,r){return gg(8390656,8,t,r)}function M_(t,r){return zw(2048,8,t,r)}function UP(t,r){return zw(4,2,t,r)}function WP(t,r){return zw(4,4,t,r)}function qP(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function GP(t,r,i){return i=i!=null?i.concat([t]):null,zw(4,4,qP.bind(null,r,t),i)}function P_(){}function KP(t,r){var i=oi();r=r===void 0?null:r;var l=i.memoizedState;return l!==null&&r!==null&&T_(r,l[1])?l[0]:(i.memoizedState=[t,r],t)}function YP(t,r){var i=oi();r=r===void 0?null:r;var l=i.memoizedState;return l!==null&&r!==null&&T_(r,l[1])?l[0]:(t=t(),i.memoizedState=[t,r],t)}function QP(t,r,i){return Oc&21?(Mi(i,r)||(i=X5(),yn.lanes|=i,Bc|=i,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,eo=!0),t.memoizedState=i)}function gU(t,r){var i=zt;zt=i!==0&&4>i?i:4,t(!0);var l=K0.transition;K0.transition={};try{t(!1),r()}finally{zt=i,K0.transition=l}}function ZP(){return oi().memoizedState}function bU(t,r,i){var l=il(t);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},JP(t))XP(r,i);else if(i=DP(t,r,i,l),i!==null){var u=$r();Ni(i,t,l,u),eL(i,r,l)}}function wU(t,r,i){var l=il(t),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(JP(t))XP(r,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var m=r.lastRenderedState,w=p(m,i);if(u.hasEagerState=!0,u.eagerState=w,Mi(w,m)){var b=r.interleaved;b===null?(u.next=u,x_(r)):(u.next=b.next,b.next=u),r.interleaved=u;return}}catch{}finally{}i=DP(t,r,u,l),i!==null&&(u=$r(),Ni(i,t,l,u),eL(i,r,l))}}function JP(t){var r=t.alternate;return t===yn||r!==null&&r===yn}function XP(t,r){up=Qb=!0;var i=t.pending;i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r}function eL(t,r,i){if(i&4194240){var l=r.lanes;l&=t.pendingLanes,i|=l,r.lanes=i,u_(t,i)}}var Zb={readContext:ri,useCallback:jr,useContext:jr,useEffect:jr,useImperativeHandle:jr,useInsertionEffect:jr,useLayoutEffect:jr,useMemo:jr,useReducer:jr,useRef:jr,useState:jr,useDebugValue:jr,useDeferredValue:jr,useTransition:jr,useMutableSource:jr,useSyncExternalStore:jr,useId:jr,unstable_isNewReconciler:!1},kU={readContext:ri,useCallback:function(t,r){return hs().memoizedState=[t,r===void 0?null:r],t},useContext:ri,useEffect:JN,useImperativeHandle:function(t,r,i){return i=i!=null?i.concat([t]):null,gg(4194308,4,qP.bind(null,r,t),i)},useLayoutEffect:function(t,r){return gg(4194308,4,t,r)},useInsertionEffect:function(t,r){return gg(4,2,t,r)},useMemo:function(t,r){var i=hs();return r=r===void 0?null:r,t=t(),i.memoizedState=[t,r],t},useReducer:function(t,r,i){var l=hs();return r=i!==void 0?i(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=bU.bind(null,yn,t),[l.memoizedState,t]},useRef:function(t){var r=hs();return t={current:t},r.memoizedState=t},useState:ZN,useDebugValue:P_,useDeferredValue:function(t){return hs().memoizedState=t},useTransition:function(){var t=ZN(!1),r=t[0];return t=gU.bind(null,t[1]),hs().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,i){var l=yn,u=hs();if(mn){if(i===void 0)throw Error(xe(407));i=i()}else{if(i=r(),fr===null)throw Error(xe(349));Oc&30||RP(l,r,i)}u.memoizedState=i;var p={value:i,getSnapshot:r};return u.queue=p,JN(FP.bind(null,l,p,t),[t]),l.flags|=2048,Wp(9,zP.bind(null,l,p,i,r),void 0,null),i},useId:function(){var t=hs(),r=fr.identifierPrefix;if(mn){var i=qs,l=Ws;i=(l&~(1<<32-Ti(l)-1)).toString(32)+i,r=":"+r+"R"+i,i=Vp++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=mU++,r=":"+r+"r"+i.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},vU={readContext:ri,useCallback:KP,useContext:ri,useEffect:M_,useImperativeHandle:GP,useInsertionEffect:UP,useLayoutEffect:WP,useMemo:YP,useReducer:Y0,useRef:VP,useState:function(){return Y0(Up)},useDebugValue:P_,useDeferredValue:function(t){var r=oi();return QP(r,rr.memoizedState,t)},useTransition:function(){var t=Y0(Up)[0],r=oi().memoizedState;return[t,r]},useMutableSource:OP,useSyncExternalStore:BP,useId:ZP,unstable_isNewReconciler:!1},yU={readContext:ri,useCallback:KP,useContext:ri,useEffect:M_,useImperativeHandle:GP,useInsertionEffect:UP,useLayoutEffect:WP,useMemo:YP,useReducer:Q0,useRef:VP,useState:function(){return Q0(Up)},useDebugValue:P_,useDeferredValue:function(t){var r=oi();return rr===null?r.memoizedState=t:QP(r,rr.memoizedState,t)},useTransition:function(){var t=Q0(Up)[0],r=oi().memoizedState;return[t,r]},useMutableSource:OP,useSyncExternalStore:BP,useId:ZP,unstable_isNewReconciler:!1};function xu(t,r){try{var i="",l=r;do i+=YH(l),l=l.return;while(l);var u=i}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:u,digest:null}}function Z0(t,r,i){return{value:t,source:null,stack:i??null,digest:r??null}}function tA(t,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var CU=typeof WeakMap=="function"?WeakMap:Map;function tL(t,r,i){i=Ks(-1,i),i.tag=3,i.payload={element:null};var l=r.value;return i.callback=function(){Xb||(Xb=!0,uA=l),tA(t,r)},i}function nL(t,r,i){i=Ks(-1,i),i.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;i.payload=function(){return l(u)},i.callback=function(){tA(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){tA(t,r),typeof l!="function"&&(ol===null?ol=new Set([this]):ol.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),i}function XN(t,r,i){var l=t.pingCache;if(l===null){l=t.pingCache=new CU;var u=new Set;l.set(r,u)}else u=l.get(r),u===void 0&&(u=new Set,l.set(r,u));u.has(i)||(u.add(i),t=OU.bind(null,t,r,i),r.then(t,t))}function eI(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function tI(t,r,i,l,u){return t.mode&1?(t.flags|=65536,t.lanes=u,t):(t===r?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=Ks(-1,1),r.tag=2,rl(i,r,1))),i.lanes|=1),t)}var AU=ta.ReactCurrentOwner,eo=!1;function Fr(t,r,i,l){r.child=t===null?PP(r,null,i,l):Au(r,t.child,i,l)}function nI(t,r,i,l,u){i=i.render;var p=r.ref;return cu(r,u),l=N_(t,r,i,l,p,u),i=I_(),t!==null&&!eo?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,Xs(t,r,u)):(mn&&i&&k_(r),r.flags|=1,Fr(t,r,l,u),r.child)}function rI(t,r,i,l,u){if(t===null){var p=i.type;return typeof p=="function"&&!H_(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=p,rL(t,r,p,l,u)):(t=vg(i.type,null,l,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,!(t.lanes&u)){var m=p.memoizedProps;if(i=i.compare,i=i!==null?i:Bp,i(m,l)&&t.ref===r.ref)return Xs(t,r,u)}return r.flags|=1,t=sl(p,l),t.ref=r.ref,t.return=r,r.child=t}function rL(t,r,i,l,u){if(t!==null){var p=t.memoizedProps;if(Bp(p,l)&&t.ref===r.ref)if(eo=!1,r.pendingProps=l=p,(t.lanes&u)!==0)t.flags&131072&&(eo=!0);else return r.lanes=t.lanes,Xs(t,r,u)}return nA(t,r,i,l,u)}function oL(t,r,i){var l=r.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(eu,wo),wo|=i;else{if(!(i&1073741824))return t=p!==null?p.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,en(eu,wo),wo|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:i,en(eu,wo),wo|=l}else p!==null?(l=p.baseLanes|i,r.memoizedState=null):l=i,en(eu,wo),wo|=l;return Fr(t,r,u,i),r.child}function iL(t,r){var i=r.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function nA(t,r,i,l,u){var p=ro(i)?Pc:Mr.current;return p=yu(r,p),cu(r,u),i=N_(t,r,i,l,p,u),l=I_(),t!==null&&!eo?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,Xs(t,r,u)):(mn&&l&&k_(r),r.flags|=1,Fr(t,r,i,u),r.child)}function oI(t,r,i,l,u){if(ro(i)){var p=!0;Vb(r)}else p=!1;if(cu(r,u),r.stateNode===null)bg(t,r),IP(r,i,l),eA(r,i,l,u),l=!0;else if(t===null){var m=r.stateNode,w=r.memoizedProps;m.props=w;var b=m.context,y=i.contextType;typeof y=="object"&&y!==null?y=ri(y):(y=ro(i)?Pc:Mr.current,y=yu(r,y));var C=i.getDerivedStateFromProps,_=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function";_||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==l||b!==y)&&YN(r,m,l,y),Ha=!1;var x=r.memoizedState;m.state=x,Kb(r,l,m,u),b=r.memoizedState,w!==l||x!==b||no.current||Ha?(typeof C=="function"&&(XC(r,i,C,l),b=r.memoizedState),(w=Ha||KN(r,i,w,l,x,b,y))?(_||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=b),m.props=l,m.state=b,m.context=y,l=w):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{m=r.stateNode,TP(t,r),w=r.memoizedProps,y=r.type===r.elementType?w:xi(r.type,w),m.props=y,_=r.pendingProps,x=m.context,b=i.contextType,typeof b=="object"&&b!==null?b=ri(b):(b=ro(i)?Pc:Mr.current,b=yu(r,b));var j=i.getDerivedStateFromProps;(C=typeof j=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==_||x!==b)&&YN(r,m,l,b),Ha=!1,x=r.memoizedState,m.state=x,Kb(r,l,m,u);var M=r.memoizedState;w!==_||x!==M||no.current||Ha?(typeof j=="function"&&(XC(r,i,j,l),M=r.memoizedState),(y=Ha||KN(r,i,y,l,x,M,b)||!1)?(C||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,M,b),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,M,b)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&x===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&x===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=M),m.props=l,m.state=M,m.context=b,l=y):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&x===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&x===t.memoizedState||(r.flags|=1024),l=!1)}return rA(t,r,i,l,p,u)}function rA(t,r,i,l,u,p){iL(t,r);var m=(r.flags&128)!==0;if(!l&&!m)return u&&VN(r,i,!1),Xs(t,r,p);l=r.stateNode,AU.current=r;var w=m&&typeof i.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&m?(r.child=Au(r,t.child,null,p),r.child=Au(r,null,w,p)):Fr(t,r,w,p),r.memoizedState=l.state,u&&VN(r,i,!0),r.child}function sL(t){var r=t.stateNode;r.pendingContext?HN(t,r.pendingContext,r.pendingContext!==r.context):r.context&&HN(t,r.context,!1),E_(t,r.containerInfo)}function iI(t,r,i,l,u){return Cu(),y_(u),r.flags|=256,Fr(t,r,i,l),r.child}var oA={dehydrated:null,treeContext:null,retryLane:0};function iA(t){return{baseLanes:t,cachePool:null,transitions:null}}function aL(t,r,i){var l=r.pendingProps,u=kn.current,p=!1,m=(r.flags&128)!==0,w;if((w=m)||(w=t!==null&&t.memoizedState===null?!1:(u&2)!==0),w?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),en(kn,u&1),t===null)return ZC(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=l.children,t=l.fallback,p?(l=r.mode,p=r.child,m={mode:"hidden",children:m},!(l&1)&&p!==null?(p.childLanes=0,p.pendingProps=m):p=Hw(m,l,0,null),t=Tc(t,l,i,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=iA(i),r.memoizedState=oA,t):L_(r,m));if(u=t.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return _U(t,r,m,l,w,u,i);if(p){p=l.fallback,m=r.mode,u=t.child,w=u.sibling;var b={mode:"hidden",children:l.children};return!(m&1)&&r.child!==u?(l=r.child,l.childLanes=0,l.pendingProps=b,r.deletions=null):(l=sl(u,b),l.subtreeFlags=u.subtreeFlags&14680064),w!==null?p=sl(w,p):(p=Tc(p,m,i,null),p.flags|=2),p.return=r,l.return=r,l.sibling=p,r.child=l,l=p,p=r.child,m=t.child.memoizedState,m=m===null?iA(i):{baseLanes:m.baseLanes|i,cachePool:null,transitions:m.transitions},p.memoizedState=m,p.childLanes=t.childLanes&~i,r.memoizedState=oA,l}return p=t.child,t=p.sibling,l=sl(p,{mode:"visible",children:l.children}),!(r.mode&1)&&(l.lanes=i),l.return=r,l.sibling=null,t!==null&&(i=r.deletions,i===null?(r.deletions=[t],r.flags|=16):i.push(t)),r.child=l,r.memoizedState=null,l}function L_(t,r){return r=Hw({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Hm(t,r,i,l){return l!==null&&y_(l),Au(r,t.child,null,i),t=L_(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function _U(t,r,i,l,u,p,m){if(i)return r.flags&256?(r.flags&=-257,l=Z0(Error(xe(422))),Hm(t,r,m,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=l.fallback,u=r.mode,l=Hw({mode:"visible",children:l.children},u,0,null),p=Tc(p,u,m,null),p.flags|=2,l.return=r,p.return=r,l.sibling=p,r.child=l,r.mode&1&&Au(r,t.child,null,m),r.child.memoizedState=iA(m),r.memoizedState=oA,p);if(!(r.mode&1))return Hm(t,r,m,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var w=l.dgst;return l=w,p=Error(xe(419)),l=Z0(p,l,void 0),Hm(t,r,m,l)}if(w=(m&t.childLanes)!==0,eo||w){if(l=fr,l!==null){switch(m&-m){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(l.suspendedLanes|m)?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Js(t,u),Ni(l,t,u,-1))}return $_(),l=Z0(Error(xe(421))),Hm(t,r,m,l)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=BU.bind(null,t),u._reactRetry=r,null):(t=p.treeContext,ko=nl(u.nextSibling),vo=r,mn=!0,Ei=null,t!==null&&(Qo[Zo++]=Ws,Qo[Zo++]=qs,Qo[Zo++]=Lc,Ws=t.id,qs=t.overflow,Lc=r),r=L_(r,l.children),r.flags|=4096,r)}function sI(t,r,i){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),JC(t.return,r,i)}function J0(t,r,i,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=i,p.tailMode=u)}function lL(t,r,i){var l=r.pendingProps,u=l.revealOrder,p=l.tail;if(Fr(t,r,l.children,i),l=kn.current,l&2)l=l&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sI(t,i,r);else if(t.tag===19)sI(t,i,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(en(kn,l),!(r.mode&1))r.memoizedState=null;else switch(u){case"forwards":for(i=r.child,u=null;i!==null;)t=i.alternate,t!==null&&Yb(t)===null&&(u=i),i=i.sibling;i=u,i===null?(u=r.child,r.child=null):(u=i.sibling,i.sibling=null),J0(r,!1,u,i,p);break;case"backwards":for(i=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Yb(t)===null){r.child=u;break}t=u.sibling,u.sibling=i,i=u,u=t}J0(r,!0,i,null,p);break;case"together":J0(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bg(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Xs(t,r,i){if(t!==null&&(r.dependencies=t.dependencies),Bc|=r.lanes,!(i&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(xe(153));if(r.child!==null){for(t=r.child,i=sl(t,t.pendingProps),r.child=i,i.return=r;t.sibling!==null;)t=t.sibling,i=i.sibling=sl(t,t.pendingProps),i.return=r;i.sibling=null}return r.child}function xU(t,r,i){switch(r.tag){case 3:sL(r),Cu();break;case 5:LP(r);break;case 1:ro(r.type)&&Vb(r);break;case 4:E_(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,u=r.memoizedProps.value;en(qb,l._currentValue),l._currentValue=u;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(en(kn,kn.current&1),r.flags|=128,null):i&r.child.childLanes?aL(t,r,i):(en(kn,kn.current&1),t=Xs(t,r,i),t!==null?t.sibling:null);en(kn,kn.current&1);break;case 19:if(l=(i&r.childLanes)!==0,t.flags&128){if(l)return lL(t,r,i);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),en(kn,kn.current),l)break;return null;case 22:case 23:return r.lanes=0,oL(t,r,i)}return Xs(t,r,i)}var cL,sA,dL,uL;cL=function(t,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};sA=function(){};dL=function(t,r,i,l){var u=t.memoizedProps;if(u!==l){t=r.stateNode,Ec(gs.current);var p=null;switch(i){case"input":u=jC(t,u),l=jC(t,l),p=[];break;case"select":u=An({},u,{value:void 0}),l=An({},l,{value:void 0}),p=[];break;case"textarea":u=NC(t,u),l=NC(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=$b)}MC(i,l);var m;i=null;for(y in u)if(!l.hasOwnProperty(y)&&u.hasOwnProperty(y)&&u[y]!=null)if(y==="style"){var w=u[y];for(m in w)w.hasOwnProperty(m)&&(i||(i={}),i[m]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(Tp.hasOwnProperty(y)?p||(p=[]):(p=p||[]).push(y,null));for(y in l){var b=l[y];if(w=u!=null?u[y]:void 0,l.hasOwnProperty(y)&&b!==w&&(b!=null||w!=null))if(y==="style")if(w){for(m in w)!w.hasOwnProperty(m)||b&&b.hasOwnProperty(m)||(i||(i={}),i[m]="");for(m in b)b.hasOwnProperty(m)&&w[m]!==b[m]&&(i||(i={}),i[m]=b[m])}else i||(p||(p=[]),p.push(y,i)),i=b;else y==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,w=w?w.__html:void 0,b!=null&&w!==b&&(p=p||[]).push(y,b)):y==="children"?typeof b!="string"&&typeof b!="number"||(p=p||[]).push(y,""+b):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(Tp.hasOwnProperty(y)?(b!=null&&y==="onScroll"&&an("scroll",t),p||w===b||(p=[])):(p=p||[]).push(y,b))}i&&(p=p||[]).push("style",i);var y=p;(r.updateQueue=y)&&(r.flags|=4)}};uL=function(t,r,i,l){i!==l&&(r.flags|=4)};function Hh(t,r){if(!mn)switch(t.tailMode){case"hidden":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Dr(t){var r=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(r)for(var u=t.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=i,r}function SU(t,r,i){var l=r.pendingProps;switch(v_(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dr(r),null;case 1:return ro(r.type)&&Hb(),Dr(r),null;case 3:return l=r.stateNode,_u(),cn(no),cn(Mr),D_(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Fm(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ei!==null&&(fA(Ei),Ei=null))),sA(t,r),Dr(r),null;case 5:j_(r);var u=Ec(Hp.current);if(i=r.type,t!==null&&r.stateNode!=null)dL(t,r,i,l,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(xe(166));return Dr(r),null}if(t=Ec(gs.current),Fm(r)){l=r.stateNode,i=r.type;var p=r.memoizedProps;switch(l[fs]=r,l[Fp]=p,t=(r.mode&1)!==0,i){case"dialog":an("cancel",l),an("close",l);break;case"iframe":case"object":case"embed":an("load",l);break;case"video":case"audio":for(u=0;u<ep.length;u++)an(ep[u],l);break;case"source":an("error",l);break;case"img":case"image":case"link":an("error",l),an("load",l);break;case"details":an("toggle",l);break;case"input":mN(l,p),an("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},an("invalid",l);break;case"textarea":bN(l,p),an("invalid",l)}MC(i,p),u=null;for(var m in p)if(p.hasOwnProperty(m)){var w=p[m];m==="children"?typeof w=="string"?l.textContent!==w&&(p.suppressHydrationWarning!==!0&&zm(l.textContent,w,t),u=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&zm(l.textContent,w,t),u=["children",""+w]):Tp.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&an("scroll",l)}switch(i){case"input":Nm(l),gN(l,p,!0);break;case"textarea":Nm(l),wN(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=$b)}l=u,r.updateQueue=l,l!==null&&(r.flags|=4)}else{m=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R5(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=m.createElement(i,{is:l.is}):(t=m.createElement(i),i==="select"&&(m=t,l.multiple?m.multiple=!0:l.size&&(m.size=l.size))):t=m.createElementNS(t,i),t[fs]=r,t[Fp]=l,cL(t,r,!1,!1),r.stateNode=t;e:{switch(m=PC(i,l),i){case"dialog":an("cancel",t),an("close",t),u=l;break;case"iframe":case"object":case"embed":an("load",t),u=l;break;case"video":case"audio":for(u=0;u<ep.length;u++)an(ep[u],t);u=l;break;case"source":an("error",t),u=l;break;case"img":case"image":case"link":an("error",t),an("load",t),u=l;break;case"details":an("toggle",t),u=l;break;case"input":mN(t,l),u=jC(t,l),an("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=An({},l,{value:void 0}),an("invalid",t);break;case"textarea":bN(t,l),u=NC(t,l),an("invalid",t);break;default:u=l}MC(i,u),w=u;for(p in w)if(w.hasOwnProperty(p)){var b=w[p];p==="style"?$5(t,b):p==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&z5(t,b)):p==="children"?typeof b=="string"?(i!=="textarea"||b!=="")&&Np(t,b):typeof b=="number"&&Np(t,""+b):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Tp.hasOwnProperty(p)?b!=null&&p==="onScroll"&&an("scroll",t):b!=null&&i_(t,p,b,m))}switch(i){case"input":Nm(t),gN(t,l,!1);break;case"textarea":Nm(t),wN(t);break;case"option":l.value!=null&&t.setAttribute("value",""+hl(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?iu(t,!!l.multiple,p,!1):l.defaultValue!=null&&iu(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=$b)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dr(r),null;case 6:if(t&&r.stateNode!=null)uL(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(xe(166));if(i=Ec(Hp.current),Ec(gs.current),Fm(r)){if(l=r.stateNode,i=r.memoizedProps,l[fs]=r,(p=l.nodeValue!==i)&&(t=vo,t!==null))switch(t.tag){case 3:zm(l.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zm(l.nodeValue,i,(t.mode&1)!==0)}p&&(r.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[fs]=r,r.stateNode=l}return Dr(r),null;case 13:if(cn(kn),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mn&&ko!==null&&r.mode&1&&!(r.flags&128))jP(),Cu(),r.flags|=98560,p=!1;else if(p=Fm(r),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(xe(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(xe(317));p[fs]=r}else Cu(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Dr(r),p=!1}else Ei!==null&&(fA(Ei),Ei=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=i,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,r.mode&1&&(t===null||kn.current&1?or===0&&(or=3):$_())),r.updateQueue!==null&&(r.flags|=4),Dr(r),null);case 4:return _u(),sA(t,r),t===null&&Rp(r.stateNode.containerInfo),Dr(r),null;case 10:return __(r.type._context),Dr(r),null;case 17:return ro(r.type)&&Hb(),Dr(r),null;case 19:if(cn(kn),p=r.memoizedState,p===null)return Dr(r),null;if(l=(r.flags&128)!==0,m=p.rendering,m===null)if(l)Hh(p,!1);else{if(or!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=Yb(t),m!==null){for(r.flags|=128,Hh(p,!1),l=m.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=i,i=r.child;i!==null;)p=i,t=l,p.flags&=14680066,m=p.alternate,m===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=m.childLanes,p.lanes=m.lanes,p.child=m.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=m.memoizedProps,p.memoizedState=m.memoizedState,p.updateQueue=m.updateQueue,p.type=m.type,t=m.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return en(kn,kn.current&1|2),r.child}t=t.sibling}p.tail!==null&&Bn()>Su&&(r.flags|=128,l=!0,Hh(p,!1),r.lanes=4194304)}else{if(!l)if(t=Yb(m),t!==null){if(r.flags|=128,l=!0,i=t.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),Hh(p,!0),p.tail===null&&p.tailMode==="hidden"&&!m.alternate&&!mn)return Dr(r),null}else 2*Bn()-p.renderingStartTime>Su&&i!==1073741824&&(r.flags|=128,l=!0,Hh(p,!1),r.lanes=4194304);p.isBackwards?(m.sibling=r.child,r.child=m):(i=p.last,i!==null?i.sibling=m:r.child=m,p.last=m)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Bn(),r.sibling=null,i=kn.current,en(kn,l?i&1|2:i&1),r):(Dr(r),null);case 22:case 23:return F_(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&r.mode&1?wo&1073741824&&(Dr(r),r.subtreeFlags&6&&(r.flags|=8192)):Dr(r),null;case 24:return null;case 25:return null}throw Error(xe(156,r.tag))}function EU(t,r){switch(v_(r),r.tag){case 1:return ro(r.type)&&Hb(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return _u(),cn(no),cn(Mr),D_(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return j_(r),null;case 13:if(cn(kn),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(xe(340));Cu()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return cn(kn),null;case 4:return _u(),null;case 10:return __(r.type._context),null;case 22:case 23:return F_(),null;case 24:return null;default:return null}}var Vm=!1,Nr=!1,jU=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Xd(t,r){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){Nn(t,r,l)}else i.current=null}function aA(t,r,i){try{i()}catch(l){Nn(t,r,l)}}var aI=!1;function DU(t,r){if(UC=Rb,t=mP(),w_(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var m=0,w=-1,b=-1,y=0,C=0,_=t,x=null;t:for(;;){for(var j;_!==i||u!==0&&_.nodeType!==3||(w=m+u),_!==p||l!==0&&_.nodeType!==3||(b=m+l),_.nodeType===3&&(m+=_.nodeValue.length),(j=_.firstChild)!==null;)x=_,_=j;for(;;){if(_===t)break t;if(x===i&&++y===u&&(w=m),x===p&&++C===l&&(b=m),(j=_.nextSibling)!==null)break;_=x,x=_.parentNode}_=j}i=w===-1||b===-1?null:{start:w,end:b}}else i=null}i=i||{start:0,end:0}}else i=null;for(WC={focusedElem:t,selectionRange:i},Rb=!1,Re=r;Re!==null;)if(r=Re,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Re=t;else for(;Re!==null;){r=Re;try{var M=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var R=M.memoizedProps,P=M.memoizedState,B=r.stateNode,I=B.getSnapshotBeforeUpdate(r.elementType===r.type?R:xi(r.type,R),P);B.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var O=r.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(H){Nn(r,r.return,H)}if(t=r.sibling,t!==null){t.return=r.return,Re=t;break}Re=r.return}return M=aI,aI=!1,M}function hp(t,r,i){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&aA(r,i,p)}u=u.next}while(u!==l)}}function Fw(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var l=i.create;i.destroy=l()}i=i.next}while(i!==r)}}function lA(t){var r=t.ref;if(r!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof r=="function"?r(t):r.current=t}}function hL(t){var r=t.alternate;r!==null&&(t.alternate=null,hL(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[fs],delete r[Fp],delete r[KC],delete r[uU],delete r[hU])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pL(t){return t.tag===5||t.tag===3||t.tag===4}function lI(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pL(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cA(t,r,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(t,r):i.insertBefore(t,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(t,i)):(r=i,r.appendChild(t)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=$b));else if(l!==4&&(t=t.child,t!==null))for(cA(t,r,i),t=t.sibling;t!==null;)cA(t,r,i),t=t.sibling}function dA(t,r,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?i.insertBefore(t,r):i.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(dA(t,r,i),t=t.sibling;t!==null;)dA(t,r,i),t=t.sibling}var yr=null,Si=!1;function Ra(t,r,i){for(i=i.child;i!==null;)fL(t,r,i),i=i.sibling}function fL(t,r,i){if(ms&&typeof ms.onCommitFiberUnmount=="function")try{ms.onCommitFiberUnmount(Iw,i)}catch{}switch(i.tag){case 5:Nr||Xd(i,r);case 6:var l=yr,u=Si;yr=null,Ra(t,r,i),yr=l,Si=u,yr!==null&&(Si?(t=yr,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):yr.removeChild(i.stateNode));break;case 18:yr!==null&&(Si?(t=yr,i=i.stateNode,t.nodeType===8?W0(t.parentNode,i):t.nodeType===1&&W0(t,i),Lp(t)):W0(yr,i.stateNode));break;case 4:l=yr,u=Si,yr=i.stateNode.containerInfo,Si=!0,Ra(t,r,i),yr=l,Si=u;break;case 0:case 11:case 14:case 15:if(!Nr&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,m=p.destroy;p=p.tag,m!==void 0&&(p&2||p&4)&&aA(i,r,m),u=u.next}while(u!==l)}Ra(t,r,i);break;case 1:if(!Nr&&(Xd(i,r),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(w){Nn(i,r,w)}Ra(t,r,i);break;case 21:Ra(t,r,i);break;case 22:i.mode&1?(Nr=(l=Nr)||i.memoizedState!==null,Ra(t,r,i),Nr=l):Ra(t,r,i);break;default:Ra(t,r,i)}}function cI(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new jU),r.forEach(function(l){var u=RU.bind(null,t,l);i.has(l)||(i.add(l),l.then(u,u))})}}function Ai(t,r){var i=r.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var p=t,m=r,w=m;e:for(;w!==null;){switch(w.tag){case 5:yr=w.stateNode,Si=!1;break e;case 3:yr=w.stateNode.containerInfo,Si=!0;break e;case 4:yr=w.stateNode.containerInfo,Si=!0;break e}w=w.return}if(yr===null)throw Error(xe(160));fL(p,m,u),yr=null,Si=!1;var b=u.alternate;b!==null&&(b.return=null),u.return=null}catch(y){Nn(u,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)mL(r,t),r=r.sibling}function mL(t,r){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ai(r,t),ls(t),l&4){try{hp(3,t,t.return),Fw(3,t)}catch(R){Nn(t,t.return,R)}try{hp(5,t,t.return)}catch(R){Nn(t,t.return,R)}}break;case 1:Ai(r,t),ls(t),l&512&&i!==null&&Xd(i,i.return);break;case 5:if(Ai(r,t),ls(t),l&512&&i!==null&&Xd(i,i.return),t.flags&32){var u=t.stateNode;try{Np(u,"")}catch(R){Nn(t,t.return,R)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,m=i!==null?i.memoizedProps:p,w=t.type,b=t.updateQueue;if(t.updateQueue=null,b!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&O5(u,p),PC(w,m);var y=PC(w,p);for(m=0;m<b.length;m+=2){var C=b[m],_=b[m+1];C==="style"?$5(u,_):C==="dangerouslySetInnerHTML"?z5(u,_):C==="children"?Np(u,_):i_(u,C,_,y)}switch(w){case"input":DC(u,p);break;case"textarea":B5(u,p);break;case"select":var x=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var j=p.value;j!=null?iu(u,!!p.multiple,j,!1):x!==!!p.multiple&&(p.defaultValue!=null?iu(u,!!p.multiple,p.defaultValue,!0):iu(u,!!p.multiple,p.multiple?[]:"",!1))}u[Fp]=p}catch(R){Nn(t,t.return,R)}}break;case 6:if(Ai(r,t),ls(t),l&4){if(t.stateNode===null)throw Error(xe(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(R){Nn(t,t.return,R)}}break;case 3:if(Ai(r,t),ls(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Lp(r.containerInfo)}catch(R){Nn(t,t.return,R)}break;case 4:Ai(r,t),ls(t);break;case 13:Ai(r,t),ls(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(R_=Bn())),l&4&&cI(t);break;case 22:if(C=i!==null&&i.memoizedState!==null,t.mode&1?(Nr=(y=Nr)||C,Ai(r,t),Nr=y):Ai(r,t),ls(t),l&8192){if(y=t.memoizedState!==null,(t.stateNode.isHidden=y)&&!C&&t.mode&1)for(Re=t,C=t.child;C!==null;){for(_=Re=C;Re!==null;){switch(x=Re,j=x.child,x.tag){case 0:case 11:case 14:case 15:hp(4,x,x.return);break;case 1:Xd(x,x.return);var M=x.stateNode;if(typeof M.componentWillUnmount=="function"){l=x,i=x.return;try{r=l,M.props=r.memoizedProps,M.state=r.memoizedState,M.componentWillUnmount()}catch(R){Nn(l,i,R)}}break;case 5:Xd(x,x.return);break;case 22:if(x.memoizedState!==null){uI(_);continue}}j!==null?(j.return=x,Re=j):uI(_)}C=C.sibling}e:for(C=null,_=t;;){if(_.tag===5){if(C===null){C=_;try{u=_.stateNode,y?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=_.stateNode,b=_.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null,w.style.display=F5("display",m))}catch(R){Nn(t,t.return,R)}}}else if(_.tag===6){if(C===null)try{_.stateNode.nodeValue=y?"":_.memoizedProps}catch(R){Nn(t,t.return,R)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===t)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;C===_&&(C=null),_=_.return}C===_&&(C=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Ai(r,t),ls(t),l&4&&cI(t);break;case 21:break;default:Ai(r,t),ls(t)}}function ls(t){var r=t.flags;if(r&2){try{e:{for(var i=t.return;i!==null;){if(pL(i)){var l=i;break e}i=i.return}throw Error(xe(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Np(u,""),l.flags&=-33);var p=lI(t);dA(t,p,u);break;case 3:case 4:var m=l.stateNode.containerInfo,w=lI(t);cA(t,w,m);break;default:throw Error(xe(161))}}catch(b){Nn(t,t.return,b)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function TU(t,r,i){Re=t,gL(t)}function gL(t,r,i){for(var l=(t.mode&1)!==0;Re!==null;){var u=Re,p=u.child;if(u.tag===22&&l){var m=u.memoizedState!==null||Vm;if(!m){var w=u.alternate,b=w!==null&&w.memoizedState!==null||Nr;w=Vm;var y=Nr;if(Vm=m,(Nr=b)&&!y)for(Re=u;Re!==null;)m=Re,b=m.child,m.tag===22&&m.memoizedState!==null?hI(u):b!==null?(b.return=m,Re=b):hI(u);for(;p!==null;)Re=p,gL(p),p=p.sibling;Re=u,Vm=w,Nr=y}dI(t)}else u.subtreeFlags&8772&&p!==null?(p.return=u,Re=p):dI(t)}}function dI(t){for(;Re!==null;){var r=Re;if(r.flags&8772){var i=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Nr||Fw(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!Nr)if(i===null)l.componentDidMount();else{var u=r.elementType===r.type?i.memoizedProps:xi(r.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&GN(r,p,l);break;case 3:var m=r.updateQueue;if(m!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}GN(r,m,i)}break;case 5:var w=r.stateNode;if(i===null&&r.flags&4){i=w;var b=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&i.focus();break;case"img":b.src&&(i.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var C=y.memoizedState;if(C!==null){var _=C.dehydrated;_!==null&&Lp(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Nr||r.flags&512&&lA(r)}catch(x){Nn(r,r.return,x)}}if(r===t){Re=null;break}if(i=r.sibling,i!==null){i.return=r.return,Re=i;break}Re=r.return}}function uI(t){for(;Re!==null;){var r=Re;if(r===t){Re=null;break}var i=r.sibling;if(i!==null){i.return=r.return,Re=i;break}Re=r.return}}function hI(t){for(;Re!==null;){var r=Re;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{Fw(4,r)}catch(b){Nn(r,i,b)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var u=r.return;try{l.componentDidMount()}catch(b){Nn(r,u,b)}}var p=r.return;try{lA(r)}catch(b){Nn(r,p,b)}break;case 5:var m=r.return;try{lA(r)}catch(b){Nn(r,m,b)}}}catch(b){Nn(r,r.return,b)}if(r===t){Re=null;break}var w=r.sibling;if(w!==null){w.return=r.return,Re=w;break}Re=r.return}}var NU=Math.ceil,Jb=ta.ReactCurrentDispatcher,O_=ta.ReactCurrentOwner,ti=ta.ReactCurrentBatchConfig,St=0,fr=null,Un=null,Cr=0,wo=0,eu=bl(0),or=0,qp=null,Bc=0,$w=0,B_=0,pp=null,Xr=null,R_=0,Su=1/0,Hs=null,Xb=!1,uA=null,ol=null,Um=!1,Qa=null,ew=0,fp=0,hA=null,wg=-1,kg=0;function $r(){return St&6?Bn():wg!==-1?wg:wg=Bn()}function il(t){return t.mode&1?St&2&&Cr!==0?Cr&-Cr:fU.transition!==null?(kg===0&&(kg=X5()),kg):(t=zt,t!==0||(t=window.event,t=t===void 0?16:sP(t.type)),t):1}function Ni(t,r,i,l){if(50<fp)throw fp=0,hA=null,Error(xe(185));of(t,i,l),(!(St&2)||t!==fr)&&(t===fr&&(!(St&2)&&($w|=i),or===4&&Ga(t,Cr)),oo(t,l),i===1&&St===0&&!(r.mode&1)&&(Su=Bn()+500,Bw&&wl()))}function oo(t,r){var i=t.callbackNode;fV(t,r);var l=Bb(t,t===fr?Cr:0);if(l===0)i!==null&&yN(i),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(i!=null&&yN(i),r===1)t.tag===0?pU(pI.bind(null,t)):xP(pI.bind(null,t)),cU(function(){!(St&6)&&wl()}),i=null;else{switch(eP(l)){case 1:i=d_;break;case 4:i=Z5;break;case 16:i=Ob;break;case 536870912:i=J5;break;default:i=Ob}i=_L(i,bL.bind(null,t))}t.callbackPriority=r,t.callbackNode=i}}function bL(t,r){if(wg=-1,kg=0,St&6)throw Error(xe(327));var i=t.callbackNode;if(du()&&t.callbackNode!==i)return null;var l=Bb(t,t===fr?Cr:0);if(l===0)return null;if(l&30||l&t.expiredLanes||r)r=tw(t,l);else{r=l;var u=St;St|=2;var p=kL();(fr!==t||Cr!==r)&&(Hs=null,Su=Bn()+500,Dc(t,r));do try{PU();break}catch(w){wL(t,w)}while(1);A_(),Jb.current=p,St=u,Un!==null?r=0:(fr=null,Cr=0,r=or)}if(r!==0){if(r===2&&(u=zC(t),u!==0&&(l=u,r=pA(t,u))),r===1)throw i=qp,Dc(t,0),Ga(t,l),oo(t,Bn()),i;if(r===6)Ga(t,l);else{if(u=t.current.alternate,!(l&30)&&!IU(u)&&(r=tw(t,l),r===2&&(p=zC(t),p!==0&&(l=p,r=pA(t,p))),r===1))throw i=qp,Dc(t,0),Ga(t,l),oo(t,Bn()),i;switch(t.finishedWork=u,t.finishedLanes=l,r){case 0:case 1:throw Error(xe(345));case 2:wc(t,Xr,Hs);break;case 3:if(Ga(t,l),(l&130023424)===l&&(r=R_+500-Bn(),10<r)){if(Bb(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){$r(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=GC(wc.bind(null,t,Xr,Hs),r);break}wc(t,Xr,Hs);break;case 4:if(Ga(t,l),(l&4194240)===l)break;for(r=t.eventTimes,u=-1;0<l;){var m=31-Ti(l);p=1<<m,m=r[m],m>u&&(u=m),l&=~p}if(l=u,l=Bn()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*NU(l/1960))-l,10<l){t.timeoutHandle=GC(wc.bind(null,t,Xr,Hs),l);break}wc(t,Xr,Hs);break;case 5:wc(t,Xr,Hs);break;default:throw Error(xe(329))}}}return oo(t,Bn()),t.callbackNode===i?bL.bind(null,t):null}function pA(t,r){var i=pp;return t.current.memoizedState.isDehydrated&&(Dc(t,r).flags|=256),t=tw(t,r),t!==2&&(r=Xr,Xr=i,r!==null&&fA(r)),t}function fA(t){Xr===null?Xr=t:Xr.push.apply(Xr,t)}function IU(t){for(var r=t;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],p=u.getSnapshot;u=u.value;try{if(!Mi(p(),u))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ga(t,r){for(r&=~B_,r&=~$w,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var i=31-Ti(r),l=1<<i;t[i]=-1,r&=~l}}function pI(t){if(St&6)throw Error(xe(327));du();var r=Bb(t,0);if(!(r&1))return oo(t,Bn()),null;var i=tw(t,r);if(t.tag!==0&&i===2){var l=zC(t);l!==0&&(r=l,i=pA(t,l))}if(i===1)throw i=qp,Dc(t,0),Ga(t,r),oo(t,Bn()),i;if(i===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,wc(t,Xr,Hs),oo(t,Bn()),null}function z_(t,r){var i=St;St|=1;try{return t(r)}finally{St=i,St===0&&(Su=Bn()+500,Bw&&wl())}}function Rc(t){Qa!==null&&Qa.tag===0&&!(St&6)&&du();var r=St;St|=1;var i=ti.transition,l=zt;try{if(ti.transition=null,zt=1,t)return t()}finally{zt=l,ti.transition=i,St=r,!(St&6)&&wl()}}function F_(){wo=eu.current,cn(eu)}function Dc(t,r){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,lU(i)),Un!==null)for(i=Un.return;i!==null;){var l=i;switch(v_(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Hb();break;case 3:_u(),cn(no),cn(Mr),D_();break;case 5:j_(l);break;case 4:_u();break;case 13:cn(kn);break;case 19:cn(kn);break;case 10:__(l.type._context);break;case 22:case 23:F_()}i=i.return}if(fr=t,Un=t=sl(t.current,null),Cr=wo=r,or=0,qp=null,B_=$w=Bc=0,Xr=pp=null,Sc!==null){for(r=0;r<Sc.length;r++)if(i=Sc[r],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,p=i.pending;if(p!==null){var m=p.next;p.next=u,l.next=m}i.pending=l}Sc=null}return t}function wL(t,r){do{var i=Un;try{if(A_(),mg.current=Zb,Qb){for(var l=yn.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Qb=!1}if(Oc=0,hr=rr=yn=null,up=!1,Vp=0,O_.current=null,i===null||i.return===null){or=1,qp=r,Un=null;break}e:{var p=t,m=i.return,w=i,b=r;if(r=Cr,w.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var y=b,C=w,_=C.tag;if(!(C.mode&1)&&(_===0||_===11||_===15)){var x=C.alternate;x?(C.updateQueue=x.updateQueue,C.memoizedState=x.memoizedState,C.lanes=x.lanes):(C.updateQueue=null,C.memoizedState=null)}var j=eI(m);if(j!==null){j.flags&=-257,tI(j,m,w,p,r),j.mode&1&&XN(p,y,r),r=j,b=y;var M=r.updateQueue;if(M===null){var R=new Set;R.add(b),r.updateQueue=R}else M.add(b);break e}else{if(!(r&1)){XN(p,y,r),$_();break e}b=Error(xe(426))}}else if(mn&&w.mode&1){var P=eI(m);if(P!==null){!(P.flags&65536)&&(P.flags|=256),tI(P,m,w,p,r),y_(xu(b,w));break e}}p=b=xu(b,w),or!==4&&(or=2),pp===null?pp=[p]:pp.push(p),p=m;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var B=tL(p,b,r);qN(p,B);break e;case 1:w=b;var I=p.type,O=p.stateNode;if(!(p.flags&128)&&(typeof I.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(ol===null||!ol.has(O)))){p.flags|=65536,r&=-r,p.lanes|=r;var H=nL(p,w,r);qN(p,H);break e}}p=p.return}while(p!==null)}yL(i)}catch(q){r=q,Un===i&&i!==null&&(Un=i=i.return);continue}break}while(1)}function kL(){var t=Jb.current;return Jb.current=Zb,t===null?Zb:t}function $_(){(or===0||or===3||or===2)&&(or=4),fr===null||!(Bc&268435455)&&!($w&268435455)||Ga(fr,Cr)}function tw(t,r){var i=St;St|=2;var l=kL();(fr!==t||Cr!==r)&&(Hs=null,Dc(t,r));do try{MU();break}catch(u){wL(t,u)}while(1);if(A_(),St=i,Jb.current=l,Un!==null)throw Error(xe(261));return fr=null,Cr=0,or}function MU(){for(;Un!==null;)vL(Un)}function PU(){for(;Un!==null&&!iV();)vL(Un)}function vL(t){var r=AL(t.alternate,t,wo);t.memoizedProps=t.pendingProps,r===null?yL(t):Un=r,O_.current=null}function yL(t){var r=t;do{var i=r.alternate;if(t=r.return,r.flags&32768){if(i=EU(i,r),i!==null){i.flags&=32767,Un=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{or=6,Un=null;return}}else if(i=SU(i,r,wo),i!==null){Un=i;return}if(r=r.sibling,r!==null){Un=r;return}Un=r=t}while(r!==null);or===0&&(or=5)}function wc(t,r,i){var l=zt,u=ti.transition;try{ti.transition=null,zt=1,LU(t,r,i,l)}finally{ti.transition=u,zt=l}return null}function LU(t,r,i,l){do du();while(Qa!==null);if(St&6)throw Error(xe(327));i=t.finishedWork;var u=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var p=i.lanes|i.childLanes;if(mV(t,p),t===fr&&(Un=fr=null,Cr=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Um||(Um=!0,_L(Ob,function(){return du(),null})),p=(i.flags&15990)!==0,i.subtreeFlags&15990||p){p=ti.transition,ti.transition=null;var m=zt;zt=1;var w=St;St|=4,O_.current=null,DU(t,i),mL(i,t),tU(WC),Rb=!!UC,WC=UC=null,t.current=i,TU(i),sV(),St=w,zt=m,ti.transition=p}else t.current=i;if(Um&&(Um=!1,Qa=t,ew=u),p=t.pendingLanes,p===0&&(ol=null),cV(i.stateNode),oo(t,Bn()),r!==null)for(l=t.onRecoverableError,i=0;i<r.length;i++)u=r[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(Xb)throw Xb=!1,t=uA,uA=null,t;return ew&1&&t.tag!==0&&du(),p=t.pendingLanes,p&1?t===hA?fp++:(fp=0,hA=t):fp=0,wl(),null}function du(){if(Qa!==null){var t=eP(ew),r=ti.transition,i=zt;try{if(ti.transition=null,zt=16>t?16:t,Qa===null)var l=!1;else{if(t=Qa,Qa=null,ew=0,St&6)throw Error(xe(331));var u=St;for(St|=4,Re=t.current;Re!==null;){var p=Re,m=p.child;if(Re.flags&16){var w=p.deletions;if(w!==null){for(var b=0;b<w.length;b++){var y=w[b];for(Re=y;Re!==null;){var C=Re;switch(C.tag){case 0:case 11:case 15:hp(8,C,p)}var _=C.child;if(_!==null)_.return=C,Re=_;else for(;Re!==null;){C=Re;var x=C.sibling,j=C.return;if(hL(C),C===y){Re=null;break}if(x!==null){x.return=j,Re=x;break}Re=j}}}var M=p.alternate;if(M!==null){var R=M.child;if(R!==null){M.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}Re=p}}if(p.subtreeFlags&2064&&m!==null)m.return=p,Re=m;else e:for(;Re!==null;){if(p=Re,p.flags&2048)switch(p.tag){case 0:case 11:case 15:hp(9,p,p.return)}var B=p.sibling;if(B!==null){B.return=p.return,Re=B;break e}Re=p.return}}var I=t.current;for(Re=I;Re!==null;){m=Re;var O=m.child;if(m.subtreeFlags&2064&&O!==null)O.return=m,Re=O;else e:for(m=I;Re!==null;){if(w=Re,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:Fw(9,w)}}catch(q){Nn(w,w.return,q)}if(w===m){Re=null;break e}var H=w.sibling;if(H!==null){H.return=w.return,Re=H;break e}Re=w.return}}if(St=u,wl(),ms&&typeof ms.onPostCommitFiberRoot=="function")try{ms.onPostCommitFiberRoot(Iw,t)}catch{}l=!0}return l}finally{zt=i,ti.transition=r}}return!1}function fI(t,r,i){r=xu(i,r),r=tL(t,r,1),t=rl(t,r,1),r=$r(),t!==null&&(of(t,1,r),oo(t,r))}function Nn(t,r,i){if(t.tag===3)fI(t,t,i);else for(;r!==null;){if(r.tag===3){fI(r,t,i);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ol===null||!ol.has(l))){t=xu(i,t),t=nL(r,t,1),r=rl(r,t,1),t=$r(),r!==null&&(of(r,1,t),oo(r,t));break}}r=r.return}}function OU(t,r,i){var l=t.pingCache;l!==null&&l.delete(r),r=$r(),t.pingedLanes|=t.suspendedLanes&i,fr===t&&(Cr&i)===i&&(or===4||or===3&&(Cr&130023424)===Cr&&500>Bn()-R_?Dc(t,0):B_|=i),oo(t,r)}function CL(t,r){r===0&&(t.mode&1?(r=Pm,Pm<<=1,!(Pm&130023424)&&(Pm=4194304)):r=1);var i=$r();t=Js(t,r),t!==null&&(of(t,r,i),oo(t,i))}function BU(t){var r=t.memoizedState,i=0;r!==null&&(i=r.retryLane),CL(t,i)}function RU(t,r){var i=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(xe(314))}l!==null&&l.delete(r),CL(t,i)}var AL;AL=function(t,r,i){if(t!==null)if(t.memoizedProps!==r.pendingProps||no.current)eo=!0;else{if(!(t.lanes&i)&&!(r.flags&128))return eo=!1,xU(t,r,i);eo=!!(t.flags&131072)}else eo=!1,mn&&r.flags&1048576&&SP(r,Wb,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;bg(t,r),t=r.pendingProps;var u=yu(r,Mr.current);cu(r,i),u=N_(null,r,l,t,u,i);var p=I_();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ro(l)?(p=!0,Vb(r)):p=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,S_(r),u.updater=Rw,r.stateNode=u,u._reactInternals=r,eA(r,l,t,i),r=rA(null,r,l,!0,p,i)):(r.tag=0,mn&&p&&k_(r),Fr(null,r,u,i),r=r.child),r;case 16:l=r.elementType;e:{switch(bg(t,r),t=r.pendingProps,u=l._init,l=u(l._payload),r.type=l,u=r.tag=FU(l),t=xi(l,t),u){case 0:r=nA(null,r,l,t,i);break e;case 1:r=oI(null,r,l,t,i);break e;case 11:r=nI(null,r,l,t,i);break e;case 14:r=rI(null,r,l,xi(l.type,t),i);break e}throw Error(xe(306,l,""))}return r;case 0:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:xi(l,u),nA(t,r,l,u,i);case 1:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:xi(l,u),oI(t,r,l,u,i);case 3:e:{if(sL(r),t===null)throw Error(xe(387));l=r.pendingProps,p=r.memoizedState,u=p.element,TP(t,r),Kb(r,l,null,i);var m=r.memoizedState;if(l=m.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){u=xu(Error(xe(423)),r),r=iI(t,r,l,i,u);break e}else if(l!==u){u=xu(Error(xe(424)),r),r=iI(t,r,l,i,u);break e}else for(ko=nl(r.stateNode.containerInfo.firstChild),vo=r,mn=!0,Ei=null,i=PP(r,null,l,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Cu(),l===u){r=Xs(t,r,i);break e}Fr(t,r,l,i)}r=r.child}return r;case 5:return LP(r),t===null&&ZC(r),l=r.type,u=r.pendingProps,p=t!==null?t.memoizedProps:null,m=u.children,qC(l,u)?m=null:p!==null&&qC(l,p)&&(r.flags|=32),iL(t,r),Fr(t,r,m,i),r.child;case 6:return t===null&&ZC(r),null;case 13:return aL(t,r,i);case 4:return E_(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Au(r,null,l,i):Fr(t,r,l,i),r.child;case 11:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:xi(l,u),nI(t,r,l,u,i);case 7:return Fr(t,r,r.pendingProps,i),r.child;case 8:return Fr(t,r,r.pendingProps.children,i),r.child;case 12:return Fr(t,r,r.pendingProps.children,i),r.child;case 10:e:{if(l=r.type._context,u=r.pendingProps,p=r.memoizedProps,m=u.value,en(qb,l._currentValue),l._currentValue=m,p!==null)if(Mi(p.value,m)){if(p.children===u.children&&!no.current){r=Xs(t,r,i);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var w=p.dependencies;if(w!==null){m=p.child;for(var b=w.firstContext;b!==null;){if(b.context===l){if(p.tag===1){b=Ks(-1,i&-i),b.tag=2;var y=p.updateQueue;if(y!==null){y=y.shared;var C=y.pending;C===null?b.next=b:(b.next=C.next,C.next=b),y.pending=b}}p.lanes|=i,b=p.alternate,b!==null&&(b.lanes|=i),JC(p.return,i,r),w.lanes|=i;break}b=b.next}}else if(p.tag===10)m=p.type===r.type?null:p.child;else if(p.tag===18){if(m=p.return,m===null)throw Error(xe(341));m.lanes|=i,w=m.alternate,w!==null&&(w.lanes|=i),JC(m,i,r),m=p.sibling}else m=p.child;if(m!==null)m.return=p;else for(m=p;m!==null;){if(m===r){m=null;break}if(p=m.sibling,p!==null){p.return=m.return,m=p;break}m=m.return}p=m}Fr(t,r,u.children,i),r=r.child}return r;case 9:return u=r.type,l=r.pendingProps.children,cu(r,i),u=ri(u),l=l(u),r.flags|=1,Fr(t,r,l,i),r.child;case 14:return l=r.type,u=xi(l,r.pendingProps),u=xi(l.type,u),rI(t,r,l,u,i);case 15:return rL(t,r,r.type,r.pendingProps,i);case 17:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:xi(l,u),bg(t,r),r.tag=1,ro(l)?(t=!0,Vb(r)):t=!1,cu(r,i),IP(r,l,u),eA(r,l,u,i),rA(null,r,l,!0,t,i);case 19:return lL(t,r,i);case 22:return oL(t,r,i)}throw Error(xe(156,r.tag))};function _L(t,r){return Q5(t,r)}function zU(t,r,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xo(t,r,i,l){return new zU(t,r,i,l)}function H_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FU(t){if(typeof t=="function")return H_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===a_)return 11;if(t===l_)return 14}return 2}function sl(t,r){var i=t.alternate;return i===null?(i=Xo(t.tag,r,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=r,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,r=t.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function vg(t,r,i,l,u,p){var m=2;if(l=t,typeof t=="function")H_(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Ud:return Tc(i.children,u,p,r);case s_:m=8,u|=8;break;case _C:return t=Xo(12,i,r,u|2),t.elementType=_C,t.lanes=p,t;case xC:return t=Xo(13,i,r,u),t.elementType=xC,t.lanes=p,t;case SC:return t=Xo(19,i,r,u),t.elementType=SC,t.lanes=p,t;case M5:return Hw(i,u,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N5:m=10;break e;case I5:m=9;break e;case a_:m=11;break e;case l_:m=14;break e;case $a:m=16,l=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return r=Xo(m,i,r,u),r.elementType=t,r.type=l,r.lanes=p,r}function Tc(t,r,i,l){return t=Xo(7,t,l,r),t.lanes=i,t}function Hw(t,r,i,l){return t=Xo(22,t,l,r),t.elementType=M5,t.lanes=i,t.stateNode={isHidden:!1},t}function X0(t,r,i){return t=Xo(6,t,null,r),t.lanes=i,t}function ey(t,r,i){return r=Xo(4,t.children!==null?t.children:[],t.key,r),r.lanes=i,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function $U(t,r,i,l,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=P0(0),this.expirationTimes=P0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=P0(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function V_(t,r,i,l,u,p,m,w,b){return t=new $U(t,r,i,w,b),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Xo(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},S_(p),t}function HU(t,r,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vd,key:l==null?null:""+l,children:t,containerInfo:r,implementation:i}}function xL(t){if(!t)return pl;t=t._reactInternals;e:{if(Uc(t)!==t||t.tag!==1)throw Error(xe(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ro(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(xe(171))}if(t.tag===1){var i=t.type;if(ro(i))return _P(t,i,r)}return r}function SL(t,r,i,l,u,p,m,w,b){return t=V_(i,l,!0,t,u,p,m,w,b),t.context=xL(null),i=t.current,l=$r(),u=il(i),p=Ks(l,u),p.callback=r??null,rl(i,p,u),t.current.lanes=u,of(t,u,l),oo(t,l),t}function Vw(t,r,i,l){var u=r.current,p=$r(),m=il(u);return i=xL(i),r.context===null?r.context=i:r.pendingContext=i,r=Ks(p,m),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=rl(u,r,m),t!==null&&(Ni(t,u,m,p),fg(t,u,m)),m}function nw(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mI(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<r?i:r}}function U_(t,r){mI(t,r),(t=t.alternate)&&mI(t,r)}function VU(){return null}var EL=typeof reportError=="function"?reportError:function(t){console.error(t)};function W_(t){this._internalRoot=t}Uw.prototype.render=W_.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(xe(409));Vw(t,r,null,null)};Uw.prototype.unmount=W_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Rc(function(){Vw(null,t,null,null)}),r[Zs]=null}};function Uw(t){this._internalRoot=t}Uw.prototype.unstable_scheduleHydration=function(t){if(t){var r=rP();t={blockedOn:null,target:t,priority:r};for(var i=0;i<qa.length&&r!==0&&r<qa[i].priority;i++);qa.splice(i,0,t),i===0&&iP(t)}};function q_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ww(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gI(){}function UU(t,r,i,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var y=nw(m);p.call(y)}}var m=SL(r,l,t,0,null,!1,!1,"",gI);return t._reactRootContainer=m,t[Zs]=m.current,Rp(t.nodeType===8?t.parentNode:t),Rc(),m}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var w=l;l=function(){var y=nw(b);w.call(y)}}var b=V_(t,0,!1,null,null,!1,!1,"",gI);return t._reactRootContainer=b,t[Zs]=b.current,Rp(t.nodeType===8?t.parentNode:t),Rc(function(){Vw(r,b,i,l)}),b}function qw(t,r,i,l,u){var p=i._reactRootContainer;if(p){var m=p;if(typeof u=="function"){var w=u;u=function(){var b=nw(m);w.call(b)}}Vw(r,m,t,u)}else m=UU(i,r,t,u,l);return nw(m)}tP=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var i=Xh(r.pendingLanes);i!==0&&(u_(r,i|1),oo(r,Bn()),!(St&6)&&(Su=Bn()+500,wl()))}break;case 13:Rc(function(){var l=Js(t,1);if(l!==null){var u=$r();Ni(l,t,1,u)}}),U_(t,1)}};h_=function(t){if(t.tag===13){var r=Js(t,134217728);if(r!==null){var i=$r();Ni(r,t,134217728,i)}U_(t,134217728)}};nP=function(t){if(t.tag===13){var r=il(t),i=Js(t,r);if(i!==null){var l=$r();Ni(i,t,r,l)}U_(t,r)}};rP=function(){return zt};oP=function(t,r){var i=zt;try{return zt=t,r()}finally{zt=i}};OC=function(t,r,i){switch(r){case"input":if(DC(t,i),r=i.name,i.type==="radio"&&r!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var l=i[r];if(l!==t&&l.form===t.form){var u=Ow(l);if(!u)throw Error(xe(90));L5(l),DC(l,u)}}}break;case"textarea":B5(t,i);break;case"select":r=i.value,r!=null&&iu(t,!!i.multiple,r,!1)}};U5=z_;W5=Rc;var WU={usingClientEntryPoint:!1,Events:[af,Kd,Ow,H5,V5,z_]},Vh={findFiberByHostInstance:xc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qU={bundleType:Vh.bundleType,version:Vh.version,rendererPackageName:Vh.rendererPackageName,rendererConfig:Vh.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ta.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K5(t),t===null?null:t.stateNode},findFiberByHostInstance:Vh.findFiberByHostInstance||VU,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wm.isDisabled&&Wm.supportsFiber)try{Iw=Wm.inject(qU),ms=Wm}catch{}}So.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WU;So.createPortal=function(t,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q_(r))throw Error(xe(200));return HU(t,r,null,i)};So.createRoot=function(t,r){if(!q_(t))throw Error(xe(299));var i=!1,l="",u=EL;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=V_(t,1,!1,null,null,i,!1,l,u),t[Zs]=r.current,Rp(t.nodeType===8?t.parentNode:t),new W_(r)};So.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=K5(r),t=t===null?null:t.stateNode,t};So.flushSync=function(t){return Rc(t)};So.hydrate=function(t,r,i){if(!Ww(r))throw Error(xe(200));return qw(null,t,r,!0,i)};So.hydrateRoot=function(t,r,i){if(!q_(t))throw Error(xe(405));var l=i!=null&&i.hydratedSources||null,u=!1,p="",m=EL;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),r=SL(r,null,t,1,i??null,u,!1,p,m),t[Zs]=r.current,Rp(t),l)for(t=0;t<l.length;t++)i=l[t],u=i._getVersion,u=u(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,u]:r.mutableSourceEagerHydrationData.push(i,u);return new Uw(r)};So.render=function(t,r,i){if(!Ww(r))throw Error(xe(200));return qw(null,t,r,!1,i)};So.unmountComponentAtNode=function(t){if(!Ww(t))throw Error(xe(40));return t._reactRootContainer?(Rc(function(){qw(null,null,t,!1,function(){t._reactRootContainer=null,t[Zs]=null})}),!0):!1};So.unstable_batchedUpdates=z_;So.unstable_renderSubtreeIntoContainer=function(t,r,i,l){if(!Ww(i))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return qw(t,r,i,!1,l)};So.version="18.2.0-next-9e3b772b8-20220608";function jL(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jL)}catch(t){console.error(t)}}jL(),S5.exports=So;var G_=S5.exports;const tu=ws(G_);var bI=G_;CC.createRoot=bI.createRoot,CC.hydrateRoot=bI.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gp(){return Gp=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},Gp.apply(this,arguments)}var Za;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Za||(Za={}));const wI="popstate";function GU(t){t===void 0&&(t={});function r(l,u){let{pathname:p,search:m,hash:w}=l.location;return mA("",{pathname:p,search:m,hash:w},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){return typeof u=="string"?u:rw(u)}return YU(r,i,null,t)}function Wn(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function K_(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function KU(){return Math.random().toString(36).substr(2,8)}function kI(t,r){return{usr:t.state,key:t.key,idx:r}}function mA(t,r,i,l){return i===void 0&&(i=null),Gp({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof r=="string"?$u(r):r,{state:i,key:r&&r.key||l||KU()})}function rw(t){let{pathname:r="/",search:i="",hash:l=""}=t;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function $u(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substr(i),t=t.substr(0,i));let l=t.indexOf("?");l>=0&&(r.search=t.substr(l),t=t.substr(0,l)),t&&(r.pathname=t)}return r}function YU(t,r,i,l){l===void 0&&(l={});let{window:u=document.defaultView,v5Compat:p=!1}=l,m=u.history,w=Za.Pop,b=null,y=C();y==null&&(y=0,m.replaceState(Gp({},m.state,{idx:y}),""));function C(){return(m.state||{idx:null}).idx}function _(){w=Za.Pop;let P=C(),B=P==null?null:P-y;y=P,b&&b({action:w,location:R.location,delta:B})}function x(P,B){w=Za.Push;let I=mA(R.location,P,B);i&&i(I,P),y=C()+1;let O=kI(I,y),H=R.createHref(I);try{m.pushState(O,"",H)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(H)}p&&b&&b({action:w,location:R.location,delta:1})}function j(P,B){w=Za.Replace;let I=mA(R.location,P,B);i&&i(I,P),y=C();let O=kI(I,y),H=R.createHref(I);m.replaceState(O,"",H),p&&b&&b({action:w,location:R.location,delta:0})}function M(P){let B=u.location.origin!=="null"?u.location.origin:u.location.href,I=typeof P=="string"?P:rw(P);return Wn(B,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,B)}let R={get action(){return w},get location(){return t(u,m)},listen(P){if(b)throw new Error("A history only accepts one active listener");return u.addEventListener(wI,_),b=P,()=>{u.removeEventListener(wI,_),b=null}},createHref(P){return r(u,P)},createURL:M,encodeLocation(P){let B=M(P);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:x,replace:j,go(P){return m.go(P)}};return R}var vI;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vI||(vI={}));function QU(t,r,i){i===void 0&&(i="/");let l=typeof r=="string"?$u(r):r,u=Y_(l.pathname||"/",i);if(u==null)return null;let p=DL(t);ZU(p);let m=null;for(let w=0;m==null&&w<p.length;++w)m=sW(p[w],cW(u));return m}function DL(t,r,i,l){r===void 0&&(r=[]),i===void 0&&(i=[]),l===void 0&&(l="");let u=(p,m,w)=>{let b={relativePath:w===void 0?p.path||"":w,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};b.relativePath.startsWith("/")&&(Wn(b.relativePath.startsWith(l),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(l.length));let y=al([l,b.relativePath]),C=i.concat(b);p.children&&p.children.length>0&&(Wn(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),DL(p.children,r,C,y)),!(p.path==null&&!p.index)&&r.push({path:y,score:oW(y,p.index),routesMeta:C})};return t.forEach((p,m)=>{var w;if(p.path===""||!((w=p.path)!=null&&w.includes("?")))u(p,m);else for(let b of TL(p.path))u(p,m,b)}),r}function TL(t){let r=t.split("/");if(r.length===0)return[];let[i,...l]=r,u=i.endsWith("?"),p=i.replace(/\?$/,"");if(l.length===0)return u?[p,""]:[p];let m=TL(l.join("/")),w=[];return w.push(...m.map(b=>b===""?p:[p,b].join("/"))),u&&w.push(...m),w.map(b=>t.startsWith("/")&&b===""?"/":b)}function ZU(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:iW(r.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}const JU=/^:\w+$/,XU=3,eW=2,tW=1,nW=10,rW=-2,yI=t=>t==="*";function oW(t,r){let i=t.split("/"),l=i.length;return i.some(yI)&&(l+=rW),r&&(l+=eW),i.filter(u=>!yI(u)).reduce((u,p)=>u+(JU.test(p)?XU:p===""?tW:nW),l)}function iW(t,r){return t.length===r.length&&t.slice(0,-1).every((l,u)=>l===r[u])?t[t.length-1]-r[r.length-1]:0}function sW(t,r){let{routesMeta:i}=t,l={},u="/",p=[];for(let m=0;m<i.length;++m){let w=i[m],b=m===i.length-1,y=u==="/"?r:r.slice(u.length)||"/",C=aW({path:w.relativePath,caseSensitive:w.caseSensitive,end:b},y);if(!C)return null;Object.assign(l,C.params);let _=w.route;p.push({params:l,pathname:al([u,C.pathname]),pathnameBase:pW(al([u,C.pathnameBase])),route:_}),C.pathnameBase!=="/"&&(u=al([u,C.pathnameBase]))}return p}function aW(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,l]=lW(t.path,t.caseSensitive,t.end),u=r.match(i);if(!u)return null;let p=u[0],m=p.replace(/(.)\/+$/,"$1"),w=u.slice(1);return{params:l.reduce((y,C,_)=>{if(C==="*"){let x=w[_]||"";m=p.slice(0,p.length-x.length).replace(/(.)\/+$/,"$1")}return y[C]=dW(w[_]||"",C),y},{}),pathname:p,pathnameBase:m,pattern:t}}function lW(t,r,i){r===void 0&&(r=!1),i===void 0&&(i=!0),K_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(m,w)=>(l.push(w),"/([^\\/]+)"));return t.endsWith("*")?(l.push("*"),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,r?void 0:"i"),l]}function cW(t){try{return decodeURI(t)}catch(r){return K_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),t}}function dW(t,r){try{return decodeURIComponent(t)}catch(i){return K_(!1,'The value for the URL param "'+r+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+i+").")),t}}function Y_(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,l=t.charAt(i);return l&&l!=="/"?null:t.slice(i)||"/"}function uW(t,r){r===void 0&&(r="/");let{pathname:i,search:l="",hash:u=""}=typeof t=="string"?$u(t):t;return{pathname:i?i.startsWith("/")?i:hW(i,r):r,search:fW(l),hash:mW(u)}}function hW(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function ty(t,r,i,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NL(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function IL(t,r,i,l){l===void 0&&(l=!1);let u;typeof t=="string"?u=$u(t):(u=Gp({},t),Wn(!u.pathname||!u.pathname.includes("?"),ty("?","pathname","search",u)),Wn(!u.pathname||!u.pathname.includes("#"),ty("#","pathname","hash",u)),Wn(!u.search||!u.search.includes("#"),ty("#","search","hash",u)));let p=t===""||u.pathname==="",m=p?"/":u.pathname,w;if(l||m==null)w=i;else{let _=r.length-1;if(m.startsWith("..")){let x=m.split("/");for(;x[0]==="..";)x.shift(),_-=1;u.pathname=x.join("/")}w=_>=0?r[_]:"/"}let b=uW(u,w),y=m&&m!=="/"&&m.endsWith("/"),C=(p||m===".")&&i.endsWith("/");return!b.pathname.endsWith("/")&&(y||C)&&(b.pathname+="/"),b}const al=t=>t.join("/").replace(/\/\/+/g,"/"),pW=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fW=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mW=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gW(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ML=["post","put","patch","delete"];new Set(ML);const bW=["get",...ML];new Set(bW);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ow(){return ow=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},ow.apply(this,arguments)}const Q_=D.createContext(null),PL=D.createContext(null),Wc=D.createContext(null),Gw=D.createContext(null),na=D.createContext({outlet:null,matches:[],isDataRoute:!1}),LL=D.createContext(null);function wW(t,r){let{relative:i}=r===void 0?{}:r;cf()||Wn(!1);let{basename:l,navigator:u}=D.useContext(Wc),{hash:p,pathname:m,search:w}=J_(t,{relative:i}),b=m;return l!=="/"&&(b=m==="/"?l:al([l,m])),u.createHref({pathname:b,search:w,hash:p})}function cf(){return D.useContext(Gw)!=null}function Hu(){return cf()||Wn(!1),D.useContext(Gw).location}function OL(t){D.useContext(Wc).static||D.useLayoutEffect(t)}function kl(){let{isDataRoute:t}=D.useContext(na);return t?MW():kW()}function kW(){cf()||Wn(!1);let t=D.useContext(Q_),{basename:r,navigator:i}=D.useContext(Wc),{matches:l}=D.useContext(na),{pathname:u}=Hu(),p=JSON.stringify(NL(l).map(b=>b.pathnameBase)),m=D.useRef(!1);return OL(()=>{m.current=!0}),D.useCallback(function(b,y){if(y===void 0&&(y={}),!m.current)return;if(typeof b=="number"){i.go(b);return}let C=IL(b,JSON.parse(p),u,y.relative==="path");t==null&&r!=="/"&&(C.pathname=C.pathname==="/"?r:al([r,C.pathname])),(y.replace?i.replace:i.push)(C,y.state,y)},[r,i,p,u,t])}const vW=D.createContext(null);function yW(t){let r=D.useContext(na).outlet;return r&&D.createElement(vW.Provider,{value:t},r)}function Z_(){let{matches:t}=D.useContext(na),r=t[t.length-1];return r?r.params:{}}function J_(t,r){let{relative:i}=r===void 0?{}:r,{matches:l}=D.useContext(na),{pathname:u}=Hu(),p=JSON.stringify(NL(l).map(m=>m.pathnameBase));return D.useMemo(()=>IL(t,JSON.parse(p),u,i==="path"),[t,p,u,i])}function CW(t,r){return AW(t,r)}function AW(t,r,i){cf()||Wn(!1);let{navigator:l}=D.useContext(Wc),{matches:u}=D.useContext(na),p=u[u.length-1],m=p?p.params:{};p&&p.pathname;let w=p?p.pathnameBase:"/";p&&p.route;let b=Hu(),y;if(r){var C;let R=typeof r=="string"?$u(r):r;w==="/"||(C=R.pathname)!=null&&C.startsWith(w)||Wn(!1),y=R}else y=b;let _=y.pathname||"/",x=w==="/"?_:_.slice(w.length)||"/",j=QU(t,{pathname:x}),M=jW(j&&j.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:al([w,l.encodeLocation?l.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?w:al([w,l.encodeLocation?l.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),u,i);return r&&M?D.createElement(Gw.Provider,{value:{location:ow({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Za.Pop}},M):M}function _W(){let t=IW(),r=gW(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},p=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),i?D.createElement("pre",{style:u},i):null,p)}const xW=D.createElement(_W,null);class SW extends D.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error||i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error?D.createElement(na.Provider,{value:this.props.routeContext},D.createElement(LL.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EW(t){let{routeContext:r,match:i,children:l}=t,u=D.useContext(Q_);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),D.createElement(na.Provider,{value:r},l)}function jW(t,r,i){var l;if(r===void 0&&(r=[]),i===void 0&&(i=null),t==null){var u;if((u=i)!=null&&u.errors)t=i.matches;else return null}let p=t,m=(l=i)==null?void 0:l.errors;if(m!=null){let w=p.findIndex(b=>b.route.id&&(m==null?void 0:m[b.route.id]));w>=0||Wn(!1),p=p.slice(0,Math.min(p.length,w+1))}return p.reduceRight((w,b,y)=>{let C=b.route.id?m==null?void 0:m[b.route.id]:null,_=null;i&&(_=b.route.errorElement||xW);let x=r.concat(p.slice(0,y+1)),j=()=>{let M;return C?M=_:b.route.Component?M=D.createElement(b.route.Component,null):b.route.element?M=b.route.element:M=w,D.createElement(EW,{match:b,routeContext:{outlet:w,matches:x,isDataRoute:i!=null},children:M})};return i&&(b.route.ErrorBoundary||b.route.errorElement||y===0)?D.createElement(SW,{location:i.location,revalidation:i.revalidation,component:_,error:C,children:j(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):j()},null)}var BL=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(BL||{}),iw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(iw||{});function DW(t){let r=D.useContext(Q_);return r||Wn(!1),r}function TW(t){let r=D.useContext(PL);return r||Wn(!1),r}function NW(t){let r=D.useContext(na);return r||Wn(!1),r}function RL(t){let r=NW(),i=r.matches[r.matches.length-1];return i.route.id||Wn(!1),i.route.id}function IW(){var t;let r=D.useContext(LL),i=TW(iw.UseRouteError),l=RL(iw.UseRouteError);return r||((t=i.errors)==null?void 0:t[l])}function MW(){let{router:t}=DW(BL.UseNavigateStable),r=RL(iw.UseNavigateStable),i=D.useRef(!1);return OL(()=>{i.current=!0}),D.useCallback(function(u,p){p===void 0&&(p={}),i.current&&(typeof u=="number"?t.navigate(u):t.navigate(u,ow({fromRouteId:r},p)))},[t,r])}function X_(t){return yW(t.context)}function Ue(t){Wn(!1)}function PW(t){let{basename:r="/",children:i=null,location:l,navigationType:u=Za.Pop,navigator:p,static:m=!1}=t;cf()&&Wn(!1);let w=r.replace(/^\/*/,"/"),b=D.useMemo(()=>({basename:w,navigator:p,static:m}),[w,p,m]);typeof l=="string"&&(l=$u(l));let{pathname:y="/",search:C="",hash:_="",state:x=null,key:j="default"}=l,M=D.useMemo(()=>{let R=Y_(y,w);return R==null?null:{location:{pathname:R,search:C,hash:_,state:x,key:j},navigationType:u}},[w,y,C,_,x,j,u]);return M==null?null:D.createElement(Wc.Provider,{value:b},D.createElement(Gw.Provider,{children:i,value:M}))}function LW(t){let{children:r,location:i}=t;return CW(gA(r),i)}new Promise(()=>{});function gA(t,r){r===void 0&&(r=[]);let i=[];return D.Children.forEach(t,(l,u)=>{if(!D.isValidElement(l))return;let p=[...r,u];if(l.type===D.Fragment){i.push.apply(i,gA(l.props.children,p));return}l.type!==Ue&&Wn(!1),!l.props.index||!l.props.children||Wn(!1);let m={id:l.props.id||p.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(m.children=gA(l.props.children,p)),i.push(m)}),i}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sw(){return sw=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},sw.apply(this,arguments)}function zL(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}function OW(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BW(t,r){return t.button===0&&(!r||r==="_self")&&!OW(t)}const RW=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],zW=["aria-current","caseSensitive","className","end","style","to","children"],FW="startTransition",CI=A$[FW];function $W(t){let{basename:r,children:i,future:l,window:u}=t,p=D.useRef();p.current==null&&(p.current=GU({window:u,v5Compat:!0}));let m=p.current,[w,b]=D.useState({action:m.action,location:m.location}),{v7_startTransition:y}=l||{},C=D.useCallback(_=>{y&&CI?CI(()=>b(_)):b(_)},[b,y]);return D.useLayoutEffect(()=>m.listen(C),[m,C]),D.createElement(PW,{basename:r,children:i,location:w.location,navigationType:w.action,navigator:m})}const HW=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VW=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=D.forwardRef(function(r,i){let{onClick:l,relative:u,reloadDocument:p,replace:m,state:w,target:b,to:y,preventScrollReset:C}=r,_=zL(r,RW),{basename:x}=D.useContext(Wc),j,M=!1;if(typeof y=="string"&&VW.test(y)&&(j=y,HW))try{let I=new URL(window.location.href),O=y.startsWith("//")?new URL(I.protocol+y):new URL(y),H=Y_(O.pathname,x);O.origin===I.origin&&H!=null?y=H+O.search+O.hash:M=!0}catch{}let R=wW(y,{relative:u}),P=UW(y,{replace:m,state:w,target:b,preventScrollReset:C,relative:u});function B(I){l&&l(I),I.defaultPrevented||P(I)}return D.createElement("a",sw({},_,{href:j||R,onClick:M||p?l:B,ref:i,target:b}))}),_i=D.forwardRef(function(r,i){let{"aria-current":l="page",caseSensitive:u=!1,className:p="",end:m=!1,style:w,to:b,children:y}=r,C=zL(r,zW),_=J_(b,{relative:C.relative}),x=Hu(),j=D.useContext(PL),{navigator:M}=D.useContext(Wc),R=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,P=x.pathname,B=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;u||(P=P.toLowerCase(),B=B?B.toLowerCase():null,R=R.toLowerCase());let I=P===R||!m&&P.startsWith(R)&&P.charAt(R.length)==="/",O=B!=null&&(B===R||!m&&B.startsWith(R)&&B.charAt(R.length)==="/"),H=I?l:void 0,q;typeof p=="function"?q=p({isActive:I,isPending:O}):q=[p,I?"active":null,O?"pending":null].filter(Boolean).join(" ");let K=typeof w=="function"?w({isActive:I,isPending:O}):w;return D.createElement(je,sw({},C,{"aria-current":H,className:q,ref:i,style:K,to:b}),typeof y=="function"?y({isActive:I,isPending:O}):y)});var AI;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(AI||(AI={}));var _I;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_I||(_I={}));function UW(t,r){let{target:i,replace:l,state:u,preventScrollReset:p,relative:m}=r===void 0?{}:r,w=kl(),b=Hu(),y=J_(t,{relative:m});return D.useCallback(C=>{if(BW(C,i)){C.preventDefault();let _=l!==void 0?l:rw(b)===rw(y);w(t,{replace:_,state:u,preventScrollReset:p,relative:m})}},[b,w,y,l,u,i,t,p,m])}var FL={exports:{}},WW="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qW=WW,GW=qW;function $L(){}function HL(){}HL.resetWarningCache=$L;var KW=function(){function t(l,u,p,m,w,b){if(b!==GW){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}t.isRequired=t;function r(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:HL,resetWarningCache:$L};return i.PropTypes=i,i};FL.exports=KW();var YW=FL.exports;const it=ws(YW);var QW=typeof Element<"u",ZW=typeof Map=="function",JW=typeof Set=="function",XW=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function yg(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var i,l,u;if(Array.isArray(t)){if(i=t.length,i!=r.length)return!1;for(l=i;l--!==0;)if(!yg(t[l],r[l]))return!1;return!0}var p;if(ZW&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(p=t.entries();!(l=p.next()).done;)if(!r.has(l.value[0]))return!1;for(p=t.entries();!(l=p.next()).done;)if(!yg(l.value[1],r.get(l.value[0])))return!1;return!0}if(JW&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(p=t.entries();!(l=p.next()).done;)if(!r.has(l.value[0]))return!1;return!0}if(XW&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(i=t.length,i!=r.length)return!1;for(l=i;l--!==0;)if(t[l]!==r[l])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof r.valueOf=="function")return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof r.toString=="function")return t.toString()===r.toString();if(u=Object.keys(t),i=u.length,i!==Object.keys(r).length)return!1;for(l=i;l--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[l]))return!1;if(QW&&t instanceof Element)return!1;for(l=i;l--!==0;)if(!((u[l]==="_owner"||u[l]==="__v"||u[l]==="__o")&&t.$$typeof)&&!yg(t[u[l]],r[u[l]]))return!1;return!0}return t!==t&&r!==r}var eq=function(r,i){try{return yg(r,i)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}};const tq=ws(eq);var nq=function(t,r,i,l,u,p,m,w){if(!t){var b;if(r===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[i,l,u,p,m,w],C=0;b=new Error(r.replace(/%s/g,function(){return y[C++]})),b.name="Invariant Violation"}throw b.framesToPop=1,b}},rq=nq;const xI=ws(rq);var oq=function(r,i,l,u){var p=l?l.call(u,r,i):void 0;if(p!==void 0)return!!p;if(r===i)return!0;if(typeof r!="object"||!r||typeof i!="object"||!i)return!1;var m=Object.keys(r),w=Object.keys(i);if(m.length!==w.length)return!1;for(var b=Object.prototype.hasOwnProperty.bind(i),y=0;y<m.length;y++){var C=m[y];if(!b(C))return!1;var _=r[C],x=i[C];if(p=l?l.call(u,_,x,C):void 0,p===!1||p===void 0&&_!==x)return!1}return!0};const iq=ws(oq);function On(){return On=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},On.apply(this,arguments)}function ex(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,bA(t,r)}function bA(t,r){return bA=Object.setPrototypeOf||function(i,l){return i.__proto__=l,i},bA(t,r)}function SI(t,r){if(t==null)return{};var i,l,u={},p=Object.keys(t);for(l=0;l<p.length;l++)r.indexOf(i=p[l])>=0||(u[i]=t[i]);return u}var Qe={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},sq={rel:["amphtml","canonical","alternate"]},aq={type:["application/ld+json"]},lq={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},EI=Object.keys(Qe).map(function(t){return Qe[t]}),aw={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},cq=Object.keys(aw).reduce(function(t,r){return t[aw[r]]=r,t},{}),uu=function(t,r){for(var i=t.length-1;i>=0;i-=1){var l=t[i];if(Object.prototype.hasOwnProperty.call(l,r))return l[r]}return null},dq=function(t){var r=uu(t,Qe.TITLE),i=uu(t,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),i&&r)return i.replace(/%s/g,function(){return r});var l=uu(t,"defaultTitle");return r||l||void 0},uq=function(t){return uu(t,"onChangeClientState")||function(){}},ny=function(t,r){return r.filter(function(i){return i[t]!==void 0}).map(function(i){return i[t]}).reduce(function(i,l){return On({},i,l)},{})},hq=function(t,r){return r.filter(function(i){return i[Qe.BASE]!==void 0}).map(function(i){return i[Qe.BASE]}).reverse().reduce(function(i,l){if(!i.length)for(var u=Object.keys(l),p=0;p<u.length;p+=1){var m=u[p].toLowerCase();if(t.indexOf(m)!==-1&&l[m])return i.concat(l)}return i},[])},Uh=function(t,r,i){var l={};return i.filter(function(u){return!!Array.isArray(u[t])||(u[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof u[t]+'"'),!1)}).map(function(u){return u[t]}).reverse().reduce(function(u,p){var m={};p.filter(function(_){for(var x,j=Object.keys(_),M=0;M<j.length;M+=1){var R=j[M],P=R.toLowerCase();r.indexOf(P)===-1||x==="rel"&&_[x].toLowerCase()==="canonical"||P==="rel"&&_[P].toLowerCase()==="stylesheet"||(x=P),r.indexOf(R)===-1||R!=="innerHTML"&&R!=="cssText"&&R!=="itemprop"||(x=R)}if(!x||!_[x])return!1;var B=_[x].toLowerCase();return l[x]||(l[x]={}),m[x]||(m[x]={}),!l[x][B]&&(m[x][B]=!0,!0)}).reverse().forEach(function(_){return u.push(_)});for(var w=Object.keys(m),b=0;b<w.length;b+=1){var y=w[b],C=On({},l[y],m[y]);l[y]=C}return u},[]).reverse()},pq=function(t,r){if(Array.isArray(t)&&t.length){for(var i=0;i<t.length;i+=1)if(t[i][r])return!0}return!1},VL=function(t){return Array.isArray(t)?t.join(""):t},ry=function(t,r){return Array.isArray(t)?t.reduce(function(i,l){return function(u,p){for(var m=Object.keys(u),w=0;w<m.length;w+=1)if(p[m[w]]&&p[m[w]].includes(u[m[w]]))return!0;return!1}(l,r)?i.priority.push(l):i.default.push(l),i},{priority:[],default:[]}):{default:t}},jI=function(t,r){var i;return On({},t,((i={})[r]=void 0,i))},fq=[Qe.NOSCRIPT,Qe.SCRIPT,Qe.STYLE],oy=function(t,r){return r===void 0&&(r=!0),r===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},DI=function(t){return Object.keys(t).reduce(function(r,i){var l=t[i]!==void 0?i+'="'+t[i]+'"':""+i;return r?r+" "+l:l},"")},TI=function(t,r){return r===void 0&&(r={}),Object.keys(t).reduce(function(i,l){return i[aw[l]||l]=t[l],i},r)},Cg=function(t,r){return r.map(function(i,l){var u,p=((u={key:l})["data-rh"]=!0,u);return Object.keys(i).forEach(function(m){var w=aw[m]||m;w==="innerHTML"||w==="cssText"?p.dangerouslySetInnerHTML={__html:i.innerHTML||i.cssText}:p[w]=i[m]}),_e.createElement(t,p)})},Ko=function(t,r,i){switch(t){case Qe.TITLE:return{toComponent:function(){return u=r.titleAttributes,(p={key:l=r.title})["data-rh"]=!0,m=TI(u,p),[_e.createElement(Qe.TITLE,m,l)];var l,u,p,m},toString:function(){return function(l,u,p,m){var w=DI(p),b=VL(u);return w?"<"+l+' data-rh="true" '+w+">"+oy(b,m)+"</"+l+">":"<"+l+' data-rh="true">'+oy(b,m)+"</"+l+">"}(t,r.title,r.titleAttributes,i)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return TI(r)},toString:function(){return DI(r)}};default:return{toComponent:function(){return Cg(t,r)},toString:function(){return function(l,u,p){return u.reduce(function(m,w){var b=Object.keys(w).filter(function(_){return!(_==="innerHTML"||_==="cssText")}).reduce(function(_,x){var j=w[x]===void 0?x:x+'="'+oy(w[x],p)+'"';return _?_+" "+j:j},""),y=w.innerHTML||w.cssText||"",C=fq.indexOf(l)===-1;return m+"<"+l+' data-rh="true" '+b+(C?"/>":">"+y+"</"+l+">")},"")}(t,r,i)}}}},wA=function(t){var r=t.baseTag,i=t.bodyAttributes,l=t.encode,u=t.htmlAttributes,p=t.noscriptTags,m=t.styleTags,w=t.title,b=w===void 0?"":w,y=t.titleAttributes,C=t.linkTags,_=t.metaTags,x=t.scriptTags,j={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var M=function(R){var P=R.linkTags,B=R.scriptTags,I=R.encode,O=ry(R.metaTags,lq),H=ry(P,sq),q=ry(B,aq);return{priorityMethods:{toComponent:function(){return[].concat(Cg(Qe.META,O.priority),Cg(Qe.LINK,H.priority),Cg(Qe.SCRIPT,q.priority))},toString:function(){return Ko(Qe.META,O.priority,I)+" "+Ko(Qe.LINK,H.priority,I)+" "+Ko(Qe.SCRIPT,q.priority,I)}},metaTags:O.default,linkTags:H.default,scriptTags:q.default}}(t);j=M.priorityMethods,C=M.linkTags,_=M.metaTags,x=M.scriptTags}return{priority:j,base:Ko(Qe.BASE,r,l),bodyAttributes:Ko("bodyAttributes",i,l),htmlAttributes:Ko("htmlAttributes",u,l),link:Ko(Qe.LINK,C,l),meta:Ko(Qe.META,_,l),noscript:Ko(Qe.NOSCRIPT,p,l),script:Ko(Qe.SCRIPT,x,l),style:Ko(Qe.STYLE,m,l),title:Ko(Qe.TITLE,{title:b,titleAttributes:y},l)}},qm=[],kA=function(t,r){var i=this;r===void 0&&(r=typeof document<"u"),this.instances=[],this.value={setHelmet:function(l){i.context.helmet=l},helmetInstances:{get:function(){return i.canUseDOM?qm:i.instances},add:function(l){(i.canUseDOM?qm:i.instances).push(l)},remove:function(l){var u=(i.canUseDOM?qm:i.instances).indexOf(l);(i.canUseDOM?qm:i.instances).splice(u,1)}}},this.context=t,this.canUseDOM=r,r||(t.helmet=wA({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},UL=_e.createContext({}),mq=it.shape({setHelmet:it.func,helmetInstances:it.shape({get:it.func,add:it.func,remove:it.func})}),gq=typeof document<"u",nu=function(t){function r(i){var l;return(l=t.call(this,i)||this).helmetData=new kA(l.props.context,r.canUseDOM),l}return ex(r,t),r.prototype.render=function(){return _e.createElement(UL.Provider,{value:this.helmetData.value},this.props.children)},r}(D.Component);nu.canUseDOM=gq,nu.propTypes={context:it.shape({helmet:it.shape()}),children:it.node.isRequired},nu.defaultProps={context:{}},nu.displayName="HelmetProvider";var Od=function(t,r){var i,l=document.head||document.querySelector(Qe.HEAD),u=l.querySelectorAll(t+"[data-rh]"),p=[].slice.call(u),m=[];return r&&r.length&&r.forEach(function(w){var b=document.createElement(t);for(var y in w)Object.prototype.hasOwnProperty.call(w,y)&&(y==="innerHTML"?b.innerHTML=w.innerHTML:y==="cssText"?b.styleSheet?b.styleSheet.cssText=w.cssText:b.appendChild(document.createTextNode(w.cssText)):b.setAttribute(y,w[y]===void 0?"":w[y]));b.setAttribute("data-rh","true"),p.some(function(C,_){return i=_,b.isEqualNode(C)})?p.splice(i,1):m.push(b)}),p.forEach(function(w){return w.parentNode.removeChild(w)}),m.forEach(function(w){return l.appendChild(w)}),{oldTags:p,newTags:m}},iy=function(t,r){var i=document.getElementsByTagName(t)[0];if(i){for(var l=i.getAttribute("data-rh"),u=l?l.split(","):[],p=[].concat(u),m=Object.keys(r),w=0;w<m.length;w+=1){var b=m[w],y=r[b]||"";i.getAttribute(b)!==y&&i.setAttribute(b,y),u.indexOf(b)===-1&&u.push(b);var C=p.indexOf(b);C!==-1&&p.splice(C,1)}for(var _=p.length-1;_>=0;_-=1)i.removeAttribute(p[_]);u.length===p.length?i.removeAttribute("data-rh"):i.getAttribute("data-rh")!==m.join(",")&&i.setAttribute("data-rh",m.join(","))}},NI=function(t,r){var i=t.baseTag,l=t.htmlAttributes,u=t.linkTags,p=t.metaTags,m=t.noscriptTags,w=t.onChangeClientState,b=t.scriptTags,y=t.styleTags,C=t.title,_=t.titleAttributes;iy(Qe.BODY,t.bodyAttributes),iy(Qe.HTML,l),function(R,P){R!==void 0&&document.title!==R&&(document.title=VL(R)),iy(Qe.TITLE,P)}(C,_);var x={baseTag:Od(Qe.BASE,i),linkTags:Od(Qe.LINK,u),metaTags:Od(Qe.META,p),noscriptTags:Od(Qe.NOSCRIPT,m),scriptTags:Od(Qe.SCRIPT,b),styleTags:Od(Qe.STYLE,y)},j={},M={};Object.keys(x).forEach(function(R){var P=x[R],B=P.newTags,I=P.oldTags;B.length&&(j[R]=B),I.length&&(M[R]=x[R].oldTags)}),r&&r(),w(t,j,M)},Wh=null,lw=function(t){function r(){for(var l,u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];return(l=t.call.apply(t,[this].concat(p))||this).rendered=!1,l}ex(r,t);var i=r.prototype;return i.shouldComponentUpdate=function(l){return!iq(l,this.props)},i.componentDidUpdate=function(){this.emitChange()},i.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},i.emitChange=function(){var l,u,p=this.props.context,m=p.setHelmet,w=null,b=(l=p.helmetInstances.get().map(function(y){var C=On({},y.props);return delete C.context,C}),{baseTag:hq(["href"],l),bodyAttributes:ny("bodyAttributes",l),defer:uu(l,"defer"),encode:uu(l,"encodeSpecialCharacters"),htmlAttributes:ny("htmlAttributes",l),linkTags:Uh(Qe.LINK,["rel","href"],l),metaTags:Uh(Qe.META,["name","charset","http-equiv","property","itemprop"],l),noscriptTags:Uh(Qe.NOSCRIPT,["innerHTML"],l),onChangeClientState:uq(l),scriptTags:Uh(Qe.SCRIPT,["src","innerHTML"],l),styleTags:Uh(Qe.STYLE,["cssText"],l),title:dq(l),titleAttributes:ny("titleAttributes",l),prioritizeSeoTags:pq(l,"prioritizeSeoTags")});nu.canUseDOM?(u=b,Wh&&cancelAnimationFrame(Wh),u.defer?Wh=requestAnimationFrame(function(){NI(u,function(){Wh=null})}):(NI(u),Wh=null)):wA&&(w=wA(b)),m(w)},i.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},i.render=function(){return this.init(),null},r}(D.Component);lw.propTypes={context:mq.isRequired},lw.displayName="HelmetDispatcher";var bq=["children"],wq=["children"],Ag=function(t){function r(){return t.apply(this,arguments)||this}ex(r,t);var i=r.prototype;return i.shouldComponentUpdate=function(l){return!tq(jI(this.props,"helmetData"),jI(l,"helmetData"))},i.mapNestedChildrenToProps=function(l,u){if(!u)return null;switch(l.type){case Qe.SCRIPT:case Qe.NOSCRIPT:return{innerHTML:u};case Qe.STYLE:return{cssText:u};default:throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},i.flattenArrayTypeChildren=function(l){var u,p=l.child,m=l.arrayTypeChildren;return On({},m,((u={})[p.type]=[].concat(m[p.type]||[],[On({},l.newChildProps,this.mapNestedChildrenToProps(p,l.nestedChildren))]),u))},i.mapObjectTypeChildren=function(l){var u,p,m=l.child,w=l.newProps,b=l.newChildProps,y=l.nestedChildren;switch(m.type){case Qe.TITLE:return On({},w,((u={})[m.type]=y,u.titleAttributes=On({},b),u));case Qe.BODY:return On({},w,{bodyAttributes:On({},b)});case Qe.HTML:return On({},w,{htmlAttributes:On({},b)});default:return On({},w,((p={})[m.type]=On({},b),p))}},i.mapArrayTypeChildrenToProps=function(l,u){var p=On({},u);return Object.keys(l).forEach(function(m){var w;p=On({},p,((w={})[m]=l[m],w))}),p},i.warnOnInvalidChildren=function(l,u){return xI(EI.some(function(p){return l.type===p}),typeof l.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+EI.join(", ")+" are allowed. Helmet does not support rendering <"+l.type+"> elements. Refer to our API for more information."),xI(!u||typeof u=="string"||Array.isArray(u)&&!u.some(function(p){return typeof p!="string"}),"Helmet expects a string as a child of <"+l.type+">. Did you forget to wrap your children in braces? ( <"+l.type+">{``}</"+l.type+"> ) Refer to our API for more information."),!0},i.mapChildrenToProps=function(l,u){var p=this,m={};return _e.Children.forEach(l,function(w){if(w&&w.props){var b=w.props,y=b.children,C=SI(b,bq),_=Object.keys(C).reduce(function(j,M){return j[cq[M]||M]=C[M],j},{}),x=w.type;switch(typeof x=="symbol"?x=x.toString():p.warnOnInvalidChildren(w,y),x){case Qe.FRAGMENT:u=p.mapChildrenToProps(y,u);break;case Qe.LINK:case Qe.META:case Qe.NOSCRIPT:case Qe.SCRIPT:case Qe.STYLE:m=p.flattenArrayTypeChildren({child:w,arrayTypeChildren:m,newChildProps:_,nestedChildren:y});break;default:u=p.mapObjectTypeChildren({child:w,newProps:u,newChildProps:_,nestedChildren:y})}}}),this.mapArrayTypeChildrenToProps(m,u)},i.render=function(){var l=this.props,u=l.children,p=SI(l,wq),m=On({},p),w=p.helmetData;return u&&(m=this.mapChildrenToProps(u,m)),!w||w instanceof kA||(w=new kA(w.context,w.instances)),w?_e.createElement(lw,On({},m,{context:w.value,helmetData:void 0})):_e.createElement(UL.Consumer,null,function(b){return _e.createElement(lw,On({},m,{context:b}))})},r}(D.Component);Ag.propTypes={base:it.object,bodyAttributes:it.object,children:it.oneOfType([it.arrayOf(it.node),it.node]),defaultTitle:it.string,defer:it.bool,encodeSpecialCharacters:it.bool,htmlAttributes:it.object,link:it.arrayOf(it.object),meta:it.arrayOf(it.object),noscript:it.arrayOf(it.object),onChangeClientState:it.func,script:it.arrayOf(it.object),style:it.arrayOf(it.object),title:it.string,titleAttributes:it.object,titleTemplate:it.string,prioritizeSeoTags:it.bool,helmetData:it.object},Ag.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Ag.displayName="Helmet";var WL={exports:{}},qL={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu=D;function kq(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var vq=typeof Object.is=="function"?Object.is:kq,yq=Eu.useState,Cq=Eu.useEffect,Aq=Eu.useLayoutEffect,_q=Eu.useDebugValue;function xq(t,r){var i=r(),l=yq({inst:{value:i,getSnapshot:r}}),u=l[0].inst,p=l[1];return Aq(function(){u.value=i,u.getSnapshot=r,sy(u)&&p({inst:u})},[t,i,r]),Cq(function(){return sy(u)&&p({inst:u}),t(function(){sy(u)&&p({inst:u})})},[t]),_q(i),i}function sy(t){var r=t.getSnapshot;t=t.value;try{var i=r();return!vq(t,i)}catch{return!0}}function Sq(t,r){return r()}var Eq=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Sq:xq;qL.useSyncExternalStore=Eu.useSyncExternalStore!==void 0?Eu.useSyncExternalStore:Eq;WL.exports=qL;var jq=WL.exports,GL={exports:{}},KL={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=D,Dq=jq;function Tq(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Nq=typeof Object.is=="function"?Object.is:Tq,Iq=Dq.useSyncExternalStore,Mq=Kw.useRef,Pq=Kw.useEffect,Lq=Kw.useMemo,Oq=Kw.useDebugValue;KL.useSyncExternalStoreWithSelector=function(t,r,i,l,u){var p=Mq(null);if(p.current===null){var m={hasValue:!1,value:null};p.current=m}else m=p.current;p=Lq(function(){function b(j){if(!y){if(y=!0,C=j,j=l(j),u!==void 0&&m.hasValue){var M=m.value;if(u(M,j))return _=M}return _=j}if(M=_,Nq(C,j))return M;var R=l(j);return u!==void 0&&u(M,R)?M:(C=j,_=R)}var y=!1,C,_,x=i===void 0?null:i;return[function(){return b(r())},x===null?void 0:function(){return b(x())}]},[r,i,l,u]);var w=Iq(t,p[0],p[1]);return Pq(function(){m.hasValue=!0,m.value=w},[w]),Oq(w),w};GL.exports=KL;var Bq=GL.exports;function Rq(t){t()}let YL=Rq;const zq=t=>YL=t,Fq=()=>YL,II=Symbol.for("react-redux-context"),MI=typeof globalThis<"u"?globalThis:{};function $q(){var t;if(!D.createContext)return{};const r=(t=MI[II])!=null?t:MI[II]=new Map;let i=r.get(D.createContext);return i||(i=D.createContext(null),r.set(D.createContext,i)),i}const fl=$q();function tx(t=fl){return function(){return D.useContext(t)}}const QL=tx(),Hq=()=>{throw new Error("uSES not initialized!")};let ZL=Hq;const Vq=t=>{ZL=t},Uq=(t,r)=>t===r;function Wq(t=fl){const r=t===fl?QL:tx(t);return function(l,u={}){const{equalityFn:p=Uq,stabilityCheck:m=void 0,noopCheck:w=void 0}=typeof u=="function"?{equalityFn:u}:u,{store:b,subscription:y,getServerState:C,stabilityCheck:_,noopCheck:x}=r();D.useRef(!0);const j=D.useCallback({[l.name](R){return l(R)}}[l.name],[l,_,m]),M=ZL(y.addNestedSub,b.getState,C||b.getState,j,p);return D.useDebugValue(M),M}}const He=Wq();function vA(){return vA=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},vA.apply(this,arguments)}function JL(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}var XL={exports:{}},Ft={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=typeof Symbol=="function"&&Symbol.for,nx=mr?Symbol.for("react.element"):60103,rx=mr?Symbol.for("react.portal"):60106,Yw=mr?Symbol.for("react.fragment"):60107,Qw=mr?Symbol.for("react.strict_mode"):60108,Zw=mr?Symbol.for("react.profiler"):60114,Jw=mr?Symbol.for("react.provider"):60109,Xw=mr?Symbol.for("react.context"):60110,ox=mr?Symbol.for("react.async_mode"):60111,ek=mr?Symbol.for("react.concurrent_mode"):60111,tk=mr?Symbol.for("react.forward_ref"):60112,nk=mr?Symbol.for("react.suspense"):60113,qq=mr?Symbol.for("react.suspense_list"):60120,rk=mr?Symbol.for("react.memo"):60115,ok=mr?Symbol.for("react.lazy"):60116,Gq=mr?Symbol.for("react.block"):60121,Kq=mr?Symbol.for("react.fundamental"):60117,Yq=mr?Symbol.for("react.responder"):60118,Qq=mr?Symbol.for("react.scope"):60119;function jo(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case nx:switch(t=t.type,t){case ox:case ek:case Yw:case Zw:case Qw:case nk:return t;default:switch(t=t&&t.$$typeof,t){case Xw:case tk:case ok:case rk:case Jw:return t;default:return r}}case rx:return r}}}function e4(t){return jo(t)===ek}Ft.AsyncMode=ox;Ft.ConcurrentMode=ek;Ft.ContextConsumer=Xw;Ft.ContextProvider=Jw;Ft.Element=nx;Ft.ForwardRef=tk;Ft.Fragment=Yw;Ft.Lazy=ok;Ft.Memo=rk;Ft.Portal=rx;Ft.Profiler=Zw;Ft.StrictMode=Qw;Ft.Suspense=nk;Ft.isAsyncMode=function(t){return e4(t)||jo(t)===ox};Ft.isConcurrentMode=e4;Ft.isContextConsumer=function(t){return jo(t)===Xw};Ft.isContextProvider=function(t){return jo(t)===Jw};Ft.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===nx};Ft.isForwardRef=function(t){return jo(t)===tk};Ft.isFragment=function(t){return jo(t)===Yw};Ft.isLazy=function(t){return jo(t)===ok};Ft.isMemo=function(t){return jo(t)===rk};Ft.isPortal=function(t){return jo(t)===rx};Ft.isProfiler=function(t){return jo(t)===Zw};Ft.isStrictMode=function(t){return jo(t)===Qw};Ft.isSuspense=function(t){return jo(t)===nk};Ft.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Yw||t===ek||t===Zw||t===Qw||t===nk||t===qq||typeof t=="object"&&t!==null&&(t.$$typeof===ok||t.$$typeof===rk||t.$$typeof===Jw||t.$$typeof===Xw||t.$$typeof===tk||t.$$typeof===Kq||t.$$typeof===Yq||t.$$typeof===Qq||t.$$typeof===Gq)};Ft.typeOf=jo;XL.exports=Ft;var Zq=XL.exports,t4=Zq,Jq={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xq={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n4={};n4[t4.ForwardRef]=Jq;n4[t4.Memo]=Xq;var Ut={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=Symbol.for("react.element"),sx=Symbol.for("react.portal"),ik=Symbol.for("react.fragment"),sk=Symbol.for("react.strict_mode"),ak=Symbol.for("react.profiler"),lk=Symbol.for("react.provider"),ck=Symbol.for("react.context"),eG=Symbol.for("react.server_context"),dk=Symbol.for("react.forward_ref"),uk=Symbol.for("react.suspense"),hk=Symbol.for("react.suspense_list"),pk=Symbol.for("react.memo"),fk=Symbol.for("react.lazy"),tG=Symbol.for("react.offscreen"),r4;r4=Symbol.for("react.module.reference");function si(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case ix:switch(t=t.type,t){case ik:case ak:case sk:case uk:case hk:return t;default:switch(t=t&&t.$$typeof,t){case eG:case ck:case dk:case fk:case pk:case lk:return t;default:return r}}case sx:return r}}}Ut.ContextConsumer=ck;Ut.ContextProvider=lk;Ut.Element=ix;Ut.ForwardRef=dk;Ut.Fragment=ik;Ut.Lazy=fk;Ut.Memo=pk;Ut.Portal=sx;Ut.Profiler=ak;Ut.StrictMode=sk;Ut.Suspense=uk;Ut.SuspenseList=hk;Ut.isAsyncMode=function(){return!1};Ut.isConcurrentMode=function(){return!1};Ut.isContextConsumer=function(t){return si(t)===ck};Ut.isContextProvider=function(t){return si(t)===lk};Ut.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ix};Ut.isForwardRef=function(t){return si(t)===dk};Ut.isFragment=function(t){return si(t)===ik};Ut.isLazy=function(t){return si(t)===fk};Ut.isMemo=function(t){return si(t)===pk};Ut.isPortal=function(t){return si(t)===sx};Ut.isProfiler=function(t){return si(t)===ak};Ut.isStrictMode=function(t){return si(t)===sk};Ut.isSuspense=function(t){return si(t)===uk};Ut.isSuspenseList=function(t){return si(t)===hk};Ut.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ik||t===ak||t===sk||t===uk||t===hk||t===tG||typeof t=="object"&&t!==null&&(t.$$typeof===fk||t.$$typeof===pk||t.$$typeof===lk||t.$$typeof===ck||t.$$typeof===dk||t.$$typeof===r4||t.getModuleId!==void 0)};Ut.typeOf=si;function nG(){const t=Fq();let r=null,i=null;return{clear(){r=null,i=null},notify(){t(()=>{let l=r;for(;l;)l.callback(),l=l.next})},get(){let l=[],u=r;for(;u;)l.push(u),u=u.next;return l},subscribe(l){let u=!0,p=i={callback:l,next:null,prev:i};return p.prev?p.prev.next=p:r=p,function(){!u||r===null||(u=!1,p.next?p.next.prev=p.prev:i=p.prev,p.prev?p.prev.next=p.next:r=p.next)}}}}const PI={notify(){},get:()=>[]};function rG(t,r){let i,l=PI;function u(_){return b(),l.subscribe(_)}function p(){l.notify()}function m(){C.onStateChange&&C.onStateChange()}function w(){return!!i}function b(){i||(i=r?r.addNestedSub(m):t.subscribe(m),l=nG())}function y(){i&&(i(),i=void 0,l.clear(),l=PI)}const C={addNestedSub:u,notifyNestedSubs:p,handleChangeWrapper:m,isSubscribed:w,trySubscribe:b,tryUnsubscribe:y,getListeners:()=>l};return C}const oG=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iG=oG?D.useLayoutEffect:D.useEffect;function sG({store:t,context:r,children:i,serverState:l,stabilityCheck:u="once",noopCheck:p="once"}){const m=D.useMemo(()=>{const y=rG(t);return{store:t,subscription:y,getServerState:l?()=>l:void 0,stabilityCheck:u,noopCheck:p}},[t,l,u,p]),w=D.useMemo(()=>t.getState(),[t]);iG(()=>{const{subscription:y}=m;return y.onStateChange=y.notifyNestedSubs,y.trySubscribe(),w!==t.getState()&&y.notifyNestedSubs(),()=>{y.tryUnsubscribe(),y.onStateChange=void 0}},[m,w]);const b=r||fl;return D.createElement(b.Provider,{value:m},i)}function o4(t=fl){const r=t===fl?QL:tx(t);return function(){const{store:l}=r();return l}}const aG=o4();function lG(t=fl){const r=t===fl?aG:o4(t);return function(){return r().dispatch}}const nt=lG();Vq(Bq.useSyncExternalStoreWithSelector);zq(G_.unstable_batchedUpdates);function i4(t){var r,i,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(i=i4(t[r]))&&(l&&(l+=" "),l+=i);else for(r in t)t[r]&&(l&&(l+=" "),l+=r);return l}function Ja(){for(var t,r,i=0,l="";i<arguments.length;)(t=arguments[i++])&&(r=i4(t))&&(l&&(l+=" "),l+=r);return l}const mp=t=>typeof t=="number"&&!isNaN(t),zc=t=>typeof t=="string",to=t=>typeof t=="function",_g=t=>zc(t)||to(t)?t:null,ay=t=>D.isValidElement(t)||zc(t)||to(t)||mp(t);function cG(t,r,i){i===void 0&&(i=300);const{scrollHeight:l,style:u}=t;requestAnimationFrame(()=>{u.minHeight="initial",u.height=l+"px",u.transition=`all ${i}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(r,i)})})}function mk(t){let{enter:r,exit:i,appendPosition:l=!1,collapse:u=!0,collapseDuration:p=300}=t;return function(m){let{children:w,position:b,preventExitTransition:y,done:C,nodeRef:_,isIn:x}=m;const j=l?`${r}--${b}`:r,M=l?`${i}--${b}`:i,R=D.useRef(0);return D.useLayoutEffect(()=>{const P=_.current,B=j.split(" "),I=O=>{O.target===_.current&&(P.dispatchEvent(new Event("d")),P.removeEventListener("animationend",I),P.removeEventListener("animationcancel",I),R.current===0&&O.type!=="animationcancel"&&P.classList.remove(...B))};P.classList.add(...B),P.addEventListener("animationend",I),P.addEventListener("animationcancel",I)},[]),D.useEffect(()=>{const P=_.current,B=()=>{P.removeEventListener("animationend",B),u?cG(P,C,p):C()};x||(y?B():(R.current=1,P.className+=` ${M}`,P.addEventListener("animationend",B)))},[x]),_e.createElement(_e.Fragment,null,w)}}function LI(t,r){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:r}:{}}const Yo={list:new Map,emitQueue:new Map,on(t,r){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(r),this},off(t,r){if(r){const i=this.list.get(t).filter(l=>l!==r);return this.list.set(t,i),this}return this.list.delete(t),this},cancelEmit(t){const r=this.emitQueue.get(t);return r&&(r.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(r=>{const i=setTimeout(()=>{r(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(i)})}},Gm=t=>{let{theme:r,type:i,...l}=t;return _e.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:r==="colored"?"currentColor":`var(--toastify-icon-color-${i})`,...l})},ly={info:function(t){return _e.createElement(Gm,{...t},_e.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return _e.createElement(Gm,{...t},_e.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return _e.createElement(Gm,{...t},_e.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return _e.createElement(Gm,{...t},_e.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return _e.createElement("div",{className:"Toastify__spinner"})}};function dG(t){const[,r]=D.useReducer(j=>j+1,0),[i,l]=D.useState([]),u=D.useRef(null),p=D.useRef(new Map).current,m=j=>i.indexOf(j)!==-1,w=D.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:j=>p.get(j)}).current;function b(j){let{containerId:M}=j;const{limit:R}=w.props;!R||M&&w.containerId!==M||(w.count-=w.queue.length,w.queue=[])}function y(j){l(M=>j==null?[]:M.filter(R=>R!==j))}function C(){const{toastContent:j,toastProps:M,staleId:R}=w.queue.shift();x(j,M,R)}function _(j,M){let{delay:R,staleId:P,...B}=M;if(!ay(j)||function(ce){return!u.current||w.props.enableMultiContainer&&ce.containerId!==w.props.containerId||p.has(ce.toastId)&&ce.updateId==null}(B))return;const{toastId:I,updateId:O,data:H}=B,{props:q}=w,K=()=>y(I),G=O==null;G&&w.count++;const z={...q,style:q.toastStyle,key:w.toastKey++,...Object.fromEntries(Object.entries(B).filter(ce=>{let[oe,re]=ce;return re!=null})),toastId:I,updateId:O,data:H,closeToast:K,isIn:!1,className:_g(B.className||q.toastClassName),bodyClassName:_g(B.bodyClassName||q.bodyClassName),progressClassName:_g(B.progressClassName||q.progressClassName),autoClose:!B.isLoading&&(te=B.autoClose,se=q.autoClose,te===!1||mp(te)&&te>0?te:se),deleteToast(){const ce=LI(p.get(I),"removed");p.delete(I),Yo.emit(4,ce);const oe=w.queue.length;if(w.count=I==null?w.count-w.displayedToast:w.count-1,w.count<0&&(w.count=0),oe>0){const re=I==null?w.props.limit:1;if(oe===1||re===1)w.displayedToast++,C();else{const J=re>oe?oe:re;w.displayedToast=J;for(let ne=0;ne<J;ne++)C()}}else r()}};var te,se;z.iconOut=function(ce){let{theme:oe,type:re,isLoading:J,icon:ne}=ce,fe=null;const ee={theme:oe,type:re};return ne===!1||(to(ne)?fe=ne(ee):D.isValidElement(ne)?fe=D.cloneElement(ne,ee):zc(ne)||mp(ne)?fe=ne:J?fe=ly.spinner():(ie=>ie in ly)(re)&&(fe=ly[re](ee))),fe}(z),to(B.onOpen)&&(z.onOpen=B.onOpen),to(B.onClose)&&(z.onClose=B.onClose),z.closeButton=q.closeButton,B.closeButton===!1||ay(B.closeButton)?z.closeButton=B.closeButton:B.closeButton===!0&&(z.closeButton=!ay(q.closeButton)||q.closeButton);let ge=j;D.isValidElement(j)&&!zc(j.type)?ge=D.cloneElement(j,{closeToast:K,toastProps:z,data:H}):to(j)&&(ge=j({closeToast:K,toastProps:z,data:H})),q.limit&&q.limit>0&&w.count>q.limit&&G?w.queue.push({toastContent:ge,toastProps:z,staleId:P}):mp(R)?setTimeout(()=>{x(ge,z,P)},R):x(ge,z,P)}function x(j,M,R){const{toastId:P}=M;R&&p.delete(R);const B={content:j,props:M};p.set(P,B),l(I=>[...I,P].filter(O=>O!==R)),Yo.emit(4,LI(B,B.props.updateId==null?"added":"updated"))}return D.useEffect(()=>(w.containerId=t.containerId,Yo.cancelEmit(3).on(0,_).on(1,j=>u.current&&y(j)).on(5,b).emit(2,w),()=>{p.clear(),Yo.emit(3,w)}),[]),D.useEffect(()=>{w.props=t,w.isToastActive=m,w.displayedToast=i.length}),{getToastToRender:function(j){const M=new Map,R=Array.from(p.values());return t.newestOnTop&&R.reverse(),R.forEach(P=>{const{position:B}=P.props;M.has(B)||M.set(B,[]),M.get(B).push(P)}),Array.from(M,P=>j(P[0],P[1]))},containerRef:u,isToastActive:m}}function OI(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function BI(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function uG(t){const[r,i]=D.useState(!1),[l,u]=D.useState(!1),p=D.useRef(null),m=D.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,w=D.useRef(t),{autoClose:b,pauseOnHover:y,closeToast:C,onClick:_,closeOnClick:x}=t;function j(H){if(t.draggable){H.nativeEvent.type==="touchstart"&&H.nativeEvent.preventDefault(),m.didMove=!1,document.addEventListener("mousemove",B),document.addEventListener("mouseup",I),document.addEventListener("touchmove",B),document.addEventListener("touchend",I);const q=p.current;m.canCloseOnClick=!0,m.canDrag=!0,m.boundingRect=q.getBoundingClientRect(),q.style.transition="",m.x=OI(H.nativeEvent),m.y=BI(H.nativeEvent),t.draggableDirection==="x"?(m.start=m.x,m.removalDistance=q.offsetWidth*(t.draggablePercent/100)):(m.start=m.y,m.removalDistance=q.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function M(H){if(m.boundingRect){const{top:q,bottom:K,left:G,right:z}=m.boundingRect;H.nativeEvent.type!=="touchend"&&t.pauseOnHover&&m.x>=G&&m.x<=z&&m.y>=q&&m.y<=K?P():R()}}function R(){i(!0)}function P(){i(!1)}function B(H){const q=p.current;m.canDrag&&q&&(m.didMove=!0,r&&P(),m.x=OI(H),m.y=BI(H),m.delta=t.draggableDirection==="x"?m.x-m.start:m.y-m.start,m.start!==m.x&&(m.canCloseOnClick=!1),q.style.transform=`translate${t.draggableDirection}(${m.delta}px)`,q.style.opacity=""+(1-Math.abs(m.delta/m.removalDistance)))}function I(){document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",B),document.removeEventListener("touchend",I);const H=p.current;if(m.canDrag&&m.didMove&&H){if(m.canDrag=!1,Math.abs(m.delta)>m.removalDistance)return u(!0),void t.closeToast();H.style.transition="transform 0.2s, opacity 0.2s",H.style.transform=`translate${t.draggableDirection}(0)`,H.style.opacity="1"}}D.useEffect(()=>{w.current=t}),D.useEffect(()=>(p.current&&p.current.addEventListener("d",R,{once:!0}),to(t.onOpen)&&t.onOpen(D.isValidElement(t.children)&&t.children.props),()=>{const H=w.current;to(H.onClose)&&H.onClose(D.isValidElement(H.children)&&H.children.props)}),[]),D.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||P(),window.addEventListener("focus",R),window.addEventListener("blur",P)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",R),window.removeEventListener("blur",P))}),[t.pauseOnFocusLoss]);const O={onMouseDown:j,onTouchStart:j,onMouseUp:M,onTouchEnd:M};return b&&y&&(O.onMouseEnter=P,O.onMouseLeave=R),x&&(O.onClick=H=>{_&&_(H),m.canCloseOnClick&&C()}),{playToast:R,pauseToast:P,isRunning:r,preventExitTransition:l,toastRef:p,eventHandlers:O}}function s4(t){let{closeToast:r,theme:i,ariaLabel:l="close"}=t;return _e.createElement("button",{className:`Toastify__close-button Toastify__close-button--${i}`,type:"button",onClick:u=>{u.stopPropagation(),r(u)},"aria-label":l},_e.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},_e.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function hG(t){let{delay:r,isRunning:i,closeToast:l,type:u="default",hide:p,className:m,style:w,controlledProgress:b,progress:y,rtl:C,isIn:_,theme:x}=t;const j=p||b&&y===0,M={...w,animationDuration:`${r}ms`,animationPlayState:i?"running":"paused",opacity:j?0:1};b&&(M.transform=`scaleX(${y})`);const R=Ja("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${x}`,`Toastify__progress-bar--${u}`,{"Toastify__progress-bar--rtl":C}),P=to(m)?m({rtl:C,type:u,defaultClassName:R}):Ja(R,m);return _e.createElement("div",{role:"progressbar","aria-hidden":j?"true":"false","aria-label":"notification timer",className:P,style:M,[b&&y>=1?"onTransitionEnd":"onAnimationEnd"]:b&&y<1?null:()=>{_&&l()}})}const pG=t=>{const{isRunning:r,preventExitTransition:i,toastRef:l,eventHandlers:u}=uG(t),{closeButton:p,children:m,autoClose:w,onClick:b,type:y,hideProgressBar:C,closeToast:_,transition:x,position:j,className:M,style:R,bodyClassName:P,bodyStyle:B,progressClassName:I,progressStyle:O,updateId:H,role:q,progress:K,rtl:G,toastId:z,deleteToast:te,isIn:se,isLoading:ge,iconOut:ce,closeOnClick:oe,theme:re}=t,J=Ja("Toastify__toast",`Toastify__toast-theme--${re}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":G},{"Toastify__toast--close-on-click":oe}),ne=to(M)?M({rtl:G,position:j,type:y,defaultClassName:J}):Ja(J,M),fe=!!K||!w,ee={closeToast:_,type:y,theme:re};let ie=null;return p===!1||(ie=to(p)?p(ee):D.isValidElement(p)?D.cloneElement(p,ee):s4(ee)),_e.createElement(x,{isIn:se,done:te,position:j,preventExitTransition:i,nodeRef:l},_e.createElement("div",{id:z,onClick:b,className:ne,...u,style:R,ref:l},_e.createElement("div",{...se&&{role:q},className:to(P)?P({type:y}):Ja("Toastify__toast-body",P),style:B},ce!=null&&_e.createElement("div",{className:Ja("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ge})},ce),_e.createElement("div",null,m)),ie,_e.createElement(hG,{...H&&!fe?{key:`pb-${H}`}:{},rtl:G,theme:re,delay:w,isRunning:r,isIn:se,closeToast:_,hide:C,type:y,style:O,className:I,controlledProgress:fe,progress:K||0})))},gk=function(t,r){return r===void 0&&(r=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:r}},fG=mk(gk("bounce",!0));mk(gk("slide",!0));mk(gk("zoom"));mk(gk("flip"));const yA=D.forwardRef((t,r)=>{const{getToastToRender:i,containerRef:l,isToastActive:u}=dG(t),{className:p,style:m,rtl:w,containerId:b}=t;function y(C){const _=Ja("Toastify__toast-container",`Toastify__toast-container--${C}`,{"Toastify__toast-container--rtl":w});return to(p)?p({position:C,rtl:w,defaultClassName:_}):Ja(_,_g(p))}return D.useEffect(()=>{r&&(r.current=l.current)},[]),_e.createElement("div",{ref:l,className:"Toastify",id:b},i((C,_)=>{const x=_.length?{...m}:{...m,pointerEvents:"none"};return _e.createElement("div",{className:y(C),style:x,key:`container-${C}`},_.map((j,M)=>{let{content:R,props:P}=j;return _e.createElement(pG,{...P,isIn:u(P.toastId),style:{...P.style,"--nth":M+1,"--len":_.length},key:`toast-${P.key}`},R)}))}))});yA.displayName="ToastContainer",yA.defaultProps={position:"top-right",transition:fG,autoClose:5e3,closeButton:s4,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let cy,kc=new Map,tp=[],mG=1;function a4(){return""+mG++}function gG(t){return t&&(zc(t.toastId)||mp(t.toastId))?t.toastId:a4()}function gp(t,r){return kc.size>0?Yo.emit(0,t,r):tp.push({content:t,options:r}),r.toastId}function cw(t,r){return{...r,type:r&&r.type||t,toastId:gG(r)}}function Km(t){return(r,i)=>gp(r,cw(t,i))}function pn(t,r){return gp(t,cw("default",r))}pn.loading=(t,r)=>gp(t,cw("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...r})),pn.promise=function(t,r,i){let l,{pending:u,error:p,success:m}=r;u&&(l=zc(u)?pn.loading(u,i):pn.loading(u.render,{...i,...u}));const w={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},b=(C,_,x)=>{if(_==null)return void pn.dismiss(l);const j={type:C,...w,...i,data:x},M=zc(_)?{render:_}:_;return l?pn.update(l,{...j,...M}):pn(M.render,{...j,...M}),x},y=to(t)?t():t;return y.then(C=>b("success",m,C)).catch(C=>b("error",p,C)),y},pn.success=Km("success"),pn.info=Km("info"),pn.error=Km("error"),pn.warning=Km("warning"),pn.warn=pn.warning,pn.dark=(t,r)=>gp(t,cw("default",{theme:"dark",...r})),pn.dismiss=t=>{kc.size>0?Yo.emit(1,t):tp=tp.filter(r=>t!=null&&r.options.toastId!==t)},pn.clearWaitingQueue=function(t){return t===void 0&&(t={}),Yo.emit(5,t)},pn.isActive=t=>{let r=!1;return kc.forEach(i=>{i.isToastActive&&i.isToastActive(t)&&(r=!0)}),r},pn.update=function(t,r){r===void 0&&(r={}),setTimeout(()=>{const i=function(l,u){let{containerId:p}=u;const m=kc.get(p||cy);return m&&m.getToast(l)}(t,r);if(i){const{props:l,content:u}=i,p={delay:100,...l,...r,toastId:r.toastId||t,updateId:a4()};p.toastId!==t&&(p.staleId=t);const m=p.render||u;delete p.render,gp(m,p)}},0)},pn.done=t=>{pn.update(t,{progress:1})},pn.onChange=t=>(Yo.on(4,t),()=>{Yo.off(4,t)}),pn.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},pn.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Yo.on(2,t=>{cy=t.containerId||t,kc.set(cy,t),tp.forEach(r=>{Yo.emit(0,r.content,r.options)}),tp=[]}).on(3,t=>{kc.delete(t.containerId||t),kc.size===0&&Yo.off(0).off(1).off(5)});const bk=(t,r)=>pn[t](r,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});class wk{constructor(r,i,l,u,p,m){this.id=r,this.name=l,this.email=u,this.avatar=p,this.token=m}saveUser(){let r={id:this.id,name:this.name,email:this.email,avatar:this.avatar};localStorage.setItem("user",JSON.stringify(r)),localStorage.getItem("token")&&localStorage.removeItem("token"),localStorage.setItem("token",JSON.stringify(this.token))}getUser(){return JSON.parse(localStorage.getItem("user"))}getAuthorisation(){return JSON.parse(localStorage.getItem("token"))}logOut(){return localStorage.clear()}}const Va=new wk,df="https://testproject.importexportonlineshop.com";function Pe(t){bk("error",t==null?void 0:t.message)}function We(t){bk("success",t)}function ir(t){bk("info",t)}function Ee(t){bk("warning",t)}const bG=(t,r)=>{Va.id=t.id,Va.name=t.name,Va.email=t.email,Va.avatar=t.avatar,Va.token=r,Va.saveUser()},dy=()=>{Va.logOut()},wG=()=>Va.getAuthorisation(),Co=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)},hu=t=>t.charAt(0).toUpperCase()+t.slice(1),kG=t=>{window.open(df+t,"_blank")},Cn=t=>df+t;function ji(t){for(var r=arguments.length,i=Array(r>1?r-1:0),l=1;l<r;l++)i[l-1]=arguments[l];throw Error("[Immer] minified error nr: "+t+(i.length?" "+i.map(function(u){return"'"+u+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ml(t){return!!t&&!!t[fn]}function ea(t){var r;return!!t&&(function(i){if(!i||typeof i!="object")return!1;var l=Object.getPrototypeOf(i);if(l===null)return!0;var u=Object.hasOwnProperty.call(l,"constructor")&&l.constructor;return u===Object||typeof u=="function"&&Function.toString.call(u)===jG}(t)||Array.isArray(t)||!!t[UI]||!!(!((r=t.constructor)===null||r===void 0)&&r[UI])||ax(t)||lx(t))}function Fc(t,r,i){i===void 0&&(i=!1),Vu(t)===0?(i?Object.keys:fu)(t).forEach(function(l){i&&typeof l=="symbol"||r(l,t[l],t)}):t.forEach(function(l,u){return r(u,l,t)})}function Vu(t){var r=t[fn];return r?r.i>3?r.i-4:r.i:Array.isArray(t)?1:ax(t)?2:lx(t)?3:0}function pu(t,r){return Vu(t)===2?t.has(r):Object.prototype.hasOwnProperty.call(t,r)}function vG(t,r){return Vu(t)===2?t.get(r):t[r]}function l4(t,r,i){var l=Vu(t);l===2?t.set(r,i):l===3?t.add(i):t[r]=i}function c4(t,r){return t===r?t!==0||1/t==1/r:t!=t&&r!=r}function ax(t){return SG&&t instanceof Map}function lx(t){return EG&&t instanceof Set}function vc(t){return t.o||t.t}function cx(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var r=u4(t);delete r[fn];for(var i=fu(r),l=0;l<i.length;l++){var u=i[l],p=r[u];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(r[u]={configurable:!0,writable:!0,enumerable:p.enumerable,value:t[u]})}return Object.create(Object.getPrototypeOf(t),r)}function dx(t,r){return r===void 0&&(r=!1),ux(t)||ml(t)||!ea(t)||(Vu(t)>1&&(t.set=t.add=t.clear=t.delete=yG),Object.freeze(t),r&&Fc(t,function(i,l){return dx(l,!0)},!0)),t}function yG(){ji(2)}function ux(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function bs(t){var r=xA[t];return r||ji(18,t),r}function CG(t,r){xA[t]||(xA[t]=r)}function CA(){return Kp}function uy(t,r){r&&(bs("Patches"),t.u=[],t.s=[],t.v=r)}function dw(t){AA(t),t.p.forEach(AG),t.p=null}function AA(t){t===Kp&&(Kp=t.l)}function RI(t){return Kp={p:[],l:Kp,h:t,m:!0,_:0}}function AG(t){var r=t[fn];r.i===0||r.i===1?r.j():r.g=!0}function hy(t,r){r._=r.p.length;var i=r.p[0],l=t!==void 0&&t!==i;return r.h.O||bs("ES5").S(r,t,l),l?(i[fn].P&&(dw(r),ji(4)),ea(t)&&(t=uw(r,t),r.l||hw(r,t)),r.u&&bs("Patches").M(i[fn].t,t,r.u,r.s)):t=uw(r,i,[]),dw(r),r.u&&r.v(r.u,r.s),t!==d4?t:void 0}function uw(t,r,i){if(ux(r))return r;var l=r[fn];if(!l)return Fc(r,function(w,b){return zI(t,l,r,w,b,i)},!0),r;if(l.A!==t)return r;if(!l.P)return hw(t,l.t,!0),l.t;if(!l.I){l.I=!0,l.A._--;var u=l.i===4||l.i===5?l.o=cx(l.k):l.o,p=u,m=!1;l.i===3&&(p=new Set(u),u.clear(),m=!0),Fc(p,function(w,b){return zI(t,l,u,w,b,i,m)}),hw(t,u,!1),i&&t.u&&bs("Patches").N(l,i,t.u,t.s)}return l.o}function zI(t,r,i,l,u,p,m){if(ml(u)){var w=uw(t,u,p&&r&&r.i!==3&&!pu(r.R,l)?p.concat(l):void 0);if(l4(i,l,w),!ml(w))return;t.m=!1}else m&&i.add(u);if(ea(u)&&!ux(u)){if(!t.h.D&&t._<1)return;uw(t,u),r&&r.A.l||hw(t,u)}}function hw(t,r,i){i===void 0&&(i=!1),!t.l&&t.h.D&&t.m&&dx(r,i)}function py(t,r){var i=t[fn];return(i?vc(i):t)[r]}function FI(t,r){if(r in t)for(var i=Object.getPrototypeOf(t);i;){var l=Object.getOwnPropertyDescriptor(i,r);if(l)return l;i=Object.getPrototypeOf(i)}}function Ka(t){t.P||(t.P=!0,t.l&&Ka(t.l))}function fy(t){t.o||(t.o=cx(t.t))}function _A(t,r,i){var l=ax(r)?bs("MapSet").F(r,i):lx(r)?bs("MapSet").T(r,i):t.O?function(u,p){var m=Array.isArray(u),w={i:m?1:0,A:p?p.A:CA(),P:!1,I:!1,R:{},l:p,t:u,k:null,o:null,j:null,C:!1},b=w,y=Yp;m&&(b=[w],y=np);var C=Proxy.revocable(b,y),_=C.revoke,x=C.proxy;return w.k=x,w.j=_,x}(r,i):bs("ES5").J(r,i);return(i?i.A:CA()).p.push(l),l}function _G(t){return ml(t)||ji(22,t),function r(i){if(!ea(i))return i;var l,u=i[fn],p=Vu(i);if(u){if(!u.P&&(u.i<4||!bs("ES5").K(u)))return u.t;u.I=!0,l=$I(i,p),u.I=!1}else l=$I(i,p);return Fc(l,function(m,w){u&&vG(u.t,m)===w||l4(l,m,r(w))}),p===3?new Set(l):l}(t)}function $I(t,r){switch(r){case 2:return new Map(t);case 3:return Array.from(t)}return cx(t)}function xG(){function t(p,m){var w=u[p];return w?w.enumerable=m:u[p]=w={configurable:!0,enumerable:m,get:function(){var b=this[fn];return Yp.get(b,p)},set:function(b){var y=this[fn];Yp.set(y,p,b)}},w}function r(p){for(var m=p.length-1;m>=0;m--){var w=p[m][fn];if(!w.P)switch(w.i){case 5:l(w)&&Ka(w);break;case 4:i(w)&&Ka(w)}}}function i(p){for(var m=p.t,w=p.k,b=fu(w),y=b.length-1;y>=0;y--){var C=b[y];if(C!==fn){var _=m[C];if(_===void 0&&!pu(m,C))return!0;var x=w[C],j=x&&x[fn];if(j?j.t!==_:!c4(x,_))return!0}}var M=!!m[fn];return b.length!==fu(m).length+(M?0:1)}function l(p){var m=p.k;if(m.length!==p.t.length)return!0;var w=Object.getOwnPropertyDescriptor(m,m.length-1);if(w&&!w.get)return!0;for(var b=0;b<m.length;b++)if(!m.hasOwnProperty(b))return!0;return!1}var u={};CG("ES5",{J:function(p,m){var w=Array.isArray(p),b=function(C,_){if(C){for(var x=Array(_.length),j=0;j<_.length;j++)Object.defineProperty(x,""+j,t(j,!0));return x}var M=u4(_);delete M[fn];for(var R=fu(M),P=0;P<R.length;P++){var B=R[P];M[B]=t(B,C||!!M[B].enumerable)}return Object.create(Object.getPrototypeOf(_),M)}(w,p),y={i:w?5:4,A:m?m.A:CA(),P:!1,I:!1,R:{},l:m,t:p,k:b,o:null,g:!1,C:!1};return Object.defineProperty(b,fn,{value:y,writable:!0}),b},S:function(p,m,w){w?ml(m)&&m[fn].A===p&&r(p.p):(p.u&&function b(y){if(y&&typeof y=="object"){var C=y[fn];if(C){var _=C.t,x=C.k,j=C.R,M=C.i;if(M===4)Fc(x,function(O){O!==fn&&(_[O]!==void 0||pu(_,O)?j[O]||b(x[O]):(j[O]=!0,Ka(C)))}),Fc(_,function(O){x[O]!==void 0||pu(x,O)||(j[O]=!1,Ka(C))});else if(M===5){if(l(C)&&(Ka(C),j.length=!0),x.length<_.length)for(var R=x.length;R<_.length;R++)j[R]=!1;else for(var P=_.length;P<x.length;P++)j[P]=!0;for(var B=Math.min(x.length,_.length),I=0;I<B;I++)x.hasOwnProperty(I)||(j[I]=!0),j[I]===void 0&&b(x[I])}}}}(p.p[0]),r(p.p))},K:function(p){return p.i===4?i(p):l(p)}})}var HI,Kp,hx=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",SG=typeof Map<"u",EG=typeof Set<"u",VI=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",d4=hx?Symbol.for("immer-nothing"):((HI={})["immer-nothing"]=!0,HI),UI=hx?Symbol.for("immer-draftable"):"__$immer_draftable",fn=hx?Symbol.for("immer-state"):"__$immer_state",jG=""+Object.prototype.constructor,fu=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,u4=Object.getOwnPropertyDescriptors||function(t){var r={};return fu(t).forEach(function(i){r[i]=Object.getOwnPropertyDescriptor(t,i)}),r},xA={},Yp={get:function(t,r){if(r===fn)return t;var i=vc(t);if(!pu(i,r))return function(u,p,m){var w,b=FI(p,m);return b?"value"in b?b.value:(w=b.get)===null||w===void 0?void 0:w.call(u.k):void 0}(t,i,r);var l=i[r];return t.I||!ea(l)?l:l===py(t.t,r)?(fy(t),t.o[r]=_A(t.A.h,l,t)):l},has:function(t,r){return r in vc(t)},ownKeys:function(t){return Reflect.ownKeys(vc(t))},set:function(t,r,i){var l=FI(vc(t),r);if(l!=null&&l.set)return l.set.call(t.k,i),!0;if(!t.P){var u=py(vc(t),r),p=u==null?void 0:u[fn];if(p&&p.t===i)return t.o[r]=i,t.R[r]=!1,!0;if(c4(i,u)&&(i!==void 0||pu(t.t,r)))return!0;fy(t),Ka(t)}return t.o[r]===i&&(i!==void 0||r in t.o)||Number.isNaN(i)&&Number.isNaN(t.o[r])||(t.o[r]=i,t.R[r]=!0),!0},deleteProperty:function(t,r){return py(t.t,r)!==void 0||r in t.t?(t.R[r]=!1,fy(t),Ka(t)):delete t.R[r],t.o&&delete t.o[r],!0},getOwnPropertyDescriptor:function(t,r){var i=vc(t),l=Reflect.getOwnPropertyDescriptor(i,r);return l&&{writable:!0,configurable:t.i!==1||r!=="length",enumerable:l.enumerable,value:i[r]}},defineProperty:function(){ji(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){ji(12)}},np={};Fc(Yp,function(t,r){np[t]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),np.deleteProperty=function(t,r){return np.set.call(this,t,r,void 0)},np.set=function(t,r,i){return Yp.set.call(this,t[0],r,i,t[0])};var DG=function(){function t(i){var l=this;this.O=VI,this.D=!0,this.produce=function(u,p,m){if(typeof u=="function"&&typeof p!="function"){var w=p;p=u;var b=l;return function(R){var P=this;R===void 0&&(R=w);for(var B=arguments.length,I=Array(B>1?B-1:0),O=1;O<B;O++)I[O-1]=arguments[O];return b.produce(R,function(H){var q;return(q=p).call.apply(q,[P,H].concat(I))})}}var y;if(typeof p!="function"&&ji(6),m!==void 0&&typeof m!="function"&&ji(7),ea(u)){var C=RI(l),_=_A(l,u,void 0),x=!0;try{y=p(_),x=!1}finally{x?dw(C):AA(C)}return typeof Promise<"u"&&y instanceof Promise?y.then(function(R){return uy(C,m),hy(R,C)},function(R){throw dw(C),R}):(uy(C,m),hy(y,C))}if(!u||typeof u!="object"){if((y=p(u))===void 0&&(y=u),y===d4&&(y=void 0),l.D&&dx(y,!0),m){var j=[],M=[];bs("Patches").M(u,y,j,M),m(j,M)}return y}ji(21,u)},this.produceWithPatches=function(u,p){if(typeof u=="function")return function(y){for(var C=arguments.length,_=Array(C>1?C-1:0),x=1;x<C;x++)_[x-1]=arguments[x];return l.produceWithPatches(y,function(j){return u.apply(void 0,[j].concat(_))})};var m,w,b=l.produce(u,p,function(y,C){m=y,w=C});return typeof Promise<"u"&&b instanceof Promise?b.then(function(y){return[y,m,w]}):[b,m,w]},typeof(i==null?void 0:i.useProxies)=="boolean"&&this.setUseProxies(i.useProxies),typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze)}var r=t.prototype;return r.createDraft=function(i){ea(i)||ji(8),ml(i)&&(i=_G(i));var l=RI(this),u=_A(this,i,void 0);return u[fn].C=!0,AA(l),u},r.finishDraft=function(i,l){var u=i&&i[fn],p=u.A;return uy(p,l),hy(void 0,p)},r.setAutoFreeze=function(i){this.D=i},r.setUseProxies=function(i){i&&!VI&&ji(20),this.O=i},r.applyPatches=function(i,l){var u;for(u=l.length-1;u>=0;u--){var p=l[u];if(p.path.length===0&&p.op==="replace"){i=p.value;break}}u>-1&&(l=l.slice(u+1));var m=bs("Patches").$;return ml(i)?m(i,l):this.produce(i,function(w){return m(w,l)})},t}(),Ao=new DG,h4=Ao.produce;Ao.produceWithPatches.bind(Ao);Ao.setAutoFreeze.bind(Ao);Ao.setUseProxies.bind(Ao);Ao.applyPatches.bind(Ao);Ao.createDraft.bind(Ao);Ao.finishDraft.bind(Ao);function Qp(t){"@babel/helpers - typeof";return Qp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Qp(t)}function TG(t,r){if(Qp(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,r||"default");if(Qp(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function NG(t){var r=TG(t,"string");return Qp(r)==="symbol"?r:String(r)}function IG(t,r,i){return r=NG(r),r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function WI(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);r&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),i.push.apply(i,l)}return i}function qI(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?WI(Object(i),!0).forEach(function(l){IG(t,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):WI(Object(i)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(i,l))})}return t}function Tr(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var GI=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),my=function(){return Math.random().toString(36).substring(7).split("").join(".")},pw={INIT:"@@redux/INIT"+my(),REPLACE:"@@redux/REPLACE"+my(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+my()}};function MG(t){if(typeof t!="object"||t===null)return!1;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function p4(t,r,i){var l;if(typeof r=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(Tr(0));if(typeof r=="function"&&typeof i>"u"&&(i=r,r=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(Tr(1));return i(p4)(t,r)}if(typeof t!="function")throw new Error(Tr(2));var u=t,p=r,m=[],w=m,b=!1;function y(){w===m&&(w=m.slice())}function C(){if(b)throw new Error(Tr(3));return p}function _(R){if(typeof R!="function")throw new Error(Tr(4));if(b)throw new Error(Tr(5));var P=!0;return y(),w.push(R),function(){if(P){if(b)throw new Error(Tr(6));P=!1,y();var I=w.indexOf(R);w.splice(I,1),m=null}}}function x(R){if(!MG(R))throw new Error(Tr(7));if(typeof R.type>"u")throw new Error(Tr(8));if(b)throw new Error(Tr(9));try{b=!0,p=u(p,R)}finally{b=!1}for(var P=m=w,B=0;B<P.length;B++){var I=P[B];I()}return R}function j(R){if(typeof R!="function")throw new Error(Tr(10));u=R,x({type:pw.REPLACE})}function M(){var R,P=_;return R={subscribe:function(I){if(typeof I!="object"||I===null)throw new Error(Tr(11));function O(){I.next&&I.next(C())}O();var H=P(O);return{unsubscribe:H}}},R[GI]=function(){return this},R}return x({type:pw.INIT}),l={dispatch:x,subscribe:_,getState:C,replaceReducer:j},l[GI]=M,l}function PG(t){Object.keys(t).forEach(function(r){var i=t[r],l=i(void 0,{type:pw.INIT});if(typeof l>"u")throw new Error(Tr(12));if(typeof i(void 0,{type:pw.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Tr(13))})}function LG(t){for(var r=Object.keys(t),i={},l=0;l<r.length;l++){var u=r[l];typeof t[u]=="function"&&(i[u]=t[u])}var p=Object.keys(i),m;try{PG(i)}catch(w){m=w}return function(b,y){if(b===void 0&&(b={}),m)throw m;for(var C=!1,_={},x=0;x<p.length;x++){var j=p[x],M=i[j],R=b[j],P=M(R,y);if(typeof P>"u")throw y&&y.type,new Error(Tr(14));_[j]=P,C=C||P!==R}return C=C||p.length!==Object.keys(b).length,C?_:b}}function fw(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return r.length===0?function(l){return l}:r.length===1?r[0]:r.reduce(function(l,u){return function(){return l(u.apply(void 0,arguments))}})}function OG(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(l){return function(){var u=l.apply(void 0,arguments),p=function(){throw new Error(Tr(15))},m={getState:u.getState,dispatch:function(){return p.apply(void 0,arguments)}},w=r.map(function(b){return b(m)});return p=fw.apply(void 0,w)(u.dispatch),qI(qI({},u),{},{dispatch:p})}}}function f4(t){var r=function(l){var u=l.dispatch,p=l.getState;return function(m){return function(w){return typeof w=="function"?w(u,p,t):m(w)}}};return r}var m4=f4();m4.withExtraArgument=f4;const KI=m4;var g4=globalThis&&globalThis.__extends||function(){var t=function(r,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(l[p]=u[p])},t(r,i)};return function(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(r,i);function l(){this.constructor=r}r.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}(),BG=globalThis&&globalThis.__generator||function(t,r){var i={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},l,u,p,m;return m={next:w(0),throw:w(1),return:w(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function w(y){return function(C){return b([y,C])}}function b(y){if(l)throw new TypeError("Generator is already executing.");for(;i;)try{if(l=1,u&&(p=y[0]&2?u.return:y[0]?u.throw||((p=u.return)&&p.call(u),0):u.next)&&!(p=p.call(u,y[1])).done)return p;switch(u=0,p&&(y=[y[0]&2,p.value]),y[0]){case 0:case 1:p=y;break;case 4:return i.label++,{value:y[1],done:!1};case 5:i.label++,u=y[1],y=[0];continue;case 7:y=i.ops.pop(),i.trys.pop();continue;default:if(p=i.trys,!(p=p.length>0&&p[p.length-1])&&(y[0]===6||y[0]===2)){i=0;continue}if(y[0]===3&&(!p||y[1]>p[0]&&y[1]<p[3])){i.label=y[1];break}if(y[0]===6&&i.label<p[1]){i.label=p[1],p=y;break}if(p&&i.label<p[2]){i.label=p[2],i.ops.push(y);break}p[2]&&i.ops.pop(),i.trys.pop();continue}y=r.call(t,i)}catch(C){y=[6,C],u=0}finally{l=p=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}},ju=globalThis&&globalThis.__spreadArray||function(t,r){for(var i=0,l=r.length,u=t.length;i<l;i++,u++)t[u]=r[i];return t},RG=Object.defineProperty,zG=Object.defineProperties,FG=Object.getOwnPropertyDescriptors,YI=Object.getOwnPropertySymbols,$G=Object.prototype.hasOwnProperty,HG=Object.prototype.propertyIsEnumerable,QI=function(t,r,i){return r in t?RG(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i},ll=function(t,r){for(var i in r||(r={}))$G.call(r,i)&&QI(t,i,r[i]);if(YI)for(var l=0,u=YI(r);l<u.length;l++){var i=u[l];HG.call(r,i)&&QI(t,i,r[i])}return t},gy=function(t,r){return zG(t,FG(r))},VG=function(t,r,i){return new Promise(function(l,u){var p=function(b){try{w(i.next(b))}catch(y){u(y)}},m=function(b){try{w(i.throw(b))}catch(y){u(y)}},w=function(b){return b.done?l(b.value):Promise.resolve(b.value).then(p,m)};w((i=i.apply(t,r)).next())})},UG=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?fw:fw.apply(null,arguments)};function WG(t){if(typeof t!="object"||t===null)return!1;var r=Object.getPrototypeOf(t);if(r===null)return!0;for(var i=r;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return r===i}var qG=function(t){g4(r,t);function r(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];var u=t.apply(this,i)||this;return Object.setPrototypeOf(u,r.prototype),u}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return t.prototype.concat.apply(this,i)},r.prototype.prepend=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return i.length===1&&Array.isArray(i[0])?new(r.bind.apply(r,ju([void 0],i[0].concat(this)))):new(r.bind.apply(r,ju([void 0],i.concat(this))))},r}(Array),GG=function(t){g4(r,t);function r(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];var u=t.apply(this,i)||this;return Object.setPrototypeOf(u,r.prototype),u}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return t.prototype.concat.apply(this,i)},r.prototype.prepend=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return i.length===1&&Array.isArray(i[0])?new(r.bind.apply(r,ju([void 0],i[0].concat(this)))):new(r.bind.apply(r,ju([void 0],i.concat(this))))},r}(Array);function SA(t){return ea(t)?h4(t,function(){}):t}function KG(t){return typeof t=="boolean"}function YG(){return function(r){return QG(r)}}function QG(t){t===void 0&&(t={});var r=t.thunk,i=r===void 0?!0:r;t.immutableCheck,t.serializableCheck;var l=new qG;return i&&(KG(i)?l.push(KI):l.push(KI.withExtraArgument(i.extraArgument))),l}var ZG=!0;function JG(t){var r=YG(),i=t||{},l=i.reducer,u=l===void 0?void 0:l,p=i.middleware,m=p===void 0?r():p,w=i.devTools,b=w===void 0?!0:w,y=i.preloadedState,C=y===void 0?void 0:y,_=i.enhancers,x=_===void 0?void 0:_,j;if(typeof u=="function")j=u;else if(WG(u))j=LG(u);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var M=m;typeof M=="function"&&(M=M(r));var R=OG.apply(void 0,M),P=fw;b&&(P=UG(ll({trace:!ZG},typeof b=="object"&&b)));var B=new GG(R),I=B;Array.isArray(x)?I=ju([R],x):typeof x=="function"&&(I=x(B));var O=P.apply(void 0,I);return p4(j,C,O)}function cl(t,r){function i(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];if(r){var p=r.apply(void 0,l);if(!p)throw new Error("prepareAction did not return an object");return ll(ll({type:t,payload:p.payload},"meta"in p&&{meta:p.meta}),"error"in p&&{error:p.error})}return{type:t,payload:l[0]}}return i.toString=function(){return""+t},i.type=t,i.match=function(l){return l.type===t},i}function b4(t){var r={},i=[],l,u={addCase:function(p,m){var w=typeof p=="string"?p:p.type;if(w in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[w]=m,u},addMatcher:function(p,m){return i.push({matcher:p,reducer:m}),u},addDefaultCase:function(p){return l=p,u}};return t(u),[r,i,l]}function XG(t){return typeof t=="function"}function eK(t,r,i,l){i===void 0&&(i=[]);var u=typeof r=="function"?b4(r):[r,i,l],p=u[0],m=u[1],w=u[2],b;if(XG(t))b=function(){return SA(t())};else{var y=SA(t);b=function(){return y}}function C(_,x){_===void 0&&(_=b());var j=ju([p[x.type]],m.filter(function(M){var R=M.matcher;return R(x)}).map(function(M){var R=M.reducer;return R}));return j.filter(function(M){return!!M}).length===0&&(j=[w]),j.reduce(function(M,R){if(R)if(ml(M)){var P=M,B=R(P,x);return B===void 0?M:B}else{if(ea(M))return h4(M,function(I){return R(I,x)});var B=R(M,x);if(B===void 0){if(M===null)return M;throw Error("A case reducer on a non-draftable value must not return undefined")}return B}return M},_)}return C.getInitialState=b,C}function tK(t,r){return t+"/"+r}function _n(t){var r=t.name;if(!r)throw new Error("`name` is a required option for createSlice");typeof process<"u";var i=typeof t.initialState=="function"?t.initialState:SA(t.initialState),l=t.reducers||{},u=Object.keys(l),p={},m={},w={};u.forEach(function(C){var _=l[C],x=tK(r,C),j,M;"reducer"in _?(j=_.reducer,M=_.prepare):j=_,p[C]=j,m[x]=j,w[C]=M?cl(x,M):cl(x)});function b(){var C=typeof t.extraReducers=="function"?b4(t.extraReducers):[t.extraReducers],_=C[0],x=_===void 0?{}:_,j=C[1],M=j===void 0?[]:j,R=C[2],P=R===void 0?void 0:R,B=ll(ll({},x),m);return eK(i,function(I){for(var O in B)I.addCase(O,B[O]);for(var H=0,q=M;H<q.length;H++){var K=q[H];I.addMatcher(K.matcher,K.reducer)}P&&I.addDefaultCase(P)})}var y;return{name:r,reducer:function(C,_){return y||(y=b()),y(C,_)},actions:w,caseReducers:p,getInitialState:function(){return y||(y=b()),y.getInitialState()}}}var nK="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",rK=function(t){t===void 0&&(t=21);for(var r="",i=t;i--;)r+=nK[Math.random()*64|0];return r},oK=["name","message","stack","code"],by=function(){function t(r,i){this.payload=r,this.meta=i}return t}(),ZI=function(){function t(r,i){this.payload=r,this.meta=i}return t}(),iK=function(t){if(typeof t=="object"&&t!==null){for(var r={},i=0,l=oK;i<l.length;i++){var u=l[i];typeof t[u]=="string"&&(r[u]=t[u])}return r}return{message:String(t)}},ve=function(){function t(r,i,l){var u=cl(r+"/fulfilled",function(y,C,_,x){return{payload:y,meta:gy(ll({},x||{}),{arg:_,requestId:C,requestStatus:"fulfilled"})}}),p=cl(r+"/pending",function(y,C,_){return{payload:void 0,meta:gy(ll({},_||{}),{arg:C,requestId:y,requestStatus:"pending"})}}),m=cl(r+"/rejected",function(y,C,_,x,j){return{payload:x,error:(l&&l.serializeError||iK)(y||"Rejected"),meta:gy(ll({},j||{}),{arg:_,requestId:C,rejectedWithValue:!!x,requestStatus:"rejected",aborted:(y==null?void 0:y.name)==="AbortError",condition:(y==null?void 0:y.name)==="ConditionError"})}}),w=typeof AbortController<"u"?AbortController:function(){function y(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return y.prototype.abort=function(){},y}();function b(y){return function(C,_,x){var j=l!=null&&l.idGenerator?l.idGenerator(y):rK(),M=new w,R;function P(I){R=I,M.abort()}var B=function(){return VG(this,null,function(){var I,O,H,q,K,G,z;return BG(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),q=(I=l==null?void 0:l.condition)==null?void 0:I.call(l,y,{getState:_,extra:x}),aK(q)?[4,q]:[3,2];case 1:q=te.sent(),te.label=2;case 2:if(q===!1||M.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return K=new Promise(function(se,ge){return M.signal.addEventListener("abort",function(){return ge({name:"AbortError",message:R||"Aborted"})})}),C(p(j,y,(O=l==null?void 0:l.getPendingMeta)==null?void 0:O.call(l,{requestId:j,arg:y},{getState:_,extra:x}))),[4,Promise.race([K,Promise.resolve(i(y,{dispatch:C,getState:_,extra:x,requestId:j,signal:M.signal,abort:P,rejectWithValue:function(se,ge){return new by(se,ge)},fulfillWithValue:function(se,ge){return new ZI(se,ge)}})).then(function(se){if(se instanceof by)throw se;return se instanceof ZI?u(se.payload,j,y,se.meta):u(se,j,y)})])];case 3:return H=te.sent(),[3,5];case 4:return G=te.sent(),H=G instanceof by?m(null,j,y,G.payload,G.meta):m(G,j,y),[3,5];case 5:return z=l&&!l.dispatchConditionRejection&&m.match(H)&&H.meta.condition,z||C(H),[2,H]}})})}();return Object.assign(B,{abort:P,requestId:j,arg:y,unwrap:function(){return B.then(sK)}})}}return Object.assign(b,{pending:p,rejected:m,fulfilled:u,typePrefix:r})}return t.withTypes=function(){return t},t}();function sK(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function aK(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var px="listenerMiddleware";cl(px+"/add");cl(px+"/removeAll");cl(px+"/remove");var JI;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);xG();class Kn extends wk{constructor(){super(...arguments);as(this,"apiAccess",n_.create({baseURL:`${df}/api`,headers:{"Content-type":"application/json",Authorization:`Bearer ${super.getAuthorisation()}`}}))}}const{apiAccess:w4}=new Kn,lK={isLoading:!0,seo:[],errorMessage:null},bp=ve("SEO/fetchSeoData",async(t,{rejectWithValue:r})=>{try{return(await w4.get(`seo/${t.toLowerCase()}`)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),xg=ve("SEO/saveSeoData",async(t,{rejectWithValue:r})=>{try{return(await w4.post("store-seo",t)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),cK=_n({name:"SEO",initialState:lK,extraReducers:{[bp.pending]:t=>{t.isLoading=!0},[bp.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.seo=r},[bp.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.seo=[],t.errorMessage=r,Pe(r)},[xg.pending]:t=>{t.isLoading=!0,ir("We are processing your request.")},[xg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.seo=r,We("Data Saved Successfully.")},[xg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMessage=r,Pe(r)}}}),dK=cK.reducer;function Et({title:t,page:r}){const{generalSetting:i}=He(q=>q.generalSettings),[l,u]=D.useState("Bizz Solution Plc"),[p,m]=D.useState(""),{isLoading:w,seo:b}=He(q=>q.SeoReducer),{canonical:y,description:C,keywords:_,og_description:x,og_title:j,og_type:M,robots:R,twitter_card:P,twitter_creator:B,twitter_description:I,twitter_title:O}=b,H=nt();return D.useEffect(()=>{H(bp(r))},[H]),D.useEffect(()=>{var q,K;u(`${(q=i==null?void 0:i.general)==null?void 0:q.site_name} | ${t}`),m(`/${(K=i==null?void 0:i.general)==null?void 0:K.site_favicon}`)},[i]),d.jsxs(Ag,{children:[d.jsx("title",{children:l}),d.jsx("meta",{name:"robots",content:R||"noindex, nofollow"}),d.jsx("meta",{name:"keywords",content:_||""}),d.jsx("meta",{name:"description",content:C||""}),d.jsx("meta",{property:"og:type",content:M||""}),d.jsx("meta",{property:"og:title",content:j||""}),d.jsx("meta",{property:"og:description",content:x||""}),d.jsx("meta",{name:"twitter:creator",content:B||""}),d.jsx("meta",{name:"twitter:card",content:P||""}),d.jsx("meta",{name:"twitter:title",content:O||""}),d.jsx("meta",{name:"twitter:description",content:I||""}),d.jsx("link",{rel:"canonical",href:y||""}),d.jsx("link",{rel:"icon",type:"image/png",href:Cn(p)})]})}const{apiAccess:qc}=new Kn,uK={isLoading:!0,generalSetting:[],aboutSetting:[],sliderSetting:[],technology:[],industry:[],errorMess:null},Sg=ve("settings/fetchAllSettings",async(t,{rejectedWithValue:r})=>{try{return(await qc.get("all-settings")).data}catch(i){return r(i.response.message)}}),wp=ve("settings/fetchAboutSettings",async(t,{rejectedWithValue:r})=>{try{return(await qc.get("about-settings")).data}catch(i){return r(i.response.message)}}),kp=ve("settings/fetchTechnologySettings",async(t,{rejectedWithValue:r})=>{try{return(await qc.get("technology-settings")).data}catch(i){return r(i.response.message)}}),vp=ve("settings/fetchIndustrySettings",async(t,{rejectedWithValue:r})=>{try{return(await qc.get("industry-settings")).data}catch(i){return r(i.response.message)}}),yp=ve("settings/fetchSliderSettings",async(t,{rejectedWithValue:r})=>{try{return(await qc.get("slider-settings")).data}catch(i){return r(i.response.message)}}),ni=ve("settings/saveSettings",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}};return(await qc.post("store-settings",t,i)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),wy=ve("settings/saveAboutSettings",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}};return(await qc.post("store-about-settings",t,i)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),hK=_n({name:"settings",initialState:uK,extraReducers:{[Sg.pending]:t=>{t.isLoading=!0},[Sg.fulfilled]:(t,{payload:r})=>{const{allSettings:i}=r;t.isLoading=!1,t.generalSetting=i,t.errorMess=null},[Sg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMess=r},[wp.pending]:t=>{t.isLoading=!0},[wp.fulfilled]:(t,{payload:r})=>{const{data:i}=r;t.isLoading=!1,t.aboutSetting=i,t.errorMess=null},[wp.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMess=r},[vp.pending]:t=>{t.isLoading=!0},[vp.fulfilled]:(t,{payload:r})=>{const{data:i}=r;t.isLoading=!1,t.industry=i,t.errorMess=null},[vp.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMess=r},[kp.pending]:t=>{t.isLoading=!0},[kp.fulfilled]:(t,{payload:r})=>{const{data:i}=r;t.isLoading=!1,t.technology=i,t.errorMess=null},[kp.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMess=r},[yp.pending]:t=>{t.isLoading=!0},[yp.fulfilled]:(t,{payload:r})=>{const{data:i}=r;t.isLoading=!1,t.sliderSetting=i,t.errorMess=null},[yp.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMess=r},[ni.pending]:t=>{t.isLoading=!0,ir("We are processing your request.")},[ni.fulfilled]:(t,{payload:r})=>{switch(t.isLoading=!1,r.type){case"slider":t.sliderSetting=r;break;case"technology":t.technology=r;break;case"industry":t.industry=r;break;case"about":t.aboutSetting=r;break;default:t.generalSetting=r}We("Data Saved Successfully.")},[ni.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMessage=r,Pe(r)},[wy.pending]:t=>{t.isLoading=!0,ir("We are processing your request.")},[wy.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,console.log(r),We("Data Saved Successfully.")},[wy.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.errorMessage=r,Pe(r)}}}),pK=hK.reducer,fK={humburgerNavExpander:!1,videoModuleShow:!1,videoId:""},k4=_n({name:"navbars",initialState:fK,reducers:{humburgerNavAction:t=>{t.humburgerNavExpander=!t.humburgerNavExpander},videoModuleAction:(t,{payload:r})=>{t.videoModuleShow=!t.videoModuleShow,t.videoId=r}}}),{humburgerNavAction:fx,videoModuleAction:v4}=k4.actions,mK=k4.reducer;function gK(t){const{isLoading:r,sliderSetting:i}=He(p=>p.generalSettings),l=nt(),u=p=>{p.preventDefault(),l(v4(i==null?void 0:i.link))};return D.useEffect(()=>{l(yp())},[l]),d.jsxs("div",{className:"rs-banner style3 rs-rain-animate modify1",children:[d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-6",children:d.jsxs("div",{className:"banner-content",children:[(i==null?void 0:i.link)&&d.jsx("div",{className:"rs-videos",children:d.jsx("div",{className:"animate-border white-color style3",children:d.jsx(je,{className:"popup-border popup-videos",to:i==null?void 0:i.link,onClick:u,children:d.jsx("i",{className:"fa fa-play"})})})}),(i==null?void 0:i.title)&&d.jsx("h1",{className:"title",children:i==null?void 0:i.title}),(i==null?void 0:i.text)&&d.jsx("p",{className:"desc",children:i==null?void 0:i.text}),(i==null?void 0:i.btn_text)&&d.jsx("ul",{className:"banner-btn",children:d.jsx("li",{children:d.jsx("a",{className:"readon started",href:i==null?void 0:i.btn_link,children:i==null?void 0:i.btn_text})})})]})})})}),d.jsx("div",{className:"images-part hidden-md",children:d.jsx("img",{src:Cn(`/${i==null?void 0:i.image_link}`),alt:""})}),d.jsxs("div",{className:"line-inner style2",children:[d.jsx("div",{className:"line"}),d.jsx("div",{className:"line"}),d.jsx("div",{className:"line"})]})]})}var y4={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var r={}.hasOwnProperty;function i(){for(var l=[],u=0;u<arguments.length;u++){var p=arguments[u];if(p){var m=typeof p;if(m==="string"||m==="number")l.push(p);else if(Array.isArray(p)){if(p.length){var w=i.apply(null,p);w&&l.push(w)}}else if(m==="object"){if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]")){l.push(p.toString());continue}for(var b in p)r.call(p,b)&&p[b]&&l.push(b)}}}return l.join(" ")}t.exports?(i.default=i,t.exports=i):window.classNames=i})()})(y4);var bK=y4.exports;const Pr=ws(bK);function XI(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function wK(t){var r=kK(t,"string");return typeof r=="symbol"?r:String(r)}function kK(t,r){if(typeof t!="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,r||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function vK(t,r,i){var l=D.useRef(t!==void 0),u=D.useState(r),p=u[0],m=u[1],w=t!==void 0,b=l.current;return l.current=w,!w&&b&&p!==r&&m(r),[w?t:p,D.useCallback(function(y){for(var C=arguments.length,_=new Array(C>1?C-1:0),x=1;x<C;x++)_[x-1]=arguments[x];i&&i.apply(void 0,[y].concat(_)),m(y)},[i])]}function C4(t,r){return Object.keys(r).reduce(function(i,l){var u,p=i,m=p[XI(l)],w=p[l],b=JL(p,[XI(l),l].map(wK)),y=r[l],C=vK(w,m,t[y]),_=C[0],x=C[1];return vA({},b,(u={},u[l]=_,u[y]=x,u))},t)}function EA(t,r){return EA=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,u){return l.__proto__=u,l},EA(t,r)}function yK(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,EA(t,r)}const CK=["xxl","xl","lg","md","sm","xs"],AK="xs",kk=D.createContext({prefixes:{},breakpoints:CK,minBreakpoint:AK});function vs(t,r){const{prefixes:i}=D.useContext(kk);return t||i[r]||r}function A4(){const{breakpoints:t}=D.useContext(kk);return t}function _4(){const{minBreakpoint:t}=D.useContext(kk);return t}function _K(){const{dir:t}=D.useContext(kk);return t==="rtl"}function vk(t){return t&&t.ownerDocument||document}function xK(t){var r=vk(t);return r&&r.defaultView||window}function SK(t,r){return xK(t).getComputedStyle(t,r)}var EK=/([A-Z])/g;function jK(t){return t.replace(EK,"-$1").toLowerCase()}var DK=/^ms-/;function Ym(t){return jK(t).replace(DK,"-ms-")}var TK=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function NK(t){return!!(t&&TK.test(t))}function Nc(t,r){var i="",l="";if(typeof r=="string")return t.style.getPropertyValue(Ym(r))||SK(t).getPropertyValue(Ym(r));Object.keys(r).forEach(function(u){var p=r[u];!p&&p!==0?t.style.removeProperty(Ym(u)):NK(u)?l+=u+"("+p+") ":i+=Ym(u)+": "+p+";"}),l&&(i+="transform: "+l+";"),t.style.cssText+=";"+i}const eM={disabled:!1},x4=_e.createContext(null);var IK=function(r){return r.scrollTop},rp="unmounted",yc="exited",Ua="entering",_c="entered",jA="exiting",ra=function(t){yK(r,t);function r(l,u){var p;p=t.call(this,l,u)||this;var m=u,w=m&&!m.isMounting?l.enter:l.appear,b;return p.appearStatus=null,l.in?w?(b=yc,p.appearStatus=Ua):b=_c:l.unmountOnExit||l.mountOnEnter?b=rp:b=yc,p.state={status:b},p.nextCallback=null,p}r.getDerivedStateFromProps=function(u,p){var m=u.in;return m&&p.status===rp?{status:yc}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(u){var p=null;if(u!==this.props){var m=this.state.status;this.props.in?m!==Ua&&m!==_c&&(p=Ua):(m===Ua||m===_c)&&(p=jA)}this.updateStatus(!1,p)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var u=this.props.timeout,p,m,w;return p=m=w=u,u!=null&&typeof u!="number"&&(p=u.exit,m=u.enter,w=u.appear!==void 0?u.appear:m),{exit:p,enter:m,appear:w}},i.updateStatus=function(u,p){if(u===void 0&&(u=!1),p!==null)if(this.cancelNextCallback(),p===Ua){if(this.props.unmountOnExit||this.props.mountOnEnter){var m=this.props.nodeRef?this.props.nodeRef.current:tu.findDOMNode(this);m&&IK(m)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===yc&&this.setState({status:rp})},i.performEnter=function(u){var p=this,m=this.props.enter,w=this.context?this.context.isMounting:u,b=this.props.nodeRef?[w]:[tu.findDOMNode(this),w],y=b[0],C=b[1],_=this.getTimeouts(),x=w?_.appear:_.enter;if(!u&&!m||eM.disabled){this.safeSetState({status:_c},function(){p.props.onEntered(y)});return}this.props.onEnter(y,C),this.safeSetState({status:Ua},function(){p.props.onEntering(y,C),p.onTransitionEnd(x,function(){p.safeSetState({status:_c},function(){p.props.onEntered(y,C)})})})},i.performExit=function(){var u=this,p=this.props.exit,m=this.getTimeouts(),w=this.props.nodeRef?void 0:tu.findDOMNode(this);if(!p||eM.disabled){this.safeSetState({status:yc},function(){u.props.onExited(w)});return}this.props.onExit(w),this.safeSetState({status:jA},function(){u.props.onExiting(w),u.onTransitionEnd(m.exit,function(){u.safeSetState({status:yc},function(){u.props.onExited(w)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(u,p){p=this.setNextCallback(p),this.setState(u,p)},i.setNextCallback=function(u){var p=this,m=!0;return this.nextCallback=function(w){m&&(m=!1,p.nextCallback=null,u(w))},this.nextCallback.cancel=function(){m=!1},this.nextCallback},i.onTransitionEnd=function(u,p){this.setNextCallback(p);var m=this.props.nodeRef?this.props.nodeRef.current:tu.findDOMNode(this),w=u==null&&!this.props.addEndListener;if(!m||w){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var b=this.props.nodeRef?[this.nextCallback]:[m,this.nextCallback],y=b[0],C=b[1];this.props.addEndListener(y,C)}u!=null&&setTimeout(this.nextCallback,u)},i.render=function(){var u=this.state.status;if(u===rp)return null;var p=this.props,m=p.children;p.in,p.mountOnEnter,p.unmountOnExit,p.appear,p.enter,p.exit,p.timeout,p.addEndListener,p.onEnter,p.onEntering,p.onEntered,p.onExit,p.onExiting,p.onExited,p.nodeRef;var w=JL(p,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _e.createElement(x4.Provider,{value:null},typeof m=="function"?m(u,w):_e.cloneElement(_e.Children.only(m),w))},r}(_e.Component);ra.contextType=x4;ra.propTypes={};function Bd(){}ra.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Bd,onEntering:Bd,onEntered:Bd,onExit:Bd,onExiting:Bd,onExited:Bd};ra.UNMOUNTED=rp;ra.EXITED=yc;ra.ENTERING=Ua;ra.ENTERED=_c;ra.EXITING=jA;const MK=ra,Uu=!!(typeof window<"u"&&window.document&&window.document.createElement);var DA=!1,TA=!1;try{var ky={get passive(){return DA=!0},get once(){return TA=DA=!0}};Uu&&(window.addEventListener("test",ky,ky),window.removeEventListener("test",ky,!0))}catch{}function S4(t,r,i,l){if(l&&typeof l!="boolean"&&!TA){var u=l.once,p=l.capture,m=i;!TA&&u&&(m=i.__once||function w(b){this.removeEventListener(r,w,p),i.call(this,b)},i.__once=m),t.addEventListener(r,m,DA?l:p)}t.addEventListener(r,i,l)}function NA(t,r,i,l){var u=l&&typeof l!="boolean"?l.capture:l;t.removeEventListener(r,i,u),i.__once&&t.removeEventListener(r,i.__once,u)}function mw(t,r,i,l){return S4(t,r,i,l),function(){NA(t,r,i,l)}}function PK(t,r,i,l){if(i===void 0&&(i=!1),l===void 0&&(l=!0),t){var u=document.createEvent("HTMLEvents");u.initEvent(r,i,l),t.dispatchEvent(u)}}function LK(t){var r=Nc(t,"transitionDuration")||"",i=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*i}function OK(t,r,i){i===void 0&&(i=5);var l=!1,u=setTimeout(function(){l||PK(t,"transitionend",!0)},r+i),p=mw(t,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(u),p()}}function E4(t,r,i,l){i==null&&(i=LK(t)||0);var u=OK(t,i,l),p=mw(t,"transitionend",r);return function(){u(),p()}}function tM(t,r){const i=Nc(t,r)||"",l=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*l}function BK(t,r){const i=tM(t,"transitionDuration"),l=tM(t,"transitionDelay"),u=E4(t,p=>{p.target===t&&(u(),r(p))},i+l)}function RK(t){t.offsetHeight}const nM=t=>!t||typeof t=="function"?t:r=>{t.current=r};function zK(t,r){const i=nM(t),l=nM(r);return u=>{i&&i(u),l&&l(u)}}function uf(t,r){return D.useMemo(()=>zK(t,r),[t,r])}function FK(t){return t&&"setState"in t?tu.findDOMNode(t):t??null}const $K=_e.forwardRef(({onEnter:t,onEntering:r,onEntered:i,onExit:l,onExiting:u,onExited:p,addEndListener:m,children:w,childRef:b,...y},C)=>{const _=D.useRef(null),x=uf(_,b),j=K=>{x(FK(K))},M=K=>G=>{K&&_.current&&K(_.current,G)},R=D.useCallback(M(t),[t]),P=D.useCallback(M(r),[r]),B=D.useCallback(M(i),[i]),I=D.useCallback(M(l),[l]),O=D.useCallback(M(u),[u]),H=D.useCallback(M(p),[p]),q=D.useCallback(M(m),[m]);return d.jsx(MK,{ref:C,...y,onEnter:R,onEntered:B,onEntering:P,onExit:I,onExited:H,onExiting:O,addEndListener:q,nodeRef:_,children:typeof w=="function"?(K,G)=>w(K,{...G,ref:j}):_e.cloneElement(w,{ref:j})})}),HK=$K;function VK(t){const r=D.useRef(t);return D.useEffect(()=>{r.current=t},[t]),r}function Jo(t){const r=VK(t);return D.useCallback(function(...i){return r.current&&r.current(...i)},[r])}function UK(){return D.useState(null)}function WK(){const t=D.useRef(!0),r=D.useRef(()=>t.current);return D.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),r.current}function qK(t){const r=D.useRef(null);return D.useEffect(()=>{r.current=t}),r.current}const GK=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",KK=typeof document<"u",rM=KK||GK?D.useLayoutEffect:D.useEffect,YK=["as","disabled"];function QK(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}function ZK(t){return!t||t.trim()==="#"}function j4({tagName:t,disabled:r,href:i,target:l,rel:u,role:p,onClick:m,tabIndex:w=0,type:b}){t||(i!=null||l!=null||u!=null?t="a":t="button");const y={tagName:t};if(t==="button")return[{type:b||"button",disabled:r},y];const C=x=>{if((r||t==="a"&&ZK(i))&&x.preventDefault(),r){x.stopPropagation();return}m==null||m(x)},_=x=>{x.key===" "&&(x.preventDefault(),C(x))};return t==="a"&&(i||(i="#"),r&&(i=void 0)),[{role:p??"button",disabled:void 0,tabIndex:r?void 0:w,href:i,target:t==="a"?l:void 0,"aria-disabled":r||void 0,rel:t==="a"?u:void 0,onClick:C,onKeyDown:_},y]}const D4=D.forwardRef((t,r)=>{let{as:i,disabled:l}=t,u=QK(t,YK);const[p,{tagName:m}]=j4(Object.assign({tagName:i,disabled:l},u));return d.jsx(m,Object.assign({},u,p,{ref:r}))});D4.displayName="Button";const JK=["onKeyDown"];function XK(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}function eY(t){return!t||t.trim()==="#"}const T4=D.forwardRef((t,r)=>{let{onKeyDown:i}=t,l=XK(t,JK);const[u]=j4(Object.assign({tagName:"a"},l)),p=Jo(m=>{u.onKeyDown(m),i==null||i(m)});return eY(l.href)||l.role==="button"?d.jsx("a",Object.assign({ref:r},l,u,{onKeyDown:p})):d.jsx("a",Object.assign({ref:r},l,{onKeyDown:i}))});T4.displayName="Anchor";const tY=T4,nY={[Ua]:"show",[_c]:"show"},N4=D.forwardRef(({className:t,children:r,transitionClasses:i={},onEnter:l,...u},p)=>{const m={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},w=D.useCallback((b,y)=>{RK(b),l==null||l(b,y)},[l]);return d.jsx(HK,{ref:p,addEndListener:BK,...m,onEnter:w,childRef:r.ref,children:(b,y)=>D.cloneElement(r,{...y,className:Pr("fade",t,r.props.className,nY[b],i[b])})})});N4.displayName="Fade";const yk=N4,rY={"aria-label":it.string,onClick:it.func,variant:it.oneOf(["white"])},mx=D.forwardRef(({className:t,variant:r,"aria-label":i="Close",...l},u)=>d.jsx("button",{ref:u,type:"button",className:Pr("btn-close",r&&`btn-close-${r}`,t),"aria-label":i,...l}));mx.displayName="CloseButton";mx.propTypes=rY;const oY=mx,iY=t=>D.forwardRef((r,i)=>d.jsx("div",{...r,ref:i,className:Pr(r.className,t)}));var sY=/-(.)/g;function aY(t){return t.replace(sY,function(r,i){return i.toUpperCase()})}const lY=t=>t[0].toUpperCase()+aY(t).slice(1);function hf(t,{displayName:r=lY(t),Component:i,defaultProps:l}={}){const u=D.forwardRef(({className:p,bsPrefix:m,as:w=i||"div",...b},y)=>{const C={...l,...b},_=vs(m,t);return d.jsx(w,{ref:y,className:Pr(p,_),...C})});return u.displayName=r,u}const I4=D.createContext(null);I4.displayName="CardHeaderContext";const cY=I4;function dY(t){const r=D.useRef(t);return r.current=t,r}function M4(t){const r=dY(t);D.useEffect(()=>()=>r.current(),[])}function oM(t,r){let i=0;return D.Children.map(t,l=>D.isValidElement(l)?r(l,i++):l)}function uY(t,r){let i=0;D.Children.forEach(t,l=>{D.isValidElement(l)&&r(l,i++)})}function hY({as:t,bsPrefix:r,className:i,...l}){r=vs(r,"col");const u=A4(),p=_4(),m=[],w=[];return u.forEach(b=>{const y=l[b];delete l[b];let C,_,x;typeof y=="object"&&y!=null?{span:C,offset:_,order:x}=y:C=y;const j=b!==p?`-${b}`:"";C&&m.push(C===!0?`${r}${j}`:`${r}${j}-${C}`),x!=null&&w.push(`order${j}-${x}`),_!=null&&w.push(`offset${j}-${_}`)}),[{...l,className:Pr(i,...m,...w)},{as:t,bsPrefix:r,spans:m}]}const P4=D.forwardRef((t,r)=>{const[{className:i,...l},{as:u="div",bsPrefix:p,spans:m}]=hY(t);return d.jsx(u,{...l,ref:r,className:Pr(i,!m.length&&p)})});P4.displayName="Col";const Je=P4;var pY=Function.prototype.bind.call(Function.prototype.call,[].slice);function Cc(t,r){return pY(t.querySelectorAll(r))}function fY(t,r,i){const l=D.useRef(t!==void 0),[u,p]=D.useState(r),m=t!==void 0,w=l.current;return l.current=m,!m&&w&&u!==r&&p(r),[m?t:u,D.useCallback((...b)=>{const[y,...C]=b;let _=i==null?void 0:i(y,...C);return p(y),_},[i])]}function mY(){const[,t]=D.useReducer(r=>!r,!1);return t}function iM(t,r){if(t.contains)return t.contains(r);if(t.compareDocumentPosition)return t===r||!!(t.compareDocumentPosition(r)&16)}const gw={prefix:String(Math.round(Math.random()*1e10)),current:0,isSSR:!1},gx=_e.createContext(gw);let gY=!!(typeof window<"u"&&window.document&&window.document.createElement),vy=new WeakMap;function bY(t=!1){let r=D.useContext(gx),i=D.useRef(null);if(i.current===null&&!t){var l,u;let p=(l=_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||l===void 0||(u=l.ReactCurrentOwner)===null||u===void 0?void 0:u.current;if(p){let m=vy.get(p);m==null?vy.set(p,{id:r.current,state:p.memoizedState}):p.memoizedState!==m.state&&(r.current=m.id,vy.delete(p))}i.current=++r.current}return i.current}function wY(t){let r=D.useContext(gx);r===gw&&!gY&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=bY(!!t),l=`react-aria${r.prefix}`;return t||`${l}-${i}`}function kY(t){let r=_e.useId(),[i]=D.useState(_Y()),l=i?"react-aria":`react-aria${gw.prefix}`;return t||`${l}-${r}`}const vY=typeof _e.useId=="function"?kY:wY;function yY(){return!1}function CY(){return!0}function AY(t){return()=>{}}function _Y(){return typeof _e.useSyncExternalStore=="function"?_e.useSyncExternalStore(AY,yY,CY):D.useContext(gx).isSSR}const xY=D.createContext(null),Zp=(t,r=null)=>t!=null?String(t):r||null,Du=xY,L4=D.createContext(null);L4.displayName="NavContext";const O4=L4,SY="data-rr-ui-",EY="rrUi";function Ck(t){return`${SY}${t}`}function jY(t){return`${EY}${t}`}const B4=D.createContext(Uu?window:void 0);B4.Provider;function bx(){return D.useContext(B4)}const R4=D.createContext(null);R4.displayName="NavbarContext";const DY=R4,z4=D.forwardRef(({bsPrefix:t,fluid:r=!1,as:i="div",className:l,...u},p)=>{const m=vs(t,"container"),w=typeof r=="string"?`-${r}`:"-fluid";return d.jsx(i,{ref:p,...u,className:Pr(l,r?`${m}${w}`:m)})});z4.displayName="Container";const wx=z4,TY=D.createContext(null),Wu=TY,NY=["as","active","eventKey"];function IY(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}function F4({key:t,onClick:r,active:i,id:l,role:u,disabled:p}){const m=D.useContext(Du),w=D.useContext(O4),b=D.useContext(Wu);let y=i;const C={role:u};if(w){!u&&w.role==="tablist"&&(C.role="tab");const _=w.getControllerId(t??null),x=w.getControlledId(t??null);C[Ck("event-key")]=t,C.id=_||l,y=i==null&&t!=null?w.activeKey===t:i,(y||!(b!=null&&b.unmountOnExit)&&!(b!=null&&b.mountOnEnter))&&(C["aria-controls"]=x)}return C.role==="tab"&&(C["aria-selected"]=y,y||(C.tabIndex=-1),p&&(C.tabIndex=-1,C["aria-disabled"]=!0)),C.onClick=Jo(_=>{p||(r==null||r(_),t!=null&&m&&!_.isPropagationStopped()&&m(t,_))}),[C,{isActive:y}]}const $4=D.forwardRef((t,r)=>{let{as:i=D4,active:l,eventKey:u}=t,p=IY(t,NY);const[m,w]=F4(Object.assign({key:Zp(u,p.href),active:l},p));return m[Ck("active")]=w.isActive,d.jsx(i,Object.assign({},p,m,{ref:r}))});$4.displayName="NavItem";const MY=$4,PY=["as","onSelect","activeKey","role","onKeyDown"];function LY(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}const sM=()=>{},aM=Ck("event-key"),H4=D.forwardRef((t,r)=>{let{as:i="div",onSelect:l,activeKey:u,role:p,onKeyDown:m}=t,w=LY(t,PY);const b=mY(),y=D.useRef(!1),C=D.useContext(Du),_=D.useContext(Wu);let x,j;_&&(p=p||"tablist",u=_.activeKey,x=_.getControlledId,j=_.getControllerId);const M=D.useRef(null),R=O=>{const H=M.current;if(!H)return null;const q=Cc(H,`[${aM}]:not([aria-disabled=true])`),K=H.querySelector("[aria-selected=true]");if(!K||K!==document.activeElement)return null;const G=q.indexOf(K);if(G===-1)return null;let z=G+O;return z>=q.length&&(z=0),z<0&&(z=q.length-1),q[z]},P=(O,H)=>{O!=null&&(l==null||l(O,H),C==null||C(O,H))},B=O=>{if(m==null||m(O),!_)return;let H;switch(O.key){case"ArrowLeft":case"ArrowUp":H=R(-1);break;case"ArrowRight":case"ArrowDown":H=R(1);break;default:return}H&&(O.preventDefault(),P(H.dataset[jY("EventKey")]||null,O),y.current=!0,b())};D.useEffect(()=>{if(M.current&&y.current){const O=M.current.querySelector(`[${aM}][aria-selected=true]`);O==null||O.focus()}y.current=!1});const I=uf(r,M);return d.jsx(Du.Provider,{value:P,children:d.jsx(O4.Provider,{value:{role:p,activeKey:Zp(u),getControlledId:x||sM,getControllerId:j||sM},children:d.jsx(i,Object.assign({},w,{onKeyDown:B,ref:I,role:p}))})})});H4.displayName="Nav";const OY=Object.assign(H4,{Item:MY});var Qm;function lM(t){if((!Qm&&Qm!==0||t)&&Uu){var r=document.createElement("div");r.style.position="absolute",r.style.top="-9999px",r.style.width="50px",r.style.height="50px",r.style.overflow="scroll",document.body.appendChild(r),Qm=r.offsetWidth-r.clientWidth,document.body.removeChild(r)}return Qm}function yy(t){t===void 0&&(t=vk());try{var r=t.activeElement;return!r||!r.nodeName?null:r}catch{return t.body}}function BY(t=document){const r=t.defaultView;return Math.abs(r.innerWidth-t.documentElement.clientWidth)}const cM=Ck("modal-open");class RY{constructor({ownerDocument:r,handleContainerOverflow:i=!0,isRTL:l=!1}={}){this.handleContainerOverflow=i,this.isRTL=l,this.modals=[],this.ownerDocument=r}getScrollbarWidth(){return BY(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(r){}removeModalAttributes(r){}setContainerStyle(r){const i={overflow:"hidden"},l=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();r.style={overflow:u.style.overflow,[l]:u.style[l]},r.scrollBarWidth&&(i[l]=`${parseInt(Nc(u,l)||"0",10)+r.scrollBarWidth}px`),u.setAttribute(cM,""),Nc(u,i)}reset(){[...this.modals].forEach(r=>this.remove(r))}removeContainerStyle(r){const i=this.getElement();i.removeAttribute(cM),Object.assign(i.style,r.style)}add(r){let i=this.modals.indexOf(r);return i!==-1||(i=this.modals.length,this.modals.push(r),this.setModalAttributes(r),i!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),i}remove(r){const i=this.modals.indexOf(r);i!==-1&&(this.modals.splice(i,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(r))}isTopModal(r){return!!this.modals.length&&this.modals[this.modals.length-1]===r}}const kx=RY,Cy=(t,r)=>Uu?t==null?(r||vk()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function zY(t,r){const i=bx(),[l,u]=D.useState(()=>Cy(t,i==null?void 0:i.document));if(!l){const p=Cy(t);p&&u(p)}return D.useEffect(()=>{r&&l&&r(l)},[r,l]),D.useEffect(()=>{const p=Cy(t);p!==l&&u(p)},[t,l]),l}function vx({children:t,in:r,onExited:i,mountOnEnter:l,unmountOnExit:u}){const p=D.useRef(null),m=D.useRef(r),w=Jo(i);D.useEffect(()=>{r?m.current=!0:w(p.current)},[r,w]);const b=uf(p,t.ref),y=D.cloneElement(t,{ref:b});return r?y:u||!m.current&&l?null:y}function FY({in:t,onTransition:r}){const i=D.useRef(null),l=D.useRef(!0),u=Jo(r);return rM(()=>{if(!i.current)return;let p=!1;return u({in:t,element:i.current,initial:l.current,isStale:()=>p}),()=>{p=!0}},[t,u]),rM(()=>(l.current=!1,()=>{l.current=!0}),[]),i}function $Y({children:t,in:r,onExited:i,onEntered:l,transition:u}){const[p,m]=D.useState(!r);r&&p&&m(!1);const w=FY({in:!!r,onTransition:y=>{const C=()=>{y.isStale()||(y.in?l==null||l(y.element,y.initial):(m(!0),i==null||i(y.element)))};Promise.resolve(u(y)).then(C,_=>{throw y.in||m(!0),_})}}),b=uf(w,t.ref);return p&&!r?null:D.cloneElement(t,{ref:b})}function dM(t,r,i){return t?d.jsx(t,Object.assign({},i)):r?d.jsx($Y,Object.assign({},i,{transition:r})):d.jsx(vx,Object.assign({},i))}function HY(t){return t.code==="Escape"||t.keyCode===27}const VY=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function UY(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}let Ay;function WY(t){return Ay||(Ay=new kx({ownerDocument:t==null?void 0:t.document})),Ay}function qY(t){const r=bx(),i=t||WY(r),l=D.useRef({dialog:null,backdrop:null});return Object.assign(l.current,{add:()=>i.add(l.current),remove:()=>i.remove(l.current),isTopModal:()=>i.isTopModal(l.current),setDialogRef:D.useCallback(u=>{l.current.dialog=u},[]),setBackdropRef:D.useCallback(u=>{l.current.backdrop=u},[])})}const V4=D.forwardRef((t,r)=>{let{show:i=!1,role:l="dialog",className:u,style:p,children:m,backdrop:w=!0,keyboard:b=!0,onBackdropClick:y,onEscapeKeyDown:C,transition:_,runTransition:x,backdropTransition:j,runBackdropTransition:M,autoFocus:R=!0,enforceFocus:P=!0,restoreFocus:B=!0,restoreFocusOptions:I,renderDialog:O,renderBackdrop:H=ke=>d.jsx("div",Object.assign({},ke)),manager:q,container:K,onShow:G,onHide:z=()=>{},onExit:te,onExited:se,onExiting:ge,onEnter:ce,onEntering:oe,onEntered:re}=t,J=UY(t,VY);const ne=bx(),fe=zY(K),ee=qY(q),ie=WK(),Ce=qK(i),[Me,we]=D.useState(!i),le=D.useRef(null);D.useImperativeHandle(r,()=>ee,[ee]),Uu&&!Ce&&i&&(le.current=yy(ne==null?void 0:ne.document)),i&&Me&&we(!1);const ye=Jo(()=>{if(ee.add(),gt.current=mw(document,"keydown",Mt),pt.current=mw(document,"focus",()=>setTimeout(Ye),!0),G&&G(),R){var ke,he;const et=yy((ke=(he=ee.dialog)==null?void 0:he.ownerDocument)!=null?ke:ne==null?void 0:ne.document);ee.dialog&&et&&!iM(ee.dialog,et)&&(le.current=et,ee.dialog.focus())}}),qe=Jo(()=>{if(ee.remove(),gt.current==null||gt.current(),pt.current==null||pt.current(),B){var ke;(ke=le.current)==null||ke.focus==null||ke.focus(I),le.current=null}});D.useEffect(()=>{!i||!fe||ye()},[i,fe,ye]),D.useEffect(()=>{Me&&qe()},[Me,qe]),M4(()=>{qe()});const Ye=Jo(()=>{if(!P||!ie()||!ee.isTopModal())return;const ke=yy(ne==null?void 0:ne.document);ee.dialog&&ke&&!iM(ee.dialog,ke)&&ee.dialog.focus()}),Be=Jo(ke=>{ke.target===ke.currentTarget&&(y==null||y(ke),w===!0&&z())}),Mt=Jo(ke=>{b&&HY(ke)&&ee.isTopModal()&&(C==null||C(ke),ke.defaultPrevented||z())}),pt=D.useRef(),gt=D.useRef(),At=(...ke)=>{we(!0),se==null||se(...ke)};if(!fe)return null;const jt=Object.assign({role:l,ref:ee.setDialogRef,"aria-modal":l==="dialog"?!0:void 0},J,{style:p,className:u,tabIndex:-1});let Le=O?O(jt):d.jsx("div",Object.assign({},jt,{children:D.cloneElement(m,{role:"document"})}));Le=dM(_,x,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!i,onExit:te,onExiting:ge,onExited:At,onEnter:ce,onEntering:oe,onEntered:re,children:Le});let Ie=null;return w&&(Ie=H({ref:ee.setBackdropRef,onClick:Be}),Ie=dM(j,M,{in:!!i,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ie})),d.jsx(d.Fragment,{children:tu.createPortal(d.jsxs(d.Fragment,{children:[Ie,Le]}),fe)})});V4.displayName="Modal";const GY=Object.assign(V4,{Manager:kx});function KY(t,r){return t.classList?!!r&&t.classList.contains(r):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+r+" ")!==-1}function YY(t,r){t.classList?t.classList.add(r):KY(t,r)||(typeof t.className=="string"?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r))}function uM(t,r){return t.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function QY(t,r){t.classList?t.classList.remove(r):typeof t.className=="string"?t.className=uM(t.className,r):t.setAttribute("class",uM(t.className&&t.className.baseVal||"",r))}const Rd={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class ZY extends kx{adjustAndStore(r,i,l){const u=i.style[r];i.dataset[r]=u,Nc(i,{[r]:`${parseFloat(Nc(i,r))+l}px`})}restore(r,i){const l=i.dataset[r];l!==void 0&&(delete i.dataset[r],Nc(i,{[r]:l}))}setContainerStyle(r){super.setContainerStyle(r);const i=this.getElement();if(YY(i,"modal-open"),!r.scrollBarWidth)return;const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";Cc(i,Rd.FIXED_CONTENT).forEach(p=>this.adjustAndStore(l,p,r.scrollBarWidth)),Cc(i,Rd.STICKY_CONTENT).forEach(p=>this.adjustAndStore(u,p,-r.scrollBarWidth)),Cc(i,Rd.NAVBAR_TOGGLER).forEach(p=>this.adjustAndStore(u,p,r.scrollBarWidth))}removeContainerStyle(r){super.removeContainerStyle(r);const i=this.getElement();QY(i,"modal-open");const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";Cc(i,Rd.FIXED_CONTENT).forEach(p=>this.restore(l,p)),Cc(i,Rd.STICKY_CONTENT).forEach(p=>this.restore(u,p)),Cc(i,Rd.NAVBAR_TOGGLER).forEach(p=>this.restore(u,p))}}let _y;function JY(t){return _y||(_y=new ZY(t)),_y}const XY=hf("modal-body"),eQ=D.createContext({onHide(){}}),U4=eQ,W4=D.forwardRef(({bsPrefix:t,className:r,contentClassName:i,centered:l,size:u,fullscreen:p,children:m,scrollable:w,...b},y)=>{t=vs(t,"modal");const C=`${t}-dialog`,_=typeof p=="string"?`${t}-fullscreen-${p}`:`${t}-fullscreen`;return d.jsx("div",{...b,ref:y,className:Pr(C,r,u&&`${t}-${u}`,l&&`${C}-centered`,w&&`${C}-scrollable`,p&&_),children:d.jsx("div",{className:Pr(`${t}-content`,i),children:m})})});W4.displayName="ModalDialog";const q4=W4,tQ=hf("modal-footer"),nQ=D.forwardRef(({closeLabel:t="Close",closeVariant:r,closeButton:i=!1,onHide:l,children:u,...p},m)=>{const w=D.useContext(U4),b=Jo(()=>{w==null||w.onHide(),l==null||l()});return d.jsxs("div",{ref:m,...p,children:[u,i&&d.jsx(oY,{"aria-label":t,variant:r,onClick:b})]})}),rQ=nQ,G4=D.forwardRef(({bsPrefix:t,className:r,closeLabel:i="Close",closeButton:l=!1,...u},p)=>(t=vs(t,"modal-header"),d.jsx(rQ,{ref:p,...u,className:Pr(r,t),closeLabel:i,closeButton:l})));G4.displayName="ModalHeader";const oQ=G4,iQ=iY("h4"),sQ=hf("modal-title",{Component:iQ});function aQ(t){return d.jsx(yk,{...t,timeout:null})}function lQ(t){return d.jsx(yk,{...t,timeout:null})}const K4=D.forwardRef(({bsPrefix:t,className:r,style:i,dialogClassName:l,contentClassName:u,children:p,dialogAs:m=q4,"aria-labelledby":w,"aria-describedby":b,"aria-label":y,show:C=!1,animation:_=!0,backdrop:x=!0,keyboard:j=!0,onEscapeKeyDown:M,onShow:R,onHide:P,container:B,autoFocus:I=!0,enforceFocus:O=!0,restoreFocus:H=!0,restoreFocusOptions:q,onEntered:K,onExit:G,onExiting:z,onEnter:te,onEntering:se,onExited:ge,backdropClassName:ce,manager:oe,...re},J)=>{const[ne,fe]=D.useState({}),[ee,ie]=D.useState(!1),Ce=D.useRef(!1),Me=D.useRef(!1),we=D.useRef(null),[le,ye]=UK(),qe=uf(J,ye),Ye=Jo(P),Be=_K();t=vs(t,"modal");const Mt=D.useMemo(()=>({onHide:Ye}),[Ye]);function pt(){return oe||JY({isRTL:Be})}function gt(at){if(!Uu)return;const $e=pt().getScrollbarWidth()>0,Lt=at.scrollHeight>vk(at).documentElement.clientHeight;fe({paddingRight:$e&&!Lt?lM():void 0,paddingLeft:!$e&&Lt?lM():void 0})}const At=Jo(()=>{le&&gt(le.dialog)});M4(()=>{NA(window,"resize",At),we.current==null||we.current()});const jt=()=>{Ce.current=!0},Le=at=>{Ce.current&&le&&at.target===le.dialog&&(Me.current=!0),Ce.current=!1},Ie=()=>{ie(!0),we.current=E4(le.dialog,()=>{ie(!1)})},ke=at=>{at.target===at.currentTarget&&Ie()},he=at=>{if(x==="static"){ke(at);return}if(Me.current||at.target!==at.currentTarget){Me.current=!1;return}P==null||P()},et=at=>{j?M==null||M(at):(at.preventDefault(),x==="static"&&Ie())},lt=(at,$e)=>{at&&gt(at),te==null||te(at,$e)},nn=at=>{we.current==null||we.current(),G==null||G(at)},Rn=(at,$e)=>{se==null||se(at,$e),S4(window,"resize",At)},Do=at=>{at&&(at.style.display=""),ge==null||ge(at),NA(window,"resize",At)},vt=D.useCallback(at=>d.jsx("div",{...at,className:Pr(`${t}-backdrop`,ce,!_&&"show")}),[_,ce,t]),rn={...i,...ne};rn.display="block";const io=at=>d.jsx("div",{role:"dialog",...at,style:rn,className:Pr(r,t,ee&&`${t}-static`,!_&&"show"),onClick:x?he:void 0,onMouseUp:Le,"aria-label":y,"aria-labelledby":w,"aria-describedby":b,children:d.jsx(m,{...re,onMouseDown:jt,className:l,contentClassName:u,children:p})});return d.jsx(U4.Provider,{value:Mt,children:d.jsx(GY,{show:C,ref:qe,backdrop:x,container:B,keyboard:!0,autoFocus:I,enforceFocus:O,restoreFocus:H,restoreFocusOptions:q,onEscapeKeyDown:et,onShow:R,onHide:P,onEnter:lt,onEntering:Rn,onEntered:K,onExit:nn,onExiting:z,onExited:Do,manager:pt(),transition:_?aQ:void 0,backdropTransition:_?lQ:void 0,renderBackdrop:vt,renderDialog:io})})});K4.displayName="Modal";const ru=Object.assign(K4,{Body:XY,Header:oQ,Title:sQ,Footer:tQ,Dialog:q4,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var hM={exports:{}},IA={exports:{}};(function(t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;function i(l){function u(m,w,b,y,C,_){var x=y||"<<anonymous>>",j=_||b;if(w[b]==null)return m?new Error("Required "+C+" `"+j+"` was not specified "+("in `"+x+"`.")):null;for(var M=arguments.length,R=Array(M>6?M-6:0),P=6;P<M;P++)R[P-6]=arguments[P];return l.apply(void 0,[w,b,x,C,j].concat(R))}var p=u.bind(null,!1);return p.isRequired=u.bind(null,!0),p}t.exports=r.default})(IA,IA.exports);var cQ=IA.exports;(function(t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=p;var i=cQ,l=u(i);function u(m){return m&&m.__esModule?m:{default:m}}function p(){for(var m=arguments.length,w=Array(m),b=0;b<m;b++)w[b]=arguments[b];function y(){for(var C=arguments.length,_=Array(C),x=0;x<C;x++)_[x]=arguments[x];var j=null;return w.forEach(function(M){if(j==null){var R=M.apply(void 0,_);R!=null&&(j=R)}}),j}return(0,l.default)(y)}t.exports=r.default})(hM,hM.exports);const Y4=hf("nav-item"),Q4=D.forwardRef(({bsPrefix:t,className:r,as:i=tY,active:l,eventKey:u,disabled:p=!1,...m},w)=>{t=vs(t,"nav-link");const[b,y]=F4({key:Zp(u,m.href),active:l,disabled:p,...m});return d.jsx(i,{...m,...b,ref:w,disabled:p,className:Pr(r,t,p&&"disabled",y.isActive&&"active")})});Q4.displayName="NavLink";const Z4=Q4,J4=D.forwardRef((t,r)=>{const{as:i="div",bsPrefix:l,variant:u,fill:p=!1,justify:m=!1,navbar:w,navbarScroll:b,className:y,activeKey:C,..._}=C4(t,{activeKey:"onSelect"}),x=vs(l,"nav");let j,M,R=!1;const P=D.useContext(DY),B=D.useContext(cY);return P?(j=P.bsPrefix,R=w??!0):B&&({cardHeaderBsPrefix:M}=B),d.jsx(OY,{as:i,ref:r,activeKey:C,className:Pr(y,{[x]:!R,[`${j}-nav`]:R,[`${j}-nav-scroll`]:R&&b,[`${M}-${u}`]:!!M,[`${x}-${u}`]:!!u,[`${x}-fill`]:p,[`${x}-justified`]:m}),..._})});J4.displayName="Nav";const dQ=Object.assign(J4,{Item:Y4,Link:Z4}),X4=D.forwardRef(({bsPrefix:t,className:r,as:i="div",...l},u)=>{const p=vs(t,"row"),m=A4(),w=_4(),b=`${p}-cols`,y=[];return m.forEach(C=>{const _=l[C];delete l[C];let x;_!=null&&typeof _=="object"?{cols:x}=_:x=_;const j=C!==w?`-${C}`:"";x!=null&&y.push(`${b}${j}-${x}`)}),d.jsx(i,{ref:u,...l,className:Pr(r,p,...y)})});X4.displayName="Row";const mu=X4,uQ=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],hQ=["activeKey","getControlledId","getControllerId"],pQ=["as"];function MA(t,r){if(t==null)return{};var i={},l=Object.keys(t),u,p;for(p=0;p<l.length;p++)u=l[p],!(r.indexOf(u)>=0)&&(i[u]=t[u]);return i}function eO(t){let{active:r,eventKey:i,mountOnEnter:l,transition:u,unmountOnExit:p,role:m="tabpanel",onEnter:w,onEntering:b,onEntered:y,onExit:C,onExiting:_,onExited:x}=t,j=MA(t,uQ);const M=D.useContext(Wu);if(!M)return[Object.assign({},j,{role:m}),{eventKey:i,isActive:r,mountOnEnter:l,transition:u,unmountOnExit:p,onEnter:w,onEntering:b,onEntered:y,onExit:C,onExiting:_,onExited:x}];const{activeKey:R,getControlledId:P,getControllerId:B}=M,I=MA(M,hQ),O=Zp(i);return[Object.assign({},j,{role:m,id:P(i),"aria-labelledby":B(i)}),{eventKey:i,isActive:r==null&&O!=null?Zp(R)===O:r,transition:u||I.transition,mountOnEnter:l??I.mountOnEnter,unmountOnExit:p??I.unmountOnExit,onEnter:w,onEntering:b,onEntered:y,onExit:C,onExiting:_,onExited:x}]}const tO=D.forwardRef((t,r)=>{let{as:i="div"}=t,l=MA(t,pQ);const[u,{isActive:p,onEnter:m,onEntering:w,onEntered:b,onExit:y,onExiting:C,onExited:_,mountOnEnter:x,unmountOnExit:j,transition:M=vx}]=eO(l);return d.jsx(Wu.Provider,{value:null,children:d.jsx(Du.Provider,{value:null,children:d.jsx(M,{in:p,onEnter:m,onEntering:w,onEntered:b,onExit:y,onExiting:C,onExited:_,mountOnEnter:x,unmountOnExit:j,children:d.jsx(i,Object.assign({},u,{ref:r,hidden:!p,"aria-hidden":!p}))})})})});tO.displayName="TabPanel";const nO=t=>{const{id:r,generateChildId:i,onSelect:l,activeKey:u,defaultActiveKey:p,transition:m,mountOnEnter:w,unmountOnExit:b,children:y}=t,[C,_]=fY(u,p,l),x=vY(r),j=D.useMemo(()=>i||((R,P)=>x?`${x}-${P}-${R}`:null),[x,i]),M=D.useMemo(()=>({onSelect:_,activeKey:C,transition:m,mountOnEnter:w||!1,unmountOnExit:b||!1,getControlledId:R=>j(R,"tabpane"),getControllerId:R=>j(R,"tab")}),[_,C,m,w,b,j]);return d.jsx(Wu.Provider,{value:M,children:d.jsx(Du.Provider,{value:_||null,children:y})})};nO.Panel=tO;const rO=nO;function yx(t){return typeof t=="boolean"?t?yk:vx:t}const oO=({transition:t,...r})=>d.jsx(rO,{...r,transition:yx(t)});oO.displayName="TabContainer";const fQ=oO,iO=hf("tab-content"),sO=D.forwardRef(({bsPrefix:t,transition:r,...i},l)=>{const[{className:u,as:p="div",...m},{isActive:w,onEnter:b,onEntering:y,onEntered:C,onExit:_,onExiting:x,onExited:j,mountOnEnter:M,unmountOnExit:R,transition:P=yk}]=eO({...i,transition:yx(r)}),B=vs(t,"tab-pane");return d.jsx(Wu.Provider,{value:null,children:d.jsx(Du.Provider,{value:null,children:d.jsx(P,{in:w,onEnter:b,onEntering:y,onEntered:C,onExit:_,onExiting:x,onExited:j,mountOnEnter:M,unmountOnExit:R,children:d.jsx(p,{...m,ref:l,className:Pr(u,B,w&&"active")})})})})});sO.displayName="TabPane";const aO=sO,mQ={eventKey:it.oneOfType([it.string,it.number]),title:it.node.isRequired,disabled:it.bool,tabClassName:it.string,tabAttrs:it.object},lO=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};lO.propTypes=mQ;const xy=Object.assign(lO,{Container:fQ,Content:iO,Pane:aO});function gQ(t){let r;return uY(t,i=>{r==null&&(r=i.props.eventKey)}),r}function bQ(t){const{title:r,eventKey:i,disabled:l,tabClassName:u,tabAttrs:p,id:m}=t.props;return r==null?null:d.jsx(Y4,{as:"li",role:"presentation",children:d.jsx(Z4,{as:"button",type:"button",eventKey:i,disabled:l,id:m,className:u,...p,children:r})})}const cO=t=>{const{id:r,onSelect:i,transition:l,mountOnEnter:u=!1,unmountOnExit:p=!1,variant:m="tabs",children:w,activeKey:b=gQ(w),...y}=C4(t,{activeKey:"onSelect"});return d.jsxs(rO,{id:r,activeKey:b,onSelect:i,transition:yx(l),mountOnEnter:u,unmountOnExit:p,children:[d.jsx(dQ,{...y,role:"tablist",as:"ul",variant:m,children:oM(w,bQ)}),d.jsx(iO,{children:oM(w,C=>{const _={...C.props};return delete _.title,delete _.disabled,delete _.tabClassName,delete _.tabAttrs,d.jsx(aO,{..._})})})]})};cO.displayName="Tabs";const wQ=cO;function kQ({item:t}){const{title:r,icon:i,hoverIcon:l,brief:u,bg:p}=t;return d.jsx("div",{className:"col-lg-6 col-md-12",children:d.jsxs("div",{className:`services-item ${p&&p}`,children:[d.jsx("div",{className:"services-icon",children:d.jsxs("div",{className:"image-part",children:[d.jsx("img",{className:"main-img",src:Cn(`/${i}`),alt:""}),d.jsx("img",{className:"hover-img",src:Cn(`/${l}`),alt:""})]})}),d.jsxs("div",{className:"services-content",children:[d.jsx("div",{className:"services-text",children:d.jsx("h3",{className:"title",style:{float:"none",textTransform:"capitalize"},children:d.jsx(je,{to:"#",children:r})})}),d.jsx("div",{className:"services-desc",children:d.jsx("p",{children:u})})]})]})})}function vQ(t){const{isLoading:r,aboutSetting:i}=He(y=>y.generalSettings),{title:l,brief:u,clients:p,project:m,attributes:w}=i,b=nt();return D.useEffect(()=>{b(wp())},[b]),d.jsx("div",{id:"rs-about",className:"rs-about",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"row align-items-center",children:[d.jsxs("div",{className:"col-lg-5",children:[d.jsxs("div",{className:"sec-title mb-50",children:[d.jsx("div",{className:"sub-text style4-bg",children:"About Us"}),d.jsx("h2",{className:"title pb-20",children:l||""}),d.jsx("div",{className:"desc",children:u||""})]}),d.jsx("div",{className:"rs-counter style3",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"counter-top-area",children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30",children:d.jsx("div",{className:"counter-list",children:d.jsxs("div",{className:"counter-text",children:[d.jsx("div",{className:"count-number",children:d.jsx("span",{className:"rs-count plus orange-color",children:p||""})}),d.jsx("h3",{className:"title",children:"Happy Clients"})]})})}),d.jsx("div",{className:"col-sm-6 sm-pr-0 sm-pl-0",children:d.jsx("div",{className:"counter-list",children:d.jsxs("div",{className:"counter-text",children:[d.jsx("div",{className:"count-number",children:d.jsx("span",{className:"rs-count plus",children:m||""})}),d.jsx("h3",{className:"title",children:"Project Delivered"})]})})})]})})})})]}),d.jsx("div",{className:"col-lg-7",children:d.jsx("div",{className:"rs-services style3 md-pt-50",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-12 col-md-6 pr-10 pt-40 sm-pt-0 sm-pr-0 sm-pl-0",children:d.jsx(mu,{children:w&&w.map((y,C)=>d.jsx(kQ,{item:y,index:C},Co()))})})})})})})]})})})}const{apiAccess:pf}=new Kn,ff={isLoading:!0,industries:[],lastPage:0,currentPage:1,perPage:0,total:0,apiUrl:"industries",errorMess:null,metaInfo:[]},Cp=ve("industry/fetchAllIndustries",async(t,{rejectWithValue:r})=>{try{return(await pf.get(`${ff.apiUrl}/${t}`)).data}catch(i){return r(i.response.data)}}),Sy=ve("industry/fetchIndustriesDataBySlug",async(t,{rejectWithValue:r})=>{try{return(await pf.get(`${ff.apiUrl}/${slug}/show`)).data}catch(i){return r(i.response.data)}}),Eg=ve("industry/createIndustriesData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}};return(await pf.post("industries-store",t,i)).data}catch(i){return r(i.response.data)}}),jg=ve("industry/updateIndustriesData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}},{slug:l,dataset:u}=t;return(await pf.post(`${ff.apiUrl}/${l}/update`,u,i)).data}catch(i){return r(i.response.data)}}),Dg=ve("industry/deleteIndustriesData",async(t,{rejectWithValue:r})=>{try{const{slug:i}=t;return console.log(t),(await pf.delete(`${ff.apiUrl}/${i}/destroy`)).data}catch(i){return r(i.response.data)}}),yQ=_n({name:"industry",initialState:ff,extraReducers:{[Cp.pending]:t=>{t.isLoading=!0},[Cp.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.industries=r},[Cp.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[Sy.pending]:t=>{t.isLoading=!0},[Sy.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.metaInfo=r},[Sy.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r},[Eg.pending]:t=>{t.isLoading=!0},[Eg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.industries=[...t.industries,r],t.errorMess=null,We("Data Created Successfully")},[Eg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[jg.pending]:t=>{t.isLoading=!0},[jg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1;const{name:i,order_by:l,image_link:u,slug:p,id:m}=r,w=t.industries.filter(b=>b.slug===p);w&&(w[0].name=i,w[0].slug=p,w[0].order_by=l,w[0].image_link=u),t.errorMess=null,We("Data Updated Successfully")},[jg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[Dg.pending]:t=>{t.isLoading=!0},[Dg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1;const{slug:i}=r;t.industries=t.industries.filter(l=>l.slug!==i),t.errorMess=null,We("Data Deleted Successfully")},[Dg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)}}}),CQ=yQ.reducer;function AQ({info:t}){const{name:r,image_link:i}=t;return d.jsx("div",{className:"services-item",children:d.jsxs("div",{className:"services-wrap",children:[d.jsx("div",{className:"services-icon",children:d.jsx("img",{src:Cn(i),alt:""})}),d.jsx("div",{className:"services-text",children:d.jsx("h4",{className:"title",style:{float:"none"},children:r})})]})})}function _Q(t){const{industry:r}=He(b=>b.generalSettings),{isLoading:i,industries:l}=He(b=>b.industriesReducer),{title:u,sub_text:p,limit:m}=r,w=nt();return D.useEffect(()=>{Object.keys(r).length&&w(Cp(m))},[r,m]),D.useEffect(()=>{w(vp())},[w]),d.jsx("div",{className:"rs-industry pt-120 pb-120 md-pt-80 md-pb-80",children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"sec-title2 text-center mb-45",children:[d.jsx("span",{className:"sub-text gold-color",children:p}),d.jsx("h2",{className:"title",style:{float:"none"},children:u})]}),d.jsxs("div",{className:"all-services",style:{width:"100%"},children:[i&&"",l&&l.map(b=>d.jsx(AQ,{info:b},Co()))]})]})})}const{apiAccess:qu}=new Kn,Gu={isLoading:!0,technologies:[],lastPage:0,currentPage:1,perPage:0,total:0,apiUrl:"technology",errorMess:null,metaInfo:[]},Ap=ve("technology/fetchAllTechnology",async(t,{rejectWithValue:r})=>{try{return(await qu.get(`${Gu.apiUrl}/${t}`)).data}catch(i){return r(i.response.data)}}),Ey=ve("technology/fetchDataByPage",async(t,{rejectWithValue:r})=>{try{const{page:i}=t;return(await qu.get(`${Gu.apiUrl}?page=${i}`)).data}catch(i){return r(i.response.data)}}),jy=ve("technology/fetchDataBySlug",async(t,{rejectWithValue:r})=>{try{return(await qu.get(`${Gu.apiUrl}/${t}/show`)).data}catch(i){return r(i.response.data)}}),Tg=ve("technology/createData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}};return(await qu.post("technology-store",t,i)).data}catch(i){return r(i.response.data)}}),Ng=ve("technology/updateData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}},{slug:l,dataset:u}=t;return(await qu.post(`${Gu.apiUrl}/${l}/update`,u,i)).data}catch(i){return r(i.response.data)}}),Ig=ve("technology/deleteData",async(t,{rejectWithValue:r})=>{try{const{slug:i}=t;return(await qu.delete(`${Gu.apiUrl}/${i}/destroy`)).data}catch(i){return r(i.response.data)}}),xQ=_n({name:"technology",initialState:Gu,extraReducers:{[Ap.pending]:t=>{t.isLoading=!0},[Ap.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.technologies=r},[Ap.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r},[Ey.pending]:t=>{t.isLoading=!0},[Ey.fulfilled]:(t,r)=>{t.isLoading=!1,t.technologies=r.payload},[Ey.rejected]:(t,r)=>{t.isLoading=!1,t.technologies=[],t.errorMess=r.payload},[jy.pending]:t=>{t.isLoading=!0},[jy.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.metaInfo=r},[jy.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r},[Tg.pending]:t=>{t.isLoading=!0},[Tg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.technologies=[...t.technologies,r],t.errorMess=null,We("Data Created Successfully")},[Tg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[Ng.pending]:t=>{t.isLoading=!0},[Ng.fulfilled]:(t,{payload:r})=>{t.isLoading=!1;const{name:i,order_by:l,image_link:u,slug:p,id:m}=r,w=t.technologies.filter(b=>b.slug===p);w&&(w[0].name=i,w[0].slug=p,w[0].order_by=l,w[0].image_link=u),t.errorMess=null,We("Data Updated Successfully")},[Ng.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[Ig.pending]:t=>{t.isLoading=!0},[Ig.fulfilled]:(t,{payload:r})=>{t.isLoading=!1;const{slug:i}=r;t.technologies=t.technologies.filter(l=>l.slug!==i),t.errorMess=null,We("Data Deleted Successfully")},[Ig.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)}}}),SQ=xQ.reducer;function EQ({info:t}){const{name:r,image_link:i}=t;return d.jsx("div",{className:"col-lg-2 col-md-4 col-sm-4 col-6",children:d.jsx("div",{className:"technology-item",children:d.jsx(je,{to:"#",children:d.jsx("div",{className:"logo-img",children:d.jsx("img",{src:Cn(i),alt:""})})})})})}function jQ(t){const{technology:r}=He(b=>b.generalSettings),{isLoading:i,technologies:l}=He(b=>b.technologyReducer),{title:u,sub_text:p,limit:m}=r,w=nt();return D.useEffect(()=>{Object.keys(r).length&&w(Ap(m))},[r,m]),D.useEffect(()=>{w(kp())},[w]),d.jsx("div",{className:"rs-technology gray-color pt-120 pb-120 md-pt-80 md-pb-80",children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"sec-title2 text-center mb-45",children:[d.jsx("span",{className:"sub-text gold-color",children:p}),d.jsx("h2",{className:"title title2",style:{float:"none"},children:u})]}),d.jsxs("div",{className:"row",children:[i&&"",l&&l.map(b=>d.jsx(EQ,{info:b},Co()))]})]})})}const DQ="_partner_1qe48_1",TQ={partner:DQ};var Cx={},Ax={},vn={},Ak={};(function(t){function r(m,w,b){var y=w.slidesToShow,C=w.currentSlide;return b.length>2*y?m+2*y:C>=b.length?b.length+m:m}function i(m,w){if(w.length>2*m){for(var b={},y=w.length-2*m,C=w.length-y,_=y,x=0;x<C;x++)b[x]=_,_++;var j=w.length+C,M=j+w.slice(0,2*m).length,R=0;for(x=j;x<=M;x++)b[x]=R,R++;var P=j,B=0;for(x=C;x<P;x++)b[x]=B,B++;return b}b={};var I=3*w.length,O=0;for(x=0;x<I;x++)b[x]=O,++O===w.length&&(O=0);return b}function l(m,w){return w.length<m?w:w.length>2*m?w.slice(w.length-2*m,w.length).concat(w,w.slice(0,2*m)):w.concat(w,w)}function u(m,w){return w.length>2*m?2*m:w.length}function p(m,w,b){var y,C=m.currentSlide,_=m.slidesToShow,x=m.itemWidth,j=m.totalItems,M=0,R=0,P=C===0,B=w.length-(w.length-2*_);return w.length<_?(R=M=0,P=y=!1):w.length>2*_?((y=C>=B+w.length)&&(R=-x*(M=C-w.length)),P&&(R=-x*(M=B+(w.length-2*_)))):((y=C>=2*w.length)&&(R=-x*(M=C-w.length)),P&&(R=b.showDots?-x*(M=w.length):-x*(M=j/3))),{isReachingTheEnd:y,isReachingTheStart:P,nextSlide:M,nextPosition:R}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=r,t.getOriginalIndexLookupTableByClones=i,t.getClones=l,t.getInitialSlideInInfiniteMode=u,t.checkClonesPosition=p})(Ak);var gu={};Object.defineProperty(gu,"__esModule",{value:!0});function NQ(t,r,i,l){var u=0,p=l||i;return r&&p&&(u=t[p].partialVisibilityGutter||t[p].paritialVisibilityGutter),u}function IQ(t,r){var i;return r[t]&&(i=(100/r[t].items).toFixed(1)),i}function MQ(t,r,i){return Math.round(i/(r+(t.centerMode?1:0)))}gu.getPartialVisibilityGutter=NQ,gu.getWidthFromDeviceType=IQ,gu.getItemClientSideWidth=MQ;var ur={};Object.defineProperty(ur,"__esModule",{value:!0});var PA=gu;function _x(t){var r=t.slidesToShow;return t.totalItems<r}function PQ(t,r){var i,l=t.domLoaded,u=t.slidesToShow,p=t.containerWidth,m=t.itemWidth,w=r.deviceType,b=r.responsive,y=r.ssr,C=r.partialVisbile,_=r.partialVisible,x=!!(l&&u&&p&&m);y&&w&&!x&&(i=PA.getWidthFromDeviceType(w,b));var j=!!(y&&w&&!x&&i);return{shouldRenderOnSSR:j,flexBisis:i,domFullyLoaded:x,partialVisibilityGutter:PA.getPartialVisibilityGutter(b,C||_,w,t.deviceType),shouldRenderAtAll:j||x}}function LQ(t,r){var i=r.currentSlide,l=r.slidesToShow;return i<=t&&t<i+l}function dO(t,r,i){var l=i||t.transform;return!r.infinite&&t.currentSlide===0||_x(t)?l:l+t.itemWidth/2}function OQ(t){return!(0<t.currentSlide)}function uO(t){var r=t.currentSlide,i=t.totalItems;return!(r+t.slidesToShow<i)}function hO(t,r,i,l){r===void 0&&(r=0);var u=t.currentSlide,p=t.slidesToShow,m=uO(t),w=!i.infinite&&m,b=l||t.transform;if(_x(t))return b;var y=b+u*r;return w?y+(t.containerWidth-(t.itemWidth-r)*p):y}function pO(t,r){return t.rtl?-1*r:r}function BQ(t,r,i){var l=r.partialVisbile,u=r.partialVisible,p=r.responsive,m=r.deviceType,w=r.centerMode,b=i||t.transform,y=PA.getPartialVisibilityGutter(p,l||u,m,t.deviceType);return pO(r,u||l?hO(t,y,r,i):w?dO(t,r,i):b)}function RQ(t,r){var i=t.domLoaded,l=t.slidesToShow,u=t.containerWidth,p=t.itemWidth,m=r.deviceType,w=r.responsive,b=r.slidesToSlide||1,y=!!(i&&l&&u&&p);return r.ssr&&r.deviceType&&!y&&Object.keys(w).forEach(function(C){var _=w[C].slidesToSlide;m===C&&_&&(b=_)}),y&&Object.keys(w).forEach(function(C){var _=w[C],x=_.breakpoint,j=_.slidesToSlide,M=x.max,R=x.min;j&&window.innerWidth>=R&&window.innerWidth<=M&&(b=j)}),b}ur.notEnoughChildren=_x,ur.getInitialState=PQ,ur.getIfSlideIsVisbile=LQ,ur.getTransformForCenterMode=dO,ur.isInLeftEnd=OQ,ur.isInRightEnd=uO,ur.getTransformForPartialVsibile=hO,ur.parsePosition=pO,ur.getTransform=BQ,ur.getSlidesToSlide=RQ;var xx={};Object.defineProperty(xx,"__esModule",{value:!0});var zQ=function(t,r,i){var l;return function(){var u=arguments;l||(t.apply(this,u),l=!0,typeof i=="function"&&i(!0),setTimeout(function(){l=!1,typeof i=="function"&&i(!1)},r))}};xx.default=zQ;var fO={};(function(t){function r(i,l){var u=l.partialVisbile,p=l.partialVisible,m=l.centerMode,w=l.ssr,b=l.responsive;if((u||p)&&m)throw new Error("center mode can not be used at the same time with partialVisible");if(!b)throw w?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(b&&typeof b!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r})(fO);var Sx={};Object.defineProperty(Sx,"__esModule",{value:!0});var FQ=ur;function $Q(t,r,i){i===void 0&&(i=0);var l,u,p=t.slidesToShow,m=t.currentSlide,w=t.itemWidth,b=t.totalItems,y=FQ.getSlidesToSlide(t,r),C=m+1+i+p+(0<i?0:y);return u=C<=b?-w*(l=m+i+(0<i?0:y)):b<C&&m!==b-p?-w*(l=b-p):l=void 0,{nextSlides:l,nextPosition:u}}Sx.populateNextSlides=$Q;var Ex={};Object.defineProperty(Ex,"__esModule",{value:!0});var HQ=D,VQ=ur,UQ=ur;function WQ(t,r,i){i===void 0&&(i=0);var l,u,p=t.currentSlide,m=t.itemWidth,w=t.slidesToShow,b=r.children,y=r.showDots,C=r.infinite,_=VQ.getSlidesToSlide(t,r),x=p-i-(0<i?0:_),j=(HQ.Children.toArray(b).length-w)%_;return u=0<=x?(l=x,y&&!C&&0<j&&UQ.isInRightEnd(t)&&(l=p-j),-m*l):l=x<0&&p!==0?0:void 0,{nextSlides:l,nextPosition:u}}Ex.populatePreviousSlides=WQ;var mO={};(function(t){function r(i,l,u,p,m,w){var b,y,C=i.itemWidth,_=i.slidesToShow,x=i.totalItems,j=i.currentSlide,M=l.infinite,R=!1,P=Math.round((u-p)/C),B=Math.round((p-u)/C),I=u<m;if(m<u&&P<=_){b="right";var O=Math.abs(-C*(x-_)),H=w-(p-m),q=j===x-_;(Math.abs(H)<=O||q&&M)&&(y=H,R=!0)}return I&&B<=_&&(b="left",((H=w+(m-p))<=0||j===0&&M)&&(R=!0,y=H)),{direction:b,nextPosition:y,canContinue:R}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=r})(mO);Object.defineProperty(vn,"__esModule",{value:!0});var Zm=Ak;vn.getOriginalCounterPart=Zm.getOriginalCounterPart,vn.getClones=Zm.getClones,vn.checkClonesPosition=Zm.checkClonesPosition,vn.getInitialSlideInInfiniteMode=Zm.getInitialSlideInInfiniteMode;var Dy=gu;vn.getWidthFromDeviceType=Dy.getWidthFromDeviceType,vn.getPartialVisibilityGutter=Dy.getPartialVisibilityGutter,vn.getItemClientSideWidth=Dy.getItemClientSideWidth;var za=ur;vn.getInitialState=za.getInitialState,vn.getIfSlideIsVisbile=za.getIfSlideIsVisbile,vn.getTransformForCenterMode=za.getTransformForCenterMode,vn.getTransformForPartialVsibile=za.getTransformForPartialVsibile,vn.isInLeftEnd=za.isInLeftEnd,vn.isInRightEnd=za.isInRightEnd,vn.notEnoughChildren=za.notEnoughChildren,vn.getSlidesToSlide=za.getSlidesToSlide;var qQ=xx;vn.throttle=qQ.default;var GQ=fO;vn.throwError=GQ.default;var KQ=Sx;vn.populateNextSlides=KQ.populateNextSlides;var YQ=Ex;vn.populatePreviousSlides=YQ.populatePreviousSlides;var QQ=mO;vn.populateSlidesOnMouseTouchMove=QQ.populateSlidesOnMouseTouchMove;var _k={},ZQ=tt&&tt.__extends||function(){var t=function(r,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var p in u)u.hasOwnProperty(p)&&(l[p]=u[p])})(r,i)};return function(r,i){function l(){this.constructor=r}t(r,i),r.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}();Object.defineProperty(_k,"__esModule",{value:!0});var JQ=D;function XQ(t){return"clientY"in t}_k.isMouseMoveEvent=XQ;var eZ=function(t){function r(){return t!==null&&t.apply(this,arguments)||this}return ZQ(r,t),r}(JQ.Component);_k.default=eZ;var jx={},Dx={};Object.defineProperty(Dx,"__esModule",{value:!0});var tZ=Ak,nZ=ur;function rZ(t,r,i,l){var u={},p=nZ.getSlidesToSlide(r,i);return Array(t).fill(0).forEach(function(m,w){var b=tZ.getOriginalCounterPart(w,r,l);if(w===0)u[0]=b;else{var y=u[w-1]+p;u[w]=y}}),u}Dx.getLookupTableForNextSlides=rZ;Object.defineProperty(jx,"__esModule",{value:!0});var qh=D,oZ=Ak,iZ=Dx,pM=ur,sZ=function(t){var r=t.props,i=t.state,l=t.goToSlide,u=t.getState,p=r.showDots,m=r.customDot,w=r.dotListClass,b=r.infinite,y=r.children;if(!p||pM.notEnoughChildren(i))return null;var C,_=i.currentSlide,x=i.slidesToShow,j=pM.getSlidesToSlide(i,r),M=qh.Children.toArray(y);C=b?Math.ceil(M.length/j):Math.ceil((M.length-x)/j)+1;var R=iZ.getLookupTableForNextSlides(C,i,r,M),P=oZ.getOriginalIndexLookupTableByClones(x,M),B=P[_];return qh.createElement("ul",{className:"react-multi-carousel-dot-list "+w},Array(C).fill(0).map(function(I,O){var H,q;if(b){q=R[O];var K=P[q];H=B===K||K<=B&&B<K+j}else{var G=M.length-x,z=O*j;H=(q=G<z?G:z)===_||q<_&&_<q+j&&_<M.length-x}return m?qh.cloneElement(m,{index:O,active:H,key:O,onClick:function(){return l(q)},carouselState:u()}):qh.createElement("li",{"data-index":O,key:O,className:"react-multi-carousel-dot "+(H?"react-multi-carousel-dot--active":"")},qh.createElement("button",{"aria-label":"Go to slide "+(O+1),onClick:function(){return l(q)}}))}))};jx.default=sZ;var xk={};Object.defineProperty(xk,"__esModule",{value:!0});var bw=D,aZ=function(t){var r=t.customLeftArrow,i=t.getState,l=t.previous,u=t.disabled,p=t.rtl;if(r)return bw.cloneElement(r,{onClick:function(){return l()},carouselState:i(),disabled:u,rtl:p});var m=p?"rtl":"";return bw.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+m,onClick:function(){return l()},type:"button",disabled:u})};xk.LeftArrow=aZ;var lZ=function(t){var r=t.customRightArrow,i=t.getState,l=t.next,u=t.disabled,p=t.rtl;if(r)return bw.cloneElement(r,{onClick:function(){return l()},carouselState:i(),disabled:u,rtl:p});var m=p?"rtl":"";return bw.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+m,onClick:function(){return l()},type:"button",disabled:u})};xk.RightArrow=lZ;var Tx={};Object.defineProperty(Tx,"__esModule",{value:!0});var Jm=D,Ty=vn,cZ=function(t){var r=t.props,i=t.state,l=t.goToSlide,u=t.clones,p=t.notEnoughChildren,m=i.itemWidth,w=r.children,b=r.infinite,y=r.itemClass,C=r.itemAriaLabel,_=r.partialVisbile,x=r.partialVisible,j=Ty.getInitialState(i,r),M=j.flexBisis,R=j.shouldRenderOnSSR,P=j.domFullyLoaded,B=j.partialVisibilityGutter;return j.shouldRenderAtAll?(_&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),Jm.createElement(Jm.Fragment,null,(b?u:Jm.Children.toArray(w)).map(function(I,O){return Jm.createElement("li",{key:O,"data-index":O,onClick:function(){r.focusOnSelect&&l(O)},"aria-hidden":Ty.getIfSlideIsVisbile(O,i)?"false":"true","aria-label":C||(I.props.ariaLabel?I.props.ariaLabel:null),style:{flex:R?"1 0 "+M+"%":"auto",position:"relative",width:P?((_||x)&&B&&!p?m-B:m)+"px":"auto"},className:"react-multi-carousel-item "+(Ty.getIfSlideIsVisbile(O,i)?"react-multi-carousel-item--active":"")+" "+y},I)}))):null};Tx.default=cZ;var dZ=tt&&tt.__extends||function(){var t=function(r,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var p in u)u.hasOwnProperty(p)&&(l[p]=u[p])})(r,i)};return function(r,i){function l(){this.constructor=r}t(r,i),r.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}();Object.defineProperty(Ax,"__esModule",{value:!0});var vr=D,Ln=vn,fc=_k,uZ=jx,fM=xk,hZ=Tx,Xm=ur,cs=400,mM="transform 400ms ease-in-out",pZ=function(t){function r(i){var l=t.call(this,i)||this;return l.containerRef=vr.createRef(),l.listRef=vr.createRef(),l.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:vr.Children.count(i.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},l.onResize=l.onResize.bind(l),l.handleDown=l.handleDown.bind(l),l.handleMove=l.handleMove.bind(l),l.handleOut=l.handleOut.bind(l),l.onKeyUp=l.onKeyUp.bind(l),l.handleEnter=l.handleEnter.bind(l),l.setIsInThrottle=l.setIsInThrottle.bind(l),l.next=Ln.throttle(l.next.bind(l),i.transitionDuration||cs,l.setIsInThrottle),l.previous=Ln.throttle(l.previous.bind(l),i.transitionDuration||cs,l.setIsInThrottle),l.goToSlide=Ln.throttle(l.goToSlide.bind(l),i.transitionDuration||cs,l.setIsInThrottle),l.onMove=!1,l.initialX=0,l.lastX=0,l.isAnimationAllowed=!1,l.direction="",l.initialY=0,l.isInThrottle=!1,l.transformPlaceHolder=0,l}return dZ(r,t),r.prototype.resetTotalItems=function(){var i=this,l=vr.Children.count(this.props.children),u=Ln.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,l));this.setState({totalItems:l,currentSlide:u},function(){i.setContainerAndItemWidth(i.state.slidesToShow,!0)})},r.prototype.setIsInThrottle=function(i){i===void 0&&(i=!1),this.isInThrottle=i},r.prototype.setTransformDirectly=function(i,l){var u=this.props.additionalTransfrom;this.transformPlaceHolder=i;var p=Xm.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(l),this.listRef.current.style.transform="translate3d("+(p+u)+"px,0,0)")},r.prototype.setAnimationDirectly=function(i){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=i?this.props.customTransition||mM:"none")},r.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},r.prototype.setClones=function(i,l,u,p){var m=this;p===void 0&&(p=!1),this.isAnimationAllowed=!1;var w=vr.Children.toArray(this.props.children),b=Ln.getInitialSlideInInfiniteMode(i||this.state.slidesToShow,w),y=Ln.getClones(this.state.slidesToShow,w),C=w.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:y.length,currentSlide:u&&!p?C:b},function(){m.correctItemsPosition(l||m.state.itemWidth)})},r.prototype.setItemsToShow=function(i,l){var u=this,p=this.props.responsive;Object.keys(p).forEach(function(m){var w=p[m],b=w.breakpoint,y=w.items,C=b.max,_=b.min,x=[window.innerWidth];window.screen&&window.screen.width&&x.push(window.screen.width);var j=Math.min.apply(Math,x);_<=j&&j<=C&&(u.setState({slidesToShow:y,deviceType:m}),u.setContainerAndItemWidth(y,i,l))})},r.prototype.setContainerAndItemWidth=function(i,l,u){var p=this;if(this.containerRef&&this.containerRef.current){var m=this.containerRef.current.offsetWidth,w=Ln.getItemClientSideWidth(this.props,i,m);this.setState({containerWidth:m,itemWidth:w},function(){p.props.infinite&&p.setClones(i,w,l,u)}),l&&this.correctItemsPosition(w)}},r.prototype.correctItemsPosition=function(i,l,u){l&&(this.isAnimationAllowed=!0),!l&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var p=this.state.totalItems<this.state.slidesToShow?0:-i*this.state.currentSlide;u&&this.setTransformDirectly(p,!0),this.setState({transform:p})},r.prototype.onResize=function(i){var l;l=!!this.props.infinite&&(typeof i!="boolean"||!i),this.setItemsToShow(l)},r.prototype.componentDidUpdate=function(i,l){var u=this,p=i.keyBoardControl,m=i.autoPlay,w=i.children,b=l.containerWidth,y=l.domLoaded,C=l.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==b&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){u.setItemsToShow(!0)},this.props.transitionDuration||cs)),p&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!p&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),m&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),m||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),w.length!==this.props.children.length?r.clonesTimeout=setTimeout(function(){u.props.infinite?u.setClones(u.state.slidesToShow,u.state.itemWidth,!0,!0):u.resetTotalItems()},this.props.transitionDuration||cs):this.props.infinite&&this.state.currentSlide!==C&&this.correctClonesPosition({domLoaded:y}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ln.isInRightEnd(this.state)){var _=this.props.transitionDuration||cs;r.isInThrottleTimeout=setTimeout(function(){u.setIsInThrottle(!1),u.resetAutoplayInterval(),u.goToSlide(0,void 0,!!u.props.rewindWithAnimation)},_+this.props.autoPlaySpeed)}},r.prototype.correctClonesPosition=function(i){var l=this,u=i.domLoaded,p=vr.Children.toArray(this.props.children),m=Ln.checkClonesPosition(this.state,p,this.props),w=m.isReachingTheEnd,b=m.isReachingTheStart,y=m.nextSlide,C=m.nextPosition;this.state.domLoaded&&u&&(w||b)&&(this.isAnimationAllowed=!1,r.transformTimeout=setTimeout(function(){l.setState({transform:C,currentSlide:y})},this.props.transitionDuration||cs))},r.prototype.next=function(i){var l=this;i===void 0&&(i=0);var u=this.props,p=u.afterChange,m=u.beforeChange;if(!Ln.notEnoughChildren(this.state)){var w=Ln.populateNextSlides(this.state,this.props,i),b=w.nextSlides,y=w.nextPosition,C=this.state.currentSlide;b!==void 0&&y!==void 0&&(typeof m=="function"&&m(b,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:y,currentSlide:b},function(){typeof p=="function"&&(r.afterChangeTimeout=setTimeout(function(){p(C,l.getState())},l.props.transitionDuration||cs))}))}},r.prototype.previous=function(i){var l=this;i===void 0&&(i=0);var u=this.props,p=u.afterChange,m=u.beforeChange;if(!Ln.notEnoughChildren(this.state)){var w=Ln.populatePreviousSlides(this.state,this.props,i),b=w.nextSlides,y=w.nextPosition;if(b!==void 0&&y!==void 0){var C=this.state.currentSlide;typeof m=="function"&&m(b,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:y,currentSlide:b},function(){typeof p=="function"&&(r.afterChangeTimeout2=setTimeout(function(){p(C,l.getState())},l.props.transitionDuration||cs))})}}},r.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},r.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),r.clonesTimeout&&clearTimeout(r.clonesTimeout),r.isInThrottleTimeout&&clearTimeout(r.isInThrottleTimeout),r.transformTimeout&&clearTimeout(r.transformTimeout),r.afterChangeTimeout&&clearTimeout(r.afterChangeTimeout),r.afterChangeTimeout2&&clearTimeout(r.afterChangeTimeout2),r.afterChangeTimeout3&&clearTimeout(r.afterChangeTimeout3)},r.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},r.prototype.getCords=function(i){var l=i.clientX,u=i.clientY;return{clientX:Xm.parsePosition(this.props,l),clientY:Xm.parsePosition(this.props,u)}},r.prototype.handleDown=function(i){if(!(!fc.isMouseMoveEvent(i)&&!this.props.swipeable||fc.isMouseMoveEvent(i)&&!this.props.draggable||this.isInThrottle)){var l=this.getCords(fc.isMouseMoveEvent(i)?i:i.touches[0]),u=l.clientX,p=l.clientY;this.onMove=!0,this.initialX=u,this.initialY=p,this.lastX=u,this.isAnimationAllowed=!1}},r.prototype.handleMove=function(i){if(!(!fc.isMouseMoveEvent(i)&&!this.props.swipeable||fc.isMouseMoveEvent(i)&&!this.props.draggable||Ln.notEnoughChildren(this.state))){var l=this.getCords(fc.isMouseMoveEvent(i)?i:i.touches[0]),u=l.clientX,p=l.clientY,m=this.initialX-u,w=this.initialY-p;if(this.onMove){if(!(Math.abs(m)>Math.abs(w)))return;var b=Ln.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,u,this.transformPlaceHolder),y=b.direction,C=b.nextPosition,_=b.canContinue;y&&(this.direction=y,_&&C!==void 0&&this.setTransformDirectly(C)),this.lastX=u}}},r.prototype.handleOut=function(i){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var l=i.type==="touchend"&&!this.props.swipeable,u=(i.type==="mouseleave"||i.type==="mouseup")&&!this.props.draggable;if(!l&&!u&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var p=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(p)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(p=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(p)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},r.prototype.isInViewport=function(i){var l=i.getBoundingClientRect(),u=l.top,p=u===void 0?0:u,m=l.left,w=m===void 0?0:m,b=l.bottom,y=b===void 0?0:b,C=l.right,_=C===void 0?0:C;return 0<=p&&0<=w&&y<=(window.innerHeight||document.documentElement.clientHeight)&&_<=(window.innerWidth||document.documentElement.clientWidth)},r.prototype.isChildOfCarousel=function(i){return!!(i instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(i)},r.prototype.onKeyUp=function(i){var l=i.target;switch(i.keyCode){case 37:if(this.isChildOfCarousel(l))return this.previous();break;case 39:if(this.isChildOfCarousel(l))return this.next();break;case 9:if(this.isChildOfCarousel(l)&&l instanceof HTMLInputElement&&this.isInViewport(l))return this.next()}},r.prototype.handleEnter=function(i){fc.isMouseMoveEvent(i)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},r.prototype.goToSlide=function(i,l,u){var p=this;if(u===void 0&&(u=!0),!this.isInThrottle){var m=this.state.itemWidth,w=this.props,b=w.afterChange,y=w.beforeChange,C=this.state.currentSlide;typeof y!="function"||l&&(typeof l!="object"||l.skipBeforeChange)||y(i,this.getState()),this.isAnimationAllowed=u,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:i,transform:-m*i},function(){p.props.infinite&&p.correctClonesPosition({domLoaded:!0}),typeof b!="function"||l&&(typeof l!="object"||l.skipAfterChange)||(r.afterChangeTimeout3=setTimeout(function(){b(C,p.getState())},p.props.transitionDuration||cs))})}},r.prototype.getState=function(){return this.state},r.prototype.renderLeftArrow=function(i){var l=this,u=this.props,p=u.customLeftArrow,m=u.rtl;return vr.createElement(fM.LeftArrow,{customLeftArrow:p,getState:function(){return l.getState()},previous:this.previous,disabled:i,rtl:m})},r.prototype.renderRightArrow=function(i){var l=this,u=this.props,p=u.customRightArrow,m=u.rtl;return vr.createElement(fM.RightArrow,{customRightArrow:p,getState:function(){return l.getState()},next:this.next,disabled:i,rtl:m})},r.prototype.renderButtonGroups=function(){var i=this,l=this.props.customButtonGroup;return l?vr.cloneElement(l,{previous:function(){return i.previous()},next:function(){return i.next()},goToSlide:function(u,p){return i.goToSlide(u,p)},carouselState:this.getState()}):null},r.prototype.renderDotsList=function(){var i=this;return vr.createElement(uZ.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return i.getState()}})},r.prototype.renderCarouselItems=function(){var i=[];if(this.props.infinite){var l=vr.Children.toArray(this.props.children);i=Ln.getClones(this.state.slidesToShow,l)}return vr.createElement(hZ.default,{clones:i,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ln.notEnoughChildren(this.state),props:this.props})},r.prototype.render=function(){var i=this.props,l=i.deviceType,u=i.arrows,p=i.renderArrowsWhenDisabled,m=i.removeArrowOnDeviceType,w=i.infinite,b=i.containerClass,y=i.sliderClass,C=i.customTransition,_=i.additionalTransfrom,x=i.renderDotsOutside,j=i.renderButtonGroupOutside,M=i.className,R=i.rtl,P=Ln.getInitialState(this.state,this.props),B=P.shouldRenderOnSSR,I=P.shouldRenderAtAll,O=Ln.isInLeftEnd(this.state),H=Ln.isInRightEnd(this.state),q=u&&!(m&&(l&&-1<m.indexOf(l)||this.state.deviceType&&-1<m.indexOf(this.state.deviceType)))&&!Ln.notEnoughChildren(this.state)&&I,K=!w&&O,G=!w&&H,z=Xm.getTransform(this.state,this.props);return vr.createElement(vr.Fragment,null,vr.createElement("div",{className:"react-multi-carousel-list "+b+" "+M,dir:R?"rtl":"ltr",ref:this.containerRef},vr.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+y,style:{transition:this.isAnimationAllowed?C||mM:"none",overflow:B?"hidden":"unset",transform:"translate3d("+(z+_)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),q&&(!K||p)&&this.renderLeftArrow(K),q&&(!G||p)&&this.renderRightArrow(G),I&&!j&&this.renderButtonGroups(),I&&!x&&this.renderDotsList()),I&&x&&this.renderDotsList(),I&&j&&this.renderButtonGroups())},r.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},r}(vr.Component);Ax.default=pZ;Object.defineProperty(Cx,"__esModule",{value:!0});var fZ=Ax;Cx.default=fZ.default;var mZ=Cx;const gO=ws(mZ);const gZ="_logoImg_4t4zh_1",bZ="_mainLogo_4t4zh_11",gM={logoImg:gZ,mainLogo:bZ};function zd({toLink:t,img:r}){return d.jsx("div",{className:gM.logoImg,children:d.jsx(je,{to:t,children:d.jsx("img",{className:gM.mainLogo,src:r,alt:""})})})}const wZ="/build/assets/1-673be8c1.png",kZ="/build/assets/2-1d8b7d9b.png",vZ="/build/assets/3-d8aadd7f.png",yZ="/build/assets/4-90e10ff8.png",CZ="/build/assets/5-c14657d7.png",AZ="/build/assets/6-cb8fad6d.png";function _Z(t){const r={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:8},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}};return d.jsx("div",{className:TQ.partner,children:d.jsxs(wx,{children:[d.jsxs(gO,{swipeable:!0,draggable:!0,showDots:!1,responsive:r,ssr:!0,infinite:!0,autoPlay:!0,autoPlaySpeed:2e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",itemClass:"carousel-item-padding-40-px",arrows:!1,children:[d.jsx(zd,{toLink:"#",img:wZ}),d.jsx(zd,{toLink:"#",img:kZ}),d.jsx(zd,{toLink:"#",img:vZ}),d.jsx(zd,{toLink:"#",img:yZ}),d.jsx(zd,{toLink:"#",img:CZ}),d.jsx(zd,{toLink:"#",img:AZ})]}),";"]})})}const xZ="_client_1uqzb_1",SZ={client:xZ},EZ="_logoImg_4t4zh_1",jZ="_mainLogo_4t4zh_11",bM={logoImg:EZ,mainLogo:jZ};function Fd({toLink:t,img:r}){return d.jsx("div",{className:bM.logoImg,children:d.jsx(je,{to:t,children:d.jsx("img",{className:bM.mainLogo,src:r,alt:""})})})}const DZ="/build/assets/1-583ec9ef.png",TZ="/build/assets/2-eeced13b.png",NZ="/build/assets/3-a556cbf1.png",IZ="/build/assets/4-c99da36e.png",MZ="/build/assets/5-b59a34dd.png",PZ="/build/assets/6-344bbfcc.png";function LZ(t){const r={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:8},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}};return d.jsx("div",{className:SZ.client,children:d.jsxs(wx,{children:[d.jsxs(gO,{swipeable:!0,draggable:!0,showDots:!1,responsive:r,ssr:!0,infinite:!0,autoPlay:!0,autoPlaySpeed:2e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",itemClass:"carousel-item-padding-40-px",arrows:!1,children:[d.jsx(Fd,{toLink:"#",img:DZ}),d.jsx(Fd,{toLink:"#",img:TZ}),d.jsx(Fd,{toLink:"#",img:NZ}),d.jsx(Fd,{toLink:"#",img:IZ}),d.jsx(Fd,{toLink:"#",img:MZ}),d.jsx(Fd,{toLink:"#",img:PZ})]}),";"]})})}const OZ="_loader_30zpn_1",BZ="_loaderContainer_30zpn_11",RZ="_blink_30zpn_1",wM={loader:OZ,loaderContainer:BZ,"sk-scaleout":"_sk-scaleout_30zpn_1",blink:RZ};function ys(t){return d.jsx("div",{className:wM.loader,children:d.jsx("div",{className:wM.loaderContainer})})}function zZ(t){const{isLoading:r}=He(i=>i.generalSettings);return d.jsxs(d.Fragment,{children:[r&&d.jsx(ys,{}),d.jsx(Et,{title:"Home",page:"Home"}),d.jsx(gK,{}),d.jsx(_Z,{}),d.jsx(vQ,{}),d.jsx(_Q,{}),d.jsx(jQ,{}),d.jsx(LZ,{})]})}const LA="/build/assets/bizz-logo-7e19d3af.png",{apiAccess:mf}=new Kn,FZ={isAuthLoading:!1,user:[],token:null,isAccess:!1,errorMessage:null},Mg=ve("authAction/fetchLogin",async(t,{rejectWithValue:r})=>{try{return(await mf.post("login",t)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),Pg=ve("authAction/refreshLoginData",async(t,{rejectWithValue:r})=>{try{return(await mf.get("refresh")).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),Lg=ve("authAction/fetchLogout",async(t,{rejectWithValue:r})=>{try{return(await mf.post("logout")).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),Og=ve("authAction/changePasswordData",async(t,{rejectWithValue:r})=>{try{return(await mf.post("password",t)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),Bg=ve("authAction/editUserData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}};return(await mf.post("edit-user",t,i)).data}catch(i){if(!i.response)throw i;return r(i.response.data)}}),bO=_n({name:"authAction",initialState:FZ,reducers:{checkAccess:t=>{t.isAccess=wG()},getAuthUser:t=>t},extraReducers:{[Mg.pending]:t=>{t.isAuthLoading=!0,ir("We are processing your request.")},[Mg.fulfilled]:(t,{payload:r})=>{const{user:i,authorisation:l}=r;t.isAuthLoading=!1,t.user=i,t.token=l.token,t.isLogin=!0,bG(i,l.token),setTimeout(()=>{We(`${i.name} Welcome to BSL Admin Panel.`)},1500)},[Mg.rejected]:(t,{payload:r})=>{t.isAuthLoading=!1,t.errorMessage=r,Pe(r)},[Pg.pending]:t=>{t.isAuthLoading=!0},[Pg.fulfilled]:(t,{payload:r})=>{const{status:i,user:l}=r;t.isAuthLoading=!1,t.user=l,i!=="reject"?t.isLogin=!0:(t.isLogin=!1,dy())},[Pg.rejected]:(t,{payload:r})=>{t.isAuthLoading=!1,t.authErrorMessage=r},[Lg.pending]:t=>{t.isAuthLoading=!0,ir("We are processing your request.")},[Lg.fulfilled]:t=>{t.isAuthLoading=!1;let r=t.user.name;We(`Thank you ${r}`),dy()},[Lg.rejected]:(t,{payload:r})=>{t.isAuthLoading=!1,t.errorMessage=r,Pe(r)},[Og.pending]:t=>{t.isAuthLoading=!0},[Og.fulfilled]:(t,{payload:r})=>{t.isAuthLoading=!1,dy()},[Og.rejected]:(t,{payload:r})=>{t.isAuthLoading=!1,t.authErrorMessage=r,Pe(r)},[Bg.pending]:t=>{t.isAuthLoading=!0,ir("Please wait a while, We are processing your request.")},[Bg.fulfilled]:(t,{payload:r})=>{const i=r;t.isAuthLoading=!1,t.user=i,We(`${i.name} successfully edited your profile.`)},[Bg.rejected]:(t,{payload:r})=>{t.isAuthLoading=!1,t.authErrorMessage=r,Pe(r)}}}),{checkAccess:wO,getAuthUser:kO}=bO.actions,$Z=bO.reducer;function HZ(t){He(C=>C.authUser);const r=new wk;kl();const[i,l]=D.useState(""),u=D.createRef(),[p,m]=D.useState(""),w=D.createRef(),b=nt(),y=C=>{C.preventDefault();let _=new FormData;if(i)u.current.querySelector("code").innerText="",_.append("email",i);else{let x="Email field is required";Ee(x),u.current.querySelector("code").innerText=x,u.current.focus()}if(p)w.current.querySelector("code").innerText="",_.append("password",p);else{let x="Password field is required";Ee(x),w.current.querySelector("code").innerText=x,w.current.focus()}i&&p&&b(Mg(_))};return D.useEffect(()=>{r.getAuthorisation()&&(window.location.href=`${df}/bsl/admin`)}),d.jsx("div",{style:{height:"100vh"},children:d.jsx("div",{className:"h-100",children:d.jsx("div",{className:"login-form-bg h-100",children:d.jsx("div",{className:"container h-100",children:d.jsx("div",{className:"row justify-content-center h-100",children:d.jsx("div",{className:"col-xl-6",children:d.jsx("div",{className:"form-input-content",children:d.jsx("div",{className:"card login-form mb-0",children:d.jsxs("div",{className:"card-body pt-5",children:[d.jsx(je,{className:"text-center d-flex justify-content-center",to:"/",children:d.jsx("img",{style:{width:"120px"},src:LA,alt:""})}),d.jsxs("form",{className:"mt-5 mb-5 login-input",onSubmit:y,children:[d.jsxs("div",{ref:u,className:"form-group",children:[d.jsx("input",{type:"email",className:"form-control",placeholder:"Email",value:i,onChange:C=>l(C.target.value)}),d.jsx("code",{})]}),d.jsxs("div",{ref:w,className:"form-group",children:[d.jsx("input",{type:"password",className:"form-control",placeholder:"Password",value:p,onChange:C=>m(C.target.value)}),d.jsx("code",{})]}),d.jsx("button",{type:"submit",className:"btn login-form__btn submit w-100",children:"Sign In"})]})]})})})})})})})})})}function VZ(t){return D.useEffect(()=>{let r=document.querySelector("body");r.dataset.themeVersion="light",r.dataset.layout="vertical",r.dataset.navHeaderbg="color_1",r.dataset.headerbg="color_1",r.dataset.sidebarStyle="full",r.dataset.sibebarbg="color_1",r.dataset.idebarPosition="static",r.dataset.headerPosition="static",r.dataset.container="wide",r.setAttribute("direction","ltr")},[]),d.jsx(X_,{})}const UZ="/build/assets/bizz-icon-f4078adf.png";function WZ(t){return d.jsx("div",{className:"nav-header",children:d.jsx("div",{className:"brand-logo",children:d.jsxs(je,{to:"/",className:"p-x d-flex justify-content-center p-2",children:[d.jsxs("b",{className:"logo-abbr",children:[d.jsx("img",{style:{width:"60px"},src:UZ,alt:""})," "]}),d.jsx("span",{className:"logo-compact",children:d.jsx("img",{style:{width:"120px"},src:LA,alt:""})}),d.jsx("span",{className:"brand-title",children:d.jsx("img",{style:{width:"120px"},src:LA,alt:""})})]})})})}const qZ={isOpenBackendSideNav:!0,rightHeader:{messageBtn:!1,notificationBtn:!1,languageBtn:!1,profileBtn:!1}},vO=_n({name:"menuAction",initialState:qZ,reducers:{backendSideNaAction:t=>{t.isOpenBackendSideNav=!t.isOpenBackendSideNav},rightHeaderAction:(t,{payload:r})=>{let i=Object.keys(t.rightHeader).map(l=>({key:l,value:r===l?!t.rightHeader[l]:!1}));t.rightHeader=i.reduce((l,u)=>(l[u.key]=u.value,l),{})}}}),{backendSideNaAction:GZ,rightHeaderAction:yO}=vO.actions,KZ=vO.reducer;function YZ(t){const r=nt(),i=()=>{r(GZ())};return d.jsx("div",{className:"nav-control",children:d.jsx("div",{className:"hamburger",onClick:i,children:d.jsx("span",{className:"toggle-icon",children:d.jsx("i",{className:"icon-menu"})})})})}const Gh="/build/assets/default-avatar-f2770b81.png";function kM({icon:t,menuName:r,badgeStyle:i,children:l,newMessageCount:u,addClass:p}){const m=nt(),w=(b,y)=>{b.preventDefault(),m(yO(y))};return d.jsxs("li",{className:`icons dropdown ${p}`,onClick:b=>w(b,p),children:[d.jsxs(je,{to:"#","data-toggle":"dropdown",children:[t,d.jsx("span",{className:`badge badge-pill ${i}`,children:u})]}),d.jsxs("div",{className:"drop-down animated fadeIn dropdown-menu","x-placement":"top-start",style:{position:"absolute",willChange:"transform",top:"0px",left:"0px",transform:"translate3d(-81px, 5px, 0px)"},children:[d.jsxs("div",{className:"dropdown-content-heading d-flex justify-content-between",children:[d.jsxs("span",{className:"",children:[u," New ",r]}),d.jsx(je,{to:"#",className:"d-inline-block",children:d.jsx("span",{className:`badge badge-pill ${i}`,children:u})})]}),l]})]})}function QZ(t){const{rightHeader:r}=He(w=>w.menuAction),i=nt(),l=(w,b)=>{w.preventDefault(),i(yO(b))},u=w=>{w.classList.add("show"),w.querySelector(".dropdown-menu").classList.add("show")},p=w=>{w&&w.classList.contains("show")&&(w.classList.remove("show"),w.querySelector(".dropdown-menu").classList.remove("show"))},m=w=>{w.preventDefault(),i(Lg())};return D.useEffect(()=>{Object.keys(r).map(b=>{let y=document.querySelector(`.${b}`);r[b]?u(y):p(y)})},[r]),d.jsx("div",{className:"header-right",children:d.jsxs("ul",{className:"clearfix",children:[d.jsx(kM,{icon:d.jsx("i",{className:"mdi mdi-email-outline"}),menuName:"Messages",badgeStyle:"gradient-1",newMessageCount:3,addClass:"messageBtn",children:d.jsx("div",{className:"dropdown-content-body",children:d.jsxs("ul",{children:[d.jsx("li",{className:"notification-unread",children:d.jsxs(je,{to:"#",children:[d.jsx("img",{className:"float-left mr-3 avatar-img",src:Gh,alt:""}),d.jsxs("div",{className:"notification-content",children:[d.jsx("div",{className:"notification-heading",children:"Saiful Islam"}),d.jsx("div",{className:"notification-timestamp",children:"08 Hours ago"}),d.jsx("div",{className:"notification-text",children:"Hi Teddy, Just wanted to let you ..."})]})]})}),d.jsx("li",{className:"notification-unread",children:d.jsxs(je,{to:"#",children:[d.jsx("img",{className:"float-left mr-3 avatar-img",src:Gh,alt:""}),d.jsxs("div",{className:"notification-content",children:[d.jsx("div",{className:"notification-heading",children:"Adam Smith"}),d.jsx("div",{className:"notification-timestamp",children:"08 Hours ago"}),d.jsx("div",{className:"notification-text",children:"Can you do me a favour?"})]})]})}),d.jsx("li",{children:d.jsxs(je,{to:"#",children:[d.jsx("img",{className:"float-left mr-3 avatar-img",src:Gh,alt:""}),d.jsxs("div",{className:"notification-content",children:[d.jsx("div",{className:"notification-heading",children:"Barak Obama"}),d.jsx("div",{className:"notification-timestamp",children:"08 Hours ago"}),d.jsx("div",{className:"notification-text",children:"Hi Teddy, Just wanted to let you ..."})]})]})}),d.jsx("li",{children:d.jsxs(je,{to:"#",children:[d.jsx("img",{className:"float-left mr-3 avatar-img",src:Gh,alt:""}),d.jsxs("div",{className:"notification-content",children:[d.jsx("div",{className:"notification-heading",children:"Hilari Clinton"}),d.jsx("div",{className:"notification-timestamp",children:"08 Hours ago"}),d.jsx("div",{className:"notification-text",children:"Hello"})]})]})})]})})}),d.jsx(kM,{icon:d.jsx("i",{className:"mdi mdi-bell-outline"}),menuName:"Notifications",badgeStyle:"gradient-2",newMessageCount:4,addClass:"notificationBtn",children:d.jsx("div",{className:"dropdown-content-body",children:d.jsxs("ul",{children:[d.jsx("li",{children:d.jsxs(je,{to:"#",children:[d.jsx("span",{className:"mr-3 avatar-icon bg-success-lighten-2",children:d.jsx("i",{className:"icon-present"})}),d.jsxs("div",{className:"notification-content",children:[d.jsx("h6",{className:"notification-heading",children:"Events near you"}),d.jsx("span",{className:"notification-text",children:"Within next 5 days"})]})]})}),d.jsx("li",{children:d.jsxs(je,{to:"#",children:[d.jsx("span",{className:"mr-3 avatar-icon bg-danger-lighten-2",children:d.jsx("i",{className:"icon-present"})}),d.jsxs("div",{className:"notification-content",children:[d.jsx("h6",{className:"notification-heading",children:"Event Started"}),d.jsx("span",{className:"notification-text",children:"One hour ago"})]})]})}),d.jsx("li",{children:d.jsxs(je,{to:"#",children:[d.jsx("span",{className:"mr-3 avatar-icon bg-success-lighten-2",children:d.jsx("i",{className:"icon-present"})}),d.jsxs("div",{className:"notification-content",children:[d.jsx("h6",{className:"notification-heading",children:"Event Ended Successfully"}),d.jsx("span",{className:"notification-text",children:"One hour ago"})]})]})}),d.jsx("li",{children:d.jsxs(je,{to:"#",children:[d.jsx("span",{className:"mr-3 avatar-icon bg-danger-lighten-2",children:d.jsx("i",{className:"icon-present"})}),d.jsxs("div",{className:"notification-content",children:[d.jsx("h6",{className:"notification-heading",children:"Events to Join"}),d.jsx("span",{className:"notification-text",children:"After two days"})]})]})})]})})}),d.jsxs("li",{className:"icons dropdown d-none d-md-flex languageBtn",children:[d.jsxs(je,{to:"#",className:"log-user","data-toggle":"dropdown",onClick:w=>l(w,"languageBtn"),children:[d.jsx("span",{children:"English"})," ",d.jsx("i",{className:"fa fa-angle-down f-s-14","aria-hidden":"true"})]}),d.jsx("div",{className:"drop-down dropdown-language animated fadeIn  dropdown-menu",children:d.jsx("div",{className:"dropdown-content-body",children:d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx(je,{to:"#",children:"English"})}),d.jsx("li",{children:d.jsx(je,{to:"#",children:"Dutch"})})]})})})]}),d.jsxs("li",{className:"icons dropdown profileBtn",children:[d.jsxs("div",{className:"user-img c-pointer position-relative","data-toggle":"dropdown",onClick:w=>l(w,"profileBtn"),children:[d.jsx("span",{className:"activity active"}),d.jsx("img",{src:Gh,height:"40",width:"40",alt:""})]}),d.jsx("div",{className:"drop-down dropdown-profile animated fadeIn dropdown-menu",children:d.jsx("div",{className:"dropdown-content-body",children:d.jsxs("ul",{children:[d.jsx("li",{children:d.jsxs(je,{to:"profile",children:[d.jsx("i",{className:"icon-user"}),d.jsx("span",{children:"Profile"})]})}),d.jsx("hr",{className:"my-2"}),d.jsx("li",{children:d.jsxs(je,{to:"#",onClick:m,children:[d.jsx("i",{className:"icon-key"}),d.jsx("span",{children:"Logout"})]})})]})})})]})]})})}function ZZ(t){return d.jsx("div",{className:"header",children:d.jsxs("div",{className:"header-content clearfix",children:[d.jsx(YZ,{}),d.jsx("div",{className:"header-left"}),d.jsx(QZ,{})]})})}var CO={},Sk={},Ek={exports:{}},op={exports:{}};(function(){var t,r,i,l,u,p;typeof performance<"u"&&performance!==null&&performance.now?op.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(op.exports=function(){return(t()-u)/1e6},r=process.hrtime,t=function(){var m;return m=r(),m[0]*1e9+m[1]},l=t(),p=process.uptime()*1e9,u=l-p):Date.now?(op.exports=function(){return Date.now()-i},i=Date.now()):(op.exports=function(){return new Date().getTime()-i},i=new Date().getTime())}).call(tt);var JZ=op.exports,XZ=JZ,Ys=typeof window>"u"?tt:window,eg=["moz","webkit"],bu="AnimationFrame",Tu=Ys["request"+bu],Jp=Ys["cancel"+bu]||Ys["cancelRequest"+bu];for(var Kh=0;!Tu&&Kh<eg.length;Kh++)Tu=Ys[eg[Kh]+"Request"+bu],Jp=Ys[eg[Kh]+"Cancel"+bu]||Ys[eg[Kh]+"CancelRequest"+bu];if(!Tu||!Jp){var Ny=0,vM=0,mc=[],eJ=1e3/60;Tu=function(t){if(mc.length===0){var r=XZ(),i=Math.max(0,eJ-(r-Ny));Ny=i+r,setTimeout(function(){var l=mc.slice(0);mc.length=0;for(var u=0;u<l.length;u++)if(!l[u].cancelled)try{l[u].callback(Ny)}catch(p){setTimeout(function(){throw p},0)}},Math.round(i))}return mc.push({handle:++vM,callback:t,cancelled:!1}),vM},Jp=function(t){for(var r=0;r<mc.length;r++)mc[r].handle===t&&(mc[r].cancelled=!0)}}Ek.exports=function(t){return Tu.call(Ys,t)};Ek.exports.cancel=function(){Jp.apply(Ys,arguments)};Ek.exports.polyfill=function(t){t||(t=Ys),t.requestAnimationFrame=Tu,t.cancelAnimationFrame=Jp};var tJ=Ek.exports,jk={exports:{}},Iy=null,yM=["Webkit","Moz","O","ms"],nJ=function(r){Iy||(Iy=document.createElement("div"));var i=Iy.style;if(r in i)return r;for(var l=r.charAt(0).toUpperCase()+r.slice(1),u=yM.length;u>=0;u--){var p=yM[u]+l;if(p in i)return p}return!1},rJ=aJ,oJ=/\s/,iJ=/(_|-|\.|:)/,sJ=/([a-z][A-Z]|[A-Z][a-z])/;function aJ(t){return oJ.test(t)?t.toLowerCase():iJ.test(t)?(cJ(t)||t).toLowerCase():sJ.test(t)?uJ(t).toLowerCase():t.toLowerCase()}var lJ=/[\W_]+(.|$)/g;function cJ(t){return t.replace(lJ,function(r,i){return i?" "+i:""})}var dJ=/(.)([A-Z]+)/g;function uJ(t){return t.replace(dJ,function(r,i,l){return i+" "+l.toLowerCase().split("").join(" ")})}var hJ=rJ,pJ=fJ;function fJ(t){return hJ(t).replace(/[\W_]+(.|$)/g,function(r,i){return i?" "+i:""}).trim()}var mJ=pJ,gJ=bJ;function bJ(t){return mJ(t).replace(/\s(\w)/g,function(r,i){return i.toUpperCase()})}var wJ={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},kJ=function(t,r){return typeof r=="number"&&!wJ[t]?r+"px":r},vJ=nJ,yJ=gJ,Rg={float:"cssFloat"},CJ=kJ;function ww(t,r,i){var l=Rg[r];if(typeof l>"u"&&(l=_J(r)),l){if(i===void 0)return t.style[l];t.style[l]=CJ(l,i)}}function AJ(t,r){for(var i in r)r.hasOwnProperty(i)&&ww(t,i,r[i])}function _J(t){var r=yJ(t),i=vJ(r);return Rg[r]=Rg[t]=Rg[i]=i,i}function AO(){arguments.length===2?typeof arguments[1]=="string"?arguments[0].style.cssText=arguments[1]:AJ(arguments[0],arguments[1]):ww(arguments[0],arguments[1],arguments[2])}jk.exports=AO;jk.exports.set=AO;jk.exports.get=function(t,r){return Array.isArray(r)?r.reduce(function(i,l){return i[l]=ww(t,l||""),i},{}):ww(t,r||"")};var _O=jk.exports,xO={},Nx={};Object.defineProperty(Nx,"__esModule",{value:!0});function xJ(t){if(!t)return 0;var r=t.clientHeight,i=getComputedStyle(t),l=i.paddingTop,u=i.paddingBottom;return r-parseFloat(l)-parseFloat(u)}Nx.default=xJ;var Ix={};Object.defineProperty(Ix,"__esModule",{value:!0});function SJ(t){if(!t)return 0;var r=t.clientWidth,i=getComputedStyle(t),l=i.paddingLeft,u=i.paddingRight;return r-parseFloat(l)-parseFloat(u)}Ix.default=SJ;var Mx={},EJ=tt&&tt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Mx,"__esModule",{value:!0});var jJ=EJ(_O),$d=void 0,CM=SO();function DJ(){var t=SO();return CM!==t&&($d=AM(),CM=t),typeof $d=="number"?$d:(typeof document<"u"?$d=AM():$d=0,$d||0)}Mx.default=DJ;function AM(){var t=document.createElement("div");(0,jJ.default)(t,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(t);var r=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),r}function SO(){return typeof window>"u"?1:window.screen.availWidth/document.documentElement.clientWidth}var Px={};Object.defineProperty(Px,"__esModule",{value:!0});function TJ(t){return typeof t=="string"}Px.default=TJ;var Lx={},OA=tt&&tt.__assign||function(){return OA=Object.assign||function(t){for(var r,i=1,l=arguments.length;i<l;i++){r=arguments[i];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},OA.apply(this,arguments)},NJ=tt&&tt.__rest||function(t,r){var i={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r.indexOf(l)<0&&(i[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(t);u<l.length;u++)r.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(t,l[u])&&(i[l[u]]=t[l[u]]);return i};Object.defineProperty(Lx,"__esModule",{value:!0});var _M={root:"rc-scrollbars-container",view:"rc-scrollbars-view",trackVertical:"rc-scrollbars-track rc-scrollbars-track-v",trackHorizontal:"rc-scrollbars-track rc-scrollbars-track-h",thumbVertical:"rc-scrollbars-thumb rc-scrollbars-thumb-v",thumbHorizontal:"rc-scrollbars-thumb rc-scrollbars-thumb-h"};function IJ(t,r){return r?Object.keys(t).reduce(function(i,l){return i[l]="".concat(t[l]," ").concat(r[l]||""),i},{}):t}function MJ(t){var r=t.className,i=t.classes,l=_M.root,u=NJ(_M,["root"]);return OA({root:[l,r,i==null?void 0:i.root].filter(Boolean).join(" ")},IJ(u,t.classes))}Lx.default=MJ;var Ox={};Object.defineProperty(Ox,"__esModule",{value:!0});function PJ(){return!1}Ox.default=PJ;(function(t){var r=tt&&tt.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(t,"__esModule",{value:!0}),t.returnFalse=t.getFinalClasses=t.isString=t.getScrollbarWidth=t.getInnerWidth=t.getInnerHeight=void 0;var i=Nx;Object.defineProperty(t,"getInnerHeight",{enumerable:!0,get:function(){return r(i).default}});var l=Ix;Object.defineProperty(t,"getInnerWidth",{enumerable:!0,get:function(){return r(l).default}});var u=Mx;Object.defineProperty(t,"getScrollbarWidth",{enumerable:!0,get:function(){return r(u).default}});var p=Px;Object.defineProperty(t,"isString",{enumerable:!0,get:function(){return r(p).default}});var m=Lx;Object.defineProperty(t,"getFinalClasses",{enumerable:!0,get:function(){return r(m).default}});var w=Ox;Object.defineProperty(t,"returnFalse",{enumerable:!0,get:function(){return r(w).default}})})(xO);var Dk={},Wa=tt&&tt.__assign||function(){return Wa=Object.assign||function(t){for(var r,i=1,l=arguments.length;i<l;i++){r=arguments[i];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},Wa.apply(this,arguments)};Object.defineProperty(Dk,"__esModule",{value:!0});Dk.createStyles=void 0;function LJ(t){var r=Wa({position:"absolute",right:2,bottom:2,zIndex:100},!t&&{borderRadius:3});return{containerStyleDefault:{position:"relative",overflow:"hidden",width:"100%",height:"100%"},containerStyleAutoHeight:{height:"auto"},viewStyleDefault:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},viewStyleAutoHeight:{position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},viewStyleUniversalInitial:{overflow:"hidden",marginRight:0,marginBottom:0},trackHorizontalStyleDefault:Wa(Wa({},r),{left:2,height:6}),trackVerticalStyleDefault:Wa(Wa({},r),{top:2,width:6}),thumbStyleDefault:Wa({position:"relative",display:"block",height:"100%",cursor:"pointer",borderRadius:"inherit"},!t&&{backgroundColor:"rgba(0,0,0,.2)"}),disableSelectStyle:{userSelect:"none"},disableSelectStyleReset:{userSelect:"auto"}}}Dk.createStyles=LJ;var OJ=tt&&tt.__extends||function(){var t=function(r,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(l[p]=u[p])},t(r,i)};return function(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(r,i);function l(){this.constructor=r}r.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}(),Kt=tt&&tt.__assign||function(){return Kt=Object.assign||function(t){for(var r,i=1,l=arguments.length;i<l;i++){r=arguments[i];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},Kt.apply(this,arguments)},BJ=tt&&tt.__createBinding||(Object.create?function(t,r,i,l){l===void 0&&(l=i);var u=Object.getOwnPropertyDescriptor(r,i);(!u||("get"in u?!r.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(t,l,u)}:function(t,r,i,l){l===void 0&&(l=i),t[l]=r[i]}),RJ=tt&&tt.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),EO=tt&&tt.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var i in t)i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)&&BJ(r,t,i);return RJ(r,t),r},zJ=tt&&tt.__rest||function(t,r){var i={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r.indexOf(l)<0&&(i[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(t);u<l.length;u++)r.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(t,l[u])&&(i[l[u]]=t[l[u]]);return i},FJ=tt&&tt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Sk,"__esModule",{value:!0});Sk.Scrollbars=void 0;var Yh=EO(D),gc=D,My=EO(tJ),ds=FJ(_O),us=xO,$J=Dk,HJ=function(t){OJ(r,t);function r(i){var l=t.call(this,i)||this;return l.container=null,l.dragging=!1,l.scrolling=!1,l.trackMouseOver=!1,l.styles=(0,$J.createStyles)(l.props.disableDefaultStyles),l.getScrollLeft=l.getScrollLeft.bind(l),l.getScrollTop=l.getScrollTop.bind(l),l.getScrollWidth=l.getScrollWidth.bind(l),l.getScrollHeight=l.getScrollHeight.bind(l),l.getClientWidth=l.getClientWidth.bind(l),l.getClientHeight=l.getClientHeight.bind(l),l.getValues=l.getValues.bind(l),l.getThumbHorizontalWidth=l.getThumbHorizontalWidth.bind(l),l.getThumbVerticalHeight=l.getThumbVerticalHeight.bind(l),l.getScrollLeftForOffset=l.getScrollLeftForOffset.bind(l),l.getScrollTopForOffset=l.getScrollTopForOffset.bind(l),l.scrollLeft=l.scrollLeft.bind(l),l.scrollTop=l.scrollTop.bind(l),l.scrollToLeft=l.scrollToLeft.bind(l),l.scrollToTop=l.scrollToTop.bind(l),l.scrollToRight=l.scrollToRight.bind(l),l.scrollToBottom=l.scrollToBottom.bind(l),l.handleTrackMouseEnter=l.handleTrackMouseEnter.bind(l),l.handleTrackMouseLeave=l.handleTrackMouseLeave.bind(l),l.handleHorizontalTrackMouseDown=l.handleHorizontalTrackMouseDown.bind(l),l.handleVerticalTrackMouseDown=l.handleVerticalTrackMouseDown.bind(l),l.handleHorizontalThumbMouseDown=l.handleHorizontalThumbMouseDown.bind(l),l.handleVerticalThumbMouseDown=l.handleVerticalThumbMouseDown.bind(l),l.handleWindowResize=l.handleWindowResize.bind(l),l.handleScroll=l.handleScroll.bind(l),l.handleDrag=l.handleDrag.bind(l),l.handleDragEnd=l.handleDragEnd.bind(l),l.state={didMountUniversal:!1,scrollbarWidth:(0,us.getScrollbarWidth)()},l}return r.prototype.componentDidMount=function(){this.addListeners(),this.update(),this.componentDidMountUniversal()},r.prototype.componentDidMountUniversal=function(){var i=this.props.universal;i&&this.setState({didMountUniversal:!0})},r.prototype.componentDidUpdate=function(){this.update()},r.prototype.componentWillUnmount=function(){this.removeListeners(),this.requestFrame&&(0,My.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)},r.prototype.getScrollLeft=function(){return this.view?this.view.scrollLeft:0},r.prototype.getScrollTop=function(){return this.view?this.view.scrollTop:0},r.prototype.getScrollWidth=function(){return this.view?this.view.scrollWidth:0},r.prototype.getScrollHeight=function(){return this.view?this.view.scrollHeight:0},r.prototype.getClientWidth=function(){return this.view?this.view.clientWidth:0},r.prototype.getClientHeight=function(){return this.view?this.view.clientHeight:0},r.prototype.getValues=function(){var i=this.view||{},l=i.scrollLeft,u=l===void 0?0:l,p=i.scrollTop,m=p===void 0?0:p,w=i.scrollWidth,b=w===void 0?0:w,y=i.scrollHeight,C=y===void 0?0:y,_=i.clientWidth,x=_===void 0?0:_,j=i.clientHeight,M=j===void 0?0:j;return{left:u/(b-x)||0,top:m/(C-M)||0,scrollLeft:u,scrollTop:m,scrollWidth:b,scrollHeight:C,clientWidth:x,clientHeight:M}},r.prototype.getThumbHorizontalWidth=function(){if(!this.view||!this.trackHorizontal)return 0;var i=this.props,l=i.thumbSize,u=i.thumbMinSize,p=this.view,m=p.scrollWidth,w=p.clientWidth,b=(0,us.getInnerWidth)(this.trackHorizontal),y=Math.ceil(w/m*b);return b===y?0:l||Math.max(y,u)},r.prototype.getThumbVerticalHeight=function(){if(!this.view||!this.trackVertical)return 0;var i=this.props,l=i.thumbSize,u=i.thumbMinSize,p=this.view,m=p.scrollHeight,w=p.clientHeight,b=(0,us.getInnerHeight)(this.trackVertical),y=Math.ceil(w/m*b);return b===y?0:l||Math.max(y,u)},r.prototype.getScrollLeftForOffset=function(i){if(!this.view||!this.trackHorizontal)return 0;var l=this.view,u=l.scrollWidth,p=l.clientWidth,m=(0,us.getInnerWidth)(this.trackHorizontal),w=this.getThumbHorizontalWidth();return i/(m-w)*(u-p)},r.prototype.getScrollTopForOffset=function(i){if(!this.view||!this.trackVertical)return 0;var l=this.view,u=l.scrollHeight,p=l.clientHeight,m=(0,us.getInnerHeight)(this.trackVertical),w=this.getThumbVerticalHeight();return i/(m-w)*(u-p)},r.prototype.scrollLeft=function(i){i===void 0&&(i=0),this.view&&(this.view.scrollLeft=i)},r.prototype.scrollTop=function(i){i===void 0&&(i=0),this.view&&(this.view.scrollTop=i)},r.prototype.scrollToLeft=function(){this.view&&(this.view.scrollLeft=0)},r.prototype.scrollToTop=function(){this.view&&(this.view.scrollTop=0)},r.prototype.scrollToRight=function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)},r.prototype.scrollToBottom=function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)},r.prototype.scrollToY=function(i){this.view&&(this.view.scrollTop=i)},r.prototype.addListeners=function(){if(!(typeof document>"u"||!this.view||!this.trackHorizontal||!this.trackVertical||!this.thumbVertical||!this.thumbHorizontal)){var i=this,l=i.view,u=i.trackHorizontal,p=i.trackVertical,m=i.thumbHorizontal,w=i.thumbVertical;l.addEventListener("scroll",this.handleScroll),this.state.scrollbarWidth&&(u.addEventListener("mouseenter",this.handleTrackMouseEnter),u.addEventListener("mouseleave",this.handleTrackMouseLeave),u.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),p.addEventListener("mouseenter",this.handleTrackMouseEnter),p.addEventListener("mouseleave",this.handleTrackMouseLeave),p.addEventListener("mousedown",this.handleVerticalTrackMouseDown),m.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),w.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}},r.prototype.removeListeners=function(){if(!(typeof document>"u"||!this.view||!this.trackHorizontal||!this.trackVertical||!this.thumbVertical||!this.thumbHorizontal)){var i=this,l=i.view,u=i.trackHorizontal,p=i.trackVertical,m=i.thumbHorizontal,w=i.thumbVertical;l.removeEventListener("scroll",this.handleScroll),this.state.scrollbarWidth&&(u.removeEventListener("mouseenter",this.handleTrackMouseEnter),u.removeEventListener("mouseleave",this.handleTrackMouseLeave),u.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),p.removeEventListener("mouseenter",this.handleTrackMouseEnter),p.removeEventListener("mouseleave",this.handleTrackMouseLeave),p.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),m.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),w.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}},r.prototype.handleScroll=function(i){var l=this,u=this.props,p=u.onScroll,m=u.onScrollFrame;p&&p(i),this.update(function(w){var b=w.scrollLeft,y=w.scrollTop;l.viewScrollLeft=b,l.viewScrollTop=y,m&&m(w)}),this.detectScrolling()},r.prototype.handleScrollStart=function(){var i=this.props.onScrollStart;i&&i(),this.handleScrollStartAutoHide()},r.prototype.handleScrollStartAutoHide=function(){var i=this.props.autoHide;i&&this.showTracks()},r.prototype.handleScrollStop=function(){var i=this.props.onScrollStop;i&&i(),this.handleScrollStopAutoHide()},r.prototype.handleScrollStopAutoHide=function(){var i=this.props.autoHide;i&&this.hideTracks()},r.prototype.handleWindowResize=function(){this.update()},r.prototype.handleHorizontalTrackMouseDown=function(i){if(this.view){i.preventDefault();var l=i.target,u=i.clientX,p=l.getBoundingClientRect().left,m=this.getThumbHorizontalWidth(),w=Math.abs(p-u)-m/2;this.view.scrollLeft=this.getScrollLeftForOffset(w)}},r.prototype.handleVerticalTrackMouseDown=function(i){if(this.view){i.preventDefault();var l=i.target,u=i.clientY,p=l.getBoundingClientRect().top,m=this.getThumbVerticalHeight(),w=Math.abs(p-u)-m/2;this.view.scrollTop=this.getScrollTopForOffset(w)}},r.prototype.handleHorizontalThumbMouseDown=function(i){i.preventDefault(),this.handleDragStart(i);var l=i.target,u=i.clientX,p=l.offsetWidth,m=l.getBoundingClientRect().left;this.prevPageX=p-(u-m)},r.prototype.handleVerticalThumbMouseDown=function(i){i.preventDefault(),this.handleDragStart(i);var l=i.target,u=i.clientY,p=l.offsetHeight,m=l.getBoundingClientRect().top;this.prevPageY=p-(u-m)},r.prototype.setupDragging=function(){(0,ds.default)(document.body,this.styles.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=us.returnFalse},r.prototype.teardownDragging=function(){(0,ds.default)(document.body,this.styles.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=null},r.prototype.handleDragStart=function(i){this.dragging=!0,i.stopImmediatePropagation(),this.setupDragging()},r.prototype.handleDrag=function(i){if(this.prevPageX&&this.trackHorizontal&&this.view){var l=i.clientX,u=this.trackHorizontal.getBoundingClientRect().left,p=this.getThumbHorizontalWidth(),m=p-this.prevPageX,w=-u+l-m;this.view.scrollLeft=this.getScrollLeftForOffset(w)}if(this.prevPageY&&this.trackVertical&&this.view){var b=i.clientY,y=this.trackVertical.getBoundingClientRect().top,C=this.getThumbVerticalHeight(),m=C-this.prevPageY,w=-y+b-m;this.view.scrollTop=this.getScrollTopForOffset(w)}return!1},r.prototype.handleDragEnd=function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()},r.prototype.handleDragEndAutoHide=function(){var i=this.props.autoHide;i&&this.hideTracks()},r.prototype.handleTrackMouseEnter=function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()},r.prototype.handleTrackMouseEnterAutoHide=function(){var i=this.props.autoHide;i&&this.showTracks()},r.prototype.handleTrackMouseLeave=function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()},r.prototype.handleTrackMouseLeaveAutoHide=function(){var i=this.props.autoHide;i&&this.hideTracks()},r.prototype.showTracks=function(){clearTimeout(this.hideTracksTimeout),(0,ds.default)(this.trackHorizontal,{opacity:1}),(0,ds.default)(this.trackVertical,{opacity:1})},r.prototype.hideTracks=function(){var i=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var l=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout(function(){(0,ds.default)(i.trackHorizontal,{opacity:0}),(0,ds.default)(i.trackVertical,{opacity:0})},l)}},r.prototype.detectScrolling=function(){var i=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval(function(){i.lastViewScrollLeft===i.viewScrollLeft&&i.lastViewScrollTop===i.viewScrollTop&&(clearInterval(i.detectScrollingInterval),i.scrolling=!1,i.handleScrollStop()),i.lastViewScrollLeft=i.viewScrollLeft,i.lastViewScrollTop=i.viewScrollTop},100))},r.prototype.raf=function(i){var l=this;this.requestFrame&&My.default.cancel(this.requestFrame),this.requestFrame=(0,My.default)(function(){l.requestFrame=void 0,i()})},r.prototype.update=function(i){var l=this;this.raf(function(){return l._update(i)})},r.prototype._update=function(i){var l=this.props,u=l.onUpdate,p=l.hideTracksWhenNotNeeded,m=this.getValues(),w=(0,us.getScrollbarWidth)();if(this.state.scrollbarWidth!==w&&this.setState({scrollbarWidth:w}),this.state.scrollbarWidth){var b=m.scrollLeft,y=m.clientWidth,C=m.scrollWidth,_=(0,us.getInnerWidth)(this.trackHorizontal),x=this.getThumbHorizontalWidth(),j=b/(C-y)*(_-x),M={width:x,transform:"translateX(".concat(j,"px)")},R=m.scrollTop,P=m.clientHeight,B=m.scrollHeight,I=(0,us.getInnerHeight)(this.trackVertical),O=this.getThumbVerticalHeight(),H=R/(B-P)*(I-O),q={height:O,transform:"translateY(".concat(H,"px)")};if(p){var K={visibility:C>y?"visible":"hidden"},G={visibility:B>P?"visible":"hidden"};(0,ds.default)(this.trackHorizontal,K),(0,ds.default)(this.trackVertical,G)}(0,ds.default)(this.thumbHorizontal,M),(0,ds.default)(this.thumbVertical,q)}u&&u(m),typeof i=="function"&&i(m)},r.prototype.render=function(){var i=this,l=this.state,u=l.scrollbarWidth,p=l.didMountUniversal,m=this.props,w=m.autoHeight,b=m.autoHeightMax,y=m.autoHeightMin,C=m.autoHide,_=m.autoHideDuration;m.autoHideTimeout;var x=m.children;m.classes,m.hideTracksWhenNotNeeded,m.onScroll,m.onScrollFrame,m.onScrollStart,m.onScrollStop,m.onUpdate;var j=m.renderThumbHorizontal,M=m.renderThumbVertical,R=m.renderTrackHorizontal,P=m.renderTrackVertical,B=m.renderView,I=m.style,O=m.tagName;m.thumbMinSize,m.thumbSize;var H=m.universal;m.disableDefaultStyles;var q=zJ(m,["autoHeight","autoHeightMax","autoHeightMin","autoHide","autoHideDuration","autoHideTimeout","children","classes","hideTracksWhenNotNeeded","onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderThumbHorizontal","renderThumbVertical","renderTrackHorizontal","renderTrackVertical","renderView","style","tagName","thumbMinSize","thumbSize","universal","disableDefaultStyles"]),K=this.styles,G=K.containerStyleAutoHeight,z=K.containerStyleDefault,te=K.thumbStyleDefault,se=K.trackHorizontalStyleDefault,ge=K.trackVerticalStyleDefault,ce=K.viewStyleAutoHeight,oe=K.viewStyleDefault,re=K.viewStyleUniversalInitial,J=Kt(Kt(Kt({},z),w&&Kt(Kt({},G),{minHeight:y,maxHeight:b})),I),ne=Kt(Kt(Kt(Kt(Kt({},oe),{marginRight:u?-u:0,marginBottom:u?-u:0}),w&&Kt(Kt({},ce),{minHeight:typeof y=="string"?"calc(".concat(y," + ").concat(u,"px)"):y+u,maxHeight:typeof b=="string"?"calc(".concat(b," + ").concat(u,"px)"):b+u})),w&&H&&!p&&{minHeight:y,maxHeight:b}),H&&!p&&re),fe={transition:"opacity ".concat(_,"ms"),opacity:0},ee=Kt(Kt(Kt({},se),C&&fe),(!u||H&&!p)&&{display:"none"}),ie=Kt(Kt(Kt({},ge),C&&fe),(!u||H&&!p)&&{display:"none"}),Ce=(0,us.getFinalClasses)(this.props);return(0,gc.createElement)(O,Kt(Kt({},q),{className:Ce.root,style:J,ref:function(Me){i.container=Me}}),[(0,gc.cloneElement)(B({style:ne,className:Ce.view}),{key:"view",ref:function(Me){i.view=Me}},x),(0,gc.cloneElement)(R({style:ee,className:Ce.trackHorizontal}),{key:"trackHorizontal",ref:function(Me){i.trackHorizontal=Me}},(0,gc.cloneElement)(j({style:te,className:Ce.thumbHorizontal}),{ref:function(Me){i.thumbHorizontal=Me}})),(0,gc.cloneElement)(P({style:ie,className:Ce.trackVertical}),{key:"trackVertical",ref:function(Me){i.trackVertical=Me}},(0,gc.cloneElement)(M({style:te,className:Ce.thumbVertical}),{ref:function(Me){i.thumbVertical=Me}}))])},r.defaultProps={autoHeight:!1,autoHeightMax:200,autoHeightMin:0,autoHide:!1,autoHideDuration:200,autoHideTimeout:1e3,disableDefaultStyles:!1,hideTracksWhenNotNeeded:!1,renderThumbHorizontal:function(i){return Yh.createElement("div",Kt({},i))},renderThumbVertical:function(i){return Yh.createElement("div",Kt({},i))},renderTrackHorizontal:function(i){return Yh.createElement("div",Kt({},i))},renderTrackVertical:function(i){return Yh.createElement("div",Kt({},i))},renderView:function(i){return Yh.createElement("div",Kt({},i))},tagName:"div",thumbMinSize:30,universal:!1},r}(gc.Component);Sk.Scrollbars=HJ;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Scrollbars=void 0;var r=Sk;Object.defineProperty(t,"Scrollbars",{enumerable:!0,get:function(){return r.Scrollbars}}),t.default=r.Scrollbars})(CO);function Jr({link:t,linkName:r,hasSubMenu:i,menuIcon:l,children:u}){const p=m=>{let w=m.target,b=w.parentElement;b.classList.toggle("active"),w.getAttribute("aria-expanded")==="false"?w.setAttribute("aria-expanded","true"):w.setAttribute("aria-expanded","false"),b.querySelector("ul").classList.toggle("in")};return d.jsxs(d.Fragment,{children:[d.jsxs(_i,{className:i&&"has-arrow",to:t,"aria-expanded":"false",onClick:m=>{i&&(m.preventDefault(),p(m))},children:[l,d.jsx("span",{className:"nav-text",children:r})]}),i&&u]})}function VJ(t){return d.jsx("div",{className:"nk-sidebar pb-0",style:{height:"90vh"},children:d.jsx(CO.Scrollbars,{style:{width:"auto",height:"100%",overflow:"hidden",position:"relative"},children:d.jsx("div",{className:"nk-nav-scroll active",style:{overflowX:"hidden",width:"auto",height:"100%"},children:d.jsxs("ul",{className:"metismenu",id:"menu",children:[d.jsx("li",{className:"nav-label",children:"Dashboard"}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin",linkName:"Dashboard",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"icon-speedometer menu-icon"})})}),d.jsx("li",{className:"mega-menu mega-menu-sm",children:d.jsx(Jr,{link:"#",linkName:"Settings",hasSubMenu:!0,menuIcon:d.jsx("i",{className:"icon-globe-alt menu-icon"}),children:d.jsxs("ul",{"aria-expanded":"false",className:"collapse",children:[d.jsx("li",{children:d.jsx(je,{to:"settings",children:"Settings"})}),d.jsx("li",{children:d.jsx(je,{to:"page-settings",children:"Page Settings"})})]})})}),d.jsx("li",{className:"nav-label",children:"Menus"}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/industries",linkName:"Industries",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-industry menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/technology",linkName:"Technology",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-gears menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"#",linkName:"Abouts",hasSubMenu:!0,menuIcon:d.jsx("i",{className:"fa fa-globe menu-icon"}),children:d.jsxs("ul",{"aria-expanded":"false",className:"collapse",children:[d.jsx("li",{children:d.jsx(je,{to:"about-us",children:"About Us"})}),d.jsx("li",{children:d.jsx(je,{to:"our-management",children:"Management"})}),d.jsx("li",{children:d.jsx(je,{to:"our-teams",children:"Teams"})})]})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/clients",linkName:"Clients",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-users menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/partner",linkName:"Partner",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-handshake-o menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"#",linkName:"Services",hasSubMenu:!0,menuIcon:d.jsx("i",{className:"fa fa-server menu-icon"}),children:d.jsxs("ul",{"aria-expanded":"false",className:"collapse",children:[d.jsx("li",{children:d.jsx(je,{to:"services",children:"Services"})}),d.jsx("li",{children:d.jsx(je,{to:"products",children:"Products"})}),d.jsx("li",{children:d.jsx(je,{to:"courses",children:"Courses"})})]})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/blogs",linkName:"Blogs",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-list-alt menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/case-study",linkName:"Case Study",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-briefcase menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/testimonial",linkName:"Testimonial",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-quote-left menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/pages",linkName:"Pages",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-th-list menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/messages",linkName:"Contact Messages",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-envelope menu-icon"})})}),d.jsx("li",{children:d.jsx(Jr,{link:"/bsl/admin/subscribers",linkName:"Subscribers",hasSubMenu:!1,menuIcon:d.jsx("i",{className:"fa fa-paper-plane menu-icon"})})})]})})})})}function UJ(t){const[r,i]=D.useState("");return D.useEffect(()=>{let u=new Date().getFullYear();i(u)},[]),d.jsx("div",{className:"footer",children:d.jsx("div",{className:"copyright",children:d.jsxs("p",{children:["Copyright © Designed & Developed by ",d.jsx(je,{to:"/",children:"Bizz Solutions Plc"})," ",r]})})})}function WJ(t){const{isOpenBackendSideNav:r}=He(b=>b.menuAction),{isAuthLoading:i,user:l,isAccess:u,errorMessage:p}=He(b=>b.authUser),m=nt(),w=new wk;return kl(),D.useState(!1),D.useState(i),D.useEffect(()=>{w.getAuthorisation()||(window.location.href=`${df}/bsl/login`),m(wO())}),d.jsxs("div",{id:"main-wrapper",className:`show ${!r&&"menu-toggle"}`,children:[d.jsx(WZ,{}),d.jsx(ZZ,{}),d.jsx(VJ,{}),d.jsx("div",{className:"content-body",style:{height:"90vh",overflowY:"scroll"},children:d.jsx("div",{className:"container-fluid mt-3",children:d.jsx(X_,{})})}),d.jsx(UJ,{})]})}function qJ(t){return d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Dashboard",url:"/bsl/admin"}),d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx("div",{className:"card gradient-1",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Products Sold"}),d.jsxs("div",{className:"d-inline-block",children:[d.jsx("h2",{className:"text-white",children:"4565"}),d.jsx("p",{className:"text-white mb-0",children:"Jan - March 2019"})]}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-shopping-cart"})})]})})}),d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx("div",{className:"card gradient-2",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Net Profit"}),d.jsxs("div",{className:"d-inline-block",children:[d.jsx("h2",{className:"text-white",children:"$ 8541"}),d.jsx("p",{className:"text-white mb-0",children:"Jan - March 2019"})]}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-money"})})]})})}),d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx("div",{className:"card gradient-3",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"New Customers"}),d.jsxs("div",{className:"d-inline-block",children:[d.jsx("h2",{className:"text-white",children:"4565"}),d.jsx("p",{className:"text-white mb-0",children:"Jan - March 2019"})]}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-users"})})]})})}),d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx("div",{className:"card gradient-4",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Customer Satisfaction"}),d.jsxs("div",{className:"d-inline-block",children:[d.jsx("h2",{className:"text-white",children:"99%"}),d.jsx("p",{className:"text-white mb-0",children:"Jan - March 2019"})]}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-heart"})})]})})})]})]})}function GJ({code:t,errorMessage:r}){const[i,l]=D.useState("");return D.useEffect(()=>{let p=new Date().getFullYear();l(p)},[]),d.jsx("div",{style:{height:"100vh"},children:d.jsx("div",{className:"login-form-bg h-100",children:d.jsx("div",{className:"container h-100",children:d.jsx("div",{className:"row justify-content-center h-100",children:d.jsx("div",{className:"col-xl-6",children:d.jsx("div",{className:"error-content",children:d.jsx("div",{className:"card mb-0",children:d.jsxs("div",{className:"card-body text-center pt-5",children:[d.jsx("h1",{className:"error-text text-primary",children:t||"404"}),d.jsxs("h4",{className:"mt-4",children:[d.jsx("i",{className:"fa fa-thumbs-down text-danger"})," Bad Request"]}),d.jsx("p",{children:r?"":"Page is not available."}),d.jsx("form",{className:"mt-5 mb-5",children:d.jsx("div",{className:"text-center mb-4 mt-4",children:d.jsx(je,{to:"/",className:"btn btn-primary",children:"Go to Homepage"})})}),d.jsx("div",{className:"text-center",children:d.jsxs("p",{children:["Copyright © Designed & Developed by ",d.jsx(je,{to:"/",children:"Bizz Solutions Plc"}),",  ",i]})})]})})})})})})})})}var jO={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xM=_e.createContext&&_e.createContext(jO),dl=globalThis&&globalThis.__assign||function(){return dl=Object.assign||function(t){for(var r,i=1,l=arguments.length;i<l;i++){r=arguments[i];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},dl.apply(this,arguments)},KJ=globalThis&&globalThis.__rest||function(t,r){var i={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r.indexOf(l)<0&&(i[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(t);u<l.length;u++)r.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(t,l[u])&&(i[l[u]]=t[l[u]]);return i};function DO(t){return t&&t.map(function(r,i){return _e.createElement(r.tag,dl({key:i},r.attr),DO(r.child))})}function Ur(t){return function(r){return _e.createElement(YJ,dl({attr:dl({},t.attr)},r),DO(t.child))}}function YJ(t){var r=function(i){var l=t.attr,u=t.size,p=t.title,m=KJ(t,["attr","size","title"]),w=u||i.size||"1em",b;return i.className&&(b=i.className),t.className&&(b=(b?b+" ":"")+t.className),_e.createElement("svg",dl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,l,m,{className:b,style:dl(dl({color:t.color||i.color},i.style),t.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),p&&_e.createElement("title",null,p),t.children)};return xM!==void 0?_e.createElement(xM.Consumer,null,function(i){return r(i)}):r(jO)}function QJ(t){return Ur({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"}}]})(t)}function tn({list:t}){const r=kl(),i=()=>{r(-1)};return d.jsx("div",{className:"row page-titles mx-0 mb-3",children:d.jsxs("div",{className:"col p-md-0",children:[d.jsx("ol",{className:"breadcrumb",children:t.map(l=>l.url?d.jsx("li",{className:"breadcrumb-item",children:d.jsx(je,{to:l.url,children:l.name})},Co()):d.jsx("li",{className:"breadcrumb-item active",children:l.name},Co()))}),d.jsxs("button",{onClick:i,className:"btn btn-danger btn-sm",children:[d.jsx(QJ,{}),"   Go Back"]})]})})}function ar(t){return d.jsx("div",{id:"preloader",children:d.jsx("div",{className:"preloader",children:d.jsx("svg",{className:"circular",viewBox:"25 25 50 50",children:d.jsx("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"3",strokeMiterlimit:"10"})})})})}function ZJ({user:t}){return d.jsx("div",{className:"col-lg-5 col-xl-4",children:d.jsx("div",{className:"card",children:d.jsxs("div",{className:"card-body",children:[d.jsxs("div",{className:"media align-items-center mb-4",children:[d.jsx("img",{className:"mr-3",src:t==null?void 0:t.avatar,width:"80",height:"80",alt:""}),d.jsxs("div",{className:"media-body",children:[d.jsx("h3",{className:"mb-0",children:t==null?void 0:t.name}),d.jsx("p",{className:"text-muted mb-0",children:"Admin"})]})]}),d.jsx("h4",{children:"About Me"}),d.jsx("p",{className:"text-muted",children:t==null?void 0:t.abouts}),d.jsxs("ul",{className:"card-profile__info",children:[d.jsxs("li",{className:"mb-1",children:[d.jsx("strong",{className:"text-dark mr-4",children:"Mobile"}),d.jsx("span",{children:t==null?void 0:t.phone})]}),d.jsxs("li",{children:[d.jsx("strong",{className:"text-dark mr-4",children:"Email"})," ",d.jsx("span",{children:t==null?void 0:t.email})]})]})]})})})}const JJ="_controller_1gi58_1",XJ="_file_1gi58_19",eX="_btn_1gi58_27",tX="_anchor_1gi58_51",tg={controller:JJ,file:XJ,btn:eX,anchor:tX};function Te(t){return Ur({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}}]})(t)}function qn({label:t,id:r,file:i,handler:l,required:u}){const[p,m]=D.useState(""),w=D.createRef(),b=C=>{l(w.current.files)},y=C=>{C.preventDefault(),w.current.click()};return D.useEffect(()=>{m((i==null?void 0:i.name)||"")},[i]),d.jsxs(d.Fragment,{children:[d.jsxs("label",{htmlFor:r,children:[t," ",u&&d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})," ",d.jsx("small",{children:i?d.jsx(je,{to:"#",onClick:C=>{C.preventDefault(),kG(i)},className:tg.anchor,children:"See File"}):""})]}),d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-6",children:d.jsx("input",{type:"text",className:`${tg.controller} form-file-show`,placeholder:"select file",value:p,readOnly:!0})}),d.jsxs("div",{className:"col-6",children:[d.jsx("button",{onClick:y,type:"button",className:`${tg.btn} form-file-cover`,children:"upload"}),d.jsx("input",{type:"file",className:`form-file ${tg.file}`,id:r,ref:w,onChangeCapture:b})]})]})]})}function nX(){const{isAuthLoading:t,user:r,token:i,isAccess:l,errorMessage:u}=He(H=>H.authUser),p=nt(),[m,w]=D.useState(""),[b,y]=D.useState(""),[C,_]=D.useState(""),[x,j]=D.useState(""),[M,R]=D.useState(""),[P,B]=D.useState(""),I=H=>{R(H[0]),B(H[0])},O=H=>{H.preventDefault();let q=new FormData;m?q.append("name",m):Ee("Name is required."),b?q.append("email",b):Ee("email is required."),C?q.append("phone",C):Ee("phone is required."),x&&q.append("abouts",x),M&&q.append("avatar",M),m&&b&&C&&p(Bg(q))};return D.useEffect(()=>{r&&(w(r==null?void 0:r.name),y(r==null?void 0:r.email),_(r==null?void 0:r.phone),j(r==null?void 0:r.abouts))},[r]),D.useEffect(()=>{p(kO())},[]),d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"Update Information"})}),d.jsx("div",{className:"card-body",children:d.jsxs("form",{className:"form-profile",onSubmit:O,children:[d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Name"}),d.jsx("input",{className:"form-control",value:m,onChange:H=>{w(H.target.value)},placeholder:"name",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Email"}),d.jsx("input",{className:"form-control",name:"email",placeholder:"email",type:"email",value:b,onChange:H=>{y(H.target.value)}})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Phone"}),d.jsx("input",{className:"form-control",name:"phone",placeholder:"phone",type:"text",value:C,onChange:H=>{_(H.target.value)}})]})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Avatar",file:M,id:"avatar",handler:I})})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"About"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"2",placeholder:"About",value:x,onChange:H=>{j(H.target.value)}})]}),d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3",type:"submit",children:"Save"})})]})})]})}function rX(){const[t,r]=D.useState(""),i=D.createRef(),[l,u]=D.useState(""),p=D.createRef(),m=nt(),w=b=>{b.preventDefault();let y=new FormData;if(t)i.current.querySelector("code").innerText="",y.append("password",t);else{let C="Password field is required";Ee(C),i.current.querySelector("code").innerText=C,i.current.focus()}if(l)if(t===l)p.current.querySelector("code").innerText="",y.append("confirm_password",l);else{let C="Password and Confirm Password is not match.";Ee(C),p.current.querySelector("code").innerText=C,p.current.focus()}else{let C="Confirm Password field is required";Ee(C),p.current.querySelector("code").innerText=C,p.current.focus()}l&&t&&m(Og(y))};return d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"Password Reset"})}),d.jsx("div",{className:"card-body",children:d.jsxs("form",{onSubmit:w,className:"form-profile",children:[d.jsxs("div",{ref:i,className:"form-group",children:[d.jsx("label",{children:"Password"}),d.jsx("input",{type:"password",className:"form-control",placeholder:"Password",value:t,onChange:b=>r(b.target.value)}),d.jsx("code",{})]}),d.jsxs("div",{ref:p,className:"form-group",children:[d.jsx("label",{children:"Confirm Password"}),d.jsx("input",{type:"password",className:"form-control",placeholder:"Password",value:l,onChange:b=>u(b.target.value)}),d.jsx("code",{})]}),d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3",type:"submit",children:"Change Password"})})]})})]})}function oX(){const{isAuthLoading:t,user:r,token:i,isAccess:l,errorMessage:u}=He(y=>y.authUser),p=nt(),[m,w]=D.useState(t),b=[{name:"Dashboard",url:"/bsl/admin"},{name:"Profile",url:null}];return D.useEffect(()=>{p(kO())},[]),d.jsxs(d.Fragment,{children:[m&&d.jsx(ar,{}),!m&&d.jsxs(d.Fragment,{children:[d.jsx(tn,{list:b}),d.jsx("div",{className:"container-fluid",children:d.jsxs("div",{className:"row",children:[d.jsx(ZJ,{user:r}),d.jsxs("div",{className:"col-lg-7 col-xl-8",children:[d.jsx(nX,{}),d.jsx(rX,{})]})]})})]})]})}function iX(t){return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"general",className:"card gradient-2",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"General Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-gears"})})]})})}),d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"seo",className:"card gradient-1",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"SEO Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-search-plus"})})]})})})]})}function sX(t){const r=[{name:"Dashboard",url:"/bsl/admin"},{name:"Settings",url:null}];return d.jsxs(d.Fragment,{children:[d.jsx(tn,{list:r}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx(iX,{})})})]})}function aX(){const{isLoading:t,seo:r}=He(I=>I.SeoReducer),i=nt(),[l,u]=D.useState("home"),[p,m]=D.useState(""),[w,b]=D.useState(""),[y,C]=D.useState(""),[_,x]=D.useState(""),[j,M]=D.useState(""),[R,P]=D.useState(""),B=I=>{I.preventDefault();let O=new FormData;l&&O.append("page",l),w&&O.append("author",w),y?O.append("keywords",y):Pe("keywords is required."),_?O.append("description",_):Pe("description is required."),p?O.append("robots",p):Pe("Description is required."),j&&O.append("type",j),R&&O.append("url",R),y&&_&&i(xg(O))};return D.useEffect(()=>{r&&(m((r==null?void 0:r.robots)||""),b((r==null?void 0:r.twitter_creator)||""),C((r==null?void 0:r.keywords)||""),x((r==null?void 0:r.description)||""),M((r==null?void 0:r.og_type)||""),P((r==null?void 0:r.canonical)||""))},[r]),D.useEffect(()=>{i(bp(l))},[l]),t?d.jsx(ar,{}):d.jsx("div",{className:"col-lg-8 col-sm-12 offset-2",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"SEO"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:B,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Page"}),d.jsxs("select",{className:"form-control",name:"robots",value:l,onChange:I=>u(I.target.value),children:[d.jsx("option",{value:"home",children:"Home"}),d.jsx("option",{value:"about",children:"About Us"}),d.jsx("option",{value:"management",children:"Management"}),d.jsx("option",{value:"team",children:"Team"}),d.jsx("option",{value:"contact",children:"Contact Us"})]})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Author"}),d.jsx("input",{className:"form-control",value:w,onChange:I=>b(I.target.value),placeholder:"Site author",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Page Type"}),d.jsx("input",{className:"form-control",value:j,onChange:I=>M(I.target.value),placeholder:"Page type",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Page URL"}),d.jsx("input",{className:"form-control",value:R,onChange:I=>P(I.target.value),placeholder:"Page url",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Is Robots"}),d.jsxs("select",{className:"form-control",name:"robots",value:p,onChange:I=>m(I.target.value),children:[d.jsx("option",{value:"allow",children:"Allow"}),d.jsx("option",{value:"link_only",children:"Link Only"}),d.jsx("option",{value:"deny",children:"Deny"})]})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Meta Keywords"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"3",placeholder:"Meta keywords",value:y,onChange:I=>C(I.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Description"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"3",placeholder:"Meta description",value:_,onChange:I=>x(I.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})}function lX(){const t=[{name:"Dashboard",url:"/bsl/admin"},{name:"Settings",url:"/bsl/admin/settings"},{name:"SEO",url:null}];return d.jsxs(d.Fragment,{children:[d.jsx(tn,{list:t}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx(aX,{})})})]})}function cX(){const{generalSetting:t}=He(K=>K.generalSettings),r=nt(),[i,l]=D.useState(""),[u,p]=D.useState(""),[m,w]=D.useState(""),[b,y]=D.useState(""),[C,_]=D.useState(""),[x,j]=D.useState(""),[M,R]=D.useState(""),[P,B]=D.useState(""),I=K=>{w(K[0]),y(K[0])},O=K=>{R(K[0])},H=K=>{_(K[0]),j(K[0])},q=K=>{K.preventDefault();let G=new FormData;i?G.append("site_name",i):Pe("Name is required."),u?G.append("slogan",u):Pe("Slogan is required."),P?(console.log(P),G.append("footer_detail",P)):Pe("Footer Details is required."),m&&G.append("site_logo",m),C&&G.append("site_favicon",C),M&&G.append("site_secondary_logo",M),G.append("type","general"),i&&u&&P&&r(ni(G))};return D.useEffect(()=>{if(Object.keys(t).length){const{general:K}=t;l(K==null?void 0:K.site_name),p(K==null?void 0:K.slogan),w(`/${K==null?void 0:K.site_logo}`),_(`/${K==null?void 0:K.site_favicon}`),R(`/${K==null?void 0:K.site_secondary_logo}`),B(K==null?void 0:K.footer_detail)}},[t]),d.jsx(d.Fragment,{children:d.jsx("div",{className:"col-lg-8 col-sm-12 offset-2",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"General Information"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:q,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Site Name"}),d.jsx("input",{type:"text",className:"form-control",value:i,onChange:K=>l(K.target.value),placeholder:"Website Name"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Slogan"}),d.jsx("input",{type:"text",className:"form-control",value:u,onChange:K=>p(K.target.value),placeholder:"Slogan Name"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Site Logo",file:m,id:"siteLogo",handler:I})})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Site Logo",file:M,id:"siteSecLogo",handler:O})})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Site Favicon",file:C,id:"siteFavtion",handler:H})})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Footer Details"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"2",placeholder:"Footer details",value:P,onChange:K=>B(K.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})})}function dX(){const{generalSetting:t}=He(w=>w.generalSettings),r=nt(),[i,l]=D.useState(""),[u,p]=D.useState(""),m=w=>{w.preventDefault();let b=new FormData;i?b.append("title",i):Pe("Title is required."),u?b.append("text",u):Pe("Text is required."),b.append("type","newsletter"),i&&u&&r(ni(b))};return D.useEffect(()=>{if(Object.keys(t).length){const{newsletter:w}=t;l(w==null?void 0:w.title),p(w==null?void 0:w.text)}},[t]),d.jsx("div",{className:"col-lg-8 col-sm-12 offset-2",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"NewsLetter Information"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:m,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Title"}),d.jsx("input",{className:"form-control",value:i,onChange:w=>l(w.target.value),placeholder:"Newsletter Title",type:"text"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Text"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"2",placeholder:"Footer details",value:u,onChange:w=>p(w.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})}function uX(){const{generalSetting:t}=He(j=>j.generalSettings),r=nt(),[i,l]=D.useState(""),[u,p]=D.useState(""),[m,w]=D.useState(""),[b,y]=D.useState(""),[C,_]=D.useState(""),x=j=>{j.preventDefault();let M=new FormData;u?M.append("facebook",u):Pe("Facebook is required."),m?M.append("linkedin",m):Pe("Linkedin is required."),M.append("eshop",i),M.append("youtube",b),M.append("instagram",C),M.append("type","backlink"),u&&m&&r(ni(M))};return D.useEffect(()=>{if(Object.keys(t).length){const{backlink:j}=t;l(j==null?void 0:j.eshop),p(j==null?void 0:j.facebook),w(j==null?void 0:j.linkedin),y(j==null?void 0:j.youtube),_(j==null?void 0:j.instagram)}},[t]),d.jsx("div",{className:"col-lg-8 col-sm-12 offset-2",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"BackLink Information"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:x,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Eshop"}),d.jsx("input",{className:"form-control",value:i,onChange:j=>l(j.target.value),placeholder:"Eshop Link",type:"text"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Facebook"}),d.jsx("input",{className:"form-control",value:u,onChange:j=>p(j.target.value),placeholder:"Facebook Page Link",type:"text"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Linkedin"}),d.jsx("input",{className:"form-control",value:m,onChange:j=>w(j.target.value),placeholder:"LinkedIn Page Link",type:"text"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Youtube"}),d.jsx("input",{className:"form-control",value:b,onChange:j=>y(j.target.value),placeholder:"Youtube Page Link",type:"text"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Instagram"}),d.jsx("input",{className:"form-control",value:C,onChange:j=>_(j.target.value),placeholder:"Instagram Page Link",type:"text"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})}function hX(t){const r=[{name:"Dashboard",url:"/bsl/admin"},{name:"Settings",url:"/bsl/admin/settings"},{name:"General Settings",url:null}];return d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Settings | General",url:"/bsl/admin/settings/general"}),d.jsx(tn,{list:r}),d.jsx("div",{className:"container-fluid",children:d.jsxs("div",{className:"row",children:[d.jsx(cX,{}),d.jsx(dX,{}),d.jsx(uX,{})]})})]})}function pX(t){const r=[{name:"Dashboard",url:"/bsl/admin"},{name:"Page Settings",url:"/bsl/admin/page-settings"},{name:"Slider",url:null}],{isLoading:i,sliderSetting:l}=He(O=>O.generalSettings),u=nt(),[p,m]=D.useState(""),[w,b]=D.useState(""),[y,C]=D.useState(""),[_,x]=D.useState(""),[j,M]=D.useState(""),[R,P]=D.useState(""),B=O=>{P(O[0])},I=O=>{O.preventDefault();let H=new FormData;p?H.append("title",p):warningMessage("Title is required."),w?H.append("text",w):warningMessage("Description is required."),y&&H.append("link",y),H.append("btn_text",_),H.append("btn_link",j),R&&H.append("image_link",R),H.append("type","slider"),p&&w&&u(ni(H))};return D.useEffect(()=>{l&&(m((l==null?void 0:l.title)||""),b((l==null?void 0:l.text)||""),C((l==null?void 0:l.link)||""),x((l==null?void 0:l.btn_text)||""),M((l==null?void 0:l.btn_link)||""),P((l==null?void 0:l.image_link)||""))},[l]),D.useEffect(()=>{u(yp())},[]),i?d.jsx(ar,{}):d.jsxs(d.Fragment,{children:[d.jsx(tn,{list:r}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-8 col-sm-12 offset-2",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"Slider Information"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:I,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Title ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:p,onChange:O=>m(O.target.value),placeholder:"Slider title",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Youtube Video ID ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:y,onChange:O=>C(O.target.value),placeholder:"Youtube video link",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Btn Text"}),d.jsx("input",{className:"form-control",value:_,onChange:O=>x(O.target.value),placeholder:"Btn Btn Text",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Btn Link"}),d.jsx("input",{className:"form-control",value:j,onChange:O=>M(O.target.value),placeholder:"Btn Btn Link",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Slider Image",file:R,id:"avatar",handler:B,required:!0})})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Description ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"3",placeholder:"Slider Details",value:w,onChange:O=>b(O.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})})})]})}function fX(t){return d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"slider",className:"card gradient-4",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Slider Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-list-alt"})})]})})}),d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"technology",className:"card gradient-5",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Technology Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-gear"})})]})})}),d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"industry",className:"card gradient-6",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Industry Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-handshake-o"})})]})})})]})}function mX(){const t=[{name:"Dashboard",url:"/bsl/admin"},{name:"Page Settings",url:null}];return d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Page Settings",url:"/bsl/admin/page-settings"}),d.jsx(tn,{list:t}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"card",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h4",{className:"card-title",children:"Pages"}),d.jsxs(wQ,{defaultActiveKey:"home",id:"uncontrolled-tab-example",className:"mb-3",children:[d.jsx(xy,{eventKey:"home",title:"Home Page",children:d.jsx(fX,{})}),d.jsx(xy,{eventKey:"about",title:"About Page",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"about",className:"card gradient-3",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"About Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-address-book"})})]})})})})}),d.jsx(xy,{eventKey:"contact",title:"Contact Page",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-3 col-sm-6",children:d.jsx(je,{to:"contact",className:"card gradient-7",children:d.jsxs("div",{className:"card-body",children:[d.jsx("h3",{className:"card-title text-white",children:"Contact Settings"}),d.jsx("span",{className:"float-right display-5 opacity-5",children:d.jsx("i",{className:"fa fa-map-marker"})})]})})})})})]})]})})})})})]})}function gX(t){const{isLoading:r,industry:i}=He(x=>x.generalSettings),l=nt(),u=[{name:"Dashboard",url:"/bsl/admin"},{name:"Page Settings",url:"/bsl/admin/page-settings"},{name:"Industry Settings",url:null}],[p,m]=D.useState(""),[w,b]=D.useState(""),[y,C]=D.useState(""),_=x=>{x.preventDefault();let j=new FormData;p?j.append("title",p):Ee("Title is required."),w?j.append("sub_text",w):Ee("Description is required."),y&&j.append("limit",y),j.append("type","industry"),p&&w&&y&&l(ni(j))};return D.useEffect(()=>{i&&(m(i==null?void 0:i.title),b(i==null?void 0:i.sub_text),C(i==null?void 0:i.limit))},[i]),D.useEffect(()=>{l(vp())},[]),r?d.jsx(ar,{}):d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Industry Settings",url:"/bsl/admin/page-settings/industry"}),d.jsx(tn,{list:u}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{className:"card-title",children:"Industry Settings"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:_,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Title"}),d.jsx("input",{className:"form-control",value:p,onChange:x=>m(x.target.value),placeholder:"Slider title",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Data Show Limit"}),d.jsx("input",{className:"form-control",value:y,onChange:x=>C(x.target.value),placeholder:"limit count",type:"number"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Sub Text"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"3",placeholder:"Sub Text",value:w,onChange:x=>b(x.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})})})]})}function bX(t){const{isLoading:r,technology:i}=He(x=>x.generalSettings),l=nt(),u=[{name:"Dashboard",url:"/bsl/admin"},{name:"Page Settings",url:"/bsl/admin/page-settings"},{name:"Technology Settings",url:null}],[p,m]=D.useState(""),[w,b]=D.useState(""),[y,C]=D.useState(""),_=x=>{x.preventDefault();let j=new FormData;p?j.append("title",p):warningMessage("Title is required."),w?j.append("sub_text",w):warningMessage("Description is required."),y&&j.append("limit",y),j.append("type","technology"),p&&w&&y&&l(ni(j))};return D.useEffect(()=>{i&&(m(i==null?void 0:i.title),b(i==null?void 0:i.sub_text),C(i==null?void 0:i.limit))},[i]),D.useEffect(()=>{l(kp())},[]),r?d.jsx(ar,{}):d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Technology Settings",url:"/bsl/admin/page-settings/technology"}),d.jsx(tn,{list:u}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{className:"card-title",children:"Technology Settings"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:_,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Title"}),d.jsx("input",{className:"form-control",value:p,onChange:x=>m(x.target.value),placeholder:"Slider title",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Data Show Limit"}),d.jsx("input",{className:"form-control",value:y,onChange:x=>C(x.target.value),placeholder:"limit count",type:"number"})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Sub Text"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"3",placeholder:"Sub Text",value:w,onChange:x=>b(x.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})})})]})}function wX({info:t,handler:r}){const{title:i,bg:l,icon:u,hoverIcon:p,brief:m}=t,[w,b]=D.useState(""),[y,C]=D.useState([]),[_,x]=D.useState([]),[j,M]=D.useState(""),R=nt(),P=B=>{B.preventDefault();const I=new FormData;w?I.append("title",w):Ee("Title Field is required"),y&&I.append("icon",y),_&&I.append("hover_icon",_),j?I.append("brief",j):Ee("Brief Field is required"),I.append("section","attributes"),I.append("topic",i),I.append("type","about"),w&&j&&R(ni(I))};return D.useEffect(()=>{b(i||""),M(m||"")},[t]),d.jsx("form",{onSubmit:P,children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:hu(i||"")})}),d.jsxs("div",{className:"card-body",children:[d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Attribute Title ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:w,placeholder:"Project count",type:"text",name:`${i.replaceAll(" ","_")}_title`,onChange:B=>b(B.target.value)})]}),d.jsxs("div",{className:"form-group mt-2",children:[d.jsx("label",{children:"Attribute Icon"}),d.jsx("input",{type:"file",className:"form-control",onChange:B=>C(B.target.files[0])})]}),d.jsxs("div",{className:"form-group mt-2",children:[d.jsx("label",{children:"Attribute Secondary Icon"}),d.jsx("input",{type:"file",className:"form-control",onChange:B=>x(B.target.files[0])})]}),d.jsxs("div",{className:"form-group mt-2",children:[d.jsxs("label",{children:["Attribute Brief ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("textarea",{className:"form-control",id:"textarea",cols:"30",rows:"3",placeholder:"Brief",value:j,onChange:B=>M(B.target.value)})]}),d.jsx("div",{className:"form-group mt-2",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})]})]})})}function kX({SecSetting:t}){const{title:r,brief:i,clients:l,project:u}=t,[p,m]=D.useState(""),[w,b]=D.useState(""),[y,C]=D.useState(""),[_,x]=D.useState(""),j=nt(),M=R=>{R.preventDefault();const P=new FormData;p?P.append("title",p):Ee("Section title field is required."),w?P.append("brief",w):Ee("Section brief field is required."),y?P.append("clients",y):Ee("Section clients count is required."),_?P.append("project",_):Ee("Section project count is required."),P.append("type","about"),p&&w&&y&&_&&j(ni(P))};return D.useEffect(()=>{t&&(m(r||""),b(i||""),C(l||""),x(u||""))},[t]),d.jsxs("form",{className:"row",onSubmit:M,children:[d.jsxs(Je,{md:12,className:"form-group",children:[d.jsxs("label",{children:["Title ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:p||"",onChange:R=>m(R.target.value),placeholder:"About title",type:"text"})]}),d.jsxs(Je,{md:6,className:"form-group",children:[d.jsxs("label",{children:["Clients ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:y,onChange:R=>C(R.target.value),placeholder:"Clients count",type:"number"})]}),d.jsxs(Je,{md:6,className:"form-group",children:[d.jsxs("label",{children:["Project ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:_,onChange:R=>x(R.target.value),placeholder:"Project count",type:"number"})]}),d.jsxs(Je,{md:12,className:"form-group",children:[d.jsxs("label",{children:["Brief ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"3",placeholder:"Brief",value:w||"",onChange:R=>b(R.target.value)})]}),d.jsx(Je,{md:12,className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})]})}function vX(t){const{isLoading:r,aboutSetting:i}=He(b=>b.generalSettings),l=nt(),u=[{name:"Dashboard",url:"/bsl/admin"},{name:"Page Settings",url:"/bsl/admin/page-settings"},{name:"About Settings",url:null}],[p,m]=D.useState([]),w=b=>{b.preventDefault()};return D.useEffect(()=>{i&&m(i==null?void 0:i.attributes)},[i]),D.useEffect(()=>{l(wp())},[]),d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"About Settings",url:"/bsl/admin/page-settings/about"}),d.jsx(tn,{list:u}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{className:"card-title",children:"About Section Settings"})}),d.jsx("div",{className:"card-body",children:d.jsxs("div",{className:"form-profile",children:[d.jsx(kX,{SecSetting:i}),d.jsx("div",{className:"row mt-5",children:p&&Array.from(p).map(b=>d.jsx("div",{className:"col-md-6",children:d.jsx(wX,{info:b,handler:w})},Co()))})]})})]})})})})]})}function yX(){const{isLoading:t,generalSetting:r}=He(G=>G.generalSettings),i=nt(),[l,u]=D.useState(""),[p,m]=D.useState(""),[w,b]=D.useState(""),[y,C]=D.useState(""),[_,x]=D.useState(""),[j,M]=D.useState(""),[R,P]=D.useState(""),[B,I]=D.useState(""),[O,H]=D.useState(""),q=G=>{G.preventDefault();let z=new FormData;l?z.append("phone",l):Ee("Phone is required."),w?z.append("mail",w):Ee("Email is required."),y&&z.append("address",y),z.append("whatsapp_number",p),z.append("sub_text",_),z.append("title",j),z.append("contact_sub_text",R),z.append("testi_title",B),z.append("map",O),z.append("type","contact_info"),l&&w&&i(ni(z))},K=()=>{const{contact:G}=r;G&&(u((G==null?void 0:G.phone)||" "),m((G==null?void 0:G.whatsapp_number)||""),b((G==null?void 0:G.mail)||""),C((G==null?void 0:G.address)||" "),x((G==null?void 0:G.sub_text)||""),M((G==null?void 0:G.title)||""),P((G==null?void 0:G.contact_sub_text)||""),I((G==null?void 0:G.testi_title)||""),H((G==null?void 0:G.map)||""))};return D.useEffect(()=>{K()},[r]),t?d.jsx(ar,{}):d.jsx(d.Fragment,{children:d.jsx("div",{className:"col-lg-12 col-sm-12",children:d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"card-header",children:d.jsx("h4",{children:"Contact Information"})}),d.jsx("div",{className:"card-body",children:d.jsx("form",{className:"form-profile",onSubmit:q,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Phone ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:l,onChange:G=>u(G.target.value),placeholder:"Contact Phone Number",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Email ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:w,onChange:G=>b(G.target.value),placeholder:"email",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Address"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"2",placeholder:"Footer details",value:y,onChange:G=>C(G.target.value)})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"WhatsApp Number"}),d.jsx("input",{className:"form-control",value:p,onChange:G=>m(G.target.value),placeholder:"WhatsApp Number (with +88)",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Title"}),d.jsx("input",{className:"form-control",value:j,onChange:G=>M(G.target.value),placeholder:"Title",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Get In Touch Title"}),d.jsx("input",{className:"form-control",value:B,onChange:G=>I(G.target.value),placeholder:"Get In touch title",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Contact Sub Text"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"2",placeholder:"Contact sub text",value:_,onChange:G=>x(G.target.value)})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Get In Touch Sub Text"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"2",placeholder:"Get In Touch Sub Text",value:R,onChange:G=>P(G.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Map"}),d.jsx("textarea",{className:"form-control",name:"textarea",id:"textarea",cols:"30",rows:"4",placeholder:"Map iframe code here.",value:O,onChange:G=>H(G.target.value)})]})}),d.jsx("div",{className:"col-md-12",children:d.jsx("div",{className:"d-flex align-items-center",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})})]})})})]})})})}function CX(t){const r=[{name:"Dashboard",url:"/bsl/admin"},{name:"Page Settings",url:"/bsl/admin/page-settings"},{name:"Contact Settings",url:null}];return d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"About Settings",url:"/bsl/admin/page-settings/contact"}),d.jsx(tn,{list:r}),d.jsx(yX,{})]})}function AX(t){return Ur({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm0-56A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,40Zm0,136a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,216Z"}}]})(t)}function ai({children:t}){const r=D.createRef(),i=D.createRef(),l=()=>{let u=document.querySelectorAll(".btn-group");Array.from(u).map(p=>{p.id!==r.current.id&&(p.classList.remove("show"),p.querySelector(".dropdown-menu").classList.remove("show"))}),r.current.classList.toggle("show"),i.current.classList.toggle("show")};return d.jsxs("div",{id:Co(),ref:r,role:"group",className:"btn-group",children:[d.jsx("button",{"data-toggle":"dropdown",className:"btn btn-primary dropdown-toggle",type:"button",onClick:l,children:d.jsx(AX,{})}),d.jsx("div",{ref:i,className:"dropdown-menu",children:t})]})}function _X(t){return Ur({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}function xX(t){return Ur({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"}}]})(t)}var Ir=function(){return Ir=Object.assign||function(r){for(var i,l=1,u=arguments.length;l<u;l++){i=arguments[l];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(r[p]=i[p])}return r},Ir.apply(this,arguments)};function kw(t,r,i){if(i||arguments.length===2)for(var l=0,u=r.length,p;l<u;l++)(p||!(l in r))&&(p||(p=Array.prototype.slice.call(r,0,l)),p[l]=r[l]);return t.concat(p||Array.prototype.slice.call(r))}var ln="-ms-",_p="-moz-",Pt="-webkit-",TO="comm",Tk="rule",Bx="decl",SX="@import",NO="@keyframes",EX="@layer",jX=Math.abs,Rx=String.fromCharCode,BA=Object.assign;function DX(t,r){return pr(t,0)^45?(((r<<2^pr(t,0))<<2^pr(t,1))<<2^pr(t,2))<<2^pr(t,3):0}function IO(t){return t.trim()}function Vs(t,r){return(t=r.exec(t))?t[0]:t}function ut(t,r,i){return t.replace(r,i)}function zg(t,r){return t.indexOf(r)}function pr(t,r){return t.charCodeAt(r)|0}function Nu(t,r,i){return t.slice(r,i)}function ps(t){return t.length}function MO(t){return t.length}function ip(t,r){return r.push(t),t}function TX(t,r){return t.map(r).join("")}function SM(t,r){return t.filter(function(i){return!Vs(i,r)})}var Nk=1,Iu=1,PO=0,ii=0,Vn=0,Ku="";function Ik(t,r,i,l,u,p,m,w){return{value:t,root:r,parent:i,type:l,props:u,children:p,line:Nk,column:Iu,length:m,return:"",siblings:w}}function Fa(t,r){return BA(Ik("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},r)}function Hd(t){for(;t.root;)t=Fa(t.root,{children:[t]});ip(t,t.siblings)}function NX(){return Vn}function IX(){return Vn=ii>0?pr(Ku,--ii):0,Iu--,Vn===10&&(Iu=1,Nk--),Vn}function Ii(){return Vn=ii<PO?pr(Ku,ii++):0,Iu++,Vn===10&&(Iu=1,Nk++),Vn}function Ic(){return pr(Ku,ii)}function Fg(){return ii}function Mk(t,r){return Nu(Ku,t,r)}function RA(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function MX(t){return Nk=Iu=1,PO=ps(Ku=t),ii=0,[]}function PX(t){return Ku="",t}function Py(t){return IO(Mk(ii-1,zA(t===91?t+2:t===40?t+1:t)))}function LX(t){for(;(Vn=Ic())&&Vn<33;)Ii();return RA(t)>2||RA(Vn)>3?"":" "}function OX(t,r){for(;--r&&Ii()&&!(Vn<48||Vn>102||Vn>57&&Vn<65||Vn>70&&Vn<97););return Mk(t,Fg()+(r<6&&Ic()==32&&Ii()==32))}function zA(t){for(;Ii();)switch(Vn){case t:return ii;case 34:case 39:t!==34&&t!==39&&zA(Vn);break;case 40:t===41&&zA(t);break;case 92:Ii();break}return ii}function BX(t,r){for(;Ii()&&t+Vn!==47+10;)if(t+Vn===42+42&&Ic()===47)break;return"/*"+Mk(r,ii-1)+"*"+Rx(t===47?t:Ii())}function RX(t){for(;!RA(Ic());)Ii();return Mk(t,ii)}function zX(t){return PX($g("",null,null,null,[""],t=MX(t),0,[0],t))}function $g(t,r,i,l,u,p,m,w,b){for(var y=0,C=0,_=m,x=0,j=0,M=0,R=1,P=1,B=1,I=0,O="",H=u,q=p,K=l,G=O;P;)switch(M=I,I=Ii()){case 40:if(M!=108&&pr(G,_-1)==58){zg(G+=ut(Py(I),"&","&\f"),"&\f")!=-1&&(B=-1);break}case 34:case 39:case 91:G+=Py(I);break;case 9:case 10:case 13:case 32:G+=LX(M);break;case 92:G+=OX(Fg()-1,7);continue;case 47:switch(Ic()){case 42:case 47:ip(FX(BX(Ii(),Fg()),r,i,b),b);break;default:G+="/"}break;case 123*R:w[y++]=ps(G)*B;case 125*R:case 59:case 0:switch(I){case 0:case 125:P=0;case 59+C:B==-1&&(G=ut(G,/\f/g,"")),j>0&&ps(G)-_&&ip(j>32?jM(G+";",l,i,_-1,b):jM(ut(G," ","")+";",l,i,_-2,b),b);break;case 59:G+=";";default:if(ip(K=EM(G,r,i,y,C,u,w,O,H=[],q=[],_,p),p),I===123)if(C===0)$g(G,r,K,K,H,p,_,w,q);else switch(x===99&&pr(G,3)===110?100:x){case 100:case 108:case 109:case 115:$g(t,K,K,l&&ip(EM(t,K,K,0,0,u,w,O,u,H=[],_,q),q),u,q,_,w,l?H:q);break;default:$g(G,K,K,K,[""],q,0,w,q)}}y=C=j=0,R=B=1,O=G="",_=m;break;case 58:_=1+ps(G),j=M;default:if(R<1){if(I==123)--R;else if(I==125&&R++==0&&IX()==125)continue}switch(G+=Rx(I),I*R){case 38:B=C>0?1:(G+="\f",-1);break;case 44:w[y++]=(ps(G)-1)*B,B=1;break;case 64:Ic()===45&&(G+=Py(Ii())),x=Ic(),C=_=ps(O=G+=RX(Fg())),I++;break;case 45:M===45&&ps(G)==2&&(R=0)}}return p}function EM(t,r,i,l,u,p,m,w,b,y,C,_){for(var x=u-1,j=u===0?p:[""],M=MO(j),R=0,P=0,B=0;R<l;++R)for(var I=0,O=Nu(t,x+1,x=jX(P=m[R])),H=t;I<M;++I)(H=IO(P>0?j[I]+" "+O:ut(O,/&\f/g,j[I])))&&(b[B++]=H);return Ik(t,r,i,u===0?Tk:w,b,y,C,_)}function FX(t,r,i,l){return Ik(t,r,i,TO,Rx(NX()),Nu(t,2,-2),0,l)}function jM(t,r,i,l,u){return Ik(t,r,i,Bx,Nu(t,0,l),Nu(t,l+1,-1),l,u)}function LO(t,r,i){switch(DX(t,r)){case 5103:return Pt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pt+t+t;case 4789:return _p+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+t+_p+t+ln+t+t;case 5936:switch(pr(t,r+11)){case 114:return Pt+t+ln+ut(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Pt+t+ln+ut(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Pt+t+ln+ut(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Pt+t+ln+t+t;case 6165:return Pt+t+ln+"flex-"+t+t;case 5187:return Pt+t+ut(t,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+ln+"flex-$1$2")+t;case 5443:return Pt+t+ln+"flex-item-"+ut(t,/flex-|-self/g,"")+(Vs(t,/flex-|baseline/)?"":ln+"grid-row-"+ut(t,/flex-|-self/g,""))+t;case 4675:return Pt+t+ln+"flex-line-pack"+ut(t,/align-content|flex-|-self/g,"")+t;case 5548:return Pt+t+ln+ut(t,"shrink","negative")+t;case 5292:return Pt+t+ln+ut(t,"basis","preferred-size")+t;case 6060:return Pt+"box-"+ut(t,"-grow","")+Pt+t+ln+ut(t,"grow","positive")+t;case 4554:return Pt+ut(t,/([^-])(transform)/g,"$1"+Pt+"$2")+t;case 6187:return ut(ut(ut(t,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),t,"")+t;case 5495:case 3959:return ut(t,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return ut(ut(t,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+ln+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pt+t+t;case 4200:if(!Vs(t,/flex-|baseline/))return ln+"grid-column-align"+Nu(t,r)+t;break;case 2592:case 3360:return ln+ut(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,u){return r=u,Vs(l.props,/grid-\w+-end/)})?~zg(t+(i=i[r].value),"span")?t:ln+ut(t,"-start","")+t+ln+"grid-row-span:"+(~zg(i,"span")?Vs(i,/\d+/):+Vs(i,/\d+/)-+Vs(t,/\d+/))+";":ln+ut(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return Vs(l.props,/grid-\w+-start/)})?t:ln+ut(ut(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ut(t,/(.+)-inline(.+)/,Pt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ps(t)-1-r>6)switch(pr(t,r+1)){case 109:if(pr(t,r+4)!==45)break;case 102:return ut(t,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+_p+(pr(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~zg(t,"stretch")?LO(ut(t,"stretch","fill-available"),r,i)+t:t}break;case 5152:case 5920:return ut(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,p,m,w,b,y){return ln+u+":"+p+y+(m?ln+u+"-span:"+(w?b:+b-+p)+y:"")+t});case 4949:if(pr(t,r+6)===121)return ut(t,":",":"+Pt)+t;break;case 6444:switch(pr(t,pr(t,14)===45?18:11)){case 120:return ut(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pt+(pr(t,14)===45?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+ln+"$2box$3")+t;case 100:return ut(t,":",":"+ln)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(t,"scroll-","scroll-snap-")+t}return t}function vw(t,r){for(var i="",l=0;l<t.length;l++)i+=r(t[l],l,t,r)||"";return i}function $X(t,r,i,l){switch(t.type){case EX:if(t.children.length)break;case SX:case Bx:return t.return=t.return||t.value;case TO:return"";case NO:return t.return=t.value+"{"+vw(t.children,l)+"}";case Tk:if(!ps(t.value=t.props.join(",")))return""}return ps(i=vw(t.children,l))?t.return=t.value+"{"+i+"}":""}function HX(t){var r=MO(t);return function(i,l,u,p){for(var m="",w=0;w<r;w++)m+=t[w](i,l,u,p)||"";return m}}function VX(t){return function(r){r.root||(r=r.return)&&t(r)}}function UX(t,r,i,l){if(t.length>-1&&!t.return)switch(t.type){case Bx:t.return=LO(t.value,t.length,i);return;case NO:return vw([Fa(t,{value:ut(t.value,"@","@"+Pt)})],l);case Tk:if(t.length)return TX(i=t.props,function(u){switch(Vs(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hd(Fa(t,{props:[ut(u,/:(read-\w+)/,":"+_p+"$1")]})),Hd(Fa(t,{props:[u]})),BA(t,{props:SM(i,l)});break;case"::placeholder":Hd(Fa(t,{props:[ut(u,/:(plac\w+)/,":"+Pt+"input-$1")]})),Hd(Fa(t,{props:[ut(u,/:(plac\w+)/,":"+_p+"$1")]})),Hd(Fa(t,{props:[ut(u,/:(plac\w+)/,ln+"input-$1")]})),Hd(Fa(t,{props:[u]})),BA(t,{props:SM(i,l)});break}return""})}}var WX={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mu=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",zx=typeof window<"u"&&"HTMLElement"in window,qX=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Pk=Object.freeze([]),Pu=Object.freeze({});function GX(t,r,i){return i===void 0&&(i=Pu),t.theme!==i.theme&&t.theme||r||i.theme}var OO=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),KX=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YX=/(^-|-$)/g;function DM(t){return t.replace(KX,"-").replace(YX,"")}var QX=/(a)(d)/gi,TM=function(t){return String.fromCharCode(t+(t>25?39:97))};function FA(t){var r,i="";for(r=Math.abs(t);r>52;r=r/52|0)i=TM(r%52)+i;return(TM(r%52)+i).replace(QX,"$1-$2")}var Ly,ou=function(t,r){for(var i=r.length;i;)t=33*t^r.charCodeAt(--i);return t},BO=function(t){return ou(5381,t)};function ZX(t){return FA(BO(t)>>>0)}function JX(t){return t.displayName||t.name||"Component"}function Oy(t){return typeof t=="string"&&!0}var RO=typeof Symbol=="function"&&Symbol.for,zO=RO?Symbol.for("react.memo"):60115,XX=RO?Symbol.for("react.forward_ref"):60112,eee={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tee={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},FO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nee=((Ly={})[XX]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ly[zO]=FO,Ly);function NM(t){return("type"in(r=t)&&r.type.$$typeof)===zO?FO:"$$typeof"in t?nee[t.$$typeof]:eee;var r}var ree=Object.defineProperty,oee=Object.getOwnPropertyNames,IM=Object.getOwnPropertySymbols,iee=Object.getOwnPropertyDescriptor,see=Object.getPrototypeOf,MM=Object.prototype;function $O(t,r,i){if(typeof r!="string"){if(MM){var l=see(r);l&&l!==MM&&$O(t,l,i)}var u=oee(r);IM&&(u=u.concat(IM(r)));for(var p=NM(t),m=NM(r),w=0;w<u.length;++w){var b=u[w];if(!(b in tee||i&&i[b]||m&&b in m||p&&b in p)){var y=iee(r,b);try{ree(t,b,y)}catch{}}}}return t}function $c(t){return typeof t=="function"}function Fx(t){return typeof t=="object"&&"styledComponentId"in t}function jc(t,r){return t&&r?"".concat(t," ").concat(r):t||r||""}function PM(t,r){if(t.length===0)return"";for(var i=t[0],l=1;l<t.length;l++)i+=r?r+t[l]:t[l];return i}function Xp(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $A(t,r,i){if(i===void 0&&(i=!1),!i&&!Xp(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var l=0;l<r.length;l++)t[l]=$A(t[l],r[l]);else if(Xp(r))for(var l in r)t[l]=$A(t[l],r[l]);return t}function $x(t,r){Object.defineProperty(t,"toString",{value:r})}function Hc(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var aee=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return t.prototype.indexOfGroup=function(r){for(var i=0,l=0;l<r;l++)i+=this.groupSizes[l];return i},t.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,p=u;r>=p;)if((p<<=1)<0)throw Hc(16,"".concat(r));this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(var m=u;m<p;m++)this.groupSizes[m]=0}for(var w=this.indexOfGroup(r+1),b=(m=0,i.length);m<b;m++)this.tag.insertRule(w,i[m])&&(this.groupSizes[r]++,w++)},t.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],l=this.indexOfGroup(r),u=l+i;this.groupSizes[r]=0;for(var p=l;p<u;p++)this.tag.deleteRule(l)}},t.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var l=this.groupSizes[r],u=this.indexOfGroup(r),p=u+l,m=u;m<p;m++)i+="".concat(this.tag.getRule(m)).concat(`/*!sc*/
`);return i},t}(),Hg=new Map,yw=new Map,By=1,ng=function(t){if(Hg.has(t))return Hg.get(t);for(;yw.has(By);)By++;var r=By++;return Hg.set(t,r),yw.set(r,t),r},lee=function(t,r){Hg.set(t,r),yw.set(r,t)},cee="style[".concat(Mu,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),dee=new RegExp("^".concat(Mu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uee=function(t,r,i){for(var l,u=i.split(","),p=0,m=u.length;p<m;p++)(l=u[p])&&t.registerName(r,l)},hee=function(t,r){for(var i,l=((i=r.textContent)!==null&&i!==void 0?i:"").split(`/*!sc*/
`),u=[],p=0,m=l.length;p<m;p++){var w=l[p].trim();if(w){var b=w.match(dee);if(b){var y=0|parseInt(b[1],10),C=b[2];y!==0&&(lee(C,y),uee(t,C,b[3]),t.getTag().insertRules(y,u)),u.length=0}else u.push(w)}}};function pee(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var HO=function(t){var r=document.head,i=t||r,l=document.createElement("style"),u=function(w){var b=Array.from(w.querySelectorAll("style[".concat(Mu,"]")));return b[b.length-1]}(i),p=u!==void 0?u.nextSibling:null;l.setAttribute(Mu,"active"),l.setAttribute("data-styled-version","6.0.7");var m=pee();return m&&l.setAttribute("nonce",m),i.insertBefore(l,p),l},fee=function(){function t(r){this.element=HO(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,u=0,p=l.length;u<p;u++){var m=l[u];if(m.ownerNode===i)return m}throw Hc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},t}(),mee=function(){function t(r){this.element=HO(r),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[r]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),gee=function(){function t(r){this.rules=[],this.length=0}return t.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},t.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),LM=zx,bee={isServer:!zx,useCSSOMInjection:!qX},VO=function(){function t(r,i,l){r===void 0&&(r=Pu),i===void 0&&(i={});var u=this;this.options=Ir(Ir({},bee),r),this.gs=i,this.names=new Map(l),this.server=!!r.isServer,!this.server&&zx&&LM&&(LM=!1,function(p){for(var m=document.querySelectorAll(cee),w=0,b=m.length;w<b;w++){var y=m[w];y&&y.getAttribute(Mu)!=="active"&&(hee(p,y),y.parentNode&&y.parentNode.removeChild(y))}}(this)),$x(this,function(){return function(p){for(var m=p.getTag(),w=m.length,b="",y=function(_){var x=function(B){return yw.get(B)}(_);if(x===void 0)return"continue";var j=p.names.get(x),M=m.getGroup(_);if(j===void 0||M.length===0)return"continue";var R="".concat(Mu,".g").concat(_,'[id="').concat(x,'"]'),P="";j!==void 0&&j.forEach(function(B){B.length>0&&(P+="".concat(B,","))}),b+="".concat(M).concat(R,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},C=0;C<w;C++)y(C);return b}(u)})}return t.registerId=function(r){return ng(r)},t.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new t(Ir(Ir({},this.options),r),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var l=i.useCSSOMInjection,u=i.target;return i.isServer?new gee(u):l?new fee(u):new mee(u)}(this.options),new aee(r)));var r},t.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},t.prototype.registerName=function(r,i){if(ng(r),this.names.has(r))this.names.get(r).add(i);else{var l=new Set;l.add(i),this.names.set(r,l)}},t.prototype.insertRules=function(r,i,l){this.registerName(r,i),this.getTag().insertRules(ng(r),l)},t.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.prototype.clearRules=function(r){this.getTag().clearGroup(ng(r)),this.clearNames(r)},t.prototype.clearTag=function(){this.tag=void 0},t}(),wee=/&/g,kee=/^\s*\/\/.*$/gm;function UO(t,r){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(l){return"".concat(r," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=UO(i.children,r)),i})}function vee(t){var r,i,l,u=t===void 0?Pu:t,p=u.options,m=p===void 0?Pu:p,w=u.plugins,b=w===void 0?Pk:w,y=function(x,j,M){return M===i||M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(r):x},C=b.slice();C.push(function(x){x.type===Tk&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(wee,i).replace(l,y))}),m.prefix&&C.push(UX),C.push($X);var _=function(x,j,M,R){j===void 0&&(j=""),M===void 0&&(M=""),R===void 0&&(R="&"),r=R,i=j,l=new RegExp("\\".concat(i,"\\b"),"g");var P=x.replace(kee,""),B=zX(M||j?"".concat(M," ").concat(j," { ").concat(P," }"):P);m.namespace&&(B=UO(B,m.namespace));var I=[];return vw(B,HX(C.concat(VX(function(O){return I.push(O)})))),I};return _.hash=b.length?b.reduce(function(x,j){return j.name||Hc(15),ou(x,j.name)},5381).toString():"",_}var yee=new VO,HA=vee(),WO=_e.createContext({shouldForwardProp:void 0,styleSheet:yee,stylis:HA});WO.Consumer;_e.createContext(void 0);function OM(){return D.useContext(WO)}var Cee=function(){function t(r,i){var l=this;this.inject=function(u,p){p===void 0&&(p=HA);var m=l.name+p.hash;u.hasNameForId(l.id,m)||u.insertRules(l.id,m,p(l.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,$x(this,function(){throw Hc(12,String(l.name))})}return t.prototype.getName=function(r){return r===void 0&&(r=HA),this.name+r.hash},t}(),Aee=function(t){return t>="A"&&t<="Z"};function BM(t){for(var r="",i=0;i<t.length;i++){var l=t[i];if(i===1&&l==="-"&&t[0]==="-")return t;Aee(l)?r+="-"+l.toLowerCase():r+=l}return r.startsWith("ms-")?"-"+r:r}var qO=function(t){return t==null||t===!1||t===""},GO=function(t){var r,i,l=[];for(var u in t){var p=t[u];t.hasOwnProperty(u)&&!qO(p)&&(Array.isArray(p)&&p.isCss||$c(p)?l.push("".concat(BM(u),":"),p,";"):Xp(p)?l.push.apply(l,kw(kw(["".concat(u," {")],GO(p),!1),["}"],!1)):l.push("".concat(BM(u),": ").concat((r=u,(i=p)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in WX||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function Mc(t,r,i,l){if(qO(t))return[];if(Fx(t))return[".".concat(t.styledComponentId)];if($c(t)){if(!$c(p=t)||p.prototype&&p.prototype.isReactComponent||!r)return[t];var u=t(r);return Mc(u,r,i,l)}var p;return t instanceof Cee?i?(t.inject(i,l),[t.getName(l)]):[t]:Xp(t)?GO(t):Array.isArray(t)?Array.prototype.concat.apply(Pk,t.map(function(m){return Mc(m,r,i,l)})):[t.toString()]}function _ee(t){for(var r=0;r<t.length;r+=1){var i=t[r];if($c(i)&&!Fx(i))return!1}return!0}var xee=BO("6.0.7"),See=function(){function t(r,i,l){this.rules=r,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&_ee(r),this.componentId=i,this.baseHash=ou(xee,i),this.baseStyle=l,VO.registerId(i)}return t.prototype.generateAndInjectStyles=function(r,i,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))u=jc(u,this.staticRulesId);else{var p=PM(Mc(this.rules,r,i,l)),m=FA(ou(this.baseHash,p)>>>0);if(!i.hasNameForId(this.componentId,m)){var w=l(p,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,w)}u=jc(u,m),this.staticRulesId=m}else{for(var b=ou(this.baseHash,l.hash),y="",C=0;C<this.rules.length;C++){var _=this.rules[C];if(typeof _=="string")y+=_;else if(_){var x=PM(Mc(_,r,i,l));b=ou(b,x),y+=x}}if(y){var j=FA(b>>>0);i.hasNameForId(this.componentId,j)||i.insertRules(this.componentId,j,l(y,".".concat(j),void 0,this.componentId)),u=jc(u,j)}}return u},t}(),Cw=_e.createContext(void 0);Cw.Consumer;function Eee(t){var r=_e.useContext(Cw),i=D.useMemo(function(){return function(l,u){if(!l)throw Hc(14);if($c(l)){var p=l(u);return p}if(Array.isArray(l)||typeof l!="object")throw Hc(8);return u?Ir(Ir({},u),l):l}(t.theme,r)},[t.theme,r]);return t.children?_e.createElement(Cw.Provider,{value:i},t.children):null}var Ry={};function jee(t,r,i){var l=Fx(t),u=t,p=!Oy(t),m=r.attrs,w=m===void 0?Pk:m,b=r.componentId,y=b===void 0?function(O,H){var q=typeof O!="string"?"sc":DM(O);Ry[q]=(Ry[q]||0)+1;var K="".concat(q,"-").concat(ZX("6.0.7"+q+Ry[q]));return H?"".concat(H,"-").concat(K):K}(r.displayName,r.parentComponentId):b,C=r.displayName;C===void 0&&function(O){return Oy(O)?"styled.".concat(O):"Styled(".concat(JX(O),")")}(t);var _=r.displayName&&r.componentId?"".concat(DM(r.displayName),"-").concat(r.componentId):r.componentId||y,x=l&&u.attrs?u.attrs.concat(w).filter(Boolean):w,j=r.shouldForwardProp;if(l&&u.shouldForwardProp){var M=u.shouldForwardProp;if(r.shouldForwardProp){var R=r.shouldForwardProp;j=function(O,H){return M(O,H)&&R(O,H)}}else j=M}var P=new See(i,_,l?u.componentStyle:void 0);function B(O,H){return function(q,K,G){var z=q.attrs,te=q.componentStyle,se=q.defaultProps,ge=q.foldedComponentIds,ce=q.styledComponentId,oe=q.target,re=_e.useContext(Cw),J=OM(),ne=q.shouldForwardProp||J.shouldForwardProp,fe=function(le,ye,qe){for(var Ye,Be=Ir(Ir({},ye),{className:void 0,theme:qe}),Mt=0;Mt<le.length;Mt+=1){var pt=$c(Ye=le[Mt])?Ye(Be):Ye;for(var gt in pt)Be[gt]=gt==="className"?jc(Be[gt],pt[gt]):gt==="style"?Ir(Ir({},Be[gt]),pt[gt]):pt[gt]}return ye.className&&(Be.className=jc(Be.className,ye.className)),Be}(z,K,GX(K,re,se)||Pu),ee=fe.as||oe,ie={};for(var Ce in fe)fe[Ce]===void 0||Ce[0]==="$"||Ce==="as"||Ce==="theme"||(Ce==="forwardedAs"?ie.as=fe.forwardedAs:ne&&!ne(Ce,ee)||(ie[Ce]=fe[Ce]));var Me=function(le,ye){var qe=OM(),Ye=le.generateAndInjectStyles(ye,qe.styleSheet,qe.stylis);return Ye}(te,fe),we=jc(ge,ce);return Me&&(we+=" "+Me),fe.className&&(we+=" "+fe.className),ie[Oy(ee)&&!OO.has(ee)?"class":"className"]=we,ie.ref=G,D.createElement(ee,ie)}(I,O,H)}var I=_e.forwardRef(B);return I.attrs=x,I.componentStyle=P,I.shouldForwardProp=j,I.foldedComponentIds=l?jc(u.foldedComponentIds,u.styledComponentId):"",I.styledComponentId=_,I.target=l?u.target:t,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=l?function(H){for(var q=[],K=1;K<arguments.length;K++)q[K-1]=arguments[K];for(var G=0,z=q;G<z.length;G++)$A(H,z[G],!0);return H}({},u.defaultProps,O):O}}),$x(I,function(){return".".concat(I.styledComponentId)}),p&&$O(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function RM(t,r){for(var i=[t[0]],l=0,u=r.length;l<u;l+=1)i.push(r[l],t[l+1]);return i}var zM=function(t){return Object.assign(t,{isCss:!0})};function sr(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if($c(t)||Xp(t)){var l=t;return zM(Mc(RM(Pk,kw([l],r,!0))))}var u=t;return r.length===0&&u.length===1&&typeof u[0]=="string"?Mc(u):zM(Mc(RM(u,r)))}function VA(t,r,i){if(i===void 0&&(i=Pu),!r)throw Hc(1,r);var l=function(u){for(var p=[],m=1;m<arguments.length;m++)p[m-1]=arguments[m];return t(r,i,sr.apply(void 0,kw([u],p,!1)))};return l.attrs=function(u){return VA(t,r,Ir(Ir({},i),{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return VA(t,r,Ir(Ir({},i),u))},l}var KO=function(t){return VA(jee,t)},mt=KO;OO.forEach(function(t){mt[t]=KO(t)});var ul;function Lu(t,r){return t[r]}function UA(t,r){return r.split(".").reduce((i,l)=>{const u=l.match(/[^\]\\[.]+/g);if(u&&u.length>1)for(let p=0;p<u.length;p++)return i[u[p]][u[p+1]];return i[l]},t)}function Dee(t=[],r,i=0){return[...t.slice(0,i),r,...t.slice(i)]}function Tee(t=[],r,i="id"){const l=t.slice(),u=Lu(r,i);return u?l.splice(l.findIndex(p=>Lu(p,i)===u),1):l.splice(l.findIndex(p=>p===r),1),l}function FM(t){return t.map((r,i)=>{const l=Object.assign(Object.assign({},r),{sortable:r.sortable||!!r.sortFunction||void 0});return r.id||(l.id=i+1),l})}function xp(t,r){return Math.ceil(t/r)}function zy(t,r){return Math.min(t,r)}(function(t){t.ASC="asc",t.DESC="desc"})(ul||(ul={}));const nr=()=>null;function YO(t,r=[],i=[]){let l={},u=[...i];return r.length&&r.forEach(p=>{if(!p.when||typeof p.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');p.when(t)&&(l=p.style||{},p.classNames&&(u=[...u,...p.classNames]),typeof p.style=="function"&&(l=p.style(t)||{}))}),{style:l,classNames:u.join(" ")}}function Vg(t,r=[],i="id"){const l=Lu(t,i);return l?r.some(u=>Lu(u,i)===l):r.some(u=>u===t)}function rg(t,r){return r?t.findIndex(i=>Sp(i.id,r)):-1}function Sp(t,r){return t==r}function Nee(t,r){const i=!t.toggleOnSelectedRowsChange;switch(r.type){case"SELECT_ALL_ROWS":{const{keyField:l,rows:u,rowCount:p,mergeSelections:m}=r,w=!t.allSelected,b=!t.toggleOnSelectedRowsChange;if(m){const y=w?[...t.selectedRows,...u.filter(C=>!Vg(C,t.selectedRows,l))]:t.selectedRows.filter(C=>!Vg(C,u,l));return Object.assign(Object.assign({},t),{allSelected:w,selectedCount:y.length,selectedRows:y,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},t),{allSelected:w,selectedCount:w?p:0,selectedRows:w?u:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:l,row:u,isSelected:p,rowCount:m,singleSelect:w}=r;return w?p?Object.assign(Object.assign({},t),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:i}):Object.assign(Object.assign({},t),{selectedCount:1,allSelected:!1,selectedRows:[u],toggleOnSelectedRowsChange:i}):p?Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length>0?t.selectedRows.length-1:0,allSelected:!1,selectedRows:Tee(t.selectedRows,u,l),toggleOnSelectedRowsChange:i}):Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length+1,allSelected:t.selectedRows.length+1===m,selectedRows:Dee(t.selectedRows,u),toggleOnSelectedRowsChange:i})}case"SELECT_MULTIPLE_ROWS":{const{keyField:l,selectedRows:u,totalRows:p,mergeSelections:m}=r;if(m){const w=[...t.selectedRows,...u.filter(b=>!Vg(b,t.selectedRows,l))];return Object.assign(Object.assign({},t),{selectedCount:w.length,allSelected:!1,selectedRows:w,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},t),{selectedCount:u.length,allSelected:u.length===p,selectedRows:u,toggleOnSelectedRowsChange:i})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:l}=r;return Object.assign(Object.assign({},t),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:l})}case"SORT_CHANGE":{const{sortDirection:l,selectedColumn:u,clearSelectedOnSort:p}=r;return Object.assign(Object.assign(Object.assign({},t),{selectedColumn:u,sortDirection:l,currentPage:1}),p&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:i})}case"CHANGE_PAGE":{const{page:l,paginationServer:u,visibleOnly:p,persistSelectedOnPageChange:m}=r,w=u&&m,b=u&&!m||p;return Object.assign(Object.assign(Object.assign(Object.assign({},t),{currentPage:l}),w&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:i})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:l,page:u}=r;return Object.assign(Object.assign({},t),{currentPage:u,rowsPerPage:l})}}}const Iee=sr`
	pointer-events: none;
	opacity: 0.4;
`,Mee=mt.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:t})=>t&&Iee};
	${({theme:t})=>t.table.style};
`,Pee=sr`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,Lee=mt.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:t})=>t&&Pee};
	${({theme:t})=>t.head.style};
`,Oee=mt.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:t})=>t.headRow.style};
	${({$dense:t,theme:r})=>t&&r.headRow.denseStyle};
`,QO=(t,...r)=>sr`
		@media screen and (max-width: ${599}px) {
			${sr(t,...r)}
		}
	`,Bee=(t,...r)=>sr`
		@media screen and (max-width: ${959}px) {
			${sr(t,...r)}
		}
	`,Ree=(t,...r)=>sr`
		@media screen and (max-width: ${1280}px) {
			${sr(t,...r)}
		}
	`,zee=t=>(r,...i)=>sr`
				@media screen and (max-width: ${t}px) {
					${sr(r,...i)}
				}
			`,Yu=mt.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:t,$headCell:r})=>t[r?"headCells":"cells"].style};
	${({$noPadding:t})=>t&&"padding: 0"};
`,ZO=mt(Yu)`
	flex-grow: ${({button:t,grow:r})=>r===0||t?0:r||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:t})=>t||"100%"};
	min-width: ${({minWidth:t})=>t||"100px"};
	${({width:t})=>t&&sr`
			min-width: ${t};
			max-width: ${t};
		`};
	${({right:t})=>t&&"justify-content: flex-end"};
	${({button:t,center:r})=>(r||t)&&"justify-content: center"};
	${({compact:t,button:r})=>(t||r)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:t})=>t&&t==="sm"&&QO`
    display: none;
  `};
	${({hide:t})=>t&&t==="md"&&Bee`
    display: none;
  `};
	${({hide:t})=>t&&t==="lg"&&Ree`
    display: none;
  `};
	${({hide:t})=>t&&Number.isInteger(t)&&zee(t)`
    display: none;
  `};
`,Fee=sr`
	div:first-child {
		white-space: ${({$wrapCell:t})=>t?"normal":"nowrap"};
		overflow: ${({$allowOverflow:t})=>t?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,$ee=mt(ZO).attrs(t=>({style:t.style}))`
	${({$renderAsCell:t})=>!t&&Fee};
	${({theme:t,$isDragging:r})=>r&&t.cells.draggingStyle};
	${({$cellStyle:t})=>t};
`;var Hee=D.memo(function({id:t,column:r,row:i,rowIndex:l,dataTag:u,isDragging:p,onDragStart:m,onDragOver:w,onDragEnd:b,onDragEnter:y,onDragLeave:C}){const{style:_,classNames:x}=YO(i,r.conditionalCellStyles,["rdt_TableCell"]);return D.createElement($ee,{id:t,"data-column-id":r.id,role:"cell",className:x,"data-tag":u,$cellStyle:r.style,$renderAsCell:!!r.cell,$allowOverflow:r.allowOverflow,button:r.button,center:r.center,compact:r.compact,grow:r.grow,hide:r.hide,maxWidth:r.maxWidth,minWidth:r.minWidth,right:r.right,width:r.width,$wrapCell:r.wrap,style:_,$isDragging:p,onDragStart:m,onDragOver:w,onDragEnd:b,onDragEnter:y,onDragLeave:C},!r.cell&&D.createElement("div",{"data-tag":u},function(j,M,R,P){if(!M)return null;if(typeof M!="string"&&typeof M!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return R&&typeof R=="function"?R(j,P):M&&typeof M=="function"?M(j,P):UA(j,M)}(i,r.selector,r.format,l)),r.cell&&r.cell(i,l,r,t))}),JO=D.memo(function({name:t,component:r="input",componentOptions:i={style:{}},indeterminate:l=!1,checked:u=!1,disabled:p=!1,onClick:m=nr}){const w=r,b=w!=="input"?i.style:(C=>Object.assign(Object.assign({fontSize:"18px"},!C&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(p),y=D.useMemo(()=>function(C,..._){let x;return Object.keys(C).map(j=>C[j]).forEach((j,M)=>{typeof j=="function"&&(x=Object.assign(Object.assign({},C),{[Object.keys(C)[M]]:j(..._)}))}),x||C}(i,l),[i,l]);return D.createElement(w,Object.assign({type:"checkbox",ref:C=>{C&&(C.indeterminate=l)},style:b,onClick:p?nr:m,name:t,"aria-label":t,checked:u,disabled:p},y,{onChange:nr}))});const Vee=mt(Yu)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Uee({name:t,keyField:r,row:i,rowCount:l,selected:u,selectableRowsComponent:p,selectableRowsComponentProps:m,selectableRowsSingle:w,selectableRowDisabled:b,onSelectedRow:y}){const C=!(!b||!b(i));return D.createElement(Vee,{onClick:_=>_.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},D.createElement(JO,{name:t,component:p,componentOptions:m,checked:u,"aria-checked":u,onClick:()=>{y({type:"SELECT_SINGLE_ROW",row:i,isSelected:u,keyField:r,rowCount:l,singleSelect:w})},disabled:C}))}const Wee=mt.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:t})=>t.expanderButton.style};
`;function qee({disabled:t=!1,expanded:r=!1,expandableIcon:i,id:l,row:u,onToggled:p}){const m=r?i.expanded:i.collapsed;return D.createElement(Wee,{"aria-disabled":t,onClick:()=>p&&p(u),"data-testid":`expander-button-${l}`,disabled:t,"aria-label":r?"Collapse Row":"Expand Row",role:"button",type:"button"},m)}const Gee=mt(Yu)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:t})=>t.expanderCell.style};
`;function Kee({row:t,expanded:r=!1,expandableIcon:i,id:l,onToggled:u,disabled:p=!1}){return D.createElement(Gee,{onClick:m=>m.stopPropagation(),$noPadding:!0},D.createElement(qee,{id:l,row:t,expanded:r,expandableIcon:i,disabled:p,onToggled:u}))}const Yee=mt.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.expanderRow.style};
	${({$extendedRowStyle:t})=>t};
`;var Qee=D.memo(function({data:t,ExpanderComponent:r,expanderComponentProps:i,extendedRowStyle:l,extendedClassNames:u}){const p=["rdt_ExpanderRow",...u.split(" ").filter(m=>m!=="rdt_TableRow")].join(" ");return D.createElement(Yee,{className:p,$extendedRowStyle:l},D.createElement(r,Object.assign({data:t},i)))}),Aw,WA,$M;(function(t){t.LTR="ltr",t.RTL="rtl",t.AUTO="auto"})(Aw||(Aw={})),function(t){t.LEFT="left",t.RIGHT="right",t.CENTER="center"}(WA||(WA={})),function(t){t.SM="sm",t.MD="md",t.LG="lg"}($M||($M={}));const Zee=sr`
	&:hover {
		${({$highlightOnHover:t,theme:r})=>t&&r.rows.highlightOnHoverStyle};
	}
`,Jee=sr`
	&:hover {
		cursor: pointer;
	}
`,Xee=mt.div.attrs(t=>({style:t.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.rows.style};
	${({$dense:t,theme:r})=>t&&r.rows.denseStyle};
	${({$striped:t,theme:r})=>t&&r.rows.stripedStyle};
	${({$highlightOnHover:t})=>t&&Zee};
	${({$pointerOnHover:t})=>t&&Jee};
	${({$selected:t,theme:r})=>t&&r.rows.selectedHighlightStyle};
`;function ete({columns:t=[],conditionalRowStyles:r=[],defaultExpanded:i=!1,defaultExpanderDisabled:l=!1,dense:u=!1,expandableIcon:p,expandableRows:m=!1,expandableRowsComponent:w,expandableRowsComponentProps:b,expandableRowsHideExpander:y,expandOnRowClicked:C=!1,expandOnRowDoubleClicked:_=!1,highlightOnHover:x=!1,id:j,expandableInheritConditionalStyles:M,keyField:R,onRowClicked:P=nr,onRowDoubleClicked:B=nr,onRowMouseEnter:I=nr,onRowMouseLeave:O=nr,onRowExpandToggled:H=nr,onSelectedRow:q=nr,pointerOnHover:K=!1,row:G,rowCount:z,rowIndex:te,selectableRowDisabled:se=null,selectableRows:ge=!1,selectableRowsComponent:ce,selectableRowsComponentProps:oe,selectableRowsHighlight:re=!1,selectableRowsSingle:J=!1,selected:ne,striped:fe=!1,draggingColumnId:ee,onDragStart:ie,onDragOver:Ce,onDragEnd:Me,onDragEnter:we,onDragLeave:le}){const[ye,qe]=D.useState(i);D.useEffect(()=>{qe(i)},[i]);const Ye=D.useCallback(()=>{qe(!ye),H(!ye,G)},[ye,H,G]),Be=K||m&&(C||_),Mt=D.useCallback(lt=>{lt.target&&lt.target.getAttribute("data-tag")==="allowRowEvents"&&(P(G,lt),!l&&m&&C&&Ye())},[l,C,m,Ye,P,G]),pt=D.useCallback(lt=>{lt.target&&lt.target.getAttribute("data-tag")==="allowRowEvents"&&(B(G,lt),!l&&m&&_&&Ye())},[l,_,m,Ye,B,G]),gt=D.useCallback(lt=>{I(G,lt)},[I,G]),At=D.useCallback(lt=>{O(G,lt)},[O,G]),jt=Lu(G,R),{style:Le,classNames:Ie}=YO(G,r,["rdt_TableRow"]),ke=re&&ne,he=M?Le:{},et=fe&&te%2==0;return D.createElement(D.Fragment,null,D.createElement(Xee,{id:`row-${j}`,role:"row",$striped:et,$highlightOnHover:x,$pointerOnHover:!l&&Be,$dense:u,onClick:Mt,onDoubleClick:pt,onMouseEnter:gt,onMouseLeave:At,className:Ie,$selected:ke,style:Le},ge&&D.createElement(Uee,{name:`select-row-${jt}`,keyField:R,row:G,rowCount:z,selected:ne,selectableRowsComponent:ce,selectableRowsComponentProps:oe,selectableRowDisabled:se,selectableRowsSingle:J,onSelectedRow:q}),m&&!y&&D.createElement(Kee,{id:jt,expandableIcon:p,expanded:ye,row:G,onToggled:Ye,disabled:l}),t.map(lt=>lt.omit?null:D.createElement(Hee,{id:`cell-${lt.id}-${jt}`,key:`cell-${lt.id}-${jt}`,dataTag:lt.ignoreRowClick||lt.button?null:"allowRowEvents",column:lt,row:G,rowIndex:te,isDragging:Sp(ee,lt.id),onDragStart:ie,onDragOver:Ce,onDragEnd:Me,onDragEnter:we,onDragLeave:le}))),m&&ye&&D.createElement(Qee,{key:`expander-${jt}`,data:G,extendedRowStyle:he,extendedClassNames:Ie,ExpanderComponent:w,expanderComponentProps:b}))}const tte=mt.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:t})=>t?"opacity: 1":"opacity: 0"};
	${({$sortDirection:t})=>t==="desc"&&"transform: rotate(180deg)"};
`,nte=({sortActive:t,sortDirection:r})=>_e.createElement(tte,{$sortActive:t,$sortDirection:r},"▲"),rte=mt(ZO)`
	${({button:t})=>t&&"text-align: center"};
	${({theme:t,$isDragging:r})=>r&&t.headCells.draggingStyle};
`,ote=sr`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:t})=>t?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:t})=>!t&&sr`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ite=mt.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:t})=>!t&&ote};
`,ste=mt.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ate=D.memo(function({column:t,disabled:r,draggingColumnId:i,selectedColumn:l={},sortDirection:u,sortIcon:p,sortServer:m,pagination:w,paginationServer:b,persistSelectedOnSort:y,selectableRowsVisibleOnly:C,onSort:_,onDragStart:x,onDragOver:j,onDragEnd:M,onDragEnter:R,onDragLeave:P}){D.useEffect(()=>{typeof t.selector=="string"&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[B,I]=D.useState(!1),O=D.useRef(null);if(D.useEffect(()=>{O.current&&I(O.current.scrollWidth>O.current.clientWidth)},[B]),t.omit)return null;const H=()=>{if(!t.sortable&&!t.selector)return;let oe=u;Sp(l.id,t.id)&&(oe=u===ul.ASC?ul.DESC:ul.ASC),_({type:"SORT_CHANGE",sortDirection:oe,selectedColumn:t,clearSelectedOnSort:w&&b&&!y||m||C})},q=oe=>D.createElement(nte,{sortActive:oe,sortDirection:u}),K=()=>D.createElement("span",{className:[u,"__rdt_custom_sort_icon__"].join(" ")},p),G=!(!t.sortable||!Sp(l.id,t.id)),z=!t.sortable||r,te=t.sortable&&!p&&!t.right,se=t.sortable&&!p&&t.right,ge=t.sortable&&p&&!t.right,ce=t.sortable&&p&&t.right;return D.createElement(rte,{"data-column-id":t.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,$isDragging:Sp(t.id,i),onDragStart:x,onDragOver:j,onDragEnd:M,onDragEnter:R,onDragLeave:P},t.name&&D.createElement(ite,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:z?void 0:H,onKeyPress:z?void 0:oe=>{oe.key==="Enter"&&H()},sortActive:!z&&G,disabled:z},!z&&ce&&K(),!z&&se&&q(G),typeof t.name=="string"?D.createElement(ste,{title:B?t.name:void 0,ref:O,"data-column-id":t.id},t.name):t.name,!z&&ge&&K(),!z&&te&&q(G)))});const lte=mt(Yu)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function cte({headCell:t=!0,rowData:r,keyField:i,allSelected:l,mergeSelections:u,selectedRows:p,selectableRowsComponent:m,selectableRowsComponentProps:w,selectableRowDisabled:b,onSelectAllRows:y}){const C=p.length>0&&!l,_=b?r.filter(M=>!b(M)):r,x=_.length===0,j=Math.min(r.length,_.length);return D.createElement(lte,{className:"rdt_TableCol",$headCell:t,$noPadding:!0},D.createElement(JO,{name:"select-all-rows",component:m,componentOptions:w,onClick:()=>{y({type:"SELECT_ALL_ROWS",rows:_,rowCount:j,mergeSelections:u,keyField:i})},checked:l,indeterminate:C,disabled:x}))}function XO(t=Aw.AUTO){const r=typeof window=="object",[i,l]=D.useState(!1);return D.useEffect(()=>{if(r)if(t!=="auto")l(t==="rtl");else{const u=!(!window.document||!window.document.createElement),p=document.getElementsByTagName("BODY")[0],m=document.getElementsByTagName("HTML")[0],w=p.dir==="rtl"||m.dir==="rtl";l(u&&w)}},[t,r]),i}const dte=mt.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:t})=>t.contextMenu.fontColor};
	font-size: ${({theme:t})=>t.contextMenu.fontSize};
	font-weight: 400;
`,ute=mt.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,HM=mt.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:t})=>t&&"direction: rtl"};
	${({theme:t})=>t.contextMenu.style};
	${({theme:t,$visible:r})=>r&&t.contextMenu.activeStyle};
`;function hte({contextMessage:t,contextActions:r,contextComponent:i,selectedCount:l,direction:u}){const p=XO(u),m=l>0;return i?D.createElement(HM,{$visible:m},D.cloneElement(i,{selectedCount:l})):D.createElement(HM,{$visible:m,$rtl:p},D.createElement(dte,null,((w,b,y)=>{if(b===0)return null;const C=b===1?w.singular:w.plural;return y?`${b} ${w.message||""} ${C}`:`${b} ${C} ${w.message||""}`})(t,l,p)),D.createElement(ute,null,r))}const pte=mt.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:t})=>t.header.style}
`,fte=mt.div`
	flex: 1 0 auto;
	color: ${({theme:t})=>t.header.fontColor};
	font-size: ${({theme:t})=>t.header.fontSize};
	font-weight: 400;
`,mte=mt.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,gte=({title:t,actions:r=null,contextMessage:i,contextActions:l,contextComponent:u,selectedCount:p,direction:m,showMenu:w=!0})=>D.createElement(pte,{className:"rdt_TableHeader",role:"heading","aria-level":1},D.createElement(fte,null,t),r&&D.createElement(mte,null,r),w&&D.createElement(hte,{contextMessage:i,contextActions:l,contextComponent:u,direction:m,selectedCount:p}));function e3(t,r){var i={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r.indexOf(l)<0&&(i[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var u=0;for(l=Object.getOwnPropertySymbols(t);u<l.length;u++)r.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(t,l[u])&&(i[l[u]]=t[l[u]])}return i}const bte={left:"flex-start",right:"flex-end",center:"center"},wte=mt.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:t})=>bte[t]};
	flex-wrap: ${({$wrapContent:t})=>t?"wrap":"nowrap"};
	${({theme:t})=>t.subHeader.style}
`,kte=t=>{var{align:r="right",wrapContent:i=!0}=t,l=e3(t,["align","wrapContent"]);return D.createElement(wte,Object.assign({align:r,$wrapContent:i},l))},vte=mt.div`
	display: flex;
	flex-direction: column;
`,yte=mt.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:t,$fixedHeader:r})=>t&&sr`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${r?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:t=!1,$fixedHeaderScrollHeight:r="100vh"})=>t&&sr`
			max-height: ${r};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:t})=>t.responsiveWrapper.style};
`,VM=mt.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${t=>t.theme.progress.style};
`,Cte=mt.div`
	position: relative;
	width: 100%;
	${({theme:t})=>t.tableWrapper.style};
`,Ate=mt(Yu)`
	white-space: nowrap;
	${({theme:t})=>t.expanderCell.style};
`,_te=mt.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:t})=>t.noData.style};
`,xte=()=>_e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},_e.createElement("path",{d:"M7 10l5 5 5-5z"}),_e.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Ste=mt.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Ete=mt.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,jte=t=>{var{defaultValue:r,onChange:i}=t,l=e3(t,["defaultValue","onChange"]);return D.createElement(Ete,null,D.createElement(Ste,Object.assign({onChange:i,defaultValue:r},l)),D.createElement(xte,null))},Se={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return _e.createElement("div",null,"To add an expander pass in a component instance via ",_e.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:_e.createElement(()=>_e.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},_e.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),_e.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:_e.createElement(()=>_e.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},_e.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),_e.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:_e.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:_e.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:WA.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:_e.createElement(()=>_e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_e.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),_e.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:_e.createElement(()=>_e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_e.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),_e.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:_e.createElement(()=>_e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_e.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),_e.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:_e.createElement(()=>_e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_e.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),_e.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:Aw.AUTO,onChangePage:nr,onChangeRowsPerPage:nr,onRowClicked:nr,onRowDoubleClicked:nr,onRowMouseEnter:nr,onRowMouseLeave:nr,onRowExpandToggled:nr,onSelectedRowsChange:nr,onSort:nr,onColumnOrderChange:nr},Dte={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Tte=mt.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:t})=>t.pagination.style};
`,og=mt.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:t})=>t.pagination.pageButtonsStyle};
	${({$isRTL:t})=>t&&"transform: scale(-1, -1)"};
`,Nte=mt.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${QO`
    width: 100%;
    justify-content: space-around;
  `};
`,t3=mt.span`
	flex-shrink: 1;
	user-select: none;
`,Ite=mt(t3)`
	margin: 0 24px;
`,Mte=mt(t3)`
	margin: 0 4px;
`;var Pte=D.memo(function({rowsPerPage:t,rowCount:r,currentPage:i,direction:l=Se.direction,paginationRowsPerPageOptions:u=Se.paginationRowsPerPageOptions,paginationIconLastPage:p=Se.paginationIconLastPage,paginationIconFirstPage:m=Se.paginationIconFirstPage,paginationIconNext:w=Se.paginationIconNext,paginationIconPrevious:b=Se.paginationIconPrevious,paginationComponentOptions:y=Se.paginationComponentOptions,onChangeRowsPerPage:C=Se.onChangeRowsPerPage,onChangePage:_=Se.onChangePage}){const x=(()=>{const oe=typeof window=="object";function re(){return{width:oe?window.innerWidth:void 0,height:oe?window.innerHeight:void 0}}const[J,ne]=D.useState(re);return D.useEffect(()=>{if(!oe)return()=>null;function fe(){ne(re())}return window.addEventListener("resize",fe),()=>window.removeEventListener("resize",fe)},[]),J})(),j=XO(l),M=x.width&&x.width>599,R=xp(r,t),P=i*t,B=P-t+1,I=i===1,O=i===R,H=Object.assign(Object.assign({},Dte),y),q=i===R?`${B}-${r} ${H.rangeSeparatorText} ${r}`:`${B}-${P} ${H.rangeSeparatorText} ${r}`,K=D.useCallback(()=>_(i-1),[i,_]),G=D.useCallback(()=>_(i+1),[i,_]),z=D.useCallback(()=>_(1),[_]),te=D.useCallback(()=>_(xp(r,t)),[_,r,t]),se=D.useCallback(oe=>C(Number(oe.target.value),i),[i,C]),ge=u.map(oe=>D.createElement("option",{key:oe,value:oe},oe));H.selectAllRowsItem&&ge.push(D.createElement("option",{key:-1,value:r},H.selectAllRowsItemText));const ce=D.createElement(jte,{onChange:se,defaultValue:t,"aria-label":H.rowsPerPageText},ge);return D.createElement(Tte,{className:"rdt_Pagination"},!H.noRowsPerPage&&M&&D.createElement(D.Fragment,null,D.createElement(Mte,null,H.rowsPerPageText),ce),M&&D.createElement(Ite,null,q),D.createElement(Nte,null,D.createElement(og,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":I,onClick:z,disabled:I,$isRTL:j},m),D.createElement(og,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":I,onClick:K,disabled:I,$isRTL:j},b),!H.noRowsPerPage&&!M&&ce,D.createElement(og,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":O,onClick:G,disabled:O,$isRTL:j},w),D.createElement(og,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":O,onClick:te,disabled:O,$isRTL:j},p)))});const Ac=(t,r)=>{const i=D.useRef(!0);D.useEffect(()=>{i.current?i.current=!1:t()},r)};var Lte=function(t){return function(r){return!!r&&typeof r=="object"}(t)&&!function(r){var i=Object.prototype.toString.call(r);return i==="[object RegExp]"||i==="[object Date]"||function(l){return l.$$typeof===Ote}(r)}(t)},Ote=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function ef(t,r){return r.clone!==!1&&r.isMergeableObject(t)?Ou((i=t,Array.isArray(i)?[]:{}),t,r):t;var i}function Bte(t,r,i){return t.concat(r).map(function(l){return ef(l,i)})}function UM(t){return Object.keys(t).concat(function(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(i){return r.propertyIsEnumerable(i)}):[]}(t))}function WM(t,r){try{return r in t}catch{return!1}}function Rte(t,r,i){var l={};return i.isMergeableObject(t)&&UM(t).forEach(function(u){l[u]=ef(t[u],i)}),UM(r).forEach(function(u){(function(p,m){return WM(p,m)&&!(Object.hasOwnProperty.call(p,m)&&Object.propertyIsEnumerable.call(p,m))})(t,u)||(WM(t,u)&&i.isMergeableObject(r[u])?l[u]=function(p,m){if(!m.customMerge)return Ou;var w=m.customMerge(p);return typeof w=="function"?w:Ou}(u,i)(t[u],r[u],i):l[u]=ef(r[u],i))}),l}function Ou(t,r,i){(i=i||{}).arrayMerge=i.arrayMerge||Bte,i.isMergeableObject=i.isMergeableObject||Lte,i.cloneUnlessOtherwiseSpecified=ef;var l=Array.isArray(r);return l===Array.isArray(t)?l?i.arrayMerge(t,r,i):Rte(t,r,i):ef(r,i)}Ou.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,l){return Ou(i,l,r)},{})};var zte=Ou;const qM={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},GM={default:qM,light:qM,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Fte(t,r,i,l){const[u,p]=D.useState(()=>FM(t)),[m,w]=D.useState(""),b=D.useRef("");Ac(()=>{p(FM(t))},[t]);const y=D.useCallback(P=>{var B,I,O;const{attributes:H}=P.target,q=(B=H.getNamedItem("data-column-id"))===null||B===void 0?void 0:B.value;q&&(b.current=((O=(I=u[rg(u,q)])===null||I===void 0?void 0:I.id)===null||O===void 0?void 0:O.toString())||"",w(b.current))},[u]),C=D.useCallback(P=>{var B;const{attributes:I}=P.target,O=(B=I.getNamedItem("data-column-id"))===null||B===void 0?void 0:B.value;if(O&&b.current&&O!==b.current){const H=rg(u,b.current),q=rg(u,O),K=[...u];K[H]=u[q],K[q]=u[H],p(K),r(K)}},[r,u]),_=D.useCallback(P=>{P.preventDefault()},[]),x=D.useCallback(P=>{P.preventDefault()},[]),j=D.useCallback(P=>{P.preventDefault(),b.current="",w("")},[]),M=function(P=!1){return P?ul.ASC:ul.DESC}(l),R=D.useMemo(()=>u[rg(u,i==null?void 0:i.toString())]||{},[i,u]);return{tableColumns:u,draggingColumnId:m,handleDragStart:y,handleDragEnter:C,handleDragOver:_,handleDragLeave:x,handleDragEnd:j,defaultSortDirection:M,defaultSortColumn:R}}var $te=D.memo(function(t){const{data:r=Se.data,columns:i=Se.columns,title:l=Se.title,actions:u=Se.actions,keyField:p=Se.keyField,striped:m=Se.striped,highlightOnHover:w=Se.highlightOnHover,pointerOnHover:b=Se.pointerOnHover,dense:y=Se.dense,selectableRows:C=Se.selectableRows,selectableRowsSingle:_=Se.selectableRowsSingle,selectableRowsHighlight:x=Se.selectableRowsHighlight,selectableRowsNoSelectAll:j=Se.selectableRowsNoSelectAll,selectableRowsVisibleOnly:M=Se.selectableRowsVisibleOnly,selectableRowSelected:R=Se.selectableRowSelected,selectableRowDisabled:P=Se.selectableRowDisabled,selectableRowsComponent:B=Se.selectableRowsComponent,selectableRowsComponentProps:I=Se.selectableRowsComponentProps,onRowExpandToggled:O=Se.onRowExpandToggled,onSelectedRowsChange:H=Se.onSelectedRowsChange,expandableIcon:q=Se.expandableIcon,onChangeRowsPerPage:K=Se.onChangeRowsPerPage,onChangePage:G=Se.onChangePage,paginationServer:z=Se.paginationServer,paginationServerOptions:te=Se.paginationServerOptions,paginationTotalRows:se=Se.paginationTotalRows,paginationDefaultPage:ge=Se.paginationDefaultPage,paginationResetDefaultPage:ce=Se.paginationResetDefaultPage,paginationPerPage:oe=Se.paginationPerPage,paginationRowsPerPageOptions:re=Se.paginationRowsPerPageOptions,paginationIconLastPage:J=Se.paginationIconLastPage,paginationIconFirstPage:ne=Se.paginationIconFirstPage,paginationIconNext:fe=Se.paginationIconNext,paginationIconPrevious:ee=Se.paginationIconPrevious,paginationComponent:ie=Se.paginationComponent,paginationComponentOptions:Ce=Se.paginationComponentOptions,responsive:Me=Se.responsive,progressPending:we=Se.progressPending,progressComponent:le=Se.progressComponent,persistTableHead:ye=Se.persistTableHead,noDataComponent:qe=Se.noDataComponent,disabled:Ye=Se.disabled,noTableHead:Be=Se.noTableHead,noHeader:Mt=Se.noHeader,fixedHeader:pt=Se.fixedHeader,fixedHeaderScrollHeight:gt=Se.fixedHeaderScrollHeight,pagination:At=Se.pagination,subHeader:jt=Se.subHeader,subHeaderAlign:Le=Se.subHeaderAlign,subHeaderWrap:Ie=Se.subHeaderWrap,subHeaderComponent:ke=Se.subHeaderComponent,noContextMenu:he=Se.noContextMenu,contextMessage:et=Se.contextMessage,contextActions:lt=Se.contextActions,contextComponent:nn=Se.contextComponent,expandableRows:Rn=Se.expandableRows,onRowClicked:Do=Se.onRowClicked,onRowDoubleClicked:vt=Se.onRowDoubleClicked,onRowMouseEnter:rn=Se.onRowMouseEnter,onRowMouseLeave:io=Se.onRowMouseLeave,sortIcon:at=Se.sortIcon,onSort:$e=Se.onSort,sortFunction:Lt=Se.sortFunction,sortServer:gr=Se.sortServer,expandableRowsComponent:Yn=Se.expandableRowsComponent,expandableRowsComponentProps:gn=Se.expandableRowsComponentProps,expandableRowDisabled:Wt=Se.expandableRowDisabled,expandableRowsHideExpander:Cs=Se.expandableRowsHideExpander,expandOnRowClicked:Bi=Se.expandOnRowClicked,expandOnRowDoubleClicked:Qn=Se.expandOnRowDoubleClicked,expandableRowExpanded:As=Se.expandableRowExpanded,expandableInheritConditionalStyles:Lr=Se.expandableInheritConditionalStyles,defaultSortFieldId:xn=Se.defaultSortFieldId,defaultSortAsc:Yt=Se.defaultSortAsc,clearSelectedRows:so=Se.clearSelectedRows,conditionalRowStyles:ao=Se.conditionalRowStyles,theme:_s=Se.theme,customStyles:Ri=Se.customStyles,direction:br=Se.direction,onColumnOrderChange:vl=Se.onColumnOrderChange,className:ia}=t,{tableColumns:sa,draggingColumnId:aa,handleDragStart:on,handleDragEnter:ci,handleDragOver:To,handleDragLeave:di,handleDragEnd:wr,defaultSortDirection:yl,defaultSortColumn:Cl}=Fte(i,vl,xn,Yt),[{rowsPerPage:Wr,currentPage:Zn,selectedRows:Jn,allSelected:ui,selectedCount:la,selectedColumn:In,sortDirection:No,toggleOnSelectedRowsChange:Al},zn]=D.useReducer(Nee,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Cl,toggleOnSelectedRowsChange:!1,sortDirection:yl,currentPage:ge,rowsPerPage:oe,selectedRowsFlag:!1,contextMessage:Se.contextMessage}),{persistSelectedOnSort:hi=!1,persistSelectedOnPageChange:pi=!1}=te,xs=!(!z||!pi&&!hi),zi=At&&!we&&r.length>0,Or=ie||Pte,Io=D.useMemo(()=>((Ge={},st="default",Sn="default")=>{const Qt=GM[st]?st:Sn;return zte({table:{style:{color:(Ve=GM[Qt]).text.primary,backgroundColor:Ve.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:Ve.text.primary,backgroundColor:Ve.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:Ve.background.default,minHeight:"52px"}},head:{style:{color:Ve.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:Ve.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:Ve.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:Ve.context.background,fontSize:"18px",fontWeight:400,color:Ve.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:Ve.text.primary,backgroundColor:Ve.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:Ve.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:Ve.selected.text,backgroundColor:Ve.selected.default,borderBottomColor:Ve.background.default}},highlightOnHoverStyle:{color:Ve.highlightOnHover.text,backgroundColor:Ve.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:Ve.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:Ve.background.default},stripedStyle:{color:Ve.striped.text,backgroundColor:Ve.striped.default}},expanderRow:{style:{color:Ve.text.primary,backgroundColor:Ve.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:Ve.button.default,fill:Ve.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:Ve.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:Ve.button.hover},"&:focus":{outline:"none",backgroundColor:Ve.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:Ve.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:Ve.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:Ve.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:Ve.button.default,fill:Ve.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:Ve.button.disabled,fill:Ve.button.disabled},"&:hover:not(:disabled)":{backgroundColor:Ve.button.hover},"&:focus":{outline:"none",backgroundColor:Ve.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:Ve.text.primary,backgroundColor:Ve.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:Ve.text.primary,backgroundColor:Ve.background.default}}},Ge);var Ve})(Ri,_s),[Ri,_s]),Ss=D.useMemo(()=>Object.assign({},br!=="auto"&&{dir:br}),[br]),sn=D.useMemo(()=>{if(gr)return r;if(In!=null&&In.sortFunction&&typeof In.sortFunction=="function"){const Ge=In.sortFunction,st=No===ul.ASC?Ge:(Sn,Qt)=>-1*Ge(Sn,Qt);return[...r].sort(st)}return function(Ge,st,Sn,Qt){return st?Qt&&typeof Qt=="function"?Qt(Ge.slice(0),st,Sn):Ge.slice(0).sort((Ve,Br)=>{let _r,Xn;if(typeof st=="string"?(_r=UA(Ve,st),Xn=UA(Br,st)):(_r=st(Ve),Xn=st(Br)),Sn==="asc"){if(_r<Xn)return-1;if(_r>Xn)return 1}if(Sn==="desc"){if(_r>Xn)return-1;if(_r<Xn)return 1}return 0}):Ge}(r,In==null?void 0:In.selector,No,Lt)},[gr,In,No,r,Lt]),dn=D.useMemo(()=>{if(At&&!z){const Ge=Zn*Wr,st=Ge-Wr;return sn.slice(st,Ge)}return sn},[Zn,At,z,Wr,sn]),_l=D.useCallback(Ge=>{zn(Ge)},[]),Es=D.useCallback(Ge=>{zn(Ge)},[]),xl=D.useCallback(Ge=>{zn(Ge)},[]),js=D.useCallback((Ge,st)=>Do(Ge,st),[Do]),qr=D.useCallback((Ge,st)=>vt(Ge,st),[vt]),Mo=D.useCallback((Ge,st)=>rn(Ge,st),[rn]),Po=D.useCallback((Ge,st)=>io(Ge,st),[io]),lo=D.useCallback(Ge=>zn({type:"CHANGE_PAGE",page:Ge,paginationServer:z,visibleOnly:M,persistSelectedOnPageChange:pi}),[z,pi,M]),Sl=D.useCallback(Ge=>{const st=xp(se||dn.length,Ge),Sn=zy(Zn,st);z||lo(Sn),zn({type:"CHANGE_ROWS_PER_PAGE",page:Sn,rowsPerPage:Ge})},[Zn,lo,z,se,dn.length]);if(At&&!z&&sn.length>0&&dn.length===0){const Ge=xp(sn.length,Wr),st=zy(Zn,Ge);lo(st)}Ac(()=>{H({allSelected:ui,selectedCount:la,selectedRows:Jn.slice(0)})},[Al]),Ac(()=>{$e(In,No,sn.slice(0))},[In,No]),Ac(()=>{G(Zn,se||sn.length)},[Zn]),Ac(()=>{K(Wr,Zn)},[Wr]),Ac(()=>{lo(ge)},[ge,ce]),Ac(()=>{if(At&&z&&se>0){const Ge=xp(se,Wr),st=zy(Zn,Ge);Zn!==st&&lo(st)}},[se]),D.useEffect(()=>{zn({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:so})},[_,so]),D.useEffect(()=>{if(!R)return;const Ge=sn.filter(Sn=>R(Sn)),st=_?Ge.slice(0,1):Ge;zn({type:"SELECT_MULTIPLE_ROWS",keyField:p,selectedRows:st,totalRows:sn.length,mergeSelections:xs})},[r,R]);const Ds=M?dn:sn,Nt=pi||_||j;return D.createElement(Eee,{theme:Io},!Mt&&(!!l||!!u)&&D.createElement(gte,{title:l,actions:u,showMenu:!he,selectedCount:la,direction:br,contextActions:lt,contextComponent:nn,contextMessage:et}),jt&&D.createElement(kte,{align:Le,wrapContent:Ie},ke),D.createElement(yte,Object.assign({$responsive:Me,$fixedHeader:pt,$fixedHeaderScrollHeight:gt,className:ia},Ss),D.createElement(Cte,null,we&&!ye&&D.createElement(VM,null,le),D.createElement(Mee,{disabled:Ye,className:"rdt_Table",role:"table"},!Be&&(!!ye||sn.length>0&&!we)&&D.createElement(Lee,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:pt},D.createElement(Oee,{className:"rdt_TableHeadRow",role:"row",$dense:y},C&&(Nt?D.createElement(Yu,{style:{flex:"0 0 48px"}}):D.createElement(cte,{allSelected:ui,selectedRows:Jn,selectableRowsComponent:B,selectableRowsComponentProps:I,selectableRowDisabled:P,rowData:Ds,keyField:p,mergeSelections:xs,onSelectAllRows:Es})),Rn&&!Cs&&D.createElement(Ate,null),sa.map(Ge=>D.createElement(ate,{key:Ge.id,column:Ge,selectedColumn:In,disabled:we||sn.length===0,pagination:At,paginationServer:z,persistSelectedOnSort:hi,selectableRowsVisibleOnly:M,sortDirection:No,sortIcon:at,sortServer:gr,onSort:_l,onDragStart:on,onDragOver:To,onDragEnd:wr,onDragEnter:ci,onDragLeave:di,draggingColumnId:aa})))),!sn.length&&!we&&D.createElement(_te,null,qe),we&&ye&&D.createElement(VM,null,le),!we&&sn.length>0&&D.createElement(vte,{className:"rdt_TableBody",role:"rowgroup"},dn.map((Ge,st)=>{const Sn=Lu(Ge,p),Qt=function(Xn=""){return typeof Xn!="number"&&(!Xn||Xn.length===0)}(Sn)?st:Sn,Ve=Vg(Ge,Jn,p),Br=!!(Rn&&As&&As(Ge)),_r=!!(Rn&&Wt&&Wt(Ge));return D.createElement(ete,{id:Qt,key:Qt,keyField:p,"data-row-id":Qt,columns:sa,row:Ge,rowCount:sn.length,rowIndex:st,selectableRows:C,expandableRows:Rn,expandableIcon:q,highlightOnHover:w,pointerOnHover:b,dense:y,expandOnRowClicked:Bi,expandOnRowDoubleClicked:Qn,expandableRowsComponent:Yn,expandableRowsComponentProps:gn,expandableRowsHideExpander:Cs,defaultExpanderDisabled:_r,defaultExpanded:Br,expandableInheritConditionalStyles:Lr,conditionalRowStyles:ao,selected:Ve,selectableRowsHighlight:x,selectableRowsComponent:B,selectableRowsComponentProps:I,selectableRowDisabled:P,selectableRowsSingle:_,striped:m,onRowExpandToggled:O,onRowClicked:js,onRowDoubleClicked:qr,onRowMouseEnter:Mo,onRowMouseLeave:Po,onSelectedRow:xl,draggingColumnId:aa,onDragStart:on,onDragOver:To,onDragEnd:wr,onDragEnter:ci,onDragLeave:di})}))))),zi&&D.createElement("div",null,D.createElement(Or,{onChangePage:lo,onChangeRowsPerPage:Sl,rowCount:se||sn.length,currentPage:Zn,rowsPerPage:Wr,direction:br,paginationRowsPerPageOptions:re,paginationIconLastPage:J,paginationIconFirstPage:ne,paginationIconNext:fe,paginationIconPrevious:ee,paginationComponentOptions:Ce})))});function li({columns:t,data:r,isLoading:i,itemPerPage:l}){const[u,p]=D.useState(l),m={headRow:{style:{background:"#7571f9"}},headCells:{style:{fontSize:"16px",fontWeight:"bold",color:"#ffffff"}}},w=b=>{p(b)};return d.jsxs("div",{children:[d.jsxs("div",{className:"row mb-3",children:[d.jsxs("div",{className:"col-lg-4 col-md-8",style:{position:"relative"},children:[d.jsx("input",{type:"text",placeholder:"Search...",className:"form-control",style:{paddingLeft:"20px",paddingRight:"50px",borderRadius:"5px"}}),d.jsx("span",{style:{position:"absolute",top:"50%",right:"30px",transform:"translate(0, -50%)",cursor:"pointer"},children:d.jsx(_X,{})})]}),d.jsx("div",{className:"col-lg-8 col-md-4 d-flex justify-content-end",children:d.jsxs("strong",{children:["Total Row : ",u]})})]}),d.jsx($te,{columns:t,data:r,pagination:!0,paginationPerPage:u,paginationRowsPerPageOptions:[10,20,30,50,100],pointerOnHover:!0,highlightOnHover:!0,theme:"light",striped:!0,progressPending:i,progressComponent:d.jsx("p",{children:"Loading..."}),onChangeRowsPerPage:w,customStyles:m})]})}function Pi(t){return Ur({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12,18 L12,6 M6,12 L18,12"}}]})(t)}var n3={exports:{}};/*!
* sweetalert2 v11.7.27
* Released under the MIT License.
*/(function(t,r){(function(i,l){t.exports=l()})(tt,function(){function i(S,T){var F=u(S,T,"get");return p(S,F)}function l(S,T,F){var Q=u(S,T,"set");return m(S,Q,F),F}function u(S,T,F){if(!T.has(S))throw new TypeError("attempted to "+F+" private field on non-instance");return T.get(S)}function p(S,T){return T.get?T.get.call(S):T.value}function m(S,T,F){if(T.set)T.set.call(S,F);else{if(!T.writable)throw new TypeError("attempted to set read only private field");T.value=F}}function w(S,T){if(T.has(S))throw new TypeError("Cannot initialize the same private elements twice on an object")}function b(S,T,F){w(S,T),T.set(S,F)}const y=100,C={},_=()=>{C.previousActiveElement instanceof HTMLElement?(C.previousActiveElement.focus(),C.previousActiveElement=null):document.body&&document.body.focus()},x=S=>new Promise(T=>{if(!S)return T();const F=window.scrollX,Q=window.scrollY;C.restoreFocusTimeout=setTimeout(()=>{_(),T()},y),window.scrollTo(F,Q)});var j={innerParams:new WeakMap,domCache:new WeakMap};const M="swal2-",P=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((S,T)=>(S[T]=M+T,S),{}),I=["success","warning","info","question","error"].reduce((S,T)=>(S[T]=M+T,S),{}),O="SweetAlert2:",H=S=>S.charAt(0).toUpperCase()+S.slice(1),q=S=>{console.warn("".concat(O," ").concat(typeof S=="object"?S.join(" "):S))},K=S=>{console.error("".concat(O," ").concat(S))},G=[],z=S=>{G.includes(S)||(G.push(S),q(S))},te=(S,T)=>{z('"'.concat(S,'" is deprecated and will be removed in the next major release. Please use "').concat(T,'" instead.'))},se=S=>typeof S=="function"?S():S,ge=S=>S&&typeof S.toPromise=="function",ce=S=>ge(S)?S.toPromise():Promise.resolve(S),oe=S=>S&&Promise.resolve(S)===S,re=()=>document.body.querySelector(".".concat(P.container)),J=S=>{const T=re();return T?T.querySelector(S):null},ne=S=>J(".".concat(S)),fe=()=>ne(P.popup),ee=()=>ne(P.icon),ie=()=>ne(P["icon-content"]),Ce=()=>ne(P.title),Me=()=>ne(P["html-container"]),we=()=>ne(P.image),le=()=>ne(P["progress-steps"]),ye=()=>ne(P["validation-message"]),qe=()=>J(".".concat(P.actions," .").concat(P.confirm)),Ye=()=>J(".".concat(P.actions," .").concat(P.cancel)),Be=()=>J(".".concat(P.actions," .").concat(P.deny)),Mt=()=>ne(P["input-label"]),pt=()=>J(".".concat(P.loader)),gt=()=>ne(P.actions),At=()=>ne(P.footer),jt=()=>ne(P["timer-progress-bar"]),Le=()=>ne(P.close),Ie=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,ke=()=>{const S=fe();if(!S)return[];const T=S.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),F=Array.from(T).sort((Fe,dt)=>{const En=parseInt(Fe.getAttribute("tabindex")||"0"),bn=parseInt(dt.getAttribute("tabindex")||"0");return En>bn?1:En<bn?-1:0}),Q=S.querySelectorAll(Ie),ue=Array.from(Q).filter(Fe=>Fe.getAttribute("tabindex")!=="-1");return[...new Set(F.concat(ue))].filter(Fe=>Qn(Fe))},he=()=>Rn(document.body,P.shown)&&!Rn(document.body,P["toast-shown"])&&!Rn(document.body,P["no-backdrop"]),et=()=>{const S=fe();return S?Rn(S,P.toast):!1},lt=()=>{const S=fe();return S?S.hasAttribute("data-loading"):!1},nn=(S,T)=>{if(S.textContent="",T){const Q=new DOMParser().parseFromString(T,"text/html"),ue=Q.querySelector("head");ue&&Array.from(ue.childNodes).forEach(dt=>{S.appendChild(dt)});const Fe=Q.querySelector("body");Fe&&Array.from(Fe.childNodes).forEach(dt=>{dt instanceof HTMLVideoElement||dt instanceof HTMLAudioElement?S.appendChild(dt.cloneNode(!0)):S.appendChild(dt)})}},Rn=(S,T)=>{if(!T)return!1;const F=T.split(/\s+/);for(let Q=0;Q<F.length;Q++)if(!S.classList.contains(F[Q]))return!1;return!0},Do=(S,T)=>{Array.from(S.classList).forEach(F=>{!Object.values(P).includes(F)&&!Object.values(I).includes(F)&&!Object.values(T.showClass||{}).includes(F)&&S.classList.remove(F)})},vt=(S,T,F)=>{if(Do(S,T),T.customClass&&T.customClass[F]){if(typeof T.customClass[F]!="string"&&!T.customClass[F].forEach){q("Invalid type of customClass.".concat(F,'! Expected string or iterable object, got "').concat(typeof T.customClass[F],'"'));return}$e(S,T.customClass[F])}},rn=(S,T)=>{if(!T)return null;switch(T){case"select":case"textarea":case"file":return S.querySelector(".".concat(P.popup," > .").concat(P[T]));case"checkbox":return S.querySelector(".".concat(P.popup," > .").concat(P.checkbox," input"));case"radio":return S.querySelector(".".concat(P.popup," > .").concat(P.radio," input:checked"))||S.querySelector(".".concat(P.popup," > .").concat(P.radio," input:first-child"));case"range":return S.querySelector(".".concat(P.popup," > .").concat(P.range," input"));default:return S.querySelector(".".concat(P.popup," > .").concat(P.input))}},io=S=>{if(S.focus(),S.type!=="file"){const T=S.value;S.value="",S.value=T}},at=(S,T,F)=>{!S||!T||(typeof T=="string"&&(T=T.split(/\s+/).filter(Boolean)),T.forEach(Q=>{Array.isArray(S)?S.forEach(ue=>{F?ue.classList.add(Q):ue.classList.remove(Q)}):F?S.classList.add(Q):S.classList.remove(Q)}))},$e=(S,T)=>{at(S,T,!0)},Lt=(S,T)=>{at(S,T,!1)},gr=(S,T)=>{const F=Array.from(S.children);for(let Q=0;Q<F.length;Q++){const ue=F[Q];if(ue instanceof HTMLElement&&Rn(ue,T))return ue}},Yn=(S,T,F)=>{F==="".concat(parseInt(F))&&(F=parseInt(F)),F||parseInt(F)===0?S.style[T]=typeof F=="number"?"".concat(F,"px"):F:S.style.removeProperty(T)},gn=function(S){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";S&&(S.style.display=T)},Wt=S=>{S&&(S.style.display="none")},Cs=(S,T,F,Q)=>{const ue=S.querySelector(T);ue&&(ue.style[F]=Q)},Bi=function(S,T){let F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";T?gn(S,F):Wt(S)},Qn=S=>!!(S&&(S.offsetWidth||S.offsetHeight||S.getClientRects().length)),As=()=>!Qn(qe())&&!Qn(Be())&&!Qn(Ye()),Lr=S=>S.scrollHeight>S.clientHeight,xn=S=>{const T=window.getComputedStyle(S),F=parseFloat(T.getPropertyValue("animation-duration")||"0"),Q=parseFloat(T.getPropertyValue("transition-duration")||"0");return F>0||Q>0},Yt=function(S){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const F=jt();F&&Qn(F)&&(T&&(F.style.transition="none",F.style.width="100%"),setTimeout(()=>{F.style.transition="width ".concat(S/1e3,"s linear"),F.style.width="0%"},10))},so=()=>{const S=jt();if(!S)return;const T=parseInt(window.getComputedStyle(S).width);S.style.removeProperty("transition"),S.style.width="100%";const F=parseInt(window.getComputedStyle(S).width),Q=T/F*100;S.style.width="".concat(Q,"%")},ao=()=>typeof window>"u"||typeof document>"u",_s=`
 <div aria-labelledby="`.concat(P.title,'" aria-describedby="').concat(P["html-container"],'" class="').concat(P.popup,`" tabindex="-1">
   <button type="button" class="`).concat(P.close,`"></button>
   <ul class="`).concat(P["progress-steps"],`"></ul>
   <div class="`).concat(P.icon,`"></div>
   <img class="`).concat(P.image,`" />
   <h2 class="`).concat(P.title,'" id="').concat(P.title,`"></h2>
   <div class="`).concat(P["html-container"],'" id="').concat(P["html-container"],`"></div>
   <input class="`).concat(P.input,'" id="').concat(P.input,`" />
   <input type="file" class="`).concat(P.file,`" />
   <div class="`).concat(P.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(P.select,'" id="').concat(P.select,`"></select>
   <div class="`).concat(P.radio,`"></div>
   <label class="`).concat(P.checkbox,`">
     <input type="checkbox" id="`).concat(P.checkbox,`" />
     <span class="`).concat(P.label,`"></span>
   </label>
   <textarea class="`).concat(P.textarea,'" id="').concat(P.textarea,`"></textarea>
   <div class="`).concat(P["validation-message"],'" id="').concat(P["validation-message"],`"></div>
   <div class="`).concat(P.actions,`">
     <div class="`).concat(P.loader,`"></div>
     <button type="button" class="`).concat(P.confirm,`"></button>
     <button type="button" class="`).concat(P.deny,`"></button>
     <button type="button" class="`).concat(P.cancel,`"></button>
   </div>
   <div class="`).concat(P.footer,`"></div>
   <div class="`).concat(P["timer-progress-bar-container"],`">
     <div class="`).concat(P["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Ri=()=>{const S=re();return S?(S.remove(),Lt([document.documentElement,document.body],[P["no-backdrop"],P["toast-shown"],P["has-column"]]),!0):!1},br=()=>{C.currentInstance.resetValidationMessage()},vl=()=>{const S=fe(),T=gr(S,P.input),F=gr(S,P.file),Q=S.querySelector(".".concat(P.range," input")),ue=S.querySelector(".".concat(P.range," output")),Fe=gr(S,P.select),dt=S.querySelector(".".concat(P.checkbox," input")),En=gr(S,P.textarea);T.oninput=br,F.onchange=br,Fe.onchange=br,dt.onchange=br,En.oninput=br,Q.oninput=()=>{br(),ue.value=Q.value},Q.onchange=()=>{br(),ue.value=Q.value}},ia=S=>typeof S=="string"?document.querySelector(S):S,sa=S=>{const T=fe();T.setAttribute("role",S.toast?"alert":"dialog"),T.setAttribute("aria-live",S.toast?"polite":"assertive"),S.toast||T.setAttribute("aria-modal","true")},aa=S=>{window.getComputedStyle(S).direction==="rtl"&&$e(re(),P.rtl)},on=S=>{const T=Ri();if(ao()){K("SweetAlert2 requires document to initialize");return}const F=document.createElement("div");F.className=P.container,T&&$e(F,P["no-transition"]),nn(F,_s);const Q=ia(S.target);Q.appendChild(F),sa(S),aa(Q),vl()},ci=(S,T)=>{S instanceof HTMLElement?T.appendChild(S):typeof S=="object"?To(S,T):S&&nn(T,S)},To=(S,T)=>{S.jquery?di(T,S):nn(T,S.toString())},di=(S,T)=>{if(S.textContent="",0 in T)for(let F=0;F in T;F++)S.appendChild(T[F].cloneNode(!0));else S.appendChild(T.cloneNode(!0))},wr=(()=>{if(ao())return!1;const S=document.createElement("div");return typeof S.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof S.style.animation<"u"?"animationend":!1})(),yl=(S,T)=>{const F=gt(),Q=pt();!F||!Q||(!T.showConfirmButton&&!T.showDenyButton&&!T.showCancelButton?Wt(F):gn(F),vt(F,T,"actions"),Cl(F,Q,T),nn(Q,T.loaderHtml||""),vt(Q,T,"loader"))};function Cl(S,T,F){const Q=qe(),ue=Be(),Fe=Ye();!Q||!ue||!Fe||(Zn(Q,"confirm",F),Zn(ue,"deny",F),Zn(Fe,"cancel",F),Wr(Q,ue,Fe,F),F.reverseButtons&&(F.toast?(S.insertBefore(Fe,Q),S.insertBefore(ue,Q)):(S.insertBefore(Fe,T),S.insertBefore(ue,T),S.insertBefore(Q,T))))}function Wr(S,T,F,Q){if(!Q.buttonsStyling){Lt([S,T,F],P.styled);return}$e([S,T,F],P.styled),Q.confirmButtonColor&&(S.style.backgroundColor=Q.confirmButtonColor,$e(S,P["default-outline"])),Q.denyButtonColor&&(T.style.backgroundColor=Q.denyButtonColor,$e(T,P["default-outline"])),Q.cancelButtonColor&&(F.style.backgroundColor=Q.cancelButtonColor,$e(F,P["default-outline"]))}function Zn(S,T,F){const Q=H(T);Bi(S,F["show".concat(Q,"Button")],"inline-block"),nn(S,F["".concat(T,"ButtonText")]||""),S.setAttribute("aria-label",F["".concat(T,"ButtonAriaLabel")]||""),S.className=P[T],vt(S,F,"".concat(T,"Button"))}const Jn=(S,T)=>{const F=Le();F&&(nn(F,T.closeButtonHtml||""),vt(F,T,"closeButton"),Bi(F,T.showCloseButton),F.setAttribute("aria-label",T.closeButtonAriaLabel||""))},ui=(S,T)=>{const F=re();F&&(la(F,T.backdrop),In(F,T.position),No(F,T.grow),vt(F,T,"container"))};function la(S,T){typeof T=="string"?S.style.background=T:T||$e([document.documentElement,document.body],P["no-backdrop"])}function In(S,T){T&&(T in P?$e(S,P[T]):(q('The "position" parameter is not valid, defaulting to "center"'),$e(S,P.center)))}function No(S,T){T&&$e(S,P["grow-".concat(T)])}const Al=["input","file","range","select","radio","checkbox","textarea"],zn=(S,T)=>{const F=fe();if(!F)return;const Q=j.innerParams.get(S),ue=!Q||T.input!==Q.input;Al.forEach(Fe=>{const dt=gr(F,P[Fe]);dt&&(xs(Fe,T.inputAttributes),dt.className=P[Fe],ue&&Wt(dt))}),T.input&&(ue&&hi(T),zi(T))},hi=S=>{if(!S.input)return;if(!dn[S.input]){K('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(S.input,'"'));return}const T=Ss(S.input),F=dn[S.input](T,S);gn(T),S.inputAutoFocus&&setTimeout(()=>{io(F)})},pi=S=>{for(let T=0;T<S.attributes.length;T++){const F=S.attributes[T].name;["id","type","value","style"].includes(F)||S.removeAttribute(F)}},xs=(S,T)=>{const F=rn(fe(),S);if(F){pi(F);for(const Q in T)F.setAttribute(Q,T[Q])}},zi=S=>{const T=Ss(S.input);typeof S.customClass=="object"&&$e(T,S.customClass.input)},Or=(S,T)=>{(!S.placeholder||T.inputPlaceholder)&&(S.placeholder=T.inputPlaceholder)},Io=(S,T,F)=>{if(F.inputLabel){const Q=document.createElement("label"),ue=P["input-label"];Q.setAttribute("for",S.id),Q.className=ue,typeof F.customClass=="object"&&$e(Q,F.customClass.inputLabel),Q.innerText=F.inputLabel,T.insertAdjacentElement("beforebegin",Q)}},Ss=S=>gr(fe(),P[S]||P.input),sn=(S,T)=>{["string","number"].includes(typeof T)?S.value="".concat(T):oe(T)||q('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof T,'"'))},dn={};dn.text=dn.email=dn.password=dn.number=dn.tel=dn.url=(S,T)=>(sn(S,T.inputValue),Io(S,S,T),Or(S,T),S.type=T.input,S),dn.file=(S,T)=>(Io(S,S,T),Or(S,T),S),dn.range=(S,T)=>{const F=S.querySelector("input"),Q=S.querySelector("output");return sn(F,T.inputValue),F.type=T.input,sn(Q,T.inputValue),Io(F,S,T),S},dn.select=(S,T)=>{if(S.textContent="",T.inputPlaceholder){const F=document.createElement("option");nn(F,T.inputPlaceholder),F.value="",F.disabled=!0,F.selected=!0,S.appendChild(F)}return Io(S,S,T),S},dn.radio=S=>(S.textContent="",S),dn.checkbox=(S,T)=>{const F=rn(fe(),"checkbox");F.value="1",F.checked=!!T.inputValue;const Q=S.querySelector("span");return nn(Q,T.inputPlaceholder),F},dn.textarea=(S,T)=>{sn(S,T.inputValue),Or(S,T),Io(S,S,T);const F=Q=>parseInt(window.getComputedStyle(Q).marginLeft)+parseInt(window.getComputedStyle(Q).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const Q=parseInt(window.getComputedStyle(fe()).width),ue=()=>{if(!document.body.contains(S))return;const Fe=S.offsetWidth+F(S);Fe>Q?fe().style.width="".concat(Fe,"px"):Yn(fe(),"width",T.width)};new MutationObserver(ue).observe(S,{attributes:!0,attributeFilter:["style"]})}}),S};const _l=(S,T)=>{const F=Me();F&&(vt(F,T,"htmlContainer"),T.html?(ci(T.html,F),gn(F,"block")):T.text?(F.textContent=T.text,gn(F,"block")):Wt(F),zn(S,T))},Es=(S,T)=>{const F=At();F&&(Bi(F,T.footer,"block"),T.footer&&ci(T.footer,F),vt(F,T,"footer"))},xl=(S,T)=>{const F=j.innerParams.get(S),Q=ee();if(Q){if(F&&T.icon===F.icon){lo(Q,T),js(Q,T);return}if(!T.icon&&!T.iconHtml){Wt(Q);return}if(T.icon&&Object.keys(I).indexOf(T.icon)===-1){K('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(T.icon,'"')),Wt(Q);return}gn(Q),lo(Q,T),js(Q,T),$e(Q,T.showClass&&T.showClass.icon)}},js=(S,T)=>{for(const[F,Q]of Object.entries(I))T.icon!==F&&Lt(S,Q);$e(S,T.icon&&I[T.icon]),Sl(S,T),qr(),vt(S,T,"icon")},qr=()=>{const S=fe();if(!S)return;const T=window.getComputedStyle(S).getPropertyValue("background-color"),F=S.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let Q=0;Q<F.length;Q++)F[Q].style.backgroundColor=T},Mo=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Po=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,lo=(S,T)=>{if(!T.icon&&!T.iconHtml)return;let F=S.innerHTML,Q="";T.iconHtml?Q=Ds(T.iconHtml):T.icon==="success"?(Q=Mo,F=F.replace(/ style=".*?"/g,"")):T.icon==="error"?Q=Po:T.icon&&(Q=Ds({question:"?",warning:"!",info:"i"}[T.icon])),F.trim()!==Q.trim()&&nn(S,Q)},Sl=(S,T)=>{if(T.iconColor){S.style.color=T.iconColor,S.style.borderColor=T.iconColor;for(const F of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Cs(S,F,"backgroundColor",T.iconColor);Cs(S,".swal2-success-ring","borderColor",T.iconColor)}},Ds=S=>'<div class="'.concat(P["icon-content"],'">').concat(S,"</div>"),Nt=(S,T)=>{const F=we();if(F){if(!T.imageUrl){Wt(F);return}gn(F,""),F.setAttribute("src",T.imageUrl),F.setAttribute("alt",T.imageAlt||""),Yn(F,"width",T.imageWidth),Yn(F,"height",T.imageHeight),F.className=P.image,vt(F,T,"image")}},Ge=(S,T)=>{const F=re(),Q=fe();if(!(!F||!Q)){if(T.toast){Yn(F,"width",T.width),Q.style.width="100%";const ue=pt();ue&&Q.insertBefore(ue,ee())}else Yn(Q,"width",T.width);Yn(Q,"padding",T.padding),T.color&&(Q.style.color=T.color),T.background&&(Q.style.background=T.background),Wt(ye()),st(Q,T)}},st=(S,T)=>{const F=T.showClass||{};S.className="".concat(P.popup," ").concat(Qn(S)?F.popup:""),T.toast?($e([document.documentElement,document.body],P["toast-shown"]),$e(S,P.toast)):$e(S,P.modal),vt(S,T,"popup"),typeof T.customClass=="string"&&$e(S,T.customClass),T.icon&&$e(S,P["icon-".concat(T.icon)])},Sn=(S,T)=>{const F=le();if(!F)return;const{progressSteps:Q,currentProgressStep:ue}=T;if(!Q||Q.length===0||ue===void 0){Wt(F);return}gn(F),F.textContent="",ue>=Q.length&&q("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),Q.forEach((Fe,dt)=>{const En=Qt(Fe);if(F.appendChild(En),dt===ue&&$e(En,P["active-progress-step"]),dt!==Q.length-1){const bn=Ve(T);F.appendChild(bn)}})},Qt=S=>{const T=document.createElement("li");return $e(T,P["progress-step"]),nn(T,S),T},Ve=S=>{const T=document.createElement("li");return $e(T,P["progress-step-line"]),S.progressStepsDistance&&Yn(T,"width",S.progressStepsDistance),T},Br=(S,T)=>{const F=Ce();F&&(Bi(F,T.title||T.titleText,"block"),T.title&&ci(T.title,F),T.titleText&&(F.innerText=T.titleText),vt(F,T,"title"))},_r=(S,T)=>{Ge(S,T),ui(S,T),Sn(S,T),xl(S,T),Nt(S,T),Br(S,T),Jn(S,T),_l(S,T),yl(S,T),Es(S,T);const F=fe();typeof T.didRender=="function"&&F&&T.didRender(F)},Xn=()=>Qn(fe()),Kc=()=>{var S;return(S=qe())===null||S===void 0?void 0:S.click()},Yc=()=>{var S;return(S=Be())===null||S===void 0?void 0:S.click()},Xu=()=>{var S;return(S=Ye())===null||S===void 0?void 0:S.click()},Lo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Oo=S=>{S.keydownTarget&&S.keydownHandlerAdded&&(S.keydownTarget.removeEventListener("keydown",S.keydownHandler,{capture:S.keydownListenerCapture}),S.keydownHandlerAdded=!1)},ca=(S,T,F,Q)=>{Oo(T),F.toast||(T.keydownHandler=ue=>jl(S,ue,Q),T.keydownTarget=F.keydownListenerCapture?window:fe(),T.keydownListenerCapture=F.keydownListenerCapture,T.keydownTarget.addEventListener("keydown",T.keydownHandler,{capture:T.keydownListenerCapture}),T.keydownHandlerAdded=!0)},El=(S,T)=>{const F=ke();if(F.length){S=S+T,S===F.length?S=0:S===-1&&(S=F.length-1),F[S].focus();return}fe().focus()},fi=["ArrowRight","ArrowDown"],Fi=["ArrowLeft","ArrowUp"],jl=(S,T,F)=>{const Q=j.innerParams.get(S);Q&&(T.isComposing||T.keyCode===229||(Q.stopKeydownPropagation&&T.stopPropagation(),T.key==="Enter"?da(S,T,Q):T.key==="Tab"?Dl(T):[...fi,...Fi].includes(T.key)?eh(T.key):T.key==="Escape"&&Tl(T,Q,F)))},da=(S,T,F)=>{if(se(F.allowEnterKey)&&T.target&&S.getInput()&&T.target instanceof HTMLElement&&T.target.outerHTML===S.getInput().outerHTML){if(["textarea","file"].includes(F.input))return;Kc(),T.preventDefault()}},Dl=S=>{const T=S.target,F=ke();let Q=-1;for(let ue=0;ue<F.length;ue++)if(T===F[ue]){Q=ue;break}S.shiftKey?El(Q,-1):El(Q,1),S.stopPropagation(),S.preventDefault()},eh=S=>{const T=qe(),F=Be(),Q=Ye(),ue=[T,F,Q];if(document.activeElement instanceof HTMLElement&&!ue.includes(document.activeElement))return;const Fe=fi.includes(S)?"nextElementSibling":"previousElementSibling";let dt=document.activeElement;for(let En=0;En<gt().children.length;En++){if(dt=dt[Fe],!dt)return;if(dt instanceof HTMLButtonElement&&Qn(dt))break}dt instanceof HTMLButtonElement&&dt.focus()},Tl=(S,T,F)=>{se(T.allowEscapeKey)&&(S.preventDefault(),F(Lo.esc))};var xr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const th=()=>{Array.from(document.body.children).forEach(T=>{T===re()||T.contains(re())||(T.hasAttribute("aria-hidden")&&T.setAttribute("data-previous-aria-hidden",T.getAttribute("aria-hidden")||""),T.setAttribute("aria-hidden","true"))})},ua=()=>{Array.from(document.body.children).forEach(T=>{T.hasAttribute("data-previous-aria-hidden")?(T.setAttribute("aria-hidden",T.getAttribute("data-previous-aria-hidden")||""),T.removeAttribute("data-previous-aria-hidden")):T.removeAttribute("aria-hidden")})},ha=typeof window<"u"&&!!window.GestureEvent,Qc=()=>{if(ha&&!Rn(document.body,P.iosfix)){const S=document.body.scrollTop;document.body.style.top="".concat(S*-1,"px"),$e(document.body,P.iosfix),Zc()}},Zc=()=>{const S=re();if(!S)return;let T;S.ontouchstart=F=>{T=Nl(F)},S.ontouchmove=F=>{T&&(F.preventDefault(),F.stopPropagation())}},Nl=S=>{const T=S.target,F=re(),Q=Me();return!F||!Q||nh(S)||Jc(S)?!1:T===F||!Lr(F)&&T instanceof HTMLElement&&T.tagName!=="INPUT"&&T.tagName!=="TEXTAREA"&&!(Lr(Q)&&Q.contains(T))},nh=S=>S.touches&&S.touches.length&&S.touches[0].touchType==="stylus",Jc=S=>S.touches&&S.touches.length>1,Il=()=>{if(Rn(document.body,P.iosfix)){const S=parseInt(document.body.style.top,10);Lt(document.body,P.iosfix),document.body.style.top="",document.body.scrollTop=S*-1}},Xc=()=>{const S=document.createElement("div");S.className=P["scrollbar-measure"],document.body.appendChild(S);const T=S.getBoundingClientRect().width-S.clientWidth;return document.body.removeChild(S),T};let Rr=null;const Ml=S=>{Rr===null&&(document.body.scrollHeight>window.innerHeight||S==="scroll")&&(Rr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Rr+Xc(),"px"))},Pl=()=>{Rr!==null&&(document.body.style.paddingRight="".concat(Rr,"px"),Rr=null)};function pa(S,T,F,Q){et()?$i(S,Q):(x(F).then(()=>$i(S,Q)),Oo(C)),ha?(T.setAttribute("style","display:none !important"),T.removeAttribute("class"),T.innerHTML=""):T.remove(),he()&&(Pl(),Il(),ua()),It()}function It(){Lt([document.documentElement,document.body],[P.shown,P["height-auto"],P["no-backdrop"],P["toast-shown"]])}function co(S){S=Ol(S);const T=xr.swalPromiseResolve.get(this),F=Ll(this);this.isAwaitingPromise?S.isDismissed||(uo(this),T(S)):F&&T(S)}const Ll=S=>{const T=fe();if(!T)return!1;const F=j.innerParams.get(S);if(!F||Rn(T,F.hideClass.popup))return!1;Lt(T,F.showClass.popup),$e(T,F.hideClass.popup);const Q=re();return Lt(Q,F.showClass.backdrop),$e(Q,F.hideClass.backdrop),Bo(S,T,F),!0};function fa(S){const T=xr.swalPromiseReject.get(this);uo(this),T&&T(S)}const uo=S=>{S.isAwaitingPromise&&(delete S.isAwaitingPromise,j.innerParams.get(S)||S._destroy())},Ol=S=>typeof S>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},S),Bo=(S,T,F)=>{const Q=re(),ue=wr&&xn(T);typeof F.willClose=="function"&&F.willClose(T),ue?ma(S,T,Q,F.returnFocus,F.didClose):pa(S,Q,F.returnFocus,F.didClose)},ma=(S,T,F,Q,ue)=>{wr&&(C.swalCloseEventFinishedCallback=pa.bind(null,S,F,Q,ue),T.addEventListener(wr,function(Fe){Fe.target===T&&(C.swalCloseEventFinishedCallback(),delete C.swalCloseEventFinishedCallback)}))},$i=(S,T)=>{setTimeout(()=>{typeof T=="function"&&T.bind(S.params)(),S._destroy&&S._destroy()})},Ro=S=>{let T=fe();if(T||new Ql,T=fe(),!T)return;const F=pt();et()?Wt(ee()):Bl(T,S),gn(F),T.setAttribute("data-loading","true"),T.setAttribute("aria-busy","true"),T.focus()},Bl=(S,T)=>{const F=gt(),Q=pt();!F||!Q||(!T&&Qn(qe())&&(T=qe()),gn(F),T&&(Wt(T),Q.setAttribute("data-button-to-replace",T.className),F.insertBefore(Q,T)),$e([S,F],P.loading))},ed=(S,T)=>{T.input==="select"||T.input==="radio"?ba(S,T):["text","email","number","tel","textarea"].some(F=>F===T.input)&&(ge(T.inputValue)||oe(T.inputValue))&&(Ro(qe()),Rl(S,T))},ga=(S,T)=>{const F=S.getInput();if(!F)return null;switch(T.input){case"checkbox":return td(F);case"radio":return nd(F);case"file":return rh(F);default:return T.inputAutoTrim?F.value.trim():F.value}},td=S=>S.checked?1:0,nd=S=>S.checked?S.value:null,rh=S=>S.files&&S.files.length?S.getAttribute("multiple")!==null?S.files:S.files[0]:null,ba=(S,T)=>{const F=fe();if(!F)return;const Q=ue=>{T.input==="select"?oh(F,Gr(ue),T):T.input==="radio"&&ih(F,Gr(ue),T)};ge(T.inputOptions)||oe(T.inputOptions)?(Ro(qe()),ce(T.inputOptions).then(ue=>{S.hideLoading(),Q(ue)})):typeof T.inputOptions=="object"?Q(T.inputOptions):K("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof T.inputOptions))},Rl=(S,T)=>{const F=S.getInput();F&&(Wt(F),ce(T.inputValue).then(Q=>{F.value=T.input==="number"?"".concat(parseFloat(Q)||0):"".concat(Q),gn(F),F.focus(),S.hideLoading()}).catch(Q=>{K("Error in inputValue promise: ".concat(Q)),F.value="",gn(F),F.focus(),S.hideLoading()}))};function oh(S,T,F){const Q=gr(S,P.select);if(!Q)return;const ue=(Fe,dt,En)=>{const bn=document.createElement("option");bn.value=En,nn(bn,dt),bn.selected=wa(En,F.inputValue),Fe.appendChild(bn)};T.forEach(Fe=>{const dt=Fe[0],En=Fe[1];if(Array.isArray(En)){const bn=document.createElement("optgroup");bn.label=dt,bn.disabled=!1,Q.appendChild(bn),En.forEach(Ki=>ue(bn,Ki[1],Ki[0]))}else ue(Q,En,dt)}),Q.focus()}function ih(S,T,F){const Q=gr(S,P.radio);if(!Q)return;T.forEach(Fe=>{const dt=Fe[0],En=Fe[1],bn=document.createElement("input"),Ki=document.createElement("label");bn.type="radio",bn.name=P.radio,bn.value=dt,wa(dt,F.inputValue)&&(bn.checked=!0);const fh=document.createElement("span");nn(fh,En),fh.className=P.label,Ki.appendChild(bn),Ki.appendChild(fh),Q.appendChild(Ki)});const ue=Q.querySelectorAll("input");ue.length&&ue[0].focus()}const Gr=S=>{const T=[];return S instanceof Map?S.forEach((F,Q)=>{let ue=F;typeof ue=="object"&&(ue=Gr(ue)),T.push([Q,ue])}):Object.keys(S).forEach(F=>{let Q=S[F];typeof Q=="object"&&(Q=Gr(Q)),T.push([F,Q])}),T},wa=(S,T)=>!!T&&T.toString()===S.toString(),Hi=S=>{const T=j.innerParams.get(S);S.disableButtons(),T.input?Ts(S,"confirm"):ya(S,!0)},sh=S=>{const T=j.innerParams.get(S);S.disableButtons(),T.returnInputValueOnDeny?Ts(S,"deny"):ka(S,!1)},zl=(S,T)=>{S.disableButtons(),T(Lo.cancel)},Ts=(S,T)=>{const F=j.innerParams.get(S);if(!F.input){K('The "input" parameter is needed to be set when using returnInputValueOn'.concat(H(T)));return}const Q=S.getInput(),ue=ga(S,F);F.inputValidator?rd(S,ue,T):Q&&!Q.checkValidity()?(S.enableButtons(),S.showValidationMessage(F.validationMessage)):T==="deny"?ka(S,ue):ya(S,ue)},rd=(S,T,F)=>{const Q=j.innerParams.get(S);S.disableInput(),Promise.resolve().then(()=>ce(Q.inputValidator(T,Q.validationMessage))).then(Fe=>{S.enableButtons(),S.enableInput(),Fe?S.showValidationMessage(Fe):F==="deny"?ka(S,T):ya(S,T)})},ka=(S,T)=>{const F=j.innerParams.get(S||void 0);F.showLoaderOnDeny&&Ro(Be()),F.preDeny?(S.isAwaitingPromise=!0,Promise.resolve().then(()=>ce(F.preDeny(T,F.validationMessage))).then(ue=>{ue===!1?(S.hideLoading(),uo(S)):S.close({isDenied:!0,value:typeof ue>"u"?T:ue})}).catch(ue=>va(S||void 0,ue))):S.close({isDenied:!0,value:T})},Fl=(S,T)=>{S.close({isConfirmed:!0,value:T})},va=(S,T)=>{S.rejectPromise(T)},ya=(S,T)=>{const F=j.innerParams.get(S||void 0);F.showLoaderOnConfirm&&Ro(),F.preConfirm?(S.resetValidationMessage(),S.isAwaitingPromise=!0,Promise.resolve().then(()=>ce(F.preConfirm(T,F.validationMessage))).then(ue=>{Qn(ye())||ue===!1?(S.hideLoading(),uo(S)):Fl(S,typeof ue>"u"?T:ue)}).catch(ue=>va(S||void 0,ue))):Fl(S,T)};function Ns(){const S=j.innerParams.get(this);if(!S)return;const T=j.domCache.get(this);Wt(T.loader),et()?S.icon&&gn(ee()):ah(T),Lt([T.popup,T.actions],P.loading),T.popup.removeAttribute("aria-busy"),T.popup.removeAttribute("data-loading"),T.confirmButton.disabled=!1,T.denyButton.disabled=!1,T.cancelButton.disabled=!1}const ah=S=>{const T=S.popup.getElementsByClassName(S.loader.getAttribute("data-button-to-replace"));T.length?gn(T[0],"inline-block"):As()&&Wt(S.actions)};function $l(){const S=j.innerParams.get(this),T=j.domCache.get(this);return T?rn(T.popup,S.input):null}function Is(S,T,F){const Q=j.domCache.get(S);T.forEach(ue=>{Q[ue].disabled=F})}function od(S,T){const F=fe();if(!(!F||!S))if(S.type==="radio"){const Q=F.querySelectorAll('[name="'.concat(P.radio,'"]'));for(let ue=0;ue<Q.length;ue++)Q[ue].disabled=T}else S.disabled=T}function Hl(){Is(this,["confirmButton","denyButton","cancelButton"],!1)}function Vl(){Is(this,["confirmButton","denyButton","cancelButton"],!0)}function Ul(){od(this.getInput(),!1)}function Wl(){od(this.getInput(),!0)}function Ca(S){const T=j.domCache.get(this),F=j.innerParams.get(this);nn(T.validationMessage,S),T.validationMessage.className=P["validation-message"],F.customClass&&F.customClass.validationMessage&&$e(T.validationMessage,F.customClass.validationMessage),gn(T.validationMessage);const Q=this.getInput();Q&&(Q.setAttribute("aria-invalid",!0),Q.setAttribute("aria-describedby",P["validation-message"]),io(Q),$e(Q,P.inputerror))}function ql(){const S=j.domCache.get(this);S.validationMessage&&Wt(S.validationMessage);const T=this.getInput();T&&(T.removeAttribute("aria-invalid"),T.removeAttribute("aria-describedby"),Lt(T,P.inputerror))}const zo={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Aa=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],_a={},xa=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Dt=S=>Object.prototype.hasOwnProperty.call(zo,S),Gl=S=>Aa.indexOf(S)!==-1,Kl=S=>_a[S],id=S=>{Dt(S)||q('Unknown parameter "'.concat(S,'"'))},sd=S=>{xa.includes(S)&&q('The parameter "'.concat(S,'" is incompatible with toasts'))},ad=S=>{const T=Kl(S);T&&te(S,T)},lh=S=>{S.backdrop===!1&&S.allowOutsideClick&&q('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const T in S)id(T),S.toast&&sd(T),ad(T)};function ld(S){const T=fe(),F=j.innerParams.get(this);if(!T||Rn(T,F.hideClass.popup)){q("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const Q=ch(S),ue=Object.assign({},F,Q);_r(this,ue),j.innerParams.set(this,ue),Object.defineProperties(this,{params:{value:Object.assign({},this.params,S),writable:!1,enumerable:!0}})}const ch=S=>{const T={};return Object.keys(S).forEach(F=>{Gl(F)?T[F]=S[F]:q("Invalid parameter to update: ".concat(F))}),T};function cd(){const S=j.domCache.get(this),T=j.innerParams.get(this);if(!T){Kr(this);return}S.popup&&C.swalCloseEventFinishedCallback&&(C.swalCloseEventFinishedCallback(),delete C.swalCloseEventFinishedCallback),typeof T.didDestroy=="function"&&T.didDestroy(),Fo(this)}const Fo=S=>{Kr(S),delete S.params,delete C.keydownHandler,delete C.keydownTarget,delete C.currentInstance},Kr=S=>{S.isAwaitingPromise?(Sa(j,S),S.isAwaitingPromise=!0):(Sa(xr,S),Sa(j,S),delete S.isAwaitingPromise,delete S.disableButtons,delete S.enableButtons,delete S.getInput,delete S.disableInput,delete S.enableInput,delete S.hideLoading,delete S.disableLoading,delete S.showValidationMessage,delete S.resetValidationMessage,delete S.close,delete S.closePopup,delete S.closeModal,delete S.closeToast,delete S.rejectPromise,delete S.update,delete S._destroy)},Sa=(S,T)=>{for(const F in S)S[F].delete(T)};var dh=Object.freeze({__proto__:null,_destroy:cd,close:co,closeModal:co,closePopup:co,closeToast:co,disableButtons:Vl,disableInput:Wl,disableLoading:Ns,enableButtons:Hl,enableInput:Ul,getInput:$l,handleAwaitingPromise:uo,hideLoading:Ns,rejectPromise:fa,resetValidationMessage:ql,showValidationMessage:Ca,update:ld});const Ms=(S,T,F)=>{j.innerParams.get(S).toast?Ea(S,T,F):(Ui(T),dd(T),V(S,T,F))},Ea=(S,T,F)=>{T.popup.onclick=()=>{const Q=j.innerParams.get(S);Q&&(Yl(Q)||Q.timer||Q.input)||F(Lo.close)}},Yl=S=>S.showConfirmButton||S.showDenyButton||S.showCancelButton||S.showCloseButton;let Vi=!1;const Ui=S=>{S.popup.onmousedown=()=>{S.container.onmouseup=function(T){S.container.onmouseup=void 0,T.target===S.container&&(Vi=!0)}}},dd=S=>{S.container.onmousedown=()=>{S.popup.onmouseup=function(T){S.popup.onmouseup=void 0,(T.target===S.popup||S.popup.contains(T.target))&&(Vi=!0)}}},V=(S,T,F)=>{T.container.onclick=Q=>{const ue=j.innerParams.get(S);if(Vi){Vi=!1;return}Q.target===T.container&&se(ue.allowOutsideClick)&&F(Lo.backdrop)}},U=S=>typeof S=="object"&&S.jquery,Z=S=>S instanceof Element||U(S),ae=S=>{const T={};return typeof S[0]=="object"&&!Z(S[0])?Object.assign(T,S[0]):["title","html","icon"].forEach((F,Q)=>{const ue=S[Q];typeof ue=="string"||Z(ue)?T[F]=ue:ue!==void 0&&K("Unexpected type of ".concat(F,'! Expected "string" or "Element", got ').concat(typeof ue))}),T};function ze(){const S=this;for(var T=arguments.length,F=new Array(T),Q=0;Q<T;Q++)F[Q]=arguments[Q];return new S(...F)}function Xe(S){class T extends this{_main(Q,ue){return super._main(Q,Object.assign({},S,ue))}}return T}const rt=()=>C.timeout&&C.timeout.getTimerLeft(),ot=()=>{if(C.timeout)return so(),C.timeout.stop()},qt=()=>{if(C.timeout){const S=C.timeout.start();return Yt(S),S}},Gt=()=>{const S=C.timeout;return S&&(S.running?ot():qt())},ja=S=>{if(C.timeout){const T=C.timeout.increase(S);return Yt(T,!0),T}},$o=()=>!!(C.timeout&&C.timeout.isRunning());let zr=!1;const ho={};function Wi(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ho[S]=this,zr||(document.body.addEventListener("click",Ho),zr=!0)}const Ho=S=>{for(let T=S.target;T&&T!==document;T=T.parentNode)for(const F in ho){const Q=T.getAttribute(F);if(Q){ho[F].fire({template:Q});return}}};var ct=Object.freeze({__proto__:null,argsToParams:ae,bindClickHandler:Wi,clickCancel:Xu,clickConfirm:Kc,clickDeny:Yc,enableLoading:Ro,fire:ze,getActions:gt,getCancelButton:Ye,getCloseButton:Le,getConfirmButton:qe,getContainer:re,getDenyButton:Be,getFocusableElements:ke,getFooter:At,getHtmlContainer:Me,getIcon:ee,getIconContent:ie,getImage:we,getInputLabel:Mt,getLoader:pt,getPopup:fe,getProgressSteps:le,getTimerLeft:rt,getTimerProgressBar:jt,getTitle:Ce,getValidationMessage:ye,increaseTimer:ja,isDeprecatedParameter:Kl,isLoading:lt,isTimerRunning:$o,isUpdatableParameter:Gl,isValidParameter:Dt,isVisible:Xn,mixin:Xe,resumeTimer:qt,showLoading:Ro,stopTimer:ot,toggleTimer:Gt});class Sr{constructor(T,F){this.callback=T,this.remaining=F,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(T){const F=this.running;return F&&this.stop(),this.remaining+=T,F&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Fn=["swal-title","swal-html","swal-footer"],lr=S=>{const T=typeof S.template=="string"?document.querySelector(S.template):S.template;if(!T)return{};const F=T.content;return Fk(F),Object.assign(Vo(F),Rf(F),zk(F),qi(F),ud(F),zf(F),Ps(F,Fn))},Vo=S=>{const T={};return Array.from(S.querySelectorAll("swal-param")).forEach(Q=>{Gi(Q,["name","value"]);const ue=Q.getAttribute("name"),Fe=Q.getAttribute("value");typeof zo[ue]=="boolean"?T[ue]=Fe!=="false":typeof zo[ue]=="object"?T[ue]=JSON.parse(Fe):T[ue]=Fe}),T},Rf=S=>{const T={};return Array.from(S.querySelectorAll("swal-function-param")).forEach(Q=>{const ue=Q.getAttribute("name"),Fe=Q.getAttribute("value");T[ue]=new Function("return ".concat(Fe))()}),T},zk=S=>{const T={};return Array.from(S.querySelectorAll("swal-button")).forEach(Q=>{Gi(Q,["type","color","aria-label"]);const ue=Q.getAttribute("type");T["".concat(ue,"ButtonText")]=Q.innerHTML,T["show".concat(H(ue),"Button")]=!0,Q.hasAttribute("color")&&(T["".concat(ue,"ButtonColor")]=Q.getAttribute("color")),Q.hasAttribute("aria-label")&&(T["".concat(ue,"ButtonAriaLabel")]=Q.getAttribute("aria-label"))}),T},qi=S=>{const T={},F=S.querySelector("swal-image");return F&&(Gi(F,["src","width","height","alt"]),F.hasAttribute("src")&&(T.imageUrl=F.getAttribute("src")),F.hasAttribute("width")&&(T.imageWidth=F.getAttribute("width")),F.hasAttribute("height")&&(T.imageHeight=F.getAttribute("height")),F.hasAttribute("alt")&&(T.imageAlt=F.getAttribute("alt"))),T},ud=S=>{const T={},F=S.querySelector("swal-icon");return F&&(Gi(F,["type","color"]),F.hasAttribute("type")&&(T.icon=F.getAttribute("type")),F.hasAttribute("color")&&(T.iconColor=F.getAttribute("color")),T.iconHtml=F.innerHTML),T},zf=S=>{const T={},F=S.querySelector("swal-input");F&&(Gi(F,["type","label","placeholder","value"]),T.input=F.getAttribute("type")||"text",F.hasAttribute("label")&&(T.inputLabel=F.getAttribute("label")),F.hasAttribute("placeholder")&&(T.inputPlaceholder=F.getAttribute("placeholder")),F.hasAttribute("value")&&(T.inputValue=F.getAttribute("value")));const Q=Array.from(S.querySelectorAll("swal-input-option"));return Q.length&&(T.inputOptions={},Q.forEach(ue=>{Gi(ue,["value"]);const Fe=ue.getAttribute("value"),dt=ue.innerHTML;T.inputOptions[Fe]=dt})),T},Ps=(S,T)=>{const F={};for(const Q in T){const ue=T[Q],Fe=S.querySelector(ue);Fe&&(Gi(Fe,[]),F[ue.replace(/^swal-/,"")]=Fe.innerHTML.trim())}return F},Fk=S=>{const T=Fn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(S.children).forEach(F=>{const Q=F.tagName.toLowerCase();T.includes(Q)||q("Unrecognized element <".concat(Q,">"))})},Gi=(S,T)=>{Array.from(S.attributes).forEach(F=>{T.indexOf(F.name)===-1&&q(['Unrecognized attribute "'.concat(F.name,'" on <').concat(S.tagName.toLowerCase(),">."),"".concat(T.length?"Allowed attributes are: ".concat(T.join(", ")):"To set the value, use HTML within the element.")])})},hd=10,ht=S=>{const T=re(),F=fe();typeof S.willOpen=="function"&&S.willOpen(F);const ue=window.getComputedStyle(document.body).overflowY;Ff(T,F,S),setTimeout(()=>{un(T,F)},hd),he()&&(pd(T,S.scrollbarPadding,ue),th()),!et()&&!C.previousActiveElement&&(C.previousActiveElement=document.activeElement),typeof S.didOpen=="function"&&setTimeout(()=>S.didOpen(F)),Lt(T,P["no-transition"])},uh=S=>{const T=fe();if(S.target!==T||!wr)return;const F=re();T.removeEventListener(wr,uh),F.style.overflowY="auto"},un=(S,T)=>{wr&&xn(T)?(S.style.overflowY="hidden",T.addEventListener(wr,uh)):S.style.overflowY="auto"},pd=(S,T,F)=>{Qc(),T&&F!=="hidden"&&Ml(F),setTimeout(()=>{S.scrollTop=0})},Ff=(S,T,F)=>{$e(S,F.showClass.backdrop),T.style.setProperty("opacity","0","important"),gn(T,"grid"),setTimeout(()=>{$e(T,F.showClass.popup),T.style.removeProperty("opacity")},hd),$e([document.documentElement,document.body],P.shown),F.heightAuto&&F.backdrop&&!F.toast&&$e([document.documentElement,document.body],P["height-auto"])};var hh={email:(S,T)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(S)?Promise.resolve():Promise.resolve(T||"Invalid email address"),url:(S,T)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(S)?Promise.resolve():Promise.resolve(T||"Invalid URL")};function hn(S){S.inputValidator||(S.input==="email"&&(S.inputValidator=hh.email),S.input==="url"&&(S.inputValidator=hh.url))}function fd(S){(!S.target||typeof S.target=="string"&&!document.querySelector(S.target)||typeof S.target!="string"&&!S.target.appendChild)&&(q('Target parameter is not valid, defaulting to "body"'),S.target="body")}function $f(S){hn(S),S.showLoaderOnConfirm&&!S.preConfirm&&q(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),fd(S),typeof S.title=="string"&&(S.title=S.title.split(`
`).join("<br />")),on(S)}let po;var Zt=new WeakMap;class Jt{constructor(){if(b(this,Zt,{writable:!0,value:void 0}),typeof window>"u")return;po=this;for(var T=arguments.length,F=new Array(T),Q=0;Q<T;Q++)F[Q]=arguments[Q];const ue=Object.freeze(this.constructor.argsToParams(F));this.params=ue,this.isAwaitingPromise=!1,l(this,Zt,this._main(po.params))}_main(T){let F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};lh(Object.assign({},F,T)),C.currentInstance&&(C.currentInstance._destroy(),he()&&ua()),C.currentInstance=po;const Q=ph(T,F);$f(Q),Object.freeze(Q),C.timeout&&(C.timeout.stop(),delete C.timeout),clearTimeout(C.restoreFocusTimeout);const ue=md(po);return _r(po,Q),j.innerParams.set(po,Q),$k(po,ue,Q)}then(T){return i(this,Zt).then(T)}finally(T){return i(this,Zt).finally(T)}}const $k=(S,T,F)=>new Promise((Q,ue)=>{const Fe=dt=>{S.close({isDismissed:!0,dismiss:dt})};xr.swalPromiseResolve.set(S,Q),xr.swalPromiseReject.set(S,ue),T.confirmButton.onclick=()=>{Hi(S)},T.denyButton.onclick=()=>{sh(S)},T.cancelButton.onclick=()=>{zl(S,Fe)},T.closeButton.onclick=()=>{Fe(Lo.close)},Ms(S,T,Fe),ca(S,C,F,Fe),ed(S,F),ht(F),Hf(C,F,Fe),Da(T,F),setTimeout(()=>{T.container.scrollTop=0})}),ph=(S,T)=>{const F=lr(S),Q=Object.assign({},zo,T,F,S);return Q.showClass=Object.assign({},zo.showClass,Q.showClass),Q.hideClass=Object.assign({},zo.hideClass,Q.hideClass),Q},md=S=>{const T={popup:fe(),container:re(),actions:gt(),confirmButton:qe(),denyButton:Be(),cancelButton:Ye(),loader:pt(),closeButton:Le(),validationMessage:ye(),progressSteps:le()};return j.domCache.set(S,T),T},Hf=(S,T,F)=>{const Q=jt();Wt(Q),T.timer&&(S.timeout=new Sr(()=>{F("timer"),delete S.timeout},T.timer),T.timerProgressBar&&(gn(Q),vt(Q,T,"timerProgressBar"),setTimeout(()=>{S.timeout&&S.timeout.running&&Yt(T.timer)})))},Da=(S,T)=>{if(!T.toast){if(!se(T.allowEnterKey)){Vf();return}Ls(S,T)||El(-1,1)}},Ls=(S,T)=>T.focusDeny&&Qn(S.denyButton)?(S.denyButton.focus(),!0):T.focusCancel&&Qn(S.cancelButton)?(S.cancelButton.focus(),!0):T.focusConfirm&&Qn(S.confirmButton)?(S.confirmButton.focus(),!0):!1,Vf=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const S=new Date,T=localStorage.getItem("swal-initiation");T?(S.getTime()-Date.parse(T))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const F=document.createElement("audio");F.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",F.loop=!0,document.body.appendChild(F),setTimeout(()=>{F.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(S))}Jt.prototype.disableButtons=Vl,Jt.prototype.enableButtons=Hl,Jt.prototype.getInput=$l,Jt.prototype.disableInput=Wl,Jt.prototype.enableInput=Ul,Jt.prototype.hideLoading=Ns,Jt.prototype.disableLoading=Ns,Jt.prototype.showValidationMessage=Ca,Jt.prototype.resetValidationMessage=ql,Jt.prototype.close=co,Jt.prototype.closePopup=co,Jt.prototype.closeModal=co,Jt.prototype.closeToast=co,Jt.prototype.rejectPromise=fa,Jt.prototype.update=ld,Jt.prototype._destroy=cd,Object.assign(Jt,ct),Object.keys(dh).forEach(S=>{Jt[S]=function(){return po&&po[S]?po[S](...arguments):null}}),Jt.DismissReason=Lo,Jt.version="11.7.27";const Ql=Jt;return Ql.default=Ql,Ql}),typeof tt<"u"&&tt.Sweetalert2&&(tt.swal=tt.sweetAlert=tt.Swal=tt.SweetAlert=tt.Sweetalert2),typeof document<"u"&&function(i,l){var u=i.createElement("style");if(i.getElementsByTagName("head")[0].appendChild(u),u.styleSheet)u.styleSheet.disabled||(u.styleSheet.cssText=l);else try{u.innerHTML=l}catch{u.innerText=l}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(n3);var Hte=n3.exports;const Vte=ws(Hte);class Li{constructor(){as(this,"alert");as(this,"loading",()=>{this.alert.fire({title:"Loading...",text:"Please wait",allowOutsideClick:!1,allowEscapeKey:!1,didOpen:()=>{bizAlert.showLoading()}})});as(this,"hideLoading",()=>{this.alert.hideLoading()});as(this,"inputPassword",()=>this.alert.fire({title:"Enter your password",input:"password",inputLabel:"Password",inputPlaceholder:"Enter your password",inputAttributes:{maxlength:10,autocapitalize:"off",autocorrect:"off"},showCancelButton:!0,confirmButtonColor:"#a8237f",cancelButtonColor:"#d33",confirmButtonText:"Yes, I am sure"}));as(this,"inputFile",()=>this.alert.fire({title:"Select your image.",input:"file",inputAttributes:{accept:"image/*","aria-label":"Upload picture"},confirmButtonText:"OK",confirmButtonColor:"#a8237f"}));as(this,"inputText",(r,i,l=null)=>this.alert.fire({title:r,input:"text",inputValue:l,inputPlaceholder:i,confirmButtonText:"OK",confirmButtonColor:"#a8237f",inputValidator:u=>{if(!u)return i}}));as(this,"errorAlert",(r,i)=>{this.alert.fire({title:r,text:i,icon:"error",confirmButtonText:"OK",confirmButtonColor:"#a8237f"})});as(this,"confirmAlert",(r,i)=>this.alert.fire({title:r,text:i,icon:"warning",confirmButtonText:"OK",confirmButtonColor:"#a8237f"}));this.alert=Vte}}function Oi({isShow:t,title:r,children:i,handleClose:l,large:u}){return d.jsxs(ru,{size:u,show:t,onHide:l,animation:!1,centered:!0,children:[d.jsx(ru.Header,{closeButton:!0,children:d.jsx(ru.Title,{children:r})}),d.jsx(ru.Body,{children:i})]})}function Ute(){const{isLoading:t,technologies:r,errorMess:i}=He(ce=>ce.technologyReducer),l=nt(),u=new Li,p=[{name:"Dashboard",url:"/bsl/admin"},{name:"Technology",url:null}],m=[{name:"ID",selector:ce=>ce.id,sortable:!0},{name:"Name",selector:ce=>ce.name,sortable:!0},{name:"Indexing",selector:ce=>ce.order_by,sortable:!0},{name:"Image",cell:ce=>d.jsx("img",{style:{height:"40px",width:"40px"},src:Cn(ce.image_link)})},{name:"Actions",cell:ce=>d.jsxs(ai,{children:[d.jsx(je,{to:"#",onClick:oe=>te(ce==null?void 0:ce.slug),className:"dropdown-item",children:"Edit"}),d.jsx(je,{to:"#",onClick:oe=>ge(ce==null?void 0:ce.slug),className:"dropdown-item",children:"Delete"})]})}],[w,b]=D.useState(!1),[y,C]=D.useState("Add New Technology"),[_,x]=D.useState(!1),[j,M]=D.useState(""),[R,P]=D.useState(""),[B,I]=D.useState(""),[O,H]=D.useState(""),q=()=>{b(!w),G()},K=ce=>{H(ce[0])},G=()=>{P(""),I("")},z=ce=>{ce.preventDefault();let oe=new FormData;R?oe.append("name",R):Ee("Name is required."),B?oe.append("order_by",B):Ee("Indexing is required."),O&&oe.append("image_link",O),R&&B&&(ir("Please wait a while, We are processing your request."),l(_?Ng({dataset:oe,slug:j}):Tg(oe))),q()},te=ce=>{se(ce)},se=ce=>{M(ce);let oe=r.filter(re=>re.slug===ce);oe=oe[0],C(`Edit ${oe==null?void 0:oe.name}`),x(!0),P(oe==null?void 0:oe.name),I(oe==null?void 0:oe.order_by),H(oe==null?void 0:oe.image_link),b(!w)},ge=async ce=>{M(ce);let{isConfirmed:oe}=await u.confirmAlert("Are you sure?","Once you delete this you can't able to recover this data");oe&&l(Ig({slug:ce}))};return D.useEffect(()=>{l(Ap(0))},[l]),t?d.jsx(ar,{}):d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Technology Settings",url:"/bsl/admin/page-settings/technology"}),d.jsx(tn,{list:p}),d.jsx("div",{className:"container-fluid",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-12 col-sm-12",children:d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"card-header",children:[d.jsx("h4",{children:"Technology Lists"}),d.jsxs("button",{className:"btn btn-info btn-mini float-right",onClick:()=>{b(!w),x(!1),C("Add New Technology")},children:[d.jsx(Pi,{})," Add New Technology"]})]}),d.jsx("div",{className:"card-body",children:d.jsx(li,{columns:m,data:r,isLoading:t,itemPerPage:10})})]})})})}),d.jsx(Oi,{isShow:w,title:y,handleClose:q,large:"lg",children:d.jsx("form",{className:"form-profile",onSubmit:z,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Name ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:R,onChange:ce=>{P(ce.target.value)},placeholder:"name",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Short Order ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:B,onChange:ce=>{I(ce.target.value)},placeholder:"short order",type:"number"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Image",file:O,id:"imageFile",handler:K,required:"required"})})}),d.jsx("hr",{}),d.jsx("div",{className:"col-md-12 mt-3",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})]})})})]})}function Wte(t){const{isLoading:r,industries:i,apiUrl:l,errorMess:u}=He(re=>re.industriesReducer),p=nt(),m=new Li,w=[{name:"Dashboard",url:"/bsl/admin"},{name:"Industries",url:null}],b=[{name:"ID",selector:re=>re.id,sortable:!0},{name:"Name",selector:re=>re.name,sortable:!0},{name:"Indexing",selector:re=>re.order_by,sortable:!0},{name:"Image",cell:re=>d.jsx("img",{style:{height:"40px",width:"40px"},src:Cn(re.image_link)})},{name:"Actions",cell:re=>d.jsxs(ai,{children:[d.jsx(je,{to:"#",onClick:J=>ge(re==null?void 0:re.slug),className:"dropdown-item",children:"Edit"}),d.jsx(je,{to:"#",onClick:J=>oe(re==null?void 0:re.slug),className:"dropdown-item",children:"Delete"})]})}],[y,C]=D.useState(!1),[_,x]=D.useState("Add New Technology"),[j,M]=D.useState(!1),[R,P]=D.useState(""),[B,I]=D.useState(""),[O,H]=D.useState(""),[q,K]=D.useState(""),G=()=>{C(!y),te()},z=re=>{K(re[0])},te=()=>{I(""),H(""),K("")},se=re=>{re.preventDefault();let J=new FormData;B?J.append("name",B):Ee("Name is required."),O?J.append("order_by",O):Ee("Indexing is required."),q&&J.append("image_link",q),B&&O&&(ir("Please wait a while, We are processing your request."),p(j?jg({dataset:J,slug:R}):Eg(J))),G()},ge=re=>{ce(re)},ce=re=>{P(re);let J=i.filter(ne=>ne.slug===re);J=J[0],x(`Edit ${J==null?void 0:J.name}`),M(!0),I(J==null?void 0:J.name),H(J==null?void 0:J.order_by),K(J==null?void 0:J.image_link),C(!y)},oe=async re=>{let{isConfirmed:J}=await m.confirmAlert("Are you sure?","Once you delete this you can't able to recover this data");J&&p(Dg({slug:re}))};return D.useEffect(()=>{p(Cp(0))},[p]),r?d.jsx(ar,{}):d.jsxs(d.Fragment,{children:[d.jsx(Et,{title:"Industries",url:"/bsl/admin/industries"}),d.jsx(tn,{list:w}),d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-lg-12 col-sm-12",children:d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"card-header",children:[d.jsx("h4",{children:"Industries Lists"}),d.jsxs("button",{className:"btn btn-info btn-mini float-right",onClick:()=>{C(!y),M(!1),x("Add New Industries")},children:[d.jsx(Pi,{})," Add New Industries"]})]}),d.jsx("div",{className:"card-body",children:d.jsx(li,{columns:b,data:i,isLoading:r,itemPerPage:10})})]})})}),d.jsx(Oi,{isShow:y,title:_,handleClose:G,large:"lg",children:d.jsx("form",{className:"form-profile",onSubmit:se,children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Name ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:B,onChange:re=>{I(re.target.value)},placeholder:"name",type:"text"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Short Order ",d.jsx("sup",{className:"text-danger",children:d.jsx(Te,{})})]}),d.jsx("input",{className:"form-control",value:O,onChange:re=>{H(re.target.value)},placeholder:"short order",type:"number"})]})}),d.jsx("div",{className:"col-md-6",children:d.jsx("div",{className:"form-group",children:d.jsx(qn,{label:"Image",file:q,id:"imageFile",handler:z,required:"required"})})}),d.jsx("hr",{}),d.jsx("div",{className:"col-md-12 mt-3",children:d.jsx("button",{className:"btn btn-primary px-3 float-right",type:"submit",children:"Save"})})]})})})]})}const{apiAccess:gf}=new Kn,bf={isLoading:!0,abouts:[],apiUrl:"abouts",errorMess:null,metaInfo:[]},Ug=ve("aboutsUs/fetchAboutUs",async(t,{rejectWithValue:r})=>{try{return(await gf.get(bf.apiUrl)).data}catch(i){return r(i.response.data)}}),Fy=ve("aboutsUs/fetchAboutDataBySlug",async(t,{rejectWithValue:r})=>{try{return(await gf.get(`${bf.apiUrl}/${t}/show`)).data}catch(i){return r(i.response.data)}}),Wg=ve("aboutsUs/createAboutData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}};return(await gf.post("abouts-store",t,i)).data}catch(i){return r(i.response.data)}}),qg=ve("aboutsUs/updateAboutData",async(t,{rejectWithValue:r})=>{try{const i={headers:{"content-type":"multipart/form-data"}},{slug:l,dataset:u}=t;return(await gf.post(`${bf.apiUrl}/${l}/update`,u,i)).data}catch(i){return r(i.response.data)}}),$y=ve("aboutsUs/deleteAboutData",async(t,{rejectWithValue:r})=>{try{const{slug:i}=t;return(await gf.delete(`${bf.apiUrl}/${i}/destroy`)).data}catch(i){return r(i.response.data)}}),qte=_n({name:"aboutsUs",initialState:bf,extraReducers:{[Ug.pending]:t=>{t.isLoading=!0},[Ug.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.abouts=r},[Ug.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r},[Fy.pending]:t=>{t.isLoading=!0},[Fy.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.metaInfo=r},[Fy.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r},[Wg.pending]:t=>{t.isLoading=!0},[Wg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.abouts=r,t.errorMess=null,We("Data Created Successfully")},[Wg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[qg.pending]:t=>{t.isLoading=!0},[qg.fulfilled]:(t,{payload:r})=>{t.isLoading=!1,t.abouts=r,t.errorMess=null,We("Data Updated Successfully")},[qg.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)},[$y.pending]:t=>{t.isLoading=!0},[$y.fulfilled]:(t,{payload:r})=>{t.isLoading=!1;const{slug:i}=r;t.abouts=t.abouts.filter(l=>l.slug!==i),t.errorMess=null,We("Data Deleted Successfully")},[$y.rejected]:(t,{payload:r})=>{t.isLoading=!1,t.message=r,Pe(r)}}}),Gte=qte.reducer;var _w={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */_w.exports;(function(t,r){(function(i,l){t.exports=l(D)})(self,i=>(()=>{var l={703:(w,b,y)=>{var C=y(414);function _(){}function x(){}x.resetWarningCache=_,w.exports=function(){function j(P,B,I,O,H,q){if(q!==C){var K=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw K.name="Invariant Violation",K}}function M(){return j}j.isRequired=j;var R={array:j,bigint:j,bool:j,func:j,number:j,object:j,string:j,symbol:j,any:j,arrayOf:M,element:j,elementType:j,instanceOf:M,node:j,objectOf:M,oneOf:M,oneOfType:M,shape:M,exact:M,checkPropTypes:x,resetWarningCache:_};return R.PropTypes=R,R}},697:(w,b,y)=>{w.exports=y(703)()},414:w=>{w.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:w=>{w.exports=i}},u={};function p(w){var b=u[w];if(b!==void 0)return b.exports;var y=u[w]={exports:{}};return l[w](y,y.exports,p),y.exports}p.n=w=>{var b=w&&w.__esModule?()=>w.default:()=>w;return p.d(b,{a:b}),b},p.d=(w,b)=>{for(var y in b)p.o(b,y)&&!p.o(w,y)&&Object.defineProperty(w,y,{enumerable:!0,get:b[y]})},p.o=(w,b)=>Object.prototype.hasOwnProperty.call(w,b),p.r=w=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(w,"__esModule",{value:!0})};var m={};return(()=>{p.r(m),p.d(m,{CKEditor:()=>Ui,CKEditorContext:()=>Yl});var w=p(787),b=p.n(w),y=p(697),C=p.n(y);const _=new Array(256).fill("").map((V,U)=>("0"+U.toString(16)).slice(-2));class x{constructor(U){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof U.crashNumberLimit=="number"?U.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof U.minimumNonErrorTimePeriod=="number"?U.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=Z=>{const ae="error"in Z?Z.error:Z.reason;ae instanceof Error&&this._handleError(ae,Z)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(U,Z){this._listeners[U]||(this._listeners[U]=[]),this._listeners[U].push(Z)}off(U,Z){this._listeners[U]=this._listeners[U].filter(ae=>ae!==Z)}_fire(U,...Z){const ae=this._listeners[U]||[];for(const ze of ae)ze.apply(this,[null,...Z])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(U,Z){if(this._shouldReactToError(U)){this.crashes.push({message:U.message,stack:U.stack,filename:Z instanceof ErrorEvent?Z.filename:void 0,lineno:Z instanceof ErrorEvent?Z.lineno:void 0,colno:Z instanceof ErrorEvent?Z.colno:void 0,date:this._now()});const ae=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:U,causesRestart:ae}),ae?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(U){return U.is&&U.is("CKEditorError")&&U.context!==void 0&&U.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(U)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function j(V,U=new Set){const Z=[V],ae=new Set;let ze=0;for(;Z.length>ze;){const Xe=Z[ze++];if(!ae.has(Xe)&&M(Xe)&&!U.has(Xe))if(ae.add(Xe),Symbol.iterator in Xe)try{for(const rt of Xe)Z.push(rt)}catch{}else for(const rt in Xe)rt!=="defaultValue"&&Z.push(Xe[rt])}return ae}function M(V){const U=Object.prototype.toString.call(V),Z=typeof V;return!(Z==="number"||Z==="boolean"||Z==="string"||Z==="symbol"||Z==="function"||U==="[object Date]"||U==="[object RegExp]"||U==="[object Module]"||V==null||V._watchdogExcluded||V instanceof EventTarget||V instanceof Event)}function R(V,U,Z=new Set){if(V===U&&typeof(ae=V)=="object"&&ae!==null)return!0;var ae;const ze=j(V,Z),Xe=j(U,Z);for(const rt of ze)if(Xe.has(rt))return!0;return!1}const P=function(V){var U=typeof V;return V!=null&&(U=="object"||U=="function")},B=typeof tt=="object"&&tt&&tt.Object===Object&&tt;var I=typeof self=="object"&&self&&self.Object===Object&&self;const O=B||I||Function("return this")(),H=function(){return O.Date.now()};var q=/\s/;const K=function(V){for(var U=V.length;U--&&q.test(V.charAt(U)););return U};var G=/^\s+/;const z=function(V){return V&&V.slice(0,K(V)+1).replace(G,"")},te=O.Symbol;var se=Object.prototype,ge=se.hasOwnProperty,ce=se.toString,oe=te?te.toStringTag:void 0;const re=function(V){var U=ge.call(V,oe),Z=V[oe];try{V[oe]=void 0;var ae=!0}catch{}var ze=ce.call(V);return ae&&(U?V[oe]=Z:delete V[oe]),ze};var J=Object.prototype.toString;const ne=function(V){return J.call(V)};var fe=te?te.toStringTag:void 0;const ee=function(V){return V==null?V===void 0?"[object Undefined]":"[object Null]":fe&&fe in Object(V)?re(V):ne(V)},ie=function(V){return V!=null&&typeof V=="object"},Ce=function(V){return typeof V=="symbol"||ie(V)&&ee(V)=="[object Symbol]"};var Me=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ye=parseInt;const qe=function(V){if(typeof V=="number")return V;if(Ce(V))return NaN;if(P(V)){var U=typeof V.valueOf=="function"?V.valueOf():V;V=P(U)?U+"":U}if(typeof V!="string")return V===0?V:+V;V=z(V);var Z=we.test(V);return Z||le.test(V)?ye(V.slice(2),Z?2:8):Me.test(V)?NaN:+V};var Ye=Math.max,Be=Math.min;const Mt=function(V,U,Z){var ae,ze,Xe,rt,ot,qt,Gt=0,ja=!1,$o=!1,zr=!0;if(typeof V!="function")throw new TypeError("Expected a function");function ho(Fn){var lr=ae,Vo=ze;return ae=ze=void 0,Gt=Fn,rt=V.apply(Vo,lr)}function Wi(Fn){var lr=Fn-qt;return qt===void 0||lr>=U||lr<0||$o&&Fn-Gt>=Xe}function Ho(){var Fn=H();if(Wi(Fn))return ct(Fn);ot=setTimeout(Ho,function(lr){var Vo=U-(lr-qt);return $o?Be(Vo,Xe-(lr-Gt)):Vo}(Fn))}function ct(Fn){return ot=void 0,zr&&ae?ho(Fn):(ae=ze=void 0,rt)}function Sr(){var Fn=H(),lr=Wi(Fn);if(ae=arguments,ze=this,qt=Fn,lr){if(ot===void 0)return function(Vo){return Gt=Vo,ot=setTimeout(Ho,U),ja?ho(Vo):rt}(qt);if($o)return clearTimeout(ot),ot=setTimeout(Ho,U),ho(qt)}return ot===void 0&&(ot=setTimeout(Ho,U)),rt}return U=qe(U)||0,P(Z)&&(ja=!!Z.leading,Xe=($o="maxWait"in Z)?Ye(qe(Z.maxWait)||0,U):Xe,zr="trailing"in Z?!!Z.trailing:zr),Sr.cancel=function(){ot!==void 0&&clearTimeout(ot),Gt=0,ae=qt=ze=ot=void 0},Sr.flush=function(){return ot===void 0?rt:ct(H())},Sr},pt=function(V,U,Z){var ae=!0,ze=!0;if(typeof V!="function")throw new TypeError("Expected a function");return P(Z)&&(ae="leading"in Z?!!Z.leading:ae,ze="trailing"in Z?!!Z.trailing:ze),Mt(V,U,{leading:ae,maxWait:U,trailing:ze})},gt=function(){this.__data__=[],this.size=0},At=function(V,U){return V===U||V!=V&&U!=U},jt=function(V,U){for(var Z=V.length;Z--;)if(At(V[Z][0],U))return Z;return-1};var Le=Array.prototype.splice;const Ie=function(V){var U=this.__data__,Z=jt(U,V);return!(Z<0)&&(Z==U.length-1?U.pop():Le.call(U,Z,1),--this.size,!0)},ke=function(V){var U=this.__data__,Z=jt(U,V);return Z<0?void 0:U[Z][1]},he=function(V){return jt(this.__data__,V)>-1},et=function(V,U){var Z=this.__data__,ae=jt(Z,V);return ae<0?(++this.size,Z.push([V,U])):Z[ae][1]=U,this};function lt(V){var U=-1,Z=V==null?0:V.length;for(this.clear();++U<Z;){var ae=V[U];this.set(ae[0],ae[1])}}lt.prototype.clear=gt,lt.prototype.delete=Ie,lt.prototype.get=ke,lt.prototype.has=he,lt.prototype.set=et;const nn=lt,Rn=function(){this.__data__=new nn,this.size=0},Do=function(V){var U=this.__data__,Z=U.delete(V);return this.size=U.size,Z},vt=function(V){return this.__data__.get(V)},rn=function(V){return this.__data__.has(V)},io=function(V){if(!P(V))return!1;var U=ee(V);return U=="[object Function]"||U=="[object GeneratorFunction]"||U=="[object AsyncFunction]"||U=="[object Proxy]"},at=O["__core-js_shared__"];var $e=function(){var V=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return V?"Symbol(src)_1."+V:""}();const Lt=function(V){return!!$e&&$e in V};var gr=Function.prototype.toString;const Yn=function(V){if(V!=null){try{return gr.call(V)}catch{}try{return V+""}catch{}}return""};var gn=/^\[object .+?Constructor\]$/,Wt=Function.prototype,Cs=Object.prototype,Bi=Wt.toString,Qn=Cs.hasOwnProperty,As=RegExp("^"+Bi.call(Qn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Lr=function(V){return!(!P(V)||Lt(V))&&(io(V)?As:gn).test(Yn(V))},xn=function(V,U){return V==null?void 0:V[U]},Yt=function(V,U){var Z=xn(V,U);return Lr(Z)?Z:void 0},so=Yt(O,"Map"),ao=Yt(Object,"create"),_s=function(){this.__data__=ao?ao(null):{},this.size=0},Ri=function(V){var U=this.has(V)&&delete this.__data__[V];return this.size-=U?1:0,U};var br=Object.prototype.hasOwnProperty;const vl=function(V){var U=this.__data__;if(ao){var Z=U[V];return Z==="__lodash_hash_undefined__"?void 0:Z}return br.call(U,V)?U[V]:void 0};var ia=Object.prototype.hasOwnProperty;const sa=function(V){var U=this.__data__;return ao?U[V]!==void 0:ia.call(U,V)},aa=function(V,U){var Z=this.__data__;return this.size+=this.has(V)?0:1,Z[V]=ao&&U===void 0?"__lodash_hash_undefined__":U,this};function on(V){var U=-1,Z=V==null?0:V.length;for(this.clear();++U<Z;){var ae=V[U];this.set(ae[0],ae[1])}}on.prototype.clear=_s,on.prototype.delete=Ri,on.prototype.get=vl,on.prototype.has=sa,on.prototype.set=aa;const ci=on,To=function(){this.size=0,this.__data__={hash:new ci,map:new(so||nn),string:new ci}},di=function(V){var U=typeof V;return U=="string"||U=="number"||U=="symbol"||U=="boolean"?V!=="__proto__":V===null},wr=function(V,U){var Z=V.__data__;return di(U)?Z[typeof U=="string"?"string":"hash"]:Z.map},yl=function(V){var U=wr(this,V).delete(V);return this.size-=U?1:0,U},Cl=function(V){return wr(this,V).get(V)},Wr=function(V){return wr(this,V).has(V)},Zn=function(V,U){var Z=wr(this,V),ae=Z.size;return Z.set(V,U),this.size+=Z.size==ae?0:1,this};function Jn(V){var U=-1,Z=V==null?0:V.length;for(this.clear();++U<Z;){var ae=V[U];this.set(ae[0],ae[1])}}Jn.prototype.clear=To,Jn.prototype.delete=yl,Jn.prototype.get=Cl,Jn.prototype.has=Wr,Jn.prototype.set=Zn;const ui=Jn,la=function(V,U){var Z=this.__data__;if(Z instanceof nn){var ae=Z.__data__;if(!so||ae.length<199)return ae.push([V,U]),this.size=++Z.size,this;Z=this.__data__=new ui(ae)}return Z.set(V,U),this.size=Z.size,this};function In(V){var U=this.__data__=new nn(V);this.size=U.size}In.prototype.clear=Rn,In.prototype.delete=Do,In.prototype.get=vt,In.prototype.has=rn,In.prototype.set=la;const No=In,Al=function(V,U){for(var Z=-1,ae=V==null?0:V.length;++Z<ae&&U(V[Z],Z,V)!==!1;);return V},zn=function(){try{var V=Yt(Object,"defineProperty");return V({},"",{}),V}catch{}}(),hi=function(V,U,Z){U=="__proto__"&&zn?zn(V,U,{configurable:!0,enumerable:!0,value:Z,writable:!0}):V[U]=Z};var pi=Object.prototype.hasOwnProperty;const xs=function(V,U,Z){var ae=V[U];pi.call(V,U)&&At(ae,Z)&&(Z!==void 0||U in V)||hi(V,U,Z)},zi=function(V,U,Z,ae){var ze=!Z;Z||(Z={});for(var Xe=-1,rt=U.length;++Xe<rt;){var ot=U[Xe],qt=ae?ae(Z[ot],V[ot],ot,Z,V):void 0;qt===void 0&&(qt=V[ot]),ze?hi(Z,ot,qt):xs(Z,ot,qt)}return Z},Or=function(V,U){for(var Z=-1,ae=Array(V);++Z<V;)ae[Z]=U(Z);return ae},Io=function(V){return ie(V)&&ee(V)=="[object Arguments]"};var Ss=Object.prototype,sn=Ss.hasOwnProperty,dn=Ss.propertyIsEnumerable;const _l=Io(function(){return arguments}())?Io:function(V){return ie(V)&&sn.call(V,"callee")&&!dn.call(V,"callee")},Es=Array.isArray,xl=function(){return!1};var js=r&&!r.nodeType&&r,qr=js&&!0&&t&&!t.nodeType&&t,Mo=qr&&qr.exports===js?O.Buffer:void 0;const Po=(Mo?Mo.isBuffer:void 0)||xl;var lo=/^(?:0|[1-9]\d*)$/;const Sl=function(V,U){var Z=typeof V;return!!(U=U??9007199254740991)&&(Z=="number"||Z!="symbol"&&lo.test(V))&&V>-1&&V%1==0&&V<U},Ds=function(V){return typeof V=="number"&&V>-1&&V%1==0&&V<=9007199254740991};var Nt={};Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=!0,Nt["[object Arguments]"]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object Boolean]"]=Nt["[object DataView]"]=Nt["[object Date]"]=Nt["[object Error]"]=Nt["[object Function]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt["[object Object]"]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object WeakMap]"]=!1;const Ge=function(V){return ie(V)&&Ds(V.length)&&!!Nt[ee(V)]},st=function(V){return function(U){return V(U)}};var Sn=r&&!r.nodeType&&r,Qt=Sn&&!0&&t&&!t.nodeType&&t,Ve=Qt&&Qt.exports===Sn&&B.process;const Br=function(){try{var V=Qt&&Qt.require&&Qt.require("util").types;return V||Ve&&Ve.binding&&Ve.binding("util")}catch{}}();var _r=Br&&Br.isTypedArray;const Xn=_r?st(_r):Ge;var Kc=Object.prototype.hasOwnProperty;const Yc=function(V,U){var Z=Es(V),ae=!Z&&_l(V),ze=!Z&&!ae&&Po(V),Xe=!Z&&!ae&&!ze&&Xn(V),rt=Z||ae||ze||Xe,ot=rt?Or(V.length,String):[],qt=ot.length;for(var Gt in V)!U&&!Kc.call(V,Gt)||rt&&(Gt=="length"||ze&&(Gt=="offset"||Gt=="parent")||Xe&&(Gt=="buffer"||Gt=="byteLength"||Gt=="byteOffset")||Sl(Gt,qt))||ot.push(Gt);return ot};var Xu=Object.prototype;const Lo=function(V){var U=V&&V.constructor;return V===(typeof U=="function"&&U.prototype||Xu)},Oo=function(V,U){return function(Z){return V(U(Z))}},ca=Oo(Object.keys,Object);var El=Object.prototype.hasOwnProperty;const fi=function(V){if(!Lo(V))return ca(V);var U=[];for(var Z in Object(V))El.call(V,Z)&&Z!="constructor"&&U.push(Z);return U},Fi=function(V){return V!=null&&Ds(V.length)&&!io(V)},jl=function(V){return Fi(V)?Yc(V):fi(V)},da=function(V,U){return V&&zi(U,jl(U),V)},Dl=function(V){var U=[];if(V!=null)for(var Z in Object(V))U.push(Z);return U};var eh=Object.prototype.hasOwnProperty;const Tl=function(V){if(!P(V))return Dl(V);var U=Lo(V),Z=[];for(var ae in V)(ae!="constructor"||!U&&eh.call(V,ae))&&Z.push(ae);return Z},xr=function(V){return Fi(V)?Yc(V,!0):Tl(V)},th=function(V,U){return V&&zi(U,xr(U),V)};var ua=r&&!r.nodeType&&r,ha=ua&&!0&&t&&!t.nodeType&&t,Qc=ha&&ha.exports===ua?O.Buffer:void 0,Zc=Qc?Qc.allocUnsafe:void 0;const Nl=function(V,U){if(U)return V.slice();var Z=V.length,ae=Zc?Zc(Z):new V.constructor(Z);return V.copy(ae),ae},nh=function(V,U){var Z=-1,ae=V.length;for(U||(U=Array(ae));++Z<ae;)U[Z]=V[Z];return U},Jc=function(V,U){for(var Z=-1,ae=V==null?0:V.length,ze=0,Xe=[];++Z<ae;){var rt=V[Z];U(rt,Z,V)&&(Xe[ze++]=rt)}return Xe},Il=function(){return[]};var Xc=Object.prototype.propertyIsEnumerable,Rr=Object.getOwnPropertySymbols;const Ml=Rr?function(V){return V==null?[]:(V=Object(V),Jc(Rr(V),function(U){return Xc.call(V,U)}))}:Il,Pl=function(V,U){return zi(V,Ml(V),U)},pa=function(V,U){for(var Z=-1,ae=U.length,ze=V.length;++Z<ae;)V[ze+Z]=U[Z];return V},It=Oo(Object.getPrototypeOf,Object),co=Object.getOwnPropertySymbols?function(V){for(var U=[];V;)pa(U,Ml(V)),V=It(V);return U}:Il,Ll=function(V,U){return zi(V,co(V),U)},fa=function(V,U,Z){var ae=U(V);return Es(V)?ae:pa(ae,Z(V))},uo=function(V){return fa(V,jl,Ml)},Ol=function(V){return fa(V,xr,co)},Bo=Yt(O,"DataView"),ma=Yt(O,"Promise"),$i=Yt(O,"Set"),Ro=Yt(O,"WeakMap");var Bl="[object Map]",ed="[object Promise]",ga="[object Set]",td="[object WeakMap]",nd="[object DataView]",rh=Yn(Bo),ba=Yn(so),Rl=Yn(ma),oh=Yn($i),ih=Yn(Ro),Gr=ee;(Bo&&Gr(new Bo(new ArrayBuffer(1)))!=nd||so&&Gr(new so)!=Bl||ma&&Gr(ma.resolve())!=ed||$i&&Gr(new $i)!=ga||Ro&&Gr(new Ro)!=td)&&(Gr=function(V){var U=ee(V),Z=U=="[object Object]"?V.constructor:void 0,ae=Z?Yn(Z):"";if(ae)switch(ae){case rh:return nd;case ba:return Bl;case Rl:return ed;case oh:return ga;case ih:return td}return U});const wa=Gr;var Hi=Object.prototype.hasOwnProperty;const sh=function(V){var U=V.length,Z=new V.constructor(U);return U&&typeof V[0]=="string"&&Hi.call(V,"index")&&(Z.index=V.index,Z.input=V.input),Z},zl=O.Uint8Array,Ts=function(V){var U=new V.constructor(V.byteLength);return new zl(U).set(new zl(V)),U},rd=function(V,U){var Z=U?Ts(V.buffer):V.buffer;return new V.constructor(Z,V.byteOffset,V.byteLength)};var ka=/\w*$/;const Fl=function(V){var U=new V.constructor(V.source,ka.exec(V));return U.lastIndex=V.lastIndex,U};var va=te?te.prototype:void 0,ya=va?va.valueOf:void 0;const Ns=function(V){return ya?Object(ya.call(V)):{}},ah=function(V,U){var Z=U?Ts(V.buffer):V.buffer;return new V.constructor(Z,V.byteOffset,V.length)},$l=function(V,U,Z){var ae=V.constructor;switch(U){case"[object ArrayBuffer]":return Ts(V);case"[object Boolean]":case"[object Date]":return new ae(+V);case"[object DataView]":return rd(V,Z);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ah(V,Z);case"[object Map]":case"[object Set]":return new ae;case"[object Number]":case"[object String]":return new ae(V);case"[object RegExp]":return Fl(V);case"[object Symbol]":return Ns(V)}};var Is=Object.create;const od=function(){function V(){}return function(U){if(!P(U))return{};if(Is)return Is(U);V.prototype=U;var Z=new V;return V.prototype=void 0,Z}}(),Hl=function(V){return typeof V.constructor!="function"||Lo(V)?{}:od(It(V))},Vl=function(V){return ie(V)&&wa(V)=="[object Map]"};var Ul=Br&&Br.isMap;const Wl=Ul?st(Ul):Vl,Ca=function(V){return ie(V)&&wa(V)=="[object Set]"};var ql=Br&&Br.isSet;const zo=ql?st(ql):Ca;var Aa="[object Arguments]",_a="[object Function]",xa="[object Object]",Dt={};Dt[Aa]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object DataView]"]=Dt["[object Boolean]"]=Dt["[object Date]"]=Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt[xa]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object Symbol]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Error]"]=Dt[_a]=Dt["[object WeakMap]"]=!1;const Gl=function V(U,Z,ae,ze,Xe,rt){var ot,qt=1&Z,Gt=2&Z,ja=4&Z;if(ae&&(ot=Xe?ae(U,ze,Xe,rt):ae(U)),ot!==void 0)return ot;if(!P(U))return U;var $o=Es(U);if($o){if(ot=sh(U),!qt)return nh(U,ot)}else{var zr=wa(U),ho=zr==_a||zr=="[object GeneratorFunction]";if(Po(U))return Nl(U,qt);if(zr==xa||zr==Aa||ho&&!Xe){if(ot=Gt||ho?{}:Hl(U),!qt)return Gt?Ll(U,th(ot,U)):Pl(U,da(ot,U))}else{if(!Dt[zr])return Xe?U:{};ot=$l(U,zr,qt)}}rt||(rt=new No);var Wi=rt.get(U);if(Wi)return Wi;rt.set(U,ot),zo(U)?U.forEach(function(ct){ot.add(V(ct,Z,ae,ct,U,rt))}):Wl(U)&&U.forEach(function(ct,Sr){ot.set(Sr,V(ct,Z,ae,Sr,U,rt))});var Ho=$o?void 0:(ja?Gt?Ol:uo:Gt?xr:jl)(U);return Al(Ho||U,function(ct,Sr){Ho&&(ct=U[Sr=ct]),xs(ot,Sr,V(ct,Z,ae,Sr,U,rt))}),ot},Kl=function(V,U){return Gl(V,5,U=typeof U=="function"?U:void 0)};var id=Function.prototype,sd=Object.prototype,ad=id.toString,lh=sd.hasOwnProperty,ld=ad.call(Object);const ch=function(V){if(!ie(V)||ee(V)!="[object Object]")return!1;var U=It(V);if(U===null)return!0;var Z=lh.call(U,"constructor")&&U.constructor;return typeof Z=="function"&&Z instanceof Z&&ad.call(Z)==ld},cd=function(V){return ie(V)&&V.nodeType===1&&!ch(V)};class Fo extends x{constructor(U,Z={}){super(Z),this._editor=null,this._throttledSave=pt(this._save.bind(this),typeof Z.saveInterval=="number"?Z.saveInterval:5e3),U&&(this._creator=(ae,ze)=>U.create(ae,ze)),this._destructor=ae=>ae.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(U){this._creator=U}setDestructor(U){this._destructor=U}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(U=>{console.error("An error happened during the editor destroying.",U)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const U=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,U,U.context)}}).then(()=>{this._fire("restart")})}create(U=this._elementOrData,Z=this._config,ae){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=U,this._config=this._cloneEditorConfiguration(Z)||{},this._config.context=ae,this._creator(U,this._config))).then(ze=>{this._editor=ze,ze.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=ze.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const U=this._editor;return this._editor=null,U.model.document.off("change:data",this._throttledSave),this._destructor(U)})}_save(){const U=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=U}catch(Z){console.error(Z,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(U){this._excludedProps=U}_getData(){const U={};for(const Z of this._editor.model.document.getRootNames())U[Z]=this._editor.data.get({rootName:Z});return U}_isErrorComingFromThisItem(U){return R(this._editor,U.context,this._excludedProps)}_cloneEditorConfiguration(U){return Kl(U,(Z,ae)=>cd(Z)||ae==="context"?Z:void 0)}}const Kr=Symbol("MainQueueId");class Sa extends x{constructor(U,Z={}){super(Z),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new dh,this._watchdogConfig=Z,this._creator=ae=>U.create(ae),this._destructor=ae=>ae.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(U){this._creator=U}setDestructor(U){this._destructor=U}get context(){return this._context}create(U={}){return this._actionQueues.enqueue(Kr,()=>(this._contextConfig=U,this._create()))}getItem(U){return this._getWatchdog(U)._item}getItemState(U){return this._getWatchdog(U).state}add(U){const Z=Ms(U);return Promise.all(Z.map(ae=>this._actionQueues.enqueue(ae.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let ze;if(this._watchdogs.has(ae.id))throw new Error(`Item with the given id is already added: '${ae.id}'.`);if(ae.type==="editor")return ze=new Fo(null,this._watchdogConfig),ze.setCreator(ae.creator),ze._setExcludedProperties(this._contextProps),ae.destructor&&ze.setDestructor(ae.destructor),this._watchdogs.set(ae.id,ze),ze.on("error",(Xe,{error:rt,causesRestart:ot})=>{this._fire("itemError",{itemId:ae.id,error:rt}),ot&&this._actionQueues.enqueue(ae.id,()=>new Promise(qt=>{const Gt=()=>{ze.off("restart",Gt),this._fire("itemRestart",{itemId:ae.id}),qt()};ze.on("restart",Gt)}))}),ze.create(ae.sourceElementOrData,ae.config,this._context);throw new Error(`Not supported item type: '${ae.type}'.`)})))}remove(U){const Z=Ms(U);return Promise.all(Z.map(ae=>this._actionQueues.enqueue(ae,()=>{const ze=this._getWatchdog(ae);return this._watchdogs.delete(ae),ze.destroy()})))}destroy(){return this._actionQueues.enqueue(Kr,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Kr,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(U=>{console.error("An error happened during destroying the context or items.",U)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(U=>(this._context=U,this._contextProps=j(this._context),Promise.all(Array.from(this._watchdogs.values()).map(Z=>(Z._setExcludedProperties(this._contextProps),Z.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const U=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(Z=>Z.destroy())).then(()=>this._destructor(U))})}_getWatchdog(U){const Z=this._watchdogs.get(U);if(!Z)throw new Error(`Item with the given id was not registered: ${U}.`);return Z}_isErrorComingFromThisItem(U){for(const Z of this._watchdogs.values())if(Z._isErrorComingFromThisItem(U))return!1;return R(this._context,U.context)}}class dh{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(U){this._onEmptyCallbacks.push(U)}enqueue(U,Z){const ae=U===Kr;this._activeActions++,this._queues.get(U)||this._queues.set(U,Promise.resolve());const ze=(ae?Promise.all(this._queues.values()):Promise.all([this._queues.get(Kr),this._queues.get(U)])).then(Z),Xe=ze.catch(()=>{});return this._queues.set(U,Xe),ze.finally(()=>{this._activeActions--,this._queues.get(U)===Xe&&this._activeActions===0&&this._onEmptyCallbacks.forEach(rt=>rt())})}}function Ms(V){return Array.isArray(V)?V:[V]}const Ea=b().createContext("contextWatchdog");class Yl extends b().Component{constructor(U,Z){super(U,Z),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(U){return this._shouldComponentUpdate(U)}async _shouldComponentUpdate(U){return U.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(U.config)),U.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(U.config),!0):this.props.children!==U.children}render(){return b().createElement(Ea.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(U){this.contextWatchdog=new Sa(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(Z,ae)=>{this.props.onError(ae.error,{phase:"runtime",willContextRestart:ae.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(U).catch(Z=>{this.props.onError(Z,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Yl.defaultProps={isLayoutReady:!0,onError:(V,U)=>console.error(V,U)},Yl.propTypes={id:C().string,isLayoutReady:C().bool,context:C().func,watchdogConfig:C().object,config:C().object,onReady:C().func,onError:C().func};const Vi="Lock from React integration (@ckeditor/ckeditor5-react)";class Ui extends b().Component{constructor(U){super(U),this.editorDestructionInProgress=null,this.domContainer=b().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:Z}=window;if(Z){const[ae]=Z.split(".").map(Number);ae<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(U){return!!this.editor&&(U.id!==this.props.id||U.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(U)&&this.editor.data.set(U.data),"disabled"in U&&(U.disabled?this.editor.enableReadOnlyMode(Vi):this.editor.disableReadOnlyMode(Vi)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return b().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Sa?this.watchdog=new dd(this.context):this.watchdog=new Ui._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((U,Z)=>this._createEditor(U,Z)),this.watchdog.on("error",(U,{error:Z,causesRestart:ae})=>{(this.props.onError||console.error)(Z,{phase:"runtime",willEditorRestart:ae})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(U=>{(this.props.onError||console.error)(U,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(U,Z){return this.props.editor.create(U,Z).then(ae=>{"disabled"in this.props&&this.props.disabled&&ae.enableReadOnlyMode(Vi);const ze=ae.model.document,Xe=ae.editing.view.document;return ze.on("change:data",rt=>{this.props.onChange&&this.props.onChange(rt,ae)}),Xe.on("focus",rt=>{this.props.onFocus&&this.props.onFocus(rt,ae)}),Xe.on("blur",rt=>{this.props.onBlur&&this.props.onBlur(rt,ae)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(ae)}),ae})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(U=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,U()):this.instance?(await this.instance.destroy(),this.instance=null,U()):void U())})}_shouldUpdateEditor(U){return this.props.data!==U.data&&this.editor.data.get()!==U.data}_getConfig(){const U=this.props.config||{};return this.props.data&&U.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...U,initialData:U.initialData||this.props.data||""}}}Ui.contextType=Ea,Ui.propTypes={editor:C().func.isRequired,data:C().string,config:C().object,disableWatchdog:C().bool,watchdogConfig:C().object,onChange:C().func,onReady:C().func,onFocus:C().func,onBlur:C().func,onError:C().func,disabled:C().bool,id:C().any},Ui._EditorWatchdog=Fo;class dd{constructor(U){this._contextWatchdog=U,this._id=function(){const Z=4294967296*Math.random()>>>0,ae=4294967296*Math.random()>>>0,ze=4294967296*Math.random()>>>0,Xe=4294967296*Math.random()>>>0;return"e"+_[Z>>0&255]+_[Z>>8&255]+_[Z>>16&255]+_[Z>>24&255]+_[ae>>0&255]+_[ae>>8&255]+_[ae>>16&255]+_[ae>>24&255]+_[ze>>0&255]+_[ze>>8&255]+_[ze>>16&255]+_[ze>>24&255]+_[Xe>>0&255]+_[Xe>>8&255]+_[Xe>>16&255]+_[Xe>>24&255]}()}setCreator(U){this._creator=U}create(U,Z){return this._contextWatchdog.add({sourceElementOrData:U,config:Z,creator:this._creator,id:this._id,type:"editor"})}on(U,Z){this._contextWatchdog.on("itemError",(ae,{itemId:ze,error:Xe})=>{ze===this._id&&Z(null,{error:Xe,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),m})())})(_w,_w.exports);var _o=_w.exports,xw={exports:{}};xw.exports;(function(t,r){(function(i){const l=i.en=i.en||{};l.dictionary=Object.assign(l.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(i,l){t.exports=l()}(self,()=>(()=>{var i={8603:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const j=x},3062:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const j=x},903:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const j=x},3143:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},4717:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const j=x},9315:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const j=x},8733:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const j=x},3508:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const j=x},2640:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const j=x},3535:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const j=x},1568:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const j=x},6270:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const j=x},5083:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},4036:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const j=x},3773:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const j=x},3689:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const j=x},1905:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},9773:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const j=x},2347:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},7754:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},111:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const j=x},4721:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const j=x},5730:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const j=x},4564:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},6082:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const j=x},2417:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const j=x},1199:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const j=x},4652:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const j=x},7442:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},9292:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},7368:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},4070:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},9247:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const j=x},1613:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const j=x},6306:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const j=x},2128:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-caption-background: hsl(0, 0%, 97%);
	--ck-color-table-caption-text: hsl(0, 0%, 20%);
	--ck-color-table-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-table-caption-text);
	background-color: var(--ck-color-table-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-table-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-table-caption-background);
	}
}
`],sourceRoot:""}]);const j=x},5087:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},4101:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAEC,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-table-column-resizer-hover);
	opacity: 0.25;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const j=x},3881:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const j=x},6237:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},7341:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},6945:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},4906:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const j=x},5332:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const j=x},6781:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const j=x},5485:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},3949:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},7686:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},7339:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const j=x},9688:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=x},8847:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const j=x},6574:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},4879:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=x},3662:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const j=x},2577:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},1046:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},8793:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=x},4650:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const j=x},7676:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=x},5868:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=x},6764:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const j=x},9695:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const j=x},5542:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=x},3332:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const j=x},4793:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const j=x},3488:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=x},8506:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const j=x},4921:(m,w,b)=>{b.d(w,{Z:()=>j});var y=b(1799),C=b.n(y),_=b(2609),x=b.n(_)()(C());x.push([m.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const j=x},2609:m=>{m.exports=function(w){var b=[];return b.toString=function(){return this.map(function(y){var C=w(y);return y[2]?"@media ".concat(y[2]," {").concat(C,"}"):C}).join("")},b.i=function(y,C,_){typeof y=="string"&&(y=[[null,y,""]]);var x={};if(_)for(var j=0;j<this.length;j++){var M=this[j][0];M!=null&&(x[M]=!0)}for(var R=0;R<y.length;R++){var P=[].concat(y[R]);_&&x[P[0]]||(C&&(P[2]?P[2]="".concat(C," and ").concat(P[2]):P[2]=C),b.push(P))}},b}},1799:m=>{function w(y,C){return function(_){if(Array.isArray(_))return _}(y)||function(_,x){var j=_&&(typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"]);if(j!=null){var M,R,P=[],B=!0,I=!1;try{for(j=j.call(_);!(B=(M=j.next()).done)&&(P.push(M.value),!x||P.length!==x);B=!0);}catch(O){I=!0,R=O}finally{try{B||j.return==null||j.return()}finally{if(I)throw R}}return P}}(y,C)||function(_,x){if(_){if(typeof _=="string")return b(_,x);var j=Object.prototype.toString.call(_).slice(8,-1);if(j==="Object"&&_.constructor&&(j=_.constructor.name),j==="Map"||j==="Set")return Array.from(_);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return b(_,x)}}(y,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(y,C){(C==null||C>y.length)&&(C=y.length);for(var _=0,x=new Array(C);_<C;_++)x[_]=y[_];return x}m.exports=function(y){var C=w(y,4),_=C[1],x=C[3];if(!x)return _;if(typeof btoa=="function"){var j=btoa(unescape(encodeURIComponent(JSON.stringify(x)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(j),R="/*# ".concat(M," */"),P=x.sources.map(function(B){return"/*# sourceURL=".concat(x.sourceRoot||"").concat(B," */")});return[_].concat(P).concat([R]).join(`
`)}return[_].join(`
`)}},6062:(m,w,b)=>{var y,C=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},_=function(){var G={};return function(z){if(G[z]===void 0){var te=document.querySelector(z);if(window.HTMLIFrameElement&&te instanceof window.HTMLIFrameElement)try{te=te.contentDocument.head}catch{te=null}G[z]=te}return G[z]}}(),x=[];function j(G){for(var z=-1,te=0;te<x.length;te++)if(x[te].identifier===G){z=te;break}return z}function M(G,z){for(var te={},se=[],ge=0;ge<G.length;ge++){var ce=G[ge],oe=z.base?ce[0]+z.base:ce[0],re=te[oe]||0,J="".concat(oe," ").concat(re);te[oe]=re+1;var ne=j(J),fe={css:ce[1],media:ce[2],sourceMap:ce[3]};ne!==-1?(x[ne].references++,x[ne].updater(fe)):x.push({identifier:J,updater:K(fe,z),references:1}),se.push(J)}return se}function R(G){var z=document.createElement("style"),te=G.attributes||{};if(te.nonce===void 0){var se=b.nc;se&&(te.nonce=se)}if(Object.keys(te).forEach(function(ce){z.setAttribute(ce,te[ce])}),typeof G.insert=="function")G.insert(z);else{var ge=_(G.insert||"head");if(!ge)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ge.appendChild(z)}return z}var P,B=(P=[],function(G,z){return P[G]=z,P.filter(Boolean).join(`
`)});function I(G,z,te,se){var ge=te?"":se.media?"@media ".concat(se.media," {").concat(se.css,"}"):se.css;if(G.styleSheet)G.styleSheet.cssText=B(z,ge);else{var ce=document.createTextNode(ge),oe=G.childNodes;oe[z]&&G.removeChild(oe[z]),oe.length?G.insertBefore(ce,oe[z]):G.appendChild(ce)}}function O(G,z,te){var se=te.css,ge=te.media,ce=te.sourceMap;if(ge?G.setAttribute("media",ge):G.removeAttribute("media"),ce&&typeof btoa<"u"&&(se+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ce))))," */")),G.styleSheet)G.styleSheet.cssText=se;else{for(;G.firstChild;)G.removeChild(G.firstChild);G.appendChild(document.createTextNode(se))}}var H=null,q=0;function K(G,z){var te,se,ge;if(z.singleton){var ce=q++;te=H||(H=R(z)),se=I.bind(null,te,ce,!1),ge=I.bind(null,te,ce,!0)}else te=R(z),se=O.bind(null,te,z),ge=function(){(function(oe){if(oe.parentNode===null)return!1;oe.parentNode.removeChild(oe)})(te)};return se(G),function(oe){if(oe){if(oe.css===G.css&&oe.media===G.media&&oe.sourceMap===G.sourceMap)return;se(G=oe)}else ge()}}m.exports=function(G,z){(z=z||{}).singleton||typeof z.singleton=="boolean"||(z.singleton=C());var te=M(G=G||[],z);return function(se){if(se=se||[],Object.prototype.toString.call(se)==="[object Array]"){for(var ge=0;ge<te.length;ge++){var ce=j(te[ge]);x[ce].references--}for(var oe=M(se,z),re=0;re<te.length;re++){var J=j(te[re]);x[J].references===0&&(x[J].updater(),x.splice(J,1))}te=oe}}}}},l={};function u(m){var w=l[m];if(w!==void 0)return w.exports;var b=l[m]={id:m,exports:{}};return i[m](b,b.exports,u),b.exports}u.n=m=>{var w=m&&m.__esModule?()=>m.default:()=>m;return u.d(w,{a:w}),w},u.d=(m,w)=>{for(var b in w)u.o(w,b)&&!u.o(m,b)&&Object.defineProperty(m,b,{enumerable:!0,get:w[b]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),u.o=(m,w)=>Object.prototype.hasOwnProperty.call(m,w),u.nc=void 0;var p={};return(()=>{function m({emitter:s,activator:e,callback:n,contextElements:o}){s.listenTo(document,"mousedown",(a,c)=>{if(!e())return;const h=typeof c.composedPath=="function"?c.composedPath():[],f=typeof o=="function"?o():o;for(const g of f)if(g.contains(c.target)||h.includes(g))return;n()})}function w(s){return class extends s{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:s}){s.listenTo(s.element,"submit",(e,n)=>{n.preventDefault(),s.fire("submit")},{useCapture:!0})}u.d(p,{default:()=>_0});const y=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var C;const _={isMac:x(y),isWindows:(C=y,C.indexOf("windows")>-1),isGecko:function(s){return!!s.match(/gecko\/\d+/)}(y),isSafari:function(s){return s.indexOf(" applewebkit/")>-1&&s.indexOf("chrome")===-1}(y),isiOS:function(s){return!!s.match(/iphone|ipad/i)||x(s)&&navigator.maxTouchPoints>0}(y),isAndroid:function(s){return s.indexOf("android")>-1}(y),isBlink:function(s){return s.indexOf("chrome/")>-1&&s.indexOf("edge/")<0}(y),features:{isRegExpUnicodePropertySupported:function(){let s=!1;try{s="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return s}()}};function x(s){return s.indexOf("macintosh")>-1}function j(s,e,n,o){n=n||function(g,k){return g===k};const a=Array.isArray(s)?s:Array.prototype.slice.call(s),c=Array.isArray(e)?e:Array.prototype.slice.call(e),h=function(g,k,v){const A=M(g,k,v);if(A===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const E=R(g,A),N=R(k,A),L=M(E,N,v),$=g.length-L,W=k.length-L;return{firstIndex:A,lastIndexOld:$,lastIndexNew:W}}(a,c,n);return o?function(g,k){const{firstIndex:v,lastIndexOld:A,lastIndexNew:E}=g;if(v===-1)return Array(k).fill("equal");let N=[];return v>0&&(N=N.concat(Array(v).fill("equal"))),E-v>0&&(N=N.concat(Array(E-v).fill("insert"))),A-v>0&&(N=N.concat(Array(A-v).fill("delete"))),E<k&&(N=N.concat(Array(k-E).fill("equal"))),N}(h,c.length):function(g,k){const v=[],{firstIndex:A,lastIndexOld:E,lastIndexNew:N}=k;return N-A>0&&v.push({index:A,type:"insert",values:g.slice(A,N)}),E-A>0&&v.push({index:A+(N-A),type:"delete",howMany:E-A}),v}(c,h)}function M(s,e,n){for(let o=0;o<Math.max(s.length,e.length);o++)if(s[o]===void 0||e[o]===void 0||!n(s[o],e[o]))return o;return-1}function R(s,e){return s.slice(e).reverse()}function P(s,e,n){n=n||function($,W){return $===W};const o=s.length,a=e.length;if(o>200||a>200||o+a>300)return P.fastDiff(s,e,n,!0);let c,h;if(a<o){const $=s;s=e,e=$,c="delete",h="insert"}else c="insert",h="delete";const f=s.length,g=e.length,k=g-f,v={},A={};function E($){const W=(A[$-1]!==void 0?A[$-1]:-1)+1,Y=A[$+1]!==void 0?A[$+1]:-1,X=W>Y?-1:1;v[$+X]&&(v[$]=v[$+X].slice(0)),v[$]||(v[$]=[]),v[$].push(W>Y?c:h);let pe=Math.max(W,Y),Ne=pe-$;for(;Ne<f&&pe<g&&n(s[Ne],e[pe]);)Ne++,pe++,v[$].push("equal");return pe}let N,L=0;do{for(N=-L;N<k;N++)A[N]=E(N);for(N=k+L;N>k;N--)A[N]=E(N);A[k]=E(k),L++}while(A[k]!==g);return v[k].slice(1)}P.fastDiff=j;const B=function(){return function s(){s.called=!0}};class I{constructor(e,n){this.source=e,this.name=n,this.path=[],this.stop=B(),this.off=B()}}const O=new Array(256).fill("").map((s,e)=>("0"+e.toString(16)).slice(-2));function H(){const s=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+O[s>>0&255]+O[s>>8&255]+O[s>>16&255]+O[s>>24&255]+O[e>>0&255]+O[e>>8&255]+O[e>>16&255]+O[e>>24&255]+O[n>>0&255]+O[n>>8&255]+O[n>>16&255]+O[n>>24&255]+O[o>>0&255]+O[o>>8&255]+O[o>>16&255]+O[o>>24&255]}const q={get(s="normal"){return typeof s!="number"?this[s]||this.normal:s},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function K(s,e){const n=q.get(e.priority);for(let o=0;o<s.length;o++)if(q.get(s[o].priority)<n)return void s.splice(o,0,e);s.push(e)}const G="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class z extends Error{constructor(e,n,o){super(function(a,c){const h=new WeakSet,f=(v,A)=>{if(typeof A=="object"&&A!==null){if(h.has(A))return`[object ${A.constructor.name}]`;h.add(A)}return A},g=c?` ${JSON.stringify(c,f)}`:"",k=ge(a);return a+g+k}(e,o)),this.name="CKEditorError",this.context=n,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,n){if(e.is&&e.is("CKEditorError"))throw e;const o=new z(e.message,n);throw o.stack=e.stack,o}}function te(s,e){console.warn(...ce(s,e))}function se(s,e){console.error(...ce(s,e))}function ge(s){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(f[0].end)]});else if(e.inputType=="insertText"&&h&&h.includes(`
`;else{let n=null;for(const o of s.getChildren()){const a=r2(o);n&&(n.is("containerElement")||o.is("containerElement"))&&(n2.includes(n.name)||n2.includes(o.name)?e+=`
`:e+=`
