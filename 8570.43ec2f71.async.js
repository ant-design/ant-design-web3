"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8570],{61461:function(c,e,n){n.r(e),n.d(e,{TinyColor:function(){return d.C},bounds:function(){return T},cmykToRgb:function(){return r.JT},convertDecimalToHex:function(){return r.Wl},convertHexToDecimal:function(){return r.T6},fromRatio:function(){return u},hslToRgb:function(){return r.ve},hsvToRgb:function(){return r.WE},inputToRGB:function(){return _.uA},isReadable:function(){return E},isValidCSSUnit:function(){return _.ky},legacyRandom:function(){return g},mostReadable:function(){return l},names:function(){return m.R},numberInputToObject:function(){return r.Yt},parseIntFromHex:function(){return r.VD},random:function(){return C},readability:function(){return p},rgbToCmyk:function(){return r.D5},rgbToHex:function(){return r.vq},rgbToHsl:function(){return r.lC},rgbToHsv:function(){return r.py},rgbToRgb:function(){return r.rW},rgbaToArgbHex:function(){return r.GC},rgbaToHex:function(){return r.s},stringInputToObject:function(){return _.uz},toMsFilter:function(){return f}});var d=n(11899),m=n(23375);function p(t,i){const o=new d.C(t),a=new d.C(i);return(Math.max(o.getLuminance(),a.getLuminance())+.05)/(Math.min(o.getLuminance(),a.getLuminance())+.05)}function E(t,i,o={level:"AA",size:"small"}){const a=p(t,i);switch((o.level??"AA")+(o.size??"small")){case"AAsmall":case"AAAlarge":return a>=4.5;case"AAlarge":return a>=3;case"AAAsmall":return a>=7;default:return!1}}function l(t,i,o={includeFallbackColors:!1,level:"AA",size:"small"}){let a=null,s=0;const{includeFallbackColors:y,level:P,size:O}=o;for(const R of i){const D=p(t,R);D>s&&(s=D,a=new d.C(R))}return E(t,a,{level:P,size:O})||!y?a:(o.includeFallbackColors=!1,l(t,["#fff","#000"],o))}var r=n(79158);function f(t,i){const o=new d.C(t),a="#"+(0,r.GC)(o.r,o.g,o.b,o.a);let s=a;const y=o.gradientType?"GradientType = 1, ":"";if(i){const P=new d.C(i);s="#"+(0,r.GC)(P.r,P.g,P.b,P.a)}return`progid:DXImageTransform.Microsoft.gradient(${y}startColorstr=${a},endColorstr=${s})`}var v=n(70979);function u(t,i){const o={r:(0,v.JX)(t.r),g:(0,v.JX)(t.g),b:(0,v.JX)(t.b)};return t.a!==void 0&&(o.a=Number(t.a)),new d.C(o,i)}function g(){return new d.C({r:Math.random(),g:Math.random(),b:Math.random()})}var _=n(41587);function C(t={}){if(t.count!==void 0&&t.count!==null){const y=t.count,P=[];for(t.count=void 0;y>P.length;)t.count=null,t.seed&&(t.seed+=1),P.push(C(t));return t.count=y,P}const i=S(t.hue,t.seed),o=A(i,t),a=B(i,o,t),s={h:i,s:o,v:a};return t.alpha!==void 0&&(s.a=t.alpha),new d.C(s)}function S(t,i){const o=j(t);let a=b(o,i);return a<0&&(a=360+a),a}function A(t,i){if(i.hue==="monochrome")return 0;if(i.luminosity==="random")return b([0,100],i.seed);const{saturationRange:o}=h(t);let a=o[0],s=o[1];switch(i.luminosity){case"bright":a=55;break;case"dark":a=s-10;break;case"light":s=55;break;default:break}return b([a,s],i.seed)}function B(t,i,o){let a=z(t,i),s=100;switch(o.luminosity){case"dark":s=a+20;break;case"light":a=(s+a)/2;break;case"random":a=0,s=100;break;default:break}return b([a,s],o.seed)}function z(t,i){const{lowerBounds:o}=h(t);for(let a=0;a<o.length-1;a++){const s=o[a][0],y=o[a][1],P=o[a+1][0],O=o[a+1][1];if(i>=s&&i<=P){const R=(O-y)/(P-s),D=y-R*s;return R*i+D}}return 0}function j(t){const i=parseInt(t,10);if(!Number.isNaN(i)&&i<360&&i>0)return[i,i];if(typeof t=="string"){const o=T.find(s=>s.name===t);if(o){const s=w(o);if(s.hueRange)return s.hueRange}const a=new d.C(t);if(a.isValid){const s=a.toHsv().h;return[s,s]}}return[0,360]}function h(t){t>=334&&t<=360&&(t-=360);for(const i of T){const o=w(i);if(o.hueRange&&t>=o.hueRange[0]&&t<=o.hueRange[1])return o}throw Error("Color not found")}function b(t,i){if(i===void 0)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));const o=t[1]||1,a=t[0]||0;i=(i*9301+49297)%233280;const s=i/233280;return Math.floor(a+s*(o-a))}function w(t){const i=t.lowerBounds[0][0],o=t.lowerBounds[t.lowerBounds.length-1][0],a=t.lowerBounds[t.lowerBounds.length-1][1],s=t.lowerBounds[0][1];return{name:t.name,hueRange:t.hueRange,lowerBounds:t.lowerBounds,saturationRange:[i,o],brightnessRange:[a,s]}}const T=[{name:"monochrome",hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:"red",hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:"orange",hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:"yellow",hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:"green",hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:"blue",hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:"purple",hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:"pink",hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}]},35140:function(c,e,n){n.r(e),n.d(e,{EvmPayButton:function(){return b}});var d=n(82092),m=n.n(d),p=n(1735),E=n(99341),l=n(72961),r=n(49842),f=n(21467),v=n(27206),u=n(33851),g=n(15613),_=n(18485),C=n(69553),S=n(28068),A=n(8986),B=n(94549),z=n(29816),j=n(40372),h=n(72152),b=function(T){var t=T.setTokenEcosystem,i=T.tokenEcosystem,o=T.signCallback,a=T.payCallback,s=T.onRejectSwitchChain,y=(0,g._)({chains:[C.R,S.y,A.y,B.v],transports:m()(m()(m()(m()({},C.R.id,(0,_.d)()),S.y.id,(0,_.d)()),A.y.id,(0,_.d)()),B.v.id,(0,_.d)()),connectors:[(0,z.L)({target:"metaMask"})]});return(0,h.jsx)("div",{children:(0,h.jsx)(r.h,{config:y,eip6963:{autoAddInjectedWallets:!0},wallets:[(0,f.M)()],chains:[C.R,S.y,A.y,B.v],children:(0,h.jsxs)(v.Z,{size:"middle",children:[(0,h.jsx)(E.w,{modalProps:{footer:(0,h.jsxs)(h.Fragment,{children:["Powered by"," ",(0,h.jsx)("a",{href:"https://web3.ant.design/",target:"_blank",rel:"noreferrer",children:"Ant Design Web3"})]})},children:(0,h.jsx)(l.N,{chainSelect:!1})}),(0,h.jsx)(j.default,{setTokenEcosystem:t,tokenEcosystem:i,signTransaction:function(O,R){a(O,R)},onRejectSwitchChain:s,renderSignButton:function(O,R,D){return(0,h.jsx)(u.ZP,{type:"primary",style:{width:200},loading:D,disabled:R,onClick:function(){o(O)},children:"Pay"})}})]})})})}},13924:function(c,e,n){n.r(e);var d=n(1735),m=n(27206),p=n(53401),E=n(96765),l=n(72152),r=function(v){var u=E.TOKEN_PAY_ADDRESS.chains;return(0,l.jsx)(m.Z,{size:"middle",children:(0,l.jsx)(p.ZP.Group,{onChange:function(_){v.onChange(_.target.value)},value:v.ecosystem,children:u.map(function(g){return(0,l.jsx)(p.ZP,{value:g.ecosystem,children:g.name},g.ecosystem)})})})};e.default=r},40372:function(c,e,n){n.r(e);var d=n(90228),m=n.n(d),p=n(87999),E=n.n(p),l=n(48305),r=n.n(l),f=n(1735),v=n(29192),u=n(76177),g=n(17744),_=n(42002),C=n(38494),S=n(9305),A=n(96765),B=n(72152),z=function(h){var b=h.setTokenEcosystem,w=h.tokenEcosystem,T=h.signTransaction,t=h.renderSignButton,i=h.onRejectSwitchChain,o=(0,f.useState)(!1),a=r()(o,2),s=a[0],y=a[1],P=(0,_.S)(),O=P.writeContractAsync,R=(0,C.o)(),D=R.switchChain,K=(0,S.x)(),Z=(0,v.Z)(),k=Z.account;(0,f.useEffect)(function(){if(k!=null&&k.address){var W,x=A.TOKEN_PAY_ADDRESS.chains,L=(W=x.find(function(I){return I.ecosystem===w}))===null||W===void 0?void 0:W.id;L&&L!==K&&(D==null||D({chainId:L},{onError:function(U){U.message.includes("User rejected")&&(i==null||i(K))}}))}},[w,k]),(0,f.useEffect)(function(){if(K&&!w){var W,x=A.TOKEN_PAY_ADDRESS.chains,L=(W=x.find(function(I){return I.id===K}))===null||W===void 0?void 0:W.ecosystem;L&&k?b==null||b(L):b==null||b(x[0].ecosystem)}},[k]);var X=function(){var W=E()(m()().mark(function x(L,I){var U,N,H,G,Y;return m()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.prev=0,y(!0),H=(U=A.TOKEN_PAY_ADDRESS.chains.find(function(F){return F.ecosystem===w}))===null||U===void 0?void 0:U.decimals,G=(N=A.TOKEN_PAY_ADDRESS.chains.find(function(F){return F.ecosystem===w}))===null||N===void 0?void 0:N.address,M.next=6,O({abi:(0,u.V)(["function transfer(address _to, uint256 _value)"]),address:G,functionName:"transfer",args:[L.toLocaleLowerCase(),(0,g.v)(I.toString(),H)]});case 6:Y=M.sent,y(!1),T==null||T(Y,(k==null?void 0:k.address)||""),M.next=15;break;case 11:M.prev=11,M.t0=M.catch(0),console.log("error",M.t0.message),y(!1);case 15:case"end":return M.stop()}},x,null,[[0,11]])}));return function(L,I){return W.apply(this,arguments)}}();return(0,B.jsx)("div",{children:t(X,!k,s)})};e.default=z},96765:function(c,e,n){n.r(e),n.d(e,{TOKEN_PAY_ADDRESS:function(){return d}});var d={name:"USDT",icon:"https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*HkpaQoYlReEAAAAAAAAAAAAADiOMAQ/original",symbol:"usdt",chains:[{name:"Ethereum",id:1,decimals:6,ecosystem:"ethereum",network:"mainnet",txScan:"https://etherscan.io/tx/",address:"0xdAC17F958D2ee523a2206206994597C13D831ec7"},{name:"Polygon",id:137,decimals:6,ecosystem:"polygon",network:"polygon",txScan:"https://polygonscan.com/tx/",address:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f"},{name:"Arbitrum",id:42161,decimals:6,ecosystem:"arbitrum",network:"arbitrum",txScan:"https://arbiscan.io/tx/",address:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"},{name:"Optimism",id:10,decimals:6,ecosystem:"optimism",network:"optimism",txScan:"https://optimistic.etherscan.io/tx/",address:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"}]}},78933:function(c,e,n){n.r(e),n.d(e,{customToken:function(){return m},themeList:function(){return p}});var d=n(62610),m={token:{borderRadius:16,wireframe:!1,padding:24,paddingSM:16,paddingXS:12,fontSize:16,fontSizeLG:18,fontSizeHeading4:24,fontSizeHeading5:20,fontSizeHeading2:36,fontSizeXL:24,colorPrimary:"#8442ff",colorInfo:"#8442ff",paddingContentHorizontal:20,paddingContentHorizontalSM:16,paddingContentHorizontalLG:24},components:{Button:{controlHeight:44,marginXS:8,fontSizeLG:18,controlHeightLG:52,controlHeightSM:36,paddingXS:16},List:{paddingLG:24,marginLG:24,marginXXL:48,paddingContentHorizontalLG:24,fontSizeLG:20,padding:16,paddingContentVertical:24,paddingXS:8,paddingSM:12},Modal:{controlHeightLG:44,fontSizeHeading5:20,fontSizeLG:18,marginSM:12,margin:16,marginLG:24,marginXS:8,padding:16,paddingContentHorizontalLG:24,paddingLG:24,paddingMD:20,paddingXS:12}}},p=[{color:"#1677FF",value:"default",name:"Default",token:{token:{}}},{color:"#000",value:"dark",name:"Dark",token:{token:{borderRadius:2,colorPrimary:"#000",colorPrimaryTextHover:"rgba(255, 255, 255, 0.8)",colorLink:"rgba(255, 255, 255, 0.75)",colorText:"rgba(255, 255, 255, 0.75)"},components:{Button:{defaultHoverColor:"rgba(255, 255, 255, 0.8)",defaultHoverBorderColor:"rgba(255, 255, 255, 0.8)"}},algorithm:d.Z.darkAlgorithm}},{value:"green",name:"Forest green",color:"#00B96B",token:{token:{colorPrimary:"#00B96B",borderRadius:4,colorLink:"#00B96B"}}},{value:"pink",name:"Blossom",color:"#ED4192",token:{token:{colorPrimary:"#ED4192",borderRadius:16,colorLink:"#ED4192"}}},{color:"#8343FF",value:"violet",name:"Violet",token:m}]},27494:function(c,e,n){n.r(e);var d=n(1735),m=n(99341),p=n(72961),E=n(60722),l=n(59198),r=n(72152),f=function(u){var g=u.mode,_=u.size,C=u.quickConnect;return(0,r.jsx)(E.N,{autoConnect:!0,wallets:[(0,l.x5)(),(0,l.Oq)(),(0,l.Yw)()],children:(0,r.jsx)(m.w,{modalProps:{mode:g},children:(0,r.jsx)(p.N,{type:"primary",style:{width:"auto"},size:_,quickConnect:C})})})};e.default=f},8486:function(c,e,n){n.r(e);var d=n(1735),m=n(99341),p=n(72961),E=n(49842),l=n(21467),r=n(23326),f=n(88651),v=n(71757),u=n(72152),g=function(C){var S=C.mode,A=C.size,B=C.quickConnect;return(0,u.jsx)(E.h,{eip6963:{autoAddInjectedWallets:!0},walletConnect:{projectId:"c07c0051c2055890eade3556618e38a6"},ens:!0,wallets:[(0,l.M)(),(0,r.b)(),(0,f.g)({group:"Popular"}),(0,v.Y)()],children:(0,u.jsx)(m.w,{modalProps:{mode:S},children:(0,u.jsx)(p.N,{type:"primary",style:{width:"auto"},size:A,quickConnect:B})})})};e.default=g},27611:function(c,e,n){n.r(e);var d=n(1735),m=n(99341),p=n(72961),E=n(12920),l=n(10751),r=n(72152),f=function(u){var g=u.mode,_=u.size,C=u.quickConnect;return(0,r.jsx)(E.G,{wallets:[(0,l.GU)(),(0,l.j1)()],children:(0,r.jsx)(m.w,{modalProps:{mode:g},children:(0,r.jsx)(p.N,{type:"primary",style:{width:"auto"},size:_,quickConnect:C})})})};e.default=f},98004:function(c,e,n){n.r(e);var d=n(1735),m=n(99341),p=n(72961),E=n(98698),l=n(82352),r=n(72152),f=function(u){var g=u.mode,_=u.size,C=u.quickConnect;return(0,r.jsx)(E.r,{balance:!0,autoConnect:!0,wallets:[(0,l.h)(),(0,l.t)()],children:(0,r.jsx)(m.w,{modalProps:{mode:g},children:(0,r.jsx)(p.N,{type:"primary",style:{width:"auto"},size:_,quickConnect:C})})})};e.default=f},9617:function(c,e,n){n.r(e);var d=n(1735),m=n(99341),p=n(72961),E=n(99076),l=n(32076),r=n(89331),f=n(72152),v=function(g){var _=g.mode,C=g.size,S=g.quickConnect;return(0,f.jsx)(E.q,{wallets:[l._,r.x,{key:"safepalwallet"}],children:(0,f.jsx)(m.w,{modalProps:{mode:_},children:(0,f.jsx)(p.N,{type:"primary",style:{width:"auto"},size:C,quickConnect:S})})})};e.default=v},92443:function(c,e){e.Z=`import React, { useEffect } from 'react';
import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

