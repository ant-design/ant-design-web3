// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tron-filled.svg';

/**![TronFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik03MjYuOTY3IDIzNC43MjYgMTQ3IDEyOGwzMDUuMjE3IDc2OCA0MjUuMjcxLTUxOC4xMjUtMTUwLjUyLTE0My4xNDlabS05LjMzMiA0Ny4wMjcgODguNzE0IDg0LjMyLTI0Mi42NDggNDMuOTQgMTUzLjkzNC0xMjguMjZaTTUxMS4wMDkgNDAxLjIyNSAyNTUuMjUxIDE4OS4xMTYgNjczLjI2IDI2Ni4wMyA1MTEuMDEgNDAxLjIyNVptLTE4LjIzIDM3LjUxMkw0NTEuMDkzIDc4My41IDIyNi4yMzcgMjE3LjY1OSA0OTIuNzggNDM4LjczN1ptMzguNjAyIDE4LjMwMiAyNjguNjg2LTQ4LjY2LTMwOC4xOTUgMzc1LjQ4NCAzOS41MS0zMjYuODI0WiI+PC9wYXRoPgo8L3N2Zz4K) */
export const TronFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tron-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TronFilled.displayName = 'TronFilled';
