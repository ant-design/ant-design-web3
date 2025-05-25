---
nav: 组件
subtitle: 连接钱包弹窗
group: UI 组件
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*mUC3SYLpq0AAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*dmHOSI_kdd0AAAAAAAAAAAAADlrGAQ/original
---

# ConnectModal

连接钱包弹窗，与 [ConnectButton](../connect-button/index.zh-CN.md) 配合使用完成钱包的链接流程。通常来说，你只要直接使用 [Connector](../connector/index.zh-CN.md) 组件即可。

> 注：**本文档中的示例仅仅是纯 UI 的示例**，在 Ant Design Web3 中。UI 模块和连接模块是分离的。要想真正的连接钱包，请参考[以太坊适配器](../ethereum/index.zh-CN.md)的文档，或阅读[适配器文档](../../../../docs/guide/adapter.zh-CN.md)了解更多。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 钱包不进行分组

<code src="./demos/ungroupedBasic.tsx"></code>

## 自定义主题

<code src="./demos/theme.tsx"></code>

## 面板方式嵌入

<code src="./demos/panel.tsx"></code>

## 简洁模式

<code src="./demos/simple.tsx"></code>

## 线框模式

<code src="./demos/wireframe.tsx"></code>

## 暗黑模式

<code src="./demos/dark.tsx"></code>

## 自定义新手指引面板

<code src="./demos/customGuide.tsx"></code>

## 自定义 Footer

<code src="./demos/footer.tsx"></code>

## 空状态

<code src="./demos/empty.tsx"></code>

## 禁用状态

<code src="./demos/disabled.tsx"></code>

## 自定义 Banner

<code src="./demos/banner.tsx"></code>

## API

### ConnectModalProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 自定义连接弹窗标题 | `React.ReactNode` | - | - |
| onWalletSelected | 选中钱包回调 | `(wallet: Wallet, options?: ConnectOptions) => void` | - | - |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | `(e:React.SyntheticEvent) => void` | - | - |
| footer | 自定义 footer | `React.ReactNode` | - | - |
| banner | 自定义 banner | `React.ReactNode` | - | `1.24.0` |
| walletList | 钱包列表 | [Wallet](./types#wallet)\[\] | - | - |
| group | 钱包是否需要分组 | `boolean` \| `{groupOrder: (a: string, b: string) => number}` | 有多个分组情况下为 `true` | - |
| mode | 弹窗模式 | `'simple' \| 'normal' \| 'auto'` | `'auto'` | - |
| guide | 新手指引内容 | `DefaultGuide` | [DefaultGuide](#defaultguide) | - |
| actionRef | 用于控制组件 | `MutableRefObject<ConnectModalActionType>` | - | - |
| defaultSelectedWallet | 默认选中的钱包 | `Wallet` | - | - |
| locale | 多语言设置 | `Locale["ConnectModal"]` | - | - |
| connecting | 是否正在连接 | `boolean` \| `{ status: 'connecting \| 'signing'}` | - | - |
| emptyProps | 空状态属性 | `EmptyProps` | `{image: Empty.PRESENTED_IMAGE_SIMPLE, description: "未发现任何钱包"}` | `1.18.0` |
| disabled | 是否禁用钱包连接功能 | `boolean` | `false` | `1.24.0` |

其他弹框属性详见： [ModalProps](https://ant.design/components/modal-cn#api)

### DefaultGuide

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 新手指引面板的标题 | `string` | - | - |
| infos | 新手指引面板的信息列表 | [GuideInfoItem](#guideinfoitem)\[] | - | - |
| moreLink | 新手指引面板的更多链接 | `string` | - | - |
| getWalletBtnText | 新手指引面板的获取钱包按钮文案 | `string` | - | - |
| moreLinkText | 新手指引面板的更多链接文案 | `string` | - | - |

### GuideInfoItem

| 属性        | 描述                     | 类型                        | 默认值 | 版本 |
| ----------- | ------------------------ | --------------------------- | ------ | ---- |
| title       | 新手指引面板的信息项标题 | `string \| React.ReactNode` | -      | -    |
| icon        | 新手指引面板的信息项图标 | `string \| React.ReactNode` | -      | -    |
| description | 新手指引面板的信息项描述 | `string \| React.ReactNode` | -      | -    |

### ConnectModal.ModalPanel

除了和控制弹窗相关属性外，其它和 `ConnectModal` 相同。

## 主题变量（Design Token）

| Token 名称           | 描述               | 类型     | 默认值                      |
| -------------------- | ------------------ | -------- | --------------------------- |
| selectedWalletBg     | 选中钱包的背景色   | `string` | `rgb(39, 39, 39)`           |
| selectedWalletColor  | 选中钱包的颜色     | `string` | `#141414`                   |
| hoverWalletBg        | 悬停钱包的背景色   | `string` | `rgb(39, 39, 39)`           |
| panelSplitLineColor  | 面板分割线颜色     | `string` | `rgba(255, 255, 255, 0.06)` |
| modalTitleStartColor | 弹窗标题起始颜色   | `string` | `#1668dc`                   |
| modalTitleEndColor   | 弹窗标题结束颜色   | `string` | `rgba(255, 255, 255, 0.85)` |
| walletGroupTextColor | 钱包分组文字颜色   | `string` | `rgba(255, 255, 255, 0.65)` |
| descriptionColor     | 描述文字颜色       | `string` | `rgba(255, 255, 255, 0.65)` |
| getWalletCardBg      | 获取钱包卡片背景色 | `string` | `rgba(255, 255, 255, 0.03)` |
| walletIconSize       | 钱包图标大小       | `number` | `32`                        |
| simpleGuideBg        | 简易指引背景色     | `string` | `rgba(255, 255, 255, 0.06)` |
| walletListWidth      | 钱包列表宽度       | `number` | `328`                       |
| walletListHeight     | 钱包列表高度       | `number` | `436`                       |
| modalMinHeight       | 弹窗最小高度       | `number` | `518`                       |