const CONTRACT_ADDRESS = '0xEcd0D12E21805803f70de03B72B1C162dB0898d9';

const CallTest = () => {
  const { account } = useAccount();
  const result = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ type: 'uint256' }],
      },
    ],
    address: CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    args: [account?.address as \`0x\${string}\`],
  });
  const { writeContract, data: hash } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      message.success('Mint Success');
      result.refetch();
    }
  }, [isConfirmed]);

  return (
    <div>
      {result.data?.toString()}
      <Button
        loading={isConfirming}
        onClick={() => {
          writeContract(
            {
              abi: [
                {
                  type: 'function',
                  name: 'mint',
                  stateMutability: 'payable',
                  inputs: [
                    {
                      internalType: 'uint256',
                      name: 'quantity',
                      type: 'uint256',
                    },
                  ],
                  outputs: [],
                },
              ],
              address: CONTRACT_ADDRESS,
              functionName: 'mint',
              args: [BigInt(1)],
              value: parseEther('0.01'),
            },
            {
              onError: (err) => {
                message.error(err.message);
              },
            },
          );
        }}
      >
        mint
      </Button>
    </div>
  );
};

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
`},6666:function(c,e){e.Z=`import { Address, ConnectButton, Connector, NFTCard } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[MetaMask()]}
    >
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
}
`},81880:function(c,e){e.Z=`import React, { useEffect } from 'react';
import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { Mainnet, MetaMask, Sepolia, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { http, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

// Sepolia test contract 0x81BaD6F768947D7741c83d9EB9007e1569115703
const CONTRACT_ADDRESS = '0x81BaD6F768947D7741c83d9EB9007e1569115703';

const CallTest = () => {
  const { account } = useAccount();
  const result = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ type: 'uint256' }],
      },
    ],
    address: CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    args: [account?.address as \`0x\${string}\`],
  });
  const { writeContract, data: hash } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      message.success('Mint Success');
      result.refetch();
    }
  }, [isConfirmed]);

  return (
    <div>
      {result.data?.toString()}
      <Button
        loading={isConfirming}
        onClick={() => {
          writeContract(
            {
              abi: [
                {
                  type: 'function',
                  name: 'mint',
                  stateMutability: 'payable',
                  inputs: [
                    {
                      internalType: 'uint256',
                      name: 'quantity',
                      type: 'uint256',
                    },
                  ],
                  outputs: [],
                },
              ],
              address: CONTRACT_ADDRESS,
              functionName: 'mint',
              args: [BigInt(1)],
              value: parseEther('0.01'),
            },
            {
              onError: (err) => {
                message.error(err.message);
              },
            },
          );
        }}
      >
        mint
      </Button>
    </div>
  );
};

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      transports={{
        [Mainnet.id]: http(),
        [Sepolia.id]: http(),
      }}
      chains={[Mainnet, Sepolia]}
      wallets={[MetaMask()]}
    >
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
`},10210:function(c,e){e.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Web3ConfigProvider, type Account, type Chain, type Wallet } from '@ant-design/web3-common';

