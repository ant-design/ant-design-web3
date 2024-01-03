import { useContext } from 'react';
import { LeftOutlined } from '@ant-design/icons';

import { connectModalContext } from '../context';

export type MainPanelHeaderProps = {
  back?: boolean;
  title?: React.ReactNode;
  onBack?: () => boolean | void | Promise<boolean | void>;
};

const MainPanelHeader: React.FC<MainPanelHeaderProps> = (props) => {
  const { back = true, title, onBack } = props;
  const { prefixCls, panelRouteBack, canBack } = useContext(connectModalContext);

  const handleBack = async () => {
    if (onBack) {
      const isBack = await onBack();
      if (isBack !== false) {
        panelRouteBack();
      }
    } else {
      panelRouteBack();
    }
  };

  return (
    <div className={`${prefixCls}-main-panel-header`}>
      {back && canBack && (
        <div className={`${prefixCls}-main-panel-header-back`} onClick={handleBack}>
          <LeftOutlined />
        </div>
      )}
      {title && <div className={`${prefixCls}-main-panel-header-title`}>{title}</div>}
    </div>
  );
};

export default MainPanelHeader;
