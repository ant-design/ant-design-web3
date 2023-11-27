---
nav: Components
group: Components
---

# BrowserLink

a quick way to use etherscan adress.

## Simple Usage

<code src="./demos/simple.tsx"></code>

## Complex Usage

<code src="./demos/complex.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| `icon` | 可选。图标属性，可以是布尔值或自定义 React 节点。 | `boolean \| React.ReactNode` | - | - | - |
| `ellipsis` | 可选。是否启用省略号来显示以太坊地址。 | `boolean` | - | - |
| `address` | 必需。要生成链接的以太坊地址。 | `string` | - | - |
| `href` | 可选。自定义链接目标。如果提供，将覆盖生成的链接。 | `string` | - | - |
| `type` | 可选。链接类型，是 'address'（默认）还是 'transaction'。 | `address \| transaction` | `address` | - | - |
| `chain` | 可选。以太坊链标识符。默认为主网。 | `ChainIds` | `ChainIds.Mainnet` | - |
