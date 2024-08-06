---
nav: Components
order: 6
group:
  title: Connect Blockchains
  order: 2
---

# Sui

Ant Design Web3 officially provides `@ant-design/web3-sui` to adapt to Sui. It is an Ant Design Web3 Sui adapter based on [@mysten/dapp-kit](https://www.npmjs.com/package/@mysten/dapp-kit) and [@mysten/sui](https://www.npmjs.com/package/@mysten/sui).

## Recommended configuration

For most Sui DApps, we recommend the following configuration:

<code src="./demos/recommend.tsx"></code>

The recommended configuration mainly includes:

- Automatically add detected plugin wallets.
- Display balance.
- Display SNS.
- Configure `quickConnect` to provide a quick connection entry to simplify user operations.
- Use the `simple` mode to remove wallet grouping and simplify the interface.

## Custom QueryClientProvider

You can use `PersistQueryClientProvider` to override the default `QueryClientProvider`.

<NormalInstallDependencies packageNames="@tanstack/query-sync-storage-persister @tanstack/react-query-persist-client" save="true"></NormalInstallDependencies>

<code src="./demos/query-client.tsx"></code>

## Networks

We have built-in the Sui mainnet `mainnet`. If you want to use other networks, you can configure `networkConfig`.

<code src="./demos/networks.tsx"></code>

## Unofficial networks

<code src="./demos/networks-unofficial.tsx"></code>

## More Components

<code src="./demos/more-components.tsx"></code>

## API

### SuiWeb3ConfigProvider

| Property       | Description                      | Type            | Default   | Version |
| -------------- | -------------------------------- | --------------- | --------- | ------- |
| balance        | Whether to display the balance   | boolean         | `false`   | -       |
| autoConnect    | Whether to connect automatically | boolean         | `false`   | -       |
| networkConfig  | Network configuration            | NetworkConfig   | -         | -       |
| sns            | Whether to display SNS           | boolean         | `false`   | -       |
| defaultNetwork | Default network                  | string          | `mainnet` | -       |
| wallets        | Wallet list                      | WalletFactory[] | -         | -       |
| queryClient    | QueryClient                      | QueryClient     | -         | -       |
| locale         | Multilingual settings            | [Locale]        | -         | -       |

[Locale]: https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts
