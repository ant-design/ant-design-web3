import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/sui-circle-filled.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const SuiCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon
    {...props}
    className={classnames('ant-web3-icon-sui-circle-filled', props.className)}
    ref={ref}
    component={SVGComponent}
  />
));
SuiCircleFilled.displayName = 'SuiCircleFilled';
