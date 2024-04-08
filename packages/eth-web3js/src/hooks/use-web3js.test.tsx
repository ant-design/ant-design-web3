import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Web3 from 'web3';

import { EthWeb3jsConfigProvider } from '../web3js-provider';
import { useWeb3js } from './use-web3js';

describe('useWeb3js', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const web3 = useWeb3js();
      expect(web3).instanceOf(Web3);
      return null;
    };

    const App = () => (
      <EthWeb3jsConfigProvider>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    render(<App />);
  });
});
