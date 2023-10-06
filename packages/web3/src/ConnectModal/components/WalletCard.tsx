/* eslint-disable react/no-unknown-property */
import type { ReactNode } from 'react';
import { useContext, useMemo } from 'react';
import { connectModalContext } from '../context';
import MainPanelHeader from './MainPanelHeader';
import { getPlatform } from '../../utils';

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

export type WalletCardProps = {};

const WalletCard: React.FC<WalletCardProps> = (props) => {
  const { prefixCls, selectedWallet, updatePanelRoute } = useContext(connectModalContext);
  const selectedExtension = useMemo(
    () =>
      selectedWallet?.extensions
        ? selectedWallet.extensions.find((item) => item.key === getPlatform())
        : undefined,
    [selectedWallet?.extensions],
  );
  return (
    <>
      <MainPanelHeader title="Get a Wallet" />
      <div className={`${prefixCls}-card-list`}>
        {selectedExtension && (
          <CardItem
            link={selectedExtension.link}
            icon={<img src={selectedExtension.browserIcon} />}
            title={`${selectedWallet!.name} for ${selectedExtension.browserName}`}
            desc={selectedExtension.description}
          />
        )}
        {selectedWallet?.app && (
          <CardItem
            icon={
              typeof selectedWallet.icon === 'string' ? (
                <img src={selectedWallet.icon} />
              ) : (
                selectedWallet.icon
              )
            }
            title={`${selectedWallet.name} for Mobile`}
            desc="Use the mobile wallet to explore the world of Ethereum."
            onClick={() => {
              updatePanelRoute('qrCode');
            }}
          />
        )}
      </div>
    </>
  );
};

export default WalletCard;
