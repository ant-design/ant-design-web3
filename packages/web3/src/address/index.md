---
nav: Components
group: Components
---

# Address

## Simple Usage

<code src="./demos/simple.tsx"></code>

## Copyable

<code src="./demos/copyable.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| ellipsis | Address clipping strategy | `boolean \| { headClip?: number, tailClip?: number }` | `{ headClip: 6, tailClip: 4 }` | - |
| copyable | Address copyable | `boolean` | `false` | - |
| address | Address | `string` | - | - |
| tooltip | Show tooltip when hover address | `boolean \|`[Tooltip.title](https://ant.design/components/tooltip-cn#api) | Displays the current full address | - |
