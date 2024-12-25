// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ptoy-colorful.svg';

/**![PtoyColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXB0b3ktY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzQ0IDMyOS44Ij48cGF0aCBkPSJNMTA2LjggNzEuMXYyM2MwIDE0LjYtMTEuOCAyNi4zLTI2LjMgMjYuM0gyOS42QzEzLjMgMTIwLjMgMCAxMzMuNyAwIDE1MHY0My40QzAgMjA5LjcgMTMuMyAyMjMgMjkuNiAyMjNoNTAuOWMxNC42IDAgMjYuMyAxMS45IDI2LjMgMjYuM3Y1MC45YzAgMTYuMyAxMy4zIDI5LjYgMjkuNiAyOS42aDQzLjRjMTYuMyAwIDI5LjYtMTMuMyAyOS42LTI5LjZ2LTUwLjljMC0xNC42IDExLjgtMjYuMyAyNi4zLTI2LjNoMjNjLTgzLjYgMC0xNTEuOS02OC4zLTE1MS45LTE1MS45eiIvPjxwYXRoIGQ9Ik0zMTYuMiAxOTMuNFYxNTBjMC0xNi4zLTEzLjMtMjkuNi0yOS42LTI5LjZoLTUwLjljLTE0LjYgMC0yNi4zLTExLjgtMjYuMy0yNi4zVjQzLjJjMC0xNi4zLTEzLjMtMjkuNi0yOS42LTI5LjZoLTQzLjRjLTE2LjMgMC0yOS42IDEzLjMtMjkuNiAyOS42djI3LjljMCA4My42IDY4LjQgMTUxLjkgMTUxLjkgMTUxLjloMjcuOWMxNi4zIDAgMjkuNi0xMy4zIDI5LjYtMjkuNnoiIHN0eWxlPSJmaWxsOiAjNDJCMzRGOyIvPjxwYXRoIGQ9Ik0yNDAuMyA4Mi4xUzIzMC40LTIxLjIgMzQ0IDRjLTIuMSAzMC40LjcgMTA1LjItMTAzLjcgNzguMXoiIHN0eWxlPSJmaWxsOiAjNDJCMzRGOyIvPjwvc3ZnPg==) */
export const PtoyColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ptoy-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PtoyColorful.displayName = 'PtoyColorful';
