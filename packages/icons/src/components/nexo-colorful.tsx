// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/nexo-colorful.svg';

/**![NexoColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLW5leG8tY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDkuNDggNDIuODYiPjx0aXRsZT5uZXhvLWxvZ28tMDM8L3RpdGxlPjxwYXRoIGQ9Ik0xMi44NCwwLjI4bDI0LjI2LDE0VjI4LjU2TDAsNy4xNCwxMS44OSwwLjI4QTEsMSwwLDAsMSwxMi44NC4yOFoiIHN0eWxlPSJmaWxsOiMzY2E5ZTUiLz48cG9seWdvbiBwb2ludHM9IjM3LjEgMCAyNC43MyA3LjE0IDM3LjEgMTQuMjggMzcuMSAwIiBzdHlsZT0iZmlsbDojMjg1M2MzIi8+PHBhdGggZD0iTTM3LjEsMEw0OSw2Ljg2YTEsMSwwLDAsMSwuNDguODN2MjhMMzcuMSwyOC41NlYwWiIgc3R5bGU9ImZpbGw6IzFhNDE5OSIvPjxwYXRoIGQ9Ik00OS40NywzNS43TDM3LjU4LDQyLjU2YTEsMSwwLDAsMS0xLDBsLTI0LjI1LTE0VjE0LjI2WiIgc3R5bGU9ImZpbGw6IzI4NTNjMyIvPjxwYXRoIGQ9Ik0wLDcuMTR2MjhBMSwxLDAsMCwwLC40OCwzNmwxMS44OSw2Ljg2VjE0LjI2WiIgc3R5bGU9ImZpbGw6IzYwYmVmZiIvPjxwb2x5Z29uIHBvaW50cz0iMTIuMzcgNDIuODQgMjQuNzMgMzUuNyAxMi4zNyAyOC41NiAxMi4zNyA0Mi44NCIgc3R5bGU9ImZpbGw6IzNjYTllNSIvPjwvc3ZnPg==) */
export const NexoColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-nexo-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NexoColorful.displayName = 'NexoColorful';
