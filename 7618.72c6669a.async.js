"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[7618],{38598:function(t,n,o){o.r(n),o.d(n,{BaseError:function(){return e.BaseError},ChainNotConfiguredError:function(){return e.ChainNotConfiguredError},ConnectorAccountNotFoundError:function(){return e.ConnectorAccountNotFoundError},ConnectorAlreadyConnectedError:function(){return e.ConnectorAlreadyConnectedError},ConnectorNotFoundError:function(){return e.ConnectorNotFoundError},Context:function(){return e.Context},Hydrate:function(){return e.Hydrate},ProviderNotFoundError:function(){return e.ProviderNotFoundError},SwitchChainNotSupportedError:function(){return e.SwitchChainNotSupportedError},WagmiConfig:function(){return e.WagmiConfig},WagmiContext:function(){return e.WagmiContext},WagmiProvider:function(){return e.WagmiProvider},WagmiProviderNotFoundError:function(){return e.WagmiProviderNotFoundError},actions:function(){return u},chains:function(){return d},connectors:function(){return c},cookieStorage:function(){return e.cookieStorage},cookieToInitialState:function(){return e.cookieToInitialState},createConfig:function(){return e.createConfig},createConnector:function(){return e.createConnector},createStorage:function(){return e.createStorage},custom:function(){return e.custom},deepEqual:function(){return e.deepEqual},deserialize:function(){return e.deserialize},fallback:function(){return e.fallback},http:function(){return e.http},noopStorage:function(){return e.noopStorage},normalizeChainId:function(){return e.normalizeChainId},parseCookie:function(){return e.parseCookie},serialize:function(){return e.serialize},unstable_connector:function(){return e.unstable_connector},useAccount:function(){return e.useAccount},useAccountEffect:function(){return e.useAccountEffect},useBalance:function(){return e.useBalance},useBlock:function(){return e.useBlock},useBlockNumber:function(){return e.useBlockNumber},useBlockTransactionCount:function(){return e.useBlockTransactionCount},useBytecode:function(){return e.useBytecode},useCall:function(){return e.useCall},useChainId:function(){return e.useChainId},useChains:function(){return e.useChains},useClient:function(){return e.useClient},useConfig:function(){return e.useConfig},useConnect:function(){return e.useConnect},useConnections:function(){return e.useConnections},useConnectorClient:function(){return e.useConnectorClient},useConnectors:function(){return e.useConnectors},useContractInfiniteReads:function(){return e.useContractInfiniteReads},useContractRead:function(){return e.useContractRead},useContractReads:function(){return e.useContractReads},useContractWrite:function(){return e.useContractWrite},useDisconnect:function(){return e.useDisconnect},useEnsAddress:function(){return e.useEnsAddress},useEnsAvatar:function(){return e.useEnsAvatar},useEnsName:function(){return e.useEnsName},useEnsResolver:function(){return e.useEnsResolver},useEnsText:function(){return e.useEnsText},useEstimateFeesPerGas:function(){return e.useEstimateFeesPerGas},useEstimateGas:function(){return e.useEstimateGas},useEstimateMaxPriorityFeePerGas:function(){return e.useEstimateMaxPriorityFeePerGas},useFeeData:function(){return e.useFeeData},useFeeHistory:function(){return e.useFeeHistory},useGasPrice:function(){return e.useGasPrice},useInfiniteReadContracts:function(){return e.useInfiniteReadContracts},usePrepareTransactionRequest:function(){return e.usePrepareTransactionRequest},useProof:function(){return e.useProof},usePublicClient:function(){return e.usePublicClient},useReadContract:function(){return e.useReadContract},useReadContracts:function(){return e.useReadContracts},useReconnect:function(){return e.useReconnect},useSendTransaction:function(){return e.useSendTransaction},useSignMessage:function(){return e.useSignMessage},useSignTypedData:function(){return e.useSignTypedData},useSimulateContract:function(){return e.useSimulateContract},useStorageAt:function(){return e.useStorageAt},useSwitchAccount:function(){return e.useSwitchAccount},useSwitchChain:function(){return e.useSwitchChain},useToken:function(){return e.useToken},useTransaction:function(){return e.useTransaction},useTransactionConfirmations:function(){return e.useTransactionConfirmations},useTransactionCount:function(){return e.useTransactionCount},useTransactionReceipt:function(){return e.useTransactionReceipt},useVerifyMessage:function(){return e.useVerifyMessage},useVerifyTypedData:function(){return e.useVerifyTypedData},useWaitForTransactionReceipt:function(){return e.useWaitForTransactionReceipt},useWalletClient:function(){return e.useWalletClient},useWatchBlockNumber:function(){return e.useWatchBlockNumber},useWatchBlocks:function(){return e.useWatchBlocks},useWatchContractEvent:function(){return e.useWatchContractEvent},useWatchPendingTransactions:function(){return e.useWatchPendingTransactions},useWriteContract:function(){return e.useWriteContract},version:function(){return e.version},webSocket:function(){return e.webSocket}});var e=o(44756),u=o(12713),d=o(1148),c=o(88734)},12787:function(t,n,o){o.r(n);var e=o(48305),u=o.n(e),d=o(26068),c=o.n(d),m=o(50959),f=o(43608),l=o(28134),g=o(77004),i=o(11527),C=[l.metadata_MetaMask,c()(c()({},l.metadata_WalletConnect),{},{getQrCode:function(){return new Promise(function(a){return setTimeout(function(){return a({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),{icon:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",name:"Test Wallet3",remark:"remark 3",app:{link:"https://test.com/xxx"},getQrCode:function(){return new Promise(function(a){return setTimeout(function(){return a({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}},{icon:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",name:"Test Wallet3 Have a Long Name",remark:"remark 3",app:{link:"https://test.com/xxx"}}],_=function(a,r){return a==="Popular"?-1:r==="Popular"?1:a.localeCompare(r)},b=function(){var a=m.useState(!1),r=u()(a,2),w=r[0],p=r[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Open with basic"}),(0,i.jsx)(f.ConnectModal,{open:w,footer:"Powered by AntChain",group:{groupOrder:_},walletList:C,onCancel:function(){return p(!1)}})]})};n.default=b},59808:function(t,n,o){o.r(n);var e=o(48305),u=o.n(e),d=o(26068),c=o.n(d),m=o(50959),f=o(43608),l=o(28134),g=o(77004),i=o(11527),C=[l.metadata_MetaMask,c()(c()({},l.metadata_WalletConnect),{},{getQrCode:function(){return new Promise(function(a){return setTimeout(function(){return a({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),{icon:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",name:"Test Wallet3",remark:"remark 3",app:{link:"https://test.com/xxx"},getQrCode:function(){return new Promise(function(a){return setTimeout(function(){return a({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}],_=function(a,r){return a==="Popular"?-1:r==="Popular"?1:a.localeCompare(r)},b=function(){var a=m.useState(!1),r=u()(a,2),w=r[0],p=r[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Open with simple"}),(0,i.jsx)(f.ConnectModal,{open:w,group:{groupOrder:_},walletList:C,onCancel:function(){return p(!1)},mode:"simple"})]})};n.default=b},92332:function(t,n){n.Z=`import { Address } from '@ant-design/web3';

const App: React.FC = () => {
  return <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />;
};

export default App;
`},84740:function(t,n){n.Z=`import { Address } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Address
      ellipsis={{
        headClip: 8,
        tailClip: 6,
      }}
      copyable
      address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
    />
  );
};

export default App;
`},76086:function(t,n){n.Z=`import { Address } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip />
      <Address
        ellipsis
        address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        tooltip={<span>hello</span>}
      />
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip={'hi'} />
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip={false} />
    </Space>
  );
};

export default App;
`},46781:function(t,n){n.Z=`import { Address } from '@ant-design/web3';
import { Space } from 'antd';

import { formatAddress } from '../../utils';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <div>
        Default format: <Address address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} format />
      </div>
      <div>
        Custom format:{' '}
        <Address
          address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
          format={(input) => {
            return formatAddress(input, 5);
          }}
        />
      </div>
    </Space>
  );
};

