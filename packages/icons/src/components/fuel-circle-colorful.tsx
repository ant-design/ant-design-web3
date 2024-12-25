// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/fuel-circle-colorful.svg';

/**![FuelCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjNDA5NmQwIiByPSIxNiIvPjxwYXRoIGQ9Ik0yNS41MzIgMTBoLTYuNDk1bC0xLjkyNiA0LjgzaC02LjA3NHYtMi40ODdoNi4wNzRMMTggMTBIOC44MDJhLjQzLjQzIDAgMCAwLS40MzIuNDI3djQuNDAySDYuODlMNiAxNy4xNzFoMi4zN3Y0LjM5N2MwIC4yMzguMTk2LjQzMi40MzguNDMyaDQuNDUxbC44ODktMi4zNDFoLTMuMTExVjE3LjE3aDUuMDM3TDE0LjE0OCAyMmgyLjk2M2wyLjA3NC00LjgzaDYuMzhjLjI0IDAgLjQzNS0uMTkyLjQzNS0uNDI5di02LjI4YS40NjUuNDY1IDAgMCAwLS40NjgtLjQ2MXptLTIuMDUgNC40NmMwIC4yMDQtLjE2Ny4zNy0uMzc0LjM3aC0zLjAzNGwxLjAzNy0yLjQ4NmgxLjk5NWEuMzczLjM3MyAwIDAgMSAuMzc3LjM2OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+) */
export const FuelCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-fuel-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FuelCircleColorful.displayName = 'FuelCircleColorful';
