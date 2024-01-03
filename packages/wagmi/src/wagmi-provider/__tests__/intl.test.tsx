import { ConnectButton } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const { publicClient } = configureChains([mainnet], [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const App = () => (
      <WagmiWeb3ConfigProvider
        locale={{
          ConnectButton: {
            connect: 'test intl',
          },
        }}
        config={config}
      >
        <ConnectButton />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('test intl');
  });
});
