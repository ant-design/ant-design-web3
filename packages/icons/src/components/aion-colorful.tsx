// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/aion-colorful.svg';

/**![AionColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWFpb24tY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjYgNjgiPjx0aXRsZT5haW9uLWFpb24tbG9nbzwvdGl0bGU+PHBhdGggZD0iTTMzLDY4YTgsOCwwLDEsMC04LThBOCw4LDAsMCwwLDMzLDY4WiIgc3R5bGU9ImZpbGw6IzFjMWMxYyIvPjxwYXRoIGQ9Ik00MS42OCwwSDI0LjI4TDAsNjdIMTQuN0wzMywxNi41NSw1MS4yNiw2N0g2NloiIHN0eWxlPSJmaWxsOiMxYzFjMWMiLz48L3N2Zz4=) */
export const AionColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-aion-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

AionColorful.displayName = 'AionColorful';
