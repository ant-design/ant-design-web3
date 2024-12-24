"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5451],{42117:function(t,n,e){e.r(n),e.d(n,{customToken:function(){return r},themeList:function(){return d}});var p=e(62610),r={token:{borderRadius:16,wireframe:!1,padding:24,paddingSM:16,paddingXS:12,fontSize:16,fontSizeLG:18,fontSizeHeading4:24,fontSizeHeading5:20,fontSizeHeading2:36,fontSizeXL:24,colorPrimary:"#8442ff",colorInfo:"#8442ff",paddingContentHorizontal:20,paddingContentHorizontalSM:16,paddingContentHorizontalLG:24},components:{Button:{controlHeight:44,marginXS:8,fontSizeLG:18,controlHeightLG:52,controlHeightSM:36,paddingXS:16},List:{paddingLG:24,marginLG:24,marginXXL:48,paddingContentHorizontalLG:24,fontSizeLG:20,padding:16,paddingContentVertical:24,paddingXS:8,paddingSM:12},Modal:{controlHeightLG:44,fontSizeHeading5:20,fontSizeLG:18,marginSM:12,margin:16,marginLG:24,marginXS:8,padding:16,paddingContentHorizontalLG:24,paddingLG:24,paddingMD:20,paddingXS:12}}},d=[{color:"#1677FF",value:"default",name:"Default",token:{token:{}}},{color:"#000",value:"dark",name:"Dark",token:{token:{borderRadius:2,colorPrimary:"#000",colorPrimaryTextHover:"rgba(255, 255, 255, 0.8)",colorLink:"rgba(255, 255, 255, 0.75)",colorText:"rgba(255, 255, 255, 0.75)"},components:{Button:{defaultHoverColor:"rgba(255, 255, 255, 0.8)",defaultHoverBorderColor:"rgba(255, 255, 255, 0.8)"}},algorithm:p.Z.darkAlgorithm}},{value:"green",name:"Forest green",color:"#00B96B",token:{token:{colorPrimary:"#00B96B",borderRadius:4,colorLink:"#00B96B"}}},{value:"pink",name:"Blossom",color:"#ED4192",token:{token:{colorPrimary:"#ED4192",borderRadius:16,colorLink:"#ED4192"}}},{color:"#8343FF",value:"violet",name:"Violet",token:r}]},63203:function(t,n,e){e.r(n);var p=e(1735),r=e(45970),d=e(66817),m=e(11632),i=e(1063),a=e(72152),s=function(o){var c=o.mode,u=o.size,l=o.quickConnect;return(0,a.jsx)(m.N,{autoConnect:!0,wallets:[(0,i.x5)(),(0,i.Oq)(),(0,i.Yw)()],children:(0,a.jsx)(r.w,{modalProps:{mode:c},children:(0,a.jsx)(d.N,{type:"primary",style:{width:"auto"},size:u,quickConnect:l})})})};n.default=s},52626:function(t,n,e){e.r(n);var p=e(1735),r=e(45970),d=e(66817),m=e(51758),i=e(46472),a=e(18099),s=e(26938),C=e(14017),o=e(72152),c=function(l){var g=l.mode,f=l.size,_=l.quickConnect;return(0,o.jsx)(m.h,{eip6963:{autoAddInjectedWallets:!0},walletConnect:{projectId:"c07c0051c2055890eade3556618e38a6"},ens:!0,wallets:[(0,i.M)(),(0,a.b)(),(0,s.g)({group:"Popular"}),(0,C.Y)()],children:(0,o.jsx)(r.w,{modalProps:{mode:g},children:(0,o.jsx)(d.N,{type:"primary",style:{width:"auto"},size:f,quickConnect:_})})})};n.default=c},63278:function(t,n,e){e.r(n);var p=e(1735),r=e(45970),d=e(66817),m=e(24639),i=e(87713),a=e(72152),s=function(o){var c=o.mode,u=o.size,l=o.quickConnect;return(0,a.jsx)(m.G,{wallets:[(0,i.GU)(),(0,i.j1)()],children:(0,a.jsx)(r.w,{modalProps:{mode:c},children:(0,a.jsx)(d.N,{type:"primary",style:{width:"auto"},size:u,quickConnect:l})})})};n.default=s},65329:function(t,n,e){e.r(n);var p=e(1735),r=e(45970),d=e(66817),m=e(6555),i=e(82998),a=e(72152),s=function(o){var c=o.mode,u=o.size,l=o.quickConnect;return(0,a.jsx)(m.r,{balance:!0,autoConnect:!0,wallets:[(0,i.h)(),(0,i.t)()],children:(0,a.jsx)(r.w,{modalProps:{mode:c},children:(0,a.jsx)(d.N,{type:"primary",style:{width:"auto"},size:u,quickConnect:l})})})};n.default=s},2534:function(t,n,e){e.r(n);var p=e(1735),r=e(45970),d=e(66817),m=e(67287),i=e(93502),a=e(67318),s=e(72152),C=function(c){var u=c.mode,l=c.size,g=c.quickConnect;return(0,s.jsx)(m.q,{wallets:[i._,a.x,{key:"safepalwallet"}],children:(0,s.jsx)(r.w,{modalProps:{mode:u},children:(0,s.jsx)(d.N,{type:"primary",style:{width:"auto"},size:l,quickConnect:g})})})};n.default=C},75323:function(t,n){n.Z=`import React, { useEffect } from 'react';
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
`},35542:function(t,n){n.Z=`import { Address, ConnectButton, Connector, NFTCard } from '@ant-design/web3';
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
`},61515:function(t,n){n.Z=`import React, { useEffect } from 'react';
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
`},25116:function(t,n){n.Z=`import React from 'react';
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
`},49867:function(t,n){n.Z=`import React from 'react';
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
`},96200:function(t,n){n.Z=`import { ConnectButton, Web3ConfigProvider, zh_CN } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider locale={zh_CN}>
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},48805:function(t,n){n.Z=`import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

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
`},95806:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';

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
`},56527:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},36570:function(t,n){n.Z=`import React from 'react';
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
`},55466:function(t,n){n.Z=`import type { ThemeConfig } from 'antd';
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
`},80798:function(t,n){n.Z=`import React from 'react';
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
`},56448:function(t,n){n.Z=`import React from 'react';
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
`},17289:function(t,n){n.Z=`import React from 'react';
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
`},52764:function(t,n){n.Z=`import React from 'react';
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
`},75252:function(t,n){n.Z=`import React from 'react';
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
`},48598:function(t,n){n.Z=`import React from 'react';
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
