---
nav: 组件
subtitle: Ledger
order: 9
group:
  title: 连接链
  order: 2
---

# Ledger

Ant Design Web3 为以太坊提供了 `@ant-design/web3-ledger`，为 TRON 提供了 `@ant-design/web3-tron` 的 Ledger 支持，以集成 Ledger 硬件钱包。Ledger 提供硬件级别的安全保障，私钥永远不会离开设备，所有交易都需要在设备上进行物理确认。

## 安装

对于 TRON 使用 Ledger：

```bash
npm install @ant-design/web3 @ant-design/web3-tron --save
```

对于以太坊使用 Ledger，请参考 [@ant-design/web3-ledger 文档](https://web3.ant.design/components/ledger)。

## 连接 TRON 与 Ledger

<code src='./demos/tron.tsx'></code>

## 前置条件

- Chrome/Edge 浏览器（需要 WebHID 支持）
- 通过 USB 连接 Ledger 设备
- 设备已解锁并打开 TRON 应用

## 特性

- 🔐 **硬件级安全**：私钥永远不会离开 Ledger 设备
- ✅ **物理确认**：所有交易都需要设备确认
- 📱 **多链支持**：支持 TRON 和以太坊
- 🔒 **安全签名**：消息和交易在设备上签名

## API

详细的 API 文档，请参考：

- TRON：参见 [TronWeb3ConfigProvider](../tron/index.zh-CN.md#api)
- 以太坊：参见 [@ant-design/web3-ledger 文档](https://web3.ant.design/components/ledger)
