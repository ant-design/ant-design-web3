// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/wings-circle-colorful.svg';

/**![WingsCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiMwZGM5ZjciIHI9IjE2Ii8+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTguOTA0IDE1LjczOWwtMy4wNDUgMi4zNjQtMS4yNDctNC4zMjUtNy4yMjQtMS45MzUgOS40ODEuNDg3eiIgZmlsbC1vcGFjaXR5PSIuMzA1Ii8+PHBhdGggZD0iTTguMjcgMjMuOTkzTDI0LjU4NiAxMS4zMyAyNiAxNC40NzZsLTEuODU1LS41MTMtLjA2NSAzLjI2NHoiIGZpbGwtb3BhY2l0eT0iLjciLz48cGF0aCBkPSJNMjIuNzk2IDE3Ljc4bC00Ljc0Ny04LjE2MUw2IDlsOS4xODMgMi40NjEgMi40OSA4LjQ5eiIvPjwvZz48L2c+PC9zdmc+) */
export const WingsCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-wings-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

WingsCircleColorful.displayName = 'WingsCircleColorful';
