---
nav: Components
subtitle: ICP
order: 6
group:
  title: Chains
  order: 2
---

## Introduction

`@ant-design/web3-icp` provides basic adaptation for the ICP chain and currently ships with **Plug** wallet support out of the box.

This page shows how to integrate ICP wallet connection via `IcpWeb3ConfigProvider` together with `ConnectButton`.

> 📎 Need to log in through the official NNS portal first? Visit [https://nns.ic0.app/](https://nns.ic0.app/) to authorize your ICP account / login, then come back to experience the connection flow.

## When to use

- You need to integrate ICP wallet connection into your DApp;
- You are already using `@ant-design/web3` UI components (such as `ConnectButton`) and want a unified user experience;
- You only need a minimal Plug integration for now and will extend more wallets later.

## Examples

### Basic usage

<code src="./demos/basic.tsx"></code>
