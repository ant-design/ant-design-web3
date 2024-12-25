// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/wan-circle-colorful.svg';

/**![WanCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMTM2QUFEIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcgMTEuMDlsMi42NjcgMS4xM3Y2LjM1M0wxNiAxNC43ODZsNi4zOTQgMy43ODdWMTIuMjJMMjUgMTEuMDl2MTEuOTc0bC05LTUuMzE1LTkgNS4zMTVWMTEuMDl6bS4zMDMtLjQ4OUwxNiA1LjVsOC43NTggNS4xMDEtMi4zNjQuOTc4TDE2IDcuODgzbC02LjMzMyAzLjY5Ni0yLjM2NC0uOTc4em0xLjg3OSAxMS44MjFsMS45Ny0xLjEzIDQuODc4IDIuODI1IDQuODE4LTIuODI1IDIuMDMgMS4xM0wxNi4wMyAyNi41bC02Ljg0OC00LjA3OHoiLz48L2c+PC9zdmc+) */
export const WanCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-wan-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

WanCircleColorful.displayName = 'WanCircleColorful';