export default App;
`},89623:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { BitcoinWeb3ConfigProvider, UnisatWallet, XverseWallet } from '@ant-design/web3-bitcoin';

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet()]}>
      <Connector
        modalProps={{
          group: false,
          mode: 'simple',
        }}
      >
        <ConnectButton />
      </Connector>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},36144:function(t,n){n.Z=`import { useState } from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  UnisatWallet,
  useBitcoinWallet,
} from '@ant-design/web3-bitcoin';
import { Button, message, Space } from 'antd';

const GetInscriptions: React.FC = () => {
  const { account, name, provider } = useBitcoinWallet();
  const [img, setImg] = useState<string>();

  return account ? (
    <Space direction="vertical">
      <Button
        onClick={async () => {
          try {
            if (name !== 'Unisat') return;
            const res = await provider.getInscriptions(0, 10);
            const { total, list } = res;
            if (total === 0) {
              message.info('no inscription');
              return;
            }
            setImg(list[0].content);
          } catch (error) {
            console.log('sign message error:', error);
          }
        }}
      >
        show the first inscription
      </Button>
      {img ? <iframe src={img} width={200} height={200} /> : null}
    </Space>
  ) : null;
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[UnisatWallet()]}>
      <Space direction="vertical">
        <Connector>
          <ConnectButton />
        </Connector>
        <GetInscriptions />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},97469:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button, Space } from 'antd';

