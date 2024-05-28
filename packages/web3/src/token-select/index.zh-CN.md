---
nav: 组件
subtitle: 代币选择器
group:
  title: UI 组件
  order: 3
---

# TokenSelect

代币下拉选择器组件

支持 受控、非受控、调用接口 三类方式实现代币列表的透传，API 的设计也可快速接入 Ant Design 表单。

## 代码演示

### 基本用法

<code src="./demos/basic.tsx"></code>

### 支持清除选中

<code src="./demos/allowClear.tsx"></code>

### 代币列表受控

<code src="./demos/controlTokenList.tsx"></code>

### 通过接口查询代币列表

<code src="./demos/dynamicTokenList.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 选中的代币 | [Token](/components/types-cn#Token)\[\] | - | - |
| onChange | 选中代币时的回调 | (token?: [Token](/components/types-cn#Token)) => void | - | - |
| defaultTokenList | 默认的代币列表（非受控），在组件挂载时初始化代币列表 | [Token](/components/types-cn#Token)[] | - | - |
| queryTokenList | 查询代币列表接口，在每次打开选择器时触发 | () => Promise<[Token](/components/types-cn#Token)[]> | - | - |
| tokenList | 代币列表（受控），优先级高于 `defaultTokenList` 与 `queryTokenList` | [Token](/components/types-cn#Token)[] | - | - |
| allowClear | 是否允许清除 | `boolean` | `false` | - |
