---
nav: 组件
subtitle: Web3 全局配置
group:
  title: 高级
  order: 4
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*agi7R62kJMQAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*DuEdT5NT9nwAAAAAAAAAAAAADlrGAQ/original
---

# Web3ConfigProvider

给组件提供全局配置和状态。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 基于 Web3ConfigProvider 定义适配器

<code src="./demos/custom-adapter.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| locale | 多语言设置 | [Locale](/components/types-cn#locale) | - |  |
| account | 当前连接的账户地址 | [Account](/components/types-cn#account) | - |  |
| chain | 当前连接的链 | [Chain](/components/types-cn#chain) | - |  |
| balance | 当前连接的账户余额 | [Balance](/components/connect-button-cn#balance) | - |  |
| availableWallets | 可用钱包列表 | [Wallet](/components/types-cn#wallet)\[] | - |  |
| availableChains | 可以连接的链列表 | [Chain](/components/types-cn#chain)\[] | - |  |
| extendsContextFromParent | 继承父级 `Provider` 的值 | `boolean` | `true` |  |
| ignoreConfig | 如果为 true，该 Provider 的配置在合并父级 context 时会被忽略 | `boolean` | `false` |  |
| connect | 连接链 | `(wallet?: Wallet) => Promise<void>` | - |  |
| disconnect | 断开连接 | `() => Promise<void>` | - |  |
| switchChain | 切换链 | `(chain: Chain) => Promise<void>` | - |  |
| getNFTMetadata | 获取 NFT 元数据 | `(params: { address: string; tokenId: bigint }) => Promise<NFTMetadata>;` | - |  |
| sign | 签名登录配置 | [SignConfig](/components/types-cn#signconfig) | - | `1.20.0` |

`Web3ConfigProvider` 的 API 继承了 [UniversalWeb3ProviderInterface](/components/types-cn#universalweb3providerinterface)，为 UI 组件提供链相关交互接口。
