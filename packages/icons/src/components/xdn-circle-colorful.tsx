// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xdn-circle-colorful.svg';

/**![XdnCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjNGY3YWEyIiByPSIxNiIvPjxwYXRoIGQ9Ik0xMy4zMDkgMTJoMi43MzhjMS4zMjIgMCAzLjY4My44MDMgMy42ODMgNHMtMi4zNiA0LTMuNjgzIDRIMTMuMzF6bTEuNTEgNi4zOGgxLjEzNGMuOTQ0IDAgMi4wNzctLjU3OCAyLjA3Ny0yLjM4cy0xLjEzMy0yLjM4LTIuMDc3LTIuMzhIMTQuODJ6TTIwLjc3IDEyaC41NjZsNS4wOTggNy4wMjZWMTJIMjd2OGgtLjU2N2wtNS4wOTgtNi44NzJWMjBoLS41Njd6TTUgMTJoMS44ODh2Mkg1em0yLjgzMyAwSDkuNzJ2Mkg3LjgzM3ptMi44MzIgMGgxLjg4OXYyaC0xLjg4OXptMCAzaDEuODg5djJoLTEuODg5em0wIDNoMS44ODl2MmgtMS44ODl6bS0yLjgzMi0zSDkuNzJ2Mkg3LjgzM3oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=) */
export const XdnCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xdn-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XdnCircleColorful.displayName = 'XdnCircleColorful';
