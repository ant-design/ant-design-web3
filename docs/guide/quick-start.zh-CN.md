---
nav: 指南
group: 基础
---

# 快速开始

> 在开始之前，推荐先学习 [React](https://react.dev)，并正确安装和配置了 [Node.js](https://nodejs.org/) v16 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经基本掌握了 React 全家桶的正确开发方式。

## 安装依赖

你可以通过 `npm` 或者 `pnpm` 等包管理工具安装相关依赖，示例如下：

<br />

<NormalInstallDependencies packageNames="antd @ant-design/web3 @ant-design/web3-wagmi wagmi @tanstack/react-query" save="true"></NormalInstallDependencies>

<br />

## 使用 UI 组件

`@ant-design/web3` 是一个纯 UI 组件，你可以直接使用它，比如你可以用 `Address`：

```tsx
import { Address } from '@ant-design/web3';

export default () => {
  return <Address ellipsis tooltip address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />;
};
```

## 连接以太坊

`@ant-design/web3` 本身不提供连接区块链的能力，它是一个纯粹的 UI 组件库，我们设计之初就考虑了它未来可以适配不同的区块链。但是我们官方基于 [wagmi](https://wagmi.sh/) 实现了一个适配器 `@ant-design/web3-wagmi`，它内置了和 EVM 兼容链的连接能力，你可以通过它来连接上以太坊。

在 `@ant-design/web3-wagmi` 中，我们暴露了一个组件 `WagmiWeb3ConfigProvider`，它封装了 wagmi 的 `WagmiConfig`。

你只要把 `WagmiWeb3ConfigProvider` 当做 `WagmiConfig` 来使用，这样在你的应用中的 Ant Design Web3 组件就可以自动连接上区块链了。

下面是一个例子，当你在 React 应用的最外层使用 `WagmiWeb3ConfigProvider` 后，你的应用中的 `NFTImage` 就可以自动从以太坊上获取 NFT 的相关信息并展示了。

<code src="./demos/quick-start.tsx"></code>

当然，相比 `NFTImage`，可能我们使用更多的是连接区块链按钮的组件，你可以阅读 [Connector](/zh-CN/components/connector) 组件的具体文档来学习如何使用它。
