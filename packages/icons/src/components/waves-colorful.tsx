// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/waves-colorful.svg';

/**![WavesColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAyOTQuMTYgMjk0LjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00My4wOCA0My4wOGgyMDh2MjA4aC0yMDh6IiBmaWxsPSIjMDA1NWZlIiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3MTA2NzggLS43MDcxMDY3OCAuNzA3MTA2NzggLjcwNzEwNjc4IC02MC45MiAxNDcuMDgpIi8+PC9zdmc+) */
export const WavesColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-waves-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

WavesColorful.displayName = 'WavesColorful';
