// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/la-circle-colorful.svg';

/**![LaCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWxhLWNpcmNsZS1jb2xvcmZ1bC3QodC70L7QuV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTEuNCAxMTEuNCI+PHRpdGxlPmxhdG9rZW4tbGEtbG9nbzwvdGl0bGU+PHBvbHlnb24gaWQ9ImFudC13ZWIzLWljb24tbGEtY2lyY2xlLWNvbG9yZnVsLXBvbHlnb24yNyIgcG9pbnRzPSI2MS43IDYwLjggNzMgNjAuOCA2Ny40IDQ1LjEgNjEuNyA2MC44IiBzdHlsZT0iZmlsbDojMTYxZjM3Ii8+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tbGEtY2lyY2xlLWNvbG9yZnVsLXBhdGgyOSIgZD0iTTU1LjcsMGE1NS43LDU1LjcsMCwxLDAsNTUuNyw1NS43QTU1Ljc4LDU1Ljc4LDAsMCwwLDU1LjcsMFpNODAuNiw4Mi4xLDc2LjgsNzEuNEg1Ny45TDU0LjEsODIuMWgtMzRMMzksMjkuNEg1MC4zbC0xNS4xLDQySDQ2LjVsMTUuMS00Mkg3M0w5Miw4Mi4xWiIgc3R5bGU9ImZpbGw6IzE2MWYzNyIvPjwvc3ZnPg==) */
export const LaCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-la-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LaCircleColorful.displayName = 'LaCircleColorful';
