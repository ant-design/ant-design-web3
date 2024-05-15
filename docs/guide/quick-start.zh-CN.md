---
nav: 指南
group: 基础
---

# 快速开始

> 在开始之前，推荐先学习 [React](https://react.dev)，并正确安装和配置了 [Node.js](https://nodejs.org/) v18 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经基本掌握了 React 全家桶的正确开发方式。此外，该指南假设你已经通过某个 React 框架（比如 [Next.js](https://nextjs.org/) 或者 [umi](https://umijs.org/)）初始化好了一个项目。

## 安装依赖

你可以在项目的根目录下通过 `npm` 或者 `pnpm` 等包管理工具安装相关依赖，示例如下：

<br />

<NormalInstallDependencies packageNames="antd @ant-design/web3 @ant-design/web3-wagmi wagmi viem @tanstack/react-query" save="true"></NormalInstallDependencies>

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

当然，相比 `NFTImage`，可能我们使用更多的是连接区块链按钮的组件，你可以阅读 [Connector](/components/connector-cn) 组件的具体文档来学习如何使用它。

## 在 Next.js 中使用

- 若使用默认的 App Router，由于 `createContext` 仅可使用在客户端组件中，因此使用诸如 `WagmiWeb3ConfigProvider` 等 Provider 时，均应在组件代码顶部增加`"use client"`指令。

- 在 [Next.js](https://nextjs.org/) 中，基于它的构建机制，你可能在引入 `@ant-design/web3` 等包时会遇到类型下面的错误：

1. `Error: require() of ES Module ... from ... not supported.`
2. `SyntaxError: Cannot use import statement outside a module`

这是由于 Next.js 在加载 `node_modules` 下面的依赖包时没有走相关的编译逻辑。你可能需要手动在 Next.js 的配置文件 `next.config.js` 中添加 [transpilePackages](https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages) 配置：

```diff
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
+  transpilePackages: [
+    "@ant-design",
+    "antd",
+    "rc-util",
+    "rc-pagination",
+    "rc-picker",
+  ],
};

module.exports = nextConfig;
```

你也可以关注下面相关问题获取最新进展：

- https://github.com/ant-design/ant-design/issues/46053
- https://github.com/vercel/next.js/issues/58817

## Use in Remix

在前端框架 [Remix](https://remix.run/)（不是以太坊的 Remix IDE），基于它的构建机制，你可能在引入 `@ant-design/web3` 等包时会遇到类型下面的错误：

1. `SyntaxError: Named export ... not found.`
1. `Error: Cannot find module '...' imported from ...`

这是由于 Remix 在加载 `node_modules` 下面的依赖包时的编译逻辑差异。你可能需要手动在 Remix 的配置文件 `remix.config.js` 中添加 [serverDependenciesToBundle](https://remix.run/docs/en/main/file-conventions/remix-config#serverdependenciestobundle) 配置：

```diff
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
+  serverDependenciesToBundle: [/^@ant-design/, /^rc-/, "^antd"],
};
```

你也可以关注下面相关问题获取最新进展：

- https://github.com/ant-design/ant-design-icons/issues/605
