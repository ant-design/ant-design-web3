// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/vtho-circle-colorful.svg';

/**![VthoCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzJBNTI4NCIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjcwNCIgZD0iTTIwLjI3MiA1LjA1OGgzLjAyM2wtNS42ODIgNy41ODRoNS4wOTlsLTEyLjE4IDE0LjMgMy45NC0xMC4xMDRoLTQuNDVsNC40ODctMTEuNzh6Ii8+PHBhdGggZD0iTTIwLjI3MiA1LjA1OGguMTgybC01LjEwNyA4LjcxM2g0LjY3bC05LjQ4NSAxMy4xNyAzLjk0LTEwLjEwM2gtNC40NWw0LjQ4Ny0xMS43OHoiLz48L2c+PC9nPjwvc3ZnPg==) */
export const VthoCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-vtho-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

VthoCircleColorful.displayName = 'VthoCircleColorful';
