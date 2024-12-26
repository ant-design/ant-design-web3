// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/link-colorful.svg';

/**![LinkColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM3LjggNDMuNiI+PGRlZnMvPjx0aXRsZT5Bc3NldCAxPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1saW5rLWNvbG9yZnVsLUxheWVyXzIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLWxpbmstY29sb3JmdWwtTGF5ZXJfMS0yIj48cGF0aCBkPSJNMTguOSwwbC00LDIuM0w0LDguNiwwLDEwLjlWMzIuN0w0LDM1bDExLDYuMyw0LDIuMyw0LTIuM0wzMy44LDM1bDQtMi4zVjEwLjlsLTQtMi4zTDIyLjksMi4zWk04LDI4LjFWMTUuNUwxOC45LDkuMmwxMC45LDYuM1YyOC4xTDE4LjksMzQuNFoiIHN0eWxlPSJmaWxsOiAjMmE1YWRhOyIvPjwvZz48L2c+PC9zdmc+) */
export const LinkColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-link-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LinkColorful.displayName = 'LinkColorful';
