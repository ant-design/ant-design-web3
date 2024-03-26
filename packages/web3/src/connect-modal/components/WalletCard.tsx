/* eslint-disable react/no-unknown-property */
import type { ReactNode } from 'react';
import { useContext, useMemo } from 'react';

import { getPlatform } from '../../utils';
import { connectModalContext } from '../context';
import MainPanelHeader from './MainPanelHeader';

const CardItem: React.FC<{
  icon: ReactNode;
  title: string;
  desc: string;
  link?: string;
  onClick?: () => void;
}> = ({ icon, title, desc, link, onClick }) => {
  const { prefixCls } = useContext(connectModalContext);
  const content = (
    <>
      <div className={`${prefixCls}-card-icon`}>{icon}</div>
      <div className={`${prefixCls}-card-content`}>
        <div className={`${prefixCls}-card-title`}>{title}</div>
        <div className={`${prefixCls}-card-description`}>{desc}</div>
      </div>
    </>
  );
  return link ? (
    <a className={`${prefixCls}-card-item`} target="_blank" href={link} rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className={`${prefixCls}-card-item`} onClick={onClick}>
      {content}
    </div>
  );
};

const WalletCard: React.FC = () => {
  const { prefixCls, selectedWallet, updatePanelRoute, localeMessage, getMessage } =
    useContext(connectModalContext);
  const selectedExtension = useMemo(
    () =>
      selectedWallet?.extensions
        ? selectedWallet.extensions.find((item) => item.key === getPlatform())
        : undefined,
    [selectedWallet?.extensions],
  );
  return (
    <>
      <MainPanelHeader
        title={getMessage(localeMessage.walletCardPanelTitle, {
          selectedWalletName: selectedWallet!.name,
        })}
      />
      <div className={`${prefixCls}-card-list`}>
        {selectedExtension && (
          <CardItem
            link={selectedExtension.link}
            icon={
              typeof selectedExtension.browserIcon === 'string' ? (
                <img src={selectedExtension.browserIcon}  alt=""/>
              ) : (
                selectedExtension.browserIcon
              )
            }
            title={getMessage(localeMessage.walletCardExtensionTitle, {
              selectedWalletName: selectedWallet!.name,
              selectedExtensionBrowserName: selectedExtension.browserName,
            })}
            desc={selectedExtension.description}
          />
        )}
        {selectedWallet?.app && (
          <CardItem
            icon={
              typeof selectedWallet.icon === 'string' ? (
                <img src={selectedWallet.icon}  alt="" />
              ) : (
                selectedWallet.icon
              )
            }
            title={getMessage(localeMessage.walletCardAppTitle, {
              selectedWalletName: selectedWallet.name,
            })}
            desc={localeMessage.walletCardAppDesc}
            onClick={() => {
              updatePanelRoute('downloadQrCode');
            }}
          />
        )}
      </div>
    </>
  );
};

export default WalletCard;
