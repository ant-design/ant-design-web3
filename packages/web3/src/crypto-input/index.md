---
nav: Components
group:
  title: UI Components
  order: 3
---

# CryptoInput

## Demo

### Basic usage

<code src="./demos/basic.tsx"></code>

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
| tokenList | selectable token list | [Token](/components/types-cn#token)[] | - | - |
| balance | selected token balance, includes amount and unit price | [TokenBalance](#tokenbalance) | - | - |
| header | custom render for header | (value?: [CryptoInputValue](#cryptoinputvalue)) => React.ReactNode | - | - |
| footer | custom render for footer | (value?: [CryptoInputValue](#cryptoinputvalue)) => React.ReactNode | - | - |
| ...props | Others please ref `TokenSelect` | [TokenSelect](/components/token-select#api) | - | - |

### CryptoInputValue

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| token | selected token | [Token](/components/types-cn#token) | - | - |
| amount | token amount, from input string mutiples token decimal, value like `123456789012345678901n` | `bigint` | - | - |
| amountString | string token amount, from `amount.toString()`, value like `123456789012345678901` | `string` | - | - |

### TokenBalance

| Property | Description                        | Type               | Default | Version |
| -------- | ---------------------------------- | ------------------ | ------- | ------- |
| amount   | user had token amount              | `bigint`           | -       | -       |
| price    | token price                        | `string \| number` | -       | -       |
| unit     | token price display unit, like "$" | `bigint`           | -       | -       |
