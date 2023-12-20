"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5872],{39405:function(g,l,n){n.r(l);var x=n(2031),o=n(17635),i=n(12530),d=n(38674),a=n(44613),t=n(81160),h=n(68249),v=n(79649),c=n(87052),f=n(50959),e=n(11527);function u(){var m=(0,c.eL)(),_=m.texts;return(0,e.jsx)(c.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h1",{id:"\u8BFE\u7A0B\u4ECB\u7ECD",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8BFE\u7A0B\u4ECB\u7ECD",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8BFE\u7A0B\u4ECB\u7ECD"]})}),(0,e.jsx)(i.Z,{type:"warning",children:(0,e.jsx)("p",{children:_[0].value})}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:_[1].value}),(0,e.jsx)("p",{children:_[2].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:_[3].value}),_[4].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:_[5].value}),_[6].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:_[7].value}),_[8].value]})]}),(0,e.jsxs)("p",{children:[_[9].value,(0,e.jsx)("a",{href:"https://web3.ant.design/",children:_[10].value}),_[11].value]}),(0,e.jsxs)("p",{children:[_[12].value,(0,e.jsx)("a",{href:"https://react.dev/",children:_[13].value}),_[14].value,(0,e.jsx)("a",{href:"https://react.dev/learn",children:_[15].value}),_[16].value]})]})]})})}l.default=u},79649:function(g,l,n){n.d(l,{Z:function(){return E}});var x=n(92935),o=n.n(x),i=n(50959),d=n(77690),a=n(48582),t=n(11527),h,v=function(){var s=(0,d.Fg)(),r=(0,d.vJ)(h||(h=o()([`
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
  `])),s.colorPrimary);return(0,t.jsx)(r,{})},c=v,f,e,u,m=i.lazy(function(){return Promise.all([n.e(5643),n.e(5707),n.e(8826),n.e(4302),n.e(5347)]).then(n.bind(n,15347))}),_=(0,d.kc)(function(p){var s=p.css;return{searchWrapper:s(f||(f=o()([`
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
  `]))),skeletonWrapper:s(u||(u=o()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),b=function(){var s=_(),r=s.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:r.searchWrapper,children:[(0,t.jsx)(a.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(a.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(a.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(w,y){return(0,t.jsx)("div",{className:r.skeletonWrapper,children:(0,t.jsx)(a.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},y)})})]})},j=function(){return(0,t.jsxs)(i.Suspense,{fallback:(0,t.jsx)(b,{}),children:[(0,t.jsx)(c,{}),(0,t.jsx)(m,{})]})},E=j}}]);
