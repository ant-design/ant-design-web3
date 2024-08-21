---
nav: 组件
subtitle: 连接器
group: UI 组件
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*66ojTqksPJsAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*PfFaQbs3w98AAAAAAAAAAAAADlrGAQ/original
---

# Connector

`Connector` 组件整合了 [ConnectButton](../connect-button/index.zh-CN.md) 和 [ConnectModal](../connect-modal/index.zh-CN.md) 组件，提供了一个完整的连接钱包的功能的 UI。

和区块链交互相关的属性通过 Connector 配置后会传递给 `ConnectButton` 和 `ConnectModal`，你也可以通过直接配置 `ConnectButton` 的属性或者通过 `modalProps` 来覆盖 `Connector` 提供的值，但是除了部分和链无关的纯 UI 的属性外，你通常并不需要这么做。

另外，`Connector` 通常会配合[适配器](../../guide/adapter)使用，适配器可以帮助你快速和区块链交互，使用适配器的情况下你基本不需要配置 `Connector` 的属性。

> 注：**本文档中的示例仅仅是纯 UI 的示例**，在 Ant Design Web3 中。UI 模块和连接模块是分离的。要想真正的连接钱包，请参考[以太坊适配器](../ethereum/index.zh-CN.md)的文档，或阅读[适配器文档](../../../../docs/guide/adapter.zh-CN.md)了解更多。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 自定义触发器

<code src="./demos/custom-trigger.tsx"></code>

## API

### ConnectorProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 连接控件，通常是 `ConnectButton` | `React.ReactNode` | - | - |
| modalProps | 透传给 `ConnectModal` 的属性 | `ModalProps` | - | - |
| onConnect | 触发连接时的回调 | `() => void` | - | - |
| onDisconnect | 触发断开连接时的回调 | `() => void` | - | - |
| onConnected | 连接成功时的回调，`account` 是否可用取决于适配器实现 | `(account?: Account) => void` | - | - |
| onDisconnected | 断开连接时的回调 | `() => void` | - | - |
| onChainSwitched | 切换网络时的回调 | `(chain: Chain) => void` | - | - |
| availableWallets | 钱包列表 | `Wallet[]` | - | - |
| account | 当前连接账号 | `Account[]` | - | - |
| availableChains | 可以连接的链列表 | `Chain[]` | - | - |
| requestAccounts | 请求账户列表的方法 | `() => Promise<Account[]>` | - | - |
| disconnect | 断开连接的方法 | `() => Promise<void>` | - | - |
| switchChain | 切换网络的方法 | `(chain: Chain) => Promise<void>` | - | - |

### ConnectorTriggerProps

`Connector` 的 `children` 组件的属性，`ConnectButton` 继承并使用了这些属性。如果你不使用 `ConnectButton`，可以通过在自己的组件中来使用这些属性来自定义 `Connector` 的 `chidlren`。

| 属性              | 描述               | 类型                                 | 默认值  | 版本 |
| ----------------- | ------------------ | ------------------------------------ | ------- | ---- |
| account           | 当前连接的账户地址 | `string`                             | -       | -    |
| onConnectClick    | 连接事件           | `() => void;`                        | -       | -    |
| onDisconnectClick | 断开连接事件       | `() => void;`                        | -       | -    |
| onSwitchChain     | 切换网络事件       | `(chain: Chain) => Promise<void>`    | -       | -    |
| balance           | 当前连接的账户余额 | `Balance[]` \| `Balance`             | -       | -    |
| availableChains   | 可以连接的链列表   | `Chain[]`                            | -       | -    |
| chain             | 当前连接的链       | [Chain](/components/types#chain)     | -       |      |
| availabelWallets  | 可用的钱包列表     | [Wallet](/components/types#wallet)[] | -       | -    |
| quickConnect      | 快速连接钱包       | `boolean`                            | `false` | -    |
