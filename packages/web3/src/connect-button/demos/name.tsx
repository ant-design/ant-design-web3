import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <ConnectButton
      address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
      name="wanderingearth.eth"
      tooltip
      connected
    />
  );
};

export default App;
