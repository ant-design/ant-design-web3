// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/trx-colorful.svg';

/**![TrxColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXRyeC1jb2xvcmZ1bC1DYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjQgNjQiPjxkZWZzLz48dGl0bGU+dHJvbjwvdGl0bGU+PGcgaWQ9ImFudC13ZWIzLWljb24tdHJ4LWNvbG9yZnVsLXRyb24iPjxwYXRoIGQ9Ik02MS41NSwxOS4yOGMtMy0yLjc3LTcuMTUtNy0xMC41My0xMGwtLjItLjE0YTMuODIsMy44MiwwLDAsMC0xLjExLS42MmwwLDBDNDEuNTYsNywzLjYzLS4wOSwyLjg5LDBhMS40LDEuNCwwLDAsMC0uNTguMjJMMi4xMi4zN2EyLjIzLDIuMjMsMCwwLDAtLjUyLjg0bC0uMDUuMTN2LjcxbDAsLjExQzUuODIsMTQuMDUsMjIuNjgsNTMsMjYsNjIuMTRjLjIuNjIuNTgsMS44LDEuMjksMS44NmguMTZjLjM4LDAsMi0yLjE0LDItMi4xNFM1OC40MSwyNi43NCw2MS4zNCwyM2E5LjQ2LDkuNDYsMCwwLDAsMS0xLjQ4QTIuNDEsMi40MSwwLDAsMCw2MS41NSwxOS4yOFpNMzYuODgsMjMuMzcsNDkuMjQsMTMuMTJsNy4yNSw2LjY4Wm0tNC44LS42N0wxMC44LDUuMjZsMzQuNDMsNi4zNVpNMzQsMjcuMjdsMjEuNzgtMy41MS0yNC45LDMwWk03LjkxLDcsMzAuMywyNiwyNy4wNiw1My43OFoiIHN0eWxlPSJmaWxsOiAjZmYwNjBhOyIvPjwvZz48L3N2Zz4=) */
export const TrxColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-trx-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TrxColorful.displayName = 'TrxColorful';
