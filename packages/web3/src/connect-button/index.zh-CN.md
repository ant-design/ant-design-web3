---
nav: 组件
group: 连接
order: 1
---

# ConnectButton

连接区块链钱包的按钮。通常来说，你需要配合 [Connector](../connector/index.zh-CN.md) 组件使用。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 展示提示

<code src="./demos/tooltip.tsx"></code>

## 展示菜单

<code src="./demos/menu.tsx"></code>

## 展示信息弹框

<code src="./demos/profileModal.tsx"></code>

## 显示名称

<code src="./demos/name.tsx"></code>

## 不同类型的按钮

<code src="./demos/type.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| account | 当前连接账号 | `Account` | - | - |
| tooltip | 鼠标移入地址时展示提示 | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`，默认显示 address 信息 | - |
| actionsMenu | 配置菜单项 | `boolean \|` [ActionsMenu](#actionsmenu) | - | - |
| profileModal | 配置信息弹框 | `boolean \|` [ProfileModal](#profilemodal) | - | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // 是否可复制
  title?: boolean | string | React.ReactNode; // 展示内容
  format?: boolean | (address: string) => React.ReactNode; // 格式化展示内容
};
```

### ActionsMenu

```ts
export type ActionsMenu = {
  /**
   * 配置 items 将会覆盖默认菜单，仅展示自定义菜单
   */
  items?: MenuItemType[];
  /**
   * 配置 extraItems 将会在默认菜单前追加自定义菜单
   */
  extraItems?: MenuItemType[];
};
```

### ProfileModal

```ts
export type ProfileModal = Omit<ModalProps, 'open' | 'onClose' | 'className'>;
```

Ref: [ModalProps](https://ant.design/components/modal-cn#api)
