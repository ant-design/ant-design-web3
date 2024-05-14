import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import {
  EthWeb3jsConfigProvider,
  MetaMask,
  OkxWallet,
  TokenPocket,
  useWeb3js,
} from '@ant-design/web3-eth-web3js';
import { Button, message } from 'antd';

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const web3 = useWeb3js();

  return (
    <div>
      {contextHolder}
      <Connector modalProps={{ mode: 'simple' }}>
        <ConnectButton quickConnect style={{ minWidth: 120 }} />
      </Connector>
      <Button
        onClick={async () => {
          const [address] = await web3!.eth.getAccounts();
          if (!address || !web3) {
            messageApi.error('Please connect wallet first!');
            return;
          }

          const signature = await web3.eth.personal.sign(web3.utils.utf8ToHex('hi'), address, '');
          const blockNum = await web3.eth.getBlockNumber();
          messageApi.success(`Sig: ${signature}, current block number: ${blockNum}`);
        }}
      >
        Sign Message
      </Button>
    </div>
  );
};

export default function HomePage() {
  return (
    <EthWeb3jsConfigProvider
      ens
      eip6963={{ autoAddInjectedWallets: true }}
      wallets={[MetaMask(), TokenPocket(), OkxWallet()]}
      chains={[Mainnet]}
    >
      <App />
    </EthWeb3jsConfigProvider>
  );
}
