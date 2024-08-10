---
nav: 组件
subtitle: 代币选择器
group:
  title: UI 组件
  order: 3
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*5w_dS5UWbToAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*pk6_R7FY_nkAAAAAAAAAAAAADlrGAQ/original
---

# TokenSelect

代币下拉选择器组件，是 `AntDesign Select` 组件的二次封装，基础 props 请参照 `AntDesign Select`，API 的设计兼容 `AntDesign Form` 可实现快速接入。

## 代码演示

### 基本用法

<code src="./demos/basic.tsx"></code>

### 兜底展示

<code src="./demos/notFoundToken.tsx"></code>

### 带搜索功能

<code src="./demos/withSearch.tsx"></code>

### 多选模式

<code src="./demos/multipltSelect.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 当前选择的代币 | [Token](/components/types-cn#token) | - | - |
| onChange | 选中代币发生变动时的回调 | (token?: [Token](/components/types-cn#token)) => void | - | - |
| tokenList | 可选择的代币列表，已弃用，请使用 `options` API | [Token](/components/types-cn#token)[] | - | - |
| options | 可选择的代币选项 | [Token](/components/types-cn#token)[] | - | - |
| mode | 选择器模式，支持多选模式，默认单选 | `multiple` | - | - |
| ...props | 请参照 AntDesign `Select` 组件 | [Select Props](https://ant-design.antgroup.com/components/select-cn#select-props) | - | - |
