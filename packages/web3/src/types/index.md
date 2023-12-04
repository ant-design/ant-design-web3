---
nav: Components
group: General
order: 3
---

# Types

This defines the unified types of Ant Design Web3, which may be used in multiple components.

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
| hasBrowserExtensionInstalled | Whether the browser extension is installed | `() => boolean` | - | - |
| getQrCode | Get the QR code of the wallet | `() => { uri: string }` | - | - |

## ExtensionItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| link | Link to browser extension | `string` | - | - |
| key | Browser extension key | `'Chrome' \| 'Firefox' \| 'Edge' \| 'Safari' \| (string & {})` | - | - |
| browserIcon | Browser icon | `string` | - | - |
| browserName | Browser extension name | `string` | - | - |
| description | Description of browser extension | `string` | - | - |
