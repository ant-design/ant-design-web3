// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/cqt-circle-colorful.svg';

/**![CqtCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLWNxdC1jaXJjbGUtY29sb3JmdWwtQ0lSQ0xFX09VVExJTkVfQkxBQ0siPjxjaXJjbGUgY3g9IjI1NS45OTk5OCIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSIjMDAwNjI1Ii8+PGNpcmNsZSBjeD0iMzQ4LjA1MzI5IiBjeT0iMTIxLjY2ODM5IiByPSI0Mi41ODA1NiIgZmlsbD0iIzA4ZDhkNSIvPjxjaXJjbGUgY3g9IjM0OC4wNTMyOSIgY3k9IjM5MC4zMTMwMSIgcj0iNDIuNTgwNTYiIGZpbGw9IiNmZjRiOGIiLz48cGF0aCBkPSJNMzQ3LjkwMjM0LDI1NkE5MS45MDI1NCw5MS45MDI1NCwwLDAsMCwyNTYsMTY0LjA5NzY2VjM0Ny45MDIzNEE5MS45MDIyMyw5MS45MDIyMywwLDAsMCwzNDcuOTAyMzQsMjU2WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNjQuMDk3NjYsMjU2QTkxLjkwMjU0LDkxLjkwMjU0LDAsMCwxLDI1NiwxNjQuMDk3NjZWODEuMjU5MjhhMTc0Ljc0MDcyLDE3NC43NDA3MiwwLDAsMCwwLDM0OS40ODE0NFYzNDcuOTAyMzRBOTEuOTAyMjMsOTEuOTAyMjMsMCwwLDEsMTY0LjA5NzY2LDI1NloiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+) */
export const CqtCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-cqt-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CqtCircleColorful.displayName = 'CqtCircleColorful';
