// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/sky-colorful.svg';

/**![SkyColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcxNC4xIDUzNyIgPjxwYXRoIGQ9Ik02MTcuNiAxOTkuMUw0NjEuNCA1MzdIMzk5bDE2NC40LTM1NS43YzE5LjMgMy4xIDM3LjUgOS4xIDU0LjIgMTcuOE0zNDQuMy42TDEwNCA1MjAuNUM0Mi43IDQ5Mi4yIDAgNDMwLjIgMCAzNThjMC05OC45IDc5LjktMTc5IDE3OC41LTE3OUMxNzguNSA4NC40IDI1MS43IDcuMiAzNDQuMy42TTUzNS42IDE3OUwzNzAuMSA1MzdoLTY3LjZMNTEwLjMgODcuNWMxNiAyNi44IDI1LjMgNTggMjUuMyA5MS41bTYxLjUgMzQ2LjlsMTA2LTIyOS4yYzcgMTkuMiAxMSAzOS44IDExIDYxLjQgMCA3Ny00OC43IDE0Mi42LTExNyAxNjcuOG00Ni44LTMxMGMxNC44IDExLjQgMjcuOSAyNC45IDM4LjUgNDAuNEw1NTMgNTM2LjFjLTUuNy42LTExLjYuOS0xNy40LjloLTQwLjFsMTQ4LjQtMzIxLjFNMzU3LjcgMGMyNS4zLjEgNDkuMyA1LjUgNzEuMSAxNS4yTDE4Ny42IDUzN2gtOS4xYy0yMi40IDAtNDMuOC00LjMtNjMuNS0xMS45TDM1Ny43IDBtMTM4LjUgNjYuOUwyNzguOSA1MzdIMjA2TDQ0My44IDIyLjZjMjAuMiAxMS4zIDM4IDI2LjQgNTIuNCA0NC4zIiBmaWxsPSIjMDA3MmZmIi8+PC9zdmc+) */
export const SkyColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-sky-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

SkyColorful.displayName = 'SkyColorful';
