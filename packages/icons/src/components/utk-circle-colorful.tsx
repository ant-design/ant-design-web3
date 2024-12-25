// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/utk-circle-colorful.svg';

/**![UtkCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiMzMDM2N2EiIHI9IjE2Ii8+PHBhdGggZD0iTTE0LjM1MyAyMi4yOThWOS4wMjhIMTAuNVY2aDExdjMuMDI4aC0zLjg1M3YxMy4yN3pNMTMuNDY2IDI2Yy0xLjk4OSAwLTIuOTMtLjk1Ni0yLjkzLTIuOTc4VjkuODk2aDIuODk0djEyLjk5MmMwIC4zMi4xMDUuNDI2LjQxOS40MjZoNC4zMzljLjMxNCAwIC40Mi0uMTA3LjQyLS40MjZWOS44OTZIMjEuNXYxMy4xMjZjMCAyLjAyMi0uOTQyIDIuOTc4LTIuOTMgMi45Nzh6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+) */
export const UtkCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-utk-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

UtkCircleColorful.displayName = 'UtkCircleColorful';
