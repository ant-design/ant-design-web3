import React from 'react';
import { Button, type ButtonProps } from 'antd';
import classNames from 'classnames';

import { CUSTOMIZE_PREFIX_CLS } from '../constant';
import { useStyle } from './style';

const PrimaryButton: React.FC<ButtonProps> = ({ className, ...restProps }) => {
  const prefixCls = `${CUSTOMIZE_PREFIX_CLS}-primary-btn`;
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const mergedCls = classNames(prefixCls, hashId, className);

  return wrapSSR(<Button className={mergedCls} type="primary" {...restProps} />);
};

export default PrimaryButton;
