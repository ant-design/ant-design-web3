// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/adx-circle-colorful.svg';

/**![AdxCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxQjc1QkMiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTEuNTg3IDguNjAyTDE2IDEzLjIwOGw0LjMwNS00LjYwNkwyMyAxMS4zNiAxOC42MDQgMTYgMjMgMjAuNjAzbC0yLjY5NSAyLjc5M0wxNiAxOC43OTJsLTQuNDEzIDQuNjA0TDkgMjAuNjhsNC4zNi00LjcwNkw5IDExLjM2bDIuNTg3LTIuNzU3em0uMzU1LS4zNzZMMTUuOTgyIDRsNC4wNCA0LjIyNi0yLjEyNiAyLjI2NS0xLjkxNC0yLjExNC0xLjkxNCAyLjExNC0yLjEyNi0yLjI2NXptMCAxNS41NDhsMi4xMjYtMi4yNjUgMS45MTQgMi4xMTQgMS45MTQtMi4xMTQgMi4xMjYgMi4yNjVMMTUuOTgyIDI4bC00LjA0LTQuMjI2eiIvPjwvZz48L3N2Zz4=) */
export const AdxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-adx-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

AdxCircleColorful.displayName = 'AdxCircleColorful';
