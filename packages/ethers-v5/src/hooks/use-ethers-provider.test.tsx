import { EthersWeb3ConfigProvider } from '@ant-design/web3-ethers';
import { render } from '@testing-library/react';
import { providers } from 'ethers';
import { describe, expect, test } from 'vitest';

import { useEthersProvider } from './use-ethers-provider';

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
