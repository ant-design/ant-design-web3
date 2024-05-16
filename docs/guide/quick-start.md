---
nav: Guide
group: Basic
---

# Quick Start

> Before you start, it is recommended to learn [React](https://react.dev) first, and install and configure [Node.js](https://nodejs.org/) v18 or above correctly. The official guide assumes that you have a medium knowledge of HTML, CSS and JavaScript, and have basically mastered the correct development method of React family bucket. In addition, this guide assumes that you have initialized a project through a React framework (such as [Next.js](https://nextjs.org/) or [umi](https://umijs.org/)).

## Install dependencies

You can install the relevant dependencies under the root directory of the project through `npm` or `pnpm` and other package management tools, as shown below:

<br />

<NormalInstallDependencies packageNames="antd @ant-design/web3 @ant-design/web3-wagmi wagmi viem @tanstack/react-query" save="true"></NormalInstallDependencies>

<br />

## Use UI components

`@ant-design/web3` is a pure UI component, you can use it directly, for example, you can use `Address`:

```tsx
import { Address } from '@ant-design/web3';

export default () => {
  return <Address ellipsis tooltip address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />;
};
```

## Connect to Ethereum

`@ant-design/web3` does not provide the ability to connect to the blockchain itself. It is a pure UI component library. We designed it from the beginning to consider that it can be adapted to different blockchains in the future. But we officially implemented an adapter `@ant-design/web3-wagmi` based on [wagmi](https://wagmi.sh/). It has built-in connection capabilities with EVM compatible chains, and you can connect to Ethereum through it.

In `@ant-design/web3-wagmi`, we expose a component `WagmiWeb3ConfigProvider`, which encapsulates wagmi's `WagmiConfig`.

As long as you use `WagmiWeb3ConfigProvider` as `WagmiConfig`, the Ant Design Web3 components in your application can automatically connect to the blockchain.

Here is an example. When you use `WagmiWeb3ConfigProvider` at the outermost layer of a React application, the `NFTImage` in your application can automatically get the relevant information of the NFT from Ethereum and display it.

<code src="./demos/quick-start.tsx"></code>

Of course, compared with `NFTImage`, we may use more components of the connection blockchain button. You can read the specific documentation of the [Connector](/components/connector) component to learn how to use it.

## Use in Next.js

- If you're using recommended App Router, add the `"use client"` directive at the top of the file to use Provider such as `WagmiWeb3ConfigProvider`, considering that `createContext` only works in Client Components.

- In [Next.js](https://nextjs.org/), based on its build mechanism, you may encounter the following errors when introducing packages such as `@ant-design/web3`:

1. `Error: require() of ES Module ... from ... not supported.`
2. `SyntaxError: Cannot use import statement outside a module`

Because Next.js does not go through the relevant compilation logic when loading dependent packages under `node_modules`. You may need to manually add the [transpilePackages](https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages) configuration in Next.js configuration file `next.config.js`:

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

You can also follow the following related issues to get the latest progress:

- https://github.com/ant-design/ant-design/issues/46053
- https://github.com/vercel/next.js/issues/58817

## Use in Remix

You may encounter the following error when using `@ant-design/web3` in [Remix](https://remix.run/) (Not the Remix IDE of Ethereum):

1. `Error: require() of ES Module ... from ... not supported.`
2. `SyntaxError: Cannot use import statement outside a module`

This is because Remix does not go through the relevant compilation logic when loading dependent packages under `node_modules`. You may need to manually add the [serverDependenciesToBundle](https://remix.run/docs/en/main/file-conventions/remix-config#serverdependenciestobundle) configuration in Remix configuration file `remix.config.js`:

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

You can also follow the following related issues to get the latest progress:

- https://github.com/ant-design/ant-design-icons/issues/605
