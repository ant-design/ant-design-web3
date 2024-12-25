// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tron-circle-filled.svg';

/**![TronCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnPgogICAgICA8Y2lyY2xlIGZpbGw9ImN1cnJlbnRDb2xvciIgY3g9IjUxMyIgY3k9IjUxMiIgcj0iNTEyIj48L2NpcmNsZT4KICAgICAgPHJlY3QgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0Ij48L3JlY3Q+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCA0MCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcyNi45NjcgMjM0LjcyNiAxNDcgMTI4bDMwNS4yMTcgNzY4IDQyNS4yNzEtNTE4LjEyNS0xNTAuNTItMTQzLjE0OVptLTkuMzMyIDQ3LjAyNyA4OC43MTQgODQuMzItMjQyLjY0OCA0My45NCAxNTMuOTM0LTEyOC4yNlpNNTExLjAwOSA0MDEuMjI1IDI1NS4yNTEgMTg5LjExNiA2NzMuMjYgMjY2LjAzIDUxMS4wMSA0MDEuMjI1Wm0tMTguMjMgMzcuNTEyTDQ1MS4wOTMgNzgzLjUgMjI2LjIzNyAyMTcuNjU5IDQ5Mi43OCA0MzguNzM3Wm0zOC42MDIgMTguMzAyIDI2OC42ODYtNDguNjYtMzA4LjE5NSAzNzUuNDg0IDM5LjUxLTMyNi44MjRaIj48L3BhdGg+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K) */
export const TronCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tron-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TronCircleFilled.displayName = 'TronCircleFilled';
