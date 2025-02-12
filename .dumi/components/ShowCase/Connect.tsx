import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, ConfigProvider, theme } from 'antd';
import classNames from 'classnames';
import { usePrefersColor } from 'dumi';

import styles from './index.module.less';

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
        <h3 className={styles.title}>Connect Modal</h3>
        <Card
          style={{ width: 400 }}
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <ConnectModal.ModalPanel
            locale={{
              guideTipTitle: 'New to Web3?',
            }}
            mode="simple"
            title="Connect Wallet"
            footer="Powered by AntChain"
            walletList={walletList}
          />
        </Card>
      </div>
    </ConfigProvider>
  );
};
