import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/ethereum-circle-filled.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const EthereumCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => <AntdIcon {...props} ref={ref} component={SVGComponent} />,
);

EthereumCircleFilled.displayName = 'EthereumCircleFilled';
