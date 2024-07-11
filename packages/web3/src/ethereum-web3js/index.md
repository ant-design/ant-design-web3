---
nav: Components
order: 4
group:
  title: Connect Blockchains
  order: 2
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*X1AlTp0rcN4AAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*7VQsSahh_GsAAAAAAAAAAAAADlrGAQ/original
---

# Ethereum (web3js)

Developers who are familiar with `web3js` can install `@ant-design/web3-eth-web3js` and use it with the component library. Most of the usage is consistent with the `wagmi` adapter.

<NormalInstallDependencies packageNames="@ant-design/web3 @ant-design/web3-eth-web3js web3" save="true"></NormalInstallDependencies>

### Basic usage

This example shows basic usage using the `web3js` adapter. We provide `useWeb3js` react hooks to obtain `web3` instances, and you can use them in components to perform on-chain operations.

<code src="./demos/basic.tsx"></code>

### Sign message

This example shows how to use the `web3js` adapter to sign messages. For more example methods, please refer to [web3js documentation](https://docs.web3js.org/).

<code src="./demos/sign-message.tsx"></code>

### EthWeb3jsConfigProvider

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
