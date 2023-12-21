"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8891],{59943:function(g,l,a){a.r(l);var x=a(25158),o=a(8709),p=a(77576),d=a(14593),i=a(31240),t=a(5995),h=a(47308),j=a(44768),_=a(69271),m=a(50959),e=a(11527);function c(){var v=(0,_.eL)(),n=v.texts;return(0,e.jsx)(_.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"adapter",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#adapter",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Adapter"]}),(0,e.jsxs)("h2",{id:"what-is-an-adapter",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-an-adapter",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"What is an adapter"]}),(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("p",{children:[n[1].value,(0,e.jsx)("code",{children:n[2].value}),n[3].value]}),(0,e.jsx)("p",{children:n[4].value}),(0,e.jsxs)("p",{children:[n[5].value,(0,e.jsx)(_.rU,{to:"/components/wagmi",children:n[6].value}),n[7].value,(0,e.jsx)("code",{children:n[8].value}),n[9].value,(0,e.jsx)("code",{children:n[10].value}),n[11].value]}),(0,e.jsxs)("h2",{id:"how-does-the-adapter-work",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-does-the-adapter-work",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How does the adapter work?"]}),(0,e.jsxs)("p",{children:[n[12].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/types.ts",children:n[13].value}),n[14].value,(0,e.jsx)("code",{children:n[15].value}),n[16].value,(0,e.jsx)(_.rU,{to:"/components/types#universalweb3providerinterface",children:n[17].value}),n[18].value]}),(0,e.jsxs)("p",{children:[n[19].value,(0,e.jsx)("code",{children:n[20].value}),n[21].value,(0,e.jsx)(_.rU,{to:"/components/web3-config-provider",children:n[22].value}),n[23].value,(0,e.jsx)("code",{children:n[24].value}),n[25].value,(0,e.jsx)("code",{children:n[26].value}),n[27].value]}),(0,e.jsxs)("h2",{id:"develop-an-adapter",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#develop-an-adapter",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Develop an adapter"]}),(0,e.jsxs)("p",{children:[n[28].value,(0,e.jsx)(_.rU,{to:"/components/web3-config-provider",children:n[29].value}),n[30].value,(0,e.jsx)("a",{href:"https://wagmi.sh/",children:n[31].value}),n[32].value]})]}),(0,e.jsx)(_.Dl,{demo:{id:"docs-guide-adapter-demo-adapter"},previewerProps:{filename:"docs/guide/demos/adapter.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("p",{children:[n[33].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/tree/main/packages/wagmi",children:n[34].value}),n[35].value,(0,e.jsx)("code",{children:n[36].value}),n[37].value]})})]})})}l.default=c},44768:function(g,l,a){a.d(l,{Z:function(){return w}});var x=a(18840),o=a.n(x),p=a(50959),d=a(70001),i=a(29466),t=a(11527),h,j=function(){var s=(0,d.Fg)(),r=(0,d.vJ)(h||(h=o()([`
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
  `])),s.colorPrimary);return(0,t.jsx)(r,{})},_=j,m,e,c,v=p.lazy(function(){return Promise.all([a.e(9611),a.e(6057),a.e(5903),a.e(7747),a.e(9579)]).then(a.bind(a,49579))}),n=(0,d.kc)(function(u){var s=u.css;return{searchWrapper:s(m||(m=o()([`
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
  `])))}}),f=function(){var s=n(),r=s.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:r.searchWrapper,children:[(0,t.jsx)(i.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(i.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(i.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:r.fallbackWrapper,children:Array(24).fill(1).map(function(E,y){return(0,t.jsx)("div",{className:r.skeletonWrapper,children:(0,t.jsx)(i.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},y)})})]})},b=function(){return(0,t.jsxs)(p.Suspense,{fallback:(0,t.jsx)(f,{}),children:[(0,t.jsx)(_,{}),(0,t.jsx)(v,{})]})},w=b}}]);
