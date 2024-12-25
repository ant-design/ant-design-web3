// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xin-circle-colorful.svg';

/**![XinCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzFFQjVGQSIvPjxwYXRoIGQ9Ik0yNi40MDUgNy4xNTFsLTMuNjMgMS42MWEuNjczLjY3MyAwIDAgMC0uMzUuNTl2MTIuOThhLjY2LjY2IDAgMCAwIC4zNi41OWwzLjYzIDEuNTdhLjMzOC4zMzggMCAwIDAgLjUtLjNWNy40NTFhLjM1LjM1IDAgMCAwLS41MS0uM3pNOS4wMiA4Ljc0MWwtMy41Mi0xLjZhLjMzOC4zMzggMCAwIDAtLjUuM3YxNi43NGEuMzQxLjM0MSAwIDAgMCAuNTIuMjlsMy41NC0xLjg3YS42NjcuNjY3IDAgMCAwIC4zMi0uNTd2LTEyLjdhLjcuNyAwIDAgMC0uMzYtLjU5em0xMS4wNCA0LjQzbC0zLjc5LTIuMTdhLjY2OC42NjggMCAwIDAtLjY3IDBsLTMuODYgMi4xNWEuNjg0LjY4NCAwIDAgMC0uMzQuNTl2NC40YzAgLjI0My4xMy40NjguMzQuNTlsMy44NiAyLjIyYy4yMDcuMTIuNDYzLjEyLjY3IDBsMy43OS0yLjJhLjY4NC42ODQgMCAwIDAgLjM0LS41OXYtNC40YS42NzIuNjcyIDAgMCAwLS4zNC0uNTl6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) */
export const XinCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xin-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XinCircleColorful.displayName = 'XinCircleColorful';
