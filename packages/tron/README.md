# @ant-design/web3-tron

This package provides a [TRON](https://tron.network) adapter for [@ant-design/web3](https://www.npmjs.com/package/@ant-design/web3).

## Usage

```bash
npm install @ant-design/web3 @ant-design/web3-tron --save
```

```tsx
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitgetWallet,
  BybitWallet,
  OkxTronWallet,
  TronlinkWallet,
  TronWeb3ConfigProvider,
} from '@ant-design/web3-tron';

const Basic = () => {
  return (
    <TronWeb3ConfigProvider wallets={[TronlinkWallet, OkxTronWallet, BitgetWallet, BybitWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TronWeb3ConfigProvider>
  );
};

export default Basic;
```

For more examples, refer to [TRON - Ant Design Web3](https://web3.ant.design/components/tron).

## Documentation

- For more information, visit [Ant Design Web3](https://web3.ant.design).
- For an introduction to TRON, visit [TRON](https://tron.network).
