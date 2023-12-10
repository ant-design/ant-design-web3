import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/wallet-white-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const WalletWhiteColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => (
    <AntdIcon
      {...props}
      className={classnames('ant-web3-icon-wallet-white-colorful', props.className)}
      ref={ref}
      component={SVGComponent}
    />
  ),
);

WalletWhiteColorful.displayName = 'WalletWhiteColorful';
