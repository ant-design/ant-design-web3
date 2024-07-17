// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/de-wallet-circle-colorful.svg';

/**![DeWalletCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiDQogICAgZD0iTTE5LjcyMDYgNy4yMDAwNVYyMS42MzQzTDE3LjU1MzkgMjRINC4zOTYyM1YxOS4yMDAxSDBWNC43OTk5SDQuMzk2MjNWMEgxMy4xNTc1TDE5LjcyMDYgNy4yMDAwNVpNMTUuMzU1NyAxOS4yVjkuNkwxMC45NTk0IDQuOEw0LjM5NjIzIDQuNzk5OVYxOS4yMDAxTDE1LjM1NTcgMTkuMloiDQogICAgZmlsbD0iIzAwOThFQSI+PC9wYXRoPg0KPC9zdmc+DQo=) */
export const DeWalletCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-de-wallet-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

DeWalletCircleColorful.displayName = 'DeWalletCircleColorful';