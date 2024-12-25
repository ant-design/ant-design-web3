// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/de-wallet-circle-colorful.svg';

/**![DeWalletCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIKICAgIGQ9Ik0xOS43MjA2IDcuMjAwMDVWMjEuNjM0M0wxNy41NTM5IDI0SDQuMzk2MjNWMTkuMjAwMUgwVjQuNzk5OUg0LjM5NjIzVjBIMTMuMTU3NUwxOS43MjA2IDcuMjAwMDVaTTE1LjM1NTcgMTkuMlY5LjZMMTAuOTU5NCA0LjhMNC4zOTYyMyA0Ljc5OTlWMTkuMjAwMUwxNS4zNTU3IDE5LjJaIgogICAgZmlsbD0iIzAwOThFQSI+PC9wYXRoPgo8L3N2Zz4K) */
export const DeWalletCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-de-wallet-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DeWalletCircleColorful.displayName = 'DeWalletCircleColorful';
