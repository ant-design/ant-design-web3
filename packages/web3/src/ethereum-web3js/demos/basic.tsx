import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { EthWeb3jsConfigProvider, useWeb3js } from '@ant-design/web3-eth-web3js';

const App: React.FC = () => {
  const web3 = useWeb3js();
  const [blockNum, setBlockNum] = React.useState('0x');
  React.useEffect(() => {
    web3?.eth.getBlockNumber().then((num) => {
      console.log('current block number:', num);
      setBlockNum(`0x${num.toString(16)}`);
    });
  }, [web3]);

  return <div>Current block height: {blockNum}</div>;
};

export default () => {
  return (
    <EthWeb3jsConfigProvider ens eip6963={{ autoAddInjectedWallets: true }} chains={[Mainnet]}>
      <Connector modalProps={{ mode: 'simple' }}>
        <ConnectButton quickConnect style={{ minWidth: 120 }} />
      </Connector>
      <App />
    </EthWeb3jsConfigProvider>
  );
};
