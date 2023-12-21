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
  const { prefixCls, updatePanelRoute, updateSelectedWallet } = useContext(connectModalContext);
  const [qrCodeValue, setQrCodeValue] = useState('QR code not ready');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (wallet) {
      if (download) {
        if (wallet?.app) {
          setQrCodeValue(wallet.app.link);
        } else {
          console.log('wallet.app is undefined');
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
      <MainPanelHeader title={`Scan with ${wallet.name}`} />
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
        >
          <Space>
            <span>
              {download ? 'Click to go to the download page' : 'Click to connect directly'}
            </span>
            <ArrowRightOutlined />
          </Space>
        </a>
      </div>
      <div className={`${prefixCls}-qr-code-tips`}>
        {download ? (
          <div className={`${prefixCls}-qr-code-tips-download`}>
            Scan the QR code to download the wallet.
          </div>
        ) : (
          <>
            Don&apos;t have {wallet.name}?
            <Button
              type="default"
              className={`${prefixCls}-get-wallet-btn`}
              onClick={handleGetWallet}
            >
              GET
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default QrCode;
