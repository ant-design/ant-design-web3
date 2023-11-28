---
nav: Components
group: Connect
order: 2
---

# ConnectModal

Connect wallet modal, used with ConnectButton to complete the wallet connection process.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Simple Mode

<code src="./demos/simple.tsx"></code>

## Dark Mode

<code src="./demos/dark.tsx"></code>

## Custom Theme Color

<code src="./demos/theme.tsx"></code>

## API

### ConnectModalProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | The title of ConnectModal, same as Modal's title | `ModalProps['title']` | - | - |
| open | Whether the modal is visible, same as Modal's open | `ModalProps['open']` | - | - |
| onOpenChange | Callback when the modal visibility changes | `(open: boolean) => void` | - | - |
| onSelectWallet | Callback when the wallet is selected | `(wallet: Wallet) => void` | - | - |
| modalProps | Pass through the props of Modal | `ModalProps` | - | - |
| prefixCls | Class prefix | `string` | - | - |
| footer | Custom footer | `React.ReactNode` | - | - |
| walletList | Wallet list | `Wallet[]` | - | - |
| groupOrder | Wallet group sorting function | `(a: string, b: string) => number` | - | - |
| guide | Newbie guide panel | `false \| null` | [DefaultGuide](#defaultguide) | - |

### Wallet

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Wallet name | `string` | - | - |
| icon | Wallet icon | `string \| React.ReactNode` | - | - |
| remark | Wallet description | `string` | - | - |
| key | Wallet key | `React.Key` | - | - |
| extensions | List of browser extensions supported by the wallet | `false` \| [ExtensionItem](#extensionitem)\[] | - | - |
| app | Whether the wallet supports APP calls | `false \| { link: string }` | - | - |
| group | Wallet group name | `string` | - | - |

### ExtensionItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| link | Link to browser extension | `string` | - | - |
| key | Browser extension key | `'Chrome' \| 'Firefox' \| 'Edge' \| 'Safari' \| (string & {})` | - | - |
| browserIcon | Browser icon | `string` | - | - |
| browserName | Browser extension name | `string` | - | - |
| description | Description of browser extension | `string` | - | - |

### DefaultGuide

| Property | Description     | Type                       | Default | Version |
| -------- | --------------- | -------------------------- | ------- | ------- |
| title    | Guide title     | `string`                   | -       | -       |
| infos    | Guide info list | [GuideInfo](#guideinfo)\[] | -       | -       |
| moreLink | More link       | `string`                   | -       | -       |

### GuideInfoItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | The title of the information item of the newbie guide panel | `string \| React.ReactNode` | - | - |
| icon | The icon of the information item of the newbie guide panel | `string \| React.ReactNode` | - | - |
| description | The description of the information item of the newbie guide panel | `string \| React.ReactNode` | - | - |
