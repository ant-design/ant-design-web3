import { Address } from '@ant-design/web3';

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
