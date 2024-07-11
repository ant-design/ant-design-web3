---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*0bRHTJ-qHbIAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*KlbFSKEqFy8AAAAAAAAAAAAADlrGAQ/original
---

# NFTImage

Components used to display NFT images more conveniently and simply.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Use with wagmi

<code src="./demos/wagmi.tsx"></code>

## BTC Ordinals NFT

<code src="./demos/ordinals.tsx"></code>

## Custom getNFTMetadata

<code src="./demos/customGetNFTMetadata.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | NFT contract address. For Bitcoin, it is the inscription id or inscription number. | `string` | - | - |
| tokenId | NFT token ID, which can be of type bigint or number. | `bigint \| number` | - | - |
| getNFTMetadata | Custom method to get NFT metadata. | `(address: string, tokenId?: bigint \| number) => Promise<NFTMetadata>` | - | - |

Other properties inherited from the [Ant Design Image](https://ant-design.antgroup.com/components/image) component.
