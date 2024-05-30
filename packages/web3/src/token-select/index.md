---
nav: Components
group:
  title: UI Components
  order: 3
---

# TokenSelect

Token dropdown selector component

Supports two types of token list transmission: `controlled` and `interface call`.The API design also allows quick integration with `AntDesign Form`.

## Demo

### Basic Usage

<code src="./demos/basic.tsx"></code>

### Select with search

<code src="./demos/withSearch.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| tokenList | selectable token list | [Token](/components/types-cn#Token)[] | - | - |
| ...props | Please Reference AntDesign `Select` 组件 | [Select Props](https://ant-design.antgroup.com/components/select-cn#select-props) | - | - |
