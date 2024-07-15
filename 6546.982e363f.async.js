"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6546],{61461:function(s,r,c){c.r(r),c.d(r,{TinyColor:function(){return u.C},bounds:function(){return v},cmykToRgb:function(){return i.JT},convertDecimalToHex:function(){return i.Wl},convertHexToDecimal:function(){return i.T6},fromRatio:function(){return x},hslToRgb:function(){return i.ve},hsvToRgb:function(){return i.WE},inputToRGB:function(){return b.uA},isReadable:function(){return w},isValidCSSUnit:function(){return b.ky},legacyRandom:function(){return S},mostReadable:function(){return B},names:function(){return f.R},numberInputToObject:function(){return i.Yt},parseIntFromHex:function(){return i.VD},random:function(){return R},readability:function(){return m},rgbToCmyk:function(){return i.D5},rgbToHex:function(){return i.vq},rgbToHsl:function(){return i.lC},rgbToHsv:function(){return i.py},rgbToRgb:function(){return i.rW},rgbaToArgbHex:function(){return i.GC},rgbaToHex:function(){return i.s},stringInputToObject:function(){return b.uz},toMsFilter:function(){return M}});var u=c(11899),f=c(23375);function m(n,o){const e=new u.C(n),t=new u.C(o);return(Math.max(e.getLuminance(),t.getLuminance())+.05)/(Math.min(e.getLuminance(),t.getLuminance())+.05)}function w(n,o,e={level:"AA",size:"small"}){const t=m(n,o);switch((e.level??"AA")+(e.size??"small")){case"AAsmall":case"AAAlarge":return t>=4.5;case"AAlarge":return t>=3;case"AAAsmall":return t>=7;default:return!1}}function B(n,o,e={includeFallbackColors:!1,level:"AA",size:"small"}){let t=null,a=0;const{includeFallbackColors:l,level:d,size:k}=e;for(const g of o){const C=m(n,g);C>a&&(a=C,t=new u.C(g))}return w(n,t,{level:d,size:k})||!l?t:(e.includeFallbackColors=!1,B(n,["#fff","#000"],e))}var i=c(79158);function M(n,o){const e=new u.C(n),t="#"+(0,i.GC)(e.r,e.g,e.b,e.a);let a=t;const l=e.gradientType?"GradientType = 1, ":"";if(o){const d=new u.C(o);a="#"+(0,i.GC)(d.r,d.g,d.b,d.a)}return`progid:DXImageTransform.Microsoft.gradient(${l}startColorstr=${t},endColorstr=${a})`}var h=c(70979);function x(n,o){const e={r:(0,h.JX)(n.r),g:(0,h.JX)(n.g),b:(0,h.JX)(n.b)};return n.a!==void 0&&(e.a=Number(n.a)),new u.C(e,o)}function S(){return new u.C({r:Math.random(),g:Math.random(),b:Math.random()})}var b=c(41587);function R(n={}){if(n.count!==void 0&&n.count!==null){const l=n.count,d=[];for(n.count=void 0;l>d.length;)n.count=null,n.seed&&(n.seed+=1),d.push(R(n));return n.count=l,d}const o=W(n.hue,n.seed),e=P(o,n),t=L(o,e,n),a={h:o,s:e,v:t};return n.alpha!==void 0&&(a.a=n.alpha),new u.C(a)}function W(n,o){const e=E(n);let t=p(e,o);return t<0&&(t=360+t),t}function P(n,o){if(o.hue==="monochrome")return 0;if(o.luminosity==="random")return p([0,100],o.seed);const{saturationRange:e}=T(n);let t=e[0],a=e[1];switch(o.luminosity){case"bright":t=55;break;case"dark":t=a-10;break;case"light":a=55;break;default:break}return p([t,a],o.seed)}function L(n,o,e){let t=A(n,o),a=100;switch(e.luminosity){case"dark":a=t+20;break;case"light":t=(a+t)/2;break;case"random":t=0,a=100;break;default:break}return p([t,a],e.seed)}function A(n,o){const{lowerBounds:e}=T(n);for(let t=0;t<e.length-1;t++){const a=e[t][0],l=e[t][1],d=e[t+1][0],k=e[t+1][1];if(o>=a&&o<=d){const g=(k-l)/(d-a),C=l-g*a;return g*o+C}}return 0}function E(n){const o=parseInt(n,10);if(!Number.isNaN(o)&&o<360&&o>0)return[o,o];if(typeof n=="string"){const e=v.find(a=>a.name===n);if(e){const a=y(e);if(a.hueRange)return a.hueRange}const t=new u.C(n);if(t.isValid){const a=t.toHsv().h;return[a,a]}}return[0,360]}function T(n){n>=334&&n<=360&&(n-=360);for(const o of v){const e=y(o);if(e.hueRange&&n>=e.hueRange[0]&&n<=e.hueRange[1])return e}throw Error("Color not found")}function p(n,o){if(o===void 0)return Math.floor(n[0]+Math.random()*(n[1]+1-n[0]));const e=n[1]||1,t=n[0]||0;o=(o*9301+49297)%233280;const a=o/233280;return Math.floor(t+a*(e-t))}function y(n){const o=n.lowerBounds[0][0],e=n.lowerBounds[n.lowerBounds.length-1][0],t=n.lowerBounds[n.lowerBounds.length-1][1],a=n.lowerBounds[0][1];return{name:n.name,hueRange:n.hueRange,lowerBounds:n.lowerBounds,saturationRange:[o,e],brightnessRange:[t,a]}}const v=[{name:"monochrome",hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:"red",hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:"orange",hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:"yellow",hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:"green",hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:"blue",hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:"purple",hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:"pink",hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}]},75506:function(s,r,c){c.r(r),c.d(r,{customToken:function(){return f},themeList:function(){return m}});var u=c(86231),f={token:{borderRadius:16,wireframe:!1,padding:24,paddingSM:16,paddingXS:12,fontSize:16,fontSizeLG:18,fontSizeHeading4:24,fontSizeHeading5:20,fontSizeHeading2:36,fontSizeXL:24,colorPrimary:"#8442ff",colorInfo:"#8442ff"},components:{Button:{controlHeight:44,marginXS:8,paddingContentHorizontal:24,fontSizeLG:18,controlHeightLG:52,controlHeightSM:36,paddingXS:16},List:{paddingLG:24,marginLG:24,marginXXL:48,paddingContentHorizontalLG:24,fontSizeLG:20,padding:16,paddingContentVertical:24,paddingXS:8,paddingSM:12},Modal:{controlHeightLG:44,fontSizeHeading5:20,fontSizeLG:18,marginSM:12,margin:16,marginLG:24,marginXS:8,padding:16,paddingContentHorizontalLG:24,paddingLG:24,paddingMD:20,paddingXS:12}}},m=[{color:"#1677FF",value:"default",name:"Default",token:{token:{}}},{color:"#000",value:"dark",name:"Dark",token:{token:{borderRadius:2,colorPrimary:"#000",colorPrimaryTextHover:"rgba(255, 255, 255, 0.8)",colorLink:"rgba(255, 255, 255, 0.75)",colorText:"rgba(255, 255, 255, 0.75)"},components:{Button:{defaultHoverColor:"rgba(255, 255, 255, 0.8)",defaultHoverBorderColor:"rgba(255, 255, 255, 0.8)"}},algorithm:u.Z.darkAlgorithm}},{value:"green",name:"Forest green",color:"#00B96B",token:{token:{colorPrimary:"#00B96B",borderRadius:4,colorLink:"#00B96B"}}},{value:"pink",name:"Blossom",color:"#ED4192",token:{token:{colorPrimary:"#ED4192",borderRadius:16,colorLink:"#ED4192"}}},{color:"#8343FF",value:"violet",name:"Violet",token:f}]},66860:function(s,r,c){c.r(r),r.default={connectorContainer:"kfwGrlVcCE4MvdumjdId",configContainer:"_Gx0iI33mzcTuHlSgUWf",groupTitle:"zIFtGimZzYYTq_Sn9MCQ",themeLabel:"oDD26f5G4roGf2phJfvL"}},68645:function(s,r){r.Z=`import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { createConfig, http, useReadContract, useWriteContract } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

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
    // Goerli test contract 0x418325c3979b7f8a17678ec2463a74355bdbe72c
    address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
    functionName: 'balanceOf',
    args: [account?.address as \`0x\${string}\`],
  });
  const { writeContract } = useWriteContract();

  return (
    <div>
      {result.data?.toString()}
      <Button
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
              address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
              functionName: 'mint',
              args: [BigInt(1)],
              value: parseEther('0.01'),
            },
            {
              onSuccess: () => {
                message.success('Mint Success');
              },
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
    <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
`},15721:function(s,r){r.Z=`import { Address, ConnectButton, Connector, NFTCard } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
}
`},77958:function(s,r){r.Z=`import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { Goerli, MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { createConfig, http, useReadContract, useWriteContract } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet, goerli],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

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
    // Goerli test contract 0x418325c3979b7f8a17678ec2463a74355bdbe72c
    address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
    functionName: 'balanceOf',
    args: [account?.address as \`0x\${string}\`],
  });
  const { writeContract } = useWriteContract();

  return (
    <div>
      {result.data?.toString()}
      <Button
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
              address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
              functionName: 'mint',
              args: [BigInt(1)],
              value: parseEther('0.01'),
            },
            {
              onSuccess: () => {
                message.success('Mint Success');
              },
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
    <WagmiWeb3ConfigProvider config={config} chains={[Goerli]} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
`},3805:function(s,r){r.Z=`import React from 'react';
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
`},81729:function(s,r){r.Z=`import React from 'react';
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
`},50038:function(s,r){r.Z=`.connectorContainer {
  padding: 48px 0;
  display: flex;
  justify-content: center;
}

.configContainer {
  background-color: #fcfcfc;
  border-top: 1px solid #e4e9ec;
  padding: 0 24px 16px 24px;

  .groupTitle {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 12px;
  }
}

.themeLabel {
  width: 33px;
  height: 24px;
  box-sizing: border-box;
  padding: 6px 0 0 9px;
  border-radius: 4px;

  div {
    width: 24px;
    height: 18px;
    border-radius: 4px;
  }
}
`},76491:function(s,r){r.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { TinyColor } from '@ctrl/tinycolor';
import { Col, ConfigProvider, Radio, Row, Select, Slider, Space, Switch } from 'antd';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

import styles from './guide.module.less';
import { themeList, type ThemeSetting, type ThemeValue } from './tokens';

const defaultRadius = 8;

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

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
  const [quickConnect, setQuickConnect] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<ThemeValue>('default');
  const [radius, setRadius] = React.useState<number>(defaultRadius);
  const currentTheme = themeList.find((t) => t.value === theme);

  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
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
      config={config}
    >
      <ConfigProvider
        theme={{
          ...currentTheme?.token,
          token: {
            ...currentTheme?.token.token,
            borderRadius: radius,
          },
        }}
      >
        <div className={styles.connectorContainer}>
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
              size="large"
              quickConnect={quickConnect}
            />
          </Connector>
        </div>
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
            </Space>
          </Col>
        </Row>
      </div>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},61904:function(s,r){r.Z=`import { ConnectButton, Web3ConfigProvider, zh_CN } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider locale={zh_CN}>
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},86126:function(s,r){r.Z=`import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

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
`},97463:function(s,r){r.Z=`import { ConnectButton } from '@ant-design/web3';

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
`},44999:function(s,r){r.Z=`import { NFTImage } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},67358:function(s,r){r.Z=`import React from 'react';
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
`},34700:function(s,r){r.Z=`import { TinyColor } from '@ctrl/tinycolor';
import type { ThemeConfig } from 'antd';
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
  },
  components: {
    Button: {
      controlHeight: 44,
      marginXS: 8,
      paddingContentHorizontal: 24,
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
`}}]);
