// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ppt-circle-colorful.svg';

/**![PptCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMTUyNzQzIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2LjA0OSA4LjMxNmMtMS4zMTYgMC0yLjM4My0uNzMzLTIuMzgzLTEuNjM4IDAtLjkwNSAxLjA2Ny0xLjYzOCAyLjM4My0xLjYzOHMyLjM4Mi43MzMgMi4zODIgMS42MzhjMCAuOTA1LTEuMDY2IDEuNjM4LTIuMzgyIDEuNjM4ek0xNC44MTYgMjYuNlY5LjEwNGg1LjMxMmMuMTk3IDAgLjMzNi4xNDcuMzM2LjM0NHY5LjcwOGMwIC4xOTYtLjE0LjM2NC0uMzM2LjM2NEgxNy4ydjcuMDhjMCAuMTk3LS4xNS4zNzYtLjM0Ny4zNzZoLTEuNjY4YS4zODQuMzg0IDAgMCAxLS4zNjktLjM3NXptLS44OTYtNy4wODFoLTIuMDFhLjM3OC4zNzggMCAwIDEtLjM3NC0uMzY0VjkuNDQ4YzAtLjE5Ny4xNzctLjM0NC4zNzMtLjM0NGgyLjAxMVYxOS41MnoiLz48L2c+PC9zdmc+) */
export const PptCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ppt-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PptCircleColorful.displayName = 'PptCircleColorful';
