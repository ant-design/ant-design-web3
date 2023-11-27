import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/ethereum-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const EthereumColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon {...props} ref={ref} component={SVGComponent} />
));
EthereumColorful.displayName = 'EthereumColorful';
