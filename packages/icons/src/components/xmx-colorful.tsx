// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xmx-colorful.svg';

/**![XmxColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwLjI2IDMyLjk2Ij48ZGVmcy8+PHRpdGxlPnhtYXM8L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLXhteC1jb2xvcmZ1bC1MYXllcl8yIj48ZyBpZD0iYW50LXdlYjMtaWNvbi14bXgtY29sb3JmdWwtTGF5ZXJfMS0yIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi14bXgtY29sb3JmdWwt5ZCI5bm25b2i54q2IiBkPSJNMTUsMTkuNjR2MGwuMDUsMCwxNS4xNy03LjR2Mi4xNEwxOCwyMC4zM2wxMi4yLDN2MkwxNS4zMSwyMS42NS4wNiwyOS4wOVYyN1ptMC04LjI4TDMwLjIyLDMuOTRWNi4wOEwwLDIwLjgxVjE4LjY3bDEyLjI4LTZMMCw5LjY4di0yWk0wLDAsMTUuMTgsMy43djJMMCwyWk0wLDUuODR2LTJMMTUuMiw3LjU2djJabTAsMTdMMzAuMjIsOC4wOXYyLjE0TDAsMjQuOTRabTMwLjIsNi4zMUwxNSwyNS40M3YtMmwxNS4xOCwzLjcxWk0xNSwyOS4yNnYtMkwzMC4yMiwzMXYyWiIgc3R5bGU9ImZpbGw6ICNmMDM7Ii8+PC9nPjwvZz48L3N2Zz4=) */
export const XmxColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xmx-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XmxColorful.displayName = 'XmxColorful';
