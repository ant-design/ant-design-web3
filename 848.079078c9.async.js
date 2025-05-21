"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[848],{84370:function(O,d,n){n.d(d,{Z:function(){return I}});var o=n(53649),t=n.n(o),a=n(1735),s=n(37449),_=n(7215),l=n(72152),m,i=function(){var r=(0,_.Fg)(),g=(0,_.vJ)(m||(m=t()([`
    ul.anticons-list {
      margin: 10px 0;
      overflow: hidden;
      direction: ltr;
      list-style: none;

      li {
        position: relative;
        float: left;
        width: 16.66%;
        height: 100px;
        margin: 3px 0;
        padding: 10px 0 0;
        overflow: hidden;
        color: #555;
        text-align: center;
        list-style: none;
        background-color: inherit;
        border-radius: 4px;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

        .rtl & {
          margin: 3px 0;
          padding: 10px 0 0;
        }

        .anticon {
          margin: 12px 0 8px;
          font-size: 36px;
          transition: transform 0.3s ease-in-out;
          will-change: transform;
        }

        .anticon-class {
          display: block;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
            monospace;
          white-space: nowrap;
          text-align: center;
          transform: scale(0.83);

          .ant-badge {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: color 0.3s ease-in-out;
            line-height: 1.5;
          }
        }

        &:hover {
          color: #fff;
          background-color: `,`;

          .anticon {
            transform: scale(1.4);
          }

          .ant-badge {
            color: #fff;
          }
        }

        &.CircleFilled .anticon {
          border-radius: 50%;
        }

        &.CircleFilled:hover {
          color: #000;

          .anticon {
            color: #000;
            background-color: #000;
          }
        }

        &.isWhite .anticon {
          background-color: #000;
        }

        &.copied:hover {
          color: rgba(255, 255, 255, 0.2);
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          line-height: 110px;
          text-align: center;
          background: #1677ff;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
          content: 'Copied!';
          z-index: -1;
        }

        &.copied::after {
          opacity: 1;
        }
      }
    }

    .copied-code {
      padding: 2px 4px;
      font-size: 12px;
      background: #f5f5f5;
      border-radius: 2px;
    }
  `])),r.colorPrimary);return(0,l.jsx)(g,{})},u=i,M,e,b,c=a.lazy(function(){return Promise.all([n.e(5241),n.e(5205),n.e(658),n.e(4883),n.e(7709)]).then(n.bind(n,47709))}),j=(0,_.kc)(function(E){var r=E.css;return{searchWrapper:r(M||(M=t()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:r(e||(e=t()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:r(b||(b=t()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),C=function(){var r=j(),g=r.styles;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:g.searchWrapper,children:[(0,l.jsx)(s.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,l.jsx)(s.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,l.jsx)(s.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,l.jsx)("div",{className:g.fallbackWrapper,children:Array(24).fill(1).map(function(R,p){return(0,l.jsx)("div",{className:g.skeletonWrapper,children:(0,l.jsx)(s.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},p)})})]})},T=function(){return(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(C,{}),children:[(0,l.jsx)(u,{}),(0,l.jsx)(c,{})]})},I=T},41370:function(O,d,n){n.d(d,{Z:function(){return z}});var o=n(53649),t=n.n(o),a=n(1735),s=n(3358),_=n(19341),l=n(7215),m=n(4151),i=n(85873),u=n(82187),M=n.n(u),e=n(72152),b,c=(0,l.kc)(function(){return{iconWrap:(0,l.iv)(b||(b=t()([`
    display: inline-flex;
    align-items: center;
    line-height: 0;
    text-align: center;
    vertical-align: -0.125em;
  `])))}}),j=function(h){var y=(0,i.uB)(),x=(0,i.uB)(),P=(0,i.uB)(),L=(0,i.uB)(),D=(0,i.uB)(),A=(0,i.uB)(),W=(0,i.uB)(),N=(0,i.uB)(),k=(0,i.uB)(),K=(0,i.uB)(),F=(0,i.uB)(),f=(0,i.uB)(),B=(0,i.uB)(),v=(0,i.uB)(),Z=(0,i.uB)(),G=(0,i.uB)(),H=(0,i.uB)(),$=(0,i.uB)(),Q=h.className,V=h.style,J=c(),Y=J.styles;return(0,e.jsx)("span",{className:M()(Y.iconWrap,Q),style:V,children:(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 70",width:"1em",height:"1em",children:[(0,e.jsx)("path",{id:$,d:"M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"}),(0,e.jsxs)("g",{id:H,children:[(0,e.jsx)("path",{id:G,d:"M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z",style:{fill:"#fbf0df"}}),(0,e.jsx)("path",{id:Z,"data-name":"Bottom Shadow",d:"M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z",style:{fill:"#f6dece"}}),(0,e.jsx)("path",{id:v,"data-name":"Light Shine",d:"M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z",style:{fill:"#fffefc"}}),(0,e.jsx)("path",{id:B,d:"M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z",style:{fill:"#ccbea7",fillRule:"evenodd"}}),(0,e.jsx)("path",{id:f,d:"M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"})]}),(0,e.jsxs)("g",{id:F,children:[(0,e.jsx)("g",{id:K,"data-name":"Background",children:(0,e.jsx)("path",{d:"M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z",style:{fill:"#b71422"}})}),(0,e.jsxs)("g",{id:k,children:[(0,e.jsx)("path",{id:N,"data-name":"Background",d:"M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z",style:{fill:"#ff6164"}}),(0,e.jsx)("path",{id:W,"data-name":"Outline",d:"M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"})]}),(0,e.jsx)("path",{id:A,"data-name":"Outline",d:"M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"})]}),(0,e.jsxs)("g",{id:D,children:[(0,e.jsx)("ellipse",{id:L,"data-name":"Right Blush",cx:"53.22",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,e.jsx)("ellipse",{id:P,"data-name":"Left Bluch",cx:"22.95",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,e.jsx)("path",{id:x,d:"M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z",style:{fillRule:"evenodd"}}),(0,e.jsx)("path",{id:y,d:"M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z",style:{fill:"#fff",fillRule:"evenodd"}})]})]})})},C=j,T=function(h){var y=h.className,x=h.style;return(0,e.jsxs)("svg",{className:y,style:x,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em",children:[(0,e.jsx)("title",{children:"NPM"}),(0,e.jsx)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"})]})},I=T,E=function(h){var y=h.className,x=h.style;return(0,e.jsx)("svg",{className:y,style:x,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",children:(0,e.jsx)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"})})},r=E,g=function(h){var y=h.className,x=h.style;return(0,e.jsx)("svg",{className:y,style:x,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em",children:(0,e.jsx)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"})})},R=g,p,w=(0,l.kc)(function(){return{packageManager:(0,l.iv)(p||(p=t()([`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-inline-end: 8px;
    }
  `])))}}),S=function(h){var y=h.npm,x=h.yarn,P=h.pnpm,L=h.bun,D=w(),A=D.styles,W=a.useMemo(function(){return[{key:"npm",children:y?(0,e.jsx)(m.Z,{lang:"bash",children:y}):null,label:(0,e.jsxs)("div",{className:A.packageManager,children:[(0,e.jsx)(I,{}),(0,e.jsx)("span",{children:"npm"})]})},{key:"yarn",children:x?(0,e.jsx)(m.Z,{lang:"bash",children:x}):null,label:(0,e.jsxs)("div",{className:A.packageManager,children:[(0,e.jsx)(R,{}),(0,e.jsx)("span",{children:"yarn"})]})},{key:"pnpm",children:P?(0,e.jsx)(m.Z,{lang:"bash",children:P}):null,label:(0,e.jsxs)("div",{className:A.packageManager,children:[(0,e.jsx)(r,{}),(0,e.jsx)("span",{children:"pnpm"})]})},{key:"bun",children:L?(0,e.jsx)(m.Z,{lang:"bash",children:L}):null,label:(0,e.jsxs)("div",{className:A.packageManager,children:[(0,e.jsx)(C,{}),(0,e.jsx)("span",{children:"bun"})]})}].filter(function(N){return N.children})},[y,x,P,L]);return(0,e.jsx)(s.ZP,{theme:{components:{Tabs:{horizontalMargin:"0"}}},children:(0,e.jsx)(_.Z,{className:"markdown",size:"small",defaultActiveKey:"npm",items:W})})},z=S},91555:function(O,d,n){var o=n(41370),t=n(72152),a=function(_){var l=_.command,m="npm run ".concat(l),i="yarn ".concat(l),u="pnpm ".concat(l),M="bun ".concat(l);return(0,t.jsx)(o.Z,{npm:m,yarn:i,pnpm:u,bun:M})};d.Z=a},56223:function(O,d,n){var o=n(41370),t=n(72152),a=function(_){var l=_.packageNames,m=_.save,i=!1;(m==="true"||m!=="false")&&(i=!0);var u=i?"".concat(m==="true"?"--save":"--save".concat(m==="dev"?"-dev":"-".concat(m))," "):"",M="npm install ".concat(l," ").concat(u),e="yarn add ".concat(l),b="pnpm add ".concat(l," ").concat(u),c="bun add ".concat(l);return(0,t.jsx)(o.Z,{npm:M,yarn:e,pnpm:b,bun:c})};d.Z=a},84086:function(O,d,n){var o=n(48305),t=n.n(o),a=n(53649),s=n.n(a),_=n(1735),l=n(64026),m=n(84111),i=n(55691),u=n(29477),M=n(80445),e=n(82206),b=n(58295),c=n(61298),j=n(24791),C=n(68720),T=n(36333),I=n(7215),E=n(40956),r=n(72152),g,R,p,w,S,z,U,h,y={Bitcoin:(0,r.jsx)(l.g,{}),Ethereum:(0,r.jsx)(m.V,{}),Solana:(0,r.jsx)(i.i,{}),Sui:(0,r.jsx)(u.Y,{}),TON:(0,r.jsx)(M.b,{})},x=(0,I.kc)(function(P,L){var D=P.token,A=P.css,W=L.dark;return{componentsOverviewGroupTitle:A(g||(g=s()([`
    margin-bottom: `,`px !important;
  `])),D.marginLG),componentsOverviewTitle:A(R||(R=s()([`
    overflow: hidden;
    color: `,`;
    text-overflow: ellipsis;
  `])),D.colorTextHeading),componentsOverviewImg:A(p||(p=s()([`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 152px;
  `]))),componentOverviewAdapterCover:A(w||(w=s()([`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    width: 50px;
    height: 50px;
    border-radius: 36px;
    font-size: 44px;
    background-image: `,`;
    border-image-slice: 1;
    box-shadow: `,`;
  `])),W?"linear-gradient(175deg, #262525 -8%, #363535 32%)":"linear-gradient(175deg, #f5f8fc -8%, #ffffff 32%)",W?"0px 0 14px 2px rgba(210, 198, 255, 0.25), inset 0px -2px 0 0 #525355":"0px 25px 14px 2px rgba(210, 198, 255, 0.25), inset 0px -4px 0 0 #e6ebf3"),componentsOverviewCard:A(S||(S=s()([`
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      box-shadow:
        0 6px 16px -8px #00000014,
        0 9px 28px #0000000d,
        0 12px 48px 16px #00000008;
    }
  `]))),componentsOverviewAffix:A(z||(z=s()([`
    display: flex;
    transition: all `,`;
    justify-content: space-between;
  `])),D.motionDurationSlow),componentsOverviewSearch:A(U||(U=s()([`
    padding: 0;
    box-shadow: none !important;
    .anticon-search {
      color: `,`;
    }
  `])),D.colorTextDisabled),componentsOverviewContent:A(h||(h=s()([`
    &:empty:after {
      display: block;
      padding: `,"px 0 ",`px;
      color: `,`;
      text-align: center;
      border-bottom: 1px solid `,`;
      content: 'Not Found';
    }
  `])),D.padding,D.paddingMD*2,D.colorTextDisabled,D.colorSplit)}});d.Z=function(){var P=(0,E.useSidebarData)(),L=e.Z.Title,D=(0,E.usePrefersColor)(),A=t()(D,1),W=A[0],N=W===void 0?"light":W,k=x({dark:N.includes("dark")}),K=k.styles,F=(0,_.useMemo)(function(){return P.filter(function(f){return f.title}).map(function(f){return{title:f.title||"",children:f.children.map(function(B){var v,Z,G,H;return{title:((v=B.frontmatter)===null||v===void 0?void 0:v.title)||"",subtitle:(Z=B.frontmatter)===null||Z===void 0?void 0:Z.subtitle,cover:(G=B.frontmatter)===null||G===void 0?void 0:G.cover,coverDark:(H=B.frontmatter)===null||H===void 0?void 0:H.coverDark,link:B.link}})}})},[P]);return(0,r.jsx)("section",{className:"markdown",children:(0,r.jsx)("div",{className:K.componentsOverviewContent,children:F.filter(function(f){return f==null?void 0:f.title}).map(function(f){var B=f.children;return B.length?(0,r.jsxs)("div",{children:[(0,r.jsx)(L,{level:2,className:K.componentsOverviewGroupTitle,children:(0,r.jsxs)(b.Z,{gap:"small",align:"center",children:[(0,r.jsx)("span",{style:{fontSize:24},children:f==null?void 0:f.title}),(0,r.jsx)(c.Z,{style:{display:"block"},children:B.length})]})}),(0,r.jsx)(j.Z,{gutter:[24,24],children:B.map(function(v){var Z=y[v.title];return(0,r.jsx)(C.Z,{xs:24,sm:12,lg:8,xl:6,children:(0,r.jsx)(E.Link,{to:v.link,prefetch:!0,children:(0,r.jsx)(T.Z,{size:"small",className:K.componentsOverviewCard,title:(0,r.jsxs)("div",{className:K.componentsOverviewTitle,children:[v==null?void 0:v.title," ",v.subtitle]}),children:(0,r.jsx)("div",{className:K.componentsOverviewImg,children:Z?(0,r.jsx)("div",{className:K.componentOverviewAdapterCover,children:Z}):(0,r.jsx)("img",{src:N.includes("dark")&&v.coverDark?v.coverDark:v.cover,alt:v==null?void 0:v.title})})})})},v==null?void 0:v.title)})})]},f==null?void 0:f.title):null})})})}},9545:function(O,d,n){n.d(d,{Z:function(){return D}});var o=n(48305),t=n.n(o),a=n(1735),s=n(32346),_=n(3358),l=n(7215),m=n(9760),i=n(44911),u=n(23741),M=n(26643),e=n(40956),b=n(26068),c=n.n(b),j={Address:["Basic Address","Copyable"]},C={"Basic Address":[{demo:a.createElement(n(57891).Z),key:"Basic Address"}],Copyable:[{demo:a.createElement(n(64003).Z),key:"Copyable"}]},T={"Browser Link":["Basic Browser Link","Icon Only"]},I={"Basic Browser Link":[{demo:a.createElement(n(65318).Z),key:"Basic Browser Link"}],"Icon Only":[{demo:a.createElement(n(59840).Z),key:"Icon Only"}]},E={"Connect Button":["Avatar","Balance","Chains"]},r={Avatar:[{demo:a.createElement(n(64909).Z),key:"Avatar"}],Balance:[{demo:a.createElement(n(71671).Z),key:"Balance"}],Chains:[{demo:a.createElement(n(50983).Z),key:"Chains"}]},g={"Connect Modal":["Normal","Simple"]},R={Normal:[{demo:a.createElement(n(76341).Z),key:"Panel"}],Simple:[{demo:a.createElement(n(76341)._),key:"Simple"}]},p={"Crypto Price":["Basic Crypto Price","With Icon"]},w={"Basic Crypto Price":[{demo:a.createElement(n(89139).Z),key:"Basic Crypto Price"}],"With Icon":[{demo:a.createElement(n(76712).Z),key:"With Icon"}]},S={"NFT Card":["Basic NFT Card"]},z={"Basic NFT Card":[{demo:a.createElement(n(62286).Z),tokens:[],key:"Basic NFT Card"}]},U=c()(c()(c()(c()(c()(c()({},g),S),j),T),E),p),h=c()(c()(c()(c()(c()(c()({},R),C),I),r),w),z),y=n(57961),x=n(72152),P="ant-design-web3-custom-theme",L=function(){var W=s.ZP.useMessage(),N=t()(W,2),k=N[0],K=N[1],F=a.useRef((0,m.NK)(JSON.parse(typeof localStorage<"u"&&localStorage.getItem(P)||"{}"))),f=(0,e.useLocale)(),B=(0,l.Fg)();return(0,x.jsxs)(a.StrictMode,{children:[K,(0,x.jsx)("div",{className:y.Z.container,style:{height:"calc(100vh - ".concat(B.headerHeight,"px)")},children:(0,x.jsx)(_.ZP,{locale:f.id==="zh-CN"?M.Z:u.default,theme:{hashed:!0},children:(0,x.jsx)(i.Z,{showTheme:!0,initialThemeConfig:F.current,components:U,demos:h,onSave:function(Z){localStorage.setItem(P,JSON.stringify((0,m.Vl)(Z))),navigator.clipboard.writeText(JSON.stringify(Z,null,2)),k.success("\u{1F389} \u4FDD\u5B58\u6210\u529F\uFF0C\u53EF\u7C98\u8D34\u5230\u9879\u76EE\u4E2D\u4F7F\u7528\uFF01")}})})})]})},D=L},57891:function(O,d,n){var o=n(49605),t=n(72152),a=function(){return(0,t.jsx)(o.k,{ellipsis:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"})};d.Z=a},64003:function(O,d,n){var o=n(49605),t=n(72152),a=function(){return(0,t.jsx)(o.k,{ellipsis:{headClip:8,tailClip:6},copyable:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"})};d.Z=a},65318:function(O,d,n){var o=n(49287),t=n(77178),a=n(72152),s=function(){return(0,a.jsx)(o.V,{chain:t.ny,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",target:"_blank",rel:"noopener noreferrer"})};d.Z=s},59840:function(O,d,n){var o=n(49287),t=n(72152),a=function(){return(0,t.jsx)("div",{style:{fontSize:64},children:(0,t.jsx)(o.V,{iconOnly:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",target:"_blank",rel:"noopener noreferrer"})})};d.Z=a},64909:function(O,d,n){var o=n(33423),t=n(34080),a=n(72152),s=function(){return(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(o.N,{size:"small",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!1}),(0,a.jsx)(o.N,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!1}),(0,a.jsx)(o.N,{size:"large",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!1})]})};d.Z=s},71671:function(O,d,n){var o=n(33423),t=n(34080),a=n(72152),s=function(){return(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(o.N,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"test.eth"},balance:{symbol:"ETH",decimals:18,value:1000000000000000000n}}),(0,a.jsx)(o.N,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"test.eth"},balance:{symbol:"ETH",decimals:18,value:300000000000000000n,coverAddress:!1}}),(0,a.jsx)(o.N,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},balance:{symbol:"ETH",decimals:18,value:1340000000000000000n,coverAddress:!1}})]})};d.Z=s},50983:function(O,d,n){var o=n(90228),t=n.n(o),a=n(87999),s=n.n(a),_=n(48305),l=n.n(_),m=n(1735),i=n(33423),u=n(77178),M=n(34080),e=n(72152),b=function(){var j=m.useState(u.mg),C=l()(j,2),T=C[0],I=C[1];return(0,e.jsxs)(M.Z,{children:[(0,e.jsx)(i.N,{chain:T,availableChains:[u.ny,u.mg],account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},onSwitchChain:function(){var E=s()(t()().mark(function r(g){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:I(g);case 1:case"end":return p.stop()}},r)}));return function(r){return E.apply(this,arguments)}}()}),(0,e.jsx)(i.N,{chain:T,availableChains:[u.ny,u.mg],type:"primary",onSwitchChain:function(){var E=s()(t()().mark(function r(g){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:I(g);case 1:case"end":return p.stop()}},r)}));return function(r){return E.apply(this,arguments)}}()}),(0,e.jsx)(i.N,{chain:T,availableChains:[u.ny,u.mg],size:"large",onSwitchChain:function(){var E=s()(t()().mark(function r(g){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:I(g);case 1:case"end":return p.stop()}},r)}));return function(r){return E.apply(this,arguments)}}()})]})};d.Z=b},76341:function(O,d,n){n.d(d,{_:function(){return b}});var o=n(26068),t=n.n(o),a=n(1735),s=n(8922),_=n(52474),l=n(13096),m=n(36333),i=n(72152),u=[_.Z,t()(t()({},l.T),{},{getQrCode:function(){return new Promise(function(j){return setTimeout(function(){return j({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),{icon:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*8LhqSZ_KatsAAAAAAAAAAAAAelrGAQ/fmt.webp",name:"Test Wallet3",remark:"remark 3",app:{link:"https://test.com/xxx"},getQrCode:function(){return new Promise(function(j){return setTimeout(function(){return j({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}],M=function(j,C){return j==="Popular"?-1:C==="Popular"?1:j.localeCompare(C)},e=function(){return(0,i.jsx)(m.Z,{style:{maxWidth:797},styles:{body:{padding:0}},children:(0,i.jsx)(s.ConnectModal.ModalPanel,{group:{groupOrder:M},walletList:u})})},b=function(){return(0,i.jsx)(m.Z,{style:{maxWidth:400},styles:{body:{padding:0}},children:(0,i.jsx)(s.ConnectModal.ModalPanel,{group:{groupOrder:M},mode:"simple",walletList:u})})};d.Z=e},89139:function(O,d,n){var o=n(58089),t=n(72152),a=function(){return(0,t.jsx)(o.O,{value:1230000000000000000n})};d.Z=a},76712:function(O,d,n){var o=n(58089),t=n(64026),a=n(34080),s=n(72152),_=function(){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(o.O,{icon:!0,value:1230000000000000000n}),(0,s.jsx)(o.O,{icon:(0,s.jsx)(t.g,{}),value:1230000000000000000n})]})};d.Z=_},62286:function(O,d,n){var o=n(1735),t=n(95391),a=n(34080),s=n(72152),_=function(){return(0,s.jsxs)(a.Z,{size:16,children:[(0,s.jsx)(t.Z,{name:"My NFT",tokenId:16,price:{value:1230000000000000000n},like:{totalLikes:1600},description:"This is description",showAction:!0,footer:"This is footer",image:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*jlrDRrBXZiEAAAAAAAAAAAAADlrGAQ/original"}),(0,s.jsx)(t.Z,{type:"pithy",name:"My NFT",tokenId:16,price:{value:1230000000000000000n},like:{totalLikes:1600},description:"This is description",showAction:!0,footer:"This is footer",image:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*jlrDRrBXZiEAAAAAAAAAAAAADlrGAQ/original"})]})};d.Z=_}}]);
