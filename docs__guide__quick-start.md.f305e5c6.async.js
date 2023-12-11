"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[7568],{44177:function(g,r,_){_.r(r);var v=_(66447),o=_(47269),h=_(75205),d=_(52635),i=_(59344),s=_(51419),m=_(64778),f=_(79649),t=_(56335),p=_(50959),n=_(11527);function c(){var x=(0,t.eL)(),e=x.texts;return(0,n.jsx)(t.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"quick-start",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Quick Start"]}),(0,n.jsx)("blockquote",{children:(0,n.jsxs)("p",{children:[e[0].value,(0,n.jsx)("a",{href:"https://react.dev",children:e[1].value}),e[2].value,(0,n.jsx)("a",{href:"https://nodejs.org/",children:e[3].value}),e[4].value]})}),(0,n.jsxs)("h2",{id:"install-dependencies",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install-dependencies",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Install dependencies"]}),(0,n.jsxs)("p",{children:[e[5].value,(0,n.jsx)("code",{children:e[6].value}),e[7].value,(0,n.jsx)("code",{children:e[8].value}),e[9].value]}),(0,n.jsx)(i.Z,{lang:"shell",children:e[10].value}),(0,n.jsxs)("h2",{id:"use-ui-components",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#use-ui-components",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Use UI components"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:e[11].value}),e[12].value,(0,n.jsx)("code",{children:e[13].value}),e[14].value]})]}),(0,n.jsx)(t.Dl,{demo:{id:"docs-guide-quick-start-demo-0"},previewerProps:{}}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"connect-to-ethereum",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#connect-to-ethereum",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Connect to Ethereum"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:e[15].value}),e[16].value,(0,n.jsx)("code",{children:e[17].value}),e[18].value,(0,n.jsx)("a",{href:"https://wagmi.sh/",children:e[19].value}),e[20].value]}),(0,n.jsxs)("p",{children:[e[21].value,(0,n.jsx)("code",{children:e[22].value}),e[23].value,(0,n.jsx)("code",{children:e[24].value}),e[25].value,(0,n.jsx)("code",{children:e[26].value}),e[27].value]}),(0,n.jsxs)("p",{children:[e[28].value,(0,n.jsx)("code",{children:e[29].value}),e[30].value,(0,n.jsx)("code",{children:e[31].value}),e[32].value]}),(0,n.jsxs)("p",{children:[e[33].value,(0,n.jsx)("code",{children:e[34].value}),e[35].value,(0,n.jsx)("code",{children:e[36].value}),e[37].value]})]}),(0,n.jsx)(t.Dl,{demo:{id:"docs-guide-quick-start-demo-quick-start"},previewerProps:{filename:"docs/guide/demos/quick-start.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("p",{children:[e[38].value,(0,n.jsx)("code",{children:e[39].value}),e[40].value,(0,n.jsx)(t.rU,{to:"/components/connector",children:e[41].value}),e[42].value]})})]})})}r.default=c},79649:function(g,r,_){_.d(r,{Z:function(){return y}});var v=_(92935),o=_.n(v),h=_(50959),d=_(85718),i=_(51175),s=_(11527),m,f=function(){var a=(0,d.Fg)(),l=(0,d.vJ)(m||(m=o()([`
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
  `])),a.colorPrimary);return(0,s.jsx)(l,{})},t=f,p,n,c,x=h.lazy(function(){return Promise.all([_.e(4611),_.e(6819),_.e(2687),_.e(5440),_.e(5347)]).then(_.bind(_,15347))}),e=(0,d.kc)(function(u){var a=u.css;return{searchWrapper:a(p||(p=o()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:a(n||(n=o()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:a(c||(c=o()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),j=function(){var a=e(),l=a.styles;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:l.searchWrapper,children:[(0,s.jsx)(i.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,s.jsx)(i.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,s.jsx)(i.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,s.jsx)("div",{className:l.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,s.jsx)("div",{className:l.skeletonWrapper,children:(0,s.jsx)(i.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},b=function(){return(0,s.jsxs)(h.Suspense,{fallback:(0,s.jsx)(j,{}),children:[(0,s.jsx)(t,{}),(0,s.jsx)(x,{})]})},y=b}}]);
