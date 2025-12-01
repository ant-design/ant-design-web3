---
nav: 组件
subtitle: Internet Computer
order: 6
group:
  title: 连接链
  order: 2
tag:
  title: 新增
  color: success
---

## 介绍

`@ant-design/web3-icp` 提供了对 ICP 链的基础适配能力，目前内置支持 **Plug** 钱包，后续可以按需扩展更多 ICP 钱包。

本页示例展示如何通过 `IcpWeb3ConfigProvider` 和 `ConnectButton` 快速接入 ICP 链的钱包连接能力。

> 📎 如果需要提前登录官方 NNS 门户，可直接访问 [https://nns.ic0.app/](https://nns.ic0.app/)，先在该站点完成 ICP 账号授权与登录，再回到页面体验连接流程。

## 何时使用

- 需要在 DApp 中集成 ICP 链的钱包连接能力；
- 已经在使用 `@ant-design/web3` 的通用 UI 组件（如 `ConnectButton`），希望统一体验；
- 只需要 Plug 钱包的最小接入，后续再逐步扩充。

## 代码演示

### 基础用法

<code src="./demos/basic.tsx"></code>
