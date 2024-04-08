import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Web3jsConfigProvider } from '../web3js-provider';
import { useWeb3jsSigner } from './use-web3js-signer';

describe('useEthersSigner', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const signer = useWeb3jsSigner()!;
      return <div>{signer.defaultAccount}</div>;
    };

    const App = () => (
      <Web3jsConfigProvider>
        <CustomConnector />
      </Web3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.textContent).toBe('');
  });
});
