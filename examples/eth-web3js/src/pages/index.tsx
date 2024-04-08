import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import {
  EthWeb3jsConfigProvider,
  MetaMask,
  OkxWallet,
  TokenPocket,
  // useWeb3js,
} from '@ant-design/web3-eth-web3js';
import { useConfig as useConfig2 } from '@ant-design/web3-eth-web3js/wagmi';
import { Button, message } from 'antd';
import { useConfig } from 'wagmi';

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const config = useConfig2();
  console.log(11, config);

  // const web3 = useWeb3js();
  // const account = useAccount();

  return (
    <div>
      {contextHolder}
      <Connector modalProps={{ mode: 'simple' }}>
        <ConnectButton quickConnect style={{ minWidth: 120 }} />
      </Connector>
      <Button
        onClick={async () => {
          // console.log(web3);
          // const account = web3!.eth.
          // if (!account?.account) {
          //   messageApi.error('Please connect wallet first!');
          //   return;
          // }
          // // const user = web3!.eth.accounts.sign('hi antd web3!');
          // const signature = await signer!.signMessage('hi antd web3!');
          // const blockNum = await web3!.eth.getBlockNumber();
          // messageApi.success(`Sig: ${signature}, current block number: ${blockNum}`);
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
