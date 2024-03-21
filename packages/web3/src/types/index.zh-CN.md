---
nav: 组件
subtitle: 类型
group: 通用
order: 3
---

# Types

这里定义了 Ant Design Web3 统一类型，在多个组件中可能都会用到。

## Account

| 属性    | 描述                       | 类型     | 默认值 | 版本 |
| ------- | -------------------------- | -------- | ------ | ---- |
| address | 账户地址                   | `string` | -      | -    |
| name    | 账户名称，比如以太坊的 ENS | `string` | -      | -    |

## ChainIds

这是一个枚举类型，包含了一些常用的链的 ID，它的值是一个数字，你可以通过它来判断当前链是否是某个特定的链。

## Chain

| 属性 | 描述     | 类型                  | 默认值 | 版本 |
| ---- | -------- | --------------------- | ------ | ---- |
| id   | 链的 ID  | [ChainIds](#chainids) | -      | -    |
| name | 链的名称 | `string`              | -      | -    |
| icon | 链的图标 | `React.ReactNode`     | -      | -    |

## Wallet

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 钱包名称 | `string` | - | - |
| icon | 钱包图标 | `string \| React.ReactNode` | - | - |
| remark | 钱包简介 | `string` | - | - |
| key | 钱包 Key | `React.Key` | - | - |
| extensions | 该钱包支持的浏览器扩展程序列表 | `false` \| [ExtensionItem](#extensionitem)\[] | - | - |
| app | 该钱包是否支持 APP 调用 | `false \| { link: string }` | - | - |
| group | 钱包所属分组名称 | `string` | - | - |
| hasWalletReady | 是否已安装浏览器扩展程序 | `() => boolean` | - | - |
| getQrCode | 获取钱包的二维码 | `() => { uri: string }` | - | - |
| universalProtocol | 通用协议配置 | `{ link: string }` | - | - |

### ExtensionItem

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| link | 浏览器扩展程序链接 | `string` | - | - |
| key | 浏览器扩展程序 Key | `'Chrome' \| 'Firefox' \| 'Edge' \| 'Safari' \| (string & {})` | - | - |
| browserIcon | 浏览器图标 | `string` | - | - |
| browserName | 浏览器扩展程序名称 | `string` | - | - |
| description | 浏览器扩展程序的描述 | `string` | - | - |

## NFTMetadata

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | NFT 的名称 | `string` | - | - |
| description | NFT 的描述 | `string` | - | - |
| image | NFT 的图像链接 | `string` | - | - |
| dna | NFT 的 DNA 或基因编码 | `string` | - | - |
| edition | NFT 的版本号 | `number` | - | - |
| date | NFT 的日期 | `number` | - | - |
| attributes | NFT 的附加属性列表。包括 `trait_type` 和 `value` 属性的对象数组 | `Attribute[]` | - | - |
| compiler | 用于创建 NFT 的编译器或工具 | `string` | - | - |

### Attribute

| 属性       | 描述                            | 类型     | 默认值 | 版本 |
| ---------- | ------------------------------- | -------- | ------ | ---- |
| trait_type | 属性的类型，表示 NFT 的特征类型 | `string` | -      | -    |
| value      | 属性的值，表示 NFT 的特征值     | `string` | -      | -    |

### ConnectOptions

| 属性        | 描述     | 类型                      | 默认值 | 版本 |
| ----------- | -------- | ------------------------- | ------ | ---- |
| connectType | 连接类型 | `'extension' \| 'qrCode'` | -      | -    |

## UniversalWeb3ProviderInterface

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| account | 当前账户 | [Account](#account) | - | - |
| chain | 当前链 | [Chain](#chain) | - | - |
| availableChains | 可以连接的链列表 | [Chain](#chain)[] | - | - |
| availableWallets | 可用的钱包列表 | [Wallet](#wallet)[] | - | - |
| connect | 连接钱包 | `(wallet: Wallet, options?: ConnectOptions) => Promise<void>` | - | - |
| disconnect | 断开钱包连接 | `() => Promise<void>` | - | - |
| switchChain | 切换链 | `(chain: Chain) => Promise<void>` | - | - |
| getNFTMetadata | 获取 NFT 的元数据 | `(params: { address: string; tokenId: bigint \| number }) => Promise<NFTMetadata>` | - | - |
