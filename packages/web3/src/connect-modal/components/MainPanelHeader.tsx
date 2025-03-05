import { useContext } from 'react';
import { LeftOutlined } from '@ant-design/icons';

import { connectModalContext } from '../context';

export type MainPanelHeaderProps = {
  back?: boolean;
  title?: React.ReactNode;
  // biome-ignore lint/suspicious/noConfusingVoidType: by design
  onBack?: () => boolean | void | Promise<boolean | void>;
};

const MainPanelHeader: React.FC<MainPanelHeaderProps> = (props) => {
  const { back = true, title, onBack } = props;
  const { prefixCls, panelRouteBack, canBack } = useContext(connectModalContext);

  const handleBack = async () => {
    if (!onBack) {
      panelRouteBack();
      return;
    }
    const isBack = await onBack();
    if (isBack !== false) {
      panelRouteBack();
    }
  };

  return (
    <div className={`${prefixCls}-main-panel-header`}>
      {back && canBack && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: by design
        <div className={`${prefixCls}-main-panel-header-back`} onClick={handleBack}>
          <LeftOutlined />
        </div>
      )}
      {title && <div className={`${prefixCls}-main-panel-header-title`}>{title}</div>}
    </div>
  );
};

export default MainPanelHeader;
