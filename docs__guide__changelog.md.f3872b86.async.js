"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[9083],{66356:function(d,a,_){_.r(a);var t=_(24007),m=_(89422),h=_(68760),c=_(78511),g=_(67597),s=_(48062),x=_(4171),w=_(42623),v=_(85826),b=_(42171),p=_(26829),E=_(19415),j=_(25382),I=_(87492),i=_(98712),P=_(62182),D=_(7825),M=_(82750),l=_(44512),o=_(8136),r=_(1735),n=_(32467),e=_(72152);function u(){return(0,e.jsx)(l.DumiPage,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"how-to-add-changelog",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-add-changelog",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to add Changelog"]}),(0,e.jsxs)("h2",{id:"what-changes-need-a-changelog",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what-changes-need-a-changelog",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"What changes need a Changelog?"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)("code",{children:n.texts[1].value})]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[2].value}),(0,e.jsx)("li",{children:n.texts[3].value}),(0,e.jsx)("li",{children:n.texts[4].value}),(0,e.jsx)("li",{children:n.texts[5].value}),(0,e.jsx)("li",{children:n.texts[6].value}),(0,e.jsx)("li",{children:n.texts[7].value})]}),(0,e.jsxs)("h2",{id:"how-to-generate-changelog",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-generate-changelog",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to generate changelog"]}),(0,e.jsx)("ol",{children:(0,e.jsx)("li",{children:n.texts[8].value})})]}),(0,e.jsx)(i.Z,{command:"changeset"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)(s.Z,{children:n.texts[9].value}),(0,e.jsx)("ol",{start:"2",children:(0,e.jsx)("li",{children:n.texts[10].value})}),(0,e.jsx)(s.Z,{children:n.texts[11].value}),(0,e.jsx)(s.Z,{children:n.texts[12].value}),(0,e.jsx)("ol",{start:"3",children:(0,e.jsxs)("li",{children:[n.texts[13].value,(0,e.jsx)("code",{children:n.texts[14].value}),n.texts[15].value,(0,e.jsx)("code",{children:n.texts[16].value}),n.texts[17].value]})}),(0,e.jsx)(s.Z,{children:n.texts[18].value}),(0,e.jsx)("ol",{start:"4",children:(0,e.jsxs)("li",{children:[n.texts[19].value,(0,e.jsx)("code",{children:n.texts[20].value}),n.texts[21].value,(0,e.jsx)("a",{href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",children:n.texts[22].value}),n.texts[23].value]})}),(0,e.jsx)(s.Z,{children:n.texts[24].value})]})]})})})}a.default=u},32467:function(d,a,_){_.r(a),_.d(a,{texts:function(){return t}});const t=[{value:"Modified files under ",paraId:0,tocIndex:1},{value:"packages",paraId:0,tocIndex:1},{value:"@ant-design/web3-assets",paraId:1,tocIndex:1},{value:"@ant-design/web3-common",paraId:1,tocIndex:1},{value:"@ant-design/web3-icons",paraId:1,tocIndex:1},{value:"@ant-design/web3-solana",paraId:1,tocIndex:1},{value:"@ant-design/web3-wagmi",paraId:1,tocIndex:1},{value:"@ant-design/web3",paraId:1,tocIndex:1},{value:"First of all, you need to run the command:",paraId:2,tocIndex:2},{value:`MacBook-Pro ant-design-web3 % pnpm changeset

> @ant-design/web3-docs@0.0.0 changeset ant-design-web3
> changeset
`,paraId:3},{value:"Select the modified package by space and press enter to confirm\u3002",paraId:4},{value:`\u{1F98B}  Which packages would you like to include? \u2026
\u25C9 changed packages
  \u25C9 @ant-design/web3
\u25EF unchanged packages
  \u25EF @ant-design/web3-assets
  \u25EF @ant-design/web3-common
  \u25EF @ant-design/web3-icons
  \u25EF @ant-design/web3-solana
  \u25EF @ant-design/web3-wagmi
`,paraId:5},{value:`\u{1F98B}  Which packages would you like to include? \xB7 @ant-design/web3
\u{1F98B}  Which packages should have a major bump? \u2026
\u25EF all packages
  \u25EF @ant-design/web3@1.9.0
`,paraId:6},{value:"At this point, we should skip it with a carriage return. For bugfixes in general, we select the last ",paraId:7},{value:"patch",paraId:7},{value:" version, and we select ",paraId:7},{value:"minor",paraId:7},{value:" for newer features.\u3002",paraId:7},{value:`\u{1F98B}  Which packages should have a major bump? \xB7 No items were selected
\u{1F98B}  Which packages should have a minor bump? \xB7 No items were selected
\u{1F98B}  The following packages will be patch bumped:
\u{1F98B}  @ant-design/web3@1.9.0
\u{1F98B}  Please enter a summary for this change (this will be in the changelogs).
\u{1F98B}    (submit empty line to open external editor)
\u{1F98B}  Summary \u203A
`,paraId:8},{value:"As a final step, we submit message in the ",paraId:9},{value:"Summary",paraId:9},{value:" that conforms to ",paraId:9},{value:"Angular's commit convention",paraId:9},{value:".",paraId:9},{value:`\u{1F98B}  Summary \u203A feat: support more icons
`,paraId:10}]}}]);
