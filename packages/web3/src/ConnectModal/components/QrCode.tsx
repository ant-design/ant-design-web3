import { useContext, useEffect, useState } from 'react';
import type { Wallet } from '../interface';
import MainPanelHeader from './MainPanelHeader';
import { connectModalContext } from '../context';
import { Button, QRCode } from 'antd';
import useProvider from '../../hooks/useProvider';

export type QrCodeProps = {
  wallet: Wallet;
  isSimple?: boolean;
};

const QrCode: React.FC<QrCodeProps> = (props) => {
  const { wallet, isSimple } = props;
  const { prefixCls, updatePanelRoute, updateSelectedWallet, theme } =
    useContext(connectModalContext);
  const { provider } = useProvider();
  const [qrCodeValue, setQrCodeValue] = useState('https://ant-design.github.io/ant-design-web3');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (provider && wallet) {
      setLoading(true);
      provider.getQrCodeLink().then((link) => {
        setQrCodeValue(link);
        setLoading(false);
      });
    }
  }, [wallet, provider]);

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
          size={isSimple ? 334 : 400}
          icon={wallet.icon as string}
          iconSize={60}
          color={theme === 'dark' ? '#000' : '#000'}
          bgColor={theme === 'dark' ? '#fff' : 'transparent'}
        />
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
