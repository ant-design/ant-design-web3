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

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value | Crypto input value | [CryptoInputValue](#cryptoInputValue) | - | - |
| onChange | Crypto input value change callback | (value?: [CryptoInputValue](#cryptoInputValue)) => void | - | - |
| tokenList | selectable token list | [Token](/components/types-cn#token)[] | - | - |
| balance | selected token balance, includes amount and unit price | `{ amount: string; unitPrice: string }` | - | - |
| header | custom render for header | (value?: [CryptoInputValue](#cryptoInputValue)) => React.ReactNode | - | - |
| footer | custom render for footer | (value?: [CryptoInputValue](#cryptoInputValue)) => React.ReactNode | - | - |
| ...props | Others please ref `TokenSelect` | [TokenSelect](/components/token-select#api) | - | - |

### CryptoInputValue

| Property | Description        | Type                                | Default | Version |
| -------- | ------------------ | ----------------------------------- | ------- | ------- |
| token    | selected token     | [Token](/components/types-cn#token) | -       | -       |
| amount   | token amount input | `string`                            | -       | -       |
