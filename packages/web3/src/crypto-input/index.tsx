import React, { useDeferredValue } from 'react';
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
   * token balance
   */
  balance?: {
    amount: string;
    unitPrice: string;
  };
  /**
   * custom render for header
   */
  header?: false | ((value?: CryptoInputProps['value']) => React.ReactNode);
  /**
   * custom render for footer
   */
  footer?: CryptoInputProps['header'];
}

export const CryptoInput = ({
  value,
  onChange,
  header,
  footer,
  balance,
  ...selectProps
}: CryptoInputProps) => {
  const { wrapSSR, getClsName } = useCryptoInputStyle();

  // calculate token total price
  const tokenTotalPrice = useDeferredValue(
    value?.amount && balance
      ? (parseFloat(value.amount) * parseFloat(balance?.unitPrice || '0')).toString()
      : undefined,
  );

  return wrapSSR(
    <Space direction="vertical" className={getClsName('wrapper')}>
      {!!header && <div>{typeof header === 'function' ? header() : header}</div>}
      <Flex gap={16} align="center">
        <InputNumber
          stringMode
          variant="borderless"
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
      {footer !== false && (
        <div className={getClsName('footer')}>
          {footer ? (
            footer()
          ) : (
            <Flex className="default" justify="space-between">
              <span>{tokenTotalPrice || '-'}</span>
              <span>
                Balance: {balance?.amount || '-'}
                {!!balance?.amount && (
                  <a
                    className="max-button"
                    onClick={() => {
                      onChange?.({
                        ...value,
                        amount: balance.amount,
                      });
                    }}
                  >
                    Max
                  </a>
                )}
              </span>
            </Flex>
          )}
        </div>
      )}
    </Space>,
  );
};
