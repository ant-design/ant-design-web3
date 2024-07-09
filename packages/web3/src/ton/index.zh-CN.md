---
nav: 组件
order: 6
group:
  title: 连接链
  order: 2
---

# TON

## 基本使用

<code src='./demos/basic.tsx'></code>

## 在 TON 上进行交易

<code src='./demos/transaction.tsx'></code>

### TonWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| balance | 连接后是否展示余额 | `boolean` | `false` | - |
| wallets | 支持的钱包列表 | WalletMetadata\[\] | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
