// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ftt-colorful.svg';

/**![FttColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMDAuMDMgMTczOS4yNyI+PGRlZnMvPjx0aXRsZT5mdHgtLWxvZ288L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLWZ0dC1jb2xvcmZ1bC1MYXllcl8yIj48ZyBpZD0iYW50LXdlYjMtaWNvbi1mdHQtY29sb3JmdWwtTGF5ZXJfMS0yIj48cGF0aCBkPSJNNTY1LjQxLjExcTcxNy4yMS0uMjIsMTQzNC41MSwwLC4yMiwyMzEuODMsMCw0NjMuNTgtNzE3LjIzLjIyLTE0MzQuNTEsMFE1NjUuMTgsMjMxLjg2LDU2NS40MS4xMVoiIHN0eWxlPSJmaWxsOiAjMDJhNmMyOyIvPjxwYXRoIGQ9Ik0uNiw2MzguMXEyMzEuMzktMS4yLDQ2Mi44NiwwLDEuMiwyMzEuMzksMCw0NjIuODZRMjMyLDExMDIuMTUuNiwxMTAxLS42LDg2OS41Ny42LDYzOC4xWiIgc3R5bGU9ImZpbGw6ICM1ZmNhZGU7Ii8+PHBhdGggZD0iTTU2NS43Nyw2MzguMXE1MTcuNjctMS4xLDEwMzUuMjcsMCwxLjEsMjMxLjM5LDAsNDYyLjg2LTUxNy42NiwxLjA4LTEwMzUuMjcsMFE1NjQuNjksODY5LjU2LDU2NS43Nyw2MzguMVoiIHN0eWxlPSJmaWxsOiAjNWZjYWRlOyIvPjxwYXRoIGQ9Ik01NjYuMiwxMjc2LjIzcTIzMS0yLjUxLDQ2MS45MiwwLDIuNCwyMzAuODUuMDcsNDYxLjkyLTIzMSwyLjI4LTQ2MS45MS0uMDhRNTYzLjg4LDE1MDcuMjQsNTY2LjIsMTI3Ni4yM1oiIHN0eWxlPSJmaWxsOiAjYWJlYmY0OyIvPjwvZz48L2c+PC9zdmc+) */
export const FttColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ftt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FttColorful.displayName = 'FttColorful';
