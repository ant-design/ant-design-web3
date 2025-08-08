"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[2917],{32917:function(je,ee,c){c.r(ee),c.d(ee,{AppKitModal:function(){return _},W3mModal:function(){return q},W3mModalBase:function(){return f}});var o=c(33634),d=c(52510),Y=c(24105),pe=c(44003),I=c(42858),h=c(51322),u=c(70061),G=c(48112),j=c(16757),w=c(4903),te=c(72302);const ie={isUnsupportedChainView(){return w.RouterController.state.view==="UnsupportedChain"||w.RouterController.state.view==="SwitchNetwork"&&w.RouterController.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){h.I.shake();return}if(await te.w.isSIWXCloseDisabled()){h.I.shake();return}h.I.close()}};var me=c(85545),T=c(95089),he=c(98639),v=c(1822),g=c(14162),N=c(22821),ve=(0,o.iv)`
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
`,fe=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let F=class extends o.oi{render(){return(0,o.dy)`<slot></slot>`}};F.styles=[g.ET,ve],F=fe([(0,N.M)("wui-card")],F);var Me=c(29087),M=c(31344),Le=c(22315),Ue=c(87923),ze=c(44317),ge=(0,o.iv)`
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
`,E=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let x=class extends o.oi{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,(0,o.dy)`
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
    `}onClose(){M.AlertController.close()}};x.styles=[g.ET,ge],E([(0,d.Cb)()],x.prototype,"message",void 0),E([(0,d.Cb)()],x.prototype,"backgroundColor",void 0),E([(0,d.Cb)()],x.prototype,"iconColor",void 0),E([(0,d.Cb)()],x.prototype,"icon",void 0),x=E([(0,N.M)("wui-alertbar")],x);var ye=(0,o.iv)`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,oe=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};const be={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let L=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=M.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(M.AlertController.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=M.AlertController.state,r=be[t];return(0,o.dy)`
      <wui-alertbar
        message=${e}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};L.styles=ye,oe([(0,d.SB)()],L.prototype,"open",void 0),L=oe([(0,v.Mo)("w3m-alertbar")],L);var re=c(78937),Z=c(3669),Ce=c(46426),ne=c(82447),xe=(0,o.iv)`
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
`,B=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let S=class extends o.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,(0,o.dy)`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};S.styles=[g.ET,g.ZM,g.Bp,xe],B([(0,d.Cb)()],S.prototype,"size",void 0),B([(0,d.Cb)({type:Boolean})],S.prototype,"disabled",void 0),B([(0,d.Cb)()],S.prototype,"icon",void 0),B([(0,d.Cb)()],S.prototype,"iconColor",void 0),S=B([(0,N.M)("wui-icon-link")],S);var He=c(56160),Ke=c(91650),Se=(0,o.iv)`
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
`,ae=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let U=class extends o.oi{constructor(){super(...arguments),this.imageSrc=""}render(){return(0,o.dy)`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:(0,o.dy)`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};U.styles=[g.ET,g.ZM,g.Bp,Se],ae([(0,d.Cb)()],U.prototype,"imageSrc",void 0),U=ae([(0,N.M)("wui-select")],U);var Ve=c(62954),Xe=c(61983),k=c(1939),ke=(0,o.iv)`
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
`,y=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};const Re=["SmartSessionList"];function J(){var s,l,D,A,H,K,V;const a=(l=(s=w.RouterController.state.data)==null?void 0:s.connector)==null?void 0:l.name,e=(A=(D=w.RouterController.state.data)==null?void 0:D.wallet)==null?void 0:A.name,t=(K=(H=w.RouterController.state.data)==null?void 0:H.network)==null?void 0:K.name,r=e??a,n=G.ConnectorController.getConnectors();return{Connect:`Connect ${n.length===1&&((V=n[0])==null?void 0:V.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:r?`Get ${r}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:t??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:re.N.state.socialProvider?re.N.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let p=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.heading=J()[w.RouterController.state.view],this.network=u.R.state.activeCaipNetwork,this.networkImage=Z.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=w.RouterController.state.view,this.viewDirection="",this.headerText=J()[w.RouterController.state.view],this.unsubscribe.push(Ce.W.subscribeNetworkImages(()=>{this.networkImage=Z.f.getNetworkImage(this.network)}),w.RouterController.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=J()[e]},k.b.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),u.R.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=Z.f.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){ne.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),w.RouterController.push("WhatIsAWallet")}async onClose(){await ie.safeClose()}rightHeaderTemplate(){var t,r,n;const e=(n=(r=(t=I.OptionsController)==null?void 0:t.state)==null?void 0:r.features)==null?void 0:n.smartSessions;return w.RouterController.state.view!=="Account"||!e?this.closeButtonTemplate():(0,o.dy)`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>w.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return(0,o.dy)`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=Re.includes(this.view);return(0,o.dy)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?(0,o.dy)`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var A;const{view:e}=w.RouterController.state,t=e==="Connect",r=I.OptionsController.state.enableEmbedded,n=e==="ApproveTransaction",i=e==="ConnectingSiwe",s=e==="Account",l=I.OptionsController.state.enableNetworkSwitch,D=n||i||t&&r;return s&&l?(0,o.dy)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,Y.o)((A=this.network)==null?void 0:A.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,Y.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!D?(0,o.dy)`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,o.dy)`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(ne.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),w.RouterController.push("Networks"))}isAllowedNetworkSwitch(){const e=u.R.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:n})=>{var i;return n===((i=this.network)==null?void 0:i.id)});return t||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=w.RouterController.state;let t=k.b.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=k.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var r;const{history:e}=w.RouterController.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){w.RouterController.goBack()}};p.styles=ke,y([(0,d.SB)()],p.prototype,"heading",void 0),y([(0,d.SB)()],p.prototype,"network",void 0),y([(0,d.SB)()],p.prototype,"networkImage",void 0),y([(0,d.SB)()],p.prototype,"showBack",void 0),y([(0,d.SB)()],p.prototype,"prevHistoryLength",void 0),y([(0,d.SB)()],p.prototype,"view",void 0),y([(0,d.SB)()],p.prototype,"viewDirection",void 0),y([(0,d.SB)()],p.prototype,"headerText",void 0),p=y([(0,v.Mo)("w3m-header")],p);var Ye=c(48002),We=(0,o.iv)`
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
`,R=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let b=class extends o.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return(0,o.dy)`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?(0,o.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?(0,o.dy)`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:(0,o.dy)`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};b.styles=[g.ET,We],R([(0,d.Cb)()],b.prototype,"backgroundColor",void 0),R([(0,d.Cb)()],b.prototype,"iconColor",void 0),R([(0,d.Cb)()],b.prototype,"icon",void 0),R([(0,d.Cb)()],b.prototype,"message",void 0),R([(0,d.Cb)()],b.prototype,"loading",void 0),R([(0,d.Cb)()],b.prototype,"iconType",void 0),b=R([(0,N.M)("wui-snackbar")],b);var Ae=(0,o.iv)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,se=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};const Te={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let z=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=T.SnackController.state.open,this.unsubscribe.push(T.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:r}=T.SnackController.state,n=Te[t],{icon:i,iconColor:s}=r??n??{};return(0,o.dy)`
      <wui-snackbar
        message=${e}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${s}
        icon=${i}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),T.SnackController.state.autoClose&&(this.timeout=setTimeout(()=>T.SnackController.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};z.styles=Ae,se([(0,d.SB)()],z.prototype,"open",void 0),z=se([(0,v.Mo)("w3m-snackbar")],z);var le=c(70343),Oe=c(35857),Ie=c(9547);const m=(0,le.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Ne={state:m,subscribe(a){return(0,le.Ld)(m,()=>a(m))},subscribeKey(a,e){return(0,Oe.VW)(m,a,e)},showTooltip({message:a,triggerRect:e,variant:t}){m.open=!0,m.message=a,m.triggerRect=e,m.variant=t},hide(){m.open=!1,m.message="",m.triggerRect={width:0,height:0,top:0,left:0}}},O=(0,Ie.P)(Ne);var Ge=c(23260),Ee=(0,o.iv)`
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
`,$=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let W=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=O.state.open,this.message=O.state.message,this.triggerRect=O.state.triggerRect,this.variant=O.state.variant,this.unsubscribe.push(O.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,(0,o.dy)`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};W.styles=[Ee],$([(0,d.SB)()],W.prototype,"open",void 0),$([(0,d.SB)()],W.prototype,"message",void 0),$([(0,d.SB)()],W.prototype,"triggerRect",void 0),$([(0,d.SB)()],W.prototype,"variant",void 0),W=$([(0,v.Mo)("w3m-tooltip"),(0,v.Mo)("w3m-tooltip")],W);var Be=(0,o.iv)`
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
`,Q=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let P=class extends o.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=w.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(w.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver(([t])=>{const r=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",r),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=r,this.style.animation="unset"},k.b.ANIMATION_DURATIONS.ModalHeight)}),(e=this.resizeObserver)==null||e.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return(0,o.dy)`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return(0,o.dy)`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return(0,o.dy)`<w3m-account-view></w3m-account-view>`;case"AllWallets":return(0,o.dy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return(0,o.dy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return(0,o.dy)`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return(0,o.dy)`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return(0,o.dy)`<w3m-connect-view></w3m-connect-view>`;case"Create":return(0,o.dy)`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,o.dy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return(0,o.dy)`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return(0,o.dy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,o.dy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return(0,o.dy)`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return(0,o.dy)`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return(0,o.dy)`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return(0,o.dy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return(0,o.dy)`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return(0,o.dy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,o.dy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return(0,o.dy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return(0,o.dy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,o.dy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return(0,o.dy)`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return(0,o.dy)`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return(0,o.dy)`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return(0,o.dy)`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return(0,o.dy)`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return(0,o.dy)`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return(0,o.dy)`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return(0,o.dy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return(0,o.dy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return(0,o.dy)`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return(0,o.dy)`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return(0,o.dy)`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return(0,o.dy)`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return(0,o.dy)`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return(0,o.dy)`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return(0,o.dy)`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return(0,o.dy)`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return(0,o.dy)`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return(0,o.dy)`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return(0,o.dy)`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return(0,o.dy)`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return(0,o.dy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return(0,o.dy)`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return(0,o.dy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return(0,o.dy)`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return(0,o.dy)`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return(0,o.dy)`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return(0,o.dy)`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return(0,o.dy)`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return(0,o.dy)`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return(0,o.dy)`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return(0,o.dy)`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return(0,o.dy)`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return(0,o.dy)`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){O.hide();let t=k.b.VIEW_DIRECTION.Next;const{history:r}=w.RouterController.state;r.length<this.prevHistoryLength&&(t=k.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=t,setTimeout(()=>{this.view=e},k.b.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};P.styles=Be,Q([(0,d.SB)()],P.prototype,"view",void 0),Q([(0,d.SB)()],P.prototype,"viewDirection",void 0),P=Q([(0,v.Mo)("w3m-router")],P);var $e=(0,o.iv)`
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

  :host(.appkit-modal) {
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

  :host(.appkit-modal) wui-card {
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
`,C=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};const ce="scroll-lock";class f extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=I.OptionsController.state.enableEmbedded,this.open=h.I.state.open,this.caipAddress=u.R.state.activeCaipAddress,this.caipNetwork=u.R.state.activeCaipNetwork,this.shake=h.I.state.shake,this.filterByNamespace=G.ConnectorController.state.filterByNamespace,this.initializeTheming(),j.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(h.I.subscribeKey("open",e=>e?this.onOpen():this.onClose()),h.I.subscribeKey("shake",e=>this.shake=e),u.R.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),u.R.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),I.OptionsController.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),G.ConnectorController.subscribeKey("filterByNamespace",e=>{var t;this.filterByNamespace!==e&&!((t=u.R.getAccountData(e))!=null&&t.caipAddress)&&(j.ApiController.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){h.I.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?(0,o.dy)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?(0,o.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,o.dy)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,Y.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await ie.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=me.ThemeController.state,r=v.Hg.getColorTheme(t);(0,v.n)(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),T.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=ce,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${ce}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:n}=r.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=u.R.state.isSwitchingNamespace,r=he.j.getPlainAddress(e);!r&&!t?h.I.close():t&&r&&w.RouterController.goBack(),await te.w.initializeIfEnabled(),this.caipAddress=e,u.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){var de,we,ue;const t=this.caipNetwork,r=(de=t==null?void 0:t.caipNetworkId)==null?void 0:de.toString(),n=t==null?void 0:t.chainNamespace,i=(we=e==null?void 0:e.caipNetworkId)==null?void 0:we.toString(),s=e==null?void 0:e.chainNamespace,l=r!==i,A=l&&!(n!==s),H=(t==null?void 0:t.name)===pe.b.UNSUPPORTED_NETWORK_NAME,K=w.RouterController.state.view==="ConnectingExternal",V=!((ue=u.R.getAccountData(e==null?void 0:e.chainNamespace))!=null&&ue.caipAddress),Pe=w.RouterController.state.view==="UnsupportedChain",De=h.I.state.open;let X=!1;De&&!K&&(V?l&&(X=!0):(Pe||A&&!H)&&(X=!0)),X&&w.RouterController.state.view!=="SIWXSignMessage"&&w.RouterController.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(j.ApiController.prefetch(),j.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}f.styles=$e,C([(0,d.Cb)({type:Boolean})],f.prototype,"enableEmbedded",void 0),C([(0,d.SB)()],f.prototype,"open",void 0),C([(0,d.SB)()],f.prototype,"caipAddress",void 0),C([(0,d.SB)()],f.prototype,"caipNetwork",void 0),C([(0,d.SB)()],f.prototype,"shake",void 0),C([(0,d.SB)()],f.prototype,"filterByNamespace",void 0);let q=class extends f{};q=C([(0,v.Mo)("w3m-modal")],q);let _=class extends f{};_=C([(0,v.Mo)("appkit-modal")],_)}}]);
