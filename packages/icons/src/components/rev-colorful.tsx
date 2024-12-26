// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/rev-colorful.svg';

/**![RevColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXJldi1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTggMTk4IiA+PGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLXJldi1jb2xvcmZ1bC1TVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OC4yMTUiIHkxPSIzNC42NzYiIHgyPSIxNzEuMjgxIiB5Mj0iMTg5Ljc4NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzcxYTRlIi8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iIzVlMTk1MyIvPjxzdG9wIG9mZnNldD0iLjg3NSIgc3RvcC1jb2xvcj0iIzQzMGY0ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNhMGM0YyIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTS4zIDBoMTk4djE5OEguM3oiIGZpbGw9IiB1cmwoI2FudC13ZWIzLWljb24tcmV2LWNvbG9yZnVsLVNWR0lEXzFfKSIvPjxwYXRoIGQ9Ik01MS44IDQwdjEzMWwyOC0xNVY1Nmw0MCAyMy0zMCAxNnYzM2w2NyA0NnYtMzFsLTQxLTI5IDM0LTE4VjY0bC03MC0zOXoiIGZpbGw9IiAjZmZmIi8+PC9zdmc+) */
export const RevColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-rev-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

RevColorful.displayName = 'RevColorful';
