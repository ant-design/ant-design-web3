import { metadata_MetaMask } from '@ant-design/web3-assets';
import { UniversalWallet } from '@ant-design/web3-wagmi';

// TODO@jeasonstudio 考虑 wallet 抽象设计
export const MetaMask = (metadata?: any): any => {
  const wallet = new UniversalWallet({
    ...metadata_MetaMask,
    ...metadata,
    name: 'ethers',
  });
  wallet.connectors = ['ethers'];
  return wallet;
};
