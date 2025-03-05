import React, { useState } from 'react';
import { ConnectButton, Connector, NFTImage } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  PhantomWallet,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
  type Inscription,
} from '@ant-design/web3-bitcoin';
import { Button, message, Space } from 'antd';

/**
 * Component to get and display inscriptions.
 * @returns {JSX.Element | null} The rendered component.
 */
const GetInscriptions: React.FC = () => {
  const { account, getInscriptions } = useBitcoinWallet();
  const [inscription, setInscription] = useState<Inscription>();

  return account ? (
    <Space direction="vertical">
      <Button
        onClick={async () => {
          try {
            const res = await getInscriptions();
            const { total, list } = res;
            if (total === 0) {
              message.info('no inscription');
              return;
            }
            setInscription(list[0]);
          } catch (error) {
            console.log('sign message error:', error);
          }
        }}
      >
        show the first inscription
      </Button>
      {!inscription ? null : inscription.contentType.includes('image') ? (
        <NFTImage src={inscription.content} width={200} />
      ) : (
        <iframe title="Inscription" src={inscription.content} width={200} height={200} />
      )}
    </Space>
  ) : null;
};

/**
 * Main application component that sets up the BitcoinWeb3ConfigProvider and Connector.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider
      wallets={[UnisatWallet(), XverseWallet(), OkxWallet(), PhantomWallet()]}
    >
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
