import { Mainnet } from '@ant-design/web3-assets';
import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { MetaMask } from '../wallets';
import { EthWeb3jsConfigProvider } from '../web3js-provider';
import { useWeb3js } from './use-web3js';

describe('useWeb3js', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      useWeb3js();
      return <div className="text">web3js</div>;
    };

    const App = () => (
      <EthWeb3jsConfigProvider wallets={[MetaMask()]} chains={[Mainnet]}>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.text')?.textContent).toBe('web3js');
    });
  });
});
