import { mainnet } from 'wagmi/chains';

const mockConnector = {
  name: 'MetaMask',
};

export const wagmiBaseMock = {
  useAccount: () => {
    return {
      chain: mainnet,
      address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      connector: mockConnector,
    };
  },
  useConfig: () => ({}),
  useBalance: () => ({ data: {} }),
  useSwitchChain: () => ({ switchChain: () => {} }),
  useConnect: () => ({
    connectors: [mockConnector],
    connectAsync: async () => ({}),
  }),
  useDisconnect: () => ({
    disconnectAsync: () => {},
  }),
  useEnsName: () => ({ data: null }),
  useEnsAvatar: () => ({ data: null }),
  useSignMessage: () => ({ signMessageAsync: async () => 'signMessage' }),
};
