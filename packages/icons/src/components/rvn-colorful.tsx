// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/rvn-colorful.svg';

/**![RvnColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwNS4zIDMzOC44Ij48cGF0aCBmaWxsPSIjMzg0MTgyIiBkPSJNODkgMjc0LjlMMCAzMzguOGw1Ni41LTI2MHptMS44LS42bDU0LjIuN0w1OC42IDc5Ljh6bTU5LjMtNC4zbDQxLjUtMTUzLjhMMTc1LjkgOTd6bS0yMC0yNDEuMWwtNjguMyA0NiA5OS44LTMyLjN6bS04LjYgMGwtNDIuNCAxLjRMNzIuOSA0OHoiLz48cGF0aCBmaWxsPSIjZjc5NTM0IiBkPSJNMTcyLjkgOTEuMWwtMTA5LjMtMTUgOTguNS0zMXpNMTQ3IDMzLjNsNi0xNi4zLTMxLjUtMTMuN3ptOS4xLTE3LjlsNy4xIDI1LjYgNDItMTEuMXoiLz48cGF0aCBmaWxsPSIjZjA1MTNhIiBkPSJNMTQ3LjQgMjc0TDU5LjggNzggMTc0IDk0ek0xMjYuOCAyOC45TDcyLjggNTBsLTEzIDI0em0tMzMuNS0xNkw3OS44IDI3LjhsNDQuOC0xLjF6bTIzLjYtMTEuNmwtMjEuNCA5LjkgNDguOCAyMS41ek0xNDEuMyAwaC0yM2wzNS42IDEzLjh6bTEzLjMgMTguM2wtNS41IDE2LjQgMTEgNS4zeiIvPjwvc3ZnPg==) */
export const RvnColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-rvn-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

RvnColorful.displayName = 'RvnColorful';
