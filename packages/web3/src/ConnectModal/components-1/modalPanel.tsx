import { mergeReactNodeProps } from '../utils';
import type { ConnectModalProps } from '../interface';
import classNames from 'classnames';
import WalletList from './WalletList';
import MainPanel from './MainPanel';

export type ModalPanelProps = ConnectModalProps;

const ModalPanel: React.FC<ModalPanelProps> = (props) => {
  const { prefixCls, title, footer, walletList, groupOrder, guide } = props;

  const mergedTitle = mergeReactNodeProps(
    title,
    <h2 className={`${prefixCls}-title`}>Connect Modal</h2>,
    (node) => <h2 className={`${prefixCls}-title`}>{node}</h2>,
  );

  return (
    <div className={classNames(`${prefixCls}-body`)}>
      <div
        className={classNames(`${prefixCls}-list-panel`, {
          simple: !guide,
        })}
      >
        <div className={`${prefixCls}-header`}>{mergedTitle}</div>
        <div className={`${prefixCls}-list-container`}>
          <WalletList walletList={walletList} groupOrder={groupOrder} />
        </div>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
      {guide && (
        <div className={`${prefixCls}-main-panel`}>
          <MainPanel guide={guide} walletList={walletList} />
        </div>
      )}
    </div>
  );
};

export default ModalPanel;
