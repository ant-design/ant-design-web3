---
nav: Components
group: Connect
order: 1
---

# ConnectButton

The button to connect to the blockchain wallet. Usually, you need to use it with the [Connector](../connector/index.md) component.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Show Tooltip

<code src="./demos/tooltip.tsx"></code>

## Show Menu

<code src="./demos/menu.tsx"></code>

## Show Profile Modal

<code src="./demos/profileModal.tsx"></code>

## Show Name

<code src="./demos/name.tsx"></code>

## Different Types

<code src="./demos/type.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| account | Current connected account | `Account` | - | - |
| tooltip | Show tooltip when mouse enter address | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`, will display address by default | - |
| actionsMenu | Config menu items | `boolean \|` [ActionsMenu](#actionsmenu) | - | - |
| profileModal | Config profile modal | `boolean \|` [ProfileModal](#profilemodal) | - | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // Whether to copy
  title?: boolean | string | React.ReactNode; // Show content
  format?: boolean | (address: string) => React.ReactNode; // Format content
};
```

### ActionsMenu

```ts
export type ActionsMenu = {
  /**
   * Config items will override default menu, only display custom menu
   */
  items?: React.ReactNode[];
  /**
   * Config items will be displayed after default menu
   */
  extraItems?: React.ReactNode[];
};
```

### ProfileModal

```ts
export type ProfileModal = Omit<ModalProps, 'open' | 'onClose' | 'className'>;
```

Ref: [ModalProps](https://ant.design/components/modal#api)
