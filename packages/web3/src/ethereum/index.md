---
nav: Components
order: 2
group:
  title: Connect Blockchains
  order: 2
---

# Ethereum

Ant Design Web3 officially provides adapters for multiple frameworks such as `wagmi` and `ethers` to adapt to Ethereum. We recommend using `@ant-design/web3-wagmi`. It is an Ant Design Web3 Ethereum adapter based on [wagmi 2.x](https://wagmi.sh/). It provides the ability to connect to Ethereum and other EVM compatible chains for the components of `@ant-design/web3`.

If you are using wagmi 1.x, you can check [@ant-design/web3-wagmi@1.2.0 documentation](https://github.com/ant-design/ant-design-web3/blob/f7c9d51086f82b13a9cf94353b999348e17001de/packages/web3/src/wagmi/index.md).

Through it, you don't need to handle the connection status of the component, chain data request and other logic by yourself. It will provide relevant global status and interfaces for the components through [Web3ConfigProvider](../web3-config-provider/index.md).

If you want to use `ethers` in your project, we provide the `@ant-design/web3-ethers` adapter, which is compatible with the latest `v6` and `v5` versions. You can [view the documentation](../ethereum-ethersjs/index.md) to use it.

Currently, we officially provide the adapter of Ethereum, and you can also develop your own adapter to support other chains. You can read the [adapter documentation](../../../../docs/guide/adapter.md) to learn more about the adapter.

## Recommended configuration

We support rich configurations of wallets, protocols, and interaction methods. For most DApps, we recommend using the following configuration:

<code src="./demos/recommend.tsx"></code>

The recommended configuration mainly includes:

- Use the EIP6963 protocol and automatically add detected plugin wallets.
- Support displaying ENS.
- By default, add MetaMask and TokenPocket, Okx wallets, and provide download guides when users have not installed wallets.
- By default, add WalletConnect, which supports users to connect various wallets through mobile phone scanning.
- Configure `quickConnect` to provide quick connection entry to simplify user operations.
- Use the `simple` mode to simplify the interface.
- Manually configure `queryClient` for easy subsequent customization of related configurations.

## Customize Wagmi configuration

In general, we do not recommend customizing the wagmi configuration. When you customize the wagmi configuration and pass it to `WagmiWeb3ConfigProvider`, it will override the default configuration we automatically generate.

<code src="./demos/wagmi-config.tsx"></code>

## EIP6963

Automatically add wallets based on EIP6963. Under the [EIP6963](https://eips.ethereum.org/EIPS/eip-6963) protocol, it can avoid conflicts caused by users installing multiple wallets, and can automatically identify the wallets that users have installed.

<code src="./demos/eip6963.tsx"></code>

## Add more wallets

In order to reduce the size of the package, you need to configure `wallets` to import wallets. You can export related resources from `@ant-design/web3-wagmi`. If you don't have the resources you need, you can submit [GitHub issue](https://github.com/ant-design/ant-design-web3/issues) to tell us. You can also configure it yourself or submit a PR to support it.

In addition, we recommend setting `eip6963` to `true` to avoid conflicts when users install multiple wallets. When the `eip6963` is configured, you no longer need to configure the wagmi `injected` Connector. wagmi's [multiInjectedProviderDiscovery](https://wagmi.sh/core/api/createConfig#multiinjectedproviderdiscovery) configuration defaults to `true` and will automatically add detected wallets.

<code src="./demos/more-wallets.tsx">Auto Mode</code>

<code src="./demos/more-wallets-in-simple.tsx">Simple Mode</code>

## Customize wallet information

<code src="./demos/custom-wallet"></code>

## Support switch chains

We have built-in `Mainnet`, and the remaining chains need to configure `chains` to import related resources to support. The import method is similar to the wallet.

<code src="./demos/chains.tsx"></code>

## SIWE

SIWE means Sign-In with Ethereum. Your website can verify user login through signatures. Below is an example where the backend interface is mocked. You need to implement it in your project.

To quickly use SIWE, you need to set three key methods: get the nonce value, construct the signature, and verify the signature.

<code src="./demos/siwe/index.tsx"></code>

## Display ENS and Balance

> You need to connect to an address containing ENS and balance to see the example effect.

<code src="./demos/name.tsx"></code>

## Use web3modal for WalletConnect

When the `showQrModal` configuration is not `false`, the built-in [web3modal](https://web3modal.com/) pop-up window of WalletConnect will be used.

<code src="./demos/web3modal.tsx"></code>

## API

### WagmiWeb3ConfigProviderProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| config | wagmi config | [WagmiConfig](https://wagmi.sh/core/config) | Support for automatically generating configurations such as `chains` and `wallets` is available after `2.8.0` | - |
| queryClient | [React Query](https://react-query.tanstack.com/) queryClient | `new QueryClient()` | - | - |
| wallets | Wallets | [WalletFactory](#walletfactory)[] | - | - |
| chains | Chains | [ChainAssetWithWagmiChain](#chainassetwithwagmichain)\[\] | - | - |
| ens | Whether to display ENS | `boolean` | - | - |
| balance | Whether to display balance | `boolean` | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |
| eip6963 | Whether to use EIP6963 protocol wallet and related configurations | `boolean` \| `EIP6963Config` | `false` | `2.2.0` |
| initialState | Initial state to hydrate into the [Wagmi Config](https://wagmi.sh/react/api/createConfig). Useful for SSR. | [State](https://wagmi.sh/react/api/createConfig#state-1) \| `undefined` | - | - |
| reconnectOnMount | Whether or not to reconnect previously connected [connectors](https://wagmi.sh/react/api/createConfig#connectors) on mount. | `boolean` \| `undefined` | `true` | - |
| walletConnect | WalletConnect configuration | `false` \| [WalletConnectOptions](#walletconnectoptions) | - | `2.8.0` |
| transports | [Transport](https://wagmi.sh/core/api/createConfig#transports) configuration | `Transport` | - | `2.8.0` |
| siwe | [SIWEConfig](#siweconfig) | CreateSiweMessageParameters | - | `2.10.0` |

### WalletFactory

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Wallet name | `Connector` | - | - |
| create | Method for creating a wallet | `(connector: Connector) => Promise<Wallet>` | - | - |

> The above `Connector` refers to the `Connector` in wagmi, and `Wallet` is [Wallet](./types#wallet).

### UniversalWallet

A Class for creating your own wallet, it meets the interface requirements of WalletFactory. For specific use, please refer to the example in [Customize Wallet Information](#customize-wallet-information).

### ChainAssetWithWagmiChain

Based on [Chain](./types#chain)[] adds the `wagmiChain` field to support chain configuration. Import it in a way similar to `import { Mainnet } from '@ant-design/web3-wagmi';`.

### WalletConnectOptions

Based on the [WalletConnectParameters](https://wagmi.sh/core/api/connectors/walletConnect#parameters) configuration, it adds the `useWalletConnectOfficialModal` field to control whether to use the official WalletConnect pop-up window.

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

`CreateSiweMessageParameters` refers to the [definition](https://viem.sh/docs/siwe/utilities/createSiweMessage) in `viem/siwe`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| getNonce | Get Nonce value | `(address: string, chainId?: number) => Promise<string>` | - | - |
| createMessage | Construct signature message | `(args: CreateSiweMessageParameters) => string` | - | - |
| verifyMessage | Verify signature message | `(message: string, signature: string) => Promise<boolean>` | - | - |
