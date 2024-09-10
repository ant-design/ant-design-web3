# @ant-design/web3-ton

This package provides a [TON](https://ton.org) adapter for [@ant-design/web3](https://www.npmjs.com/package/@ant-design/web3).

## Usage

```bash
npm install @ant-design/web3 @ant-design/web3-ton --save
```

```tsx
import { ConnectButton, Connector } from '@ant-design/web3';
import { okxTonWallet, tonkeeper, TonWeb3ConfigProvider } from '@ant-design/web3-ton';

const Basic = () => {
  return (
    <TonWeb3ConfigProvider wallets={[tonkeeper, okxTonWallet, { key: 'safepalwallet' }]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};

export default Basic;
```

For more examples, refer to [TON - Ant Design Web3](https://web3.ant.design/components/ton).

## Documentation

- For more information, visit [Ant Design Web3](https://web3.ant.design).
- For an introduction to TON, visit [TON](https://ton.org).
