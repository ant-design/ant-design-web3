---
nav: 组件
subtitle: NFT 卡片
group: UI 组件
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*S8DvSLvOppYAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*WFYmR4qa6iAAAAAAAAAAAAAADlrGAQ/original
---

# NFTCard

用于显示 NFTCard 的组件

## 基础例子

<code src="./demos/basic.tsx"></code>

## 暗黑模式

<code src="./demos/dark-mode.tsx"></code>

## 和 wagmi 一起使用

<code src="./demos/wagmi.tsx"></code>

## 错误处理

<code src="./demos/error.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| address | NFT 的地址。对于比特币，传入铭文 ID 或者铭文编号 | `string` | - | - |
| tokenId | NFT 的 tokenId | `number \| bigint` | - | - |
| getNFTMetadata | 获取 NFT 元数据的方法 | `(address: string, tokenId?: number \| bigint) => Promise<NFTMetadata>` | - | - |
| actionText | 卡片中主要按钮文案 | `React.ReactNode` | 'Buy Now' | - |
| antdImageProps | antd Image 组件的 props | [ImageProps](https://ant-design.antgroup.com/components/image#api) | - | - |
| className | 卡片的类名 | `string` | - | - |
| description | 卡片的描述 | `React.ReactNode` | - | - |
| image | 卡片的图片 | `string \| React.ReactNode` | - | - |
| like | 点赞相关的配置 | [LikeProps](#likeprops) | - | - |
| price | 资产价格 | [CryptoPriceProps](../crypto-price/index.zh-CN.md#api) | - | - |
| footer | 卡片的底部内容 | `React.ReactNode` | - | - |
| name | 卡片的名称 | `string` | - | - |
| style | 卡片的样式 | `React.CSSProperties` | - | - |
| showAction | 是否显示卡片的操作按钮 | `boolean` | `true` | - |
| type | 卡片的类型 | `'default' \| 'pithy'` | `'default'` | - |
| onActionClick | 点击卡片的操作按钮时的回调 | `() => void` | - | - |
| errorRender | NFT 获取异常时展示异常信息的渲染方法 | `(error: Error) => React.ReactNode` | - | - |
| locale | 多语言设置 | `Locale["NFTCard"]` | - | - |

`NFTMetadata` 的定义参考以太坊 ERC721 的标准，具体见 [NFTMetadata 文档](../types/index.zh-CN.md#nftmetadata)。

### LikeProps

| 属性         | 描述                 | 类型                        | 默认值 | 版本 |
| ------------ | -------------------- | --------------------------- | ------ | ---- |
| liked        | 是否已点赞           | `boolean`                   | -      | -    |
| totalLikes   | 点赞总数             | `number`                    | -      | -    |
| onLikeChange | 点赞状态变化时的回调 | `(isLike: boolean) => void` | -      | -    |
