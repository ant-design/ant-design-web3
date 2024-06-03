import { PayPanel } from '@ant-design/web3';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { Card } from 'antd';

const App: React.FC = () => {
  return (
    <Card style={{ width: 450 }}>
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
          console.log('complete');
        }}
      />
    </Card>
  );
};

export default App;
