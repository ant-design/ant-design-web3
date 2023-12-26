---
nav: Guide
group: Basic
order: 3
---

# Internationalization

We provide two ways to support multilingual internationalization:

- Through the `locale` configuration provided by the component, you can implement internationalization within the component.
- Through the `locale` configuration in [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.md), you can implement global configuration.

<code src="./demos/intl.tsx">Component configuration</code>

<code src="./demos/intl-with-provider.tsx">Global configuration</code>

In addition, in `@ant-design/web3-wagmi`, `WagmiWeb3ConfigProviderProps` will pass `locale` to `Web3ConfigProvider` to simplify your use.
