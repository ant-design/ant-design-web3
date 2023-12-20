---
nav: Guide
---

# Ant Design Web3

Ant Design Web3 是一个基于 [Ant Design](https://ant.design/index-cn) 的 Web3 React 组件库，它提供了一系列的组件，可以帮助你快速构建去中心化应用（DApp）。

你可以通过以下任意方式使用 Ant Design Web3：

- 仅仅通过 `@ant-design/web3` 直接使用 UI 组件，比如 `ConnectButton`、`Address` 等。连接区块链的部分你可以选择你喜欢的任何方式，比如 [ether](https://docs.ethers.org/v6/)、[viem](https://viem.sh/) 和 [web3.js](https://web3js.org/)。以及其它任何链的 SDK，包括非 EVM 兼容的区块链也可以使用这种方式来使用 Ant Design Web3。
- 通过我们官方提供的 `@ant-design/web3-wagmi` 适配器配合 `@ant-design/web3` 使用，它基于 [wagmi](https://wagmi.sh/) 内置了和 EVM 兼容链的连接能力，你可以更加简单的使用 Ant Design Web3，不需要自己处理和区块链连接的相关逻辑。
- 参考 `@ant-design/web3-wagmi` 的实现，自己实现一个类似的适配器，这样你就可以使用 wagmi 以外的其它方式连接不同的区块链了。具体实现方式可以参考[开发适配器](adapter.zh-CN.md)。

下面是通过 `@ant-design/web3-wagmi` 的方式使用 Ant Design Web3 的一个例子：

<code src="./demos/guide.tsx"></code>

如果你想要进一步尝试如何在自己的项目中使用 Ant Design Web3，或者想要从 0 创建一个基于 Ant Design Web3 的项目，你可以继续阅读[快速开始](quick-start.zh-CN.md)，祝你在 Web3 冲浪愉快！🌊🌊🌊
