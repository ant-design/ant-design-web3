import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { EthWeb3jsConfigProvider, useWeb3js } from '@ant-design/web3-eth-web3js';
import { Button, Input, message, Space } from 'antd';

const SignerButton = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const web3 = useWeb3js();
  const [msg, setMsg] = React.useState('Hi, Ant Design Web3!!');
  const [signature, setSignature] = React.useState('');

  if (!web3) return <>👆 Please connect wallet.</>;
  return (
    <Space>
      {contextHolder}
      <Input
        placeholder="Enter message to sign"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <Button
        onClick={async () => {
          const [address] = await web3!.eth.getAccounts();

          if (!address) {
            messageApi.error('Please connect wallet first!');
            return;
          }

          const sig = await web3.eth.personal.sign(web3.utils.utf8ToHex(msg), address, '');
          setSignature(sig);
        }}
      >
        Sign Message
      </Button>
      <div>Signature: {signature}</div>
    </Space>
  );
};

const App: React.FC = () => {
  return (
    <EthWeb3jsConfigProvider ens eip6963={{ autoAddInjectedWallets: true }} chains={[Mainnet]}>
      <Space direction="vertical">
        <Connector modalProps={{ mode: 'simple' }}>
          <ConnectButton quickConnect style={{ minWidth: 120 }} />
        </Connector>
        <SignerButton />
      </Space>
    </EthWeb3jsConfigProvider>
  );
};

export default App;
