"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[4825],{50031:function(j,r,_){_.r(r);var x=_(25158),l=_(8709),h=_(77576),d=_(14593),i=_(31240),t=_(5995),p=_(47308),g=_(44768),a=_(69271),m=_(50959),n=_(11527);function c(){var v=(0,a.eL)(),e=v.texts;return(0,n.jsx)(a.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"ant-design-web3",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ant-design-web3",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Ant Design Web3"]}),(0,n.jsxs)("p",{children:[e[0].value,(0,n.jsx)("a",{href:"https://ant.design/",children:e[1].value}),e[2].value]}),(0,n.jsx)("p",{children:e[3].value}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[e[4].value,(0,n.jsx)("code",{children:e[5].value}),e[6].value,(0,n.jsx)("code",{children:e[7].value}),e[8].value,(0,n.jsx)("code",{children:e[9].value}),e[10].value,(0,n.jsx)("a",{href:"https://docs.ethers.org/v6/",children:e[11].value}),e[12].value,(0,n.jsx)("a",{href:"https://viem.sh/",children:e[13].value}),e[14].value,(0,n.jsx)("a",{href:"https://web3js.org/",children:e[15].value}),e[16].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[e[17].value,(0,n.jsx)("code",{children:e[18].value}),e[19].value,(0,n.jsx)("code",{children:e[20].value}),e[21].value,(0,n.jsx)("a",{href:"https://wagmi.sh/",children:e[22].value}),e[23].value]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:[e[24].value,(0,n.jsx)("code",{children:e[25].value}),e[26].value,(0,n.jsx)(a.rU,{to:"/guide/adapter",children:e[27].value}),e[28].value]})})]}),(0,n.jsxs)("p",{children:[e[29].value,(0,n.jsx)("code",{children:e[30].value}),e[31].value]})]}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-demo-guide"},previewerProps:{filename:"docs/guide/demos/guide.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("p",{children:[e[32].value,(0,n.jsx)(a.rU,{to:"/guide/quick-start",children:e[33].value}),e[34].value]})})]})})}r.default=c},44768:function(j,r,_){_.d(r,{Z:function(){return y}});var x=_(18840),l=_.n(x),h=_(50959),d=_(70001),i=_(29466),t=_(11527),p,g=function(){var s=(0,d.Fg)(),o=(0,d.vJ)(p||(p=l()([`
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
  `])),s.colorPrimary);return(0,t.jsx)(o,{})},a=g,m,n,c,v=h.lazy(function(){return Promise.all([_.e(9611),_.e(6057),_.e(5903),_.e(1249),_.e(9579)]).then(_.bind(_,49579))}),e=(0,d.kc)(function(u){var s=u.css;return{searchWrapper:s(m||(m=l()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:s(n||(n=l()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:s(c||(c=l()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),f=function(){var s=e(),o=s.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:o.searchWrapper,children:[(0,t.jsx)(i.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(i.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(i.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:o.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,t.jsx)("div",{className:o.skeletonWrapper,children:(0,t.jsx)(i.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},b=function(){return(0,t.jsxs)(h.Suspense,{fallback:(0,t.jsx)(f,{}),children:[(0,t.jsx)(a,{}),(0,t.jsx)(v,{})]})},y=b}}]);
