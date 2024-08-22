---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*q6K0SbQKVMwAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*CQLuSblAN2YAAAAAAAAAAAAADlrGAQ/original
---

# BrowserLink

a quick way to use etherscan address.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Only Icon

<code src="./demos/icononly.tsx"></code>

## Complex Usage

<code src="./demos/complex.tsx"></code>

## Custom Name

<code src="./demos/customName.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| icon | Icon property, can be a boolean value or a custom React node. | `boolean \| React.ReactNode` | - | - |
| iconOnly | Whether to display only the icon. | `boolean` | `false` | - |
| iconStyle | Icon style. | `React.CSSProperties` | - | - |
| ellipsis | Whether to enable ellipsis for displaying Ethereum addresses. | `boolean` | - | - |
| address | Ethereum address to generate the link. | `string` | - | - |
| href | Custom link target. If provided, it will override the generated link. | `string` | - | - |
| type | The type of link, either 'address' (default) or 'transaction'. | `address \| transaction` | `address` | - |
| chain | The chain of the corresponding address | `Chain` | `Mainnet` | - |
| name | Custom display name. Display `address` default. | `string` | - | - |
