---
nav: Guide
group: Basic
order: 3
---

# Internationalization

We provide multiple ways to support multilingual internationalization:

- Through the `locale` configuration provided by the component, you can implement internationalization within the component.
- Through the `locale` configuration in [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.md), you can implement global configuration.
- Use the built-in language pack. In `@ant-design/web3`, we provide some multilingual support built-in.

<code src="./demos/intl.tsx">Component configuration</code>

<code src="./demos/intl-with-provider.tsx">Global configuration</code>

<code src="./demos/intl-with-builtin.tsx">Built-in language</code>

For the specific language configuration content supported, please refer to the [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) type definition. For languages and components that are not yet supported, please submit a [Pull request](https://github.com/ant-design/ant-design-web3/pulls) to support.

In addition, in `@ant-design/web3-wagmi`, `WagmiWeb3ConfigProviderProps` will pass `locale` to `Web3ConfigProvider` to simplify your use.
