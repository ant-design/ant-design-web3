import { Token } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Token.Select
      tokenList={[
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: (
            <img src="https://cdn.jsdelivr.net/gh/ant-design/ant-design-web3@main/assets/eth.svg" />
          ),
          contract: '0x',
        },
      ]}
    />
  );
};

export default App;
