import { Avatar, Button } from 'antd';
import React, { useContext } from 'react';
import { connectModalContext } from '../context';
import type { MainPanelProps } from '../interface';

const DefaultGuidePanel: React.FC<MainPanelProps> = (props) => {
  const { guide } = props;
  const { prefixCls, updatePanelRoute } = useContext(connectModalContext);

  if (!guide) {
    return null;
  }

  const renderContent = () => {
    if (React.isValidElement(guide)) {
      return guide;
    }

    const { title, infos } = guide;
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
        href={guide?.moreLink}
        target="_blank"
      >
        Learn More
      </Button>
    </div>
  );
};

export default DefaultGuidePanel;
