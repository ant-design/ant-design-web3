"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[4825],{20101:function(g,r,_){_.r(r);var x=_(2031),l=_(17635),d=_(12530),c=_(38674),o=_(44613),t=_(81160),p=_(68249),f=_(79649),s=_(87052),v=_(50959),n=_(11527);function u(){var m=(0,s.eL)(),e=m.texts;return(0,n.jsx)(s.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h1",{id:"ant-design-web3",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ant-design-web3",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Ant Design Web3"]})}),(0,n.jsx)(d.Z,{type:"warning",children:(0,n.jsxs)("p",{children:[e[0].value,(0,n.jsx)("em",{children:e[1].value}),e[2].value,(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/issues",children:e[3].value}),e[4].value]})}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("p",{children:[e[5].value,(0,n.jsx)("a",{href:"https://ant.design/",children:e[6].value}),e[7].value]}),(0,n.jsx)("p",{children:e[8].value}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[e[9].value,(0,n.jsx)("code",{children:e[10].value}),e[11].value,(0,n.jsx)("code",{children:e[12].value}),e[13].value,(0,n.jsx)("code",{children:e[14].value}),e[15].value,(0,n.jsx)("a",{href:"https://docs.ethers.org/v6/",children:e[16].value}),e[17].value,(0,n.jsx)("a",{href:"https://viem.sh/",children:e[18].value}),e[19].value,(0,n.jsx)("a",{href:"https://web3js.org/",children:e[20].value}),e[21].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[e[22].value,(0,n.jsx)("code",{children:e[23].value}),e[24].value,(0,n.jsx)("code",{children:e[25].value}),e[26].value,(0,n.jsx)("a",{href:"https://wagmi.sh/",children:e[27].value}),e[28].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[e[29].value,(0,n.jsx)("code",{children:e[30].value}),e[31].value,(0,n.jsx)(s.rU,{to:"/guide/adapter",children:e[32].value}),e[33].value]})})]}),(0,n.jsxs)("p",{children:[e[34].value,(0,n.jsx)("code",{children:e[35].value}),e[36].value]})]}),(0,n.jsx)(s.Dl,{demo:{id:"docs-guide-demo-guide"},previewerProps:{filename:"docs/guide/demos/guide.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("p",{children:[e[37].value,(0,n.jsx)(s.rU,{to:"/guide/quick-start",children:e[38].value}),e[39].value]})})]})})}r.default=u},79649:function(g,r,_){_.d(r,{Z:function(){return y}});var x=_(92935),l=_.n(x),d=_(50959),c=_(77690),o=_(48582),t=_(11527),p,f=function(){var a=(0,c.Fg)(),i=(0,c.vJ)(p||(p=l()([`
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
  `])),a.colorPrimary);return(0,t.jsx)(i,{})},s=f,v,n,u,m=d.lazy(function(){return Promise.all([_.e(9773),_.e(5707),_.e(8717),_.e(4302),_.e(5347)]).then(_.bind(_,15347))}),e=(0,c.kc)(function(h){var a=h.css;return{searchWrapper:a(v||(v=l()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:a(n||(n=l()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:a(u||(u=l()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),j=function(){var a=e(),i=a.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:i.searchWrapper,children:[(0,t.jsx)(o.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(o.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(o.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:i.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,t.jsx)("div",{className:i.skeletonWrapper,children:(0,t.jsx)(o.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},b=function(){return(0,t.jsxs)(d.Suspense,{fallback:(0,t.jsx)(j,{}),children:[(0,t.jsx)(s,{}),(0,t.jsx)(m,{})]})},y=b}}]);
