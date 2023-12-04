---
nav: 组件
group: 通用
order: 2
---

# Hooks

暴露一些常用的 Hooks，你可以单独使用或者配合组件使用。

## useNFT

方便获取 NFT 的元数据

### 代码演示

<code src="./demos/useNFT.tsx"></code>

### API

#### Result

| 参数 | 描述 | 类型 |
| --- | --- | --- |
| loading | 表示当前是否正在加载 NFT 元数据。 | `boolean` |
| metadata | 包含与指定 NFT 关联的元数据的对象。 [NFTMetadata 类型定义](/components/types#nftmetadata) | `NFTMetadata` |
| error | 在获取元数据过程中发生错误的时候，error 属性保存错误对象。 | `Error` |

#### Params

| 参数    | 描述                 | 类型               |
| ------- | -------------------- | ------------------ |
| address | 必需。NFT 合约地址。 | `string`           |
| tokenId | 必需。NFT 令牌 ID。  | `bigint \| number` |

## useAccount

<code src="./demos/useAccount.tsx"></code>
