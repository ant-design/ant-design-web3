---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*4WV4Qoc-o5YAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*0zPhTLh23NwAAAAAAAAAAAAADlrGAQ/original
---

# PayPanel

The component for receiving coins supports different chain channels and some wallets for quick code scanning.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Gas Render Usage

There is a place reserved for the Gas. If you want to use it, you can implement it yourself.

<code src="./demos/useGasRender.tsx"></code>

## With Modal

<code src="./demos/modal.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| target | Supporting chain corresponding receiving address | `{ [chainId: string \| number]: string; } \| () => Promise<{ [chainId: string \| number]: string; }>` | - | - |
| supportedChains | Support for chain information | `{chain: Chain, extra?: React.ReactNode}[]` | - | - |
| token | Token info | `Token` | - | - |
| amount | The number of decimal places | `number \| bigint` | - | - |
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
