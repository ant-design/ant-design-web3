// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bgb-colorful.svg';

/**![BgbColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1iZ2ItY29sb3JmdWwtc3ZnMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcyBpZD0iYW50LXdlYjMtaWNvbi1iZ2ItY29sb3JmdWwtZGVmczIiLz4KICA8cmVjdCB4PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4LjcxMDk0MDQiIGZpbGw9IiMwMGYwZmYiIGlkPSJhbnQtd2ViMy1pY29uLWJnYi1jb2xvcmZ1bC1yZWN0MSIgeT0iMCIvPgogIDxwYXRoIGQ9Im0gMTguNDU5NjE3LDE1Ljc2NzEgaCA3LjQ2ODYgbCA3LjY0MDQsNy41OTE2IGMgMC40OTcsMC40OTM4IDAuNDk5NiwxLjI5NzEgMC4wMDUxLDEuNzkzNCBMIDIzLjc3NTMxNywzNSBoIC03LjY5MzcgbCAyLjMyNiwtMi4yNjEzIDguNTQsLTguNDg2MSAtOC40MzE2LC04LjQ4NjIiIGZpbGw9IiMxYjFiMWIiIGlkPSJhbnQtd2ViMy1pY29uLWJnYi1jb2xvcmZ1bC1wYXRoMSIvPgogIDxwYXRoIGQ9Im0gMjEuNTI5MjE3LDI0LjIzMzYgaCAtNy40Njg2IGwgLTcuNjQwNDIsLTcuNTkxNyBjIC0wLjQ5NzAyLC0wLjQ5MzggLTAuNDk5NTYsLTEuMjk3IC0wLjAwNTA4LC0xLjc5MzQgTCAxNi4yMTM1MTcsNSBoIDcuNjkzNyBsIC0yLjMyNiwyLjI2MTMyIC04LjU0LDguNDg2MDggOC40MzE2LDguNDg2MiIgZmlsbD0iIzFiMWIxYiIgaWQ9ImFudC13ZWIzLWljb24tYmdiLWNvbG9yZnVsLXBhdGgyIi8+Cjwvc3ZnPgo=) */
export const BgbColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bgb-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BgbColorful.displayName = 'BgbColorful';