export interface YourAdapterProps {
  wallets?: Wallet[];
  children?: React.ReactNode;
  availableChains?: Chain[];
}

export const YourAdapterPropsProvider: React.FC<YourAdapterProps> = (props) => {
  const { children, availableChains, wallets } = props;
  const [account] = React.useState<Account>({
    address: '0xtestaccount',
  });
  const [currentChain] = React.useState<Chain>();

  return (
    <Web3ConfigProvider
      availableChains={availableChains}
      chain={currentChain}
      account={account}
      availableWallets={wallets}
      connect={async (wallet) => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u8FDE\u63A5\u94B1\u5305\u7684\u903B\u8F91
        return;
      }}
      disconnect={async () => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u65AD\u5F00\u8FDE\u63A5\u7684\u903B\u8F91
        return;
      }}
      switchChain={async () => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u5207\u6362\u94FE\u7684\u903B\u8F91
        return;
      }}
      getNFTMetadata={async () => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u83B7\u53D6 NFT \u5143\u6570\u636E\u7684\u903B\u8F91
        return {
          name: 'NFT',
          description: 'NFT description',
          image: 'https://avatars.githubusercontent.com/u/1061968',
        };
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};

const App: React.FC = () => {
  return (
    <YourAdapterPropsProvider>
      <Connector>
        <ConnectButton />
      </Connector>
    </YourAdapterPropsProvider>
  );
};

