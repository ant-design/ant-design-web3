// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gsc-circle-colorful.svg';

/**![GscCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0ZGMDA2MCIvPjxwYXRoIGQ9Ik0yNS4wNyAxMi4wNDdoLTkuMTQ4YTMuODc2IDMuODc2IDAgMSAwIDMuNjI4IDUuMjI0aC0zLjYyOGExLjAyMiAxLjAyMiAwIDAgMS0xLjAyMy0xLjAyM3YtLjEyNGExLjAyMiAxLjAyMiAwIDAgMSAxLjAyMy0xLjAyM2g2LjA0N2MuMDQ0LjI4Mi4wNjUuNTY3LjA2Mi44NTJhNi4xMDkgNi4xMDkgMCAxIDEtNi4xMDktNi4xMzlsLjE4Ny0uMDMxYy4wMzkuMDE4LjA4LjAyOC4xMjQuMDMxaDUuNDI2YzIuOTYxIDAgNC4xNy0xLjU4MSA0LjE3LTMuODE0aC05LjkwN0MxMC40NSA2IDYuMDEgMTAuNDMzIDYgMTUuOTA3Yy0uMDA4IDUuNDc0IDQuNDE4IDkuOTIgOS44OTIgOS45MzggNS40NzQuMDE3IDkuOTI3LTQuNDAyIDkuOTUzLTkuODc2di0zLjEzMmEuNzc1Ljc3NSAwIDAgMC0uNzc1LS43OXoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+) */
export const GscCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gsc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GscCircleColorful.displayName = 'GscCircleColorful';
