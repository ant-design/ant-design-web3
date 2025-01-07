// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/dock-circle-colorful.svg';

/**![DockCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzc4NkRCQyIvPjxwYXRoIGQ9Ik0xNS45MzEgMTAuNzcxbC0xLjYyOS0xLjYzM2ExLjE0NCAxLjE0NCAwIDAgMSAxLjU4Mi0xLjY1NGwuMDM4LjAzOCAzLjYzNiAzLjYzNmMuNDQ3LjQ0Ny40NDcgMS4xNyAwIDEuNjE3bC0zLjY0IDMuNjM2YTEuMTQzIDEuMTQzIDAgMCAxLTEuNjE2LTEuNjE2bDEuNzA3LTEuNzA3YTUuNjk1IDUuNjk1IDAgMSAwIDQuNzA1IDUuNjNWNi4xNDJhMS4xNDMgMS4xNDMgMCAwIDEgMi4yODYgMHYxMi43MjlhOCA4IDAgMSAxLTcuMDctOC4xMDRsLjAwMS4wMDR6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) */
export const DockCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-dock-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DockCircleColorful.displayName = 'DockCircleColorful';
