---
nav: 组件
subtitle: 加密输入框
group:
  title: UI 组件
  order: 3
---

# CryptoInput

## 代码演示

### 基本使用

<code src="./demos/basic.tsx"></code>

### 支持搜索

<code src="./demos/basic.tsx"></code>

### 关闭默认底部

<code src="./demos/noFooter.tsx"></code>

### 自定义底部

<code src="./demos/customFooter.tsx"></code>

### 自定义头部

<code src="./demos/customHeader.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 加密输入框组件的值 | [CryptoInputValue](#cryptoInputValue) | - | - |
| onChange | 加密输入框组件值变动的回调 | (value?: [CryptoInputValue](#cryptoInputValue)) => void | - | - |
| tokenList | 可选择的代币列表 | [Token](/components/types-cn#token)[] | - | - |
| balance | 代币的余额相关信息，包含数量和单价 | `{ amount: string; unitPrice: string }` | - | - |
| header | 自定义渲染的头部 | (value?: [CryptoInputValue](#cryptoInputValue)) => React.ReactNode | - | - |
| footer | 自定义渲染的底部，不传递时使用默认底部 | (value?: [CryptoInputValue](#cryptoInputValue)) => React.ReactNode | - | - |
| ...props | 其它参数请参照 `TokenSelect` 组件 | [TokenSelect](/components/token-select#api) | - | - |

### CryptoInputValue

| 属性   | 描述           | 类型                                | 默认值 | 版本 |
| ------ | -------------- | ----------------------------------- | ------ | ---- |
| token  | 当前选择的代币 | [Token](/components/types-cn#token) | -      | -    |
| amount | 输入的代币数量 | `string`                            | -      | -    |
