// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/cnd-circle-colorful.svg';

/**![CndCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWNuZC1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTguOTEgOTguOTEiPjx0aXRsZT5jaW5kaWNhdG9yPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1jbmQtY2lyY2xlLWNvbG9yZnVsLUdyb3VwIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1jbmQtY2lyY2xlLWNvbG9yZnVsLVNoYXBlIiBkPSJNNDkuNDUsOTguOTFBNDkuNDUsNDkuNDUsMCwxLDEsOTguOTEsNDkuNDUsNDkuNDUsNDkuNDUsMCwwLDEsNDkuNDUsOTguOTFabTAtMy44NkE0NS41OSw0NS41OSwwLDEsMCwzLjg2LDQ5LjQ1LDQ1LjYsNDUuNiwwLDAsMCw0OS40NSw5NVoiLz48Y2lyY2xlIGlkPSJhbnQtd2ViMy1pY29uLWNuZC1jaXJjbGUtY29sb3JmdWwtT3ZhbCIgY3g9IjQ5LjU1IiBjeT0iNDkuNTUiIHI9IjQuMjUiLz48L2c+PC9zdmc+) */
export const CndCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-cnd-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CndCircleColorful.displayName = 'CndCircleColorful';
