import React, { useState } from 'react';
import type { AddNetworkParams } from '@ant-design/web3-common';
import { addNetworkToWallet } from '@ant-design/web3-wagmi';
import { Button, message, Space } from 'antd';

// 不依赖 WagmiWeb3ConfigProvider：直接使用 addNetworkToWallet，通过 EIP-6963 添加网络
const JovayTestnetParams: AddNetworkParams = {
  chainId: '0x1ed1bf', // 2019775
  chainName: 'jovay-testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: ['https://api.zan.top/public/jovay-testnet'],
  blockExplorerUrls: ['https://sepolia-explorer.jovay.io/l2'],
};

const METAMASK_RDNS = 'io.metamask';

const AddNetworkStandaloneDemo: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleAdd = async (options?: { preferredWalletRdns?: string }) => {
    setLoading(true);
    try {
      await addNetworkToWallet(JovayTestnetParams, options);
      message.success('Network added successfully');
    } catch (err: any) {
      const code = err?.code ?? err?.cause?.code;
      const msg = err?.message ?? '';
      if (code === 'NO_CONNECTOR') {
        message.error(
          'No wallet detected, please install a wallet that supports EIP-6963 (e.g. MetaMask)',
        );
      } else if (code === 'NETWORK_PARAMS_INCOMPLETE') {
        message.error('Network params incomplete');
      } else if (code === 4001 || msg.includes('User rejected')) {
        message.warning('User canceled');
      } else {
        message.error(msg || 'Add network failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space wrap>
      <Button loading={loading} onClick={() => handleAdd()}>
        Add Jovay-testnet to wallet (no Provider)
      </Button>
      <Button loading={loading} onClick={() => handleAdd({ preferredWalletRdns: METAMASK_RDNS })}>
        Add Jovay-testnet to MetaMask (no Provider)
      </Button>
    </Space>
  );
};

export default AddNetworkStandaloneDemo;
