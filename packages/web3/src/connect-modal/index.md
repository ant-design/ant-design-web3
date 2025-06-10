---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*mUC3SYLpq0AAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*dmHOSI_kdd0AAAAAAAAAAAAADlrGAQ/original
---

# ConnectModal

The connection wallet popup, used with [ConnectButton](../connect-button/index.md) to complete the wallet connection process. Usually, you only need to use the [Connector](../connector/index.md) component directly.

> Note: **The examples in this document are just pure UI examples**. In Ant Design Web3, the UI module and the connection module are separated. To connect to the wallet, please refer to the documentation of [Ethereum Adapter](../ethereum/index.md) or read the [Adapter documentation](../../../../docs/guide/adapter.md) for more information.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Wallets are not grouped

<code src="./demos/ungroupedBasic.tsx"></code>

## Custom Theme

<code src="./demos/theme.tsx"></code>

## Panel Mode

<code src="./demos/panel.tsx"></code>

## Simple Mode

<code src="./demos/simple.tsx"></code>

## Wireframe Mode

<code src="./demos/wireframe.tsx"></code>

## Dark Mode

<code src="./demos/dark.tsx"></code>

## Custom Guide Panel

<code src="./demos/customGuide.tsx"></code>

## Custom Footer

<code src="./demos/footer.tsx"></code>

## Empty State

<code src="./demos/empty.tsx"></code>

## Disabled State

<code src="./demos/disabled.tsx"></code>

## With Custom Banner

<code src="./demos/banner.tsx"></code>

## API

### ConnectModalProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | Custom connect modal title | `React.ReactNode` | - | - |
| onWalletSelected | Callback when the wallet is selected | `(wallet: Walle, options?: ConnectOptions) => void` | - | - |
| onCancel | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | `(e:React.SyntheticEvent) => void` | - | - |
| footer | Custom footer | `React.ReactNode` | - | - |
| banner | Custom banner | `React.ReactNode` | - | `1.24.0` |
| walletList | Wallet list | `Wallet[]` | - | - |
| group | Does the wallet need to be grouped | `boolean` \| `{groupOrder: (a: string, b: string) => number}` | `true` when there are multiple groups | - |
| mode | Popup mode | `'simple' \| 'normal' \| 'auto'` | `'auto'` | - |
| guide | Newbie guide content | `DefaultGuide` | [DefaultGuide](#defaultguide) | - |
| actionRef | Used to control the component | `MutableRefObject<ConnectModalActionType>` | - | - |
| defaultSelectedWallet | Default selected wallet | `Wallet` | - | - |
| locale | Multilingual settings | `Locale["ConnectModal"]` | - | - |
| connecting | Whether it is connecting | `boolean` \| `{ status: 'connecting \| 'signing'}` | - | - |
| emptyProps | Empty state props | [EmptyProps](https://ant.design/components/empty#api) | `{image: Empty.PRESENTED_IMAGE_SIMPLE, description: "No wallet available"}` | `1.18.0` |
| disabled | Whether to disable wallet connection functionality | `boolean` | `false` | `1.24.0` |

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

## Design Token

| Token Name | Description | Type | Default |
| --- | --- | --- | --- |
| selectedWalletBg | Background color of selected wallet | `string` | `rgb(39, 39, 39)` |
| selectedWalletColor | Color of selected wallet | `string` | `#141414` |
| hoverWalletBg | Background color when hovering over wallet | `string` | `rgb(39, 39, 39)` |
| panelSplitLineColor | Color of panel split line | `string` | `rgba(255, 255, 255, 0.06)` |
| modalTitleStartColor | Start color of modal title | `string` | `#1668dc` |
| modalTitleEndColor | End color of modal title | `string` | `rgba(255, 255, 255, 0.85)` |
| walletGroupTextColor | Text color of wallet group | `string` | `rgba(255, 255, 255, 0.65)` |
| descriptionColor | Color of description text | `string` | `rgba(255, 255, 255, 0.65)` |
| getWalletCardBg | Background color of get wallet card | `string` | `rgba(255, 255, 255, 0.03)` |
| walletIconSize | Size of wallet icon | `number` | `32` |
| simpleGuideBg | Background color of simple guide | `string` | `rgba(255, 255, 255, 0.06)` |
| walletListWidth | Width of wallet list | `number` | `328` |
| walletListHeight | Height of wallet list | `number` | `436` |
| modalMinHeight | Minimum height of modal | `number` | `518` |
