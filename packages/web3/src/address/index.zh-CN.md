---
nav: 组件
subtitle: 地址
group:
  title: 展示
  order: 3
---

# Address

## 基本使用

<code src="./demos/basic.tsx"></code>

## 可复制

<code src="./demos/copyable.tsx"></code>

## 格式化

<code src="./demos/format.tsx"></code>

## 自定义Tooltip

<code src="./demos/customTooltip.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| ellipsis | 地址裁剪策略 | `boolean \| { headClip?: number, tailClip?: number }` | `{ headClip: 6, tailClip: 4 }` | - |
| copyable | 是否可复制 | `boolean` | `false` | - |
| address | 地址 | `string` | - | - |
| tooltip | 鼠标移入地址时展示提示 | `boolean \|` [Tooltip.title](https://ant.design/components/tooltip-cn#api) | `true ` | - |
| format | 地址格式化 | `boolean \| (input: string) => ReactNode` | `false` | - |
| locale | 多语言设置 | `Locale["address"]` | - | - |
