---
nav: Components
group:
  title: Display
  order: 3
---

# Address

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Copyable

<code src="./demos/copyable.tsx"></code>

## Format

<code src="./demos/format.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| ellipsis | Address clipping strategy | `boolean \| { headClip?: number, tailClip?: number }` | `{ headClip: 6, tailClip: 4 }` | - |
| copyable | Address copyable | `boolean` | `false` | - |
| address | Address | `string` | - | - |
| tooltip | Show tooltip when hover address | `boolean \|`[Tooltip.title](https://ant.design/components/tooltip-cn#api) | `true ` | - |
| format | Address format | `boolean \| (input: string) => ReactNode` | `false` | - |
| locale | Multilingual settings | `Locale["address"]` | - | - |
