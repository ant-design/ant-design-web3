// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/lrc-colorful.svg';

/**![LrcColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWxyYy1jb2xvcmZ1bC1DYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzAgMjMuOSI+PHRpdGxlPmxvb3ByaW5nLWxyYy1sb2dvPC90aXRsZT48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1scmMtY29sb3JmdWwtUGF0aCIgZD0iTTE3LjQsMTEuNkgzMHYuMWwtMTkuNywxMiw5LjgtNy44Wk0xMCwwVjIzLjlsLTEwLThaIiBzdHlsZT0iZmlsbDojMWM2MGZmIi8+PC9zdmc+) */
export const LrcColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-lrc-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LrcColorful.displayName = 'LrcColorful';
