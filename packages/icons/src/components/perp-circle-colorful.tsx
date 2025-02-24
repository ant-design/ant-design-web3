// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/perp-circle-colorful.svg';

/**![PerpCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1wZXJwLWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIHN0eWxlPSJmaWxsOiAjM0NFQUFBOyIvPgo8cGF0aCBkPSJNMjIuNiwxNS45YzEuOC0xLjgsNC43LTEuOCw2LjUsMGw0LjksNC44bDAuOC0wLjhjMS44LTEuOCw0LjctMS44LDYuNSwwbDQuOCw0LjdjMS45LDEuOCwxLjksNC44LDAsNi43CglsLTEzLDEyLjhjLTEuOCwxLjgtNC43LDEuOC02LjUsMGwtMTMtMTIuOGMtMS45LTEuOC0xLjktNC44LDAtNi43TDIyLjYsMTUuOXogTTMwLjgsMjRsLTQuOC00LjdMMTcsMjhsNC44LDQuN0wzMC44LDI0eiBNMjUuMiwzNgoJbDQuOCw0LjdsNC44LTQuN0wzMCwzMS4zTDI1LjIsMzZ6IE0zMy4zLDI4bDQuOCw0LjdMNDMsMjhsLTQuOC00LjdMMzMuMywyOHoiIHN0eWxlPSJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDsgZmlsbC1vcGFjaXR5OiAwLjY7Ii8+Cjwvc3ZnPgo=) */
export const PerpCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-perp-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PerpCircleColorful.displayName = 'PerpCircleColorful';
