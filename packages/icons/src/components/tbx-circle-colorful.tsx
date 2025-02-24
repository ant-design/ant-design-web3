// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tbx-circle-colorful.svg';

/**![TbxCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzUyNDRENCIvPjxwYXRoIGQ9Ik0xNS43IDI3LjRDOS4yMzggMjcuNCA0IDIyLjE2MiA0IDE1LjcgNCA5LjIzOCA5LjIzOCA0IDE1LjcgNGM2LjQ2MiAwIDExLjcgNS4yMzggMTEuNyAxMS43IDAgNi40NjItNS4yMzggMTEuNy0xMS43IDExLjd6bTIuODktNy43bC0yLjg5LTQtMi44OSA0LTIuMzUtNCAyLjYyLTQuNDhoNS4yNGwyLjYyIDQuNDgtMi4zNSA0em0uODYtMTAuNGgtNy41bC0zLjc0IDYuNCAzLjc1IDYuNGg3LjQ5bDMuNzQtNi40LTMuNzQtNi40eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=) */
export const TbxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tbx-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TbxCircleColorful.displayName = 'TbxCircleColorful';
