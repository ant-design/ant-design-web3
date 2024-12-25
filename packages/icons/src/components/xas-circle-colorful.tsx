// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xas-circle-colorful.svg';

/**![XasCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiNmYWEwMGQiIHI9IjE2Ii8+PHBhdGggZD0iTTI1Ljk5MiAxNC40NzFsLTkuNDY5IDExLjAxLS40MjUuNTE5TDYuMDA3IDE0LjU4MmwuMDMyLS4wMTNMNiAxNC41NjNsMy45MjItNi41NTcuMDAyLjAwMkw5LjkyMiA4aDEyLjI1NGwtLjAwMi4wMDdMMjYgMTQuNDd6bS0xMy4xMzYuNDU5bC0yLjE3IDMuNjc0IDUuMzUyIDYuMTEyIDUuMzYzLTYuMTYyLTIuMTIyLTMuNjM1em0tMi43NzggMi45OGwxLjc2LTIuOTc5LTQuMzYyLjAwN3ptOS43MjMtMy44NDZsNC45NTQtLjAwOC0zLjExLTUuMjA4LTQuODgyLjAxem00Ljc3MS44NDZsLTQuMjczLjAwNyAxLjcxMyAyLjkzNXptLTUuNzkxLS44NDRMMTYuMDkgOS40NTRsLTIuNzMgNC42MnptLTguMzk5LTUuMTk0bC0zLjEgNS4yMTMgNS4wNi0uMDA5IDMuMDgtNS4yMTR6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+) */
export const XasCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xas-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XasCircleColorful.displayName = 'XasCircleColorful';
