---
nav: Components
group: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*66ojTqksPJsAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*PfFaQbs3w98AAAAAAAAAAAAADlrGAQ/original
---

# Connector

The `Connector` component integrates the [ConnectButton](../connect-button/index.md) and [ConnectModal](../connect-modal/index.md) components to provide a complete UI for connecting wallets.

The properties related to blockchain interaction are configured through Connector and passed to `ConnectButton` and `ConnectModal`. You can also override the values provided by `Connector` by directly configuring the properties of `ConnectButton` or through `modalProps`, but in addition to some pure UI properties that are not related to the chain, you usually don’t need to do this.

In addition, `Connector` is usually used with [adapter](../../guide/adapter). The adapter can help you quickly interact with the blockchain. In the case of using the adapter, you basically don’t need to configure the properties of `Connector`.

> Note: **The examples in this document are just pure UI examples**. In Ant Design Web3, the UI module and the connection module are separated. To connect to the wallet, please refer to the documentation of [Ethereum Adapter](../ethereum/index.md) or read the [Adapter documentation](../../../../docs/guide/adapter.md) for more information.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Custom Trigger

<code src="./demos/custom-trigger.tsx"></code>

## API

### ConnectorProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| children | Connection control, typically a `ConnectButton` | `React.ReactNode` | - | - |
| modalProps | Properties passed through to `ConnectModal`. | `ModalProps` | - | - |
| onConnect | Callback when triggering the connection. | `() => void` | - | - |
| onDisconnect | Callback when triggering the disconnection. | `() => void` | - | - |
| onConnected | Callback when the connection is successful. The availability of `account` depends on the adapter implementation. | `(account?: Account) => void` | - | - |
| onDisconnected | Callback when the connection is disconnected. | `() => void` | - | - |
| onChainSwitched | Callback when switching networks. | `(chain: Chain) => void` | - | - |
| availableWallets | Available aallet list | `Wallet[]` | - | - |
| account | Current connected account | `Account` | - | - |
| availableChains | List of available chains | `Chain[]` | - | - |
| connect | Method to request the account list | `() => Promise<void>` | - | - |
| disconnect | Method to disconnect | `() => Promise<void>` | - | - |
| switchChain | Method to switch networks | `(chain: Chain) => Promise<void>` | - | - |

### ConnectorTriggerProps

The properties of the `children` component of `Connector` are inherited and utilized by `ConnectButton`. If you are not using `ConnectButton`, you can customize the `children` of `Connector` by using these properties in your own component.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| account | The currently connected account | `string` | - | - |
| onConnectClick | Connection event | `() => void;` | - | - |
| onDisconnectClick | Disconnection event | `() => void;` | - | - |
| onSwitchChain | Network switch event | `(chain: Chain) => Promise<void>` | - | - |
| balance | Balance of the currently connected account | `Balance[]` \| `Balance` | - | - |
| availableChains | List of available chains | `Chain[]` | - | - |
| chain | Current chain | [Chain](/components/types#chain) | - |  |
| availableWallets | List of available wallets | [Wallet](/components/types#wallet)[] | - | - |
| quickConnect | Whether to display the quick connect button | `boolean` | - | - |
