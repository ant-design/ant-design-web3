import styles from './index.module.less';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
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
