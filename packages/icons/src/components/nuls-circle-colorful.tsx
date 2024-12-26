// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/nuls-circle-colorful.svg';

/**![NulsCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiM4MmJkMzkiIHI9IjE2Ii8+PHBhdGggZD0iTTE0LjQwMyAxOS4zNkwxNiAyMS40NjRWMjZsLTYtMi42NjNWMTEuNjE5YzAtLjE3My4wNzctLjMzOC4yMTItLjQ1M2wuNjgzLS41ODVhLjYzNi42MzYgMCAwIDEgLjkyMy4wOTdsNS40NjUgNy4xNjQgMy4wMTkgMS44NDZ2LTkuODhsLTIuNjY4LTEuMzMxLS4xMyA2LjE5Ni0xLjQxMi0xLjg3My0uMDY0LTYuOEwyMiA4Ljc3OXYxMS42NjRsLTEuMzU3IDEuMTE4LTQuMjc0LTIuMzg3LTQuNzQ0LTYuMjIzLS4wNjUgOS40NTQgMi44MjUgMS40NDd6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+) */
export const NulsCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-nuls-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NulsCircleColorful.displayName = 'NulsCircleColorful';
