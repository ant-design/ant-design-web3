// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/block-circle-colorful.svg';

/**![BlockCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxMDEzNDEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMS4wMjIgN0gyMS4yNWw1LjI1IDktNS4yNSA5SDEwLjkzMWw1LjE2LTktNS4wNy05em01LjQzIDMuMTY2TDE5LjgwMyAxNmwtMy4zNSA1LjgzNGgyLjk4OEwyMi43ODkgMTZsLTMuMzUtNS44MzRoLTIuOTg2eiIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNMTIuMTEzIDExLjAyNkw5LjIxMSAxNmwyLjg3NiA0LjkzLTEuODM5IDMuMjA5TDUuNSAxNmw0Ljc4OS04LjIxMXoiLz48L2c+PC9nPjwvc3ZnPg==) */
export const BlockCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-block-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BlockCircleColorful.displayName = 'BlockCircleColorful';
