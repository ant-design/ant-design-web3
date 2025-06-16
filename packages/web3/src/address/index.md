---
nav: Components
group:
  title: UI Components
  order: 3
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*Z5dsSKhwD4oAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*ymJDSYEjQKwAAAAAAAAAAAAADlrGAQ/original
---

# Address

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Copyable

<code src="./demos/copyable.tsx"></code>

## Format

<code src="./demos/format.tsx"></code>

## Custom Tooltip

<code src="./demos/customTooltip.tsx"></code>

## AddressPrefix

<code src="./demos/addressPrefix.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| ellipsis | Address clipping strategy | `boolean \| { headClip?: number, tailClip?: number }` | `{ headClip: 6, tailClip: 4 }` | - |
| copyable | Address copyable | `boolean` | `false` | - |
| address | Address | `string` | - | - |
| addressPrefix | The prefix to use for the address | `boolean \| string` | `0x` | - |
| tooltip | Show tooltip when hover address | `boolean \|`[Tooltip.title](https://ant.design/components/tooltip-cn#api) | `true ` | - |
| format | Address format | `boolean \| (input: string) => ReactNode` | `false` | - |
| locale | Multilingual settings | `Locale["address"]` | - | - |

More properties are inherited from [Typography.Text](https://ant.design/components/typography#typographytext).
