import React from 'react';
import styles from './index.module.less';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Space, Tooltip, ConfigProvider, theme, Card } from 'antd';
import { useIntl } from 'dumi';

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
  const intl = useIntl();
  const [isDard, setIsDard] = React.useState(false);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{intl.formatMessage({ id: 'app.docs.site.theme.title' })}</h3>
      <div className={styles.desc}>
        {intl.formatMessage({ id: 'app.docs.site.theme.description' })}
      </div>
      <ConfigProvider
        theme={{
          algorithm: isDard ? theme.darkAlgorithm : undefined,
        }}
      >
        <Card
          className={styles.card}
          bodyStyle={{
            padding: 0,
          }}
        >
          <ConnectModal.ModalPanel
            title="Connect Wallet"
            footer={intl.formatMessage({ id: 'app.docs.site.theme.modal.footer' })}
            walletList={walletList}
            guide
          />
        </Card>
      </ConfigProvider>
      <div className={styles.themeBtns}>
        <Space size="large">
          <Tooltip title="Light Mode">
            <img
              onClick={() => setIsDard(false)}
              src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*8ODgS7sV7HIAAAAAAAAAAAAADlrGAQ/original"
              alt=""
            />
          </Tooltip>
          <Tooltip title="Dark Mode">
            <img
              onClick={() => setIsDard(true)}
              src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*lzNiRZu_XdsAAAAAAAAAAAAADlrGAQ/original"
              alt=""
            />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};

export default App;
