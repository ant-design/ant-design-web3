// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/waxp-circle-colorful.svg';

/**![WaxpCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjZjg5MDIyIiByPSIxNiIvPjxwYXRoIGQ9Ik0yOCAxOC45NjJoLTIuMzY0bC0xLjY3Ny0xLjQzNi0xLjY3MSAxLjQzSDIwLjI5bC0uOTU1LTEuMTZoLTMuMjkybC44MzMtMS4wMjloMS42MTlsLTEuMjMzLTEuNTA4LTQuMzA1IDUuMjQxSDEwLjk2bDEuMjQ2LTEuNTIyaC0yLjA4MUw5IDE1LjgyNGwtMS4xMTYgMy4xM0g1Ljc3M0w0IDE0LjA0MWgxLjYybDEuMTkyIDMuMzQ2TDggMTQuMDU2aDJsMS4xODUgMy4zMjQgMS4xODQtMy4zMjVoMS42MjVsLTEuNzg4IDQuOTIzLjM5OC0uNDg2IDMuNjUyLTQuNDQ1aDIuMDFsMy4wMzkgMy43MDggMS40NjItMS4yNTdMMTguMTQgMTIuNWgyLjM3NXptLTIuMzQ1LTIuOTcybC0xLjExNS0uOTU2IDEuMTEzLS45NDggMi4yNS4wMDJ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==) */
export const WaxpCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-waxp-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

WaxpCircleColorful.displayName = 'WaxpCircleColorful';
