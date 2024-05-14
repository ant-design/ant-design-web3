import React, { useContext } from 'react';
import { Avatar, Button } from 'antd';
import classNames from 'classnames';

import { connectModalContext } from '../context';
import type { ConnectModalProps } from '../interface';
import MainPanelHeader from './MainPanelHeader';

const DefaultGuidePanel: React.FC<{
  guide?: ConnectModalProps['guide'];
  simple?: boolean;
}> = (props) => {
  const { localeMessage, prefixCls } = useContext(connectModalContext);
  const defaultGuide: ConnectModalProps['guide'] = {
    title: localeMessage.guideTitle,
    infos: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*ApSUSaoUa_sAAAAAAAAAAAAADlrGAQ/original',
        title: localeMessage.guideInfos1Title,
        description: localeMessage.guideInfos1Desc,
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*3lD7QpnbCPcAAAAAAAAAAAAADlrGAQ/original',
        title: localeMessage.guideInfos2Title,
        description: localeMessage.guideInfos2Desc,
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*gTROQqEY_TcAAAAAAAAAAAAADlrGAQ/original',
        title: localeMessage.guideInfos3Title,
        description: localeMessage.guideInfos3Desc,
      },
    ],
    moreLink: 'https://ethereum.org/en/wallets/',
    getWalletBtnText: localeMessage.guideInfosGetWalletBtnText,
    moreLinkText: localeMessage.guideInfosMoreLinkText,
  };
  const { guide = defaultGuide } = props;

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
        {props.simple && <MainPanelHeader />}
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

  const { moreLinkText = defaultGuide.moreLinkText } = guide;

  return (
    <div
      className={classNames(`${prefixCls}-guide-panel`, {
        [`${prefixCls}-simple-guide-panel`]: props.simple,
      })}
    >
      {renderContent()}
      <Button
        block
        className={`${prefixCls}-more`}
        href={guide?.moreLink}
        target="_blank"
        size="large"
      >
        {moreLinkText}
      </Button>
    </div>
  );
};

export default DefaultGuidePanel;
