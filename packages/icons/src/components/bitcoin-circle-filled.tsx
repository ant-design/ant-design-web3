import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/bitcoin-circle-filled.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const BitcoinCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => <AntdIcon {...props} ref={ref} component={SVGComponent} />,
);

BitcoinCircleFilled.displayName = 'BitcoinCircleFilled';
