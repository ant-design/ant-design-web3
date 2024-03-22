"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3065],{53942:function(p,f,n){n.d(f,{Z:function(){return I}});var s=n(37469),l=n(81322),g=n(67469),d=n(48230),m=n(50959),y=n(82187),h=n.n(y),T=n(22601),E=n(28470),t=n(53262),a=n(31130),P=["icon","className","onClick","style","primaryColor","secondaryColor"],Z={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function D(e){var i=e.primaryColor,r=e.secondaryColor;Z.primaryColor=i,Z.secondaryColor=r||(0,a.pw)(i),Z.calculated=!!r}function A(){return(0,t.Z)({},Z)}var R=function(i){var r=i.icon,N=i.className,x=i.onClick,S=i.style,O=i.primaryColor,w=i.secondaryColor,B=(0,d.Z)(i,P),F=m.useRef(),b=Z;if(O&&(b={primaryColor:O,secondaryColor:w||(0,a.pw)(O)}),(0,a.C3)(F),(0,a.Kp)((0,a.r)(r),"icon should be icon definiton, but got ".concat(r)),!(0,a.r)(r))return null;var v=r;return v&&typeof v.icon=="function"&&(v=(0,t.Z)((0,t.Z)({},v),{},{icon:v.icon(b.primaryColor,b.secondaryColor)})),(0,a.R_)(v.icon,"svg-".concat(v.name),(0,t.Z)((0,t.Z)({className:N,onClick:x,style:S,"data-icon":v.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},B),{},{ref:F}))};R.displayName="IconReact",R.getTwoToneColors=A,R.setTwoToneColors=D;var M=R;function o(e){var i=(0,a.H9)(e),r=(0,l.Z)(i,2),N=r[0],x=r[1];return M.setTwoToneColors({primaryColor:N,secondaryColor:x})}function c(){var e=M.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var C=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];o(T.blue.primary);var u=m.forwardRef(function(e,i){var r,N=e.className,x=e.icon,S=e.spin,O=e.rotate,w=e.tabIndex,B=e.onClick,F=e.twoToneColor,b=(0,d.Z)(e,C),v=m.useContext(E.Z),L=v.prefixCls,z=L===void 0?"anticon":L,U=v.rootClassName,W=h()(U,z,(r={},(0,g.Z)(r,"".concat(z,"-").concat(x.name),!!x.name),(0,g.Z)(r,"".concat(z,"-spin"),!!S||x.name==="loading"),r),N),K=w;K===void 0&&B&&(K=-1);var j=O?{msTransform:"rotate(".concat(O,"deg)"),transform:"rotate(".concat(O,"deg)")}:void 0,$=(0,a.H9)(F),H=(0,l.Z)($,2),k=H[0],V=H[1];return m.createElement("span",(0,s.Z)({role:"img","aria-label":x.name},b,{ref:i,tabIndex:K,onClick:B,className:W}),m.createElement(M,{icon:x,primaryColor:k,secondaryColor:V,style:j}))});u.displayName="AntdIcon",u.getTwoToneColor=c,u.setTwoToneColor=o;var I=u},28470:function(p,f,n){var s=n(50959),l=(0,s.createContext)({});f.Z=l},31130:function(p,f,n){n.d(f,{C3:function(){return M},H9:function(){return D},Kp:function(){return E},R_:function(){return P},pw:function(){return Z},r:function(){return t},vD:function(){return A}});var s=n(53262),l=n(59307),g=n(22601),d=n(50959),m=n(24694),y=n(24009),h=n(66913),T=n(28470);function E(o,c){(0,m.ZP)(o,"[@ant-design/icons] ".concat(c))}function t(o){return(0,l.Z)(o)==="object"&&typeof o.name=="string"&&typeof o.theme=="string"&&((0,l.Z)(o.icon)==="object"||typeof o.icon=="function")}function a(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(o).reduce(function(c,C){var u=o[C];switch(C){case"class":c.className=u,delete c.class;break;default:c[C]=u}return c},{})}function P(o,c,C){return C?d.createElement(o.tag,(0,s.Z)((0,s.Z)({key:c},a(o.attrs)),C),(o.children||[]).map(function(u,I){return P(u,"".concat(c,"-").concat(o.tag,"-").concat(I))})):d.createElement(o.tag,(0,s.Z)({key:c},a(o.attrs)),(o.children||[]).map(function(u,I){return P(u,"".concat(c,"-").concat(o.tag,"-").concat(I))}))}function Z(o){return(0,g.generate)(o)[0]}function D(o){return o?Array.isArray(o)?o:[o]:[]}var A={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},R=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,M=function(c){var C=(0,d.useContext)(T.Z),u=C.csp,I=C.prefixCls,e=R;I&&(e=e.replace(/anticon/g,I)),(0,d.useEffect)(function(){var i=c.current,r=(0,h.A)(i);(0,y.hq)(e,"@ant-design-icons",{prepend:!0,csp:u,attachTo:r})},[])}},65651:function(p,f,n){n.d(f,{Z:function(){return T}});var s=n(37469),l=n(50959),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},d=g,m=n(2625),y=function(t,a){return l.createElement(m.Z,(0,s.Z)({},t,{ref:a,icon:d}))},h=l.forwardRef(y),T=h},94436:function(p,f,n){n.d(f,{Z:function(){return T}});var s=n(37469),l=n(50959),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},d=g,m=n(2625),y=function(t,a){return l.createElement(m.Z,(0,s.Z)({},t,{ref:a,icon:d}))},h=l.forwardRef(y),T=h},46206:function(p,f,n){n.r(f),n.d(f,{default:function(){return P}});var s=n(37469),l=n(50959),g=n(26062),d=n(53942),m=function(D,A){return l.createElement(d.Z,(0,s.Z)({},D,{ref:A,icon:g.Z}))},y=l.forwardRef(m),h=n(48495),T=n(71647),E=n(76964),t=n(21020),a=function(){return(0,t.tZ)("div",{id:"page-404"},(0,t.tZ)("section",null,(0,t.tZ)(h.ZP,{status:"404",title:"404",subTitle:(0,t.tZ)(E._H,{id:"app.not-found.subTitle"}),extra:(0,t.tZ)(E.rU,{to:"/"},(0,t.tZ)(T.ZP,{type:"primary",icon:(0,t.tZ)(y,null)}," ",(0,t.tZ)(E._H,{id:"app.not-found.back-home"})))})))},P=a}}]);
