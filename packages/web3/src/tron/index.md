---
nav: Components
order: 8
group:
  title: Connect Blockchains
  order: 2
tag:
  title: New
  color: success
---

# TRON

Ant Design Web3 provides `@ant-design/web3-tron` to adapt to the TRON ecosystem. It enables the components of `@ant-design/web3` to connect to the TRON chain. You don't need to handle the connection state of the components yourself. It will provide relevant global state and interfaces for the components through [Web3ConfigProvider](../web3-config-provider/index.md). Additionally, you don't need to customize the wallet. The `connector` exposes common methods such as signing and transaction, which can be called directly.

The interface design of `@ant-design/web3-tron` refers to the [TRON official documentation](https://developers.tron.network/docs/tronwallet-adapter) and `@tronweb3/tronwallet-adapters`. You can find more in-depth implementation details in the documentation.

You can check the wallets supported by Tron in the [tronwallet-adapter](https://github.com/web3-geek/tronwallet-adapter?tab=readme-ov-file#supported). Ant Design Web3 provides settings for some commonly used wallets, as follows:

- TronLink
- OkxWallet
- BitGet
- Bybit
- Ledger

## Basic Usage

<code src='./demos/basic.tsx'></code>

## Sign message on TRON

<code src='./demos/message.tsx'></code>

## Send transaction on TRON

<code src='./demos/transaction.tsx'></code>

## API

### TronWeb3ConfigProvider

| Property | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| wallets | Supported wallet list | WalletMetadata\[\] | - | - |
| autoConnect | Whether to connect automatically | `boolean` | `false` | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |
| onError | onError | [WalletError](https://github.com/web3-geek/tronwallet-adapter/blob/main/packages/adapters/abstract-adapter/src/errors.ts#L1) | - | - |
