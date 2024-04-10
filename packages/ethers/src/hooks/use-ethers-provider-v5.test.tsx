import { render } from '@testing-library/react';
import { providers } from 'ethers-v5';
import { describe, expect, test } from 'vitest';

import { EthersWeb3ConfigProvider } from '../ethers-provider';
import { useEthersProvider } from './use-ethers-provider-v5';

describe('useEthersProvider(v5)', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const provider = useEthersProvider();
      expect(provider).instanceOf(providers.JsonRpcProvider);
      return null;
    };

    const App = () => (
      <EthersWeb3ConfigProvider>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
    );

    render(<App />);
  });
});
