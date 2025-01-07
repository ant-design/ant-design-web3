---
nav: 组件
subtitle: 以太坊
order: 2
group:
  title: 连接链
  order: 2
---

# Ethereum

Ant Design Web3 官方提供了 `wagmi`、`ethers` 等多个框架的适配器来适配以太坊，我们推荐使用 `@ant-design/web3-wagmi`，它是一个基于 [wagmi 2.x](https://wagmi.sh/) 的 Ant Design Web3 以太坊适配器。它为 `@ant-design/web3` 的组件提供了连接以太坊等 EVM 兼容链的能力。通过它，你不需要自己处理组件的连接状态，链数据请求等逻辑。它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。

如果你使用的是 wagmi 1.x，你可以查看 [@ant-design/web3-wagmi@1.2.0 文档](https://github.com/ant-design/ant-design-web3/blob/f7c9d51086f82b13a9cf94353b999348e17001de/packages/web3/src/wagmi/index.zh-CN.md)。

如果你希望在项目中使用 `ethers`，我们提供了 `@ant-design/web3-ethers` 适配器，它兼容最新的 `v6` 和 `v5` 版本，你可以[查看文档](../ethereum-ethersjs/index.zh-CN.md)使用。

目前，我们官方提供了该以太坊的适配器，你也可以自己开发适配器来支持其它的链，关于适配器，你可以阅读[适配器文档](../../../../docs/guide/adapter.zh-CN.md)了解更多。

## 推荐配置

我们支持配置丰富的钱包、协议和交互方式，对于大部分 DApp 来说，我们基于对 DApp 用户的习惯分析，推荐使用如下配置：

<code src="./demos/recommend.tsx"></code>

该推荐配置主要包括：

- 使用 EIP6963 协议，并自动添加检测到的插件钱包。
- 支持显示 ENS。
- 默认添加 MetaMask 和 TokenPocket、Okx 钱包，在用户未安装钱包情况下提供下载引导。
- 默认添加 WalletConnect，支持用户通过手机扫码连接各类钱包。
- 配置 `quickConnect`，提供快速连接入口，简化用户操作。
- 使用 `simple` 模式，简化界面。
- 手动配置 `queryClient`，方便后续自定义相关配置。

## 自定义 Wagmi 配置

通常情况下，我们不推荐你自定义 wagmi 配置，当你自定义 wagmi 配置并传入 `WagmiWeb3ConfigProvider` 时，会覆盖我们自动生成的默认配置。

<code src="./demos/wagmi-config.tsx"></code>

## EIP6963

基于 EIP6963 自动添加钱包，在 [EIP6963](https://eips.ethereum.org/EIPS/eip-6963) 协议下，可以避免用户安装多个钱包导致的冲突，以及可以自动识别到用户已经安装的钱包。

<code src="./demos/eip6963.tsx"></code>

## 添加更多钱包

为了降低引入包的大小，你需要手动配置 `wallets` 引入相关钱包。你可以从 `@ant-design/web3-wagmi` 中导出相关资源，如果没有你需要的资源，你可以通过提交 [GitHub issue](https://github.com/ant-design/ant-design-web3/issues) 告诉我们。也自己配置或者给我们提交 PR 支持。

另外，我们推荐设置 `eip6963` 为 `true`，避免用户安装多个钱包情况下出现冲突。配置了 `eip6963` 的情况下，你不再需要配置 wagmi 的 `injected` Connector, wagmi 的 [multiInjectedProviderDiscovery](https://wagmi.sh/core/api/createConfig#multiinjectedproviderdiscovery) 配置默认为 `true`，会自动添加检测到的钱包。

<code src="./demos/more-wallets.tsx">Normal Mode</code>

<code src="./demos/more-wallets-in-simple.tsx">Simple Mode</code>

## 自定义钱包信息

<code src="./demos/custom-wallet"></code>

## 支持切换链

我们内置了 `Mainnet`，其余的链需要配置 `chains`，引入相关资源才可支持。引入方式和钱包类似。

<code src="./demos/chains.tsx"></code>

## SIWE

SIWE 是指 Sign-In with Ethereum，你的网站可以通过签名来验证用户的登录，下面是一个示例，其中后端接口做了 Mock，你需要在你的项目中自行实现。

要想要快速使用 SIWE 需要设置三个关键的方法，获取 Nonce 值、构建签名以及验证签名。

<code src="./demos/siwe/index.tsx"></code>

## 显示 ENS 和余额

> 你需要连接包含 ENS 和余额 的地址才能看到示例效果

<code src="./demos/name.tsx"></code>

## 使用 web3modal 连接 WalletConnect

当 `showQrModal` 配置不为 `false` 时，会使用 WallectConnect 自带的 [web3modal](https://web3modal.com/) 弹窗。

<code src="./demos/web3modal.tsx"></code>

## API

### WagmiWeb3ConfigProviderProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| config | wagmi 配置 | [WagmiConfig](https://wagmi.sh/core/config) | `2.8.0` 后支持通过 `chains` 和 `wallets` 等配置自动生成 | - |
| queryClient | [TanStack Query](https://wagmi.sh/react/guides/tanstack-query) 实例 | `new QueryClient()` | - | - |
| wallets | 钱包配置 | [WalletFactory](#walletfactory)\[\] | - | - |
| chains | 链的配置 | [ChainAssetWithWagmiChain](#chainassetwithwagmichain)\[\] | - | - |
| ens | 是否显示 ENS | `boolean` | - | - |
| balance | 是否显示余额 | `boolean` | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |
| eip6963 | 是否采用 EIP6963 协议钱包以及相关配置 | `boolean` \| `EIP6963Config` | `false` | `2.2.0` |
| initialState | [Wagmi 配置](https://wagmi.sh/react/api/createConfig)的初始状态，用于 SSR 预填充数据 | [State](https://wagmi.sh/core/config) \| `undefined` | - | - |
| reconnectOnMount | 是否在组件挂载时重新连接之前已连接的[连接器](https://wagmi.sh/react/api/createConfig#connectors) | `boolean` \| `undefined` | `true` | - |
| walletConnect | walletConnect 的配置 | `false` \| [WalletConnectOptions](#walletconnectoptions) | - | `2.8.0` |
| transports | [Transport](https://wagmi.sh/core/api/createConfig#transports) 网关配置 | `Record<number, Transport>;` | - | `2.8.0` |
| siwe | [SIWEConfig](#siweconfig) | CreateSiweMessageParameters | - | `2.10.0` |

### EIP6963Config

| 属性                   | 描述                     | 类型      | 默认值  | 版本    |
| ---------------------- | ------------------------ | --------- | ------- | ------- |
| autoAddInjectedWallets | 是否自动添加检测到的钱包 | `boolean` | `false` | `2.2.0` |

### WalletFactory

| 属性   | 描述           | 类型                                        | 默认值 | 版本 |
| ------ | -------------- | ------------------------------------------- | ------ | ---- |
| name   | 钱包名称       | `Connector`                                 | -      | -    |
| create | 创建钱包的方法 | `(connector: Connector) => Promise<Wallet>` | -      | -    |

> 上面的 ` Connector` 是指 wagmi 中的 `Connector`，`Wallet` 则是 [Wallet](./types#wallet)。

### UniversalWallet

用于自己定钱包的类，它满足 WalletFactory 的接口要求。具体使用可以参考[自定义钱包信息](#自定义钱包信息)的示例。

### ChainAssetWithWagmiChain

基于 [Chain](./types#chain)[] 新增了 `wagmiChain` 字段，用于支持链的配置。通过类似 `import { Mainnet } from '@ant-design/web3-wagmi';` 的方式引入。

### WalletConnectOptions

基于 wagmi [WalletConnectParameters](https://wagmi.sh/core/api/connectors/walletConnect#parameters) 配置，做了处理，新增了 `useWalletConnectOfficialModal` 字段，用于控制是否使用 WalletConnect 官方的弹窗。

```ts
export interface WalletConnectOptions
  extends Pick<
    WalletConnectParameters,
    | 'disableProviderPing'
    | 'isNewChainsStale'
    | 'projectId'
    | 'metadata'
    | 'relayUrl'
    | 'storageOptions'
    | 'qrModalOptions'
  > {
  useWalletConnectOfficialModal?: boolean;
}
```

### SIWEConfig

`CreateSiweMessageParameters` 参考了 `viem/siwe` 的[定义](https://viem.sh/docs/siwe/utilities/createSiweMessage)。

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| getNonce | 获取 Nonce 值 | `(address: string, chainId?: number) => Promise<string>` | - | - |
| createMessage | 构建签名信息 | `(args: CreateSiweMessageParameters) => string` | - | - |
| verifyMessage | 验证签名信息 | `(message: string, signature: string) => Promise<boolean>` | - | - |
