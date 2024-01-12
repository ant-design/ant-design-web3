---
nav: Guide
group: Basic
---

# Quick Start

> Before you start, it is recommended to learn [React](https://react.dev) first, and install and configure [Node.js](https://nodejs.org/) v16 or above correctly. The official guide assumes that you have a medium knowledge of HTML, CSS and JavaScript, and have basically mastered the correct development method of React family bucket.

## Install dependencies

You can install the relevant dependencies through `npm` or `pnpm` and other package management tools, as shown below:

<br />

<NormalInstallDependencies packageNames="antd @ant-design/web3 @ant-design/web3-wagmi wagmi @tanstack/react-query" save="true"></NormalInstallDependencies>

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
