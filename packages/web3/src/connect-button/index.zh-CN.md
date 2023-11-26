---
nav: 组件
group: 组件
---

# ConnectButton

快速和区块链建立连接。

## 基本使用

<code src="./demos/simple.tsx"></code>

## 展示提示

<code src="./demos/tooltip.tsx"></code>

## 展示菜单

<code src="./demos/menu.tsx"></code>

## 显示名称

<code src="./demos/name.tsx"></code>

## 不同类型的按钮

<code src="./demos/type.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| connected | 是否已连接 | `boolean` | - | - |
| address | 地址 | `string` | - | - |
| name | 名称，比如以太坊的 ENS | `string` | - | - |
| tooltip | 鼠标移入地址时展示提示 | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`，默认显示 address 信息 | - |
| menuItems | 菜单项数组，菜单项可通过绑定特定的 `key` 触发内置行为，支持的内置行为 key : [BuildInMenuItemKey](#buildinmenuitemkey) | [ItemType](https://ant-design.antgroup.com/components/menu-cn#itemtype) | - | - |
| clickActionType | 点击按钮时的行为，当设置为 `showProfileModal` 时还与 `connected` 属性相关 | `showProfileModal \| showMenu` | `showProfileModal` | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // 是否可复制
  title?: boolean | string | React.ReactNode; // 展示内容
};
```

### BuildInMenuItemKey

```ts
export enum BuildInMenuItemKey {
  CopyAddress = 'copyAddress', // 复制地址
  Disconnect = 'disconnect', // 断开连接
}
```
