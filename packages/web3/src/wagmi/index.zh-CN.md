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

## 支持切换链

<code src="./demos/chains.tsx"></code>

## 显示 ENS

<code src="./demos/name.tsx"></code>

## 使用 web3modal 连接 WalletConnect

当 `showQrModal` 配置不为 `false` 时，会使用 WallectConnect 自带的 [web3modal](https://web3modal.com/) 弹窗。

<code src="./demos/web3modal.tsx"></code>

## API

### WagmiWeb3ConfigProviderProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| config | wagmi 配置 | [WagmiConfig](https://wagmi.sh/core/config) | - | - |
| availableChains | 可用的链 | [WagmiChain[]](https://wagmi.sh/core/chains) | - | - |
| assets | 钱包或者链的图标等信息 | [Chain](./types#chain)\[\] \| [WalletFactory](#walletfactory)\[\] | - | - |
| ens | 是否显示 ENS | `boolean` | - | - |

### WalletFactory

| 属性   | 描述           | 类型                                       | 默认值 | 版本 |
| ------ | -------------- | ------------------------------------------ | ------ | ---- |
| name   | 钱包名称       | `Connector`                                | -      | -    |
| create | 创建钱包的方法 | `(connector: Conector) => Promise<Wallet>` | -      | -    |

> 上面的 ` Connector` 是指 wagmi 中的 `Connector`，`Wallet` 则是 [Wallet](./types#wallet)。
