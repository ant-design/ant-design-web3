---
nav: Components
group:
  title: UI Components
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*iHc2Sb3o9I4AAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*mPCSRr0ymHgAAAAAAAAAAAAADlrGAQ/original
---

# CryptoPrice

## Basic Usage

<code src="./demos/basic.tsx"></code>

## With Icon

<code src="./demos/icon.tsx"></code>

## Custom Chain

You can customize the chain through the `chain` property. If you don't customize it, the component will get the current chain from the adapter. If it still doesn't, it will default to `Mainnet` (Ethereum mainnet).

<code src="./demos/custom-chain.tsx"></code>

## Custom Format

<code src="./demos/format.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| className | The className of the CryptoPrice | `string` | - | - |
| value | Value, based on the minimum unit of the token | `number \| bigint` | `0` | - |
| icon | Icon | `boolean` \| `ReactNode` | `true` | - |
| decimals | Number of decimal places | `number` | `18` | - |
| symbol | Token symbol | `string` | `ETH` | - |
| chain | Chain | `Chain` | `Mainnet` | - |
| fixed | Fixed number of decimal places | `number` | - | - |
| format | Formatting function | (value: string, info: [FormatInfo](#formatinfo)) => string | - | - |

### FormatInfo

```typescript
type FormatInfo = {
  /** The origin value which user pass in */
  originValue: number | bigint;
  /** The symbol of the token */
  symbol: string;
  /** The decimals of the token */
  decimals?: number;
  /** The fixed number of decimal places */
  fixed?: number;
};
```
