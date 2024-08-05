---
nav: 组件
subtitle: 以太坊
order: 4
group:
  title: 连接链
  order: 2
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*X1AlTp0rcN4AAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*7VQsSahh_GsAAAAAAAAAAAAADlrGAQ/original
---

# Ethereum (web3js)

熟悉 `web3js` 的开发者可以安装 `@ant-design/web3-eth-web3js` 配合组件库使用，其中绝大部份用法都与 `wagmi` 适配器一致。

<NormalInstallDependencies packageNames="@ant-design/web3 @ant-design/web3-eth-web3js web3" save="true"></NormalInstallDependencies>

### 基本使用

这个例子展示了使用 `web3js` 适配器的基本用法。我们提供了 `useWeb3js` react hooks 来获取 `web3` 实例，你可以在组件中使用它们来进行链上操作。

<code src="./demos/basic.tsx"></code>

### 签名消息

这个例子展示了如何使用 `web3js` 适配器签名消息，更多实例方法请参考 [web3js 文档](https://docs.web3js.org/)。

<code src="./demos/sign-message.tsx"></code>

### EthWeb3jsConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| wallets | 钱包配置 | [WalletFactory](#walletfactory)\[\] | - | - |
| chains | 链的配置 | [Chain](./types#chain)\[\] | - | - |
| ens | 是否显示 ENS | `boolean` | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| eip6963 | 是否采用 EIP6963 协议钱包以及相关配置 | `boolean` \| `EIP6963Config` | `false` |  |
| walletConnect | 是否采用 Wallet Connect 协议 | `false` \| [WalletConnectOptions](https://wagmi.sh/core/api/connectors/walletConnect#parameters) | `false` |  |
| storage | 在 session 之间同步状态的存储配置 | `false` \| [WagmiStorage](https://wagmi.sh/core/api/createStorage) | - | `next` |
