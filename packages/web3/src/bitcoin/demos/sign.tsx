import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button, Space } from 'antd';

const SignMessage: React.FC = () => {
  const { signMessage, account } = useBitcoinWallet();
  return account ? (
    <Button
      onClick={async () => {
        try {
          const result = await signMessage?.('Hello World!');
          console.log('sign message success!', result);
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Sign Message
    </Button>
  ) : null;
};

const SignPsbt: React.FC = () => {
  const { signPsbt, account } = useBitcoinWallet();

  // You can use libraries like 'bitcoinjs-lib' or 'scure-btc-signer' to create PSBTs.
  // This is a real PSBT base64 data for example.
  const psbt =
    'cHNidP8BAF4CAAAAAa/v4ZPYjm+iJc1pB3IybYY6wPpScPDlxvHmNE557J2vAQAAAAD/////AWqKAAAAAAAAIlEgZDcUdAs/gCZIkazJyMw1I54n2QGxN1W2ph6m+4zYHBkAAAAACPwCbWUDc2lnQE+yrULMRi3UwxQDf8idtfykJVzjE08jIP9fdU/6yvEfdlqCAWNwXFgSx1Nb7jrfPFYlY7gLaQ87EpcDpwaLdzQL/AJtZQZzaWdleHAIQnj3E+QqoAAAAQErIgIAAAAAAAAiUSBkNxR0Cz+AJkiRrMnIzDUjnifZAbE3VbamHqb7jNgcGQEDBIMAAAABFyCauIGVY+9bxYwyEp3poW+sSayOhwQuSrI4DnH80/zCuwAA';
  return account ? (
    <Button
      onClick={async () => {
        try {
          const result = await signPsbt?.({ psbt });
          console.log('sign psbt success!', result);
        } catch (error) {
          console.log('sign psbt error:', error);
        }
      }}
    >
      Sign PSBT
    </Button>
  ) : null;
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]}>
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SignMessage />
        <SignPsbt />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
