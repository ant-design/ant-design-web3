---
nav: 组件
subtitle: 多链切换
group:
  title: 高级
  order: 4
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*agi7R62kJMQAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*DuEdT5NT9nwAAAAAAAAAAAAADlrGAQ/original
---

# 多链切换

在同一项目中支持切换不同的链，避免页面闪烁。

## 基本使用

当你的项目中有多个链的 Provider 时，可以使用 `ignoreConfig` 属性来控制哪个 Provider 的配置应该生效。只有激活的 Provider 不应该设置 `ignoreConfig` 为 `true`。

<code src="./demos/multi-chain-switch.tsx"></code>

## 工作原理

- 当 `ignoreConfig` 为 `true` 时，该 Provider 的配置在合并父级 context 时会被忽略
- 这允许多个链的 Provider 共存而不会相互干扰
- 只有激活的 Provider（没有设置 `ignoreConfig` 或 `ignoreConfig={false}`）会向子组件提供其配置
- 这样可以避免在切换链时出现页面闪烁

## API

`ignoreConfig` 属性在以下组件中可用：

- `Web3ConfigProvider`
- `WagmiWeb3ConfigProvider`
- `SuiWeb3ConfigProvider`
- `SolanaWeb3ConfigProvider`
- `TronWeb3ConfigProvider`
- `TonWeb3ConfigProvider`
- 以及其他链特定的 Provider

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ignoreConfig | 如果为 true，该 Provider 的配置在合并父级 context 时会被忽略 | `boolean` | `false` |

## 最佳实践

1. 始终在非激活的链 Provider 上设置 `ignoreConfig={true}`
2. 只有激活的 Provider 应该将 `ignoreConfig` 设置为 `false` 或未定义
3. 使用状态管理来控制哪个链是激活的
4. 这种模式在所有 Provider 都已挂载但只有一个处于激活状态时效果最好
