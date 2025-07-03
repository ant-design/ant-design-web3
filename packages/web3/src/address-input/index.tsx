import type { ReactNode } from 'react';
import React, { isValidElement, useContext, useMemo, useState } from 'react';
import { ChainType, checksumAddress } from '@ant-design/web3-common';
// import type { ChainType } from '@ant-design/web3-common';
import type { TooltipProps } from 'antd';
import { ConfigProvider, Input, type InputProps } from 'antd';
import type { TextProps } from 'antd/lib/typography/Text';
import classNames from 'classnames';

import { useProvider } from '../hooks';
import useIntl from '../hooks/useIntl';
import { fillWithPrefix, formatAddress } from '../utils';
import { useStyle } from './style';

/**
 * Props for the AddressInput component.
 */
export interface AddressInputProps {
  /**
   * @desc 使用那个链的 checksum 算法
   */
  checksum?: ChainType;
  /**
   * @desc 输入框的属性
   */
  fieldProps?: InputProps;
}

export const AddressInput: React.FC<React.PropsWithChildren<AddressInputProps>> = (props) => {
  const { checksum, fieldProps: { onChange, ...restFieldProps } = {} } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { addressPrefix: addressPrefixContext } = useProvider();
  const prefixCls = getPrefixCls('web3-address');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const [address, setAddress] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ?? '';
    let address = value;

    if (checksum) {
      address = checksumAddress(value, checksum) ?? value;
    }

    setAddress(address);
    onChange?.(e);
  };

  return wrapSSR(<Input value={address} onChange={handleChange} {...restFieldProps} />);
};
