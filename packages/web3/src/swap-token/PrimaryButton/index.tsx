import React from 'react';
import { Button, ConfigProvider, type ButtonProps } from 'antd';
import classNames from 'classnames';

import { useStyle } from './style';

const PrimaryButton: React.FC<ButtonProps> = ({ className, ...restProps }) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('swap-token-primary-btn', 'ant-web3');
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const mergedCls = classNames(prefixCls, hashId, className);

  return wrapSSR(<Button className={mergedCls} type="primary" {...restProps} />);
};

export default PrimaryButton;
