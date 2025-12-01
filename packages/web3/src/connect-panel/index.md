# ConnectPanel

A card-style wallet connect panel component for Web3 DApps, similar in function to ConnectButton but with a modern card UI.

## Usage

```tsx
import { ConnectPanel } from '@ant-design/web3';

<ConnectPanel
  wallets={[
    {
      key: 'metamask',
      name: 'MetaMask',
      icon: <img src="/path/to/metamask.svg" width={64} height={64} />,
      actionText: 'Connect',
      onClick: () => {
        /* connect logic */
      },
    },
    {
      key: 'okx',
      name: 'OKX Wallet',
      icon: <img src="/path/to/okx.svg" width={64} height={64} />,
      actionText: 'Connect',
      onClick: () => {
        /* connect logic */
      },
    },
    {
      key: 'add',
      name: 'Add Address',
      icon: <img src="/path/to/edit.svg" width={64} height={64} />,
      actionText: 'Enter',
      onClick: () => {
        /* add address logic */
      },
    },
  ]}
/>;
```

## API

| Property  | Description       | Type   | Default |
| --------- | ----------------- | ------ | ------- |
| wallets   | Wallet card list  | array  | []      |
| className | Custom class name | string | -       |
| style     | Custom style      | object | -       |

Each wallet item:

| Property   | Description        | Type            |
| ---------- | ------------------ | --------------- |
| key        | Unique key         | string          |
| name       | Wallet name        | string          |
| icon       | Wallet icon        | React.ReactNode |
| actionText | Action button text | string          |
| onClick    | Click handler      | () => void      |
