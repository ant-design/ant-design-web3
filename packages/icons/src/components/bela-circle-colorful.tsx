// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bela-circle-colorful.svg';

/**![BelaCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjMTNhMGY2IiByPSIxNiIvPjxwYXRoIGQ9Ik04LjI5NyAxMS41NjhBMi40MjIgMi40MjIgMCAwIDEgNyA5LjQyMmEyLjQxNiAyLjQxNiAwIDEgMSA0LjU1My0xLjEzNCA4Ljg5MSA4Ljg5MSAwIDAgMSA0LjUwMS0xLjIxNmM0Ljk0IDAgOC45NDYgNC4wMTQgOC45NDYgOC45NjRTMjAuOTk1IDI1IDE2LjA1NCAyNXMtOC45NDYtNC4wMTMtOC45NDYtOC45NjRhOC45NCA4Ljk0IDAgMCAxIDEuMTg5LTQuNDY4em03Ljc1NyA4Ljg3OGMyLjQzIDAgNC40LTEuOTc0IDQuNC00LjQxcy0xLjk3LTQuNDEtNC40LTQuNDEtNC40IDEuOTc1LTQuNCA0LjQxIDEuOTcgNC40MSA0LjQgNC40MXoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+) */
export const BelaCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bela-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BelaCircleColorful.displayName = 'BelaCircleColorful';
