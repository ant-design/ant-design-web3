---
nav: Components
group: General
order: 3
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*2tAoRKBMwVUAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*n4F2RK3AVTsAAAAAAAAAAAAADlrGAQ/original
---

# Types

This defines the unified types of Ant Design Web3, which may be used in multiple components.

## Account

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | Account address (When multiple addresses are supported by the adapter, this represents the first address (`addresses[0]`)) | `string` | - | - |
| name | Account name, For example, ENS in Ethereum | `string` | - | - |
| addresses | List of wallet addresses authorized by the user (implemented by the adapter, supported in some chains) | `string[]` | - | - |

## ChainIds

This is an enum type that contains the IDs of some commonly used chains. Its value is a number, which can be used to determine whether the current chain is a specific chain.

## Chain

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| id | Chain ID | [ChainIds](#chainids) | - | - |
| name | Chain name | `string` | - | - |
| icon | Chain icon | `React.ReactNode` | - | - |
| type | Chain Type： EVM compatible chains/SolanaVM chain/Bitcoin chain | `EVM \| SVM \| Bitcoin` | - | - |
| browser | Chain browser config | [ChainBrowser](#chainbrowser) | - | - |

### ChainBrowser

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| icon | Chain browser icon | `React.ReactNode` | - | - |
| getBrowserLink | Get chain browser record url hanlder | `(address: string, type: 'address' \| 'transaction') => string` | - | - |

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
| hasWalletReady | Whether the wallet is ready | `() => boolean` | - | - |
| hasExtensionInstalled | Whether the browser extension is installed | `() => boolean` | - | - |
| getQrCode | Get the QR code of the wallet | `() => { uri: string }` | - | - |
| customQrCodePanel | Custom QR code display panel | `boolean` | `false` | `1.17.0` |
| universalProtocol | Universal protocol config | `{ link: string }` | - | - |
| deeplink | Mobile wallet deeplink config | `{ urlTemplate: string }` | - | `2.22.0` |

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

### ConnectOptions

| Property    | Description     | Type                      | Default | Version |
| ----------- | --------------- | ------------------------- | ------- | ------- |
| connectType | Connection type | `'extension' \| 'qrCode'` | -       | -       |

## SignConfig

| Property | Description | Type                                  | Default | Version |
| -------- | ----------- | ------------------------------------- | ------- | ------- |
| signIn   | Sign In     | `(address: string) => Promise<void>;` | -       | -       |
| signOut  | Sign Out    | `() => Promise<void>;`                | -       | -       |

## UniversalWeb3ProviderInterface

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| account | Current account | [Account](#account) | - | - |
| chain | Current chain | [Chain](#chain) | - | - |
| availableChains | List of available chains | [Chain](#chain)\[] | - | - |
| availableWallets | List of available wallets | [Wallet](#wallet)\[] | - | - |
| connect | Connect to the wallet | `(wallet: Wallet, options?: ConnectOptions) => Promise<void \| Account>` | - | - |
| disconnect | Disconnect from the chain | `() => Promise<void>` | - | - |
| switchChain | Switch to another chain | `(chainId: ChainIds) => Promise<void>` | - | - |
| getNFTMetadata | Get the metadata of the NFT | `(contractAddress: string, tokenId?: string) => Promise<NFTMetadata>` | - | - |
| sign | Sign-in configuration | [SignConfig](#signconfig) | - | `1.20.0` |

## Token

| Property        | Description              | Type                         | Default | Version |
| --------------- | ------------------------ | ---------------------------- | ------- | ------- |
| name            | Name of the token        | `string`                     | -       | -       |
| symbol          | Symbol of the token      | `string`                     | -       | -       |
| icon            | The icon of the token    | `React.ReactNode`            | -       | -       |
| decimal         | The decimal of the token | `number`                     | -       | -       |
| availableChains | List of available chains | [TokenChain](#tokenChain)\[] | -       | -       |

### TokenChain

| Property | Description                   | Type            | Default | Version |
| -------- | ----------------------------- | --------------- | ------- | ------- |
| chain    | The chain of token            | [Chain](#chain) | -       | -       |
| contract | The contract address of token | `string`        | -       |

## Locale

Internationalization support text can be found in the [code](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts).
