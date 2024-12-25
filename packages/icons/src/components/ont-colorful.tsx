// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ont-colorful.svg';

/**![OntColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1vbnQtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxODYuOCAxNzguOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg2LjggMTc4Ljg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0yNi4yLDI2LjJMMjYuMiwyNi4yTDAsMHY4OS40YzAsMjIuOSw4LjcsNDUuOCwyNi4yLDYzLjJjMzQuOSwzNC45LDkxLjYsMzQuOSwxMjYuNSwwTDI2LjIsMjYuMnoiIHN0eWxlPSJmaWxsOiAjNDhBM0ZGOyIvPgo8cGF0aCBkPSJNMTYwLjYsMTUyLjZMMTYwLjYsMTUyLjZsMjYuMiwyNi4yVjg5LjRjMC0yMi45LTguNy00NS44LTI2LjItNjMuMkMxMjUuNy04LjcsNjktOC43LDM0LjEsMjYuMkwxNjAuNiwxNTIuNnoiIHN0eWxlPSJmaWxsOiAjNDhBM0ZGOyIvPgo8L3N2Zz4K) */
export const OntColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ont-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

OntColorful.displayName = 'OntColorful';
