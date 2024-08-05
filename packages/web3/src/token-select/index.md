---
nav: Components
group:
  title: UI Components
  order: 3
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*5w_dS5UWbToAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*pk6_R7FY_nkAAAAAAAAAAAAADlrGAQ/original
---

# TokenSelect

Token dropdown selector component

For basic props, please refer to `AntDesign Select`. The API design is compatible with `AntDesign Form` to enable quick integration.

## Demo

### Basic Usage

<code src="./demos/basic.tsx"></code>

### Not Found Token

<code src="./demos/notFoundToken.tsx"></code>

### Select with search

<code src="./demos/withSearch.tsx"></code>

### Multiple Select

<code src="./demos/multipltSelect.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value | selected token | [Token](/components/types-cn#token) | - | - |
| onChange | selected token change callback | (token?: [Token](/components/types-cn#token)) => void | - | - |
| tokenList | selectable token list(deprecated, use `options` instead) | [Token](/components/types-cn#token)[] | - | - |
| options | selectable token options | [Token](/components/types-cn#token)[] | - | - |
| mode | select mode, default as single mode | `multiple` | - | - |
| ...props | Please ref AntDesign `Select` component | [Select Props](https://ant-design.antgroup.com/components/select-cn#select-props) | - | - |
