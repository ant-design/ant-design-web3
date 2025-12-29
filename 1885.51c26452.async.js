"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1885],{71885:function(uO,pv,J){var hv;J.d(pv,{EthereumProvider:function(){return M9}});var Qi=J(72100),wd=J.n(Qi),gv=J(81365),K=J(46196),Qs=J(73079),fv=J(42669),wv=J(37110),mv=J(96884),er=J(55710),Le=J(80310),vv=J(24242),cc=J(14224),es=J(55872).Buffer;const lc=":";function tr(t){const[e,i]=t.split(lc);return{namespace:e,reference:i}}function yv(t){const{namespace:e,reference:i}=t;return[e,i].join(lc)}function qp(t){const[e,i,s]=t.split(lc);return{namespace:e,reference:i,address:s}}function bv(t){const{namespace:e,reference:i,address:s}=t;return[e,i,s].join(lc)}function Wp(t,e){const i=[];return t.forEach(s=>{const r=e(s);i.includes(r)||i.push(r)}),i}function _v(t){const{address:e}=qp(t);return e}function xv(t){const{namespace:e,reference:i}=qp(t);return yv({namespace:e,reference:i})}function hO(t,e){const{namespace:i,reference:s}=tr(e);return bv({namespace:i,reference:s,address:t})}function pO(t){return Wp(t,_v)}function Cv(t){return Wp(t,xv)}function Vp(t,e=[]){const i=[];return Object.keys(t).forEach(s=>{if(e.length&&!e.includes(s))return;const r=t[s];i.push(...r.accounts)}),i}function gO(t,e=[]){const i=[];return Object.keys(t).forEach(s=>{if(e.length&&!e.includes(s))return;const r=t[s];i.push(...Cv(r.accounts))}),i}function fO(t,e=[]){const i=[];return Object.keys(t).forEach(s=>{if(e.length&&!e.includes(s))return;const r=t[s];i.push(...md(s,r))}),i}function md(t,e){return t.includes(":")?[t]:e.chains||[]}var Ev=Object.defineProperty,Iv=Object.defineProperties,Av=Object.getOwnPropertyDescriptors,Kp=Object.getOwnPropertySymbols,Sv=Object.prototype.hasOwnProperty,Nv=Object.prototype.propertyIsEnumerable,Gp=(t,e,i)=>e in t?Ev(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zp=(t,e)=>{for(var i in e||(e={}))Sv.call(e,i)&&Gp(t,i,e[i]);if(Kp)for(var i of Kp(e))Nv.call(e,i)&&Gp(t,i,e[i]);return t},Pv=(t,e)=>Iv(t,Av(e));const kv="ReactNative",jt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},vd=" ",wO=":",Ov="/",Yp=2,mO=1e3,Tv="js";function dc(){return typeof cc<"u"&&typeof cc.versions<"u"&&typeof cc.versions.node<"u"}function Ss(){return!(0,Qs.getDocument)()&&!!(0,Qs.getNavigator)()&&navigator.product===kv}function Rv(){return Ss()&&typeof J.g<"u"&&typeof(J.g==null?void 0:J.g.Platform)<"u"&&(J.g==null?void 0:J.g.Platform.OS)==="android"}function $v(){return Ss()&&typeof J.g<"u"&&typeof(J.g==null?void 0:J.g.Platform)<"u"&&(J.g==null?void 0:J.g.Platform.OS)==="ios"}function wo(){return!dc()&&!!(0,Qs.getNavigator)()&&!!(0,Qs.getDocument)()}function Qr(){return Ss()?jt.reactNative:dc()?jt.node:wo()?jt.browser:jt.unknown}function Jp(){var t;try{return Ss()&&typeof J.g<"u"&&typeof(J.g==null?void 0:J.g.Application)<"u"?(t=J.g.Application)==null?void 0:t.applicationId:void 0}catch{return}}function Lv(t,e){const i=new URLSearchParams(t);for(const s of Object.keys(e).sort())if(e.hasOwnProperty(s)){const r=e[s];r!==void 0&&i.set(s,r)}return i.toString()}function Bv(t){var e,i;const s=Xp();try{return t!=null&&t.url&&s.url&&t.url!==s.url&&(console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${s.url}. This is probably unintended and can lead to issues.`),t.url=s.url),(e=t==null?void 0:t.icons)!=null&&e.length&&t.icons.length>0&&(t.icons=t.icons.filter(r=>r!=="")),Pv(Zp(Zp({},s),t),{url:(t==null?void 0:t.url)||s.url,name:(t==null?void 0:t.name)||s.name,description:(t==null?void 0:t.description)||s.description,icons:(i=t==null?void 0:t.icons)!=null&&i.length&&t.icons.length>0?t.icons:s.icons})}catch(r){return console.warn("Error populating app metadata",r),t||s}}function Xp(){return(0,fv.D)()||{name:"",description:"",url:"",icons:[""]}}function vO(t,e){var i;const s=Qr(),r={protocol:t,version:e,env:s};return s==="browser"&&(r.host=((i=On())==null?void 0:i.host)||"unknown"),r}function Uv(){if(Qr()===jt.reactNative&&typeof J.g<"u"&&typeof(J.g==null?void 0:J.g.Platform)<"u"){const{OS:i,Version:s}=J.g.Platform;return[i,s].join("-")}const t=(0,gv.qY)();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function Mv(){var t;const e=Qr();return e===jt.browser?[e,((t=(0,Qs.getLocation)())==null?void 0:t.host)||"unknown"].join(":"):e}function Qp(t,e,i){const s=Uv(),r=Mv();return[[t,e].join("-"),[Tv,i].join("-"),s,r].join("/")}function Dv({protocol:t,version:e,relayUrl:i,sdkVersion:s,auth:r,projectId:o,useOnCloseEvent:a,bundleId:c,packageName:d}){const u=i.split("?"),h=Qp(t,e,s),p={auth:r,ua:h,projectId:o,useOnCloseEvent:a||void 0,packageName:d||void 0,bundleId:c||void 0},g=Lv(u[1]||"",p);return u[0]+"?"+g}function yO(t){let e=(t.match(/^[^:]+(?=:\/\/)/gi)||[])[0];const i=typeof e<"u"?t.split("://")[1]:t;return e=e==="wss"?"https":"http",[e,i].join("://")}function bO(t,e,i){if(!t[e]||typeof t[e]!==i)throw new Error(`Missing or invalid "${e}" param`)}function jv(t,e=Yp){return zv(t.split(Ov),e)}function _O(t){return jv(t).join(vd)}function ir(t,e){return t.filter(i=>e.includes(i)).length===t.length}function zv(t,e=Yp){return t.slice(Math.max(t.length-e,0))}function yd(t){return Object.fromEntries(t.entries())}function bd(t){return new Map(Object.entries(t))}function xO(t,e){const i={};return Object.keys(t).forEach(s=>{i[s]=e(t[s])}),i}const CO=t=>t;function Fv(t){return t.trim().replace(/^\w/,e=>e.toUpperCase())}function EO(t){return t.split(vd).map(e=>Fv(e)).join(vd)}function sr(t=K.FIVE_MINUTES,e){const i=(0,K.toMiliseconds)(t||K.FIVE_MINUTES);let s,r,o,a;return{resolve:c=>{o&&s&&(clearTimeout(o),s(c),a=Promise.resolve(c))},reject:c=>{o&&r&&(clearTimeout(o),r(c))},done:()=>new Promise((c,d)=>{if(a)return c(a);o=setTimeout(()=>{const u=new Error(e);a=Promise.reject(u),d(u)},i),s=c,r=d})}}function Ns(t,e,i){return new Promise(async(s,r)=>{const o=setTimeout(()=>r(new Error(i)),e);try{const a=await t;s(a)}catch(a){r(a)}clearTimeout(o)})}function e0(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function Hv(t){return e0("topic",t)}function qv(t){return e0("id",t)}function t0(t){const[e,i]=t.split(":"),s={id:void 0,topic:void 0};if(e==="topic"&&typeof i=="string")s.topic=i;else if(e==="id"&&Number.isInteger(Number(i)))s.id=Number(i);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${i}`);return s}function ct(t,e){return(0,K.fromMiliseconds)((e||Date.now())+(0,K.toMiliseconds)(t))}function Ps(t){return Date.now()>=(0,K.toMiliseconds)(t)}function Ue(t,e){return`${t}${e?`:${e}`:""}`}function Ci(t=[],e=[]){return[...new Set([...t,...e])]}async function Wv({id:t,topic:e,wcDeepLink:i}){var s;try{if(!i)return;const r=typeof i=="string"?JSON.parse(i):i,o=r==null?void 0:r.href;if(typeof o!="string")return;const a=Vv(o,t,e),c=Qr();if(c===jt.browser){if(!((s=(0,Qs.getDocument)())!=null&&s.hasFocus())){console.warn("Document does not have focus, skipping deeplink.");return}Kv(a)}else c===jt.reactNative&&typeof(J.g==null?void 0:J.g.Linking)<"u"&&await J.g.Linking.openURL(a)}catch(r){console.error(r)}}function Vv(t,e,i){const s=`requestId=${e}&sessionTopic=${i}`;t.endsWith("/")&&(t=t.slice(0,-1));let r=`${t}`;if(t.startsWith("https://t.me")){const o=t.includes("?")?"&startapp=":"?startapp=";r=`${r}${o}${Jv(s,!0)}`}else r=`${r}/wc?${s}`;return r}function Kv(t){let e="_self";Yv()?e="_top":(Zv()||t.startsWith("https://")||t.startsWith("http://"))&&(e="_blank"),window.open(t,e,"noreferrer noopener")}async function Gv(t,e){let i="";try{if(wo()&&(i=localStorage.getItem(e),i))return i;i=await t.getItem(e)}catch(s){console.error(s)}return i}function i0(t,e){return t.filter(i=>e.includes(i))}function s0(t,e){if(!t.includes(e))return null;const i=t.split(/([&,?,=])/),s=i.indexOf(e);return i[s+2]}function r0(){return typeof crypto<"u"&&crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function _d(){return typeof cc<"u"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.IS_VITEST==="true"}function Zv(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)}function Yv(){try{return window.self!==window.top}catch{return!1}}function Jv(t,e=!1){const i=es.from(t).toString("base64");return e?i.replace(/[=]/g,""):i}function n0(t){return es.from(t,"base64").toString("utf-8")}function Xv(t){return new Promise(e=>setTimeout(e,t))}function mo(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function Qv(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function vo(t,...e){if(!Qv(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function xd(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");mo(t.outputLen),mo(t.blockLen)}function en(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function o0(t,e){vo(t);const i=e.outputLen;if(t.length<i)throw new Error("digestInto() expects output buffer of length at least "+i)}const uc=BigInt(2**32-1),a0=BigInt(32);function e2(t,e=!1){return e?{h:Number(t&uc),l:Number(t>>a0&uc)}:{h:Number(t>>a0&uc)|0,l:Number(t&uc)|0}}function t2(t,e=!1){let i=new Uint32Array(t.length),s=new Uint32Array(t.length);for(let r=0;r<t.length;r++){const{h:o,l:a}=e2(t[r],e);[i[r],s[r]]=[o,a]}return[i,s]}const i2=(t,e,i)=>t<<i|e>>>32-i,s2=(t,e,i)=>e<<i|t>>>32-i,r2=(t,e,i)=>e<<i-32|t>>>64-i,n2=(t,e,i)=>t<<i-32|e>>>64-i,tn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function o2(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Cd(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Mi(t,e){return t<<32-e|t>>>e}const c0=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function a2(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function l0(t){for(let e=0;e<t.length;e++)t[e]=a2(t[e])}function c2(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function sn(t){return typeof t=="string"&&(t=c2(t)),vo(t),t}function l2(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];vo(r),e+=r.length}const i=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const o=t[s];i.set(o,r),r+=o.length}return i}class Ed{clone(){return this._cloneInto()}}function d0(t){const e=s=>t().update(sn(s)).digest(),i=t();return e.outputLen=i.outputLen,e.blockLen=i.blockLen,e.create=()=>t(),e}function rn(t=32){if(tn&&typeof tn.getRandomValues=="function")return tn.getRandomValues(new Uint8Array(t));if(tn&&typeof tn.randomBytes=="function")return tn.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const u0=[],h0=[],p0=[],d2=BigInt(0),yo=BigInt(1),u2=BigInt(2),h2=BigInt(7),p2=BigInt(256),g2=BigInt(113);for(let t=0,e=yo,i=1,s=0;t<24;t++){[i,s]=[s,(2*i+3*s)%5],u0.push(2*(5*s+i)),h0.push((t+1)*(t+2)/2%64);let r=d2;for(let o=0;o<7;o++)e=(e<<yo^(e>>h2)*g2)%p2,e&u2&&(r^=yo<<(yo<<BigInt(o))-yo);p0.push(r)}const[f2,w2]=t2(p0,!0),g0=(t,e,i)=>i>32?r2(t,e,i):i2(t,e,i),f0=(t,e,i)=>i>32?n2(t,e,i):s2(t,e,i);function m2(t,e=24){const i=new Uint32Array(10);for(let s=24-e;s<24;s++){for(let a=0;a<10;a++)i[a]=t[a]^t[a+10]^t[a+20]^t[a+30]^t[a+40];for(let a=0;a<10;a+=2){const c=(a+8)%10,d=(a+2)%10,u=i[d],h=i[d+1],p=g0(u,h,1)^i[c],g=f0(u,h,1)^i[c+1];for(let f=0;f<50;f+=10)t[a+f]^=p,t[a+f+1]^=g}let r=t[2],o=t[3];for(let a=0;a<24;a++){const c=h0[a],d=g0(r,o,c),u=f0(r,o,c),h=u0[a];r=t[h],o=t[h+1],t[h]=d,t[h+1]=u}for(let a=0;a<50;a+=10){for(let c=0;c<10;c++)i[c]=t[a+c];for(let c=0;c<10;c++)t[a+c]^=~i[(c+2)%10]&i[(c+4)%10]}t[0]^=f2[s],t[1]^=w2[s]}i.fill(0)}class Id extends Ed{constructor(e,i,s,r=!1,o=24){if(super(),this.blockLen=e,this.suffix=i,this.outputLen=s,this.enableXOF=r,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,mo(s),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=o2(this.state)}keccak(){c0||l0(this.state32),m2(this.state32,this.rounds),c0||l0(this.state32),this.posOut=0,this.pos=0}update(e){en(this);const{blockLen:i,state:s}=this;e=sn(e);const r=e.length;for(let o=0;o<r;){const a=Math.min(i-this.pos,r-o);for(let c=0;c<a;c++)s[this.pos++]^=e[o++];this.pos===i&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:i,pos:s,blockLen:r}=this;e[s]^=i,i&128&&s===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){en(this,!1),vo(e),this.finish();const i=this.state,{blockLen:s}=this;for(let r=0,o=e.length;r<o;){this.posOut>=s&&this.keccak();const a=Math.min(s-this.posOut,o-r);e.set(i.subarray(this.posOut,this.posOut+a),r),this.posOut+=a,r+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return mo(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(o0(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:i,suffix:s,outputLen:r,rounds:o,enableXOF:a}=this;return e||(e=new Id(i,s,r,a,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=s,e.outputLen=r,e.enableXOF=a,e.destroyed=this.destroyed,e}}const v2=(t,e,i)=>d0(()=>new Id(e,t,i)),y2=v2(1,136,256/8),b2="https://rpc.walletconnect.org/v1";function w0(t){const e=`Ethereum Signed Message:
${t.length}`,i=new TextEncoder().encode(e+t);return"0x"+es.from(y2(i)).toString("hex")}async function _2(t,e,i,s,r,o){switch(i.t){case"eip191":return await x2(t,e,i.s);case"eip1271":return await C2(t,e,i.s,s,r,o);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`)}}async function x2(t,e,i){return(await(0,wv.R)({hash:w0(e),signature:i})).toLowerCase()===t.toLowerCase()}async function C2(t,e,i,s,r,o){const a=tr(s);if(!a.namespace||!a.reference)throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${s}`);try{const c="0x1626ba7e",d="0000000000000000000000000000000000000000000000000000000000000040",u="0000000000000000000000000000000000000000000000000000000000000041",h=i.substring(2),p=w0(e).substring(2),g=c+p+d+u+h,f=await fetch(`${o||b2}/?chainId=${s}&projectId=${r}`,{method:"POST",body:JSON.stringify({id:E2(),jsonrpc:"2.0",method:"eth_call",params:[{to:t,data:g},"latest"]})}),{result:v}=await f.json();return v?v.slice(0,c.length).toLowerCase()===c.toLowerCase():!1}catch(c){return console.error("isValidEip1271Signature: ",c),!1}}function E2(){return Date.now()+Math.floor(Math.random()*1e3)}function I2(t){const e=atob(t),i=new Uint8Array(e.length);for(let a=0;a<e.length;a++)i[a]=e.charCodeAt(a);const s=i[0];if(s===0)throw new Error("No signatures found");const r=1+s*64;if(i.length<r)throw new Error("Transaction data too short for claimed signature count");if(i.length<100)throw new Error("Transaction too short");const o=es.from(t,"base64").slice(1,65);return mv.default.encode(o)}var A2=Object.defineProperty,S2=Object.defineProperties,N2=Object.getOwnPropertyDescriptors,m0=Object.getOwnPropertySymbols,P2=Object.prototype.hasOwnProperty,k2=Object.prototype.propertyIsEnumerable,v0=(t,e,i)=>e in t?A2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ad=(t,e)=>{for(var i in e||(e={}))P2.call(e,i)&&v0(t,i,e[i]);if(m0)for(var i of m0(e))k2.call(e,i)&&v0(t,i,e[i]);return t},y0=(t,e)=>S2(t,N2(e));const O2="did:pkh:",Sd=t=>t==null?void 0:t.split(":"),T2=t=>{const e=t&&Sd(t);if(e)return t.includes(O2)?e[3]:e[1]},Nd=t=>{const e=t&&Sd(t);if(e)return e[2]+":"+e[3]},hc=t=>{const e=t&&Sd(t);if(e)return e.pop()};async function b0(t){const{cacao:e,projectId:i}=t,{s,p:r}=e,o=_0(r,r.iss),a=hc(r.iss);return await _2(a,o,s,Nd(r.iss),i)}const _0=(t,e)=>{const i=`${t.domain} wants you to sign in with your Ethereum account:`,s=hc(e);if(!t.aud&&!t.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let r=t.statement||void 0;const o=`URI: ${t.aud||t.uri}`,a=`Version: ${t.version}`,c=`Chain ID: ${T2(e)}`,d=`Nonce: ${t.nonce}`,u=`Issued At: ${t.iat}`,h=t.exp?`Expiration Time: ${t.exp}`:void 0,p=t.nbf?`Not Before: ${t.nbf}`:void 0,g=t.requestId?`Request ID: ${t.requestId}`:void 0,f=t.resources?`Resources:${t.resources.map(w=>`
- ${w}`).join("")}`:void 0,v=nn(t.resources);if(v){const w=rr(v);r=E0(r,w)}return[i,s,"",r,"",o,a,c,d,u,h,p,g,f].filter(w=>w!=null).join(`
`)};function IO(t,e,i){return i.includes("did:pkh:")||(i=`did:pkh:${i}`),{h:{t:"caip122"},p:{iss:i,domain:t.domain,aud:t.aud,version:t.version,nonce:t.nonce,iat:t.iat,statement:t.statement,requestId:t.requestId,resources:t.resources,nbf:t.nbf,exp:t.exp},s:e}}function AO(t){var e;const{authPayload:i,chains:s,methods:r}=t,o=i.statement||"";if(!(s!=null&&s.length))return i;const a=i.chains,c=i0(a,s);if(!(c!=null&&c.length))throw new Error("No supported chains");const d=R2(i.resources);if(!d)return i;ts(d);const u=$2(d,"eip155");let h=(i==null?void 0:i.resources)||[];if(u!=null&&u.length){const p=L2(u),g=i0(p,r);if(!(g!=null&&g.length))throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(p)}, supported: ${JSON.stringify(r)}`);const f=x0("request",g,{chains:c}),v=D2(d,"eip155",f);h=((e=i==null?void 0:i.resources)==null?void 0:e.slice(0,-1))||[],h.push(Pd(v))}return y0(Ad({},i),{statement:H2(o,nn(h)),chains:c,resources:i!=null&&i.resources||h.length>0?h:void 0})}function R2(t){const e=nn(t);if(e&&C0(e))return rr(e)}function SO(t,e){var i;return(i=t==null?void 0:t.att)==null?void 0:i.hasOwnProperty(e)}function $2(t,e){var i,s;return(i=t==null?void 0:t.att)!=null&&i[e]?Object.keys((s=t==null?void 0:t.att)==null?void 0:s[e]):[]}function NO(t){return(t==null?void 0:t.map(e=>Object.keys(e)))||[]}function L2(t){return(t==null?void 0:t.map(e=>{var i;return(i=e.split("/"))==null?void 0:i[1]}))||[]}function B2(t){return es.from(JSON.stringify(t)).toString("base64")}function U2(t){return JSON.parse(es.from(t,"base64").toString("utf-8"))}function ts(t){if(!t)throw new Error("No recap provided, value is undefined");if(!t.att)throw new Error("No `att` property found");const e=Object.keys(t.att);if(!(e!=null&&e.length))throw new Error("No resources found in `att` property");e.forEach(i=>{const s=t.att[i];if(Array.isArray(s))throw new Error(`Resource must be an object: ${i}`);if(typeof s!="object")throw new Error(`Resource must be an object: ${i}`);if(!Object.keys(s).length)throw new Error(`Resource object is empty: ${i}`);Object.keys(s).forEach(r=>{const o=s[r];if(!Array.isArray(o))throw new Error(`Ability limits ${r} must be an array of objects, found: ${o}`);if(!o.length)throw new Error(`Value of ${r} is empty array, must be an array with objects`);o.forEach(a=>{if(typeof a!="object")throw new Error(`Ability limits (${r}) must be an array of objects, found: ${a}`)})})})}function M2(t,e,i,s={}){return i==null||i.sort((r,o)=>r.localeCompare(o)),{att:{[t]:x0(e,i,s)}}}function D2(t,e,i){var s;t.att[e]=Ad({},i);const r=(s=Object.keys(t.att))==null?void 0:s.sort((a,c)=>a.localeCompare(c)),o={att:{}};return r.reduce((a,c)=>(a.att[c]=t.att[c],a),o)}function x0(t,e,i={}){e=e==null?void 0:e.sort((r,o)=>r.localeCompare(o));const s=e.map(r=>({[`${t}/${r}`]:[i]}));return Object.assign({},...s)}function Pd(t){return ts(t),`urn:recap:${B2(t).replace(/=/g,"")}`}function rr(t){const e=U2(t.replace("urn:recap:",""));return ts(e),e}function j2(t,e,i){const s=M2(t,e,i);return Pd(s)}function C0(t){return t&&t.includes("urn:recap:")}function z2(t,e){const i=rr(t),s=rr(e),r=F2(i,s);return Pd(r)}function F2(t,e){ts(t),ts(e);const i=Object.keys(t.att).concat(Object.keys(e.att)).sort((r,o)=>r.localeCompare(o)),s={att:{}};return i.forEach(r=>{var o,a;Object.keys(((o=t.att)==null?void 0:o[r])||{}).concat(Object.keys(((a=e.att)==null?void 0:a[r])||{})).sort((c,d)=>c.localeCompare(d)).forEach(c=>{var d,u;s.att[r]=y0(Ad({},s.att[r]),{[c]:((d=t.att[r])==null?void 0:d[c])||((u=e.att[r])==null?void 0:u[c])})})}),s}function E0(t="",e){ts(e);const i="I further authorize the stated URI to perform the following actions on my behalf: ";if(t.includes(i))return t;const s=[];let r=0;Object.keys(e.att).forEach(c=>{const d=Object.keys(e.att[c]).map(p=>({ability:p.split("/")[0],action:p.split("/")[1]}));d.sort((p,g)=>p.action.localeCompare(g.action));const u={};d.forEach(p=>{u[p.ability]||(u[p.ability]=[]),u[p.ability].push(p.action)});const h=Object.keys(u).map(p=>(r++,`(${r}) '${p}': '${u[p].join("', '")}' for '${c}'.`));s.push(h.join(", ").replace(".,","."))});const o=s.join(" "),a=`${i}${o}`;return`${t?t+" ":""}${a}`}function I0(t){var e;const i=rr(t);ts(i);const s=(e=i.att)==null?void 0:e.eip155;return s?Object.keys(s).map(r=>r.split("/")[1]):[]}function A0(t){const e=rr(t);ts(e);const i=[];return Object.values(e.att).forEach(s=>{Object.values(s).forEach(r=>{var o;(o=r==null?void 0:r[0])!=null&&o.chains&&i.push(r[0].chains)})}),[...new Set(i.flat())]}function H2(t,e){if(!e)return t;const i=rr(e);return ts(i),E0(t,i)}function nn(t){if(!t)return;const e=t==null?void 0:t[t.length-1];return C0(e)?e:void 0}function kd(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function S0(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Jt(t,...e){if(!S0(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function N0(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function q2(t,e){Jt(t);const i=e.outputLen;if(t.length<i)throw new Error("digestInto() expects output buffer of length at least "+i)}function P0(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}const ks=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),W2=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);if(!(new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68))throw new Error("Non little-endian hardware is not supported");function V2(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function Od(t){if(typeof t=="string")t=V2(t);else if(S0(t))t=Td(t);else throw new Error("Uint8Array expected, got "+typeof t);return t}function K2(t,e){if(e==null||typeof e!="object")throw new Error("options must be defined");return Object.assign(t,e)}function G2(t,e){if(t.length!==e.length)return!1;let i=0;for(let s=0;s<t.length;s++)i|=t[s]^e[s];return i===0}const Z2=(t,e)=>{function i(s,...r){if(Jt(s),t.nonceLength!==void 0){const u=r[0];if(!u)throw new Error("nonce / iv required");t.varSizeNonce?Jt(u):Jt(u,t.nonceLength)}const o=t.tagLength;o&&r[1]!==void 0&&Jt(r[1]);const a=e(s,...r),c=(u,h)=>{if(h!==void 0){if(u!==2)throw new Error("cipher output not supported");Jt(h)}};let d=!1;return{encrypt(u,h){if(d)throw new Error("cannot encrypt() twice with same key + nonce");return d=!0,Jt(u),c(a.encrypt.length,h),a.encrypt(u,h)},decrypt(u,h){if(Jt(u),o&&u.length<o)throw new Error("invalid ciphertext length: smaller than tagLength="+o);return c(a.decrypt.length,h),a.decrypt(u,h)}}}return Object.assign(i,t),i};function k0(t,e,i=!0){if(e===void 0)return new Uint8Array(t);if(e.length!==t)throw new Error("invalid output length, expected "+t+", got: "+e.length);if(i&&!Y2(e))throw new Error("invalid output, must be aligned");return e}function O0(t,e,i,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,i,s);const r=BigInt(32),o=BigInt(4294967295),a=Number(i>>r&o),c=Number(i&o),d=s?4:0,u=s?0:4;t.setUint32(e+d,a,s),t.setUint32(e+u,c,s)}function Y2(t){return t.byteOffset%4===0}function Td(t){return Uint8Array.from(t)}function on(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}const T0=t=>Uint8Array.from(t.split("").map(e=>e.charCodeAt(0))),J2=T0("expand 16-byte k"),X2=T0("expand 32-byte k"),Q2=ks(J2),ey=ks(X2);function Te(t,e){return t<<e|t>>>32-e}function Rd(t){return t.byteOffset%4===0}const pc=64,ty=16,R0=2**32-1,$0=new Uint32Array;function iy(t,e,i,s,r,o,a,c){const d=r.length,u=new Uint8Array(pc),h=ks(u),p=Rd(r)&&Rd(o),g=p?ks(r):$0,f=p?ks(o):$0;for(let v=0;v<d;a++){if(t(e,i,s,h,a,c),a>=R0)throw new Error("arx: counter overflow");const w=Math.min(pc,d-v);if(p&&w===pc){const m=v/4;if(v%4!==0)throw new Error("arx: invalid block position");for(let y=0,b;y<ty;y++)b=m+y,f[b]=g[b]^h[y];v+=pc;continue}for(let m=0,y;m<w;m++)y=v+m,o[y]=r[y]^u[m];v+=w}}function sy(t,e){const{allowShortKeys:i,extendNonceFn:s,counterLength:r,counterRight:o,rounds:a}=K2({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},e);if(typeof t!="function")throw new Error("core must be a function");return kd(r),kd(a),P0(o),P0(i),(c,d,u,h,p=0)=>{Jt(c),Jt(d),Jt(u);const g=u.length;if(h===void 0&&(h=new Uint8Array(g)),Jt(h),kd(p),p<0||p>=R0)throw new Error("arx: counter overflow");if(h.length<g)throw new Error(`arx: output (${h.length}) is shorter than data (${g})`);const f=[];let v=c.length,w,m;if(v===32)f.push(w=Td(c)),m=ey;else if(v===16&&i)w=new Uint8Array(32),w.set(c),w.set(c,16),m=Q2,f.push(w);else throw new Error(`arx: invalid 32-byte key, got length=${v}`);Rd(d)||f.push(d=Td(d));const y=ks(w);if(s){if(d.length!==24)throw new Error("arx: extended nonce must be 24 bytes");s(m,y,ks(d.subarray(0,16)),y),d=d.subarray(16)}const b=16-r;if(b!==d.length)throw new Error(`arx: nonce must be ${b} or 16 bytes`);if(b!==12){const x=new Uint8Array(12);x.set(d,o?0:12-d.length),d=x,f.push(d)}const _=ks(d);return iy(t,m,y,_,u,h,p,a),on(...f),h}}const xt=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class ry{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=Od(e),Jt(e,32);const i=xt(e,0),s=xt(e,2),r=xt(e,4),o=xt(e,6),a=xt(e,8),c=xt(e,10),d=xt(e,12),u=xt(e,14);this.r[0]=i&8191,this.r[1]=(i>>>13|s<<3)&8191,this.r[2]=(s>>>10|r<<6)&7939,this.r[3]=(r>>>7|o<<9)&8191,this.r[4]=(o>>>4|a<<12)&255,this.r[5]=a>>>1&8190,this.r[6]=(a>>>14|c<<2)&8191,this.r[7]=(c>>>11|d<<5)&8065,this.r[8]=(d>>>8|u<<8)&8191,this.r[9]=u>>>5&127;for(let h=0;h<8;h++)this.pad[h]=xt(e,16+2*h)}process(e,i,s=!1){const r=s?0:2048,{h:o,r:a}=this,c=a[0],d=a[1],u=a[2],h=a[3],p=a[4],g=a[5],f=a[6],v=a[7],w=a[8],m=a[9],y=xt(e,i+0),b=xt(e,i+2),_=xt(e,i+4),x=xt(e,i+6),k=xt(e,i+8),N=xt(e,i+10),R=xt(e,i+12),T=xt(e,i+14);let P=o[0]+(y&8191),M=o[1]+((y>>>13|b<<3)&8191),U=o[2]+((b>>>10|_<<6)&8191),j=o[3]+((_>>>7|x<<9)&8191),Z=o[4]+((x>>>4|k<<12)&8191),A=o[5]+(k>>>1&8191),E=o[6]+((k>>>14|N<<2)&8191),I=o[7]+((N>>>11|R<<5)&8191),L=o[8]+((R>>>8|T<<8)&8191),$=o[9]+(T>>>5|r),B=0,D=B+P*c+M*(5*m)+U*(5*w)+j*(5*v)+Z*(5*f);B=D>>>13,D&=8191,D+=A*(5*g)+E*(5*p)+I*(5*h)+L*(5*u)+$*(5*d),B+=D>>>13,D&=8191;let q=B+P*d+M*c+U*(5*m)+j*(5*w)+Z*(5*v);B=q>>>13,q&=8191,q+=A*(5*f)+E*(5*g)+I*(5*p)+L*(5*h)+$*(5*u),B+=q>>>13,q&=8191;let Y=B+P*u+M*d+U*c+j*(5*m)+Z*(5*w);B=Y>>>13,Y&=8191,Y+=A*(5*v)+E*(5*f)+I*(5*g)+L*(5*p)+$*(5*h),B+=Y>>>13,Y&=8191;let ue=B+P*h+M*u+U*d+j*c+Z*(5*m);B=ue>>>13,ue&=8191,ue+=A*(5*w)+E*(5*v)+I*(5*f)+L*(5*g)+$*(5*p),B+=ue>>>13,ue&=8191;let le=B+P*p+M*h+U*u+j*d+Z*c;B=le>>>13,le&=8191,le+=A*(5*m)+E*(5*w)+I*(5*v)+L*(5*f)+$*(5*g),B+=le>>>13,le&=8191;let be=B+P*g+M*p+U*h+j*u+Z*d;B=be>>>13,be&=8191,be+=A*c+E*(5*m)+I*(5*w)+L*(5*v)+$*(5*f),B+=be>>>13,be&=8191;let Pe=B+P*f+M*g+U*p+j*h+Z*u;B=Pe>>>13,Pe&=8191,Pe+=A*d+E*c+I*(5*m)+L*(5*w)+$*(5*v),B+=Pe>>>13,Pe&=8191;let He=B+P*v+M*f+U*g+j*p+Z*h;B=He>>>13,He&=8191,He+=A*u+E*d+I*c+L*(5*m)+$*(5*w),B+=He>>>13,He&=8191;let Oe=B+P*w+M*v+U*f+j*g+Z*p;B=Oe>>>13,Oe&=8191,Oe+=A*h+E*u+I*d+L*c+$*(5*m),B+=Oe>>>13,Oe&=8191;let ke=B+P*m+M*w+U*v+j*f+Z*g;B=ke>>>13,ke&=8191,ke+=A*p+E*h+I*u+L*d+$*c,B+=ke>>>13,ke&=8191,B=(B<<2)+B|0,B=B+D|0,D=B&8191,B=B>>>13,q+=B,o[0]=D,o[1]=q,o[2]=Y,o[3]=ue,o[4]=le,o[5]=be,o[6]=Pe,o[7]=He,o[8]=Oe,o[9]=ke}finalize(){const{h:e,pad:i}=this,s=new Uint16Array(10);let r=e[1]>>>13;e[1]&=8191;for(let c=2;c<10;c++)e[c]+=r,r=e[c]>>>13,e[c]&=8191;e[0]+=r*5,r=e[0]>>>13,e[0]&=8191,e[1]+=r,r=e[1]>>>13,e[1]&=8191,e[2]+=r,s[0]=e[0]+5,r=s[0]>>>13,s[0]&=8191;for(let c=1;c<10;c++)s[c]=e[c]+r,r=s[c]>>>13,s[c]&=8191;s[9]-=8192;let o=(r^1)-1;for(let c=0;c<10;c++)s[c]&=o;o=~o;for(let c=0;c<10;c++)e[c]=e[c]&o|s[c];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let a=e[0]+i[0];e[0]=a&65535;for(let c=1;c<8;c++)a=(e[c]+i[c]|0)+(a>>>16)|0,e[c]=a&65535;on(s)}update(e){N0(this);const{buffer:i,blockLen:s}=this;e=Od(e);const r=e.length;for(let o=0;o<r;){const a=Math.min(s-this.pos,r-o);if(a===s){for(;s<=r-o;o+=s)this.process(e,o);continue}i.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(i,0,!1),this.pos=0)}return this}destroy(){on(this.h,this.r,this.buffer,this.pad)}digestInto(e){N0(this),q2(e,this),this.finished=!0;const{buffer:i,h:s}=this;let{pos:r}=this;if(r){for(i[r++]=1;r<16;r++)i[r]=0;this.process(i,0,!0)}this.finalize();let o=0;for(let a=0;a<8;a++)e[o++]=s[a]>>>0,e[o++]=s[a]>>>8;return e}digest(){const{buffer:e,outputLen:i}=this;this.digestInto(e);const s=e.slice(0,i);return this.destroy(),s}}function ny(t){const e=(s,r)=>t(r).update(Od(s)).digest(),i=t(new Uint8Array(32));return e.outputLen=i.outputLen,e.blockLen=i.blockLen,e.create=s=>t(s),e}const oy=ny(t=>new ry(t));function ay(t,e,i,s,r,o=20){let a=t[0],c=t[1],d=t[2],u=t[3],h=e[0],p=e[1],g=e[2],f=e[3],v=e[4],w=e[5],m=e[6],y=e[7],b=r,_=i[0],x=i[1],k=i[2],N=a,R=c,T=d,P=u,M=h,U=p,j=g,Z=f,A=v,E=w,I=m,L=y,$=b,B=_,D=x,q=k;for(let ue=0;ue<o;ue+=2)N=N+M|0,$=Te($^N,16),A=A+$|0,M=Te(M^A,12),N=N+M|0,$=Te($^N,8),A=A+$|0,M=Te(M^A,7),R=R+U|0,B=Te(B^R,16),E=E+B|0,U=Te(U^E,12),R=R+U|0,B=Te(B^R,8),E=E+B|0,U=Te(U^E,7),T=T+j|0,D=Te(D^T,16),I=I+D|0,j=Te(j^I,12),T=T+j|0,D=Te(D^T,8),I=I+D|0,j=Te(j^I,7),P=P+Z|0,q=Te(q^P,16),L=L+q|0,Z=Te(Z^L,12),P=P+Z|0,q=Te(q^P,8),L=L+q|0,Z=Te(Z^L,7),N=N+U|0,q=Te(q^N,16),I=I+q|0,U=Te(U^I,12),N=N+U|0,q=Te(q^N,8),I=I+q|0,U=Te(U^I,7),R=R+j|0,$=Te($^R,16),L=L+$|0,j=Te(j^L,12),R=R+j|0,$=Te($^R,8),L=L+$|0,j=Te(j^L,7),T=T+Z|0,B=Te(B^T,16),A=A+B|0,Z=Te(Z^A,12),T=T+Z|0,B=Te(B^T,8),A=A+B|0,Z=Te(Z^A,7),P=P+M|0,D=Te(D^P,16),E=E+D|0,M=Te(M^E,12),P=P+M|0,D=Te(D^P,8),E=E+D|0,M=Te(M^E,7);let Y=0;s[Y++]=a+N|0,s[Y++]=c+R|0,s[Y++]=d+T|0,s[Y++]=u+P|0,s[Y++]=h+M|0,s[Y++]=p+U|0,s[Y++]=g+j|0,s[Y++]=f+Z|0,s[Y++]=v+A|0,s[Y++]=w+E|0,s[Y++]=m+I|0,s[Y++]=y+L|0,s[Y++]=b+$|0,s[Y++]=_+B|0,s[Y++]=x+D|0,s[Y++]=k+q|0}const cy=sy(ay,{counterRight:!1,counterLength:4,allowShortKeys:!1}),ly=new Uint8Array(16),L0=(t,e)=>{t.update(e);const i=e.length%16;i&&t.update(ly.subarray(i))},dy=new Uint8Array(32);function B0(t,e,i,s,r){const o=t(e,i,dy),a=oy.create(o);r&&L0(a,r),L0(a,s);const c=new Uint8Array(16),d=W2(c);O0(d,0,BigInt(r?r.length:0),!0),O0(d,8,BigInt(s.length),!0),a.update(c);const u=a.digest();return on(o,c),u}const uy=t=>(e,i,s)=>({encrypt(r,o){const a=r.length;o=k0(a+16,o,!1),o.set(r);const c=o.subarray(0,-16);t(e,i,c,c,1);const d=B0(t,e,i,c,s);return o.set(d,a),on(d),o},decrypt(r,o){o=k0(r.length-16,o,!1);const a=r.subarray(0,-16),c=r.subarray(-16),d=B0(t,e,i,a,s);if(!G2(c,d))throw new Error("invalid tag");return o.set(r.subarray(0,-16)),t(e,i,o,o,1),on(d),o}}),U0=Z2({blockSize:64,nonceLength:12,tagLength:16},uy(cy));class M0 extends Ed{constructor(e,i){super(),this.finished=!1,this.destroyed=!1,xd(e);const s=sn(i);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,o=new Uint8Array(r);o.set(s.length>r?e.create().update(s).digest():s);for(let a=0;a<o.length;a++)o[a]^=54;this.iHash.update(o),this.oHash=e.create();for(let a=0;a<o.length;a++)o[a]^=106;this.oHash.update(o),o.fill(0)}update(e){return en(this),this.iHash.update(e),this}digestInto(e){en(this),vo(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:i,iHash:s,finished:r,destroyed:o,blockLen:a,outputLen:c}=this;return e=e,e.finished=r,e.destroyed=o,e.blockLen=a,e.outputLen=c,e.oHash=i._cloneInto(e.oHash),e.iHash=s._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const gc=(t,e,i)=>new M0(t,e).update(i).digest();gc.create=(t,e)=>new M0(t,e);function hy(t,e,i){return xd(t),i===void 0&&(i=new Uint8Array(t.outputLen)),gc(t,sn(i),sn(e))}const $d=new Uint8Array([0]),D0=new Uint8Array;function py(t,e,i,s=32){if(xd(t),mo(s),s>255*t.outputLen)throw new Error("Length should be <= 255*HashLen");const r=Math.ceil(s/t.outputLen);i===void 0&&(i=D0);const o=new Uint8Array(r*t.outputLen),a=gc.create(t,e),c=a._cloneInto(),d=new Uint8Array(a.outputLen);for(let u=0;u<r;u++)$d[0]=u+1,c.update(u===0?D0:d).update(i).update($d).digestInto(d),o.set(d,t.outputLen*u),a._cloneInto(c);return a.destroy(),c.destroy(),d.fill(0),$d.fill(0),o.slice(0,s)}const gy=(t,e,i,s,r)=>py(t,hy(t,e,i),s,r);function fy(t,e,i,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,i,s);const r=BigInt(32),o=BigInt(4294967295),a=Number(i>>r&o),c=Number(i&o),d=s?4:0,u=s?0:4;t.setUint32(e+d,a,s),t.setUint32(e+u,c,s)}function wy(t,e,i){return t&e^~t&i}function my(t,e,i){return t&e^t&i^e&i}class vy extends Ed{constructor(e,i,s,r){super(),this.blockLen=e,this.outputLen=i,this.padOffset=s,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Cd(this.buffer)}update(e){en(this);const{view:i,buffer:s,blockLen:r}=this;e=sn(e);const o=e.length;for(let a=0;a<o;){const c=Math.min(r-this.pos,o-a);if(c===r){const d=Cd(e);for(;r<=o-a;a+=r)this.process(d,a);continue}s.set(e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===r&&(this.process(i,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){en(this),o0(e,this),this.finished=!0;const{buffer:i,view:s,blockLen:r,isLE:o}=this;let{pos:a}=this;i[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>r-a&&(this.process(s,0),a=0);for(let p=a;p<r;p++)i[p]=0;fy(s,r-8,BigInt(this.length*8),o),this.process(s,0);const c=Cd(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=d/4,h=this.get();if(u>h.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<u;p++)c.setUint32(4*p,h[p],o)}digest(){const{buffer:e,outputLen:i}=this;this.digestInto(e);const s=e.slice(0,i);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:i,buffer:s,length:r,finished:o,destroyed:a,pos:c}=this;return e.length=r,e.pos=c,e.finished=o,e.destroyed=a,r%i&&e.buffer.set(s),e}}const yy=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Os=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Ts=new Uint32Array(64);class by extends vy{constructor(){super(64,32,8,!1),this.A=Os[0]|0,this.B=Os[1]|0,this.C=Os[2]|0,this.D=Os[3]|0,this.E=Os[4]|0,this.F=Os[5]|0,this.G=Os[6]|0,this.H=Os[7]|0}get(){const{A:e,B:i,C:s,D:r,E:o,F:a,G:c,H:d}=this;return[e,i,s,r,o,a,c,d]}set(e,i,s,r,o,a,c,d){this.A=e|0,this.B=i|0,this.C=s|0,this.D=r|0,this.E=o|0,this.F=a|0,this.G=c|0,this.H=d|0}process(e,i){for(let p=0;p<16;p++,i+=4)Ts[p]=e.getUint32(i,!1);for(let p=16;p<64;p++){const g=Ts[p-15],f=Ts[p-2],v=Mi(g,7)^Mi(g,18)^g>>>3,w=Mi(f,17)^Mi(f,19)^f>>>10;Ts[p]=w+Ts[p-7]+v+Ts[p-16]|0}let{A:s,B:r,C:o,D:a,E:c,F:d,G:u,H:h}=this;for(let p=0;p<64;p++){const g=Mi(c,6)^Mi(c,11)^Mi(c,25),f=h+g+wy(c,d,u)+yy[p]+Ts[p]|0,v=(Mi(s,2)^Mi(s,13)^Mi(s,22))+my(s,r,o)|0;h=u,u=d,d=c,c=a+f|0,a=o,o=r,r=s,s=f+v|0}s=s+this.A|0,r=r+this.B|0,o=o+this.C|0,a=a+this.D|0,c=c+this.E|0,d=d+this.F|0,u=u+this.G|0,h=h+this.H|0,this.set(s,r,o,a,c,d,u,h)}roundClean(){Ts.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const bo=d0(()=>new by);const fc=BigInt(0),wc=BigInt(1),_y=BigInt(2);function nr(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function _o(t){if(!nr(t))throw new Error("Uint8Array expected")}function an(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const xy=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function cn(t){_o(t);let e="";for(let i=0;i<t.length;i++)e+=xy[t[i]];return e}function ln(t){const e=t.toString(16);return e.length&1?"0"+e:e}function Ld(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?fc:BigInt("0x"+t)}const is={_0:48,_9:57,A:65,F:70,a:97,f:102};function j0(t){if(t>=is._0&&t<=is._9)return t-is._0;if(t>=is.A&&t<=is.F)return t-(is.A-10);if(t>=is.a&&t<=is.f)return t-(is.a-10)}function dn(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,i=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(i);for(let r=0,o=0;r<i;r++,o+=2){const a=j0(t.charCodeAt(o)),c=j0(t.charCodeAt(o+1));if(a===void 0||c===void 0){const d=t[o]+t[o+1];throw new Error('hex string expected, got non-hex character "'+d+'" at index '+o)}s[r]=a*16+c}return s}function or(t){return Ld(cn(t))}function xo(t){return _o(t),Ld(cn(Uint8Array.from(t).reverse()))}function un(t,e){return dn(t.toString(16).padStart(e*2,"0"))}function mc(t,e){return un(t,e).reverse()}function Cy(t){return dn(ln(t))}function Xt(t,e,i){let s;if(typeof e=="string")try{s=dn(e)}catch(o){throw new Error(t+" must be hex string or Uint8Array, cause: "+o)}else if(nr(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const r=s.length;if(typeof i=="number"&&r!==i)throw new Error(t+" of length "+i+" expected, got "+r);return s}function Co(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];_o(r),e+=r.length}const i=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const o=t[s];i.set(o,r),r+=o.length}return i}function Ey(t,e){if(t.length!==e.length)return!1;let i=0;for(let s=0;s<t.length;s++)i|=t[s]^e[s];return i===0}function Iy(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}const Bd=t=>typeof t=="bigint"&&fc<=t;function vc(t,e,i){return Bd(t)&&Bd(e)&&Bd(i)&&e<=t&&t<i}function ss(t,e,i,s){if(!vc(e,i,s))throw new Error("expected valid "+t+": "+i+" <= n < "+s+", got "+e)}function z0(t){let e;for(e=0;t>fc;t>>=wc,e+=1);return e}function Ay(t,e){return t>>BigInt(e)&wc}function Sy(t,e,i){return t|(i?wc:fc)<<BigInt(e)}const Ud=t=>(_y<<BigInt(t-1))-wc,Md=t=>new Uint8Array(t),F0=t=>Uint8Array.from(t);function H0(t,e,i){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof i!="function")throw new Error("hmacFn must be a function");let s=Md(t),r=Md(t),o=0;const a=()=>{s.fill(1),r.fill(0),o=0},c=(...h)=>i(r,s,...h),d=(h=Md())=>{r=c(F0([0]),h),s=c(),h.length!==0&&(r=c(F0([1]),h),s=c())},u=()=>{if(o++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const p=[];for(;h<e;){s=c();const g=s.slice();p.push(g),h+=s.length}return Co(...p)};return(h,p)=>{a(),d(h);let g;for(;!(g=p(u()));)d();return a(),g}}const Ny={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||nr(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function hn(t,e,i={}){const s=(r,o,a)=>{const c=Ny[o];if(typeof c!="function")throw new Error("invalid validator function");const d=t[r];if(!(a&&d===void 0)&&!c(d,t))throw new Error("param "+String(r)+" is invalid. Expected "+o+", got "+d)};for(const[r,o]of Object.entries(e))s(r,o,!1);for(const[r,o]of Object.entries(i))s(r,o,!0);return t}const Py=()=>{throw new Error("not implemented")};function Dd(t){const e=new WeakMap;return(i,...s)=>{const r=e.get(i);if(r!==void 0)return r;const o=t(i,...s);return e.set(i,o),o}}var ky=Object.freeze({__proto__:null,isBytes:nr,abytes:_o,abool:an,bytesToHex:cn,numberToHexUnpadded:ln,hexToNumber:Ld,hexToBytes:dn,bytesToNumberBE:or,bytesToNumberLE:xo,numberToBytesBE:un,numberToBytesLE:mc,numberToVarBytesBE:Cy,ensureBytes:Xt,concatBytes:Co,equalBytes:Ey,utf8ToBytes:Iy,inRange:vc,aInRange:ss,bitLen:z0,bitGet:Ay,bitSet:Sy,bitMask:Ud,createHmacDrbg:H0,validateObject:hn,notImplemented:Py,memoized:Dd});const gt=BigInt(0),st=BigInt(1),ar=BigInt(2),Oy=BigInt(3),jd=BigInt(4),q0=BigInt(5),W0=BigInt(8);function zt(t,e){const i=t%e;return i>=gt?i:e+i}function V0(t,e,i){if(e<gt)throw new Error("invalid exponent, negatives unsupported");if(i<=gt)throw new Error("invalid modulus");if(i===st)return gt;let s=st;for(;e>gt;)e&st&&(s=s*t%i),t=t*t%i,e>>=st;return s}function Ei(t,e,i){let s=t;for(;e-- >gt;)s*=s,s%=i;return s}function zd(t,e){if(t===gt)throw new Error("invert: expected non-zero number");if(e<=gt)throw new Error("invert: expected positive modulus, got "+e);let i=zt(t,e),s=e,r=gt,o=st;for(;i!==gt;){const a=s/i,c=s%i,d=r-o*a;s=i,i=c,r=o,o=d}if(s!==st)throw new Error("invert: does not exist");return zt(r,e)}function Ty(t){const e=(t-st)/ar;let i,s,r;for(i=t-st,s=0;i%ar===gt;i/=ar,s++);for(r=ar;r<t&&V0(r,e,t)!==t-st;r++)if(r>1e3)throw new Error("Cannot find square root: likely non-prime P");if(s===1){const a=(t+st)/jd;return function(c,d){const u=c.pow(d,a);if(!c.eql(c.sqr(u),d))throw new Error("Cannot find square root");return u}}const o=(i+st)/ar;return function(a,c){if(a.pow(c,e)===a.neg(a.ONE))throw new Error("Cannot find square root");let d=s,u=a.pow(a.mul(a.ONE,r),i),h=a.pow(c,o),p=a.pow(c,i);for(;!a.eql(p,a.ONE);){if(a.eql(p,a.ZERO))return a.ZERO;let g=1;for(let v=a.sqr(p);g<d&&!a.eql(v,a.ONE);g++)v=a.sqr(v);const f=a.pow(u,st<<BigInt(d-g-1));u=a.sqr(f),h=a.mul(h,f),p=a.mul(p,u),d=g}return h}}function Ry(t){if(t%jd===Oy){const e=(t+st)/jd;return function(i,s){const r=i.pow(s,e);if(!i.eql(i.sqr(r),s))throw new Error("Cannot find square root");return r}}if(t%W0===q0){const e=(t-q0)/W0;return function(i,s){const r=i.mul(s,ar),o=i.pow(r,e),a=i.mul(s,o),c=i.mul(i.mul(a,ar),o),d=i.mul(a,i.sub(c,i.ONE));if(!i.eql(i.sqr(d),s))throw new Error("Cannot find square root");return d}}return Ty(t)}const $y=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Ly(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},i=$y.reduce((s,r)=>(s[r]="function",s),e);return hn(t,i)}function By(t,e,i){if(i<gt)throw new Error("invalid exponent, negatives unsupported");if(i===gt)return t.ONE;if(i===st)return e;let s=t.ONE,r=e;for(;i>gt;)i&st&&(s=t.mul(s,r)),r=t.sqr(r),i>>=st;return s}function Uy(t,e){const i=new Array(e.length),s=e.reduce((o,a,c)=>t.is0(a)?o:(i[c]=o,t.mul(o,a)),t.ONE),r=t.inv(s);return e.reduceRight((o,a,c)=>t.is0(a)?o:(i[c]=t.mul(o,i[c]),t.mul(o,a)),r),i}function K0(t,e){const i=e!==void 0?e:t.toString(2).length,s=Math.ceil(i/8);return{nBitLength:i,nByteLength:s}}function G0(t,e,i=!1,s={}){if(t<=gt)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:r,nByteLength:o}=K0(t,e);if(o>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let a;const c=Object.freeze({ORDER:t,isLE:i,BITS:r,BYTES:o,MASK:Ud(r),ZERO:gt,ONE:st,create:d=>zt(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return gt<=d&&d<t},is0:d=>d===gt,isOdd:d=>(d&st)===st,neg:d=>zt(-d,t),eql:(d,u)=>d===u,sqr:d=>zt(d*d,t),add:(d,u)=>zt(d+u,t),sub:(d,u)=>zt(d-u,t),mul:(d,u)=>zt(d*u,t),pow:(d,u)=>By(c,d,u),div:(d,u)=>zt(d*zd(u,t),t),sqrN:d=>d*d,addN:(d,u)=>d+u,subN:(d,u)=>d-u,mulN:(d,u)=>d*u,inv:d=>zd(d,t),sqrt:s.sqrt||(d=>(a||(a=Ry(t)),a(c,d))),invertBatch:d=>Uy(c,d),cmov:(d,u,h)=>h?u:d,toBytes:d=>i?mc(d,o):un(d,o),fromBytes:d=>{if(d.length!==o)throw new Error("Field.fromBytes: expected "+o+" bytes, got "+d.length);return i?xo(d):or(d)}});return Object.freeze(c)}function Z0(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Y0(t){const e=Z0(t);return e+Math.ceil(e/2)}function My(t,e,i=!1){const s=t.length,r=Z0(e),o=Y0(e);if(s<16||s<o||s>1024)throw new Error("expected "+o+"-1024 bytes of input, got "+s);const a=i?xo(t):or(t),c=zt(a,e-st)+st;return i?mc(c,r):un(c,r)}const J0=BigInt(0),yc=BigInt(1);function Fd(t,e){const i=e.negate();return t?i:e}function X0(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Hd(t,e){X0(t,e);const i=Math.ceil(e/t)+1,s=2**(t-1);return{windows:i,windowSize:s}}function Dy(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((i,s)=>{if(!(i instanceof e))throw new Error("invalid point at index "+s)})}function jy(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((i,s)=>{if(!e.isValid(i))throw new Error("invalid scalar at index "+s)})}const qd=new WeakMap,Q0=new WeakMap;function Wd(t){return Q0.get(t)||1}function zy(t,e){return{constTimeNegate:Fd,hasPrecomputes(i){return Wd(i)!==1},unsafeLadder(i,s,r=t.ZERO){let o=i;for(;s>J0;)s&yc&&(r=r.add(o)),o=o.double(),s>>=yc;return r},precomputeWindow(i,s){const{windows:r,windowSize:o}=Hd(s,e),a=[];let c=i,d=c;for(let u=0;u<r;u++){d=c,a.push(d);for(let h=1;h<o;h++)d=d.add(c),a.push(d);c=d.double()}return a},wNAF(i,s,r){const{windows:o,windowSize:a}=Hd(i,e);let c=t.ZERO,d=t.BASE;const u=BigInt(2**i-1),h=2**i,p=BigInt(i);for(let g=0;g<o;g++){const f=g*a;let v=Number(r&u);r>>=p,v>a&&(v-=h,r+=yc);const w=f,m=f+Math.abs(v)-1,y=g%2!==0,b=v<0;v===0?d=d.add(Fd(y,s[w])):c=c.add(Fd(b,s[m]))}return{p:c,f:d}},wNAFUnsafe(i,s,r,o=t.ZERO){const{windows:a,windowSize:c}=Hd(i,e),d=BigInt(2**i-1),u=2**i,h=BigInt(i);for(let p=0;p<a;p++){const g=p*c;if(r===J0)break;let f=Number(r&d);if(r>>=h,f>c&&(f-=u,r+=yc),f===0)continue;let v=s[g+Math.abs(f)-1];f<0&&(v=v.negate()),o=o.add(v)}return o},getPrecomputes(i,s,r){let o=qd.get(s);return o||(o=this.precomputeWindow(s,i),i!==1&&qd.set(s,r(o))),o},wNAFCached(i,s,r){const o=Wd(i);return this.wNAF(o,this.getPrecomputes(o,i,r),s)},wNAFCachedUnsafe(i,s,r,o){const a=Wd(i);return a===1?this.unsafeLadder(i,s,o):this.wNAFUnsafe(a,this.getPrecomputes(a,i,r),s,o)},setWindowSize(i,s){X0(s,e),Q0.set(i,s),qd.delete(i)}}}function Fy(t,e,i,s){if(Dy(i,t),jy(s,e),i.length!==s.length)throw new Error("arrays of points and scalars must have equal length");const r=t.ZERO,o=z0(BigInt(i.length)),a=o>12?o-3:o>4?o-2:o?2:1,c=(1<<a)-1,d=new Array(c+1).fill(r),u=Math.floor((e.BITS-1)/a)*a;let h=r;for(let p=u;p>=0;p-=a){d.fill(r);for(let f=0;f<s.length;f++){const v=s[f],w=Number(v>>BigInt(p)&BigInt(c));d[w]=d[w].add(i[f])}let g=r;for(let f=d.length-1,v=r;f>0;f--)v=v.add(d[f]),g=g.add(v);if(h=h.add(g),p!==0)for(let f=0;f<a;f++)h=h.double()}return h}function e1(t){return Ly(t.Fp),hn(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...K0(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}BigInt(0),BigInt(1),BigInt(2),BigInt(8);const pn=BigInt(0),Vd=BigInt(1);function Hy(t){return hn(t,{a:"bigint"},{montgomeryBits:"isSafeInteger",nByteLength:"isSafeInteger",adjustScalarBytes:"function",domain:"function",powPminus2:"function",Gu:"bigint"}),Object.freeze({...t})}function qy(t){const e=Hy(t),{P:i}=e,s=b=>zt(b,i),r=e.montgomeryBits,o=Math.ceil(r/8),a=e.nByteLength,c=e.adjustScalarBytes||(b=>b),d=e.powPminus2||(b=>V0(b,i-BigInt(2),i));function u(b,_,x){const k=s(b*(_-x));return _=s(_-k),x=s(x+k),[_,x]}const h=(e.a-BigInt(2))/BigInt(4);function p(b,_){ss("u",b,pn,i),ss("scalar",_,pn,i);const x=_,k=b;let N=Vd,R=pn,T=b,P=Vd,M=pn,U;for(let Z=BigInt(r-1);Z>=pn;Z--){const A=x>>Z&Vd;M^=A,U=u(M,N,T),N=U[0],T=U[1],U=u(M,R,P),R=U[0],P=U[1],M=A;const E=N+R,I=s(E*E),L=N-R,$=s(L*L),B=I-$,D=T+P,q=T-P,Y=s(q*E),ue=s(D*L),le=Y+ue,be=Y-ue;T=s(le*le),P=s(k*s(be*be)),N=s(I*$),R=s(B*(I+s(h*B)))}U=u(M,N,T),N=U[0],T=U[1],U=u(M,R,P),R=U[0],P=U[1];const j=d(R);return s(N*j)}function g(b){return mc(s(b),o)}function f(b){const _=Xt("u coordinate",b,o);return a===32&&(_[31]&=127),xo(_)}function v(b){const _=Xt("scalar",b),x=_.length;if(x!==o&&x!==a){let k=""+o+" or "+a;throw new Error("invalid scalar, expected "+k+" bytes, got "+x)}return xo(c(_))}function w(b,_){const x=f(_),k=v(b),N=p(x,k);if(N===pn)throw new Error("invalid private or public key received");return g(N)}const m=g(e.Gu);function y(b){return w(b,m)}return{scalarMult:w,scalarMultBase:y,getSharedSecret:(b,_)=>w(b,_),getPublicKey:b=>y(b),utils:{randomPrivateKey:()=>e.randomBytes(e.nByteLength)},GuBytes:m}}const Kd=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");BigInt(0);const Wy=BigInt(1),t1=BigInt(2),Vy=BigInt(3),Ky=BigInt(5);BigInt(8);function Gy(t){const e=BigInt(10),i=BigInt(20),s=BigInt(40),r=BigInt(80),o=Kd,a=t*t%o*t%o,c=Ei(a,t1,o)*a%o,d=Ei(c,Wy,o)*t%o,u=Ei(d,Ky,o)*d%o,h=Ei(u,e,o)*u%o,p=Ei(h,i,o)*h%o,g=Ei(p,s,o)*p%o,f=Ei(g,r,o)*g%o,v=Ei(f,r,o)*g%o,w=Ei(v,e,o)*u%o;return{pow_p_5_8:Ei(w,t1,o)*t%o,b2:a}}function Zy(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const Gd=qy({P:Kd,a:BigInt(486662),montgomeryBits:255,nByteLength:32,Gu:BigInt(9),powPminus2:t=>{const e=Kd,{pow_p_5_8:i,b2:s}=Gy(t);return zt(Ei(i,Vy,e)*s,e)},adjustScalarBytes:Zy,randomBytes:rn});function i1(t){t.lowS!==void 0&&an("lowS",t.lowS),t.prehash!==void 0&&an("prehash",t.prehash)}function Yy(t){const e=e1(t);hn(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:i,Fp:s,a:r}=e;if(i){if(!s.eql(r,s.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof i!="object"||typeof i.beta!="bigint"||typeof i.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:Jy,hexToBytes:Xy}=ky;class Qy extends Error{constructor(e=""){super(e)}}const rs={Err:Qy,_tlv:{encode:(t,e)=>{const{Err:i}=rs;if(t<0||t>256)throw new i("tlv.encode: wrong tag");if(e.length&1)throw new i("tlv.encode: unpadded data");const s=e.length/2,r=ln(s);if(r.length/2&128)throw new i("tlv.encode: long form length too big");const o=s>127?ln(r.length/2|128):"";return ln(t)+o+r+e},decode(t,e){const{Err:i}=rs;let s=0;if(t<0||t>256)throw new i("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new i("tlv.decode: wrong tlv");const r=e[s++],o=!!(r&128);let a=0;if(!o)a=r;else{const d=r&127;if(!d)throw new i("tlv.decode(long): indefinite length not supported");if(d>4)throw new i("tlv.decode(long): byte length is too big");const u=e.subarray(s,s+d);if(u.length!==d)throw new i("tlv.decode: length bytes not complete");if(u[0]===0)throw new i("tlv.decode(long): zero leftmost byte");for(const h of u)a=a<<8|h;if(s+=d,a<128)throw new i("tlv.decode(long): not minimal encoding")}const c=e.subarray(s,s+a);if(c.length!==a)throw new i("tlv.decode: wrong value length");return{v:c,l:e.subarray(s+a)}}},_int:{encode(t){const{Err:e}=rs;if(t<ns)throw new e("integer: negative integers are not allowed");let i=ln(t);if(Number.parseInt(i[0],16)&8&&(i="00"+i),i.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return i},decode(t){const{Err:e}=rs;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return Jy(t)}},toSig(t){const{Err:e,_int:i,_tlv:s}=rs,r=typeof t=="string"?Xy(t):t;_o(r);const{v:o,l:a}=s.decode(48,r);if(a.length)throw new e("invalid signature: left bytes after parsing");const{v:c,l:d}=s.decode(2,o),{v:u,l:h}=s.decode(2,d);if(h.length)throw new e("invalid signature: left bytes after parsing");return{r:i.decode(c),s:i.decode(u)}},hexFromSig(t){const{_tlv:e,_int:i}=rs,s=e.encode(2,i.encode(t.r)),r=e.encode(2,i.encode(t.s)),o=s+r;return e.encode(48,o)}},ns=BigInt(0),ft=BigInt(1);BigInt(2);const s1=BigInt(3);BigInt(4);function eb(t){const e=Yy(t),{Fp:i}=e,s=G0(e.n,e.nBitLength),r=e.toBytes||((w,m,y)=>{const b=m.toAffine();return Co(Uint8Array.from([4]),i.toBytes(b.x),i.toBytes(b.y))}),o=e.fromBytes||(w=>{const m=w.subarray(1),y=i.fromBytes(m.subarray(0,i.BYTES)),b=i.fromBytes(m.subarray(i.BYTES,2*i.BYTES));return{x:y,y:b}});function a(w){const{a:m,b:y}=e,b=i.sqr(w),_=i.mul(b,w);return i.add(i.add(_,i.mul(w,m)),y)}if(!i.eql(i.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function c(w){return vc(w,ft,e.n)}function d(w){const{allowedPrivateKeyLengths:m,nByteLength:y,wrapPrivateKey:b,n:_}=e;if(m&&typeof w!="bigint"){if(nr(w)&&(w=cn(w)),typeof w!="string"||!m.includes(w.length))throw new Error("invalid private key");w=w.padStart(y*2,"0")}let x;try{x=typeof w=="bigint"?w:or(Xt("private key",w,y))}catch{throw new Error("invalid private key, expected hex or "+y+" bytes, got "+typeof w)}return b&&(x=zt(x,_)),ss("private key",x,ft,_),x}function u(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}const h=Dd((w,m)=>{const{px:y,py:b,pz:_}=w;if(i.eql(_,i.ONE))return{x:y,y:b};const x=w.is0();m==null&&(m=x?i.ONE:i.inv(_));const k=i.mul(y,m),N=i.mul(b,m),R=i.mul(_,m);if(x)return{x:i.ZERO,y:i.ZERO};if(!i.eql(R,i.ONE))throw new Error("invZ was invalid");return{x:k,y:N}}),p=Dd(w=>{if(w.is0()){if(e.allowInfinityPoint&&!i.is0(w.py))return;throw new Error("bad point: ZERO")}const{x:m,y}=w.toAffine();if(!i.isValid(m)||!i.isValid(y))throw new Error("bad point: x or y not FE");const b=i.sqr(y),_=a(m);if(!i.eql(b,_))throw new Error("bad point: equation left != right");if(!w.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class g{constructor(m,y,b){if(this.px=m,this.py=y,this.pz=b,m==null||!i.isValid(m))throw new Error("x required");if(y==null||!i.isValid(y))throw new Error("y required");if(b==null||!i.isValid(b))throw new Error("z required");Object.freeze(this)}static fromAffine(m){const{x:y,y:b}=m||{};if(!m||!i.isValid(y)||!i.isValid(b))throw new Error("invalid affine point");if(m instanceof g)throw new Error("projective point not allowed");const _=x=>i.eql(x,i.ZERO);return _(y)&&_(b)?g.ZERO:new g(y,b,i.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(m){const y=i.invertBatch(m.map(b=>b.pz));return m.map((b,_)=>b.toAffine(y[_])).map(g.fromAffine)}static fromHex(m){const y=g.fromAffine(o(Xt("pointHex",m)));return y.assertValidity(),y}static fromPrivateKey(m){return g.BASE.multiply(d(m))}static msm(m,y){return Fy(g,s,m,y)}_setWindowSize(m){v.setWindowSize(this,m)}assertValidity(){p(this)}hasEvenY(){const{y:m}=this.toAffine();if(i.isOdd)return!i.isOdd(m);throw new Error("Field doesn't support isOdd")}equals(m){u(m);const{px:y,py:b,pz:_}=this,{px:x,py:k,pz:N}=m,R=i.eql(i.mul(y,N),i.mul(x,_)),T=i.eql(i.mul(b,N),i.mul(k,_));return R&&T}negate(){return new g(this.px,i.neg(this.py),this.pz)}double(){const{a:m,b:y}=e,b=i.mul(y,s1),{px:_,py:x,pz:k}=this;let N=i.ZERO,R=i.ZERO,T=i.ZERO,P=i.mul(_,_),M=i.mul(x,x),U=i.mul(k,k),j=i.mul(_,x);return j=i.add(j,j),T=i.mul(_,k),T=i.add(T,T),N=i.mul(m,T),R=i.mul(b,U),R=i.add(N,R),N=i.sub(M,R),R=i.add(M,R),R=i.mul(N,R),N=i.mul(j,N),T=i.mul(b,T),U=i.mul(m,U),j=i.sub(P,U),j=i.mul(m,j),j=i.add(j,T),T=i.add(P,P),P=i.add(T,P),P=i.add(P,U),P=i.mul(P,j),R=i.add(R,P),U=i.mul(x,k),U=i.add(U,U),P=i.mul(U,j),N=i.sub(N,P),T=i.mul(U,M),T=i.add(T,T),T=i.add(T,T),new g(N,R,T)}add(m){u(m);const{px:y,py:b,pz:_}=this,{px:x,py:k,pz:N}=m;let R=i.ZERO,T=i.ZERO,P=i.ZERO;const M=e.a,U=i.mul(e.b,s1);let j=i.mul(y,x),Z=i.mul(b,k),A=i.mul(_,N),E=i.add(y,b),I=i.add(x,k);E=i.mul(E,I),I=i.add(j,Z),E=i.sub(E,I),I=i.add(y,_);let L=i.add(x,N);return I=i.mul(I,L),L=i.add(j,A),I=i.sub(I,L),L=i.add(b,_),R=i.add(k,N),L=i.mul(L,R),R=i.add(Z,A),L=i.sub(L,R),P=i.mul(M,I),R=i.mul(U,A),P=i.add(R,P),R=i.sub(Z,P),P=i.add(Z,P),T=i.mul(R,P),Z=i.add(j,j),Z=i.add(Z,j),A=i.mul(M,A),I=i.mul(U,I),Z=i.add(Z,A),A=i.sub(j,A),A=i.mul(M,A),I=i.add(I,A),j=i.mul(Z,I),T=i.add(T,j),j=i.mul(L,I),R=i.mul(E,R),R=i.sub(R,j),j=i.mul(E,Z),P=i.mul(L,P),P=i.add(P,j),new g(R,T,P)}subtract(m){return this.add(m.negate())}is0(){return this.equals(g.ZERO)}wNAF(m){return v.wNAFCached(this,m,g.normalizeZ)}multiplyUnsafe(m){const{endo:y,n:b}=e;ss("scalar",m,ns,b);const _=g.ZERO;if(m===ns)return _;if(this.is0()||m===ft)return this;if(!y||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,m,g.normalizeZ);let{k1neg:x,k1:k,k2neg:N,k2:R}=y.splitScalar(m),T=_,P=_,M=this;for(;k>ns||R>ns;)k&ft&&(T=T.add(M)),R&ft&&(P=P.add(M)),M=M.double(),k>>=ft,R>>=ft;return x&&(T=T.negate()),N&&(P=P.negate()),P=new g(i.mul(P.px,y.beta),P.py,P.pz),T.add(P)}multiply(m){const{endo:y,n:b}=e;ss("scalar",m,ft,b);let _,x;if(y){const{k1neg:k,k1:N,k2neg:R,k2:T}=y.splitScalar(m);let{p:P,f:M}=this.wNAF(N),{p:U,f:j}=this.wNAF(T);P=v.constTimeNegate(k,P),U=v.constTimeNegate(R,U),U=new g(i.mul(U.px,y.beta),U.py,U.pz),_=P.add(U),x=M.add(j)}else{const{p:k,f:N}=this.wNAF(m);_=k,x=N}return g.normalizeZ([_,x])[0]}multiplyAndAddUnsafe(m,y,b){const _=g.BASE,x=(N,R)=>R===ns||R===ft||!N.equals(_)?N.multiplyUnsafe(R):N.multiply(R),k=x(this,y).add(x(m,b));return k.is0()?void 0:k}toAffine(m){return h(this,m)}isTorsionFree(){const{h:m,isTorsionFree:y}=e;if(m===ft)return!0;if(y)return y(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:m,clearCofactor:y}=e;return m===ft?this:y?y(g,this):this.multiplyUnsafe(e.h)}toRawBytes(m=!0){return an("isCompressed",m),this.assertValidity(),r(g,this,m)}toHex(m=!0){return an("isCompressed",m),cn(this.toRawBytes(m))}}g.BASE=new g(e.Gx,e.Gy,i.ONE),g.ZERO=new g(i.ZERO,i.ONE,i.ZERO);const f=e.nBitLength,v=zy(g,e.endo?Math.ceil(f/2):f);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:c}}function tb(t){const e=e1(t);return hn(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function ib(t){const e=tb(t),{Fp:i,n:s}=e,r=i.BYTES+1,o=2*i.BYTES+1;function a(A){return zt(A,s)}function c(A){return zd(A,s)}const{ProjectivePoint:d,normPrivateKeyToScalar:u,weierstrassEquation:h,isWithinCurveOrder:p}=eb({...e,toBytes(A,E,I){const L=E.toAffine(),$=i.toBytes(L.x),B=Co;return an("isCompressed",I),I?B(Uint8Array.from([E.hasEvenY()?2:3]),$):B(Uint8Array.from([4]),$,i.toBytes(L.y))},fromBytes(A){const E=A.length,I=A[0],L=A.subarray(1);if(E===r&&(I===2||I===3)){const $=or(L);if(!vc($,ft,i.ORDER))throw new Error("Point is not on curve");const B=h($);let D;try{D=i.sqrt(B)}catch(Y){const ue=Y instanceof Error?": "+Y.message:"";throw new Error("Point is not on curve"+ue)}const q=(D&ft)===ft;return(I&1)===1!==q&&(D=i.neg(D)),{x:$,y:D}}else if(E===o&&I===4){const $=i.fromBytes(L.subarray(0,i.BYTES)),B=i.fromBytes(L.subarray(i.BYTES,2*i.BYTES));return{x:$,y:B}}else{const $=r,B=o;throw new Error("invalid Point, expected length of "+$+", or uncompressed "+B+", got "+E)}}}),g=A=>cn(un(A,e.nByteLength));function f(A){const E=s>>ft;return A>E}function v(A){return f(A)?a(-A):A}const w=(A,E,I)=>or(A.slice(E,I));class m{constructor(E,I,L){this.r=E,this.s=I,this.recovery=L,this.assertValidity()}static fromCompact(E){const I=e.nByteLength;return E=Xt("compactSignature",E,I*2),new m(w(E,0,I),w(E,I,2*I))}static fromDER(E){const{r:I,s:L}=rs.toSig(Xt("DER",E));return new m(I,L)}assertValidity(){ss("r",this.r,ft,s),ss("s",this.s,ft,s)}addRecoveryBit(E){return new m(this.r,this.s,E)}recoverPublicKey(E){const{r:I,s:L,recovery:$}=this,B=N(Xt("msgHash",E));if($==null||![0,1,2,3].includes($))throw new Error("recovery id invalid");const D=$===2||$===3?I+e.n:I;if(D>=i.ORDER)throw new Error("recovery id 2 or 3 invalid");const q=$&1?"03":"02",Y=d.fromHex(q+g(D)),ue=c(D),le=a(-B*ue),be=a(L*ue),Pe=d.BASE.multiplyAndAddUnsafe(Y,le,be);if(!Pe)throw new Error("point at infinify");return Pe.assertValidity(),Pe}hasHighS(){return f(this.s)}normalizeS(){return this.hasHighS()?new m(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return dn(this.toDERHex())}toDERHex(){return rs.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return dn(this.toCompactHex())}toCompactHex(){return g(this.r)+g(this.s)}}const y={isValidPrivateKey(A){try{return u(A),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const A=Y0(e.n);return My(e.randomBytes(A),e.n)},precompute(A=8,E=d.BASE){return E._setWindowSize(A),E.multiply(BigInt(3)),E}};function b(A,E=!0){return d.fromPrivateKey(A).toRawBytes(E)}function _(A){const E=nr(A),I=typeof A=="string",L=(E||I)&&A.length;return E?L===r||L===o:I?L===2*r||L===2*o:A instanceof d}function x(A,E,I=!0){if(_(A))throw new Error("first arg must be private key");if(!_(E))throw new Error("second arg must be public key");return d.fromHex(E).multiply(u(A)).toRawBytes(I)}const k=e.bits2int||function(A){if(A.length>8192)throw new Error("input is too large");const E=or(A),I=A.length*8-e.nBitLength;return I>0?E>>BigInt(I):E},N=e.bits2int_modN||function(A){return a(k(A))},R=Ud(e.nBitLength);function T(A){return ss("num < 2^"+e.nBitLength,A,ns,R),un(A,e.nByteLength)}function P(A,E,I=M){if(["recovered","canonical"].some(Oe=>Oe in I))throw new Error("sign() legacy options not supported");const{hash:L,randomBytes:$}=e;let{lowS:B,prehash:D,extraEntropy:q}=I;B==null&&(B=!0),A=Xt("msgHash",A),i1(I),D&&(A=Xt("prehashed msgHash",L(A)));const Y=N(A),ue=u(E),le=[T(ue),T(Y)];if(q!=null&&q!==!1){const Oe=q===!0?$(i.BYTES):q;le.push(Xt("extraEntropy",Oe))}const be=Co(...le),Pe=Y;function He(Oe){const ke=k(Oe);if(!p(ke))return;const Je=c(ke),Qe=d.BASE.multiply(ke).toAffine(),et=a(Qe.x);if(et===ns)return;const it=a(Je*a(Pe+et*ue));if(it===ns)return;let Dt=(Qe.x===et?0:2)|Number(Qe.y&ft),Xr=it;return B&&f(it)&&(Xr=v(it),Dt^=1),new m(et,Xr,Dt)}return{seed:be,k2sig:He}}const M={lowS:e.lowS,prehash:!1},U={lowS:e.lowS,prehash:!1};function j(A,E,I=M){const{seed:L,k2sig:$}=P(A,E,I),B=e;return H0(B.hash.outputLen,B.nByteLength,B.hmac)(L,$)}d.BASE._setWindowSize(8);function Z(A,E,I,L=U){var it;const $=A;E=Xt("msgHash",E),I=Xt("publicKey",I);const{lowS:B,prehash:D,format:q}=L;if(i1(L),"strict"in L)throw new Error("options.strict was renamed to lowS");if(q!==void 0&&q!=="compact"&&q!=="der")throw new Error("format must be compact or der");const Y=typeof $=="string"||nr($),ue=!Y&&!q&&typeof $=="object"&&$!==null&&typeof $.r=="bigint"&&typeof $.s=="bigint";if(!Y&&!ue)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let le,be;try{if(ue&&(le=new m($.r,$.s)),Y){try{q!=="compact"&&(le=m.fromDER($))}catch(Dt){if(!(Dt instanceof rs.Err))throw Dt}!le&&q!=="der"&&(le=m.fromCompact($))}be=d.fromHex(I)}catch{return!1}if(!le||B&&le.hasHighS())return!1;D&&(E=e.hash(E));const{r:Pe,s:He}=le,Oe=N(E),ke=c(He),Je=a(Oe*ke),Qe=a(Pe*ke),et=(it=d.BASE.multiplyAndAddUnsafe(be,Je,Qe))==null?void 0:it.toAffine();return et?a(et.x)===Pe:!1}return{CURVE:e,getPublicKey:b,getSharedSecret:x,sign:j,verify:Z,ProjectivePoint:d,Signature:m,utils:y}}function sb(t){return{hash:t,hmac:(e,...i)=>gc(t,e,l2(...i)),randomBytes:rn}}function rb(t,e){const i=s=>ib({...t,...sb(s)});return{...i(e),create:i}}const r1=G0(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")),nb=r1.create(BigInt("-3")),ob=BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),ab=rb({a:nb,b:ob,Fp:r1,n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),h:BigInt(1),lowS:!1},bo),n1="base10",Rt="base16",Ii="base64pad",Rs="base64url",Eo="utf8",o1=0,os=1,Io=2,cb=0,a1=1,Ao=12,Zd=32;function lb(){const t=Gd.utils.randomPrivateKey(),e=Gd.getPublicKey(t);return{privateKey:(0,Le.BB)(t,Rt),publicKey:(0,Le.BB)(e,Rt)}}function Yd(){const t=rn(Zd);return(0,Le.BB)(t,Rt)}function db(t,e){const i=Gd.getSharedSecret((0,Le.mL)(t,Rt),(0,Le.mL)(e,Rt)),s=gy(bo,i,void 0,void 0,Zd);return(0,Le.BB)(s,Rt)}function bc(t){const e=bo((0,Le.mL)(t,Rt));return(0,Le.BB)(e,Rt)}function Di(t){const e=bo((0,Le.mL)(t,Eo));return(0,Le.BB)(e,Rt)}function c1(t){return(0,Le.mL)(`${t}`,n1)}function cr(t){return Number((0,Le.BB)(t,n1))}function l1(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function d1(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),i=(4-e.length%4)%4;return e+"=".repeat(i)}function ub(t){const e=c1(typeof t.type<"u"?t.type:o1);if(cr(e)===os&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const i=typeof t.senderPublicKey<"u"?(0,Le.mL)(t.senderPublicKey,Rt):void 0,s=typeof t.iv<"u"?(0,Le.mL)(t.iv,Rt):rn(Ao),r=(0,Le.mL)(t.symKey,Rt),o=U0(r,s).encrypt((0,Le.mL)(t.message,Eo)),a=u1({type:e,sealed:o,iv:s,senderPublicKey:i});return t.encoding===Rs?l1(a):a}function hb(t){const e=(0,Le.mL)(t.symKey,Rt),{sealed:i,iv:s}=So({encoded:t.encoded,encoding:t.encoding}),r=U0(e,s).decrypt(i);if(r===null)throw new Error("Failed to decrypt");return(0,Le.BB)(r,Eo)}function pb(t,e){const i=c1(Io),s=rn(Ao),r=(0,Le.mL)(t,Eo),o=u1({type:i,sealed:r,iv:s});return e===Rs?l1(o):o}function gb(t,e){const{sealed:i}=So({encoded:t,encoding:e});return(0,Le.BB)(i,Eo)}function u1(t){if(cr(t.type)===Io)return(0,Le.BB)((0,Le.zo)([t.type,t.sealed]),Ii);if(cr(t.type)===os){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return(0,Le.BB)((0,Le.zo)([t.type,t.senderPublicKey,t.iv,t.sealed]),Ii)}return(0,Le.BB)((0,Le.zo)([t.type,t.iv,t.sealed]),Ii)}function So(t){const e=(t.encoding||Ii)===Rs?d1(t.encoded):t.encoded,i=(0,Le.mL)(e,Ii),s=i.slice(cb,a1),r=a1;if(cr(s)===os){const d=r+Zd,u=d+Ao,h=i.slice(r,d),p=i.slice(d,u),g=i.slice(u);return{type:s,sealed:g,iv:p,senderPublicKey:h}}if(cr(s)===Io){const d=i.slice(r),u=rn(Ao);return{type:s,sealed:d,iv:u}}const o=r+Ao,a=i.slice(r,o),c=i.slice(o);return{type:s,sealed:c,iv:a}}function fb(t,e){const i=So({encoded:t,encoding:e==null?void 0:e.encoding});return h1({type:cr(i.type),senderPublicKey:typeof i.senderPublicKey<"u"?(0,Le.BB)(i.senderPublicKey,Rt):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function h1(t){const e=(t==null?void 0:t.type)||o1;if(e===os){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function p1(t){return t.type===os&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}function g1(t){return t.type===Io}function wb(t){const e=es.from(t.x,"base64"),i=es.from(t.y,"base64");return(0,Le.zo)([new Uint8Array([4]),e,i])}function mb(t,e){const[i,s,r]=t.split("."),o=es.from(d1(r),"base64");if(o.length!==64)throw new Error("Invalid signature length");const a=o.slice(0,32),c=o.slice(32,64),d=`${i}.${s}`,u=bo(d),h=wb(e);if(!ab.verify((0,Le.zo)([a,c]),u,h))throw new Error("Invalid signature");return(0,er.xp)(t).payload}const vb="irn";function _c(t){return(t==null?void 0:t.relay)||{protocol:vb}}function No(t){const e=vv.iO[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}function yb(t,e="-"){const i={},s="relay"+e;return Object.keys(t).forEach(r=>{if(r.startsWith(s)){const o=r.replace(s,""),a=t[r];i[o]=a}}),i}function f1(t){if(!t.includes("wc:")){const u=n0(t);u!=null&&u.includes("wc:")&&(t=u)}t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),i=t.indexOf("?")!==-1?t.indexOf("?"):void 0,s=t.substring(0,e),r=t.substring(e+1,i).split("@"),o=typeof i<"u"?t.substring(i):"",a=new URLSearchParams(o),c={};a.forEach((u,h)=>{c[h]=u});const d=typeof c.methods=="string"?c.methods.split(","):void 0;return{protocol:s,topic:bb(r[0]),version:parseInt(r[1],10),symKey:c.symKey,relay:yb(c),methods:d,expiryTimestamp:c.expiryTimestamp?parseInt(c.expiryTimestamp,10):void 0}}function bb(t){return t.startsWith("//")?t.substring(2):t}function _b(t,e="-"){const i="relay",s={};return Object.keys(t).forEach(r=>{const o=r,a=i+e+o;t[o]&&(s[a]=t[o])}),s}function w1(t){const e=new URLSearchParams,i=_b(t.relay);Object.keys(i).sort().forEach(r=>{e.set(r,i[r])}),e.set("symKey",t.symKey),t.expiryTimestamp&&e.set("expiryTimestamp",t.expiryTimestamp.toString()),t.methods&&e.set("methods",t.methods.join(","));const s=e.toString();return`${t.protocol}:${t.topic}@${t.version}?${s}`}function xc(t,e,i){return`${t}?wc_ev=${i}&topic=${e}`}var xb=Object.defineProperty,Cb=Object.defineProperties,Eb=Object.getOwnPropertyDescriptors,m1=Object.getOwnPropertySymbols,Ib=Object.prototype.hasOwnProperty,Ab=Object.prototype.propertyIsEnumerable,v1=(t,e,i)=>e in t?xb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Sb=(t,e)=>{for(var i in e||(e={}))Ib.call(e,i)&&v1(t,i,e[i]);if(m1)for(var i of m1(e))Ab.call(e,i)&&v1(t,i,e[i]);return t},Nb=(t,e)=>Cb(t,Eb(e));function gn(t){const e=[];return t.forEach(i=>{const[s,r]=i.split(":");e.push(`${s}:${r}`)}),e}function Pb(t){const e=[];return Object.values(t).forEach(i=>{e.push(...gn(i.accounts))}),e}function kb(t,e){const i=[];return Object.values(t).forEach(s=>{gn(s.accounts).includes(e)&&i.push(...s.methods)}),i}function Ob(t,e){const i=[];return Object.values(t).forEach(s=>{gn(s.accounts).includes(e)&&i.push(...s.events)}),i}function kO(t,e){const i=Ic(t,e);if(i)throw new Error(i.message);const s={};for(const[r,o]of Object.entries(t))s[r]={methods:o.methods,events:o.events,chains:o.accounts.map(a=>`${a.split(":")[0]}:${a.split(":")[1]}`)};return s}function OO(t){const{proposal:{requiredNamespaces:e,optionalNamespaces:i={}},supportedNamespaces:s}=t,r=y1(e),o=y1(i),a={};Object.keys(s).forEach(u=>{const h=s[u].chains,p=s[u].methods,g=s[u].events,f=s[u].accounts;h.forEach(v=>{if(!f.some(w=>w.includes(v)))throw new Error(`No accounts provided for chain ${v} in namespace ${u}`)}),a[u]={chains:h,methods:p,events:g,accounts:f}});const c=Xd(e,a,"approve()");if(c)throw new Error(c.message);const d={};return!Object.keys(e).length&&!Object.keys(i).length?a:(Object.keys(r).forEach(u=>{const h=s[u].chains.filter(v=>{var w,m;return(m=(w=r[u])==null?void 0:w.chains)==null?void 0:m.includes(v)}),p=s[u].methods.filter(v=>{var w,m;return(m=(w=r[u])==null?void 0:w.methods)==null?void 0:m.includes(v)}),g=s[u].events.filter(v=>{var w,m;return(m=(w=r[u])==null?void 0:w.events)==null?void 0:m.includes(v)}),f=h.map(v=>s[u].accounts.filter(w=>w.includes(`${v}:`))).flat();d[u]={chains:h,methods:p,events:g,accounts:f}}),Object.keys(o).forEach(u=>{var h,p,g,f,v,w;if(!s[u])return;const m=(p=(h=o[u])==null?void 0:h.chains)==null?void 0:p.filter(x=>s[u].chains.includes(x)),y=s[u].methods.filter(x=>{var k,N;return(N=(k=o[u])==null?void 0:k.methods)==null?void 0:N.includes(x)}),b=s[u].events.filter(x=>{var k,N;return(N=(k=o[u])==null?void 0:k.events)==null?void 0:N.includes(x)}),_=m==null?void 0:m.map(x=>s[u].accounts.filter(k=>k.includes(`${x}:`))).flat();d[u]={chains:Ci((g=d[u])==null?void 0:g.chains,m),methods:Ci((f=d[u])==null?void 0:f.methods,y),events:Ci((v=d[u])==null?void 0:v.events,b),accounts:Ci((w=d[u])==null?void 0:w.accounts,_)}}),d)}function Cc(t){return t.includes(":")}function fn(t){return Cc(t)?t.split(":")[0]:t}function y1(t){var e,i,s;const r={};if(!wn(t))return r;for(const[o,a]of Object.entries(t)){const c=Cc(o)?[o]:a.chains,d=a.methods||[],u=a.events||[],h=fn(o);r[h]=Nb(Sb({},r[h]),{chains:Ci(c,(e=r[h])==null?void 0:e.chains),methods:Ci(d,(i=r[h])==null?void 0:i.methods),events:Ci(u,(s=r[h])==null?void 0:s.events)})}return r}function Tb(t){const e={};return t==null||t.forEach(i=>{var s;const[r,o]=i.split(":");e[r]||(e[r]={accounts:[],chains:[],events:[],methods:[]}),e[r].accounts.push(i),(s=e[r].chains)==null||s.push(`${r}:${o}`)}),e}function b1(t,e){e=e.map(s=>s.replace("did:pkh:",""));const i=Tb(e);for(const[s,r]of Object.entries(i))r.methods?r.methods=Ci(r.methods,t):r.methods=t,r.events=["chainChanged","accountsChanged"];return i}const Rb={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},$b={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function W(t,e){const{message:i,code:s}=$b[t];return{message:e?`${i} ${e}`:i,code:s}}function De(t,e){const{message:i,code:s}=Rb[t];return{message:e?`${i} ${e}`:i,code:s}}function Ai(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function wn(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Ct(t){return typeof t>"u"}function ot(t,e){return e&&Ct(t)?!0:typeof t=="string"&&!!t.trim().length}function Jd(t,e){return e&&Ct(t)?!0:typeof t=="number"&&!isNaN(t)}function Lb(t,e){const{requiredNamespaces:i}=e,s=Object.keys(t.namespaces),r=Object.keys(i);let o=!0;return ir(r,s)?(s.forEach(a=>{const{accounts:c,methods:d,events:u}=t.namespaces[a],h=gn(c),p=i[a];(!ir(md(a,p),h)||!ir(p.methods,d)||!ir(p.events,u))&&(o=!1)}),o):!1}function Ec(t){return ot(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function Bb(t){if(ot(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const i=e[0]+":"+e[1];return!!e[2]&&Ec(i)}}return!1}function Ub(t){function e(i){try{return typeof new URL(i)<"u"}catch{return!1}}try{if(ot(t,!1)){if(e(t))return!0;const i=n0(t);return e(i)}}catch{}return!1}function Mb(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function Db(t){return t==null?void 0:t.topic}function jb(t,e){let i=null;return ot(t==null?void 0:t.publicKey,!1)||(i=W("MISSING_OR_INVALID",`${e} controller public key should be a string`)),i}function _1(t){let e=!0;return Ai(t)?t.length&&(e=t.every(i=>ot(i,!1))):e=!1,e}function zb(t,e,i){let s=null;return Ai(e)&&e.length?e.forEach(r=>{s||Ec(r)||(s=De("UNSUPPORTED_CHAINS",`${i}, chain ${r} should be a string and conform to "namespace:chainId" format`))}):Ec(t)||(s=De("UNSUPPORTED_CHAINS",`${i}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s}function Fb(t,e,i){let s=null;return Object.entries(t).forEach(([r,o])=>{if(s)return;const a=zb(r,md(r,o),`${e} ${i}`);a&&(s=a)}),s}function Hb(t,e){let i=null;return Ai(t)?t.forEach(s=>{i||Bb(s)||(i=De("UNSUPPORTED_ACCOUNTS",`${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`))}):i=De("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),i}function qb(t,e){let i=null;return Object.values(t).forEach(s=>{if(i)return;const r=Hb(s==null?void 0:s.accounts,`${e} namespace`);r&&(i=r)}),i}function Wb(t,e){let i=null;return _1(t==null?void 0:t.methods)?_1(t==null?void 0:t.events)||(i=De("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):i=De("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),i}function x1(t,e){let i=null;return Object.values(t).forEach(s=>{if(i)return;const r=Wb(s,`${e}, namespace`);r&&(i=r)}),i}function Vb(t,e,i){let s=null;if(t&&wn(t)){const r=x1(t,e);r&&(s=r);const o=Fb(t,e,i);o&&(s=o)}else s=W("MISSING_OR_INVALID",`${e}, ${i} should be an object with data`);return s}function Ic(t,e){let i=null;if(t&&wn(t)){const s=x1(t,e);s&&(i=s);const r=qb(t,e);r&&(i=r)}else i=W("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return i}function C1(t){return ot(t.protocol,!0)}function Kb(t,e){let i=!1;return e&&!t?i=!0:t&&Ai(t)&&t.length&&t.forEach(s=>{i=C1(s)}),i}function Gb(t){return typeof t=="number"}function Ft(t){return typeof t<"u"&&typeof t!==null}function Zb(t){return!(!t||typeof t!="object"||!t.code||!Jd(t.code,!1)||!t.message||!ot(t.message,!1))}function Yb(t){return!(Ct(t)||!ot(t.method,!1))}function Jb(t){return!(Ct(t)||Ct(t.result)&&Ct(t.error)||!Jd(t.id,!1)||!ot(t.jsonrpc,!1))}function Xb(t){return!(Ct(t)||!ot(t.name,!1))}function E1(t,e){return!(!Ec(e)||!Pb(t).includes(e))}function Qb(t,e,i){return ot(i,!1)?kb(t,e).includes(i):!1}function e3(t,e,i){return ot(i,!1)?Ob(t,e).includes(i):!1}function Xd(t,e,i){let s=null;const r=t3(t),o=i3(e),a=Object.keys(r),c=Object.keys(o),d=I1(Object.keys(t)),u=I1(Object.keys(e)),h=d.filter(p=>!u.includes(p));return h.length&&(s=W("NON_CONFORMING_NAMESPACES",`${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(e).toString()}`)),ir(a,c)||(s=W("NON_CONFORMING_NAMESPACES",`${i} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${c.toString()}`)),Object.keys(e).forEach(p=>{if(!p.includes(":")||s)return;const g=gn(e[p].accounts);g.includes(p)||(s=W("NON_CONFORMING_NAMESPACES",`${i} namespaces accounts don't satisfy namespace accounts for ${p}
        Required: ${p}
        Approved: ${g.toString()}`))}),a.forEach(p=>{s||(ir(r[p].methods,o[p].methods)?ir(r[p].events,o[p].events)||(s=W("NON_CONFORMING_NAMESPACES",`${i} namespaces events don't satisfy namespace events for ${p}`)):s=W("NON_CONFORMING_NAMESPACES",`${i} namespaces methods don't satisfy namespace methods for ${p}`))}),s}function t3(t){const e={};return Object.keys(t).forEach(i=>{var s;i.includes(":")?e[i]=t[i]:(s=t[i].chains)==null||s.forEach(r=>{e[r]={methods:t[i].methods,events:t[i].events}})}),e}function I1(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function i3(t){const e={};return Object.keys(t).forEach(i=>{if(i.includes(":"))e[i]=t[i];else{const s=gn(t[i].accounts);s==null||s.forEach(r=>{e[r]={accounts:t[i].accounts.filter(o=>o.includes(`${r}:`)),methods:t[i].methods,events:t[i].events}})}}),e}function s3(t,e){return Jd(t,!1)&&t<=e.max&&t>=e.min}function A1(){const t=Qr();return new Promise(e=>{switch(t){case jt.browser:e(r3());break;case jt.reactNative:e(n3());break;case jt.node:e(o3());break;default:e(!0)}})}function r3(){return wo()&&(navigator==null?void 0:navigator.onLine)}async function n3(){if(Ss()&&typeof J.g<"u"&&J.g!=null&&J.g.NetInfo){const t=await(J.g==null?void 0:J.g.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function o3(){return!0}function a3(t){switch(Qr()){case jt.browser:c3(t);break;case jt.reactNative:l3(t);break;case jt.node:break}}function c3(t){!Ss()&&wo()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function l3(t){var e;Ss()&&typeof J.g<"u"&&J.g!=null&&J.g.NetInfo&&((e=J.g)==null||e.NetInfo.addEventListener(i=>t(i==null?void 0:i.isConnected)))}const Qd={};class Po{static get(e){return Qd[e]}static set(e,i){Qd[e]=i}static delete(e){delete Qd[e]}}var mn=J(19994),d3=J(76429),lr=J(37353),dr=J(41926);function TO(t){return t}const u3="idb-keyval";var h3=(t={})=>{const e=t.base&&t.base.length>0?`${t.base}:`:"",i=r=>e+r;let s;return t.dbName&&t.storeName&&(s=(0,lr.MT)(t.dbName,t.storeName)),{name:u3,options:t,async hasItem(r){return!(typeof await(0,lr.U2)(i(r),s)>"u")},async getItem(r){return await(0,lr.U2)(i(r),s)??null},setItem(r,o){return(0,lr.t8)(i(r),o,s)},removeItem(r){return(0,lr.IV)(i(r),s)},getKeys(){return(0,lr.XP)(s)},clear(){return(0,lr.ZH)(s)}}};const p3="WALLET_CONNECT_V2_INDEXED_DB",g3="keyvaluestorage";class f3{constructor(){this.indexedDb=(0,d3.o6)({driver:h3({dbName:p3,storeName:g3})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e=>[e.key,e.value])}async getItem(e){const i=await this.indexedDb.getItem(e);if(i!==null)return i}async setItem(e,i){await this.indexedDb.setItem(e,(0,dr.u)(i))}async removeItem(e){await this.indexedDb.removeItem(e)}}var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof J.g<"u"?J.g:typeof self<"u"?self:{},Ac={exports:{}};(function(){let t;function e(){}t=e,t.prototype.getItem=function(i){return this.hasOwnProperty(i)?String(this[i]):null},t.prototype.setItem=function(i,s){this[i]=String(s)},t.prototype.removeItem=function(i){delete this[i]},t.prototype.clear=function(){const i=this;Object.keys(i).forEach(function(s){i[s]=void 0,delete i[s]})},t.prototype.key=function(i){return i=i||0,Object.keys(this)[i]},t.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof eu<"u"&&eu.localStorage?Ac.exports=eu.localStorage:typeof window<"u"&&window.localStorage?Ac.exports=window.localStorage:Ac.exports=new e})();function w3(t){var e;return[t[0],(0,dr.D)((e=t[1])!=null?e:"")]}class m3{constructor(){this.localStorage=Ac.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(w3)}async getItem(e){const i=this.localStorage.getItem(e);if(i!==null)return(0,dr.D)(i)}async setItem(e,i){this.localStorage.setItem(e,(0,dr.u)(i))}async removeItem(e){this.localStorage.removeItem(e)}}const v3="wc_storage_version",S1=1,y3=async(t,e,i)=>{const s=v3,r=await e.getItem(s);if(r&&r>=S1){i(e);return}const o=await t.getKeys();if(!o.length){i(e);return}const a=[];for(;o.length;){const c=o.shift();if(!c)continue;const d=c.toLowerCase();if(d.includes("wc@")||d.includes("walletconnect")||d.includes("wc_")||d.includes("wallet_connect")){const u=await t.getItem(c);await e.setItem(c,u),a.push(c)}}await e.setItem(s,S1),i(e),b3(t,a)},b3=async(t,e)=>{e.length&&e.forEach(async i=>{await t.removeItem(i)})};class _3{constructor(){this.initialized=!1,this.setInitialized=i=>{this.storage=i,this.initialized=!0};const e=new m3;this.storage=e;try{const i=new f3;y3(e,i,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(e){return await this.initialize(),this.storage.getItem(e)}async setItem(e,i){return await this.initialize(),this.storage.setItem(e,i)}async removeItem(e){return await this.initialize(),this.storage.removeItem(e)}async initialize(){this.initialized||await new Promise(e=>{const i=setInterval(()=>{this.initialized&&(clearInterval(i),e())},20)})}}var xe=J(56526),vn=J(36900),x3=Object.defineProperty,C3=(t,e,i)=>e in t?x3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,N1=(t,e,i)=>C3(t,typeof e!="symbol"?e+"":e,i);class E3 extends vn.q{constructor(e){super(),this.opts=e,N1(this,"protocol","wc"),N1(this,"version",2)}}class RO{constructor(e,i,s){this.core=e,this.logger=i}}var I3=Object.defineProperty,A3=(t,e,i)=>e in t?I3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,S3=(t,e,i)=>A3(t,typeof e!="symbol"?e+"":e,i);class N3 extends vn.q{constructor(e,i){super(),this.core=e,this.logger=i,S3(this,"records",new Map)}}class P3{constructor(e,i){this.logger=e,this.core=i}}class k3 extends vn.q{constructor(e,i){super(),this.relayer=e,this.logger=i}}class O3 extends vn.q{constructor(e){super()}}class T3{constructor(e,i,s,r){this.core=e,this.logger=i,this.name=s}}var R3=Object.defineProperty,$3=(t,e,i)=>e in t?R3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,L3=(t,e,i)=>$3(t,typeof e!="symbol"?e+"":e,i);class $O{constructor(){L3(this,"map",new Map)}}class B3 extends vn.q{constructor(e,i){super(),this.relayer=e,this.logger=i}}class LO{constructor(e,i){this.core=e,this.logger=i}}class U3 extends vn.q{constructor(e,i){super(),this.core=e,this.logger=i}}class BO{constructor(e,i){this.logger=e,this.core=i}}class M3{constructor(e,i,s){this.core=e,this.logger=i,this.store=s}}class D3{constructor(e,i){this.projectId=e,this.logger=i}}class j3{constructor(e,i,s){this.core=e,this.logger=i,this.telemetryEnabled=s}}var z3=Object.defineProperty,F3=(t,e,i)=>e in t?z3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,P1=(t,e,i)=>F3(t,typeof e!="symbol"?e+"":e,i);class UO extends null{constructor(){super()}}class H3{constructor(e){this.opts=e,P1(this,"protocol","wc"),P1(this,"version",2)}}class MO extends null{constructor(){super()}}class q3{constructor(e){this.client=e}}var li=J(56390),he=J(23700),W3=J(85452),tu=J(55872).Buffer,V3=J(14224);const k1="wc",O1=2,Sc="core",ji=`${k1}@2:${Sc}:`,K3={name:Sc,logger:"error"},G3={database:":memory:"},Z3="crypto",T1="client_ed25519_seed",Y3=K.ONE_DAY,J3="keychain",X3="0.3",Q3="messages",e5="0.3",R1=K.SIX_HOURS,t5="publisher",$1="irn",i5="error",L1="wss://relay.walletconnect.org",s5="relayer",wt={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},r5="_subscription",di={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},n5=.1,DO={database:":memory:"},iu="2.20.2",jO=1e4,Xe={link_mode:"link_mode",relay:"relay"},Nc={inbound:"inbound",outbound:"outbound"},o5="0.3",a5="WALLETCONNECT_CLIENT_ID",B1="WALLETCONNECT_LINK_MODE_APPS",Qt={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},zO=null,c5="subscription",l5="0.3",FO=K.FIVE_SECONDS*1e3,d5="pairing",u5="0.3",HO=null,ko={wc_pairingDelete:{req:{ttl:K.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:K.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:K.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:K.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:K.ONE_DAY,prompt:!1,tag:0},res:{ttl:K.ONE_DAY,prompt:!1,tag:0}}},ur={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},Si={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},h5="history",p5="0.3",g5="expirer",ui={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},f5="0.3",qO=null,w5="verify-api",m5="https://verify.walletconnect.com",U1="https://verify.walletconnect.org",Oo=U1,v5=`${Oo}/v3`,y5=[m5,U1],b5="echo",_5="https://echo.walletconnect.com",WO="event-client",zi={pairing_started:"pairing_started",pairing_uri_validation_success:"pairing_uri_validation_success",pairing_uri_not_expired:"pairing_uri_not_expired",store_new_pairing:"store_new_pairing",subscribing_pairing_topic:"subscribing_pairing_topic",subscribe_pairing_topic_success:"subscribe_pairing_topic_success",existing_pairing:"existing_pairing",pairing_not_expired:"pairing_not_expired",emit_inactive_pairing:"emit_inactive_pairing",emit_session_proposal:"emit_session_proposal",subscribing_to_pairing_topic:"subscribing_to_pairing_topic"},as={no_wss_connection:"no_wss_connection",no_internet_connection:"no_internet_connection",malformed_pairing_uri:"malformed_pairing_uri",active_pairing_already_exists:"active_pairing_already_exists",subscribe_pairing_topic_failure:"subscribe_pairing_topic_failure",pairing_expired:"pairing_expired",proposal_expired:"proposal_expired",proposal_listener_not_found:"proposal_listener_not_found"},Ni={session_approve_started:"session_approve_started",proposal_not_expired:"proposal_not_expired",session_namespaces_validation_success:"session_namespaces_validation_success",create_session_topic:"create_session_topic",subscribing_session_topic:"subscribing_session_topic",subscribe_session_topic_success:"subscribe_session_topic_success",publishing_session_approve:"publishing_session_approve",session_approve_publish_success:"session_approve_publish_success",store_session:"store_session",publishing_session_settle:"publishing_session_settle",session_settle_publish_success:"session_settle_publish_success"},hr={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",proposal_expired:"proposal_expired",subscribe_session_topic_failure:"subscribe_session_topic_failure",session_approve_publish_failure:"session_approve_publish_failure",session_settle_publish_failure:"session_settle_publish_failure",session_approve_namespace_validation_failure:"session_approve_namespace_validation_failure",proposal_not_found:"proposal_not_found"},pr={authenticated_session_approve_started:"authenticated_session_approve_started",authenticated_session_not_expired:"authenticated_session_not_expired",chains_caip2_compliant:"chains_caip2_compliant",chains_evm_compliant:"chains_evm_compliant",create_authenticated_session_topic:"create_authenticated_session_topic",cacaos_verified:"cacaos_verified",store_authenticated_session:"store_authenticated_session",subscribing_authenticated_session_topic:"subscribing_authenticated_session_topic",subscribe_authenticated_session_topic_success:"subscribe_authenticated_session_topic_success",publishing_authenticated_session_approve:"publishing_authenticated_session_approve",authenticated_session_approve_publish_success:"authenticated_session_approve_publish_success"},To={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",missing_session_authenticate_request:"missing_session_authenticate_request",session_authenticate_request_expired:"session_authenticate_request_expired",chains_caip2_compliant_failure:"chains_caip2_compliant_failure",chains_evm_compliant_failure:"chains_evm_compliant_failure",invalid_cacao:"invalid_cacao",subscribe_authenticated_session_topic_failure:"subscribe_authenticated_session_topic_failure",authenticated_session_approve_publish_failure:"authenticated_session_approve_publish_failure",authenticated_session_pending_request_not_found:"authenticated_session_pending_request_not_found"},x5=.1,C5="event-client",E5=86400,I5="https://pulse.walletconnect.org/batch";function A5(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var i=new Uint8Array(256),s=0;s<i.length;s++)i[s]=255;for(var r=0;r<t.length;r++){var o=t.charAt(r),a=o.charCodeAt(0);if(i[a]!==255)throw new TypeError(o+" is ambiguous");i[a]=r}var c=t.length,d=t.charAt(0),u=Math.log(c)/Math.log(256),h=Math.log(256)/Math.log(c);function p(v){if(v instanceof Uint8Array||(ArrayBuffer.isView(v)?v=new Uint8Array(v.buffer,v.byteOffset,v.byteLength):Array.isArray(v)&&(v=Uint8Array.from(v))),!(v instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(v.length===0)return"";for(var w=0,m=0,y=0,b=v.length;y!==b&&v[y]===0;)y++,w++;for(var _=(b-y)*h+1>>>0,x=new Uint8Array(_);y!==b;){for(var k=v[y],N=0,R=_-1;(k!==0||N<m)&&R!==-1;R--,N++)k+=256*x[R]>>>0,x[R]=k%c>>>0,k=k/c>>>0;if(k!==0)throw new Error("Non-zero carry");m=N,y++}for(var T=_-m;T!==_&&x[T]===0;)T++;for(var P=d.repeat(w);T<_;++T)P+=t.charAt(x[T]);return P}function g(v){if(typeof v!="string")throw new TypeError("Expected String");if(v.length===0)return new Uint8Array;var w=0;if(v[w]!==" "){for(var m=0,y=0;v[w]===d;)m++,w++;for(var b=(v.length-w)*u+1>>>0,_=new Uint8Array(b);v[w];){var x=i[v.charCodeAt(w)];if(x===255)return;for(var k=0,N=b-1;(x!==0||k<y)&&N!==-1;N--,k++)x+=c*_[N]>>>0,_[N]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");y=k,w++}if(v[w]!==" "){for(var R=b-y;R!==b&&_[R]===0;)R++;for(var T=new Uint8Array(m+(b-R)),P=m;R!==b;)T[P++]=_[R++];return T}}}function f(v){var w=g(v);if(w)return w;throw new Error(`Non-${e} character`)}return{encode:p,decodeUnsafe:g,decode:f}}var S5=A5,N5=S5;const M1=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},P5=t=>new TextEncoder().encode(t),k5=t=>new TextDecoder().decode(t);class O5{constructor(e,i,s){this.name=e,this.prefix=i,this.baseEncode=s}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class T5{constructor(e,i,s){if(this.name=e,this.prefix=i,i.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=i.codePointAt(0),this.baseDecode=s}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return D1(this,e)}}class R5{constructor(e){this.decoders=e}or(e){return D1(this,e)}decode(e){const i=e[0],s=this.decoders[i];if(s)return s.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const D1=(t,e)=>new R5({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class $5{constructor(e,i,s,r){this.name=e,this.prefix=i,this.baseEncode=s,this.baseDecode=r,this.encoder=new O5(e,i,s),this.decoder=new T5(e,i,r)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Pc=({name:t,prefix:e,encode:i,decode:s})=>new $5(t,e,i,s),Ro=({prefix:t,name:e,alphabet:i})=>{const{encode:s,decode:r}=N5(i,e);return Pc({prefix:t,name:e,encode:s,decode:o=>M1(r(o))})},L5=(t,e,i,s)=>{const r={};for(let h=0;h<e.length;++h)r[e[h]]=h;let o=t.length;for(;t[o-1]==="=";)--o;const a=new Uint8Array(o*i/8|0);let c=0,d=0,u=0;for(let h=0;h<o;++h){const p=r[t[h]];if(p===void 0)throw new SyntaxError(`Non-${s} character`);d=d<<i|p,c+=i,c>=8&&(c-=8,a[u++]=255&d>>c)}if(c>=i||255&d<<8-c)throw new SyntaxError("Unexpected end of data");return a},B5=(t,e,i)=>{const s=e[e.length-1]==="=",r=(1<<i)-1;let o="",a=0,c=0;for(let d=0;d<t.length;++d)for(c=c<<8|t[d],a+=8;a>i;)a-=i,o+=e[r&c>>a];if(a&&(o+=e[r&c<<i-a]),s)for(;o.length*i&7;)o+="=";return o},Et=({name:t,prefix:e,bitsPerChar:i,alphabet:s})=>Pc({prefix:e,name:t,encode(r){return B5(r,s,i)},decode(r){return L5(r,s,i,t)}}),U5=Pc({prefix:"\0",name:"identity",encode:t=>k5(t),decode:t=>P5(t)});var M5=Object.freeze({__proto__:null,identity:U5});const D5=Et({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var j5=Object.freeze({__proto__:null,base2:D5});const z5=Et({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var F5=Object.freeze({__proto__:null,base8:z5});const H5=Ro({prefix:"9",name:"base10",alphabet:"0123456789"});var q5=Object.freeze({__proto__:null,base10:H5});const W5=Et({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),V5=Et({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var K5=Object.freeze({__proto__:null,base16:W5,base16upper:V5});const G5=Et({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Z5=Et({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Y5=Et({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),J5=Et({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),X5=Et({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Q5=Et({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),e4=Et({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),t4=Et({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),i4=Et({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var s4=Object.freeze({__proto__:null,base32:G5,base32upper:Z5,base32pad:Y5,base32padupper:J5,base32hex:X5,base32hexupper:Q5,base32hexpad:e4,base32hexpadupper:t4,base32z:i4});const r4=Ro({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),n4=Ro({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var o4=Object.freeze({__proto__:null,base36:r4,base36upper:n4});const a4=Ro({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),c4=Ro({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var l4=Object.freeze({__proto__:null,base58btc:a4,base58flickr:c4});const d4=Et({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),u4=Et({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),h4=Et({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),p4=Et({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var g4=Object.freeze({__proto__:null,base64:d4,base64pad:u4,base64url:h4,base64urlpad:p4});const j1=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),f4=j1.reduce((t,e,i)=>(t[i]=e,t),[]),w4=j1.reduce((t,e,i)=>(t[e.codePointAt(0)]=i,t),[]);function m4(t){return t.reduce((e,i)=>(e+=f4[i],e),"")}function v4(t){const e=[];for(const i of t){const s=w4[i.codePointAt(0)];if(s===void 0)throw new Error(`Non-base256emoji character: ${i}`);e.push(s)}return new Uint8Array(e)}const y4=Pc({prefix:"\u{1F680}",name:"base256emoji",encode:m4,decode:v4});var b4=Object.freeze({__proto__:null,base256emoji:y4}),_4=F1,z1=128,x4=127,C4=~x4,E4=Math.pow(2,31);function F1(t,e,i){e=e||[],i=i||0;for(var s=i;t>=E4;)e[i++]=t&255|z1,t/=128;for(;t&C4;)e[i++]=t&255|z1,t>>>=7;return e[i]=t|0,F1.bytes=i-s+1,e}var I4=su,A4=128,H1=127;function su(t,s){var i=0,s=s||0,r=0,o=s,a,c=t.length;do{if(o>=c)throw su.bytes=0,new RangeError("Could not decode varint");a=t[o++],i+=r<28?(a&H1)<<r:(a&H1)*Math.pow(2,r),r+=7}while(a>=A4);return su.bytes=o-s,i}var S4=Math.pow(2,7),N4=Math.pow(2,14),P4=Math.pow(2,21),k4=Math.pow(2,28),O4=Math.pow(2,35),T4=Math.pow(2,42),R4=Math.pow(2,49),$4=Math.pow(2,56),L4=Math.pow(2,63),B4=function(t){return t<S4?1:t<N4?2:t<P4?3:t<k4?4:t<O4?5:t<T4?6:t<R4?7:t<$4?8:t<L4?9:10},U4={encode:_4,decode:I4,encodingLength:B4},q1=U4;const W1=(t,e,i=0)=>(q1.encode(t,e,i),e),V1=t=>q1.encodingLength(t),ru=(t,e)=>{const i=e.byteLength,s=V1(t),r=s+V1(i),o=new Uint8Array(r+i);return W1(t,o,0),W1(i,o,s),o.set(e,r),new M4(t,i,e,o)};class M4{constructor(e,i,s,r){this.code=e,this.size=i,this.digest=s,this.bytes=r}}const K1=({name:t,code:e,encode:i})=>new D4(t,e,i);class D4{constructor(e,i,s){this.name=e,this.code=i,this.encode=s}digest(e){if(e instanceof Uint8Array){const i=this.encode(e);return i instanceof Uint8Array?ru(this.code,i):i.then(s=>ru(this.code,s))}else throw Error("Unknown type, must be binary type")}}const G1=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),j4=K1({name:"sha2-256",code:18,encode:G1("SHA-256")}),z4=K1({name:"sha2-512",code:19,encode:G1("SHA-512")});var F4=Object.freeze({__proto__:null,sha256:j4,sha512:z4});const Z1=0,H4="identity",Y1=M1;var q4=Object.freeze({__proto__:null,identity:{code:Z1,name:H4,encode:Y1,digest:t=>ru(Z1,Y1(t))}});new TextEncoder,new TextDecoder;const J1={...M5,...j5,...F5,...q5,...K5,...s4,...o4,...l4,...g4,...b4};({...F4,...q4});function W4(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(t):new Uint8Array(t)}function X1(t,e,i,s){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:i},decoder:{decode:s}}}const Q1=X1("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),nu=X1("ascii","a",t=>{let e="a";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return e},t=>{t=t.substring(1);const e=W4(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}),V4={utf8:Q1,"utf-8":Q1,hex:J1.base16,latin1:nu,ascii:nu,binary:nu,...J1};function K4(t,e="utf8"){const i=V4[e];if(!i)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t,"utf8"):i.decoder.decode(`${i.prefix}${t}`)}var G4=Object.defineProperty,Z4=(t,e,i)=>e in t?G4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Fi=(t,e,i)=>Z4(t,typeof e!="symbol"?e+"":e,i);class Y4{constructor(e,i){this.core=e,this.logger=i,Fi(this,"keychain",new Map),Fi(this,"name",J3),Fi(this,"version",X3),Fi(this,"initialized",!1),Fi(this,"storagePrefix",ji),Fi(this,"init",async()=>{if(!this.initialized){const s=await this.getKeyChain();typeof s<"u"&&(this.keychain=s),this.initialized=!0}}),Fi(this,"has",s=>(this.isInitialized(),this.keychain.has(s))),Fi(this,"set",async(s,r)=>{this.isInitialized(),this.keychain.set(s,r),await this.persist()}),Fi(this,"get",s=>{this.isInitialized();const r=this.keychain.get(s);if(typeof r>"u"){const{message:o}=W("NO_MATCHING_KEY",`${this.name}: ${s}`);throw new Error(o)}return r}),Fi(this,"del",async s=>{this.isInitialized(),this.keychain.delete(s),await this.persist()}),this.core=e,this.logger=(0,xe.Ep)(i,this.name)}get context(){return(0,xe.Fd)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,yd(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?bd(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}}var J4=Object.defineProperty,X4=(t,e,i)=>e in t?J4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,It=(t,e,i)=>X4(t,typeof e!="symbol"?e+"":e,i);class Q4{constructor(e,i,s){this.core=e,this.logger=i,It(this,"name",Z3),It(this,"keychain"),It(this,"randomSessionIdentifier",Yd()),It(this,"initialized",!1),It(this,"init",async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)}),It(this,"hasKeys",r=>(this.isInitialized(),this.keychain.has(r))),It(this,"getClientId",async()=>{this.isInitialized();const r=await this.getClientSeed(),o=er.Au(r);return er.bG(o.publicKey)}),It(this,"generateKeyPair",()=>{this.isInitialized();const r=lb();return this.setPrivateKey(r.publicKey,r.privateKey)}),It(this,"signJWT",async r=>{this.isInitialized();const o=await this.getClientSeed(),a=er.Au(o),c=this.randomSessionIdentifier,d=Y3;return await er.vf(c,r,d,a)}),It(this,"generateSharedKey",(r,o,a)=>{this.isInitialized();const c=this.getPrivateKey(r),d=db(c,o);return this.setSymKey(d,a)}),It(this,"setSymKey",async(r,o)=>{this.isInitialized();const a=o||bc(r);return await this.keychain.set(a,r),a}),It(this,"deleteKeyPair",async r=>{this.isInitialized(),await this.keychain.del(r)}),It(this,"deleteSymKey",async r=>{this.isInitialized(),await this.keychain.del(r)}),It(this,"encode",async(r,o,a)=>{this.isInitialized();const c=h1(a),d=(0,dr.u)(o);if(g1(c))return pb(d,a==null?void 0:a.encoding);if(p1(c)){const g=c.senderPublicKey,f=c.receiverPublicKey;r=await this.generateSharedKey(g,f)}const u=this.getSymKey(r),{type:h,senderPublicKey:p}=c;return ub({type:h,symKey:u,message:d,senderPublicKey:p,encoding:a==null?void 0:a.encoding})}),It(this,"decode",async(r,o,a)=>{this.isInitialized();const c=fb(o,a);if(g1(c)){const d=gb(o,a==null?void 0:a.encoding);return(0,dr.D)(d)}if(p1(c)){const d=c.receiverPublicKey,u=c.senderPublicKey;r=await this.generateSharedKey(d,u)}try{const d=this.getSymKey(r),u=hb({symKey:d,encoded:o,encoding:a==null?void 0:a.encoding});return(0,dr.D)(u)}catch(d){this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`),this.logger.error(d)}}),It(this,"getPayloadType",(r,o=Ii)=>{const a=So({encoded:r,encoding:o});return cr(a.type)}),It(this,"getPayloadSenderPublicKey",(r,o=Ii)=>{const a=So({encoded:r,encoding:o});return a.senderPublicKey?(0,Le.BB)(a.senderPublicKey,Rt):void 0}),this.core=e,this.logger=(0,xe.Ep)(i,this.name),this.keychain=s||new Y4(this.core,this.logger)}get context(){return(0,xe.Fd)(this.logger)}async setPrivateKey(e,i){return await this.keychain.set(e,i),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(T1)}catch{e=Yd(),await this.keychain.set(T1,e)}return K4(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}}var e6=Object.defineProperty,t6=Object.defineProperties,i6=Object.getOwnPropertyDescriptors,eg=Object.getOwnPropertySymbols,s6=Object.prototype.hasOwnProperty,r6=Object.prototype.propertyIsEnumerable,ou=(t,e,i)=>e in t?e6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,n6=(t,e)=>{for(var i in e||(e={}))s6.call(e,i)&&ou(t,i,e[i]);if(eg)for(var i of eg(e))r6.call(e,i)&&ou(t,i,e[i]);return t},o6=(t,e)=>t6(t,i6(e)),ei=(t,e,i)=>ou(t,typeof e!="symbol"?e+"":e,i);class a6 extends P3{constructor(e,i){super(e,i),this.logger=e,this.core=i,ei(this,"messages",new Map),ei(this,"messagesWithoutClientAck",new Map),ei(this,"name",Q3),ei(this,"version",e5),ei(this,"initialized",!1),ei(this,"storagePrefix",ji),ei(this,"init",async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const s=await this.getRelayerMessages();typeof s<"u"&&(this.messages=s);const r=await this.getRelayerMessagesWithoutClientAck();typeof r<"u"&&(this.messagesWithoutClientAck=r),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(s){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(s)}finally{this.initialized=!0}}}),ei(this,"set",async(s,r,o)=>{this.isInitialized();const a=Di(r);let c=this.messages.get(s);if(typeof c>"u"&&(c={}),typeof c[a]<"u")return a;if(c[a]=r,this.messages.set(s,c),o===Nc.inbound){const d=this.messagesWithoutClientAck.get(s)||{};this.messagesWithoutClientAck.set(s,o6(n6({},d),{[a]:r}))}return await this.persist(),a}),ei(this,"get",s=>{this.isInitialized();let r=this.messages.get(s);return typeof r>"u"&&(r={}),r}),ei(this,"getWithoutAck",s=>{this.isInitialized();const r={};for(const o of s){const a=this.messagesWithoutClientAck.get(o)||{};r[o]=Object.values(a)}return r}),ei(this,"has",(s,r)=>{this.isInitialized();const o=this.get(s),a=Di(r);return typeof o[a]<"u"}),ei(this,"ack",async(s,r)=>{this.isInitialized();const o=this.messagesWithoutClientAck.get(s);if(typeof o>"u")return;const a=Di(r);delete o[a],Object.keys(o).length===0?this.messagesWithoutClientAck.delete(s):this.messagesWithoutClientAck.set(s,o),await this.persist()}),ei(this,"del",async s=>{this.isInitialized(),this.messages.delete(s),this.messagesWithoutClientAck.delete(s),await this.persist()}),this.logger=(0,xe.Ep)(e,this.name),this.core=i}get context(){return(0,xe.Fd)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get storageKeyWithoutClientAck(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name+"_withoutClientAck"}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,yd(e))}async setRelayerMessagesWithoutClientAck(e){await this.core.storage.setItem(this.storageKeyWithoutClientAck,yd(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?bd(e):void 0}async getRelayerMessagesWithoutClientAck(){const e=await this.core.storage.getItem(this.storageKeyWithoutClientAck);return typeof e<"u"?bd(e):void 0}async persist(){await this.setRelayerMessages(this.messages),await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}}var c6=Object.defineProperty,l6=Object.defineProperties,d6=Object.getOwnPropertyDescriptors,tg=Object.getOwnPropertySymbols,u6=Object.prototype.hasOwnProperty,h6=Object.prototype.propertyIsEnumerable,au=(t,e,i)=>e in t?c6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,kc=(t,e)=>{for(var i in e||(e={}))u6.call(e,i)&&au(t,i,e[i]);if(tg)for(var i of tg(e))h6.call(e,i)&&au(t,i,e[i]);return t},cu=(t,e)=>l6(t,d6(e)),Pi=(t,e,i)=>au(t,typeof e!="symbol"?e+"":e,i);class p6 extends k3{constructor(e,i){super(e,i),this.relayer=e,this.logger=i,Pi(this,"events",new Qi.EventEmitter),Pi(this,"name",t5),Pi(this,"queue",new Map),Pi(this,"publishTimeout",(0,K.toMiliseconds)(K.ONE_MINUTE)),Pi(this,"initialPublishTimeout",(0,K.toMiliseconds)(K.ONE_SECOND*15)),Pi(this,"needsTransportRestart",!1),Pi(this,"publish",async(s,r,o)=>{var a;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:s,message:r,opts:o}});const c=(o==null?void 0:o.ttl)||R1,d=_c(o),u=(o==null?void 0:o.prompt)||!1,h=(o==null?void 0:o.tag)||0,p=(o==null?void 0:o.id)||(0,he.getBigIntRpcId)().toString(),g={topic:s,message:r,opts:{ttl:c,relay:d,prompt:u,tag:h,id:p,attestation:o==null?void 0:o.attestation,tvf:o==null?void 0:o.tvf}},f=`Failed to publish payload, please try again. id:${p} tag:${h}`;try{const v=new Promise(async w=>{const m=({id:b})=>{g.opts.id===b&&(this.removeRequestFromQueue(b),this.relayer.events.removeListener(wt.publish,m),w(g))};this.relayer.events.on(wt.publish,m);const y=Ns(new Promise((b,_)=>{this.rpcPublish({topic:s,message:r,ttl:c,prompt:u,tag:h,id:p,attestation:o==null?void 0:o.attestation,tvf:o==null?void 0:o.tvf}).then(b).catch(x=>{this.logger.warn(x,x==null?void 0:x.message),_(x)})}),this.initialPublishTimeout,`Failed initial publish, retrying.... id:${p} tag:${h}`);try{await y,this.events.removeListener(wt.publish,m)}catch(b){this.queue.set(p,cu(kc({},g),{attempt:1})),this.logger.warn(b,b==null?void 0:b.message)}});this.logger.trace({type:"method",method:"publish",params:{id:p,topic:s,message:r,opts:o}}),await Ns(v,this.publishTimeout,f)}catch(v){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(v),(a=o==null?void 0:o.internal)!=null&&a.throwOnFailedPublish)throw v}finally{this.queue.delete(p)}}),Pi(this,"on",(s,r)=>{this.events.on(s,r)}),Pi(this,"once",(s,r)=>{this.events.once(s,r)}),Pi(this,"off",(s,r)=>{this.events.off(s,r)}),Pi(this,"removeListener",(s,r)=>{this.events.removeListener(s,r)}),this.relayer=e,this.logger=(0,xe.Ep)(i,this.name),this.registerEventListeners()}get context(){return(0,xe.Fd)(this.logger)}async rpcPublish(e){var i,s,r,o;const{topic:a,message:c,ttl:d=R1,prompt:u,tag:h,id:p,attestation:g,tvf:f}=e,v={method:No(_c().protocol).publish,params:kc({topic:a,message:c,ttl:d,prompt:u,tag:h,attestation:g},f),id:p};Ct((i=v.params)==null?void 0:i.prompt)&&((s=v.params)==null||delete s.prompt),Ct((r=v.params)==null?void 0:r.tag)&&((o=v.params)==null||delete o.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:v});const w=await this.relayer.request(v);return this.relayer.events.emit(wt.publish,e),this.logger.debug("Successfully Published Payload"),w}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async(e,i)=>{const s=e.attempt+1;this.queue.set(i,cu(kc({},e),{attempt:s}));const{topic:r,message:o,opts:a,attestation:c}=e;this.logger.warn({},`Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${s}`),await this.rpcPublish(cu(kc({},e),{topic:r,message:o,ttl:a.ttl,prompt:a.prompt,tag:a.tag,id:a.id,attestation:c,tvf:a.tvf})),this.logger.warn({},`Publisher: queue->published: ${e.opts.id}`)})}registerEventListeners(){this.relayer.core.heartbeat.on(mn.Lx.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(wt.connection_stalled);return}this.checkQueue()}),this.relayer.on(wt.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}}var g6=Object.defineProperty,f6=(t,e,i)=>e in t?g6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,yn=(t,e,i)=>f6(t,typeof e!="symbol"?e+"":e,i);class w6{constructor(){yn(this,"map",new Map),yn(this,"set",(e,i)=>{const s=this.get(e);this.exists(e,i)||this.map.set(e,[...s,i])}),yn(this,"get",e=>this.map.get(e)||[]),yn(this,"exists",(e,i)=>this.get(e).includes(i)),yn(this,"delete",(e,i)=>{if(typeof i>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const s=this.get(e);if(!this.exists(e,i))return;const r=s.filter(o=>o!==i);if(!r.length){this.map.delete(e);return}this.map.set(e,r)}),yn(this,"clear",()=>{this.map.clear()})}get topics(){return Array.from(this.map.keys())}}var m6=Object.defineProperty,v6=Object.defineProperties,y6=Object.getOwnPropertyDescriptors,ig=Object.getOwnPropertySymbols,b6=Object.prototype.hasOwnProperty,_6=Object.prototype.propertyIsEnumerable,lu=(t,e,i)=>e in t?m6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$o=(t,e)=>{for(var i in e||(e={}))b6.call(e,i)&&lu(t,i,e[i]);if(ig)for(var i of ig(e))_6.call(e,i)&&lu(t,i,e[i]);return t},du=(t,e)=>v6(t,y6(e)),qe=(t,e,i)=>lu(t,typeof e!="symbol"?e+"":e,i);class x6 extends B3{constructor(e,i){super(e,i),this.relayer=e,this.logger=i,qe(this,"subscriptions",new Map),qe(this,"topicMap",new w6),qe(this,"events",new Qi.EventEmitter),qe(this,"name",c5),qe(this,"version",l5),qe(this,"pending",new Map),qe(this,"cached",[]),qe(this,"initialized",!1),qe(this,"storagePrefix",ji),qe(this,"subscribeTimeout",(0,K.toMiliseconds)(K.ONE_MINUTE)),qe(this,"initialSubscribeTimeout",(0,K.toMiliseconds)(K.ONE_SECOND*15)),qe(this,"clientId"),qe(this,"batchSubscribeTopicsLimit",500),qe(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),await this.restore()),this.initialized=!0}),qe(this,"subscribe",async(s,r)=>{this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:s,opts:r}});try{const o=_c(r),a={topic:s,relay:o,transportType:r==null?void 0:r.transportType};this.pending.set(s,a);const c=await this.rpcSubscribe(s,o,r);return typeof c=="string"&&(this.onSubscribe(c,a),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:s,opts:r}})),c}catch(o){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(o),o}}),qe(this,"unsubscribe",async(s,r)=>{this.isInitialized(),typeof(r==null?void 0:r.id)<"u"?await this.unsubscribeById(s,r.id,r):await this.unsubscribeByTopic(s,r)}),qe(this,"isSubscribed",s=>new Promise(r=>{r(this.topicMap.topics.includes(s))})),qe(this,"isKnownTopic",s=>new Promise(r=>{r(this.topicMap.topics.includes(s)||this.pending.has(s)||this.cached.some(o=>o.topic===s))})),qe(this,"on",(s,r)=>{this.events.on(s,r)}),qe(this,"once",(s,r)=>{this.events.once(s,r)}),qe(this,"off",(s,r)=>{this.events.off(s,r)}),qe(this,"removeListener",(s,r)=>{this.events.removeListener(s,r)}),qe(this,"start",async()=>{await this.onConnect()}),qe(this,"stop",async()=>{await this.onDisconnect()}),qe(this,"restart",async()=>{await this.restore(),await this.onRestart()}),qe(this,"checkPending",async()=>{if(this.pending.size===0&&(!this.initialized||!this.relayer.connected))return;const s=[];this.pending.forEach(r=>{s.push(r)}),await this.batchSubscribe(s)}),qe(this,"registerEventListeners",()=>{this.relayer.core.heartbeat.on(mn.Lx.pulse,async()=>{await this.checkPending()}),this.events.on(Qt.created,async s=>{const r=Qt.created;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,data:s}),await this.persist()}),this.events.on(Qt.deleted,async s=>{const r=Qt.deleted;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,data:s}),await this.persist()})}),this.relayer=e,this.logger=(0,xe.Ep)(i,this.name),this.clientId=""}get context(){return(0,xe.Fd)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}get hasAnyTopics(){return this.topicMap.topics.length>0||this.pending.size>0||this.cached.length>0||this.subscriptions.size>0}hasSubscription(e,i){let s=!1;try{s=this.getSubscription(e).topic===i}catch{}return s}reset(){this.cached=[],this.initialized=!0}onDisable(){this.values.length>0&&(this.cached=this.values),this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,i){const s=this.topicMap.get(e);await Promise.all(s.map(async r=>await this.unsubscribeById(e,r,i)))}async unsubscribeById(e,i,s){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:i,opts:s}});try{const r=_c(s);await this.restartToComplete({topic:e,id:i,relay:r}),await this.rpcUnsubscribe(e,i,r);const o=De("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,i,o),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:i,opts:s}})}catch(r){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(r),r}}async rpcSubscribe(e,i,s){var r;(!s||(s==null?void 0:s.transportType)===Xe.relay)&&await this.restartToComplete({topic:e,id:e,relay:i});const o={method:No(i.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:o});const a=(r=s==null?void 0:s.internal)==null?void 0:r.throwOnFailedPublish;try{const c=await this.getSubscriptionId(e);if((s==null?void 0:s.transportType)===Xe.link_mode)return setTimeout(()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(o).catch(h=>this.logger.warn(h))},(0,K.toMiliseconds)(K.ONE_SECOND)),c;const d=new Promise(async h=>{const p=g=>{g.topic===e&&(this.events.removeListener(Qt.created,p),h(g.id))};this.events.on(Qt.created,p);try{const g=await Ns(new Promise((f,v)=>{this.relayer.request(o).catch(w=>{this.logger.warn(w,w==null?void 0:w.message),v(w)}).then(f)}),this.initialSubscribeTimeout,`Subscribing to ${e} failed, please try again`);this.events.removeListener(Qt.created,p),h(g)}catch{}}),u=await Ns(d,this.subscribeTimeout,`Subscribing to ${e} failed, please try again`);if(!u&&a)throw new Error(`Subscribing to ${e} failed, please try again`);return u?c:null}catch(c){if(this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(wt.connection_stalled),a)throw c}return null}async rpcBatchSubscribe(e){if(!e.length)return;const i=e[0].relay,s={method:No(i.protocol).batchSubscribe,params:{topics:e.map(r=>r.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s});try{await await Ns(new Promise(r=>{this.relayer.request(s).catch(o=>this.logger.warn(o)).then(r)}),this.subscribeTimeout,"rpcBatchSubscribe failed, please try again")}catch{this.relayer.events.emit(wt.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const i=e[0].relay,s={method:No(i.protocol).batchFetchMessages,params:{topics:e.map(o=>o.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s});let r;try{r=await await Ns(new Promise((o,a)=>{this.relayer.request(s).catch(c=>{this.logger.warn(c),a(c)}).then(o)}),this.subscribeTimeout,"rpcBatchFetchMessages failed, please try again")}catch{this.relayer.events.emit(wt.connection_stalled)}return r}rpcUnsubscribe(e,i,s){const r={method:No(s.protocol).unsubscribe,params:{topic:e,id:i}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:r}),this.relayer.request(r)}onSubscribe(e,i){this.setSubscription(e,du($o({},i),{id:e})),this.pending.delete(i.topic)}onBatchSubscribe(e){e.length&&e.forEach(i=>{this.setSubscription(i.id,$o({},i)),this.pending.delete(i.topic)})}async onUnsubscribe(e,i,s){this.events.removeAllListeners(i),this.hasSubscription(i,e)&&this.deleteSubscription(i,s),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,i){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:i}),this.addSubscription(e,i)}addSubscription(e,i){this.subscriptions.set(e,$o({},i)),this.topicMap.set(i.topic,e),this.events.emit(Qt.created,i)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const i=this.subscriptions.get(e);if(!i){const{message:s}=W("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(s)}return i}deleteSubscription(e,i){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:i});const s=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(s.topic,e),this.events.emit(Qt.deleted,du($o({},s),{reason:i}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(Qt.sync)}async onRestart(){if(this.cached.length){const e=[...this.cached],i=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let s=0;s<i;s++){const r=e.splice(0,this.batchSubscribeTopicsLimit);await this.batchSubscribe(r)}}this.events.emit(Qt.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:i}=W("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(i),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(i)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){e.length&&(await this.rpcBatchSubscribe(e),this.onBatchSubscribe(await Promise.all(e.map(async i=>du($o({},i),{id:await this.getSubscriptionId(i.topic)})))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const i=await this.rpcBatchFetchMessages(e);i&&i.messages&&(await Xv((0,K.toMiliseconds)(K.ONE_SECOND)),await this.relayer.handleBatchMessageEvents(i.messages))}async onConnect(){await this.restart(),this.reset()}onDisconnect(){this.onDisable()}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(e){!this.relayer.connected&&!this.relayer.connecting&&(this.cached.push(e),await this.relayer.transportOpen())}async getClientId(){return this.clientId||(this.clientId=await this.relayer.core.crypto.getClientId()),this.clientId}async getSubscriptionId(e){return Di(e+await this.getClientId())}}var C6=Object.defineProperty,sg=Object.getOwnPropertySymbols,E6=Object.prototype.hasOwnProperty,I6=Object.prototype.propertyIsEnumerable,uu=(t,e,i)=>e in t?C6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,rg=(t,e)=>{for(var i in e||(e={}))E6.call(e,i)&&uu(t,i,e[i]);if(sg)for(var i of sg(e))I6.call(e,i)&&uu(t,i,e[i]);return t},Re=(t,e,i)=>uu(t,typeof e!="symbol"?e+"":e,i);class A6 extends O3{constructor(e){super(e),Re(this,"protocol","wc"),Re(this,"version",2),Re(this,"core"),Re(this,"logger"),Re(this,"events",new Qi.EventEmitter),Re(this,"provider"),Re(this,"messages"),Re(this,"subscriber"),Re(this,"publisher"),Re(this,"name",s5),Re(this,"transportExplicitlyClosed",!1),Re(this,"initialized",!1),Re(this,"connectionAttemptInProgress",!1),Re(this,"relayUrl"),Re(this,"projectId"),Re(this,"packageName"),Re(this,"bundleId"),Re(this,"hasExperiencedNetworkDisruption",!1),Re(this,"pingTimeout"),Re(this,"heartBeatTimeout",(0,K.toMiliseconds)(K.THIRTY_SECONDS+K.FIVE_SECONDS)),Re(this,"reconnectTimeout"),Re(this,"connectPromise"),Re(this,"reconnectInProgress",!1),Re(this,"requestsInFlight",[]),Re(this,"connectTimeout",(0,K.toMiliseconds)(K.ONE_SECOND*15)),Re(this,"request",async i=>{var s,r;this.logger.debug("Publishing Request Payload");const o=i.id||(0,he.getBigIntRpcId)().toString();await this.toEstablishConnection();try{this.logger.trace({id:o,method:i.method,topic:(s=i.params)==null?void 0:s.topic},"relayer.request - publishing...");const a=`${o}:${((r=i.params)==null?void 0:r.tag)||""}`;this.requestsInFlight.push(a);const c=await this.provider.request(i);return this.requestsInFlight=this.requestsInFlight.filter(d=>d!==a),c}catch(a){throw this.logger.debug(`Failed to Publish Request: ${o}`),a}}),Re(this,"resetPingTimeout",()=>{dc()&&(clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var i,s,r,o;try{this.logger.debug({},"pingTimeout: Connection stalled, terminating..."),(o=(r=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null?void 0:r.terminate)==null||o.call(r)}catch(a){this.logger.warn(a,a==null?void 0:a.message)}},this.heartBeatTimeout))}),Re(this,"onPayloadHandler",i=>{this.onProviderPayload(i),this.resetPingTimeout()}),Re(this,"onConnectHandler",()=>{this.logger.warn({},"Relayer connected \u{1F6DC}"),this.startPingTimeout(),this.events.emit(wt.connect)}),Re(this,"onDisconnectHandler",()=>{this.logger.warn({},"Relayer disconnected \u{1F6D1}"),this.requestsInFlight=[],this.onProviderDisconnect()}),Re(this,"onProviderErrorHandler",i=>{this.logger.fatal(`Fatal socket error: ${i.message}`),this.events.emit(wt.error,i),this.logger.fatal("Fatal socket error received, closing transport"),this.transportClose()}),Re(this,"registerProviderListeners",()=>{this.provider.on(di.payload,this.onPayloadHandler),this.provider.on(di.connect,this.onConnectHandler),this.provider.on(di.disconnect,this.onDisconnectHandler),this.provider.on(di.error,this.onProviderErrorHandler)}),this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?(0,xe.Ep)(e.logger,this.name):(0,xe.gw)((0,xe.jI)({level:e.logger||i5})),this.messages=new a6(this.logger,e.core),this.subscriber=new x6(this,this.logger),this.publisher=new p6(this,this.logger),this.relayUrl=(e==null?void 0:e.relayUrl)||L1,this.projectId=e.projectId,Rv()?this.packageName=Jp():$v()&&(this.bundleId=Jp()),this.provider={}}async init(){if(this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.subscriber.hasAnyTopics)try{await this.transportOpen()}catch(e){this.logger.warn(e,e==null?void 0:e.message)}}get context(){return(0,xe.Fd)(this.logger)}get connected(){var e,i,s;return((s=(i=(e=this.provider)==null?void 0:e.connection)==null?void 0:i.socket)==null?void 0:s.readyState)===1||!1}get connecting(){var e,i,s;return((s=(i=(e=this.provider)==null?void 0:e.connection)==null?void 0:i.socket)==null?void 0:s.readyState)===0||this.connectPromise!==void 0||!1}async publish(e,i,s){this.isInitialized(),await this.publisher.publish(e,i,s),await this.recordMessageEvent({topic:e,message:i,publishedAt:Date.now(),transportType:Xe.relay},Nc.outbound)}async subscribe(e,i){var s,r,o;this.isInitialized(),(!(i!=null&&i.transportType)||(i==null?void 0:i.transportType)==="relay")&&await this.toEstablishConnection();const a=typeof((s=i==null?void 0:i.internal)==null?void 0:s.throwOnFailedPublish)>"u"?!0:(r=i==null?void 0:i.internal)==null?void 0:r.throwOnFailedPublish;let c=((o=this.subscriber.topicMap.get(e))==null?void 0:o[0])||"",d;const u=h=>{h.topic===e&&(this.subscriber.off(Qt.created,u),d())};return await Promise.all([new Promise(h=>{d=h,this.subscriber.on(Qt.created,u)}),new Promise(async(h,p)=>{c=await this.subscriber.subscribe(e,rg({internal:{throwOnFailedPublish:a}},i)).catch(g=>{a&&p(g)})||c,h()})]),c}async unsubscribe(e,i){this.isInitialized(),await this.subscriber.unsubscribe(e,i)}on(e,i){this.events.on(e,i)}once(e,i){this.events.once(e,i)}off(e,i){this.events.off(e,i)}removeListener(e,i){this.events.removeListener(e,i)}async transportDisconnect(){this.provider.disconnect&&(this.hasExperiencedNetworkDisruption||this.connected)?await Ns(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){if(!this.subscriber.hasAnyTopics){this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");return}if(this.connectPromise?(this.logger.debug({},"Waiting for existing connection attempt to resolve..."),await this.connectPromise,this.logger.debug({},"Existing connection attempt resolved")):(this.connectPromise=new Promise(async(i,s)=>{await this.connect(e).then(i).catch(s).finally(()=>{this.connectPromise=void 0})}),await this.connectPromise),!this.connected)throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)}async restartTransport(e){this.logger.debug({},"Restarting transport..."),!this.connectionAttemptInProgress&&(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await A1())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if((e==null?void 0:e.length)===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const i=e.sort((s,r)=>s.publishedAt-r.publishedAt);this.logger.debug(`Batch of ${i.length} message events sorted`);for(const s of i)try{await this.onMessageEvent(s)}catch(r){this.logger.warn(r,"Error while processing batch message event: "+(r==null?void 0:r.message))}this.logger.trace(`Batch of ${i.length} message events processed`)}async onLinkMessageEvent(e,i){const{topic:s}=e;if(!i.sessionExists){const r=ct(K.FIVE_MINUTES),o={topic:s,expiry:r,relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(s,o)}this.events.emit(wt.message,e),await this.recordMessageEvent(e,Nc.inbound)}async connect(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;let i=1;for(;i<6;){try{if(this.transportExplicitlyClosed)break;this.logger.debug({},`Connecting to ${this.relayUrl}, attempt: ${i}...`),await this.createProvider(),await new Promise(async(s,r)=>{const o=()=>{r(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(di.disconnect,o),await Ns(new Promise((a,c)=>{this.provider.connect().then(a).catch(c)}),this.connectTimeout,`Socket stalled when trying to connect to ${this.relayUrl}`).catch(a=>{r(a)}).finally(()=>{this.provider.off(di.disconnect,o),clearTimeout(this.reconnectTimeout)}),await new Promise(async(a,c)=>{const d=()=>{c(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(di.disconnect,d),await this.subscriber.start().then(a).catch(c).finally(()=>{this.provider.off(di.disconnect,d)})}),this.hasExperiencedNetworkDisruption=!1,s()})}catch(s){await this.subscriber.stop();const r=s;this.logger.warn({},r.message),this.hasExperiencedNetworkDisruption=!0}finally{this.connectionAttemptInProgress=!1}if(this.connected){this.logger.debug({},`Connected to ${this.relayUrl} successfully on attempt: ${i}`);break}await new Promise(s=>setTimeout(s,(0,K.toMiliseconds)(i*1))),i++}}startPingTimeout(){var e,i,s,r,o;if(dc())try{(i=(e=this.provider)==null?void 0:e.connection)!=null&&i.socket&&((o=(r=(s=this.provider)==null?void 0:s.connection)==null?void 0:r.socket)==null||o.on("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(a){this.logger.warn(a,a==null?void 0:a.message)}}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new li.r(new W3.Z(Dv({sdkVersion:iu,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId,packageName:this.packageName}))),this.registerProviderListeners()}async recordMessageEvent(e,i){const{topic:s,message:r}=e;await this.messages.set(s,r,i)}async shouldIgnoreMessageEvent(e){const{topic:i,message:s}=e;if(!s||s.length===0)return this.logger.warn(`Ignoring invalid/empty message: ${s}`),!0;if(!await this.subscriber.isKnownTopic(i))return this.logger.warn(`Ignoring message for unknown topic ${i}`),!0;const r=this.messages.has(i,s);return r&&this.logger.warn(`Ignoring duplicate message: ${s}`),r}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),(0,he.isJsonRpcRequest)(e)){if(!e.method.endsWith(r5))return;const i=e.params,{topic:s,message:r,publishedAt:o,attestation:a}=i.data,c={topic:s,message:r,publishedAt:o,transportType:Xe.relay,attestation:a};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(rg({type:"event",event:i.id},c)),this.events.emit(i.id,c),await this.acknowledgePayload(e),await this.onMessageEvent(c)}else(0,he.isJsonRpcResponse)(e)&&this.events.emit(wt.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(await this.recordMessageEvent(e,Nc.inbound),this.events.emit(wt.message,e))}async acknowledgePayload(e){const i=(0,he.formatJsonRpcResult)(e.id,!0);await this.provider.connection.send(i)}unregisterProviderListeners(){this.provider.off(di.payload,this.onPayloadHandler),this.provider.off(di.connect,this.onConnectHandler),this.provider.off(di.disconnect,this.onDisconnectHandler),this.provider.off(di.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await A1();a3(async i=>{e!==i&&(e=i,i?await this.transportOpen().catch(s=>this.logger.error(s,s==null?void 0:s.message)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))})}async onProviderDisconnect(){clearTimeout(this.pingTimeout),this.events.emit(wt.disconnect),this.connectionAttemptInProgress=!1,!this.reconnectInProgress&&(this.reconnectInProgress=!0,await this.subscriber.stop(),this.subscriber.hasAnyTopics&&(this.transportExplicitlyClosed||(this.reconnectTimeout=setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e,e==null?void 0:e.message)),this.reconnectTimeout=void 0,this.reconnectInProgress=!1},(0,K.toMiliseconds)(n5)))))}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){if(await this.confirmOnlineStateOrThrow(),!this.connected){if(this.connectPromise){await this.connectPromise;return}await this.connect()}}}function S6(){}function ng(t){if(!t||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype||Object.getPrototypeOf(e)===null?Object.prototype.toString.call(t)==="[object Object]":!1}function og(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function ag(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const N6="[object RegExp]",P6="[object String]",k6="[object Number]",O6="[object Boolean]",cg="[object Arguments]",T6="[object Symbol]",R6="[object Date]",$6="[object Map]",L6="[object Set]",B6="[object Array]",U6="[object Function]",M6="[object ArrayBuffer]",hu="[object Object]",D6="[object Error]",j6="[object DataView]",z6="[object Uint8Array]",F6="[object Uint8ClampedArray]",H6="[object Uint16Array]",q6="[object Uint32Array]",W6="[object BigUint64Array]",V6="[object Int8Array]",K6="[object Int16Array]",G6="[object Int32Array]",Z6="[object BigInt64Array]",Y6="[object Float32Array]",J6="[object Float64Array]";function X6(t,e){return t===e||Number.isNaN(t)&&Number.isNaN(e)}function Q6(t,e,i){return Lo(t,e,void 0,void 0,void 0,void 0,i)}function Lo(t,e,i,s,r,o,a){const c=a(t,e,i,s,r,o);if(c!==void 0)return c;if(typeof t==typeof e)switch(typeof t){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return t===e;case"number":return t===e||Object.is(t,e);case"function":return t===e;case"object":return Bo(t,e,o,a)}return Bo(t,e,o,a)}function Bo(t,e,i,s){if(Object.is(t,e))return!0;let r=ag(t),o=ag(e);if(r===cg&&(r=hu),o===cg&&(o=hu),r!==o)return!1;switch(r){case P6:return t.toString()===e.toString();case k6:{const d=t.valueOf(),u=e.valueOf();return X6(d,u)}case O6:case R6:case T6:return Object.is(t.valueOf(),e.valueOf());case N6:return t.source===e.source&&t.flags===e.flags;case U6:return t===e}i=i??new Map;const a=i.get(t),c=i.get(e);if(a!=null&&c!=null)return a===e;i.set(t,e),i.set(e,t);try{switch(r){case $6:{if(t.size!==e.size)return!1;for(const[d,u]of t.entries())if(!e.has(d)||!Lo(u,e.get(d),d,t,e,i,s))return!1;return!0}case L6:{if(t.size!==e.size)return!1;const d=Array.from(t.values()),u=Array.from(e.values());for(let h=0;h<d.length;h++){const p=d[h],g=u.findIndex(f=>Lo(p,f,void 0,t,e,i,s));if(g===-1)return!1;u.splice(g,1)}return!0}case B6:case z6:case F6:case H6:case q6:case W6:case V6:case K6:case G6:case Z6:case Y6:case J6:{if(typeof tu<"u"&&tu.isBuffer(t)!==tu.isBuffer(e)||t.length!==e.length)return!1;for(let d=0;d<t.length;d++)if(!Lo(t[d],e[d],d,t,e,i,s))return!1;return!0}case M6:return t.byteLength!==e.byteLength?!1:Bo(new Uint8Array(t),new Uint8Array(e),i,s);case j6:return t.byteLength!==e.byteLength||t.byteOffset!==e.byteOffset?!1:Bo(new Uint8Array(t),new Uint8Array(e),i,s);case D6:return t.name===e.name&&t.message===e.message;case hu:{if(!(Bo(t.constructor,e.constructor,i,s)||ng(t)&&ng(e)))return!1;const d=[...Object.keys(t),...og(t)],u=[...Object.keys(e),...og(e)];if(d.length!==u.length)return!1;for(let h=0;h<d.length;h++){const p=d[h],g=t[p];if(!Object.hasOwn(e,p))return!1;const f=e[p];if(!Lo(g,f,p,t,e,i,s))return!1}return!0}default:return!1}}finally{i.delete(t),i.delete(e)}}function e_(t,e){return Q6(t,e,S6)}var t_=Object.defineProperty,lg=Object.getOwnPropertySymbols,i_=Object.prototype.hasOwnProperty,s_=Object.prototype.propertyIsEnumerable,pu=(t,e,i)=>e in t?t_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,dg=(t,e)=>{for(var i in e||(e={}))i_.call(e,i)&&pu(t,i,e[i]);if(lg)for(var i of lg(e))s_.call(e,i)&&pu(t,i,e[i]);return t},Ht=(t,e,i)=>pu(t,typeof e!="symbol"?e+"":e,i);class gr extends T3{constructor(e,i,s,r=ji,o=void 0){super(e,i,s,r),this.core=e,this.logger=i,this.name=s,Ht(this,"map",new Map),Ht(this,"version",o5),Ht(this,"cached",[]),Ht(this,"initialized",!1),Ht(this,"getKey"),Ht(this,"storagePrefix",ji),Ht(this,"recentlyDeleted",[]),Ht(this,"recentlyDeletedLimit",200),Ht(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(a=>{this.getKey&&a!==null&&!Ct(a)?this.map.set(this.getKey(a),a):Mb(a)?this.map.set(a.id,a):Db(a)&&this.map.set(a.topic,a)}),this.cached=[],this.initialized=!0)}),Ht(this,"set",async(a,c)=>{this.isInitialized(),this.map.has(a)?await this.update(a,c):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:a,value:c}),this.map.set(a,c),await this.persist())}),Ht(this,"get",a=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:a}),this.getData(a))),Ht(this,"getAll",a=>(this.isInitialized(),a?this.values.filter(c=>Object.keys(a).every(d=>e_(c[d],a[d]))):this.values)),Ht(this,"update",async(a,c)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:a,update:c});const d=dg(dg({},this.getData(a)),c);this.map.set(a,d),await this.persist()}),Ht(this,"delete",async(a,c)=>{this.isInitialized(),this.map.has(a)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:a,reason:c}),this.map.delete(a),this.addToRecentlyDeleted(a),await this.persist())}),this.logger=(0,xe.Ep)(i,this.name),this.storagePrefix=r,this.getKey=o}get context(){return(0,xe.Fd)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const i=this.map.get(e);if(!i){if(this.recentlyDeleted.includes(e)){const{message:r}=W("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(r),new Error(r)}const{message:s}=W("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}return i}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:i}=W("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(i),new Error(i)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}}var r_=Object.defineProperty,n_=(t,e,i)=>e in t?r_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ee=(t,e,i)=>n_(t,typeof e!="symbol"?e+"":e,i);class o_{constructor(e,i){this.core=e,this.logger=i,Ee(this,"name",d5),Ee(this,"version",u5),Ee(this,"events",new(wd())),Ee(this,"pairings"),Ee(this,"initialized",!1),Ee(this,"storagePrefix",ji),Ee(this,"ignoredPayloadTypes",[os]),Ee(this,"registeredMethods",[]),Ee(this,"init",async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))}),Ee(this,"register",({methods:s})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...s])]}),Ee(this,"create",async s=>{this.isInitialized();const r=Yd(),o=await this.core.crypto.setSymKey(r),a=ct(K.FIVE_MINUTES),c={protocol:$1},d={topic:o,expiry:a,relay:c,active:!1,methods:s==null?void 0:s.methods},u=w1({protocol:this.core.protocol,version:this.core.version,topic:o,symKey:r,relay:c,expiryTimestamp:a,methods:s==null?void 0:s.methods});return this.events.emit(ur.create,d),this.core.expirer.set(o,a),await this.pairings.set(o,d),await this.core.relayer.subscribe(o,{transportType:s==null?void 0:s.transportType}),{topic:o,uri:u}}),Ee(this,"pair",async s=>{this.isInitialized();const r=this.core.eventClient.createEvent({properties:{topic:s==null?void 0:s.uri,trace:[zi.pairing_started]}});this.isValidPair(s,r);const{topic:o,symKey:a,relay:c,expiryTimestamp:d,methods:u}=f1(s.uri);r.props.properties.topic=o,r.addTrace(zi.pairing_uri_validation_success),r.addTrace(zi.pairing_uri_not_expired);let h;if(this.pairings.keys.includes(o)){if(h=this.pairings.get(o),r.addTrace(zi.existing_pairing),h.active)throw r.setError(as.active_pairing_already_exists),new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);r.addTrace(zi.pairing_not_expired)}const p=d||ct(K.FIVE_MINUTES),g={topic:o,relay:c,expiry:p,active:!1,methods:u};this.core.expirer.set(o,p),await this.pairings.set(o,g),r.addTrace(zi.store_new_pairing),s.activatePairing&&await this.activate({topic:o}),this.events.emit(ur.create,g),r.addTrace(zi.emit_inactive_pairing),this.core.crypto.keychain.has(o)||await this.core.crypto.setSymKey(a,o),r.addTrace(zi.subscribing_pairing_topic);try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{r.setError(as.no_internet_connection)}try{await this.core.relayer.subscribe(o,{relay:c})}catch(f){throw r.setError(as.subscribe_pairing_topic_failure),f}return r.addTrace(zi.subscribe_pairing_topic_success),g}),Ee(this,"activate",async({topic:s})=>{this.isInitialized();const r=ct(K.FIVE_MINUTES);this.core.expirer.set(s,r),await this.pairings.update(s,{active:!0,expiry:r})}),Ee(this,"ping",async s=>{this.isInitialized(),await this.isValidPing(s),this.logger.warn("ping() is deprecated and will be removed in the next major release.");const{topic:r}=s;if(this.pairings.keys.includes(r)){const o=await this.sendRequest(r,"wc_pairingPing",{}),{done:a,resolve:c,reject:d}=sr();this.events.once(Ue("pairing_ping",o),({error:u})=>{u?d(u):c()}),await a()}}),Ee(this,"updateExpiry",async({topic:s,expiry:r})=>{this.isInitialized(),await this.pairings.update(s,{expiry:r})}),Ee(this,"updateMetadata",async({topic:s,metadata:r})=>{this.isInitialized(),await this.pairings.update(s,{peerMetadata:r})}),Ee(this,"getPairings",()=>(this.isInitialized(),this.pairings.values)),Ee(this,"disconnect",async s=>{this.isInitialized(),await this.isValidDisconnect(s);const{topic:r}=s;this.pairings.keys.includes(r)&&(await this.sendRequest(r,"wc_pairingDelete",De("USER_DISCONNECTED")),await this.deletePairing(r))}),Ee(this,"formatUriFromPairing",s=>{this.isInitialized();const{topic:r,relay:o,expiry:a,methods:c}=s,d=this.core.crypto.keychain.get(r);return w1({protocol:this.core.protocol,version:this.core.version,topic:r,symKey:d,relay:o,expiryTimestamp:a,methods:c})}),Ee(this,"sendRequest",async(s,r,o)=>{const a=(0,he.formatJsonRpcRequest)(r,o),c=await this.core.crypto.encode(s,a),d=ko[r].req;return this.core.history.set(s,a),this.core.relayer.publish(s,c,d),a.id}),Ee(this,"sendResult",async(s,r,o)=>{const a=(0,he.formatJsonRpcResult)(s,o),c=await this.core.crypto.encode(r,a),d=(await this.core.history.get(r,s)).request.method,u=ko[d].res;await this.core.relayer.publish(r,c,u),await this.core.history.resolve(a)}),Ee(this,"sendError",async(s,r,o)=>{const a=(0,he.formatJsonRpcError)(s,o),c=await this.core.crypto.encode(r,a),d=(await this.core.history.get(r,s)).request.method,u=ko[d]?ko[d].res:ko.unregistered_method.res;await this.core.relayer.publish(r,c,u),await this.core.history.resolve(a)}),Ee(this,"deletePairing",async(s,r)=>{await this.core.relayer.unsubscribe(s),await Promise.all([this.pairings.delete(s,De("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(s),r?Promise.resolve():this.core.expirer.del(s)])}),Ee(this,"cleanup",async()=>{const s=this.pairings.getAll().filter(r=>Ps(r.expiry));await Promise.all(s.map(r=>this.deletePairing(r.topic)))}),Ee(this,"onRelayEventRequest",async s=>{const{topic:r,payload:o}=s;switch(o.method){case"wc_pairingPing":return await this.onPairingPingRequest(r,o);case"wc_pairingDelete":return await this.onPairingDeleteRequest(r,o);default:return await this.onUnknownRpcMethodRequest(r,o)}}),Ee(this,"onRelayEventResponse",async s=>{const{topic:r,payload:o}=s,a=(await this.core.history.get(r,o.id)).request.method;switch(a){case"wc_pairingPing":return this.onPairingPingResponse(r,o);default:return this.onUnknownRpcMethodResponse(a)}}),Ee(this,"onPairingPingRequest",async(s,r)=>{const{id:o}=r;try{this.isValidPing({topic:s}),await this.sendResult(o,s,!0),this.events.emit(ur.ping,{id:o,topic:s})}catch(a){await this.sendError(o,s,a),this.logger.error(a)}}),Ee(this,"onPairingPingResponse",(s,r)=>{const{id:o}=r;setTimeout(()=>{(0,he.isJsonRpcResult)(r)?this.events.emit(Ue("pairing_ping",o),{}):(0,he.isJsonRpcError)(r)&&this.events.emit(Ue("pairing_ping",o),{error:r.error})},500)}),Ee(this,"onPairingDeleteRequest",async(s,r)=>{const{id:o}=r;try{this.isValidDisconnect({topic:s}),await this.deletePairing(s),this.events.emit(ur.delete,{id:o,topic:s})}catch(a){await this.sendError(o,s,a),this.logger.error(a)}}),Ee(this,"onUnknownRpcMethodRequest",async(s,r)=>{const{id:o,method:a}=r;try{if(this.registeredMethods.includes(a))return;const c=De("WC_METHOD_UNSUPPORTED",a);await this.sendError(o,s,c),this.logger.error(c)}catch(c){await this.sendError(o,s,c),this.logger.error(c)}}),Ee(this,"onUnknownRpcMethodResponse",s=>{this.registeredMethods.includes(s)||this.logger.error(De("WC_METHOD_UNSUPPORTED",s))}),Ee(this,"isValidPair",(s,r)=>{var o;if(!Ft(s)){const{message:c}=W("MISSING_OR_INVALID",`pair() params: ${s}`);throw r.setError(as.malformed_pairing_uri),new Error(c)}if(!Ub(s.uri)){const{message:c}=W("MISSING_OR_INVALID",`pair() uri: ${s.uri}`);throw r.setError(as.malformed_pairing_uri),new Error(c)}const a=f1(s==null?void 0:s.uri);if(!((o=a==null?void 0:a.relay)!=null&&o.protocol)){const{message:c}=W("MISSING_OR_INVALID","pair() uri#relay-protocol");throw r.setError(as.malformed_pairing_uri),new Error(c)}if(!(a!=null&&a.symKey)){const{message:c}=W("MISSING_OR_INVALID","pair() uri#symKey");throw r.setError(as.malformed_pairing_uri),new Error(c)}if(a!=null&&a.expiryTimestamp&&(0,K.toMiliseconds)(a==null?void 0:a.expiryTimestamp)<Date.now()){r.setError(as.pairing_expired);const{message:c}=W("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(c)}}),Ee(this,"isValidPing",async s=>{if(!Ft(s)){const{message:o}=W("MISSING_OR_INVALID",`ping() params: ${s}`);throw new Error(o)}const{topic:r}=s;await this.isValidPairingTopic(r)}),Ee(this,"isValidDisconnect",async s=>{if(!Ft(s)){const{message:o}=W("MISSING_OR_INVALID",`disconnect() params: ${s}`);throw new Error(o)}const{topic:r}=s;await this.isValidPairingTopic(r)}),Ee(this,"isValidPairingTopic",async s=>{if(!ot(s,!1)){const{message:r}=W("MISSING_OR_INVALID",`pairing topic should be a string: ${s}`);throw new Error(r)}if(!this.pairings.keys.includes(s)){const{message:r}=W("NO_MATCHING_KEY",`pairing topic doesn't exist: ${s}`);throw new Error(r)}if(Ps(this.pairings.get(s).expiry)){await this.deletePairing(s);const{message:r}=W("EXPIRED",`pairing topic: ${s}`);throw new Error(r)}}),this.core=e,this.logger=(0,xe.Ep)(i,this.name),this.pairings=new gr(this.core,this.logger,this.name,this.storagePrefix)}get context(){return(0,xe.Fd)(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(wt.message,async e=>{const{topic:i,message:s,transportType:r}=e;if(this.pairings.keys.includes(i)&&r!==Xe.link_mode&&!this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))try{const o=await this.core.crypto.decode(i,s);(0,he.isJsonRpcRequest)(o)?(this.core.history.set(i,o),await this.onRelayEventRequest({topic:i,payload:o})):(0,he.isJsonRpcResponse)(o)&&(await this.core.history.resolve(o),await this.onRelayEventResponse({topic:i,payload:o}),this.core.history.delete(i,o.id)),await this.core.relayer.messages.ack(i,s)}catch(o){this.logger.error(o)}})}registerExpirerEvents(){this.core.expirer.on(ui.expired,async e=>{const{topic:i}=t0(e.target);i&&this.pairings.keys.includes(i)&&(await this.deletePairing(i,!0),this.events.emit(ur.expire,{topic:i}))})}}var a_=Object.defineProperty,c_=(t,e,i)=>e in t?a_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,At=(t,e,i)=>c_(t,typeof e!="symbol"?e+"":e,i);class l_ extends N3{constructor(e,i){super(e,i),this.core=e,this.logger=i,At(this,"records",new Map),At(this,"events",new Qi.EventEmitter),At(this,"name",h5),At(this,"version",p5),At(this,"cached",[]),At(this,"initialized",!1),At(this,"storagePrefix",ji),At(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(s=>this.records.set(s.id,s)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),At(this,"set",(s,r,o)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:s,request:r,chainId:o}),this.records.has(r.id))return;const a={id:r.id,topic:s,request:{method:r.method,params:r.params||null},chainId:o,expiry:ct(K.THIRTY_DAYS)};this.records.set(a.id,a),this.persist(),this.events.emit(Si.created,a)}),At(this,"resolve",async s=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:s}),!this.records.has(s.id))return;const r=await this.getRecord(s.id);typeof r.response>"u"&&(r.response=(0,he.isJsonRpcError)(s)?{error:s.error}:{result:s.result},this.records.set(r.id,r),this.persist(),this.events.emit(Si.updated,r))}),At(this,"get",async(s,r)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:s,id:r}),await this.getRecord(r))),At(this,"delete",(s,r)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:r}),this.values.forEach(o=>{if(o.topic===s){if(typeof r<"u"&&o.id!==r)return;this.records.delete(o.id),this.events.emit(Si.deleted,o)}}),this.persist()}),At(this,"exists",async(s,r)=>(this.isInitialized(),this.records.has(r)?(await this.getRecord(r)).topic===s:!1)),At(this,"on",(s,r)=>{this.events.on(s,r)}),At(this,"once",(s,r)=>{this.events.once(s,r)}),At(this,"off",(s,r)=>{this.events.off(s,r)}),At(this,"removeListener",(s,r)=>{this.events.removeListener(s,r)}),this.logger=(0,xe.Ep)(i,this.name)}get context(){return(0,xe.Fd)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(i=>{if(typeof i.response<"u")return;const s={topic:i.topic,request:(0,he.formatJsonRpcRequest)(i.request.method,i.request.params,i.id),chainId:i.chainId};return e.push(s)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const i=this.records.get(e);if(!i){const{message:s}=W("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(s)}return i}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(Si.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:i}=W("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(i),new Error(i)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(Si.created,e=>{const i=Si.created;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,record:e})}),this.events.on(Si.updated,e=>{const i=Si.updated;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,record:e})}),this.events.on(Si.deleted,e=>{const i=Si.deleted;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,record:e})}),this.core.heartbeat.on(mn.Lx.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(i=>{(0,K.toMiliseconds)(i.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${i.id}`),this.records.delete(i.id),this.events.emit(Si.deleted,i,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}}var d_=Object.defineProperty,u_=(t,e,i)=>e in t?d_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Pt=(t,e,i)=>u_(t,typeof e!="symbol"?e+"":e,i);class h_ extends U3{constructor(e,i){super(e,i),this.core=e,this.logger=i,Pt(this,"expirations",new Map),Pt(this,"events",new Qi.EventEmitter),Pt(this,"name",g5),Pt(this,"version",f5),Pt(this,"cached",[]),Pt(this,"initialized",!1),Pt(this,"storagePrefix",ji),Pt(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(s=>this.expirations.set(s.target,s)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),Pt(this,"has",s=>{try{const r=this.formatTarget(s);return typeof this.getExpiration(r)<"u"}catch{return!1}}),Pt(this,"set",(s,r)=>{this.isInitialized();const o=this.formatTarget(s),a={target:o,expiry:r};this.expirations.set(o,a),this.checkExpiry(o,a),this.events.emit(ui.created,{target:o,expiration:a})}),Pt(this,"get",s=>{this.isInitialized();const r=this.formatTarget(s);return this.getExpiration(r)}),Pt(this,"del",s=>{if(this.isInitialized(),this.has(s)){const r=this.formatTarget(s),o=this.getExpiration(r);this.expirations.delete(r),this.events.emit(ui.deleted,{target:r,expiration:o})}}),Pt(this,"on",(s,r)=>{this.events.on(s,r)}),Pt(this,"once",(s,r)=>{this.events.once(s,r)}),Pt(this,"off",(s,r)=>{this.events.off(s,r)}),Pt(this,"removeListener",(s,r)=>{this.events.removeListener(s,r)}),this.logger=(0,xe.Ep)(i,this.name)}get context(){return(0,xe.Fd)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return Hv(e);if(typeof e=="number")return qv(e);const{message:i}=W("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(i)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(ui.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:i}=W("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(i),new Error(i)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const i=this.expirations.get(e);if(!i){const{message:s}=W("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(s),new Error(s)}return i}checkExpiry(e,i){const{expiry:s}=i;(0,K.toMiliseconds)(s)-Date.now()<=0&&this.expire(e,i)}expire(e,i){this.expirations.delete(e),this.events.emit(ui.expired,{target:e,expiration:i})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,i)=>this.checkExpiry(i,e))}registerEventListeners(){this.core.heartbeat.on(mn.Lx.pulse,()=>this.checkExpirations()),this.events.on(ui.created,e=>{const i=ui.created;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,data:e}),this.persist()}),this.events.on(ui.expired,e=>{const i=ui.expired;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,data:e}),this.persist()}),this.events.on(ui.deleted,e=>{const i=ui.deleted;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}}var p_=Object.defineProperty,g_=(t,e,i)=>e in t?p_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,at=(t,e,i)=>g_(t,typeof e!="symbol"?e+"":e,i);class f_ extends M3{constructor(e,i,s){super(e,i,s),this.core=e,this.logger=i,this.store=s,at(this,"name",w5),at(this,"abortController"),at(this,"isDevEnv"),at(this,"verifyUrlV3",v5),at(this,"storagePrefix",ji),at(this,"version",O1),at(this,"publicKey"),at(this,"fetchPromise"),at(this,"init",async()=>{var r;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&(0,K.toMiliseconds)((r=this.publicKey)==null?void 0:r.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))}),at(this,"register",async r=>{if(!wo()||this.isDevEnv)return;const o=window.location.origin,{id:a,decryptedId:c}=r,d=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${o}&id=${a}&decryptedId=${c}`;try{const u=(0,Qs.getDocument)(),h=this.startAbortTimer(K.ONE_SECOND*5),p=await new Promise((g,f)=>{const v=()=>{window.removeEventListener("message",m),u.body.removeChild(w),f("attestation aborted")};this.abortController.signal.addEventListener("abort",v);const w=u.createElement("iframe");w.src=d,w.style.display="none",w.addEventListener("error",v,{signal:this.abortController.signal});const m=y=>{if(y.data&&typeof y.data=="string")try{const b=JSON.parse(y.data);if(b.type==="verify_attestation"){if((0,er.xp)(b.attestation).payload.id!==a)return;clearInterval(h),u.body.removeChild(w),this.abortController.signal.removeEventListener("abort",v),window.removeEventListener("message",m),g(b.attestation===null?"":b.attestation)}}catch(b){this.logger.warn(b)}};u.body.appendChild(w),window.addEventListener("message",m,{signal:this.abortController.signal})});return this.logger.debug("jwt attestation",p),p}catch(u){this.logger.warn(u)}return""}),at(this,"resolve",async r=>{if(this.isDevEnv)return"";const{attestationId:o,hash:a,encryptedId:c}=r;if(o===""){this.logger.debug("resolve: attestationId is empty, skipping");return}if(o){if((0,er.xp)(o).payload.id!==c)return;const u=await this.isValidJwtAttestation(o);if(u){if(!u.isVerified){this.logger.warn("resolve: jwt attestation: origin url not verified");return}return u}}if(!a)return;const d=this.getVerifyUrl(r==null?void 0:r.verifyUrl);return this.fetchAttestation(a,d)}),at(this,"fetchAttestation",async(r,o)=>{this.logger.debug(`resolving attestation: ${r} from url: ${o}`);const a=this.startAbortTimer(K.ONE_SECOND*5),c=await fetch(`${o}/attestation/${r}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(a),c.status===200?await c.json():void 0}),at(this,"getVerifyUrl",r=>{let o=r||Oo;return y5.includes(o)||(this.logger.info(`verify url: ${o}, not included in trusted list, assigning default: ${Oo}`),o=Oo),o}),at(this,"fetchPublicKey",async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const r=this.startAbortTimer(K.FIVE_SECONDS),o=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(r),await o.json()}catch(r){this.logger.warn(r)}}),at(this,"persistPublicKey",async r=>{this.logger.debug("persisting public key to local storage",r),await this.store.setItem(this.storeKey,r),this.publicKey=r}),at(this,"removePublicKey",async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0}),at(this,"isValidJwtAttestation",async r=>{const o=await this.getPublicKey();try{if(o)return this.validateAttestation(r,o)}catch(c){this.logger.error(c),this.logger.warn("error validating attestation")}const a=await this.fetchAndPersistPublicKey();try{if(a)return this.validateAttestation(r,a)}catch(c){this.logger.error(c),this.logger.warn("error validating attestation")}}),at(this,"getPublicKey",async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey()),at(this,"fetchAndPersistPublicKey",async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise(async o=>{const a=await this.fetchPublicKey();a&&(await this.persistPublicKey(a),o(a))});const r=await this.fetchPromise;return this.fetchPromise=void 0,r}),at(this,"validateAttestation",(r,o)=>{const a=mb(r,o.publicKey),c={hasExpired:(0,K.toMiliseconds)(a.exp)<Date.now(),payload:a};if(c.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:c.payload.origin,isScam:c.payload.isScam,isVerified:c.payload.isVerified}}),this.logger=(0,xe.Ep)(i,this.name),this.abortController=new AbortController,this.isDevEnv=_d(),this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return(0,xe.Fd)(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,K.toMiliseconds)(e))}}var w_=Object.defineProperty,m_=(t,e,i)=>e in t?w_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ug=(t,e,i)=>m_(t,typeof e!="symbol"?e+"":e,i);class v_ extends D3{constructor(e,i){super(e,i),this.projectId=e,this.logger=i,ug(this,"context",b5),ug(this,"registerDeviceToken",async s=>{const{clientId:r,token:o,notificationType:a,enableEncrypted:c=!1}=s,d=`${_5}/${this.projectId}/clients`;await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:r,type:a,token:o,always_raw:c})})}),this.logger=(0,xe.Ep)(i,this.context)}}var y_=Object.defineProperty,hg=Object.getOwnPropertySymbols,b_=Object.prototype.hasOwnProperty,__=Object.prototype.propertyIsEnumerable,gu=(t,e,i)=>e in t?y_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Uo=(t,e)=>{for(var i in e||(e={}))b_.call(e,i)&&gu(t,i,e[i]);if(hg)for(var i of hg(e))__.call(e,i)&&gu(t,i,e[i]);return t},mt=(t,e,i)=>gu(t,typeof e!="symbol"?e+"":e,i);class x_ extends j3{constructor(e,i,s=!0){super(e,i,s),this.core=e,this.logger=i,mt(this,"context",C5),mt(this,"storagePrefix",ji),mt(this,"storageVersion",x5),mt(this,"events",new Map),mt(this,"shouldPersist",!1),mt(this,"init",async()=>{if(!_d())try{const r={eventId:r0(),timestamp:Date.now(),domain:this.getAppDomain(),props:{event:"INIT",type:"",properties:{client_id:await this.core.crypto.getClientId(),user_agent:Qp(this.core.relayer.protocol,this.core.relayer.version,iu)}}};await this.sendEvent([r])}catch(r){this.logger.warn(r)}}),mt(this,"createEvent",r=>{const{event:o="ERROR",type:a="",properties:{topic:c,trace:d}}=r,u=r0(),h=this.core.projectId||"",p=Date.now(),g=Uo({eventId:u,timestamp:p,props:{event:o,type:a,properties:{topic:c,trace:d}},bundleId:h,domain:this.getAppDomain()},this.setMethods(u));return this.telemetryEnabled&&(this.events.set(u,g),this.shouldPersist=!0),g}),mt(this,"getEvent",r=>{const{eventId:o,topic:a}=r;if(o)return this.events.get(o);const c=Array.from(this.events.values()).find(d=>d.props.properties.topic===a);if(c)return Uo(Uo({},c),this.setMethods(c.eventId))}),mt(this,"deleteEvent",r=>{const{eventId:o}=r;this.events.delete(o),this.shouldPersist=!0}),mt(this,"setEventListeners",()=>{this.core.heartbeat.on(mn.Lx.pulse,async()=>{this.shouldPersist&&await this.persist(),this.events.forEach(r=>{(0,K.fromMiliseconds)(Date.now())-(0,K.fromMiliseconds)(r.timestamp)>E5&&(this.events.delete(r.eventId),this.shouldPersist=!0)})})}),mt(this,"setMethods",r=>({addTrace:o=>this.addTrace(r,o),setError:o=>this.setError(r,o)})),mt(this,"addTrace",(r,o)=>{const a=this.events.get(r);a&&(a.props.properties.trace.push(o),this.events.set(r,a),this.shouldPersist=!0)}),mt(this,"setError",(r,o)=>{const a=this.events.get(r);a&&(a.props.type=o,a.timestamp=Date.now(),this.events.set(r,a),this.shouldPersist=!0)}),mt(this,"persist",async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1}),mt(this,"restore",async()=>{try{const r=await this.core.storage.getItem(this.storageKey)||[];if(!r.length)return;r.forEach(o=>{this.events.set(o.eventId,Uo(Uo({},o),this.setMethods(o.eventId)))})}catch(r){this.logger.warn(r)}}),mt(this,"submit",async()=>{if(!this.telemetryEnabled||this.events.size===0)return;const r=[];for(const[o,a]of this.events)a.props.type&&r.push(a);if(r.length!==0)try{if((await this.sendEvent(r)).ok)for(const o of r)this.events.delete(o.eventId),this.shouldPersist=!0}catch(o){this.logger.warn(o)}}),mt(this,"sendEvent",async r=>{const o=this.getAppDomain()?"":"&sp=desktop";return await fetch(`${I5}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${iu}${o}`,{method:"POST",body:JSON.stringify(r)})}),mt(this,"getAppDomain",()=>Xp().url),this.logger=(0,xe.Ep)(i,this.context),this.telemetryEnabled=s,s?this.restore().then(async()=>{await this.submit(),this.setEventListeners()}):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}}var C_=Object.defineProperty,pg=Object.getOwnPropertySymbols,E_=Object.prototype.hasOwnProperty,I_=Object.prototype.propertyIsEnumerable,fu=(t,e,i)=>e in t?C_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,gg=(t,e)=>{for(var i in e||(e={}))E_.call(e,i)&&fu(t,i,e[i]);if(pg)for(var i of pg(e))I_.call(e,i)&&fu(t,i,e[i]);return t},Ge=(t,e,i)=>fu(t,typeof e!="symbol"?e+"":e,i);class wu extends E3{constructor(e){var i;super(e),Ge(this,"protocol",k1),Ge(this,"version",O1),Ge(this,"name",Sc),Ge(this,"relayUrl"),Ge(this,"projectId"),Ge(this,"customStoragePrefix"),Ge(this,"events",new Qi.EventEmitter),Ge(this,"logger"),Ge(this,"heartbeat"),Ge(this,"relayer"),Ge(this,"crypto"),Ge(this,"storage"),Ge(this,"history"),Ge(this,"expirer"),Ge(this,"pairing"),Ge(this,"verify"),Ge(this,"echoClient"),Ge(this,"linkModeSupportedApps"),Ge(this,"eventClient"),Ge(this,"initialized",!1),Ge(this,"logChunkController"),Ge(this,"on",(c,d)=>this.events.on(c,d)),Ge(this,"once",(c,d)=>this.events.once(c,d)),Ge(this,"off",(c,d)=>this.events.off(c,d)),Ge(this,"removeListener",(c,d)=>this.events.removeListener(c,d)),Ge(this,"dispatchEnvelope",({topic:c,message:d,sessionExists:u})=>{if(!c||!d)return;const h={topic:c,message:d,publishedAt:Date.now(),transportType:Xe.link_mode};this.relayer.onLinkMessageEvent(h,{sessionExists:u})});const s=this.getGlobalCore(e==null?void 0:e.customStoragePrefix);if(s)try{return this.customStoragePrefix=s.customStoragePrefix,this.logger=s.logger,this.heartbeat=s.heartbeat,this.crypto=s.crypto,this.history=s.history,this.expirer=s.expirer,this.storage=s.storage,this.relayer=s.relayer,this.pairing=s.pairing,this.verify=s.verify,this.echoClient=s.echoClient,this.linkModeSupportedApps=s.linkModeSupportedApps,this.eventClient=s.eventClient,this.initialized=s.initialized,this.logChunkController=s.logChunkController,s}catch(c){console.warn("Failed to copy global core",c)}this.projectId=e==null?void 0:e.projectId,this.relayUrl=(e==null?void 0:e.relayUrl)||L1,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const r=(0,xe.jI)({level:typeof(e==null?void 0:e.logger)=="string"&&e.logger?e.logger:K3.logger,name:Sc}),{logger:o,chunkLoggerController:a}=(0,xe.Rt)({opts:r,maxSizeInBytes:e==null?void 0:e.maxLogBlobSizeInBytes,loggerOverride:e==null?void 0:e.logger});this.logChunkController=a,(i=this.logChunkController)!=null&&i.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var c,d;(c=this.logChunkController)!=null&&c.downloadLogsBlobInBrowser&&((d=this.logChunkController)==null||d.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=(0,xe.Ep)(o,this.name),this.heartbeat=new mn.C$,this.crypto=new Q4(this,this.logger,e==null?void 0:e.keychain),this.history=new l_(this,this.logger),this.expirer=new h_(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new _3(gg(gg({},G3),e==null?void 0:e.storageOptions)),this.relayer=new A6({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new o_(this,this.logger),this.verify=new f_(this,this.logger,this.storage),this.echoClient=new v_(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new x_(this,this.logger,e==null?void 0:e.telemetryEnabled),this.setGlobalCore(this)}static async init(e){const i=new wu(e);await i.initialize();const s=await i.crypto.getClientId();return await i.storage.setItem(a5,s),i}get context(){return(0,xe.Fd)(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(B1,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.linkModeSupportedApps=await this.storage.getItem(B1)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}getGlobalCore(e=""){try{if(this.isGlobalCoreDisabled())return;const i=`_walletConnectCore_${e}`,s=`${i}_count`;return globalThis[s]=(globalThis[s]||0)+1,globalThis[s]>1&&console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[s]} times.`),globalThis[i]}catch(i){console.warn("Failed to get global WalletConnect core",i);return}}setGlobalCore(e){var i;try{if(this.isGlobalCoreDisabled())return;const s=`_walletConnectCore_${((i=e.opts)==null?void 0:i.customStoragePrefix)||""}`;globalThis[s]=e}catch(s){console.warn("Failed to set global WalletConnect core",s)}}isGlobalCoreDisabled(){try{return typeof V3<"u"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.DISABLE_GLOBAL_CORE==="true"}catch{return!0}}}const A_=wu,fg="wc",wg=2,mg="client",mu=`${fg}@${wg}:${mg}:`,vu={name:mg,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.org"},GO={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_request_sent:"session_request_sent",session_event:"session_event",proposal_expire:"proposal_expire",session_authenticate:"session_authenticate",session_request_expire:"session_request_expire",session_connect:"session_connect"},ZO={database:":memory:"},vg="WALLETCONNECT_DEEPLINK_CHOICE",YO={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},JO="history",XO="0.3",S_="proposal",QO=null,yg="Proposal expired",N_="session",bn=K.SEVEN_DAYS,P_="engine",vt={wc_sessionPropose:{req:{ttl:K.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:K.ONE_DAY,prompt:!1,tag:1104},res:{ttl:K.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:K.ONE_DAY,prompt:!1,tag:1106},res:{ttl:K.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:K.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:K.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:K.ONE_DAY,prompt:!1,tag:1112},res:{ttl:K.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:K.ONE_DAY,prompt:!1,tag:1114},res:{ttl:K.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:K.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:K.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:K.FIVE_MINUTES,prompt:!1,tag:1119}}},yu={min:K.FIVE_MINUTES,max:K.SEVEN_DAYS},Hi={idle:"IDLE",active:"ACTIVE"},bg={eth_sendTransaction:{key:""},eth_sendRawTransaction:{key:""},wallet_sendCalls:{key:""},solana_signTransaction:{key:"signature"},solana_signAllTransactions:{key:"transactions"},solana_signAndSendTransaction:{key:"signature"}},k_="request",O_=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],T_="wc",eT=1.5,R_="auth",$_="authKeys",L_="pairingTopics",B_="requests",Oc=`${T_}@${1.5}:${R_}:`,Tc=`${Oc}:PUB_KEY`;var U_=Object.defineProperty,M_=Object.defineProperties,D_=Object.getOwnPropertyDescriptors,_g=Object.getOwnPropertySymbols,j_=Object.prototype.hasOwnProperty,z_=Object.prototype.propertyIsEnumerable,bu=(t,e,i)=>e in t?U_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,We=(t,e)=>{for(var i in e||(e={}))j_.call(e,i)&&bu(t,i,e[i]);if(_g)for(var i of _g(e))z_.call(e,i)&&bu(t,i,e[i]);return t},$t=(t,e)=>M_(t,D_(e)),z=(t,e,i)=>bu(t,typeof e!="symbol"?e+"":e,i);class F_ extends q3{constructor(e){super(e),z(this,"name",P_),z(this,"events",new(wd())),z(this,"initialized",!1),z(this,"requestQueue",{state:Hi.idle,queue:[]}),z(this,"sessionRequestQueue",{state:Hi.idle,queue:[]}),z(this,"requestQueueDelay",K.ONE_SECOND),z(this,"expectedPairingMethodMap",new Map),z(this,"recentlyDeletedMap",new Map),z(this,"recentlyDeletedLimit",200),z(this,"relayMessageCache",[]),z(this,"pendingSessions",new Map),z(this,"init",async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(vt)}),this.initialized=!0,setTimeout(async()=>{await this.processPendingMessageEvents(),this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},(0,K.toMiliseconds)(this.requestQueueDelay)))}),z(this,"connect",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const s=$t(We({},i),{requiredNamespaces:i.requiredNamespaces||{},optionalNamespaces:i.optionalNamespaces||{}});await this.isValidConnect(s);const{pairingTopic:r,requiredNamespaces:o,optionalNamespaces:a,sessionProperties:c,scopedProperties:d,relays:u}=s;let h=r,p,g=!1;try{if(h){const N=this.client.core.pairing.pairings.get(h);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),g=N.active}}catch(N){throw this.client.logger.error(`connect() -> pairing.get(${h}) failed`),N}if(!h||!g){const{topic:N,uri:R}=await this.client.core.pairing.create();h=N,p=R}if(!h){const{message:N}=W("NO_MATCHING_KEY",`connect() pairing topic: ${h}`);throw new Error(N)}const f=await this.client.core.crypto.generateKeyPair(),v=vt.wc_sessionPropose.req.ttl||K.FIVE_MINUTES,w=ct(v),m=$t(We(We({requiredNamespaces:o,optionalNamespaces:a,relays:u??[{protocol:$1}],proposer:{publicKey:f,metadata:this.client.metadata},expiryTimestamp:w,pairingTopic:h},c&&{sessionProperties:c}),d&&{scopedProperties:d}),{id:(0,he.payloadId)()}),y=Ue("session_connect",m.id),{reject:b,resolve:_,done:x}=sr(v,yg),k=({id:N})=>{N===m.id&&(this.client.events.off("proposal_expire",k),this.pendingSessions.delete(m.id),this.events.emit(y,{error:{message:yg,code:0}}))};return this.client.events.on("proposal_expire",k),this.events.once(y,({error:N,session:R})=>{this.client.events.off("proposal_expire",k),N?b(N):R&&_(R)}),await this.sendRequest({topic:h,method:"wc_sessionPropose",params:m,throwOnFailedPublish:!0,clientRpcId:m.id}),await this.setProposal(m.id,m),{uri:p,approval:x}}),z(this,"pair",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(i)}catch(s){throw this.client.logger.error("pair() failed"),s}}),z(this,"approve",async i=>{var s,r,o;const a=this.client.core.eventClient.createEvent({properties:{topic:(s=i==null?void 0:i.id)==null?void 0:s.toString(),trace:[Ni.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(P){throw a.setError(hr.no_internet_connection),P}try{await this.isValidProposalId(i==null?void 0:i.id)}catch(P){throw this.client.logger.error(`approve() -> proposal.get(${i==null?void 0:i.id}) failed`),a.setError(hr.proposal_not_found),P}try{await this.isValidApprove(i)}catch(P){throw this.client.logger.error("approve() -> isValidApprove() failed"),a.setError(hr.session_approve_namespace_validation_failure),P}const{id:c,relayProtocol:d,namespaces:u,sessionProperties:h,scopedProperties:p,sessionConfig:g}=i,f=this.client.proposal.get(c);this.client.core.eventClient.deleteEvent({eventId:a.eventId});const{pairingTopic:v,proposer:w,requiredNamespaces:m,optionalNamespaces:y}=f;let b=(r=this.client.core.eventClient)==null?void 0:r.getEvent({topic:v});b||(b=(o=this.client.core.eventClient)==null?void 0:o.createEvent({type:Ni.session_approve_started,properties:{topic:v,trace:[Ni.session_approve_started,Ni.session_namespaces_validation_success]}}));const _=await this.client.core.crypto.generateKeyPair(),x=w.publicKey,k=await this.client.core.crypto.generateSharedKey(_,x),N=We(We(We({relay:{protocol:d??"irn"},namespaces:u,controller:{publicKey:_,metadata:this.client.metadata},expiry:ct(bn)},h&&{sessionProperties:h}),p&&{scopedProperties:p}),g&&{sessionConfig:g}),R=Xe.relay;b.addTrace(Ni.subscribing_session_topic);try{await this.client.core.relayer.subscribe(k,{transportType:R})}catch(P){throw b.setError(hr.subscribe_session_topic_failure),P}b.addTrace(Ni.subscribe_session_topic_success);const T=$t(We({},N),{topic:k,requiredNamespaces:m,optionalNamespaces:y,pairingTopic:v,acknowledged:!1,self:N.controller,peer:{publicKey:w.publicKey,metadata:w.metadata},controller:_,transportType:Xe.relay});await this.client.session.set(k,T),b.addTrace(Ni.store_session);try{b.addTrace(Ni.publishing_session_settle),await this.sendRequest({topic:k,method:"wc_sessionSettle",params:N,throwOnFailedPublish:!0}).catch(P=>{throw b==null||b.setError(hr.session_settle_publish_failure),P}),b.addTrace(Ni.session_settle_publish_success),b.addTrace(Ni.publishing_session_approve),await this.sendResult({id:c,topic:v,result:{relay:{protocol:d??"irn"},responderPublicKey:_},throwOnFailedPublish:!0}).catch(P=>{throw b==null||b.setError(hr.session_approve_publish_failure),P}),b.addTrace(Ni.session_approve_publish_success)}catch(P){throw this.client.logger.error(P),this.client.session.delete(k,De("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(k),P}return this.client.core.eventClient.deleteEvent({eventId:b.eventId}),await this.client.core.pairing.updateMetadata({topic:v,metadata:w.metadata}),await this.client.proposal.delete(c,De("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:v}),await this.setExpiry(k,ct(bn)),{topic:k,acknowledged:()=>Promise.resolve(this.client.session.get(k))}}),z(this,"reject",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(i)}catch(a){throw this.client.logger.error("reject() -> isValidReject() failed"),a}const{id:s,reason:r}=i;let o;try{o=this.client.proposal.get(s).pairingTopic}catch(a){throw this.client.logger.error(`reject() -> proposal.get(${s}) failed`),a}o&&(await this.sendError({id:s,topic:o,error:r,rpcOpts:vt.wc_sessionPropose.reject}),await this.client.proposal.delete(s,De("USER_DISCONNECTED")))}),z(this,"update",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(i)}catch(p){throw this.client.logger.error("update() -> isValidUpdate() failed"),p}const{topic:s,namespaces:r}=i,{done:o,resolve:a,reject:c}=sr(),d=(0,he.payloadId)(),u=(0,he.getBigIntRpcId)().toString(),h=this.client.session.get(s).namespaces;return this.events.once(Ue("session_update",d),({error:p})=>{p?c(p):a()}),await this.client.session.update(s,{namespaces:r}),await this.sendRequest({topic:s,method:"wc_sessionUpdate",params:{namespaces:r},throwOnFailedPublish:!0,clientRpcId:d,relayRpcId:u}).catch(p=>{this.client.logger.error(p),this.client.session.update(s,{namespaces:h}),c(p)}),{acknowledged:o}}),z(this,"extend",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(i)}catch(d){throw this.client.logger.error("extend() -> isValidExtend() failed"),d}const{topic:s}=i,r=(0,he.payloadId)(),{done:o,resolve:a,reject:c}=sr();return this.events.once(Ue("session_extend",r),({error:d})=>{d?c(d):a()}),await this.setExpiry(s,ct(bn)),this.sendRequest({topic:s,method:"wc_sessionExtend",params:{},clientRpcId:r,throwOnFailedPublish:!0}).catch(d=>{c(d)}),{acknowledged:o}}),z(this,"request",async i=>{this.isInitialized();try{await this.isValidRequest(i)}catch(y){throw this.client.logger.error("request() -> isValidRequest() failed"),y}const{chainId:s,request:r,topic:o,expiry:a=vt.wc_sessionRequest.req.ttl}=i,c=this.client.session.get(o);(c==null?void 0:c.transportType)===Xe.relay&&await this.confirmOnlineStateOrThrow();const d=(0,he.payloadId)(),u=(0,he.getBigIntRpcId)().toString(),{done:h,resolve:p,reject:g}=sr(a,"Request expired. Please try again.");this.events.once(Ue("session_request",d),({error:y,result:b})=>{y?g(y):p(b)});const f="wc_sessionRequest",v=this.getAppLinkIfEnabled(c.peer.metadata,c.transportType);if(v)return await this.sendRequest({clientRpcId:d,relayRpcId:u,topic:o,method:f,params:{request:$t(We({},r),{expiryTimestamp:ct(a)}),chainId:s},expiry:a,throwOnFailedPublish:!0,appLink:v}).catch(y=>g(y)),this.client.events.emit("session_request_sent",{topic:o,request:r,chainId:s,id:d}),await h();const w={request:$t(We({},r),{expiryTimestamp:ct(a)}),chainId:s},m=this.shouldSetTVF(f,w);return await Promise.all([new Promise(async y=>{await this.sendRequest(We({clientRpcId:d,relayRpcId:u,topic:o,method:f,params:w,expiry:a,throwOnFailedPublish:!0},m&&{tvf:this.getTVFParams(d,w)})).catch(b=>g(b)),this.client.events.emit("session_request_sent",{topic:o,request:r,chainId:s,id:d}),y()}),new Promise(async y=>{var b;if(!((b=c.sessionConfig)!=null&&b.disableDeepLink)){const _=await Gv(this.client.core.storage,vg);await Wv({id:d,topic:o,wcDeepLink:_})}y()}),h()]).then(y=>y[2])}),z(this,"respond",async i=>{this.isInitialized(),await this.isValidRespond(i);const{topic:s,response:r}=i,{id:o}=r,a=this.client.session.get(s);a.transportType===Xe.relay&&await this.confirmOnlineStateOrThrow();const c=this.getAppLinkIfEnabled(a.peer.metadata,a.transportType);(0,he.isJsonRpcResult)(r)?await this.sendResult({id:o,topic:s,result:r.result,throwOnFailedPublish:!0,appLink:c}):(0,he.isJsonRpcError)(r)&&await this.sendError({id:o,topic:s,error:r.error,appLink:c}),this.cleanupAfterResponse(i)}),z(this,"ping",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(i)}catch(r){throw this.client.logger.error("ping() -> isValidPing() failed"),r}const{topic:s}=i;if(this.client.session.keys.includes(s)){const r=(0,he.payloadId)(),o=(0,he.getBigIntRpcId)().toString(),{done:a,resolve:c,reject:d}=sr();this.events.once(Ue("session_ping",r),({error:u})=>{u?d(u):c()}),await Promise.all([this.sendRequest({topic:s,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:r,relayRpcId:o}),a()])}else this.client.core.pairing.pairings.keys.includes(s)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:s}))}),z(this,"emit",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(i);const{topic:s,event:r,chainId:o}=i,a=(0,he.getBigIntRpcId)().toString(),c=(0,he.payloadId)();await this.sendRequest({topic:s,method:"wc_sessionEvent",params:{event:r,chainId:o},throwOnFailedPublish:!0,relayRpcId:a,clientRpcId:c})}),z(this,"disconnect",async i=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(i);const{topic:s}=i;if(this.client.session.keys.includes(s))await this.sendRequest({topic:s,method:"wc_sessionDelete",params:De("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:s,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(s))await this.client.core.pairing.disconnect({topic:s});else{const{message:r}=W("MISMATCHED_TOPIC",`Session or pairing topic not found: ${s}`);throw new Error(r)}}),z(this,"find",i=>(this.isInitialized(),this.client.session.getAll().filter(s=>Lb(s,i)))),z(this,"getPendingSessionRequests",()=>this.client.pendingRequest.getAll()),z(this,"authenticate",async(i,s)=>{var r;this.isInitialized(),this.isValidAuthenticate(i);const o=s&&this.client.core.linkModeSupportedApps.includes(s)&&((r=this.client.metadata.redirect)==null?void 0:r.linkMode),a=o?Xe.link_mode:Xe.relay;a===Xe.relay&&await this.confirmOnlineStateOrThrow();const{chains:c,statement:d="",uri:u,domain:h,nonce:p,type:g,exp:f,nbf:v,methods:w=[],expiry:m}=i,y=[...i.resources||[]],{topic:b,uri:_}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:a});this.client.logger.info({message:"Generated new pairing",pairing:{topic:b,uri:_}});const x=await this.client.core.crypto.generateKeyPair(),k=bc(x);if(await Promise.all([this.client.auth.authKeys.set(Tc,{responseTopic:k,publicKey:x}),this.client.auth.pairingTopics.set(k,{topic:k,pairingTopic:b})]),await this.client.core.relayer.subscribe(k,{transportType:a}),this.client.logger.info(`sending request to new pairing topic: ${b}`),w.length>0){const{namespace:B}=tr(c[0]);let D=j2(B,"request",w);nn(y)&&(D=z2(D,y.pop())),y.push(D)}const N=m&&m>vt.wc_sessionAuthenticate.req.ttl?m:vt.wc_sessionAuthenticate.req.ttl,R={authPayload:{type:g??"caip122",chains:c,statement:d,aud:u,domain:h,version:"1",nonce:p,iat:new Date().toISOString(),exp:f,nbf:v,resources:y},requester:{publicKey:x,metadata:this.client.metadata},expiryTimestamp:ct(N)},T={eip155:{chains:c,methods:[...new Set(["personal_sign",...w])],events:["chainChanged","accountsChanged"]}},P={requiredNamespaces:{},optionalNamespaces:T,relays:[{protocol:"irn"}],pairingTopic:b,proposer:{publicKey:x,metadata:this.client.metadata},expiryTimestamp:ct(vt.wc_sessionPropose.req.ttl),id:(0,he.payloadId)()},{done:M,resolve:U,reject:j}=sr(N,"Request expired"),Z=(0,he.payloadId)(),A=Ue("session_connect",P.id),E=Ue("session_request",Z),I=async({error:B,session:D})=>{this.events.off(E,L),B?j(B):D&&U({session:D})},L=async B=>{var D,q,Y;if(await this.deletePendingAuthRequest(Z,{message:"fulfilled",code:0}),B.error){const ke=De("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return B.error.code===ke.code?void 0:(this.events.off(A,I),j(B.error.message))}await this.deleteProposal(P.id),this.events.off(A,I);const{cacaos:ue,responder:le}=B.result,be=[],Pe=[];for(const ke of ue){await b0({cacao:ke,projectId:this.client.core.projectId})||(this.client.logger.error(ke,"Signature verification failed"),j(De("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:Je}=ke,Qe=nn(Je.resources),et=[Nd(Je.iss)],it=hc(Je.iss);if(Qe){const Dt=I0(Qe),Xr=A0(Qe);be.push(...Dt),et.push(...Xr)}for(const Dt of et)Pe.push(`${Dt}:${it}`)}const He=await this.client.core.crypto.generateSharedKey(x,le.publicKey);let Oe;be.length>0&&(Oe={topic:He,acknowledged:!0,self:{publicKey:x,metadata:this.client.metadata},peer:le,controller:le.publicKey,expiry:ct(bn),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:b,namespaces:b1([...new Set(be)],[...new Set(Pe)]),transportType:a},await this.client.core.relayer.subscribe(He,{transportType:a}),await this.client.session.set(He,Oe),b&&await this.client.core.pairing.updateMetadata({topic:b,metadata:le.metadata}),Oe=this.client.session.get(He)),(D=this.client.metadata.redirect)!=null&&D.linkMode&&(q=le.metadata.redirect)!=null&&q.linkMode&&(Y=le.metadata.redirect)!=null&&Y.universal&&s&&(this.client.core.addLinkModeSupportedApp(le.metadata.redirect.universal),this.client.session.update(He,{transportType:Xe.link_mode})),U({auths:ue,session:Oe})};this.events.once(A,I),this.events.once(E,L);let $;try{if(o){const B=(0,he.formatJsonRpcRequest)("wc_sessionAuthenticate",R,Z);this.client.core.history.set(b,B);const D=await this.client.core.crypto.encode("",B,{type:Io,encoding:Rs});$=xc(s,b,D)}else await Promise.all([this.sendRequest({topic:b,method:"wc_sessionAuthenticate",params:R,expiry:i.expiry,throwOnFailedPublish:!0,clientRpcId:Z}),this.sendRequest({topic:b,method:"wc_sessionPropose",params:P,expiry:vt.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:P.id})])}catch(B){throw this.events.off(A,I),this.events.off(E,L),B}return await this.setProposal(P.id,P),await this.setAuthRequest(Z,{request:$t(We({},R),{verifyContext:{}}),pairingTopic:b,transportType:a}),{uri:$??_,response:M}}),z(this,"approveSessionAuthenticate",async i=>{const{id:s,auths:r}=i,o=this.client.core.eventClient.createEvent({properties:{topic:s.toString(),trace:[pr.authenticated_session_approve_started]}});try{this.isInitialized()}catch(m){throw o.setError(To.no_internet_connection),m}const a=this.getPendingAuthRequest(s);if(!a)throw o.setError(To.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${s}`);const c=a.transportType||Xe.relay;c===Xe.relay&&await this.confirmOnlineStateOrThrow();const d=a.requester.publicKey,u=await this.client.core.crypto.generateKeyPair(),h=bc(d),p={type:os,receiverPublicKey:d,senderPublicKey:u},g=[],f=[];for(const m of r){if(!await b0({cacao:m,projectId:this.client.core.projectId})){o.setError(To.invalid_cacao);const k=De("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:s,topic:h,error:k,encodeOpts:p}),new Error(k.message)}o.addTrace(pr.cacaos_verified);const{p:y}=m,b=nn(y.resources),_=[Nd(y.iss)],x=hc(y.iss);if(b){const k=I0(b),N=A0(b);g.push(...k),_.push(...N)}for(const k of _)f.push(`${k}:${x}`)}const v=await this.client.core.crypto.generateSharedKey(u,d);o.addTrace(pr.create_authenticated_session_topic);let w;if((g==null?void 0:g.length)>0){w={topic:v,acknowledged:!0,self:{publicKey:u,metadata:this.client.metadata},peer:{publicKey:d,metadata:a.requester.metadata},controller:d,expiry:ct(bn),authentication:r,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:a.pairingTopic,namespaces:b1([...new Set(g)],[...new Set(f)]),transportType:c},o.addTrace(pr.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(v,{transportType:c})}catch(m){throw o.setError(To.subscribe_authenticated_session_topic_failure),m}o.addTrace(pr.subscribe_authenticated_session_topic_success),await this.client.session.set(v,w),o.addTrace(pr.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:a.pairingTopic,metadata:a.requester.metadata})}o.addTrace(pr.publishing_authenticated_session_approve);try{await this.sendResult({topic:h,id:s,result:{cacaos:r,responder:{publicKey:u,metadata:this.client.metadata}},encodeOpts:p,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(a.requester.metadata,c)})}catch(m){throw o.setError(To.authenticated_session_approve_publish_failure),m}return await this.client.auth.requests.delete(s,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:a.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:o.eventId}),{session:w}}),z(this,"rejectSessionAuthenticate",async i=>{this.isInitialized();const{id:s,reason:r}=i,o=this.getPendingAuthRequest(s);if(!o)throw new Error(`Could not find pending auth request with id ${s}`);o.transportType===Xe.relay&&await this.confirmOnlineStateOrThrow();const a=o.requester.publicKey,c=await this.client.core.crypto.generateKeyPair(),d=bc(a),u={type:os,receiverPublicKey:a,senderPublicKey:c};await this.sendError({id:s,topic:d,error:r,encodeOpts:u,rpcOpts:vt.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(o.requester.metadata,o.transportType)}),await this.client.auth.requests.delete(s,{message:"rejected",code:0}),await this.client.proposal.delete(s,De("USER_DISCONNECTED"))}),z(this,"formatAuthMessage",i=>{this.isInitialized();const{request:s,iss:r}=i;return _0(s,r)}),z(this,"processRelayMessageCache",()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const i=this.relayMessageCache.shift();i&&await this.onRelayMessage(i)}catch(i){this.client.logger.error(i)}},50)}),z(this,"cleanupDuplicatePairings",async i=>{if(i.pairingTopic)try{const s=this.client.core.pairing.pairings.get(i.pairingTopic),r=this.client.core.pairing.pairings.getAll().filter(o=>{var a,c;return((a=o.peerMetadata)==null?void 0:a.url)&&((c=o.peerMetadata)==null?void 0:c.url)===i.peer.metadata.url&&o.topic&&o.topic!==s.topic});if(r.length===0)return;this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),await Promise.all(r.map(o=>this.client.core.pairing.disconnect({topic:o.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(s){this.client.logger.error(s)}}),z(this,"deleteSession",async i=>{var s;const{topic:r,expirerHasDeleted:o=!1,emitEvent:a=!0,id:c=0}=i,{self:d}=this.client.session.get(r);await this.client.core.relayer.unsubscribe(r),await this.client.session.delete(r,De("USER_DISCONNECTED")),this.addToRecentlyDeleted(r,"session"),this.client.core.crypto.keychain.has(d.publicKey)&&await this.client.core.crypto.deleteKeyPair(d.publicKey),this.client.core.crypto.keychain.has(r)&&await this.client.core.crypto.deleteSymKey(r),o||this.client.core.expirer.del(r),this.client.core.storage.removeItem(vg).catch(u=>this.client.logger.warn(u)),this.getPendingSessionRequests().forEach(u=>{u.topic===r&&this.deletePendingSessionRequest(u.id,De("USER_DISCONNECTED"))}),r===((s=this.sessionRequestQueue.queue[0])==null?void 0:s.topic)&&(this.sessionRequestQueue.state=Hi.idle),a&&this.client.events.emit("session_delete",{id:c,topic:r})}),z(this,"deleteProposal",async(i,s)=>{if(s)try{const r=this.client.proposal.get(i),o=this.client.core.eventClient.getEvent({topic:r.pairingTopic});o==null||o.setError(hr.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(i,De("USER_DISCONNECTED")),s?Promise.resolve():this.client.core.expirer.del(i)]),this.addToRecentlyDeleted(i,"proposal")}),z(this,"deletePendingSessionRequest",async(i,s,r=!1)=>{await Promise.all([this.client.pendingRequest.delete(i,s),r?Promise.resolve():this.client.core.expirer.del(i)]),this.addToRecentlyDeleted(i,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(o=>o.id!==i),r&&(this.sessionRequestQueue.state=Hi.idle,this.client.events.emit("session_request_expire",{id:i}))}),z(this,"deletePendingAuthRequest",async(i,s,r=!1)=>{await Promise.all([this.client.auth.requests.delete(i,s),r?Promise.resolve():this.client.core.expirer.del(i)])}),z(this,"setExpiry",async(i,s)=>{this.client.session.keys.includes(i)&&(this.client.core.expirer.set(i,s),await this.client.session.update(i,{expiry:s}))}),z(this,"setProposal",async(i,s)=>{this.client.core.expirer.set(i,ct(vt.wc_sessionPropose.req.ttl)),await this.client.proposal.set(i,s)}),z(this,"setAuthRequest",async(i,s)=>{const{request:r,pairingTopic:o,transportType:a=Xe.relay}=s;this.client.core.expirer.set(i,r.expiryTimestamp),await this.client.auth.requests.set(i,{authPayload:r.authPayload,requester:r.requester,expiryTimestamp:r.expiryTimestamp,id:i,pairingTopic:o,verifyContext:r.verifyContext,transportType:a})}),z(this,"setPendingSessionRequest",async i=>{const{id:s,topic:r,params:o,verifyContext:a}=i,c=o.request.expiryTimestamp||ct(vt.wc_sessionRequest.req.ttl);this.client.core.expirer.set(s,c),await this.client.pendingRequest.set(s,{id:s,topic:r,params:o,verifyContext:a})}),z(this,"sendRequest",async i=>{const{topic:s,method:r,params:o,expiry:a,relayRpcId:c,clientRpcId:d,throwOnFailedPublish:u,appLink:h,tvf:p}=i,g=(0,he.formatJsonRpcRequest)(r,o,d);let f;const v=!!h;try{const y=v?Rs:Ii;f=await this.client.core.crypto.encode(s,g,{encoding:y})}catch(y){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${s} failed`),y}let w;if(O_.includes(r)){const y=Di(JSON.stringify(g)),b=Di(f);w=await this.client.core.verify.register({id:b,decryptedId:y})}const m=vt[r].req;if(m.attestation=w,a&&(m.ttl=a),c&&(m.id=c),this.client.core.history.set(s,g),v){const y=xc(h,s,f);await J.g.Linking.openURL(y,this.client.name)}else{const y=vt[r].req;a&&(y.ttl=a),c&&(y.id=c),y.tvf=$t(We({},p),{correlationId:g.id}),u?(y.internal=$t(We({},y.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,f,y)):this.client.core.relayer.publish(s,f,y).catch(b=>this.client.logger.error(b))}return g.id}),z(this,"sendResult",async i=>{const{id:s,topic:r,result:o,throwOnFailedPublish:a,encodeOpts:c,appLink:d}=i,u=(0,he.formatJsonRpcResult)(s,o);let h;const p=d&&typeof(J.g==null?void 0:J.g.Linking)<"u";try{const v=p?Rs:Ii;h=await this.client.core.crypto.encode(r,u,$t(We({},c||{}),{encoding:v}))}catch(v){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`),v}let g,f;try{g=await this.client.core.history.get(r,s);const v=g.request;try{this.shouldSetTVF(v.method,v.params)&&(f=this.getTVFParams(s,v.params,o))}catch(w){this.client.logger.warn("sendResult() -> getTVFParams() failed",w)}}catch(v){throw this.client.logger.error(`sendResult() -> history.get(${r}, ${s}) failed`),v}if(p){const v=xc(d,r,h);await J.g.Linking.openURL(v,this.client.name)}else{const v=g.request.method,w=vt[v].res;w.tvf=$t(We({},f),{correlationId:s}),a?(w.internal=$t(We({},w.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(r,h,w)):this.client.core.relayer.publish(r,h,w).catch(m=>this.client.logger.error(m))}await this.client.core.history.resolve(u)}),z(this,"sendError",async i=>{const{id:s,topic:r,error:o,encodeOpts:a,rpcOpts:c,appLink:d}=i,u=(0,he.formatJsonRpcError)(s,o);let h;const p=d&&typeof(J.g==null?void 0:J.g.Linking)<"u";try{const f=p?Rs:Ii;h=await this.client.core.crypto.encode(r,u,$t(We({},a||{}),{encoding:f}))}catch(f){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`),f}let g;try{g=await this.client.core.history.get(r,s)}catch(f){throw this.client.logger.error(`sendError() -> history.get(${r}, ${s}) failed`),f}if(p){const f=xc(d,r,h);await J.g.Linking.openURL(f,this.client.name)}else{const f=g.request.method,v=c||vt[f].res;this.client.core.relayer.publish(r,h,v)}await this.client.core.history.resolve(u)}),z(this,"cleanup",async()=>{const i=[],s=[];this.client.session.getAll().forEach(r=>{let o=!1;Ps(r.expiry)&&(o=!0),this.client.core.crypto.keychain.has(r.topic)||(o=!0),o&&i.push(r.topic)}),this.client.proposal.getAll().forEach(r=>{Ps(r.expiryTimestamp)&&s.push(r.id)}),await Promise.all([...i.map(r=>this.deleteSession({topic:r})),...s.map(r=>this.deleteProposal(r))])}),z(this,"onProviderMessageEvent",async i=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(i):await this.onRelayMessage(i)}),z(this,"onRelayEventRequest",async i=>{this.requestQueue.queue.push(i),await this.processRequestsQueue()}),z(this,"processRequestsQueue",async()=>{if(this.requestQueue.state===Hi.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=Hi.active;const i=this.requestQueue.queue.shift();if(i)try{await this.processRequest(i)}catch(s){this.client.logger.warn(s)}}this.requestQueue.state=Hi.idle}),z(this,"processRequest",async i=>{const{topic:s,payload:r,attestation:o,transportType:a,encryptedId:c}=i,d=r.method;if(!this.shouldIgnorePairingRequest({topic:s,requestMethod:d}))switch(d){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:s,payload:r,attestation:o,encryptedId:c});case"wc_sessionSettle":return await this.onSessionSettleRequest(s,r);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(s,r);case"wc_sessionExtend":return await this.onSessionExtendRequest(s,r);case"wc_sessionPing":return await this.onSessionPingRequest(s,r);case"wc_sessionDelete":return await this.onSessionDeleteRequest(s,r);case"wc_sessionRequest":return await this.onSessionRequest({topic:s,payload:r,attestation:o,encryptedId:c,transportType:a});case"wc_sessionEvent":return await this.onSessionEventRequest(s,r);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:s,payload:r,attestation:o,encryptedId:c,transportType:a});default:return this.client.logger.info(`Unsupported request method ${d}`)}}),z(this,"onRelayEventResponse",async i=>{const{topic:s,payload:r,transportType:o}=i,a=(await this.client.core.history.get(s,r.id)).request.method;switch(a){case"wc_sessionPropose":return this.onSessionProposeResponse(s,r,o);case"wc_sessionSettle":return this.onSessionSettleResponse(s,r);case"wc_sessionUpdate":return this.onSessionUpdateResponse(s,r);case"wc_sessionExtend":return this.onSessionExtendResponse(s,r);case"wc_sessionPing":return this.onSessionPingResponse(s,r);case"wc_sessionRequest":return this.onSessionRequestResponse(s,r);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(s,r);default:return this.client.logger.info(`Unsupported response method ${a}`)}}),z(this,"onRelayEventUnknownPayload",i=>{const{topic:s}=i,{message:r}=W("MISSING_OR_INVALID",`Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);throw new Error(r)}),z(this,"shouldIgnorePairingRequest",i=>{const{topic:s,requestMethod:r}=i,o=this.expectedPairingMethodMap.get(s);return!o||o.includes(r)?!1:!!(o.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)}),z(this,"onSessionProposeRequest",async i=>{const{topic:s,payload:r,attestation:o,encryptedId:a}=i,{params:c,id:d}=r;try{const u=this.client.core.eventClient.getEvent({topic:s});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),u==null||u.setError(as.proposal_listener_not_found)),this.isValidConnect(We({},r.params));const h=c.expiryTimestamp||ct(vt.wc_sessionPropose.req.ttl),p=We({id:d,pairingTopic:s,expiryTimestamp:h},c);await this.setProposal(d,p);const g=await this.getVerifyContext({attestationId:o,hash:Di(JSON.stringify(r)),encryptedId:a,metadata:p.proposer.metadata});u==null||u.addTrace(zi.emit_session_proposal),this.client.events.emit("session_proposal",{id:d,params:p,verifyContext:g})}catch(u){await this.sendError({id:d,topic:s,error:u,rpcOpts:vt.wc_sessionPropose.autoReject}),this.client.logger.error(u)}}),z(this,"onSessionProposeResponse",async(i,s,r)=>{const{id:o}=s;if((0,he.isJsonRpcResult)(s)){const{result:a}=s;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:a});const c=this.client.proposal.get(o);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:c});const d=c.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:d});const u=a.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:u});const h=await this.client.core.crypto.generateSharedKey(d,u);this.pendingSessions.set(o,{sessionTopic:h,pairingTopic:i,proposalId:o,publicKey:d});const p=await this.client.core.relayer.subscribe(h,{transportType:r});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:p}),await this.client.core.pairing.activate({topic:i})}else if((0,he.isJsonRpcError)(s)){await this.client.proposal.delete(o,De("USER_DISCONNECTED"));const a=Ue("session_connect",o);if(this.events.listenerCount(a)===0)throw new Error(`emitting ${a} without any listeners, 954`);this.events.emit(a,{error:s.error})}}),z(this,"onSessionSettleRequest",async(i,s)=>{const{id:r,params:o}=s;try{this.isValidSessionSettleRequest(o);const{relay:a,controller:c,expiry:d,namespaces:u,sessionProperties:h,scopedProperties:p,sessionConfig:g}=s.params,f=[...this.pendingSessions.values()].find(m=>m.sessionTopic===i);if(!f)return this.client.logger.error(`Pending session not found for topic ${i}`);const v=this.client.proposal.get(f.proposalId),w=$t(We(We(We({topic:i,relay:a,expiry:d,namespaces:u,acknowledged:!0,pairingTopic:f.pairingTopic,requiredNamespaces:v.requiredNamespaces,optionalNamespaces:v.optionalNamespaces,controller:c.publicKey,self:{publicKey:f.publicKey,metadata:this.client.metadata},peer:{publicKey:c.publicKey,metadata:c.metadata}},h&&{sessionProperties:h}),p&&{scopedProperties:p}),g&&{sessionConfig:g}),{transportType:Xe.relay});await this.client.session.set(w.topic,w),await this.setExpiry(w.topic,w.expiry),await this.client.core.pairing.updateMetadata({topic:f.pairingTopic,metadata:w.peer.metadata}),this.client.events.emit("session_connect",{session:w}),this.events.emit(Ue("session_connect",f.proposalId),{session:w}),this.pendingSessions.delete(f.proposalId),this.deleteProposal(f.proposalId,!1),this.cleanupDuplicatePairings(w),await this.sendResult({id:s.id,topic:i,result:!0,throwOnFailedPublish:!0})}catch(a){await this.sendError({id:r,topic:i,error:a}),this.client.logger.error(a)}}),z(this,"onSessionSettleResponse",async(i,s)=>{const{id:r}=s;(0,he.isJsonRpcResult)(s)?(await this.client.session.update(i,{acknowledged:!0}),this.events.emit(Ue("session_approve",r),{})):(0,he.isJsonRpcError)(s)&&(await this.client.session.delete(i,De("USER_DISCONNECTED")),this.events.emit(Ue("session_approve",r),{error:s.error}))}),z(this,"onSessionUpdateRequest",async(i,s)=>{const{params:r,id:o}=s;try{const a=`${i}_session_update`,c=Po.get(a);if(c&&this.isRequestOutOfSync(c,o)){this.client.logger.warn(`Discarding out of sync request - ${o}`),this.sendError({id:o,topic:i,error:De("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(We({topic:i},r));try{Po.set(a,o),await this.client.session.update(i,{namespaces:r.namespaces}),await this.sendResult({id:o,topic:i,result:!0,throwOnFailedPublish:!0})}catch(d){throw Po.delete(a),d}this.client.events.emit("session_update",{id:o,topic:i,params:r})}catch(a){await this.sendError({id:o,topic:i,error:a}),this.client.logger.error(a)}}),z(this,"isRequestOutOfSync",(i,s)=>s.toString().slice(0,-3)<i.toString().slice(0,-3)),z(this,"onSessionUpdateResponse",(i,s)=>{const{id:r}=s,o=Ue("session_update",r);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners`);(0,he.isJsonRpcResult)(s)?this.events.emit(Ue("session_update",r),{}):(0,he.isJsonRpcError)(s)&&this.events.emit(Ue("session_update",r),{error:s.error})}),z(this,"onSessionExtendRequest",async(i,s)=>{const{id:r}=s;try{this.isValidExtend({topic:i}),await this.setExpiry(i,ct(bn)),await this.sendResult({id:r,topic:i,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:r,topic:i})}catch(o){await this.sendError({id:r,topic:i,error:o}),this.client.logger.error(o)}}),z(this,"onSessionExtendResponse",(i,s)=>{const{id:r}=s,o=Ue("session_extend",r);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners`);(0,he.isJsonRpcResult)(s)?this.events.emit(Ue("session_extend",r),{}):(0,he.isJsonRpcError)(s)&&this.events.emit(Ue("session_extend",r),{error:s.error})}),z(this,"onSessionPingRequest",async(i,s)=>{const{id:r}=s;try{this.isValidPing({topic:i}),await this.sendResult({id:r,topic:i,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:r,topic:i})}catch(o){await this.sendError({id:r,topic:i,error:o}),this.client.logger.error(o)}}),z(this,"onSessionPingResponse",(i,s)=>{const{id:r}=s,o=Ue("session_ping",r);setTimeout(()=>{if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners 2176`);(0,he.isJsonRpcResult)(s)?this.events.emit(Ue("session_ping",r),{}):(0,he.isJsonRpcError)(s)&&this.events.emit(Ue("session_ping",r),{error:s.error})},500)}),z(this,"onSessionDeleteRequest",async(i,s)=>{const{id:r}=s;try{this.isValidDisconnect({topic:i,reason:s.params}),Promise.all([new Promise(o=>{this.client.core.relayer.once(wt.publish,async()=>{o(await this.deleteSession({topic:i,id:r}))})}),this.sendResult({id:r,topic:i,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:i,error:De("USER_DISCONNECTED")})]).catch(o=>this.client.logger.error(o))}catch(o){this.client.logger.error(o)}}),z(this,"onSessionRequest",async i=>{var s,r,o;const{topic:a,payload:c,attestation:d,encryptedId:u,transportType:h}=i,{id:p,params:g}=c;try{await this.isValidRequest(We({topic:a},g));const f=this.client.session.get(a),v=await this.getVerifyContext({attestationId:d,hash:Di(JSON.stringify((0,he.formatJsonRpcRequest)("wc_sessionRequest",g,p))),encryptedId:u,metadata:f.peer.metadata,transportType:h}),w={id:p,topic:a,params:g,verifyContext:v};await this.setPendingSessionRequest(w),h===Xe.link_mode&&(s=f.peer.metadata.redirect)!=null&&s.universal&&this.client.core.addLinkModeSupportedApp((r=f.peer.metadata.redirect)==null?void 0:r.universal),(o=this.client.signConfig)!=null&&o.disableRequestQueue?this.emitSessionRequest(w):(this.addSessionRequestToSessionRequestQueue(w),this.processSessionRequestQueue())}catch(f){await this.sendError({id:p,topic:a,error:f}),this.client.logger.error(f)}}),z(this,"onSessionRequestResponse",(i,s)=>{const{id:r}=s,o=Ue("session_request",r);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners`);(0,he.isJsonRpcResult)(s)?this.events.emit(Ue("session_request",r),{result:s.result}):(0,he.isJsonRpcError)(s)&&this.events.emit(Ue("session_request",r),{error:s.error})}),z(this,"onSessionEventRequest",async(i,s)=>{const{id:r,params:o}=s;try{const a=`${i}_session_event_${o.event.name}`,c=Po.get(a);if(c&&this.isRequestOutOfSync(c,r)){this.client.logger.info(`Discarding out of sync request - ${r}`);return}this.isValidEmit(We({topic:i},o)),this.client.events.emit("session_event",{id:r,topic:i,params:o}),Po.set(a,r)}catch(a){await this.sendError({id:r,topic:i,error:a}),this.client.logger.error(a)}}),z(this,"onSessionAuthenticateResponse",(i,s)=>{const{id:r}=s;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:i,payload:s}),(0,he.isJsonRpcResult)(s)?this.events.emit(Ue("session_request",r),{result:s.result}):(0,he.isJsonRpcError)(s)&&this.events.emit(Ue("session_request",r),{error:s.error})}),z(this,"onSessionAuthenticateRequest",async i=>{var s;const{topic:r,payload:o,attestation:a,encryptedId:c,transportType:d}=i;try{const{requester:u,authPayload:h,expiryTimestamp:p}=o.params,g=await this.getVerifyContext({attestationId:a,hash:Di(JSON.stringify(o)),encryptedId:c,metadata:u.metadata,transportType:d}),f={requester:u,pairingTopic:r,id:o.id,authPayload:h,verifyContext:g,expiryTimestamp:p};await this.setAuthRequest(o.id,{request:f,pairingTopic:r,transportType:d}),d===Xe.link_mode&&(s=u.metadata.redirect)!=null&&s.universal&&this.client.core.addLinkModeSupportedApp(u.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:r,params:o.params,id:o.id,verifyContext:g})}catch(u){this.client.logger.error(u);const h=o.params.requester.publicKey,p=await this.client.core.crypto.generateKeyPair(),g=this.getAppLinkIfEnabled(o.params.requester.metadata,d),f={type:os,receiverPublicKey:h,senderPublicKey:p};await this.sendError({id:o.id,topic:r,error:u,encodeOpts:f,rpcOpts:vt.wc_sessionAuthenticate.autoReject,appLink:g})}}),z(this,"addSessionRequestToSessionRequestQueue",i=>{this.sessionRequestQueue.queue.push(i)}),z(this,"cleanupAfterResponse",i=>{this.deletePendingSessionRequest(i.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=Hi.idle,this.processSessionRequestQueue()},(0,K.toMiliseconds)(this.requestQueueDelay))}),z(this,"cleanupPendingSentRequestsForTopic",({topic:i,error:s})=>{const r=this.client.core.history.pending;r.length>0&&r.filter(o=>o.topic===i&&o.request.method==="wc_sessionRequest").forEach(o=>{const a=o.request.id,c=Ue("session_request",a);if(this.events.listenerCount(c)===0)throw new Error(`emitting ${c} without any listeners`);this.events.emit(Ue("session_request",o.request.id),{error:s})})}),z(this,"processSessionRequestQueue",()=>{if(this.sessionRequestQueue.state===Hi.active){this.client.logger.info("session request queue is already active.");return}const i=this.sessionRequestQueue.queue[0];if(!i){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=Hi.active,this.emitSessionRequest(i)}catch(s){this.client.logger.error(s)}}),z(this,"emitSessionRequest",i=>{this.client.events.emit("session_request",i)}),z(this,"onPairingCreated",i=>{if(i.methods&&this.expectedPairingMethodMap.set(i.topic,i.methods),i.active)return;const s=this.client.proposal.getAll().find(r=>r.pairingTopic===i.topic);s&&this.onSessionProposeRequest({topic:i.topic,payload:(0,he.formatJsonRpcRequest)("wc_sessionPropose",$t(We({},s),{requiredNamespaces:s.requiredNamespaces,optionalNamespaces:s.optionalNamespaces,relays:s.relays,proposer:s.proposer,sessionProperties:s.sessionProperties,scopedProperties:s.scopedProperties}),s.id)})}),z(this,"isValidConnect",async i=>{if(!Ft(i)){const{message:u}=W("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(i)}`);throw new Error(u)}const{pairingTopic:s,requiredNamespaces:r,optionalNamespaces:o,sessionProperties:a,scopedProperties:c,relays:d}=i;if(Ct(s)||await this.isValidPairingTopic(s),!Kb(d,!0)){const{message:u}=W("MISSING_OR_INVALID",`connect() relays: ${d}`);throw new Error(u)}if(!Ct(r)&&wn(r)!==0&&this.validateNamespaces(r,"requiredNamespaces"),!Ct(o)&&wn(o)!==0&&this.validateNamespaces(o,"optionalNamespaces"),Ct(a)||this.validateSessionProps(a,"sessionProperties"),!Ct(c)){this.validateSessionProps(c,"scopedProperties");const u=Object.keys(r||{}).concat(Object.keys(o||{}));if(!Object.keys(c).every(h=>u.includes(h)))throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(c)}, required/optional namespaces: ${JSON.stringify(u)}`)}}),z(this,"validateNamespaces",(i,s)=>{const r=Vb(i,"connect()",s);if(r)throw new Error(r.message)}),z(this,"isValidApprove",async i=>{if(!Ft(i))throw new Error(W("MISSING_OR_INVALID",`approve() params: ${i}`).message);const{id:s,namespaces:r,relayProtocol:o,sessionProperties:a,scopedProperties:c}=i;this.checkRecentlyDeleted(s),await this.isValidProposalId(s);const d=this.client.proposal.get(s),u=Ic(r,"approve()");if(u)throw new Error(u.message);const h=Xd(d.requiredNamespaces,r,"approve()");if(h)throw new Error(h.message);if(!ot(o,!0)){const{message:p}=W("MISSING_OR_INVALID",`approve() relayProtocol: ${o}`);throw new Error(p)}if(Ct(a)||this.validateSessionProps(a,"sessionProperties"),!Ct(c)){this.validateSessionProps(c,"scopedProperties");const p=new Set(Object.keys(r));if(!Object.keys(c).every(g=>p.has(g)))throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(c)}, approved namespaces: ${Array.from(p).join(", ")}`)}}),z(this,"isValidReject",async i=>{if(!Ft(i)){const{message:o}=W("MISSING_OR_INVALID",`reject() params: ${i}`);throw new Error(o)}const{id:s,reason:r}=i;if(this.checkRecentlyDeleted(s),await this.isValidProposalId(s),!Zb(r)){const{message:o}=W("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(r)}`);throw new Error(o)}}),z(this,"isValidSessionSettleRequest",i=>{if(!Ft(i)){const{message:u}=W("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${i}`);throw new Error(u)}const{relay:s,controller:r,namespaces:o,expiry:a}=i;if(!C1(s)){const{message:u}=W("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(u)}const c=jb(r,"onSessionSettleRequest()");if(c)throw new Error(c.message);const d=Ic(o,"onSessionSettleRequest()");if(d)throw new Error(d.message);if(Ps(a)){const{message:u}=W("EXPIRED","onSessionSettleRequest()");throw new Error(u)}}),z(this,"isValidUpdate",async i=>{if(!Ft(i)){const{message:d}=W("MISSING_OR_INVALID",`update() params: ${i}`);throw new Error(d)}const{topic:s,namespaces:r}=i;this.checkRecentlyDeleted(s),await this.isValidSessionTopic(s);const o=this.client.session.get(s),a=Ic(r,"update()");if(a)throw new Error(a.message);const c=Xd(o.requiredNamespaces,r,"update()");if(c)throw new Error(c.message)}),z(this,"isValidExtend",async i=>{if(!Ft(i)){const{message:r}=W("MISSING_OR_INVALID",`extend() params: ${i}`);throw new Error(r)}const{topic:s}=i;this.checkRecentlyDeleted(s),await this.isValidSessionTopic(s)}),z(this,"isValidRequest",async i=>{if(!Ft(i)){const{message:d}=W("MISSING_OR_INVALID",`request() params: ${i}`);throw new Error(d)}const{topic:s,request:r,chainId:o,expiry:a}=i;this.checkRecentlyDeleted(s),await this.isValidSessionTopic(s);const{namespaces:c}=this.client.session.get(s);if(!E1(c,o)){const{message:d}=W("MISSING_OR_INVALID",`request() chainId: ${o}`);throw new Error(d)}if(!Yb(r)){const{message:d}=W("MISSING_OR_INVALID",`request() ${JSON.stringify(r)}`);throw new Error(d)}if(!Qb(c,o,r.method)){const{message:d}=W("MISSING_OR_INVALID",`request() method: ${r.method}`);throw new Error(d)}if(a&&!s3(a,yu)){const{message:d}=W("MISSING_OR_INVALID",`request() expiry: ${a}. Expiry must be a number (in seconds) between ${yu.min} and ${yu.max}`);throw new Error(d)}}),z(this,"isValidRespond",async i=>{var s;if(!Ft(i)){const{message:a}=W("MISSING_OR_INVALID",`respond() params: ${i}`);throw new Error(a)}const{topic:r,response:o}=i;try{await this.isValidSessionTopic(r)}catch(a){throw(s=i==null?void 0:i.response)!=null&&s.id&&this.cleanupAfterResponse(i),a}if(!Jb(o)){const{message:a}=W("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(o)}`);throw new Error(a)}}),z(this,"isValidPing",async i=>{if(!Ft(i)){const{message:r}=W("MISSING_OR_INVALID",`ping() params: ${i}`);throw new Error(r)}const{topic:s}=i;await this.isValidSessionOrPairingTopic(s)}),z(this,"isValidEmit",async i=>{if(!Ft(i)){const{message:c}=W("MISSING_OR_INVALID",`emit() params: ${i}`);throw new Error(c)}const{topic:s,event:r,chainId:o}=i;await this.isValidSessionTopic(s);const{namespaces:a}=this.client.session.get(s);if(!E1(a,o)){const{message:c}=W("MISSING_OR_INVALID",`emit() chainId: ${o}`);throw new Error(c)}if(!Xb(r)){const{message:c}=W("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(r)}`);throw new Error(c)}if(!e3(a,o,r.name)){const{message:c}=W("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(r)}`);throw new Error(c)}}),z(this,"isValidDisconnect",async i=>{if(!Ft(i)){const{message:r}=W("MISSING_OR_INVALID",`disconnect() params: ${i}`);throw new Error(r)}const{topic:s}=i;await this.isValidSessionOrPairingTopic(s)}),z(this,"isValidAuthenticate",i=>{const{chains:s,uri:r,domain:o,nonce:a}=i;if(!Array.isArray(s)||s.length===0)throw new Error("chains is required and must be a non-empty array");if(!ot(r,!1))throw new Error("uri is required parameter");if(!ot(o,!1))throw new Error("domain is required parameter");if(!ot(a,!1))throw new Error("nonce is required parameter");if([...new Set(s.map(d=>tr(d).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:c}=tr(s[0]);if(c!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")}),z(this,"getVerifyContext",async i=>{const{attestationId:s,hash:r,encryptedId:o,metadata:a,transportType:c}=i,d={verified:{verifyUrl:a.verifyUrl||Oo,validation:"UNKNOWN",origin:a.url||""}};try{if(c===Xe.link_mode){const h=this.getAppLinkIfEnabled(a,c);return d.verified.validation=h&&new URL(h).origin===new URL(a.url).origin?"VALID":"INVALID",d}const u=await this.client.core.verify.resolve({attestationId:s,hash:r,encryptedId:o,verifyUrl:a.verifyUrl});u&&(d.verified.origin=u.origin,d.verified.isScam=u.isScam,d.verified.validation=u.origin===new URL(a.url).origin?"VALID":"INVALID")}catch(u){this.client.logger.warn(u)}return this.client.logger.debug(`Verify context: ${JSON.stringify(d)}`),d}),z(this,"validateSessionProps",(i,s)=>{Object.values(i).forEach((r,o)=>{if(r==null){const{message:a}=W("MISSING_OR_INVALID",`${s} must contain an existing value for each key. Received: ${r} for key ${Object.keys(i)[o]}`);throw new Error(a)}})}),z(this,"getPendingAuthRequest",i=>{const s=this.client.auth.requests.get(i);return typeof s=="object"?s:void 0}),z(this,"addToRecentlyDeleted",(i,s)=>{if(this.recentlyDeletedMap.set(i,s),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let r=0;const o=this.recentlyDeletedLimit/2;for(const a of this.recentlyDeletedMap.keys()){if(r++>=o)break;this.recentlyDeletedMap.delete(a)}}}),z(this,"checkRecentlyDeleted",i=>{const s=this.recentlyDeletedMap.get(i);if(s){const{message:r}=W("MISSING_OR_INVALID",`Record was recently deleted - ${s}: ${i}`);throw new Error(r)}}),z(this,"isLinkModeEnabled",(i,s)=>{var r,o,a,c,d,u,h,p,g;return!i||s!==Xe.link_mode?!1:((o=(r=this.client.metadata)==null?void 0:r.redirect)==null?void 0:o.linkMode)===!0&&((c=(a=this.client.metadata)==null?void 0:a.redirect)==null?void 0:c.universal)!==void 0&&((u=(d=this.client.metadata)==null?void 0:d.redirect)==null?void 0:u.universal)!==""&&((h=i==null?void 0:i.redirect)==null?void 0:h.universal)!==void 0&&((p=i==null?void 0:i.redirect)==null?void 0:p.universal)!==""&&((g=i==null?void 0:i.redirect)==null?void 0:g.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(i.redirect.universal)&&typeof(J.g==null?void 0:J.g.Linking)<"u"}),z(this,"getAppLinkIfEnabled",(i,s)=>{var r;return this.isLinkModeEnabled(i,s)?(r=i==null?void 0:i.redirect)==null?void 0:r.universal:void 0}),z(this,"handleLinkModeMessage",({url:i})=>{if(!i||!i.includes("wc_ev")||!i.includes("topic"))return;const s=s0(i,"topic")||"",r=decodeURIComponent(s0(i,"wc_ev")||""),o=this.client.session.keys.includes(s);o&&this.client.session.update(s,{transportType:Xe.link_mode}),this.client.core.dispatchEnvelope({topic:s,message:r,sessionExists:o})}),z(this,"registerLinkModeListeners",async()=>{var i;if(_d()||Ss()&&(i=this.client.metadata.redirect)!=null&&i.linkMode){const s=J.g==null?void 0:J.g.Linking;if(typeof s<"u"){s.addEventListener("url",this.handleLinkModeMessage,this.client.name);const r=await s.getInitialURL();r&&setTimeout(()=>{this.handleLinkModeMessage({url:r})},50)}}}),z(this,"shouldSetTVF",(i,s)=>{if(!s||i!=="wc_sessionRequest")return!1;const{request:r}=s;return Object.keys(bg).includes(r.method)}),z(this,"getTVFParams",(i,s,r)=>{var o,a;try{const c=s.request.method,d=this.extractTxHashesFromResult(c,r);return $t(We({correlationId:i,rpcMethods:[c],chainId:s.chainId},this.isValidContractData(s.request.params)&&{contractAddresses:[(a=(o=s.request.params)==null?void 0:o[0])==null?void 0:a.to]}),{txHashes:d})}catch(c){this.client.logger.warn("Error getting TVF params",c)}return{}}),z(this,"isValidContractData",i=>{var s;if(!i)return!1;try{const r=(i==null?void 0:i.data)||((s=i==null?void 0:i[0])==null?void 0:s.data);if(!r.startsWith("0x"))return!1;const o=r.slice(2);return/^[0-9a-fA-F]*$/.test(o)?o.length%2===0:!1}catch{}return!1}),z(this,"extractTxHashesFromResult",(i,s)=>{try{const r=bg[i];if(typeof s=="string")return[s];const o=s[r.key];if(Ai(o))return i==="solana_signAllTransactions"?o.map(a=>I2(a)):o;if(typeof o=="string")return[o]}catch(r){this.client.logger.warn("Error extracting tx hashes from result",r)}return[]})}async processPendingMessageEvents(){try{const e=this.client.session.keys,i=this.client.core.relayer.messages.getWithoutAck(e);for(const[s,r]of Object.entries(i))for(const o of r)try{await this.onProviderMessageEvent({topic:s,message:o,publishedAt:Date.now()})}catch{this.client.logger.warn(`Error processing pending message event for topic: ${s}, message: ${o}`)}}catch(e){this.client.logger.warn("processPendingMessageEvents failed",e)}}isInitialized(){if(!this.initialized){const{message:e}=W("NOT_INITIALIZED",this.name);throw new Error(e)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(wt.message,e=>{this.onProviderMessageEvent(e)})}async onRelayMessage(e){const{topic:i,message:s,attestation:r,transportType:o}=e,{publicKey:a}=this.client.auth.authKeys.keys.includes(Tc)?this.client.auth.authKeys.get(Tc):{responseTopic:void 0,publicKey:void 0};try{const c=await this.client.core.crypto.decode(i,s,{receiverPublicKey:a,encoding:o===Xe.link_mode?Rs:Ii});(0,he.isJsonRpcRequest)(c)?(this.client.core.history.set(i,c),await this.onRelayEventRequest({topic:i,payload:c,attestation:r,transportType:o,encryptedId:Di(s)})):(0,he.isJsonRpcResponse)(c)?(await this.client.core.history.resolve(c),await this.onRelayEventResponse({topic:i,payload:c,transportType:o}),this.client.core.history.delete(i,c.id)):await this.onRelayEventUnknownPayload({topic:i,payload:c,transportType:o}),await this.client.core.relayer.messages.ack(i,s)}catch(c){this.client.logger.error(c)}}registerExpirerEvents(){this.client.core.expirer.on(ui.expired,async e=>{const{topic:i,id:s}=t0(e.target);if(s&&this.client.pendingRequest.keys.includes(s))return await this.deletePendingSessionRequest(s,W("EXPIRED"),!0);if(s&&this.client.auth.requests.keys.includes(s))return await this.deletePendingAuthRequest(s,W("EXPIRED"),!0);i?this.client.session.keys.includes(i)&&(await this.deleteSession({topic:i,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:i})):s&&(await this.deleteProposal(s,!0),this.client.events.emit("proposal_expire",{id:s}))})}registerPairingEvents(){this.client.core.pairing.events.on(ur.create,e=>this.onPairingCreated(e)),this.client.core.pairing.events.on(ur.delete,e=>{this.addToRecentlyDeleted(e.topic,"pairing")})}isValidPairingTopic(e){if(!ot(e,!1)){const{message:i}=W("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(i)}if(!this.client.core.pairing.pairings.keys.includes(e)){const{message:i}=W("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(i)}if(Ps(this.client.core.pairing.pairings.get(e).expiry)){const{message:i}=W("EXPIRED",`pairing topic: ${e}`);throw new Error(i)}}async isValidSessionTopic(e){if(!ot(e,!1)){const{message:i}=W("MISSING_OR_INVALID",`session topic should be a string: ${e}`);throw new Error(i)}if(this.checkRecentlyDeleted(e),!this.client.session.keys.includes(e)){const{message:i}=W("NO_MATCHING_KEY",`session topic doesn't exist: ${e}`);throw new Error(i)}if(Ps(this.client.session.get(e).expiry)){await this.deleteSession({topic:e});const{message:i}=W("EXPIRED",`session topic: ${e}`);throw new Error(i)}if(!this.client.core.crypto.keychain.has(e)){const{message:i}=W("MISSING_OR_INVALID",`session topic does not exist in keychain: ${e}`);throw await this.deleteSession({topic:e}),new Error(i)}}async isValidSessionOrPairingTopic(e){if(this.checkRecentlyDeleted(e),this.client.session.keys.includes(e))await this.isValidSessionTopic(e);else if(this.client.core.pairing.pairings.keys.includes(e))this.isValidPairingTopic(e);else if(ot(e,!1)){const{message:i}=W("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${e}`);throw new Error(i)}else{const{message:i}=W("MISSING_OR_INVALID",`session or pairing topic should be a string: ${e}`);throw new Error(i)}}async isValidProposalId(e){if(!Gb(e)){const{message:i}=W("MISSING_OR_INVALID",`proposal id should be a number: ${e}`);throw new Error(i)}if(!this.client.proposal.keys.includes(e)){const{message:i}=W("NO_MATCHING_KEY",`proposal id doesn't exist: ${e}`);throw new Error(i)}if(Ps(this.client.proposal.get(e).expiryTimestamp)){await this.deleteProposal(e);const{message:i}=W("EXPIRED",`proposal id: ${e}`);throw new Error(i)}}}class H_ extends gr{constructor(e,i){super(e,i,S_,mu),this.core=e,this.logger=i}}class q_ extends gr{constructor(e,i){super(e,i,N_,mu),this.core=e,this.logger=i}}class W_ extends gr{constructor(e,i){super(e,i,k_,mu,s=>s.id),this.core=e,this.logger=i}}class V_ extends gr{constructor(e,i){super(e,i,$_,Oc,()=>Tc),this.core=e,this.logger=i}}class K_ extends gr{constructor(e,i){super(e,i,L_,Oc),this.core=e,this.logger=i}}class G_ extends gr{constructor(e,i){super(e,i,B_,Oc,s=>s.id),this.core=e,this.logger=i}}var Z_=Object.defineProperty,Y_=(t,e,i)=>e in t?Z_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_u=(t,e,i)=>Y_(t,typeof e!="symbol"?e+"":e,i);class J_{constructor(e,i){this.core=e,this.logger=i,_u(this,"authKeys"),_u(this,"pairingTopics"),_u(this,"requests"),this.authKeys=new V_(this.core,this.logger),this.pairingTopics=new K_(this.core,this.logger),this.requests=new G_(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}var X_=Object.defineProperty,Q_=(t,e,i)=>e in t?X_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ie=(t,e,i)=>Q_(t,typeof e!="symbol"?e+"":e,i);class xu extends H3{constructor(e){super(e),Ie(this,"protocol",fg),Ie(this,"version",wg),Ie(this,"name",vu.name),Ie(this,"metadata"),Ie(this,"core"),Ie(this,"logger"),Ie(this,"events",new Qi.EventEmitter),Ie(this,"engine"),Ie(this,"session"),Ie(this,"proposal"),Ie(this,"pendingRequest"),Ie(this,"auth"),Ie(this,"signConfig"),Ie(this,"on",(s,r)=>this.events.on(s,r)),Ie(this,"once",(s,r)=>this.events.once(s,r)),Ie(this,"off",(s,r)=>this.events.off(s,r)),Ie(this,"removeListener",(s,r)=>this.events.removeListener(s,r)),Ie(this,"removeAllListeners",s=>this.events.removeAllListeners(s)),Ie(this,"connect",async s=>{try{return await this.engine.connect(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"pair",async s=>{try{return await this.engine.pair(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"approve",async s=>{try{return await this.engine.approve(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"reject",async s=>{try{return await this.engine.reject(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"update",async s=>{try{return await this.engine.update(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"extend",async s=>{try{return await this.engine.extend(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"request",async s=>{try{return await this.engine.request(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"respond",async s=>{try{return await this.engine.respond(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"ping",async s=>{try{return await this.engine.ping(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"emit",async s=>{try{return await this.engine.emit(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"disconnect",async s=>{try{return await this.engine.disconnect(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"find",s=>{try{return this.engine.find(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"getPendingSessionRequests",()=>{try{return this.engine.getPendingSessionRequests()}catch(s){throw this.logger.error(s.message),s}}),Ie(this,"authenticate",async(s,r)=>{try{return await this.engine.authenticate(s,r)}catch(o){throw this.logger.error(o.message),o}}),Ie(this,"formatAuthMessage",s=>{try{return this.engine.formatAuthMessage(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"approveSessionAuthenticate",async s=>{try{return await this.engine.approveSessionAuthenticate(s)}catch(r){throw this.logger.error(r.message),r}}),Ie(this,"rejectSessionAuthenticate",async s=>{try{return await this.engine.rejectSessionAuthenticate(s)}catch(r){throw this.logger.error(r.message),r}}),this.name=(e==null?void 0:e.name)||vu.name,this.metadata=Bv(e==null?void 0:e.metadata),this.signConfig=e==null?void 0:e.signConfig;const i=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:(0,xe.gw)((0,xe.jI)({level:(e==null?void 0:e.logger)||vu.logger}));this.core=(e==null?void 0:e.core)||new A_(e),this.logger=(0,xe.Ep)(i,this.name),this.session=new q_(this.core,this.logger),this.proposal=new H_(this.core,this.logger),this.pendingRequest=new W_(this.core,this.logger),this.engine=new F_(this),this.auth=new J_(this.core,this.logger)}static async init(e){const i=new xu(e);return await i.initialize(),i}get context(){return(0,xe.Fd)(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),setTimeout(()=>{this.engine.processRelayMessageCache()},(0,K.toMiliseconds)(K.ONE_SECOND))}catch(e){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(e.message),e}}}const tT=null,iT=null;var ki=J(51916),Rc=J(55872).Buffer;const xg="error",e8="wss://relay.walletconnect.org",t8="wc",i8="universal_provider",$c=`${t8}@2:${i8}:`,Cg="https://rpc.walletconnect.org/v1/",_n="generic",s8=`${Cg}bundler`,hi={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};function r8(){}function Cu(t){return t==null||typeof t!="object"&&typeof t!="function"}function Eu(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function n8(t){if(Cu(t))return t;if(Array.isArray(t)||Eu(t)||t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);const e=Object.getPrototypeOf(t),i=e.constructor;if(t instanceof Date||t instanceof Map||t instanceof Set)return new i(t);if(t instanceof RegExp){const s=new i(t);return s.lastIndex=t.lastIndex,s}if(t instanceof DataView)return new i(t.buffer.slice(0));if(t instanceof Error){const s=new i(t.message);return s.stack=t.stack,s.name=t.name,s.cause=t.cause,s}if(typeof File<"u"&&t instanceof File)return new i([t],t.name,{type:t.type,lastModified:t.lastModified});if(typeof t=="object"){const s=Object.create(e);return Object.assign(s,t)}return t}function Eg(t){return typeof t=="object"&&t!==null}function Ig(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function Ag(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const o8="[object RegExp]",Sg="[object String]",Ng="[object Number]",Pg="[object Boolean]",kg="[object Arguments]",a8="[object Symbol]",c8="[object Date]",l8="[object Map]",d8="[object Set]",u8="[object Array]",h8="[object ArrayBuffer]",p8="[object Object]",g8="[object DataView]",f8="[object Uint8Array]",w8="[object Uint8ClampedArray]",m8="[object Uint16Array]",v8="[object Uint32Array]",y8="[object Int8Array]",b8="[object Int16Array]",_8="[object Int32Array]",x8="[object Float32Array]",C8="[object Float64Array]";function E8(t,e){return xn(t,void 0,t,new Map,e)}function xn(t,e,i,s=new Map,r=void 0){const o=r==null?void 0:r(t,e,i,s);if(o!=null)return o;if(Cu(t))return t;if(s.has(t))return s.get(t);if(Array.isArray(t)){const a=new Array(t.length);s.set(t,a);for(let c=0;c<t.length;c++)a[c]=xn(t[c],c,i,s,r);return Object.hasOwn(t,"index")&&(a.index=t.index),Object.hasOwn(t,"input")&&(a.input=t.input),a}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp){const a=new RegExp(t.source,t.flags);return a.lastIndex=t.lastIndex,a}if(t instanceof Map){const a=new Map;s.set(t,a);for(const[c,d]of t)a.set(c,xn(d,c,i,s,r));return a}if(t instanceof Set){const a=new Set;s.set(t,a);for(const c of t)a.add(xn(c,void 0,i,s,r));return a}if(typeof Rc<"u"&&Rc.isBuffer(t))return t.subarray();if(Eu(t)){const a=new(Object.getPrototypeOf(t)).constructor(t.length);s.set(t,a);for(let c=0;c<t.length;c++)a[c]=xn(t[c],c,i,s,r);return a}if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);if(t instanceof DataView){const a=new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);return s.set(t,a),fr(a,t,i,s,r),a}if(typeof File<"u"&&t instanceof File){const a=new File([t],t.name,{type:t.type});return s.set(t,a),fr(a,t,i,s,r),a}if(t instanceof Blob){const a=new Blob([t],{type:t.type});return s.set(t,a),fr(a,t,i,s,r),a}if(t instanceof Error){const a=new t.constructor;return s.set(t,a),a.message=t.message,a.name=t.name,a.stack=t.stack,a.cause=t.cause,fr(a,t,i,s,r),a}if(typeof t=="object"&&I8(t)){const a=Object.create(Object.getPrototypeOf(t));return s.set(t,a),fr(a,t,i,s,r),a}return t}function fr(t,e,i=t,s,r){const o=[...Object.keys(e),...Ig(e)];for(let a=0;a<o.length;a++){const c=o[a],d=Object.getOwnPropertyDescriptor(t,c);(d==null||d.writable)&&(t[c]=xn(e[c],c,i,s,r))}}function I8(t){switch(Ag(t)){case kg:case u8:case h8:case g8:case Pg:case c8:case x8:case C8:case y8:case b8:case _8:case l8:case Ng:case p8:case o8:case d8:case Sg:case a8:case f8:case w8:case m8:case v8:return!0;default:return!1}}function A8(t,e){return E8(t,(i,s,r,o)=>{const a=e==null?void 0:e(i,s,r,o);if(a!=null)return a;if(typeof t=="object")switch(Object.prototype.toString.call(t)){case Ng:case Sg:case Pg:{const c=new t.constructor(t==null?void 0:t.valueOf());return fr(c,t),c}case kg:{const c={};return fr(c,t),c.length=t.length,c[Symbol.iterator]=t[Symbol.iterator],c}default:return}})}function Og(t){return A8(t)}function Tg(t){return t!==null&&typeof t=="object"&&Ag(t)==="[object Arguments]"}function S8(t){return Eu(t)}function N8(t){var i;if(typeof t!="object"||t==null)return!1;if(Object.getPrototypeOf(t)===null)return!0;if(Object.prototype.toString.call(t)!=="[object Object]"){const s=t[Symbol.toStringTag];return s==null||!((i=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag))!=null&&i.writable)?!1:t.toString()===`[object ${s}]`}let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function P8(t,...e){const i=e.slice(0,-1),s=e[e.length-1];let r=t;for(let o=0;o<i.length;o++){const a=i[o];r=Iu(r,a,s,new Map)}return r}function Iu(t,e,i,s){if(Cu(t)&&(t=Object(t)),e==null||typeof e!="object")return t;if(s.has(e))return n8(s.get(e));if(s.set(e,t),Array.isArray(e)){e=e.slice();for(let o=0;o<e.length;o++)e[o]=e[o]??void 0}const r=[...Object.keys(e),...Ig(e)];for(let o=0;o<r.length;o++){const a=r[o];let c=e[a],d=t[a];if(Tg(c)&&(c={...c}),Tg(d)&&(d={...d}),typeof Rc<"u"&&Rc.isBuffer(c)&&(c=Og(c)),Array.isArray(c))if(typeof d=="object"&&d!=null){const h=[],p=Reflect.ownKeys(d);for(let g=0;g<p.length;g++){const f=p[g];h[f]=d[f]}d=h}else d=[];const u=i(d,c,a,t,e,s);u!=null?t[a]=u:Array.isArray(c)||Eg(d)&&Eg(c)?t[a]=Iu(d,c,i,s):d==null&&N8(c)?t[a]=Iu({},c,i,s):d==null&&S8(c)?t[a]=Og(c):(d===void 0||c!==void 0)&&(t[a]=c)}return t}function k8(t,...e){return P8(t,...e,r8)}var O8=Object.defineProperty,T8=Object.defineProperties,R8=Object.getOwnPropertyDescriptors,Rg=Object.getOwnPropertySymbols,$8=Object.prototype.hasOwnProperty,L8=Object.prototype.propertyIsEnumerable,$g=(t,e,i)=>e in t?O8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Lc=(t,e)=>{for(var i in e||(e={}))$8.call(e,i)&&$g(t,i,e[i]);if(Rg)for(var i of Rg(e))L8.call(e,i)&&$g(t,i,e[i]);return t},B8=(t,e)=>T8(t,R8(e));function ti(t,e,i){var s;const r=tr(t);return((s=e.rpcMap)==null?void 0:s[r.reference])||`${Cg}?chainId=${r.namespace}:${r.reference}&projectId=${i}`}function wr(t){return t.includes(":")?t.split(":")[1]:t}function Lg(t){return t.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function U8(t,e){const i=Object.keys(e.namespaces).filter(r=>r.includes(t));if(!i.length)return[];const s=[];return i.forEach(r=>{const o=e.namespaces[r].accounts;s.push(...o)}),s}function Au(t={},e={}){const i=Bg(t),s=Bg(e);return k8(i,s)}function Bg(t){var e,i,s,r;const o={};if(!wn(t))return o;for(const[a,c]of Object.entries(t)){const d=Cc(a)?[a]:c.chains,u=c.methods||[],h=c.events||[],p=c.rpcMap||{},g=fn(a);o[g]=B8(Lc(Lc({},o[g]),c),{chains:Ci(d,(e=o[g])==null?void 0:e.chains),methods:Ci(u,(i=o[g])==null?void 0:i.methods),events:Ci(h,(s=o[g])==null?void 0:s.events),rpcMap:Lc(Lc({},p),(r=o[g])==null?void 0:r.rpcMap)})}return o}function Ug(t){return t.includes(":")?t.split(":")[2]:t}function Mg(t){const e={};for(const[i,s]of Object.entries(t)){const r=s.methods||[],o=s.events||[],a=s.accounts||[],c=Cc(i)?[i]:s.chains?s.chains:Lg(s.accounts);e[i]={chains:c,methods:r,events:o,accounts:a}}return e}function Su(t){return typeof t=="number"?t:t.includes("0x")?parseInt(t,16):(t=t.includes(":")?t.split(":")[1]:t,isNaN(Number(t))?t:Number(t))}const Dg={},$e=t=>Dg[t],Nu=(t,e)=>{Dg[t]=e};var M8=Object.defineProperty,D8=(t,e,i)=>e in t?M8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Cn=(t,e,i)=>D8(t,typeof e!="symbol"?e+"":e,i);class j8{constructor(e){Cn(this,"name","polkadot"),Cn(this,"client"),Cn(this,"httpProviders"),Cn(this,"events"),Cn(this,"namespace"),Cn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;const r=wr(i);e[r]=this.createHttpProvider(r,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var z8=Object.defineProperty,F8=Object.defineProperties,H8=Object.getOwnPropertyDescriptors,jg=Object.getOwnPropertySymbols,q8=Object.prototype.hasOwnProperty,W8=Object.prototype.propertyIsEnumerable,Pu=(t,e,i)=>e in t?z8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,zg=(t,e)=>{for(var i in e||(e={}))q8.call(e,i)&&Pu(t,i,e[i]);if(jg)for(var i of jg(e))W8.call(e,i)&&Pu(t,i,e[i]);return t},Fg=(t,e)=>F8(t,H8(e)),En=(t,e,i)=>Pu(t,typeof e!="symbol"?e+"":e,i);class V8{constructor(e){En(this,"name","eip155"),En(this,"client"),En(this,"chainId"),En(this,"namespace"),En(this,"httpProviders"),En(this,"events"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(parseInt(e),i),this.chainId=parseInt(e),this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,i){const s=i||ti(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.k(s,$e("disableProviderPing")))}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;const r=parseInt(wr(i));e[r]=this.createHttpProvider(r,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}getHttpProvider(){const e=this.chainId,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}async handleSwitchChain(e){var i,s;let r=e.request.params?(i=e.request.params[0])==null?void 0:i.chainId:"0x0";r=r.startsWith("0x")?r:`0x${r}`;const o=parseInt(r,16);if(this.isChainApproved(o))this.setDefaultChain(`${o}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:r}]},chainId:(s=this.namespace.chains)==null?void 0:s[0]}),this.setDefaultChain(`${o}`);else throw new Error(`Failed to switch to chain 'eip155:${o}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var i,s,r;const o=(s=(i=e.request)==null?void 0:i.params)==null?void 0:s[0];if(!o)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const a=this.client.session.get(e.topic),c=((r=a==null?void 0:a.sessionProperties)==null?void 0:r.capabilities)||{};if(c!=null&&c[o])return c==null?void 0:c[o];const d=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:Fg(zg({},a.sessionProperties||{}),{capabilities:Fg(zg({},c||{}),{[o]:d})})})}catch(u){console.warn("Failed to update session with capabilities",u)}return d}async getCallStatus(e){var i,s;const r=this.client.session.get(e.topic),o=(i=r.sessionProperties)==null?void 0:i.bundler_name;if(o){const c=this.getBundlerUrl(e.chainId,o);try{return await this.getUserOperationReceipt(c,e)}catch(d){console.warn("Failed to fetch call status from bundler",d,c)}}const a=(s=r.sessionProperties)==null?void 0:s.bundler_url;if(a)try{return await this.getUserOperationReceipt(a,e)}catch(c){console.warn("Failed to fetch call status from custom bundler",c,a)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,i){var s;const r=new URL(e),o=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,he.formatJsonRpcRequest)("eth_getUserOperationReceipt",[(s=i.request.params)==null?void 0:s[0]]))});if(!o.ok)throw new Error(`Failed to fetch user operation receipt - ${o.status}`);return await o.json()}getBundlerUrl(e,i){return`${s8}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${i}`}}var K8=Object.defineProperty,G8=(t,e,i)=>e in t?K8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,In=(t,e,i)=>G8(t,typeof e!="symbol"?e+"":e,i);class Z8{constructor(e){In(this,"name","solana"),In(this,"client"),In(this,"httpProviders"),In(this,"events"),In(this,"namespace"),In(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;const r=wr(i);e[r]=this.createHttpProvider(r,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var Y8=Object.defineProperty,J8=(t,e,i)=>e in t?Y8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,An=(t,e,i)=>J8(t,typeof e!="symbol"?e+"":e,i);class X8{constructor(e){An(this,"name","cosmos"),An(this,"client"),An(this,"httpProviders"),An(this,"events"),An(this,"namespace"),An(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;const r=wr(i);e[r]=this.createHttpProvider(r,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var Q8=Object.defineProperty,e9=(t,e,i)=>e in t?Q8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Sn=(t,e,i)=>e9(t,typeof e!="symbol"?e+"":e,i);class t9{constructor(e){Sn(this,"name","algorand"),Sn(this,"client"),Sn(this,"httpProviders"),Sn(this,"events"),Sn(this,"namespace"),Sn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){if(!this.httpProviders[e]){const s=i||ti(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,s)}this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);return typeof s>"u"?void 0:new li.r(new ki.Z(s,$e("disableProviderPing")))}}var i9=Object.defineProperty,s9=(t,e,i)=>e in t?i9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Nn=(t,e,i)=>s9(t,typeof e!="symbol"?e+"":e,i);class r9{constructor(e){Nn(this,"name","cip34"),Nn(this,"client"),Nn(this,"httpProviders"),Nn(this,"events"),Nn(this,"namespace"),Nn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{const s=this.getCardanoRPCUrl(i),r=wr(i);e[r]=this.createHttpProvider(r,s)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}getCardanoRPCUrl(e){const i=this.namespace.rpcMap;if(i)return i[e]}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||this.getCardanoRPCUrl(e);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var n9=Object.defineProperty,o9=(t,e,i)=>e in t?n9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Pn=(t,e,i)=>o9(t,typeof e!="symbol"?e+"":e,i);class a9{constructor(e){Pn(this,"name","elrond"),Pn(this,"client"),Pn(this,"httpProviders"),Pn(this,"events"),Pn(this,"namespace"),Pn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;const r=wr(i);e[r]=this.createHttpProvider(r,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var c9=Object.defineProperty,l9=(t,e,i)=>e in t?c9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,kn=(t,e,i)=>l9(t,typeof e!="symbol"?e+"":e,i);class d9{constructor(e){kn(this,"name","multiversx"),kn(this,"client"),kn(this,"httpProviders"),kn(this,"events"),kn(this,"namespace"),kn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;const r=wr(i);e[r]=this.createHttpProvider(r,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var u9=Object.defineProperty,h9=(t,e,i)=>e in t?u9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Tn=(t,e,i)=>h9(t,typeof e!="symbol"?e+"":e,i);class p9{constructor(e){Tn(this,"name","near"),Tn(this,"client"),Tn(this,"httpProviders"),Tn(this,"events"),Tn(this,"namespace"),Tn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){if(this.chainId=e,!this.httpProviders[e]){const s=i||ti(`${this.name}:${e}`,this.namespace);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,s)}this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{var s;e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[i])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace);return typeof s>"u"?void 0:new li.r(new ki.Z(s,$e("disableProviderPing")))}}var g9=Object.defineProperty,f9=(t,e,i)=>e in t?g9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Rn=(t,e,i)=>f9(t,typeof e!="symbol"?e+"":e,i);class w9{constructor(e){Rn(this,"name","tezos"),Rn(this,"client"),Rn(this,"httpProviders"),Rn(this,"events"),Rn(this,"namespace"),Rn(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,i){if(this.chainId=e,!this.httpProviders[e]){const s=i||ti(`${this.name}:${e}`,this.namespace);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,s)}this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(i=>{e[i]=this.createHttpProvider(i)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace);return typeof s>"u"?void 0:new li.r(new ki.Z(s))}}var m9=Object.defineProperty,v9=(t,e,i)=>e in t?m9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$n=(t,e,i)=>v9(t,typeof e!="symbol"?e+"":e,i);class y9{constructor(e){$n(this,"name",_n),$n(this,"client"),$n(this,"httpProviders"),$n(this,"events"),$n(this,"namespace"),$n(this,"chainId"),this.namespace=e.namespace,this.events=$e("events"),this.client=$e("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,i){this.httpProviders[e]||this.setHttpProvider(e,i),this.chainId=e,this.events.emit(hi.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){var e,i;const s={};return(i=(e=this.namespace)==null?void 0:e.accounts)==null||i.forEach(r=>{const o=tr(r);s[`${o.namespace}:${o.reference}`]=this.createHttpProvider(r)}),s}getHttpProvider(e){const i=this.httpProviders[e];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,i){const s=this.createHttpProvider(e,i);s&&(this.httpProviders[e]=s)}createHttpProvider(e,i){const s=i||ti(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new li.r(new ki.Z(s,$e("disableProviderPing")))}}var b9=Object.defineProperty,_9=Object.defineProperties,x9=Object.getOwnPropertyDescriptors,Hg=Object.getOwnPropertySymbols,C9=Object.prototype.hasOwnProperty,E9=Object.prototype.propertyIsEnumerable,ku=(t,e,i)=>e in t?b9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Bc=(t,e)=>{for(var i in e||(e={}))C9.call(e,i)&&ku(t,i,e[i]);if(Hg)for(var i of Hg(e))E9.call(e,i)&&ku(t,i,e[i]);return t},Ou=(t,e)=>_9(t,x9(e)),pi=(t,e,i)=>ku(t,typeof e!="symbol"?e+"":e,i);class Uc{constructor(e){pi(this,"client"),pi(this,"namespaces"),pi(this,"optionalNamespaces"),pi(this,"sessionProperties"),pi(this,"scopedProperties"),pi(this,"events",new(wd())),pi(this,"rpcProviders",{}),pi(this,"session"),pi(this,"providerOpts"),pi(this,"logger"),pi(this,"uri"),pi(this,"disableProviderPing",!1),this.providerOpts=e,this.logger=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:(0,xe.gw)((0,xe.jI)({level:(e==null?void 0:e.logger)||xg})),this.disableProviderPing=(e==null?void 0:e.disableProviderPing)||!1}static async init(e){const i=new Uc(e);return await i.initialize(),i}async request(e,i,s){const[r,o]=this.validateChain(i);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(r).request({request:Bc({},e),chainId:`${r}:${o}`,topic:this.session.topic,expiry:s})}sendAsync(e,i,s,r){const o=new Date().getTime();this.request(e,s,r).then(a=>i(null,(0,he.formatJsonRpcResult)(o,a))).catch(a=>i(a,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:De("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,i){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:s,response:r}=await this.client.authenticate(e,i);s&&(this.uri=s,this.events.emit("display_uri",s));const o=await r();if(this.session=o.session,this.session){const a=Mg(this.session.namespaces);this.namespaces=Au(this.namespaces,a),await this.persist("namespaces",this.namespaces),this.onConnect()}return o}on(e,i){this.events.on(e,i)}once(e,i){this.events.once(e,i)}removeListener(e,i){this.events.removeListener(e,i)}off(e,i){this.events.off(e,i)}get isWalletConnect(){return!0}async pair(e){const{uri:i,approval:s}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties});i&&(this.uri=i,this.events.emit("display_uri",i));const r=await s();this.session=r;const o=Mg(r.namespaces);return this.namespaces=Au(this.namespaces,o),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(e,i){try{if(!this.session)return;const[s,r]=this.validateChain(e),o=this.getProvider(s);o.name===_n?o.setDefaultChain(`${s}:${r}`,i):o.setDefaultChain(r,i)}catch(s){if(!/Please call connect/.test(s.message))throw s}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const i=this.client.pairing.getAll();if(Ai(i)){for(const s of i)e.deletePairings?this.client.core.expirer.set(s.topic,0):await this.client.core.relayer.subscriber.unsubscribe(s.topic);this.logger.info(`Inactive pairings cleared: ${i.length}`)}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders()}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){var e,i;if(this.client=this.providerOpts.client||await xu.init({core:this.providerOpts.core,logger:this.providerOpts.logger||xg,relayUrl:this.providerOpts.relayUrl||e8,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic)}catch(s){throw this.logger.error("Failed to get session",s),new Error(`The provided session: ${(i=(e=this.providerOpts)==null?void 0:e.session)==null?void 0:i.topic} doesn't exist in the Sign client`)}else{const s=this.client.session.getAll();this.session=s[0]}this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(i=>fn(i)))];Nu("client",this.client),Nu("events",this.events),Nu("disableProviderPing",this.disableProviderPing),e.forEach(i=>{if(!this.session)return;const s=U8(i,this.session),r=Lg(s),o=Au(this.namespaces,this.optionalNamespaces),a=Ou(Bc({},o[i]),{accounts:s,chains:r});switch(i){case"eip155":this.rpcProviders[i]=new V8({namespace:a});break;case"algorand":this.rpcProviders[i]=new t9({namespace:a});break;case"solana":this.rpcProviders[i]=new Z8({namespace:a});break;case"cosmos":this.rpcProviders[i]=new X8({namespace:a});break;case"polkadot":this.rpcProviders[i]=new j8({namespace:a});break;case"cip34":this.rpcProviders[i]=new r9({namespace:a});break;case"elrond":this.rpcProviders[i]=new a9({namespace:a});break;case"multiversx":this.rpcProviders[i]=new d9({namespace:a});break;case"near":this.rpcProviders[i]=new p9({namespace:a});break;case"tezos":this.rpcProviders[i]=new w9({namespace:a});break;default:this.rpcProviders[_n]?this.rpcProviders[_n].updateNamespace(a):this.rpcProviders[_n]=new y9({namespace:a})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{var i;const{topic:s}=e;s===((i=this.session)==null?void 0:i.topic)&&this.events.emit("session_ping",e)}),this.client.on("session_event",e=>{var i;const{params:s,topic:r}=e;if(r!==((i=this.session)==null?void 0:i.topic))return;const{event:o}=s;if(o.name==="accountsChanged"){const a=o.data;a&&Ai(a)&&this.events.emit("accountsChanged",a.map(Ug))}else if(o.name==="chainChanged"){const a=s.chainId,c=s.event.data,d=fn(a),u=Su(a)!==Su(c)?`${d}:${Su(c)}`:a;this.onChainChanged(u)}else this.events.emit(o.name,o.data);this.events.emit("session_event",e)}),this.client.on("session_update",({topic:e,params:i})=>{var s,r;if(e!==((s=this.session)==null?void 0:s.topic))return;const{namespaces:o}=i,a=(r=this.client)==null?void 0:r.session.get(e);this.session=Ou(Bc({},a),{namespaces:o}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:i})}),this.client.on("session_delete",async e=>{var i;e.topic===((i=this.session)==null?void 0:i.topic)&&(await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",Ou(Bc({},De("USER_DISCONNECTED")),{data:e.topic})))}),this.on(hi.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(e,!0)})}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[_n]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var i;this.getProvider(e).updateNamespace((i=this.session)==null?void 0:i.namespaces[e])})}setNamespaces(e){const{namespaces:i,optionalNamespaces:s,sessionProperties:r,scopedProperties:o}=e;i&&Object.keys(i).length&&(this.namespaces=i),s&&Object.keys(s).length&&(this.optionalNamespaces=s),this.sessionProperties=r,this.scopedProperties=o}validateChain(e){const[i,s]=(e==null?void 0:e.split(":"))||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[i,s];if(i&&!Object.keys(this.namespaces||{}).map(a=>fn(a)).includes(i))throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);if(i&&s)return[i,s];const r=fn(Object.keys(this.namespaces)[0]),o=this.rpcProviders[r].getDefaultChain();return[r,o]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}async onChainChanged(e,i=!1){if(!this.namespaces)return;const[s,r]=this.validateChain(e);if(!r)return;this.updateNamespaceChain(s,r),this.events.emit("chainChanged",r);const o=this.getProvider(s).getDefaultChain();i||this.getProvider(s).setDefaultChain(r),this.emitAccountsChangedOnChainChange({namespace:s,previousChainId:o,newChainId:e}),await this.persist("namespaces",this.namespaces)}emitAccountsChangedOnChainChange({namespace:e,previousChainId:i,newChainId:s}){var r,o;try{if(i===s)return;const a=(o=(r=this.session)==null?void 0:r.namespaces[e])==null?void 0:o.accounts;if(!a)return;const c=a.filter(d=>d.includes(`${s}:`)).map(Ug);if(!Ai(c))return;this.events.emit("accountsChanged",c)}catch(a){this.logger.warn("Failed to emit accountsChanged on chain change",a)}}updateNamespaceChain(e,i){if(!this.namespaces)return;const s=this.namespaces[e]?e:`${e}:${i}`,r={chains:[],methods:[],events:[],defaultChain:i};this.namespaces[s]?this.namespaces[s]&&(this.namespaces[s].defaultChain=i):this.namespaces[s]=r}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,await this.cleanupPendingPairings({deletePairings:!0}),await this.cleanupStorage()}async persist(e,i){var s;const r=((s=this.session)==null?void 0:s.topic)||"";await this.client.core.storage.setItem(`${$c}/${e}${r}`,i)}async getFromStore(e){var i;const s=((i=this.session)==null?void 0:i.topic)||"";return await this.client.core.storage.getItem(`${$c}/${e}${s}`)}async deleteFromStore(e){var i;const s=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.removeItem(`${$c}/${e}${s}`)}async cleanupStorage(){var e;try{if(((e=this.client)==null?void 0:e.session.length)>0)return;const i=await this.client.core.storage.getKeys();for(const s of i)s.startsWith($c)&&await this.client.core.storage.removeItem(s)}catch(i){this.logger.warn("Failed to cleanup storage",i)}}}const I9=Uc;var Mo=J(14224);const A9="wc",S9="ethereum_provider",N9=`${A9}@2:${S9}:`,P9="https://rpc.walletconnect.org/v1/",Tu=["eth_sendTransaction","personal_sign"],k9=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],Ru=["chainChanged","accountsChanged"],O9=["chainChanged","accountsChanged","message","disconnect","connect"];var T9=Object.defineProperty,R9=Object.defineProperties,$9=Object.getOwnPropertyDescriptors,qg=Object.getOwnPropertySymbols,L9=Object.prototype.hasOwnProperty,B9=Object.prototype.propertyIsEnumerable,$u=(t,e,i)=>e in t?T9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,mr=(t,e)=>{for(var i in e||(e={}))L9.call(e,i)&&$u(t,i,e[i]);if(qg)for(var i of qg(e))B9.call(e,i)&&$u(t,i,e[i]);return t},Do=(t,e)=>R9(t,$9(e)),ii=(t,e,i)=>$u(t,typeof e!="symbol"?e+"":e,i);function Mc(t){return Number(t[0].split(":")[1])}function Dc(t){return`0x${t.toString(16)}`}function U9(t){const{chains:e,optionalChains:i,methods:s,optionalMethods:r,events:o,optionalEvents:a,rpcMap:c}=t;if(!Ai(e))throw new Error("Invalid chains");const d={chains:e,methods:s||Tu,events:o||Ru,rpcMap:mr({},e.length?{[Mc(e)]:c[Mc(e)]}:{})},u=o==null?void 0:o.filter(f=>!Ru.includes(f)),h=s==null?void 0:s.filter(f=>!Tu.includes(f));if(!i&&!a&&!r&&!(u!=null&&u.length)&&!(h!=null&&h.length))return{required:e.length?d:void 0};const p=(u==null?void 0:u.length)&&(h==null?void 0:h.length)||!i,g={chains:[...new Set(p?d.chains.concat(i||[]):i)],methods:[...new Set(d.methods.concat(r!=null&&r.length?r:k9))],events:[...new Set(d.events.concat(a!=null&&a.length?a:O9))],rpcMap:c};return{required:e.length?d:void 0,optional:i.length?g:void 0}}class Lu{constructor(){ii(this,"events",new Qi.EventEmitter),ii(this,"namespace","eip155"),ii(this,"accounts",[]),ii(this,"signer"),ii(this,"chainId",1),ii(this,"modal"),ii(this,"rpc"),ii(this,"STORAGE_KEY",N9),ii(this,"on",(e,i)=>(this.events.on(e,i),this)),ii(this,"once",(e,i)=>(this.events.once(e,i),this)),ii(this,"removeListener",(e,i)=>(this.events.removeListener(e,i),this)),ii(this,"off",(e,i)=>(this.events.off(e,i),this)),ii(this,"parseAccount",e=>this.isCompatibleChainId(e)?this.parseAccountId(e).address:e),this.signer={},this.rpc={}}static async init(e){const i=new Lu;return await i.initialize(e),i}async request(e,i){return await this.signer.request(e,this.formatChainId(this.chainId),i)}sendAsync(e,i,s){this.signer.sendAsync(e,i,this.formatChainId(this.chainId),s)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(e){var i;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(e);const{required:s,optional:r}=U9(this.rpc);try{const o=await new Promise(async(c,d)=>{var u,h;this.rpc.showQrModal&&((u=this.modal)==null||u.open(),(h=this.modal)==null||h.subscribeState(g=>{!g.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),d(new Error("Connection request reset. Please try again.")))}));const p=e!=null&&e.scopedProperties?{[this.namespace]:e.scopedProperties}:void 0;await this.signer.connect(Do(mr({namespaces:mr({},s&&{[this.namespace]:s})},r&&{optionalNamespaces:{[this.namespace]:r}}),{pairingTopic:e==null?void 0:e.pairingTopic,scopedProperties:p})).then(g=>{c(g)}).catch(g=>{var f;(f=this.modal)==null||f.showErrorMessage("Unable to connect"),d(new Error(g.message))})});if(!o)return;const a=Vp(o.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:a),this.setAccounts(a),this.events.emit("connect",{chainId:Dc(this.chainId)})}catch(o){throw this.signer.logger.error(o),o}finally{(i=this.modal)==null||i.close()}}async authenticate(e,i){var s;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:e==null?void 0:e.chains});try{const r=await new Promise(async(a,c)=>{var d,u;this.rpc.showQrModal&&((d=this.modal)==null||d.open(),(u=this.modal)==null||u.subscribeState(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(Do(mr({},e),{chains:this.rpc.chains}),i).then(h=>{a(h)}).catch(h=>{var p;(p=this.modal)==null||p.showErrorMessage("Unable to connect"),c(new Error(h.message))})}),o=r.session;if(o){const a=Vp(o.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:a),this.setAccounts(a),this.events.emit("connect",{chainId:Dc(this.chainId)})}return r}catch(r){throw this.signer.logger.error(r),r}finally{(s=this.modal)==null||s.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",e=>{const{params:i}=e,{event:s}=i;s.name==="accountsChanged"?(this.accounts=this.parseAccounts(s.data),this.events.emit("accountsChanged",this.accounts)):s.name==="chainChanged"?this.setChainId(this.formatChainId(s.data)):this.events.emit(s.name,s.data),this.events.emit("session_event",e)}),this.signer.on("accountsChanged",e=>{this.accounts=this.parseAccounts(e),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",e=>{const i=parseInt(e);this.chainId=i,this.events.emit("chainChanged",Dc(this.chainId)),this.persist()}),this.signer.on("session_update",e=>{this.events.emit("session_update",e)}),this.signer.on("session_delete",e=>{this.reset(),this.events.emit("session_delete",e),this.events.emit("disconnect",Do(mr({},De("USER_DISCONNECTED")),{data:e.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",e=>{this.events.emit("display_uri",e)})}switchEthereumChain(e){this.request({method:"wallet_switchEthereumChain",params:[{chainId:e.toString(16)}]})}isCompatibleChainId(e){return typeof e=="string"?e.startsWith(`${this.namespace}:`):!1}formatChainId(e){return`${this.namespace}:${e}`}parseChainId(e){return Number(e.split(":")[1])}setChainIds(e){const i=e.filter(s=>this.isCompatibleChainId(s)).map(s=>this.parseChainId(s));i.length&&(this.chainId=i[0],this.events.emit("chainChanged",Dc(this.chainId)),this.persist())}setChainId(e){if(this.isCompatibleChainId(e)){const i=this.parseChainId(e);this.chainId=i,this.switchEthereumChain(i)}}parseAccountId(e){const[i,s,r]=e.split(":");return{chainId:`${i}:${s}`,address:r}}setAccounts(e){this.accounts=e.filter(i=>this.parseChainId(this.parseAccountId(i).chainId)===this.chainId).map(i=>this.parseAccountId(i).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(e){var i,s;const r=(i=e==null?void 0:e.chains)!=null?i:[],o=(s=e==null?void 0:e.optionalChains)!=null?s:[],a=r.concat(o);if(!a.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const c=r.length?(e==null?void 0:e.methods)||Tu:[],d=r.length?(e==null?void 0:e.events)||Ru:[],u=(e==null?void 0:e.optionalMethods)||[],h=(e==null?void 0:e.optionalEvents)||[],p=(e==null?void 0:e.rpcMap)||this.buildRpcMap(a,e.projectId),g=(e==null?void 0:e.qrModalOptions)||void 0;return{chains:r==null?void 0:r.map(f=>this.formatChainId(f)),optionalChains:o.map(f=>this.formatChainId(f)),methods:c,events:d,optionalMethods:u,optionalEvents:h,rpcMap:p,showQrModal:!!(e!=null&&e.showQrModal),qrModalOptions:g,projectId:e.projectId,metadata:e.metadata}}buildRpcMap(e,i){const s={};return e.forEach(r=>{s[r]=this.getRpcUrl(r,i)}),s}async initialize(e){if(this.rpc=this.getRpcConfig(e),this.chainId=this.rpc.chains.length?Mc(this.rpc.chains):Mc(this.rpc.optionalChains),this.signer=await I9.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:e.disableProviderPing,relayUrl:e.relayUrl,storage:e.storage,storageOptions:e.storageOptions,customStoragePrefix:e.customStoragePrefix,telemetryEnabled:e.telemetryEnabled,logger:e.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let i;try{const{createAppKit:s}=await Promise.resolve().then(function(){return QI}),{convertWCMToAppKitOptions:r}=await Promise.resolve().then(function(){return dA}),o=r(Do(mr({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!o.networks.length)throw new Error("No networks found for WalletConnect\xB7");i=s(Do(mr({},o),{universalProvider:this.signer,manualWCControl:!0}))}catch{throw new Error("To use QR modal, please install @reown/appkit package")}if(i)try{this.modal=i}catch(s){throw this.signer.logger.error(s),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(e){if(!e)return;const{chains:i,optionalChains:s,rpcMap:r}=e;i&&Ai(i)&&(this.rpc.chains=i.map(o=>this.formatChainId(o)),i.forEach(o=>{this.rpc.rpcMap[o]=(r==null?void 0:r[o])||this.getRpcUrl(o)})),s&&Ai(s)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=s==null?void 0:s.map(o=>this.formatChainId(o)),s.forEach(o=>{this.rpc.rpcMap[o]=(r==null?void 0:r[o])||this.getRpcUrl(o)}))}getRpcUrl(e,i){var s;return((s=this.rpc.rpcMap)==null?void 0:s[e])||`${P9}?chainId=eip155:${e}&projectId=${i||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const e=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),i=this.session.namespaces[`${this.namespace}:${e}`]?this.session.namespaces[`${this.namespace}:${e}`]:this.session.namespaces[this.namespace];this.setChainIds(e?[this.formatChainId(e)]:i==null?void 0:i.accounts),this.setAccounts(i==null?void 0:i.accounts)}catch(e){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(e),await this.disconnect().catch(i=>this.signer.logger.warn(i))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(e){return typeof e=="string"||e instanceof String?[this.parseAccount(e)]:e.map(i=>this.parseAccount(i))}}const M9=Lu;var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof J.g<"u"?J.g:typeof self<"u"?self:{},Wg={exports:{}};(function(t,e){(function(i,s){t.exports=s()})(jc,function(){var i=1e3,s=6e4,r=36e5,o="millisecond",a="second",c="minute",d="hour",u="day",h="week",p="month",g="quarter",f="year",v="date",w="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var E=["th","st","nd","rd"],I=A%100;return"["+A+(E[(I-20)%10]||E[I]||E[0])+"]"}},_=function(A,E,I){var L=String(A);return!L||L.length>=E?A:""+Array(E+1-L.length).join(I)+A},x={s:_,z:function(A){var E=-A.utcOffset(),I=Math.abs(E),L=Math.floor(I/60),$=I%60;return(E<=0?"+":"-")+_(L,2,"0")+":"+_($,2,"0")},m:function A(E,I){if(E.date()<I.date())return-A(I,E);var L=12*(I.year()-E.year())+(I.month()-E.month()),$=E.clone().add(L,p),B=I-$<0,D=E.clone().add(L+(B?-1:1),p);return+(-(L+(I-$)/(B?$-D:D-$))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:p,y:f,w:h,d:u,D:v,h:d,m:c,s:a,ms:o,Q:g}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},k="en",N={};N[k]=b;var R="$isDayjsObject",T=function(A){return A instanceof j||!(!A||!A[R])},P=function A(E,I,L){var $;if(!E)return k;if(typeof E=="string"){var B=E.toLowerCase();N[B]&&($=B),I&&(N[B]=I,$=B);var D=E.split("-");if(!$&&D.length>1)return A(D[0])}else{var q=E.name;N[q]=E,$=q}return!L&&$&&(k=$),$||!L&&k},M=function(A,E){if(T(A))return A.clone();var I=typeof E=="object"?E:{};return I.date=A,I.args=arguments,new j(I)},U=x;U.l=P,U.i=T,U.w=function(A,E){return M(A,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var j=function(){function A(I){this.$L=P(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[R]=!0}var E=A.prototype;return E.parse=function(I){this.$d=function(L){var $=L.date,B=L.utc;if($===null)return new Date(NaN);if(U.u($))return new Date;if($ instanceof Date)return new Date($);if(typeof $=="string"&&!/Z$/i.test($)){var D=$.match(m);if(D){var q=D[2]-1||0,Y=(D[7]||"0").substring(0,3);return B?new Date(Date.UTC(D[1],q,D[3]||1,D[4]||0,D[5]||0,D[6]||0,Y)):new Date(D[1],q,D[3]||1,D[4]||0,D[5]||0,D[6]||0,Y)}}return new Date($)}(I),this.init()},E.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},E.$utils=function(){return U},E.isValid=function(){return this.$d.toString()!==w},E.isSame=function(I,L){var $=M(I);return this.startOf(L)<=$&&$<=this.endOf(L)},E.isAfter=function(I,L){return M(I)<this.startOf(L)},E.isBefore=function(I,L){return this.endOf(L)<M(I)},E.$g=function(I,L,$){return U.u(I)?this[L]:this.set($,I)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(I,L){var $=this,B=!!U.u(L)||L,D=U.p(I),q=function(ke,Je){var Qe=U.w($.$u?Date.UTC($.$y,Je,ke):new Date($.$y,Je,ke),$);return B?Qe:Qe.endOf(u)},Y=function(ke,Je){return U.w($.toDate()[ke].apply($.toDate("s"),(B?[0,0,0,0]:[23,59,59,999]).slice(Je)),$)},ue=this.$W,le=this.$M,be=this.$D,Pe="set"+(this.$u?"UTC":"");switch(D){case f:return B?q(1,0):q(31,11);case p:return B?q(1,le):q(0,le+1);case h:var He=this.$locale().weekStart||0,Oe=(ue<He?ue+7:ue)-He;return q(B?be-Oe:be+(6-Oe),le);case u:case v:return Y(Pe+"Hours",0);case d:return Y(Pe+"Minutes",1);case c:return Y(Pe+"Seconds",2);case a:return Y(Pe+"Milliseconds",3);default:return this.clone()}},E.endOf=function(I){return this.startOf(I,!1)},E.$set=function(I,L){var $,B=U.p(I),D="set"+(this.$u?"UTC":""),q=($={},$[u]=D+"Date",$[v]=D+"Date",$[p]=D+"Month",$[f]=D+"FullYear",$[d]=D+"Hours",$[c]=D+"Minutes",$[a]=D+"Seconds",$[o]=D+"Milliseconds",$)[B],Y=B===u?this.$D+(L-this.$W):L;if(B===p||B===f){var ue=this.clone().set(v,1);ue.$d[q](Y),ue.init(),this.$d=ue.set(v,Math.min(this.$D,ue.daysInMonth())).$d}else q&&this.$d[q](Y);return this.init(),this},E.set=function(I,L){return this.clone().$set(I,L)},E.get=function(I){return this[U.p(I)]()},E.add=function(I,L){var $,B=this;I=Number(I);var D=U.p(L),q=function(le){var be=M(B);return U.w(be.date(be.date()+Math.round(le*I)),B)};if(D===p)return this.set(p,this.$M+I);if(D===f)return this.set(f,this.$y+I);if(D===u)return q(1);if(D===h)return q(7);var Y=($={},$[c]=s,$[d]=r,$[a]=i,$)[D]||1,ue=this.$d.getTime()+I*Y;return U.w(ue,this)},E.subtract=function(I,L){return this.add(-1*I,L)},E.format=function(I){var L=this,$=this.$locale();if(!this.isValid())return $.invalidDate||w;var B=I||"YYYY-MM-DDTHH:mm:ssZ",D=U.z(this),q=this.$H,Y=this.$m,ue=this.$M,le=$.weekdays,be=$.months,Pe=$.meridiem,He=function(Je,Qe,et,it){return Je&&(Je[Qe]||Je(L,B))||et[Qe].slice(0,it)},Oe=function(Je){return U.s(q%12||12,Je,"0")},ke=Pe||function(Je,Qe,et){var it=Je<12?"AM":"PM";return et?it.toLowerCase():it};return B.replace(y,function(Je,Qe){return Qe||function(et){switch(et){case"YY":return String(L.$y).slice(-2);case"YYYY":return U.s(L.$y,4,"0");case"M":return ue+1;case"MM":return U.s(ue+1,2,"0");case"MMM":return He($.monthsShort,ue,be,3);case"MMMM":return He(be,ue);case"D":return L.$D;case"DD":return U.s(L.$D,2,"0");case"d":return String(L.$W);case"dd":return He($.weekdaysMin,L.$W,le,2);case"ddd":return He($.weekdaysShort,L.$W,le,3);case"dddd":return le[L.$W];case"H":return String(q);case"HH":return U.s(q,2,"0");case"h":return Oe(1);case"hh":return Oe(2);case"a":return ke(q,Y,!0);case"A":return ke(q,Y,!1);case"m":return String(Y);case"mm":return U.s(Y,2,"0");case"s":return String(L.$s);case"ss":return U.s(L.$s,2,"0");case"SSS":return U.s(L.$ms,3,"0");case"Z":return D}return null}(Je)||D.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(I,L,$){var B,D=this,q=U.p(L),Y=M(I),ue=(Y.utcOffset()-this.utcOffset())*s,le=this-Y,be=function(){return U.m(D,Y)};switch(q){case f:B=be()/12;break;case p:B=be();break;case g:B=be()/3;break;case h:B=(le-ue)/6048e5;break;case u:B=(le-ue)/864e5;break;case d:B=le/r;break;case c:B=le/s;break;case a:B=le/i;break;default:B=le}return $?B:U.a(B)},E.daysInMonth=function(){return this.endOf(p).$D},E.$locale=function(){return N[this.$L]},E.locale=function(I,L){if(!I)return this.$L;var $=this.clone(),B=P(I,L,!0);return B&&($.$L=B),$},E.clone=function(){return U.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},A}(),Z=j.prototype;return M.prototype=Z,[["$ms",o],["$s",a],["$m",c],["$H",d],["$W",u],["$M",p],["$y",f],["$D",v]].forEach(function(A){Z[A[1]]=function(E){return this.$g(E,A[0],A[1])}}),M.extend=function(A,E){return A.$i||(A(E,j,M),A.$i=!0),M},M.locale=P,M.isDayjs=T,M.unix=function(A){return M(1e3*A)},M.en=N[k],M.Ls=N,M.p={},M})})(Wg);var Bu=Wg.exports,Vg={exports:{}};(function(t,e){(function(i,s){t.exports=s()})(jc,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var s=["th","st","nd","rd"],r=i%100;return"["+i+(s[(r-20)%10]||s[r]||s[0])+"]"}}})})(Vg);var D9=Vg.exports,Kg={exports:{}};(function(t,e){(function(i,s){t.exports=s()})(jc,function(){return function(i,s,r){i=i||{};var o=s.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function c(u,h,p,g){return o.fromToBase(u,h,p,g)}r.en.relativeTime=a,o.fromToBase=function(u,h,p,g,f){for(var v,w,m,y=p.$locale().relativeTime||a,b=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],_=b.length,x=0;x<_;x+=1){var k=b[x];k.d&&(v=g?r(u).diff(p,k.d,!0):p.diff(u,k.d,!0));var N=(i.rounding||Math.round)(Math.abs(v));if(m=v>0,N<=k.r||!k.r){N<=1&&x>0&&(k=b[x-1]);var R=y[k.l];f&&(N=f(""+N)),w=typeof R=="string"?R.replace("%d",N):R(N,h,k.l,m);break}}if(h)return w;var T=m?y.future:y.past;return typeof T=="function"?T(w):T.replace("%s",w)},o.to=function(u,h){return c(u,h,this,!0)},o.from=function(u,h){return c(u,h,this)};var d=function(u){return u.$u?r.utc():r()};o.toNow=function(u){return this.to(d(this),u)},o.fromNow=function(u){return this.from(d(this),u)}}})})(Kg);var j9=Kg.exports,Gg={exports:{}};(function(t,e){(function(i,s){t.exports=s()})(jc,function(){return function(i,s,r){r.updateLocale=function(o,a){var c=r.Ls[o];if(c)return(a?Object.keys(a):[]).forEach(function(d){c[d]=a[d]}),c}}})})(Gg);var z9=Gg.exports;Bu.extend(j9),Bu.extend(z9);const F9={...D9,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};Bu.locale("en-web3-modal",F9);const Zg={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t},getNetworksByNamespace(t,e){return(t==null?void 0:t.filter(i=>i.chainNamespace===e))||[]},getFirstNetworkByNamespace(t,e){return this.getNetworksByNamespace(t,e)[0]}};var H9=20,q9=1,vr=1e6,Yg=1e6,W9=-7,V9=21,K9=!1,jo="[big.js] ",yr=jo+"Invalid ",zc=yr+"decimal places",G9=yr+"rounding mode",Jg=jo+"Division by zero",je={},qi=void 0,Z9=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Xg(){function t(e){var i=this;if(!(i instanceof t))return e===qi?Xg():new t(e);if(e instanceof t)i.s=e.s,i.e=e.e,i.c=e.c.slice();else{if(typeof e!="string"){if(t.strict===!0&&typeof e!="bigint")throw TypeError(yr+"value");e=e===0&&1/e<0?"-0":String(e)}Y9(i,e)}i.constructor=t}return t.prototype=je,t.DP=H9,t.RM=q9,t.NE=W9,t.PE=V9,t.strict=K9,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}function Y9(t,e){var i,s,r;if(!Z9.test(e))throw Error(yr+"number");for(t.s=e.charAt(0)=="-"?(e=e.slice(1),-1):1,(i=e.indexOf("."))>-1&&(e=e.replace(".","")),(s=e.search(/e/i))>0?(i<0&&(i=s),i+=+e.slice(s+1),e=e.substring(0,s)):i<0&&(i=e.length),r=e.length,s=0;s<r&&e.charAt(s)=="0";)++s;if(s==r)t.c=[t.e=0];else{for(;r>0&&e.charAt(--r)=="0";);for(t.e=i-s-1,t.c=[],i=0;s<=r;)t.c[i++]=+e.charAt(s++)}return t}function br(t,e,i,s){var r=t.c;if(i===qi&&(i=t.constructor.RM),i!==0&&i!==1&&i!==2&&i!==3)throw Error(G9);if(e<1)s=i===3&&(s||!!r[0])||e===0&&(i===1&&r[0]>=5||i===2&&(r[0]>5||r[0]===5&&(s||r[1]!==qi))),r.length=1,s?(t.e=t.e-e+1,r[0]=1):r[0]=t.e=0;else if(e<r.length){if(s=i===1&&r[e]>=5||i===2&&(r[e]>5||r[e]===5&&(s||r[e+1]!==qi||r[e-1]&1))||i===3&&(s||!!r[0]),r.length=e,s){for(;++r[--e]>9;)if(r[e]=0,e===0){++t.e,r.unshift(1);break}}for(e=r.length;!r[--e];)r.pop()}return t}function _r(t,e,i){var s=t.e,r=t.c.join(""),o=r.length;if(e)r=r.charAt(0)+(o>1?"."+r.slice(1):"")+(s<0?"e":"e+")+s;else if(s<0){for(;++s;)r="0"+r;r="0."+r}else if(s>0)if(++s>o)for(s-=o;s--;)r+="0";else s<o&&(r=r.slice(0,s)+"."+r.slice(s));else o>1&&(r=r.charAt(0)+"."+r.slice(1));return t.s<0&&i?"-"+r:r}je.abs=function(){var t=new this.constructor(this);return t.s=1,t},je.cmp=function(t){var e,i=this,s=i.c,r=(t=new i.constructor(t)).c,o=i.s,a=t.s,c=i.e,d=t.e;if(!s[0]||!r[0])return s[0]?o:r[0]?-a:0;if(o!=a)return o;if(e=o<0,c!=d)return c>d^e?1:-1;for(a=(c=s.length)<(d=r.length)?c:d,o=-1;++o<a;)if(s[o]!=r[o])return s[o]>r[o]^e?1:-1;return c==d?0:c>d^e?1:-1},je.div=function(t){var e=this,i=e.constructor,s=e.c,r=(t=new i(t)).c,o=e.s==t.s?1:-1,a=i.DP;if(a!==~~a||a<0||a>vr)throw Error(zc);if(!r[0])throw Error(Jg);if(!s[0])return t.s=o,t.c=[t.e=0],t;var c,d,u,h,p,g=r.slice(),f=c=r.length,v=s.length,w=s.slice(0,c),m=w.length,y=t,b=y.c=[],_=0,x=a+(y.e=e.e-t.e)+1;for(y.s=o,o=x<0?0:x,g.unshift(0);m++<c;)w.push(0);do{for(u=0;u<10;u++){if(c!=(m=w.length))h=c>m?1:-1;else for(p=-1,h=0;++p<c;)if(r[p]!=w[p]){h=r[p]>w[p]?1:-1;break}if(h<0){for(d=m==c?r:g;m;){if(w[--m]<d[m]){for(p=m;p&&!w[--p];)w[p]=9;--w[p],w[m]+=10}w[m]-=d[m]}for(;!w[0];)w.shift()}else break}b[_++]=h?u:++u,w[0]&&h?w[m]=s[f]||0:w=[s[f]]}while((f++<v||w[0]!==qi)&&o--);return!b[0]&&_!=1&&(b.shift(),y.e--,x--),_>x&&br(y,x,i.RM,w[0]!==qi),y},je.eq=function(t){return this.cmp(t)===0},je.gt=function(t){return this.cmp(t)>0},je.gte=function(t){return this.cmp(t)>-1},je.lt=function(t){return this.cmp(t)<0},je.lte=function(t){return this.cmp(t)<1},je.minus=je.sub=function(t){var e,i,s,r,o=this,a=o.constructor,c=o.s,d=(t=new a(t)).s;if(c!=d)return t.s=-d,o.plus(t);var u=o.c.slice(),h=o.e,p=t.c,g=t.e;if(!u[0]||!p[0])return p[0]?t.s=-d:u[0]?t=new a(o):t.s=1,t;if(c=h-g){for((r=c<0)?(c=-c,s=u):(g=h,s=p),s.reverse(),d=c;d--;)s.push(0);s.reverse()}else for(i=((r=u.length<p.length)?u:p).length,c=d=0;d<i;d++)if(u[d]!=p[d]){r=u[d]<p[d];break}if(r&&(s=u,u=p,p=s,t.s=-t.s),(d=(i=p.length)-(e=u.length))>0)for(;d--;)u[e++]=0;for(d=e;i>c;){if(u[--i]<p[i]){for(e=i;e&&!u[--e];)u[e]=9;--u[e],u[i]+=10}u[i]-=p[i]}for(;u[--d]===0;)u.pop();for(;u[0]===0;)u.shift(),--g;return u[0]||(t.s=1,u=[g=0]),t.c=u,t.e=g,t},je.mod=function(t){var e,i=this,s=i.constructor,r=i.s,o=(t=new s(t)).s;if(!t.c[0])throw Error(Jg);return i.s=t.s=1,e=t.cmp(i)==1,i.s=r,t.s=o,e?new s(i):(r=s.DP,o=s.RM,s.DP=s.RM=0,i=i.div(t),s.DP=r,s.RM=o,this.minus(i.times(t)))},je.neg=function(){var t=new this.constructor(this);return t.s=-t.s,t},je.plus=je.add=function(t){var e,i,s,r=this,o=r.constructor;if(t=new o(t),r.s!=t.s)return t.s=-t.s,r.minus(t);var a=r.e,c=r.c,d=t.e,u=t.c;if(!c[0]||!u[0])return u[0]||(c[0]?t=new o(r):t.s=r.s),t;if(c=c.slice(),e=a-d){for(e>0?(d=a,s=u):(e=-e,s=c),s.reverse();e--;)s.push(0);s.reverse()}for(c.length-u.length<0&&(s=u,u=c,c=s),e=u.length,i=0;e;c[e]%=10)i=(c[--e]=c[e]+u[e]+i)/10|0;for(i&&(c.unshift(i),++d),e=c.length;c[--e]===0;)c.pop();return t.c=c,t.e=d,t},je.pow=function(t){var e=this,i=new e.constructor("1"),s=i,r=t<0;if(t!==~~t||t<-Yg||t>Yg)throw Error(yr+"exponent");for(r&&(t=-t);t&1&&(s=s.times(e)),t>>=1,!!t;)e=e.times(e);return r?i.div(s):s},je.prec=function(t,e){if(t!==~~t||t<1||t>vr)throw Error(yr+"precision");return br(new this.constructor(this),t,e)},je.round=function(t,e){if(t===qi)t=0;else if(t!==~~t||t<-vr||t>vr)throw Error(zc);return br(new this.constructor(this),t+this.e+1,e)},je.sqrt=function(){var t,e,i,s=this,r=s.constructor,o=s.s,a=s.e,c=new r("0.5");if(!s.c[0])return new r(s);if(o<0)throw Error(jo+"No square root");o=Math.sqrt(+_r(s,!0,!0)),o===0||o===1/0?(e=s.c.join(""),e.length+a&1||(e+="0"),o=Math.sqrt(e),a=((a+1)/2|0)-(a<0||a&1),t=new r((o==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+a)):t=new r(o+""),a=t.e+(r.DP+=4);do i=t,t=c.times(i.plus(s.div(i)));while(i.c.slice(0,a).join("")!==t.c.slice(0,a).join(""));return br(t,(r.DP-=4)+t.e+1,r.RM)},je.times=je.mul=function(t){var e,i=this,s=i.constructor,r=i.c,o=(t=new s(t)).c,a=r.length,c=o.length,d=i.e,u=t.e;if(t.s=i.s==t.s?1:-1,!r[0]||!o[0])return t.c=[t.e=0],t;for(t.e=d+u,a<c&&(e=r,r=o,o=e,u=a,a=c,c=u),e=new Array(u=a+c);u--;)e[u]=0;for(d=c;d--;){for(c=0,u=a+d;u>d;)c=e[u]+o[d]*r[u-d-1]+c,e[u--]=c%10,c=c/10|0;e[u]=c}for(c?++t.e:e.shift(),d=e.length;!e[--d];)e.pop();return t.c=e,t},je.toExponential=function(t,e){var i=this,s=i.c[0];if(t!==qi){if(t!==~~t||t<0||t>vr)throw Error(zc);for(i=br(new i.constructor(i),++t,e);i.c.length<t;)i.c.push(0)}return _r(i,!0,!!s)},je.toFixed=function(t,e){var i=this,s=i.c[0];if(t!==qi){if(t!==~~t||t<0||t>vr)throw Error(zc);for(i=br(new i.constructor(i),t+i.e+1,e),t=t+i.e+1;i.c.length<t;)i.c.push(0)}return _r(i,!1,!!s)},je[Symbol.for("nodejs.util.inspect.custom")]=je.toJSON=je.toString=function(){var t=this,e=t.constructor;return _r(t,t.e<=e.NE||t.e>=e.PE,!!t.c[0])},je.toNumber=function(){var t=+_r(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(t.toString()))throw Error(jo+"Imprecise conversion");return t},je.toPrecision=function(t,e){var i=this,s=i.constructor,r=i.c[0];if(t!==qi){if(t!==~~t||t<1||t>vr)throw Error(yr+"precision");for(i=br(new s(i),t,e);i.c.length<t;)i.c.push(0)}return _r(i,t<=i.e||i.e<=s.NE||i.e>=s.PE,!!r)},je.valueOf=function(){var t=this,e=t.constructor;if(e.strict===!0)throw Error(jo+"valueOf disallowed");return _r(t,t.e<=e.NE||t.e>=e.PE,!0)};var zo=Xg();const Fc={bigNumber(t){return t?new zo(t):new zo(0)},multiply(t,e){if(t===void 0||e===void 0)return new zo(0);const i=new zo(t),s=new zo(e);return i.times(s)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})},parseLocalStringToNumber(t){return t===void 0?0:parseFloat(t.replace(/,/gu,""))}},J9=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],X9=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],Q9=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],oe={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network"},ex={getERC20Abi:t=>oe.USDT_CONTRACT_ADDRESSES.includes(t)?Q9:J9,getSwapAbi:()=>X9},$s={validateCaipAddress(t){var e;if(((e=t.split(":"))==null?void 0:e.length)!==3)throw new Error("Invalid CAIP Address");return t},parseCaipAddress(t){const e=t.split(":");if(e.length!==3)throw new Error(`Invalid CAIP-10 address: ${t}`);const[i,s,r]=e;if(!i||!s||!r)throw new Error(`Invalid CAIP-10 address: ${t}`);return{chainNamespace:i,chainId:s,address:r}},parseCaipNetworkId(t){const e=t.split(":");if(e.length!==2)throw new Error(`Invalid CAIP-2 network id: ${t}`);const[i,s]=e;if(!i||!s)throw new Error(`Invalid CAIP-2 network id: ${t}`);return{chainNamespace:i,chainId:s}}},ye={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types"};function Uu(t){if(!t)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${t}:connected_connector_id`}const ve={setItem(t,e){Fo()&&e!==void 0&&localStorage.setItem(t,e)},getItem(t){if(Fo())return localStorage.getItem(t)||void 0},removeItem(t){Fo()&&localStorage.removeItem(t)},clear(){Fo()&&localStorage.clear()}};function Fo(){return typeof window<"u"&&typeof localStorage<"u"}function Ls(t,e){return e==="light"?{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const tx=Symbol(),Qg=Object.getPrototypeOf,Mu=new WeakMap,ix=t=>t&&(Mu.has(t)?Mu.get(t):Qg(t)===Object.prototype||Qg(t)===Array.prototype),sx=t=>ix(t)&&t[tx]||null,ef=(t,e=!0)=>{Mu.set(t,e)},Du=t=>typeof t=="object"&&t!==null,Bs=new WeakMap,Ho=new WeakSet,rx=(t=Object.is,e=(u,h)=>new Proxy(u,h),i=u=>Du(u)&&!Ho.has(u)&&(Array.isArray(u)||!(Symbol.iterator in u))&&!(u instanceof WeakMap)&&!(u instanceof WeakSet)&&!(u instanceof Error)&&!(u instanceof Number)&&!(u instanceof Date)&&!(u instanceof String)&&!(u instanceof RegExp)&&!(u instanceof ArrayBuffer),s=u=>{switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:throw u}},r=new WeakMap,o=(u,h,p=s)=>{const g=r.get(u);if((g==null?void 0:g[0])===h)return g[1];const f=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u));return ef(f,!0),r.set(u,[h,f]),Reflect.ownKeys(u).forEach(v=>{if(Object.getOwnPropertyDescriptor(f,v))return;const w=Reflect.get(u,v),{enumerable:m}=Reflect.getOwnPropertyDescriptor(u,v),y={value:w,enumerable:m,configurable:!0};if(Ho.has(w))ef(w,!1);else if(w instanceof Promise)delete y.value,y.get=()=>p(w);else if(Bs.has(w)){const[b,_]=Bs.get(w);y.value=o(b,_(),p)}Object.defineProperty(f,v,y)}),Object.preventExtensions(f)},a=new WeakMap,c=[1,1],d=u=>{if(!Du(u))throw new Error("object required");const h=a.get(u);if(h)return h;let p=c[0];const g=new Set,f=(T,P=++c[0])=>{p!==P&&(p=P,g.forEach(M=>M(T,P)))};let v=c[1];const w=(T=++c[1])=>(v!==T&&!g.size&&(v=T,y.forEach(([P])=>{const M=P[1](T);M>p&&(p=M)})),p),m=T=>(P,M)=>{const U=[...P];U[1]=[T,...U[1]],f(U,M)},y=new Map,b=(T,P)=>{if(y.has(T))throw new Error("prop listener already exists");if(g.size){const M=P[3](m(T));y.set(T,[P,M])}else y.set(T,[P])},_=T=>{var P;const M=y.get(T);M&&(y.delete(T),(P=M[1])==null||P.call(M))},x=T=>(g.add(T),g.size===1&&y.forEach(([P,M],U)=>{if(M)throw new Error("remove already exists");const j=P[3](m(U));y.set(U,[P,j])}),()=>{g.delete(T),g.size===0&&y.forEach(([P,M],U)=>{M&&(M(),y.set(U,[P]))})}),k=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u)),N=e(k,{deleteProperty(T,P){const M=Reflect.get(T,P);_(P);const U=Reflect.deleteProperty(T,P);return U&&f(["delete",[P],M]),U},set(T,P,M,U){const j=Reflect.has(T,P),Z=Reflect.get(T,P,U);if(j&&(t(Z,M)||a.has(M)&&t(Z,a.get(M))))return!0;_(P),Du(M)&&(M=sx(M)||M);let A=M;if(M instanceof Promise)M.then(E=>{M.status="fulfilled",M.value=E,f(["resolve",[P],E])}).catch(E=>{M.status="rejected",M.reason=E,f(["reject",[P],E])});else{!Bs.has(M)&&i(M)&&(A=d(M));const E=!Ho.has(A)&&Bs.get(A);E&&b(P,E)}return Reflect.set(T,P,A,U),f(["set",[P],M,Z]),!0}});a.set(u,N);const R=[k,w,o,x];return Bs.set(N,R),Reflect.ownKeys(u).forEach(T=>{const P=Object.getOwnPropertyDescriptor(u,T);"value"in P&&(N[T]=u[T],delete P.value,delete P.writable),Object.defineProperty(k,T,P)}),N})=>[d,Bs,Ho,t,e,i,s,r,o,a,c],[nx]=rx();function Ve(t={}){return nx(t)}function Ot(t,e,i){const s=Bs.get(t);!s&&console.warn("Please use proxy object");let r;const o=[],a=s[3];let c=!1;const d=a(u=>{if(o.push(u),i){e(o.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,c&&e(o.splice(0))}))});return c=!0,()=>{c=!1,d()}}function qo(t,e){const i=Bs.get(t);!i&&console.warn("Please use proxy object");const[s,r,o]=i;return o(s,r(),e)}function xr(t){return Ho.add(t),t}function Lt(t,e,i,s){let r=t[e];return Ot(t,()=>{const o=t[e];Object.is(r,o)||i(r=o)},s)}function ox(t){const e=Ve({data:Array.from(t||[]),has(i){return this.data.some(s=>s[0]===i)},set(i,s){const r=this.data.find(o=>o[0]===i);return r?r[1]=s:this.data.push([i,s]),this},get(i){var s;return(s=this.data.find(r=>r[0]===i))==null?void 0:s[1]},delete(i){const s=this.data.findIndex(r=>r[0]===i);return s===-1?!1:(this.data.splice(s,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(i){this.data.forEach(s=>{i(s[1],s[0],this)})},keys(){return this.data.map(i=>i[0]).values()},values(){return this.data.map(i=>i[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}const ju=(typeof Mo<"u"?{NODE_ENV:"production",PUBLIC_PATH:"/"}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",ax=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],lt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:ju,SECURE_SITE_DASHBOARD:`${ju}/dashboard`,SECURE_SITE_FAVICON:`${ju}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,receive:!0,send:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],history:!0,analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},ae={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(t,e){return Date.now()-t>e},getActiveNetworkProps(){const t=ae.getActiveNamespace(),e=ae.getActiveCaipNetworkId(),i=e?e.split(":")[1]:void 0,s=i?isNaN(Number(i))?i:Number(i):void 0;return{namespace:t,caipNetworkId:e,chainId:s}},setWalletConnectDeepLink({name:t,href:e}){try{ve.setItem(ye.DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=ve.getItem(ye.DEEPLINK_CHOICE);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{ve.removeItem(ye.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(t){try{ve.setItem(ye.ACTIVE_NAMESPACE,t)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(t){try{ve.setItem(ye.ACTIVE_CAIP_NETWORK_ID,t),ae.setActiveNamespace(t.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return ve.getItem(ye.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{ve.removeItem(ye.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(t){try{const e=Uu(t);ve.removeItem(e)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(t){try{const e=ae.getRecentWallets();e.find(i=>i.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),ve.setItem(ye.RECENT_WALLETS,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const t=ve.getItem(ye.RECENT_WALLETS);return t?JSON.parse(t):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(t,e){try{const i=Uu(t);ve.setItem(i,e)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return ve.getItem(ye.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(t){if(t)try{const e=Uu(t);return ve.getItem(e)}catch{console.info("Unable to get connected connector id in namespace ",t)}},setConnectedSocialProvider(t){try{ve.setItem(ye.CONNECTED_SOCIAL,t)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return ve.getItem(ye.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{ve.removeItem(ye.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return ve.getItem(ye.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var t,e;return(e=(t=ve.getItem(ye.ACTIVE_CAIP_NETWORK_ID))==null?void 0:t.split(":"))==null?void 0:e[1]},setConnectionStatus(t){try{ve.setItem(ye.CONNECTION_STATUS,t)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return ve.getItem(ye.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const t=ve.getItem(ye.CONNECTED_NAMESPACES);return t!=null&&t.length?t.split(","):[]}catch{return[]}},setConnectedNamespaces(t){try{const e=Array.from(new Set(t));ve.setItem(ye.CONNECTED_NAMESPACES,e.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(t){try{const e=ae.getConnectedNamespaces();e.includes(t)||(e.push(t),ae.setConnectedNamespaces(e))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(t){try{const e=ae.getConnectedNamespaces(),i=e.indexOf(t);i>-1&&(e.splice(i,1),ae.setConnectedNamespaces(e))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return ve.getItem(ye.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(t){try{ve.setItem(ye.TELEGRAM_SOCIAL_PROVIDER,t)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{ve.removeItem(ye.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let t={};try{const e=ve.getItem(ye.PORTFOLIO_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromBalanceCache(t){try{const e=ae.getBalanceCache();ve.setItem(ye.PORTFOLIO_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getBalanceCacheForCaipAddress(t){try{const e=ae.getBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.portfolio))return e.balance;ae.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateBalanceCache(t){try{const e=ae.getBalanceCache();e[t.caipAddress]=t,ve.setItem(ye.PORTFOLIO_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getNativeBalanceCache(){let t={};try{const e=ve.getItem(ye.NATIVE_BALANCE_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromNativeBalanceCache(t){try{const e=ae.getBalanceCache();ve.setItem(ye.NATIVE_BALANCE_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getNativeBalanceCacheForCaipAddress(t){try{const e=ae.getNativeBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.nativeBalance))return e;console.info("Discarding cache for address",t),ae.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateNativeBalanceCache(t){try{const e=ae.getNativeBalanceCache();e[t.caipAddress]=t,ve.setItem(ye.NATIVE_BALANCE_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getEnsCache(){let t={};try{const e=ve.getItem(ye.ENS_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get ens name cache")}return t},getEnsFromCacheForAddress(t){try{const e=ae.getEnsCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.ens))return e.ens;ae.removeEnsFromCache(t)}catch{console.info("Unable to get ens name from cache",t)}},updateEnsCache(t){try{const e=ae.getEnsCache();e[t.address]=t,ve.setItem(ye.ENS_CACHE,JSON.stringify(e))}catch{console.info("Unable to update ens name cache",t)}},removeEnsFromCache(t){try{const e=ae.getEnsCache();ve.setItem(ye.ENS_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove ens name from cache",t)}},getIdentityCache(){let t={};try{const e=ve.getItem(ye.IDENTITY_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get identity cache")}return t},getIdentityFromCacheForAddress(t){try{const e=ae.getIdentityCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.identity))return e.identity;ae.removeIdentityFromCache(t)}catch{console.info("Unable to get identity from cache",t)}},updateIdentityCache(t){try{const e=ae.getIdentityCache();e[t.address]={identity:t.identity,timestamp:t.timestamp},ve.setItem(ye.IDENTITY_CACHE,JSON.stringify(e))}catch{console.info("Unable to update identity cache",t)}},removeIdentityFromCache(t){try{const e=ae.getIdentityCache();ve.setItem(ye.IDENTITY_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove identity from cache",t)}},clearAddressCache(){try{ve.removeItem(ye.PORTFOLIO_CACHE),ve.removeItem(ye.NATIVE_BALANCE_CACHE),ve.removeItem(ye.ENS_CACHE),ve.removeItem(ye.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(t){try{ve.setItem(ye.PREFERRED_ACCOUNT_TYPES,JSON.stringify(t))}catch{console.info("Unable to set preferred account types",t)}},getPreferredAccountTypes(){try{const t=ve.getItem(ye.PREFERRED_ACCOUNT_TYPES);return JSON.parse(t)}catch{console.info("Unable to get preferred account types")}}},V={isMobile(){var t;return this.isClient()?!!((t=window==null?void 0:window.matchMedia("(pointer:coarse)"))!=null&&t.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return V.isMobile()&&t.includes("android")},isIos(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=lt.TEN_SEC_MS:!0},isAllowedRetry(t,e=lt.ONE_SEC_MS){return Date.now()-t>=e},copyToClopboard(t){navigator.clipboard.writeText(t)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},getPairingExpiry(){return Date.now()+lt.FOUR_MINUTES_MS},getNetworkId(t){return t==null?void 0:t.split(":")[1]},getPlainAddress(t){return t==null?void 0:t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let i;return(...s)=>{function r(){t(...s)}i&&clearTimeout(i),i=setTimeout(r,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(V.isHttpUrl(t))return this.formatUniversalUrl(t,e);let i=t;i.includes("://")||(i=t.replaceAll("/","").replaceAll(":",""),i=`${i}://`),i.endsWith("/")||(i=`${i}/`),this.isTelegram()&&this.isAndroid()&&(e=encodeURIComponent(e));const s=encodeURIComponent(e);return{redirect:`${i}wc?uri=${s}`,href:i}},formatUniversalUrl(t,e){if(!V.isHttpUrl(t))return this.formatNativeUrl(t,e);let i=t;i.endsWith("/")||(i=`${i}/`);const s=encodeURIComponent(e);return{redirect:`${i}wc?uri=${s}`,href:i}},getOpenTargetForPlatform(t){return t==="popupWindow"?t:this.isTelegram()?ae.getTelegramSocialProvider()?"_top":"_blank":t},openHref(t,e,i){window==null||window.open(t,this.getOpenTargetForPlatform(e),i||"noreferrer noopener")},returnOpenHref(t,e,i){return window==null?void 0:window.open(t,this.getOpenTargetForPlatform(e),i||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(t){const e=new Promise((i,s)=>{const r=new Image;r.onload=i,r.onerror=s,r.crossOrigin="anonymous",r.src=t});return Promise.race([e,V.wait(2e3)])},formatBalance(t,e){let i="0.000";if(typeof t=="string"){const s=Number(t);if(s){const r=Math.floor(s*1e3)/1e3;r&&(i=r.toString())}}return`${i}${e?` ${e}`:""}`},formatBalance2(t,e){var s;let i;if(t==="0")i="0";else if(typeof t=="string"){const r=Number(t);r&&(i=(s=r.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:s[0])}return{value:i??"0",rest:i==="0"?"000":"",symbol:e}},getApiUrl(){return oe.W3M_API_URL},getBlockchainApiUrl(){return oe.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return oe.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,i;return typeof t=="string"?t:typeof((i=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:i.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const i={};return e&&t&&(t.forEach((s,r)=>{i[s]=r}),e.sort((s,r)=>{const o=i[s.id],a=i[r.id];return o!==void 0&&a!==void 0?o-a:o!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const i of t)e+=i.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[i,s]=e.split(".");return{dollars:i,pennies:s}},isAddress(t,e="eip155"){switch(e){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){const i=new Set;return t.filter(s=>{const r=s[e];return i.has(r)?!1:(i.add(r),!0)})},generateSdkVersion(t,e,i){const s=t.length===0?lt.ADAPTER_TYPES.UNIVERSAL:t.map(r=>r.adapterType).join(",");return`${e}-${s}-${i}`},createAccount(t,e,i,s,r){return{namespace:t,address:e,type:i,publicKey:s,path:r}},isCaipAddress(t){if(typeof t!="string")return!1;const e=t.split(":"),i=e[0];return e.filter(Boolean).length===3&&i in oe.CHAIN_NAME_MAP},isMac(){const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(t){const e=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,i="state=";if(new URL(t).host==="auth.magic.link"){const s="provider_authorization_url=",r=t.substring(t.indexOf(s)+s.length),o=this.injectIntoUrl(decodeURIComponent(r),i,e);return t.replace(r,encodeURIComponent(o))}return this.injectIntoUrl(t,i,e)},injectIntoUrl(t,e,i){const s=t.indexOf(e);if(s===-1)throw new Error(`${e} parameter not found in the URL: ${t}`);const r=t.indexOf("&",s),o=e.length,a=r!==-1?r:t.length,c=t.substring(0,s+o),d=t.substring(s+o,a),u=t.substring(r),h=d+i;return c+h+u}};async function Wo(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class Hc{constructor({baseUrl:e,clientId:i}){this.baseUrl=e,this.clientId=i}async get({headers:e,signal:i,cache:s,...r}){const o=this.createUrl(r);return(await Wo(o,{method:"GET",headers:e,signal:i,cache:s})).json()}async getBlob({headers:e,signal:i,...s}){const r=this.createUrl(s);return(await Wo(r,{method:"GET",headers:e,signal:i})).blob()}async post({body:e,headers:i,signal:s,...r}){const o=this.createUrl(r);return(await Wo(o,{method:"POST",headers:i,body:e?JSON.stringify(e):void 0,signal:s})).json()}async put({body:e,headers:i,signal:s,...r}){const o=this.createUrl(r);return(await Wo(o,{method:"PUT",headers:i,body:e?JSON.stringify(e):void 0,signal:s})).json()}async delete({body:e,headers:i,signal:s,...r}){const o=this.createUrl(r);return(await Wo(o,{method:"DELETE",headers:i,body:e?JSON.stringify(e):void 0,signal:s})).json()}createUrl({path:e,params:i}){const s=new URL(e,this.baseUrl);return i&&Object.entries(i).forEach(([r,o])=>{o&&s.searchParams.append(r,o)}),this.clientId&&s.searchParams.append("clientId",this.clientId),s}}const cx={handleSolanaDeeplinkRedirect(t){if(C.state.activeChain===oe.CHAIN.SOLANA){const e=window.location.href,i=encodeURIComponent(e);if(t==="Phantom"&&!("phantom"in window)){const s=e.startsWith("https")?"https":"http",r=e.split("/")[2],o=encodeURIComponent(`${s}://${r}`);window.location.href=`https://phantom.app/ul/browse/${i}?ref=${o}`}t==="Coinbase Wallet"&&!("coinbaseSolana"in window)&&(window.location.href=`https://go.cb-w.com/dapp?cb_url=${i}`)}}},si=Ve({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),qt={state:si,subscribeNetworkImages(t){return Ot(si.networkImages,()=>t(si.networkImages))},subscribeKey(t,e){return Lt(si,t,e)},subscribe(t){return Ot(si,()=>t(si))},setWalletImage(t,e){si.walletImages[t]=e},setNetworkImage(t,e){si.networkImages[t]=e},setChainImage(t,e){si.chainImages[t]=e},setConnectorImage(t,e){si.connectorImages={...si.connectorImages,[t]:e}},setTokenImage(t,e){si.tokenImages[t]=e},setCurrencyImage(t,e){si.currencyImages[t]=e}},lx={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},zu=Ve({networkImagePromises:{}}),dt={async fetchWalletImage(t){if(t)return await ee._fetchWalletImage(t),this.getWalletImageById(t)},async fetchNetworkImage(t){return t?this.getNetworkImageById(t)||(zu.networkImagePromises[t]||(zu.networkImagePromises[t]=ee._fetchNetworkImage(t)),await zu.networkImagePromises[t],this.getNetworkImageById(t)):void 0},getWalletImageById(t){if(t)return qt.state.walletImages[t]},getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return qt.state.walletImages[t.image_id]},getNetworkImage(t){var e,i,s;if((e=t==null?void 0:t.assets)!=null&&e.imageUrl)return(i=t==null?void 0:t.assets)==null?void 0:i.imageUrl;if((s=t==null?void 0:t.assets)!=null&&s.imageId)return qt.state.networkImages[t.assets.imageId]},getNetworkImageById(t){if(t)return qt.state.networkImages[t]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return qt.state.connectorImages[t.imageId]},getChainImage(t){return qt.state.networkImages[lx[t]]}},dx={getFeatureValue(t,e){const i=e==null?void 0:e[t];return i===void 0?lt.DEFAULT_FEATURES[t]:i},filterSocialsByPlatform(t){if(!t||!t.length)return t;if(V.isTelegram()){if(V.isIos())return t.filter(e=>e!=="google");if(V.isMac())return t.filter(e=>e!=="x");if(V.isAndroid())return t.filter(e=>!["facebook","x"].includes(e))}return t}},fe=Ve({features:lt.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:{solana:"eoa",bip122:"payment",polkadot:"eoa",eip155:"smartAccount"},enableNetworkSwitch:!0}),F={state:fe,subscribeKey(t,e){return Lt(fe,t,e)},setOptions(t){Object.assign(fe,t)},setFeatures(t){if(!t)return;fe.features||(fe.features=lt.DEFAULT_FEATURES);const e={...fe.features,...t};fe.features=e,fe.features.socials&&(fe.features.socials=dx.filterSocialsByPlatform(fe.features.socials))},setProjectId(t){fe.projectId=t},setCustomRpcUrls(t){fe.customRpcUrls=t},setAllWallets(t){fe.allWallets=t},setIncludeWalletIds(t){fe.includeWalletIds=t},setExcludeWalletIds(t){fe.excludeWalletIds=t},setFeaturedWalletIds(t){fe.featuredWalletIds=t},setTokens(t){fe.tokens=t},setTermsConditionsUrl(t){fe.termsConditionsUrl=t},setPrivacyPolicyUrl(t){fe.privacyPolicyUrl=t},setCustomWallets(t){fe.customWallets=t},setIsSiweEnabled(t){fe.isSiweEnabled=t},setIsUniversalProvider(t){fe.isUniversalProvider=t},setSdkVersion(t){fe.sdkVersion=t},setMetadata(t){fe.metadata=t},setDisableAppend(t){fe.disableAppend=t},setEIP6963Enabled(t){fe.enableEIP6963=t},setDebug(t){fe.debug=t},setEnableWalletConnect(t){fe.enableWalletConnect=t},setEnableWalletGuide(t){fe.enableWalletGuide=t},setEnableAuthLogger(t){fe.enableAuthLogger=t},setEnableWallets(t){fe.enableWallets=t},setHasMultipleAddresses(t){fe.hasMultipleAddresses=t},setSIWX(t){fe.siwx=t},setConnectMethodsOrder(t){fe.features={...fe.features,connectMethodsOrder:t}},setWalletFeaturesOrder(t){fe.features={...fe.features,walletFeaturesOrder:t}},setSocialsOrder(t){fe.features={...fe.features,socials:t}},setCollapseWallets(t){fe.features={...fe.features,collapseWallets:t}},setEnableEmbedded(t){fe.enableEmbedded=t},setAllowUnsupportedChain(t){fe.allowUnsupportedChain=t},setManualWCControl(t){fe.manualWCControl=t},setEnableNetworkSwitch(t){fe.enableNetworkSwitch=t},setDefaultAccountTypes(t={}){Object.entries(t).forEach(([e,i])=>{i&&(fe.defaultAccountTypes[e]=i)})},setUniversalProviderConfigOverride(t){fe.universalProviderConfigOverride=t},getUniversalProviderConfigOverride(){return fe.universalProviderConfigOverride},getSnapshot(){return qo(fe)}},Us=Ve({message:"",variant:"info",open:!1}),Ms={state:Us,subscribeKey(t,e){return Lt(Us,t,e)},open(t,e){const{debug:i}=F.state,{shortMessage:s,longMessage:r}=t;i&&(Us.message=s,Us.variant=e,Us.open=!0),r&&console.error(typeof r=="function"?r():r)},close(){Us.open=!1,Us.message="",Us.variant="info"}},ux=V.getAnalyticsUrl(),hx=new Hc({baseUrl:ux,clientId:null}),px=["MODAL_CREATED"],cs=Ve({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),_e={state:cs,subscribe(t){return Ot(cs,()=>t(cs))},getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:i}=F.state;return{projectId:t,st:e,sv:i||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(t){try{const e=de.state.address;if(px.includes(t.data.event)||typeof window>"u")return;await hx.post({path:"/e",params:_e.getSdkProperties(),body:{eventId:V.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:{...t.data,address:e}}}),cs.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===oe.HTTP_STATUS_CODES.FORBIDDEN&&!cs.reportedErrors.FORBIDDEN&&(Ms.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${Fo()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),cs.reportedErrors.FORBIDDEN=!0)}},sendEvent(t){var e;cs.timestamp=Date.now(),cs.data=t,(e=F.state.features)!=null&&e.analytics&&_e._sendAnalyticsEvent(cs)}},gx=["1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79","fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa","a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"],fx=V.getApiUrl(),gi=new Hc({baseUrl:fx,clientId:null}),wx=40,tf=4,mx=20,ze=Ve({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),ee={state:ze,subscribeKey(t,e){return Lt(ze,t,e)},_getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:i}=F.state;return{projectId:t,st:e||"appkit",sv:i||"html-wagmi-4.2.2"}},_filterOutExtensions(t){return F.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},async _fetchWalletImage(t){const e=`${gi.baseUrl}/getWalletImage/${t}`,i=await gi.getBlob({path:e,params:ee._getSdkProperties()});qt.setWalletImage(t,URL.createObjectURL(i))},async _fetchNetworkImage(t){const e=`${gi.baseUrl}/public/getAssetImage/${t}`,i=await gi.getBlob({path:e,params:ee._getSdkProperties()});qt.setNetworkImage(t,URL.createObjectURL(i))},async _fetchConnectorImage(t){const e=`${gi.baseUrl}/public/getAssetImage/${t}`,i=await gi.getBlob({path:e,params:ee._getSdkProperties()});qt.setConnectorImage(t,URL.createObjectURL(i))},async _fetchCurrencyImage(t){const e=`${gi.baseUrl}/public/getCurrencyImage/${t}`,i=await gi.getBlob({path:e,params:ee._getSdkProperties()});qt.setCurrencyImage(t,URL.createObjectURL(i))},async _fetchTokenImage(t){const e=`${gi.baseUrl}/public/getTokenImage/${t}`,i=await gi.getBlob({path:e,params:ee._getSdkProperties()});qt.setTokenImage(t,URL.createObjectURL(i))},async fetchNetworkImages(){var e;const t=(e=C.getAllRequestedCaipNetworks())==null?void 0:e.map(({assets:i})=>i==null?void 0:i.imageId).filter(Boolean).filter(i=>!dt.getNetworkImageById(i));t&&await Promise.allSettled(t.map(i=>ee._fetchNetworkImage(i)))},async fetchConnectorImages(){const{connectors:t}=ie.state,e=t.map(({imageId:i})=>i).filter(Boolean);await Promise.allSettled(e.map(i=>ee._fetchConnectorImage(i)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>ee._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>ee._fetchTokenImage(e)))},async fetchWallets(t){var i,s;const e=t.exclude??[];return ee._getSdkProperties().sv.startsWith("html-core-")&&e.push(...gx),await gi.get({path:"/getWallets",params:{...ee._getSdkProperties(),...t,page:String(t.page),entries:String(t.entries),include:(i=t.include)==null?void 0:i.join(","),exclude:(s=t.exclude)==null?void 0:s.join(",")}})},async fetchFeaturedWallets(){const{featuredWalletIds:t}=F.state;if(t!=null&&t.length){const e={...ee._getSdkProperties(),page:1,entries:(t==null?void 0:t.length)??tf,include:t},{data:i}=await ee.fetchWallets(e);i.sort((r,o)=>t.indexOf(r.id)-t.indexOf(o.id));const s=i.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(s.map(r=>ee._fetchWalletImage(r))),ze.featured=i,ze.allFeatured=i}},async fetchRecommendedWallets(){try{ze.isFetchingRecommendedWallets=!0;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:i}=F.state,s=[...e??[],...i??[]].filter(Boolean),r=C.getRequestedCaipNetworkIds().join(","),o={page:1,entries:tf,include:t,exclude:s,chains:r},{data:a,count:c}=await ee.fetchWallets(o),d=ae.getRecentWallets(),u=a.map(p=>p.image_id).filter(Boolean),h=d.map(p=>p.image_id).filter(Boolean);await Promise.allSettled([...u,...h].map(p=>ee._fetchWalletImage(p))),ze.recommended=a,ze.allRecommended=a,ze.count=c??0}catch{}finally{ze.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:t}){const{includeWalletIds:e,excludeWalletIds:i,featuredWalletIds:s}=F.state,r=C.getRequestedCaipNetworkIds().join(","),o=[...ze.recommended.map(({id:h})=>h),...i??[],...s??[]].filter(Boolean),a={page:t,entries:wx,include:e,exclude:o,chains:r},{data:c,count:d}=await ee.fetchWallets(a),u=c.slice(0,mx).map(h=>h.image_id).filter(Boolean);await Promise.allSettled(u.map(h=>ee._fetchWalletImage(h))),ze.wallets=V.uniqueBy([...ze.wallets,...ee._filterOutExtensions(c)],"id"),ze.count=d>ze.count?d:ze.count,ze.page=t},async initializeExcludedWallets({ids:t}){const e=C.getRequestedCaipNetworkIds().join(","),i={page:1,entries:t.length,include:t,chains:e},{data:s}=await ee.fetchWallets(i);s&&s.forEach(r=>{ze.excludedWallets.push({rdns:r.rdns,name:r.name})})},async searchWallet({search:t,badge:e}){const{includeWalletIds:i,excludeWalletIds:s}=F.state,r=C.getRequestedCaipNetworkIds().join(",");ze.search=[];const o={page:1,entries:100,search:t==null?void 0:t.trim(),badge_type:e,include:i,exclude:s,chains:r},{data:a}=await ee.fetchWallets(o);_e.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:e??"",search:t??""}});const c=a.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...c.map(d=>ee._fetchWalletImage(d)),V.wait(300)]),ze.search=ee._filterOutExtensions(a)},initPromise(t,e){return ze.promises[t]||(ze.promises[t]=e())},prefetch({fetchConnectorImages:t=!0,fetchFeaturedWallets:e=!0,fetchRecommendedWallets:i=!0,fetchNetworkImages:s=!0}={}){const r=[t&&ee.initPromise("connectorImages",ee.fetchConnectorImages),e&&ee.initPromise("featuredWallets",ee.fetchFeaturedWallets),i&&ee.initPromise("recommendedWallets",ee.fetchRecommendedWallets),s&&ee.initPromise("networkImages",ee.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(r)},prefetchAnalyticsConfig(){var t;(t=F.state.features)!=null&&t.analytics&&ee.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:t}=await gi.get({path:"/getAnalyticsConfig",params:ee._getSdkProperties()});F.setFeatures({analytics:t})}catch{F.setFeatures({analytics:!1})}},setFilterByNamespace(t){if(!t){ze.featured=ze.allFeatured,ze.recommended=ze.allRecommended;return}const e=C.getRequestedCaipNetworkIds().join(",");ze.featured=ze.allFeatured.filter(i=>{var s;return(s=i.chains)==null?void 0:s.some(r=>e.includes(r))}),ze.recommended=ze.allRecommended.filter(i=>{var s;return(s=i.chains)==null?void 0:s.some(r=>e.includes(r))})}},Me=Ve({view:"Connect",history:["Connect"],transactionStack:[]}),X={state:Me,subscribeKey(t,e){return Lt(Me,t,e)},pushTransactionStack(t){Me.transactionStack.push(t)},popTransactionStack(t){var i,s;const e=Me.transactionStack.pop();if(e)if(t)this.goBack(),(i=e==null?void 0:e.onCancel)==null||i.call(e);else{if(e.goBack)this.goBack();else if(e.replace){const r=Me.history.indexOf("ConnectingSiwe");r>0?this.goBackToIndex(r-1):(Ne.close(),Me.history=[])}else e.view&&this.reset(e.view);(s=e==null?void 0:e.onSuccess)==null||s.call(e)}},push(t,e){t!==Me.view&&(Me.view=t,Me.history.push(t),Me.data=e)},reset(t,e){Me.view=t,Me.history=[t],Me.data=e},replace(t,e){Me.history.at(-1)===t||(Me.view=t,Me.history[Me.history.length-1]=t,Me.data=e)},goBack(){var e;const t=!C.state.activeCaipAddress&&this.state.view==="ConnectingFarcaster";if(Me.history.length>1&&!Me.history.includes("UnsupportedChain")){Me.history.pop();const[i]=Me.history.slice(-1);i&&(Me.view=i)}else Ne.close();(e=Me.data)!=null&&e.wallet&&(Me.data.wallet=void 0),setTimeout(()=>{var i,s,r;if(t){de.setFarcasterUrl(void 0,C.state.activeChain);const o=ie.getAuthConnector();(i=o==null?void 0:o.provider)==null||i.reload();const a=qo(F.state);(r=(s=o==null?void 0:o.provider)==null?void 0:s.syncDappData)==null||r.call(s,{metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType})}},100)},goBackToIndex(t){if(Me.history.length>1){Me.history=Me.history.slice(0,t+1);const[e]=Me.history.slice(-1);e&&(Me.view=e)}}},ls=Ve({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),ut={state:ls,subscribe(t){return Ot(ls,()=>t(ls))},setThemeMode(t){ls.themeMode=t;try{const e=ie.getAuthConnector();if(e){const i=ut.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:i,w3mThemeVariables:Ls(i,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){ls.themeVariables={...ls.themeVariables,...t};try{const e=ie.getAuthConnector();if(e){const i=ut.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:i,w3mThemeVariables:Ls(ls.themeVariables,ls.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return qo(ls)}},sf={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Fe=Ve({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...sf}}),ie={state:Fe,subscribe(t){return Ot(Fe,()=>{t(Fe)})},subscribeKey(t,e){return Lt(Fe,t,e)},initialize(t){t.forEach(e=>{const i=ae.getConnectedConnectorId(e);i&&this.setConnectorId(i,e)})},setActiveConnector(t){t&&(Fe.activeConnector=xr(t))},setConnectors(t){t.filter(e=>!Fe.allConnectors.some(i=>i.id===e.id&&this.getConnectorName(i.name)===this.getConnectorName(e.name)&&i.chain===e.chain)).forEach(e=>{e.type!=="MULTI_CHAIN"&&Fe.allConnectors.push(xr(e))}),Fe.connectors=this.mergeMultiChainConnectors(Fe.allConnectors)},removeAdapter(t){Fe.allConnectors=Fe.allConnectors.filter(e=>e.chain!==t),Fe.connectors=this.mergeMultiChainConnectors(Fe.allConnectors)},mergeMultiChainConnectors(t){const e=this.generateConnectorMapByName(t),i=[];return e.forEach(s=>{const r=s[0],o=(r==null?void 0:r.id)===oe.CONNECTOR_ID.AUTH;s.length>1&&r?i.push({name:r.name,imageUrl:r.imageUrl,imageId:r.imageId,connectors:[...s],type:o?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(r==null?void 0:r.id)||""}):r&&i.push(r)}),i},generateConnectorMapByName(t){const e=new Map;return t.forEach(i=>{const{name:s}=i,r=this.getConnectorName(s);if(!r)return;const o=e.get(r)||[];o.find(a=>a.chain===i.chain)||o.push(i),e.set(r,o)}),e},getConnectorName(t){return t&&({"Trust Wallet":"Trust"}[t]||t)},getUniqueConnectorsByName(t){const e=[];return t.forEach(i=>{e.find(s=>s.chain===i.chain)||e.push(i)}),e},addConnector(t){var e,i,s;if(t.id===oe.CONNECTOR_ID.AUTH){const r=t,o=qo(F.state),a=ut.getSnapshot().themeMode,c=ut.getSnapshot().themeVariables;(i=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||i.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType}),(s=r==null?void 0:r.provider)==null||s.syncTheme({themeMode:a,themeVariables:c,w3mThemeVariables:Ls(c,a)}),this.setConnectors([t])}else this.setConnectors([t])},getAuthConnector(t){var s;const e=t||C.state.activeChain,i=Fe.connectors.find(r=>r.id===oe.CONNECTOR_ID.AUTH);if(i)return(s=i==null?void 0:i.connectors)!=null&&s.length?i.connectors.find(r=>r.chain===e):i},getAnnouncedConnectorRdns(){return Fe.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectorById(t){return Fe.allConnectors.find(e=>e.id===t)},getConnector(t,e){return Fe.allConnectors.filter(i=>i.chain===C.state.activeChain).find(i=>{var s;return i.explorerId===t||((s=i.info)==null?void 0:s.rdns)===e})},syncIfAuthConnector(t){var o,a;if(t.id!=="ID_AUTH")return;const e=t,i=qo(F.state),s=ut.getSnapshot().themeMode,r=ut.getSnapshot().themeVariables;(a=(o=e==null?void 0:e.provider)==null?void 0:o.syncDappData)==null||a.call(o,{metadata:i.metadata,sdkVersion:i.sdkVersion,sdkType:i.sdkType,projectId:i.projectId}),e.provider.syncTheme({themeMode:s,themeVariables:r,w3mThemeVariables:Ls(r,s)})},getConnectorsByNamespace(t){const e=Fe.allConnectors.filter(i=>i.chain===t);return this.mergeMultiChainConnectors(e)},selectWalletConnector(t){const e=ie.getConnector(t.id,t.rdns);C.state.activeChain===oe.CHAIN.SOLANA&&cx.handleSolanaDeeplinkRedirect((e==null?void 0:e.name)||t.name||""),e?X.push("ConnectingExternal",{connector:e}):X.push("ConnectingWalletConnect",{wallet:t})},getConnectors(t){return t?this.getConnectorsByNamespace(t):this.mergeMultiChainConnectors(Fe.allConnectors)},setFilterByNamespace(t){Fe.filterByNamespace=t,Fe.connectors=this.getConnectors(t),ee.setFilterByNamespace(t)},setConnectorId(t,e){t&&(Fe.activeConnectorIds={...Fe.activeConnectorIds,[e]:t},ae.setConnectedConnectorId(e,t))},removeConnectorId(t){Fe.activeConnectorIds={...Fe.activeConnectorIds,[t]:void 0},ae.deleteConnectedConnectorId(t)},getConnectorId(t){if(t)return Fe.activeConnectorIds[t]},isConnected(t){return t?!!Fe.activeConnectorIds[t]:Object.values(Fe.activeConnectorIds).some(e=>!!e)},resetConnectorIds(){Fe.activeConnectorIds={...sf}}};function qc(t,e){return ie.getConnectorId(t)===e}function vx(t){const e=Array.from(C.state.chains.keys());let i=[];return t?(i.push([t,C.state.chains.get(t)]),qc(t,oe.CONNECTOR_ID.WALLET_CONNECT)?e.forEach(s=>{s!==t&&qc(s,oe.CONNECTOR_ID.WALLET_CONNECT)&&i.push([s,C.state.chains.get(s)])}):qc(t,oe.CONNECTOR_ID.AUTH)&&e.forEach(s=>{s!==t&&qc(s,oe.CONNECTOR_ID.AUTH)&&i.push([s,C.state.chains.get(s)])})):i=Array.from(C.state.chains.entries()),i}const sT="https://secure.walletconnect.org/sdk";typeof Mo<"u"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.NEXT_PUBLIC_SECURE_SITE_SDK_URL,typeof Mo<"u"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.NEXT_PUBLIC_DEFAULT_LOG_LEVEL,typeof Mo<"u"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION;const Ds={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Cr=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),ht=Ve({...Cr}),Ke={state:ht,subscribeKey(t,e){return Lt(ht,t,e)},showLoading(t,e={}){this._showMessage({message:t,variant:"loading",...e})},showSuccess(t){this._showMessage({message:t,variant:"success"})},showSvg(t,e){this._showMessage({message:t,svg:e})},showError(t){const e=V.parseError(t);this._showMessage({message:e,variant:"error"})},hide(){ht.message=Cr.message,ht.variant=Cr.variant,ht.svg=Cr.svg,ht.open=Cr.open,ht.autoClose=Cr.autoClose},_showMessage({message:t,svg:e,variant:i="success",autoClose:s=Cr.autoClose}){ht.open?(ht.open=!1,setTimeout(()=>{ht.message=t,ht.variant=i,ht.svg=e,ht.open=!0,ht.autoClose=s},150)):(ht.message=t,ht.variant=i,ht.svg=e,ht.open=!0,ht.autoClose=s)}},js={getSIWX(){return F.state.siwx},async initializeIfEnabled(){var o;const t=F.state.siwx,e=C.getActiveCaipAddress();if(!(t&&e))return;const[i,s,r]=e.split(":");if(C.checkIfSupportedNetwork(i))try{if((await t.getSessions(`${i}:${s}`,r)).length)return;await Ne.open({view:"SIWXSignMessage"})}catch(a){console.error("SIWXUtil:initializeIfEnabled",a),_e.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((o=ce._getClient())==null?void 0:o.disconnect().catch(console.error)),X.reset("Connect"),Ke.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const t=F.state.siwx,e=V.getPlainAddress(C.getActiveCaipAddress()),i=C.getActiveCaipNetwork(),s=ce._getClient();if(!t)throw new Error("SIWX is not enabled");if(!e)throw new Error("No ActiveCaipAddress found");if(!i)throw new Error("No ActiveCaipNetwork or client found");if(!s)throw new Error("No ConnectionController client found");try{const r=await t.createMessage({chainId:i.caipNetworkId,accountAddress:e}),o=r.toString();ie.getConnectorId(i.chainNamespace)===oe.CONNECTOR_ID.AUTH&&X.pushTransactionStack({view:null,goBack:!1,replace:!0});const a=await s.signMessage(o);await t.addSession({data:r,message:o,signature:a}),Ne.close(),_e.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(r){const o=this.getSIWXEventProperties();(!Ne.state.open||X.state.view==="ApproveTransaction")&&await Ne.open({view:"SIWXSignMessage"}),o.isSmartAccount?Ke.showError("This application might not support Smart Accounts"):Ke.showError("Signature declined"),_e.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:o}),console.error("SWIXUtil:requestSignMessage",r)}},async cancelSignMessage(){var t,e;try{(e=(t=this.getSIWX())==null?void 0:t.getRequired)!=null&&e.call(t)?await ce.disconnect():Ne.close(),X.reset("Connect"),_e.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(i){console.error("SIWXUtil:cancelSignMessage",i)}},async getSessions(){const t=F.state.siwx,e=V.getPlainAddress(C.getActiveCaipAddress()),i=C.getActiveCaipNetwork();return t&&e&&i?t.getSessions(i.caipNetworkId,e):[]},async isSIWXCloseDisabled(){var e;const t=this.getSIWX();if(t){const i=X.state.view==="ApproveTransaction",s=X.state.view==="SIWXSignMessage";if(i||s)return((e=t.getRequired)==null?void 0:e.call(t))&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:t,chains:e,methods:i}){var c,d,u;const s=js.getSIWX(),r=new Set(e.map(h=>h.split(":")[0]));if(!s||r.size!==1||!r.has("eip155"))return!1;const o=await s.createMessage({chainId:((c=C.getActiveCaipNetwork())==null?void 0:c.caipNetworkId)||"",accountAddress:""}),a=await t.authenticate({nonce:o.nonce,domain:o.domain,uri:o.uri,exp:o.expirationTime,iat:o.issuedAt,nbf:o.notBefore,requestId:o.requestId,version:o.version,resources:o.resources,statement:o.statement,chainId:o.chainId,methods:i,chains:[o.chainId,...e.filter(h=>h!==o.chainId)]});if(Ke.showLoading("Authenticating...",{autoClose:!1}),de.setConnectedWalletInfo({...a.session.peer.metadata,name:a.session.peer.metadata.name,icon:(d=a.session.peer.metadata.icons)==null?void 0:d[0],type:"WALLET_CONNECT"},Array.from(r)[0]),(u=a==null?void 0:a.auths)==null?void 0:u.length){const h=a.auths.map(p=>{const g=t.client.formatAuthMessage({request:p.p,iss:p.p.iss});return{data:{...p.p,accountAddress:p.p.iss.split(":").slice(-1).join(""),chainId:p.p.iss.split(":").slice(2,4).join(":"),uri:p.p.aud,version:p.p.version||o.version,expirationTime:p.p.exp,issuedAt:p.p.iat,notBefore:p.p.nbf},message:g,signature:p.s.s,cacao:p}});try{await s.setSessions(h),_e.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:js.getSIWXEventProperties()})}catch(p){throw console.error("SIWX:universalProviderAuth - failed to set sessions",p),_e.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:js.getSIWXEventProperties()}),await t.disconnect().catch(console.error),p}finally{Ke.hide()}}return!0},getSIWXEventProperties(){var e,i;const t=C.state.activeChain;return{network:((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||"",isSmartAccount:((i=de.state.preferredAccountTypes)==null?void 0:i[t])===Ds.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){const t=this.getSIWX();t&&await t.setSessions([])}},Ze=Ve({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),yx={state:Ze,subscribe(t){return Ot(Ze,()=>t(Ze))},setLastNetworkInView(t){Ze.lastNetworkInView=t},async fetchTransactions(t,e){var i,s;if(!t)throw new Error("Transactions can't be fetched without an accountAddress");Ze.loading=!0;try{const r=await me.fetchTransactions({account:t,cursor:Ze.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:(i=C.state.activeCaipNetwork)==null?void 0:i.caipNetworkId}),o=this.filterSpamTransactions(r.data),a=this.filterByConnectedChain(o),c=[...Ze.transactions,...a];Ze.loading=!1,e==="coinbase"?Ze.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Ze.coinbaseTransactions,r.data):(Ze.transactions=c,Ze.transactionsByYear=this.groupTransactionsByYearAndMonth(Ze.transactionsByYear,a)),Ze.empty=c.length===0,Ze.next=r.next?r.next:void 0}catch{const r=C.state.activeChain;_e.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:F.state.projectId,cursor:Ze.next,isSmartAccount:((s=de.state.preferredAccountTypes)==null?void 0:s[r])===Ds.ACCOUNT_TYPES.SMART_ACCOUNT}}),Ke.showError("Failed to fetch transactions"),Ze.loading=!1,Ze.empty=!0,Ze.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const i=t;return e.forEach(s=>{const r=new Date(s.metadata.minedAt).getFullYear(),o=new Date(s.metadata.minedAt).getMonth(),a=i[r]??{},c=(a[o]??[]).filter(d=>d.id!==s.id);i[r]={...a,[o]:[...c,s].sort((d,u)=>new Date(u.metadata.minedAt).getTime()-new Date(d.metadata.minedAt).getTime())}}),i},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(i=>{var s;return((s=i.nft_info)==null?void 0:s.flags.is_spam)===!0}))},filterByConnectedChain(t){var i;const e=(i=C.state.activeCaipNetwork)==null?void 0:i.caipNetworkId;return t.filter(s=>s.metadata.chain===e)},clearCursor(){Ze.next=void 0},resetTransactions(){Ze.transactions=[],Ze.transactionsByYear={},Ze.lastNetworkInView=void 0,Ze.loading=!1,Ze.empty=!1,Ze.next=void 0}},Ye=Ve({wcError:!1,buffering:!1,status:"disconnected"});let Ln;const ce={state:Ye,subscribeKey(t,e){return Lt(Ye,t,e)},_getClient(){return Ye._client},setClient(t){Ye._client=xr(t)},async connectWalletConnect(){var t,e,i,s;if(V.isTelegram()||V.isSafari()&&V.isIos()){if(Ln){await Ln,Ln=void 0;return}if(!V.isPairingExpired(Ye==null?void 0:Ye.wcPairingExpiry)){const r=Ye.wcUri;Ye.wcUri=r;return}Ln=(e=(t=this._getClient())==null?void 0:t.connectWalletConnect)==null?void 0:e.call(t).catch(()=>{}),this.state.status="connecting",await Ln,Ln=void 0,Ye.wcPairingExpiry=void 0,this.state.status="connected"}else await((s=(i=this._getClient())==null?void 0:i.connectWalletConnect)==null?void 0:s.call(i))},async connectExternal(t,e,i=!0){var s,r;await((r=(s=this._getClient())==null?void 0:s.connectExternal)==null?void 0:r.call(s,t)),i&&C.setActiveNamespace(e)},async reconnectExternal(t){var i,s;await((s=(i=this._getClient())==null?void 0:i.reconnectExternal)==null?void 0:s.call(i,t));const e=t.chain||C.state.activeChain;e&&ie.setConnectorId(t.id,e)},async setPreferredAccountType(t,e){var s;Ne.setLoading(!0,C.state.activeChain);const i=ie.getAuthConnector();i&&(de.setPreferredAccountType(t,e),await i.provider.setPreferredAccount(t),ae.setPreferredAccountTypes(de.state.preferredAccountTypes??{[e]:t}),await this.reconnectExternal(i),Ne.setLoading(!1,C.state.activeChain),_e.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}}))},async signMessage(t){var e;return(e=this._getClient())==null?void 0:e.signMessage(t)},parseUnits(t,e){var i;return(i=this._getClient())==null?void 0:i.parseUnits(t,e)},formatUnits(t,e){var i;return(i=this._getClient())==null?void 0:i.formatUnits(t,e)},async sendTransaction(t){var e;return(e=this._getClient())==null?void 0:e.sendTransaction(t)},async getCapabilities(t){var e;return(e=this._getClient())==null?void 0:e.getCapabilities(t)},async grantPermissions(t){var e;return(e=this._getClient())==null?void 0:e.grantPermissions(t)},async walletGetAssets(t){var e;return((e=this._getClient())==null?void 0:e.walletGetAssets(t))??{}},async estimateGas(t){var e;return(e=this._getClient())==null?void 0:e.estimateGas(t)},async writeContract(t){var e;return(e=this._getClient())==null?void 0:e.writeContract(t)},async getEnsAddress(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAddress(t)},async getEnsAvatar(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAvatar(t)},checkInstalled(t){var e,i;return((i=(e=this._getClient())==null?void 0:e.checkInstalled)==null?void 0:i.call(e,t))||!1},resetWcConnection(){Ye.wcUri=void 0,Ye.wcPairingExpiry=void 0,Ye.wcLinking=void 0,Ye.recentWallet=void 0,Ye.status="disconnected",yx.resetTransactions(),ae.deleteWalletConnectDeepLink()},resetUri(){Ye.wcUri=void 0,Ye.wcPairingExpiry=void 0},finalizeWcConnection(){var i,s;const{wcLinking:t,recentWallet:e}=ce.state;t&&ae.setWalletConnectDeepLink(t),e&&ae.setAppKitRecent(e),_e.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode",name:((s=(i=X.state.data)==null?void 0:i.wallet)==null?void 0:s.name)||"Unknown"}})},setWcBasic(t){Ye.wcBasic=t},setUri(t){Ye.wcUri=t,Ye.wcPairingExpiry=V.getPairingExpiry()},setWcLinking(t){Ye.wcLinking=t},setWcError(t){Ye.wcError=t,Ye.buffering=!1},setRecentWallet(t){Ye.recentWallet=t},setBuffering(t){Ye.buffering=t},setStatus(t){Ye.status=t},async disconnect(t){try{Ne.setLoading(!0,t),await js.clearSessions(),await C.disconnect(t),Ne.setLoading(!1,t),ie.setFilterByNamespace(void 0)}catch{throw new Error("Failed to disconnect")}}},Bn=Ve({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),ds={state:Bn,subscribe(t){return Ot(Bn,()=>t(Bn))},subscribeOpen(t){return Lt(Bn,"open",t)},set(t){Object.assign(Bn,{...Bn,...t})}};function Vo(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function zs(t){return Vo(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}const rf="2.27.0";let Ko={getDocsUrl:({docsBaseUrl:t,docsPath:e="",docsSlug:i})=>e?`${t??"https://viem.sh"}${e}${i?`#${i}`:""}`:void 0,version:`viem@${rf}`};class Ae extends Error{constructor(e,i={}){var c,d;const s=i.cause instanceof Ae?i.cause.details:(c=i.cause)!=null&&c.message?i.cause.message:i.details,r=i.cause instanceof Ae&&i.cause.docsPath||i.docsPath,o=(d=Ko.getDocsUrl)==null?void 0:d.call(Ko,{...i,docsPath:r}),a=[e||"An error occurred.","",...i.metaMessages?[...i.metaMessages,""]:[],...o?[`Docs: ${o}`]:[],...s?[`Details: ${s}`]:[],...Ko.version?[`Version: ${Ko.version}`]:[]].join(`
`);super(a,i.cause?{cause:i.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=s,this.docsPath=r,this.metaMessages=i.metaMessages,this.name=i.name??this.name,this.shortMessage=e,this.version=rf}walk(e){return nf(this,e)}}function nf(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause!==void 0?nf(t.cause,e):e?null:t}class of extends Ae{constructor({offset:e,position:i,size:s}){super(`Slice ${i==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${s}).`,{name:"SliceOffsetOutOfBoundsError"})}}class af extends Ae{constructor({size:e,targetSize:i,type:s}){super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (${e}) exceeds padding size (${i}).`,{name:"SizeExceedsPaddingSizeError"})}}function Un(t,{dir:e,size:i=32}={}){return typeof t=="string"?bx(t,{dir:e,size:i}):_x(t,{dir:e,size:i})}function bx(t,{dir:e,size:i=32}={}){if(i===null)return t;const s=t.replace("0x","");if(s.length>i*2)throw new af({size:Math.ceil(s.length/2),targetSize:i,type:"hex"});return`0x${s[e==="right"?"padEnd":"padStart"](i*2,"0")}`}function _x(t,{dir:e,size:i=32}={}){if(i===null)return t;if(t.length>i)throw new af({size:t.length,targetSize:i,type:"bytes"});const s=new Uint8Array(i);for(let r=0;r<i;r++){const o=e==="right";s[o?r:i-r-1]=t[o?r:t.length-r-1]}return s}class xx extends Ae{constructor({max:e,min:i,signed:s,size:r,value:o}){super(`Number "${o}" is not in safe ${r?`${r*8}-bit ${s?"signed":"unsigned"} `:""}integer range ${e?`(${i} to ${e})`:`(above ${i})`}`,{name:"IntegerOutOfRangeError"})}}class Cx extends Ae{constructor({givenSize:e,maxSize:i}){super(`Size cannot exceed ${i} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}function Mn(t,{dir:e="left"}={}){let i=typeof t=="string"?t.replace("0x",""):t,s=0;for(let r=0;r<i.length-1&&i[e==="left"?r:i.length-r-1].toString()==="0";r++)s++;return i=e==="left"?i.slice(s):i.slice(0,i.length-s),typeof t=="string"?(i.length===1&&e==="right"&&(i=`${i}0`),`0x${i.length%2===1?`0${i}`:i}`):i}function Dn(t,{size:e}){if(zs(t)>e)throw new Cx({givenSize:zs(t),maxSize:e})}function us(t,e={}){const{signed:i}=e;e.size&&Dn(t,{size:e.size});const s=BigInt(t);if(!i)return s;const r=(t.length-2)/2,o=(1n<<BigInt(r)*8n-1n)-1n;return s<=o?s:s-BigInt(`0x${"f".padStart(r*2,"f")}`)-1n}function Wc(t,e={}){return Number(us(t,e))}const Ex=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function we(t,e={}){return typeof t=="number"||typeof t=="bigint"?Bt(t,e):typeof t=="string"?cf(t,e):typeof t=="boolean"?Ix(t,e):hs(t,e)}function Ix(t,e={}){const i=`0x${Number(t)}`;return typeof e.size=="number"?(Dn(i,{size:e.size}),Un(i,{size:e.size})):i}function hs(t,e={}){let i="";for(let r=0;r<t.length;r++)i+=Ex[t[r]];const s=`0x${i}`;return typeof e.size=="number"?(Dn(s,{size:e.size}),Un(s,{dir:"right",size:e.size})):s}function Bt(t,e={}){const{signed:i,size:s}=e,r=BigInt(t);let o;s?i?o=(1n<<BigInt(s)*8n-1n)-1n:o=2n**(BigInt(s)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const a=typeof o=="bigint"&&i?-o-1n:0;if(o&&r>o||r<a){const d=typeof t=="bigint"?"n":"";throw new xx({max:o?`${o}${d}`:void 0,min:`${a}${d}`,signed:i,size:s,value:`${t}${d}`})}const c=`0x${(i&&r<0?(1n<<BigInt(s*8))+BigInt(r):r).toString(16)}`;return s?Un(c,{size:s}):c}const Ax=new TextEncoder;function cf(t,e={}){const i=Ax.encode(t);return hs(i,e)}const Sx=new TextEncoder;function lf(t,e={}){return typeof t=="number"||typeof t=="bigint"?Px(t,e):typeof t=="boolean"?Nx(t,e):Vo(t)?Er(t,e):uf(t,e)}function Nx(t,e={}){const i=new Uint8Array(1);return i[0]=Number(t),typeof e.size=="number"?(Dn(i,{size:e.size}),Un(i,{size:e.size})):i}const ps={zero:48,nine:57,A:65,F:70,a:97,f:102};function df(t){if(t>=ps.zero&&t<=ps.nine)return t-ps.zero;if(t>=ps.A&&t<=ps.F)return t-(ps.A-10);if(t>=ps.a&&t<=ps.f)return t-(ps.a-10)}function Er(t,e={}){let i=t;e.size&&(Dn(i,{size:e.size}),i=Un(i,{dir:"right",size:e.size}));let s=i.slice(2);s.length%2&&(s=`0${s}`);const r=s.length/2,o=new Uint8Array(r);for(let a=0,c=0;a<r;a++){const d=df(s.charCodeAt(c++)),u=df(s.charCodeAt(c++));if(d===void 0||u===void 0)throw new Ae(`Invalid byte sequence ("${s[c-2]}${s[c-1]}" in "${s}").`);o[a]=d*16+u}return o}function Px(t,e){const i=Bt(t,e);return Er(i)}function uf(t,e={}){const i=Sx.encode(t);return typeof e.size=="number"?(Dn(i,{size:e.size}),Un(i,{dir:"right",size:e.size})):i}function Vc(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function kx(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Go(t,...e){if(!kx(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function Ox(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Vc(t.outputLen),Vc(t.blockLen)}function jn(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function hf(t,e){Go(t);const i=e.outputLen;if(t.length<i)throw new Error("digestInto() expects output buffer of length at least "+i)}const Kc=BigInt(2**32-1),pf=BigInt(32);function Tx(t,e=!1){return e?{h:Number(t&Kc),l:Number(t>>pf&Kc)}:{h:Number(t>>pf&Kc)|0,l:Number(t&Kc)|0}}function Rx(t,e=!1){let i=new Uint32Array(t.length),s=new Uint32Array(t.length);for(let r=0;r<t.length;r++){const{h:o,l:a}=Tx(t[r],e);[i[r],s[r]]=[o,a]}return[i,s]}const $x=(t,e,i)=>t<<i|e>>>32-i,Lx=(t,e,i)=>e<<i|t>>>32-i,Bx=(t,e,i)=>e<<i-32|t>>>64-i,Ux=(t,e,i)=>t<<i-32|e>>>64-i,zn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function Mx(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Fu(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Wi(t,e){return t<<32-e|t>>>e}const gf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Dx(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function ff(t){for(let e=0;e<t.length;e++)t[e]=Dx(t[e])}function jx(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function Gc(t){return typeof t=="string"&&(t=jx(t)),Go(t),t}function zx(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];Go(r),e+=r.length}const i=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const o=t[s];i.set(o,r),r+=o.length}return i}class Hu{clone(){return this._cloneInto()}}function wf(t){const e=s=>t().update(Gc(s)).digest(),i=t();return e.outputLen=i.outputLen,e.blockLen=i.blockLen,e.create=()=>t(),e}function Fx(t=32){if(zn&&typeof zn.getRandomValues=="function")return zn.getRandomValues(new Uint8Array(t));if(zn&&typeof zn.randomBytes=="function")return zn.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const mf=[],vf=[],yf=[],Hx=BigInt(0),Zo=BigInt(1),qx=BigInt(2),Wx=BigInt(7),Vx=BigInt(256),Kx=BigInt(113);for(let t=0,e=Zo,i=1,s=0;t<24;t++){[i,s]=[s,(2*i+3*s)%5],mf.push(2*(5*s+i)),vf.push((t+1)*(t+2)/2%64);let r=Hx;for(let o=0;o<7;o++)e=(e<<Zo^(e>>Wx)*Kx)%Vx,e&qx&&(r^=Zo<<(Zo<<BigInt(o))-Zo);yf.push(r)}const[Gx,Zx]=Rx(yf,!0),bf=(t,e,i)=>i>32?Bx(t,e,i):$x(t,e,i),_f=(t,e,i)=>i>32?Ux(t,e,i):Lx(t,e,i);function Yx(t,e=24){const i=new Uint32Array(10);for(let s=24-e;s<24;s++){for(let a=0;a<10;a++)i[a]=t[a]^t[a+10]^t[a+20]^t[a+30]^t[a+40];for(let a=0;a<10;a+=2){const c=(a+8)%10,d=(a+2)%10,u=i[d],h=i[d+1],p=bf(u,h,1)^i[c],g=_f(u,h,1)^i[c+1];for(let f=0;f<50;f+=10)t[a+f]^=p,t[a+f+1]^=g}let r=t[2],o=t[3];for(let a=0;a<24;a++){const c=vf[a],d=bf(r,o,c),u=_f(r,o,c),h=mf[a];r=t[h],o=t[h+1],t[h]=d,t[h+1]=u}for(let a=0;a<50;a+=10){for(let c=0;c<10;c++)i[c]=t[a+c];for(let c=0;c<10;c++)t[a+c]^=~i[(c+2)%10]&i[(c+4)%10]}t[0]^=Gx[s],t[1]^=Zx[s]}i.fill(0)}class qu extends Hu{constructor(e,i,s,r=!1,o=24){if(super(),this.blockLen=e,this.suffix=i,this.outputLen=s,this.enableXOF=r,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Vc(s),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Mx(this.state)}keccak(){gf||ff(this.state32),Yx(this.state32,this.rounds),gf||ff(this.state32),this.posOut=0,this.pos=0}update(e){jn(this);const{blockLen:i,state:s}=this;e=Gc(e);const r=e.length;for(let o=0;o<r;){const a=Math.min(i-this.pos,r-o);for(let c=0;c<a;c++)s[this.pos++]^=e[o++];this.pos===i&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:i,pos:s,blockLen:r}=this;e[s]^=i,i&128&&s===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){jn(this,!1),Go(e),this.finish();const i=this.state,{blockLen:s}=this;for(let r=0,o=e.length;r<o;){this.posOut>=s&&this.keccak();const a=Math.min(s-this.posOut,o-r);e.set(i.subarray(this.posOut,this.posOut+a),r),this.posOut+=a,r+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Vc(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(hf(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:i,suffix:s,outputLen:r,rounds:o,enableXOF:a}=this;return e||(e=new qu(i,s,r,a,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=s,e.outputLen=r,e.enableXOF=a,e.destroyed=this.destroyed,e}}const Jx=(t,e,i)=>wf(()=>new qu(e,t,i)),xf=Jx(1,136,256/8);function Xx(t,e){const i=e||"hex",s=xf(Vo(t,{strict:!1})?lf(t):t);return i==="bytes"?s:we(s)}class Fs extends Ae{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}class Zc extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const i=super.get(e);return super.has(e)&&i!==void 0&&(this.delete(e),super.set(e,i)),i}set(e,i){if(super.set(e,i),this.maxSize&&this.size>this.maxSize){const s=this.keys().next().value;s&&this.delete(s)}return this}}const Wu=new Zc(8192);function Qx(t,e){if(Wu.has(`${t}.${e}`))return Wu.get(`${t}.${e}`);const i=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),s=Xx(uf(i),"bytes"),r=(e?i.substring(`${e}0x`.length):i).split("");for(let a=0;a<40;a+=2)s[a>>1]>>4>=8&&r[a]&&(r[a]=r[a].toUpperCase()),(s[a>>1]&15)>=8&&r[a+1]&&(r[a+1]=r[a+1].toUpperCase());const o=`0x${r.join("")}`;return Wu.set(`${t}.${e}`,o),o}const e7=/^0x[a-fA-F0-9]{40}$/,Vu=new Zc(8192);function gs(t,e){const{strict:i=!0}=e??{},s=`${t}.${i}`;if(Vu.has(s))return Vu.get(s);const r=e7.test(t)?t.toLowerCase()===t?!0:i?Qx(t)===t:!0:!1;return Vu.set(s,r),r}function Fn(t){return`0x${t.reduce((e,i)=>e+i.replace("0x",""),"")}`}function t7(t,e,i,{strict:s}={}){return Vo(t,{strict:!1})?s7(t,e,i,{strict:s}):i7(t,e,i,{strict:s})}function Cf(t,e){if(typeof e=="number"&&e>0&&e>zs(t)-1)throw new of({offset:e,position:"start",size:zs(t)})}function Ef(t,e,i){if(typeof e=="number"&&typeof i=="number"&&zs(t)!==i-e)throw new of({offset:i,position:"end",size:zs(t)})}function i7(t,e,i,{strict:s}={}){Cf(t,e);const r=t.slice(e,i);return s&&Ef(r,e,i),r}function s7(t,e,i,{strict:s}={}){Cf(t,e);const r=`0x${t.replace("0x","").slice((e??0)*2,(i??t.length)*2)}`;return s&&Ef(r,e,i),r}class If extends Ae{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class r7 extends Ae{constructor({length:e,position:i}){super(`Position \`${i}\` is out of bounds (\`0 < position < ${e}\`).`,{name:"PositionOutOfBoundsError"})}}class n7 extends Ae{constructor({count:e,limit:i}){super(`Recursive read limit of \`${i}\` exceeded (recursive read count: \`${e}\`).`,{name:"RecursiveReadLimitExceededError"})}}const o7={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new n7({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new r7({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new If({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new If({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const i=e??this.position;return this.assertPosition(i+t-1),this.bytes.subarray(i,i+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const i=this.inspectBytes(t);return this.position+=e??t,i},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},get remaining(){return this.bytes.length-this.position},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function Af(t,{recursiveReadLimit:e=8192}={}){const i=Object.create(o7);return i.bytes=t,i.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),i.positionReadCount=new Map,i.recursiveReadLimit=e,i}const Ir=(t,e,i)=>JSON.stringify(t,(s,r)=>{const o=typeof r=="bigint"?r.toString():r;return typeof e=="function"?e(s,o):o},i),a7={ether:-9,wei:9};function Sf(t,e){let i=t.toString();const s=i.startsWith("-");s&&(i=i.slice(1)),i=i.padStart(e,"0");let[r,o]=[i.slice(0,i.length-e),i.slice(i.length-e)];return o=o.replace(/(0+)$/,""),`${s?"-":""}${r||"0"}${o?`.${o}`:""}`}function Ku(t,e="wei"){return Sf(t,a7[e])}function c7(t){const e=Object.entries(t).map(([s,r])=>r===void 0||r===!1?null:[s,r]).filter(Boolean),i=e.reduce((s,[r])=>Math.max(s,r.length),0);return e.map(([s,r])=>`  ${`${s}:`.padEnd(i+1)}  ${r}`).join(`
`)}class l7 extends Ae{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`,{name:"InvalidLegacyVError"})}}class d7 extends Ae{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",c7(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class u7 extends Ae{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}const Gu=t=>t;class Yo extends Ae{constructor({body:e,cause:i,details:s,headers:r,status:o,url:a}){super("HTTP request failed.",{cause:i,details:s,metaMessages:[o&&`Status: ${o}`,`URL: ${Gu(a)}`,e&&`Request body: ${Ir(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=o,this.url=a}}class Nf extends Ae{constructor({body:e,error:i,url:s}){super("RPC Request failed.",{cause:i,details:i.message,metaMessages:[`URL: ${Gu(s)}`,`Request body: ${Ir(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=i.code,this.data=i.data}}class Pf extends Ae{constructor({body:e,url:i}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Gu(i)}`,`Request body: ${Ir(e)}`],name:"TimeoutError"})}}const h7=-1;class Wt extends Ae{constructor(e,{code:i,docsPath:s,metaMessages:r,name:o,shortMessage:a}){super(a,{cause:e,docsPath:s,metaMessages:r||(e==null?void 0:e.metaMessages),name:o||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=o||e.name,this.code=e instanceof Nf?e.code:i??h7}}class ri extends Wt{constructor(e,i){super(e,i),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=i.data}}class Jo extends Wt{constructor(e){super(e,{code:Jo.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(Jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Xo extends Wt{constructor(e){super(e,{code:Xo.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(Xo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Qo extends Wt{constructor(e,{method:i}={}){super(e,{code:Qo.code,name:"MethodNotFoundRpcError",shortMessage:`The method${i?` "${i}"`:""} does not exist / is not available.`})}}Object.defineProperty(Qo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ea extends Wt{constructor(e){super(e,{code:ea.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(ea,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Hn extends Wt{constructor(e){super(e,{code:Hn.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(Hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class ta extends Wt{constructor(e){super(e,{code:ta.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(ta,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class ia extends Wt{constructor(e){super(e,{code:ia.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(ia,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class sa extends Wt{constructor(e){super(e,{code:sa.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(sa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class qn extends Wt{constructor(e){super(e,{code:qn.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(qn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Ar extends Wt{constructor(e,{method:i}={}){super(e,{code:Ar.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${i?` "${i}"`:""} is not supported.`})}}Object.defineProperty(Ar,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Wn extends Wt{constructor(e){super(e,{code:Wn.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(Wn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class ra extends Wt{constructor(e){super(e,{code:ra.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(ra,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Sr extends ri{constructor(e){super(e,{code:Sr.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(Sr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class na extends ri{constructor(e){super(e,{code:na.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(na,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class oa extends ri{constructor(e,{method:i}={}){super(e,{code:oa.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${i?` " ${i}"`:""}.`})}}Object.defineProperty(oa,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class aa extends ri{constructor(e){super(e,{code:aa.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(aa,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class ca extends ri{constructor(e){super(e,{code:ca.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(ca,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class la extends ri{constructor(e){super(e,{code:la.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(la,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class da extends ri{constructor(e){super(e,{code:da.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(da,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class ua extends ri{constructor(e){super(e,{code:ua.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(ua,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class ha extends ri{constructor(e){super(e,{code:ha.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(ha,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class pa extends ri{constructor(e){super(e,{code:pa.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(pa,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class ga extends ri{constructor(e){super(e,{code:ga.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(ga,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class fa extends ri{constructor(e){super(e,{code:fa.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(fa,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class wa extends ri{constructor(e){super(e,{code:wa.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(wa,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class p7 extends Wt{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}function Nr(t,e="hex"){const i=kf(t),s=Af(new Uint8Array(i.length));return i.encode(s),e==="hex"?hs(s.bytes):s.bytes}function kf(t){return Array.isArray(t)?g7(t.map(e=>kf(e))):f7(t)}function g7(t){const e=t.reduce((s,r)=>s+r.length,0),i=Of(e);return{length:e<=55?1+e:1+i+e,encode(s){e<=55?s.pushByte(192+e):(s.pushByte(247+i),i===1?s.pushUint8(e):i===2?s.pushUint16(e):i===3?s.pushUint24(e):s.pushUint32(e));for(const{encode:r}of t)r(s)}}}function f7(t){const e=typeof t=="string"?Er(t):t,i=Of(e.length);return{length:e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+i+e.length,encode(s){e.length===1&&e[0]<128?s.pushBytes(e):e.length<=55?(s.pushByte(128+e.length),s.pushBytes(e)):(s.pushByte(183+i),i===1?s.pushUint8(e.length):i===2?s.pushUint16(e.length):i===3?s.pushUint24(e.length):s.pushUint32(e.length),s.pushBytes(e))}}}function Of(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new Ae("Length is too large.")}class Zu extends Ae{constructor({cause:e,message:i}={}){var r;const s=(r=i==null?void 0:i.replace("execution reverted: ",""))==null?void 0:r.replace("execution reverted","");super(`Execution reverted ${s?`with reason: ${s}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(Zu,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(Zu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class ma extends Ae{constructor({cause:e,maxFeePerGas:i}={}){super(`The fee cap (\`maxFeePerGas\`${i?` = ${Ku(i)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(ma,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Yu extends Ae{constructor({cause:e,maxPriorityFeePerGas:i,maxFeePerGas:s}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${i?` = ${Ku(i)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s?` = ${Ku(s)} gwei`:""}).`].join(`
`),{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(Yu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function Yc(t,e){return({exclude:i,format:s})=>({exclude:i,format:r=>{const o=e(r);if(i)for(const a of i)delete o[a];return{...o,...s(r)}},type:t})}const w7={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3",eip7702:"0x4"};function m7(t){const e={};return typeof t.authorizationList<"u"&&(e.authorizationList=y7(t.authorizationList)),typeof t.accessList<"u"&&(e.accessList=t.accessList),typeof t.blobVersionedHashes<"u"&&(e.blobVersionedHashes=t.blobVersionedHashes),typeof t.blobs<"u"&&(typeof t.blobs[0]!="string"?e.blobs=t.blobs.map(i=>hs(i)):e.blobs=t.blobs),typeof t.data<"u"&&(e.data=t.data),typeof t.from<"u"&&(e.from=t.from),typeof t.gas<"u"&&(e.gas=Bt(t.gas)),typeof t.gasPrice<"u"&&(e.gasPrice=Bt(t.gasPrice)),typeof t.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=Bt(t.maxFeePerBlobGas)),typeof t.maxFeePerGas<"u"&&(e.maxFeePerGas=Bt(t.maxFeePerGas)),typeof t.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=Bt(t.maxPriorityFeePerGas)),typeof t.nonce<"u"&&(e.nonce=Bt(t.nonce)),typeof t.to<"u"&&(e.to=t.to),typeof t.type<"u"&&(e.type=w7[t.type]),typeof t.value<"u"&&(e.value=Bt(t.value)),e}const v7=Yc("transactionRequest",m7);function y7(t){return t.map(e=>({address:e.address,r:e.r?Bt(BigInt(e.r)):e.r,s:e.s?Bt(BigInt(e.s)):e.s,chainId:Bt(e.chainId),nonce:Bt(e.nonce),...typeof e.yParity<"u"?{yParity:Bt(e.yParity)}:{},...typeof e.v<"u"&&typeof e.yParity>"u"?{v:Bt(e.v)}:{}}))}const Jc=2n**256n-1n,Tf={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function Xc(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Wc(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerBlobGas:t.maxFeePerBlobGas?BigInt(t.maxFeePerBlobGas):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Wc(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Tf[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return t.authorizationList&&(e.authorizationList=b7(t.authorizationList)),e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}const Rf=Yc("transaction",Xc);function b7(t){return t.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function _7(t){const e=(t.transactions??[]).map(i=>typeof i=="string"?i:Xc(i));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,blobGasUsed:t.blobGasUsed?BigInt(t.blobGasUsed):void 0,difficulty:t.difficulty?BigInt(t.difficulty):void 0,excessBlobGas:t.excessBlobGas?BigInt(t.excessBlobGas):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const $f=Yc("block",_7);function Lf(t){const{kzg:e}=t,i=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),s=typeof t.blobs[0]=="string"?t.blobs.map(o=>Er(o)):t.blobs,r=[];for(const o of s)r.push(Uint8Array.from(e.blobToKzgCommitment(o)));return i==="bytes"?r:r.map(o=>hs(o))}function Bf(t){const{kzg:e}=t,i=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),s=typeof t.blobs[0]=="string"?t.blobs.map(a=>Er(a)):t.blobs,r=typeof t.commitments[0]=="string"?t.commitments.map(a=>Er(a)):t.commitments,o=[];for(let a=0;a<s.length;a++){const c=s[a],d=r[a];o.push(Uint8Array.from(e.computeBlobKzgProof(c,d)))}return i==="bytes"?o:o.map(a=>hs(a))}function x7(t,e,i,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,i,s);const r=BigInt(32),o=BigInt(4294967295),a=Number(i>>r&o),c=Number(i&o),d=s?4:0,u=s?0:4;t.setUint32(e+d,a,s),t.setUint32(e+u,c,s)}function C7(t,e,i){return t&e^~t&i}function E7(t,e,i){return t&e^t&i^e&i}class I7 extends Hu{constructor(e,i,s,r){super(),this.blockLen=e,this.outputLen=i,this.padOffset=s,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Fu(this.buffer)}update(e){jn(this);const{view:i,buffer:s,blockLen:r}=this;e=Gc(e);const o=e.length;for(let a=0;a<o;){const c=Math.min(r-this.pos,o-a);if(c===r){const d=Fu(e);for(;r<=o-a;a+=r)this.process(d,a);continue}s.set(e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===r&&(this.process(i,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){jn(this),hf(e,this),this.finished=!0;const{buffer:i,view:s,blockLen:r,isLE:o}=this;let{pos:a}=this;i[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>r-a&&(this.process(s,0),a=0);for(let p=a;p<r;p++)i[p]=0;x7(s,r-8,BigInt(this.length*8),o),this.process(s,0);const c=Fu(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=d/4,h=this.get();if(u>h.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<u;p++)c.setUint32(4*p,h[p],o)}digest(){const{buffer:e,outputLen:i}=this;this.digestInto(e);const s=e.slice(0,i);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:i,buffer:s,length:r,finished:o,destroyed:a,pos:c}=this;return e.length=r,e.pos=c,e.finished=o,e.destroyed=a,r%i&&e.buffer.set(s),e}}const A7=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Hs=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),qs=new Uint32Array(64);class S7 extends I7{constructor(){super(64,32,8,!1),this.A=Hs[0]|0,this.B=Hs[1]|0,this.C=Hs[2]|0,this.D=Hs[3]|0,this.E=Hs[4]|0,this.F=Hs[5]|0,this.G=Hs[6]|0,this.H=Hs[7]|0}get(){const{A:e,B:i,C:s,D:r,E:o,F:a,G:c,H:d}=this;return[e,i,s,r,o,a,c,d]}set(e,i,s,r,o,a,c,d){this.A=e|0,this.B=i|0,this.C=s|0,this.D=r|0,this.E=o|0,this.F=a|0,this.G=c|0,this.H=d|0}process(e,i){for(let p=0;p<16;p++,i+=4)qs[p]=e.getUint32(i,!1);for(let p=16;p<64;p++){const g=qs[p-15],f=qs[p-2],v=Wi(g,7)^Wi(g,18)^g>>>3,w=Wi(f,17)^Wi(f,19)^f>>>10;qs[p]=w+qs[p-7]+v+qs[p-16]|0}let{A:s,B:r,C:o,D:a,E:c,F:d,G:u,H:h}=this;for(let p=0;p<64;p++){const g=Wi(c,6)^Wi(c,11)^Wi(c,25),f=h+g+C7(c,d,u)+A7[p]+qs[p]|0,v=(Wi(s,2)^Wi(s,13)^Wi(s,22))+E7(s,r,o)|0;h=u,u=d,d=c,c=a+f|0,a=o,o=r,r=s,s=f+v|0}s=s+this.A|0,r=r+this.B|0,o=o+this.C|0,a=a+this.D|0,c=c+this.E|0,d=d+this.F|0,u=u+this.G|0,h=h+this.H|0,this.set(s,r,o,a,c,d,u,h)}roundClean(){qs.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Uf=wf(()=>new S7);function N7(t,e){const i=e||"hex",s=Uf(Vo(t,{strict:!1})?lf(t):t);return i==="bytes"?s:we(s)}function P7(t){const{commitment:e,version:i=1}=t,s=t.to??(typeof e=="string"?"hex":"bytes"),r=N7(e,"bytes");return r.set([i],0),s==="bytes"?r:hs(r)}function k7(t){const{commitments:e,version:i}=t,s=t.to??(typeof e[0]=="string"?"hex":"bytes"),r=[];for(const o of e)r.push(P7({commitment:o,to:s,version:i}));return r}const Mf=6,Df=32,Ju=4096,jf=Df*Ju,zf=jf*Mf-1-1*Ju*Mf,Ff=1;class O7 extends Ae{constructor({maxSize:e,size:i}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${i} bytes`],name:"BlobSizeTooLargeError"})}}class Hf extends Ae{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class T7 extends Ae{constructor({hash:e,size:i}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${i}`],name:"InvalidVersionedHashSizeError"})}}class R7 extends Ae{constructor({hash:e,version:i}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${Ff}`,`Received: ${i}`],name:"InvalidVersionedHashVersionError"})}}function $7(t){const e=t.to??(typeof t.data=="string"?"hex":"bytes"),i=typeof t.data=="string"?Er(t.data):t.data,s=zs(i);if(!s)throw new Hf;if(s>zf)throw new O7({maxSize:zf,size:s});const r=[];let o=!0,a=0;for(;o;){const c=Af(new Uint8Array(jf));let d=0;for(;d<Ju;){const u=i.slice(a,a+(Df-1));if(c.pushByte(0),c.pushBytes(u),u.length<31){c.pushByte(128),o=!1;break}d++,a+=31}r.push(c)}return e==="bytes"?r.map(c=>c.bytes):r.map(c=>hs(c.bytes))}function L7(t){const{data:e,kzg:i,to:s}=t,r=t.blobs??$7({data:e,to:s}),o=t.commitments??Lf({blobs:r,kzg:i,to:s}),a=t.proofs??Bf({blobs:r,commitments:o,kzg:i,to:s}),c=[];for(let d=0;d<r.length;d++)c.push({blob:r[d],commitment:o[d],proof:a[d]});return c}function B7(t){if(t.type)return t.type;if(typeof t.authorizationList<"u")return"eip7702";if(typeof t.blobs<"u"||typeof t.blobVersionedHashes<"u"||typeof t.maxFeePerBlobGas<"u"||typeof t.sidecars<"u")return"eip4844";if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new d7({transaction:t})}function U7(t,{args:e,eventName:i}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...i?{args:e,eventName:i}:{}}}class va extends Ae{constructor({chainId:e}){super(typeof e=="number"?`Chain ID "${e}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function M7(){let t=()=>{},e=()=>{};return{promise:new Promise((i,s)=>{t=i,e=s}),resolve:t,reject:e}}const Xu=new Map;function D7({fn:t,id:e,shouldSplitBatch:i,wait:s=0,sort:r}){const o=async()=>{const h=d();a();const p=h.map(({args:g})=>g);p.length!==0&&t(p).then(g=>{r&&Array.isArray(g)&&g.sort(r);for(let f=0;f<h.length;f++){const{resolve:v}=h[f];v==null||v([g[f],g])}}).catch(g=>{for(let f=0;f<h.length;f++){const{reject:v}=h[f];v==null||v(g)}})},a=()=>Xu.delete(e),c=()=>d().map(({args:h})=>h),d=()=>Xu.get(e)||[],u=h=>Xu.set(e,[...d(),h]);return{flush:a,async schedule(h){const{promise:p,resolve:g,reject:f}=M7();return i!=null&&i([...c(),h])&&o(),d().length>0?(u({args:h,resolve:g,reject:f}),p):(u({args:h,resolve:g,reject:f}),setTimeout(o,s),p)}}}async function qf(t){return new Promise(e=>setTimeout(e,t))}new Zc(128);const Qu=256;let Qc=Qu,el;function j7(t=11){if(!el||Qc+t>Qu*2){el="",Qc=0;for(let e=0;e<Qu;e++)el+=(256+Math.random()*256|0).toString(16).substring(1)}return el.substring(Qc,Qc+++t)}const tl=new Zc(8192);function z7(t,{enabled:e=!0,id:i}){if(!e||!i)return t();if(tl.get(i))return tl.get(i);const s=t().finally(()=>tl.delete(i));return tl.set(i,s),s}function F7(t,{delay:e=100,retryCount:i=2,shouldRetry:s=()=>!0}={}){return new Promise((r,o)=>{const a=async({count:c=0}={})=>{const d=async({error:u})=>{const h=typeof e=="function"?e({count:c,error:u}):e;h&&await qf(h),a({count:c+1})};try{const u=await t();r(u)}catch(u){if(c<i&&await s({count:c,error:u}))return d({error:u});o(u)}};a()})}function H7(t,e={}){return async(i,s={})=>{var p;const{dedupe:r=!1,methods:o,retryDelay:a=150,retryCount:c=3,uid:d}={...e,...s},{method:u}=i;if((p=o==null?void 0:o.exclude)!=null&&p.includes(u))throw new Ar(new Error("method not supported"),{method:u});if(o!=null&&o.include&&!o.include.includes(u))throw new Ar(new Error("method not supported"),{method:u});const h=r?cf(`${d}.${Ir(i)}`):void 0;return z7(()=>F7(async()=>{try{return await t(i)}catch(g){const f=g;switch(f.code){case Jo.code:throw new Jo(f);case Xo.code:throw new Xo(f);case Qo.code:throw new Qo(f,{method:i.method});case ea.code:throw new ea(f);case Hn.code:throw new Hn(f);case ta.code:throw new ta(f);case ia.code:throw new ia(f);case sa.code:throw new sa(f);case qn.code:throw new qn(f);case Ar.code:throw new Ar(f,{method:i.method});case Wn.code:throw new Wn(f);case ra.code:throw new ra(f);case Sr.code:throw new Sr(f);case na.code:throw new na(f);case oa.code:throw new oa(f);case aa.code:throw new aa(f);case ca.code:throw new ca(f);case la.code:throw new la(f);case da.code:throw new da(f);case ua.code:throw new ua(f);case ha.code:throw new ha(f);case pa.code:throw new pa(f);case ga.code:throw new ga(f);case fa.code:throw new fa(f);case wa.code:throw new wa(f);case 5e3:throw new Sr(f);default:throw g instanceof Ae?g:new p7(f)}}},{delay:({count:g,error:f})=>{var v;if(f&&f instanceof Yo){const w=(v=f==null?void 0:f.headers)==null?void 0:v.get("Retry-After");if(w!=null&&w.match(/\d/))return Number.parseInt(w)*1e3}return~~(1<<g)*a},retryCount:c,shouldRetry:({error:g})=>q7(g)}),{enabled:r,id:h})}}function q7(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===Wn.code||t.code===Hn.code:t instanceof Yo&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function Wf({key:t,methods:e,name:i,request:s,retryCount:r=3,retryDelay:o=150,timeout:a,type:c},d){const u=j7();return{config:{key:t,methods:e,name:i,request:s,retryCount:r,retryDelay:o,timeout:a,type:c},request:H7(s,{methods:e,retryCount:r,retryDelay:o,uid:u}),value:d}}function Vf(t,e={}){const{key:i="fallback",name:s="Fallback",rank:r=!1,shouldThrow:o=W7,retryCount:a,retryDelay:c}=e;return({chain:d,pollingInterval:u=4e3,timeout:h,...p})=>{let g=t,f=()=>{};const v=Wf({key:i,name:s,async request({method:w,params:m}){let y;const b=async(_=0)=>{const x=g[_]({...p,chain:d,retryCount:0,timeout:h});try{const k=await x.request({method:w,params:m});return f({method:w,params:m,response:k,transport:x,status:"success"}),k}catch(k){if(f({error:k,method:w,params:m,transport:x,status:"error"}),o(k)||_===g.length-1||(y??(y=g.slice(_+1).some(N=>{const{include:R,exclude:T}=N({chain:d}).config.methods||{};return R?R.includes(w):T?!T.includes(w):!0})),!y))throw k;return b(_+1)}};return b()},retryCount:a,retryDelay:c,type:"fallback"},{onResponse:w=>f=w,transports:g.map(w=>w({chain:d,retryCount:0}))});if(r){const w=typeof r=="object"?r:{};V7({chain:d,interval:w.interval??u,onTransports:m=>g=m,ping:w.ping,sampleCount:w.sampleCount,timeout:w.timeout,transports:g,weights:w.weights})}return v}}function W7(t){return!!("code"in t&&typeof t.code=="number"&&(t.code===qn.code||t.code===Sr.code||Zu.nodeMessage.test(t.message)||t.code===5e3))}function V7({chain:t,interval:e=4e3,onTransports:i,ping:s,sampleCount:r=10,timeout:o=1e3,transports:a,weights:c={}}){const{stability:d=.7,latency:u=.3}=c,h=[],p=async()=>{const g=await Promise.all(a.map(async w=>{const m=w({chain:t,retryCount:0,timeout:o}),y=Date.now();let b,_;try{await(s?s({transport:m}):m.request({method:"net_listening"})),_=1}catch{_=0}finally{b=Date.now()}return{latency:b-y,success:_}}));h.push(g),h.length>r&&h.shift();const f=Math.max(...h.map(w=>Math.max(...w.map(({latency:m})=>m)))),v=a.map((w,m)=>{const y=h.map(k=>k[m].latency),b=1-y.reduce((k,N)=>k+N,0)/y.length/f,_=h.map(k=>k[m].success),x=_.reduce((k,N)=>k+N,0)/_.length;return x===0?[0,m]:[u*b+d*x,m]}).sort((w,m)=>m[0]-w[0]);i(v.map(([,w])=>a[w])),await qf(e),p()};p()}class K7 extends Ae{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}function G7(t,{errorInstance:e=new Error("timed out"),timeout:i,signal:s}){return new Promise((r,o)=>{(async()=>{let a;try{const c=new AbortController;i>0&&(a=setTimeout(()=>{s?c.abort():o(e)},i)),r(await t({signal:(c==null?void 0:c.signal)||null}))}catch(c){(c==null?void 0:c.name)==="AbortError"&&o(e),o(c)}finally{clearTimeout(a)}})()})}function Z7(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const Kf=Z7();function Y7(t,e={}){return{async request(i){var p;const{body:s,onRequest:r=e.onRequest,onResponse:o=e.onResponse,timeout:a=e.timeout??1e4}=i,c={...e.fetchOptions??{},...i.fetchOptions??{}},{headers:d,method:u,signal:h}=c;try{const g=await G7(async({signal:v})=>{const w={...c,body:Array.isArray(s)?Ir(s.map(b=>({jsonrpc:"2.0",id:b.id??Kf.take(),...b}))):Ir({jsonrpc:"2.0",id:s.id??Kf.take(),...s}),headers:{"Content-Type":"application/json",...d},method:u||"POST",signal:h||(a>0?v:null)},m=new Request(t,w),y=await(r==null?void 0:r(m,w))??{...w,url:t};return await fetch(y.url??t,y)},{errorInstance:new Pf({body:s,url:t}),timeout:a,signal:!0});o&&await o(g);let f;if((p=g.headers.get("Content-Type"))!=null&&p.startsWith("application/json"))f=await g.json();else{f=await g.text();try{f=JSON.parse(f||"{}")}catch(v){if(g.ok)throw v;f={error:f}}}if(!g.ok)throw new Yo({body:s,details:Ir(f.error)||g.statusText,headers:g.headers,status:g.status,url:t});return f}catch(g){throw g instanceof Yo||g instanceof Pf?g:new Yo({body:s,cause:g,url:t})}}}}function il(t,e={}){const{batch:i,fetchOptions:s,key:r="http",methods:o,name:a="HTTP JSON-RPC",onFetchRequest:c,onFetchResponse:d,retryDelay:u,raw:h}=e;return({chain:p,retryCount:g,timeout:f})=>{const{batchSize:v=1e3,wait:w=0}=typeof i=="object"?i:{},m=e.retryCount??g,y=f??e.timeout??1e4,b=t||(p==null?void 0:p.rpcUrls.default.http[0]);if(!b)throw new K7;const _=Y7(b,{fetchOptions:s,onRequest:c,onResponse:d,timeout:y});return Wf({key:r,methods:o,name:a,async request({method:x,params:k}){const N={method:x,params:k},{schedule:R}=D7({id:b,wait:w,shouldSplitBatch(U){return U.length>v},fn:U=>_.request({body:U}),sort:(U,j)=>U.id-j.id}),T=async U=>i?R(U):[await _.request({body:U})],[{error:P,result:M}]=await T(N);if(h)return{error:P,result:M};if(P)throw new Nf({body:N,error:P,url:b});return M},retryCount:m,retryDelay:u,timeout:y,type:"http"},{fetchOptions:s,url:b})}}function Oi(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}function J7(t){const{authorizationList:e}=t;if(e)for(const i of e){const{chainId:s}=i,r=i.address;if(!gs(r))throw new Fs({address:r});if(s<0)throw new va({chainId:s})}eh(t)}function X7(t){const{blobVersionedHashes:e}=t;if(e){if(e.length===0)throw new Hf;for(const i of e){const s=zs(i),r=Wc(t7(i,0,1));if(s!==32)throw new T7({hash:i,size:s});if(r!==Ff)throw new R7({hash:i,version:r})}}eh(t)}function eh(t){const{chainId:e,maxPriorityFeePerGas:i,maxFeePerGas:s,to:r}=t;if(e<=0)throw new va({chainId:e});if(r&&!gs(r))throw new Fs({address:r});if(s&&s>Jc)throw new ma({maxFeePerGas:s});if(i&&s&&i>s)throw new Yu({maxFeePerGas:s,maxPriorityFeePerGas:i})}function Q7(t){const{chainId:e,maxPriorityFeePerGas:i,gasPrice:s,maxFeePerGas:r,to:o}=t;if(e<=0)throw new va({chainId:e});if(o&&!gs(o))throw new Fs({address:o});if(i||r)throw new Ae("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(s&&s>Jc)throw new ma({maxFeePerGas:s})}function eC(t){const{chainId:e,maxPriorityFeePerGas:i,gasPrice:s,maxFeePerGas:r,to:o}=t;if(o&&!gs(o))throw new Fs({address:o});if(typeof e<"u"&&e<=0)throw new va({chainId:e});if(i||r)throw new Ae("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(s&&s>Jc)throw new ma({maxFeePerGas:s})}function ya(t){if(!t||t.length===0)return[];const e=[];for(let i=0;i<t.length;i++){const{address:s,storageKeys:r}=t[i];for(let o=0;o<r.length;o++)if(r[o].length-2!==64)throw new u7({storageKey:r[o]});if(!gs(s,{strict:!1}))throw new Fs({address:s});e.push([s,r])}return e}function tC(t,e){const i=B7(t);return i==="eip1559"?rC(t,e):i==="eip2930"?nC(t,e):i==="eip4844"?sC(t,e):i==="eip7702"?iC(t,e):oC(t,e)}function iC(t,e){const{authorizationList:i,chainId:s,gas:r,nonce:o,to:a,value:c,maxFeePerGas:d,maxPriorityFeePerGas:u,accessList:h,data:p}=t;J7(t);const g=ya(h),f=aC(i);return Fn(["0x04",Nr([we(s),o?we(o):"0x",u?we(u):"0x",d?we(d):"0x",r?we(r):"0x",a??"0x",c?we(c):"0x",p??"0x",g,f,...Vn(t,e)])])}function sC(t,e){const{chainId:i,gas:s,nonce:r,to:o,value:a,maxFeePerBlobGas:c,maxFeePerGas:d,maxPriorityFeePerGas:u,accessList:h,data:p}=t;X7(t);let g=t.blobVersionedHashes,f=t.sidecars;if(t.blobs&&(typeof g>"u"||typeof f>"u")){const _=typeof t.blobs[0]=="string"?t.blobs:t.blobs.map(N=>hs(N)),x=t.kzg,k=Lf({blobs:_,kzg:x});if(typeof g>"u"&&(g=k7({commitments:k})),typeof f>"u"){const N=Bf({blobs:_,commitments:k,kzg:x});f=L7({blobs:_,commitments:k,proofs:N})}}const v=ya(h),w=[we(i),r?we(r):"0x",u?we(u):"0x",d?we(d):"0x",s?we(s):"0x",o??"0x",a?we(a):"0x",p??"0x",v,c?we(c):"0x",g??[],...Vn(t,e)],m=[],y=[],b=[];if(f)for(let _=0;_<f.length;_++){const{blob:x,commitment:k,proof:N}=f[_];m.push(x),y.push(k),b.push(N)}return Fn(["0x03",Nr(f?[w,m,y,b]:w)])}function rC(t,e){const{chainId:i,gas:s,nonce:r,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:d,accessList:u,data:h}=t;eh(t);const p=ya(u),g=[we(i),r?we(r):"0x",d?we(d):"0x",c?we(c):"0x",s?we(s):"0x",o??"0x",a?we(a):"0x",h??"0x",p,...Vn(t,e)];return Fn(["0x02",Nr(g)])}function nC(t,e){const{chainId:i,gas:s,data:r,nonce:o,to:a,value:c,accessList:d,gasPrice:u}=t;Q7(t);const h=ya(d),p=[we(i),o?we(o):"0x",u?we(u):"0x",s?we(s):"0x",a??"0x",c?we(c):"0x",r??"0x",h,...Vn(t,e)];return Fn(["0x01",Nr(p)])}function oC(t,e){const{chainId:i=0,gas:s,data:r,nonce:o,to:a,value:c,gasPrice:d}=t;eC(t);let u=[o?we(o):"0x",d?we(d):"0x",s?we(s):"0x",a??"0x",c?we(c):"0x",r??"0x"];if(e){const h=(()=>{if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);if(i>0)return BigInt(i*2)+BigInt(35n+e.v-27n);const f=27n+(e.v===27n?0n:1n);if(e.v!==f)throw new l7({v:e.v});return f})(),p=Mn(e.r),g=Mn(e.s);u=[...u,we(h),p==="0x00"?"0x":p,g==="0x00"?"0x":g]}else i>0&&(u=[...u,we(i),"0x","0x"]);return Nr(u)}function Vn(t,e){const i=e??t,{v:s,yParity:r}=i;if(typeof i.r>"u")return[];if(typeof i.s>"u")return[];if(typeof s>"u"&&typeof r>"u")return[];const o=Mn(i.r),a=Mn(i.s);return[typeof r=="number"?r?we(1):"0x":s===0n?"0x":s===1n?we(1):s===27n?"0x":we(1),o==="0x00"?"0x":o,a==="0x00"?"0x":a]}function aC(t){if(!t||t.length===0)return[];const e=[];for(const i of t){const{chainId:s,nonce:r,...o}=i,a=i.address;e.push([s?we(s):"0x",a,r?we(r):"0x",...Vn({},o)])}return e}const cC={"0x0":"reverted","0x1":"success"};function lC(t){const e={...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(i=>U7(i)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Wc(t.transactionIndex):null,status:t.status?cC[t.status]:null,type:t.type?Tf[t.type]||t.type:null};return t.blobGasPrice&&(e.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(e.blobGasUsed=BigInt(t.blobGasUsed)),e}const dC=Yc("transactionReceipt",lC),uC=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Gf=new Uint8Array(new Array(16).fill(0).map((t,e)=>e)),hC=Gf.map(t=>(9*t+5)%16);let pC=[Gf],gC=[hC];for(let t=0;t<4;t++)for(let e of[pC,gC])e.push(e[t].map(i=>uC[i]));const sl=BigInt(0),rl=BigInt(1),fC=BigInt(2);function Pr(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function ba(t){if(!Pr(t))throw new Error("Uint8Array expected")}function Kn(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const wC=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Gn(t){ba(t);let e="";for(let i=0;i<t.length;i++)e+=wC[t[i]];return e}function Zn(t){const e=t.toString(16);return e.length&1?"0"+e:e}function th(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?sl:BigInt("0x"+t)}const fs={_0:48,_9:57,A:65,F:70,a:97,f:102};function Zf(t){if(t>=fs._0&&t<=fs._9)return t-fs._0;if(t>=fs.A&&t<=fs.F)return t-(fs.A-10);if(t>=fs.a&&t<=fs.f)return t-(fs.a-10)}function Yn(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,i=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(i);for(let r=0,o=0;r<i;r++,o+=2){const a=Zf(t.charCodeAt(o)),c=Zf(t.charCodeAt(o+1));if(a===void 0||c===void 0){const d=t[o]+t[o+1];throw new Error('hex string expected, got non-hex character "'+d+'" at index '+o)}s[r]=a*16+c}return s}function kr(t){return th(Gn(t))}function ih(t){return ba(t),th(Gn(Uint8Array.from(t).reverse()))}function Jn(t,e){return Yn(t.toString(16).padStart(e*2,"0"))}function sh(t,e){return Jn(t,e).reverse()}function mC(t){return Yn(Zn(t))}function Ti(t,e,i){let s;if(typeof e=="string")try{s=Yn(e)}catch(o){throw new Error(t+" must be hex string or Uint8Array, cause: "+o)}else if(Pr(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const r=s.length;if(typeof i=="number"&&r!==i)throw new Error(t+" of length "+i+" expected, got "+r);return s}function _a(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];ba(r),e+=r.length}const i=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const o=t[s];i.set(o,r),r+=o.length}return i}function vC(t,e){if(t.length!==e.length)return!1;let i=0;for(let s=0;s<t.length;s++)i|=t[s]^e[s];return i===0}function yC(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}const rh=t=>typeof t=="bigint"&&sl<=t;function nl(t,e,i){return rh(t)&&rh(e)&&rh(i)&&e<=t&&t<i}function Or(t,e,i,s){if(!nl(e,i,s))throw new Error("expected valid "+t+": "+i+" <= n < "+s+", got "+e)}function Yf(t){let e;for(e=0;t>sl;t>>=rl,e+=1);return e}function bC(t,e){return t>>BigInt(e)&rl}function _C(t,e,i){return t|(i?rl:sl)<<BigInt(e)}const nh=t=>(fC<<BigInt(t-1))-rl,oh=t=>new Uint8Array(t),Jf=t=>Uint8Array.from(t);function Xf(t,e,i){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof i!="function")throw new Error("hmacFn must be a function");let s=oh(t),r=oh(t),o=0;const a=()=>{s.fill(1),r.fill(0),o=0},c=(...h)=>i(r,s,...h),d=(h=oh())=>{r=c(Jf([0]),h),s=c(),h.length!==0&&(r=c(Jf([1]),h),s=c())},u=()=>{if(o++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const p=[];for(;h<e;){s=c();const g=s.slice();p.push(g),h+=s.length}return _a(...p)};return(h,p)=>{a(),d(h);let g;for(;!(g=p(u()));)d();return a(),g}}const xC={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||Pr(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function xa(t,e,i={}){const s=(r,o,a)=>{const c=xC[o];if(typeof c!="function")throw new Error("invalid validator function");const d=t[r];if(!(a&&d===void 0)&&!c(d,t))throw new Error("param "+String(r)+" is invalid. Expected "+o+", got "+d)};for(const[r,o]of Object.entries(e))s(r,o,!1);for(const[r,o]of Object.entries(i))s(r,o,!0);return t}const CC=()=>{throw new Error("not implemented")};function ah(t){const e=new WeakMap;return(i,...s)=>{const r=e.get(i);if(r!==void 0)return r;const o=t(i,...s);return e.set(i,o),o}}var EC=Object.freeze({__proto__:null,isBytes:Pr,abytes:ba,abool:Kn,bytesToHex:Gn,numberToHexUnpadded:Zn,hexToNumber:th,hexToBytes:Yn,bytesToNumberBE:kr,bytesToNumberLE:ih,numberToBytesBE:Jn,numberToBytesLE:sh,numberToVarBytesBE:mC,ensureBytes:Ti,concatBytes:_a,equalBytes:vC,utf8ToBytes:yC,inRange:nl,aInRange:Or,bitLen:Yf,bitGet:bC,bitSet:_C,bitMask:nh,createHmacDrbg:Xf,validateObject:xa,notImplemented:CC,memoized:ah});const IC="0.1.1";function AC(){return IC}class Ut extends Error{constructor(e,i={}){const s=(()=>{var c;if(i.cause instanceof Ut){if(i.cause.details)return i.cause.details;if(i.cause.shortMessage)return i.cause.shortMessage}return(c=i.cause)!=null&&c.message?i.cause.message:i.details})(),r=i.cause instanceof Ut&&i.cause.docsPath||i.docsPath,o=`https://oxlib.sh${r??""}`,a=[e||"An error occurred.",...i.metaMessages?["",...i.metaMessages]:[],...s||r?["",s?`Details: ${s}`:void 0,r?`See: ${o}`:void 0]:[]].filter(c=>typeof c=="string").join(`
`);super(a,i.cause?{cause:i.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:`ox@${AC()}`}),this.cause=i.cause,this.details=s,this.docs=o,this.docsPath=r,this.shortMessage=e}walk(e){return Qf(this,e)}}function Qf(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause?Qf(t.cause,e):e?null:t}function SC(t,e){if(iw(t)>e)throw new LC({givenSize:iw(t),maxSize:e})}const ws={zero:48,nine:57,A:65,F:70,a:97,f:102};function ew(t){if(t>=ws.zero&&t<=ws.nine)return t-ws.zero;if(t>=ws.A&&t<=ws.F)return t-(ws.A-10);if(t>=ws.a&&t<=ws.f)return t-(ws.a-10)}function NC(t,e={}){const{dir:i,size:s=32}=e;if(s===0)return t;if(t.length>s)throw new BC({size:t.length,targetSize:s,type:"Bytes"});const r=new Uint8Array(s);for(let o=0;o<s;o++){const a=i==="right";r[a?o:s-o-1]=t[a?o:t.length-o-1]}return r}function ch(t,e){if(dh(t)>e)throw new HC({givenSize:dh(t),maxSize:e})}function tw(t,e={}){const{dir:i,size:s=32}=e;if(s===0)return t;const r=t.replace("0x","");if(r.length>s*2)throw new qC({size:Math.ceil(r.length/2),targetSize:s,type:"Hex"});return`0x${r[i==="right"?"padEnd":"padStart"](s*2,"0")}`}const PC=new TextEncoder;function kC(t){return t instanceof Uint8Array?t:typeof t=="string"?TC(t):OC(t)}function OC(t){return t instanceof Uint8Array?t:new Uint8Array(t)}function TC(t,e={}){const{size:i}=e;let s=t;i&&(ch(t,i),s=lh(t,i));let r=s.slice(2);r.length%2&&(r=`0${r}`);const o=r.length/2,a=new Uint8Array(o);for(let c=0,d=0;c<o;c++){const u=ew(r.charCodeAt(d++)),h=ew(r.charCodeAt(d++));if(u===void 0||h===void 0)throw new Ut(`Invalid byte sequence ("${r[d-2]}${r[d-1]}" in "${r}").`);a[c]=u*16+h}return a}function RC(t,e={}){const{size:i}=e,s=PC.encode(t);return typeof i=="number"?(SC(s,i),$C(s,i)):s}function $C(t,e){return NC(t,{dir:"right",size:e})}function iw(t){return t.length}class LC extends Ut{constructor({givenSize:e,maxSize:i}){super(`Size cannot exceed \`${i}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class BC extends Ut{constructor({size:e,targetSize:i,type:s}){super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${i}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}const UC=new TextEncoder,MC=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function sw(...t){return`0x${t.reduce((e,i)=>e+i.replace("0x",""),"")}`}function DC(t,e={}){const i=`0x${Number(t)}`;return typeof e.size=="number"?(ch(i,e.size),ol(i,e.size)):i}function rw(t,e={}){let i="";for(let r=0;r<t.length;r++)i+=MC[t[r]];const s=`0x${i}`;return typeof e.size=="number"?(ch(s,e.size),lh(s,e.size)):s}function jC(t,e={}){const{signed:i,size:s}=e,r=BigInt(t);let o;s?i?o=(1n<<BigInt(s)*8n-1n)-1n:o=2n**(BigInt(s)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const a=typeof o=="bigint"&&i?-o-1n:0;if(o&&r>o||r<a){const d=typeof t=="bigint"?"n":"";throw new FC({max:o?`${o}${d}`:void 0,min:`${a}${d}`,signed:i,size:s,value:`${t}${d}`})}const c=`0x${(i&&r<0?(1n<<BigInt(s*8))+BigInt(r):r).toString(16)}`;return s?ol(c,s):c}function zC(t,e={}){return rw(UC.encode(t),e)}function ol(t,e){return tw(t,{dir:"left",size:e})}function lh(t,e){return tw(t,{dir:"right",size:e})}function dh(t){return Math.ceil((t.length-2)/2)}class FC extends Ut{constructor({max:e,min:i,signed:s,size:r,value:o}){super(`Number \`${o}\` is not in safe${r?` ${r*8}-bit`:""}${s?" signed":" unsigned"} integer range ${e?`(\`${i}\` to \`${e}\`)`:`(above \`${i}\`)`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.IntegerOutOfRangeError"})}}class HC extends Ut{constructor({givenSize:e,maxSize:i}){super(`Size cannot exceed \`${i}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeOverflowError"})}}class qC extends Ut{constructor({size:e,targetSize:i,type:s}){super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${i}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeExceedsPaddingSizeError"})}}function WC(t,e={}){const{as:i=typeof t=="string"?"Hex":"Bytes"}=e,s=xf(kC(t));return i==="Bytes"?s:rw(s)}class VC extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const i=super.get(e);return super.has(e)&&i!==void 0&&(this.delete(e),super.set(e,i)),i}set(e,i){if(super.set(e,i),this.maxSize&&this.size>this.maxSize){const s=this.keys().next().value;s&&this.delete(s)}return this}}const KC={checksum:new VC(8192)},uh=KC.checksum,GC=/^0x[a-fA-F0-9]{40}$/;function nw(t,e={}){const{strict:i=!0}=e;if(!GC.test(t))throw new ow({address:t,cause:new YC});if(i){if(t.toLowerCase()===t)return;if(ZC(t)!==t)throw new ow({address:t,cause:new JC})}}function ZC(t){if(uh.has(t))return uh.get(t);nw(t,{strict:!1});const e=t.substring(2).toLowerCase(),i=WC(RC(e),{as:"Bytes"}),s=e.split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&s[o]&&(s[o]=s[o].toUpperCase()),(i[o>>1]&15)>=8&&s[o+1]&&(s[o+1]=s[o+1].toUpperCase());const r=`0x${s.join("")}`;return uh.set(t,r),r}class ow extends Ut{constructor({address:e,cause:i}){super(`Address "${e}" is invalid.`,{cause:i}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class YC extends Ut{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class JC extends Ut{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}const XC=/^(.*)\[([0-9]*)\]$/,QC=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,eE=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function hh(t,e){if(t.length!==e.length)throw new iE({expectedLength:t.length,givenLength:e.length});const i=[];for(let s=0;s<t.length;s++){const r=t[s],o=e[s];i.push(hh.encode(r,o))}return sw(...i)}(function(t){function e(i,s,r=!1){if(i==="address"){const d=s;return nw(d),ol(d.toLowerCase(),r?32:0)}if(i==="string")return zC(s);if(i==="bytes")return s;if(i==="bool")return ol(DC(s),r?32:1);const o=i.match(eE);if(o){const[d,u,h="256"]=o,p=Number.parseInt(h)/8;return jC(s,{size:r?32:p,signed:u==="int"})}const a=i.match(QC);if(a){const[d,u]=a;if(Number.parseInt(u)!==(s.length-2)/2)throw new tE({expectedSize:Number.parseInt(u),value:s});return lh(s,r?32:0)}const c=i.match(XC);if(c&&Array.isArray(s)){const[d,u]=c,h=[];for(let p=0;p<s.length;p++)h.push(e(u,s[p],!0));return h.length===0?"0x":sw(...h)}throw new sE(i)}t.encode=e})(hh||(hh={}));class tE extends Ut{constructor({expectedSize:e,value:i}){super(`Size of bytes "${i}" (bytes${dh(i)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class iE extends Ut{constructor({expectedLength:e,givenLength:i}){super(["ABI encoding parameters/values length mismatch.",`Expected length (parameters): ${e}`,`Given length (values): ${i}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class sE extends Ut{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}class aw extends Hu{constructor(e,i){super(),this.finished=!1,this.destroyed=!1,Ox(e);const s=Gc(i);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,o=new Uint8Array(r);o.set(s.length>r?e.create().update(s).digest():s);for(let a=0;a<o.length;a++)o[a]^=54;this.iHash.update(o),this.oHash=e.create();for(let a=0;a<o.length;a++)o[a]^=106;this.oHash.update(o),o.fill(0)}update(e){return jn(this),this.iHash.update(e),this}digestInto(e){jn(this),Go(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:i,iHash:s,finished:r,destroyed:o,blockLen:a,outputLen:c}=this;return e=e,e.finished=r,e.destroyed=o,e.blockLen=a,e.outputLen=c,e.oHash=i._cloneInto(e.oHash),e.iHash=s._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const cw=(t,e,i)=>new aw(t,e).update(i).digest();cw.create=(t,e)=>new aw(t,e);const yt=BigInt(0),rt=BigInt(1),Tr=BigInt(2),rE=BigInt(3),ph=BigInt(4),lw=BigInt(5),dw=BigInt(8);function Vt(t,e){const i=t%e;return i>=yt?i:e+i}function nE(t,e,i){if(e<yt)throw new Error("invalid exponent, negatives unsupported");if(i<=yt)throw new Error("invalid modulus");if(i===rt)return yt;let s=rt;for(;e>yt;)e&rt&&(s=s*t%i),t=t*t%i,e>>=rt;return s}function fi(t,e,i){let s=t;for(;e-- >yt;)s*=s,s%=i;return s}function gh(t,e){if(t===yt)throw new Error("invert: expected non-zero number");if(e<=yt)throw new Error("invert: expected positive modulus, got "+e);let i=Vt(t,e),s=e,r=yt,o=rt;for(;i!==yt;){const a=s/i,c=s%i,d=r-o*a;s=i,i=c,r=o,o=d}if(s!==rt)throw new Error("invert: does not exist");return Vt(r,e)}function oE(t){const e=(t-rt)/Tr;let i,s,r;for(i=t-rt,s=0;i%Tr===yt;i/=Tr,s++);for(r=Tr;r<t&&nE(r,e,t)!==t-rt;r++)if(r>1e3)throw new Error("Cannot find square root: likely non-prime P");if(s===1){const a=(t+rt)/ph;return function(c,d){const u=c.pow(d,a);if(!c.eql(c.sqr(u),d))throw new Error("Cannot find square root");return u}}const o=(i+rt)/Tr;return function(a,c){if(a.pow(c,e)===a.neg(a.ONE))throw new Error("Cannot find square root");let d=s,u=a.pow(a.mul(a.ONE,r),i),h=a.pow(c,o),p=a.pow(c,i);for(;!a.eql(p,a.ONE);){if(a.eql(p,a.ZERO))return a.ZERO;let g=1;for(let v=a.sqr(p);g<d&&!a.eql(v,a.ONE);g++)v=a.sqr(v);const f=a.pow(u,rt<<BigInt(d-g-1));u=a.sqr(f),h=a.mul(h,f),p=a.mul(p,u),d=g}return h}}function aE(t){if(t%ph===rE){const e=(t+rt)/ph;return function(i,s){const r=i.pow(s,e);if(!i.eql(i.sqr(r),s))throw new Error("Cannot find square root");return r}}if(t%dw===lw){const e=(t-lw)/dw;return function(i,s){const r=i.mul(s,Tr),o=i.pow(r,e),a=i.mul(s,o),c=i.mul(i.mul(a,Tr),o),d=i.mul(a,i.sub(c,i.ONE));if(!i.eql(i.sqr(d),s))throw new Error("Cannot find square root");return d}}return oE(t)}const cE=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function lE(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},i=cE.reduce((s,r)=>(s[r]="function",s),e);return xa(t,i)}function dE(t,e,i){if(i<yt)throw new Error("invalid exponent, negatives unsupported");if(i===yt)return t.ONE;if(i===rt)return e;let s=t.ONE,r=e;for(;i>yt;)i&rt&&(s=t.mul(s,r)),r=t.sqr(r),i>>=rt;return s}function uE(t,e){const i=new Array(e.length),s=e.reduce((o,a,c)=>t.is0(a)?o:(i[c]=o,t.mul(o,a)),t.ONE),r=t.inv(s);return e.reduceRight((o,a,c)=>t.is0(a)?o:(i[c]=t.mul(o,i[c]),t.mul(o,a)),r),i}function uw(t,e){const i=e!==void 0?e:t.toString(2).length,s=Math.ceil(i/8);return{nBitLength:i,nByteLength:s}}function hw(t,e,i=!1,s={}){if(t<=yt)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:r,nByteLength:o}=uw(t,e);if(o>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let a;const c=Object.freeze({ORDER:t,isLE:i,BITS:r,BYTES:o,MASK:nh(r),ZERO:yt,ONE:rt,create:d=>Vt(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return yt<=d&&d<t},is0:d=>d===yt,isOdd:d=>(d&rt)===rt,neg:d=>Vt(-d,t),eql:(d,u)=>d===u,sqr:d=>Vt(d*d,t),add:(d,u)=>Vt(d+u,t),sub:(d,u)=>Vt(d-u,t),mul:(d,u)=>Vt(d*u,t),pow:(d,u)=>dE(c,d,u),div:(d,u)=>Vt(d*gh(u,t),t),sqrN:d=>d*d,addN:(d,u)=>d+u,subN:(d,u)=>d-u,mulN:(d,u)=>d*u,inv:d=>gh(d,t),sqrt:s.sqrt||(d=>(a||(a=aE(t)),a(c,d))),invertBatch:d=>uE(c,d),cmov:(d,u,h)=>h?u:d,toBytes:d=>i?sh(d,o):Jn(d,o),fromBytes:d=>{if(d.length!==o)throw new Error("Field.fromBytes: expected "+o+" bytes, got "+d.length);return i?ih(d):kr(d)}});return Object.freeze(c)}function pw(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function gw(t){const e=pw(t);return e+Math.ceil(e/2)}function hE(t,e,i=!1){const s=t.length,r=pw(e),o=gw(e);if(s<16||s<o||s>1024)throw new Error("expected "+o+"-1024 bytes of input, got "+s);const a=i?ih(t):kr(t),c=Vt(a,e-rt)+rt;return i?sh(c,r):Jn(c,r)}const fw=BigInt(0),al=BigInt(1);function fh(t,e){const i=e.negate();return t?i:e}function ww(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function wh(t,e){ww(t,e);const i=Math.ceil(e/t)+1,s=2**(t-1);return{windows:i,windowSize:s}}function pE(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((i,s)=>{if(!(i instanceof e))throw new Error("invalid point at index "+s)})}function gE(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((i,s)=>{if(!e.isValid(i))throw new Error("invalid scalar at index "+s)})}const mh=new WeakMap,mw=new WeakMap;function vh(t){return mw.get(t)||1}function fE(t,e){return{constTimeNegate:fh,hasPrecomputes(i){return vh(i)!==1},unsafeLadder(i,s,r=t.ZERO){let o=i;for(;s>fw;)s&al&&(r=r.add(o)),o=o.double(),s>>=al;return r},precomputeWindow(i,s){const{windows:r,windowSize:o}=wh(s,e),a=[];let c=i,d=c;for(let u=0;u<r;u++){d=c,a.push(d);for(let h=1;h<o;h++)d=d.add(c),a.push(d);c=d.double()}return a},wNAF(i,s,r){const{windows:o,windowSize:a}=wh(i,e);let c=t.ZERO,d=t.BASE;const u=BigInt(2**i-1),h=2**i,p=BigInt(i);for(let g=0;g<o;g++){const f=g*a;let v=Number(r&u);r>>=p,v>a&&(v-=h,r+=al);const w=f,m=f+Math.abs(v)-1,y=g%2!==0,b=v<0;v===0?d=d.add(fh(y,s[w])):c=c.add(fh(b,s[m]))}return{p:c,f:d}},wNAFUnsafe(i,s,r,o=t.ZERO){const{windows:a,windowSize:c}=wh(i,e),d=BigInt(2**i-1),u=2**i,h=BigInt(i);for(let p=0;p<a;p++){const g=p*c;if(r===fw)break;let f=Number(r&d);if(r>>=h,f>c&&(f-=u,r+=al),f===0)continue;let v=s[g+Math.abs(f)-1];f<0&&(v=v.negate()),o=o.add(v)}return o},getPrecomputes(i,s,r){let o=mh.get(s);return o||(o=this.precomputeWindow(s,i),i!==1&&mh.set(s,r(o))),o},wNAFCached(i,s,r){const o=vh(i);return this.wNAF(o,this.getPrecomputes(o,i,r),s)},wNAFCachedUnsafe(i,s,r,o){const a=vh(i);return a===1?this.unsafeLadder(i,s,o):this.wNAFUnsafe(a,this.getPrecomputes(a,i,r),s,o)},setWindowSize(i,s){ww(s,e),mw.set(i,s),mh.delete(i)}}}function wE(t,e,i,s){if(pE(i,t),gE(s,e),i.length!==s.length)throw new Error("arrays of points and scalars must have equal length");const r=t.ZERO,o=Yf(BigInt(i.length)),a=o>12?o-3:o>4?o-2:o?2:1,c=(1<<a)-1,d=new Array(c+1).fill(r),u=Math.floor((e.BITS-1)/a)*a;let h=r;for(let p=u;p>=0;p-=a){d.fill(r);for(let f=0;f<s.length;f++){const v=s[f],w=Number(v>>BigInt(p)&BigInt(c));d[w]=d[w].add(i[f])}let g=r;for(let f=d.length-1,v=r;f>0;f--)v=v.add(d[f]),g=g.add(v);if(h=h.add(g),p!==0)for(let f=0;f<a;f++)h=h.double()}return h}function vw(t){return lE(t.Fp),xa(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...uw(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}function yw(t){t.lowS!==void 0&&Kn("lowS",t.lowS),t.prehash!==void 0&&Kn("prehash",t.prehash)}function mE(t){const e=vw(t);xa(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:i,Fp:s,a:r}=e;if(i){if(!s.eql(r,s.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof i!="object"||typeof i.beta!="bigint"||typeof i.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:vE,hexToBytes:yE}=EC;class bE extends Error{constructor(e=""){super(e)}}const ms={Err:bE,_tlv:{encode:(t,e)=>{const{Err:i}=ms;if(t<0||t>256)throw new i("tlv.encode: wrong tag");if(e.length&1)throw new i("tlv.encode: unpadded data");const s=e.length/2,r=Zn(s);if(r.length/2&128)throw new i("tlv.encode: long form length too big");const o=s>127?Zn(r.length/2|128):"";return Zn(t)+o+r+e},decode(t,e){const{Err:i}=ms;let s=0;if(t<0||t>256)throw new i("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new i("tlv.decode: wrong tlv");const r=e[s++],o=!!(r&128);let a=0;if(!o)a=r;else{const d=r&127;if(!d)throw new i("tlv.decode(long): indefinite length not supported");if(d>4)throw new i("tlv.decode(long): byte length is too big");const u=e.subarray(s,s+d);if(u.length!==d)throw new i("tlv.decode: length bytes not complete");if(u[0]===0)throw new i("tlv.decode(long): zero leftmost byte");for(const h of u)a=a<<8|h;if(s+=d,a<128)throw new i("tlv.decode(long): not minimal encoding")}const c=e.subarray(s,s+a);if(c.length!==a)throw new i("tlv.decode: wrong value length");return{v:c,l:e.subarray(s+a)}}},_int:{encode(t){const{Err:e}=ms;if(t<vs)throw new e("integer: negative integers are not allowed");let i=Zn(t);if(Number.parseInt(i[0],16)&8&&(i="00"+i),i.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return i},decode(t){const{Err:e}=ms;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return vE(t)}},toSig(t){const{Err:e,_int:i,_tlv:s}=ms,r=typeof t=="string"?yE(t):t;ba(r);const{v:o,l:a}=s.decode(48,r);if(a.length)throw new e("invalid signature: left bytes after parsing");const{v:c,l:d}=s.decode(2,o),{v:u,l:h}=s.decode(2,d);if(h.length)throw new e("invalid signature: left bytes after parsing");return{r:i.decode(c),s:i.decode(u)}},hexFromSig(t){const{_tlv:e,_int:i}=ms,s=e.encode(2,i.encode(t.r)),r=e.encode(2,i.encode(t.s)),o=s+r;return e.encode(48,o)}},vs=BigInt(0),bt=BigInt(1);BigInt(2);const bw=BigInt(3);BigInt(4);function _E(t){const e=mE(t),{Fp:i}=e,s=hw(e.n,e.nBitLength),r=e.toBytes||((w,m,y)=>{const b=m.toAffine();return _a(Uint8Array.from([4]),i.toBytes(b.x),i.toBytes(b.y))}),o=e.fromBytes||(w=>{const m=w.subarray(1),y=i.fromBytes(m.subarray(0,i.BYTES)),b=i.fromBytes(m.subarray(i.BYTES,2*i.BYTES));return{x:y,y:b}});function a(w){const{a:m,b:y}=e,b=i.sqr(w),_=i.mul(b,w);return i.add(i.add(_,i.mul(w,m)),y)}if(!i.eql(i.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function c(w){return nl(w,bt,e.n)}function d(w){const{allowedPrivateKeyLengths:m,nByteLength:y,wrapPrivateKey:b,n:_}=e;if(m&&typeof w!="bigint"){if(Pr(w)&&(w=Gn(w)),typeof w!="string"||!m.includes(w.length))throw new Error("invalid private key");w=w.padStart(y*2,"0")}let x;try{x=typeof w=="bigint"?w:kr(Ti("private key",w,y))}catch{throw new Error("invalid private key, expected hex or "+y+" bytes, got "+typeof w)}return b&&(x=Vt(x,_)),Or("private key",x,bt,_),x}function u(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}const h=ah((w,m)=>{const{px:y,py:b,pz:_}=w;if(i.eql(_,i.ONE))return{x:y,y:b};const x=w.is0();m==null&&(m=x?i.ONE:i.inv(_));const k=i.mul(y,m),N=i.mul(b,m),R=i.mul(_,m);if(x)return{x:i.ZERO,y:i.ZERO};if(!i.eql(R,i.ONE))throw new Error("invZ was invalid");return{x:k,y:N}}),p=ah(w=>{if(w.is0()){if(e.allowInfinityPoint&&!i.is0(w.py))return;throw new Error("bad point: ZERO")}const{x:m,y}=w.toAffine();if(!i.isValid(m)||!i.isValid(y))throw new Error("bad point: x or y not FE");const b=i.sqr(y),_=a(m);if(!i.eql(b,_))throw new Error("bad point: equation left != right");if(!w.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class g{constructor(m,y,b){if(this.px=m,this.py=y,this.pz=b,m==null||!i.isValid(m))throw new Error("x required");if(y==null||!i.isValid(y))throw new Error("y required");if(b==null||!i.isValid(b))throw new Error("z required");Object.freeze(this)}static fromAffine(m){const{x:y,y:b}=m||{};if(!m||!i.isValid(y)||!i.isValid(b))throw new Error("invalid affine point");if(m instanceof g)throw new Error("projective point not allowed");const _=x=>i.eql(x,i.ZERO);return _(y)&&_(b)?g.ZERO:new g(y,b,i.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(m){const y=i.invertBatch(m.map(b=>b.pz));return m.map((b,_)=>b.toAffine(y[_])).map(g.fromAffine)}static fromHex(m){const y=g.fromAffine(o(Ti("pointHex",m)));return y.assertValidity(),y}static fromPrivateKey(m){return g.BASE.multiply(d(m))}static msm(m,y){return wE(g,s,m,y)}_setWindowSize(m){v.setWindowSize(this,m)}assertValidity(){p(this)}hasEvenY(){const{y:m}=this.toAffine();if(i.isOdd)return!i.isOdd(m);throw new Error("Field doesn't support isOdd")}equals(m){u(m);const{px:y,py:b,pz:_}=this,{px:x,py:k,pz:N}=m,R=i.eql(i.mul(y,N),i.mul(x,_)),T=i.eql(i.mul(b,N),i.mul(k,_));return R&&T}negate(){return new g(this.px,i.neg(this.py),this.pz)}double(){const{a:m,b:y}=e,b=i.mul(y,bw),{px:_,py:x,pz:k}=this;let N=i.ZERO,R=i.ZERO,T=i.ZERO,P=i.mul(_,_),M=i.mul(x,x),U=i.mul(k,k),j=i.mul(_,x);return j=i.add(j,j),T=i.mul(_,k),T=i.add(T,T),N=i.mul(m,T),R=i.mul(b,U),R=i.add(N,R),N=i.sub(M,R),R=i.add(M,R),R=i.mul(N,R),N=i.mul(j,N),T=i.mul(b,T),U=i.mul(m,U),j=i.sub(P,U),j=i.mul(m,j),j=i.add(j,T),T=i.add(P,P),P=i.add(T,P),P=i.add(P,U),P=i.mul(P,j),R=i.add(R,P),U=i.mul(x,k),U=i.add(U,U),P=i.mul(U,j),N=i.sub(N,P),T=i.mul(U,M),T=i.add(T,T),T=i.add(T,T),new g(N,R,T)}add(m){u(m);const{px:y,py:b,pz:_}=this,{px:x,py:k,pz:N}=m;let R=i.ZERO,T=i.ZERO,P=i.ZERO;const M=e.a,U=i.mul(e.b,bw);let j=i.mul(y,x),Z=i.mul(b,k),A=i.mul(_,N),E=i.add(y,b),I=i.add(x,k);E=i.mul(E,I),I=i.add(j,Z),E=i.sub(E,I),I=i.add(y,_);let L=i.add(x,N);return I=i.mul(I,L),L=i.add(j,A),I=i.sub(I,L),L=i.add(b,_),R=i.add(k,N),L=i.mul(L,R),R=i.add(Z,A),L=i.sub(L,R),P=i.mul(M,I),R=i.mul(U,A),P=i.add(R,P),R=i.sub(Z,P),P=i.add(Z,P),T=i.mul(R,P),Z=i.add(j,j),Z=i.add(Z,j),A=i.mul(M,A),I=i.mul(U,I),Z=i.add(Z,A),A=i.sub(j,A),A=i.mul(M,A),I=i.add(I,A),j=i.mul(Z,I),T=i.add(T,j),j=i.mul(L,I),R=i.mul(E,R),R=i.sub(R,j),j=i.mul(E,Z),P=i.mul(L,P),P=i.add(P,j),new g(R,T,P)}subtract(m){return this.add(m.negate())}is0(){return this.equals(g.ZERO)}wNAF(m){return v.wNAFCached(this,m,g.normalizeZ)}multiplyUnsafe(m){const{endo:y,n:b}=e;Or("scalar",m,vs,b);const _=g.ZERO;if(m===vs)return _;if(this.is0()||m===bt)return this;if(!y||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,m,g.normalizeZ);let{k1neg:x,k1:k,k2neg:N,k2:R}=y.splitScalar(m),T=_,P=_,M=this;for(;k>vs||R>vs;)k&bt&&(T=T.add(M)),R&bt&&(P=P.add(M)),M=M.double(),k>>=bt,R>>=bt;return x&&(T=T.negate()),N&&(P=P.negate()),P=new g(i.mul(P.px,y.beta),P.py,P.pz),T.add(P)}multiply(m){const{endo:y,n:b}=e;Or("scalar",m,bt,b);let _,x;if(y){const{k1neg:k,k1:N,k2neg:R,k2:T}=y.splitScalar(m);let{p:P,f:M}=this.wNAF(N),{p:U,f:j}=this.wNAF(T);P=v.constTimeNegate(k,P),U=v.constTimeNegate(R,U),U=new g(i.mul(U.px,y.beta),U.py,U.pz),_=P.add(U),x=M.add(j)}else{const{p:k,f:N}=this.wNAF(m);_=k,x=N}return g.normalizeZ([_,x])[0]}multiplyAndAddUnsafe(m,y,b){const _=g.BASE,x=(N,R)=>R===vs||R===bt||!N.equals(_)?N.multiplyUnsafe(R):N.multiply(R),k=x(this,y).add(x(m,b));return k.is0()?void 0:k}toAffine(m){return h(this,m)}isTorsionFree(){const{h:m,isTorsionFree:y}=e;if(m===bt)return!0;if(y)return y(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:m,clearCofactor:y}=e;return m===bt?this:y?y(g,this):this.multiplyUnsafe(e.h)}toRawBytes(m=!0){return Kn("isCompressed",m),this.assertValidity(),r(g,this,m)}toHex(m=!0){return Kn("isCompressed",m),Gn(this.toRawBytes(m))}}g.BASE=new g(e.Gx,e.Gy,i.ONE),g.ZERO=new g(i.ZERO,i.ONE,i.ZERO);const f=e.nBitLength,v=fE(g,e.endo?Math.ceil(f/2):f);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:c}}function xE(t){const e=vw(t);return xa(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function CE(t){const e=xE(t),{Fp:i,n:s}=e,r=i.BYTES+1,o=2*i.BYTES+1;function a(A){return Vt(A,s)}function c(A){return gh(A,s)}const{ProjectivePoint:d,normPrivateKeyToScalar:u,weierstrassEquation:h,isWithinCurveOrder:p}=_E({...e,toBytes(A,E,I){const L=E.toAffine(),$=i.toBytes(L.x),B=_a;return Kn("isCompressed",I),I?B(Uint8Array.from([E.hasEvenY()?2:3]),$):B(Uint8Array.from([4]),$,i.toBytes(L.y))},fromBytes(A){const E=A.length,I=A[0],L=A.subarray(1);if(E===r&&(I===2||I===3)){const $=kr(L);if(!nl($,bt,i.ORDER))throw new Error("Point is not on curve");const B=h($);let D;try{D=i.sqrt(B)}catch(Y){const ue=Y instanceof Error?": "+Y.message:"";throw new Error("Point is not on curve"+ue)}const q=(D&bt)===bt;return(I&1)===1!==q&&(D=i.neg(D)),{x:$,y:D}}else if(E===o&&I===4){const $=i.fromBytes(L.subarray(0,i.BYTES)),B=i.fromBytes(L.subarray(i.BYTES,2*i.BYTES));return{x:$,y:B}}else{const $=r,B=o;throw new Error("invalid Point, expected length of "+$+", or uncompressed "+B+", got "+E)}}}),g=A=>Gn(Jn(A,e.nByteLength));function f(A){const E=s>>bt;return A>E}function v(A){return f(A)?a(-A):A}const w=(A,E,I)=>kr(A.slice(E,I));class m{constructor(E,I,L){this.r=E,this.s=I,this.recovery=L,this.assertValidity()}static fromCompact(E){const I=e.nByteLength;return E=Ti("compactSignature",E,I*2),new m(w(E,0,I),w(E,I,2*I))}static fromDER(E){const{r:I,s:L}=ms.toSig(Ti("DER",E));return new m(I,L)}assertValidity(){Or("r",this.r,bt,s),Or("s",this.s,bt,s)}addRecoveryBit(E){return new m(this.r,this.s,E)}recoverPublicKey(E){const{r:I,s:L,recovery:$}=this,B=N(Ti("msgHash",E));if($==null||![0,1,2,3].includes($))throw new Error("recovery id invalid");const D=$===2||$===3?I+e.n:I;if(D>=i.ORDER)throw new Error("recovery id 2 or 3 invalid");const q=$&1?"03":"02",Y=d.fromHex(q+g(D)),ue=c(D),le=a(-B*ue),be=a(L*ue),Pe=d.BASE.multiplyAndAddUnsafe(Y,le,be);if(!Pe)throw new Error("point at infinify");return Pe.assertValidity(),Pe}hasHighS(){return f(this.s)}normalizeS(){return this.hasHighS()?new m(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return Yn(this.toDERHex())}toDERHex(){return ms.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Yn(this.toCompactHex())}toCompactHex(){return g(this.r)+g(this.s)}}const y={isValidPrivateKey(A){try{return u(A),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const A=gw(e.n);return hE(e.randomBytes(A),e.n)},precompute(A=8,E=d.BASE){return E._setWindowSize(A),E.multiply(BigInt(3)),E}};function b(A,E=!0){return d.fromPrivateKey(A).toRawBytes(E)}function _(A){const E=Pr(A),I=typeof A=="string",L=(E||I)&&A.length;return E?L===r||L===o:I?L===2*r||L===2*o:A instanceof d}function x(A,E,I=!0){if(_(A))throw new Error("first arg must be private key");if(!_(E))throw new Error("second arg must be public key");return d.fromHex(E).multiply(u(A)).toRawBytes(I)}const k=e.bits2int||function(A){if(A.length>8192)throw new Error("input is too large");const E=kr(A),I=A.length*8-e.nBitLength;return I>0?E>>BigInt(I):E},N=e.bits2int_modN||function(A){return a(k(A))},R=nh(e.nBitLength);function T(A){return Or("num < 2^"+e.nBitLength,A,vs,R),Jn(A,e.nByteLength)}function P(A,E,I=M){if(["recovered","canonical"].some(Oe=>Oe in I))throw new Error("sign() legacy options not supported");const{hash:L,randomBytes:$}=e;let{lowS:B,prehash:D,extraEntropy:q}=I;B==null&&(B=!0),A=Ti("msgHash",A),yw(I),D&&(A=Ti("prehashed msgHash",L(A)));const Y=N(A),ue=u(E),le=[T(ue),T(Y)];if(q!=null&&q!==!1){const Oe=q===!0?$(i.BYTES):q;le.push(Ti("extraEntropy",Oe))}const be=_a(...le),Pe=Y;function He(Oe){const ke=k(Oe);if(!p(ke))return;const Je=c(ke),Qe=d.BASE.multiply(ke).toAffine(),et=a(Qe.x);if(et===vs)return;const it=a(Je*a(Pe+et*ue));if(it===vs)return;let Dt=(Qe.x===et?0:2)|Number(Qe.y&bt),Xr=it;return B&&f(it)&&(Xr=v(it),Dt^=1),new m(et,Xr,Dt)}return{seed:be,k2sig:He}}const M={lowS:e.lowS,prehash:!1},U={lowS:e.lowS,prehash:!1};function j(A,E,I=M){const{seed:L,k2sig:$}=P(A,E,I),B=e;return Xf(B.hash.outputLen,B.nByteLength,B.hmac)(L,$)}d.BASE._setWindowSize(8);function Z(A,E,I,L=U){var it;const $=A;E=Ti("msgHash",E),I=Ti("publicKey",I);const{lowS:B,prehash:D,format:q}=L;if(yw(L),"strict"in L)throw new Error("options.strict was renamed to lowS");if(q!==void 0&&q!=="compact"&&q!=="der")throw new Error("format must be compact or der");const Y=typeof $=="string"||Pr($),ue=!Y&&!q&&typeof $=="object"&&$!==null&&typeof $.r=="bigint"&&typeof $.s=="bigint";if(!Y&&!ue)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let le,be;try{if(ue&&(le=new m($.r,$.s)),Y){try{q!=="compact"&&(le=m.fromDER($))}catch(Dt){if(!(Dt instanceof ms.Err))throw Dt}!le&&q!=="der"&&(le=m.fromCompact($))}be=d.fromHex(I)}catch{return!1}if(!le||B&&le.hasHighS())return!1;D&&(E=e.hash(E));const{r:Pe,s:He}=le,Oe=N(E),ke=c(He),Je=a(Oe*ke),Qe=a(Pe*ke),et=(it=d.BASE.multiplyAndAddUnsafe(be,Je,Qe))==null?void 0:it.toAffine();return et?a(et.x)===Pe:!1}return{CURVE:e,getPublicKey:b,getSharedSecret:x,sign:j,verify:Z,ProjectivePoint:d,Signature:m,utils:y}}function EE(t){return{hash:t,hmac:(e,...i)=>cw(t,e,zx(...i)),randomBytes:Fx}}function IE(t,e){const i=s=>CE({...t,...EE(s)});return{...i(e),create:i}}const _w=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),xw=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),AE=BigInt(1),yh=BigInt(2),Cw=(t,e)=>(t+e/yh)/e;function SE(t){const e=_w,i=BigInt(3),s=BigInt(6),r=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),d=BigInt(88),u=t*t*t%e,h=u*u*t%e,p=fi(h,i,e)*h%e,g=fi(p,i,e)*h%e,f=fi(g,yh,e)*u%e,v=fi(f,r,e)*f%e,w=fi(v,o,e)*v%e,m=fi(w,c,e)*w%e,y=fi(m,d,e)*m%e,b=fi(y,c,e)*w%e,_=fi(b,i,e)*h%e,x=fi(_,a,e)*v%e,k=fi(x,s,e)*u%e,N=fi(k,yh,e);if(!bh.eql(bh.sqr(N),t))throw new Error("Cannot find square root");return N}const bh=hw(_w,void 0,void 0,{sqrt:SE});IE({a:BigInt(0),b:BigInt(7),Fp:bh,n:xw,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=xw,i=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),s=-AE*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=i,a=BigInt("0x100000000000000000000000000000000"),c=Cw(o*t,e),d=Cw(-s*t,e);let u=Vt(t-c*i-d*r,e),h=Vt(-c*s-d*o,e);const p=u>a,g=h>a;if(p&&(u=e-u),g&&(h=e-h),u>a||h>a)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:p,k1:u,k2neg:g,k2:h}}}},Uf),BigInt(0);const _h={createBalance(t,e){const i={name:t.metadata.name||"",symbol:t.metadata.symbol||"",decimals:t.metadata.decimals||0,value:t.metadata.value||0,price:t.metadata.price||0,iconUrl:t.metadata.iconUrl||""};return{name:i.name,symbol:i.symbol,chainId:e,address:t.address==="native"?void 0:this.convertAddressToCAIP10Address(t.address,e),value:i.value,price:i.price,quantity:{decimals:i.decimals.toString(),numeric:this.convertHexToBalance({hex:t.balance,decimals:i.decimals})},iconUrl:i.iconUrl}},convertHexToBalance({hex:t,decimals:e}){return Sf(BigInt(t),e)},convertAddressToCAIP10Address(t,e){return`${e}:${t}`},createCAIP2ChainId(t,e){return`${e}:${parseInt(t,16)}`},getChainIdHexFromCAIP2ChainId(t){const e=t.split(":");if(e.length<2||!e[1])return"0x0";const i=e[1],s=parseInt(i,10);return isNaN(s)?"0x0":`0x${s.toString(16)}`},isWalletGetAssetsResponse(t){return typeof t!="object"||t===null?!1:Object.values(t).every(e=>Array.isArray(e)&&e.every(i=>this.isValidAsset(i)))},isValidAsset(t){return typeof t=="object"&&t!==null&&typeof t.address=="string"&&typeof t.balance=="string"&&(t.type==="ERC20"||t.type==="NATIVE")&&typeof t.metadata=="object"&&t.metadata!==null&&typeof t.metadata.name=="string"&&typeof t.metadata.symbol=="string"&&typeof t.metadata.decimals=="number"&&typeof t.metadata.price=="number"&&typeof t.metadata.iconUrl=="string"}},Ew={async getMyTokensWithBalance(t){const e=de.state.address,i=C.state.activeCaipNetwork;if(!e||!i)return[];if(i.chainNamespace==="eip155"){const r=await this.getEIP155Balances(e,i);if(r)return this.filterLowQualityTokens(r)}const s=await me.getBalance(e,i.caipNetworkId,t);return this.filterLowQualityTokens(s.balances)},async getEIP155Balances(t,e){var i,s,r;try{const o=_h.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);if(!((r=(s=(i=await ce.getCapabilities(t))==null?void 0:i[o])==null?void 0:s.assetDiscovery)!=null&&r.supported))return null;const a=await ce.walletGetAssets({account:t,chainFilter:[o]});return _h.isWalletGetAssetsResponse(a)?(a[o]||[]).map(c=>_h.createBalance(c,e.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(t){return t.filter(e=>e.quantity.decimals!=="0")},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(e=>({...e,address:e!=null&&e.address?e.address:C.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},Se=Ve({tokenBalances:[],loading:!1}),Iw={state:Se,subscribe(t){return Ot(Se,()=>t(Se))},subscribeKey(t,e){return Lt(Se,t,e)},setToken(t){t&&(Se.token=xr(t))},setTokenAmount(t){Se.sendTokenAmount=t},setReceiverAddress(t){Se.receiverAddress=t},setReceiverProfileImageUrl(t){Se.receiverProfileImageUrl=t},setReceiverProfileName(t){Se.receiverProfileName=t},setGasPrice(t){Se.gasPrice=t},setGasPriceInUsd(t){Se.gasPriceInUSD=t},setNetworkBalanceInUsd(t){Se.networkBalanceInUSD=t},setLoading(t){Se.loading=t},sendToken(){var t;switch((t=C.state.activeCaipNetwork)==null?void 0:t.chainNamespace){case"eip155":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){var i,s,r,o,a,c;const t=C.state.activeChain,e=(i=de.state.preferredAccountTypes)==null?void 0:i[t];(s=this.state.token)!=null&&s.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(_e.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===Ds.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((o=this.state.token)!=null&&o.quantity.decimals)&&(_e.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===Ds.ACCOUNT_TYPES.SMART_ACCOUNT,token:(a=this.state.token)==null?void 0:a.symbol,amount:this.state.sendTokenAmount,network:((c=C.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async fetchTokenBalance(t){var o,a;Se.loading=!0;const e=(o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId,i=(a=C.state.activeCaipNetwork)==null?void 0:a.chainNamespace,s=C.state.activeCaipAddress,r=s?V.getPlainAddress(s):void 0;if(Se.lastRetry&&!V.isAllowedRetry(Se.lastRetry,30*lt.ONE_SEC_MS))return Se.loading=!1,[];try{if(r&&e&&i){const c=await Ew.getMyTokensWithBalance();return Se.tokenBalances=c,Se.lastRetry=void 0,c}}catch(c){Se.lastRetry=Date.now(),t==null||t(c),Ke.showError("Token Balance Unavailable")}finally{Se.loading=!1}return[]},fetchNetworkBalance(){if(Se.tokenBalances.length===0)return;const t=Ew.mapBalancesToSwapTokens(Se.tokenBalances);if(!t)return;const e=t.find(i=>i.address===C.getActiveNetworkTokenAddress());e&&(Se.networkBalanceInUSD=e?Fc.multiply(e.quantity.numeric,e.price).toString():"0")},isInsufficientNetworkTokenForGas(t,e){const i=e||"0";return Fc.bigNumber(t).eq(0)?!0:Fc.bigNumber(Fc.bigNumber(i)).gt(t)},hasInsufficientGasFunds(){var i;const t=C.state.activeChain;let e=!0;return((i=de.state.preferredAccountTypes)==null?void 0:i[t])===Ds.ACCOUNT_TYPES.SMART_ACCOUNT?e=!1:Se.networkBalanceInUSD&&(e=this.isInsufficientNetworkTokenForGas(Se.networkBalanceInUSD,Se.gasPriceInUSD)),e},async sendNativeToken(t){var a,c,d,u,h,p;const e=C.state.activeChain;X.pushTransactionStack({view:"Account",goBack:!1});const i=t.receiverAddress,s=de.state.address,r=ce.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals)),o="0x";try{await ce.sendTransaction({chainNamespace:"eip155",to:i,address:s,data:o,value:r??BigInt(0),gasPrice:t.gasPrice}),Ke.showSuccess("Transaction started"),_e.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((a=de.state.preferredAccountTypes)==null?void 0:a[e])===Ds.ACCOUNT_TYPES.SMART_ACCOUNT,token:((c=this.state.token)==null?void 0:c.symbol)||"",amount:t.sendTokenAmount,network:((d=C.state.activeCaipNetwork)==null?void 0:d.caipNetworkId)||""}}),this.resetSend()}catch(g){console.error("SendController:sendERC20Token - failed to send native token",g);const f=g instanceof Error?g.message:"Unknown error";_e.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:f,isSmartAccount:((u=de.state.preferredAccountTypes)==null?void 0:u[e])===Ds.ACCOUNT_TYPES.SMART_ACCOUNT,token:((h=this.state.token)==null?void 0:h.symbol)||"",amount:t.sendTokenAmount,network:((p=C.state.activeCaipNetwork)==null?void 0:p.caipNetworkId)||""}}),Ke.showError("Something went wrong")}},async sendERC20Token(t){var i,s,r;X.pushTransactionStack({view:"Account",goBack:!1});const e=ce.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals));try{if(de.state.address&&t.sendTokenAmount&&t.receiverAddress&&t.tokenAddress){const o=V.getPlainAddress(t.tokenAddress);await ce.writeContract({fromAddress:de.state.address,tokenAddress:o,args:[t.receiverAddress,e??BigInt(0)],method:"transfer",abi:ex.getERC20Abi(o),chainNamespace:"eip155"}),Ke.showSuccess("Transaction started"),this.resetSend()}}catch(o){console.error("SendController:sendERC20Token - failed to send erc20 token",o);const a=o instanceof Error?o.message:"Unknown error";_e.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:a,isSmartAccount:((i=de.state.preferredAccountTypes)==null?void 0:i.eip155)===Ds.ACCOUNT_TYPES.SMART_ACCOUNT,token:((s=this.state.token)==null?void 0:s.symbol)||"",amount:t.sendTokenAmount,network:((r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)||""}}),Ke.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){Ke.showError("Please enter a valid amount and receiver address");return}X.pushTransactionStack({view:"Account",goBack:!1}),ce.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),de.fetchTokenBalance()}).catch(t=>{Ke.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",t)})},resetSend(){Se.token=void 0,Se.sendTokenAmount=void 0,Se.receiverAddress=void 0,Se.receiverProfileImageUrl=void 0,Se.receiverProfileName=void 0,Se.loading=!1,Se.tokenBalances=[]}},xh={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},cl={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},Q=Ve({chains:ox(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),C={state:Q,subscribe(t){return Ot(Q,()=>{t(Q)})},subscribeKey(t,e){return Lt(Q,t,e)},subscribeChainProp(t,e,i){let s;return Ot(Q.chains,()=>{var o;const r=i||Q.activeChain;if(r){const a=(o=Q.chains.get(r))==null?void 0:o[t];s!==a&&(s=a,e(a))}})},initialize(t,e,i){const{chainId:s,namespace:r}=ae.getActiveNetworkProps(),o=e==null?void 0:e.find(d=>d.id.toString()===(s==null?void 0:s.toString())),a=t.find(d=>(d==null?void 0:d.namespace)===r)||(t==null?void 0:t[0]),c=new Set([...(e==null?void 0:e.map(d=>d.chainNamespace))??[]]);((t==null?void 0:t.length)===0||!a)&&(Q.noAdapters=!0),Q.noAdapters||(Q.activeChain=a==null?void 0:a.namespace,Q.activeCaipNetwork=o,this.setChainNetworkData(a==null?void 0:a.namespace,{caipNetwork:o}),Q.activeChain&&ds.set({activeChain:a==null?void 0:a.namespace})),c.forEach(d=>{const u=e==null?void 0:e.filter(h=>h.chainNamespace===d);C.state.chains.set(d,{namespace:d,networkState:Ve({...cl,caipNetwork:u==null?void 0:u[0]}),accountState:Ve(xh),caipNetworks:u??[],...i}),this.setRequestedCaipNetworks(u??[],d)})},removeAdapter(t){var e,i;if(Q.activeChain===t){const s=Array.from(Q.chains.entries()).find(([r])=>r!==t);if(s){const r=(i=(e=s[1])==null?void 0:e.caipNetworks)==null?void 0:i[0];r&&this.setActiveCaipNetwork(r)}}Q.chains.delete(t)},addAdapter(t,{networkControllerClient:e,connectionControllerClient:i},s){Q.chains.set(t.namespace,{namespace:t.namespace,networkState:{...cl,caipNetwork:s[0]},accountState:xh,caipNetworks:s,connectionControllerClient:i,networkControllerClient:e}),this.setRequestedCaipNetworks((s==null?void 0:s.filter(r=>r.chainNamespace===t.namespace))??[],t.namespace)},addNetwork(t){var i;const e=Q.chains.get(t.chainNamespace);if(e){const s=[...e.caipNetworks||[]];(i=e.caipNetworks)!=null&&i.find(r=>r.id===t.id)||s.push(t),Q.chains.set(t.chainNamespace,{...e,caipNetworks:s}),this.setRequestedCaipNetworks(s,t.chainNamespace)}},removeNetwork(t,e){var s,r,o;const i=Q.chains.get(t);if(i){const a=((s=Q.activeCaipNetwork)==null?void 0:s.id)===e,c=[...((r=i.caipNetworks)==null?void 0:r.filter(d=>d.id!==e))||[]];a&&((o=i==null?void 0:i.caipNetworks)!=null&&o[0])&&this.setActiveCaipNetwork(i.caipNetworks[0]),Q.chains.set(t,{...i,caipNetworks:c}),this.setRequestedCaipNetworks(c||[],t)}},setAdapterNetworkState(t,e){const i=Q.chains.get(t);i&&(i.networkState={...i.networkState||cl,...e},Q.chains.set(t,i))},setChainAccountData(t,e,i=!0){if(!t)throw new Error("Chain is required to update chain account data");const s=Q.chains.get(t);if(s){const r={...s.accountState||xh,...e};Q.chains.set(t,{...s,accountState:r}),(Q.chains.size===1||Q.activeChain===t)&&(e.caipAddress&&(Q.activeCaipAddress=e.caipAddress),de.replaceState(r))}},setChainNetworkData(t,e){if(!t)return;const i=Q.chains.get(t);if(i){const s={...i.networkState||cl,...e};Q.chains.set(t,{...i,networkState:s})}},setAccountProp(t,e,i,s=!0){this.setChainAccountData(i,{[t]:e},s),t==="status"&&e==="disconnected"&&i&&ie.removeConnectorId(i)},setActiveNamespace(t){var s,r;Q.activeChain=t;const e=t?Q.chains.get(t):void 0,i=(s=e==null?void 0:e.networkState)==null?void 0:s.caipNetwork;i!=null&&i.id&&t&&(Q.activeCaipAddress=(r=e==null?void 0:e.accountState)==null?void 0:r.caipAddress,Q.activeCaipNetwork=i,this.setChainNetworkData(t,{caipNetwork:i}),ae.setActiveCaipNetworkId(i==null?void 0:i.caipNetworkId),ds.set({activeChain:t,selectedNetworkId:i==null?void 0:i.caipNetworkId}))},setActiveCaipNetwork(t){var i,s,r;if(!t)return;Q.activeChain!==t.chainNamespace&&this.setIsSwitchingNamespace(!0);const e=Q.chains.get(t.chainNamespace);Q.activeChain=t.chainNamespace,Q.activeCaipNetwork=t,this.setChainNetworkData(t.chainNamespace,{caipNetwork:t}),(i=e==null?void 0:e.accountState)!=null&&i.address?Q.activeCaipAddress=`${t.chainNamespace}:${t.id}:${(s=e==null?void 0:e.accountState)==null?void 0:s.address}`:Q.activeCaipAddress=void 0,this.setAccountProp("caipAddress",Q.activeCaipAddress,t.chainNamespace),e&&de.replaceState(e.accountState),Iw.resetSend(),ds.set({activeChain:Q.activeChain,selectedNetworkId:(r=Q.activeCaipNetwork)==null?void 0:r.caipNetworkId}),ae.setActiveCaipNetworkId(t.caipNetworkId),!this.checkIfSupportedNetwork(t.chainNamespace)&&F.state.enableNetworkSwitch&&!F.state.allowUnsupportedChain&&!ce.state.wcBasic&&this.showUnsupportedChainUI()},addCaipNetwork(t){var i;if(!t)return;const e=Q.chains.get(t.chainNamespace);e&&((i=e==null?void 0:e.caipNetworks)==null||i.push(t))},async switchActiveNamespace(t){var r;if(!t)return;const e=t!==C.state.activeChain,i=(r=C.getNetworkData(t))==null?void 0:r.caipNetwork,s=C.getCaipNetworkByNamespace(t,i==null?void 0:i.id);e&&s&&await C.switchActiveNetwork(s)},async switchActiveNetwork(t){var i,s;!((s=(i=C.state.chains.get(C.state.activeChain))==null?void 0:i.caipNetworks)!=null&&s.some(r=>{var o;return r.id===((o=Q.activeCaipNetwork)==null?void 0:o.id)}))&&X.goBack();const e=this.getNetworkControllerClient(t.chainNamespace);e&&(await e.switchCaipNetwork(t),_e.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.caipNetworkId}}))},getNetworkControllerClient(t){const e=t||Q.activeChain,i=Q.chains.get(e);if(!i)throw new Error("Chain adapter not found");if(!i.networkControllerClient)throw new Error("NetworkController client not set");return i.networkControllerClient},getConnectionControllerClient(t){const e=t||Q.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const i=Q.chains.get(e);if(!(i!=null&&i.connectionControllerClient))throw new Error("ConnectionController client not set");return i.connectionControllerClient},getAccountProp(t,e){var r;let i=Q.activeChain;if(e&&(i=e),!i)return;const s=(r=Q.chains.get(i))==null?void 0:r.accountState;if(s)return s[t]},getNetworkProp(t,e){var s;const i=(s=Q.chains.get(e))==null?void 0:s.networkState;if(i)return i[t]},getRequestedCaipNetworks(t){const e=Q.chains.get(t),{approvedCaipNetworkIds:i=[],requestedCaipNetworks:s=[]}=(e==null?void 0:e.networkState)||{};return V.sortRequestedNetworks(i,s)},getAllRequestedCaipNetworks(){const t=[];return Q.chains.forEach(e=>{const i=this.getRequestedCaipNetworks(e.namespace);t.push(...i)}),t},setRequestedCaipNetworks(t,e){this.setAdapterNetworkState(e,{requestedCaipNetworks:t})},getAllApprovedCaipNetworkIds(){const t=[];return Q.chains.forEach(e=>{const i=this.getApprovedCaipNetworkIds(e.namespace);t.push(...i)}),t},getActiveCaipNetwork(){return Q.activeCaipNetwork},getActiveCaipAddress(){return Q.activeCaipAddress},getApprovedCaipNetworkIds(t){var e,i;return((i=(e=Q.chains.get(t))==null?void 0:e.networkState)==null?void 0:i.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(t){var i;const e=await((i=this.getNetworkControllerClient())==null?void 0:i.getApprovedCaipNetworksData());this.setAdapterNetworkState(t,{approvedCaipNetworkIds:e==null?void 0:e.approvedCaipNetworkIds,supportsAllNetworks:e==null?void 0:e.supportsAllNetworks})},checkIfSupportedNetwork(t,e){const i=e||Q.activeCaipNetwork,s=this.getRequestedCaipNetworks(t);return s.length?s==null?void 0:s.some(r=>r.id===(i==null?void 0:i.id)):!0},checkIfSupportedChainId(t){var e;return Q.activeChain?(e=this.getRequestedCaipNetworks(Q.activeChain))==null?void 0:e.some(i=>i.id===t):!0},setSmartAccountEnabledNetworks(t,e){this.setAdapterNetworkState(e,{smartAccountEnabledNetworks:t})},checkIfSmartAccountEnabled(){var i,s;const t=Zg.caipNetworkIdToNumber((i=Q.activeCaipNetwork)==null?void 0:i.caipNetworkId),e=Q.activeChain;return!e||!t?!1:!!((s=this.getNetworkProp("smartAccountEnabledNetworks",e))!=null&&s.includes(Number(t)))},getActiveNetworkTokenAddress(){var s,r;const t=((s=Q.activeCaipNetwork)==null?void 0:s.chainNamespace)||"eip155",e=((r=Q.activeCaipNetwork)==null?void 0:r.id)||1,i=lt.NATIVE_TOKEN_ADDRESS[t];return`${t}:${e}:${i}`},showUnsupportedChainUI(){Ne.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const t=Q.activeCaipNetwork;return!!(t!=null&&t.chainNamespace&&lt.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace))},resetNetwork(t){this.setAdapterNetworkState(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(t){const e=t;if(!e)throw new Error("Chain is required to set account prop");Q.activeCaipAddress=void 0,this.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),ie.removeConnectorId(e)},async disconnect(t){const e=vx(t);try{Iw.resetSend();const i=await Promise.allSettled(e.map(async([r,o])=>{var a;try{const{caipAddress:c}=this.getAccountData(r)||{};c&&((a=o.connectionControllerClient)!=null&&a.disconnect)&&await o.connectionControllerClient.disconnect(r),this.resetAccount(r),this.resetNetwork(r)}catch(c){throw new Error(`Failed to disconnect chain ${r}: ${c.message}`)}}));ce.resetWcConnection();const s=i.filter(r=>r.status==="rejected");if(s.length>0)throw new Error(s.map(r=>r.reason.message).join(", "));ae.deleteConnectedSocialProvider(),t?ie.removeConnectorId(t):ie.resetConnectorIds(),_e.sendEvent({type:"track",event:"DISCONNECT_SUCCESS",properties:{namespace:t||"all"}})}catch(i){console.error(i.message||"Failed to disconnect chains"),_e.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:i.message||"Failed to disconnect chains"}})}},setIsSwitchingNamespace(t){Q.isSwitchingNamespace=t},getFirstCaipNetworkSupportsAuthConnector(){var i,s;const t=[];let e;if(Q.chains.forEach(r=>{oe.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===r.namespace)&&r.namespace&&t.push(r.namespace)}),t.length>0){const r=t[0];return e=r?(s=(i=Q.chains.get(r))==null?void 0:i.caipNetworks)==null?void 0:s[0]:void 0,e}},getAccountData(t){var e;return t?(e=C.state.chains.get(t))==null?void 0:e.accountState:de.state},getNetworkData(t){var i;const e=t||Q.activeChain;if(e)return(i=C.state.chains.get(e))==null?void 0:i.networkState},getCaipNetworkByNamespace(t,e){var r,o,a;if(!t)return;const i=C.state.chains.get(t);return((r=i==null?void 0:i.caipNetworks)==null?void 0:r.find(c=>c.id===e))||((o=i==null?void 0:i.networkState)==null?void 0:o.caipNetwork)||((a=i==null?void 0:i.caipNetworks)==null?void 0:a[0])},getRequestedCaipNetworkIds(){const t=ie.state.filterByNamespace;return(t?[Q.chains.get(t)]:Array.from(Q.chains.values())).flatMap(e=>(e==null?void 0:e.caipNetworks)||[]).map(e=>e.caipNetworkId)},getCaipNetworks(t){return t?C.getRequestedCaipNetworks(t):C.getAllRequestedCaipNetworks()}},NE={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Aw=V.getBlockchainApiUrl(),ni=Ve({clientId:null,api:new Hc({baseUrl:Aw,clientId:null}),supportedChains:{http:[],ws:[]}}),me={state:ni,async get(t){const{st:e,sv:i}=me.getSdkProperties(),s=F.state.projectId,r={...t.params||{},st:e,sv:i,projectId:s};return ni.api.get({...t,params:r})},getSdkProperties(){const{sdkType:t,sdkVersion:e}=F.state;return{st:t||"unknown",sv:e||"unknown"}},async isNetworkSupported(t){if(!t)return!1;try{ni.supportedChains.http.length||await me.getSupportedNetworks()}catch{return!1}return ni.supportedChains.http.includes(t)},async getSupportedNetworks(){const t=await me.get({path:"v1/supported-chains"});return ni.supportedChains=t,t},async fetchIdentity({address:t,caipNetworkId:e}){if(!await me.isNetworkSupported(e))return{avatar:"",name:""};const i=ae.getIdentityFromCacheForAddress(t);if(i)return i;const s=await me.get({path:`/v1/identity/${t}`,params:{sender:C.state.activeCaipAddress?V.getPlainAddress(C.state.activeCaipAddress):void 0}});return ae.updateIdentityCache({address:t,identity:s,timestamp:Date.now()}),s},async fetchTransactions({account:t,cursor:e,onramp:i,signal:s,cache:r,chainId:o}){var a;return await me.isNetworkSupported((a=C.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)?me.get({path:`/v1/account/${t}/history`,params:{cursor:e,onramp:i,chainId:o},signal:s,cache:r}):{data:[],next:void 0}},async fetchSwapQuote({amount:t,userAddress:e,from:i,to:s,gasPrice:r}){var o;return await me.isNetworkSupported((o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?me.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:t,userAddress:e,from:i,to:s,gasPrice:r}}):{quotes:[]}},async fetchSwapTokens({chainId:t}){var e;return await me.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?me.get({path:"/v1/convert/tokens",params:{chainId:t}}):{tokens:[]}},async fetchTokenPrice({addresses:t}){var e;return await me.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?ni.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:t,projectId:F.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:t,userAddress:e}){var i;return await me.isNetworkSupported((i=C.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?me.get({path:"/v1/convert/allowance",params:{tokenAddress:t,userAddress:e},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:t}){var s;const{st:e,sv:i}=me.getSdkProperties();if(!await me.isNetworkSupported((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Gas Price");return me.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:t,st:e,sv:i}})},async generateSwapCalldata({amount:t,from:e,to:i,userAddress:s,disableEstimate:r}){var o;if(!await me.isNetworkSupported((o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId))throw new Error("Network not supported for Swaps");return ni.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:lt.CONVERT_SLIPPAGE_TOLERANCE},projectId:F.state.projectId,from:e,to:i,userAddress:s,disableEstimate:r}})},async generateApproveCalldata({from:t,to:e,userAddress:i}){var o;const{st:s,sv:r}=me.getSdkProperties();if(!await me.isNetworkSupported((o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId))throw new Error("Network not supported for Swaps");return me.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:i,from:t,to:e,st:s,sv:r}})},async getBalance(t,e,i){var d;const{st:s,sv:r}=me.getSdkProperties();if(!await me.isNetworkSupported((d=C.state.activeCaipNetwork)==null?void 0:d.caipNetworkId))return Ke.showError("Token Balance Unavailable"),{balances:[]};const o=`${e}:${t}`,a=ae.getBalanceCacheForCaipAddress(o);if(a)return a;const c=await me.get({path:`/v1/account/${t}/balance`,params:{currency:"usd",chainId:e,forceUpdate:i,st:s,sv:r}});return ae.updateBalanceCache({caipAddress:o,balance:c,timestamp:Date.now()}),c},async lookupEnsName(t){var e;return await me.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?me.get({path:`/v1/profile/account/${t}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:t}){var e;return await me.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?me.get({path:`/v1/profile/reverse/${t}`,params:{sender:de.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(t){var e;return await me.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?me.get({path:`/v1/profile/suggestions/${t}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:t,address:e,message:i,signature:s}){var r;return await me.isNetworkSupported((r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?ni.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:i,signature:s},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:i,purchaseAmount:s,paymentAmount:r}){var o;return await me.isNetworkSupported((o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?(await ni.api.post({path:"/v1/generators/onrampurl",params:{projectId:F.state.projectId},body:{destinationWallets:t,defaultNetwork:i,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:s,presetFiatAmount:r}})).url:""},async getOnrampOptions(){var t;if(!await me.isNetworkSupported((t=C.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await me.get({path:"/v1/onramp/options"})}catch{return NE}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:i,network:s}){var r;try{return await me.isNetworkSupported((r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?await ni.api.post({path:"/v1/onramp/quote",params:{projectId:F.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:i,network:s}}):null}catch{return{coinbaseFee:{amount:i,currency:e.id},networkFee:{amount:i,currency:e.id},paymentSubtotal:{amount:i,currency:e.id},paymentTotal:{amount:i,currency:e.id},purchaseAmount:{amount:i,currency:e.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(t){var e;return await me.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?me.get({path:`/v1/sessions/${t}`}):[]},async revokeSmartSession(t,e,i){var s;return await me.isNetworkSupported((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?ni.api.post({path:`/v1/sessions/${t}/revoke`,params:{projectId:F.state.projectId},body:{pci:e,signature:i}}):{success:!1}},setClientId(t){ni.clientId=t,ni.api=new Hc({baseUrl:Aw,clientId:t})}},wi=Ve({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),de={state:wi,replaceState(t){t&&Object.assign(wi,xr(t))},subscribe(t){return C.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e,i){let s;return C.subscribeChainProp("accountState",r=>{if(r){const o=r[t];s!==o&&(s=o,e(o))}},i)},setStatus(t,e){C.setAccountProp("status",t,e)},getCaipAddress(t){return C.getAccountProp("caipAddress",t)},setCaipAddress(t,e){const i=t?V.getPlainAddress(t):void 0;e===C.state.activeChain&&(C.state.activeCaipAddress=t),C.setAccountProp("caipAddress",t,e),C.setAccountProp("address",i,e)},setBalance(t,e,i){C.setAccountProp("balance",t,i),C.setAccountProp("balanceSymbol",e,i)},setProfileName(t,e){C.setAccountProp("profileName",t,e)},setProfileImage(t,e){C.setAccountProp("profileImage",t,e)},setUser(t,e){C.setAccountProp("user",t,e)},setAddressExplorerUrl(t,e){C.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){C.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){C.setAccountProp("currentTab",t,C.state.activeChain)},setTokenBalance(t,e){t&&C.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){C.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){C.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,i){const s=C.getAccountProp("addressLabels",i)||new Map;s.set(t,e),C.setAccountProp("addressLabels",s,i)},removeAddressLabel(t,e){const i=C.getAccountProp("addressLabels",e)||new Map;i.delete(t),C.setAccountProp("addressLabels",i,e)},setConnectedWalletInfo(t,e){C.setAccountProp("connectedWalletInfo",t,e,!1)},setPreferredAccountType(t,e){C.setAccountProp("preferredAccountTypes",{...wi.preferredAccountTypes,[e]:t},e)},setPreferredAccountTypes(t){wi.preferredAccountTypes=t},setSocialProvider(t,e){t&&C.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){C.setAccountProp("socialWindow",t?xr(t):void 0,e)},setFarcasterUrl(t,e){C.setAccountProp("farcasterUrl",t,e)},async fetchTokenBalance(t){var o,a;wi.balanceLoading=!0;const e=(o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId,i=(a=C.state.activeCaipNetwork)==null?void 0:a.chainNamespace,s=C.state.activeCaipAddress,r=s?V.getPlainAddress(s):void 0;if(wi.lastRetry&&!V.isAllowedRetry(wi.lastRetry,30*lt.ONE_SEC_MS))return wi.balanceLoading=!1,[];try{if(r&&e&&i){const c=(await me.getBalance(r,e)).balances.filter(d=>d.quantity.decimals!=="0");return this.setTokenBalance(c,i),wi.lastRetry=void 0,wi.balanceLoading=!1,c}}catch(c){wi.lastRetry=Date.now(),t==null||t(c),Ke.showError("Token Balance Unavailable")}finally{wi.balanceLoading=!1}return[]},resetAccount(t){C.resetAccount(t)}},Kt=Ve({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),Ne={state:Kt,subscribe(t){return Ot(Kt,()=>t(Kt))},subscribeKey(t,e){return Lt(Kt,t,e)},async open(t){var s;const e=de.state.status==="connected";ce.state.wcBasic?ee.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await ee.prefetch({fetchConnectorImages:!e,fetchFeaturedWallets:!e,fetchRecommendedWallets:!e}),t!=null&&t.namespace?(await C.switchActiveNamespace(t.namespace),Ne.setLoading(!0,t.namespace)):Ne.setLoading(!0),ie.setFilterByNamespace(t==null?void 0:t.namespace);const i=(s=C.getAccountData(t==null?void 0:t.namespace))==null?void 0:s.caipAddress;C.state.noAdapters&&!i?V.isMobile()?X.reset("AllWallets"):X.reset("ConnectingWalletConnectBasic"):t!=null&&t.view?X.reset(t.view,t.data):i?X.reset("Account"):X.reset("Connect"),Kt.open=!0,ds.set({open:!0}),_e.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!i}})},close(){const t=F.state.enableEmbedded,e=!!C.state.activeCaipAddress;Kt.open&&_e.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}}),Kt.open=!1,Ne.clearLoading(),t?e?X.replace("Account"):X.push("Connect"):ds.set({open:!1}),ce.resetUri()},setLoading(t,e){e&&Kt.loadingNamespaceMap.set(e,t),Kt.loading=t,ds.set({loading:t})},clearLoading(){Kt.loadingNamespaceMap.clear(),Kt.loading=!1},shake(){Kt.shake||(Kt.shake=!0,setTimeout(()=>{Kt.shake=!1},500))}},Sw={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]};Ve({providers:ax,selectedProvider:null,error:null,purchaseCurrency:Sw,paymentCurrency:{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},purchaseCurrencies:[Sw],paymentCurrencies:[],quotesLoading:!1});const PE={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:lt.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0};Ve(PE);const Ri=Ve({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Xn={state:Ri,subscribe(t){return Ot(Ri,()=>t(Ri))},subscribeKey(t,e){return Lt(Ri,t,e)},showTooltip({message:t,triggerRect:e,variant:i}){Ri.open=!0,Ri.message=t,Ri.triggerRect=e,Ri.variant=i},hide(){Ri.open=!1,Ri.message="",Ri.triggerRect={width:0,height:0,top:0,left:0}}},Nw=2147483648,kE={convertEVMChainIdToCoinType(t){if(t>=Nw)throw new Error("Invalid chainId");return(Nw|t)>>>0}},mi=Ve({suggestions:[],loading:!1}),Pw={state:mi,subscribe(t){return Ot(mi,()=>t(mi))},subscribeKey(t,e){return Lt(mi,t,e)},async resolveName(t){var e,i;try{return await me.lookupEnsName(t)}catch(s){const r=s;throw new Error(((i=(e=r==null?void 0:r.reasons)==null?void 0:e[0])==null?void 0:i.description)||"Error resolving name")}},async isNameRegistered(t){try{return await me.lookupEnsName(t),!0}catch{return!1}},async getSuggestions(t){try{mi.loading=!0,mi.suggestions=[];const e=await me.getEnsNameSuggestions(t);return mi.suggestions=e.suggestions.map(i=>({...i,name:i.name}))||[],mi.suggestions}catch(e){const i=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(i)}finally{mi.loading=!1}},async getNamesForAddress(t){try{if(!C.state.activeCaipNetwork)return[];const e=ae.getEnsFromCacheForAddress(t);if(e)return e;const i=await me.reverseLookupEnsName({address:t});return ae.updateEnsCache({address:t,ens:i,timestamp:Date.now()}),i}catch(e){const i=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(i)}},async registerName(t){const e=C.state.activeCaipNetwork;if(!e)throw new Error("Network not found");const i=de.state.address,s=ie.getAuthConnector();if(!i||!s)throw new Error("Address or auth connector not found");mi.loading=!0;try{const r=JSON.stringify({name:t,attributes:{},timestamp:Math.floor(Date.now()/1e3)});X.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){mi.loading=!1}});const o=await ce.signMessage(r),a=e.id;if(!a)throw new Error("Network not found");const c=kE.convertEVMChainIdToCoinType(Number(a));await me.registerEnsName({coinType:c,address:i,signature:o,message:r}),de.setProfileName(t,e.chainNamespace),X.replace("RegisterAccountNameSuccess")}catch(r){const o=this.parseEnsApiError(r,`Error registering name ${t}`);throw X.replace("RegisterAccountName"),new Error(o)}finally{mi.loading=!1}},validateName(t){return/^[a-zA-Z0-9-]{4,}$/u.test(t)},parseEnsApiError(t,e){var i,s;return((s=(i=t==null?void 0:t.reasons)==null?void 0:i[0])==null?void 0:s.description)||e}};Ve({isLegalCheckboxChecked:!1});const pt={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"ID_AUTH"},ll={ConnectorExplorerIds:{[oe.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[oe.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[oe.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[oe.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[oe.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[pt.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[pt.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[pt.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[pt.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[pt.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[pt.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[pt.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[pt.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[pt.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[pt.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[pt.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200"},ConnectorImageIds:{[oe.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[oe.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[oe.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[oe.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[oe.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[oe.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[oe.CONNECTOR_ID.INJECTED]:"Browser Wallet",[oe.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[oe.CONNECTOR_ID.COINBASE]:"Coinbase",[oe.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[oe.CONNECTOR_ID.LEDGER]:"Ledger",[oe.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[oe.CONNECTOR_ID.INJECTED]:"INJECTED",[oe.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[oe.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[oe.CONNECTOR_ID.AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Ch={getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([i,s])=>{e[`${pt.EIP155}:${i}`]=s}),e},isLowerCaseMatch(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}},dl={UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"INVALID_APP_CONFIGURATION"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},INVALID_APP_CONFIGURATION:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${OE()?window.origin:"unknown"} not found on Allowlist - update configuration on cloud.reown.com`},SOCIALS_TIMEOUT:{shortMessage:"Invalid App Configuration",longMessage:()=>"There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"},JWT_TOKEN_NOT_VALID:{shortMessage:"Session Expired",longMessage:"Invalid session found on UniversalProvider - please check your time settings and connect again"},INVALID_PROJECT_ID:{shortMessage:"Invalid App Configuration",longMessage:"Invalid Project ID - update configuration"},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration on cloud.reown.com"}}};function OE(){return typeof window<"u"}function TE(t){try{return JSON.stringify(t)}catch{return'"[Circular]"'}}var RE=$E;function $E(t,e,i){var s=i&&i.stringify||TE,r=1;if(typeof t=="object"&&t!==null){var o=e.length+r;if(o===1)return t;var a=new Array(o);a[0]=s(t);for(var c=1;c<o;c++)a[c]=s(e[c]);return a.join(" ")}if(typeof t!="string")return t;var d=e.length;if(d===0)return t;for(var u="",h=1-r,p=-1,g=t&&t.length||0,f=0;f<g;){if(t.charCodeAt(f)===37&&f+1<g){switch(p=p>-1?p:0,t.charCodeAt(f+1)){case 100:case 102:if(h>=d||e[h]==null)break;p<f&&(u+=t.slice(p,f)),u+=Number(e[h]),p=f+2,f++;break;case 105:if(h>=d||e[h]==null)break;p<f&&(u+=t.slice(p,f)),u+=Math.floor(Number(e[h])),p=f+2,f++;break;case 79:case 111:case 106:if(h>=d||e[h]===void 0)break;p<f&&(u+=t.slice(p,f));var v=typeof e[h];if(v==="string"){u+="'"+e[h]+"'",p=f+2,f++;break}if(v==="function"){u+=e[h].name||"<anonymous>",p=f+2,f++;break}u+=s(e[h]),p=f+2,f++;break;case 115:if(h>=d)break;p<f&&(u+=t.slice(p,f)),u+=String(e[h]),p=f+2,f++;break;case 37:p<f&&(u+=t.slice(p,f)),u+="%",p=f+2,f++,h--;break}++h}++f}return p===-1?t:(p<g&&(u+=t.slice(p)),u)}const kw=RE;var Rr=Vi;const Ca=qE().console||{},LE={mapHttpRequest:hl,mapHttpResponse:hl,wrapRequestSerializer:Ih,wrapResponseSerializer:Ih,wrapErrorSerializer:Ih,req:hl,res:hl,err:jE};function BE(t,e){return Array.isArray(t)?t.filter(function(i){return i!=="!stdSerializers.err"}):t===!0?Object.keys(e):!1}function Vi(t){t=t||{},t.browser=t.browser||{};const e=t.browser.transmit;if(e&&typeof e.send!="function")throw Error("pino: transmit option must have a send function");const i=t.browser.write||Ca;t.browser.write&&(t.browser.asObject=!0);const s=t.serializers||{},r=BE(t.browser.serialize,s);let o=t.browser.serialize;Array.isArray(t.browser.serialize)&&t.browser.serialize.indexOf("!stdSerializers.err")>-1&&(o=!1);const a=["error","fatal","warn","info","debug","trace"];typeof i=="function"&&(i.error=i.fatal=i.warn=i.info=i.debug=i.trace=i),t.enabled===!1&&(t.level="silent");const c=t.level||"info",d=Object.create(i);d.log||(d.log=Ea),Object.defineProperty(d,"levelVal",{get:h}),Object.defineProperty(d,"level",{get:p,set:g});const u={transmit:e,serialize:r,asObject:t.browser.asObject,levels:a,timestamp:zE(t)};d.levels=Vi.levels,d.level=c,d.setMaxListeners=d.getMaxListeners=d.emit=d.addListener=d.on=d.prependListener=d.once=d.prependOnceListener=d.removeListener=d.removeAllListeners=d.listeners=d.listenerCount=d.eventNames=d.write=d.flush=Ea,d.serializers=s,d._serialize=r,d._stdErrSerialize=o,d.child=f,e&&(d._logEvent=Eh());function h(){return this.level==="silent"?1/0:this.levels.values[this.level]}function p(){return this._level}function g(v){if(v!=="silent"&&!this.levels.values[v])throw Error("unknown level "+v);this._level=v,Qn(u,d,"error","log"),Qn(u,d,"fatal","error"),Qn(u,d,"warn","error"),Qn(u,d,"info","log"),Qn(u,d,"debug","log"),Qn(u,d,"trace","log")}function f(v,w){if(!v)throw new Error("missing bindings for child Pino");w=w||{},r&&v.serializers&&(w.serializers=v.serializers);const m=w.serializers;if(r&&m){var y=Object.assign({},s,m),b=t.browser.serialize===!0?Object.keys(y):r;delete v.serializers,ul([v],b,y,this._stdErrSerialize)}function _(x){this._childLevel=(x._childLevel|0)+1,this.error=eo(x,v,"error"),this.fatal=eo(x,v,"fatal"),this.warn=eo(x,v,"warn"),this.info=eo(x,v,"info"),this.debug=eo(x,v,"debug"),this.trace=eo(x,v,"trace"),y&&(this.serializers=y,this._serialize=b),e&&(this._logEvent=Eh([].concat(x._logEvent.bindings,v)))}return _.prototype=this,new _(this)}return d}Vi.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},Vi.stdSerializers=LE,Vi.stdTimeFunctions=Object.assign({},{nullTime:Ow,epochTime:Tw,unixTime:FE,isoTime:HE});function Qn(t,e,i,s){const r=Object.getPrototypeOf(e);e[i]=e.levelVal>e.levels.values[i]?Ea:r[i]?r[i]:Ca[i]||Ca[s]||Ea,UE(t,e,i)}function UE(t,e,i){!t.transmit&&e[i]===Ea||(e[i]=function(s){return function(){const r=t.timestamp(),o=new Array(arguments.length),a=Object.getPrototypeOf&&Object.getPrototypeOf(this)===Ca?Ca:this;for(var c=0;c<o.length;c++)o[c]=arguments[c];if(t.serialize&&!t.asObject&&ul(o,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?s.call(a,ME(this,i,o,r)):s.apply(a,o),t.transmit){const d=t.transmit.level||e.level,u=Vi.levels.values[d],h=Vi.levels.values[i];if(h<u)return;DE(this,{ts:r,methodLevel:i,methodValue:h,transmitLevel:d,transmitValue:Vi.levels.values[t.transmit.level||e.level],send:t.transmit.send,val:e.levelVal},o)}}}(e[i]))}function ME(t,e,i,s){t._serialize&&ul(i,t._serialize,t.serializers,t._stdErrSerialize);const r=i.slice();let o=r[0];const a={};s&&(a.time=s),a.level=Vi.levels.values[e];let c=(t._childLevel|0)+1;if(c<1&&(c=1),o!==null&&typeof o=="object"){for(;c--&&typeof r[0]=="object";)Object.assign(a,r.shift());o=r.length?kw(r.shift(),r):void 0}else typeof o=="string"&&(o=kw(r.shift(),r));return o!==void 0&&(a.msg=o),a}function ul(t,e,i,s){for(const r in t)if(s&&t[r]instanceof Error)t[r]=Vi.stdSerializers.err(t[r]);else if(typeof t[r]=="object"&&!Array.isArray(t[r]))for(const o in t[r])e&&e.indexOf(o)>-1&&o in i&&(t[r][o]=i[o](t[r][o]))}function eo(t,e,i){return function(){const s=new Array(1+arguments.length);s[0]=e;for(var r=1;r<s.length;r++)s[r]=arguments[r-1];return t[i].apply(this,s)}}function DE(t,e,i){const s=e.send,r=e.ts,o=e.methodLevel,a=e.methodValue,c=e.val,d=t._logEvent.bindings;ul(i,t._serialize||Object.keys(t.serializers),t.serializers,t._stdErrSerialize===void 0?!0:t._stdErrSerialize),t._logEvent.ts=r,t._logEvent.messages=i.filter(function(u){return d.indexOf(u)===-1}),t._logEvent.level.label=o,t._logEvent.level.value=a,s(o,t._logEvent,c),t._logEvent=Eh(d)}function Eh(t){return{ts:0,messages:[],bindings:t||[],level:{label:"",value:0}}}function jE(t){const e={type:t.constructor.name,msg:t.message,stack:t.stack};for(const i in t)e[i]===void 0&&(e[i]=t[i]);return e}function zE(t){return typeof t.timestamp=="function"?t.timestamp:t.timestamp===!1?Ow:Tw}function hl(){return{}}function Ih(t){return t}function Ea(){}function Ow(){return!1}function Tw(){return Date.now()}function FE(){return Math.round(Date.now()/1e3)}function HE(){return new Date(Date.now()).toISOString()}function qE(){function t(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return t(self)||t(window)||t(this)||{}}}const WE=t=>JSON.stringify(t,(e,i)=>typeof i=="bigint"?i.toString()+"n":i);function Rw(t){return typeof t=="string"?t:WE(t)||""}const VE={level:"info"},Ah=1e3*1024;class KE{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class $w{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const i=new KE(e);if(i.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${i.size}`);for(;this.size+i.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=i),this.tail=i):(this.head=i,this.tail=i),this.lengthInNodes++,this.sizeInBytes+=i.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let i=this.head;for(;i!==null;)e.push(i.value),i=i.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const i=e.value;return e=e.next,{done:!1,value:i}}}}}class Lw{constructor(e,i=Ah){this.level=e??"error",this.levelValue=Rr.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=i,this.logs=new $w(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,i){i===Rr.levels.values.error?console.error(e):i===Rr.levels.values.warn?console.warn(e):i===Rr.levels.values.debug?console.debug(e):i===Rr.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(Rw({timestamp:new Date().toISOString(),log:e}));const i=typeof e=="string"?JSON.parse(e).level:e.level;i>=this.levelValue&&this.forwardToConsole(e,i)}getLogs(){return this.logs}clearLogs(){this.logs=new $w(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const i=this.getLogArray();return i.push(Rw({extraMetadata:e})),new Blob(i,{type:"application/json"})}}class GE{constructor(e,i=Ah){this.baseChunkLogger=new Lw(e,i)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const i=URL.createObjectURL(this.logsToBlob(e)),s=document.createElement("a");s.href=i,s.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}}class ZE{constructor(e,i=Ah){this.baseChunkLogger=new Lw(e,i)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var YE=Object.defineProperty,JE=Object.defineProperties,XE=Object.getOwnPropertyDescriptors,Bw=Object.getOwnPropertySymbols,QE=Object.prototype.hasOwnProperty,eI=Object.prototype.propertyIsEnumerable,Uw=(t,e,i)=>e in t?YE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,pl=(t,e)=>{for(var i in e||(e={}))QE.call(e,i)&&Uw(t,i,e[i]);if(Bw)for(var i of Bw(e))eI.call(e,i)&&Uw(t,i,e[i]);return t},gl=(t,e)=>JE(t,XE(e));function tI(t){return gl(pl({},t),{level:(t==null?void 0:t.level)||VE.level})}function iI(t){var e,i;const s=new GE((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:Rr(gl(pl({},t.opts),{level:"trace",browser:gl(pl({},(i=t.opts)==null?void 0:i.browser),{write:r=>s.write(r)})})),chunkLoggerController:s}}function sI(t){var e;const i=new ZE((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:Rr(gl(pl({},t.opts),{level:"trace"})),chunkLoggerController:i}}function rI(t){return typeof t.loggerOverride<"u"&&typeof t.loggerOverride!="string"?{logger:t.loggerOverride,chunkLoggerController:null}:typeof window<"u"?iI(t):sI(t)}const nI={createLogger(t,e="error"){const i=tI({level:e}),{logger:s}=rI({opts:i});return s.error=(...r)=>{for(const o of r)if(o instanceof Error){t(o,...r);return}t(void 0,...r)},s}},oI="rpc.walletconnect.org";function Mw(t,e){const i=new URL("https://rpc.walletconnect.org/v1/");return i.searchParams.set("chainId",t),i.searchParams.set("projectId",e),i.toString()}const Sh=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],to={extendRpcUrlWithProjectId(t,e){let i=!1;try{i=new URL(t).host===oI}catch{i=!1}if(i){const s=new URL(t);return s.searchParams.has("projectId")||s.searchParams.set("projectId",e),s.toString()}return t},isCaipNetwork(t){return"chainNamespace"in t&&"caipNetworkId"in t},getChainNamespace(t){return this.isCaipNetwork(t)?t.chainNamespace:oe.CHAIN.EVM},getCaipNetworkId(t){return this.isCaipNetwork(t)?t.caipNetworkId:`${oe.CHAIN.EVM}:${t.id}`},getDefaultRpcUrl(t,e,i){var r,o,a;const s=(a=(o=(r=t.rpcUrls)==null?void 0:r.default)==null?void 0:o.http)==null?void 0:a[0];return Sh.includes(e)?Mw(e,i):s||""},extendCaipNetwork(t,{customNetworkImageUrls:e,projectId:i,customRpcUrls:s}){var g,f,v,w,m;const r=this.getChainNamespace(t),o=this.getCaipNetworkId(t),a=(g=t.rpcUrls.default.http)==null?void 0:g[0],c=this.getDefaultRpcUrl(t,o,i),d=((w=(v=(f=t==null?void 0:t.rpcUrls)==null?void 0:f.chainDefault)==null?void 0:v.http)==null?void 0:w[0])||a,u=((m=s==null?void 0:s[o])==null?void 0:m.map(y=>y.url))||[],h=[...u,c],p=[...u];return d&&!p.includes(d)&&p.push(d),{...t,chainNamespace:r,caipNetworkId:o,assets:{imageId:ll.NetworkImageIds[t.id],imageUrl:e==null?void 0:e[t.id]},rpcUrls:{...t.rpcUrls,default:{http:h},chainDefault:{http:p}}}},extendCaipNetworks(t,{customNetworkImageUrls:e,projectId:i,customRpcUrls:s}){return t.map(r=>to.extendCaipNetwork(r,{customNetworkImageUrls:e,customRpcUrls:s,projectId:i}))},getViemTransport(t,e,i){var r,o,a;const s=[];return i==null||i.forEach(c=>{s.push(il(c.url,c.config))}),Sh.includes(t.caipNetworkId)&&s.push(il(Mw(t.caipNetworkId,e),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(a=(o=(r=t==null?void 0:t.rpcUrls)==null?void 0:r.default)==null?void 0:o.http)==null||a.forEach(c=>{s.push(il(c))}),Vf(s)},extendWagmiTransports(t,e,i){if(Sh.includes(t.caipNetworkId)){const s=this.getDefaultRpcUrl(t,t.caipNetworkId,e);return Vf([i,il(s)])}return i},getUnsupportedNetwork(t){return{id:t.split(":")[1],caipNetworkId:t,name:oe.UNSUPPORTED_NETWORK_NAME,chainNamespace:t.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(t){var c;const e=ae.getActiveCaipNetworkId(),i=C.getAllRequestedCaipNetworks(),s=Array.from(((c=C.state.chains)==null?void 0:c.keys())||[]),r=e==null?void 0:e.split(":")[0],o=r?s.includes(r):!1,a=i==null?void 0:i.find(d=>d.caipNetworkId===e);return o&&!a&&e?this.getUnsupportedNetwork(e):a||t||(i==null?void 0:i[0])}},fl={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Gt=Ve({providers:{...fl},providerIds:{...fl}}),tt={state:Gt,subscribeKey(t,e){return Lt(Gt,t,e)},subscribe(t){return Ot(Gt,()=>{t(Gt)})},subscribeProviders(t){return Ot(Gt.providers,()=>t(Gt.providers))},setProvider(t,e){e&&(Gt.providers[t]=xr(e))},getProvider(t){return Gt.providers[t]},setProviderId(t,e){e&&(Gt.providerIds[t]=e)},getProviderId(t){if(t)return Gt.providerIds[t]},reset(){Gt.providers={...fl},Gt.providerIds={...fl}},resetChain(t){Gt.providers[t]=void 0,Gt.providerIds[t]=void 0}};var Dw;(function(t){t.Google="google",t.Github="github",t.Apple="apple",t.Facebook="facebook",t.X="x",t.Discord="discord",t.Farcaster="farcaster"})(Dw||(Dw={}));const Ws={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof Mo<"u"?{NODE_ENV:"production",PUBLIC_PATH:"/"}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}},$r={filterOutDuplicatesByRDNS(t){const e=F.state.enableEIP6963?ie.state.connectors:[],i=ae.getRecentWallets(),s=e.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}).filter(Boolean),r=i.map(a=>a.rdns).filter(Boolean),o=s.concat(r);if(o.includes("io.metamask.mobile")&&V.isMobile()){const a=o.indexOf("io.metamask.mobile");o[a]="io.metamask"}return t.filter(a=>!o.includes(String(a==null?void 0:a.rdns)))},filterOutDuplicatesByIds(t){const e=ie.state.connectors.filter(a=>a.type==="ANNOUNCED"||a.type==="INJECTED"),i=ae.getRecentWallets(),s=e.map(a=>a.explorerId),r=i.map(a=>a.id),o=s.concat(r);return t.filter(a=>!o.includes(a==null?void 0:a.id))},filterOutDuplicateWallets(t){const e=this.filterOutDuplicatesByRDNS(t);return this.filterOutDuplicatesByIds(e)},markWalletsAsInstalled(t){const{connectors:e}=ie.state,i=e.filter(s=>s.type==="ANNOUNCED").reduce((s,r)=>{var o;return(o=r.info)!=null&&o.rdns&&(s[r.info.rdns]=!0),s},{});return t.map(s=>({...s,installed:!!s.rdns&&!!i[s.rdns??""]})).sort((s,r)=>Number(r.installed)-Number(s.installed))},getConnectOrderMethod(t,e){var d;const i=(t==null?void 0:t.connectMethodsOrder)||((d=F.state.features)==null?void 0:d.connectMethodsOrder),s=e||ie.state.connectors;if(i)return i;const{injected:r,announced:o}=ys.getConnectorsByType(s,ee.state.recommended,ee.state.featured),a=r.filter(ys.showConnector),c=o.filter(ys.showConnector);return a.length||c.length?["wallet","email","social"]:Ws.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(t){const e=!!t.rdns&&ee.state.excludedWallets.some(s=>s.rdns===t.rdns),i=!!t.name&&ee.state.excludedWallets.some(s=>Ch.isLowerCaseMatch(s.name,t.name));return e||i}},ys={getConnectorsByType(t,e,i){const{customWallets:s}=F.state,r=ae.getRecentWallets(),o=$r.filterOutDuplicateWallets(e),a=$r.filterOutDuplicateWallets(i),c=t.filter(p=>p.type==="MULTI_CHAIN"),d=t.filter(p=>p.type==="ANNOUNCED"),u=t.filter(p=>p.type==="INJECTED"),h=t.filter(p=>p.type==="EXTERNAL");return{custom:s,recent:r,external:h,multiChain:c,announced:d,injected:u,recommended:o,featured:a}},showConnector(t){var r;const e=(r=t.info)==null?void 0:r.rdns,i=!!e&&ee.state.excludedWallets.some(o=>!!o.rdns&&o.rdns===e),s=!!t.name&&ee.state.excludedWallets.some(o=>Ch.isLowerCaseMatch(o.name,t.name));return!(t.type==="INJECTED"&&(!V.isMobile()&&t.name==="Browser Wallet"||!e&&!ce.checkInstalled()||i||s)||(t.type==="ANNOUNCED"||t.type==="EXTERNAL")&&(i||s))},getIsConnectedWithWC(){return Array.from(C.state.chains.values()).some(t=>ie.getConnectorId(t.namespace)===oe.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:t,featured:e,custom:i,recent:s,announced:r,injected:o,multiChain:a,external:c,overriddenConnectors:d=(u=>(u=F.state.features)==null?void 0:u.connectorTypeOrder)()??[]}){const h=ys.getIsConnectedWithWC(),p=[{type:"walletConnect",isEnabled:F.state.enableWalletConnect&&!h},{type:"recent",isEnabled:s.length>0},{type:"injected",isEnabled:[...o,...r,...a].length>0},{type:"featured",isEnabled:e.length>0},{type:"custom",isEnabled:i&&i.length>0},{type:"external",isEnabled:c.length>0},{type:"recommended",isEnabled:t.length>0}].filter(w=>w.isEnabled),g=new Set(p.map(w=>w.type)),f=d.filter(w=>g.has(w)).map(w=>({type:w,isEnabled:!0})),v=p.filter(({type:w})=>!f.some(({type:m})=>m===w));return Array.from(new Set([...f,...v].map(({type:w})=>w)))}};const wl=globalThis,Nh=wl.ShadowRoot&&(wl.ShadyCSS===void 0||wl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ph=Symbol(),jw=new WeakMap;class zw{constructor(e,i,s){if(this._$cssResult$=!0,s!==Ph)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Nh&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=jw.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&jw.set(i,e))}return e}toString(){return this.cssText}}const vi=t=>new zw(typeof t=="string"?t:t+"",void 0,Ph),pe=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,r,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new zw(i,t,Ph)},aI=(t,e)=>{if(Nh)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),r=wl.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}},Fw=Nh?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return vi(i)})(t):t;const{is:cI,defineProperty:lI,getOwnPropertyDescriptor:dI,getOwnPropertyNames:uI,getOwnPropertySymbols:hI,getPrototypeOf:pI}=Object,Vs=globalThis,Hw=Vs.trustedTypes,gI=Hw?Hw.emptyScript:"",kh=Vs.reactiveElementPolyfillSupport,Ia=(t,e)=>t,ml={toAttribute(t,e){switch(e){case Boolean:t=t?gI:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Oh=(t,e)=>!cI(t,e),qw={attribute:!0,type:String,converter:ml,reflect:!1,useDefault:!1,hasChanged:Oh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Vs.litPropertyMetadata??(Vs.litPropertyMetadata=new WeakMap);class io extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=qw){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,i);r!==void 0&&lI(this.prototype,e,r)}}static getPropertyDescriptor(e,i,s){const{get:r,set:o}=dI(this.prototype,e)??{get(){return this[i]},set(a){this[i]=a}};return{get:r,set(a){const c=r==null?void 0:r.call(this);o==null||o.call(this,a),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qw}static _$Ei(){if(this.hasOwnProperty(Ia("elementProperties")))return;const e=pI(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ia("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ia("properties"))){const i=this.properties,s=[...uI(i),...hI(i)];for(const r of s)this.createProperty(r,i[r])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,r]of i)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const r=this._$Eu(i,s);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)i.unshift(Fw(r))}else e!==void 0&&i.push(Fw(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return aI(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostDisconnected)==null?void 0:s.call(i)})}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){var o;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const a=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:ml).toAttribute(i,s.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,i){var o,a;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const c=s.getPropertyOptions(r),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:ml;this._$Em=r,this[r]=d.fromAttribute(i,c.type)??((a=this._$Ej)==null?void 0:a.get(r))??null,this._$Em=null}}requestUpdate(e,i,s){var r;if(e!==void 0){const o=this.constructor,a=this[e];if(s??(s=o.getPropertyOptions(e)),!((s.hasChanged??Oh)(a,i)||s.useDefault&&s.reflect&&a===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:r,wrapped:o},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??i??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:c}=a,d=this[o];c!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,a,d)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(i)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}}io.elementStyles=[],io.shadowRootOptions={mode:"open"},io[Ia("elementProperties")]=new Map,io[Ia("finalized")]=new Map,kh==null||kh({ReactiveElement:io}),(Vs.reactiveElementVersions??(Vs.reactiveElementVersions=[])).push("2.1.0");const Aa=globalThis,vl=Aa.trustedTypes,Ww=vl?vl.createPolicy("lit-html",{createHTML:t=>t}):void 0,Vw="$lit$",Ks=`lit$${Math.random().toFixed(9).slice(2)}$`,Kw="?"+Ks,fI=`<${Kw}>`,Lr=document,Sa=()=>Lr.createComment(""),Na=t=>t===null||typeof t!="object"&&typeof t!="function",Th=Array.isArray,wI=t=>Th(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Rh=`[ 	
\f\r]`,Pa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gw=/-->/g,Zw=/>/g,Br=RegExp(`>|${Rh}(?:([^\\s"'>=/]+)(${Rh}*=${Rh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yw=/'/g,Jw=/"/g,Xw=/^(?:script|style|textarea|title)$/i,Qw=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),S=Qw(1),G=Qw(2),bs=Symbol.for("lit-noChange"),nt=Symbol.for("lit-nothing"),em=new WeakMap,Ur=Lr.createTreeWalker(Lr,129);function tm(t,e){if(!Th(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ww!==void 0?Ww.createHTML(e):e}const mI=(t,e)=>{const i=t.length-1,s=[];let r,o=e===2?"<svg>":e===3?"<math>":"",a=Pa;for(let c=0;c<i;c++){const d=t[c];let u,h,p=-1,g=0;for(;g<d.length&&(a.lastIndex=g,h=a.exec(d),h!==null);)g=a.lastIndex,a===Pa?h[1]==="!--"?a=Gw:h[1]!==void 0?a=Zw:h[2]!==void 0?(Xw.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=Br):h[3]!==void 0&&(a=Br):a===Br?h[0]===">"?(a=r??Pa,p=-1):h[1]===void 0?p=-2:(p=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?Br:h[3]==='"'?Jw:Yw):a===Jw||a===Yw?a=Br:a===Gw||a===Zw?a=Pa:(a=Br,r=void 0);const f=a===Br&&t[c+1].startsWith("/>")?" ":"";o+=a===Pa?d+fI:p>=0?(s.push(u),d.slice(0,p)+Vw+d.slice(p)+Ks+f):d+Ks+(p===-2?c:f)}return[tm(t,o+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class ka{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let o=0,a=0;const c=e.length-1,d=this.parts,[u,h]=mI(e,i);if(this.el=ka.createElement(u,s),Ur.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Ur.nextNode())!==null&&d.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Vw)){const g=h[a++],f=r.getAttribute(p).split(Ks),v=/([.?@])?(.*)/.exec(g);d.push({type:1,index:o,name:v[2],strings:f,ctor:v[1]==="."?yI:v[1]==="?"?bI:v[1]==="@"?_I:yl}),r.removeAttribute(p)}else p.startsWith(Ks)&&(d.push({type:6,index:o}),r.removeAttribute(p));if(Xw.test(r.tagName)){const p=r.textContent.split(Ks),g=p.length-1;if(g>0){r.textContent=vl?vl.emptyScript:"";for(let f=0;f<g;f++)r.append(p[f],Sa()),Ur.nextNode(),d.push({type:2,index:++o});r.append(p[g],Sa())}}}else if(r.nodeType===8)if(r.data===Kw)d.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(Ks,p+1))!==-1;)d.push({type:7,index:o}),p+=Ks.length-1}o++}}static createElement(e,i){const s=Lr.createElement("template");return s.innerHTML=e,s}}function so(t,e,i=t,s){var a,c;if(e===bs)return e;let r=s!==void 0?(a=i._$Co)==null?void 0:a[s]:i._$Cl;const o=Na(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=r:i._$Cl=r),r!==void 0&&(e=so(t,r._$AS(t,e.values),r,s)),e}class vI{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??Lr).importNode(i,!0);Ur.currentNode=r;let o=Ur.nextNode(),a=0,c=0,d=s[0];for(;d!==void 0;){if(a===d.index){let u;d.type===2?u=new Oa(o,o.nextSibling,this,e):d.type===1?u=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(u=new xI(o,this,e)),this._$AV.push(u),d=s[++c]}a!==(d==null?void 0:d.index)&&(o=Ur.nextNode(),a++)}return Ur.currentNode=Lr,r}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class Oa{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,s,r){this.type=2,this._$AH=nt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=so(this,e,i),Na(e)?e===nt||e==null||e===""?(this._$AH!==nt&&this._$AR(),this._$AH=nt):e!==this._$AH&&e!==bs&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wI(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==nt&&Na(this._$AH)?this._$AA.nextSibling.data=e:this.T(Lr.createTextNode(e)),this._$AH=e}$(e){var o;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ka.createElement(tm(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(i);else{const a=new vI(r,this),c=a.u(this.options);a.p(i),this.T(c),this._$AH=a}}_$AC(e){let i=em.get(e.strings);return i===void 0&&em.set(e.strings,i=new ka(e)),i}k(e){Th(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const o of e)r===i.length?i.push(s=new Oa(this.O(Sa()),this.O(Sa()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class yl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,r,o){this.type=1,this._$AH=nt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=nt}_$AI(e,i=this,s,r){const o=this.strings;let a=!1;if(o===void 0)e=so(this,e,i,0),a=!Na(e)||e!==this._$AH&&e!==bs,a&&(this._$AH=e);else{const c=e;let d,u;for(e=o[0],d=0;d<o.length-1;d++)u=so(this,c[s+d],i,d),u===bs&&(u=this._$AH[d]),a||(a=!Na(u)||u!==this._$AH[d]),u===nt?e=nt:e!==nt&&(e+=(u??"")+o[d+1]),this._$AH[d]=u}a&&!r&&this.j(e)}j(e){e===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class yI extends yl{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===nt?void 0:e}}class bI extends yl{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==nt)}}class _I extends yl{constructor(e,i,s,r,o){super(e,i,s,r,o),this.type=5}_$AI(e,i=this){if((e=so(this,e,i,0)??nt)===bs)return;const s=this._$AH,r=e===nt&&s!==nt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==nt&&(s===nt||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class xI{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){so(this,e)}}const $h=Aa.litHtmlPolyfillSupport;$h==null||$h(ka,Oa),(Aa.litHtmlVersions??(Aa.litHtmlVersions=[])).push("3.3.0");const CI=(t,e,i)=>{const s=(i==null?void 0:i.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const o=(i==null?void 0:i.renderBefore)??null;s._$litPart$=r=new Oa(e.insertBefore(Sa(),o),o,void 0,i??{})}return r._$AI(t),r};const Mr=globalThis;class ne extends io{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=CI(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return bs}}ne._$litElement$=!0,ne.finalized=!0,(hv=Mr.litElementHydrateSupport)==null||hv.call(Mr,{LitElement:ne});const Lh=Mr.litElementPolyfillSupport;Lh==null||Lh({LitElement:ne}),(Mr.litElementVersions??(Mr.litElementVersions=[])).push("4.2.0");let Ta,Gs,Zs;function EI(t,e){Ta=document.createElement("style"),Gs=document.createElement("style"),Zs=document.createElement("style"),Ta.textContent=ro(t).core.cssText,Gs.textContent=ro(t).dark.cssText,Zs.textContent=ro(t).light.cssText,document.head.appendChild(Ta),document.head.appendChild(Gs),document.head.appendChild(Zs),im(e)}function im(t){Gs&&Zs&&(t==="light"?(Gs.removeAttribute("media"),Zs.media="enabled"):(Zs.removeAttribute("media"),Gs.media="enabled"))}function II(t){Ta&&Gs&&Zs&&(Ta.textContent=ro(t).core.cssText,Gs.textContent=ro(t).dark.cssText,Zs.textContent=ro(t).light.cssText)}function ro(t){return{core:pe`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${vi(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${vi((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${vi((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${vi((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${vi((t==null?void 0:t["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:pe`
      :root {
        --w3m-color-mix: ${vi((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${vi(Ls(t,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${vi(Ls(t,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:pe`
      :root {
        --w3m-color-mix: ${vi((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${vi(Ls(t,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${vi(Ls(t,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const Be=pe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,St=pe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ra=pe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,_t={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:s}){return t.length<=e+i?t:s==="end"?`${t.substring(0,e)}...`:s==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),i=this.hexToRgb(e),s=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),r=100-3*Number(s==null?void 0:s.replace("px","")),o=`${r}% ${r}% at 65% 40%`,a=[];for(let c=0;c<5;c+=1){const d=this.tintColor(i,.15*c);a.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${a[0]};
    --local-color-2: ${a[1]};
    --local-color-3: ${a[2]};
    --local-color-4: ${a[3]};
    --local-color-5: ${a[4]};
    --local-radial-circle: ${o}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,s=e>>8&255,r=e&255;return[i,s,r]},tintColor(t,e){const[i,s,r]=t,o=Math.round(i+(255-i)*e),a=Math.round(s+(255-s)*e),c=Math.round(r+(255-r)*e);return[o,a,c]},isNumber(t){return/^[0-9]+$/u.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function AI(t,e){const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(r){customElements.get(t)||customElements.define(t,r)}}}function SI(t,e){return customElements.get(t)||customElements.define(t,e),e}function se(t){return function(e){return typeof e=="function"?SI(t,e):AI(t,e)}}function NI(t){if(t.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);for(let u=0;u<e.length;u++)e[u]=255;for(let u=0;u<t.length;u++){const h=t.charAt(u),p=h.charCodeAt(0);if(e[p]!==255)throw new TypeError(h+" is ambiguous");e[p]=u}const i=t.length,s=t.charAt(0),r=Math.log(i)/Math.log(256),o=Math.log(256)/Math.log(i);function a(u){if(u instanceof Uint8Array||(ArrayBuffer.isView(u)?u=new Uint8Array(u.buffer,u.byteOffset,u.byteLength):Array.isArray(u)&&(u=Uint8Array.from(u))),!(u instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(u.length===0)return"";let h=0,p=0,g=0;const f=u.length;for(;g!==f&&u[g]===0;)g++,h++;const v=(f-g)*o+1>>>0,w=new Uint8Array(v);for(;g!==f;){let b=u[g],_=0;for(let x=v-1;(b!==0||_<p)&&x!==-1;x--,_++)b+=256*w[x]>>>0,w[x]=b%i>>>0,b=b/i>>>0;if(b!==0)throw new Error("Non-zero carry");p=_,g++}let m=v-p;for(;m!==v&&w[m]===0;)m++;let y=s.repeat(h);for(;m<v;++m)y+=t.charAt(w[m]);return y}function c(u){if(typeof u!="string")throw new TypeError("Expected String");if(u.length===0)return new Uint8Array;let h=0,p=0,g=0;for(;u[h]===s;)p++,h++;const f=(u.length-h)*r+1>>>0,v=new Uint8Array(f);for(;h<u.length;){const b=u.charCodeAt(h);if(b>255)return;let _=e[b];if(_===255)return;let x=0;for(let k=f-1;(_!==0||x<g)&&k!==-1;k--,x++)_+=i*v[k]>>>0,v[k]=_%256>>>0,_=_/256>>>0;if(_!==0)throw new Error("Non-zero carry");g=x,h++}let w=f-g;for(;w!==f&&v[w]===0;)w++;const m=new Uint8Array(p+(f-w));let y=p;for(;w!==f;)m[y++]=v[w++];return m}function d(u){const h=c(u);if(h)return h;throw new Error("Non-base"+i+" character")}return{encode:a,decodeUnsafe:c,decode:d}}var PI="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",kI=NI(PI);const bl={ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3,ERROR_INVALID_CHAIN_ID:32603},sm={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},OI={block:$f({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(i=>{if(typeof i=="string")return i;const s=Xc(i);return s.typeHex==="0x7e"&&(s.isSystemTx=i.isSystemTx,s.mint=i.mint?us(i.mint):void 0,s.sourceHash=i.sourceHash,s.type="deposit"),s}),stateRoot:t.stateRoot}}}),transaction:Rf({format(t){const e={};return t.type==="0x7e"&&(e.isSystemTx=t.isSystemTx,e.mint=t.mint?us(t.mint):void 0,e.sourceHash=t.sourceHash,e.type="deposit"),e}}),transactionReceipt:dC({format(t){return{l1GasPrice:t.l1GasPrice?us(t.l1GasPrice):null,l1GasUsed:t.l1GasUsed?us(t.l1GasUsed):null,l1Fee:t.l1Fee?us(t.l1Fee):null,l1FeeScalar:t.l1FeeScalar?Number(t.l1FeeScalar):null}}})};function rm(t,e){return $I(t)?RI(t):tC(t,e)}const TI={transaction:rm};function RI(t){LI(t);const{sourceHash:e,data:i,from:s,gas:r,isSystemTx:o,mint:a,to:c,value:d}=t,u=[e,s,c??"0x",a?we(a):"0x",d?we(d):"0x",r?we(r):"0x",o?"0x1":"0x",i??"0x"];return Fn(["0x7e",Nr(u)])}function $I(t){return t.type==="deposit"||typeof t.sourceHash<"u"}function LI(t){const{from:e,to:i}=t;if(e&&!gs(e))throw new Fs({address:e});if(i&&!gs(i))throw new Fs({address:i})}const H={contracts:sm,formatters:OI,serializers:TI},Bh=1;({...H,contracts:{...H.contracts,l2OutputOracle:Bh+"",portal:Bh+"",l1StandardBridge:Bh+""}});const Uh=11155111;({...H,contracts:{...H.contracts,l2OutputOracle:Uh+"",portal:Uh+"",l1StandardBridge:Uh+""}});const _l=1;({...H,contracts:{...H.contracts,disputeGameFactory:_l+"",l2OutputOracle:_l+"",portal:_l+"",l1StandardBridge:_l+""}});const Mh=5;({...H,contracts:{...H.contracts,l2OutputOracle:Mh+"",portal:Mh+"",l1StandardBridge:Mh+""}});const xl=11155111;({...H,contracts:{...H.contracts,disputeGameFactory:xl+"",l2OutputOracle:xl+"",portal:xl+"",l1StandardBridge:xl+""}},Oi({id:53456,name:"BirdLayer",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.birdlayer.xyz","https://rpc1.birdlayer.xyz"],webSocket:["wss://rpc.birdlayer.xyz/ws"]}},blockExplorers:{default:{name:"BirdLayer Explorer",url:"https://scan.birdlayer.xyz"}}}));const oT=1;({...H,contracts:{...H.contracts}});const Dh=1;Oi({...H,id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Explorer",url:"https://explorer.gobob.xyz"}},contracts:{...H.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:23131},l2OutputOracle:{[Dh]:{address:"0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",blockCreated:4462615}},portal:{[Dh]:{address:"0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",blockCreated:4462615}}},sourceId:Dh});const jh=11155111;Oi({...H,id:808813,name:"BOB Sepolia",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://bob-sepolia.rpc.gobob.xyz"],webSocket:["wss://bob-sepolia.rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Sepolia Explorer",url:"https://bob-sepolia.explorer.gobob.xyz"}},contracts:{...H.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:35677},l2OutputOracle:{[jh]:{address:"0x14D0069452b4AE2b250B395b8adAb771E4267d2f",blockCreated:4462615}},portal:{[jh]:{address:"0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",blockCreated:4462615}}},testnet:!0,sourceId:jh});const BI={estimateFeesPerGas:async t=>{var s;if(!((s=t.request)!=null&&s.feeCurrency))return null;const[e,i]=await Promise.all([UI(t.client,t.request.feeCurrency),MI(t.client,t.request.feeCurrency)]);return{maxFeePerGas:t.multiply(e-i)+i,maxPriorityFeePerGas:i}}};async function UI(t,e){const i=await t.request({method:"eth_gasPrice",params:[e]});return BigInt(i)}async function MI(t,e){const i=await t.request({method:"eth_maxPriorityFeePerGas",params:[e]});return BigInt(i)}function nm(t){return t===0||t===0n||t===void 0||t===null||t==="0"||t===""||typeof t=="string"&&(Mn(t).toLowerCase()==="0x"||Mn(t).toLowerCase()==="0x00")}function $a(t){return!nm(t)}function DI(t){return typeof t.maxFeePerGas<"u"&&typeof t.maxPriorityFeePerGas<"u"}function om(t){return t.type==="cip64"?!0:DI(t)&&$a(t.feeCurrency)}const jI={block:$f({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(i=>typeof i=="string"?i:{...Xc(i),...i.gatewayFee?{gatewayFee:us(i.gatewayFee),gatewayFeeRecipient:i.gatewayFeeRecipient}:{},feeCurrency:i.feeCurrency}),...t.randomness?{randomness:t.randomness}:{}}}}),transaction:Rf({format(t){if(t.type==="0x7e")return{isSystemTx:t.isSystemTx,mint:t.mint?us(t.mint):void 0,sourceHash:t.sourceHash,type:"deposit"};const e={feeCurrency:t.feeCurrency};return t.type==="0x7b"?e.type="cip64":(t.type==="0x7c"&&(e.type="cip42"),e.gatewayFee=t.gatewayFee?us(t.gatewayFee):null,e.gatewayFeeRecipient=t.gatewayFeeRecipient),e}}),transactionRequest:v7({format(t){const e={};return t.feeCurrency&&(e.feeCurrency=t.feeCurrency),om(t)&&(e.type="0x7b"),e}})};function zI(t,e){return om(t)?HI(t,e):rm(t,e)}const FI={transaction:zI};function HI(t,e){WI(t);const{chainId:i,gas:s,nonce:r,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:d,accessList:u,feeCurrency:h,data:p}=t,g=[we(i),r?we(r):"0x",d?we(d):"0x",c?we(c):"0x",s?we(s):"0x",o??"0x",a?we(a):"0x",p??"0x",ya(u),h,...Vn(t,e)];return Fn(["0x7b",Nr(g)])}const qI=Jc;function WI(t){const{chainId:e,maxPriorityFeePerGas:i,gasPrice:s,maxFeePerGas:r,to:o,feeCurrency:a}=t;if(e<=0)throw new va({chainId:e});if(o&&!gs(o))throw new Fs({address:o});if(s)throw new Ae("`gasPrice` is not a valid CIP-64 Transaction attribute.");if($a(r)&&r>qI)throw new ma({maxFeePerGas:r});if($a(i)&&$a(r)&&i>r)throw new Yu({maxFeePerGas:r,maxPriorityFeePerGas:i});if($a(a)&&!gs(a))throw new Ae("`feeCurrency` MUST be a token address for CIP-64 transactions.");if(nm(a))throw new Ae("`feeCurrency` must be provided for CIP-64 transactions.")}const am={contracts:sm,formatters:jI,serializers:FI,fees:BI},Cl=17e3;({...am,contracts:{...am.contracts,portal:Cl+"",disputeGameFactory:Cl+"",l2OutputOracle:Cl+"",l1StandardBridge:Cl+""}},Oi({id:44,name:"Crab Network",nativeCurrency:{decimals:18,name:"Crab Network Native Token",symbol:"CRAB"},rpcUrls:{default:{http:["https://crab-rpc.darwinia.network"],webSocket:["wss://crab-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://crab-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:3032593}}})),Oi({id:66665,name:"Creator",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.creatorchain.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.creatorchain.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}},testnet:!0}),{...H,contracts:{...H.contracts}},{...H,contracts:{...H.contracts}},Oi({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0});const La=1;({...H.contracts,addressManager:La+"",l1CrossDomainMessenger:La+"",l2OutputOracle:La+"",portal:La+"",l1StandardBridge:La+""});const Ba=11155111;({...H.contracts,addressManager:Ba+"",l1CrossDomainMessenger:Ba+"",l2OutputOracle:Ba+"",portal:Ba+"",l1StandardBridge:Ba+""});const zh=1;({...H,contracts:{...H.contracts,l2OutputOracle:zh+"",portal:zh+"",l1StandardBridge:zh+""}});const Fh=17e3;({...H,contracts:{...H.contracts,l2OutputOracle:Fh+"",portal:Fh+"",l1StandardBridge:Fh+""}});const aT=1;({...H,contracts:{...H.contracts}},Oi({...H,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...H.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:11155111}));const El=17e3;Oi({...H,name:"Garnet Testnet",testnet:!0,id:17069,sourceId:El,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"],webSocket:["wss://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}},contracts:{...H.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[El]:{address:"0x57ee40586fbE286AfC75E67cb69511A6D9aF5909",blockCreated:1274684}},l2OutputOracle:{[El]:{address:"0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B",blockCreated:1274684}},l1StandardBridge:{[El]:{address:"0x09bcDd311FE398F80a78BE37E489f5D440DB95DE",blockCreated:1274684}}}});const Hh=1;({...H,contracts:{...H.contracts,disputeGameFactory:Hh+"",portal:Hh+"",l1StandardBridge:Hh+""}});const qh=11155111;({...H,contracts:{...H.contracts,disputeGameFactory:qh+"",portal:qh+"",l1StandardBridge:qh+""}},Oi({id:701,name:"Koi Network",nativeCurrency:{decimals:18,name:"Koi Network Native Token",symbol:"KRING"},rpcUrls:{default:{http:["https://koi-rpc.darwinia.network"],webSocket:["wss://koi-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://koi-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:180001}},testnet:!0}));const Wh=1;({...H,contracts:{...H.contracts,l2OutputOracle:Wh+"",portal:Wh+"",l1StandardBridge:Wh+""}});const Vh=11155111;({...H,contracts:{...H.contracts,l2OutputOracle:Vh+"",portal:Vh+"",l1StandardBridge:Vh+""}});const Kh=1;({...H,contracts:{...H.contracts,l2OutputOracle:Kh+"",portal:Kh+"",l1StandardBridge:Kh+""}});const Gh=1;({...H,contracts:{...H.contracts,l2OutputOracle:Gh+"",portal:Gh+"",l1StandardBridge:Gh+""}});const Zh=11155111;({...H,contracts:{...H.contracts,l2OutputOracle:Zh+"",portal:Zh+"",l1StandardBridge:Zh+""}});const Yh=56;({...H.contracts,l2OutputOracle:Yh+"",portal:Yh+"",l1StandardBridge:Yh+""});const Jh=97;({...H.contracts,l2OutputOracle:Jh+"",portal:Jh+"",l1StandardBridge:Jh+""});const Il=1;({...H,contracts:{...H.contracts,disputeGameFactory:Il+"",l2OutputOracle:Il+"",portal:Il+"",l1StandardBridge:Il+""}});const Xh=5;({...H,contracts:{...H.contracts,l2OutputOracle:Xh+"",portal:Xh+"",l1StandardBridge:Xh+""}});const Al=11155111;({...H,contracts:{...H.contracts,disputeGameFactory:Al+"",l2OutputOracle:Al+"",portal:Al+"",l1StandardBridge:Al+""}});const cm=11155111;Oi({...H,name:"Pyrope Testnet",testnet:!0,id:695569,sourceId:cm,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.pyropechain.com"],webSocket:["wss://rpc.pyropechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://pyrope.blockscout.com"}},contracts:{...H.contracts,l1StandardBridge:{[cm]:{address:"0xC24932c31D9621aE9e792576152B7ef010cFC2F8"}}}});const Sl=1;Oi({...H,name:"Redstone",id:690,sourceId:Sl,nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.redstonechain.com"],webSocket:["wss://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz"}},contracts:{...H.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Sl]:{address:"0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae",blockCreated:19578329}},l2OutputOracle:{[Sl]:{address:"0xa426A052f657AEEefc298b3B5c35a470e4739d69",blockCreated:19578337}},l1StandardBridge:{[Sl]:{address:"0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69",blockCreated:19578331}}}});const Qh=1;({...H,contracts:{...H.contracts,l2OutputOracle:Qh+"",portal:Qh+"",l1StandardBridge:Qh+""}});const ep=11155111;({...H,contracts:{...H.contracts,l2OutputOracle:ep+"",portal:ep+"",l1StandardBridge:ep+""}});const tp=1;({...H,contracts:{...H.contracts,l2OutputOracle:tp+"",portal:tp+"",l1StandardBridge:tp+""}});const lT=11155111;({...H,contracts:{...H.contracts}});const Nl=1;({...H,contracts:{...H.contracts,disputeGameFactory:Nl+"",l2OutputOracle:Nl+"",portal:Nl+"",l1StandardBridge:Nl+""}});const Pl=11155111;({...H,contracts:{...H.contracts,disputeGameFactory:Pl+"",l2OutputOracle:Pl+"",portal:Pl+"",l1StandardBridge:Pl+""}});const kl=1;({...H,contracts:{...H.contracts,disputeGameFactory:kl+"",l2OutputOracle:kl+"",portal:kl+"",l1StandardBridge:kl+""}});const Ol=11155111;({...H,contracts:{...H.contracts,disputeGameFactory:Ol+"",l2OutputOracle:Ol+"",portal:Ol+"",l1StandardBridge:Ol+""}});const Tl=1;({...H,contracts:{...H.contracts,disputeGameFactory:Tl+"",l2OutputOracle:Tl+"",portal:Tl+"",l1StandardBridge:Tl+""}});const lm=11155111;({...H,contracts:{...H.contracts,portal:lm+"",l1StandardBridge:lm+""}},{...H,contracts:{...H.contracts}}),{...H,contracts:{...H.contracts}};const ip=1;({...H,contracts:{...H.contracts,disputeGameFactory:ip+"",portal:ip+"",l1StandardBridge:ip+""}});const sp=11155111;({...H,contracts:{...H.contracts,portal:sp+"",l1StandardBridge:sp+"",disputeGameFactory:sp+""}});const Rl=1;({...H,contracts:{...H.contracts,disputeGameFactory:Rl+"",l2OutputOracle:Rl+"",portal:Rl+"",l1StandardBridge:Rl+""}});const $l=11155111;({...H,contracts:{...H.contracts,disputeGameFactory:$l+"",l2OutputOracle:$l+"",portal:$l+"",l1StandardBridge:$l+""}});const rp=1;({...H,contracts:{...H.contracts,l2OutputOracle:rp+"",portal:rp+"",l1StandardBridge:rp+""}});const np=11155111;({...H,contracts:{...H.contracts,l2OutputOracle:np+"",portal:np+"",l1StandardBridge:np+""}},{...H,contracts:{...H.contracts,portal:5+""}});function no(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}const dm=no({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),um=no({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});no({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"}),no({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}}),no({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});const VI={solana:["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"],eip155:["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_showCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"],bip122:["sendTransfer","signMessage","signPsbt","getAccountAddresses"]},hm={getMethodsByChainNamespace(t){return VI[t]||[]},createDefaultNamespace(t){return{methods:this.getMethodsByChainNamespace(t),events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}}},applyNamespaceOverrides(t,e){if(!e)return{...t};const i={...t},s=new Set;if(e.methods&&Object.keys(e.methods).forEach(r=>s.add(r)),e.chains&&Object.keys(e.chains).forEach(r=>s.add(r)),e.events&&Object.keys(e.events).forEach(r=>s.add(r)),e.rpcMap&&Object.keys(e.rpcMap).forEach(r=>{const[o]=r.split(":");o&&s.add(o)}),s.forEach(r=>{i[r]||(i[r]=this.createDefaultNamespace(r))}),e.methods&&Object.entries(e.methods).forEach(([r,o])=>{i[r]&&(i[r].methods=o)}),e.chains&&Object.entries(e.chains).forEach(([r,o])=>{i[r]&&(i[r].chains=o)}),e.events&&Object.entries(e.events).forEach(([r,o])=>{i[r]&&(i[r].events=o)}),e.rpcMap){const r=new Set;Object.entries(e.rpcMap).forEach(([o,a])=>{const[c,d]=o.split(":");!c||!d||!i[c]||(i[c].rpcMap||(i[c].rpcMap={}),r.has(c)||(i[c].rpcMap={},r.add(c)),i[c].rpcMap[d]=a)})}return i},createNamespaces(t,e){const i=t.reduce((s,r)=>{const{id:o,chainNamespace:a,rpcUrls:c}=r,d=c.default.http[0];s[a]||(s[a]=this.createDefaultNamespace(a));const u=`${a}:${o}`,h=s[a];switch(h.chains.push(u),u){case dm.caipNetworkId:h.chains.push(dm.deprecatedCaipNetworkId);break;case um.caipNetworkId:h.chains.push(um.deprecatedCaipNetworkId);break}return h!=null&&h.rpcMap&&d&&(h.rpcMap[o]=d),s},{});return this.applyNamespaceOverrides(i,e)},resolveReownName:async t=>{var i;const e=await Pw.resolveName(t);return((i=(Object.values(e==null?void 0:e.addresses)||[])[0])==null?void 0:i.address)||!1},getChainsFromNamespaces(t={}){return Object.values(t).flatMap(e=>{const i=e.chains||[],s=e.accounts.map(r=>{const[o,a]=r.split(":");return`${o}:${a}`});return Array.from(new Set([...i,...s]))})},isSessionEventData(t){return typeof t=="object"&&t!==null&&"id"in t&&"topic"in t&&"params"in t&&typeof t.params=="object"&&t.params!==null&&"chainId"in t.params&&"event"in t.params&&typeof t.params.event=="object"&&t.params.event!==null}};class pm{constructor({provider:e,namespace:i}){this.id=oe.CONNECTOR_ID.WALLET_CONNECT,this.name=ll.ConnectorNamesMap[oe.CONNECTOR_ID.WALLET_CONNECT],this.type="WALLET_CONNECT",this.imageId=ll.ConnectorImageIds[oe.CONNECTOR_ID.WALLET_CONNECT],this.getCaipNetworks=C.getCaipNetworks.bind(C),this.caipNetworks=this.getCaipNetworks(),this.provider=e,this.chain=i}get chains(){return this.getCaipNetworks()}async connectWalletConnect(){if(!await this.authenticate()){const e=this.getCaipNetworks(),i=F.state.universalProviderConfigOverride,s=hm.createNamespaces(e,i);await this.provider.connect({optionalNamespaces:s})}return{clientId:await this.provider.client.core.crypto.getClientId(),session:this.provider.session}}async disconnect(){await this.provider.disconnect()}async authenticate(){const e=this.chains.map(i=>i.caipNetworkId);return js.universalProviderAuthenticate({universalProvider:this.provider,chains:e,methods:KI})}}const KI=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"];class GI{constructor(e){this.availableConnectors=[],this.eventListeners=new Map,this.getCaipNetworks=i=>C.getCaipNetworks(i),e&&this.construct(e)}construct(e){this.projectId=e.projectId,this.namespace=e.namespace,this.adapterType=e.adapterType}get connectors(){return this.availableConnectors}get networks(){return this.getCaipNetworks(this.namespace)}setAuthProvider(e){this.addConnector({id:oe.CONNECTOR_ID.AUTH,type:"AUTH",name:oe.CONNECTOR_NAMES.AUTH,provider:e,imageId:ll.ConnectorImageIds[oe.CONNECTOR_ID.AUTH],chain:this.namespace,chains:[]})}addConnector(...e){const i=new Set;this.availableConnectors=[...e,...this.availableConnectors].filter(s=>i.has(s.id)?!1:(i.add(s.id),!0)),this.emit("connectors",this.availableConnectors)}setStatus(e,i){de.setStatus(e,i)}on(e,i){var s;this.eventListeners.has(e)||this.eventListeners.set(e,new Set),(s=this.eventListeners.get(e))==null||s.add(i)}off(e,i){const s=this.eventListeners.get(e);s&&s.delete(i)}removeAllEventListeners(){this.eventListeners.forEach(e=>{e.clear()})}emit(e,i){const s=this.eventListeners.get(e);s&&s.forEach(r=>r(i))}async connectWalletConnect(e){return{clientId:(await this.getWalletConnectConnector().connectWalletConnect()).clientId}}async switchNetwork(e){var o;const{caipNetwork:i,providerType:s}=e;if(!e.provider)return;const r="provider"in e.provider?e.provider.provider:e.provider;if(s==="WALLET_CONNECT"){r.setDefaultChain(i.caipNetworkId);return}if(r&&s==="AUTH"){const a=r,c=(o=de.state.preferredAccountTypes)==null?void 0:o[i.chainNamespace];await a.switchNetwork(i.caipNetworkId);const d=await a.getUser({chainId:i.caipNetworkId,preferredAccountType:c});this.emit("switchNetwork",d)}}getWalletConnectConnector(){const e=this.connectors.find(i=>i instanceof pm);if(!e)throw new Error("WalletConnectConnector not found");return e}}class ZI extends GI{setUniversalProvider(e){this.addConnector(new pm({provider:e,caipNetworks:this.getCaipNetworks(),namespace:this.namespace}))}async connect(e){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:Number(e.chainId),provider:this.provider,address:""})}async disconnect(){try{await this.getWalletConnectConnector().disconnect()}catch(e){console.warn("UniversalAdapter:disconnect - error",e)}}async getAccounts({namespace:e}){var s,r,o,a,c;const i=((c=(a=(o=(r=(s=this.provider)==null?void 0:s.session)==null?void 0:r.namespaces)==null?void 0:o[e])==null?void 0:a.accounts)==null?void 0:c.map(d=>{const[,,u]=d.split(":");return u}).filter((d,u,h)=>h.indexOf(d)===u))||[];return Promise.resolve({accounts:i.map(d=>V.createAccount(e,d,e==="bip122"?"payment":"eoa"))})}async syncConnectors(){return Promise.resolve()}async getBalance(e){var s,r,o,a,c;if(!(e.caipNetwork&&lt.BALANCE_SUPPORTED_CHAINS.includes((s=e.caipNetwork)==null?void 0:s.chainNamespace))||(r=e.caipNetwork)!=null&&r.testnet)return{balance:"0.00",symbol:((o=e.caipNetwork)==null?void 0:o.nativeCurrency.symbol)||""};if(de.state.balanceLoading&&e.chainId===((a=C.state.activeCaipNetwork)==null?void 0:a.id))return{balance:de.state.balance||"0.00",symbol:de.state.balanceSymbol||""};const i=(await de.fetchTokenBalance()).find(d=>{var u,h;return d.chainId===`${(u=e.caipNetwork)==null?void 0:u.chainNamespace}:${e.chainId}`&&d.symbol===((h=e.caipNetwork)==null?void 0:h.nativeCurrency.symbol)});return{balance:(i==null?void 0:i.quantity.numeric)||"0.00",symbol:(i==null?void 0:i.symbol)||((c=e.caipNetwork)==null?void 0:c.nativeCurrency.symbol)||""}}async signMessage(e){var a,c,d;const{provider:i,message:s,address:r}=e;if(!i)throw new Error("UniversalAdapter:signMessage - provider is undefined");let o="";return((a=C.state.activeCaipNetwork)==null?void 0:a.chainNamespace)===oe.CHAIN.SOLANA?o=(await i.request({method:"solana_signMessage",params:{message:kI.encode(new TextEncoder().encode(s)),pubkey:r}},(c=C.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)).signature:o=await i.request({method:"personal_sign",params:[s,r]},(d=C.state.activeCaipNetwork)==null?void 0:d.caipNetworkId),{signature:o}}async estimateGas(){return Promise.resolve({gas:BigInt(0)})}async getProfile(){return Promise.resolve({profileImage:"",profileName:""})}async sendTransaction(){return Promise.resolve({hash:""})}walletGetAssets(e){return Promise.resolve({})}async writeContract(){return Promise.resolve({hash:""})}async getEnsAddress(){return Promise.resolve({address:!1})}parseUnits(){return 0n}formatUnits(){return"0"}async getCapabilities(){return Promise.resolve({})}async grantPermissions(){return Promise.resolve({})}async revokePermissions(){return Promise.resolve("0x")}async syncConnection(){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:1,provider:this.provider,address:""})}async switchNetwork(e){var r,o,a,c,d,u;const{caipNetwork:i}=e,s=this.getWalletConnectConnector();if(i.chainNamespace===oe.CHAIN.EVM)try{await((r=s.provider)==null?void 0:r.request({method:"wallet_switchEthereumChain",params:[{chainId:we(i.id)}]}))}catch(h){if(h.code===bl.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||h.code===bl.ERROR_INVALID_CHAIN_ID||h.code===bl.ERROR_CODE_DEFAULT||((a=(o=h==null?void 0:h.data)==null?void 0:o.originalError)==null?void 0:a.code)===bl.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)try{await((u=s.provider)==null?void 0:u.request({method:"wallet_addEthereumChain",params:[{chainId:we(i.id),rpcUrls:[(c=i==null?void 0:i.rpcUrls.chainDefault)==null?void 0:c.http],chainName:i.name,nativeCurrency:i.nativeCurrency,blockExplorerUrls:[(d=i.blockExplorers)==null?void 0:d.default.url]}]}))}catch{throw new Error("Chain is not supported")}}s.provider.setDefaultChain(i.caipNetworkId)}getWalletConnectProvider(){var e;return(e=this.connectors.find(i=>i.type==="WALLET_CONNECT"))==null?void 0:e.provider}}class YI{constructor(e){this.chainNamespaces=[],this.reportedAlertErrors={},this.getCaipNetwork=(i,s)=>{var r,o,a,c;if(i){const d=(o=(r=C.getNetworkData(i))==null?void 0:r.requestedCaipNetworks)==null?void 0:o.find(h=>h.id===s);return d||((a=C.getNetworkData(i))==null?void 0:a.caipNetwork)||((c=C.getRequestedCaipNetworks(i).filter(h=>h.chainNamespace===i))==null?void 0:c[0])}return C.state.activeCaipNetwork||this.defaultCaipNetwork},this.getCaipNetworkId=()=>{const i=this.getCaipNetwork();if(i)return i.id},this.getCaipNetworks=i=>C.getCaipNetworks(i),this.getActiveChainNamespace=()=>C.state.activeChain,this.setRequestedCaipNetworks=(i,s)=>{C.setRequestedCaipNetworks(i,s)},this.getApprovedCaipNetworkIds=()=>C.getAllApprovedCaipNetworkIds(),this.getCaipAddress=i=>C.state.activeChain===i||!i?C.state.activeCaipAddress:C.getAccountProp("caipAddress",i),this.setClientId=i=>{me.setClientId(i)},this.getProvider=i=>tt.getProvider(i),this.getProviderType=i=>tt.getProviderId(i),this.getPreferredAccountType=i=>{var s;return(s=de.state.preferredAccountTypes)==null?void 0:s[i]},this.setCaipAddress=(i,s)=>{de.setCaipAddress(i,s)},this.setBalance=(i,s,r)=>{de.setBalance(i,s,r)},this.setProfileName=(i,s)=>{de.setProfileName(i,s)},this.setProfileImage=(i,s)=>{de.setProfileImage(i,s)},this.setUser=(i,s)=>{de.setUser(i,s),F.state.enableEmbedded&&Ne.close()},this.resetAccount=i=>{de.resetAccount(i)},this.setCaipNetwork=i=>{C.setActiveCaipNetwork(i)},this.setCaipNetworkOfNamespace=(i,s)=>{C.setChainNetworkData(s,{caipNetwork:i})},this.setAllAccounts=(i,s)=>{de.setAllAccounts(i,s),F.setHasMultipleAddresses((i==null?void 0:i.length)>1)},this.setStatus=(i,s)=>{de.setStatus(i,s),ie.isConnected()?ae.setConnectionStatus("connected"):ae.setConnectionStatus("disconnected")},this.getAddressByChainNamespace=i=>C.getAccountProp("address",i),this.setConnectors=i=>{const s=[...ie.state.allConnectors,...i];ie.setConnectors(s)},this.fetchIdentity=i=>me.fetchIdentity(i),this.getReownName=i=>Pw.getNamesForAddress(i),this.getConnectors=()=>ie.getConnectors(),this.getConnectorImage=i=>dt.getConnectorImage(i),this.setConnectedWalletInfo=(i,s)=>{const r=tt.getProviderId(s),o=i?{...i,type:r}:void 0;de.setConnectedWalletInfo(o,s)},this.getIsConnectedState=()=>!!C.state.activeCaipAddress,this.addAddressLabel=(i,s,r)=>{de.addAddressLabel(i,s,r)},this.removeAddressLabel=(i,s)=>{de.removeAddressLabel(i,s)},this.getAddress=i=>C.state.activeChain===i||!i?de.state.address:C.getAccountProp("address",i),this.setApprovedCaipNetworksData=i=>C.setApprovedCaipNetworksData(i),this.resetNetwork=i=>{C.resetNetwork(i)},this.addConnector=i=>{ie.addConnector(i)},this.resetWcConnection=()=>{ce.resetWcConnection()},this.setAddressExplorerUrl=(i,s)=>{de.setAddressExplorerUrl(i,s)},this.setSmartAccountDeployed=(i,s)=>{de.setSmartAccountDeployed(i,s)},this.setSmartAccountEnabledNetworks=(i,s)=>{C.setSmartAccountEnabledNetworks(i,s)},this.setPreferredAccountType=(i,s)=>{de.setPreferredAccountType(i,s)},this.setEIP6963Enabled=i=>{F.setEIP6963Enabled(i)},this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.options=e,this.version=e.sdkVersion,this.caipNetworks=this.extendCaipNetworks(e),this.chainNamespaces=this.getChainNamespacesSet(e.adapters,this.caipNetworks),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(e),this.chainAdapters=this.createAdapters(e.adapters),this.initialize(e)}getChainNamespacesSet(e,i){const s=e==null?void 0:e.map(o=>o.namespace).filter(o=>!!o);if(s!=null&&s.length)return[...new Set(s)];const r=i==null?void 0:i.map(o=>o.chainNamespace);return[...new Set(r)]}async initialize(e){this.initControllers(e),await this.initChainAdapters(),await this.injectModalUi(),this.sendInitializeEvent(e),ds.set({initialized:!0}),await this.syncExistingConnection()}sendInitializeEvent(e){var s;const{...i}=e;delete i.adapters,delete i.universalProvider,_e.sendEvent({type:"track",event:"INITIALIZE",properties:{...i,networks:e.networks.map(r=>r.id),siweConfig:{options:((s=e.siweConfig)==null?void 0:s.options)||{}}}})}initControllers(e){this.initializeOptionsController(e),this.initializeChainController(e),this.initializeThemeController(e),this.initializeConnectionController(e),this.initializeConnectorController()}initializeThemeController(e){e.themeMode&&ut.setThemeMode(e.themeMode),e.themeVariables&&ut.setThemeVariables(e.themeVariables)}initializeChainController(e){if(!this.connectionControllerClient||!this.networkControllerClient)throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");C.initialize(e.adapters??[],this.caipNetworks,{connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient});const i=this.getDefaultNetwork();i&&C.setActiveCaipNetwork(i)}initializeConnectionController(e){ce.setWcBasic(e.basic??!1)}initializeConnectorController(){ie.initialize(this.chainNamespaces)}initializeOptionsController(e){var o;F.setDebug(e.debug!==!1),F.setEnableWalletConnect(e.enableWalletConnect!==!1),F.setEnableWalletGuide(e.enableWalletGuide!==!1),F.setEnableWallets(e.enableWallets!==!1),F.setEIP6963Enabled(e.enableEIP6963!==!1),F.setEnableNetworkSwitch(e.enableNetworkSwitch!==!1),F.setEnableAuthLogger(e.enableAuthLogger!==!1),F.setCustomRpcUrls(e.customRpcUrls),F.setSdkVersion(e.sdkVersion),F.setProjectId(e.projectId),F.setEnableEmbedded(e.enableEmbedded),F.setAllWallets(e.allWallets),F.setIncludeWalletIds(e.includeWalletIds),F.setExcludeWalletIds(e.excludeWalletIds),F.setFeaturedWalletIds(e.featuredWalletIds),F.setTokens(e.tokens),F.setTermsConditionsUrl(e.termsConditionsUrl),F.setPrivacyPolicyUrl(e.privacyPolicyUrl),F.setCustomWallets(e.customWallets),F.setFeatures(e.features),F.setAllowUnsupportedChain(e.allowUnsupportedChain),F.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),F.setDefaultAccountTypes(e.defaultAccountTypes);const i=ae.getPreferredAccountTypes(),s={...F.state.defaultAccountTypes,...i};de.setPreferredAccountTypes(s);const r=this.getDefaultMetaData();if(!e.metadata&&r&&(e.metadata=r),F.setMetadata(e.metadata),F.setDisableAppend(e.disableAppend),F.setEnableEmbedded(e.enableEmbedded),F.setSIWX(e.siwx),!e.projectId){Ms.open(dl.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");return}if((o=e.adapters)!=null&&o.find(a=>a.namespace===oe.CHAIN.EVM)&&e.siweConfig){if(e.siwx)throw new Error("Cannot set both `siweConfig` and `siwx` options");F.setSIWX(e.siweConfig.mapToSIWX())}}getDefaultMetaData(){var e,i,s,r;return typeof window<"u"&&typeof document<"u"?{name:((i=(e=document.getElementsByTagName("title"))==null?void 0:e[0])==null?void 0:i.textContent)||"",description:((s=document.querySelector('meta[property="og:description"]'))==null?void 0:s.content)||"",url:window.location.origin,icons:[((r=document.querySelector('link[rel~="icon"]'))==null?void 0:r.href)||""]}:null}setUnsupportedNetwork(e){const i=this.getActiveChainNamespace();if(i){const s=to.getUnsupportedNetwork(`${i}:${e}`);C.setActiveCaipNetwork(s)}}getDefaultNetwork(){return to.getCaipNetworkFromStorage(this.defaultCaipNetwork)}extendCaipNetwork(e,i){return to.extendCaipNetwork(e,{customNetworkImageUrls:i.chainImages,projectId:i.projectId})}extendCaipNetworks(e){return to.extendCaipNetworks(e.networks,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId})}extendDefaultCaipNetwork(e){const i=e.networks.find(s=>{var r;return s.id===((r=e.defaultNetwork)==null?void 0:r.id)});return i?to.extendCaipNetwork(i,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId}):void 0}createClients(){this.connectionControllerClient={connectWalletConnect:async()=>{var o;const e=C.state.activeChain,i=this.getAdapter(e),s=(o=this.getCaipNetwork(e))==null?void 0:o.id;if(!i)throw new Error("Adapter not found");const r=await i.connectWalletConnect(s);this.close(),this.setClientId((r==null?void 0:r.clientId)||null),ae.setConnectedNamespaces([...C.state.chains.keys()]),this.chainNamespaces.forEach(a=>{ie.setConnectorId(pt.CONNECTOR_TYPE_WALLET_CONNECT,a)}),await this.syncWalletConnectAccount()},connectExternal:async({id:e,info:i,type:s,provider:r,chain:o,caipNetwork:a})=>{var f,v,w,m,y,b;const c=C.state.activeChain,d=o||c,u=this.getAdapter(d);if(o&&o!==c&&!a){const _=this.getCaipNetworks().find(x=>x.chainNamespace===o);_&&this.setCaipNetwork(_)}if(!u)throw new Error("Adapter not found");const h=this.getCaipNetwork(d),p=await u.connect({id:e,info:i,type:s,provider:r,chainId:(a==null?void 0:a.id)||(h==null?void 0:h.id),rpcUrl:((w=(v=(f=a==null?void 0:a.rpcUrls)==null?void 0:f.default)==null?void 0:v.http)==null?void 0:w[0])||((b=(y=(m=h==null?void 0:h.rpcUrls)==null?void 0:m.default)==null?void 0:y.http)==null?void 0:b[0])});if(!p)return;ae.addConnectedNamespace(d),this.syncProvider({...p,chainNamespace:d});const{accounts:g}=await u.getAccounts({namespace:d,id:e});this.setAllAccounts(g,d),this.setStatus("connected",d)},reconnectExternal:async({id:e,info:i,type:s,provider:r})=>{var c;const o=C.state.activeChain,a=this.getAdapter(o);a!=null&&a.reconnect&&(await(a==null?void 0:a.reconnect({id:e,info:i,type:s,provider:r,chainId:(c=this.getCaipNetwork())==null?void 0:c.id})),ae.addConnectedNamespace(o))},disconnect:async e=>{const i=e||C.state.activeChain,s=this.getAdapter(i),r=tt.getProvider(i),o=tt.getProviderId(i);await(s==null?void 0:s.disconnect({provider:r,providerType:o})),ae.removeConnectedNamespace(i),tt.resetChain(i),this.setUser(void 0,i),this.setStatus("disconnected",i)},checkInstalled:e=>e?e.some(i=>{var s;return!!((s=window.ethereum)!=null&&s[String(i)])}):!!window.ethereum,signMessage:async e=>{var i,s;return((s=await((i=this.getAdapter(C.state.activeChain))==null?void 0:i.signMessage({message:e,address:de.state.address,provider:tt.getProvider(C.state.activeChain)})))==null?void 0:s.signature)||""},sendTransaction:async e=>{var i;if(e.chainNamespace===oe.CHAIN.EVM){const s=this.getAdapter(C.state.activeChain),r=tt.getProvider(C.state.activeChain);return((i=await(s==null?void 0:s.sendTransaction({...e,caipNetwork:this.getCaipNetwork(),provider:r})))==null?void 0:i.hash)||""}return""},estimateGas:async e=>{var i;if(e.chainNamespace===oe.CHAIN.EVM){const s=this.getAdapter(C.state.activeChain),r=tt.getProvider(C.state.activeChain),o=this.getCaipNetwork();if(!o)throw new Error("CaipNetwork is undefined");return((i=await(s==null?void 0:s.estimateGas({...e,provider:r,caipNetwork:o})))==null?void 0:i.gas)||0n}return 0n},getEnsAvatar:async()=>{var e,i,s;return((s=await((i=this.getAdapter(C.state.activeChain))==null?void 0:i.getProfile({address:de.state.address,chainId:Number((e=this.getCaipNetwork())==null?void 0:e.id)})))==null?void 0:s.profileImage)||!1},getEnsAddress:async e=>{var r;const i=this.getAdapter(C.state.activeChain),s=this.getCaipNetwork();return s&&((r=await(i==null?void 0:i.getEnsAddress({name:e,caipNetwork:s})))==null?void 0:r.address)||!1},writeContract:async e=>{var a;const i=this.getAdapter(C.state.activeChain),s=this.getCaipNetwork(),r=this.getCaipAddress(),o=tt.getProvider(C.state.activeChain);if(!s||!r)throw new Error("CaipNetwork or CaipAddress is undefined");return(a=await(i==null?void 0:i.writeContract({...e,caipNetwork:s,provider:o,caipAddress:r})))==null?void 0:a.hash},parseUnits:(e,i)=>{var s;return((s=this.getAdapter(C.state.activeChain))==null?void 0:s.parseUnits({value:e,decimals:i}))??0n},formatUnits:(e,i)=>{var s;return((s=this.getAdapter(C.state.activeChain))==null?void 0:s.formatUnits({value:e,decimals:i}))??"0"},getCapabilities:async e=>{var i;return await((i=this.getAdapter(C.state.activeChain))==null?void 0:i.getCapabilities(e))},grantPermissions:async e=>{var i;return await((i=this.getAdapter(C.state.activeChain))==null?void 0:i.grantPermissions(e))},revokePermissions:async e=>{const i=this.getAdapter(C.state.activeChain);return i!=null&&i.revokePermissions?await i.revokePermissions(e):"0x"},walletGetAssets:async e=>{var i;return await((i=this.getAdapter(C.state.activeChain))==null?void 0:i.walletGetAssets(e))??{}}},this.networkControllerClient={switchCaipNetwork:async e=>await this.switchCaipNetwork(e),getApprovedCaipNetworksData:async()=>this.getApprovedCaipNetworksData()},ce.setClient(this.connectionControllerClient)}getApprovedCaipNetworksData(){var e,i,s,r,o;if(tt.getProviderId(C.state.activeChain)===pt.CONNECTOR_TYPE_WALLET_CONNECT){const a=(i=(e=this.universalProvider)==null?void 0:e.session)==null?void 0:i.namespaces;return{supportsAllNetworks:((o=(r=(s=this.universalProvider)==null?void 0:s.session)==null?void 0:r.peer)==null?void 0:o.metadata.name)==="MetaMask Wallet",approvedCaipNetworkIds:this.getChainsFromNamespaces(a)}}return{supportsAllNetworks:!0,approvedCaipNetworkIds:[]}}async switchCaipNetwork(e){var s;if(!e)return;const i=e.chainNamespace;if(this.getAddressByChainNamespace(e.chainNamespace)){const r=tt.getProvider(i),o=tt.getProviderId(i);if(e.chainNamespace===C.state.activeChain)await((s=this.getAdapter(i))==null?void 0:s.switchNetwork({caipNetwork:e,provider:r,providerType:o}));else if(this.setCaipNetwork(e),o===pt.CONNECTOR_TYPE_WALLET_CONNECT)this.syncWalletConnectAccount();else{const a=this.getAddressByChainNamespace(i);a&&this.syncAccount({address:a,chainId:e.id,chainNamespace:i})}}else this.setCaipNetwork(e)}getChainsFromNamespaces(e={}){return Object.values(e).flatMap(i=>{const s=i.chains||[],r=i.accounts.map(o=>{const{chainId:a,chainNamespace:c}=$s.parseCaipAddress(o);return`${c}:${a}`});return Array.from(new Set([...s,...r]))})}createAdapters(e){return this.createClients(),this.chainNamespaces.reduce((i,s)=>{var o;const r=e==null?void 0:e.find(a=>a.namespace===s);return r?(r.construct({namespace:s,projectId:(o=this.options)==null?void 0:o.projectId,networks:this.getCaipNetworks()}),i[s]=r):i[s]=new ZI({namespace:s,networks:this.getCaipNetworks()}),i},{})}async initChainAdapter(e){var i;this.onConnectors(e),this.listenAdapter(e),(i=this.chainAdapters)==null||i[e].syncConnectors(this.options,this),await this.createUniversalProviderForAdapter(e)}async initChainAdapters(){await Promise.all(this.chainNamespaces.map(async e=>{await this.initChainAdapter(e)}))}onConnectors(e){var i;(i=this.getAdapter(e))==null||i.on("connectors",this.setConnectors.bind(this))}listenAdapter(e){const i=this.getAdapter(e);if(!i)return;const s=ae.getConnectionStatus();s==="connected"?this.setStatus("connecting",e):s==="disconnected"?(ae.clearAddressCache(),this.setStatus(s,e)):this.setStatus(s,e),i.on("switchNetwork",({address:r,chainId:o})=>{const a=this.getCaipNetworks().find(u=>u.id===o||u.caipNetworkId===o),c=C.state.activeChain===e,d=C.getAccountProp("address",e);if(a){const u=c&&r?r:d;u&&this.syncAccount({address:u,chainId:a.id,chainNamespace:e})}else this.setUnsupportedNetwork(o)}),i.on("disconnect",this.disconnect.bind(this,e)),i.on("pendingTransactions",()=>{const r=de.state.address,o=C.state.activeCaipNetwork;!r||!(o!=null&&o.id)||this.updateNativeBalance(r,o.id,o.chainNamespace)}),i.on("accountChanged",({address:r,chainId:o})=>{var c,d;const a=C.state.activeChain===e;a&&o?this.syncAccount({address:r,chainId:o,chainNamespace:e}):a&&((c=C.state.activeCaipNetwork)!=null&&c.id)?this.syncAccount({address:r,chainId:(d=C.state.activeCaipNetwork)==null?void 0:d.id,chainNamespace:e}):this.syncAccountInfo(r,o,e)})}async createUniversalProviderForAdapter(e){var i,s,r;await this.getUniversalProvider(),this.universalProvider&&((r=(s=(i=this.chainAdapters)==null?void 0:i[e])==null?void 0:s.setUniversalProvider)==null||r.call(s,this.universalProvider))}async syncExistingConnection(){await Promise.allSettled(this.chainNamespaces.map(e=>this.syncNamespaceConnection(e)))}async syncNamespaceConnection(e){try{const i=ie.getConnectorId(e);switch(this.setStatus("connecting",e),i){case oe.CONNECTOR_ID.WALLET_CONNECT:await this.syncWalletConnectAccount();break;case oe.CONNECTOR_ID.AUTH:break;default:await this.syncAdapterConnection(e)}}catch(i){console.warn("AppKit couldn't sync existing connection",i),this.setStatus("disconnected",e)}}async syncAdapterConnection(e){var a,c,d;const i=this.getAdapter(e),s=ie.getConnectorId(e),r=this.getCaipNetwork(e),o=ie.getConnectors(e).find(u=>u.id===s);try{if(!i||!o)throw new Error(`Adapter or connector not found for namespace ${e}`);if(!(r!=null&&r.id))throw new Error("CaipNetwork not found");const u=await(i==null?void 0:i.syncConnection({namespace:e,id:o.id,chainId:r.id,rpcUrl:(d=(c=(a=r==null?void 0:r.rpcUrls)==null?void 0:a.default)==null?void 0:c.http)==null?void 0:d[0]}));if(u){const h=await(i==null?void 0:i.getAccounts({namespace:e,id:o.id}));h&&h.accounts.length>0?this.setAllAccounts(h.accounts,e):this.setAllAccounts([V.createAccount(e,u.address,"eoa")],e),this.syncProvider({...u,chainNamespace:e}),await this.syncAccount({...u,chainNamespace:e}),this.setStatus("connected",e)}else this.setStatus("disconnected",e)}catch{this.setStatus("disconnected",e)}}async syncWalletConnectAccount(){const e=this.chainNamespaces.map(async i=>{var c,d,u,h,p;const s=this.getAdapter(i),r=((h=(u=(d=(c=this.universalProvider)==null?void 0:c.session)==null?void 0:d.namespaces)==null?void 0:u[i])==null?void 0:h.accounts)||[],o=(p=C.state.activeCaipNetwork)==null?void 0:p.id,a=r.find(g=>{const{chainId:f}=$s.parseCaipAddress(g);return f===(o==null?void 0:o.toString())})||r[0];if(a){const g=$s.validateCaipAddress(a),{chainId:f,address:v}=$s.parseCaipAddress(g);if(tt.setProviderId(i,pt.CONNECTOR_TYPE_WALLET_CONNECT),this.caipNetworks&&C.state.activeCaipNetwork&&(s==null?void 0:s.namespace)!==oe.CHAIN.EVM){const w=s==null?void 0:s.getWalletConnectProvider({caipNetworks:this.getCaipNetworks(),provider:this.universalProvider,activeCaipNetwork:C.state.activeCaipNetwork});tt.setProvider(i,w)}else tt.setProvider(i,this.universalProvider);ie.setConnectorId(oe.CONNECTOR_ID.WALLET_CONNECT,i),ae.addConnectedNamespace(i),this.syncWalletConnectAccounts(i),await this.syncAccount({address:v,chainId:f,chainNamespace:i})}else this.setStatus("disconnected",i);await C.setApprovedCaipNetworksData(i)});await Promise.all(e)}syncWalletConnectAccounts(e){var s,r,o,a,c;const i=(c=(a=(o=(r=(s=this.universalProvider)==null?void 0:s.session)==null?void 0:r.namespaces)==null?void 0:o[e])==null?void 0:a.accounts)==null?void 0:c.map(d=>{const{address:u}=$s.parseCaipAddress(d);return u}).filter((d,u,h)=>h.indexOf(d)===u);i&&this.setAllAccounts(i.map(d=>V.createAccount(e,d,e==="bip122"?"payment":"eoa")),e)}syncProvider({type:e,provider:i,id:s,chainNamespace:r}){tt.setProviderId(r,e),tt.setProvider(r,i),ie.setConnectorId(s,r)}async syncAccount(e){var p,g;const i=e.chainNamespace===C.state.activeChain,s=C.getCaipNetworkByNamespace(e.chainNamespace,e.chainId),{address:r,chainId:o,chainNamespace:a}=e,{chainId:c}=ae.getActiveNetworkProps(),d=o||c,u=((p=C.state.activeCaipNetwork)==null?void 0:p.name)===oe.UNSUPPORTED_NETWORK_NAME,h=C.getNetworkProp("supportsAllNetworks",a);if(this.setStatus("connected",a),!(u&&!h)&&d){let f=this.getCaipNetworks().find(m=>m.id.toString()===d.toString()),v=this.getCaipNetworks().find(m=>m.chainNamespace===a);if(!h&&!f&&!v){const m=this.getApprovedCaipNetworkIds()||[],y=m.find(_=>{var x;return((x=$s.parseCaipNetworkId(_))==null?void 0:x.chainId)===d.toString()}),b=m.find(_=>{var x;return((x=$s.parseCaipNetworkId(_))==null?void 0:x.chainNamespace)===a});f=this.getCaipNetworks().find(_=>_.caipNetworkId===y),v=this.getCaipNetworks().find(_=>_.caipNetworkId===b||"deprecatedCaipNetworkId"in _&&_.deprecatedCaipNetworkId===b)}const w=f||v;(w==null?void 0:w.chainNamespace)===C.state.activeChain?F.state.enableNetworkSwitch&&!F.state.allowUnsupportedChain&&((g=C.state.activeCaipNetwork)==null?void 0:g.name)===oe.UNSUPPORTED_NETWORK_NAME?C.showUnsupportedChainUI():this.setCaipNetwork(w):i||s&&this.setCaipNetworkOfNamespace(s,a),this.syncConnectedWalletInfo(a),Ch.isLowerCaseMatch(r,de.state.address)||this.syncAccountInfo(r,w==null?void 0:w.id,a),i?await this.syncBalance({address:r,chainId:w==null?void 0:w.id,chainNamespace:a}):await this.syncBalance({address:r,chainId:s==null?void 0:s.id,chainNamespace:a})}}async syncAccountInfo(e,i,s){const r=this.getCaipAddress(s),o=i||(r==null?void 0:r.split(":")[1]);if(!o)return;const a=`${s}:${o}:${e}`;this.setCaipAddress(a,s),await this.syncIdentity({address:e,chainId:o,chainNamespace:s})}async syncReownName(e,i){try{const s=await this.getReownName(e);if(s[0]){const r=s[0];this.setProfileName(r.name,i)}else this.setProfileName(null,i)}catch{this.setProfileName(null,i)}}syncConnectedWalletInfo(e){var r;const i=ie.getConnectorId(e),s=tt.getProviderId(e);if(s===pt.CONNECTOR_TYPE_ANNOUNCED||s===pt.CONNECTOR_TYPE_INJECTED){if(i){const o=this.getConnectors().find(a=>a.id===i);if(o){const{info:a,name:c,imageUrl:d}=o,u=d||this.getConnectorImage(o);this.setConnectedWalletInfo({name:c,icon:u,...a},e)}}}else if(s===pt.CONNECTOR_TYPE_WALLET_CONNECT){const o=tt.getProvider(e);o!=null&&o.session&&this.setConnectedWalletInfo({...o.session.peer.metadata,name:o.session.peer.metadata.name,icon:(r=o.session.peer.metadata.icons)==null?void 0:r[0]},e)}else if(i)if(i===oe.CONNECTOR_ID.COINBASE){const o=this.getConnectors().find(a=>a.id===oe.CONNECTOR_ID.COINBASE);this.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.getConnectorImage(o)},e)}else this.setConnectedWalletInfo({name:i},e)}async syncBalance(e){!Zg.getNetworksByNamespace(this.getCaipNetworks(),e.chainNamespace).find(i=>{var s;return i.id.toString()===((s=e.chainId)==null?void 0:s.toString())})||!e.chainId||await this.updateNativeBalance(e.address,e.chainId,e.chainNamespace)}async updateNativeBalance(e,i,s){const r=this.getAdapter(s),o=C.getCaipNetworkByNamespace(s,i);if(r){const a=await r.getBalance({address:e,chainId:i,caipNetwork:o,tokens:this.options.tokens});this.setBalance(a.balance,a.symbol,s)}}async initializeUniversalAdapter(){var s,r,o,a,c,d,u,h,p,g;const e=nI.createLogger((f,...v)=>{f&&this.handleAlertError(f),console.error(...v)}),i={projectId:(s=this.options)==null?void 0:s.projectId,metadata:{name:(r=this.options)!=null&&r.metadata?(o=this.options)==null?void 0:o.metadata.name:"",description:(a=this.options)!=null&&a.metadata?(c=this.options)==null?void 0:c.metadata.description:"",url:(d=this.options)!=null&&d.metadata?(u=this.options)==null?void 0:u.metadata.url:"",icons:(h=this.options)!=null&&h.metadata?(p=this.options)==null?void 0:p.metadata.icons:[""]},logger:e};F.setManualWCControl(!!((g=this.options)!=null&&g.manualWCControl)),this.universalProvider=this.options.universalProvider??await Uc.init(i),this.listenWalletConnect()}listenWalletConnect(){this.universalProvider&&(this.universalProvider.on("display_uri",e=>{ce.setUri(e)}),this.universalProvider.on("connect",ce.finalizeWcConnection),this.universalProvider.on("disconnect",()=>{this.chainNamespaces.forEach(e=>{this.resetAccount(e)}),ce.resetWcConnection()}),this.universalProvider.on("chainChanged",e=>{const i=this.getCaipNetworks().find(r=>r.id==e),s=this.getCaipNetwork();if(!i){this.setUnsupportedNetwork(e);return}(s==null?void 0:s.id)!==(i==null?void 0:i.id)&&this.setCaipNetwork(i)}),this.universalProvider.on("session_event",e=>{if(hm.isSessionEventData(e)){const{name:i,data:s}=e.params.event;i==="accountsChanged"&&Array.isArray(s)&&V.isCaipAddress(s[0])&&this.syncAccount($s.parseCaipAddress(s[0]))}}))}createUniversalProvider(){var e;return!this.universalProviderInitPromise&&V.isClient()&&((e=this.options)!=null&&e.projectId)&&(this.universalProviderInitPromise=this.initializeUniversalAdapter()),this.universalProviderInitPromise}async getUniversalProvider(){if(!this.universalProvider)try{await this.createUniversalProvider()}catch(e){_e.sendEvent({type:"error",event:"INTERNAL_SDK_ERROR",properties:{errorType:"UniversalProviderInitError",errorMessage:e instanceof Error?e.message:"Unknown",uncaught:!1}}),console.error("AppKit:getUniversalProvider - Cannot create provider",e)}return this.universalProvider}handleAlertError(e){const i=Object.entries(dl.UniversalProviderErrors).find(([,{message:c}])=>e.message.includes(c)),[s,r]=i??[],{message:o,alertErrorKey:a}=r??{};if(s&&o&&!this.reportedAlertErrors[s]){const c=dl.ALERT_ERRORS[a];c&&(Ms.open(c,"error"),this.reportedAlertErrors[s]=!0)}}getAdapter(e){var i;if(e)return(i=this.chainAdapters)==null?void 0:i[e]}createAdapter(e){var r;if(!e)return;const i=e.namespace;if(!i)return;this.createClients();const s=e;s.namespace=i,s.construct({namespace:i,projectId:(r=this.options)==null?void 0:r.projectId,networks:this.getCaipNetworks()}),this.chainNamespaces.includes(i)||this.chainNamespaces.push(i),this.chainAdapters&&(this.chainAdapters[i]=s)}async open(e){if(await this.injectModalUi(),e!=null&&e.uri&&ce.setUri(e.uri),e==null?void 0:e.arguments)switch(e==null?void 0:e.view){case"Swap":return Ne.open({...e,data:{swap:e.arguments}})}return Ne.open(e)}async close(){await this.injectModalUi(),Ne.close()}setLoading(e,i){Ne.setLoading(e,i)}async disconnect(e){await ce.disconnect(e)}getError(){return""}getChainId(){var e;return(e=C.state.activeCaipNetwork)==null?void 0:e.id}async switchNetwork(e){const i=this.getCaipNetworks().find(s=>s.id===e.id);if(!i){Ms.open(dl.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error");return}await C.switchActiveNetwork(i)}getWalletProvider(){return C.state.activeChain?tt.state.providers[C.state.activeChain]:null}getWalletProviderType(){return tt.getProviderId(C.state.activeChain)}subscribeProviders(e){return tt.subscribeProviders(e)}getThemeMode(){return ut.state.themeMode}getThemeVariables(){return ut.state.themeVariables}setThemeMode(e){ut.setThemeMode(e),im(ut.state.themeMode)}setTermsConditionsUrl(e){F.setTermsConditionsUrl(e)}setPrivacyPolicyUrl(e){F.setPrivacyPolicyUrl(e)}setThemeVariables(e){ut.setThemeVariables(e),II(ut.state.themeVariables)}subscribeTheme(e){return ut.subscribe(e)}getWalletInfo(){return de.state.connectedWalletInfo}getAccount(e){var o;const i=ie.getAuthConnector(e),s=C.getAccountData(e),r=C.state.activeChain;if(s)return{allAccounts:s.allAccounts,caipAddress:s.caipAddress,address:V.getPlainAddress(s.caipAddress),isConnected:!!s.caipAddress,status:s.status,embeddedWalletInfo:i?{user:s.user?{...s.user,username:ae.getConnectedSocialUsername()}:void 0,authProvider:s.socialProvider||"email",accountType:(o=s.preferredAccountTypes)==null?void 0:o[e||r],isSmartAccountDeployed:!!s.smartAccountDeployed}:void 0}}subscribeAccount(e,i){const s=()=>{const r=this.getAccount(i);r&&e(r)};i?C.subscribeChainProp("accountState",s,i):C.subscribe(s),ie.subscribe(s)}subscribeNetwork(e){return C.subscribe(({activeCaipNetwork:i})=>{e({caipNetwork:i,chainId:i==null?void 0:i.id,caipNetworkId:i==null?void 0:i.caipNetworkId})})}subscribeWalletInfo(e){return de.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){de.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){C.subscribeKey("activeCaipNetwork",e)}getState(){return ds.state}subscribeState(e){return ds.subscribe(e)}showErrorMessage(e){Ke.showError(e)}showSuccessMessage(e){Ke.showSuccess(e)}getEvent(){return{..._e.state}}subscribeEvents(e){return _e.subscribe(e)}replace(e){X.replace(e)}redirect(e){X.push(e)}popTransactionStack(e){X.popTransactionStack(e)}isOpen(){return Ne.state.open}isTransactionStackEmpty(){return X.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=X.state.transactionStack[X.state.transactionStack.length-1])==null?void 0:e.replace}static getInstance(){return this.instance}updateFeatures(e){F.setFeatures(e)}updateOptions(e){const i={...F.state||{},...e};F.setOptions(i)}setConnectMethodsOrder(e){F.setConnectMethodsOrder(e)}setWalletFeaturesOrder(e){F.setWalletFeaturesOrder(e)}setCollapseWallets(e){F.setCollapseWallets(e)}setSocialsOrder(e){F.setSocialsOrder(e)}getConnectMethodsOrder(){return $r.getConnectOrderMethod(F.state.features,ie.getConnectors())}addNetwork(e,i){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);const s=this.extendCaipNetwork(i,this.options);this.getCaipNetworks().find(r=>r.id===s.id)||C.addNetwork(s)}removeNetwork(e,i){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);this.getCaipNetworks().find(s=>s.id===i)&&C.removeNetwork(e,i)}}let gm=!1;class fm extends YI{async open(e){ie.isConnected()||await super.open(e)}async close(){await super.close(),this.options.manualWCControl&&ce.finalizeWcConnection()}async syncIdentity(e){return Promise.resolve()}async syncBalance(e){return Promise.resolve()}async injectModalUi(){if(!gm&&V.isClient()){if(await Promise.resolve().then(function(){return cN}),await Promise.resolve().then(function(){return EN}),!document.querySelector("w3m-modal")){const e=document.createElement("w3m-modal");!F.state.disableAppend&&!F.state.enableEmbedded&&document.body.insertAdjacentElement("beforeend",e)}gm=!0}}}const JI="1.7.3";function XI(t){return new fm({...t,basic:!0,sdkVersion:`html-core-${JI}`})}var QI=Object.freeze({__proto__:null,createAppKit:XI,AppKit:fm}),eA=Object.defineProperty,tA=Object.defineProperties,iA=Object.getOwnPropertyDescriptors,wm=Object.getOwnPropertySymbols,sA=Object.prototype.hasOwnProperty,rA=Object.prototype.propertyIsEnumerable,mm=(t,e,i)=>e in t?eA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,nA=(t,e)=>{for(var i in e||(e={}))sA.call(e,i)&&mm(t,i,e[i]);if(wm)for(var i of wm(e))rA.call(e,i)&&mm(t,i,e[i]);return t},oA=(t,e)=>tA(t,iA(e));function aA(t){if(t)return{"--w3m-font-family":t["--wcm-font-family"],"--w3m-accent":t["--wcm-accent-color"],"--w3m-color-mix":t["--wcm-background-color"],"--w3m-z-index":t["--wcm-z-index"]?Number(t["--wcm-z-index"]):void 0,"--w3m-qr-color":t["--wcm-accent-color"],"--w3m-font-size-master":t["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":t["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const cA=t=>{const[e,i]=t.split(":");return no({id:i,caipNetworkId:t,chainNamespace:e,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function lA(t){var e,i,s,r,o,a,c;const d=(e=t.chains)==null?void 0:e.map(cA).filter(Boolean);if(d.length===0)throw new Error("At least one chain must be specified");const u=d.find(p=>{var g;return p.id===((g=t.defaultChain)==null?void 0:g.id)}),h={projectId:t.projectId,networks:d,themeMode:t.themeMode,themeVariables:aA(t.themeVariables),chainImages:t.chainImages,connectorImages:t.walletImages,defaultNetwork:u,metadata:oA(nA({},t.metadata),{name:((i=t.metadata)==null?void 0:i.name)||"WalletConnect",description:((s=t.metadata)==null?void 0:s.description)||"Connect to WalletConnect-compatible wallets",url:((r=t.metadata)==null?void 0:r.url)||"https://walletconnect.org",icons:((o=t.metadata)==null?void 0:o.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:t.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(t.explorerRecommendedWalletIds)?t.explorerRecommendedWalletIds:[],excludeWalletIds:t.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(t.explorerExcludedWalletIds)?t.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((a=t.mobileWallets)!=null&&a.length||(c=t.desktopWallets)!=null&&c.length){const p=[...(t.mobileWallets||[]).map(v=>({id:v.id,name:v.name,links:v.links})),...(t.desktopWallets||[]).map(v=>({id:v.id,name:v.name,links:{native:v.links.native,universal:v.links.universal}}))],g=[...h.featuredWalletIds||[],...h.excludeWalletIds||[]],f=p.filter(v=>!g.includes(v.id));f.length&&(h.customWallets=f)}return h}var dA=Object.freeze({__proto__:null,convertWCMToAppKitOptions:lA});const uA={attribute:!0,type:String,converter:ml,reflect:!1,hasChanged:Oh},hA=(t=uA,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),s==="accessor"){const{name:a}=i;return{set(c){const d=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,d,t)},init(c){return c!==void 0&&this.C(a,void 0,t,c),c}}}if(s==="setter"){const{name:a}=i;return function(c){const d=this[a];e.call(this,c),this.requestUpdate(a,d,t)}}throw Error("Unsupported decorator location: "+s)};function O(t){return(e,i)=>typeof i=="object"?hA(t,e,i):((s,r,o)=>{const a=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,i)}function re(t){return O({...t,state:!0,attribute:!1})}var pA=pe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,oi=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Mt=class extends ne{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&_t.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&_t.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&_t.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&_t.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&_t.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&_t.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&_t.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&_t.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};Mt.styles=[Be,pA],oi([O()],Mt.prototype,"flexDirection",void 0),oi([O()],Mt.prototype,"flexWrap",void 0),oi([O()],Mt.prototype,"flexBasis",void 0),oi([O()],Mt.prototype,"flexGrow",void 0),oi([O()],Mt.prototype,"flexShrink",void 0),oi([O()],Mt.prototype,"alignItems",void 0),oi([O()],Mt.prototype,"justifyContent",void 0),oi([O()],Mt.prototype,"columnGap",void 0),oi([O()],Mt.prototype,"rowGap",void 0),oi([O()],Mt.prototype,"gap",void 0),oi([O()],Mt.prototype,"padding",void 0),oi([O()],Mt.prototype,"margin",void 0),Mt=oi([se("wui-flex")],Mt);const ge=t=>t??nt;const gA=t=>t===null||typeof t!="object"&&typeof t!="function",fA=t=>t.strings===void 0;const vm={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},op=t=>(...e)=>({_$litDirective$:t,values:e});class ym{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}const Ua=(t,e)=>{var s;const i=t._$AN;if(i===void 0)return!1;for(const r of i)(s=r._$AO)==null||s.call(r,e,!1),Ua(r,e);return!0},Ll=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},bm=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),vA(e)}};function wA(t){this._$AN!==void 0?(Ll(this),this._$AM=t,bm(this)):this._$AM=t}function mA(t,e=!1,i=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=i;o<s.length;o++)Ua(s[o],!1),Ll(s[o]);else s!=null&&(Ua(s,!1),Ll(s));else Ua(this,t)}const vA=t=>{t.type==vm.CHILD&&(t._$AP??(t._$AP=mA),t._$AQ??(t._$AQ=wA))};class _m extends ym{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),bm(this),this.isConnected=e._$AU}_$AO(e,i=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Ua(this,e),Ll(this))}setValue(e){if(fA(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}class yA{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class bA{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}const xm=t=>!gA(t)&&typeof t.then=="function",Cm=1073741823;class _A extends _m{constructor(){super(...arguments),this._$Cwt=Cm,this._$Cbt=[],this._$CK=new yA(this),this._$CX=new bA}render(...e){return e.find(i=>!xm(i))??bs}update(e,i){const s=this._$Cbt;let r=s.length;this._$Cbt=i;const o=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const d=i[c];if(!xm(d))return this._$Cwt=c,d;c<r&&d===s[c]||(this._$Cwt=Cm,r=0,Promise.resolve(d).then(async u=>{for(;a.get();)await a.get();const h=o.deref();if(h!==void 0){const p=h._$Cbt.indexOf(d);p>-1&&p<h._$Cwt&&(h._$Cwt=p,h.setValue(u))}}))}return bs}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const xA=op(_A);class CA{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const ap=new CA;var EA=pe`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,Ma=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const Em={add:async()=>(await Promise.resolve().then(function(){return AN})).addSvg,allWallets:async()=>(await Promise.resolve().then(function(){return NN})).allWalletsSvg,arrowBottomCircle:async()=>(await Promise.resolve().then(function(){return kN})).arrowBottomCircleSvg,appStore:async()=>(await Promise.resolve().then(function(){return TN})).appStoreSvg,apple:async()=>(await Promise.resolve().then(function(){return $N})).appleSvg,arrowBottom:async()=>(await Promise.resolve().then(function(){return BN})).arrowBottomSvg,arrowLeft:async()=>(await Promise.resolve().then(function(){return MN})).arrowLeftSvg,arrowRight:async()=>(await Promise.resolve().then(function(){return jN})).arrowRightSvg,arrowTop:async()=>(await Promise.resolve().then(function(){return FN})).arrowTopSvg,bank:async()=>(await Promise.resolve().then(function(){return qN})).bankSvg,browser:async()=>(await Promise.resolve().then(function(){return VN})).browserSvg,card:async()=>(await Promise.resolve().then(function(){return GN})).cardSvg,checkmark:async()=>(await Promise.resolve().then(function(){return YN})).checkmarkSvg,checkmarkBold:async()=>(await Promise.resolve().then(function(){return XN})).checkmarkBoldSvg,chevronBottom:async()=>(await Promise.resolve().then(function(){return eP})).chevronBottomSvg,chevronLeft:async()=>(await Promise.resolve().then(function(){return iP})).chevronLeftSvg,chevronRight:async()=>(await Promise.resolve().then(function(){return rP})).chevronRightSvg,chevronTop:async()=>(await Promise.resolve().then(function(){return oP})).chevronTopSvg,chromeStore:async()=>(await Promise.resolve().then(function(){return cP})).chromeStoreSvg,clock:async()=>(await Promise.resolve().then(function(){return dP})).clockSvg,close:async()=>(await Promise.resolve().then(function(){return hP})).closeSvg,compass:async()=>(await Promise.resolve().then(function(){return gP})).compassSvg,coinPlaceholder:async()=>(await Promise.resolve().then(function(){return wP})).coinPlaceholderSvg,copy:async()=>(await Promise.resolve().then(function(){return vP})).copySvg,cursor:async()=>(await Promise.resolve().then(function(){return bP})).cursorSvg,cursorTransparent:async()=>(await Promise.resolve().then(function(){return xP})).cursorTransparentSvg,desktop:async()=>(await Promise.resolve().then(function(){return EP})).desktopSvg,disconnect:async()=>(await Promise.resolve().then(function(){return AP})).disconnectSvg,discord:async()=>(await Promise.resolve().then(function(){return NP})).discordSvg,etherscan:async()=>(await Promise.resolve().then(function(){return kP})).etherscanSvg,extension:async()=>(await Promise.resolve().then(function(){return TP})).extensionSvg,externalLink:async()=>(await Promise.resolve().then(function(){return $P})).externalLinkSvg,facebook:async()=>(await Promise.resolve().then(function(){return BP})).facebookSvg,farcaster:async()=>(await Promise.resolve().then(function(){return MP})).farcasterSvg,filters:async()=>(await Promise.resolve().then(function(){return jP})).filtersSvg,github:async()=>(await Promise.resolve().then(function(){return FP})).githubSvg,google:async()=>(await Promise.resolve().then(function(){return qP})).googleSvg,helpCircle:async()=>(await Promise.resolve().then(function(){return VP})).helpCircleSvg,image:async()=>(await Promise.resolve().then(function(){return GP})).imageSvg,id:async()=>(await Promise.resolve().then(function(){return YP})).idSvg,infoCircle:async()=>(await Promise.resolve().then(function(){return XP})).infoCircleSvg,lightbulb:async()=>(await Promise.resolve().then(function(){return ek})).lightbulbSvg,mail:async()=>(await Promise.resolve().then(function(){return ik})).mailSvg,mobile:async()=>(await Promise.resolve().then(function(){return rk})).mobileSvg,more:async()=>(await Promise.resolve().then(function(){return ok})).moreSvg,networkPlaceholder:async()=>(await Promise.resolve().then(function(){return ck})).networkPlaceholderSvg,nftPlaceholder:async()=>(await Promise.resolve().then(function(){return dk})).nftPlaceholderSvg,off:async()=>(await Promise.resolve().then(function(){return hk})).offSvg,playStore:async()=>(await Promise.resolve().then(function(){return gk})).playStoreSvg,plus:async()=>(await Promise.resolve().then(function(){return wk})).plusSvg,qrCode:async()=>(await Promise.resolve().then(function(){return vk})).qrCodeIcon,recycleHorizontal:async()=>(await Promise.resolve().then(function(){return bk})).recycleHorizontalSvg,refresh:async()=>(await Promise.resolve().then(function(){return xk})).refreshSvg,search:async()=>(await Promise.resolve().then(function(){return Ek})).searchSvg,send:async()=>(await Promise.resolve().then(function(){return Ak})).sendSvg,swapHorizontal:async()=>(await Promise.resolve().then(function(){return Nk})).swapHorizontalSvg,swapHorizontalMedium:async()=>(await Promise.resolve().then(function(){return kk})).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await Promise.resolve().then(function(){return Tk})).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await Promise.resolve().then(function(){return $k})).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await Promise.resolve().then(function(){return Bk})).swapVerticalSvg,telegram:async()=>(await Promise.resolve().then(function(){return Mk})).telegramSvg,threeDots:async()=>(await Promise.resolve().then(function(){return jk})).threeDotsSvg,twitch:async()=>(await Promise.resolve().then(function(){return Fk})).twitchSvg,twitter:async()=>(await Promise.resolve().then(function(){return uv})).xSvg,twitterIcon:async()=>(await Promise.resolve().then(function(){return Wk})).twitterIconSvg,verify:async()=>(await Promise.resolve().then(function(){return Kk})).verifySvg,verifyFilled:async()=>(await Promise.resolve().then(function(){return Zk})).verifyFilledSvg,wallet:async()=>(await Promise.resolve().then(function(){return Jk})).walletSvg,walletConnect:async()=>(await Promise.resolve().then(function(){return Hp})).walletConnectSvg,walletConnectLightBrown:async()=>(await Promise.resolve().then(function(){return Hp})).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await Promise.resolve().then(function(){return Hp})).walletConnectBrownSvg,walletPlaceholder:async()=>(await Promise.resolve().then(function(){return iO})).walletPlaceholderSvg,warningCircle:async()=>(await Promise.resolve().then(function(){return rO})).warningCircleSvg,x:async()=>(await Promise.resolve().then(function(){return uv})).xSvg,info:async()=>(await Promise.resolve().then(function(){return oO})).infoSvg,exclamationTriangle:async()=>(await Promise.resolve().then(function(){return cO})).exclamationTriangleSvg,reown:async()=>(await Promise.resolve().then(function(){return dO})).reownSvg};async function IA(t){if(ap.has(t))return ap.get(t);const e=(Em[t]??Em.copy)();return ap.set(t,e),e}let Dr=class extends ne{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${xA(IA(this.name),S`<div class="fallback"></div>`)}`}};Dr.styles=[Be,Ra,EA],Ma([O()],Dr.prototype,"size",void 0),Ma([O()],Dr.prototype,"name",void 0),Ma([O()],Dr.prototype,"color",void 0),Ma([O()],Dr.prototype,"aspectRatio",void 0),Dr=Ma([se("wui-icon")],Dr);const Im=op(class extends ym{constructor(t){var e;if(super(t),t.type!==vm.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(e)}const i=t.element.classList;for(const o of this.st)o in e||(i.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(a?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return bs}});var AA=pe`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,Da=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let jr=class extends ne{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${Im(t)}></slot>`}};jr.styles=[Be,AA],Da([O()],jr.prototype,"variant",void 0),Da([O()],jr.prototype,"color",void 0),Da([O()],jr.prototype,"align",void 0),Da([O()],jr.prototype,"lineClamp",void 0),jr=Da([se("wui-text")],jr);var SA=pe`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,_s=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let $i=class extends ne{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e=this.size==="lg",i=this.size==="xl",s=e?"12%":"16%",r=e?"xxs":i?"s":"3xl",o=this.background==="gray",a=this.background==="opaque",c=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let d=`var(--wui-color-${this.backgroundColor})`;return c?d=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(d=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${d};
       --local-bg-mix: ${c||o?"100%":s};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,S` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};$i.styles=[Be,St,SA],_s([O()],$i.prototype,"size",void 0),_s([O()],$i.prototype,"backgroundColor",void 0),_s([O()],$i.prototype,"iconColor",void 0),_s([O()],$i.prototype,"iconSize",void 0),_s([O()],$i.prototype,"background",void 0),_s([O({type:Boolean})],$i.prototype,"border",void 0),_s([O()],$i.prototype,"borderColor",void 0),_s([O()],$i.prototype,"icon",void 0),$i=_s([se("wui-icon-box")],$i);var NA=pe`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,Bl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let oo=class extends ne{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,S`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};oo.styles=[Be,Ra,NA],Bl([O()],oo.prototype,"src",void 0),Bl([O()],oo.prototype,"alt",void 0),Bl([O()],oo.prototype,"size",void 0),oo=Bl([se("wui-image")],oo);var PA=pe`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,zr=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let xs=class extends ne{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),S`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?S`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?S`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:S`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};xs.styles=[St,Be,PA],zr([O()],xs.prototype,"size",void 0),zr([O()],xs.prototype,"name",void 0),zr([O()],xs.prototype,"imageSrc",void 0),zr([O()],xs.prototype,"walletIcon",void 0),zr([O({type:Boolean})],xs.prototype,"installed",void 0),zr([O()],xs.prototype,"badgeSize",void 0),xs=zr([se("wui-wallet-image")],xs);var kA=pe`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,Am=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const cp=4;let Ul=class extends ne{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<cp;return S`${this.walletImages.slice(0,cp).map(({src:e,walletName:i})=>S`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${ge(i)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(cp-this.walletImages.length)].map(()=>S` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Ul.styles=[Be,kA],Am([O({type:Array})],Ul.prototype,"walletImages",void 0),Ul=Am([se("wui-all-wallets-image")],Ul);var OA=pe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,lp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ja=class extends ne{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return S`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};ja.styles=[Be,OA],lp([O()],ja.prototype,"variant",void 0),lp([O()],ja.prototype,"size",void 0),ja=lp([se("wui-tag")],ja);var TA=pe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,Zt=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Tt=class extends ne{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return S`
      <button ?disabled=${this.disabled} tabindex=${ge(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?S` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?S` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?S`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?S`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?S`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?S`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?S`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Tt.styles=[Be,St,TA],Zt([O({type:Array})],Tt.prototype,"walletImages",void 0),Zt([O()],Tt.prototype,"imageSrc",void 0),Zt([O()],Tt.prototype,"name",void 0),Zt([O()],Tt.prototype,"tagLabel",void 0),Zt([O()],Tt.prototype,"tagVariant",void 0),Zt([O()],Tt.prototype,"icon",void 0),Zt([O()],Tt.prototype,"walletIcon",void 0),Zt([O()],Tt.prototype,"tabIdx",void 0),Zt([O({type:Boolean})],Tt.prototype,"installed",void 0),Zt([O({type:Boolean})],Tt.prototype,"disabled",void 0),Zt([O({type:Boolean})],Tt.prototype,"showAllWallets",void 0),Zt([O({type:Boolean})],Tt.prototype,"loading",void 0),Zt([O({type:String})],Tt.prototype,"loadingSpinnerColor",void 0),Tt=Zt([se("wui-list-wallet")],Tt);var za=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ao=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.count=ee.state.count,this.isFetchingRecommendedWallets=ee.state.isFetchingRecommendedWallets,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t),ee.subscribeKey("count",t=>this.count=t),ee.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(a=>a.id==="walletConnect"),{allWallets:e}=F.state;if(!t||e==="HIDE"||e==="ONLY_MOBILE"&&!V.isMobile())return null;const i=ee.state.featured.length,s=this.count+i,r=s<10?s:Math.floor(s/10)*10,o=r<s?`${r}+`:`${r}`;return S`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${ge(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){_e.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),X.push("AllWallets")}};za([O()],ao.prototype,"tabIdx",void 0),za([re()],ao.prototype,"connectors",void 0),za([re()],ao.prototype,"count",void 0),za([re()],ao.prototype,"isFetchingRecommendedWallets",void 0),ao=za([se("w3m-all-wallets-widget")],ao);var dp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ml=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="ANNOUNCED");return t!=null&&t.length?S`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(ys.showConnector).map(e=>S`
              <wui-list-wallet
                imageSrc=${ge(dt.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${ge(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?V.isMobile()?X.push("AllWallets"):X.push("ConnectingWalletConnect"):X.push("ConnectingExternal",{connector:t})}};dp([O()],Ml.prototype,"tabIdx",void 0),dp([re()],Ml.prototype,"connectors",void 0),Ml=dp([se("w3m-connect-announced-widget")],Ml);var Dl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Fa=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.loading=!1,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t)),V.isTelegram()&&V.isIos()&&(this.loading=!ce.state.wcUri,this.unsubscribe.push(ce.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=F.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return S`<wui-flex flexDirection="column" gap="xs">
      ${e.map(i=>S`
          <wui-list-wallet
            imageSrc=${ge(dt.getWalletImage(i))}
            name=${i.name??"Unknown"}
            @click=${()=>this.onConnectWallet(i)}
            data-testid=${`wallet-selector-${i.id}`}
            tabIdx=${ge(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=ae.getRecentWallets(),i=this.connectors.map(o=>{var a;return(a=o.info)==null?void 0:a.rdns}).filter(Boolean),s=e.map(o=>o.rdns).filter(Boolean),r=i.concat(s);if(r.includes("io.metamask.mobile")&&V.isMobile()){const o=r.indexOf("io.metamask.mobile");r[o]="io.metamask"}return t.filter(o=>!r.includes(String(o==null?void 0:o.rdns)))}onConnectWallet(t){this.loading||X.push("ConnectingWalletConnect",{wallet:t})}};Dl([O()],Fa.prototype,"tabIdx",void 0),Dl([re()],Fa.prototype,"connectors",void 0),Dl([re()],Fa.prototype,"loading",void 0),Fa=Dl([se("w3m-connect-custom-widget")],Fa);var up=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let jl=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="EXTERNAL").filter(ys.showConnector).filter(e=>e.id!==oe.CONNECTOR_ID.COINBASE_SDK);return t!=null&&t.length?S`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>S`
            <wui-list-wallet
              imageSrc=${ge(dt.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${ge(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){X.push("ConnectingExternal",{connector:t})}};up([O()],jl.prototype,"tabIdx",void 0),up([re()],jl.prototype,"connectors",void 0),jl=up([se("w3m-connect-external-widget")],jl);var hp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let zl=class extends ne{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?S`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>S`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${ge(dt.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${ge(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){ie.selectWalletConnector(t)}};hp([O()],zl.prototype,"tabIdx",void 0),hp([O()],zl.prototype,"wallets",void 0),zl=hp([se("w3m-connect-featured-widget")],zl);var pp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Fl=class extends ne{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var e;const t=this.connectors;return!(t!=null&&t.length)||t.length===1&&((e=t[0])==null?void 0:e.name)==="Browser Wallet"&&!V.isMobile()?(this.style.cssText="display: none",null):S`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(i=>{var r;const s=(r=i.info)==null?void 0:r.rdns;return!V.isMobile()&&i.name==="Browser Wallet"?null:!s&&!ce.checkInstalled()?(this.style.cssText="display: none",null):ys.showConnector(i)?S`
            <wui-list-wallet
              imageSrc=${ge(dt.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${ge(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(t){ie.setActiveConnector(t),X.push("ConnectingExternal",{connector:t})}};pp([O()],Fl.prototype,"tabIdx",void 0),pp([O()],Fl.prototype,"connectors",void 0),Fl=pp([se("w3m-connect-injected-widget")],Fl);var gp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Hl=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="MULTI_CHAIN"&&e.name!=="WalletConnect");return t!=null&&t.length?S`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>S`
            <wui-list-wallet
              imageSrc=${ge(dt.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${ge(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){ie.setActiveConnector(t),X.push("ConnectingMultiChain")}};gp([O()],Hl.prototype,"tabIdx",void 0),gp([re()],Hl.prototype,"connectors",void 0),Hl=gp([se("w3m-connect-multi-chain-widget")],Hl);var ql=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ha=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.loading=!1,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t)),V.isTelegram()&&V.isIos()&&(this.loading=!ce.state.wcUri,this.unsubscribe.push(ce.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=ae.getRecentWallets().filter(e=>!$r.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));return t.length?S`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>S`
            <wui-list-wallet
              imageSrc=${ge(dt.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${ge(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||ie.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){const e=C.state.activeChain;return e&&t.chains?t.chains.some(i=>{const s=i.split(":")[0];return e===s}):!0}};ql([O()],Ha.prototype,"tabIdx",void 0),ql([re()],Ha.prototype,"connectors",void 0),ql([re()],Ha.prototype,"loading",void 0),Ha=ql([se("w3m-connect-recent-widget")],Ha);var Wl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let qa=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,V.isTelegram()&&V.isIos()&&(this.loading=!ce.state.wcUri,this.unsubscribe.push(ce.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=ie.state,{customWallets:e,featuredWalletIds:i}=F.state,s=ae.getRecentWallets(),r=t.find(u=>u.id==="walletConnect"),o=t.filter(u=>u.type==="INJECTED"||u.type==="ANNOUNCED"||u.type==="MULTI_CHAIN").filter(u=>u.name!=="Browser Wallet");if(!r)return null;if(i||e||!this.wallets.length)return this.style.cssText="display: none",null;const a=o.length+s.length,c=Math.max(0,2-a),d=$r.filterOutDuplicateWallets(this.wallets).slice(0,c);return d.length?S`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(u=>S`
            <wui-list-wallet
              imageSrc=${ge(dt.getWalletImage(u))}
              name=${(u==null?void 0:u.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(u)}
              tabIdx=${ge(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=ie.getConnector(t.id,t.rdns);e?X.push("ConnectingExternal",{connector:e}):X.push("ConnectingWalletConnect",{wallet:t})}};Wl([O()],qa.prototype,"tabIdx",void 0),Wl([O()],qa.prototype,"wallets",void 0),Wl([re()],qa.prototype,"loading",void 0),qa=Wl([se("w3m-connect-recommended-widget")],qa);var Vl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Wa=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.connectorImages=qt.state.connectorImages,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t),qt.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(V.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(i=>i.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return S`
      <wui-list-wallet
        imageSrc=${ge(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${ge(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){ie.setActiveConnector(t),X.push("ConnectingWalletConnect")}};Vl([O()],Wa.prototype,"tabIdx",void 0),Vl([re()],Wa.prototype,"connectors",void 0),Vl([re()],Wa.prototype,"connectorImages",void 0),Wa=Vl([se("w3m-connect-walletconnect-widget")],Wa);var RA=pe`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Va=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Fr=class extends ne{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ie.state.connectors,this.recommended=ee.state.recommended,this.featured=ee.state.featured,this.unsubscribe.push(ie.subscribeKey("connectors",t=>this.connectors=t),ee.subscribeKey("recommended",t=>this.recommended=t),ee.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return S`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:i,injected:s,multiChain:r,recommended:o,featured:a,external:c}=ys.getConnectorsByType(this.connectors,this.recommended,this.featured);return ys.getConnectorTypeOrder({custom:t,recent:e,announced:i,injected:s,multiChain:r,recommended:o,featured:a,external:c}).map(d=>{switch(d){case"injected":return S`
            ${r.length?S`<w3m-connect-multi-chain-widget
                  tabIdx=${ge(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?S`<w3m-connect-announced-widget
                  tabIdx=${ge(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${s.length?S`<w3m-connect-injected-widget
                  .connectors=${s}
                  tabIdx=${ge(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return S`<w3m-connect-walletconnect-widget
            tabIdx=${ge(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return S`<w3m-connect-recent-widget
            tabIdx=${ge(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return S`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${ge(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return S`<w3m-connect-custom-widget
            tabIdx=${ge(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return S`<w3m-connect-external-widget
            tabIdx=${ge(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return S`<w3m-connect-recommended-widget
            .wallets=${o}
            tabIdx=${ge(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${d}`),null}})}};Fr.styles=RA,Va([O()],Fr.prototype,"tabIdx",void 0),Va([re()],Fr.prototype,"connectors",void 0),Va([re()],Fr.prototype,"recommended",void 0),Va([re()],Fr.prototype,"featured",void 0),Fr=Va([se("w3m-connector-list")],Fr);var $A=pe`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Ys=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ki=class extends ne{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var s;const i=e===this.activeTab;return S`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${i}
          data-testid="tab-${(s=t.label)==null?void 0:s.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?S`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const i=this.buttons[this.activeTab],s=this.buttons[t],r=i==null?void 0:i.querySelector("wui-text"),o=s==null?void 0:s.querySelector("wui-text"),a=s==null?void 0:s.getBoundingClientRect(),c=o==null?void 0:o.getBoundingClientRect();i&&r&&!e&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),s&&a&&c&&o&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,s.animate([{width:`${a.width+c.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};Ki.styles=[Be,St,$A],Ys([O({type:Array})],Ki.prototype,"tabs",void 0),Ys([O()],Ki.prototype,"onTabChange",void 0),Ys([O({type:Array})],Ki.prototype,"buttons",void 0),Ys([O({type:Boolean})],Ki.prototype,"disabled",void 0),Ys([O()],Ki.prototype,"localTabWidth",void 0),Ys([re()],Ki.prototype,"activeTab",void 0),Ys([re()],Ki.prototype,"isDense",void 0),Ki=Ys([se("wui-tabs")],Ki);var Kl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ka=class extends ne{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ce.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return S`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(e=>e==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:e==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:e==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:e==="web"?{label:"Webapp",icon:"browser",platform:"web"}:e==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:e})=>e),t}onTabChange(t){var i;const e=this.platformTabs[t];e&&((i=this.onSelectPlatfrom)==null||i.call(this,e))}};Kl([O({type:Array})],Ka.prototype,"platforms",void 0),Kl([O()],Ka.prototype,"onSelectPlatfrom",void 0),Kl([re()],Ka.prototype,"buffering",void 0),Ka=Kl([se("w3m-connecting-header")],Ka);var LA=pe`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,fp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ga=class extends ne{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,S`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Ga.styles=[Be,LA],fp([O()],Ga.prototype,"color",void 0),fp([O()],Ga.prototype,"size",void 0),Ga=fp([se("wui-loading-spinner")],Ga);var BA=pe`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,Gi=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const Sm={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},UA={lg:"paragraph-600",md:"small-600"},MA={lg:"md",md:"md"};let yi=class extends ne{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??UA[this.size];return S`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=MA[this.size],e=this.disabled?Sm.disabled:Sm[this.variant];return S`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return S``}};yi.styles=[Be,St,BA],Gi([O()],yi.prototype,"size",void 0),Gi([O({type:Boolean})],yi.prototype,"disabled",void 0),Gi([O({type:Boolean})],yi.prototype,"fullWidth",void 0),Gi([O({type:Boolean})],yi.prototype,"loading",void 0),Gi([O()],yi.prototype,"variant",void 0),Gi([O({type:Boolean})],yi.prototype,"hasIconLeft",void 0),Gi([O({type:Boolean})],yi.prototype,"hasIconRight",void 0),Gi([O()],yi.prototype,"borderRadius",void 0),Gi([O()],yi.prototype,"textVariant",void 0),yi=Gi([se("wui-button")],yi);var DA=pe`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,Gl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let co=class extends ne{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return S`
      <button ?disabled=${this.disabled} tabindex=${ge(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};co.styles=[Be,St,DA],Gl([O()],co.prototype,"tabIdx",void 0),Gl([O({type:Boolean})],co.prototype,"disabled",void 0),Gl([O()],co.prototype,"color",void 0),co=Gl([se("wui-link")],co);var jA=pe`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Nm=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Zl=class extends ne{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,i=116+e,s=245+e,r=360+e*1.75;return S`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${s}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};Zl.styles=[Be,jA],Nm([O({type:Number})],Zl.prototype,"radius",void 0),Zl=Nm([se("wui-loading-thumbnail")],Zl);var zA=pe`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,Hr=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Cs=class extends ne{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return S`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?S`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Cs.styles=[Be,St,zA],Hr([O()],Cs.prototype,"variant",void 0),Hr([O()],Cs.prototype,"imageSrc",void 0),Hr([O({type:Boolean})],Cs.prototype,"disabled",void 0),Hr([O()],Cs.prototype,"icon",void 0),Hr([O()],Cs.prototype,"size",void 0),Hr([O()],Cs.prototype,"text",void 0),Cs=Hr([se("wui-chip-button")],Cs);var FA=pe`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,Yl=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let lo=class extends ne{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return S`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};lo.styles=[Be,St,FA],Yl([O({type:Boolean})],lo.prototype,"disabled",void 0),Yl([O()],lo.prototype,"label",void 0),Yl([O()],lo.prototype,"buttonLabel",void 0),lo=Yl([se("wui-cta-button")],lo);var HA=pe`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Pm=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Jl=class extends ne{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:i,chrome_store:s,homepage:r}=this.wallet,o=V.isMobile(),a=V.isIos(),c=V.isAndroid(),d=[e,i,r,s].filter(Boolean).length>1,u=_t.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return d&&!o?S`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>X.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&r?S`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&a?S`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&c?S`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&V.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&V.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&V.openHref(this.wallet.homepage,"_blank")}};Jl.styles=[HA],Pm([O({type:Object})],Jl.prototype,"wallet",void 0),Jl=Pm([se("w3m-mobile-download-links")],Jl);var qA=pe`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Li=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};class Nt extends ne{constructor(){var e,i,s,r,o;super(),this.wallet=(e=X.state.data)==null?void 0:e.wallet,this.connector=(i=X.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=dt.getWalletImage(this.wallet)??dt.getConnectorImage(this.connector),this.name=((s=this.wallet)==null?void 0:s.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=ce.state.wcUri,this.error=ce.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ce.subscribeKey("wcUri",a=>{var c;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(c=this.onConnect)==null||c.call(this))}),ce.subscribeKey("wcError",a=>this.error=a),ce.subscribeKey("buffering",a=>this.buffering=a)),(V.isTelegram()||V.isSafari())&&V.isIos()&&ce.state.wcUri&&((o=this.onConnect)==null||o.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var s;(s=this.onRender)==null||s.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.buffering&&(i="Connecting..."),this.error&&(i="Connection declined"),S`
      <wui-flex
        data-error=${ge(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ge(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?S`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?S`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e,i;this.error&&!this.showRetry&&(this.showRetry=!0,(i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button"))==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,i;this.buffering||(ce.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this))}loaderTemplate(){const e=ut.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return S`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(V.copyToClopboard(this.uri),Ke.showSuccess("Link copied"))}catch{Ke.showError("Failed to copy")}}}Nt.styles=qA,Li([re()],Nt.prototype,"isRetrying",void 0),Li([re()],Nt.prototype,"uri",void 0),Li([re()],Nt.prototype,"error",void 0),Li([re()],Nt.prototype,"ready",void 0),Li([re()],Nt.prototype,"showRetry",void 0),Li([re()],Nt.prototype,"secondaryBtnLabel",void 0),Li([re()],Nt.prototype,"secondaryLabel",void 0),Li([re()],Nt.prototype,"buffering",void 0),Li([re()],Nt.prototype,"isLoading",void 0),Li([O({type:Boolean})],Nt.prototype,"isMobile",void 0),Li([O()],Nt.prototype,"onRetry",void 0);var WA=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let km=class extends Nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),_e.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=ie.state,i=e.find(s=>{var r,o,a;return s.type==="ANNOUNCED"&&((r=s.info)==null?void 0:r.rdns)===((o=this.wallet)==null?void 0:o.rdns)||s.type==="INJECTED"||s.name===((a=this.wallet)==null?void 0:a.name)});if(i)await ce.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Ne.close(),_e.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(e){_e.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};km=WA([se("w3m-connecting-wc-browser")],km);var VA=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Om=class extends Nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),_e.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:i}=this.wallet,{redirect:s,href:r}=V.formatNativeUrl(e,this.uri);ce.setWcLinking({name:i,href:r}),ce.setRecentWallet(this.wallet),V.openHref(s,"_blank")}catch{this.error=!0}}};Om=VA([se("w3m-connecting-wc-desktop")],Om);var KA=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Tm=class extends Nt{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))},this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:i}=this.wallet,{redirect:s,href:r}=V.formatNativeUrl(e,this.uri);ce.setWcLinking({name:i,href:r}),ce.setRecentWallet(this.wallet);const o=V.isIframe()?"_top":"_self";V.openHref(s,o),clearTimeout(this.labelTimeout),this.secondaryLabel=lt.CONNECT_LABELS.MOBILE}catch(e){_e.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),_e.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=lt.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=lt.CONNECT_LABELS.MOBILE},lt.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},lt.THREE_SEC_MS)}onBuffering(){const t=V.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(ce.setBuffering(!0),setTimeout(()=>{ce.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),ce.setWcError(!1),this.onConnect())}};Tm=KA([se("w3m-connecting-wc-mobile")],Tm);var Za={},GA=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Rm={},ai={};let wp;const ZA=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ai.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17},ai.getSymbolTotalCodewords=function(t){return ZA[t]},ai.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e},ai.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');wp=t},ai.isKanjiModeEnabled=function(){return typeof wp<"u"},ai.toSJIS=function(t){return wp(t)};var Xl={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},t.from=function(i,s){if(t.isValid(i))return i;try{return e(i)}catch{return s}}})(Xl);function $m(){this.buffer=[],this.length=0}$m.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var YA=$m;function Ya(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Ya.prototype.set=function(t,e,i,s){const r=t*this.size+e;this.data[r]=i,s&&(this.reservedBit[r]=!0)},Ya.prototype.get=function(t,e){return this.data[t*this.size+e]},Ya.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i},Ya.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var JA=Ya,Lm={};(function(t){const e=ai.getSymbolSize;t.getRowColCoords=function(i){if(i===1)return[];const s=Math.floor(i/7)+2,r=e(i),o=r===145?26:Math.ceil((r-13)/(2*s-2))*2,a=[r-7];for(let c=1;c<s-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(i){const s=[],r=t.getRowColCoords(i),o=r.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||s.push([r[a],r[c]]);return s}})(Lm);var Bm={};const XA=ai.getSymbolSize,Um=7;Bm.getPositions=function(t){const e=XA(t);return[[0,0],[e-Um,0],[0,e-Um]]};var Mm={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},t.from=function(s){return t.isValid(s)?parseInt(s,10):void 0},t.getPenaltyN1=function(s){const r=s.size;let o=0,a=0,c=0,d=null,u=null;for(let h=0;h<r;h++){a=c=0,d=u=null;for(let p=0;p<r;p++){let g=s.get(h,p);g===d?a++:(a>=5&&(o+=e.N1+(a-5)),d=g,a=1),g=s.get(p,h),g===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=g,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(s){const r=s.size;let o=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const d=s.get(a,c)+s.get(a,c+1)+s.get(a+1,c)+s.get(a+1,c+1);(d===4||d===0)&&o++}return o*e.N2},t.getPenaltyN3=function(s){const r=s.size;let o=0,a=0,c=0;for(let d=0;d<r;d++){a=c=0;for(let u=0;u<r;u++)a=a<<1&2047|s.get(d,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|s.get(u,d),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(s){let r=0;const o=s.data.length;for(let a=0;a<o;a++)r+=s.data[a];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function i(s,r,o){switch(s){case t.Patterns.PATTERN000:return(r+o)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(r+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return r*o%2+r*o%3===0;case t.Patterns.PATTERN110:return(r*o%2+r*o%3)%2===0;case t.Patterns.PATTERN111:return(r*o%3+(r+o)%2)%2===0;default:throw new Error("bad maskPattern:"+s)}}t.applyMask=function(s,r){const o=r.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)r.isReserved(c,a)||r.xor(c,a,i(s,c,a))},t.getBestMask=function(s,r){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let d=0;d<o;d++){r(d),t.applyMask(d,s);const u=t.getPenaltyN1(s)+t.getPenaltyN2(s)+t.getPenaltyN3(s)+t.getPenaltyN4(s);t.applyMask(d,s),u<c&&(c=u,a=d)}return a}})(Mm);var Ql={};const Js=Xl,ed=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],td=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ql.getBlocksCount=function(t,e){switch(e){case Js.L:return ed[(t-1)*4+0];case Js.M:return ed[(t-1)*4+1];case Js.Q:return ed[(t-1)*4+2];case Js.H:return ed[(t-1)*4+3];default:return}},Ql.getTotalCodewordsCount=function(t,e){switch(e){case Js.L:return td[(t-1)*4+0];case Js.M:return td[(t-1)*4+1];case Js.Q:return td[(t-1)*4+2];case Js.H:return td[(t-1)*4+3];default:return}};var Dm={},id={};const Ja=new Uint8Array(512),sd=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)Ja[e]=t,sd[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)Ja[e]=Ja[e-255]})(),id.log=function(t){if(t<1)throw new Error("log("+t+")");return sd[t]},id.exp=function(t){return Ja[t]},id.mul=function(t,e){return t===0||e===0?0:Ja[sd[t]+sd[e]]},function(t){const e=id;t.mul=function(i,s){const r=new Uint8Array(i.length+s.length-1);for(let o=0;o<i.length;o++)for(let a=0;a<s.length;a++)r[o+a]^=e.mul(i[o],s[a]);return r},t.mod=function(i,s){let r=new Uint8Array(i);for(;r.length-s.length>=0;){const o=r[0];for(let c=0;c<s.length;c++)r[c]^=e.mul(s[c],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},t.generateECPolynomial=function(i){let s=new Uint8Array([1]);for(let r=0;r<i;r++)s=t.mul(s,new Uint8Array([1,e.exp(r)]));return s}}(Dm);const jm=Dm;function mp(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}mp.prototype.initialize=function(t){this.degree=t,this.genPoly=jm.generateECPolynomial(this.degree)},mp.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=jm.mod(e,this.genPoly),s=this.degree-i.length;if(s>0){const r=new Uint8Array(this.degree);return r.set(i,s),r}return i};var QA=mp,zm={},Xs={},vp={};vp.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Zi={};const Fm="[0-9]+",eS="[A-Z $%*+\\-./:]+";let Xa="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Xa=Xa.replace(/u/g,"\\u");const tS="(?:(?![A-Z0-9 $%*+\\-./:]|"+Xa+`)(?:.|[\r
]))+`;Zi.KANJI=new RegExp(Xa,"g"),Zi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Zi.BYTE=new RegExp(tS,"g"),Zi.NUMERIC=new RegExp(Fm,"g"),Zi.ALPHANUMERIC=new RegExp(eS,"g");const iS=new RegExp("^"+Xa+"$"),sS=new RegExp("^"+Fm+"$"),rS=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Zi.testKanji=function(t){return iS.test(t)},Zi.testNumeric=function(t){return sS.test(t)},Zi.testAlphanumeric=function(t){return rS.test(t)},function(t){const e=vp,i=Zi;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},t.getBestModeForData=function(r){return i.testNumeric(r)?t.NUMERIC:i.testAlphanumeric(r)?t.ALPHANUMERIC:i.testKanji(r)?t.KANJI:t.BYTE},t.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},t.isValid=function(r){return r&&r.bit&&r.ccBits};function s(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(r,o){if(t.isValid(r))return r;try{return s(r)}catch{return o}}}(Xs),function(t){const e=ai,i=Ql,s=Xl,r=Xs,o=vp,a=7973,c=e.getBCHDigit(a);function d(g,f,v){for(let w=1;w<=40;w++)if(f<=t.getCapacity(w,v,g))return w}function u(g,f){return r.getCharCountIndicator(g,f)+4}function h(g,f){let v=0;return g.forEach(function(w){const m=u(w.mode,f);v+=m+w.getBitsLength()}),v}function p(g,f){for(let v=1;v<=40;v++)if(h(g,v)<=t.getCapacity(v,f,r.MIXED))return v}t.from=function(g,f){return o.isValid(g)?parseInt(g,10):f},t.getCapacity=function(g,f,v){if(!o.isValid(g))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=r.BYTE);const w=e.getSymbolTotalCodewords(g),m=i.getTotalCodewordsCount(g,f),y=(w-m)*8;if(v===r.MIXED)return y;const b=y-u(v,g);switch(v){case r.NUMERIC:return Math.floor(b/10*3);case r.ALPHANUMERIC:return Math.floor(b/11*2);case r.KANJI:return Math.floor(b/13);case r.BYTE:default:return Math.floor(b/8)}},t.getBestVersionForData=function(g,f){let v;const w=s.from(f,s.M);if(Array.isArray(g)){if(g.length>1)return p(g,w);if(g.length===0)return 1;v=g[0]}else v=g;return d(v.mode,v.getLength(),w)},t.getEncodedBits=function(g){if(!o.isValid(g)||g<7)throw new Error("Invalid QR Code version");let f=g<<12;for(;e.getBCHDigit(f)-c>=0;)f^=a<<e.getBCHDigit(f)-c;return g<<12|f}}(zm);var Hm={};const yp=ai,qm=1335,nS=21522,Wm=yp.getBCHDigit(qm);Hm.getEncodedBits=function(t,e){const i=t.bit<<3|e;let s=i<<10;for(;yp.getBCHDigit(s)-Wm>=0;)s^=qm<<yp.getBCHDigit(s)-Wm;return(i<<10|s)^nS};var Vm={};const oS=Xs;function uo(t){this.mode=oS.NUMERIC,this.data=t.toString()}uo.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},uo.prototype.getLength=function(){return this.data.length},uo.prototype.getBitsLength=function(){return uo.getBitsLength(this.data.length)},uo.prototype.write=function(t){let e,i,s;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),s=parseInt(i,10),t.put(s,10);const r=this.data.length-e;r>0&&(i=this.data.substr(e),s=parseInt(i,10),t.put(s,r*3+1))};var aS=uo;const cS=Xs,bp=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ho(t){this.mode=cS.ALPHANUMERIC,this.data=t}ho.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},ho.prototype.getLength=function(){return this.data.length},ho.prototype.getBitsLength=function(){return ho.getBitsLength(this.data.length)},ho.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=bp.indexOf(this.data[e])*45;i+=bp.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(bp.indexOf(this.data[e]),6)};var lS=ho,dS=function(t){for(var e=[],i=t.length,s=0;s<i;s++){var r=t.charCodeAt(s);if(r>=55296&&r<=56319&&i>s+1){var o=t.charCodeAt(s+1);o>=56320&&o<=57343&&(r=(r-55296)*1024+o-56320+65536,s+=1)}if(r<128){e.push(r);continue}if(r<2048){e.push(r>>6|192),e.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){e.push(r>>12|224),e.push(r>>6&63|128),e.push(r&63|128);continue}if(r>=65536&&r<=1114111){e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(r&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const uS=dS,hS=Xs;function po(t){this.mode=hS.BYTE,typeof t=="string"&&(t=uS(t)),this.data=new Uint8Array(t)}po.getBitsLength=function(t){return t*8},po.prototype.getLength=function(){return this.data.length},po.prototype.getBitsLength=function(){return po.getBitsLength(this.data.length)},po.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var pS=po;const gS=Xs,fS=ai;function go(t){this.mode=gS.KANJI,this.data=t}go.getBitsLength=function(t){return t*13},go.prototype.getLength=function(){return this.data.length},go.prototype.getBitsLength=function(){return go.getBitsLength(this.data.length)},go.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=fS.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var wS=go,Km={exports:{}};(function(t){var e={single_source_shortest_paths:function(i,s,r){var o={},a={};a[s]=0;var c=e.PriorityQueue.make();c.push(s,0);for(var d,u,h,p,g,f,v,w,m;!c.empty();){d=c.pop(),u=d.value,p=d.cost,g=i[u]||{};for(h in g)g.hasOwnProperty(h)&&(f=g[h],v=p+f,w=a[h],m=typeof a[h]>"u",(m||w>v)&&(a[h]=v,c.push(h,v),o[h]=u))}if(typeof r<"u"&&typeof a[r]>"u"){var y=["Could not find a path from ",s," to ",r,"."].join("");throw new Error(y)}return o},extract_shortest_path_from_predecessor_list:function(i,s){for(var r=[],o=s;o;)r.push(o),i[o],o=i[o];return r.reverse(),r},find_path:function(i,s,r){var o=e.single_source_shortest_paths(i,s,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(i){var s=e.PriorityQueue,r={},o;i=i||{};for(o in s)s.hasOwnProperty(o)&&(r[o]=s[o]);return r.queue=[],r.sorter=i.sorter||s.default_sorter,r},default_sorter:function(i,s){return i.cost-s.cost},push:function(i,s){var r={value:i,cost:s};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Km),function(t){const e=Xs,i=aS,s=lS,r=pS,o=wS,a=Zi,c=ai,d=Km.exports;function u(y){return unescape(encodeURIComponent(y)).length}function h(y,b,_){const x=[];let k;for(;(k=y.exec(_))!==null;)x.push({data:k[0],index:k.index,mode:b,length:k[0].length});return x}function p(y){const b=h(a.NUMERIC,e.NUMERIC,y),_=h(a.ALPHANUMERIC,e.ALPHANUMERIC,y);let x,k;return c.isKanjiModeEnabled()?(x=h(a.BYTE,e.BYTE,y),k=h(a.KANJI,e.KANJI,y)):(x=h(a.BYTE_KANJI,e.BYTE,y),k=[]),b.concat(_,x,k).sort(function(N,R){return N.index-R.index}).map(function(N){return{data:N.data,mode:N.mode,length:N.length}})}function g(y,b){switch(b){case e.NUMERIC:return i.getBitsLength(y);case e.ALPHANUMERIC:return s.getBitsLength(y);case e.KANJI:return o.getBitsLength(y);case e.BYTE:return r.getBitsLength(y)}}function f(y){return y.reduce(function(b,_){const x=b.length-1>=0?b[b.length-1]:null;return x&&x.mode===_.mode?(b[b.length-1].data+=_.data,b):(b.push(_),b)},[])}function v(y){const b=[];for(let _=0;_<y.length;_++){const x=y[_];switch(x.mode){case e.NUMERIC:b.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:b.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:b.push([x,{data:x.data,mode:e.BYTE,length:u(x.data)}]);break;case e.BYTE:b.push([{data:x.data,mode:e.BYTE,length:u(x.data)}])}}return b}function w(y,b){const _={},x={start:{}};let k=["start"];for(let N=0;N<y.length;N++){const R=y[N],T=[];for(let P=0;P<R.length;P++){const M=R[P],U=""+N+P;T.push(U),_[U]={node:M,lastCount:0},x[U]={};for(let j=0;j<k.length;j++){const Z=k[j];_[Z]&&_[Z].node.mode===M.mode?(x[Z][U]=g(_[Z].lastCount+M.length,M.mode)-g(_[Z].lastCount,M.mode),_[Z].lastCount+=M.length):(_[Z]&&(_[Z].lastCount=M.length),x[Z][U]=g(M.length,M.mode)+4+e.getCharCountIndicator(M.mode,b))}}k=T}for(let N=0;N<k.length;N++)x[k[N]].end=0;return{map:x,table:_}}function m(y,b){let _;const x=e.getBestModeForData(y);if(_=e.from(b,x),_!==e.BYTE&&_.bit<x.bit)throw new Error('"'+y+'" cannot be encoded with mode '+e.toString(_)+`.
 Suggested mode is: `+e.toString(x));switch(_===e.KANJI&&!c.isKanjiModeEnabled()&&(_=e.BYTE),_){case e.NUMERIC:return new i(y);case e.ALPHANUMERIC:return new s(y);case e.KANJI:return new o(y);case e.BYTE:return new r(y)}}t.fromArray=function(y){return y.reduce(function(b,_){return typeof _=="string"?b.push(m(_,null)):_.data&&b.push(m(_.data,_.mode)),b},[])},t.fromString=function(y,b){const _=p(y,c.isKanjiModeEnabled()),x=v(_),k=w(x,b),N=d.find_path(k.map,"start","end"),R=[];for(let T=1;T<N.length-1;T++)R.push(k.table[N[T]].node);return t.fromArray(f(R))},t.rawSplit=function(y){return t.fromArray(p(y,c.isKanjiModeEnabled()))}}(Vm);const rd=ai,_p=Xl,mS=YA,vS=JA,yS=Lm,bS=Bm,xp=Mm,Cp=Ql,_S=QA,nd=zm,xS=Hm,CS=Xs,Ep=Vm;function ES(t,e){const i=t.size,s=bS.getPositions(e);for(let r=0;r<s.length;r++){const o=s[r][0],a=s[r][1];for(let c=-1;c<=7;c++)if(!(o+c<=-1||i<=o+c))for(let d=-1;d<=7;d++)a+d<=-1||i<=a+d||(c>=0&&c<=6&&(d===0||d===6)||d>=0&&d<=6&&(c===0||c===6)||c>=2&&c<=4&&d>=2&&d<=4?t.set(o+c,a+d,!0,!0):t.set(o+c,a+d,!1,!0))}}function IS(t){const e=t.size;for(let i=8;i<e-8;i++){const s=i%2===0;t.set(i,6,s,!0),t.set(6,i,s,!0)}}function AS(t,e){const i=yS.getPositions(e);for(let s=0;s<i.length;s++){const r=i[s][0],o=i[s][1];for(let a=-2;a<=2;a++)for(let c=-2;c<=2;c++)a===-2||a===2||c===-2||c===2||a===0&&c===0?t.set(r+a,o+c,!0,!0):t.set(r+a,o+c,!1,!0)}}function SS(t,e){const i=t.size,s=nd.getEncodedBits(e);let r,o,a;for(let c=0;c<18;c++)r=Math.floor(c/3),o=c%3+i-8-3,a=(s>>c&1)===1,t.set(r,o,a,!0),t.set(o,r,a,!0)}function Ip(t,e,i){const s=t.size,r=xS.getEncodedBits(e,i);let o,a;for(o=0;o<15;o++)a=(r>>o&1)===1,o<6?t.set(o,8,a,!0):o<8?t.set(o+1,8,a,!0):t.set(s-15+o,8,a,!0),o<8?t.set(8,s-o-1,a,!0):o<9?t.set(8,15-o-1+1,a,!0):t.set(8,15-o-1,a,!0);t.set(s-8,8,1,!0)}function NS(t,e){const i=t.size;let s=-1,r=i-1,o=7,a=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let d=0;d<2;d++)if(!t.isReserved(r,c-d)){let u=!1;a<e.length&&(u=(e[a]>>>o&1)===1),t.set(r,c-d,u),o--,o===-1&&(a++,o=7)}if(r+=s,r<0||i<=r){r-=s,s=-s;break}}}function PS(t,e,i){const s=new mS;i.forEach(function(d){s.put(d.mode.bit,4),s.put(d.getLength(),CS.getCharCountIndicator(d.mode,t)),d.write(s)});const r=rd.getSymbolTotalCodewords(t),o=Cp.getTotalCodewordsCount(t,e),a=(r-o)*8;for(s.getLengthInBits()+4<=a&&s.put(0,4);s.getLengthInBits()%8!==0;)s.putBit(0);const c=(a-s.getLengthInBits())/8;for(let d=0;d<c;d++)s.put(d%2?17:236,8);return kS(s,t,e)}function kS(t,e,i){const s=rd.getSymbolTotalCodewords(e),r=Cp.getTotalCodewordsCount(e,i),o=s-r,a=Cp.getBlocksCount(e,i),c=s%a,d=a-c,u=Math.floor(s/a),h=Math.floor(o/a),p=h+1,g=u-h,f=new _S(g);let v=0;const w=new Array(a),m=new Array(a);let y=0;const b=new Uint8Array(t.buffer);for(let R=0;R<a;R++){const T=R<d?h:p;w[R]=b.slice(v,v+T),m[R]=f.encode(w[R]),v+=T,y=Math.max(y,T)}const _=new Uint8Array(s);let x=0,k,N;for(k=0;k<y;k++)for(N=0;N<a;N++)k<w[N].length&&(_[x++]=w[N][k]);for(k=0;k<g;k++)for(N=0;N<a;N++)_[x++]=m[N][k];return _}function OS(t,e,i,s){let r;if(Array.isArray(t))r=Ep.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const h=Ep.rawSplit(t);u=nd.getBestVersionForData(h,i)}r=Ep.fromString(t,u||40)}else throw new Error("Invalid data");const o=nd.getBestVersionForData(r,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const a=PS(e,i,r),c=rd.getSymbolSize(e),d=new vS(c);return ES(d,e),IS(d),AS(d,e),Ip(d,i,0),e>=7&&SS(d,e),NS(d,a),isNaN(s)&&(s=xp.getBestMask(d,Ip.bind(null,d,i))),xp.applyMask(s,d),Ip(d,i,s),{modules:d,version:e,errorCorrectionLevel:i,maskPattern:s,segments:r}}Rm.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let i=_p.M,s,r;return typeof e<"u"&&(i=_p.from(e.errorCorrectionLevel,_p.M),s=nd.from(e.version),r=xp.from(e.maskPattern),e.toSJISFunc&&rd.setToSJISFunction(e.toSJISFunc)),OS(t,s,i,r)};var Gm={},Ap={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let s=i.slice().replace("#","").split("");if(s.length<3||s.length===5||s.length>8)throw new Error("Invalid hex color: "+i);(s.length===3||s.length===4)&&(s=Array.prototype.concat.apply([],s.map(function(o){return[o,o]}))),s.length===6&&s.push("F","F");const r=parseInt(s.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+s.slice(0,6).join("")}}t.getOptions=function(i){i||(i={}),i.color||(i.color={});const s=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,o=i.scale||4;return{width:r,scale:r?4:o,margin:s,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},t.getScale=function(i,s){return s.width&&s.width>=i+s.margin*2?s.width/(i+s.margin*2):s.scale},t.getImageWidth=function(i,s){const r=t.getScale(i,s);return Math.floor((i+s.margin*2)*r)},t.qrToImageData=function(i,s,r){const o=s.modules.size,a=s.modules.data,c=t.getScale(o,r),d=Math.floor((o+r.margin*2)*c),u=r.margin*c,h=[r.color.light,r.color.dark];for(let p=0;p<d;p++)for(let g=0;g<d;g++){let f=(p*d+g)*4,v=r.color.light;if(p>=u&&g>=u&&p<d-u&&g<d-u){const w=Math.floor((p-u)/c),m=Math.floor((g-u)/c);v=h[a[w*o+m]?1:0]}i[f++]=v.r,i[f++]=v.g,i[f++]=v.b,i[f]=v.a}}})(Ap),function(t){const e=Ap;function i(r,o,a){r.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=a,o.width=a,o.style.height=a+"px",o.style.width=a+"px"}function s(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(r,o,a){let c=a,d=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(d=s()),c=e.getOptions(c);const u=e.getImageWidth(r.modules.size,c),h=d.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,r,c),i(h,d,u),h.putImageData(p,0,0),d},t.renderToDataURL=function(r,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const d=t.render(r,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return d.toDataURL(u,h.quality)}}(Gm);var Zm={};const TS=Ap;function Ym(t,e){const i=t.a/255,s=e+'="'+t.hex+'"';return i<1?s+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':s}function Sp(t,e,i){let s=t+e;return typeof i<"u"&&(s+=" "+i),s}function RS(t,e,i){let s="",r=0,o=!1,a=0;for(let c=0;c<t.length;c++){const d=Math.floor(c%e),u=Math.floor(c/e);!d&&!o&&(o=!0),t[c]?(a++,c>0&&d>0&&t[c-1]||(s+=o?Sp("M",d+i,.5+u+i):Sp("m",r,0),r=0,o=!1),d+1<e&&t[c+1]||(s+=Sp("h",a),a=0)):r++}return s}Zm.render=function(t,e,i){const s=TS.getOptions(e),r=t.modules.size,o=t.modules.data,a=r+s.margin*2,c=s.color.light.a?"<path "+Ym(s.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",d="<path "+Ym(s.color.dark,"stroke")+' d="'+RS(o,r,s.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+d+`</svg>
`;return typeof i=="function"&&i(null,h),h};const $S=GA,Np=Rm,Jm=Gm,LS=Zm;function Pp(t,e,i,s,r){const o=[].slice.call(arguments,1),a=o.length,c=typeof o[a-1]=="function";if(!c&&!$S())throw new Error("Callback required as last argument");if(c){if(a<2)throw new Error("Too few arguments provided");a===2?(r=i,i=e,e=s=void 0):a===3&&(e.getContext&&typeof r>"u"?(r=s,s=void 0):(r=s,s=i,i=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=e,e=s=void 0):a===2&&!e.getContext&&(s=i,i=e,e=void 0),new Promise(function(d,u){try{const h=Np.create(i,s);d(t(h,e,s))}catch(h){u(h)}})}try{const d=Np.create(i,s);r(null,t(d,e,s))}catch(d){r(d)}}Za.create=Np.create,Za.toCanvas=Pp.bind(null,Jm.render),Za.toDataURL=Pp.bind(null,Jm.renderToDataURL),Za.toString=Pp.bind(null,function(t,e,i){return LS.render(t,i)});const BS=.1,Xm=2.5,Es=7;function kp(t,e,i){return t===e?!1:(t-e<0?e-t:t-e)<=i+BS}function US(t,e){const i=Array.prototype.slice.call(Za.create(t,{errorCorrectionLevel:e}).modules.data,0),s=Math.sqrt(i.length);return i.reduce((r,o,a)=>(a%s===0?r.push([o]):r[r.length-1].push(o))&&r,[])}const MS={generate({uri:t,size:e,logoSize:i,dotColor:s="#141414"}){const r="transparent",o=[],a=US(t,"Q"),c=e/a.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:v,y:w})=>{const m=(a.length-Es)*c*v,y=(a.length-Es)*c*w,b=.45;for(let _=0;_<d.length;_+=1){const x=c*(Es-_*2);o.push(G`
            <rect
              fill=${_===2?s:r}
              width=${_===0?x-5:x}
              rx= ${_===0?(x-5)*b:x*b}
              ry= ${_===0?(x-5)*b:x*b}
              stroke=${s}
              stroke-width=${_===0?5:0}
              height=${_===0?x-5:x}
              x= ${_===0?y+c*_+5/2:y+c*_}
              y= ${_===0?m+c*_+5/2:m+c*_}
            />
          `)}});const u=Math.floor((i+25)/c),h=a.length/2-u/2,p=a.length/2+u/2-1,g=[];a.forEach((v,w)=>{v.forEach((m,y)=>{if(a[w][y]&&!(w<Es&&y<Es||w>a.length-(Es+1)&&y<Es||w<Es&&y>a.length-(Es+1))&&!(w>h&&w<p&&y>h&&y<p)){const b=w*c+c/2,_=y*c+c/2;g.push([b,_])}})});const f={};return g.forEach(([v,w])=>{var m;f[v]?(m=f[v])==null||m.push(w):f[v]=[w]}),Object.entries(f).map(([v,w])=>{const m=w.filter(y=>w.every(b=>!kp(y,b,c)));return[Number(v),m]}).forEach(([v,w])=>{w.forEach(m=>{o.push(G`<circle cx=${v} cy=${m} fill=${s} r=${c/Xm} />`)})}),Object.entries(f).filter(([v,w])=>w.length>1).map(([v,w])=>{const m=w.filter(y=>w.some(b=>kp(y,b,c)));return[Number(v),m]}).map(([v,w])=>{w.sort((y,b)=>y<b?-1:1);const m=[];for(const y of w){const b=m.find(_=>_.some(x=>kp(y,x,c)));b?b.push(y):m.push([y])}return[v,m.map(y=>[y[0],y[y.length-1]])]}).forEach(([v,w])=>{w.forEach(([m,y])=>{o.push(G`
              <line
                x1=${v}
                x2=${v}
                y1=${m}
                y2=${y}
                stroke=${s}
                stroke-width=${c/(Xm/2)}
                stroke-linecap="round"
              />
            `)})}),o}};var DS=pe`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,Is=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const jS="#3396ff";let Bi=class extends ne{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??jS}
    `,S`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return G`
      <svg height=${t} width=${t}>
        ${MS.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?S`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?S`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:S`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Bi.styles=[Be,DS],Is([O()],Bi.prototype,"uri",void 0),Is([O({type:Number})],Bi.prototype,"size",void 0),Is([O()],Bi.prototype,"theme",void 0),Is([O()],Bi.prototype,"imageSrc",void 0),Is([O()],Bi.prototype,"alt",void 0),Is([O()],Bi.prototype,"color",void 0),Is([O({type:Boolean})],Bi.prototype,"arenaClear",void 0),Is([O({type:Boolean})],Bi.prototype,"farcaster",void 0),Bi=Is([se("wui-qr-code")],Bi);var zS=pe`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Qa=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let qr=class extends ne{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,S`<slot></slot>`}};qr.styles=[zS],Qa([O()],qr.prototype,"width",void 0),Qa([O()],qr.prototype,"height",void 0),Qa([O()],qr.prototype,"borderRadius",void 0),Qa([O()],qr.prototype,"variant",void 0),qr=Qa([se("wui-shimmer")],qr);var FS=pe`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,HS=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Op=class extends ne{render(){return S`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};Op.styles=[Be,St,FS],Op=HS([se("wui-ux-by-reown")],Op);var qS=pe`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,WS=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Tp=class extends Nt{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),_e.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),S`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return ce.setWcLinking(void 0),ce.setRecentWallet(this.wallet),S` <wui-qr-code
      size=${t}
      theme=${ut.state.themeMode}
      uri=${this.uri}
      imageSrc=${ge(dt.getWalletImage(this.wallet))}
      color=${ge(ut.state.themeVariables["--w3m-qr-color"])}
      alt=${ge(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return S`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Tp.styles=qS,Tp=WS([se("w3m-connecting-wc-qrcode")],Tp);var VS=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Qm=class extends ne{constructor(){var t;if(super(),this.wallet=(t=X.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");_e.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return S`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ge(dt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Qm=VS([se("w3m-connecting-wc-unsupported")],Qm);var ev=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Rp=class extends Nt{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(ce.subscribeKey("wcUri",()=>{this.updateLoadingState()})),_e.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:i}=this.wallet,{redirect:s,href:r}=V.formatUniversalUrl(e,this.uri);ce.setWcLinking({name:i,href:r}),ce.setRecentWallet(this.wallet),V.openHref(s,"_blank")}catch{this.error=!0}}};ev([re()],Rp.prototype,"isLoading",void 0),Rp=ev([se("w3m-connecting-wc-web")],Rp);var od=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ec=class extends ne{constructor(){var t;super(),this.wallet=(t=X.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!F.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return S`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(t=!1){if(!(this.platform==="browser"||F.state.manualWCControl&&!t))try{const{wcPairingExpiry:e,status:i}=ce.state;(t||F.state.enableEmbedded||V.isPairingExpired(e)||i==="connecting")&&(await ce.connectWalletConnect(),this.isSiwxEnabled||Ne.close())}catch(e){_e.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),ce.setWcError(!0),Ke.showError(e.message??"Connection error"),ce.resetWcConnection(),X.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:i,injected:s,rdns:r}=this.wallet,o=s==null?void 0:s.map(({injected_id:f})=>f).filter(Boolean),a=[...r?[r]:o??[]],c=F.state.isUniversalProvider?!1:a.length,d=t,u=i,h=ce.checkInstalled(a),p=c&&h,g=e&&!V.isMobile();p&&!C.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(V.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!p&&c&&!C.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return S`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return S`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return S`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return S`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return S`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return S`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?S`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};od([re()],ec.prototype,"platform",void 0),od([re()],ec.prototype,"platforms",void 0),od([re()],ec.prototype,"isSiwxEnabled",void 0),ec=od([se("w3m-connecting-wc-view")],ec);var tv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ad=class extends ne{constructor(){super(...arguments),this.isMobile=V.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=ee.state,{customWallets:i}=F.state,s=ae.getRecentWallets(),r=t.length||e.length||(i==null?void 0:i.length)||s.length;return S`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?S`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return S`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};tv([re()],ad.prototype,"isMobile",void 0),ad=tv([se("w3m-connecting-wc-basic-view")],ad);const $p=()=>new KS;class KS{}const Lp=new WeakMap,Bp=op(class extends _m{render(t){return nt}update(t,[e]){var s;const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=(s=t.options)==null?void 0:s.host,this.rt(this.ct=t.element)),nt}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Lp.get(e);i===void 0&&(i=new WeakMap,Lp.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Lp.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var GS=pe`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,iv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let cd=class extends ne{constructor(){super(...arguments),this.inputElementRef=$p(),this.checked=void 0}render(){return S`
      <label>
        <input
          ${Bp(this.inputElementRef)}
          type="checkbox"
          ?checked=${ge(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};cd.styles=[Be,St,Ra,GS],iv([O({type:Boolean})],cd.prototype,"checked",void 0),cd=iv([se("wui-switch")],cd);var ZS=pe`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,sv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ld=class extends ne{constructor(){super(...arguments),this.checked=void 0}render(){return S`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${ge(this.checked)}></wui-switch>
      </button>
    `}};ld.styles=[Be,St,ZS],sv([O({type:Boolean})],ld.prototype,"checked",void 0),ld=sv([se("wui-certified-switch")],ld);var YS=pe`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,rv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let dd=class extends ne{constructor(){super(...arguments),this.icon="copy"}render(){return S`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};dd.styles=[Be,St,YS],rv([O()],dd.prototype,"icon",void 0),dd=rv([se("wui-input-element")],dd);var JS=pe`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,Yi=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let bi=class extends ne{constructor(){super(...arguments),this.inputElementRef=$p(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return S`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Bp(this.inputElementRef)}
        class=${Im(e)}
        type=${this.type}
        enterkeyhint=${ge(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${ge(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?S`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};bi.styles=[Be,St,JS],Yi([O()],bi.prototype,"size",void 0),Yi([O()],bi.prototype,"icon",void 0),Yi([O({type:Boolean})],bi.prototype,"disabled",void 0),Yi([O()],bi.prototype,"placeholder",void 0),Yi([O()],bi.prototype,"type",void 0),Yi([O()],bi.prototype,"keyHint",void 0),Yi([O()],bi.prototype,"value",void 0),Yi([O()],bi.prototype,"inputRightPadding",void 0),Yi([O()],bi.prototype,"tabIdx",void 0),bi=Yi([se("wui-input-text")],bi);var XS=pe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,QS=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Up=class extends ne{constructor(){super(...arguments),this.inputComponentRef=$p()}render(){return S`
      <wui-input-text
        ${Bp(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){var e;const t=(e=this.inputComponentRef.value)==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Up.styles=[Be,XS],Up=QS([se("wui-search-bar")],Up);const eN=G`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tN=pe`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,nv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ud=class extends ne{constructor(){super(...arguments),this.type="wallet"}render(){return S`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?S` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${eN}`:S`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ud.styles=[Be,St,tN],nv([O()],ud.prototype,"type",void 0),ud=nv([se("wui-card-select-loader")],ud);var iN=pe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,_i=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Yt=class extends ne{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&_t.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&_t.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&_t.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&_t.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&_t.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&_t.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&_t.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&_t.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};Yt.styles=[Be,iN],_i([O()],Yt.prototype,"gridTemplateRows",void 0),_i([O()],Yt.prototype,"gridTemplateColumns",void 0),_i([O()],Yt.prototype,"justifyItems",void 0),_i([O()],Yt.prototype,"alignItems",void 0),_i([O()],Yt.prototype,"justifyContent",void 0),_i([O()],Yt.prototype,"alignContent",void 0),_i([O()],Yt.prototype,"columnGap",void 0),_i([O()],Yt.prototype,"rowGap",void 0),_i([O()],Yt.prototype,"gap",void 0),_i([O()],Yt.prototype,"padding",void 0),_i([O()],Yt.prototype,"margin",void 0),Yt=_i([se("wui-grid")],Yt);var sN=pe`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,tc=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Wr=class extends ne{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,i;const t=((e=this.wallet)==null?void 0:e.badge_type)==="certified";return S`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${ge(t?"certified":void 0)}
            >${(i=this.wallet)==null?void 0:i.name}</wui-text
          >
          ${t?S`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():S`
      <wui-wallet-image
        size="md"
        imageSrc=${ge(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(e=this.wallet)==null?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return S`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=dt.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await dt.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Wr.styles=sN,tc([re()],Wr.prototype,"visible",void 0),tc([re()],Wr.prototype,"imageSrc",void 0),tc([re()],Wr.prototype,"imageLoading",void 0),tc([O()],Wr.prototype,"wallet",void 0),Wr=tc([se("w3m-all-wallets-list-item")],Wr);var rN=pe`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,ic=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const ov="local-paginator";let Vr=class extends ne{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!ee.state.wallets.length,this.wallets=ee.state.wallets,this.recommended=ee.state.recommended,this.featured=ee.state.featured,this.unsubscribe.push(ee.subscribeKey("wallets",t=>this.wallets=t),ee.subscribeKey("recommended",t=>this.recommended=t),ee.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(e=>e()),(t=this.paginationObserver)==null||t.disconnect()}render(){return S`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-grid");t&&(await ee.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>S`
        <wui-card-select-loader type="wallet" id=${ge(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=V.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return $r.markWalletsAsInstalled(t).map(e=>S`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:i,count:s}=ee.state,r=window.innerWidth<352?3:4,o=t.length+e.length;let a=Math.ceil(o/r)*r-o+r;return a-=t.length?i.length%r:0,s===0&&i.length>0?null:s===0||[...i,...t,...e].length<s?this.shimmerTemplate(a,ov):null}createPaginationObserver(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(`#${ov}`);t&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i!=null&&i.isIntersecting&&!this.loading){const{page:s,count:r,wallets:o}=ee.state;o.length<r&&ee.fetchWalletsByPage({page:s+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){ie.selectWalletConnector(t)}};Vr.styles=rN,ic([re()],Vr.prototype,"loading",void 0),ic([re()],Vr.prototype,"wallets",void 0),ic([re()],Vr.prototype,"recommended",void 0),ic([re()],Vr.prototype,"featured",void 0),Vr=ic([se("w3m-all-wallets-list")],Vr);var nN=pe`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,hd=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let fo=class extends ne{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?S`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await ee.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=ee.state,e=$r.markWalletsAsInstalled(t);return t.length?S`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(i=>S`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(i)}
              .wallet=${i}
              data-testid="wallet-search-item-${i.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:S`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){ie.selectWalletConnector(t)}};fo.styles=nN,hd([re()],fo.prototype,"loading",void 0),hd([O()],fo.prototype,"query",void 0),hd([O()],fo.prototype,"badge",void 0),fo=hd([se("w3m-all-wallets-search")],fo);var Mp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let sc=class extends ne{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=V.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return S`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?S`<w3m-all-wallets-search
            query=${this.search}
            badge=${ge(this.badge)}
          ></w3m-all-wallets-search>`:S`<w3m-all-wallets-list badge=${ge(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Ke.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return V.isMobile()?S`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){X.push("ConnectingWalletConnect")}};Mp([re()],sc.prototype,"search",void 0),Mp([re()],sc.prototype,"badge",void 0),sc=Mp([se("w3m-all-wallets-view")],sc);var oN=pe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,Ui=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ci=class extends ne{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return S`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ge(this.iconVariant)}
        tabindex=${ge(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return S`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return S`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:e;return S`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?S`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:S``}chevronTemplate(){return this.chevron?S`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ci.styles=[Be,St,oN],Ui([O()],ci.prototype,"icon",void 0),Ui([O()],ci.prototype,"iconSize",void 0),Ui([O()],ci.prototype,"tabIdx",void 0),Ui([O()],ci.prototype,"variant",void 0),Ui([O()],ci.prototype,"iconVariant",void 0),Ui([O({type:Boolean})],ci.prototype,"disabled",void 0),Ui([O()],ci.prototype,"imageSrc",void 0),Ui([O()],ci.prototype,"alt",void 0),Ui([O({type:Boolean})],ci.prototype,"chevron",void 0),Ui([O({type:Boolean})],ci.prototype,"loading",void 0),ci=Ui([se("wui-list-item")],ci);var aN=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Dp=class extends ne{constructor(){var t;super(...arguments),this.wallet=(t=X.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return S`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?S`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?S`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?S`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?S`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&V.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&V.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&V.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&V.openHref(this.wallet.homepage,"_blank")}};Dp=aN([se("w3m-downloads-view")],Dp);var cN=Object.freeze({__proto__:null,get W3mConnectingWcBasicView(){return ad},get W3mAllWalletsView(){return sc},get W3mDownloadsView(){return Dp}}),lN=pe`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,dN=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let jp=class extends ne{render(){return S`<slot></slot>`}};jp.styles=[Be,lN],jp=dN([se("wui-card")],jp);var uN=pe`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,rc=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Kr=class extends ne{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,S`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){Ms.close()}};Kr.styles=[Be,uN],rc([O()],Kr.prototype,"message",void 0),rc([O()],Kr.prototype,"backgroundColor",void 0),rc([O()],Kr.prototype,"iconColor",void 0),rc([O()],Kr.prototype,"icon",void 0),Kr=rc([se("wui-alertbar")],Kr);var hN=pe`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,av=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const pN={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let pd=class extends ne{constructor(){super(),this.unsubscribe=[],this.open=Ms.state.open,this.onOpen(!0),this.unsubscribe.push(Ms.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e}=Ms.state,i=pN[e];return S`
      <wui-alertbar
        message=${t}
        backgroundColor=${i==null?void 0:i.backgroundColor}
        iconColor=${i==null?void 0:i.iconColor}
        icon=${i==null?void 0:i.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};pd.styles=hN,av([re()],pd.prototype,"open",void 0),pd=av([se("w3m-alertbar")],pd);var gN=pe`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,nc=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Gr=class extends ne{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,S`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Gr.styles=[Be,St,Ra,gN],nc([O()],Gr.prototype,"size",void 0),nc([O({type:Boolean})],Gr.prototype,"disabled",void 0),nc([O()],Gr.prototype,"icon",void 0),nc([O()],Gr.prototype,"iconColor",void 0),Gr=nc([se("wui-icon-link")],Gr);var fN=pe`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,cv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let gd=class extends ne{constructor(){super(...arguments),this.imageSrc=""}render(){return S`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?S`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:S`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};gd.styles=[Be,St,Ra,fN],cv([O()],gd.prototype,"imageSrc",void 0),gd=cv([se("wui-select")],gd);var wN=pe`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Ji=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const mN=["SmartSessionList"];function zp(){var o,a,c,d,u,h,p;const t=(a=(o=X.state.data)==null?void 0:o.connector)==null?void 0:a.name,e=(d=(c=X.state.data)==null?void 0:c.wallet)==null?void 0:d.name,i=(h=(u=X.state.data)==null?void 0:u.network)==null?void 0:h.name,s=e??t,r=ie.getConnectors();return{Connect:`Connect ${r.length===1&&((p=r[0])==null?void 0:p.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:s??"Connect Wallet",ConnectingWalletConnect:s??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:s?`Get ${s}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:de.state.socialProvider?de.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let xi=class extends ne{constructor(){super(),this.unsubscribe=[],this.heading=zp()[X.state.view],this.network=C.state.activeCaipNetwork,this.networkImage=dt.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=X.state.view,this.viewDirection="",this.headerText=zp()[X.state.view],this.unsubscribe.push(qt.subscribeNetworkImages(()=>{this.networkImage=dt.getNetworkImage(this.network)}),X.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.headerText=zp()[t]},Ws.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),ce.subscribeKey("buffering",t=>this.buffering=t),C.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=dt.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return S`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){_e.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),X.push("WhatIsAWallet")}async onClose(){X.state.view==="UnsupportedChain"||await js.isSIWXCloseDisabled()?Ne.shake():Ne.close()}rightHeaderTemplate(){var e,i;const t=(i=(e=F==null?void 0:F.state)==null?void 0:e.features)==null?void 0:i.smartSessions;return X.state.view!=="Account"||!t?this.closeButtonTemplate():S`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>X.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return S`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=mN.includes(this.view);return S`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?S`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var d;const{view:t}=X.state,e=t==="Connect",i=F.state.enableEmbedded,s=t==="ApproveTransaction",r=t==="ConnectingSiwe",o=t==="Account",a=F.state.enableNetworkSwitch,c=s||r||e&&i;return o&&a?S`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${ge((d=this.network)==null?void 0:d.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${ge(this.networkImage)}
      ></wui-select>`:this.showBack&&!c?S`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:S`<wui-icon-link
      data-hidden=${!e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(_e.sendEvent({type:"track",event:"CLICK_NETWORKS"}),X.push("Networks"))}isAllowedNetworkSwitch(){const t=C.getAllRequestedCaipNetworks(),e=t?t.length>1:!1,i=t==null?void 0:t.find(({id:s})=>{var r;return s===((r=this.network)==null?void 0:r.id)});return e||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=X.state;let e=Ws.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(e=Ws.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=e}async onHistoryChange(){var i;const{history:t}=X.state,e=(i=this.shadowRoot)==null?void 0:i.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){X.goBack()}};xi.styles=wN,Ji([re()],xi.prototype,"heading",void 0),Ji([re()],xi.prototype,"network",void 0),Ji([re()],xi.prototype,"networkImage",void 0),Ji([re()],xi.prototype,"buffering",void 0),Ji([re()],xi.prototype,"showBack",void 0),Ji([re()],xi.prototype,"prevHistoryLength",void 0),Ji([re()],xi.prototype,"view",void 0),Ji([re()],xi.prototype,"viewDirection",void 0),Ji([re()],xi.prototype,"headerText",void 0),xi=Ji([se("w3m-header")],xi);var vN=pe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,Zr=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let As=class extends ne{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return S`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?S`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?S`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:S`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};As.styles=[Be,vN],Zr([O()],As.prototype,"backgroundColor",void 0),Zr([O()],As.prototype,"iconColor",void 0),Zr([O()],As.prototype,"icon",void 0),Zr([O()],As.prototype,"message",void 0),Zr([O()],As.prototype,"loading",void 0),Zr([O()],As.prototype,"iconType",void 0),As=Zr([se("wui-snackbar")],As);var yN=pe`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,lv=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const bN={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let fd=class extends ne{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Ke.state.open,this.unsubscribe.push(Ke.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e,svg:i}=Ke.state,s=bN[e],{icon:r,iconColor:o}=i??s??{};return S`
      <wui-snackbar
        message=${t}
        backgroundColor=${s==null?void 0:s.backgroundColor}
        iconColor=${o}
        icon=${r}
        .loading=${e==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),Ke.state.autoClose&&(this.timeout=setTimeout(()=>Ke.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};fd.styles=yN,lv([re()],fd.prototype,"open",void 0),fd=lv([se("w3m-snackbar")],fd);var _N=pe`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,oc=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Yr=class extends ne{constructor(){super(),this.unsubscribe=[],this.open=Xn.state.open,this.message=Xn.state.message,this.triggerRect=Xn.state.triggerRect,this.variant=Xn.state.variant,this.unsubscribe.push(Xn.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,S`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};Yr.styles=[_N],oc([re()],Yr.prototype,"open",void 0),oc([re()],Yr.prototype,"message",void 0),oc([re()],Yr.prototype,"triggerRect",void 0),oc([re()],Yr.prototype,"variant",void 0),Yr=oc([se("w3m-tooltip"),se("w3m-tooltip")],Yr);var xN=pe`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Fp=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ac=class extends ne{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=X.state.view,this.viewDirection="",this.unsubscribe.push(X.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){var t;this.resizeObserver=new ResizeObserver(([e])=>{const i=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",i),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=i,this.style.animation="unset"},Ws.ANIMATION_DURATIONS.ModalHeight)}),(t=this.resizeObserver)==null||t.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return S`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return S`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return S`<w3m-account-view></w3m-account-view>`;case"AllWallets":return S`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return S`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return S`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return S`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return S`<w3m-connect-view></w3m-connect-view>`;case"Create":return S`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return S`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return S`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return S`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return S`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return S`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return S`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return S`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return S`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return S`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return S`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return S`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return S`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return S`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return S`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return S`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return S`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return S`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return S`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return S`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return S`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return S`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return S`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return S`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return S`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return S`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return S`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return S`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return S`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return S`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return S`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return S`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return S`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return S`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return S`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return S`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return S`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return S`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return S`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return S`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return S`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return S`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return S`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return S`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return S`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return S`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return S`<w3m-connect-view></w3m-connect-view>`}}onViewChange(t){Xn.hide();let e=Ws.VIEW_DIRECTION.Next;const{history:i}=X.state;i.length<this.prevHistoryLength&&(e=Ws.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=e,setTimeout(()=>{this.view=t},Ws.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};ac.styles=xN,Fp([re()],ac.prototype,"view",void 0),Fp([re()],ac.prototype,"viewDirection",void 0),ac=Fp([se("w3m-router")],ac);var CN=pe`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,Jr=function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const dv="scroll-lock";let Xi=class extends ne{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=F.state.enableEmbedded,this.open=Ne.state.open,this.caipAddress=C.state.activeCaipAddress,this.caipNetwork=C.state.activeCaipNetwork,this.shake=Ne.state.shake,this.filterByNamespace=ie.state.filterByNamespace,this.initializeTheming(),ee.prefetchAnalyticsConfig(),this.unsubscribe.push(Ne.subscribeKey("open",t=>t?this.onOpen():this.onClose()),Ne.subscribeKey("shake",t=>this.shake=t),C.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),C.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),F.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),ie.subscribeKey("filterByNamespace",t=>{var e;this.filterByNamespace!==t&&!((e=C.getAccountData(t))!=null&&e.caipAddress)&&(ee.fetchRecommendedWallets(),this.filterByNamespace=t)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){Ne.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?S`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?S`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return S` <wui-card
      shake="${this.shake}"
      data-embedded="${ge(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){t.target===t.currentTarget&&await this.handleClose()}async handleClose(){X.state.view==="UnsupportedChain"||await js.isSIWXCloseDisabled()?Ne.shake():Ne.close()}initializeTheming(){const{themeVariables:t,themeMode:e}=ut.state,i=_t.getColorTheme(e);EI(t,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),Ke.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=dv,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${dv}"]`);t&&t.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:s}=i.target;s&&!s.includes("W3M-")&&!s.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const e=C.state.isSwitchingNamespace,i=V.getPlainAddress(t);!i&&!e?Ne.close():e&&i&&X.goBack(),await js.initializeIfEnabled(),this.caipAddress=t,C.setIsSwitchingNamespace(!1)}onNewNetwork(t){var v,w;const e=this.caipNetwork,i=(v=e==null?void 0:e.caipNetworkId)==null?void 0:v.toString(),s=e==null?void 0:e.chainNamespace,r=(w=t==null?void 0:t.caipNetworkId)==null?void 0:w.toString(),o=t==null?void 0:t.chainNamespace,a=i!==r,c=a&&s===o,d=(e==null?void 0:e.name)===oe.UNSUPPORTED_NETWORK_NAME,u=X.state.view==="ConnectingExternal",h=!this.caipAddress,p=X.state.view==="UnsupportedChain",g=Ne.state.open;let f=!1;g&&!u&&(h?a&&(f=!0):(p||c&&!d)&&(f=!0)),f&&X.state.view!=="SIWXSignMessage"&&X.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(ee.prefetch(),ee.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}};Xi.styles=CN,Jr([O({type:Boolean})],Xi.prototype,"enableEmbedded",void 0),Jr([re()],Xi.prototype,"open",void 0),Jr([re()],Xi.prototype,"caipAddress",void 0),Jr([re()],Xi.prototype,"caipNetwork",void 0),Jr([re()],Xi.prototype,"shake",void 0),Jr([re()],Xi.prototype,"filterByNamespace",void 0),Xi=Jr([se("w3m-modal")],Xi);var EN=Object.freeze({__proto__:null,get W3mModal(){return Xi}});const IN=G`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;var AN=Object.freeze({__proto__:null,addSvg:IN});const SN=G`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var NN=Object.freeze({__proto__:null,allWalletsSvg:SN});const PN=G`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;var kN=Object.freeze({__proto__:null,arrowBottomCircleSvg:PN});const ON=G`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;var TN=Object.freeze({__proto__:null,appStoreSvg:ON});const RN=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var $N=Object.freeze({__proto__:null,appleSvg:RN});const LN=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var BN=Object.freeze({__proto__:null,arrowBottomSvg:LN});const UN=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var MN=Object.freeze({__proto__:null,arrowLeftSvg:UN});const DN=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var jN=Object.freeze({__proto__:null,arrowRightSvg:DN});const zN=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var FN=Object.freeze({__proto__:null,arrowTopSvg:zN});const HN=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;var qN=Object.freeze({__proto__:null,bankSvg:HN});const WN=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;var VN=Object.freeze({__proto__:null,browserSvg:WN});const KN=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;var GN=Object.freeze({__proto__:null,cardSvg:KN});const ZN=G`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;var YN=Object.freeze({__proto__:null,checkmarkSvg:ZN});const JN=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var XN=Object.freeze({__proto__:null,checkmarkBoldSvg:JN});const QN=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var eP=Object.freeze({__proto__:null,chevronBottomSvg:QN});const tP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var iP=Object.freeze({__proto__:null,chevronLeftSvg:tP});const sP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var rP=Object.freeze({__proto__:null,chevronRightSvg:sP});const nP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var oP=Object.freeze({__proto__:null,chevronTopSvg:nP});const aP=G`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;var cP=Object.freeze({__proto__:null,chromeStoreSvg:aP});const lP=G`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;var dP=Object.freeze({__proto__:null,clockSvg:lP});const uP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var hP=Object.freeze({__proto__:null,closeSvg:uP});const pP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;var gP=Object.freeze({__proto__:null,compassSvg:pP});const fP=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;var wP=Object.freeze({__proto__:null,coinPlaceholderSvg:fP});const mP=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;var vP=Object.freeze({__proto__:null,copySvg:mP});const yP=G` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;var bP=Object.freeze({__proto__:null,cursorSvg:yP});const _P=G`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var xP=Object.freeze({__proto__:null,cursorTransparentSvg:_P});const CP=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;var EP=Object.freeze({__proto__:null,desktopSvg:CP});const IP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var AP=Object.freeze({__proto__:null,disconnectSvg:IP});const SP=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;var NP=Object.freeze({__proto__:null,discordSvg:SP});const PP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;var kP=Object.freeze({__proto__:null,etherscanSvg:PP});const OP=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;var TP=Object.freeze({__proto__:null,extensionSvg:OP});const RP=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var $P=Object.freeze({__proto__:null,externalLinkSvg:RP});const LP=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var BP=Object.freeze({__proto__:null,facebookSvg:LP});const UP=G`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;var MP=Object.freeze({__proto__:null,farcasterSvg:UP});const DP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var jP=Object.freeze({__proto__:null,filtersSvg:DP});const zP=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var FP=Object.freeze({__proto__:null,githubSvg:zP});const HP=G`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;var qP=Object.freeze({__proto__:null,googleSvg:HP});const WP=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;var VP=Object.freeze({__proto__:null,helpCircleSvg:WP});const KP=G`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;var GP=Object.freeze({__proto__:null,imageSvg:KP});const ZP=G`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;var YP=Object.freeze({__proto__:null,idSvg:ZP});const JP=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;var XP=Object.freeze({__proto__:null,infoCircleSvg:JP});const QP=G`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;var ek=Object.freeze({__proto__:null,lightbulbSvg:QP});const tk=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;var ik=Object.freeze({__proto__:null,mailSvg:tk});const sk=G`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;var rk=Object.freeze({__proto__:null,mobileSvg:sk});const nk=G`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;var ok=Object.freeze({__proto__:null,moreSvg:nk});const ak=G`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;var ck=Object.freeze({__proto__:null,networkPlaceholderSvg:ak});const lk=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;var dk=Object.freeze({__proto__:null,nftPlaceholderSvg:lk});const uk=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;var hk=Object.freeze({__proto__:null,offSvg:uk});const pk=G` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;var gk=Object.freeze({__proto__:null,playStoreSvg:pk});const fk=G`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var wk=Object.freeze({__proto__:null,plusSvg:fk});const mk=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;var vk=Object.freeze({__proto__:null,qrCodeIcon:mk});const yk=G`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;var bk=Object.freeze({__proto__:null,recycleHorizontalSvg:yk});const _k=G`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;var xk=Object.freeze({__proto__:null,refreshSvg:_k});const Ck=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;var Ek=Object.freeze({__proto__:null,searchSvg:Ck});const Ik=G`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;var Ak=Object.freeze({__proto__:null,sendSvg:Ik});const Sk=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var Nk=Object.freeze({__proto__:null,swapHorizontalSvg:Sk});const Pk=G`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;var kk=Object.freeze({__proto__:null,swapHorizontalMediumSvg:Pk});const Ok=G`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;var Tk=Object.freeze({__proto__:null,swapHorizontalBoldSvg:Ok});const Rk=G`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;var $k=Object.freeze({__proto__:null,swapHorizontalRoundedBoldSvg:Rk});const Lk=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var Bk=Object.freeze({__proto__:null,swapVerticalSvg:Lk});const Uk=G`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;var Mk=Object.freeze({__proto__:null,telegramSvg:Uk});const Dk=G`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;var jk=Object.freeze({__proto__:null,threeDotsSvg:Dk});const zk=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var Fk=Object.freeze({__proto__:null,twitchSvg:zk});const Hk=G`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var uv=Object.freeze({__proto__:null,xSvg:Hk});const qk=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;var Wk=Object.freeze({__proto__:null,twitterIconSvg:qk});const Vk=G`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;var Kk=Object.freeze({__proto__:null,verifySvg:Vk});const Gk=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;var Zk=Object.freeze({__proto__:null,verifyFilledSvg:Gk});const Yk=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;var Jk=Object.freeze({__proto__:null,walletSvg:Yk});const Xk=G`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Qk=G`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,eO=G`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;var Hp=Object.freeze({__proto__:null,walletConnectSvg:Xk,walletConnectLightBrownSvg:Qk,walletConnectBrownSvg:eO});const tO=G`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var iO=Object.freeze({__proto__:null,walletPlaceholderSvg:tO});const sO=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var rO=Object.freeze({__proto__:null,warningCircleSvg:sO});const nO=G`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;var oO=Object.freeze({__proto__:null,infoSvg:nO});const aO=G`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var cO=Object.freeze({__proto__:null,exclamationTriangleSvg:aO});const lO=G`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
  <path d="M9.3335 4.66667C9.3335 2.08934 11.4229 0 14.0002 0H20.6669C23.2442 0 25.3335 2.08934 25.3335 4.66667V11.3333C25.3335 13.9106 23.2442 16 20.6669 16H14.0002C11.4229 16 9.3335 13.9106 9.3335 11.3333V4.66667Z" fill="#363636"/>
  <path d="M15.6055 11.0003L17.9448 4.66699H18.6316L16.2923 11.0003H15.6055Z" fill="#F6F6F6"/>
  <path d="M0 4.33333C0 1.9401 1.9401 0 4.33333 0C6.72657 0 8.66669 1.9401 8.66669 4.33333V11.6667C8.66669 14.0599 6.72657 16 4.33333 16C1.9401 16 0 14.0599 0 11.6667V4.33333Z" fill="#363636"/>
  <path d="M3.9165 9.99934V9.16602H4.74983V9.99934H3.9165Z" fill="#F6F6F6"/>
  <path d="M26 8C26 3.58172 29.3517 0 33.4863 0H52.5137C56.6483 0 60 3.58172 60 8C60 12.4183 56.6483 16 52.5137 16H33.4863C29.3517 16 26 12.4183 26 8Z" fill="#363636"/>
  <path d="M49.3687 9.95834V6.26232H50.0213V6.81966C50.256 6.40899 50.7326 6.16699 51.2606 6.16699C52.0599 6.16699 52.6173 6.67299 52.6173 7.65566V9.95834H51.972V7.69234C51.972 7.04696 51.6053 6.70966 51.07 6.70966C50.4906 6.70966 50.0213 7.17168 50.0213 7.82433V9.95834H49.3687Z" fill="#F6F6F6"/>
  <path d="M45.2538 9.95773L44.5718 6.26172H45.1877L45.6717 9.31242L46.3098 7.30306H46.9184L47.5491 9.29041L48.0404 6.26172H48.6564L47.9744 9.95773H47.2411L46.6178 8.03641L45.9871 9.95773H45.2538Z" fill="#F6F6F6"/>
  <path d="M42.3709 10.0536C41.2489 10.0536 40.5889 9.21765 40.5889 8.1103C40.5889 7.01035 41.2489 6.16699 42.3709 6.16699C43.4929 6.16699 44.1529 7.01035 44.1529 8.1103C44.1529 9.21765 43.4929 10.0536 42.3709 10.0536ZM42.3709 9.51096C43.1775 9.51096 43.4856 8.82164 43.4856 8.10296C43.4856 7.39163 43.1775 6.70966 42.3709 6.70966C41.5642 6.70966 41.2562 7.39163 41.2562 8.10296C41.2562 8.82164 41.5642 9.51096 42.3709 9.51096Z" fill="#F6F6F6"/>
  <path d="M38.2805 10.0536C37.1952 10.0536 36.5132 9.22499 36.5132 8.1103C36.5132 7.00302 37.1952 6.16699 38.2805 6.16699C39.1972 6.16699 40.0038 6.68766 39.9159 8.27896H37.1805C37.2319 8.96103 37.5472 9.5183 38.2805 9.5183C38.7718 9.5183 39.0945 9.21765 39.2045 8.87299H39.8499C39.7472 9.48903 39.1679 10.0536 38.2805 10.0536ZM37.1952 7.78765H39.2852C39.2338 7.04696 38.8892 6.70232 38.2805 6.70232C37.6132 6.70232 37.2832 7.18635 37.1952 7.78765Z" fill="#F6F6F6"/>
  <path d="M33.3828 9.95773V6.26172H34.0501V6.88506C34.2848 6.47439 34.6882 6.26172 35.1061 6.26172H35.9935V6.88506H35.0548C34.4682 6.88506 34.0501 7.26638 34.0501 8.00706V9.95773H33.3828Z" fill="#F6F6F6"/>
</svg>`;var dO=Object.freeze({__proto__:null,reownSvg:lO})}}]);
