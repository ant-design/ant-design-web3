import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/sui-filled.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export const SuiFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon {...props} ref={ref} component={SVGComponent} />
));
SuiFilled.displayName = 'SuiFilled';
