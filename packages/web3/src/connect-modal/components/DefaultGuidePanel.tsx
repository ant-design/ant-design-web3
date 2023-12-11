import { Avatar, Button } from 'antd';
import React, { useContext } from 'react';
import { connectModalContext } from '../context';
import type { MainPanelProps } from '../interface';

const defaultGuide: MainPanelProps['guide'] = {
  title: 'What is a Wallet?',
  infos: [
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/ethereum.svg',
      title: 'Manage your private key and assets',
      description: 'Manage your private key and the assets of the corresponding chain address',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/bitcoin.svg',
      title: 'Help you connect to DApp',
      description: 'Authorize DApp to get your address, similar to login',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/binance.svg',
      title: 'Call smart contract',
      description:
        'Through authorization of private key signature, initiate interaction with smart contract on the chain',
    },
  ],
  moreLink: 'https://docs.ethers.io/v5/getting-started/#getting-started--connecting-to-a-provider',
};

const DefaultGuidePanel: React.FC<MainPanelProps> = (props) => {
  const { guide } = props;

  const mergedGuide = React.useMemo(() => {
    if (guide === false || guide === null) {
      return null;
    }
    if (guide === true) {
      return defaultGuide;
    }
    return guide;
  }, [guide]);

  const { prefixCls, updatePanelRoute } = useContext(connectModalContext);

  if (!mergedGuide) {
    return null;
  }

  const renderContent = () => {
    if (React.isValidElement(mergedGuide)) {
      return mergedGuide;
    }

    const { title, infos } = mergedGuide;
    return (
      <>
        <h2 className={`${prefixCls}-guide-title`}>{title}</h2>
        <div className={`${prefixCls}-guide-list`}>
          {infos.map((info) => {
            return (
              <div className={`${prefixCls}-guide-item`} key={info.title?.toString()}>
                {typeof info.icon === 'string' ? (
                  <Avatar
                    className={`${prefixCls}-guide-item-icon`}
                    shape="square"
                    src={info.icon}
                  />
                ) : (
                  info.icon
                )}
                <div className={`${prefixCls}-guide-item-content`}>
                  <h3 className={`${prefixCls}-guide-item-title`}>{info.title}</h3>
                  <div className={`${prefixCls}-guide-item-description`}>{info.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={`${prefixCls}-guide-panel`}>
      {renderContent()}
      <Button
        block
        type="primary"
        className={`${prefixCls}-get-btn`}
        onClick={() => updatePanelRoute('getWallet')}
      >
        Get a Wallet
      </Button>
      <Button
        block
        type="link"
        className={`${prefixCls}-more`}
        href={mergedGuide?.moreLink}
        target="_blank"
      >
        Learn More
      </Button>
    </div>
  );
};

export default DefaultGuidePanel;
