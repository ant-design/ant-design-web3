---
nav: Components
group:
  title: Display
---

# CryptoPrice

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Custom Chain

You can customize the chain through the `chain` property. If you don't customize it, the component will get the current chain from the adapter. If it still doesn't, it will default to `Mainnet` (Ethereum mainnet).

<code src="./demos/custom-chain.tsx"></code>

## API

| Property | Description                                   | Type     | Default   | Version |
| -------- | --------------------------------------------- | -------- | --------- | ------- |
| value    | Value, based on the minimum unit of the token | `bigint` | -         | -       |
| decimals | Number of decimal places                      | `number` | -         | -       |
| symbol   | Token symbol                                  | `string` | -         | -       |
| chain    | Chain                                         | `Chain`  | `Mainnet` | -       |
| fixed    | Fixed number of decimal places                | `number` | -         | -       |
