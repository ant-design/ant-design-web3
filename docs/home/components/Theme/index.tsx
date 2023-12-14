import styles from './index.module.less';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';

const walletList: Wallet[] = [
  metadata_MetaMask,
  {
    ...metadata_WalletConnect,
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: 'Test Wallet3',
    remark: '备注3',
    app: {
      link: 'https://test.com/xxx',
    },
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
];

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Customize the theme as you like</h3>
      <div className={styles.desc}>
        Open more style algorithms to make it easier to customize your theme
      </div>
      <div className={styles.card}>
        <ConnectModal.ModalPanel
          title="Connect Wallet"
          footer="Powered by AntChain"
          walletList={walletList}
          guide
        />
      </div>
    </div>
  );
};

export default App;
