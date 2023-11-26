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

## Show Profile Modal

<code src="./demos/profileModal.tsx"></code>

## Show Name

<code src="./demos/name.tsx"></code>

## Different Types

<code src="./demos/type.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| connected | Whether connected | `boolean` | - | - |
| address | Address | `string` | - | - |
| name | Name, like ENS | `string` | - | - |
| tooltip | Show tooltip when mouse enter address | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`, will display address by default | - |
| actionsMenu | Config menu items | `boolean \|` [ActionsMenu](#actionsmenu) | - | - |
| profileModal | Config profile modal | `boolean \|` [ProfileModal](#profilemodal) | - | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // Whether to copy
  title?: boolean | string | React.ReactNode; // Show content
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
