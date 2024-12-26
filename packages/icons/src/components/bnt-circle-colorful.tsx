// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bnt-circle-colorful.svg';

/**![BntCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMDAwRDJCIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE1LjkyIDUuODhsLTQuNTE4IDIuNjQ3IDQuNTE4IDIuNjQ4IDQuNjAzLTIuNjQ4TDE1LjkyIDUuODh6bS43NDMgMTQuMTM0djUuMjk1bDYuMTM3LTMuNTAxdi01LjI5NmwtNi4xMzcgMy41MDJ6bTQuNjAzLTkuODIydjUuMjk2bC00LjYwNCAyLjY0OFYxMi44NGw0LjYwNC0yLjY0OHptLTExLjA4MiA1LjI5Nmw0LjYwNCAyLjY0OFYxMi44NGwtNC42MDQtMi42NDh2NS4yOTZ6bTAgNy4xNzRsNC42MDQgMi42NDd2LTUuMjk1bC00LjYwNC0yLjY0N3Y1LjI5NHoiLz48L2c+PC9zdmc+) */
export const BntCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bnt-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BntCircleColorful.displayName = 'BntCircleColorful';
