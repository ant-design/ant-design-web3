---
nav: Components
order: 5
group:
  title: Connect Blockchains
  order: 2
---

# Solana

Ant Design Web3 officially provides `@ant-design/web3-solana` to adapt to Solana. It is an Ant Design Web3 Solana adapter based on [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/). It provides the ability to connect to Solana for the components of `@ant-design/web3`.

## Recommended configuration

We support rich configurations of wallets, protocols, and interaction methods. For most DApps, we recommend using the following configuration:

<code src="./demos/recommend.tsx"></code>

The recommended configuration mainly includes:

- Supports automatically adding detected plugin wallets.
- Supports displaying balance.
- Adds Phantom and OKX wallets by default, providing download guidance if the user has not installed a wallet.
- Configure `quickConnect` to provide quick connection entry to simplify user operations.
- Uses `simple` mode and disable group to simplify the interface.
- Uses a custom RPC provider to provide a better node connection experience.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Mobile Wallet Adapter

When `autoAddRegisteredWallets` is `true`, the `Mobile Wallet Adapter` wallet will also be automatically added on mobile.

<code src="./demos/mobile-wallet-adapter.tsx"></code>

## Add more wallets

To reduce the size of the package you're including, you need to manually configure the `wallets` to import the relevant wallets. You can export the necessary resources from `@ant-design/web3-assets` and `@solana/wallet-adapter-ADAPTER_YOUR_NEED`. If you don't find the resources you need, you can let us know by submitting a [GitHub issue](https://github.com/ant-design/ant-design-web3/issues). You can also configure it yourself or submit a Pull Request to us for support.

`@solana/wallet-adapter-ADAPTER_YOUR_NEED`:

Available adapters can be found here: [wallet-adapters](https://github.com/anza-xyz/wallet-adapter/blob/master/packages/wallets/wallets/src/index.ts)

<code src="./demos/more-wallets.tsx"></code>

## WalletConnect

<code src="./demos/wallet-connect.tsx"></code>

## Customize wallet information

When the built-in wallets do not meet your requirements, you can also customize the wallet information, and we welcome you to submit PRs to help us improve the built-in wallets.

<code src="./demos/custom.tsx"></code>

## Support switch chains

We have built-in support for the Solana mainnet (`mainnet-beta`). To support other networks, you need to configure the `chains` and import the relevant resources. The import process is similar to that for wallets.

<code src="./demos/networks.tsx"></code>

## Call wallet methods

<code src="./demos/sign-message.tsx"></code>

## Display Balance

<code src="./demos/balance.tsx"></code>

## Use TipLink

TipLink is a lightweight wallet. We support it through the built-in TipLinkWallet, which you can use directly.

You can also find more information about TipLink Wallet Adapter here: [TipLink Wallet Adapter](https://docs.tiplink.io/docs/products/wallet-adapter)

<code src="./demos/tiplink.tsx"></code>

## More components

You can use more components together. The content related to the chain in the component will be obtained from the adapter. Of course, the properties configured directly on the component have a higher priority.

<code src="./demos/more-components.tsx"></code>

## API

### SolanaWeb3ConfigProvider

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| rpcProvider | RPC provider for connecting nodes | (chain?: [Chain](./types#chain)) => string | - | - |
| connectionConfig | Configuration for instantiating a Connection | [ConnectionConfig](https://solana-labs.github.io/solana-web3.js/v1.x/types/ConnectionConfig.html) | - | - |
| balance | Whether to display balance | `boolean` | - | - |
| chains | Chains | SolanaChainConfig\[\] | - | - |
| wallets | Wallets | WalletFactory\[\] | - | - |
| autoConnect | Whether to connect automatically | `boolean` | `false` | - |
| autoAddRegisteredWallets | Whether to automatically add registered plugin wallets | `boolean` | `false` | - |
| walletProviderProps | Transparent to WalletProvider | [WalletProviderProps](https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/react/src/WalletProvider.tsx#L17) | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| walletConnect | WalletConnect configs | [UniversalProviderOpts](https://github.com/WalletConnect/walletconnect-monorepo/blob/v2.0/providers/universal-provider/src/types/misc.ts#L9) | - | - |