export default App;
`},39302:function(c,e){e.Z=`// /components/pay-button.tsx
import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, Space } from 'antd';
import { createConfig, http } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

import EvmSignTransaction from './send';

type PayButtonsProps = {
  setTokenEcosystem?: (token: string) => void;
  tokenEcosystem: string;
  signCallback: (signTransfer: (toAddress: string, amount: number) => void) => void;
  payCallback: (signTransfer: string, address: string) => void;
  onRejectSwitchChain?: (id: number) => void;
};

export const EvmPayButton: React.FC<PayButtonsProps> = ({
  setTokenEcosystem,
  tokenEcosystem,
  signCallback,
  payCallback,
  onRejectSwitchChain,
}) => {
  const config = createConfig({
    chains: [mainnet, polygon, arbitrum, optimism],
    transports: {
      [mainnet.id]: http(),
      [polygon.id]: http(),
      [arbitrum.id]: http(),
      [optimism.id]: http(),
    },
    connectors: [
      injected({
        target: 'metaMask',
      }),
    ],
  });

  return (
    <div>
      <WagmiWeb3ConfigProvider
        config={config}
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        wallets={[MetaMask()]}
        chains={[mainnet, polygon, arbitrum, optimism]}
      >
        <Space size="middle">
          <Connector
            modalProps={{
              footer: (
                <>
                  Powered by{' '}
                  <a href="https://web3.ant.design/" target="_blank" rel="noreferrer">
                    Ant Design Web3
                  </a>
                </>
              ),
            }}
          >
            <ConnectButton chainSelect={false} />
          </Connector>
          <EvmSignTransaction
            setTokenEcosystem={setTokenEcosystem}
            tokenEcosystem={tokenEcosystem}
            signTransaction={(signTransfer, address) => {
              payCallback(signTransfer, address);
            }}
            onRejectSwitchChain={onRejectSwitchChain}
            renderSignButton={(signTransfer, disabled, signLoading) => (
              <Button
                type="primary"
                style={{ width: 200 }}
                loading={signLoading}
                disabled={disabled}
                onClick={() => {
                  signCallback(signTransfer);
                }}
              >
                Pay
              </Button>
            )}
          />
        </Space>
      </WagmiWeb3ConfigProvider>
    </div>
  );
};
`},27631:function(c,e){e.Z=`// /components/select.tsx
import React from 'react';
import { Radio, Space } from 'antd';

