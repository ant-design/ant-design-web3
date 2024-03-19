---
nav: Components
group:
  title: Adapter
  order: 1
---

# Ethereum

Ant Design Web3 officially provides `@ant-design/web3-wagmi` to adapt to Ethereum. It is an Ant Design Web3 Ethereum adapter based on [wagmi 2.x](https://wagmi.sh/). It provides the ability to connect to Ethereum and other EVM compatible chains for the components of `@ant-design/web3`.

If you are using wagmi 1.x, you can check [@ant-design/web3-wagmi@1.2.0 documentation](https://github.com/ant-design/ant-design-web3/blob/f7c9d51086f82b13a9cf94353b999348e17001de/packages/web3/src/wagmi/index.md).

Through it, you don't need to handle the connection status of the component, chain data request and other logic by yourself. It will provide relevant global status and interfaces for the components through [Web3ConfigProvider](../web3-config-provider/index.md).

Currently, we officially provide the adapter of Ethereum, and you can also develop your own adapter to support other chains. You can read the [adapter documentation](../../../../docs/guide/adapter.md) to learn more about the adapter.

## Recommended configuration

We support rich configurations of wallets, protocols, and interaction methods. For most DApps, we recommend using the following configuration:

<code src="./demos/recommend.tsx"></code>

The recommended configuration mainly includes:

- Use the EIP6963 protocol to automatically add detected plugin wallets.
- Support displaying ENS.
- By default, add MetaMask and TokenPocket, Okx wallets, and provide download guides when users have not installed wallets.
- By default, add WalletConnect, which supports users to connect various wallets through mobile phone scanning.
- Configure `quickConnect` to provide quick connection entry to simplify user operations.
- Remove wallet grouping to simplify the ui.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## EIP6963

Automatically add wallets based on EIP6963. Under the [EIP6963](https://eips.ethereum.org/EIPS/eip-6963) protocol, it can avoid conflicts caused by users installing multiple wallets, and can automatically identify the wallets that users have installed.

<code src="./demos/eip6963.tsx"></code>

## Add more wallets

In order to reduce the size of the package, you need to configure `wallets` to import wallets. You can export related resources from `@ant-design/web3-wagmi`. If you don't have the resources you need, you can submit [GitHub issue](https://github.com/ant-design/ant-design-web3/issues) to tell us. You can also configure it yourself or submit a PR to support it.

In addition, we recommend setting `eip6963` to `true` to avoid conflicts when users install multiple wallets. When the `eip6963` is configured, you no longer need to configure the wagmi `injected` Connector. wagmi's [multiInjectedProviderDiscovery](https://wagmi.sh/core/api/createConfig#multiinjectedproviderdiscovery) configuration defaults to `true` and will automatically add detected wallets.

<code src="./demos/more-wallets.tsx"></code>

## Use TokenPocket

Ant Design Web3 has built-in support for [TokenPocket](https://www.tokenpocket.pro/), which supports connecting through browser plug-ins and mobile APP scanning at the same time through the `InjectedConnector` and `WalletConnectConnector` of wagmi.

<code src="./demos/token-pocket"></code>

## Customize wallet information

<code src="./demos/custom-wallet"></code>

## Support switch chains

We have built-in `Mainnet`, and the remaining chains need to configure `chains` to import related resources to support. The import method is similar to the wallet.

<code src="./demos/chains.tsx"></code>

## Display ENS

> You need to connect to an address containing ENS to see the example effect.

<code src="./demos/name.tsx"></code>

## Display Balance

> You need to connect your account in order to see the example effect.

<code src="./demos/balance.tsx"></code>

## Configure more UI

Most of the UI attributes that are not related to the chain can be configured directly on the component. The adapter is usually only used to configure content related to the chain. Here is a configuration example. You can refer to the [ConnectButton](../connect-button/index.md), [ConnectModal](../connect-modal/index.md) and other component documents for more details.

<code src="./demos/uiconfig.tsx"></code>

## More components

You can use more components together. The content related to the chain in the component will be obtained from the adapter. Of course, the properties configured directly on the component have a higher priority.

<code src="./demos/more-components.tsx"></code>

## Use web3modal for WalletConnect

When the `showQrModal` configuration is not `false`, the built-in [web3modal](https://web3modal.com/) pop-up window of WallectConnect will be used.

<code src="./demos/web3modal.tsx"></code>

## API

### WagmiWeb3ConfigProviderProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| config | wagmi config | [WagmiConfig](https://wagmi.sh/core/config) | - | - |
| queryClient | [React Query](https://react-query.tanstack.com/) queryClient | `new QueryClient()` | - | - |
| wallets | Wallets | [WalletFactory](#walletfactory)[] | - | - |
| chains | Chains | [Chain](./types#chain)[] | - | - |
| ens | Whether to display ENS | `boolean` | - | - |
| balance | Whether to display balance | `boolean` | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |

### WalletFactory

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Wallet name | `Connector` | - | - |
| create | Method for creating a wallet | `(connector: Connector) => Promise<Wallet>` | - | - |

> The above `Connector` refers to the `Connector` in wagmi, and `Wallet` is [Wallet](./types#wallet).

### UniversalWallet

A Class for creating your own wallet, it meets the interface requirements of WalletFactory. For specific use, please refer to the example in [Customize Wallet Information](#customize-wallet-information).
