// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/deWallet-circle-colorful.svg';

/**![DeWalletCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTE5LjcyMDYgNy4yMDAwNVYyMS42MzQzTDE3LjU1MzkgMjRINC4zOTYyM1YxOS4yMDAxSDBWNC43OTk5SDQuMzk2MjNWMEgxMy4xNTc1TDE5LjcyMDYgNy4yMDAwNVpNMTUuMzU1NyAxOS4yVjkuNkwxMC45NTk0IDQuOEw0LjM5NjIzIDQuNzk5OVYxOS4yMDAxTDE1LjM1NTcgMTkuMloiCiAgICBmaWxsPSIjMDA5OEVBIj48L3BhdGg+Cjwvc3ZnPgo=) */
export const DeWalletCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-deWallet-circle-colorful');

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
