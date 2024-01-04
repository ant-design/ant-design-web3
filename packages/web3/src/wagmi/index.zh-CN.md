---
nav: 组件
group:
  title: 适配器
  order: 1
---

# 以太坊

Ant Design Web3 官方提供了 `@ant-design/web3-wagmi` 来适配以太坊，它是一个基于 [wagmi](https://wagmi.sh/) 的 Ant Design Web3 以太坊适配器。它为 `@ant-design/web3` 的组件提供了连接以太坊等 EVM 兼容链的能力。通过它，你不需要自己处理组件的连接状态，链数据请求等逻辑。它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。

目前，我们官方提供了该以太坊的适配器，你也可以自己开发适配器来支持其它的链，关于适配器，你可以阅读[适配器文档](../../../../docs/guide/adapter.zh-CN.md)了解更多。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 添加更多钱包

我们内置了 `group` 为 `Popular` 的钱包，对于其它钱包，你需要配置 `assets` 引入相关资源。你可以从 `@ant-design/web3-wagmi` 中导出相关资源，如果没有你需要的资源，你可以通过提交 [Github issue](https://github.com/ant-design/ant-design-web3/issues) 告诉我们。也自己配置或者给我们提交 PR 支持。

<code src="./demos/more-wallets.tsx"></code>

## 使用 TokenPocket

Ant Design Web3 内置了对 [TokenPocket](https://www.tokenpocket.pro/) 的支持，通过 wagmi 的 `InjectedConnector` 和 `WalletConnectConnector` 同时支持通过浏览器插件和手机 APP 扫码连接。

<code src="./demos/token-pocket"></code>

## 自定义钱包信息

<code src="./demos/custom-wallet"></code>

## 支持切换链

我们内置了 `Mainnet` 和 `Goerli`，其余的链需要配置 `assets`，引入相关资源才可支持。引入方式和钱包类似。

<code src="./demos/chains.tsx"></code>

## 显示 ENS

<code src="./demos/name.tsx"></code>

## 显示余额

<code src="./demos/balance.tsx"></code>

## 配置更多 UI

大部分和链无关的 UI 属性你都可以直接在组件上配置，适配器通常只用于配置和链相关的内容。下面是一个配置示例，更多的配置你可以具体参考 [ConnectButton](../connect-button/index.zh-CN.md)、[ConnectModal](../connect-modal/index.zh-CN.md) 等组件文档查看更多细节。

<code src="./demos/uiconfig.tsx"></code>

## 更多组件

你可以配合更多组件使用，组件中涉及到链部分的内容都会从适配器中获取。当然，在组件上直接配置的属性优先级更高。

<code src="./demos/more-components.tsx"></code>

## 使用 web3modal 连接 WalletConnect

当 `showQrModal` 配置不为 `false` 时，会使用 WallectConnect 自带的 [web3modal](https://web3modal.com/) 弹窗。

<code src="./demos/web3modal.tsx"></code>

## API

### WagmiWeb3ConfigProviderProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| config | wagmi 配置 | [WagmiConfig](https://wagmi.sh/core/config) | - | - |
| assets | 钱包或者链的图标等信息 | [Chain](./types#chain)\[\] \| [WalletFactory](#walletfactory)\[\] | - | - |
| ens | 是否显示 ENS | `boolean` | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| locale | 多语言文案设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |

### WalletFactory

| 属性   | 描述           | 类型                                        | 默认值 | 版本 |
| ------ | -------------- | ------------------------------------------- | ------ | ---- |
| name   | 钱包名称       | `Connector`                                 | -      | -    |
| create | 创建钱包的方法 | `(connector: Connector) => Promise<Wallet>` | -      | -    |

> 上面的 ` Connector` 是指 wagmi 中的 `Connector`，`Wallet` 则是 [Wallet](./types#wallet)。

### UniversalWallet

用于自己定钱包的类，它满足 WalletFactory 的接口要求。具体使用可以参考[自定义钱包信息](#自定义钱包信息)的示例。
