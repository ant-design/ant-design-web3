import { AddressInput } from '@ant-design/web3';
import { ChainType } from '@ant-design/web3-common';

const App: React.FC = () => {
  return <AddressInput checksum={ChainType.EVM} />;
};

export default App;
