---
nav: 组件
subtitle: 加密输入框
group:
  title: UI 组件
  order: 3
cover: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*2Mj9QYCUJDgAAAAAAAAAAAAADlrGAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*eDQZSopLDxEAAAAAAAAAAAAADlrGAQ/original
---

# CryptoInput

## 代码演示

### 基本使用

<code src="./demos/basic.tsx"></code>

### 支持尺寸调整

<code src="./demos/sizeChange.tsx"></code>

### 关闭默认底部

<code src="./demos/noFooter.tsx"></code>

### 自定义底部

<code src="./demos/customFooter.tsx"></code>

### 自定义头部

<code src="./demos/customHeader.tsx"></code>

### Swap 模式

<code src="./demos/swapMode.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 加密输入框组件的值 | [CryptoInputValue](#cryptoinputvalue) | - | - |
| onChange | 加密输入框组件值变动的回调 | (value?: [CryptoInputValue](#cryptoinputvalue)) => void | - | - |
| options | 可选择的代币列表 | [Token](/components/types-cn#token)[] | - | - |
| balance | 代币的余额相关信息，包含数量和单价 | [TokenBalance](#tokenbalance) | - | - |
| header | 自定义渲染的头部 | (value?: [CryptoInputValue](#cryptoinputvalue)) => React.ReactNode | - | - |

# Start of Selection

| footer | 自定义渲染的底部 | false \| (value?: [CryptoInputValue](#cryptoinputvalue)) => React.ReactNode \| [FooterProps](#FooterProps) | - | - |

# End of Selection

| ...props | 其它参数请参照 `TokenSelect` 组件 | [TokenSelect](/components/token-select#api) | - | - |

### CryptoInputValue

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| token | 当前选择的代币 | [Token](/components/types-cn#token) | - | - |
| amount | 代币数量, 值为用户输入的原始数字乘上代币的精度, 比如 `123456789012345678901n` | `bigint` | - | - |
| amountString | 用户输入的原始数字，比如 `1.123456789` | `string` | - | - |

### TokenBalance

| 属性   | 描述                     | 类型               | 默认值 | 版本 |
| ------ | ------------------------ | ------------------ | ------ | ---- |
| amount | 用户拥有的代币数量       | `bigint`           | -      | -    |
| price  | 代币的价格               | `string \| number` | -      | -    |
| unit   | 代币价格的单位，比如 "$" | `string`           | -      | -    |

### FooterProps

| 属性         | 描述                   | 类型      | 默认值  | 版本 |
| ------------ | ---------------------- | --------- | ------- | ---- |
| setMaxButton | 设置快速按钮是否可以见 | `boolean` | `false` | -    |
