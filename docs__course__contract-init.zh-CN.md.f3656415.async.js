"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3001],{4873:function(v,i,n){n.r(i);var h=n(66447),o=n(47269),r=n(75205),l=n(52635),s=n(59344),e=n(51419),m=n(64778),x=n(79649),d=n(56335),p=n(50959),_=n(11527);function c(){var g=(0,d.eL)(),f=g.texts;return(0,_.jsx)(d.dY,{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h1",{id:"\u521D\u59CB\u5316\u5408\u7EA6",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521D\u59CB\u5316\u5408\u7EA6",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u521D\u59CB\u5316\u5408\u7EA6"]})}),(0,_.jsx)(r.Z,{type:"warning",children:(0,_.jsx)("p",{children:f[0].value})})]})})}i.default=c},79649:function(v,i,n){n.d(i,{Z:function(){return j}});var h=n(92935),o=n.n(h),r=n(50959),l=n(85718),s=n(51175),e=n(11527),m,x=function(){var t=(0,l.Fg)(),a=(0,l.vJ)(m||(m=o()([`
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
  `])),t.colorPrimary);return(0,e.jsx)(a,{})},d=x,p,_,c,g=r.lazy(function(){return Promise.all([n.e(4611),n.e(6819),n.e(2687),n.e(5440),n.e(5347)]).then(n.bind(n,15347))}),f=(0,l.kc)(function(u){var t=u.css;return{searchWrapper:t(p||(p=o()([`
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
  `])))}}),b=function(){var t=f(),a=t.styles;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:a.searchWrapper,children:[(0,e.jsx)(s.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,e.jsx)(s.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,e.jsx)(s.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,e.jsx)("div",{className:a.fallbackWrapper,children:Array(24).fill(1).map(function(w,E){return(0,e.jsx)("div",{className:a.skeletonWrapper,children:(0,e.jsx)(s.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},E)})})]})},y=function(){return(0,e.jsxs)(r.Suspense,{fallback:(0,e.jsx)(b,{}),children:[(0,e.jsx)(d,{}),(0,e.jsx)(g,{})]})},j=y}}]);
