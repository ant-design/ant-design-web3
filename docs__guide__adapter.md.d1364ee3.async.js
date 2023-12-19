"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8891],{36807:function(g,d,a){a.r(d);var x=a(2031),o=a(17635),p=a(12530),l=a(38674),r=a(44613),_=a(81160),h=a(68249),f=a(79649),t=a(87052),m=a(50959),n=a(11527);function c(){var v=(0,t.eL)(),e=v.texts;return(0,n.jsx)(t.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"adapter",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#adapter",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Adapter"]}),(0,n.jsxs)("h2",{id:"what-is-an-adapter",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-an-adapter",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"What is an adapter"]}),(0,n.jsx)("p",{children:e[0].value}),(0,n.jsxs)("p",{children:[e[1].value,(0,n.jsx)("code",{children:e[2].value}),e[3].value]}),(0,n.jsx)("p",{children:e[4].value}),(0,n.jsxs)("p",{children:[e[5].value,(0,n.jsx)(t.rU,{to:"/components/wagmi",children:e[6].value}),e[7].value,(0,n.jsx)("code",{children:e[8].value}),e[9].value,(0,n.jsx)("code",{children:e[10].value}),e[11].value]}),(0,n.jsxs)("h2",{id:"how-does-the-adapter-work",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-does-the-adapter-work",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"How does the adapter work?"]}),(0,n.jsxs)("p",{children:[e[12].value,(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/types.ts",children:e[13].value}),e[14].value,(0,n.jsx)("code",{children:e[15].value}),e[16].value,(0,n.jsx)(t.rU,{to:"/components/types#universalweb3providerinterface",children:e[17].value}),e[18].value]}),(0,n.jsxs)("p",{children:[e[19].value,(0,n.jsx)("code",{children:e[20].value}),e[21].value,(0,n.jsx)(t.rU,{to:"/components/web3-config-provider",children:e[22].value}),e[23].value,(0,n.jsx)("code",{children:e[24].value}),e[25].value,(0,n.jsx)("code",{children:e[26].value}),e[27].value]}),(0,n.jsxs)("h2",{id:"develop-an-adapter",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#develop-an-adapter",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Develop an adapter"]}),(0,n.jsxs)("p",{children:[e[28].value,(0,n.jsx)(t.rU,{to:"/components/web3-config-provider",children:e[29].value}),e[30].value,(0,n.jsx)("a",{href:"https://wagmi.sh/",children:e[31].value}),e[32].value]})]}),(0,n.jsx)(t.Dl,{demo:{id:"docs-guide-adapter-demo-adapter"},previewerProps:{filename:"docs/guide/demos/adapter.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("p",{children:[e[33].value,(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/tree/main/packages/wagmi",children:e[34].value}),e[35].value,(0,n.jsx)("code",{children:e[36].value}),e[37].value]})})]})})}d.default=c},79649:function(g,d,a){a.d(d,{Z:function(){return w}});var x=a(92935),o=a.n(x),p=a(50959),l=a(77690),r=a(48582),_=a(11527),h,f=function(){var s=(0,l.Fg)(),i=(0,l.vJ)(h||(h=o()([`
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
  `])),s.colorPrimary);return(0,_.jsx)(i,{})},t=f,m,n,c,v=p.lazy(function(){return Promise.all([a.e(9773),a.e(5707),a.e(8717),a.e(4302),a.e(5347)]).then(a.bind(a,15347))}),e=(0,l.kc)(function(u){var s=u.css;return{searchWrapper:s(m||(m=o()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:s(n||(n=o()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:s(c||(c=o()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),b=function(){var s=e(),i=s.styles;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:i.searchWrapper,children:[(0,_.jsx)(r.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,_.jsx)(r.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,_.jsx)(r.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,_.jsx)("div",{className:i.fallbackWrapper,children:Array(24).fill(1).map(function(E,y){return(0,_.jsx)("div",{className:i.skeletonWrapper,children:(0,_.jsx)(r.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},y)})})]})},j=function(){return(0,_.jsxs)(p.Suspense,{fallback:(0,_.jsx)(b,{}),children:[(0,_.jsx)(t,{}),(0,_.jsx)(v,{})]})},w=j}}]);
