---
nav: Components
group: Components
---

# NFTImage

Components used to display NFT images more conveniently and simply.

## Simple Usage

<code src="./demos/simple.tsx"></code>

## Use with wagmi

<code src="./demos/wagmi.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| `address` | Required. NFT contract address. | `string` | - | - |
| `tokenId` | Required. NFT token ID, which can be of type bigint or number. | `bigint \| number` | - | - |
| ...rest | Other properties inherited from the `Antd Image` component. | `ImageProps` | - | - |
