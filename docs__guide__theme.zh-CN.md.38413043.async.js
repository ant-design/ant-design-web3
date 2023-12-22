"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5172],{12466:function(v,d,n){n.r(d);var g=n(25158),o=n(8709),m=n(77576),l=n(14593),i=n(31240),_=n(5995),p=n(47308),f=n(44768),s=n(69271),h=n(50959),e=n(11527);function c(){var x=(0,s.eL)(),t=x.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u4E3B\u9898",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898"]}),(0,e.jsxs)("p",{children:[t[0].value,(0,e.jsx)("a",{href:"https://ant.design/docs/react/customize-theme-cn",children:t[1].value}),t[2].value]}),(0,e.jsxs)("h2",{id:"\u98CE\u683C\u5207\u6362",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u98CE\u683C\u5207\u6362",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u98CE\u683C\u5207\u6362"]}),(0,e.jsx)("p",{children:t[3].value})]}),(0,e.jsx)(s.Dl,{demo:{id:"docs-guide-theme-demo-theme"},previewerProps:{filename:"docs/guide/demos/theme.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u81EA\u5B9A\u4E49-design-token",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49-design-token",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49 Design Token"]}),(0,e.jsxs)("p",{children:[t[4].value,(0,e.jsx)("a",{href:"https://ant.design/docs/react/customize-theme-cn#%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%E5%8F%98%E9%87%8F",children:t[5].value}),t[6].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/issues",children:t[7].value}),t[8].value]})]}),(0,e.jsx)(s.Dl,{demo:{id:"docs-guide-theme-demo-custom-token"},previewerProps:{filename:"docs/guide/demos/custom-token.tsx"}})]})})}d.default=c},44768:function(v,d,n){n.d(d,{Z:function(){return E}});var g=n(18840),o=n.n(g),m=n(50959),l=n(70001),i=n(29466),_=n(11527),p,f=function(){var a=(0,l.Fg)(),r=(0,l.vJ)(p||(p=o()([`
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
  `])),a.colorPrimary);return(0,_.jsx)(r,{})},s=f,h,e,c,x=m.lazy(function(){return Promise.all([n.e(9611),n.e(6057),n.e(5903),n.e(9246),n.e(9579)]).then(n.bind(n,49579))}),t=(0,l.kc)(function(u){var a=u.css;return{searchWrapper:a(h||(h=o()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:a(e||(e=o()([`
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
  `])))}}),j=function(){var a=t(),r=a.styles;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:r.searchWrapper,children:[(0,_.jsx)(i.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,_.jsx)(i.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,_.jsx)(i.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,_.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(w,y){return(0,_.jsx)("div",{className:r.skeletonWrapper,children:(0,_.jsx)(i.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},y)})})]})},b=function(){return(0,_.jsxs)(m.Suspense,{fallback:(0,_.jsx)(j,{}),children:[(0,_.jsx)(s,{}),(0,_.jsx)(x,{})]})},E=b}}]);
