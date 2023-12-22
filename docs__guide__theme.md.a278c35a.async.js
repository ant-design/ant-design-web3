"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[257],{59246:function(v,d,n){n.r(d);var x=n(25158),o=n(8709),m=n(77576),l=n(14593),i=n(31240),_=n(5995),h=n(47308),f=n(44768),a=n(69271),p=n(50959),e=n(11527);function c(){var g=(0,a.eL)(),t=g.texts;return(0,e.jsx)(a.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"theme",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#theme",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme"]}),(0,e.jsxs)("p",{children:[t[0].value,(0,e.jsx)("a",{href:"https://ant.design/docs/react/customize-theme",children:t[1].value}),t[2].value]}),(0,e.jsxs)("h2",{id:"style-switching",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#style-switching",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Style Switching"]}),(0,e.jsx)("p",{children:t[3].value})]}),(0,e.jsx)(a.Dl,{demo:{id:"docs-guide-theme-demo-theme"},previewerProps:{filename:"docs/guide/demos/theme.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"custom-design-token",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#custom-design-token",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Custom Design Token"]}),(0,e.jsxs)("p",{children:[t[4].value,(0,e.jsx)("a",{href:"https://ant.design/docs/react/customize-theme#customize-design-token",children:t[5].value}),t[6].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/issues",children:t[7].value}),t[8].value]})]}),(0,e.jsx)(a.Dl,{demo:{id:"docs-guide-theme-demo-custom-token"},previewerProps:{filename:"docs/guide/demos/custom-token.tsx"}})]})})}d.default=c},44768:function(v,d,n){n.d(d,{Z:function(){return y}});var x=n(18840),o=n.n(x),m=n(50959),l=n(70001),i=n(29466),_=n(11527),h,f=function(){var s=(0,l.Fg)(),r=(0,l.vJ)(h||(h=o()([`
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
  `])),s.colorPrimary);return(0,_.jsx)(r,{})},a=f,p,e,c,g=m.lazy(function(){return Promise.all([n.e(9611),n.e(6057),n.e(5903),n.e(1249),n.e(9579)]).then(n.bind(n,49579))}),t=(0,l.kc)(function(u){var s=u.css;return{searchWrapper:s(p||(p=o()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:s(e||(e=o()([`
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
  `])))}}),j=function(){var s=t(),r=s.styles;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:r.searchWrapper,children:[(0,_.jsx)(i.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,_.jsx)(i.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,_.jsx)(i.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,_.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,_.jsx)("div",{className:r.skeletonWrapper,children:(0,_.jsx)(i.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},b=function(){return(0,_.jsxs)(m.Suspense,{fallback:(0,_.jsx)(j,{}),children:[(0,_.jsx)(a,{}),(0,_.jsx)(g,{})]})},y=b}}]);
