// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/neo-colorful.svg';

/**![NeoColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzMy4xIDM2OC41Ij48ZGVmcy8+PHRpdGxlPm5lby1uZW8tbG9nbzwvdGl0bGU+PGcgaWQ9ImFudC13ZWIzLWljb24tbmVvLWNvbG9yZnVsLUxheWVyXzIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLW5lby1jb2xvcmZ1bC1MYXllcl8xLTIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLW5lby1jb2xvcmZ1bC1MYXllcl8yLTIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLW5lby1jb2xvcmZ1bC1MYXllcl8xLTItMiI+PHBvbHlnb24gcG9pbnRzPSIwIDY0LjYgMCAzMTEuMSAxNjAgMzY4LjUgMTYwIDEyMCAzMzMuMSA1Ni4yIDE3NiAwIDAgNjQuNiIgc3R5bGU9ImZpbGw6ICMwMGU1OTk7Ii8+PHBvbHlnb24gcG9pbnRzPSIxNzMuMSAxMjcuMSAxNzMuMSAyNjEuOSAzMzMuMSAzMTkuMyAzMzMuMSA2Ny45IDE3My4xIDEyNy4xIiBzdHlsZT0iZmlsbDogIzAwYWY5MjsiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+) */
export const NeoColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-neo-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NeoColorful.displayName = 'NeoColorful';
