---
nav: Guide
group:
  title: Advance
  order: 2
---

# Adapter

## What is an adapter

In order to make Ant Design Web3 more flexible, and to support more types of blockchains, as well as better maintenance. We split Ant Design Web3 into multiple packages.

Among them, `@ant-design/web3` is the most core module, which contains a series of UI components. These UI components are pure React components, you can use them directly.

But if the developer only uses this part of the UI components, then the part that interacts with the blockchain still needs to be implemented by the developer. For example, the interface for connecting to the blockchain, getting blockchain information, etc. need to be implemented by the developer.

Therefore, we put forward the concept of an adapter, which can connect Ant Design Web3 UI components and the blockchain, so that these UI components can quickly connect to the blockchain. For example, when you use [@ant-design/web3-wagmi](../../packages/web3/src/ethereum/index.md), the `Connector`, `NFTCard` and other components can be directly connected to Ethereum.

## How does the adapter work?

In the [types](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/types.ts) of `@ant-design/web3-common`, we define [UniversalWeb3ProviderInterface](../../packages/web3/src/types/index.md#universalweb3providerinterface).

In `@ant-design/web3` you can use [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.md) to globally configure `UniversalWeb3ProviderInterface`, and Ant Design Web3 components will get the relevant content through React Context and use it. The adapter configures these properties for you to implement related functions, and of course you can also implement similar functions to the adapter by globally configuring `Web3ConfigProvider`. In fact, developing an adapter is based on this logic.

## Develop an adapter

As mentioned in the above section, you can use [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.md) to provide UI components with related functions for interacting with the chain. We have currently implemented the adaptation of Ethereum based on [wagmi](https://wagmi.sh/). You can refer to its implementation to help Ant Design Web3 adapt to more blockchains. The following code is a simple implementation example of an adapter:

<code src="./demos/adapter.tsx"></code>

For more content, you can refer to the [code](https://github.com/ant-design/ant-design-web3/tree/main/packages/wagmi) of `@ant-design/web3-wagmi`.
