---
nav: 组件
subtitle: 加密价格
group:
  title: 展示
---

# CryptoPrice

## 基本使用

<code src="./demos/basic.tsx"></code>

## 使用图标

<code src="./demos/icon.tsx"></code>

## 自定义链

你可以通过 `chain` 属性来自定义链，在没有自定义的情况下组件会去从适配器获取当前链，如果还是没有，那么会默认用 `Mainnet`（以太坊主网）。

<code src="./demos/custom-chain.tsx"></code>

## API

| 属性      | 描述                   | 类型                   | 默认值    | 版本 |
| --------- | ---------------------- | ---------------------- | --------- | ---- |
| className | 加密货币的类名         | `string`               | -         | -    |
| value     | 值，基于代币的最小单位 | `bigint`               | `0`       | -    |
| icon      | 图标                   | `boolean \| ReactNode` | `true`    | -    |
| decimals  | 小数位数               | `number`               | `18`      | -    |
| symbol    | 代币符号               | `string`               | `ETH`     | -    |
| chain     | 链                     | `Chain`                | `Mainnet` | -    |
| fixed     | 小数点后固定位数       | `number`               | -         | -    |
