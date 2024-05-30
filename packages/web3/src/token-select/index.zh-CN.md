---
nav: 组件
subtitle: 代币选择器
group:
  title: UI 组件
  order: 3
---

# TokenSelect

代币下拉选择器组件，是 `AntDesign Select` 组件的二次封装，基础 props 请参照 `AntDesign Select`

支持 `受控` 以及 `调用接口查询` 两类方式实现代币列表的传递，API 的设计也可快速接入 `AntDesign Form`。

## 代码演示

### 基本用法

<code src="./demos/basic.tsx"></code>

### 带搜索功能

<code src="./demos/withSearch.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| tokenList | 可选择的代币列表 | [Token](/components/types-cn#Token)[] | - | - |
| ...props | 请参照 AntDesign `Select` 组件 | [Select Props](https://ant-design.antgroup.com/components/select-cn#select-props) | - | - |
