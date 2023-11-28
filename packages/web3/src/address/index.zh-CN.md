---
nav: 组件
group:
  title: 展示
  order: 2
---

# Address

## 基本使用

<code src="./demos/simple.tsx"></code>

## 可复制

<code src="./demos/copyable.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| ellipsis | 地址裁剪策略 | `boolean \| { headClip?: number, tailClip?: number }` | `{ headClip: 6, tailClip: 4 }` | - |
| copyable | 是否可复制 | `boolean` | `false` | - |
| address | 地址 | `string` | - | - |
| tooltip | 鼠标移入地址时展示提示 | `boolean \|` [Tooltip.title](https://ant.design/components/tooltip-cn#api) | 展示当前完整地址 | - |
