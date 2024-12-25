// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/html-circle-colorful.svg';

/**![HtmlCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiNjZmE5NjciIHI9IjE2Ii8+PHBhdGggZD0iTTE2LjAyIDE2Ljk0NXY3Ljk5M2w1Ljk0Ny0xLjYwMiAxLjM5Ny0xNS4zOUgxNi4wMnY2LjUzMmwuMzA0LS45NDdoLjc5NnptLTcuMzg0IDcuNTI0TDcgNi41aDE4bC0xLjYzNiAxNy45NjlMMTUuOTggMjYuNXptNS4xNjMtNi43OTN2LS43NDFsLTIuNDY5LS45ODQgMi40Ny0uOTl2LS43NDJsLTMuNTI3IDEuNDMzdi41OTJ6bTcuOTMzLTEuNDMybC0zLjUyNyAxLjQzMnYtLjc0MWwyLjQ3LS45ODctMi40Ny0uOTg3di0uNzQybDMuNTI3IDEuNDMzem0tNS43MTIuN3YtMi40NjZsLTEuMzE3IDQuMTA3aC43ODh6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+) */
export const HtmlCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-html-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HtmlCircleColorful.displayName = 'HtmlCircleColorful';