import { TOKEN_PAY_ADDRESS } from '../constants/tokenPayAddress';

interface ChainSelectGroupProps {
  ecosystem: string;
  onChange: (ecosystem: string) => void;
}

const ChainSelect: React.FC<ChainSelectGroupProps> = (props) => {
  const chainList = TOKEN_PAY_ADDRESS.chains;

  return (
    <Space size="middle">
      <Radio.Group
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        value={props.ecosystem}
      >
        {chainList.map((info) => {
          return (
            <Radio key={info.ecosystem} value={info.ecosystem}>
              {info.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </Space>
  );
};

export default ChainSelect;
`},22981:function(c,e){e.Z=`// /components/send.tsx
import React, { useEffect, useState } from 'react';
import { useAccount } from '@ant-design/web3';
import { parseAbi, parseUnits } from 'viem';
import { useChainId, useSwitchChain, useWriteContract } from 'wagmi';

import { TOKEN_PAY_ADDRESS } from '../constants/tokenPayAddress';

type SignTransactionProps = {
  setTokenEcosystem?: (token: string) => void;
  tokenEcosystem: string;
  signTransaction: (signTransfer: string, address: string) => void;
  renderSignButton: (
    signTransfer: (toAddress: string, amount: number) => void,
    disabled: boolean,
    loading: boolean,
  ) => React.ReactNode;
  onRejectSwitchChain?: (id: number) => void;
};

const EvmSignTransaction: React.FC<SignTransactionProps> = ({
  setTokenEcosystem,
  tokenEcosystem,
  signTransaction,
  renderSignButton,
  onRejectSwitchChain,
}) => {
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const { writeContractAsync } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const { account } = useAccount();

  useEffect(() => {
    if (account?.address) {
      const chainList = TOKEN_PAY_ADDRESS.chains;
      const changeChainId = chainList.find((item) => item.ecosystem === tokenEcosystem)?.id;
      if (changeChainId && changeChainId !== chainId) {
        switchChain?.(
          { chainId: changeChainId },
          {
            onError: (error) => {
              if (error.message.includes('User rejected')) {
                onRejectSwitchChain?.(chainId);
              }
            },
          },
        );
      }
    }
  }, [tokenEcosystem, account]);

  useEffect(() => {
    if (chainId && !tokenEcosystem) {
      const chainList = TOKEN_PAY_ADDRESS.chains;
      const initTokenEcosystem = chainList.find((item) => item.id === chainId)?.ecosystem;
      if (initTokenEcosystem && account) {
        setTokenEcosystem?.(initTokenEcosystem);
      } else {
        setTokenEcosystem?.(chainList[0].ecosystem);
      }
    }
  }, [account]);

  const signTransfer = async (toAddress: string, amount: number) => {
    try {
      setSignLoading(true);
      // transfer ABI
      // {
      //   "constant": false,
      //   "inputs": [
      //     { "name": "_to", "type": "address" },
      //     { "name": "_value", "type": "uint256" }
      //   ],
      //   "name": "transfer",
      //   "outputs": [],
      //   "payable": false,
      //   "stateMutability": "nonpayable",
      //   "type": "function"
      // },
      const decimals = TOKEN_PAY_ADDRESS.chains.find(
        (item) => item.ecosystem === tokenEcosystem,
      )?.decimals;
      const contractAddress = TOKEN_PAY_ADDRESS.chains.find(
        (item) => item.ecosystem === tokenEcosystem,
      )?.address;
      const signTransferHash = await writeContractAsync({
        abi: parseAbi(['function transfer(address _to, uint256 _value)']),
        address: contractAddress as \`0x\${string}\`,
        functionName: 'transfer',
        args: [
          toAddress.toLocaleLowerCase() as \`0x\${string}\`,
          parseUnits(amount.toString(), decimals!),
        ],
      });
      setSignLoading(false);
      signTransaction?.(signTransferHash, account?.address || '');
    } catch (error) {
      console.log('error', (error as any).message);
      setSignLoading(false);
    }
  };

  return <div>{renderSignButton(signTransfer, !account, signLoading)}</div>;
};
export default EvmSignTransaction;
`},10551:function(c,e){e.Z=`// /constants/tokenPayAddress.ts
interface TokenInfo {
  name: string;
  icon: string;
  symbol: string;
  chains: {
    name: string;
    id?: number;
    decimals: number;
    ecosystem: string;
    address: string;
    txScan?: string;
    network?: string;
  }[];
}
export const TOKEN_PAY_ADDRESS: TokenInfo = {
  name: 'USDT',
  icon: 'https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*HkpaQoYlReEAAAAAAAAAAAAADiOMAQ/original',
  symbol: 'usdt',
  chains: [
    {
      name: 'Ethereum',
      id: 1,
      decimals: 6,
      ecosystem: 'ethereum',
      network: 'mainnet',
      txScan: 'https://etherscan.io/tx/',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    {
      name: 'Polygon',
      id: 137,
      decimals: 6,
      ecosystem: 'polygon',
      network: 'polygon',
      txScan: 'https://polygonscan.com/tx/',
      address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    },
    {
      name: 'Arbitrum',
      id: 42161,
      decimals: 6,
      ecosystem: 'arbitrum',
      network: 'arbitrum',
      txScan: 'https://arbiscan.io/tx/',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    },
    {
      name: 'Optimism',
      id: 10,
      decimals: 6,
      ecosystem: 'optimism',
      network: 'optimism',
      txScan: 'https://optimistic.etherscan.io/tx/',
      address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    },
  ],
};
`},49124:function(c,e){e.Z=`// /usdt.tsx
import React, { useState } from 'react';
import { Card, message, Space, Typography } from 'antd';

import { EvmPayButton } from './components/pay-button';
import ChainSelect from './components/select';
import { TOKEN_PAY_ADDRESS } from './constants/tokenPayAddress';

const { Title } = Typography;

const PaymentInUSDT: React.FC = () => {
  // token ecosystem
  const [tokenEcosystem, setTokenEcosystem] = useState<string>('');

  const onSubmitCashier = async (sign: (toAddress: string, amount: number) => void) => {
    // The address and amount are obtained from the backend service
    sign('0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76', 10);
  };

  const runPay = async (sign: string, address: string) => {
    message.success('Pay success');
  };

  return (
    <Card title="Payment in USDT">
      <Space direction="vertical" size="middle">
        <Title level={3}>Select Chain</Title>
        <ChainSelect ecosystem={tokenEcosystem} onChange={setTokenEcosystem} />
        <EvmPayButton
          setTokenEcosystem={setTokenEcosystem}
          tokenEcosystem={tokenEcosystem}
          signCallback={onSubmitCashier}
          payCallback={runPay}
          onRejectSwitchChain={(id) => {
            const oldTokenEcosystem = TOKEN_PAY_ADDRESS.chains.find(
              (item) => item.id === id,
            )?.ecosystem;
            setTokenEcosystem(oldTokenEcosystem || '');
          }}
        />
      </Space>
    </Card>
  );
};

export default PaymentInUSDT;
`},38445:function(c,e){e.Z=`import React from 'react';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, ConfigProvider, Space } from 'antd';

import { customToken } from './tokens';

const App: React.FC = () => {
  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
      group: 'More',
      name: 'Test Wallet3',
      remark: 'remark 3',
      app: {
        link: 'https://test.com/xxx',
      },
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
  ];

  return (
    <ConfigProvider theme={customToken}>
      <Space>
        <Card
          styles={{
            body: {
              padding: 0,
              maxWidth: 795,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},13942:function(c,e){e.Z=`import { ConnectButton, Web3ConfigProvider, zh_CN } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider locale={zh_CN}>
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},26349:function(c,e){e.Z=`import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider
      locale={{
        ConnectButton: {
          connect: '\u8FDE\u63A5\u94B1\u5305',
        },
      }}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},4633:function(c,e){e.Z=`import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <ConnectButton
      locale={{
        connect: '\u8FDE\u63A5\u94B1\u5305',
      }}
    />
  );
};

export default App;
`},98315:function(c,e){e.Z=`import { NFTImage } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},3194:function(c,e){e.Z=`import React from 'react';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, ConfigProvider, Radio, Space, theme } from 'antd';

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');

  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
      group: 'More',
      name: 'Test Wallet3',
      remark: 'remark 3',
      app: {
        link: 'https://test.com/xxx',
      },
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
  ];

  return (
    <Space direction="vertical">
      <Radio.Group
        onChange={(e) => {
          setMode(e.target.value);
        }}
        value={mode}
      >
        <Radio.Button value="dark">Dark</Radio.Button>
        <Radio.Button value="light">Light</Radio.Button>
      </Radio.Group>
      <ConfigProvider
        theme={{
          algorithm: mode === 'dark' ? theme.darkAlgorithm : undefined,
        }}
      >
        <Card
          styles={{
            body: {
              padding: 0,
              maxWidth: 795,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </ConfigProvider>
    </Space>
  );
};

export default App;
`},77513:function(c,e){e.Z=`import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export type ThemeValue = 'default' | 'violet' | 'dark' | 'green' | 'pink';

export const customToken: ThemeConfig = {
  token: {
    borderRadius: 16,
    wireframe: false,
    padding: 24,
    paddingSM: 16,
    paddingXS: 12,
    fontSize: 16,
    fontSizeLG: 18,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontSizeHeading2: 36,
    fontSizeXL: 24,
    colorPrimary: '#8442ff',
    colorInfo: '#8442ff',
    paddingContentHorizontal: 20,
    paddingContentHorizontalSM: 16,
    paddingContentHorizontalLG: 24,
  },
  components: {
    Button: {
      controlHeight: 44,
      marginXS: 8,
      fontSizeLG: 18,
      controlHeightLG: 52,
      controlHeightSM: 36,
      paddingXS: 16,
    },
    List: {
      paddingLG: 24,
      marginLG: 24,
      marginXXL: 48,
      paddingContentHorizontalLG: 24,
      fontSizeLG: 20,
      padding: 16,
      paddingContentVertical: 24,
      paddingXS: 8,
      paddingSM: 12,
    },

    Modal: {
      controlHeightLG: 44,
      fontSizeHeading5: 20,
      fontSizeLG: 18,
      marginSM: 12,
      margin: 16,
      marginLG: 24,
      marginXS: 8,
      padding: 16,
      paddingContentHorizontalLG: 24,
      paddingLG: 24,
      paddingMD: 20,
      paddingXS: 12,
    },
  },
};

export type ThemeSetting = {
  color: string;
  value: ThemeValue;
  name: string;
  token: ThemeConfig;
};

// \u90E8\u5206\u53C2\u8003 antd \u5B98\u7F51\u7684\u4E3B\u9898 https://github.com/ant-design/ant-design/blob/master/.dumi/pages/index/components/Theme/index.tsx#L305
export const themeList: ThemeSetting[] = [
  {
    color: '#1677FF',
    value: 'default',
    name: 'Default',
    token: {
      token: {},
    },
  },
  {
    color: '#000',
    value: 'dark',
    name: 'Dark',
    token: {
      token: {
        borderRadius: 2,
        colorPrimary: '#000',
        colorPrimaryTextHover: 'rgba(255, 255, 255, 0.8)',
        colorLink: 'rgba(255, 255, 255, 0.75)',
        colorText: 'rgba(255, 255, 255, 0.75)',
      },
      components: {
        Button: {
          defaultHoverColor: 'rgba(255, 255, 255, 0.8)',
          defaultHoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
      algorithm: theme.darkAlgorithm,
    },
  },
  {
    value: 'green',
    name: 'Forest green',
    color: '#00B96B',
    token: {
      token: {
        colorPrimary: '#00B96B',
        borderRadius: 4,
        colorLink: '#00B96B',
      },
    },
  },
  {
    value: 'pink',
    name: 'Blossom',
    color: '#ED4192',
    token: {
      token: {
        colorPrimary: '#ED4192',
        borderRadius: 16,
        colorLink: '#ED4192',
      },
    },
  },
  {
    color: '#8343FF',
    value: 'violet',
    name: 'Violet',
    token: customToken,
  },
];
`},30634:function(c,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
}

const App: React.FC<Props> = ({ mode, size, quickConnect }) => {
  return (
    <BitcoinWeb3ConfigProvider autoConnect wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type="primary"
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},81310:function(c,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
}

const App: React.FC<Props> = ({ mode, size, quickConnect }) => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      ens
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
    >
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type="primary"
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},24895:function(c,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { TinyColor } from '@ctrl/tinycolor';
import { Col, ConfigProvider, Radio, Row, Select, Slider, Space, Switch, Tabs } from 'antd';
import type { ConfigProviderProps } from 'antd';

import { themeList } from '../tokens';
import type { ThemeSetting, ThemeValue } from '../tokens';
import BitcoinApp from './bitcoin';
import EthereumApp from './ethereum';
import styles from './index.module.less';
import SolanaApp from './solana';
import SuiApp from './sui';
import TonApp from './ton';

type SizeType = ConfigProviderProps['componentSize'];

const defaultRadius = 8;

const ThemeLabel: React.FC<{ theme: ThemeSetting }> = ({ theme }) => {
  return (
    <Space
      style={{
        paddingTop: 6,
      }}
    >
      <div
        className={styles.themeLabel}
        style={{
          backgroundColor: new TinyColor(theme.color).lighten(30).toString(),
        }}
      >
        <div
          style={{
            backgroundColor: theme.color,
          }}
        />
      </div>
      {theme.name}
    </Space>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = React.useState<ConnectModalProps['mode']>('simple');
  const [size, setSize] = React.useState<SizeType>('large'); // default is 'middle'
  const [quickConnect, setQuickConnect] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<ThemeValue>('default');
  const [radius, setRadius] = React.useState<number>(defaultRadius);
  const currentTheme = themeList.find((t) => t.value === theme);

  return (
    <>
      <ConfigProvider
        theme={{
          ...currentTheme?.token,
          token: {
            ...currentTheme?.token.token,
            borderRadius: radius,
          },
        }}
      >
        <Tabs
          defaultActiveKey="ethereum"
          centered
          items={[
            {
              label: 'Ethereum',
              key: 'ethereum',
              children: (
                <div className={styles.connectorContainer}>
                  <EthereumApp mode={mode} quickConnect={quickConnect} size={size} />
                </div>
              ),
            },
            {
              label: 'Bitcoin',
              key: 'bitcoin',
              children: (
                <div className={styles.connectorContainer}>
                  <BitcoinApp mode={mode} quickConnect={quickConnect} size={size} />
                </div>
              ),
            },
            {
              label: 'Solana',
              key: 'solana',
              children: (
                <div className={styles.connectorContainer}>
                  <SolanaApp mode={mode} quickConnect={quickConnect} size={size} />
                </div>
              ),
            },
            {
              label: 'Sui',
              key: 'sui',
              children: (
                <div className={styles.connectorContainer}>
                  <SuiApp mode={mode} quickConnect={quickConnect} size={size} />
                </div>
              ),
            },
            {
              label: 'TON',
              key: 'ton',
              children: (
                <div className={styles.connectorContainer}>
                  <TonApp mode={mode} quickConnect={quickConnect} size={size} />
                </div>
              ),
            },
          ]}
        />
      </ConfigProvider>
      <div className={styles.configContainer}>
        <Row>
          <Col xs={24} sm={12}>
            <div className={styles.groupTitle}>Basic</div>
            <Space direction="vertical">
              <Radio.Group
                onChange={(e) => {
                  setMode(e.target.value);
                }}
                value={mode}
              >
                <Radio value="simple">simple mode</Radio>
                <Radio value="auto">auto mode</Radio>
              </Radio.Group>
              <Space>
                <Switch
                  checked={quickConnect}
                  onChange={(checked) => {
                    setQuickConnect(checked);
                  }}
                />
                Quick Connect
              </Space>
            </Space>
          </Col>
          <Col xs={24} sm={12}>
            <div className={styles.groupTitle}>Theme</div>
            <Space direction="vertical">
              <Select
                style={{
                  width: 300,
                }}
                size="large"
                value={theme}
                onChange={(v) => {
                  setTheme(v);
                  const selectedTheme = themeList.find((t) => t.value === v);
                  setRadius(selectedTheme?.token.token?.borderRadius || defaultRadius);
                }}
                options={themeList.map((item) => {
                  return { value: item.value, label: <ThemeLabel theme={item} /> };
                })}
              />
              <Space>
                Border Radius:
                <Slider
                  value={radius}
                  style={{
                    width: 190,
                  }}
                  defaultValue={defaultRadius}
                  min={0}
                  max={16}
                  onChange={setRadius}
                />
              </Space>
              <Space>
                Button Size:
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
`},74101:function(c,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
}

const App: React.FC<Props> = ({ mode, size, quickConnect }) => {
  return (
    <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type="primary"
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},94038:function(c,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWallet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
}

const App: React.FC<Props> = ({ mode, size, quickConnect }) => {
  return (
    <SuiWeb3ConfigProvider balance autoConnect wallets={[Suiet(), SuiWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type="primary"
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
`},84087:function(c,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { okxTonWallet, tonkeeper, TonWeb3ConfigProvider } from '@ant-design/web3-ton';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
}

const App: React.FC<Props> = ({ mode, size, quickConnect }) => {
  return (
    <TonWeb3ConfigProvider wallets={[tonkeeper, okxTonWallet, { key: 'safepalwallet' }]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type="primary"
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};

export default App;
`}}]);
