// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ast-colorful.svg';

/**![AstColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9Ijk5IDk4LjMgNjAyIDYwMy40IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01NTEuOCA1NDkuOS0xNTEuOCAxNTEuOC03NS4zLTc1LjNjODEuMi00LjggMTU5LjYtMzEuMiAyMjcuMS03Ni41em0xNDMuOS0xNTUuOS0xOC42LTE4LjUtMjc3LjEtMjc3LjItMjc3LjIgMjc3LjItMjMuOCAyMy44IDguNiA3LjRjOS43IDguMSAxOS43IDE1LjggMzAgMjMgMTA5LjYgNzcuMiAyNDUuNSAxMDAuNSAzNzEgNjkuOCA1MS4yLTEyLjQgOTkuOC0zMy43IDE0My43LTYyLjkgMTAuOS03LjIgMjEuNS0xNSAzMS45LTIzLjIgNS43LTQuNiAxMS4zLTkuMyAxNi44LTE0LjF6bS0yMjIuNiA2OS43Yy04Mi43LTUwLjgtMTc3LjktNzcuNS0yNzQuOS03Ny4xIDEyNi40LTU1LjEgMjgxLjUtNjIuNiA0MjMuNyAxOS4yLTQ1LjMgMjguOC05NS45IDQ4LjUtMTQ4LjggNTcuOXoiIGZpbGw9IiMyYjcxZmYiLz48L3N2Zz4=) */
export const AstColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ast-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

AstColorful.displayName = 'AstColorful';
