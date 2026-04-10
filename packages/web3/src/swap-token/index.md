---
nav: Components
group:
  title: UI Components
  order: 3
tag:
  title: New
  color: success
---

# SwapToken

SwapToken provides a ready-to-use swap panel that combines two `CryptoInput` instances, token selection and action handling. It is especially suitable for cross-chain swap scenarios.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Quota & Fee Control

<code src="./demos/quota.tsx"></code>

## Fee Breakdown

<code src="./demos/fee-control.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| tokens | Token pairs that can be selected in the swap panel | `SwapTokenConfig<T, SwapTokenToken<T>>[]` | - | - |
| token | Current selected token pair | `SwapTokenConfig<T, SwapTokenToken<T>>` | - | - |
| switchToken | Callback that updates the selected token pair | `(token?: SwapTokenConfig<T, SwapTokenToken<T>>) => void` | - | - |
| swapIcon | Icon rendered between the two inputs | `React.ReactNode` | - | - |
| extra | Render extra description when the current amount is valid | `(tokenPair: (SwapTokenConfig<T, SwapTokenToken<T>> \| undefined)[], valueIn: string, valueOut: string) => React.ReactNode` | - | - |
| btnText | Primary button text | `string` | `'Exchange'` | - |
| swap | Whether the swap icon is clickable | `boolean` | `true` | - |
| onButtonClick | Called after pressing the primary button | `(tokenPair: (SwapTokenConfig<T, SwapTokenToken<T>> \| undefined)[], valueIn: string, valueOut: string) => Promise<void>` | - | - |
| title | Input titles | `{ in: string; out: string }` | `{ in: 'Cash In', out: 'Cash Out' }` | - |
| loading | Loading state of the primary button | `boolean` | `false` | - |
| swapTextColor | Text color inside the editable inputs | `string` | `'black'` | - |
| extraRenders | Custom renderers for the balance area of the upper / lower input | `{ upper?: (balance?: SwapTokenToken<T>, token?: SwapTokenConfig<T, SwapTokenToken<T>>) => React.ReactNode; under?: (balance?: SwapTokenToken<T>, token?: SwapTokenConfig<T, SwapTokenToken<T>>) => React.ReactNode }` | - | - |
| underButtonRender | Render extra content underneath the action button | `(tokens?: (SwapTokenConfig<T, SwapTokenToken<T>> \| undefined)[]) => React.ReactNode` | - | - |
| buttonDisabled | Force the primary button to be disabled | `boolean` | `false` | - |
| maxInputAmount | Limit of the maximum input amount (raw units) | `{ symbol: T; amount: bigint }` | - | - |
| estFeeRate | Percentage fee rate that will be subtracted from the input | `string` | `'0.00'` | - |
| estFee | Fixed fee that will be subtracted from the input (raw units) | `Decimal` | `Decimal(0)` | - |
| extraDesc | Extra description rendered under the swap area | `React.ReactNode` | - | - |
| showConnectButton | Whether the inputs should stay read-only before wallet connection | `boolean` | `true` | - |
| onCalculateFee | Triggered when the input changes to fetch fee information | `(valueIn?: string) => void` | - | - |
| onValueOutChange | Called whenever the output amount is recalculated | `(valueIn?: string, valueOut?: string) => void` | - | - |
| quota | Global quota configuration (raw units) | `{ show?: boolean; maxLimit?: bigint; remainQuota?: bigint }` | - | - |
| fundFlowDirection | Current fund flow direction | [`FundFlowDirection`](#fundflowdirection) | `FundFlowDirection.IN` | - |
| switchFundFlowDirection | Triggered after the swap icon is clicked | `(direction: FundFlowDirection) => void` | - | - |
| calculateValueOut | Custom method to calculate the output amount (raw units) | `(valueIn?: bigint) => bigint` | - | - |
| calculateValueIn | Custom method to reverse-calculate the input amount (raw units) | `(valueOut?: bigint) => bigint` | - | - |

### SwapTokenRef

| Property | Description               | Type         |
| -------- | ------------------------- | ------------ |
| reset    | Reset the input to `0.00` | `() => void` |

### SwapTokenConfig

| Property | Description | Type |
| --- | --- | --- |
| symbol | Shared symbol of the token pair | `T` |
| decimals | Token precision that will be used when formatting | `number` |
| fromToken | Token metadata used for input (see [SwapTokenToken](#swaptokentoken)) | `SwapTokenToken<T>` |
| toToken | Token metadata used for output | `SwapTokenToken<T>` |

### SwapTokenToken

| Property | Description                      | Type              |
| -------- | -------------------------------- | ----------------- |
| symbol   | On-chain token symbol            | `T`               |
| decimals | Token decimals                   | `number`          |
| icon     | Token icon                       | `React.ReactNode` |
| name     | Token name                       | `string`          |
| balance  | Human-readable balance           | `string`          |
| amount   | Balance represented in raw units | `bigint`          |
| chainId  | Chain id of the token            | `number`          |

### FundFlowDirection

| Value                   | Description                               |
| ----------------------- | ----------------------------------------- |
| `FundFlowDirection.IN`  | Funds flow from `fromToken` to `toToken`. |
| `FundFlowDirection.OUT` | Funds flow from `toToken` to `fromToken`. |
