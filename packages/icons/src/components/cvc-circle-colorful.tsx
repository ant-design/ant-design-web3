// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/cvc-circle-colorful.svg';

/**![CvcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5NjkuNjYgMjAwMCIgPjxwYXRoIGQ9Ik0xMDk5LjM3IDEwNzcuODVhMjM0LjQ3IDIzNC40NyAwIDAgMCAxMzEuMDYtMjEwLjY2YzAtMTI5LjQxLTEwNC42My0yMzQuMjktMjMzLjU5LTIzNC4yOVM3NjMuMiA3MzcuNzcgNzYzLjIgODY3LjE4YTIzNC4zMiAyMzQuMzIgMCAwIDAgMTMxLjE2IDIxMC42NnYyODkuMzZoMjA1di0yODkuMzVNOTk2Ljg1IDE3NTBjLTQxMi4yNyAwLTc0Ny42My0zMzYuNDItNzQ3LjYzLTc1MHMzMzUuNDEtNzQ5Ljk0IDc0Ny42My03NDkuOTRjMzM2LjQyIDAgNjIxLjU4IDIyNCA3MTUuMTQgNTMxLjE2aDI1Ny42N0MxODcwLjI0IDMzNC4xNyAxNDcyLjQ0IDAgOTk2Ljg1IDAgNDQ2LjMxIDAgMCA0NDcuNzEgMCAxMDAwczQ0Ni4zMSAxMDAwIDk5Ni44NSAxMDAwYzQ3NS41OSAwIDg3My4zOS0zMzQuMTcgOTcyLjgyLTc4MS4yM0gxNzEyQzE2MTguMzcgMTUyNiAxMzMzLjI3IDE3NTAgOTk2Ljg1IDE3NTAiIGZpbGw9IiMzYWIwM2UiLz48L3N2Zz4=) */
export const CvcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-cvc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CvcCircleColorful.displayName = 'CvcCircleColorful';
