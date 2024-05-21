import { PayPanel } from '@ant-design/web3';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';

const App: React.FC = () => {
  return (
    <PayPanel
      target={{
        [Mainnet.id]: {
          address: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
          chain: Mainnet,
        },
        [BSC.id]: {
          address: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
          chain: BSC,
        },
      }}
      token={USDT}
      amount={1000000}
      wallets={[metadata_MetaMask, metadata_imToken, metadata_TokenPocket]}
      onFinish={() => {
        console.log('支付完成');
      }}
    />
  );
};

export default App;
