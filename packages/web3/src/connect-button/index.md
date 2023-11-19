---
nav: Components
group:
  title: Components
  order: 2
---

# ConnectButton

A Button for connect chain quickly.

## Simple Usage

<code src="./demos/simple.tsx"></code>

## Show Tooltip

<code src="./demos/tooltip.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | Address | `string` | - | - |
| tooltip | Show tooltip when mouse enter address | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`, will display address by default | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // Whether to copy
  title?: boolean | string | React.ReactNode; // Show content
};
```
