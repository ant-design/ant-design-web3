// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xuc-circle-colorful.svg';

/**![XucCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMjVBQUUzIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI3IDE2YzAgNi4wNzUtNC45MjUgMTEtMTEgMTFTNSAyMi4wNzUgNSAxNkM1IDkuOTI0IDkuOTI1IDUgMTYgNXMxMSA0LjkyNSAxMSAxMXptLTMuNzcuMzQ2Yy4wMDctLjEyNSAwIDAgMC0uMTI3IDAtMy42MDctMi42NjUtNi44MTEtNi4xMjItNy4zNXYtMi4xbC0yLjI0LjY5OFY4Ljg3Yy0zLjQ1NS41MzgtNi4xMDIgMy41Mi02LjEwMiA3LjEyNSAwIDMuNjkgMi43NyA2LjczIDYuMzQ0IDcuMTY1djIuMDY4bDIuMjQtLjY5OHYtMS40NDZhNy4yMyA3LjIzIDAgMCAwIDUuNDQxLTQuNjhIMjAuNDdhNS4wOCA1LjA4IDAgMCAxLTQuNDggMi42ODUgNS4wOTQgNS4wOTQgMCAwIDEtNS4wNzctNC43MjZsMTIuMzE4LS4wMTd6TTExLjI1IDE0LjEzYTUuMDkzIDUuMDkzIDAgMCAxIDQuNzQtMy4yMjkgNS4wOTUgNS4wOTUgMCAwIDEgNC43MzcgMy4yM2gtOS40NzZ6Ii8+PC9nPjwvc3ZnPg==) */
export const XucCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xuc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XucCircleColorful.displayName = 'XucCircleColorful';
