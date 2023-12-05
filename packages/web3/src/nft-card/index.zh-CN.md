---
nav: 组件
group: 展示
---

# NFTCard

用于显示 NFTCard 的组件

## 基础例子

<code src="./demos/basic.tsx"></code>

## 暗黑模式

<code src="./demos/dark-mode.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actionText | 卡片中主要按钮文案 | `React.ReactNode` | 'Buy Now' | - |
| antdImageProps | antd Image 组件的 props | [ImageProps](https://ant-design.antgroup.com/components/image#api)\[\] | - | - |
| className | 卡片的类名 | `string` | - | - |
| description | 卡片的描述 | `React.ReactNode` | - | - |
| image | 卡片的图片 | `string \| React.ReactNode` | - | - |
| like | 点赞相关的配置 | [LikeProps](#likeprops) | - | - |
| price | 卡片的价格 | `number` | `0` | - |
| footer | 卡片的底部内容 | `React.ReactNode` | - | - |
| name | 卡片的名称 | `string` | - | - |
| tokenId | NFT 的 tokenId | `number` | - | - |
| style | 卡片的样式 | `React.CSSProperties` | - | - |
| showAction | 是否显示卡片的主要按钮 | `boolean` | `true` | - |
| type | 卡片的类型 | `'default' \| 'pithy'` | `'default'` | - |
| onActionChange | 点击卡片的主要按钮时的回调 | `() => void` | - | - |

### LikeProps

| 属性         | 描述                 | 类型                        | 默认值 | 版本 |
| ------------ | -------------------- | --------------------------- | ------ | ---- |
| liked        | 是否已点赞           | `boolean`                   | -      | -    |
| totalLikes   | 点赞总数             | `number`                    | -      | -    |
| onLikeChange | 点赞状态变化时的回调 | `(isLike: boolean) => void` | -      | -    |
