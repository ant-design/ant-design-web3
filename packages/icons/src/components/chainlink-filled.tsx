// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/chainlink-filled.svg';

/**![ChainlinkFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Q2hhaW5saW5rPC90aXRsZT4KICAgIDxnIGlkPSJDaGFpbmxpbmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjaGFpbmxpbmstbGluay1sb2dv5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUsIDExMikiIGZpbGw9IiM1NTU1NTUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNDcsMCBMMjczLjU2MDg0Nyw0Mi4yMDE4MzQ5IEw3My40MzkxNTM0LDE1Ny43OTgxNjUgTDAsMjAwIEwwLDYwMCBMNzMuNDM5MTUzNCw2NDIuMjAxODM1IEwyNzUuMzk2ODI1LDc1Ny43OTgxNjUgTDM0OC44MzU5NzksODAwIEw0MjIuMjc1MTMyLDc1Ny43OTgxNjUgTDYyMC41NjA4NDcsNjQyLjIwMTgzNSBMNjk0LDYwMCBMNjk0LDIwMCBMNjIwLjU2MDg0NywxNTcuNzk4MTY1IEw0MjAuNDM5MTUzLDQyLjIwMTgzNDkgTDM0NywwIFogTTE0Ni44NzgzMDcsNTE1LjU5NjMzIEwxNDYuODc4MzA3LDI4NC40MDM2NyBMMzQ3LDE2OC44MDczMzkgTDU0Ny4xMjE2OTMsMjg0LjQwMzY3IEw1NDcuMTIxNjkzLDUxNS41OTYzMyBMMzQ3LDYzMS4xOTI2NjEgTDE0Ni44NzgzMDcsNTE1LjU5NjMzIFoiIGlkPSLlvaLnirYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) */
export const ChainlinkFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-chainlink-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ChainlinkFilled.displayName = 'ChainlinkFilled';
