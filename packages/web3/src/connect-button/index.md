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

## Show Menu

<code src="./demos/menu.tsx"></code>

## Show Name

<code src="./demos/name.tsx"></code>

## Different Types

<code src="./demos/type.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | Address | `string` | - | - |
| name | Name, like ENS | `string` | - | - |
| tooltip | Show tooltip when mouse enter address | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`, will display address by default | - |
| menuItems | Show menu | [ItemType](https://ant-design.antgroup.com/components/menu-cn#itemtype) | - | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // Whether to copy
  title?: boolean | string | React.ReactNode; // Show content
};
```
