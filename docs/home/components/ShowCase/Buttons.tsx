import { WalletColorful, WalletWhiteColorful } from '@ant-design/web3-icons';
import styles from './index.module.less';
import { Button, ConfigProvider, Space, theme } from 'antd';
import classNames from 'classnames';

const { darkAlgorithm } = theme;

export default () => {
  return (
    <div className={classNames(styles.cardBg, styles.buttonsCard)}>
      <span className={styles.title}>Buttons</span>
      <Space direction={'vertical'} size={28}>
        <ConfigProvider
          theme={{
            algorithm: [darkAlgorithm],
          }}
        >
          <Button icon={<WalletWhiteColorful />}>Connect Wallet</Button>
        </ConfigProvider>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBorder: 'rgba(0, 0, 0, 0.85)',
                colorBgContainer: 'transparent',
              },
            },
          }}
        >
          <Button icon={<WalletColorful />}>Connect Wallet</Button>
        </ConfigProvider>
        <Button icon={<WalletColorful />} style={{ border: 0 }}>
          Connect Wallet
        </Button>
        <Button icon={<WalletColorful />} type="text">
          Connect Wallet
        </Button>
      </Space>
    </div>
  );
};
