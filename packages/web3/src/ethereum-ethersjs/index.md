---
nav: Components
order: 3
group:
  title: Connect Blockchains
  order: 2
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*T2_iTYHBEn4AAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9nWCTYpaq74AAAAAAAAAAAAADlrGAQ/original
---

# Ethereum (ethersjs)

Developers who are familiar with `ethers` can install `@ant-design/web3-ethers` to use with the component library, most of which are consistent with the `wagmi` adapter.

<NormalInstallDependencies packageNames="@ant-design/web3 @ant-design/web3-ethers ethers" save="true"></NormalInstallDependencies>

### Basic usage

This example shows basic usage using the `ethers` adapter. We provide two react hooks to obtain `provider` and `signer`, which you can use in components to perform on-chain operations.

- `useEthersProvider`: Get the `Provider` instance of `ethers`.
- `useEthersSigner`: Get the `Signer` instance of `ethers`.

<code src="./demos/ethers-basic.tsx"></code>

### Compatible with ethers legacy versions

If you are a user of `ethers@5.x`, you can manually install the v5 version of ethers and modify the adapter introduction method. Versions prior to v5 are no longer supported. It is recommended to use after upgrading to the latest version:

<NormalInstallDependencies packageNames="@ant-design/web3 @ant-design/web3-ethers-v5 ethers@legacy-v5" save="true"></NormalInstallDependencies>

```tsx | pure
import { EthersWeb3ConfigProvider, useEthersProvider } from '@ant-design/web3-ethers-v5'; // importing the adapter for ethers@5.x

const Component = () => {
  const provider = useEthersProvider();
  // do something with provider
};

const App = () => {
  return (
    <EthersWeb3ConfigProvider>
      <Component />
    </EthersWeb3ConfigProvider>
  );
};
```

### EthersWeb3ConfigProviderProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| wallets | Wallets | [WalletFactory](#walletfactory)[] | - | - |
| chains | Chains | [Chain](./types#chain)[] | - | - |
| ens | Whether to display ENS | `boolean` | - | - |
| balance | Whether to display balance | `boolean` | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |
| eip6963 | Whether to use EIP6963 protocol wallet and related configurations | `boolean` \| `EIP6963Config` | `false` |  |
| walletConnect | Whether to use the Wallet Connect protocol | `false` \| [WalletConnectOptions](https://wagmi.sh/core/api/connectors/walletConnect#parameters) | `false` |  |
| storage | Persists config's state between sessions. | `false` \| [WagmiStorage](https://wagmi.sh/core/api/createStorage) | - | `next` |
