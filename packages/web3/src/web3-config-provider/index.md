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

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| locale | i18n locale | [Locale](https://github.com/ant-design/ant-design-web3/blob/b3b5e19be68fd67c24f20341365fad188ed499d5/packages/common/src/types.ts#L212) | - |  |
| account | Account | [Account](/components/types#account) | - |  |
| chain | Chain | [Chain](/components/types#chain) | - |  |
| balance | Balance | [Balance](/components/connect-button#balance-1) | - |  |
| availableWallets | List of available wallets | [Wallet](/components/types#wallet)\[] | - |  |
| availableChains | List of available chains | [Chain](/components/types#chain)\[] | - |  |
| connect | Connect to the chain | `(chainId: ChainIds) => Promise<void>` | - |  |
| disconnect | Disconnect from the chain | `() => Promise<void>` | - |  |
| switchChain | Switch to another chain | `(chain: Chain) => Promise<void>` | - |  |
| getNFTMetadata | Get the metadata of the NFT | `(params: { address: string; tokenId: bigint }) => Promise<NFTMetadata>;` | - |  |
