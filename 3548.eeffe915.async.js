"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3548],{29087:function(z,C,t){var v=t(44317)},23260:function(z,C,t){var v=t(22315)},61983:function(z,C,t){var v=t(87923)},22315:function(z,C,t){var v=t(33634),h=t(52510),m=t(77859),r=t(4511),y=t(69459);const g=async(x,u)=>{for await(const $ of x)if(await u($)===!1)return};class d{constructor(u){this.G=u}disconnect(){this.G=void 0}reconnect(u){this.G=u}deref(){return this.G}}class i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(u=>this.Z=u))}resume(){var u;(u=this.Z)==null||u.call(this),this.Y=this.Z=void 0}}var l=t(13822);const n=x=>!(0,r.pt)(x)&&typeof x.then=="function",o=1073741823;class a extends y.sR{constructor(){super(...arguments),this._$Cwt=o,this._$Cbt=[],this._$CK=new d(this),this._$CX=new i}render(...u){return u.find($=>!n($))??m.Jb}update(u,$){const R=this._$Cbt;let A=R.length;this._$Cbt=$;const b=this._$CK,P=this._$CX;this.isConnected||this.disconnected();for(let O=0;O<$.length&&!(O>this._$Cwt);O++){const E=$[O];if(!n(E))return this._$Cwt=O,E;O<A&&E===R[O]||(this._$Cwt=o,A=0,Promise.resolve(E).then(async W=>{for(;P.get();)await P.get();const B=b.deref();if(B!==void 0){const U=B._$Cbt.indexOf(E);U>-1&&U<B._$Cwt&&(B._$Cwt=U,B.setValue(W))}}))}return m.Jb}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const s=(0,l.XM)(a);class e{constructor(){this.cache=new Map}set(u,$){this.cache.set(u,$)}get(u){return this.cache.get(u)}has(u){return this.cache.has(u)}delete(u){this.cache.delete(u)}clear(){this.cache.clear()}}const f=new e;var p=t(14162),j=t(22821),c=(0,v.iv)`
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
`,w=function(x,u,$,R){var A=arguments.length,b=A<3?u:R===null?R=Object.getOwnPropertyDescriptor(u,$):R,P;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")b=Reflect.decorate(x,u,$,R);else for(var O=x.length-1;O>=0;O--)(P=x[O])&&(b=(A<3?P(b):A>3?P(u,$,b):P(u,$))||b);return A>3&&b&&Object.defineProperty(u,$,b),b};const S={add:async()=>(await t.e(2268).then(t.bind(t,82268))).addSvg,allWallets:async()=>(await t.e(8557).then(t.bind(t,48557))).allWalletsSvg,arrowBottomCircle:async()=>(await t.e(2556).then(t.bind(t,82556))).arrowBottomCircleSvg,appStore:async()=>(await t.e(3315).then(t.bind(t,53315))).appStoreSvg,apple:async()=>(await t.e(9733).then(t.bind(t,9733))).appleSvg,arrowBottom:async()=>(await t.e(8860).then(t.bind(t,18860))).arrowBottomSvg,arrowLeft:async()=>(await t.e(213).then(t.bind(t,80213))).arrowLeftSvg,arrowRight:async()=>(await t.e(2644).then(t.bind(t,84063))).arrowRightSvg,arrowTop:async()=>(await t.e(5094).then(t.bind(t,25094))).arrowTopSvg,bank:async()=>(await t.e(6987).then(t.bind(t,79712))).bankSvg,browser:async()=>(await t.e(3874).then(t.bind(t,33874))).browserSvg,card:async()=>(await t.e(3788).then(t.bind(t,23788))).cardSvg,checkmark:async()=>(await t.e(6323).then(t.bind(t,76323))).checkmarkSvg,checkmarkBold:async()=>(await t.e(4396).then(t.bind(t,84396))).checkmarkBoldSvg,chevronBottom:async()=>(await t.e(1413).then(t.bind(t,31413))).chevronBottomSvg,chevronLeft:async()=>(await t.e(5201).then(t.bind(t,35201))).chevronLeftSvg,chevronRight:async()=>(await t.e(7952).then(t.bind(t,57952))).chevronRightSvg,chevronTop:async()=>(await t.e(1187).then(t.bind(t,1187))).chevronTopSvg,chromeStore:async()=>(await t.e(7016).then(t.bind(t,77016))).chromeStoreSvg,clock:async()=>(await t.e(3706).then(t.bind(t,73706))).clockSvg,close:async()=>(await t.e(3784).then(t.bind(t,43784))).closeSvg,compass:async()=>(await t.e(8621).then(t.bind(t,88621))).compassSvg,coinPlaceholder:async()=>(await t.e(9182).then(t.bind(t,49182))).coinPlaceholderSvg,copy:async()=>(await t.e(5920).then(t.bind(t,65920))).copySvg,cursor:async()=>(await t.e(3862).then(t.bind(t,93862))).cursorSvg,cursorTransparent:async()=>(await t.e(4743).then(t.bind(t,94743))).cursorTransparentSvg,desktop:async()=>(await t.e(4912).then(t.bind(t,54912))).desktopSvg,disconnect:async()=>(await t.e(5928).then(t.bind(t,54553))).disconnectSvg,discord:async()=>(await t.e(4223).then(t.bind(t,74223))).discordSvg,etherscan:async()=>(await t.e(6019).then(t.bind(t,96019))).etherscanSvg,extension:async()=>(await t.e(1143).then(t.bind(t,91143))).extensionSvg,externalLink:async()=>(await t.e(7129).then(t.bind(t,77129))).externalLinkSvg,facebook:async()=>(await t.e(4273).then(t.bind(t,44273))).facebookSvg,farcaster:async()=>(await t.e(1888).then(t.bind(t,91888))).farcasterSvg,filters:async()=>(await t.e(7641).then(t.bind(t,57641))).filtersSvg,github:async()=>(await t.e(4769).then(t.bind(t,44769))).githubSvg,google:async()=>(await t.e(3161).then(t.bind(t,83161))).googleSvg,helpCircle:async()=>(await t.e(3751).then(t.bind(t,33751))).helpCircleSvg,image:async()=>(await t.e(5364).then(t.bind(t,55364))).imageSvg,id:async()=>(await t.e(1657).then(t.bind(t,41657))).idSvg,infoCircle:async()=>(await t.e(2154).then(t.bind(t,22154))).infoCircleSvg,lightbulb:async()=>(await t.e(4125).then(t.bind(t,94125))).lightbulbSvg,mail:async()=>(await t.e(6628).then(t.bind(t,86628))).mailSvg,mobile:async()=>(await t.e(106).then(t.bind(t,20106))).mobileSvg,more:async()=>(await t.e(6887).then(t.bind(t,96887))).moreSvg,networkPlaceholder:async()=>(await t.e(3712).then(t.bind(t,13712))).networkPlaceholderSvg,nftPlaceholder:async()=>(await t.e(9129).then(t.bind(t,79129))).nftPlaceholderSvg,off:async()=>(await t.e(4692).then(t.bind(t,24692))).offSvg,playStore:async()=>(await t.e(3374).then(t.bind(t,63374))).playStoreSvg,plus:async()=>(await t.e(6718).then(t.bind(t,16718))).plusSvg,qrCode:async()=>(await t.e(179).then(t.bind(t,50179))).qrCodeIcon,recycleHorizontal:async()=>(await t.e(9208).then(t.bind(t,19208))).recycleHorizontalSvg,refresh:async()=>(await t.e(7522).then(t.bind(t,47522))).refreshSvg,search:async()=>(await t.e(572).then(t.bind(t,60572))).searchSvg,send:async()=>(await t.e(3488).then(t.bind(t,43488))).sendSvg,swapHorizontal:async()=>(await t.e(1551).then(t.bind(t,81551))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await t.e(4602).then(t.bind(t,44602))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await t.e(8056).then(t.bind(t,58056))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await t.e(3623).then(t.bind(t,83623))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await t.e(2931).then(t.bind(t,62931))).swapVerticalSvg,telegram:async()=>(await t.e(4501).then(t.bind(t,34501))).telegramSvg,threeDots:async()=>(await t.e(2997).then(t.bind(t,2997))).threeDotsSvg,twitch:async()=>(await t.e(129).then(t.bind(t,60129))).twitchSvg,twitter:async()=>(await t.e(7662).then(t.bind(t,17662))).xSvg,twitterIcon:async()=>(await t.e(3219).then(t.bind(t,53219))).twitterIconSvg,verify:async()=>(await t.e(1340).then(t.bind(t,11340))).verifySvg,verifyFilled:async()=>(await t.e(7700).then(t.bind(t,37700))).verifyFilledSvg,wallet:async()=>(await t.e(5515).then(t.bind(t,95515))).walletSvg,walletConnect:async()=>(await t.e(909).then(t.bind(t,50909))).walletConnectSvg,walletConnectLightBrown:async()=>(await t.e(909).then(t.bind(t,50909))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await t.e(909).then(t.bind(t,50909))).walletConnectBrownSvg,walletPlaceholder:async()=>(await t.e(587).then(t.bind(t,587))).walletPlaceholderSvg,warningCircle:async()=>(await t.e(999).then(t.bind(t,21323))).warningCircleSvg,x:async()=>(await t.e(7662).then(t.bind(t,17662))).xSvg,info:async()=>(await t.e(720).then(t.bind(t,80720))).infoSvg,exclamationTriangle:async()=>(await t.e(1101).then(t.bind(t,41101))).exclamationTriangleSvg,reown:async()=>(await t.e(154).then(t.bind(t,10154))).reownSvg};async function M(x){if(f.has(x))return f.get(x);const $=(S[x]??S.copy)();return f.set(x,$),$}let T=class extends v.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,(0,v.dy)`${s(M(this.name),(0,v.dy)`<div class="fallback"></div>`)}`}};T.styles=[p.ET,p.Bp,c],w([(0,h.Cb)()],T.prototype,"size",void 0),w([(0,h.Cb)()],T.prototype,"name",void 0),w([(0,h.Cb)()],T.prototype,"color",void 0),w([(0,h.Cb)()],T.prototype,"aspectRatio",void 0),T=w([(0,j.M)("wui-icon")],T)},56160:function(z,C,t){var v=t(33634),h=t(52510),m=t(14162),r=t(22821),y=(0,v.iv)`
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
`,g=function(i,l,n,o){var a=arguments.length,s=a<3?l:o===null?o=Object.getOwnPropertyDescriptor(l,n):o,e;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,l,n,o);else for(var f=i.length-1;f>=0;f--)(e=i[f])&&(s=(a<3?e(s):a>3?e(l,n,s):e(l,n))||s);return a>3&&s&&Object.defineProperty(l,n,s),s};let d=class extends v.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,v.dy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};d.styles=[m.ET,m.Bp,y],g([(0,h.Cb)()],d.prototype,"src",void 0),g([(0,h.Cb)()],d.prototype,"alt",void 0),g([(0,h.Cb)()],d.prototype,"size",void 0),d=g([(0,r.M)("wui-image")],d)},48002:function(z,C,t){var v=t(33634),h=t(52510),m=t(14162),r=t(22821),y=(0,v.iv)`
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
`,g=function(i,l,n,o){var a=arguments.length,s=a<3?l:o===null?o=Object.getOwnPropertyDescriptor(l,n):o,e;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,l,n,o);else for(var f=i.length-1;f>=0;f--)(e=i[f])&&(s=(a<3?e(s):a>3?e(l,n,s):e(l,n))||s);return a>3&&s&&Object.defineProperty(l,n,s),s};let d=class extends v.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,(0,v.dy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};d.styles=[m.ET,y],g([(0,h.Cb)()],d.prototype,"color",void 0),g([(0,h.Cb)()],d.prototype,"size",void 0),d=g([(0,r.M)("wui-loading-spinner")],d)},87923:function(z,C,t){var v=t(33634),h=t(52510),m=t(62847),r=t(14162),y=t(22821),g=(0,v.iv)`
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
`,d=function(l,n,o,a){var s=arguments.length,e=s<3?n:a===null?a=Object.getOwnPropertyDescriptor(n,o):a,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,n,o,a);else for(var p=l.length-1;p>=0;p--)(f=l[p])&&(e=(s<3?f(e):s>3?f(n,o,e):f(n,o))||e);return s>3&&e&&Object.defineProperty(n,o,e),e};let i=class extends v.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const n={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,v.dy)`<slot class=${(0,m.$)(n)}></slot>`}};i.styles=[r.ET,g],d([(0,h.Cb)()],i.prototype,"variant",void 0),d([(0,h.Cb)()],i.prototype,"color",void 0),d([(0,h.Cb)()],i.prototype,"align",void 0),d([(0,h.Cb)()],i.prototype,"lineClamp",void 0),i=d([(0,y.M)("wui-text")],i)},91650:function(z,C,t){var v=t(33634),h=t(52510),m=t(22315),r=t(14162),y=t(22821),g=(0,v.iv)`
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
`,d=function(l,n,o,a){var s=arguments.length,e=s<3?n:a===null?a=Object.getOwnPropertyDescriptor(n,o):a,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,n,o,a);else for(var p=l.length-1;p>=0;p--)(f=l[p])&&(e=(s<3?f(e):s>3?f(n,o,e):f(n,o))||e);return s>3&&e&&Object.defineProperty(n,o,e),e};let i=class extends v.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const n=this.iconSize||this.size,o=this.size==="lg",a=this.size==="xl",s=o?"12%":"16%",e=o?"xxs":a?"s":"3xl",f=this.background==="gray",p=this.background==="opaque",j=this.backgroundColor==="accent-100"&&p||this.backgroundColor==="success-100"&&p||this.backgroundColor==="error-100"&&p||this.backgroundColor==="inverse-100"&&p;let c=`var(--wui-color-${this.backgroundColor})`;return j?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:f&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${j||f?"100%":s};
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,v.dy)` <wui-icon color=${this.iconColor} size=${n} name=${this.icon}></wui-icon> `}};i.styles=[r.ET,r.ZM,g],d([(0,h.Cb)()],i.prototype,"size",void 0),d([(0,h.Cb)()],i.prototype,"backgroundColor",void 0),d([(0,h.Cb)()],i.prototype,"iconColor",void 0),d([(0,h.Cb)()],i.prototype,"iconSize",void 0),d([(0,h.Cb)()],i.prototype,"background",void 0),d([(0,h.Cb)({type:Boolean})],i.prototype,"border",void 0),d([(0,h.Cb)()],i.prototype,"borderColor",void 0),d([(0,h.Cb)()],i.prototype,"icon",void 0),i=d([(0,y.M)("wui-icon-box")],i)},62954:function(z,C,t){var v=t(33634),h=t(52510),m=t(87923),r=t(14162),y=t(22821),g=(0,v.iv)`
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
`,d=function(l,n,o,a){var s=arguments.length,e=s<3?n:a===null?a=Object.getOwnPropertyDescriptor(n,o):a,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,n,o,a);else for(var p=l.length-1;p>=0;p--)(f=l[p])&&(e=(s<3?f(e):s>3?f(n,o,e):f(n,o))||e);return s>3&&e&&Object.defineProperty(n,o,e),e};let i=class extends v.oi{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const n=this.size==="md"?"mini-700":"micro-700";return(0,v.dy)`
      <wui-text data-variant=${this.variant} variant=${n} color="inherit">
        <slot></slot>
      </wui-text>
    `}};i.styles=[r.ET,g],d([(0,h.Cb)()],i.prototype,"variant",void 0),d([(0,h.Cb)()],i.prototype,"size",void 0),i=d([(0,y.M)("wui-tag")],i)},44317:function(z,C,t){var v=t(33634),h=t(52510),m=t(14162),r=t(84373),y=t(22821),g=(0,v.iv)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,d=function(l,n,o,a){var s=arguments.length,e=s<3?n:a===null?a=Object.getOwnPropertyDescriptor(n,o):a,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,n,o,a);else for(var p=l.length-1;p>=0;p--)(f=l[p])&&(e=(s<3?f(e):s>3?f(n,o,e):f(n,o))||e);return s>3&&e&&Object.defineProperty(n,o,e),e};let i=class extends v.oi{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&r.H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&r.H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&r.H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&r.H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&r.H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&r.H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&r.H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&r.H.getSpacingStyles(this.margin,3)};
    `,(0,v.dy)`<slot></slot>`}};i.styles=[m.ET,g],d([(0,h.Cb)()],i.prototype,"flexDirection",void 0),d([(0,h.Cb)()],i.prototype,"flexWrap",void 0),d([(0,h.Cb)()],i.prototype,"flexBasis",void 0),d([(0,h.Cb)()],i.prototype,"flexGrow",void 0),d([(0,h.Cb)()],i.prototype,"flexShrink",void 0),d([(0,h.Cb)()],i.prototype,"alignItems",void 0),d([(0,h.Cb)()],i.prototype,"justifyContent",void 0),d([(0,h.Cb)()],i.prototype,"columnGap",void 0),d([(0,h.Cb)()],i.prototype,"rowGap",void 0),d([(0,h.Cb)()],i.prototype,"gap",void 0),d([(0,h.Cb)()],i.prototype,"padding",void 0),d([(0,h.Cb)()],i.prototype,"margin",void 0),i=d([(0,y.M)("wui-flex")],i)},69459:function(z,C,t){t.d(C,{sR:function(){return l}});var v=t(4511),h=t(13822);const m=(n,o)=>{var s;const a=n._$AN;if(a===void 0)return!1;for(const e of a)(s=e._$AO)==null||s.call(e,o,!1),m(e,o);return!0},r=n=>{let o,a;do{if((o=n._$AM)===void 0)break;a=o._$AN,a.delete(n),n=o}while((a==null?void 0:a.size)===0)},y=n=>{for(let o;o=n._$AM;n=o){let a=o._$AN;if(a===void 0)o._$AN=a=new Set;else if(a.has(n))break;a.add(n),i(o)}};function g(n){this._$AN!==void 0?(r(this),this._$AM=n,y(this)):this._$AM=n}function d(n,o=!1,a=0){const s=this._$AH,e=this._$AN;if(e!==void 0&&e.size!==0)if(o)if(Array.isArray(s))for(let f=a;f<s.length;f++)m(s[f],!1),r(s[f]);else s!=null&&(m(s,!1),r(s));else m(this,n)}const i=n=>{n.type==h.pX.CHILD&&(n._$AP??(n._$AP=d),n._$AQ??(n._$AQ=g))};class l extends h.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,a,s){super._$AT(o,a,s),y(this),this.isConnected=o._$AU}_$AO(o,a=!0){var s,e;o!==this.isConnected&&(this.isConnected=o,o?(s=this.reconnected)==null||s.call(this):(e=this.disconnected)==null||e.call(this)),a&&(m(this,o),r(this))}setValue(o){if((0,v.OR)(this._$Ct))this._$Ct._$AI(o,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=o,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}},4511:function(z,C,t){t.d(C,{OR:function(){return l},pt:function(){return m}});var v=t(77859);const{I:h}=v._$LH,m=c=>c===null||typeof c!="object"&&typeof c!="function",r={HTML:1,SVG:2,MATHML:3},y=(c,w)=>w===void 0?(c==null?void 0:c._$litType$)!==void 0:(c==null?void 0:c._$litType$)===w,g=c=>{var w;return((w=c==null?void 0:c._$litType$)==null?void 0:w.h)!=null},d=c=>(c==null?void 0:c._$litDirective$)!==void 0,i=c=>c==null?void 0:c._$litDirective$,l=c=>c.strings===void 0,n=()=>document.createComment(""),o=(c,w,S)=>{var x;const M=c._$AA.parentNode,T=w===void 0?c._$AB:w._$AA;if(S===void 0){const u=M.insertBefore(n(),T),$=M.insertBefore(n(),T);S=new h(u,$,c,c.options)}else{const u=S._$AB.nextSibling,$=S._$AM,R=$!==c;if(R){let A;(x=S._$AQ)==null||x.call(S,c),S._$AM=c,S._$AP!==void 0&&(A=c._$AU)!==$._$AU&&S._$AP(A)}if(u!==T||R){let A=S._$AA;for(;A!==u;){const b=A.nextSibling;M.insertBefore(A,T),A=b}}}return S},a=(c,w,S=c)=>(c._$AI(w,S),c),s={},e=(c,w=s)=>c._$AH=w,f=c=>c._$AH,p=c=>{c._$AR(),c._$AA.remove()},j=c=>{c._$AR()}},13822:function(z,C,t){t.d(C,{XM:function(){return h},Xe:function(){return m},pX:function(){return v}});const v={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h=r=>(...y)=>({_$litDirective$:r,values:y});class m{constructor(y){}get _$AU(){return this._$AM._$AU}_$AT(y,g,d){this._$Ct=y,this._$AM=g,this._$Ci=d}_$AS(y,g){return this.update(y,g)}update(y,g){return this.render(...g)}}},52510:function(z,C,t){t.d(C,{Cb:function(){return r},SB:function(){return y}});var v=t(2377);const h={attribute:!0,type:String,converter:v.Ts,reflect:!1,hasChanged:v.Qu},m=(g=h,d,i)=>{const{kind:l,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),l==="setter"&&((g=Object.create(g)).wrapped=!0),o.set(i.name,g),l==="accessor"){const{name:a}=i;return{set(s){const e=d.get.call(this);d.set.call(this,s),this.requestUpdate(a,e,g)},init(s){return s!==void 0&&this.C(a,void 0,g,s),s}}}if(l==="setter"){const{name:a}=i;return function(s){const e=this[a];d.call(this,s),this.requestUpdate(a,e,g)}}throw Error("Unsupported decorator location: "+l)};function r(g){return(d,i)=>typeof i=="object"?m(g,d,i):((l,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,l),a?Object.getOwnPropertyDescriptor(n,o):void 0})(g,d,i)}function y(g){return r({...g,state:!0,attribute:!1})}},62847:function(z,C,t){t.d(C,{$:function(){return m}});var v=t(77859),h=t(13822);const m=(0,h.XM)(class extends h.Xe{constructor(r){var y;if(super(r),r.type!==h.pX.ATTRIBUTE||r.name!=="class"||((y=r.strings)==null?void 0:y.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(y=>r[y]).join(" ")+" "}update(r,[y]){var d,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(l=>l!=="")));for(const l in y)y[l]&&!((d=this.nt)!=null&&d.has(l))&&this.st.add(l);return this.render(y)}const g=r.element.classList;for(const l of this.st)l in y||(g.remove(l),this.st.delete(l));for(const l in y){const n=!!y[l];n===this.st.has(l)||(i=this.nt)!=null&&i.has(l)||(n?(g.add(l),this.st.add(l)):(g.remove(l),this.st.delete(l)))}return v.Jb}})},24105:function(z,C,t){t.d(C,{o:function(){return h}});var v=t(77859);const h=m=>m??v.Ld}}]);
