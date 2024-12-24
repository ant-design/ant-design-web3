"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[4744],{78181:function(t,e,n){n.r(e),n.d(e,{EvmPayButton:function(){return b}});var p=n(82092),o=n.n(p),m=n(1735),_=n(45970),a=n(66817),r=n(51758),c=n(46472),g=n(27206),i=n(33851),d=n(15613),l=n(18485),u=n(69553),h=n(28068),f=n(8986),A=n(94549),x=n(29816),F=n(3078),s=n(72152),b=function(P){var I=P.setTokenEcosystem,M=P.tokenEcosystem,z=P.signCallback,L=P.payCallback,K=P.onRejectSwitchChain,R=(0,d._)({chains:[u.R,h.y,f.y,A.v],transports:o()(o()(o()(o()({},u.R.id,(0,l.d)()),h.y.id,(0,l.d)()),f.y.id,(0,l.d)()),A.v.id,(0,l.d)()),connectors:[(0,x.L)({target:"metaMask"})]});return(0,s.jsx)("div",{children:(0,s.jsx)(r.h,{config:R,eip6963:{autoAddInjectedWallets:!0},wallets:[(0,c.M)()],chains:[u.R,h.y,f.y,A.v],children:(0,s.jsxs)(g.Z,{size:"middle",children:[(0,s.jsx)(_.w,{modalProps:{footer:(0,s.jsxs)(s.Fragment,{children:["Powered by"," ",(0,s.jsx)("a",{href:"https://web3.ant.design/",target:"_blank",rel:"noreferrer",children:"Ant Design Web3"})]})},children:(0,s.jsx)(a.N,{chainSelect:!1})}),(0,s.jsx)(_.w,{modalProps:{footer:(0,s.jsxs)(s.Fragment,{children:["Powered by"," ",(0,s.jsx)("a",{href:"https://web3.ant.design/",target:"_blank",rel:"noreferrer",children:"Ant Design Web3"})]})},children:(0,s.jsx)(a.N,{chainSelect:!1})}),(0,s.jsx)(F.default,{setTokenEcosystem:I,tokenEcosystem:M,signTransaction:function(k,B){L(k,B)},onRejectSwitchChain:K,renderSignButton:function(k,B,w){return(0,s.jsx)(i.ZP,{type:"primary",style:{width:200},loading:w,disabled:B,onClick:function(){z(k)},children:"Pay"})}})]})})})}},22313:function(t,e,n){n.r(e);var p=n(1735),o=n(27206),m=n(53401),_=n(2848),a=n(72152),r=function(g){var i=_.TOKEN_PAY_ADDRESS.chains;return(0,a.jsx)(o.Z,{size:"middle",children:(0,a.jsx)(m.ZP.Group,{onChange:function(l){g.onChange(l.target.value)},value:g.ecosystem,children:i.map(function(d){return(0,a.jsx)(m.ZP,{value:d.ecosystem,children:d.name},d.ecosystem)})})})};e.default=r},3078:function(t,e,n){n.r(e);var p=n(90228),o=n.n(p),m=n(87999),_=n.n(m),a=n(48305),r=n.n(a),c=n(1735),g=n(56130),i=n(76177),d=n(17744),l=n(13824),u=n(29070),h=n(6905),f=n(2848),A=n(72152),x=function(s){var b=s.setTokenEcosystem,D=s.tokenEcosystem,P=s.signTransaction,I=s.renderSignButton,M=s.onRejectSwitchChain,z=(0,c.useState)(!1),L=r()(z,2),K=L[0],R=L[1],U=(0,l.S)(),k=U.writeContractAsync,B=(0,u.o)(),w=B.switchChain,O=(0,h.x)(),Z=(0,g.Z)(),E=Z.account;(0,c.useEffect)(function(){if(E!=null&&E.address){var v,T=f.TOKEN_PAY_ADDRESS.chains,y=(v=T.find(function(S){return S.ecosystem===D}))===null||v===void 0?void 0:v.id;y&&y!==O&&(w==null||w({chainId:y},{onError:function(W){W.message.includes("User rejected")&&(M==null||M(O))}}))}},[D,E]),(0,c.useEffect)(function(){if(O&&!D){var v,T=f.TOKEN_PAY_ADDRESS.chains,y=(v=T.find(function(S){return S.id===O}))===null||v===void 0?void 0:v.ecosystem;y&&E?b==null||b(y):b==null||b(T[0].ecosystem)}},[E]);var X=function(){var v=_()(o()().mark(function T(y,S){var W,j,G,H,Y;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.prev=0,R(!0),G=(W=f.TOKEN_PAY_ADDRESS.chains.find(function(N){return N.ecosystem===D}))===null||W===void 0?void 0:W.decimals,H=(j=f.TOKEN_PAY_ADDRESS.chains.find(function(N){return N.ecosystem===D}))===null||j===void 0?void 0:j.address,C.next=6,k({abi:(0,i.V)(["function transfer(address _to, uint256 _value)"]),address:H,functionName:"transfer",args:[y.toLocaleLowerCase(),(0,d.v)(S.toString(),G)]});case 6:Y=C.sent,R(!1),P==null||P(Y,(E==null?void 0:E.address)||""),C.next=15;break;case 11:C.prev=11,C.t0=C.catch(0),console.log("error",C.t0.message),R(!1);case 15:case"end":return C.stop()}},T,null,[[0,11]])}));return function(y,S){return v.apply(this,arguments)}}();return(0,A.jsx)("div",{children:I(X,!E,K)})};e.default=x},2848:function(t,e,n){n.r(e),n.d(e,{TOKEN_PAY_ADDRESS:function(){return p}});var p={name:"USDT",icon:"https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*HkpaQoYlReEAAAAAAAAAAAAADiOMAQ/original",symbol:"usdt",chains:[{name:"Ethereum",id:1,decimals:6,ecosystem:"ethereum",network:"mainnet",txScan:"https://etherscan.io/tx/",address:"0xdAC17F958D2ee523a2206206994597C13D831ec7"},{name:"Polygon",id:137,decimals:6,ecosystem:"polygon",network:"polygon",txScan:"https://polygonscan.com/tx/",address:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f"},{name:"Arbitrum",id:42161,decimals:6,ecosystem:"arbitrum",network:"arbitrum",txScan:"https://arbiscan.io/tx/",address:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"},{name:"Optimism",id:10,decimals:6,ecosystem:"optimism",network:"optimism",txScan:"https://optimistic.etherscan.io/tx/",address:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"}]}},42117:function(t,e,n){n.r(e),n.d(e,{customToken:function(){return o},themeList:function(){return m}});var p=n(62610),o={token:{borderRadius:16,wireframe:!1,padding:24,paddingSM:16,paddingXS:12,fontSize:16,fontSizeLG:18,fontSizeHeading4:24,fontSizeHeading5:20,fontSizeHeading2:36,fontSizeXL:24,colorPrimary:"#8442ff",colorInfo:"#8442ff",paddingContentHorizontal:20,paddingContentHorizontalSM:16,paddingContentHorizontalLG:24},components:{Button:{controlHeight:44,marginXS:8,fontSizeLG:18,controlHeightLG:52,controlHeightSM:36,paddingXS:16},List:{paddingLG:24,marginLG:24,marginXXL:48,paddingContentHorizontalLG:24,fontSizeLG:20,padding:16,paddingContentVertical:24,paddingXS:8,paddingSM:12},Modal:{controlHeightLG:44,fontSizeHeading5:20,fontSizeLG:18,marginSM:12,margin:16,marginLG:24,marginXS:8,padding:16,paddingContentHorizontalLG:24,paddingLG:24,paddingMD:20,paddingXS:12}}},m=[{color:"#1677FF",value:"default",name:"Default",token:{token:{}}},{color:"#000",value:"dark",name:"Dark",token:{token:{borderRadius:2,colorPrimary:"#000",colorPrimaryTextHover:"rgba(255, 255, 255, 0.8)",colorLink:"rgba(255, 255, 255, 0.75)",colorText:"rgba(255, 255, 255, 0.75)"},components:{Button:{defaultHoverColor:"rgba(255, 255, 255, 0.8)",defaultHoverBorderColor:"rgba(255, 255, 255, 0.8)"}},algorithm:p.Z.darkAlgorithm}},{value:"green",name:"Forest green",color:"#00B96B",token:{token:{colorPrimary:"#00B96B",borderRadius:4,colorLink:"#00B96B"}}},{value:"pink",name:"Blossom",color:"#ED4192",token:{token:{colorPrimary:"#ED4192",borderRadius:16,colorLink:"#ED4192"}}},{color:"#8343FF",value:"violet",name:"Violet",token:o}]},63203:function(t,e,n){n.r(e);var p=n(1735),o=n(45970),m=n(66817),_=n(11632),a=n(1063),r=n(72152),c=function(i){var d=i.mode,l=i.size,u=i.quickConnect;return(0,r.jsx)(_.N,{autoConnect:!0,wallets:[(0,a.x5)(),(0,a.Oq)(),(0,a.Yw)()],children:(0,r.jsx)(o.w,{modalProps:{mode:d},children:(0,r.jsx)(m.N,{type:"primary",style:{width:"auto"},size:l,quickConnect:u})})})};e.default=c},52626:function(t,e,n){n.r(e);var p=n(1735),o=n(45970),m=n(66817),_=n(51758),a=n(46472),r=n(18099),c=n(26938),g=n(14017),i=n(72152),d=function(u){var h=u.mode,f=u.size,A=u.quickConnect;return(0,i.jsx)(_.h,{eip6963:{autoAddInjectedWallets:!0},walletConnect:{projectId:"c07c0051c2055890eade3556618e38a6"},ens:!0,wallets:[(0,a.M)(),(0,r.b)(),(0,c.g)({group:"Popular"}),(0,g.Y)()],children:(0,i.jsx)(o.w,{modalProps:{mode:h},children:(0,i.jsx)(m.N,{type:"primary",style:{width:"auto"},size:f,quickConnect:A})})})};e.default=d},63278:function(t,e,n){n.r(e);var p=n(1735),o=n(45970),m=n(66817),_=n(24639),a=n(87713),r=n(72152),c=function(i){var d=i.mode,l=i.size,u=i.quickConnect;return(0,r.jsx)(_.G,{wallets:[(0,a.GU)(),(0,a.j1)()],children:(0,r.jsx)(o.w,{modalProps:{mode:d},children:(0,r.jsx)(m.N,{type:"primary",style:{width:"auto"},size:l,quickConnect:u})})})};e.default=c},65329:function(t,e,n){n.r(e);var p=n(1735),o=n(45970),m=n(66817),_=n(6555),a=n(82998),r=n(72152),c=function(i){var d=i.mode,l=i.size,u=i.quickConnect;return(0,r.jsx)(_.r,{balance:!0,autoConnect:!0,wallets:[(0,a.h)(),(0,a.t)()],children:(0,r.jsx)(o.w,{modalProps:{mode:d},children:(0,r.jsx)(m.N,{type:"primary",style:{width:"auto"},size:l,quickConnect:u})})})};e.default=c},2534:function(t,e,n){n.r(e);var p=n(1735),o=n(45970),m=n(66817),_=n(67287),a=n(93502),r=n(67318),c=n(72152),g=function(d){var l=d.mode,u=d.size,h=d.quickConnect;return(0,c.jsx)(_.q,{wallets:[a._,r.x,{key:"safepalwallet"}],children:(0,c.jsx)(o.w,{modalProps:{mode:l},children:(0,c.jsx)(m.N,{type:"primary",style:{width:"auto"},size:u,quickConnect:h})})})};e.default=g},75323:function(t,e){e.Z=`import React, { useEffect } from 'react';
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
`},35542:function(t,e){e.Z=`import { Address, ConnectButton, Connector, NFTCard } from '@ant-design/web3';
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
`},61515:function(t,e){e.Z=`import React, { useEffect } from 'react';
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
`},25116:function(t,e){e.Z=`import React from 'react';
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
`},1502:function(t,e){e.Z=`// /components/pay-button.tsx
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
`},77038:function(t,e){e.Z=`// /components/select.tsx
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
`},1494:function(t,e){e.Z=`// /components/send.tsx
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
`},53367:function(t,e){e.Z=`// /constants/tokenPayAddress.ts
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
`},62940:function(t,e){e.Z=`// /usdt.tsx
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
`},49867:function(t,e){e.Z=`import React from 'react';
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
`},96200:function(t,e){e.Z=`import { ConnectButton, Web3ConfigProvider, zh_CN } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider locale={zh_CN}>
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},48805:function(t,e){e.Z=`import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

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
`},95806:function(t,e){e.Z=`import { ConnectButton } from '@ant-design/web3';

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
`},56527:function(t,e){e.Z=`import { NFTImage } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},36570:function(t,e){e.Z=`import React from 'react';
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
`},55466:function(t,e){e.Z=`import type { ThemeConfig } from 'antd';
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
`},80798:function(t,e){e.Z=`import React from 'react';
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
`},56448:function(t,e){e.Z=`import React from 'react';
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
`},17289:function(t,e){e.Z=`import React from 'react';
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
`},52764:function(t,e){e.Z=`import React from 'react';
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
`},75252:function(t,e){e.Z=`import React from 'react';
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
`},48598:function(t,e){e.Z=`import React from 'react';
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
