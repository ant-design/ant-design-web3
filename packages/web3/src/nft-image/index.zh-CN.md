---
nav: 组件
subtitle: NFT 图片
group: 展示
---

# NFTImage

更简单地展示 NFT 图片的组件。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 和 wagmi 一起使用

<code src="./demos/wagmi.tsx"></code>

## 自定义 getNFTMetadata

<code src="./demos/customGetNFTMetadata.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| address | NFT 合约地址。 | `string` | - | - |
| tokenId | NFT 令牌 ID，可以是 bigint 或 number 类型。 | `bigint \| number` | - | - |
| getNFTMetadata | 自定义获取 NFT 元数据的方法。 | `(address: string, tokenId: bigint \| number) => Promise<NFTMetadata>` | - | - |

其他属性继承自[Ant Design Image](https://ant-design.antgroup.com/components/image-cn)
