// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bat-colorful.svg';

/**![BatColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMDAgMTcxOSIgPjxwYXRoIGZpbGw9IiM2NjJkOTEiIGQ9Ik0yMDAwIDE3MTYuNjQgMTAwNC43OSAxMTQ2Ljc4IDAgMTcxOSAyMDAwIDE3MTYuNjR6Ii8+PHBhdGggZmlsbD0iIzllMWY2MyIgZD0iTTEwMDUuMTEgMCAxMDA0Ljc5IDExNDYuNzggMjAwMCAxNzE2LjY0IDEwMDUuMTEgMHoiLz48cGF0aCBmaWxsPSIjZmY1MDAwIiBkPSJNMCAxNzE5IDEwMDQuNzkgMTE0Ni43OCAxMDA1LjExIDAgMCAxNzE5eiIvPjxwYXRoIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmNTAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjI1IiBkPSJtMTAwMi43NSA2OTUuNjdsLTQxMC44NSA2ODYuMjVoODIzLjU0bC00MTIuNjktNjg2LjI1eiIvPjwvc3ZnPg==) */
export const BatColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bat-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BatColorful.displayName = 'BatColorful';
