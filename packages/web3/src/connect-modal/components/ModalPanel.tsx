import React from 'react';
import { mergeReactNodeProps } from '../utils';
import type { ConnectModalProps } from '../interface';
import classNames from 'classnames';
import WalletList from './WalletList';
import MainPanel from './MainPanel';
import { useContext } from 'react';
import { connectModalContext } from '../context';
import { useStyle } from '../style';
import useMode from '../hooks/useMode';

export type ModalPanelProps = ConnectModalProps;

const ModalPanel: React.FC<ModalPanelProps> = (props) => {
  const { title, footer, walletList, groupOrder, guide, mode } = props;
  const { panelRoute, prefixCls } = useContext(connectModalContext);
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const mergedTitle = mergeReactNodeProps(
    title,
    <h2 className={`${prefixCls}-title`}>Connect Modal</h2>,
    (node) => <h2 className={`${prefixCls}-title`}>{node}</h2>,
  );

  const { isSimple } = useMode(mode);

  return wrapSSR(
    <div
      className={classNames(
        `${prefixCls}-body`,
        {
          [`${prefixCls}-body-simple`]: isSimple,
          [`${prefixCls}-body-mini`]: panelRoute === 'qrCode' && !guide,
        },
        hashId,
      )}
    >
      <div className={classNames(`${prefixCls}-list-panel`)}>
        <div className={`${prefixCls}-header`}>{mergedTitle}</div>
        <div className={`${prefixCls}-list-container`}>
          <WalletList walletList={walletList} groupOrder={groupOrder} />
        </div>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
      {!(panelRoute === 'init' && isSimple) && <MainPanel guide={guide} walletList={walletList} />}
    </div>,
  );
};

export default ModalPanel;
