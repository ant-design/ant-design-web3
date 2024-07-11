---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*S8DvSLvOppYAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*WFYmR4qa6iAAAAAAAAAAAAAADlrGAQ/original
---

# NFTCard

Components used to display NFTCard.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Dark Mode

<code src="./demos/dark-mode.tsx"></code>

## Use with wagmi

<code src="./demos/wagmi.tsx"></code>

## Error Handling

<code src="./demos/error.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | The address of the NFT. For Bitcoin, it is the inscription id or inscription number. | `string` | - | - |
| tokenId | The tokenId of the NFT | `number \| bigint` | - | - |
| getNFTMetadata | The method to get the metadata of the NFT | `(address: string, tokenId?: number \| bigint) => Promise<NFTMetadata>` | - | - |
| actionText | The text of the main button in the card | `React.ReactNode` | 'Buy Now' | - |
| antdImageProps | The props of antd Image component | [ImageProps](https://ant-design.antgroup.com/components/image#api) | - | - |
| className | The className of the card | `string` | - | - |
| description | The description of the card | `React.ReactNode` | - | - |
| image | The image of the card | `string \| React.ReactNode` | - | - |
| like | The props of like | [LikeProps](#likeprops) | - | - |
| price | Asset price | [CryptoPriceProps](../crypto-price/index.md#api) | - | - |
| footer | The footer of the card | `React.ReactNode` | - | - |
| name | The name of the card | `string` | - | - |
| style | The style of the card | `React.CSSProperties` | - | - |
| showAction | Whether to show the action button of the card | `boolean` | `true` | - |
| type | The type of the card | `'default' \| 'pithy'` | `'default'` | - |
| onActionClick | The callback when the action button of the card is clicked | `() => void` | - | - |
| errorRender | Rendering method for displaying exception information when NFT gets an exception | `(error: Error) => React.ReactNode` | - | - |
| locale | Multilingual settings | `Locale["NFTCard"]` | - | - |

The definition of `NFTMetadata` refers to the Ethereum ERC721 standard, see [NFTMetadata document](../types/index.md#nftmetadata) for details.

### LikeProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| liked | Whether the card is liked | `boolean` | - | - |
| totalLikes | The total number of likes | `number` | - | - |
| onLikeChange | The callback when the like status changes | `(isLike: boolean) => void` | - | - |
