---
nav: Components
order: 6
group:
  title: Connect Blockchains
  order: 2
---

# TON

Ant Design Web3 provides `@ant-design/web3-ton` to adapt to the TON ecosystem. It enables the components of `@ant-design/web3` to connect to the TON chain. You don't need to handle the connection state of the components yourself. It will provide relevant global state and interfaces for the components through [Web3ConfigProvider](../web3-config-provider/index.md). Additionally, you don't need to customize the wallet. The `connector` exposes common methods such as signing and transaction, which can be called directly.

The interface design of `@ant-design/web3-ton` refers to the [TON official documentation](https://docs.ton.org/) and `@tonconnect/sdk`. You can find more in-depth implementation details in the documentation. The RPC service (such as balance inquiry) uses [Tonconnect](http://toncenter.com), including the testnet and mainnet.

You can check the wallets supported by Ton in the [Wallet Interface](https://whatever-zeta-two.vercel.app/wallets-v2.json). Ant Design Web3 provides settings for some commonly used wallets, as follows:

- telegram-wallet
- Tonkeeper
- MyTonWallet
- OpenMask
- Tonhub
- DeWallet
- OKX (Make sure OKX wallet is up to date before using)

## Basic Usage

<code src='./demos/basic.tsx'></code>

## Transaction on TON

Transaction on TON testnet. <code src='./demos/transaction.tsx'></code>

### TonWeb3ConfigProvider

For the connection fields provided by the Tonconnect SDK, you can refer to the [documentation](https://github.com/ton-connect/sdk/blob/main/packages/sdk/src/models/ton-connect-options.ts) for specific usage methods.

| Property | Description | Type | Default | Reserved Field for SDK | Required |
| --- | --- | --- | --- | --- | --- |
| wallets | Supported wallet list | WalletMetadata\[\] | - | No | Yes |
| balance | Whether to display the balance after connection | `boolean` | `false` | No | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | No | - |
| reconnect | Whether to support automatic reconnection | `boolean` | `true` | No | - |
| chain | Connected network, supporting mainnet and testnet | [CHAIN](https://github.com/ton-connect/sdk/blob/main/packages/protocol/src/models/CHAIN.ts) | `CHAIN.MAINNET` | No | - |
| manifestUrl | Dapp identity provided when connecting the wallet | `string` | - | Yes | - |
| storage | Address for storing protocol data | `IStorage` | `localStorage` | Yes | - |
| eventDispatcher | Event dispatch | ` EventDispatcher<SdkActionEvent>` | `window.dispatchEvent` | Yes | - |
| walletsListSource | Source of wallet list | `string` | `https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json` | Yes | - |
| walletsListCacheTTLMs | Wallet list data refresh interval | `number` | `Infinity` | Yes | - |
| disableAutoPauseConnection | Whether to disable automatic pause/resume connection behavior | `boolean` | `false` | Yes | - |