const SendBitcoin: React.FC = () => {
  const { sendTransfer, account } = useBitcoinWallet();

  return account ? (
    <Button
      onClick={async () => {
        try {
          // Don't send in main network!!
          await sendTransfer(
            'bc1pcdv3h6nuq705e3yk4pvdlqrcfchzvd9se9zwlhke3menvxlc58zshl0ryv',
            10000,
          );
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Send Bitcoin
    </Button>
  ) : null;
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet()]} balance>
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SendBitcoin />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},57722:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button, Space } from 'antd';

const SignMessage: React.FC = () => {
  const { signMessage, account } = useBitcoinWallet();

  return account ? (
    <Button
      onClick={async () => {
        try {
          const result = await signMessage?.('Hello World!');
          console.log('sign message success!', result);
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Sign Message
    </Button>
  ) : null;
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet()]}>
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SignMessage />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},92239:function(t,n){n.Z=`import { BrowserLink } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';

const App: React.FC = () => {
  return (
    <BrowserLink
      chain={Mainnet}
      address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default App;
`},54466:function(t,n){n.Z=`import { BrowserLink } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        chain={Mainnet}
        iconStyle={{
          fontSize: 40,
          background: '#eee',
          boxShadow: '0 0 5px #999',
          padding: 8,
          borderRadius: '50%',
        }}
        target="_blank"
        rel="noopener noreferrer"
      />
    </Space>
  );
};

export default App;
`},71354:function(t,n){n.Z=`import { LinkOutlined } from '@ant-design/icons';
import { BrowserLink } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <BrowserLink
      icon={<LinkOutlined />}
      address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
      name="Custom name"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default App;
`},40545:function(t,n){n.Z=`import { BrowserLink } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <div
      style={{
        fontSize: 64,
      }}
    >
      <BrowserLink
        iconOnly
        address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default App;
`},90859:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        size="small"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        size="large"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
    </Space>
  );
};

export default App;
`},70871:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'test.eth',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1000000000000000000n,
        }}
      />
    </Space>
  );
};

export default App;
`},16857:function(t,n){n.Z=`import React from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  const mockAccount = { address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' };
  const [account, setAccount] = React.useState<Account | undefined>(mockAccount);
  return (
    <ConnectButton
      account={account}
      onConnectClick={() => {
        setAccount(mockAccount);
      }}
      onDisconnectClick={() => {
        setAccount(undefined);
      }}
    />
  );
};

export default App;
`},67909:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, type Chain } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [chain, setChain] = React.useState<Chain>(Polygon);
  return (
    <ConnectButton
      chain={chain}
      availableChains={[Mainnet, Polygon]}
      account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      onSwitchChain={async (c) => {
        setChain(c);
      }}
    />
  );
};

