---
nav: Components
order: 1
group:
  title: Connect Blockchains
  order: 2
tag:
  title: New
  color: success
---

# Bitcoin

Ant Design Web3 officially provides `@ant-design/web3-bitcoin` to adapt to Bitcoin. It provides the ability to connect to Bitcoin for the components of `@ant-design/web3`.

Currently, connections to Xverse and Unisat wallets are supported. In the future, [StandardWallet protocol](https://github.com/ExodusMovement/bitcoin-wallet-standard) and more commonly used wallets will be supported.

`useBitcoinWallet` exposes common methods such as signing and transaction handling, which can be called directly. Alternatively, wallet APIs can be accessed through the `provider` for customized handling of wallet logic.

Support for other methods like PSBT will be added in the future. Feel free to submit a GitHub issue or a PR to support this. Currently, related logic can be implemented through the provider.

## WalletConnect

<code src="./demos/basic.tsx"></code>

## signMessage

<code src="./demos/sign-message.tsx"></code>

## sendTransfer

<code src="./demos/send-transfer.tsx"></code>

## get Ordinals Inscriptions using unisat wallet

<code src="./demos/get-inscriptions.tsx"></code>

## API

### BitcoinWeb3ConfigProvider

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| balance | Whether to display balance | `boolean` | `false` | - |
| wallets | Wallets | `WalletFactory[]` | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |

### useBitcoinWallet

#### result

| Property | Description | Type |
| --- | --- | --- |
| name | The connected wallet's name | `string` |
| provider | The connected wallet's provider | `any` |
| account | Represents the web3 account address of the current user | `string` |
| connect | Connect the wallet | `() => Promise<void>` |
| getBalance | Get the balance of the wallet | `() => Promise<Balance \| undefined>` |
| signMessage | Sign message | `() => Promise<string \| undefined>` |
| sendTransfer | Transfer bticoin | `() => Promise<string \| undefined>` |
