---
nav: 组件
order: 6
group:
  title: 连接链
  order: 2
---

# TON

Ant Design Web3 官方提供了 `@ant-design/web3-ton` 来适配 TON 生态，它为 `@ant-design/web3` 的组件提供了连接 TON 链的能力。你不需要自己处理组件的连接状态，它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。同时，也不需要定制化处理钱包，`connector` 暴露出了诸如签名、交易等通用的方法, 可以直接调用。

`@ant-design/web3-ton` 的接口设计参考了 [TON 官方文档](https://docs.ton.org/mandarin/)和`@tonconnect/sdk`，你可以在文档中找到更加深层的实现原理。RPC 服务（比如说查询余额）采用的是 [Tonconnect](http://toncenter.com)，包括测试网以及主网。

Ton 支持的钱包可以在 [钱包接口](https://whatever-zeta-two.vercel.app/wallets-v2.json) 中查看，Ant Design Web3 提供了部分常用钱包的设置，如下：

- telegram-wallet
- Tonkeeper
- MyTonWallet
- OpenMask
- Tonhub
- DeWallet
- OKX（ 使用前保证 OKX 钱包为最新版本 ）

## 基本使用

<code src='./demos/basic.tsx'></code>

## 在 TON 上进行交易

在 TON 的测试链上进行交易 <code src='./demos/transaction.tsx'></code>

### TonWeb3ConfigProvider

对于 Tonconnect SDK 提供的连接字段，可以在[文档](https://github.com/ton-connect/sdk/blob/main/packages/sdk/src/models/ton-connect-options.ts)中查看具体的使用方法。

| 属性 | 描述 | 类型 | 默认值 | 是否为 SDK 保留字段 | 是否必填 |
| --- | --- | --- | --- | --- | --- |
| wallets | 支持的钱包列表 | WalletMetadata\[\] | - | 否 | 必填 |
| balance | 连接后是否展示余额 | `boolean` | `false` | 否 | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | 否 | - |
| reconnect | 是否支持自动重新连接 | `boolean` | `true` | 否 | - |
| chain | 连接的网络，支持主网和测试网 | [CHAIN](https://github.com/ton-connect/sdk/blob/main/packages/protocol/src/models/CHAIN.ts) | `CHAIN.MAINNET` | 否 | - |
| manifestUrl | 用于连接钱包时候提供 Dapp 身份 | `string` | - | 是 | - |
| storage | 存储协议数据的地址 | `IStorage` | `localStorage` | 是 | - |
| eventDispatcher | 事件调度 | ` EventDispatcher<SdkActionEvent>` | `window.dispatchEvent` | 是 | - |
| walletsListSource | 钱包列表的来源 | `string` | `https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json` | 是 | - |
| walletsListCacheTTLMs | 钱包列表数据刷新间隔 | `number` | `Infinity` | 是 | - |
| disableAutoPauseConnection | 是否禁用自动暂停/恢复连接的行为 | `boolean` | `false` | 是 | - |
