---
nav: Guide
---

# Ant Design Web3

Ant Design Web3 is a Web3 React component library based on [Ant Design](https://ant.design/), it provides a series of components that can help you quickly build decentralized applications (DApp).

You can use Ant Design Web3 in any of the following ways:

- Use UI components directly through `@ant-design/web3`, such as `ConnectButton`, `Address`, etc. You can choose any way you like to connect to the blockchain, such as [ether](https://docs.ethers.org/v6/), [viem](https://viem.sh/) and [web3.js](https://web3js.org/). And any other chain's SDK, including non-EVM compatible blockchains, can also use Ant Design Web3 in this way.

- Use `@ant-design/web3-wagmi` adapter provided by our official to work with `@ant-design/web3`. It is based on [wagmi](https://wagmi.sh/) and built-in connection capabilities with EVM compatible chains. You can use Ant Design Web3 more easily without having to deal with the related logic of connecting to the blockchain yourself.

- Refer to the implementation of `@ant-design/web3-wagmi` and implement a similar adapter by yourself, so that you can use different blockchains by connecting to wagmi. You can refer to [Developing Adapters](adapter.md) for specific implementation methods.

Here is an example of using Ant Design Web3 through `@ant-design/web3-wagmi`:

<code src="./demos/guide.tsx"></code>

If you want to further try how to use Ant Design Web3 in your own project, or want to create a project based on Ant Design Web3 from 0, you can continue reading [Quick Start](quick-start.md), wish you a pleasant surfing in Web3! 🌊🌊🌊
