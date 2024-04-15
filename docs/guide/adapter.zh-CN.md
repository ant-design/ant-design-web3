---
nav: 指南
group:
  title: 高级
  order: 2
---

# 适配器

## 什么是适配器

为了让 Ant Design Web3 更加灵活，也为了可以支持更多类型的区块链，以及更好维护。我们将 Ant Design Web3 拆分为了多个包。

其中 `@ant-design/web3` 作为最核心的模块，它包含了一系列 UI 组件。这些 UI 组件是纯粹的 React 组件，你可以直接使用它们.

但是如果开发者仅仅是使用这部分 UI 组件，那么和区块链交互的部分还需要开发者自行实现。比如连接区块链，获取区块链信息等接口都需要开发者自行实现。

所以，我们提出了适配器的概念，适配器可以连接 Ant Design Web3 UI 组件和区块链，让这些 UI 组件可以快速连接上区块链。比如，当你使用了 [@ant-design/web3-wagmi](../../packages/web3/src/ethereum/index.zh-CN.md)后，`Connector`、`NFTCard` 等组件就可以直接连接上以太坊了。

## 适配器是如何工作的？

在 `@ant-design/web3-common` 的[类型](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/types.ts)中，我们定义了 [UniversalWeb3ProviderInterface](../../packages/web3/src/types/index.zh-CN.md#universalweb3providerinterface)。

在 `@ant-design/web3` 中你可以通过 [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.zh-CN.md) 全局配置 `UniversalWeb3ProviderInterface`，Ant Design Web3 的组件会通过 React Context 获取到相关内容并使用。而适配器则是通过帮你配置了这些属性而实现相关功能，当然你也可以自己通过全局配置 `Web3ConfigProvider` 来实现和适配器类似的功能。实际上，开发适配器便是基于这个逻辑。

## 开发适配器

如上面部分所说，你可以通过 [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.zh-CN.md) 来给 UI 组件提供和链交互的相关功能。我们目前基于 [wagmi](https://wagmi.sh/) 实现了以太坊的适配，你可以参考它的实现来帮助 Ant Design Web3 适配更多的区块链。下面的代码就是一个简单的适配器的简单实现示例：

<code src="./demos/adapter.tsx"></code>

更多内容你可以参考 `@ant-design/web3-wagmi` 的[实现代码](https://github.com/ant-design/ant-design-web3/tree/main/packages/wagmi)。
