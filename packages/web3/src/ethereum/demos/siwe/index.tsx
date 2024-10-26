import {
  Mainnet,
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { createSiweMessage } from 'viem/siwe';
import { http } from 'wagmi';

import { getNonce, verifyMessage } from './mock-api';
import SignBtn from './sign-btn';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      swie={{
        getNonce,
        createMessage: (props) => createSiweMessage({ ...props, statement: 'Ant Design Web3' }),
        verifyMessage: verifyMessage,
      }}
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[Mainnet]}
      transports={{
        [Mainnet.id]: http(),
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
      queryClient={queryClient}
    >
      <SignBtn />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
