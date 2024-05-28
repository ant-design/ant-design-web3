---
nav: Components
group:
  title: UI Components
  order: 3
---

# TokenSelect

Token dropdown selector component

Supports three types of token list transmission: controlled, uncontrolled, and interface call.The API design also allows quick integration with Ant Design forms.

## Demo

### Basic Usage

<code src="./demos/basic.tsx"></code>

### Support Clearing Selection

<code src="./demos/allowClear.tsx"></code>

### Controlled Token List

<code src="./demos/controlTokenList.tsx"></code>

### Query Token List via Interface

<code src="./demos/dynamicTokenList.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | Selected token | [Token](/components/types-cn#Token)\[\] | - | - |
| onChange | Callback when a token is selected | (token?: [Token](/components/types-cn#Token)) => void | - | - |
| defaultTokenList | Default token list (uncontrolled), initializes the token list when the component is mounted | [Token](/components/types-cn#Token)[] | - | - |
| queryTokenList | Interface to query the token list, triggered each time the selector is opened | () => Promise<[Token](/components/types-cn#Token)[]> | - | - |
| tokenList | Token list (controlled), has higher priority than `defaultTokenList` and `queryTokenList` | [Token](/components/types-cn#Token)[] | - | - |
| allowClear | Whether to allow clearing | `boolean` | `false` | - |
