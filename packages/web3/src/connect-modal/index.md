---
nav: Components
group: Connect
order: 2
---

# ConnectModal

The connection wallet popup, used with [ConnectButton](../connect-button) to complete the wallet connection process. Usually, you only need to use the [Connector](../connector) component directly.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Panel Mode

<code src="./demos/panel.tsx"></code>

## Simple Mode

<code src="./demos/simple.tsx"></code>

## Dark Mode

<code src="./demos/dark.tsx"></code>

## Custom Theme Color

<code src="./demos/theme.tsx"></code>

## Custom Guide Panel

<code src="./demos/customGuide.tsx"></code>

## API

### ConnectModalProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| onSelectWallet | Callback when the wallet is selected | `(wallet: Wallet) => void` | - | - |
| footer | Custom footer | `React.ReactNode` | - | - |
| walletList | Wallet list | `Wallet[]` | - | - |
| groupOrder | Wallet group sorting function | `(a: string, b: string) => number` | - | - |
| mode | Popup mode | `'simple' \| 'normal' \| 'auto'` | `'auto'` | - |
| guide | Newbie guide content | `DefaultGuide` | [DefaultGuide](#defaultguide) | - |

Other modal properties see: [ModalProps](https://ant.design/components/modal#API)

### DefaultGuide

| Property         | Description            | Type                       | Default | Version |
| ---------------- | ---------------------- | -------------------------- | ------- | ------- |
| title            | Guide title            | `string`                   | -       | -       |
| infos            | Guide info list        | [GuideInfo](#guideinfo)\[] | -       | -       |
| moreLink         | More link              | `string`                   | -       | -       |
| getWalletBtnText | Get wallet button text | `string`                   | -       | -       |
| moreLinkText     | More link text         | `string`                   | -       | -       |

### GuideInfoItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | The title of the information item of the newbie guide panel | `string \| React.ReactNode` | - | - |
| icon | The icon of the information item of the newbie guide panel | `string \| React.ReactNode` | - | - |
| description | The description of the information item of the newbie guide panel | `string \| React.ReactNode` | - | - |

### ConnectModal.ModalPanel

Besides properties related to controlling pop-ups, it is the same as `ConnectModal`.
