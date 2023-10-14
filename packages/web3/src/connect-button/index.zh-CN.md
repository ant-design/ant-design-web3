---
nav: 组件
group: 组件
---

# ConnectButton

快速和区块链建立连接。

## 基本使用

<code src="./demos/simple.tsx"></code>

## 断开连接

<code src="./demos/unconnected.tsx"></code>

## API

### Common

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| buttonProps | 原始 antd 按钮属性 | [ButtonProps](https://ant.design/components/button-cn#api) | - | - |

### ConnectButton

| 属性            | 描述               | 类型      | 默认值  | 版本 |
| --------------- | ------------------ | --------- | ------- | ---- |
| showBalance     | 是否展示余额       | `boolean` | `false` | -    |
| showENS         | 是否展示 ENS       | `boolean` | `false` | -    |
| showSwitchChain | 是否展示切换链按钮 | `boolean` | `false` | -    |

### UnconnectedButton

| 属性        | 描述                 | 类型                       | 默认值           | 版本 |
| ----------- | -------------------- | -------------------------- | ---------------- | ---- |
| connectText | 未连接时按钮展示文本 | `string`                   | 'Connect Wallet' | -    |
| connectIcon | 未连接时按钮展示图标 | `false \| React.ReactNode` | `<WalletIcon />` | -    |

### ChainSelect

| 属性   | 描述         | 类型                                       | 默认值 | 版本 |
| ------ | ------------ | ------------------------------------------ | ------ | ---- |
| chains | 支持的链列表 | [ChainSelectItem](#chainselectitem-api)\[] | -      | -    |

### ChainSelectItem

| 属性 | 描述   | 类型              | 默认值 | 版本 |
| ---- | ------ | ----------------- | ------ | ---- |
| id   | 链 ID  | `number`          | -      | -    |
| name | 链名称 | `string`          | -      | -    |
| icon | 链图标 | `React.ReactNode` | -      | -    |
