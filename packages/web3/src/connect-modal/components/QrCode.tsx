import { useContext, useEffect, useState } from 'react';
import type { Wallet } from '../interface';
import MainPanelHeader from './MainPanelHeader';
import { connectModalContext } from '../context';
import { Button, QRCode, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import classNames from 'classnames';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (wallet) {
      if (download) {
        if (wallet?.app) {
          setQrCodeValue(wallet.app.link);
        } else {
          console.error(`wallet ${wallet.name} app is undefined, please check your config.`);
        }
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
          size={simple ? 332 : 400}
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
          <>
            {localeMessage.qrCodePanelDownloadTipForNotReady} {wallet.name}?
            <Button
              type="default"
              className={`${prefixCls}-get-wallet-btn`}
              onClick={handleGetWallet}
            >
              {localeMessage.getWalletBtnText}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default QrCode;
