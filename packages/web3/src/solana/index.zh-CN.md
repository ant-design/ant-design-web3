---
nav: 组件
group:
  title: 适配器
  order: 2
---

# Solana

Ant Design Web3 官方提供了 `@ant-design/web3-solana` 来适配 Solana，它是一个基于 [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) 的 Ant Design Web3 Solana 适配器。它为 `@ant-design/web3` 的组件提供了连接 Solana 的能力。

## 基本使用

<code src="./demos/basic.tsx"></code>

## API

### SolanaWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| rpcProvider | 连接节点的 RPC 提供商 | `string` \| (chain?: [Chain](./types#chain)) => string | - | - |
| connectionConfig | 连接节点的配置 | [ConnectionConfig](https://solana-labs.github.io/solana-web3.js/types/ConnectionConfig.html) | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| chains | 可用的链 | [Chain](./types#chain)\[\] | - | - |
| wallets | 可用的钱包 | [Adapter](https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/base/src/types.ts#L5)\[\] | - | - |
| autoConnect | 是否自动连接 | `boolean` | `false` | - |
| assets | 钱包或者链的图标等信息 | [Chain](./types#chain)\[\] | - | - |
| locale | 多语言文案设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
