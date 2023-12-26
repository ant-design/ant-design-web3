---
nav: 指南
group: 基础
order: 3
---

# 国际化

我们提供了多种方式支持多语言国际化：

- 通过组件提供的 `locale` 配置，可以实现组件内部的国际化。
- 通过在 [Web3ConfigProvider](../../packages/web3/src/web3-config-provider/index.zh-CN.md) 中配置 `locale` 实现全局的配置。
- 使用内置的语言包，在 `@ant-design/web3` 中，我们内置提供了一些多语言的支持。

<code src="./demos/intl.tsx">组件内配置</code>

<code src="./demos/intl-with-provider.tsx">全局配置</code>

<code src="./demos/intl-with-builtin.tsx">内置语言</code>

具体支持的语言配置内容参考 [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) 类型定义，对于还不支持的语言和组件，欢迎给我们提交 [Pull request](https://github.com/ant-design/ant-design-web3/pulls) 支持。

另外，在 `@ant-design/web3-wagmi` 中，`WagmiWeb3ConfigProviderProps` 将会透传 `locale` 给 `Web3ConfigProvider` 以简化你的使用。
