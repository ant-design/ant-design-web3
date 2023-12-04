---
nav: 组件
group: 连接
order: 2
---

# ConnectModal

连接钱包弹窗，与 [ConnectButton](../connect-button/index.zh-CN.md) 配合使用完成钱包的链接流程。通常来说，你只要直接使用 [Connector](../connector/index.zh-CN.md) 组件即可。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 简洁模式

<code src="./demos/simple.tsx"></code>

## 暗黑模式

<code src="./demos/dark.tsx"></code>

## 自定义主题色

<code src="./demos/theme.tsx"></code>

## API

### ConnectModalProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | ConnectModal 的标题，与 Modal 的 title 类型相同 | `ModalProps['title']` | - | - |
| open | 弹框是否展示，与 Modal 的 open 类型相同 | `ModalProps['open']` | - | - |
| onOpenChange | 弹框可见性改变回调 | `(open: boolean) => void` | - | - |
| onSelectWallet | 选中钱包回调 | `(wallet: Wallet) => void` | - | - |
| modalProps | 透传 Modal 的 props | `ModalProps` | - | - |
| prefixCls | class 前缀 | `string` | - | - |
| footer | 自定义 footer | `React.ReactNode` | - | - |
| walletList | 钱包列表 | [Wallet](./types#wallet)\[\] | - | - |
| groupOrder | 钱包分组排序函数 | `(a: string, b: string) => number` | - | - |
| guide | 新手指引面板 | `false \| null` | [DefaultGuide](#defaultguide) | - |
| className | 自定义类名 | `string` | - | - |

### DefaultGuide

| 属性     | 描述                   | 类型                               | 默认值 | 版本 |
| -------- | ---------------------- | ---------------------------------- | ------ | ---- |
| title    | 新手指引面板的标题     | `string`                           | -      | -    |
| infos    | 新手指引面板的信息列表 | [GuideInfoItem](#guideinfoitem)\[] | -      | -    |
| moreLink | 新手指引面板的更多链接 | `string`                           | -      | -    |

### GuideInfoItem

| 属性        | 描述                     | 类型                        | 默认值 | 版本 |
| ----------- | ------------------------ | --------------------------- | ------ | ---- |
| title       | 新手指引面板的信息项标题 | `string \| React.ReactNode` | -      | -    |
| icon        | 新手指引面板的信息项图标 | `string \| React.ReactNode` | -      | -    |
| description | 新手指引面板的信息项描述 | `string \| React.ReactNode` | -      | -    |
