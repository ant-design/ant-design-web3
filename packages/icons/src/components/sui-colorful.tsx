import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/sui-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const SuiColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon
    {...props}
    className={classnames('ant-web3-icon-sui-colorful', props.className)}
    ref={ref}
    component={SVGComponent}
  />
));
SuiColorful.displayName = 'SuiColorful';