export default App;
`},47731:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { WalletColorful, WalletWhiteColorful } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        icon={<WalletWhiteColorful />}
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
      />
      <ConnectButton
        icon={<WalletColorful />}
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
    </Space>
  );
};

export default App;
`},84188:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';

const App: React.FC = () => {
  const menuItems: MenuItemType[] = [
    {
      label: 'Menu Item 1',
      key: '1',
      onClick: () => {
        console.log('Menu Item 1 clicked');
      },
    },
    {
      label: 'Menu Item 2',
      key: '2',
      onClick: () => {
        console.log('Menu Item 2 clicked');
      },
    },
  ];
  return (
    <Space>
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'Display default menu',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu
      />
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'Insert menu items before default items',
        }}
        profileModal={false}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        onMenuItemClick={(item) => console.log('onMenuItemClick', item)}
        actionsMenu={{
          extraItems: menuItems,
        }}
      />
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'Override menu items',
        }}
        profileModal={false}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        onMenuItemClick={(item) => console.log('onMenuItemClick', item)}
        actionsMenu={{
          items: menuItems,
        }}
      />
    </Space>
  );
};

export default App;
`},8271:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <ConnectButton
      account={{
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        name: 'wanderingearth.eth',
      }}
      tooltip
    />
  );
};

export default App;
`},9818:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Alert, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display profileModal by default',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Do not show profileModal',
        }}
        actionsMenu={false}
        profileModal={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Customize profileModal',
        }}
        actionsMenu={false}
        profileModal={{
          width: 400,
          footer: <Alert message="Custom footer" type="success" style={{ textAlign: 'center' }} />,
        }}
      />
    </Space>
  );
};

export default App;
`},6770:function(t,n){n.Z=`import React from 'react';
import type { Wallet } from '@ant-design/web3';
import { ConnectButton } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { message } from 'antd';

const App: React.FC = () => {
  return (
    <ConnectButton
      availableWallets={[
        {
          ...metadata_MetaMask,
          hasExtensionInstalled: async () => true,
        },
        {
          ...metadata_WalletConnect,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_TokenPocket,
          hasExtensionInstalled: async () => true,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
      ]}
      onConnectClick={(wallet?: Wallet) => {
        message.info(\`Connect with \${wallet?.name || 'More'}\`);
      }}
      quickConnect
    />
  );
};

export default App;
`},3009:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }} tooltip />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'Custom Title' }}
        tooltip={{
          title: 'aaaaaabbbbbbcccccc',
        }}
      />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'UnCopyable' }}
        tooltip={{
          title: 'aaaaaabbbbbbcccccc',
          copyable: false,
        }}
      />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'Default Formatter' }}
        tooltip={{ format: true }}
      />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'Custom Formatter' }}
        tooltip={{ format: (address) => address.slice(0, 10) }}
      />
    </Space>
  );
};

export default App;
`},51396:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { ConfigProvider, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
        tooltip
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
        }}
      >
        <ConnectButton
          type="primary"
          account={{
            address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          }}
          tooltip
        />
      </ConfigProvider>
      <ConnectButton
        type="dashed"
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
      <ConnectButton
        type="link"
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
    </Space>
  );
};

export default App;
`},56633:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: 'Test Wallet3 Have a Long Name',
    remark: 'remark 3',
    app: {
      link: 'https://test.com/xxx',
    },
  },
];
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        footer={'Powered by AntChain'}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};

export default App;
`},62427:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { DefaultGuide, Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};
const guide: DefaultGuide = {
  title: 'What is a Wallet?',
  infos: [
    {
      title: 'A Home for your Digital Assets',
      description:
        'Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
    },
    {
      title: 'A New Way to Log In',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In2',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In3',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
  ],
  moreLink: 'https://test.com/xxx',
};

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        guide={guide}
      />
    </>
  );
};

export default App;
`},61053:function(t,n){n.Z=`import React from 'react';
import { ConfigProvider, Space, theme } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Space>
        <BasiceDemo />
        <SimpleDemo />
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},75675:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC = () => {
  return (
    <Card
      style={{
        maxWidth: 797,
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <ConnectModal.ModalPanel
        group={{
          groupOrder,
        }}
        walletList={walletList}
      />
    </Card>
  );
};

export default App;
`},5596:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with simple
      </Button>
      <ConnectModal
        open={open}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        mode="simple"
      />
    </>
  );
};

