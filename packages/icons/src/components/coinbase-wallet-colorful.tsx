import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/coinbase-wallet-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const CoinbaseWalletColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => (
    <AntdIcon
      {...props}
      className={classnames('ant-web3-icon-coinbase-wallet-colorful', props.className)}
      ref={ref}
      component={SVGComponent}
    />
  ),
);
CoinbaseWalletColorful.displayName = 'CoinbaseWalletColorful';
