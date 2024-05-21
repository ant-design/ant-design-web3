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

Currently, connections to Xverse, OKX and Unisat wallets are supported. In the future, [StandardWallet protocol](https://github.com/ExodusMovement/bitcoin-wallet-standard) and more commonly used wallets will be supported.

`useBitcoinWallet` exposes common methods such as signing and transaction handling, which can be called directly. Alternatively, wallet APIs can be accessed through the `provider` for customized handling of wallet logic.

Support for other methods will be added in the future. Feel free to submit a GitHub issue or a PR to support this. Currently, related logic can be implemented through the provider.

## WalletConnect

<code src="./demos/basic.tsx"></code>

## signMessage / signPsbt

<code src="./demos/sign.tsx"></code>

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
| getBalance | Get the balance of the wallet | `() => Promise<Balance>` |
| signMessage | Sign message | `(message: string) => Promise<string>` |
| sendTransfer | Transfer bticoin | `(prams: TranssferParams) => Promise<string>` |
| signPsbt | Sign PSBT | `(params: SignPsbtParams) => Promise<SignPsbtResult>` |

##### TransferParams

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| to | The recipient's address | `string` | - | - |
| sats | The amount to send to the recipient in satoshis（1BTC = 100000000sats） | `number` | - | - |
| options | Options, transaction fee rate | `{ feeRate: number }` | - | - |

##### SignPsbtParams

| Property | Description                     | Type              | Default | Version |
| -------- | ------------------------------- | ----------------- | ------- | ------- |
| psbt     | The base64 encoded PSBT to sign | `string`          | -       | -       |
| options  | Psbt options                    | `SignPsbtOptions` | -       | -       |

##### SignPsbtOptions

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| signInputs | The inputs to sign. The key is the address and the value is an array of indexes of the inputs to sign | `Record<string, number[]>` | - | - |
| broadcast | Whether to broadcast the transaction after signing | `boolean` | false | - |
| signHash | The [sigHash type](https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/transaction.d.ts#L21) to use for signing. Will default to the sighash type of the input if not provided. | `number` | - | - |

##### SignPsbtResult

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| psbt | The base64 encoded PSBT after signing | `string` | - | - |
| txid | The transaction hash, only returned if `broadcast` equals true | `string` | - | - |
