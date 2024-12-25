// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ethereum-colorful.svg';

/**![EthereumColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNTExLjkxMzU3Mzc1IDMybC02LjQ0MDYzMjUgMjEuODc3MTA5MDZ2NjM0Ljc2NjgyOTM4bDYuNDQwNjMyNSA2LjQyNTYwMTU2IDI5NC42NDU4MDE1Ni0xNzQuMTY3NjM4MTN6IiBmaWxsPSIjMzQzNDM0Ij48L3BhdGg+CiAgPHBhdGggZD0iTTUxMS45MTM1NzM3NSAzMkwyMTcuMjYwMjU3MTggNTIwLjkwMTkwMTg4bDI5NC42NTMzMTY1NyAxNzQuMTY3NjM4MTJWMzg2Ljk3MTMwOTA2eiIgZmlsbD0iIzhDOEM4QyI+PC9wYXRoPgogIDxwYXRoIGQ9Ik01MTEuOTEzNTczNzUgNzUwLjg1NTc5MTU2bC0zLjYyOTkwMTU2IDQuNDI2NTI2MjV2MjI2LjExMzU1OTY5bDMuNjI5OTAxNTYgMTAuNTk2NjA3NSAyOTQuODI2MTY5MDctNDE1LjIxNDE0NzgyeiIgZmlsbD0iIzNDM0MzQiI+PC9wYXRoPgogIDxwYXRoIGQ9Ik01MTEuOTEzNTczNzUgOTkxLjk5MjQ4NVY3NTAuODU1NzkxNTZMMjE3LjI2MDI1NzE4IDU3Ni43NzgzMzcxOHoiIGZpbGw9IiM4QzhDOEMiPjwvcGF0aD4KICA8cGF0aCBkPSJNNTExLjkxMzU3Mzc1IDY5NS4wNjk1NGwyOTQuNjQ1ODAxNTYtMTc0LjE2NzYzODEyLTI5NC42NDU4MDE1Ni0xMzMuOTMwNTkyODJ6IiBmaWxsPSIjMTQxNDE0Ij48L3BhdGg+CiAgPHBhdGggZD0iTTIxNy4yNjAyNTcxOCA1MjAuOTAxOTAxODhsMjk0LjY1MzMxNjU3IDE3NC4xNjc2MzgxMlYzODYuOTcxMzA5MDZ6IiBmaWxsPSIjMzkzOTM5Ij48L3BhdGg+Cjwvc3ZnPgo=) */
export const EthereumColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ethereum-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EthereumColorful.displayName = 'EthereumColorful';
