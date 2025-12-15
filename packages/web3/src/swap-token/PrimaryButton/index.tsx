import React from 'react';
import { Button, type ButtonProps } from 'antd';
import classNames from 'classnames';

import { CUSTOMIZE_PREFIX_CLS } from '../constant';
import { useStyle } from './style';

/** Swap Token 模块统一的主按钮，封装渐变样式及类名前缀。 */
const PrimaryButton: React.FC<ButtonProps> = ({ className, ...restProps }) => {
  const prefixCls = `${CUSTOMIZE_PREFIX_CLS}-primary-btn`;
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const mergedCls = classNames(prefixCls, hashId, className);

  return wrapSSR(<Button className={mergedCls} type="primary" {...restProps} />);
};

export default PrimaryButton;
