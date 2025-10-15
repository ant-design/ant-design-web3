---
nav: 组件
subtitle: 波场
order: 8
group:
  title: 连接链
  order: 2
tag:
  title: 新增
  color: success
---

# TRON

Ant Design Web3 官方提供了 `@ant-design/web3-tron` 来适配 TRON 生态，它为 `@ant-design/web3` 的组件提供了连接 TRON 链的能力。你不需要自己处理组件的连接状态，它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。同时，也不需要定制化处理钱包，`connector` 暴露出了诸如签名、交易等通用的方法, 可以直接调用。

`@ant-design/web3-tron` 的接口设计参考了 [TRON 官方文档](https://developers.tron.network/docs/tronwallet-adapter)和`@tronweb3/tronwallet-adapters`，你可以在文档中找到更加深层的实现原理。

Tron 支持的钱包可以在 [tronwallet-adapter](https://github.com/web3-geek/tronwallet-adapter?tab=readme-ov-file#supported) 中查看，Ant Design Web3 提供了部分常用钱包的设置，如下：

- TronLink
- OkxWallet
- BitGet
- Bybit
- Ledger（硬件钱包）

## 基本使用

<code src='./demos/basic.tsx'></code>

## 在 TRON 上为消息签名

<code src='./demos/message.tsx'></code>

## 在 TRON 上发起交易

<code src='./demos/transaction.tsx'></code>

## 使用 Ledger 硬件钱包

Ledger 为您的 TRON 交易提供硬件级别的安全保障。所有私钥都安全地保存在设备中，交易需要物理确认。

<code src='./demos/ledger.tsx'></code>

**前置条件：**

- Chrome/Edge 浏览器（需要 WebHID 支持）
- 通过 USB 连接 Ledger 设备
- 设备已解锁并打开 TRON 应用

## API

### TronWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 是否必填 |
| --- | --- | --- | --- | --- |
| wallets | 可用的钱包 | WalletFactory\[\] | - | - |
| autoConnect | 是否自动连接 | `boolean` | `false` | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| onError | 异常方法 | [WalletError](https://github.com/web3-geek/tronwallet-adapter/blob/main/packages/adapters/abstract-adapter/src/errors.ts#L1) | - | - |
