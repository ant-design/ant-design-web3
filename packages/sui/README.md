# @ant-design/web3-sui

This package provides a [Sui](https://sui.io) adapter for [@ant-design/web3](https://www.npmjs.com/package/@ant-design/web3).

## Installation

```bash
npm install @ant-design/web3 @ant-design/web3-sui --save
```

## Usage

```tsx
import { ConnectButton, Connector } from '@ant-design/web3';
import { Slush, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider>
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
```

For more examples, refer to [Sui - Ant Design Web3](https://web3.ant.design/components/sui).

## Documentation

- For more information, visit [Ant Design Web3](https://web3.ant.design).
- For an introduction to Sui, visit [Sui](https://sui.io).
