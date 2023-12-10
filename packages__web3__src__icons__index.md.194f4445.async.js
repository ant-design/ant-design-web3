"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[9641],{14621:function(v,l,n){n.r(l);var x=n(66447),a=n(47269),m=n(75205),d=n(52635),s=n(59344),_=n(51419),p=n(64778),h=n(79649),i=n(56335),f=n(50959),e=n(11527);function c(){var g=(0,i.eL)(),o=g.texts;return(0,e.jsx)(i.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"how-to-use",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to use"]}),(0,e.jsxs)("p",{children:[o[0].value,(0,e.jsx)("a",{href:"https://www.npmjs.com/package/@ant-design/web3-icons",children:o[1].value}),o[2].value]}),(0,e.jsx)(s.Z,{lang:"sh",children:o[3].value}),(0,e.jsxs)("h2",{id:"list-of-icons",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list-of-icons",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List of icons"]})]}),(0,e.jsx)(h.Z,{}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})}),(0,e.jsx)(i.Dl,{demo:{id:"packages-web-3-src-icons-demo-basic"},previewerProps:{title:"Basic",filename:"packages/web3/src/icons/demos/basic.tsx"}})]})})}l.default=c},79649:function(v,l,n){n.d(l,{Z:function(){return w}});var x=n(92935),a=n.n(x),m=n(50959),d=n(85718),s=n(51175),_=n(11527),p,h=function(){var t=(0,d.Fg)(),r=(0,d.vJ)(p||(p=a()([`
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
  `])),t.colorPrimary);return(0,_.jsx)(r,{})},i=h,f,e,c,g=m.lazy(function(){return Promise.all([n.e(4611),n.e(6819),n.e(2687),n.e(9291),n.e(5347)]).then(n.bind(n,15347))}),o=(0,d.kc)(function(u){var t=u.css;return{searchWrapper:t(f||(f=a()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:t(e||(e=a()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:t(c||(c=a()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),b=function(){var t=o(),r=t.styles;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:r.searchWrapper,children:[(0,_.jsx)(s.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,_.jsx)(s.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,_.jsx)(s.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,_.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(E,y){return(0,_.jsx)("div",{className:r.skeletonWrapper,children:(0,_.jsx)(s.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},y)})})]})},j=function(){return(0,_.jsxs)(m.Suspense,{fallback:(0,_.jsx)(b,{}),children:[(0,_.jsx)(i,{}),(0,_.jsx)(g,{})]})},w=j}}]);
