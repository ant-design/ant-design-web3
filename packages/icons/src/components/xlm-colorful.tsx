// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xlm-colorful.svg';

/**![XlmColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIzNi4zNiAyMDAiPjx0aXRsZT5Bc3NldCAxPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi14bG0tY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24teGxtLWNvbG9yZnVsLUxheWVyXzEtMiI+PHBhdGggZD0iTTIwMywyNi4xNmwtMjguNDYsMTQuNS0xMzcuNDMsNzBhODIuNDksODIuNDksMCwwLDEtLjctMTAuNjlBODEuODcsODEuODcsMCwwLDEsMTU4LjIsMjguNmwxNi4yOS04LjMsMi40My0xLjI0QTEwMCwxMDAsMCwwLDAsMTguMTgsMTAwcTAsMy44Mi4yOSw3LjYxYTE4LjE5LDE4LjE5LDAsMCwxLTkuODgsMTcuNThMMCwxMjkuNTdWMTUwbDI1LjI5LTEyLjg5LDAsMCw4LjE5LTQuMTgsOC4wNy00LjExdjBMMTg2LjQzLDU1bDE2LjI4LTguMjksMzMuNjUtMTcuMTVWOS4xNFoiLz48cGF0aCBkPSJNMjM2LjM2LDUwLDQ5Ljc4LDE0NSwzMy41LDE1My4zMSwwLDE3MC4zOHYyMC40MWwzMy4yNy0xNi45NSwyOC40Ni0xNC41TDE5OS4zLDg5LjI0QTgzLjQ1LDgzLjQ1LDAsMCwxLDIwMCwxMDAsODEuODcsODEuODcsMCwwLDEsNzguMDksMTcxLjM2bC0xLC41My0xNy42Niw5QTEwMCwxMDAsMCwwLDAsMjE4LjE4LDEwMGMwLTIuNTctLjEtNS4xNC0uMjktNy42OGExOC4yLDE4LjIsMCwwLDEsOS44Ny0xNy41OGw4LjYtNC4zOFoiLz48L2c+PC9nPjwvc3ZnPg==) */
export const XlmColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xlm-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XlmColorful.displayName = 'XlmColorful';
