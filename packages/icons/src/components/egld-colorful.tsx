// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/egld-colorful.svg';

/**![EgldColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zOnhvZG09Imh0dHA6Ly93d3cuY29yZWwuY29tL2NvcmVsZHJhdy9vZG0vMjAwMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1lZ2xkLWNvbG9yZnVsLUxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnIGlkPSJhbnQtd2ViMy1pY29uLWVnbGQtY29sb3JmdWwtTGF5ZXJfeDAwMjBfMSI+Cgk8ZyBpZD0iYW50LXdlYjMtaWNvbi1lZ2xkLWNvbG9yZnVsLV8yMDkwODc1MzIwNzA0Ij4KCQk8cmVjdCB5PSIwIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7Ii8+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xMzEzLDEyNTBsNTI3LTI3NWwtODgtMTY1bC00ODMsMTkyYy0xMSw1LTI3LDUtMzgsMEw3NDgsODEwbC04OCwxNjVsNTI3LDI3NWwtNTI3LDI3NWw4OCwxNjVsNDgzLTE5MiAgICAgYzExLTUsMjctNSwzOCwwbDQ4MywxOTJsODgtMTY1TDEzMTMsMTI1MHoiIHN0eWxlPSJmaWxsOiAjMjNGN0REOyIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const EgldColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-egld-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EgldColorful.displayName = 'EgldColorful';
