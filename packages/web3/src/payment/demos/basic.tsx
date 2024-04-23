import { Payment } from '@ant-design/web3';
// tron 手续费低一些，而且地址会不一样，这里拿 tron 和 usdt 举例
import { BSC, Mainnet, MetaMask, TRON, TronLink } from '@ant-design/web3-wagmi';

// 需要抽出的 token 信息
interface Token {
  name: string;
  symbol: string;
  logoUrl: string;
  contractAddress: { [chainSymbol: string]: string };
}

const App: React.FC = () => {
  const supportChains = {
    eth: { info: Mainnet, toAddress: '0xYourEthAddressHere' },
    bsc: { info: BSC, toAddress: '0xYourBscAddressHere' },
    tron: { info: TRON, toAddress: 'YourTronAddressHere' },
  };
  // 需要抽出的 token 信息
  const tokens: { [key: string]: Token } = {
    usdt: {
      name: 'Tether USD',
      symbol: 'USDT',
      logoUrl: 'usdtLogo.png',
      contractAddress: {
        eth: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        bsc: '0x55d398326f99059ff775485246999027b3197955',
        tron: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
      },
    },
  };

  return (
    <Payment
      supportChains={supportChains}
      token={tokens.usdt}
      amount={0.1}
      supportWallets={[MetaMask, TronLink]}
    />
  );
};

export default App;
