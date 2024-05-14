import { render } from '@testing-library/react';
import { JsonRpcProvider } from 'ethers';
import { describe, expect, test } from 'vitest';

import { EthersWeb3ConfigProvider } from '../ethers-provider';
import { useEthersProvider } from './use-ethers-provider';

describe('useEthersProvider', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const provider = useEthersProvider();
      expect(provider).instanceOf(JsonRpcProvider);
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
