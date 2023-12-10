import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/arbitrum-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const ArbitrumColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon
    {...props}
    className={classnames('ant-web3-icon-arbitrum-colorful', props.className)}
    ref={ref}
    component={SVGComponent}
  />
));
ArbitrumColorful.displayName = 'ArbitrumColorful';
