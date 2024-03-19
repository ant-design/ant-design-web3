---
nav: Components
group: General
order: 3
---

# Types

This defines the unified types of Ant Design Web3, which may be used in multiple components.

## Account

| Property | Description                                | Type     | Default | Version |
| -------- | ------------------------------------------ | -------- | ------- | ------- |
| address  | Account address                            | `string` | -       | -       |
| name     | Account name, For example, ENS in Ethereum | `string` | -       | -       |

## ChainIds

This is an enum type that contains the IDs of some commonly used chains. Its value is a number, which can be used to determine whether the current chain is a specific chain.

## Chain

| Property | Description | Type                  | Default | Version |
| -------- | ----------- | --------------------- | ------- | ------- |
| id       | Chain ID    | [ChainIds](#chainids) | -       | -       |
| name     | Chain name  | `string`              | -       | -       |
| icon     | Chain icon  | `React.ReactNode`     | -       | -       |

## Wallet

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Wallet name | `string` | - | - |
| icon | Wallet icon | `string \| React.ReactNode` | - | - |
| remark | Wallet description | `string` | - | - |
| key | Wallet key | `React.Key` | - | - |
| extensions | List of browser extensions supported by the wallet | `false` \| [ExtensionItem](#extensionitem)\[] | - | - |
| app | Whether the wallet supports APP calls | `false \| { link: string }` | - | - |
| group | Wallet group name | `string` | - | - |
| hasWalletReady | Whether the browser extension is installed | `() => boolean` | - | - |
| getQrCode | Get the QR code of the wallet | `() => { uri: string }` | - | - |
| universalProtocol | Universal protocol config | `{ link: string }` | - | - |

## ExtensionItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| link | Link to browser extension | `string` | - | - |
| key | Browser extension key | `'Chrome' \| 'Firefox' \| 'Edge' \| 'Safari' \| (string & {})` | - | - |
| browserIcon | Browser icon | `string` | - | - |
| browserName | Browser extension name | `string` | - | - |
| description | Description of browser extension | `string` | - | - |

## NFTMetadata

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Name of the NFT | `string` | - | - |
| description | Description of the NFT | `string` | - | - |
| image | Image link of the NFT | `string` | - | - |
| dna | DNA or genetic encoding of the NFT | `string` | - | - |
| edition | Version number of the NFT | `number` | - | - |
| date | Date of the NFT | `number` | - | - |
| attributes | List of additional attributes of the NFT, including an array of objects with trait_type and value properties. | `Attribute[]` | - | - |
| compiler | Compiler or tool used to create the NFT | `string` | - | - |

### Attribute

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| trait_type | The type of the attribute representing the characteristic type of the NFT. | `string` | - | - |
| value | The value of the attribute representing the characteristic of the NFT. | `string` | - | - |

## ConnectOptions

| Property    | Description     | Type                      | Default | Version |
| ----------- | --------------- | ------------------------- | ------- | ------- |
| connectType | Connection type | `'extension' \| 'qrCode'` | -       | -       |

## UniversalWeb3ProviderInterface

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| account | Current account | [Account](#account) | - | - |
| chain | Current chain | [Chain](#chain) | - | - |
| availableChains | List of available chains | [Chain](#chain)\[] | - | - |
| availableWallets | List of available wallets | [Wallet](#wallet)\[] | - | - |
| connect | Connect to the wallet | `(wallet: Wallet, options?: ConnectOptions) => Promise<void>` | - | - |
| disconnect | Disconnect from the chain | `() => Promise<void>` | - | - |
| switchChain | Switch to another chain | `(chainId: ChainIds) => Promise<void>` | - | - |
| getNFTMetadata | Get the metadata of the NFT | `(contractAddress: string, tokenId: string) => Promise<NFTMetadata>` | - | - |
