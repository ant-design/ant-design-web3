import { useState } from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { BitcoinWeb3ConfigProvider, UnisatWallet, useAdapter } from '@ant-design/web3-bitcoin';
import { Button, message, Space } from 'antd';

const GetInscriptions: React.FC = () => {
  const { account, name, provider } = useAdapter();
  const [img, setImg] = useState<string>();

  return account ? (
    <Space direction="vertical">
      <Button
        onClick={async () => {
          try {
            if (name !== 'Unisat') return;
            const res = await provider.getInscriptions(0, 10);
            const { total, list } = res;
            if (total === 0) {
              message.info('no inscription');
              return;
            }
            setImg(list[0].content);
          } catch (error) {
            console.log('sign message error:', error);
          }
        }}
      >
        show the first inscription
      </Button>
      {img ? <iframe src={img} width={200} height={200} /> : null}
    </Space>
  ) : null;
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[UnisatWallet()]}>
      <Space direction="vertical">
        <Connector>
          <ConnectButton />
        </Connector>
        <GetInscriptions />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
