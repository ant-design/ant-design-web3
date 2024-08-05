---
nav: Components
group: General
order: 2
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*impVR5nGEFYAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*SXbqSKo3tlAAAAAAAAAAAAAADlrGAQ/original
---

# Hooks

Expose some commonly used Hooks that you can use independently or in conjunction with components.

## useConnection

Connect or disconnect the wallet. Usually, you don't need to use this Hook directly, but use the [Connector](../connector/index.md) component. This Hook is used when you need to connect or disconnect the wallet in custom components or event triggers.

### Examples

The following example simulates the connection through `Web3ConfigProvider`. Usually, your application will use [adapter](../../../../docs/guide/adapter.md), so you don't need to do this like the example, but use `useConnection` directly.

<code src="./demos/useConnection.tsx"></code>

### API

#### Result

| Property | Description | Type |
| --- | --- | --- |
| connect | Connect | [UniversalWeb3ProviderInterface](../types/index.md#universalweb3providerinterface)["connect"] |
| disconnect | Disconnect | [UniversalWeb3ProviderInterface](../types/index.md#universalweb3providerinterface)["disconnect"] |

## useAccount

Used to retrieve the account address of the current user.

### Examples

<code src="./demos/useAccount.tsx"></code>

### API

#### Result

| Property | Description | Type |
| --- | --- | --- |
| account | Represents the web3 account address of the current user. | [Account](../types/index.md#account) |

## useNFT

Convenient access to NFT metadata.

### Examples

<code src="./demos/useNFT.tsx"></code>

### API

#### Result

| Property | Description | Type |
| --- | --- | --- |
| loading | Indicate whether the NFT metadata is currently being loaded. | `boolean` |
| metadata | An object containing metadata associated with the specified NFT. | [NFTMetadata](../types/index.md#nftmetadata) |
| error | When an error occurs during the process of fetching metadata, the error property stores the error object. | `Error` |

#### Params

| Property | Description                     | Type               |
| -------- | ------------------------------- | ------------------ |
| address  | Required. NFT contract address. | `string`           |
| tokenId  | Required. NFT token ID.         | `bigint \| number` |
