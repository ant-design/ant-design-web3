import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WagmiWeb3ConfigProvider } from '.';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const { publicClient } = configureChains([mainnet], [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <div className="content">test</div>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });
});
