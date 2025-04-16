---
nav: Components
group:
  title: UI Components
  order: 3
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*2Mj9QYCUJDgAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*eDQZSopLDxEAAAAAAAAAAAAADlrGAQ/original
---

# CryptoInput

## Demo

### Basic usage

<code src="./demos/basic.tsx"></code>

### Size change

<code src="./demos/sizeChange.tsx"></code>

### No default footer

<code src="./demos/noFooter.tsx"></code>

### Custom footer

<code src="./demos/customFooter.tsx"></code>

### Custom header

<code src="./demos/customHeader.tsx"></code>

### Swap Mode

<code src="./demos/swapMode.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value | Crypto input value | [CryptoInputValue](#cryptoinputvalue) | - | - |
| onChange | Crypto input value change callback | (value?: [CryptoInputValue](#cryptoinputvalue)) => void | - | - |
| options | selectable token options | [Token](/components/types-cn#token)[] | - | - |
| balance | selected token balance, includes amount and unit price | [TokenBalance](#tokenbalance) | - | - |
| header | custom render for header | (value?: [CryptoInputValue](#cryptoinputvalue)) => React.ReactNode | - | - |
| footer | custom render for footer | false \| (value?: [CryptoInputValue](#cryptoinputvalue)) => React.ReactNode \| [FooterProps](#FooterProps) | - | - |
| ...props | Others please ref `TokenSelect` | [TokenSelect](/components/token-select#api) | - | - |

### CryptoInputValue

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| token | selected token | [Token](/components/types-cn#token) | - | - |
| amount | token amount, from input string mutiples token decimal, like `123456789012345678901n` | `bigint` | - | - |
| inputString | the origin number entered by user, like `1.123456789` | `string` | - | - |

### TokenBalance

| Property | Description                        | Type               | Default | Version |
| -------- | ---------------------------------- | ------------------ | ------- | ------- |
| amount   | user had token amount              | `bigint`           | -       | -       |
| price    | token price                        | `string \| number` | -       | -       |
| unit     | token price display unit, like "$" | `bigint`           | -       | -       |

### FooterProps

| Property     | Description            | Type      | Default | Version |
| ------------ | ---------------------- | --------- | ------- | ------- |
| setMaxButton | set max button visible | `boolean` | `false` | -       |
