---
nav: 组件
group: 组件
---

# NFTImage

更简单地展示 NFT 图片的组件。

## 基本使用

<code src="./demos/simple.tsx"></code>

## 和 wagmi 一起使用

<code src="./demos/wagmi.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `address` | 必需。NFT 合约地址。 | `string` | - | - |
| `tokenId` | 必需。NFT 令牌 ID，可以是 bigint 或 number 类型。 | `bigint \| number` | - | - |

其他属性继承自[Ant Design Image](https://ant-design.antgroup.com/components/image-cn)
