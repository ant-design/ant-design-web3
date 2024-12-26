// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tor-colorful.svg';

/**![TorColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDY3LjM3IDY3LjI1Ij48ZGVmcy8+PHRpdGxlPnRvcmV4LS1sb2dvXzE8L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLXRvci1jb2xvcmZ1bC1MYXllcl8yIj48ZyBpZD0iYW50LXdlYjMtaWNvbi10b3ItY29sb3JmdWwtTGF5ZXJfMS0yIj48cmVjdCBpZD0iYW50LXdlYjMtaWNvbi10b3ItY29sb3JmdWwtYiIgd2lkdGg9IjY3LjM3IiBoZWlnaHQ9IjY3LjI1IiByeD0iMjAiLz48cmVjdCBpZD0iYW50LXdlYjMtaWNvbi10b3ItY29sb3JmdWwtYi0yIiB3aWR0aD0iNjcuMzciIGhlaWdodD0iNjcuMjUiIHJ4PSIyMCIgc3R5bGU9ImZpbGw6ICMyY2M5ODE7Ii8+PHBhdGggZD0iTTQ1LjczLDEwLjQzLDU2LjU3LDIxLjY0aC0yMlptLTIzLDIyLjg2TDExLjE0LDIxLjc0LDIyLjM4LDEwLjUzLDU2LjY0LDQ0Ljg3LDQ1LjI5LDU2LjA2LDM0LjA4LDQ0Ljg3LDIyLjc5LDU2LjE0LDExLjQyLDQ0Ljc5WiIgc3R5bGU9ImZpbGw6ICNmZmY7IGZpbGwtcnVsZTogZXZlbm9kZDsiLz48L2c+PC9nPjwvc3ZnPg==) */
export const TorColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tor-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TorColorful.displayName = 'TorColorful';
