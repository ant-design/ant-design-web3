---
nav: 组件
subtitle: 比特币
group:
  title: 适配器
  order: 1
---

# Bitcoin

Ant Design Web3 官方提供了 `@ant-design/web3-bitcoin` 来适配比特币，它为 `@ant-design/web3` 的组件提供了连接比特币链的能力。通过它，你不需要自己处理组件的连接状态，链数据请求等逻辑。它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。

目前支持连接 Xverse / Unisat / Leather 钱包。未来会支持 [StandardWallet](https://github.com/ExodusMovement/bitcoin-wallet-standard) 协议及更多常用钱包。

`useAdapter` 暴露出了通用的方法，可以直接调用；也可以直接通过 provider 调用不同钱包的 API。

## 连接钱包

<code src="./demos/basic.tsx"></code>

## 使用通用的 signMessage 方法签名

<code src="./demos/sign-message.tsx"></code>

## 使用通用的 sendBitcoin 发送交易

<code src="./demos/send-bitcoin.tsx"></code>
