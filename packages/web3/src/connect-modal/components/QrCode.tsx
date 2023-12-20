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
};

const QrCode: React.FC<QrCodeProps> = (props) => {
  const { wallet, simple } = props;
  const { prefixCls, updatePanelRoute, updateSelectedWallet } = useContext(connectModalContext);
  const [qrCodeValue, setQrCodeValue] = useState('https://ant-design.github.io/ant-design-web3');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (wallet) {
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
          href={!loading ? qrCodeValue : undefined}
        >
          <Space>
            <span>Click to connect directly</span>
            <ArrowRightOutlined />
          </Space>
        </a>
      </div>
      <div className={`${prefixCls}-qr-code-tips`}>
        Don&apos;t have {wallet.name}?
        <Button type="default" className={`${prefixCls}-get-wallet-btn`} onClick={handleGetWallet}>
          GET
        </Button>
      </div>
    </div>
  );
};

export default QrCode;
