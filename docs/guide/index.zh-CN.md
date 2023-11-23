---
nav: 指南
group: 基础
---

# 快速开始

<!-- prettier-ignore -->
:::warning
Ant Design Web3 还在 *ALPHA* 中，我们正在不断完善，如有建议欢迎通过 [Github Issue](https://github.com/ant-design/ant-design-web3/issues) 给我们提建议。 
:::

## 安装依赖

你可以通过 `npm` 或者 `pnpm` 等包管理工具安装相关依赖，示例如下：

```shell
npm i @ant-design/web3 @ant-design/web3-ethereum --save
```

## 使用 UI 组件

`@ant-design/web3` 是一个纯 UI 组件，你可以直接使用它，比如你可以用 `BrowserLink`：

```tsx | pure
import { BrowserLink } from '@ant-design/web3';

export default () => {
  return <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />;
};
```

## 连接区块链

你也可以通过引入 `@ant-design/web3-ethereum` 中的 `EthereumProvider` 让一些 UI 组件可以连接到区块链。比如下面的示例展示了如何通过 `NFTImage` 组件显示一个 NFT 图片。示例中，通过 [zan.top](https://zan.top/) 提供的区块链节点服务可以请求 NFT 数据，你只需要向组件传入 `address` 和 `tokenId` 即可。

```tsx | pure
import { EthereumProvider, createProvider, ZANJsonRpcProvider } from '@ant-design/web3-ethereum';
import { NFTImage } from '@ant-design/web3';

const provider = createProvider({
  rpcs: [
    new ZANJsonRpcProvider({
      apiKey: 'd0eeefc2a4da4a8ba707889259b437d6',
    }),
  ],
});

export default () => {
  return (
    <EthereumProvider provider={provider}>
      <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42} />
    </EthereumProvider>
  );
};
```
