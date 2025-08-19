# ConnectPanel

卡片式 Web3 钱包连接面板组件，功能与 ConnectButton 类似，但采用现代卡片 UI。

## 用法

```tsx
import { ConnectPanel } from '@ant-design/web3';

<ConnectPanel
  wallets={[
    {
      key: 'metamask',
      name: 'MetaMask',
      icon: <img src="/path/to/metamask.svg" width={64} height={64} />,
      actionText: '连接',
      onClick: () => {
        /* 连接逻辑 */
      },
    },
    {
      key: 'okx',
      name: 'OKX Wallet',
      icon: <img src="/path/to/okx.svg" width={64} height={64} />,
      actionText: '连接',
      onClick: () => {
        /* 连接逻辑 */
      },
    },
    {
      key: 'add',
      name: '添加地址',
      icon: <img src="/path/to/edit.svg" width={64} height={64} />,
      actionText: '输入',
      onClick: () => {
        /* 添加地址逻辑 */
      },
    },
  ]}
/>;
```

## API

| 属性      | 说明         | 类型   | 默认值 |
| --------- | ------------ | ------ | ------ |
| wallets   | 钱包卡片列表 | array  | []     |
| className | 自定义类名   | string | -      |
| style     | 自定义样式   | object | -      |

每个钱包项：

| 属性       | 说明         | 类型            |
| ---------- | ------------ | --------------- |
| key        | 唯一 key     | string          |
| name       | 钱包名称     | string          |
| icon       | 钱包图标     | React.ReactNode |
| actionText | 操作按钮文案 | string          |
| onClick    | 点击事件     | () => void      |
