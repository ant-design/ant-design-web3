// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tzc-circle-colorful.svg';

/**![TzcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjMzc0ODUxIiByPSIxNiIvPjxwYXRoIGQ9Ik0xNy43IDE1LjR2Ny41OThjLjIwNC0uMDUuNDA0LS4xMDcuNi0uMTczdjIuOTFhMTAuMDI5IDEwLjAyOSAwIDAgMS00IC4xMjFWMTUuNGgtMy41di0yLjhoMTAuNHYyLjh6bTEuNCAxMC4xMVYyMi41YTcuMiA3LjIgMCAxIDAtNi4yIDB2My4wMUM4Ljg5NSAyNC4yMDUgNiAyMC40NCA2IDE2YzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCA0LjQ0LTIuODk1IDguMjA1LTYuOSA5LjUxeiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=) */
export const TzcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tzc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TzcCircleColorful.displayName = 'TzcCircleColorful';
