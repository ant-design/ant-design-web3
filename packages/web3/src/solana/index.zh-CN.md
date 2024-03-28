---
nav: 组件
subtitle: 索拉纳
group:
  title: 适配器
  order: 2
tag:
  title: New
  color: success
---

# Solana

Ant Design Web3 官方提供了 `@ant-design/web3-solana` 来适配 Solana，它是一个基于 [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) 的 Ant Design Web3 Solana 适配器。它为 `@ant-design/web3` 的组件提供了连接 Solana 的能力。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 添加更多钱包

为了降低引入包的大小，你需要手动配置 `wallets` 引入相关钱包。你可以从 `@ant-design/web3-assets` 和 `@solana/wallet-adapter-wallets` 中导出相关资源，如果没有你需要的资源，你可以通过提交 [GitHub issue](https://github.com/ant-design/ant-design-web3/issues) 告诉我们。也自己配置或者给我们提交 PR 支持。

<code src="./demos/more-wallets.tsx"></code>

## 使用 WalletConnect 协议

<code src="./demos/wallet-connect.tsx"></code>

## 支持切换网络

我们内置了 Solana 主网 `mainnet-beta`，其余的网络需要配置 `chains`，并引入相关资源才可支持。引入方式和钱包类似。

<code src="./demos/networks.tsx"></code>

## 显示余额

<code src="./demos/balance.tsx"></code>

## 更多组件

你可以配合更多组件使用，组件中涉及到链部分的内容都会从适配器中获取。当然，在组件上直接配置的属性优先级更高。

<code src="./demos/more-components.tsx"></code>

## API

### SolanaWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| rpcProvider | 连接节点的 RPC 提供商 | (chain?: [Chain](./types#chain)) => string | - | - |
| connectionConfig | 连接节点的配置 | [ConnectionConfig](https://solana-labs.github.io/solana-web3.js/types/ConnectionConfig.html) | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| chains | 可用的链 | SolanaChainConfig\[\] | - | - |
| wallets | 可用的钱包 | WalletFactory\[\] | - | - |
| autoConnect | 是否自动连接 | `boolean` | `false` | - |
| walletProviderProps | WalletProvider 的属性 | [WalletProviderProps](https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/react/src/WalletProvider.tsx#L17) | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| walletConnect | WalletConnect 配置 | [UniversalProviderOpts](https://github.com/WalletConnect/walletconnect-monorepo/blob/v2.0/providers/universal-provider/src/types/misc.ts#L9) | - | - |
