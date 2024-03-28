---
nav: Components
group:
  title: Adapter
  order: 2
tag:
  title: New
  color: success
---

# Solana

Ant Design Web3 officially provides `@ant-design/web3-solana` to adapt to Solana. It is an Ant Design Web3 Solana adapter based on [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/). It provides the ability to connect to Solana for the components of `@ant-design/web3`.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Add more wallets

To reduce the size of the package you're including, you need to manually configure the `wallets` to import the relevant wallets. You can export the necessary resources from `@ant-design/web3-assets` and `@solana/wallet-adapter-wallets`. If you don't find the resources you need, you can let us know by submitting a [GitHub issue](https://github.com/ant-design/ant-design-web3/issues). You can also configure it yourself or submit a Pull Request to us for support.

<code src="./demos/more-wallets.tsx"></code>

## WalletConnect

<code src="./demos/wallet-connect.tsx"></code>

## Support switch chains

We have built-in support for the Solana mainnet (`mainnet-beta`). To support other networks, you need to configure the `chains` and import the relevant resources. The import process is similar to that for wallets.

<code src="./demos/networks.tsx"></code>

## Display Balance

<code src="./demos/balance.tsx"></code>

## More components

You can use more components together. The content related to the chain in the component will be obtained from the adapter. Of course, the properties configured directly on the component have a higher priority.

<code src="./demos/more-components.tsx"></code>

## API

### SolanaWeb3ConfigProvider

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| rpcProvider | RPC provider for connecting nodes | (chain?: [Chain](./types#chain)) => string | - | - |
| connectionConfig | Configuration for instantiating a Connection | [ConnectionConfig](https://solana-labs.github.io/solana-web3.js/types/ConnectionConfig.html) | - | - |
| balance | Whether to display balance | `boolean` | - | - |
| chains | Chains | SolanaChainConfig\[\] | - | - |
| wallets | Wallets | WalletFactory\[\] | - | - |
| autoConnect | Whether to connect automatically | `boolean` | `false` | - |
| walletProviderProps | Transparent to WalletProvider | [WalletProviderProps](https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/react/src/WalletProvider.tsx#L17) | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| walletConnect | WalletConnect configs | [UniversalProviderOpts](https://github.com/WalletConnect/walletconnect-monorepo/blob/v2.0/providers/universal-provider/src/types/misc.ts#L9) | - | - |
