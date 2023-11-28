---
nav: Components
group:
  title: Connect
  order: 1
order: 0
---

# Connector

## Using with wagmi

<code src="./demos/wagmi.tsx"></code>

## Support switch chains

<code src="./demos/chains.tsx"></code>

## Display ENS

<code src="./demos/name.tsx"></code>

## Use web3modal for WallectConnect

<code src="./demos/web3modal.tsx"></code>

## Using with @ant-design/web3-ethereum

<code src="./demos/ethereum.tsx"></code>

## API

### ConnectorProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| children | Connection control, typically a `ConnectButton` | `React.ReactNode` | - | - |
| modalProps | Properties passed through to `ConnectModal`. | `ModalProps` | - | - |
| onConnect | Callback when triggering the connection. | `() => Promise<viod>` | - | - |
| onDisconnect | Callback when triggering the disconnection. | `() => Promise<viod>` | - | - |
| onConnected | Callback when the connection is successful. | `(account: Account) => Promise<viod>` | - | - |
| onDisconnected | Callback when the connection is disconnected. | `() => Promise<viod>` | - | - |
| onChainSwitched | Callback when switching networks. | `(chain: Chain) => Promise<viod>` | - | - |
| wallets | Wallet list | `Wallet[]` | - | - |
| accounts | Account list | `Account[]` | - | - |
| chains | Network list | `Chain[]` | - | - |
| requestAccounts | Method to request the account list | `() => Promise<Account[]>` | - | - |
| disconnect | Method to disconnect | `() => Promise<viod>` | - | - |
| switchChain | Method to switch networks | `(chain: Chain) => Promise<viod>` | - | - |

### ConnectorTriggerProps

The properties of the `children` component of `Connector` are inherited and utilized by `ConnectButton`. If you are not using `ConnectButton`, you can customize the `children` of `Connector` by using these properties in your own component.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | The address of the currently connected account | `string` | - | - |
| onConnectClick | Connection event | `React.MouseEventHandler` | - | - |
| onDisconnectClick | Disconnection event | `React.MouseEventHandler` | - | - |
| onSwitchChain | Network switch event | `(chain: Chain) => Promise<viod>` | - | - |
| name | The name corresponding to the address, usually referring to ENS. | `string` | - | - |
| connected | Is Connected | `boolean` | - | - |
| chains | List of networks currently connected | `ChainSelectItem[]` | - | - |
| banlance | Balance of the currently connected account | `Banlance[]` \| `Banlance` | - | - |
