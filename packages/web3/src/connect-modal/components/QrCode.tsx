import { useContext, useEffect, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Flex, QRCode, Space } from 'antd';
import classNames from 'classnames';

import { connectModalContext } from '../context';
import type { Wallet } from '../interface';
import MainPanelHeader from './MainPanelHeader';

export type QrCodeProps = {
  wallet: Wallet;
  simple?: boolean;
  download?: boolean;
};

const QrCode: React.FC<QrCodeProps> = (props) => {
  const { wallet, simple, download } = props;
  const { prefixCls, updatePanelRoute, updateSelectedWallet, localeMessage, getMessage } =
    useContext(connectModalContext);
  const [qrCodeValue, setQrCodeValue] = useState('QR code not ready');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (wallet) {
      if (download) {
        if (wallet?.app) {
          setQrCodeValue(wallet.app.link);
        } else {
          console.error(`wallet ${wallet.name} app is undefined, please check your config.`);
        }
        setLoading(false);
        return;
      }
      setLoading(true);
      wallet.getQrCode?.().then(({ uri }) => {
        setQrCodeValue(uri);
        setLoading(false);
      });
    }
  }, [wallet]);

  const handleGetWallet = () => {
    updateSelectedWallet(wallet);
    updatePanelRoute('wallet');
  };
  return (
    <div className={`${prefixCls}-qr-code-container`}>
      <MainPanelHeader
        title={getMessage(
          download
            ? localeMessage.qrCodePanelTitleForDownload
            : wallet.universalProtocol
              ? localeMessage.qrCodePanelTitleForUniversalProtocol
              : localeMessage.qrCodePanelTitleForScan,
          {
            walletName: wallet.name,
          },
        )}
      />
      <div className={`${prefixCls}-qr-code-box`}>
        <QRCode
          className={`${prefixCls}-qr-code`}
          value={qrCodeValue}
          status={!loading ? 'active' : 'loading'}
          style={{ width: simple ? '100%' : 346, height: simple ? '100%' : 346 }}
          iconSize={60}
          type="svg"
        />
        <a
          className={classNames(`${prefixCls}-qr-code-link`, {
            [`${prefixCls}-qr-code-link-loading`]: loading,
          })}
          target="_blank"
          href={!loading ? qrCodeValue : undefined}
          rel="noreferrer"
        >
          <Space>
            <span>
              {download
                ? localeMessage.qrCodePanelLinkForDownload
                : localeMessage.qrCodePanelLinkForConnect}
            </span>
            <ArrowRightOutlined />
          </Space>
        </a>
      </div>
      <div className={`${prefixCls}-qr-code-tips`}>
        {download ? (
          <div className={`${prefixCls}-qr-code-tips-download`}>
            {localeMessage.qrCodePanelDownloadTipForReady}
          </div>
        ) : (
          <Flex justify="space-between" align="center" gap="small">
            <div className={`${prefixCls}-get-wallet-tip`}>
              {wallet.universalProtocol
                ? localeMessage.qrCodePanelUniversalProtocolTipForNotReady
                : localeMessage.qrCodePanelDownloadTipForNotReady}{' '}
              {wallet.name}?
            </div>
            {wallet.universalProtocol ? (
              <Button
                type="default"
                href={wallet.universalProtocol.link}
                className={`${prefixCls}-get-wallet-btn`}
              >
                {localeMessage.getWalletUniversalProtocolBtnText}
              </Button>
            ) : (
              <Button
                type="default"
                target="_blank"
                className={`${prefixCls}-get-wallet-btn`}
                onClick={handleGetWallet}
              >
                {localeMessage.getWalletBtnText}
              </Button>
            )}
          </Flex>
        )}
      </div>
    </div>
  );
};

export default QrCode;
