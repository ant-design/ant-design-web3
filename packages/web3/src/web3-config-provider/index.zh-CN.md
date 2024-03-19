---
nav: 组件
subtitle: Web3 全局配置
group:
  title: 高级
  order: 4
---

# Web3ConfigProvider

给组件提供全局配置和状态。

## 基本使用

<code src="./demos/basic.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/b3b5e19be68fd67c24f20341365fad188ed499d5/packages/common/src/types.ts#L212) | - |  |
| account | 当前连接的账户地址 | [Account](/components/types#account) | - |  |
| chain | 当前连接的链 | [Chain](/components/types#chain) | - |  |
| balance | 当前连接的账户余额 | [Balance](/components/connect-button#balance-1) | - |  |
| availableWallets | 可用钱包列表 | [Wallet](/components/types#wallet)\[] | - |  |
| availableChains | 可以连接的链列表 | [Chain](/components/types#chain)\[] | - |  |
| extendsContextFromParent | 继承父级 `Provider` 的值 | `boolean` | `true` |  |
| connect | 连接链 | `(wallet?: Wallet) => Promise<void>` | - |  |
| disconnect | 断开连接 | `() => Promise<void>` | - |  |
| switchChain | 切换链 | `(chain: Chain) => Promise<void>` | - |  |
| getNFTMetadata | 获取 NFT 元数据 | `(params: { address: string; tokenId: bigint }) => Promise<NFTMetadata>;` | - |  |
