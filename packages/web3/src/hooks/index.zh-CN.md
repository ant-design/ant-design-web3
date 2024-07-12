---
nav: 组件
subtitle: 钩子函数
group: 通用
order: 2
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*impVR5nGEFYAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*SXbqSKo3tlAAAAAAAAAAAAAADlrGAQ/original
---

# Hooks

暴露一些常用的 Hooks，你可以单独使用或者配合组件使用。

## useConnection

连接或者断开连接钱包，通常来说，你不需要直接使用这个 Hook，而是使用 [Connector](../connector/index.zh-CN.md) 组件。该 Hook 是当你需要在自定义的组件或者事件触发连接或者断开连接时使用。

### 代码演示

下面的示例通过 `Web3ConfigProvider` 提供模拟了连接。通常来说，你的应用中会使用[适配器](../../../../docs/guide/adapter.zh-CN.md)，所以你并不需要像示例中这么做，而是直接使用 `useConnection` 即可。

<code src="./demos/useConnection.tsx"></code>

### API

#### Result

| 参数 | 描述 | 类型 |
| --- | --- | --- |
| connect | 连接钱包 | [UniversalWeb3ProviderInterface](../types/index.zh-CN.md#universalweb3providerinterface)["connect"] |
| disconnect | 断开连接 | [UniversalWeb3ProviderInterface](../types/index.zh-CN.md#universalweb3providerinterface)["disconnect"] |

## useAccount

用于获取当前用户的账户地址。

### 代码演示

<code src="./demos/useAccount.tsx"></code>

### API

#### Result

| 参数    | 描述                           | 类型                                       |
| ------- | ------------------------------ | ------------------------------------------ |
| account | 表示当前用户的 web3 账户地址。 | [Account](../types/index.zh-CN.md#account) |

## useNFT

方便获取 NFT 的元数据

### 代码演示

<code src="./demos/useNFT.tsx"></code>

### API

#### Result

| 参数 | 描述 | 类型 |
| --- | --- | --- |
| loading | 表示当前是否正在加载 NFT 元数据。 | `boolean` |
| metadata | 包含与指定 NFT 关联的元数据的对象。 | [NFTMetadata](../types/index.zh-CN.md#nftmetadata) |
| error | 在获取元数据过程中发生错误的时候，error 属性保存错误对象。 | `Error` |

#### Params

| 参数    | 描述                 | 类型               |
| ------- | -------------------- | ------------------ |
| address | 必需。NFT 合约地址。 | `string`           |
| tokenId | 必需。NFT 令牌 ID。  | `bigint \| number` |
