---
nav: 组件
order: 6
group:
  title: 连接链
  order: 2
---

# Sui

Ant Design Web3 官方提供了 `@ant-design/web3-sui` 来适配 Sui。它基于 [@mysten/dapp-kit](https://www.npmjs.com/package/@mysten/dapp-kit) 和 [@mysten/sui](https://www.npmjs.com/package/@mysten/sui) ，为 `@ant-design/web3` 的组件提供了连接 Sui 的能力。

## 推荐配置

对于大部分 Sui DApp 来说，我们推荐使用如下配置：

<code src="./demos/recommend.tsx"></code>

该推荐配置主要包括：

- 自动添加检测到的插件钱包。
- 显示余额。
- 显示 SNS。
- 配置 `quickConnect`，提供快速连接入口，简化用户操作。
- 使用 `simple` 模式，去掉钱包分组，简化界面。

## 自定义 QueryClientProvider

可以直接使用 `PersistQueryClientProvider` 覆盖默认的 `QueryClientProvider`。

<NormalInstallDependencies packageNames="@tanstack/query-sync-storage-persister @tanstack/react-query-persist-client" save="true"></NormalInstallDependencies>

<code src="./demos/query-client.tsx"></code>

## 网络

我们内置了 Sui 主网 `mainnet`，如果想使用其余网络，可以配置 `networkConfig`。

<code src="./demos/networks.tsx"></code>

## 非官方网络

<code src="./demos/networks-unofficial.tsx"></code>

## 更多组件

<code src="./demos/more-components.tsx"></code>

## API

### SuiWeb3ConfigProvider

| 参数           | 说明         | 类型            | 默认值    | 版本 |
| -------------- | ------------ | --------------- | --------- | ---- |
| balance        | 是否显示余额 | boolean         | `false`   | -    |
| autoConnect    | 是否自动连接 | boolean         | `false`   | -    |
| networkConfig  | 网络配置     | NetworkConfig   | -         | -    |
| sns            | 是否显示 SNS | boolean         | `false`   | -    |
| defaultNetwork | 默认网络     | string          | `mainnet` | -    |
| wallets        | 钱包列表     | WalletFactory[] | -         | -    |
| queryClient    | QueryClient  | QueryClient     | -         | -    |
| locale         | 多语言设置   | [Locale]        | -         | -    |

[Locale]: https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts
