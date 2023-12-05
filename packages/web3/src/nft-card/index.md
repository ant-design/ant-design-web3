---
nav: Components
group: Display
---

# NFTCard

Components used to display NFTCard.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Dark Mode

<code src="./demos/dark-mode.tsx"></code>

## Use with wagmi

<code src="./demos/wagmi.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| actionText | The text of the main button in the card | `React.ReactNode` | 'Buy Now' | - |
| antdImageProps | The props of antd Image component | [ImageProps](https://ant-design.antgroup.com/components/image#api) | - | - |
| className | The className of the card | `string` | - | - |
| description | The description of the card | `React.ReactNode` | - | - |
| image | The image of the card | `string \| React.ReactNode` | - | - |
| like | The props of like | [LikeProps](#likeprops) | - | - |
| price | The price of the card | `number` | `0` | - |
| footer | The footer of the card | `React.ReactNode` | - | - |
| name | The name of the card | `string` | - | - |
| tokenId | The tokenId of the NFT | `number` | - | - |
| style | The style of the card | `React.CSSProperties` | - | - |
| showAction | Whether to show the main button of the card | `boolean` | `true` | - |
| type | The type of the card | `'default' \| 'pithy'` | `'default'` | - |
| onActionChange | The callback when the main button of the card is clicked | `() => void` | - | - |

### LikeProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| liked | Whether the card is liked | `boolean` | - | - |
| totalLikes | The total number of likes | `number` | - | - |
| onLikeChange | The callback when the like status changes | `(isLike: boolean) => void` | - | - |
