// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xpm-circle-colorful.svg';

/**![XpmCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjZmZkODFiIiByPSIxNiIvPjxwYXRoIGQ9Ik0yNCAxNS41NjJjMCA0LjQyMy0zLjQyNiA1LjkyNy02LjMxIDUuOTI3djEuMTUzaDIuMjI1djEuNTYyaC0yLjIyNFYyNmgtMy40OHYtMS43OTZoLTIuMTI3di0xLjU2MmgyLjEyM3YtMS4xNjhjLS45MjMgMC02LjIwNy0uMjE5LTYuMjA3LTYuMjMzVjhoMy40NTV2Ny41MThjMCAzLjEzOSAyLjc2NiAzLjExIDIuNzY2IDMuMTFWOGgzLjQ3djEwLjYyOHMyLjg1NC4xNiAyLjg1NC0zLjE1M1Y4SDI0eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) */
export const XpmCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xpm-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XpmCircleColorful.displayName = 'XpmCircleColorful';
