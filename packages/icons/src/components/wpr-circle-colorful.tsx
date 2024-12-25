// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/wpr-circle-colorful.svg';

/**![WprCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiNmZmU2MDAiIHI9IjE2Ii8+PHBhdGggZD0iTTMuOTkzIDUuNDI1YTE2LjA5NiAxNi4wOTYgMCAwIDEgMi42NS0yLjQwNWw0LjQ1MiAxNS45MTggMS45NzMtOC40MzhoMy43NGwxLjk3MiA4LjQzOCAyLjMzNy04LjQzOGgzLjc0OWwuMDM1LjE1IDQuMDc0IDE0LjcxNGExNi4wOTIgMTYuMDkyIDAgMCAxLTIuNTUgMi43NzVsLTMuNDM3LTEyLjQxLTEuOTYgNy4wNzgtLjAzNS4xNWgtNC4xODZsLTEuODY5LTYuOTMyLTEuODcgNi45MzJIOC44ODJsLS4wMzUtLjE1eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=) */
export const WprCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-wpr-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

WprCircleColorful.displayName = 'WprCircleColorful';
