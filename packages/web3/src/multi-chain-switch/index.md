---
nav: Components
group:
  title: Advanced
  order: 4
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*agi7R62kJMQAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*DuEdT5NT9nwAAAAAAAAAAAAADlrGAQ/original
---

# Multi-Chain Switch

Support switching between multiple chains in the same project without page flickering.

## Basic Usage

When you have multiple chain providers in your project, you can use the `ignoreConfig` prop to control which provider's configuration should be active. Only the active provider should not have `ignoreConfig` set to `true`.

<code src="./demos/multi-chain-switch.tsx"></code>

## How It Works

- When `ignoreConfig` is `true`, the provider's configuration will be ignored when merging with parent context
- This allows multiple chain providers to coexist without interfering with each other
- Only the active provider (without `ignoreConfig` or with `ignoreConfig={false}`) will provide its configuration to child components
- This prevents page flickering when switching between chains

## API

The `ignoreConfig` prop is available on:

- `Web3ConfigProvider`
- `WagmiWeb3ConfigProvider`
- `SuiWeb3ConfigProvider`
- `SolanaWeb3ConfigProvider`
- `TronWeb3ConfigProvider`
- `TonWeb3ConfigProvider`
- And other chain-specific providers

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| ignoreConfig | If true, this provider's configuration will be ignored when merging with parent context | `boolean` | `false` |

## Best Practices

1. Always set `ignoreConfig={true}` on inactive chain providers
2. Only the active provider should have `ignoreConfig` set to `false` or undefined
3. Use state management to control which chain is active
4. This pattern works best when all providers are mounted but only one is active at a time
