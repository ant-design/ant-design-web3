import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/bsc-filled.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const BSCFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon {...props} ref={ref} component={SVGComponent} />
));
BSCFilled.displayName = 'BSCFilled';
