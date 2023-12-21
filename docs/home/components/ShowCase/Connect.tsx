import styles from './index.module.less';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_WalletConnect,
  metadata_CoinbaseWallet,
} from '@ant-design/web3-assets';
import classNames from 'classnames';
import { ConfigProvider, theme } from 'antd';
import { usePrefersColor } from 'dumi';

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
              uri: `https://web3.ant.design/?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  metadata_CoinbaseWallet,
];

export default () => {
  const [color] = usePrefersColor();
  return (
    <ConfigProvider
      theme={{
        algorithm: color === 'dark' ? theme.darkAlgorithm : undefined,
      }}
    >
      <div className={classNames(styles.cardBg, styles.connectModalCardBg)}>
        <span className={styles.title}>Connect Wallet</span>
        <div className={classNames(styles.connectContainer, styles.connectModalContainer)}>
          <ConnectModal.ModalPanel
            mode="normal"
            title="Connect Wallet"
            footer="Powered by AntChain"
            walletList={walletList}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};
