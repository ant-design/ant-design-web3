import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/arbitrum-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const ArbitrumColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon {...props} ref={ref} component={SVGComponent} />
));
ArbitrumColorful.displayName = 'ArbitrumColorful';
