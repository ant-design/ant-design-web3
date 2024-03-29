import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { EthersWeb3ConfigProvider } from '../ethers-provider';
import { useEthersSigner } from './use-ethers-signer';

describe('useEthersSigner', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const signer = useEthersSigner();
      return <div>{signer?.address}</div>;
    };

    const App = () => (
      <EthersWeb3ConfigProvider>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.textContent).toBe('');
  });
});
