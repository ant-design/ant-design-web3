---
nav: 组件
group: 组件
---

# Address

## 基本使用

<code src="./demos/simple.tsx"></code>

## 可复制

<code src="./demos/copyable.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| ellipsis | 地址裁剪策略 | `boolean \| { showHead?: number, showTail?: number }` | `{ showHead: 6, showTail: 4 }` | - |
| copyable | 是否可复制 | `boolean` | `false` | - |
| address | 地址 | `string` | - | - |