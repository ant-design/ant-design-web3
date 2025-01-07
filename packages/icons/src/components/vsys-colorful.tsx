// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/vsys-colorful.svg';

/**![VsysColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXZzeXMtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTcuMDkgNDUuNzQiPjx0aXRsZT52LXN5c3RlbXMtdnN5cy1sb2dvPC90aXRsZT48cGF0aCBkPSJNMC41MSwwSDE2LjgzYTAuNTEsMC41MSwwLDAsMSwuMjUuMDYsMC41LDAuNSwwLDAsMSwuMTguMTdoMEwzNy4xMywzMmEwLjQ5LDAuNDksMCwwLDEsMCwuNTRoMEwyOSw0NS41MWgwYTAuNSwwLjUsMCwwLDEtLjE4LjE3LDAuNTEsMC41MSwwLDAsMS0uNDksMCwwLjUsMC41LDAsMCwxLS4xOC0wLjE3aDBMMC4wOCwwLjc3QTAuNSwwLjUsMCwwLDEsMCwuNTJIMEEwLjUsMC41LDAsMCwxLC4wNi4yNiwwLjUsMC41LDAsMCwxLC4yNS4wN2gwQTAuNSwwLjUsMCwwLDEsLjUxLDBoMFpNMzQuNzIsMEg1Ni41OGEwLjUsMC41LDAsMCwxLC4yNi4wN2gwQTAuNSwwLjUsMCwwLDEsNTcsLjI2YTAuNTEsMC41MSwwLDAsMSwuMDYuMjZoMEEwLjUsMC41LDAsMCwxLDU3LC43N0w0Ni4wOCwxOC4yMWgwYTAuNSwwLjUsMCwwLDEtLjE4LjE3LDAuNTEsMC41MSwwLDAsMS0uNDksMCwwLjUsMC41LDAsMCwxLS4xOC0wLjE3aDBMMzQuMywwLjc3QTAuNSwwLjUsMCwwLDEsMzQuMjIuNTJoMEEwLjUsMC41LDAsMCwxLDM0LjI4LjI2LDAuNSwwLjUsMCwwLDEsMzQuNDcuMDdoMEEwLjUsMC41LDAsMCwxLDM0LjcyLDBoMFoiIHN0eWxlPSJmaWxsOiNmZjg4MzY7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48L3N2Zz4=) */
export const VsysColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-vsys-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

VsysColorful.displayName = 'VsysColorful';
