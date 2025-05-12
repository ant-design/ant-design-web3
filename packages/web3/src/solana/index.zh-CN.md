---
nav: 组件
subtitle: 索拉纳
order: 5
group:
  title: 连接链
  order: 2
---

# Solana

Ant Design Web3 官方提供了 `@ant-design/web3-solana` 来适配 Solana，它是一个基于 [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) 的 Ant Design Web3 Solana 适配器。它为 `@ant-design/web3` 的组件提供了连接 Solana 的能力。

## 推荐配置

我们支持配置丰富的钱包、协议和交互方式，对于大部分 DApp 来说，我们基于对 DApp 用户的习惯分析，推荐使用如下配置：

<code src="./demos/recommend.tsx"></code>

该推荐配置主要包括：

- 支持自动添加检测到的插件钱包。
- 支持显示余额。
- 默认添加 Phantom、OKX 钱包，在用户未安装钱包情况下提供下载引导。
- 配置 `quickConnect`，提供快速连接入口，简化用户操作。
- 使用 `simple` 模式，去掉钱包分组，简化界面。
- 使用自定义的 RPC 提供商，提供更好的节点连接体验。

## 基本使用

<code src="./demos/basic.tsx"></code>

## Mobile Wallet Adapter

`autoAddRegisteredWallets` 为 `true` 时，在移动端也会自动添加名为 `Mobile Wallet Adapter` 的钱包。

<code src="./demos/mobile-wallet-adapter.tsx"></code>

## 添加更多钱包

为了降低引入包的大小，你需要手动配置 `wallets` 引入相关钱包。你可以从 `@ant-design/web3-assets` 和 `@solana/wallet-adapter-ADAPTER_YOUR_NEED` 中导出相关资源，如果没有你需要的资源，你可以通过提交 [GitHub issue](https://github.com/ant-design/ant-design-web3/issues) 告诉我们。当然，你也可以自己配置或者给我们提交 PR 支持。

`@solana/wallet-adapter-ADAPTER_YOUR_NEED`:

能够在这里找到可用的适配器：[wallet-adapters](https://github.com/anza-xyz/wallet-adapter/blob/master/packages/wallets/wallets/src/index.ts)

<code src="./demos/more-wallets.tsx"></code>

## 使用 WalletConnect 协议

<code src="./demos/wallet-connect.tsx"></code>

## 自定义钱包信息

当内置的钱包不满足要求时，你也可以自定义钱包信息，也欢迎提交 PR 帮我们完善内置钱包。

<code src="./demos/custom.tsx"></code>

## 支持切换网络

我们内置了 Solana 主网 `mainnet-beta`，其余的网络需要配置 `chains`，并引入相关资源才可支持。引入方式和钱包类似。

<code src="./demos/networks.tsx"></code>

## 调用钱包方法

<code src="./demos/sign-message.tsx"></code>

## 显示余额

<code src="./demos/balance.tsx"></code>

## 使用 TipLink

TipLink 是一个轻量级的钱包。我们通过内置的 TipLinkWallet 对其进行支持，你可以直接使用。

你也可以在这里找到关于 TipLink Wallet Adapter 的更多信息：[TipLink Wallet Adapter](https://docs.tiplink.io/docs/products/wallet-adapter)

<code src="./demos/tiplink.tsx"></code>

## 更多组件

你可以配合更多组件使用，组件中涉及到链部分的内容都会从适配器中获取。当然，在组件上直接配置的属性优先级更高。

<code src="./demos/more-components.tsx"></code>

## API

### SolanaWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| rpcProvider | 连接节点的 RPC 提供商 | (chain?: [Chain](./types#chain)) => string | - | - |
| connectionConfig | 连接节点的配置 | [ConnectionConfig](https://solana-labs.github.io/solana-web3.js/v1.x/types/ConnectionConfig.html) | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| chains | 可用的链 | SolanaChainConfig\[\] | - | - |
| wallets | 可用的钱包 | WalletFactory\[\] | - | - |
| autoConnect | 是否自动连接 | `boolean` | `false` | - |
| autoAddRegisteredWallets | 是否自动添加已注册的插件钱包 | `boolean` | `false` | - |
| walletProviderProps | WalletProvider 的属性 | [WalletProviderProps](https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/react/src/WalletProvider.tsx#L17) | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| walletConnect | WalletConnect 配置 | [UniversalProviderOpts](https://github.com/WalletConnect/walletconnect-monorepo/blob/v2.0/providers/universal-provider/src/types/misc.ts#L9) | - | - |
