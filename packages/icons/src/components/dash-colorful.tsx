// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/dash-colorful.svg';

/**![DashColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMy40IDQxNi44Ij48ZGVmcy8+PHRpdGxlPmQ8L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLWRhc2gtY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24tZGFzaC1jb2xvcmZ1bC1MYXllcl8xLTIiPjxwYXRoIGQ9Ik0zMzYuMjUsMEgxNDkuMzVsLTE1LjUsODYuNiwxNjguNy4yYzgzLjEsMCwxMDcuNiwzMC4yLDEwNi45LDgwLjItLjQsMjUuNi0xMS41LDY5LTE2LjMsODMuMS0xMi44LDM3LjUtMzkuMSw4MC4yLTEzNy43LDgwLjFsLTE2NC0uMUw3Niw0MTYuOGgxODYuNWM2NS44LDAsOTMuNy03LjcsMTIzLjQtMjEuMyw2NS43LTMwLjUsMTA0LjgtOTUuMywxMjAuNS0xNzkuOUM1MjkuNjUsODkuNiw1MDAuNjUsMCwzMzYuMjUsMCIgc3R5bGU9ImZpbGw6ICMwMDhkZTQ7Ii8+PHBhdGggZD0iTTY4LjcsMTY0LjljLTQ5LDAtNTYsMzEuOS02MC42LDUxLjJDMiwyNDEuMywwLDI1MS42LDAsMjUxLjZIMTkxLjRjNDksMCw1Ni0zMS45LDYwLjYtNTEuMiw2LjEtMjUuMiw4LjEtMzUuNSw4LjEtMzUuNVoiIHN0eWxlPSJmaWxsOiAjMDA4ZGU0OyIvPjwvZz48L2c+PC9zdmc+) */
export const DashColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-dash-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DashColorful.displayName = 'DashColorful';
