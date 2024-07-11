---
nav: 组件
subtitle: 以太坊
order: 3
group:
  title: 连接链
  order: 2
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*T2_iTYHBEn4AAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9nWCTYpaq74AAAAAAAAAAAAADlrGAQ/original
---

# Ethereum (ethersjs)

熟悉 `ethers` 的开发者可以安装 `@ant-design/web3-ethers` 配合组件库使用，其中绝大部份用法都与 `wagmi` 适配器一致。

<NormalInstallDependencies packageNames="@ant-design/web3 @ant-design/web3-ethers ethers" save="true"></NormalInstallDependencies>

### 基本使用

这个例子展示了使用 `ethers` 适配器的基本用法。我们提供了两个 react hooks 来获取 `provider` 和 `signer`，你可以在组件中使用它们来进行链上操作：

- `useEthersProvider`: 获取 `ethers` 的 `Provider` 实例。
- `useEthersSigner`: 获取 `ethers` 的 `Signer` 实例。

<code src="./demos/ethers-basic.tsx"></code>

### Ethers 旧版本兼容

如果您是 `ethers@5.x` 的用户，可以手动安装 v5 版本的 ethers，并修改适配器的引入方式，v5 以前的版本不再提供支持，建议升级到最新版本后使用：

<NormalInstallDependencies packageNames="@ant-design/web3 @ant-design/web3-ethers-v5 ethers@legacy-v5" save="true"></NormalInstallDependencies>

```tsx | pure
import { EthersWeb3ConfigProvider, useEthersProvider } from '@ant-design/web3-ethers-v5'; // 引入 ethers@5.x 的适配器

const Component = () => {
  const provider = useEthersProvider();
  // do something with provider
};

const App = () => {
  return (
    <EthersWeb3ConfigProvider>
      <Component />
    </EthersWeb3ConfigProvider>
  );
};
```

### EthersWeb3ConfigProviderProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| wallets | 钱包配置 | [WalletFactory](#walletfactory)\[\] | - | - |
| chains | 链的配置 | [Chain](./types#chain)\[\] | - | - |
| ens | 是否显示 ENS | `boolean` | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| eip6963 | 是否采用 EIP6963 协议钱包以及相关配置 | `boolean` \| `EIP6963Config` | `false` |  |
| walletConnect | 是否采用 Wallet Connect 协议 | `false` \| [WalletConnectOptions](https://wagmi.sh/core/api/connectors/walletConnect#parameters) | `false` |  |
| storage | 在 session 之间同步状态的存储配置 | `false` \| [WagmiStorage](https://wagmi.sh/core/api/createStorage) | - | `next` |