export default App;
`},40601:function(t,n){n.Z=`import React from 'react';
import { ConfigProvider, Space } from 'antd';

import BasiceDemo from './basic';

const App: React.FC = () => {
  return (
    <Space>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
          components: {
            Button: {
              borderRadius: 16,
              borderRadiusLG: 24,
            },
            Modal: {
              borderRadiusLG: 24,
            },
          },
        }}
      >
        <BasiceDemo />
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00B96B',
          },
          components: {
            Button: {
              borderRadius: 16,
              borderRadiusLG: 24,
            },
            Modal: {
              borderRadiusLG: 24,
            },
          },
        }}
      >
        <BasiceDemo />
      </ConfigProvider>
    </Space>
  );
};

export default App;
`},16097:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        footer={'Powered by AntChain'}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        group={false}
      />
    </>
  );
};

export default App;
`},59786:function(t,n){n.Z=`import React from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Connector
      availableWallets={[metadata_MetaMask, metadata_WalletConnect]}
      connect={async () =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
            resolve();
          }, 2000);
        })
      }
      account={account}
      onConnect={() => {
        console.log('onConnect');
      }}
      onDisconnect={() => {
        console.log('onDisconnect');
      }}
      onConnected={() => {
        console.log('onConnected');
      }}
      onDisconnected={() => {
        console.log('onDisconnected');
      }}
      modalProps={{
        title: 'Ant Design Web3',
      }}
    >
      <ConnectButton />
    </Connector>
  );
};

export default App;
`},47336:function(t,n){n.Z=`import React from 'react';
import type { Account, ConnectorTriggerProps } from '@ant-design/web3';
import { Connector } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Typography } from 'antd';

const CustomTrigger: React.FC<ConnectorTriggerProps> = (props) => {
  const { loading, onConnectClick, account } = props;
  return (
    <Typography.Title level={5} onClick={() => onConnectClick?.()}>
      {loading ? 'Connecting...' : account?.address || 'Connect Your Wallet'}
    </Typography.Title>
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Connector
      availableWallets={[metadata_MetaMask, metadata_WalletConnect]}
      connect={async () =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
            resolve();
          }, 2000);
        })
      }
      account={account}
      onConnect={() => {
        console.log('onConnect');
      }}
      onDisconnect={() => {
        console.log('onDisconnect');
      }}
      onConnected={() => {
        console.log('onConnected');
      }}
      onDisconnected={() => {
        console.log('onDisconnected');
      }}
    >
      <CustomTrigger />
    </Connector>
  );
};

export default App;
`},67990:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';

const App: React.FC = () => {
  return <CryptoPrice value={1230000000000000000n} />;
};

export default App;
`},9127:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';
import { EthereumCircleFilled } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <CryptoPrice
      icon
      chain={{
        id: 1,
        name: 'Ethereum',
        nativeCurrency: {
          name: 'Ether',
          symbol: 'WETH',
          decimals: 18,
          icon: <EthereumCircleFilled />,
        },
      }}
      value={1230000000000000000n}
    />
  );
};

export default App;
`},56982:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';

function formatMoney(value: number) {
  // \u4F7F\u7528\u5343\u5206\u7B26\u5206\u9694\u91D1\u989D
  return value.toLocaleString();
}

const App: React.FC = () => {
  const customFormat = (
    preFormatValue: string,
    info: { originValue: number | bigint; symbol: string; decimals?: number; fixed?: number },
  ) => {
    return \`\${formatMoney(Number(preFormatValue))} \${info.symbol}\`;
  };
  return <CryptoPrice format={customFormat} value={123456700000000000000000n} />;
};

export default App;
`},10745:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <CryptoPrice icon value={1230000000000000000n} />
      <CryptoPrice icon={<BitcoinCircleColorful />} value={1230000000000000000n} />
    </Space>
  );
};

