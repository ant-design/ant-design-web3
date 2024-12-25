// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/sc-colorful.svg';

/**![ScColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXNjLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwNC4wMyA0MDQuMDQiPjx0aXRsZT5zaWFjb2luPC90aXRsZT48cGF0aCBkPSJNMjYyLjY1LDIwMnY2MC42SDIwMmE2MC42LDYwLjYsMCwxLDEsNjAuNi02MC42bS01OS44LTEwMWExMDEsMTAxLDAsMSwwLTYsMjAySDMwM3YtOTkuOGMwLTU1LjctNDQuNS0xMDEuOC0xMDAuMi0xMDIuMiIgc3R5bGU9ImZpbGw6IzIwZWU4MiIvPjxwYXRoIGQ9Ik0zNDQuODUsNTkuMTdhMjAyLDIwMiwwLDAsMC0yNTQuMi0yNS43LDQwLjUsNDAuNSwwLDAsMSw1LjgsOC4zLDE5Mi4yLDE5Mi4yLDAsMCwxLDI0MS4yLDI0LjZjNzQuOCw3NC43LDc0LjgsMTk2LjQsMCwyNzEuMnMtMTk2LjUsNzQuOC0yNzEuMywwYTE5Mi4yLDE5Mi4yLDAsMCwxLTI0LjUtMjQxLjIsNDAuMSw0MC4xLDAsMCwxLTguMy01LjhjLTYxLjU1LDkzLTM2LDIxOC4zNyw1NywyNzkuOTJzMjE4LjM3LDM2LDI3OS45Mi01N0EyMDIsMjAyLDAsMCwwLDM0NC44NSw1OS4xNyIgc3R5bGU9ImZpbGw6IzdmOGM4ZCIvPjxwYXRoIGQ9Ik00Ni40NSw0Ni4zN2EyMC4yLDIwLjIsMCwxLDEsLjA3LDI4LjU3bC0wLjA3LS4wN2EyMC4yLDIwLjIsMCwwLDEsMC0yOC41IiBzdHlsZT0iZmlsbDojMjBlZTgyIi8+PC9zdmc+) */
export const ScColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-sc-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ScColorful.displayName = 'ScColorful';
