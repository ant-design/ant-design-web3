---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*leoQRImIrekAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*S4cyQ7OCxDUAAAAAAAAAAAAADlrGAQ/original
---

# ConnectButton

The button to connect to the blockchain wallet. Usually, you need to use it with the [Connector](../connector/index.md) component.

> Note: **The examples in this document are just pure UI examples**. In Ant Design Web3, the UI module and the connection module are separated. To connect to the wallet, please refer to the documentation of [Ethereum Adapter](../ethereum/index.md) or read the [Adapter documentation](../../../../docs/guide/adapter.md) for more information.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Quick Connect

After configuring the `quickConnect` property, the installed wallets and universal protocols (such as WalletConnect) will be displayed directly on the button.

<code src="./demos/quick-connect.tsx"></code>

## Show Tooltip

<code src="./demos/tooltip.tsx"></code>

## Available Chains

<code src="./demos/chains.tsx"></code>

## Show Menu

<code src="./demos/menu.tsx"></code>

## Show Profile Modal

<code src="./demos/profileModal.tsx"></code>

## Avatar

<code src="./demos/avatar.tsx"></code>

## Show Name

<code src="./demos/name.tsx"></code>

## Different Types

<code src="./demos/type.tsx"></code>

## Icon

<code src="./demos/icon.tsx"></code>

## Display Balance

<code src="./demos/balance.tsx"></code>

## Custom Button

<code src="./demos/customButton.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| account | Current connected account | `Account` | - | - |
| tooltip | Show tooltip when mouse enter address | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `false` | - |
| actionsMenu | Config menu items | `boolean \|` [ActionsMenu](#actionsmenu) | - | - |
| profileModal | Config profile modal | `boolean \|` [ProfileModal](#profilemodal) | - | - |
| avatar | Config avatar, used to display user avatar in profile modal | [AvatarProps](https://ant.design/components/avatar-cn#api) | - | - |
| onMenuItemClick | Menu item click event | `(e: NonNullable<MenuProps['items']>[number]) => void` | - | - |
| balance | Balance | [Balance](#balance) | - | - |
| availableChains | List of available chains | [Chain](../types/index.md#chain)\[] | - | - |
| availableWallets | List of available wallets | [Wallet](../types/index.md#wallet)\[] | - | - |
| quickConnect | Quick connect | `boolean` | `false` | - |
| locale | Multilingual settings | `Locale["ConnectButton"]` | - | - |
| chainSelect | Selection chain | `boolean` | `true` | - |

### Balance

| Property     | Description     | Type               | Default | Version |
| ------------ | --------------- | ------------------ | ------- | ------- |
| value        | Balance         | `bigint \| number` | -       | -       |
| symbol       | Token symbol    | `string`           | -       | -       |
| decimals     | Token decimals  | `number`           | -       | -       |
| coverAddress | Covered address | `boolean`          | `true`  | -       |

### ConnectButtonTooltipProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | Tooltip title | `ReactNode` | - | - |
| copyable | Whether to copy | `boolean` | - | - |
| format | Format address | `boolean \| (address: string) => React.ReactNode` | - | - |

More properties inherit from Ant Design's Tooltip component, you can check the [component documentation](https://ant.design/components/tooltip) for more information.

### ActionsMenu

| Property   | Description      | Type             | Default | Version |
| ---------- | ---------------- | ---------------- | ------- | ------- |
| extraItems | Extra menu items | `MenuItemType[]` | -       | -       |

More properties inherit from Ant Design's Menu component, you can check the [component documentation](https://ant.design/components/menu) for more information.

### ProfileModal

`ProfileModal` properties inherit from Ant Design's Modal component, you can check the [component documentation](https://ant.design/components/modal) for more information.
