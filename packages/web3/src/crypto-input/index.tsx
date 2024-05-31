import React, { useDeferredValue } from 'react';
import type { Token } from '@ant-design/web3-common';
import { Flex, InputNumber, Space } from 'antd';
import { isNull } from 'lodash';

import useIntl from '../hooks/useIntl';
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
    amount?: string;
    unitPrice?: string;
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
  const { messages } = useIntl('CryptoInput');

  const { wrapSSR, getClsName } = useCryptoInputStyle();

  // calculate token total price
  const tokenTotalPrice = useDeferredValue(
    value?.amount && balance?.unitPrice
      ? (parseFloat(value.amount) * parseFloat(balance.unitPrice)).toString()
      : undefined,
  );

  return wrapSSR(
    <Space direction="vertical" className={getClsName('wrapper')}>
      {!!header && <header>{header()}</header>}
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
          placeholder={messages.placeholder}
          className={getClsName('amount')}
        />
        <TokenSelect
          variant="borderless"
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
            <Flex className="default-footer" justify="space-between">
              <span className="total-price">{tokenTotalPrice || '-'}</span>
              <span className="token-balance">
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
