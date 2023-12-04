---
nav: Components
group:
  title: Connect
  order: 2
order: 0
---

# Connector

The `Connector` component integrates the [ConnectButton](../connect-button/index.md) and [ConnectModal](../connect-modal/index.md) components to provide a complete UI for connecting wallets.

The properties related to blockchain interaction are configured through Connector and passed to `ConnectButton` and `ConnectModal`. You can also override the values provided by `Connector` by directly configuring the properties of `ConnectButton` or through `modalProps`, but in addition to some pure UI properties that are not related to the chain, you usually don’t need to do this.

In addition, `Connector` is usually used with [adapter](../../guide/adapter). The adapter can help you quickly interact with the blockchain. In the case of using the adapter, you basically don’t need to configure the properties of `Connector`.

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
| onConnect | Callback when triggering the connection. | `() => Promise<viod>` | - | - |
| onDisconnect | Callback when triggering the disconnection. | `() => Promise<viod>` | - | - |
| onConnected | Callback when the connection is successful. | `() => Promise<viod>` | - | - |
| onDisconnected | Callback when the connection is disconnected. | `() => Promise<viod>` | - | - |
| onChainSwitched | Callback when switching networks. | `(chain: Chain) => Promise<viod>` | - | - |
| availableWallets | Available aallet list | `Wallet[]` | - | - |
| account | Current connected account | `Account` | - | - |
| availableChains | Available select chains list | `Chain[]` | - | - |
| connect | Method to request the account list | `() => Promise<void>` | - | - |
| disconnect | Method to disconnect | `() => Promise<viod>` | - | - |
| switchChain | Method to switch networks | `(chain: Chain) => Promise<viod>` | - | - |

### ConnectorTriggerProps

The properties of the `children` component of `Connector` are inherited and utilized by `ConnectButton`. If you are not using `ConnectButton`, you can customize the `children` of `Connector` by using these properties in your own component.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| account | The currently connected account | `string` | - | - |
| onConnectClick | Connection event | `React.MouseEventHandler` | - | - |
| onDisconnectClick | Disconnection event | `React.MouseEventHandler` | - | - |
| onSwitchChain | Network switch event | `(chain: Chain) => Promise<viod>` | - | - |
| connected | Is Connected | `boolean` | - | - |
| chains | List of networks currently connected | `ChainSelectItem[]` | - | - |
| banlance | Balance of the currently connected account | `Banlance[]` \| `Banlance` | - | - |
