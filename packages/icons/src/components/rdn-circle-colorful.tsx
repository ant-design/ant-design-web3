// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/rdn-circle-colorful.svg';

/**![RdnCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMkEyQTJBIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEwIDYuMDA2aDguMTExYy4wOTgtLjAzLjE0OC4wNi4yMTIuMTFhMTQuODggMTQuODggMCAwIDEgMi4wNDYgMi4zOSAxNS4xNTMgMTUuMTUzIDAgMCAxIDEuOTcyIDMuOTQ2Yy40ODIgMS40ODQuNzEgMy4wNTQuNjUgNC42MTRoLTQuMTM1YTUgNSAwIDAgMCAuMDIyLS42MjRjLS4wNDMtMS40NzEtLjQ5Ny0yLjkxNC0xLjIxMi00LjE5Mi0uNzY1LTEuMzY5LTEuODMzLTIuNTUtMy4wNDctMy41MzEtMS4zMjItMS4wNjktMi44MS0xLjkxMy00LjM2LTIuNTk1LS4wODYtLjA0LS4xNzYtLjA3Mi0uMjU5LS4xMTh6bTMuMDAyIDcuMzI3YTQ3MTUuMTEgNDcxNS4xMSAwIDAgMSA0LjE1NSA3LjUzM2MuMzMzLjYwNi42NyAxLjIxIDEgMS44MTdDMTYuNDM2IDIzLjc4NSAxNC43MiAyNC44OTcgMTMgMjZWMTMuMzMzeiIvPjwvZz48L3N2Zz4=) */
export const RdnCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-rdn-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

RdnCircleColorful.displayName = 'RdnCircleColorful';
