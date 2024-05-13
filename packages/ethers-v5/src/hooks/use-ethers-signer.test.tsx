import { EthersWeb3ConfigProvider } from '@ant-design/web3-ethers';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useEthersSigner } from './use-ethers-signer';

describe('useEthersSigner(v5)', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const signer = useEthersSigner();
      return <div>{signer?._address}</div>;
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
