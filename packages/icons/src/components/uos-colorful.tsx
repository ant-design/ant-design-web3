// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/uos-colorful.svg';

/**![UosColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi11b3MtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NSA0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUgNDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0wLDIyLjVDMCwxNC4xLDAsOS45LDEuOCw2LjhDMyw0LjcsNC43LDMsNi44LDEuOEM5LjksMCwxNC4xLDAsMjIuNSwwczEyLjYsMCwxNS44LDEuOEM0MC4zLDMsNDIsNC43LDQzLjIsNi44CglDNDUsOS45LDQ1LDE0LjEsNDUsMjIuNXMwLDEyLjYtMS44LDE1LjhjLTEuMiwyLjEtMi45LDMuOC00LjksNC45QzM1LjEsNDUsMzAuOSw0NSwyMi41LDQ1UzkuOSw0NSw2LjgsNDMuMkM0LjcsNDIsMyw0MC4zLDEuOCwzOC4yCglDMCwzNS4xLDAsMzAuOSwwLDIyLjV6IiBzdHlsZT0iZmlsbDogIzdBNTJEMTsiLz4KPHBhdGggZD0iTTEyLDIzdi04LjVoNC4ydjguNWMwLDIuMiwwLjYsMy42LDEuNyw0LjZjMS4xLDEsMi41LDEuNiw0LjYsMS42YzIuMiwwLDMuNi0wLjYsNC42LTEuNmMxLTEsMS43LTIuNSwxLjctNC43Cgl2LTguNUgzM1YyM2MwLDMtMC45LDUuNy0yLjksNy42Yy0yLDEuOS00LjUsMi44LTcuNiwyLjhjLTMsMC01LjYtMC45LTcuNi0yLjhDMTIuOSwyOC43LDEyLDI2LDEyLDIzeiBNMjQuNiwyMi45di04LjNoLTQuMnY4LjMKCWMwLDAuOCwwLjIsMS4zLDAuNiwxLjdjMC40LDAuNCwwLjgsMC42LDEuNSwwLjZjMC43LDAsMS4yLTAuMiwxLjUtMC42QzI0LjQsMjQuMiwyNC42LDIzLjcsMjQuNiwyMi45eiIgc3R5bGU9ImZpbGwtcnVsZTogZXZlbm9kZDsgY2xpcC1ydWxlOiBldmVub2RkOyBmaWxsOiAjRkZGRkZGOyIvPgo8L3N2Zz4K) */
export const UosColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-uos-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

UosColorful.displayName = 'UosColorful';
