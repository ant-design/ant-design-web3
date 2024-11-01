---
nav: Guide
---

# Ant Design Web3

Ant Design Web3 是一个基于 [Ant Design](https://ant.design/index-cn) 的 Web3 React 组件库，它提供了一系列的组件，可以帮助你快速构建去中心化应用（DApp）。

你可以通过以下任意方式使用 Ant Design Web3：

- 仅仅通过 `@ant-design/web3` 直接使用 UI 组件，比如 `ConnectButton`、`Address` 等。连接区块链的部分你可以选择你喜欢的任何方式，比如 [ether](https://docs.ethers.org/v6/)、[viem](https://viem.sh/) 和 [web3.js](https://web3js.org/)。以及其它任何链的 SDK，包括非 EVM 兼容的区块链也可以使用这种方式来使用 Ant Design Web3。
- 通过我们官方提供的适配器配合 `@ant-design/web3` 使用，快速连接各类区块链，不需要自己处理和区块链连接的相关逻辑。
  - 基于 `@ant-design/web3-wagmi` 或者 `@ant-design/web3-ethers` 和 `@ant-design/web3-eth-web3js` 连接 EVM 兼容链。
  - 基于 `@ant-design/web3-solana` 连接 Solana。
  - 基于 `@ant-design/web3-bitcoin` 连接比特币。
  - 基于 `@ant-design/web3-sui` 连接 Sui。
- 自己实现一个适配器，支持连接更多不同的区块链，具体实现方式可以参考[开发适配器](adapter.zh-CN.md)。
- 仅仅使用官方提供的适配器，比如 `@ant-design/web3-solana`，然后完全自定义 UI 组件，在组件中通过 [Web3ConfigProvider](http://localhost:8000/components/web3-config-provider-cn) 消费适配器提供的能力。

## 试试看

下面是通过 `@ant-design/web3-wagmi` 的方式使用 Ant Design Web3 的例子：

<code compact src="./demos/try-it-out/index.tsx"></code>

如果你想要尝试更精细的主题控制，你以尝试我们的[主题编辑器](/theme-editor-cn)，或者查看[主题](./theme.zh-CN.md)文档。

如果你想要进一步学习如何在自己的项目中使用 Ant Design Web3，或者想要从 0 创建一个基于 Ant Design Web3 的项目，你可以继续阅读[快速开始](quick-start.zh-CN.md)，祝你在 Web3 冲浪愉快！🌊🌊🌊

## 为什么使用？

为什么使用 Ant Design Web3？

- 🎨 基于 Ant Design 提供了高质量的 UI 组件。[Ant Design](https://github.com/ant-design/ant-design) 是一套高质量的 UI 基础组件，支持灵活的主题定制，并拥有近十万的 GitHub Stars 和众多的使用者，这让 Ant Design Web3 有了很基础的质量保障。
- 📦 开箱即用的体验，不仅仅提供了用于连接钱包的 `ConnectModal`，还有 `Address`、`NFTCard` 等组件，持续迭代覆盖你在 DApp 开发中可能会遇到的需求，把 Web2 的研发体验带到 Web3。我们也关注用户体验，把 Web2 的用户体验也带到 Web3。
- 🔌 灵活可靠的架构设计，UI 层和适配层分离，使得可以支持不同的区块链和不同的链 SDK，也让组件可以持续稳定的迭代升级。

还有更多特性：

| 特性                                                             | 是否支持 |
| ---------------------------------------------------------------- | -------- |
| [主题定制](https://web3.ant.design/guide/theme-cn)               | ✅       |
| [国际化](https://web3.ant.design/guide/intl-cn)                  | ✅       |
| 测试覆盖率 100%                                                  | ✅       |
| TypeScript 支持                                                  | ✅       |
| 响应式设计                                                       | ✅       |
| 快速简单的连接钱包组件                                           | ✅       |
| [NFT 组件](https://web3.ant.design/components/nft-card-cn)       | ✅       |
| Address 等更多实用组件                                           | ✅       |
| [丰富的图标库](https://web3.ant.design/components/icons-cn)      | ✅       |
| 支持 EIP6963                                                     | ✅       |
| 支持 WalletConnect                                               | ✅       |
| [支持以太坊及其 L2](https://web3.ant.design/components/wagmi-cn) | ✅       |
| [支持比特币](https://web3.ant.design/components/bitcoin-cn)      | ✅       |
| [支持 Solana](https://web3.ant.design/components/solana-cn)      | ✅       |
| [支持 TON](https://web3.ant.design/components/ton-cn)            | ✅       |
| [适配更多非 EVM 链](https://web3.ant.design/guide/adapter-cn)    | ✅       |
| [课程](https://web3.ant.design/course/introduction-cn)           | ✅       |
| 和 wagmi 一起使用                                                | ✅       |
| 和 ethers 一起使用                                               | ✅       |
| 和 web3.js 一起使用                                              | ✅       |
| 和 umi 一起使用                                                  | ✅       |
| 和 Next.js 一起使用                                              | ✅       |
| 和 Remix 一起使用                                                | ✅       |
| 和 Tailwind CSS 一起使用                                         | ✅       |
