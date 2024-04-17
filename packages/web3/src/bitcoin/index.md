---
nav: Components
group:
  title: Adapter
  order: 1
tag:
  title: New
  color: success
---

# Bitcoin

Ant Design Web3 officially provides `@ant-design/web3-bitcoin` to adapt to Bitcoin. It provides the ability to connect to Bitcoin for the components of `@ant-design/web3`.

Currently, connections to Xverse and Unisat wallets are supported. In the future, [StandardWallet protocol](https://github.com/ExodusMovement/bitcoin-wallet-standard) and more commonly used wallets will be supported.

`useAdapter` exposes common methods such as signing and transaction handling, which can be called directly. Alternatively, wallet APIs can be accessed through the `provider` for customized handling of wallet logic.

Support for other methods like PSBT will be added in the future. Feel free to submit a GitHub issue or a PR to support this. Currently, related logic can be implemented through the provider.

## WalletConnect

<code src="./demos/basic.tsx"></code>

## signMessage

<code src="./demos/sign-message.tsx"></code>

## sendTransfer

<code src="./demos/send-transfer.tsx"></code>

## get Ordinals Inscriptions using unisat wallet

<code src="./demos/get-inscriptions.tsx"></code>
