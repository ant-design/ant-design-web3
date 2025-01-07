---
nav: 组件
subtitle: 比特币
order: 1
group:
  title: 连接链
  order: 2
---

# Bitcoin

Ant Design Web3 官方提供了 `@ant-design/web3-bitcoin` 来适配比特币，它为 `@ant-design/web3` 的组件提供了连接比特币链的能力。你不需要自己处理组件的连接状态，它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。同时，也不需要定制化处理钱包，`useBitcoinWallet` 暴露出了诸如签名、交易等通用的方法, 可以直接调用。当然了，你依然可以通过 `provider` 调用不同钱包独有的 API。

目前支持的钱包如下，也欢迎给我们提交 GitHub issue 或 PR 支持其他钱包。

- [Xverse](https://docs.xverse.app/sats-connect)
- [OKX](https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider)
- [Unisat](https://docs.unisat.io/dev/unisat-developer-service/unisat-wallet)
- [Phantom](https://docs.phantom.app/bitcoin/integrating-phantom)

## 连接钱包

<code src="./demos/basic.tsx"></code>

## 签名 / PSBT

> Phantom 目前仅对 PSBT 提供部分支持，使用之前请充分测试。

<code src="./demos/sign.tsx"></code>

## 发送交易

> 如果钱包暂未支持 `sendTransfer`，将会抛出 `NotImplementedError`。

<code src="./demos/send-transfer.tsx"></code>

## 获取铭文信息展示

<code src="./demos/get-inscriptions.tsx"></code>

## 结合 NFTCard 展示 Ordinals NFT

<code src="./demos/ordinals.tsx"></code>

## API

### BitcoinWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoConnect | 是否自动连接 | `boolean` | `false` | - |
| balance | 是否显示余额 | `boolean` | `false` | - |
| wallets | 可用的钱包 | `WalletFactory[]` | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |

### useBitcoinWallet

#### Result

| 参数 | 描述 | 类型 | 版本 |
| --- | --- | --- | --- |
| name | 当前连接的钱包名称 | `string` | 1.0.0 |
| provider | 获取当前连接钱包的 provider 对象 | `any` | 1.0.0 |
| account | 账户地址 | `string` | 1.0.0 |
| connect | 连接钱包 | `() => Promise<void>` | 1.0.0 |
| getBalance | 获取钱包余额 | `() => Promise<Balance>` | 1.0.0 |
| signMessage | 签名 | `(message: string) => Promise<string>` | 1.0.0 |
| sendTransfer | 发送交易 | `(prams: TransferParams) => Promise<string>` | 1.0.0 |
| signPsbt | 签名 PSBT | `(params: SignPsbtParams) => Promise<SignPsbtResult>` | 1.1.0 |
| getInscriptions | 获取铭文（分页） | `(offset?: number, size?: number) => Promise<{ total: number; list: Inscription[] }>` | 1.3.0 |

##### TransferParams

| 属性    | 描述                                 | 类型                  | 默认值 | 版本 |
| ------- | ------------------------------------ | --------------------- | ------ | ---- |
| to      | 接收地址                             | `string`              | -      | -    |
| sats    | 发送聪的数目（1BTC = 100000000sats） | `number`              | -      | -    |
| options | 可选项，交易费率                     | `{ feeRate: number }` | -      | -    |

##### SignPsbtParams

| 属性    | 描述                             | 类型              | 默认值 | 版本 |
| ------- | -------------------------------- | ----------------- | ------ | ---- |
| psbt    | 待签名的 base64 编码的 psbt 数据 | `string`          | -      | -    |
| options | psbt 选项                        | `SignPsbtOptions` | -      | -    |

##### SignPsbtOptions

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| signInputs | 需要签名的输入数组：{ 地址：输入 UTXO 编号数组 } | `Record<string, number[]>` | - | - |
| broadcast | 签名 PSBT 后是否广播交易 | `boolean` | false | - |
| signHash | [签名哈希类型](https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/transaction.d.ts#L21)，默认与输入相同 | `number` | - | - |

##### SignPsbtResult

| 属性 | 描述                                            | 类型     | 默认值 | 版本 |
| ---- | ----------------------------------------------- | -------- | ------ | ---- |
| psbt | 签名后 base64 编码的 PSBT 数据                  | `string` | -      | -    |
| txid | 广播后的交易哈希。仅 `broadcast` 为 true 时返回 | `string` | -      | -    |

##### Inscription

| 属性               | 描述                      | 类型     | 默认值 | 版本 |
| ------------------ | ------------------------- | -------- | ------ | ---- |
| inscriptionId      | 铭文ID                    | `string` | -      | -    |
| address            | 铭文所属地址              | `string` | -      | -    |
| outputValue        | 铭文所在 UTXO 的大小      | `string` | -      | -    |
| content            | 铭文内容 URL              | `string` | -      | -    |
| contentLength      | 铭文内容长度              | `string` | -      | -    |
| contentType        | 铭文内容类型              | `string` | -      | -    |
| preview            | 铭文预览 URL              | `string` | -      | -    |
| timestamp          | 铭文所在交易确认的时间戳  | `number` | -      | -    |
| offset             | 铭文所在聪的 UTXO 偏移    | `number` | -      | -    |
| genesisTransaction | 产生铭文的原始交易哈希    | `string` | -      | -    |
| location           | 铭文索引位置（交易+输出） | `string` | -      | -    |
