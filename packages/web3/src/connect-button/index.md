---
nav: Components
group:
  title: Components
  order: 2
---

# ConnectButton

A Button for connect chain quickly.

## Simple Usage

<code src="./demos/simple.tsx"></code>

## Unconnected

<code src="./demos/unconnected.tsx"></code>

## API

### Common

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| buttonProps | Original antd button props | [ButtonProps](https://ant.design/components/button/#api) | - | - |

### ConnectButton

| Property        | Description                         | Type      | Default | Version |
| --------------- | ----------------------------------- | --------- | ------- | ------- |
| showBalance     | Whether to show balance             | `boolean` | `false` | -       |
| showENS         | Whether to show ENS                 | `boolean` | `false` | -       |
| showSwitchChain | Whether to show switch chain button | `boolean` | `false` | -       |

### UnconnectedButton

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| connectText | Text of button when unconnected | `string` | 'Connect Wallet' | - |
| connectIcon | Icon of button when unconnected | `false \| React.ReactNode` | `<WalletIcon />` | - |

### ChainSelect

| Property | Description      | Type                                       | Default | Version |
| -------- | ---------------- | ------------------------------------------ | ------- | ------- |
| chains   | Supported chains | [ChainSelectItem](#chainselectitem-api)\[] | -       | -       |

### ChainSelectItem

| Property | Description | Type              | Default | Version |
| -------- | ----------- | ----------------- | ------- | ------- |
| id       | Chain ID    | `number`          | -       | -       |
| name     | Chain name  | `string`          | -       | -       |
| icon     | Chain icon  | `React.ReactNode` | -       | -       |
