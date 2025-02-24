// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ark-colorful.svg';

/**![ArkColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMDAgMTU5OCI+PGcgZmlsbD0iI2Y3MDAwMCI+PHBhdGggZD0iTTk5NSA1NjNMMCAxNTg4IDEwMDAgMGwxMDAwIDE1OTh6Ii8+PHBhdGggZD0iTTExNDAgOTcxSDgyOGwxNjAtMTcyIDE1MiAxNzNtLTYwMCAyODFoODk2bC0xODItMTgyLTUzOCAydjFsLTE3NiAxNzYiLz48L2c+PC9zdmc+) */
export const ArkColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ark-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ArkColorful.displayName = 'ArkColorful';
