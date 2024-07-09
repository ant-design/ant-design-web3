---
nav: Components
order: 6
group:
  title: Connect Blockchains
  order: 2
---

# TON

Ant Design Web3 provides `@ant-design/web3-ton` to adapt to the TON ecosystem. It enables the components of `@ant-design/web3` to connect to the TON chain. You don't need to handle the connection state of the components yourself. It will provide relevant global state and interfaces for the components through [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md). Also, there is no need to customize the wallet. The `connector` exposes common methods such as signing and transaction, which can be called directly.

The interface design of `@ant-design/web3-ton` refers to the [TON official documentation](https://docs.ton.org/), where you can find more in-depth implementation details. The RPC service (such as querying balance) uses [Tonconnect](http://toncenter.com), including the testnet and mainnet.

## Basic Usage

<code src='./demos/basic.tsx'></code>

## Transaction on TON

<code src='./demos/transaction.tsx'></code>

### TonWeb3ConfigProvider

| Property | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| balance | Whether to display the balance after connection | `boolean` | `false` | - |
| wallets | Supported wallet list | WalletMetadata\[\] | - | Required |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| connectConfig | Connection configuration | `TonConnectSdkConfigType` | - | Required |

### TonConnectSdkConfigType

| Property | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| manifestUrl | Description of the Dapp, used to provide identity when connecting to the wallet | `string` | - | Required |
| reconnect | Whether to support automatic reconnection | `boolean` | `false` | Required |
| chain | Network to connect, supports mainnet and testnet | `CHAIN` | `CHAIN.MAINNET` | - |
