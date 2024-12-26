// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/pay-circle-colorful.svg';

/**![PayCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMzAyQzJDIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI2LjkxIDE1LjY5NmExLjEzNyAxLjEzNyAwIDAgMC0uMjE1LS4zQzI0Ljc5MyAxMy4yNDIgMjAuOTIyIDkgMjAuOTIyIDlsLTQuOTE3IDUuMzc4LTQuOTgtNS4zMjdTNy4xMDkgMTMuMzMgNS4xOSAxNS41MDdjLS4yNS4yNDYtLjI1LjY5LS4wMjYuOTUyLjk5NyAxLjEzNiA1Ljg5NCA2LjUzNiA1Ljg5NCA2LjUzNmw0Ljk0LTUuNDE0TDIwLjkwNCAyM2w1LjkxNy02LjU0NnMuMTI1LS4xMy4xNTItLjIxN2MuMDU4LS4xOC4wMTYtLjM3Ni0uMDYzLS41NDFtLTE4Ljk5Mi41OTljLS4xNi0uMTg5LS4xMDYtLjQ4Ni4wNDMtLjY2NS42MjYtLjcxMyAzLjEzMS0zLjQgMy4xMzEtMy40bDMuNDkgMy43MDUtMy40OTYgMy44MjRzLTIuMTQtMi4yODQtMy4xNjgtMy40NjRtMTUuOTg4LjEyNmEyLjI2NyAyLjI2NyAwIDAgMS0uMjU2LjM1NWwtMi43MSAyLjk0NUwxNy40NCAxNmwzLjQ0NC0zLjc3NXMxLjk4NCAyLjA1NSAyLjg5MyAzLjE2Yy4wNzcuMDk2LjE2OC4xODcuMjA3LjMwOS4wODMuMjM5LjAzLjUwNS0uMDc5LjcyNiIvPjwvZz48L3N2Zz4=) */
export const PayCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-pay-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PayCircleColorful.displayName = 'PayCircleColorful';
