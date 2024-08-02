---
nav: Components
group:
  title: Advanced
  order: 4
---

# Web3ConfigProvider

Provide global configuration and states for components.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Define an adapter based on Web3ConfigProvider

<code src="./demos/custom-adapter.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| locale | Multilingual settings | [Locale](/components/types#locale) | - |  |
| account | Account | [Account](/components/types#account) | - |  |
| chain | Chain | [Chain](/components/types#chain) | - |  |
| balance | Balance | [Balance](/components/connect-button#balance) | - |  |
| availableWallets | List of available wallets | [Wallet](/components/types#wallet)\[] | - |  |
| availableChains | List of available chains | [Chain](/components/types#chain)\[] | - |  |
| extendsContextFromParent | extends context from parent `Provider` | `boolean` | `true` |  |
| connect | Connect to the chain | `(wallet?: Wallet) => Promise<void>` | - |  |
| disconnect | Disconnect from the chain | `() => Promise<void>` | - |  |
| switchChain | Switch to another chain | `(chain: Chain) => Promise<void>` | - |  |
| getNFTMetadata | Get the metadata of the NFT | `(params: { address: string; tokenId: bigint }) => Promise<NFTMetadata>;` | - |  |
