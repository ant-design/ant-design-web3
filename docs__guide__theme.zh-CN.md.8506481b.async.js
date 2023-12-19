"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5172],{45916:function(b,i,n){n.r(i);var x=n(2031),o=n(17635),p=n(12530),l=n(38674),s=n(44613),e=n(81160),f=n(68249),v=n(79649),d=n(87052),m=n(50959),_=n(11527);function c(){var h=(0,d.eL)(),a=h.texts;return(0,_.jsx)(d.dY,{children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"\u4E3B\u9898",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898"]}),(0,_.jsxs)("p",{children:[a[0].value,(0,_.jsx)("a",{href:"https://ant.design/docs/react/customize-theme-cn",children:a[1].value}),a[2].value]})]})})})}i.default=c},79649:function(b,i,n){n.d(i,{Z:function(){return y}});var x=n(92935),o=n.n(x),p=n(50959),l=n(77690),s=n(48582),e=n(11527),f,v=function(){var t=(0,l.Fg)(),r=(0,l.vJ)(f||(f=o()([`
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
  `])),t.colorPrimary);return(0,e.jsx)(r,{})},d=v,m,_,c,h=p.lazy(function(){return Promise.all([n.e(5426),n.e(5707),n.e(8826),n.e(4013),n.e(5347)]).then(n.bind(n,15347))}),a=(0,l.kc)(function(u){var t=u.css;return{searchWrapper:t(m||(m=o()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:t(_||(_=o()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:t(c||(c=o()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),g=function(){var t=a(),r=t.styles;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:r.searchWrapper,children:[(0,e.jsx)(s.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,e.jsx)(s.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,e.jsx)(s.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,e.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(M,E){return(0,e.jsx)("div",{className:r.skeletonWrapper,children:(0,e.jsx)(s.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},E)})})]})},j=function(){return(0,e.jsxs)(p.Suspense,{fallback:(0,e.jsx)(g,{}),children:[(0,e.jsx)(d,{}),(0,e.jsx)(h,{})]})},y=j}}]);
