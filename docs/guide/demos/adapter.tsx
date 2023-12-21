import React from 'react';
import { type Account, type Wallet, type Chain, Web3ConfigProvider } from '@ant-design/web3-common';
import { Connector, ConnectButton } from '@ant-design/web3';

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
        // 这里可以实现连接钱包的逻辑
        return;
      }}
      disconnect={async () => {
        // 这里可以实现断开连接的逻辑
        return;
      }}
      switchChain={async (c: Chain) => {
        // 这里可以实现切换链的逻辑
        return;
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) => {
        // 这里可以实现获取 NFT 元数据的逻辑
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

export default () => {
  return (
    <YourAdapterPropsProvider>
      <Connector>
        <ConnectButton />
      </Connector>
    </YourAdapterPropsProvider>
  );
};
