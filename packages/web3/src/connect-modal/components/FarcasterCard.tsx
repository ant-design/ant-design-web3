import React from 'react';
import { QRCode, useFarcaster } from '@ant-design/web3-farcaster';

import { connectModalContext } from '../context';
import MainPanelHeader from './MainPanelHeader';

const FarcasterCard = () => {
  const { url, error, isError } = useFarcaster();
  const { prefixCls } = React.useContext(connectModalContext);

  return (
    <>
      <div className={`${prefixCls}-qr-code-container`}>
        <MainPanelHeader title="Sign in with Farcaster" />
        <div className={`${prefixCls}-qr-code-box`}>
          {isError ? (
            <>
              <div>Error</div>
              <div>{error?.message ?? 'Unknown error, please try again.'}</div>
            </>
          ) : url ? (
            <QRCode uri={url} size={300} logoSize={28} logoMargin={16} />
          ) : null}
        </div>
        <div className={`${prefixCls}-qr-code-tips`}>
          <div>Scan with your phone&apos;s camera to continue.</div>
        </div>
      </div>
    </>
  );
};

export default FarcasterCard;
