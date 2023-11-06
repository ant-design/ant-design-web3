---
nav: 指南
group: 高级
---

# 和 wagmi 一起使用

你可以通过我们提供的 `@ant-design/web3-wagmi` 简单便捷地和 [wagmi](https://wagmi.sh/) 一起使用。wagmi 是一个面向以太坊的 React Hooks 库，它不提供 UI，Ant Design Web3 可以作为它的一个很好的补充。

另外通过 `@ant-design/web3-wagmi`，Ant Design Web3 的组件可以基于 wagmi 提供的 Hooks 更加便捷可靠地连接到区块链，使用的示例如下：

```tsx | pure
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { NFTImage } from '@ant-design/web3';

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <WagmiWeb3ConfigProvider>
        <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42} />
      </WagmiWeb3ConfigProvider>
    </WagmiConfig>
  );
}
```

除了需要引入 `WagmiWeb3ConfigProvider` 外，你完全不需要改变 wagmi 的任何用法。

## 使用示例

<code src="../../packages/web3/src/connect-button/demos/wagmi.tsx"></code>
