import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WagmiWeb3ConfigProvider } from './wagmi-provider';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const { publicClient } = configureChains([mainnet], [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const App = () => (
      <WagmiConfig config={config}>
        <WagmiWeb3ConfigProvider>
          <div className="content">test</div>
        </WagmiWeb3ConfigProvider>
      </WagmiConfig>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('mount incorrectly', () => {
    expect(() => render(<WagmiWeb3ConfigProvider />)).toThrow();
  });
});
