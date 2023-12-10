import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/metamask-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const MetaMaskColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon
    {...props}
    className={classnames('ant-web3-icon-metaMask-colorful', props.className)}
    ref={ref}
    component={SVGComponent}
  />
));
MetaMaskColorful.displayName = 'MetaMaskColorful';