export default App;
`},46192:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  Hardhat,
  Localhost,
  MetaMask,
  Polygon,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  X1Testnet,
} from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { hardhat, localhost, mainnet, polygon, type Chain } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

export const x1Testnet: Chain = {
  id: X1Testnet.id,
  name: X1Testnet.name,
  nativeCurrency: { name: 'OKB', symbol: 'OKB', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://testrpc.x1.tech'],
    },
  },
  blockExplorers: {
    default: {
      name: 'X1TestnetScan',
      url: 'https://www.okx.com/explorer/x1-test',
    },
  },
};

const config = createConfig({
  chains: [mainnet, polygon, x1Testnet, localhost, hardhat],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [x1Testnet.id]: http(),
    [hardhat.id]: http(),
    [localhost.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[MetaMask(), WalletConnect()]}
      chains={[Polygon, X1Testnet, Hardhat, Localhost]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},82338:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { EthereumCircleColorful } from '@ant-design/web3-icons';
import {
  MetaMask,
  TokenPocket,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
    injected({
      target: 'tokenPocket',
    }),
    injected({
      target() {
        return {
          id: 'testWallet',
          name: 'TestWallet',
          provider: window.ethereum,
        };
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[
        new UniversalWallet({
          name: 'TestWallet',
          remark: 'My TestWallet',
          icon: <EthereumCircleColorful />,
          extensions: [],
          group: 'Popular',
        }),
        TokenPocket({
          group: 'Popular',
        }),
        MetaMask({
          group: 'More',
        }),
      ]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},19688:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
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
    <WagmiWeb3ConfigProvider
      config={config}
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[MetaMask()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},31823:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  EthersWeb3ConfigProvider,
  MetaMask,
  OkxWallet,
  useEthersProvider,
  useEthersSigner,
} from '@ant-design/web3-ethers';
import { useBlockNumber } from '@ant-design/web3-ethers/wagmi';
import { Typography } from 'antd';

const AddressPreviewer = () => {
  const provider = useEthersProvider(); // ethers provider
  const signer = useEthersSigner();
  const blockNumber = useBlockNumber();

  return (
    <Typography.Paragraph>
      address: {signer?.address ?? '-'} (at {Number(blockNumber.data)})
    </Typography.Paragraph>
  );
};

const App: React.FC = () => {
  return (
    <EthersWeb3ConfigProvider
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
      wallets={[MetaMask(), OkxWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
      <AddressPreviewer />
    </EthersWeb3ConfigProvider>
  );
};

export default App;
`},44861:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  ImToken,
  MetaMask,
  OkxWallet,
  SafeheronWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { coinbaseWallet, walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
    coinbaseWallet({
      appName: 'ant.design.web3',
      jsonRpcUrl: \`https://api.zan.top/node/v1/eth/mainnet/\${YOUR_ZAN_API_KEY}\`,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        CoinbaseWallet(),
        SafeheronWallet(),
        OkxWallet(),
        ImToken(),
      ]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},85296:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
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

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      balance
      config={config}
      wallets={[MetaMask()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},88910:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const queryClient = new QueryClient();

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

const App: React.FC = () => {
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
      queryClient={queryClient}
    >
      <Connector
        modalProps={{
          mode: 'simple',
        }}
      >
        <ConnectButton quickConnect />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},32089:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      showQrModal: true,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[
        WalletConnect({
          useWalletConnectOfficialModal: true,
        }),
      ]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},95368:function(t,n){n.Z=`import React from 'react';
import { useAccount } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  const { account } = useAccount();
  if (!account) {
    return <div>Not Connected</div>;
  }
  return <Space direction="vertical">{account.address}</Space>;
};

export default App;
`},74501:function(t,n){n.Z=`import React from 'react';
import { useAccount, useConnection, Web3ConfigProvider, type Account } from '@ant-design/web3';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const { account } = useAccount();
  const { connect, disconnect } = useConnection();
  return (
    <>
      <Button
        onClick={() => {
          if (account) {
            disconnect?.();
            return;
          }
          console.log('connect');
          connect?.();
        }}
      >
        {account ? 'Disconnect' : 'Connect'}
      </Button>
      {account ? <p>Account: {account?.address}</p> : <p>Not Connected</p>}
    </>
  );
};

const App: React.FC = () => {
  const [testAccount, setTestAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
      account={testAccount}
      connect={async () => {
        console.log('connect call');
        setTestAccount({
          address: '0x1234567890123456789012345678901234567890',
        });
      }}
      disconnect={async () => {
        setTestAccount(undefined);
      }}
    >
      <Demo />
    </Web3ConfigProvider>
  );
};

export default App;
`},33201:function(t,n){n.Z=`import React from 'react';
import { useNFT } from '@ant-design/web3';
import { Spin } from 'antd';

const App: React.FC = () => {
  const { metadata, error, loading } = useNFT('0x79fcdef22feed20eddacbb2587640e45491b757f', 42n);
  if (error) {
    return <div>{error.message}</div>;
  }
  return <Spin spinning={loading}>{metadata.name}</Spin>;
};

export default App;
`},53623:function(t,n){n.Z=`import { BitcoinCircleColorful, EthereumFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful />
      <EthereumFilled />
    </Space>
  );
};

