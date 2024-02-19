"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[7119],{66251:function(v,d,e){e.r(d);var g=e(25158),m=e(8709),u=e(77576),p=e(14593),i=e(31240),s=e(5995),r=e(47308),t=e(44768),x=e(39517),j=e(77405),c=e(69271),f=e(50959),n=e(11527);function E(){var y=(0,c.eL)(),a=y.texts;return(0,n.jsx)(c.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"how-dapp-calls-smart-contracts",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-dapp-calls-smart-contracts",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"How DApp calls smart contracts"]}),(0,n.jsx)("p",{children:a[0].value})]}),(0,n.jsx)(u.Z,{type:"info",children:(0,n.jsx)("p",{children:a[1].value})}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)("p",{children:a[2].value}),(0,n.jsxs)("h2",{id:"through-metamask-wallet",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#through-metamask-wallet",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Through MetaMask wallet"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://metamask.io/",children:a[3].value}),a[4].value,(0,n.jsx)("a",{href:"https://metamask.io/download/",children:a[5].value}),a[6].value]}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{alt:"metamask",src:e(48096)})}),(0,n.jsxs)("p",{children:[a[7].value,(0,n.jsx)("code",{children:a[8].value}),a[9].value,(0,n.jsx)("code",{children:a[10].value}),a[11].value]}),(0,n.jsx)(i.Z,{lang:"js",children:a[12].value}),(0,n.jsx)("p",{children:a[13].value}),(0,n.jsx)(i.Z,{lang:"js",children:a[14].value}),(0,n.jsxs)("p",{children:[a[15].value,(0,n.jsx)("a",{href:"https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods",children:a[16].value}),a[17].value]})]}),(0,n.jsx)(u.Z,{type:"info",children:(0,n.jsxs)("p",{children:[a[18].value,(0,n.jsx)(c.rU,{to:"/course/dev-init",children:a[19].value}),a[20].value]})}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"through-node-rpc",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#through-node-rpc",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Through node RPC"]}),(0,n.jsxs)("p",{children:[a[21].value,(0,n.jsx)("a",{href:"https://zan.top/",children:a[22].value}),a[23].value,(0,n.jsx)("a",{href:"https://infura.io/",children:a[24].value}),a[25].value]}),(0,n.jsxs)("p",{children:[a[26].value,(0,n.jsx)("a",{href:"https://docs.zan.top/reference/eth-accounts",children:a[27].value}),a[28].value]}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{alt:"zan",src:e(2441)})}),(0,n.jsxs)("h2",{id:"summarize",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#summarize",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Summarize"]}),(0,n.jsx)("p",{children:a[29].value})]})]})})}d.default=E},44768:function(v,d,e){e.d(d,{Z:function(){return M}});var g=e(18840),m=e.n(g),u=e(50959),p=e(29320),i=e(45584),s=e(11527),r,t=function(){var _=(0,i.Fg)(),l=(0,i.vJ)(r||(r=m()([`
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
  `])),_.colorPrimary);return(0,s.jsx)(l,{})},x=t,j,c,f,n=u.lazy(function(){return Promise.all([e.e(4719),e.e(7239),e.e(4303),e.e(5598),e.e(9579)]).then(e.bind(e,49579))}),E=(0,i.kc)(function(b){var _=b.css;return{searchWrapper:_(j||(j=m()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:_(c||(c=m()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:_(f||(f=m()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),y=function(){var _=E(),l=_.styles;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:l.searchWrapper,children:[(0,s.jsx)(p.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,s.jsx)(p.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,s.jsx)(p.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,s.jsx)("div",{className:l.fallbackWrapper,children:Array(24).fill(1).map(function(h,o){return(0,s.jsx)("div",{className:l.skeletonWrapper,children:(0,s.jsx)(p.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},o)})})]})},a=function(){return(0,s.jsxs)(u.Suspense,{fallback:(0,s.jsx)(y,{}),children:[(0,s.jsx)(x,{}),(0,s.jsx)(n,{})]})},M=a},39517:function(v,d,e){e.d(d,{Z:function(){return b}});var g=e(18840),m=e.n(g),u=e(50959),p=e(2909),i=e(17515),s=e(45584),r=e(31240),t=e(11527),x=function(l){var h=l.className,o=l.style;return(0,t.jsx)("svg",{className:h,style:o,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em",children:(0,t.jsx)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"})})},j=x,c=function(l){var h=l.className,o=l.style;return(0,t.jsx)("svg",{className:h,style:o,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",children:(0,t.jsx)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"})})},f=c,n=function(l){var h=l.className,o=l.style;return(0,t.jsx)("svg",{className:h,style:o,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em",children:(0,t.jsx)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"})})},E=n,y,a=(0,s.kc)(function(){return{packageManager:(0,s.iv)(y||(y=m()([`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-inline-end: 8px;
    }
  `])))}}),M=function(l){var h=l.npm,o=l.yarn,I=l.pnpm,D=a(),w=D.styles,P=u.useMemo(function(){return[{key:"npm",children:h?(0,t.jsx)(r.Z,{lang:"bash",children:h}):null,label:(0,t.jsxs)("div",{className:w.packageManager,children:[(0,t.jsx)(j,{}),(0,t.jsx)("span",{children:"npm"})]})},{key:"yarn",children:o?(0,t.jsx)(r.Z,{lang:"bash",children:o}):null,label:(0,t.jsxs)("div",{className:w.packageManager,children:[(0,t.jsx)(E,{}),(0,t.jsx)("span",{children:"yarn"})]})},{key:"pnpm",children:I?(0,t.jsx)(r.Z,{lang:"bash",children:I}):null,label:(0,t.jsxs)("div",{className:w.packageManager,children:[(0,t.jsx)(f,{}),(0,t.jsx)("span",{children:"pnpm"})]})}].filter(function(O){return O.children})},[h,o,I]);return(0,t.jsx)(p.ZP,{theme:{components:{Tabs:{horizontalMargin:"0"}}},children:(0,t.jsx)(i.Z,{className:"markdown",size:"small",defaultActiveKey:"npm",items:P})})},b=M},77405:function(v,d,e){var g=e(39517),m=e(11527),u=function(i){var s=i.packageNames,r=i.save,t=!1;(r==="true"||r!=="false")&&(t=!0);var x=t?"".concat(r==="true"?"--save":"--save".concat(r==="dev"?"-dev":"-".concat(r))," "):"",j="npm install ".concat(s," ").concat(x),c="yarn add ".concat(s),f="pnpm add ".concat(s," ").concat(x);return(0,m.jsx)(g.Z,{npm:j,yarn:c,pnpm:f})};d.Z=u},48096:function(v,d,e){v.exports=e.p+"static/metamask.3ec99fff.png"},2441:function(v,d,e){v.exports=e.p+"static/zan-api-doc.b372be5e.png"}}]);
