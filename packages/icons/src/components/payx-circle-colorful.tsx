// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/payx-circle-colorful.svg';

/**![PayxCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzYzMCIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMS42ODggMTAuMDYzTDEyLjkzOCA3bDguNTYyLjAzMWMxLjI1LjA5NCAyLjc1LjA5NCAzLjU5NCAxLjE1NyAxIDEuMTU2Ljc4MSAyLjgxMi4yODEgNC4xMjRBOC43MTIgOC43MTIgMCAwIDEgMTkuMDMxIDE4Yy0yLjA2Mi4zMTMtNC4xNTYuMjE5LTYuMjUuMjE5LjQxNy0xLjAxNy44MzQtMi4wMzggMS4yNS0zLjA2MyAxLjcxOSAwIDMuNDY5LjA5NCA1LjIxOS0uMTg3IDEuNTk0LS40MDYgMy4wNjMtMiAyLjgxMy0zLjc1LS4xNTctLjc1LTEtMS4wOTQtMS43Mi0xLjA5NC0yLjg3NC0uMTI1LTUuNzUgMC04LjYyNC0uMDYzaC0uMDMxeiIvPjxwYXRoIGQ9Ik04IDEwLjkwNmgxMC4xNTZsLTEuMzQzIDMuNDY5SDYuNjI0TDggMTAuOTM3di0uMDN6bTEuNjI1IDQuMjVoMy41MzFMOS40NyAyNC41MzFINmwzLjY1Ni05LjM3NWgtLjAzMXoiLz48L2c+PC9nPjwvc3ZnPg==) */
export const PayxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-payx-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PayxCircleColorful.displayName = 'PayxCircleColorful';
