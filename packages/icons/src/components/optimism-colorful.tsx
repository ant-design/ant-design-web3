import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/optimism-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const OptimismColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon {...props} ref={ref} component={SVGComponent} />
));
OptimismColorful.displayName = 'OptimismColorful';
