// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tron-colorful.svg';

/**![TronColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGw9IiNFQjAwMjkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTc5OC4yOSAxNDIuMzAyIDI1IDBsNDA2Ljk1NiAxMDI0IDU2Ny4wMjgtNjkwLjgzM0w3OTguMjkgMTQyLjMwMlptLTEyLjQ0NCA2Mi43MDEgMTE4LjI4NiAxMTIuNDI4LTMyMy41MzEgNTguNTg2IDIwNS4yNDUtMTcxLjAxNFpNNTEwLjM0NiAzNjQuMyAxNjkuMzM2IDgxLjQ4OGw1NTcuMzQzIDEwMi41NUw1MTAuMzQ2IDM2NC4zWm0tMjQuMzA2IDUwLjAxNkw0MzAuNDU1IDg3NCAxMzAuNjUgMTE5LjU0NWwzNTUuMzkgMjk0Ljc3Wm01MS40NjggMjQuNDAzIDM1OC4yNDgtNjQuODgtNDEwLjkyNyA1MDAuNjQ1IDUyLjY4LTQzNS43NjVaIj48L3BhdGg+Cjwvc3ZnPgo=) */
export const TronColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tron-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TronColorful.displayName = 'TronColorful';
