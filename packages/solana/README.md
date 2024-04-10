# @ant-design/web3-solana

This package provides a [Solana](https://solana.com) adapter for [@ant-design/web3](https://www.npmjs.com/package/@ant-design/web3).

## Installation

```bash
npm install @ant-design/web3 @ant-design/web3-solana --save
```

## Usage

```tsx
import { ConnectButton, Connector } from '@ant-design/web3';
import { PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider wallets={[PhantomWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
```

For more examples, refer to [Solana - Ant Design Web3](https://web3.ant.design/components/solana).

## Documentation

- For more information, visit [Ant Design Web3](https://web3.ant.design).
- For an introduction to Solana, visit [Solana](https://solana.com).
