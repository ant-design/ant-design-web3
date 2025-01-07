// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/near-colorful.svg';

/**![NearColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1uZWFyLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTAuMSA5MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTAuMSA5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBkPSJNNzIuMiw0LjZMNTMuNCwzMi41Yy0xLjMsMS45LDEuMiw0LjIsMywyLjZMNzQuOSwxOWMwLjUtMC40LDEuMi0wLjEsMS4yLDAuNnY1MC4zYzAsMC43LTAuOSwxLTEuMywwLjVsLTU2LTY3CglDMTcsMS4yLDE0LjQsMCwxMS41LDBoLTJDNC4zLDAsMCw0LjMsMCw5LjZ2NzAuOEMwLDg1LjcsNC4zLDkwLDkuNiw5MGMzLjMsMCw2LjQtMS43LDguMi00LjZsMTguOC0yNy45YzEuMy0xLjktMS4yLTQuMi0zLTIuNgoJbC0xOC41LDE2Yy0wLjUsMC40LTEuMiwwLjEtMS4yLTAuNlYyMC4xYzAtMC43LDAuOS0xLDEuMy0wLjVsNTYsNjdjMS44LDIuMiw0LjUsMy40LDcuMywzLjRoMmM1LjMsMCw5LjYtNC4zLDkuNi05LjZWOS42CgljMC01LjMtNC4zLTkuNi05LjYtOS42Qzc3LjEsMCw3NCwxLjcsNzIuMiw0LjZ6Ii8+Cjwvc3ZnPgo=) */
export const NearColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-near-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NearColorful.displayName = 'NearColorful';
