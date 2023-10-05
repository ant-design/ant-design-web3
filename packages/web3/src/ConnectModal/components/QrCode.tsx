import { useContext } from 'react';
import type { Wallet } from '../interface';
import MainPanelHeader from './MainPanelHeader';
import { connectModalContext } from '../context';
import { Button, QRCode } from 'antd';

export type QrCodeProps = {
  wallet: Wallet;
};

const QrCode: React.FC<QrCodeProps> = (props) => {
  const { wallet } = props;
  const { prefixCls, updatePanelRoute, updateSelectedWallet } = useContext(connectModalContext);

  const handleGetWallet = () => {
    updateSelectedWallet(wallet);
    updatePanelRoute('wallet');
  };
  return (
    <div className={`${prefixCls}-qr-code`}>
      <MainPanelHeader title={`Scan with ${wallet.name}`} />
      <div className={`${prefixCls}-qr-code-box`}>
        <QRCode
          value="https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F"
          size={400}
          icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          iconSize={60}
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
