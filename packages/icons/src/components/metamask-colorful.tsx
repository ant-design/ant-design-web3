import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import SVGComponent from '../svgs/metamask-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';
import { ConfigProvider } from 'antd';

export const MetaMaskColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-metamask-colorful');
  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});
MetaMaskColorful.displayName = 'MetaMaskColorful';
