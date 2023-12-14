"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8834],{12290:function(b,i,n){n.r(i);var h=n(2031),o=n(17635),u=n(12530),l=n(42674),s=n(44613),_=n(81160),p=n(17482),v=n(79649),a=n(87052),f=n(50959),e=n(11527);function d(){var m=(0,a.eL)(),x=m.texts;return(0,e.jsx)(a.dY,{children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(a.Dl,{demo:{id:"docs-demo-home",inline:!0},previewerProps:{}})})})}i.default=d},79649:function(b,i,n){n.d(i,{Z:function(){return E}});var h=n(92935),o=n.n(h),u=n(50959),l=n(85718),s=n(51175),_=n(11527),p,v=function(){var t=(0,l.Fg)(),r=(0,l.vJ)(p||(p=o()([`
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
  `])),t.colorPrimary);return(0,_.jsx)(r,{})},a=v,f,e,d,m=u.lazy(function(){return Promise.all([n.e(4611),n.e(6819),n.e(2687),n.e(5440),n.e(5347)]).then(n.bind(n,15347))}),x=(0,l.kc)(function(c){var t=c.css;return{searchWrapper:t(f||(f=o()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:t(e||(e=o()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:t(d||(d=o()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),g=function(){var t=x(),r=t.styles;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:r.searchWrapper,children:[(0,_.jsx)(s.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,_.jsx)(s.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,_.jsx)(s.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,_.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(M,j){return(0,_.jsx)("div",{className:r.skeletonWrapper,children:(0,_.jsx)(s.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},j)})})]})},y=function(){return(0,_.jsxs)(u.Suspense,{fallback:(0,_.jsx)(g,{}),children:[(0,_.jsx)(a,{}),(0,_.jsx)(m,{})]})},E=y}}]);
