---
nav: Components
order: 1
group:
  title: Connect Blockchains
  order: 2
---

# Bitcoin

Ant Design Web3 officially provides `@ant-design/web3-bitcoin` to adapt to Bitcoin, which provides the ability for `@ant-design/web3` components to connect to Bitcoin. You don't need to handle the connection status of the components yourself. It will provide relevant global states and interfaces for the components through `Web3ConfigProvider`. At the same time, you don't need to customize the handling of wallets. `useBitcoinWallet` exposes common methods such as signing and transactions, which can be directly called. Of course, you can still call the unique APIs of different wallets through `provider`.

The wallets currently supported are as follows, and we also welcome you to submit GitHub issues or PRs to support other wallets.

- [Xverse](https://docs.xverse.app/sats-connect)
- [OKX](https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider)
- [Unisat](https://docs.unisat.io/dev/unisat-developer-service/unisat-wallet)
- [Phantom](https://docs.phantom.app/bitcoin/integrating-phantom)

## WalletConnect

<code src="./demos/basic.tsx"></code>

## SignMessage / SignPsbt

> Phantom currently only provides partial support for PSBT, please test it fully before using it.

<code src="./demos/sign.tsx"></code>

## SendTransfer

> If the wallet does not yet support `sendTransfer`, a `NotImplementedError` will be thrown.

<code src="./demos/send-transfer.tsx"></code>

## GetInscriptions

<code src="./demos/get-inscriptions.tsx"></code>

## Use NFTCard to show Ordinals NFT

<code src="./demos/ordinals.tsx"></code>

## API

### BitcoinWeb3ConfigProvider

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoConnect | Whether to connect automatically | `boolean` | `false` | - |
| balance | Whether to display balance | `boolean` | `false` | - |
| wallets | Wallets | `WalletFactory[]` | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |

### useBitcoinWallet

#### Result

| Property | Description | Type | Version |
| --- | --- | --- | --- |
| name | The connected wallet's name | `string` | 1.0.0 |
| provider | The connected wallet's provider | `any` | 1.0.0 |
| account | Represents the web3 account address of the current user | `string` | 1.0.0 |
| connect | Connect the wallet | `() => Promise<void>` | 1.0.0 |
| getBalance | Get the balance of the wallet | `() => Promise<Balance>` | 1.0.0 |
| signMessage | Sign message | `(message: string) => Promise<string>` | 1.0.0 |
| sendTransfer | Transfer bticoin | `(prams: TranssferParams) => Promise<string>` | 1.0.0 |
| signPsbt | Sign PSBT | `(params: SignPsbtParams) => Promise<SignPsbtResult>` | 1.1.0 |
| getInscriptions | Get Inscriptions | `(offset?: number, size?: number) => Promise<{ total: number; list: Inscription[] }>` | 1.3.0 |

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

> Note: The `signHash` option is not effective in the Xverse wallet. If you want to specify the signature type, it is recommended to directly include the signature type in the signature data. Reference link [#43](https://github.com/secretkeylabs/sats-connect-core/pull/43), [signPsbt](https://docs.xverse.app/sats-connect/bitcoin-methods/signpsbt).

##### SignPsbtResult

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| psbt | The base64 encoded PSBT after signing | `string` | - | - |
| txid | The transaction hash, only returned if `broadcast` equals true | `string` | - | - |

##### Inscription

| Property           | Description                           | Type     | Default | Version |
| ------------------ | ------------------------------------- | -------- | ------- | ------- |
| inscriptionId      | Inscription id                        | `string` | -       | -       |
| address            | Inscription number                    | `string` | -       | -       |
| outputValue        | The output value of inscription       | `string` | -       | -       |
| content            | The content url of inscription        | `string` | -       | -       |
| contentLength      | The content length of inscription     | `string` | -       | -       |
| contentType        | The content type of inscription       | `string` | -       | -       |
| preview            | The preview link                      | `string` | -       | -       |
| timestamp          | The blocktime of inscription          | `number` | -       | -       |
| offset             | The offset of inscription             | `number` | -       | -       |
| genesisTransaction | The txid of genesis transaction       | `string` | -       | -       |
| location           | The txid and vout of current location | `string` | -       | -       |
