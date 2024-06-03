---
nav: Components
group: UI Components
---

# PayPanel

## Basic Usage

<code src="./demos/basic.tsx"></code>

## With Modal

<code src="./demos/modal.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| target | Supporting chain and corresponding receiving address | `{ [chainId: string]: { address: string; chain: Chain } }` | - | - |
| token | Token info | `Token` | - | - |
| amount | The amount specified | `number \| bigint` | - | - |
| wallets | List of supported wallets | `WalletMetadata[]` | - | - |
| onFinish | Click on the completed callback | `() => void` | - | - |

### Token

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | name | `string` | - | - |
| symbol | symbol | `string` | - | - |
| decimal | decimal | `number` | - | - |
| icon | Logo | `React.ReactNode` | - | - |
| availableChains | The chain can be used | `{chain: Chain; contract: string;}[]` | - | - |
