import { ConnectButton, Connector, useProvider } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { message } from 'antd';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock backend services
const services = {
  GetMessage: async () => {
    await sleep(500);
    return `Sign this message to login to our app. Nonce: ${Date.now()}`; // Mock nonce
  },
  PostSignin: async (_signature?: string) => {
    await sleep(500);
    return !!_signature;
  },
};

const Signin: React.FC = () => {
  const { signMessage } = useProvider();

  return (
    <Connector
      modalProps={{ mode: 'simple' }}
      onConnected={async () => {
        const signResult = await signMessage?.(await services.GetMessage());

        const loginResult = await services.PostSignin(signResult?.signature);
        if (loginResult) {
          message.success('Login success');
        } else {
          message.error('Login failed');
        }
      }}
    >
      <ConnectButton />
    </Connector>
  );
};

export const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      config={createConfig({
        chains: [mainnet],
        transports: { [mainnet.id]: http() },
        connectors: [injected({ target: 'metaMask' })],
      })}
      wallets={[MetaMask()]}
      eip6963={{ autoAddInjectedWallets: true }}
    >
      <Signin />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
