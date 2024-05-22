# @ant-design/web3-bitcoin

This package provides a Bitcoin adapter for [@ant-design/web3](https://www.npmjs.com/package/@ant-design/web3).

## Installation

```bash
npm install @ant-design/web3 @ant-design/web3-bitcoin
```

## Usage

```tsx
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
```

For more examples, refer to [Bitcoin - Ant Design Web3](https://web3.ant.design/components/bitcoin).

## Documentation

- For more information, visit [Ant Design Web3](https://web3.ant.design).
