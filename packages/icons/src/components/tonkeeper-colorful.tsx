// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tonkeeper-colorful.svg';

/**![TonkeeperColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDk2IDk2Ij4KICA8cGF0aCBmaWxsPSIjNDVBRUY1IiBkPSJNNDguNSA0NS4zMzMgOTEuMTY3IDI2IDQ4LjUgOTMuMzMzeiIgb3BhY2l0eT0iMC43NSI+PC9wYXRoPgogIDxwYXRoIGZpbGw9IiM0NUFFRjUiIGQ9Ik00OC41IDQ1LjMzMyA1LjgzMyAyNiA0OC41IDkzLjMzM3oiIG9wYWNpdHk9IjAuNSI+PC9wYXRoPgogIDxwYXRoIGZpbGw9IiM0NUFFRjUiIGQ9Ik00OC41IDQ1LjMzMyA1LjgzMyAyNiA0OC41IDYuNjY3IDkxLjE2NyAyNnoiPjwvcGF0aD4KPC9zdmc+Cg==) */
export const TonkeeperColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tonkeeper-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TonkeeperColorful.displayName = 'TonkeeperColorful';
