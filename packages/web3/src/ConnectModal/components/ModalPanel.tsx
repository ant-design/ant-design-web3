import { mergeReactNodeProps } from '../utils';
import type { ConnectModalProps } from '../interface';
import classNames from 'classnames';
import WalletList from './WalletList';
import MainPanel from './MainPanel';
import { useContext } from 'react';
import { connectModalContext } from '../context';

export type ModalPanelProps = ConnectModalProps;

const ModalPanel: React.FC<ModalPanelProps> = (props) => {
  const { prefixCls, title, footer, walletList, groupOrder, guide } = props;
  const { panelRoute } = useContext(connectModalContext);

  const mergedTitle = mergeReactNodeProps(
    title,
    <h2 className={`${prefixCls}-title`}>Connect Modal</h2>,
    (node) => <h2 className={`${prefixCls}-title`}>{node}</h2>,
  );

  return (
    <div
      className={classNames(`${prefixCls}-body`, {
        simple: !guide,
        mini: panelRoute === 'qrCode' && !guide,
      })}
    >
      <div className={classNames(`${prefixCls}-list-panel`)}>
        <div className={`${prefixCls}-header`}>{mergedTitle}</div>
        <div className={`${prefixCls}-list-container`}>
          <WalletList walletList={walletList} groupOrder={groupOrder} />
        </div>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
      {((panelRoute !== 'guide' && !guide) || guide) && (
        <MainPanel guide={guide} walletList={walletList} />
      )}
    </div>
  );
};

export default ModalPanel;
