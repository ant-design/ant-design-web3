// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ltc-circle-colorful.svg';

/**![LtcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWx0Yy1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODIuNiA4Mi42Ij48dGl0bGU+bGl0ZWNvaW4tbHRjLWxvZ288L3RpdGxlPjxjaXJjbGUgY3g9IjQxLjMiIGN5PSI0MS4zIiByPSIzNi44MyIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik00MS4zLDBBNDEuMyw0MS4zLDAsMSwwLDgyLjYsNDEuM2gwQTQxLjE4LDQxLjE4LDAsMCwwLDQxLjU0LDBaTTQyLDQyLjcsMzcuNyw1Ny4yaDIzYTEuMTYsMS4xNiwwLDAsMSwxLjIsMS4xMnYuMzhsLTIsNi45YTEuNDksMS40OSwwLDAsMS0xLjUsMS4xSDIzLjJsNS45LTIwLjEtNi42LDJMMjQsNDRsNi42LTIsOC4zLTI4LjJhMS41MSwxLjUxLDAsMCwxLDEuNS0xLjFoOC45YTEuMTYsMS4xNiwwLDAsMSwxLjIsMS4xMnYuMzhMNDMuNSwzOGw2LjYtMi0xLjQsNC44WiIgc3R5bGU9ImZpbGw6IzM0NWQ5ZCIvPjwvc3ZnPg==) */
export const LtcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ltc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LtcCircleColorful.displayName = 'LtcCircleColorful';
