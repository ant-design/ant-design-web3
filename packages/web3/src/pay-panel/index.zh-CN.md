---
nav: 组件
subtitle: 收款
group: UI 组件
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*4WV4Qoc-o5YAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*0zPhTLh23NwAAAAAAAAAAAAADlrGAQ/original
---

# PayPanel

用于收款的组件，支持了不同的链通道和一些钱包的快速扫码。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 和 Gas 费用一起使用

预留了放置预估 Gas 的位置，如果想使用的话，你可以自己去实现它。

<code src="./demos/useGasRender.tsx"></code>

## 和 Modal 弹窗一起使用

<code src="./demos/modal.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| target | 支持的链对应的接收地址 | `{ [chainId: string \| number]: string; } \| () => Promise<{ [chainId: string \| number]: string; }>` | - | - |
| supportedChains | 支持的链信息 | `{chain: Chain, extra?: React.ReactNode}[]` | - | - |
| token | Token 的信息 | `Token` | - | - |
| amount | 带小数位数的数量 | `number \| bigint` | - | - |
| wallets | 支持的钱包列表 | `WalletMetadata[]` | - | - |
| onFinish | 点击完成的回调 | `() => void` | - | - |

### Token

| 属性            | 描述         | 类型                                  | 默认值 | 版本 |
| --------------- | ------------ | ------------------------------------- | ------ | ---- |
| name            | 名字         | `string`                              | -      | -    |
| symbol          | 符号         | `string`                              | -      | -    |
| decimal         | 小数位数     | `number`                              | -      | -    |
| icon            | Logo         | `React.ReactNode`                     | -      | -    |
| availableChains | 可以使用的链 | `{chain: Chain; contract: string;}[]` | -      | -    |
