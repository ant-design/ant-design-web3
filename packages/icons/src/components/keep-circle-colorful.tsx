// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/keep-circle-colorful.svg';

/**![KeepCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1rZWVwLWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY1IDY1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NSA2NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBkPSJNMzIuNSwwQzE0LjYsMCwwLDE0LjYsMCwzMi41UzE0LjYsNjUsMzIuNSw2NVM2NSw1MC40LDY1LDMyLjVDNjUsMTQuNiw1MC40LDAsMzIuNSwweiBNNDYuMSwyNS4yaC0ybC02LjIsNy4ybDYuMiw3LjJoMgoJdjUuOEgzM3YtNS44aDJMMzAuOSwzNWgtMS43djQuOGgyLjN2NS44SDE4Ljh2LTUuOGgyLjh2LTcuMnYtNy4zaC0yLjh2LTUuOEgyMnYyLjJoMS43di0yLjJoMy4xdjIuMmgxLjd2LTIuMmgzLjF2NS43aC0yLjN2NC44aDEuNwoJbDQuMS00LjhoLTJ2LTUuN2gxMy4yTDQ2LjEsMjUuMkw0Ni4xLDI1LjJ6Ii8+Cjwvc3ZnPgo=) */
export const KeepCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-keep-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KeepCircleColorful.displayName = 'KeepCircleColorful';
