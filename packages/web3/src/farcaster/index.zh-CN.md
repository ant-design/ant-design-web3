---
nav: 组件
subtitle: Farcaster
group:
  title: 连接其他协议
  order: 3
---

# Farcaster

Ant Design Web3 官方提供了 `@ant-design/web3-farcaster`，支持 [Farcaster](https://docs.farcaster.xyz/) 生态的相关开发。

目前提供了开箱即用的 [Warpcast](https://warpcast.com/) 扫码登陆，即通过封装官方组件 `@farcaster/auth-kit`，在保持 `@ant-design/web3` UI 组件风格的基础上，使得开发者无需关注登陆逻辑，同时获取所有登陆相关数据。

## 扫码登陆 Farcaster 账户

<code src="./demos/login.tsx"></code>

## API

### FarcasterWeb3ConfigProvider

包含了所有 [useSignIn](https://docs.farcaster.xyz/auth-kit/hooks/use-sign-in) 的入参及下表参数

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| config | AuthKitConfig | [AuthKitConfig](https://docs.farcaster.xyz/auth-kit/auth-kit-provider) | `{}` | - |

### useFarcaster

包含了所有 [useSignIn](https://docs.farcaster.xyz/auth-kit/hooks/use-sign-in) 的返回及下表属性

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| farcasterSupported | 是否支持 farcaster 登陆方式，即被 FarcasterWeb3ConfigProvider 包裹时返回 true | `boolean` | `false` | - |
| farcasterLogin | 启动 farcaster 扫码登陆监听 | `() => void` | `() => {}` | - |
