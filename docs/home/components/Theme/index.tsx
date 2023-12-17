import React from 'react';
import styles from './index.module.less';
import type { MainPanelProps } from '@ant-design/web3';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Space, Tooltip, ConfigProvider, theme, Card } from 'antd';
import { useIntl } from 'dumi';

const App: React.FC = () => {
  const intl = useIntl();
  const [isDard, setIsDard] = React.useState(false);

  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
      group: intl.formatMessage({ id: 'app.docs.site.theme.modal.walletList.group.popular' }),
    },
    {
      ...metadata_WalletConnect,
      group: intl.formatMessage({ id: 'app.docs.site.theme.modal.walletList.group.popular' }),
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
      group: intl.formatMessage({ id: 'app.docs.site.theme.modal.walletList.group.more' }),
      name: 'Test Wallet3',
      remark: 'remark 3',
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

  const defaultGuide: MainPanelProps['guide'] = {
    title: intl.formatMessage({ id: 'app.docs.site.theme.modal.guide.title' }),
    infos: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*ApSUSaoUa_sAAAAAAAAAAAAADlrGAQ/original',
        title: intl.formatMessage({ id: 'app.docs.site.theme.modal.guide.item.0.title' }),
        description: intl.formatMessage({
          id: 'app.docs.site.theme.modal.guide.item.0.description',
        }),
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*3lD7QpnbCPcAAAAAAAAAAAAADlrGAQ/original',
        title: intl.formatMessage({ id: 'app.docs.site.theme.modal.guide.item.1.title' }),
        description: intl.formatMessage({
          id: 'app.docs.site.theme.modal.guide.item.1.description',
        }),
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*gTROQqEY_TcAAAAAAAAAAAAADlrGAQ/original',
        title: intl.formatMessage({ id: 'app.docs.site.theme.modal.guide.item.2.title' }),
        description: intl.formatMessage({
          id: 'app.docs.site.theme.modal.guide.item.2.description',
        }),
      },
    ],
    moreLink: 'https://ethereum.org/en/wallets/',
    getWalletBtnText: intl.formatMessage({
      id: 'app.docs.site.theme.modal.guide.getWalletBtnText',
    }),
    moreLinkText: intl.formatMessage({ id: 'app.docs.site.theme.modal.guide.moreLinkText' }),
  };
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
            title={intl.formatMessage({ id: 'app.docs.site.theme.modal.title' })}
            footer={intl.formatMessage({ id: 'app.docs.site.theme.modal.footer' })}
            walletList={walletList}
            guide={defaultGuide}
            groupOrder={(a, b) => {
              if (
                a ===
                  intl.formatMessage({
                    id: 'app.docs.site.theme.modal.walletList.group.popular',
                  }) &&
                b !==
                  intl.formatMessage({ id: 'app.docs.site.theme.modal.walletList.group.popular' })
              ) {
                return -1;
              }
              if (
                a ===
                  intl.formatMessage({ id: 'app.docs.site.theme.modal.walletList.group.more' }) &&
                b !== intl.formatMessage({ id: 'app.docs.site.theme.modal.walletList.group.more' })
              ) {
                return 1;
              }
              return a.localeCompare(b);
            }}
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
