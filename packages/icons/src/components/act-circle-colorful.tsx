// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/act-circle-colorful.svg';

/**![ActCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM3NjdERkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMy43NyA2LjVoNC40NmEuODcuODcgMCAwIDEgLjc1OS40NDRsNi45MDYgMTIuMzE5YS44Ny44NyAwIDAgMSAwIC44NWwtMi4yMSAzLjk0MmEuODcuODcgMCAwIDEtLjc1OC40NDVIOS4wNzNhLjg3Ljg3IDAgMCAxLS43NTktLjQ0NWwtMi4yMDktMy45NDJhLjg3Ljg3IDAgMCAxIDAtLjg1bDYuOTA2LTEyLjMxOWEuODcuODcgMCAwIDEgLjc1OS0uNDQ0ek0xNiAxMS40MDFsLTQuNjUzIDguMjg3aDkuMzA2TDE2IDExLjQwMXoiLz48L2c+PC9zdmc+) */
export const ActCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-act-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ActCircleColorful.displayName = 'ActCircleColorful';
