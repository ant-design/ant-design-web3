import React from 'react';
import type { Token } from '@ant-design/web3-common';
import { Flex, InputNumber, Space } from 'antd';
import { isNull } from 'lodash';

import { TokenSelect, type TokenSelectProps } from '../token-select';
import { useCryptoInputStyle } from './style';

export interface CryptoInputProps extends Omit<TokenSelectProps, 'value' | 'onChange'> {
  /**
   * token amount
   */
  value?: {
    amount?: string;
    token?: Token;
  };
  /**
   * token amount change callback
   * @param value token and amount
   */
  onChange?: (value?: CryptoInputProps['value']) => void;
  /**
   * custom render for header
   */
  header?: React.ReactNode;
  /**
   * custom render for footer
   */
  footer?: React.ReactNode;
}

export const CryptoInput = ({
  value,
  onChange,
  header,
  footer,
  ...selectProps
}: CryptoInputProps) => {
  const { wrapSSR, getClsName } = useCryptoInputStyle();

  return wrapSSR(
    <Space direction="vertical" className={getClsName('wrapper')}>
      {header}
      <Flex gap={16} align="center">
        <InputNumber
          stringMode
          controls={false}
          value={value?.amount}
          precision={value?.token?.decimal}
          formatter={(amount) => amount || ''}
          onChange={(amt) => {
            onChange?.({
              ...value,
              amount: isNull(amt) ? undefined : amt,
            });
          }}
          placeholder="Please enter amount"
          className={getClsName('amount')}
        />
        <TokenSelect
          variant="borderless"
          placeholder="Please select token"
          {...selectProps}
          value={value?.token}
          onChange={(token) =>
            onChange?.({
              ...value,
              token,
            })
          }
        />
      </Flex>
      {footer}
    </Space>,
  );
};
