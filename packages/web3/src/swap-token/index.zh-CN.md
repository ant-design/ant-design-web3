---
nav: 组件
subtitle: Swap 兑换
group: UI 组件
tag:
  title: 新增
  color: success
---

# SwapToken

SwapToken 提供了一个包含两组 `CryptoInput`、代币选择器以及操作按钮的兑换面板，适合在 DApp 中快速集成。尤其适合跨链兑换业务中。

## 基础用法

<code src="./demos/basic.tsx"></code>

## 限额与费用控制

<code src="./demos/quota.tsx"></code>

## 费用拆解

<code src="./demos/fee-control.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| tokens | 可供切换的代币组合列表 | `SwapTokenConfig<T, SwapTokenToken<T>>[]` | - | - |
| token | 当前选中的代币组合 | `SwapTokenConfig<T, SwapTokenToken<T>>` | - | - |
| switchToken | 选择代币后的回调 | `(token?: SwapTokenConfig<T, SwapTokenToken<T>>) => void` | - | - |
| swapIcon | 输入框之间显示的图标 | `React.ReactNode` | - | - |
| extra | 输入合法时显示的额外信息 | `(tokenPair: (SwapTokenConfig<T, SwapTokenToken<T>> \| undefined)[], valueIn: string, valueOut: string) => React.ReactNode` | - | - |
| btnText | 主按钮文案 | `string` | `'Exchange'` | - |
| swap | 是否允许切换资金流向 | `boolean` | `true` | - |
| onButtonClick | 点击主按钮后的回调 | `(tokenPair: (SwapTokenConfig<T, SwapTokenToken<T>> \| undefined)[], valueIn: string, valueOut: string) => Promise<void>` | - | - |
| title | 输入框标题 | `{ in: string; out: string }` | `{ in: 'Cash In', out: 'Cash Out' }` | - |
| loading | 主按钮的加载状态 | `boolean` | `false` | - |
| swapTextColor | 输入框内容颜色 | `string` | `'black'` | - |
| extraRenders | 自定义上下两组输入框右侧区域的渲染 | `{ upper?: (balance?: SwapTokenToken<T>, token?: SwapTokenConfig<T, SwapTokenToken<T>>) => React.ReactNode; under?: (balance?: SwapTokenToken<T>, token?: SwapTokenConfig<T, SwapTokenToken<T>>) => React.ReactNode }` | - | - |
| underButtonRender | 主按钮下方的自定义渲染 | `(tokens?: (SwapTokenConfig<T, SwapTokenToken<T>> \| undefined)[]) => React.ReactNode` | - | - |
| buttonDisabled | 是否强制禁用主按钮 | `boolean` | `false` | - |
| maxInputAmount | 最大可输入数额（按最小单位） | `{ symbol: T; amount: bigint }` | - | - |
| estFeeRate | 输入金额按照百分比扣除的手续费 | `string` | `'0.00'` | - |
| estFee | 输入金额中包含的固定手续费（最小单位） | `Decimal` | `Decimal(0)` | - |
| extraDesc | 兑换区块下方的额外说明 | `React.ReactNode` | - | - |
| showConnectButton | 在未连接钱包时是否禁止编辑 | `boolean` | `true` | - |
| onCalculateFee | 输入变更时触发的手续费计算回调 | `(valueIn?: string) => void` | - | - |
| onValueOutChange | 输出金额变化时的回调 | `(valueIn?: string, valueOut?: string) => void` | - | - |
| quota | 全局限额配置（最小单位） | `{ show?: boolean; maxLimit?: bigint; remainQuota?: bigint }` | - | - |
| fundFlowDirection | 当前资金流动方向 | [`FundFlowDirection`](#fundflowdirection) | `FundFlowDirection.IN` | - |
| switchFundFlowDirection | 切换资金方向时的回调 | `(direction: FundFlowDirection) => void` | - | - |
| calculateValueOut | 自定义计算输出金额（最小单位） | `(valueIn?: bigint) => bigint` | - | - |
| calculateValueIn | 根据输出反推输入的函数（最小单位） | `(valueOut?: bigint) => bigint` | - | - |

### SwapTokenRef

| 属性  | 描述                | 类型         |
| ----- | ------------------- | ------------ |
| reset | 重置输入框为 `0.00` | `() => void` |

### SwapTokenConfig

| 属性      | 描述                                                     | 类型                |
| --------- | -------------------------------------------------------- | ------------------- |
| symbol    | 该组代币的统一符号                                       | `T`                 |
| decimals  | 该组代币的精度                                           | `number`            |
| fromToken | 输入端代币元信息（见 [SwapTokenToken](#swaptokentoken)） | `SwapTokenToken<T>` |
| toToken   | 输出端代币元信息                                         | `SwapTokenToken<T>` |

### SwapTokenToken

| 属性     | 描述                       | 类型              |
| -------- | -------------------------- | ----------------- |
| symbol   | 链上代币符号               | `T`               |
| decimals | 代币小数位数               | `number`          |
| icon     | 代币图标                   | `React.ReactNode` |
| name     | 代币名称                   | `string`          |
| balance  | 已格式化的余额             | `string`          |
| amount   | 未格式化的余额（最小单位） | `bigint`          |
| chainId  | 所在链 ID                  | `number`          |

### FundFlowDirection

| 枚举值                  | 描述                                |
| ----------------------- | ----------------------------------- |
| `FundFlowDirection.IN`  | 资金从 `fromToken` 流向 `toToken`。 |
| `FundFlowDirection.OUT` | 资金从 `toToken` 流向 `fromToken`。 |