export default App;
`},1460:function(t,n){n.Z=`import { BitcoinCircleColorful, EthereumFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful
        style={{
          fontSize: 48,
        }}
      />
      <div
        style={{
          fontSize: 48,
        }}
      >
        <EthereumFilled />
      </div>
    </Space>
  );
};

export default App;
`},94553:function(t,n){n.Z=`import React from 'react';
import { NFTCard } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space size={16}>
      <NFTCard
        name="My NFT"
        tokenId={16}
        price={{
          value: 1230000000000000000n,
        }}
        like={{
          totalLikes: 1600,
        }}
        description="This is description"
        showAction
        footer="This is footer"
        image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
      />
      <NFTCard
        type="pithy"
        name="My NFT"
        tokenId={16}
        price={{
          value: 1230000000000000000n,
        }}
        like={{
          totalLikes: 1600,
        }}
        description="This is description"
        showAction
        footer="This is footer"
        image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
      />
    </Space>
  );
};

export default App;
`},14002:function(t,n){n.Z=`import { NFTCard } from '@ant-design/web3';
import { ConfigProvider, Space, theme } from 'antd';

const { darkAlgorithm } = theme;

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <Space size={16}>
        <NFTCard
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
        <NFTCard
          type="pithy"
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},3614:function(t,n){n.Z=`import { NFTCard } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <NFTCard address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42n} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},88622:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <NFTImage
      src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"
      width={200}
    />
  );
};

export default App;
`},16943:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <NFTImage
      address="0x79fcdef22feed20eddacbb2587640e45491b757f"
      tokenId={42n}
      width={200}
      getNFTMetadata={({ address: _address, tokenId: _tokenId }) => {
        return Promise.resolve({
          name: \`Test_\${_address}_\${_tokenId}\`,
          image:
            'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        });
      }}
    />
  );
};

export default App;
`},61467:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';
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
      <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42n} width={200} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},88834:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider balance autoConnect wallets={[CoinbaseWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},2075:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider autoConnect wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},22798:function(t,n){n.Z=`import { Address, BrowserLink, NFTCard } from '@ant-design/web3';
import { CoinbaseWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      rpcProvider={() => \`https://mainnet.helius-rpc.com/?api-key=\${YOUR_HELIUS_API_KEY}\`}
      wallets={[CoinbaseWallet()]}
    >
      <Space direction="vertical">
        <BrowserLink address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" ellipsis />
        <Address address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" ellipsis />
        <NFTCard address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" tokenId={3332} />
      </Space>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},74626:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider autoConnect wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},69718:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  solana,
  solanaDevnet,
  solanaTestnet,
  SolanaWeb3ConfigProvider,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      balance={false}
      autoConnect
      chains={[solana, solanaTestnet, solanaDevnet]}
      wallets={[CoinbaseWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},53930:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  WalletConnectWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoAddRegisteredWallets
      balance
      wallets={[PhantomWallet(), OKXWallet(), WalletConnectWallet()]}
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
    >
      <Connector modalProps={{ mode: 'simple', group: false }}>
        <ConnectButton quickConnect />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},29838:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  PhantomWallet,
  solana,
  solanaDevnet,
  SolanaWeb3ConfigProvider,
  useWallet,
} from '@ant-design/web3-solana';
import { Button, Space } from 'antd';
import base58 from 'bs58';

const SignMessage: React.FC = () => {
  const { connected, signMessage } = useWallet();

  if (!connected) {
    return;
  }

  return (
    <Button
      onClick={async () => {
        const message = new TextEncoder().encode('Hello World!');

        try {
          const result = await signMessage?.(message);
          console.log('sign message success!', result ? base58.encode(result) : 'unknown');
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Sign Message
    </Button>
  );
};

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      balance={false}
      autoConnect
      chains={[solana, solanaDevnet]}
      rpcProvider={() => \`https://mainnet.helius-rpc.com/?api-key=\${YOUR_HELIUS_API_KEY}\`}
      wallets={[PhantomWallet()]}
    >
      <Space direction="vertical">
        <Connector>
          <ConnectButton />
        </Connector>

        <SignMessage />
      </Space>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},11513:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  WalletConnectWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoConnect
      wallets={[PhantomWallet(), WalletConnectWallet()]}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},15312:function(t,n){n.Z=`import copy from 'copy-to-clipboard';

export const getPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('edge')) {
    return 'Edge';
  } else if (userAgent.includes('safari')) {
    return 'Safari';
  } else {
    return 'Other';
  }
};

