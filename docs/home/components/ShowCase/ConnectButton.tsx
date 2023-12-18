import { WalletWhiteColorful } from '@ant-design/web3-icons';
import styles from './index.module.less';
import { ConfigProvider, Space, theme } from 'antd';
import classNames from 'classnames';
import { ConnectButton } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';

const { darkAlgorithm } = theme;

export default () => {
  return (
    <div className={classNames(styles.cardBg, styles.buttonsCard)}>
      <span className={styles.title}>Connect Button</span>
      <Space direction={'vertical'} size={32}>
        <ConfigProvider
          theme={{
            algorithm: [darkAlgorithm],
          }}
        >
          <ConnectButton icon={<WalletWhiteColorful />}>Connect Wallet</ConnectButton>
        </ConfigProvider>
        <ConnectButton account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }} tooltip />
        <ConnectButton
          chain={Polygon}
          availableChains={[Mainnet, Polygon]}
          account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        />
      </Space>
    </div>
  );
};
