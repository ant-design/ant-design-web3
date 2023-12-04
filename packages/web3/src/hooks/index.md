---
nav: Components
group: General
order: 2
---

# Hooks

Expose some commonly used Hooks that you can use independently or in conjunction with components.

## useNFT

Convenient access to NFT metadata.

### Examples

<code src="./demos/useNFT.tsx"></code>

### API

#### Result

| Property | Description | Type |
| --- | --- | --- |
| loading | Indicate whether the NFT metadata is currently being loaded. | `boolean` |
| metadata | An object containing metadata associated with the specified NFT. [NFTMetadata Type](/components/types#nftmetadata) | `NFTMetadata` |
| error | When an error occurs during the process of fetching metadata, the error property stores the error object. | `Error` |

#### Params

| Property | Description                     | Type               |
| -------- | ------------------------------- | ------------------ |
| address  | Required. NFT contract address. | `string`           |
| tokenId  | Required. NFT token ID.         | `bigint \| number` |

## useAccount

Used to retrieve the account address of the current user.

### Examples

<code src="./demos/useAccount.tsx"></code>

### API

#### Result

| Property | Description                                              | Type     |
| -------- | -------------------------------------------------------- | -------- |
| account  | Represents the web3 account address of the current user. | `string` |
