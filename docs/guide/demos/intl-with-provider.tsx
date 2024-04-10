import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider
      locale={{
        ConnectButton: {
          connect: '连接钱包',
        },
      }}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
