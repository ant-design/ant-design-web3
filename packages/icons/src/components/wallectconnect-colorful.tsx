import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/wallectconnect-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const WalletConnectColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => <AntdIcon {...props} ref={ref} component={SVGComponent} />,
);
WalletConnectColorful.displayName = 'WalletConnectColorful';
