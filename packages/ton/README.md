# @ant-design/web3-ton

[https://web3.ant.design/components/ton](https://web3.ant.design/components/ton)

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
