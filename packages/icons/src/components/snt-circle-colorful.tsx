// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/snt-circle-colorful.svg';

/**![SntCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjNUI2REVFIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEzLjMgMTUuMDJhOS4xNDQgOS4xNDQgMCAwIDAtMS42NjQuMTQ0Yy40NTItNC4xOCAzLjkzNi03LjM0NiA4LjA4NC03LjM0NiAyLjU0IDAgNC4yOCAxLjI0NCA0LjI4IDMuODE4IDAgMi41NzUtMi4wODkgMy44MTktNS4xMzYgMy44MTktMi4yNSAwLTMuMzE0LS40MzQtNS41NjQtLjQzNG0tLjE2NCAxLjUyNEMxMC4wODkgMTYuNTQ1IDggMTcuNzkgOCAyMC4zNjRzMS43NCAzLjgxOCA0LjI4IDMuODE4YzQuMTQ4IDAgNy42MzItMy4xNjUgOC4wODQtNy4zNDZhOS4xNDQgOS4xNDQgMCAwIDEtMS42NjQuMTQ0Yy0yLjI1IDAtMy4zMTUtLjQzNS01LjU2NC0uNDM1Ii8+PC9nPjwvc3ZnPg==) */
export const SntCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-snt-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

SntCircleColorful.displayName = 'SntCircleColorful';
