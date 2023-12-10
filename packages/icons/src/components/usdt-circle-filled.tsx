import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/usdt-circle-filled.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const USDTCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon
    {...props}
    className={classnames('ant-web3-icon-usdt-circle-filled', props.className)}
    ref={ref}
    component={SVGComponent}
  />
));
USDTCircleFilled.displayName = 'USDTCircleFilled';