export const writeCopyText = async (text: string): Promise<boolean> => {
  return copy(text);
};
`},1875:function(t,n){n.Z=`/**
 * @param address address
 * @param prefixProp addressPrefix from props
 * @param prefixContext addressPrefix from context
 */
export const fillWithPrefix = (
  address: string = '',
  prefixProp?: string | false,
  prefixContext?: string | false,
): string => {
  let prefix = undefined;

  // \`0x\` is the default prefix
  if (prefixProp === undefined && prefixContext === undefined) {
    prefix = '0x';
  }

  // has prefix be set
  else {
    // use props first
    if (prefixProp !== undefined) {
      prefix = prefixProp === false ? '' : prefixProp;
    }

    // use context
    else if (prefixContext !== undefined) {
      prefix = prefixContext === false ? '' : prefixContext;
    }
  }

  if (!prefix) return address;

  return address.startsWith(prefix) ? address : \`\${prefix}\${address}\`;
};

export const formatAddress = (address: string = '', groupSize = 4): string => {
  const formattedGroups = [];

  const has0x = address.startsWith('0x');
  const formatText = has0x ? address.slice(2) : address;

  for (let i = 0; i < formatText.length; i += groupSize) {
    const group = formatText.slice(i, i + groupSize);
    formattedGroups.push(group);
  }

  const formattedText = formattedGroups.join(' ');

  return has0x ? \`0x \${formattedText}\` : formattedText;
};

export const formatBalance = (value: bigint | number, decimals: number, fixed?: number): string => {
  const bigValue = typeof value === 'bigint' ? value : BigInt(value);
  const divisor = BigInt(10 ** decimals);
  const displayValue = bigValue / divisor;
  const fraction = bigValue % divisor;

  if (fraction === 0n && fixed === undefined) {
    return \`\${displayValue}\`;
  }

  let fractionStr = fraction.toString().padStart(decimals, '0');
  if (fixed === undefined) {
    return \`\${displayValue}.\${fractionStr.replace(/0+$/, '')}\`;
  }
  fractionStr = fractionStr.substring(0, fixed).padEnd(fixed, '0');
  return \`\${displayValue}.\${fractionStr}\`;
};
`},47757:function(t,n){n.Z=`export * from './browser';
export * from './format';
`},99121:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Web3ConfigProvider, type Account } from '@ant-design/web3';

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
      availableWallets={[
        {
          name: 'MetaMask',
          remark: 'Easy-to-use browser extension.',
          extensions: [
            {
              key: 'Chrome',
              browserIcon:
                'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
              browserName: 'Chrome',
              link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
              description: 'Access your wallet right from your favorite web browser.',
            },
          ],
        },
      ]}
      connect={async () => {
        const newAccount = {
          address: '0x1234567890123456789012345678901234567890',
        };
        setAccount(newAccount);
      }}
      account={account}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`}}]);
