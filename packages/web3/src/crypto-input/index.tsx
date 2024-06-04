import React, { useDeferredValue } from 'react';
import type { Token } from '@ant-design/web3-common';
import { Flex, InputNumber, Space, Typography } from 'antd';
import Decimal from 'decimal.js';
import { isNull } from 'lodash';

import { CryptoPrice } from '../crypto-price';
import useIntl from '../hooks/useIntl';
import { TokenSelect, type TokenSelectProps } from '../token-select';
import { useCryptoInputStyle } from './style';

// get CryptoInput self decimal instance with precision 100
const Decimal100 = Decimal.clone({ precision: 100 });

export interface CryptoInputProps extends Omit<TokenSelectProps, 'value' | 'onChange'> {
  /**
   * token amount
   */
  value?: {
    amount?: bigint;
    inputString?: string;
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
    amount: bigint;
    unit: string;
    price: number | string;
  };
  /**
   * custom render for header
   */
  header?: React.ReactNode;
  /**
   * custom render for footer
   */
  footer?: false | React.ReactNode;
}

export const CryptoInput: React.FC<CryptoInputProps> = ({
  value,
  onChange,
  header,
  footer,
  balance,
  ...selectProps
}) => {
  const { messages } = useIntl('CryptoInput');

  const { token, inputString } = value || {};

  const { wrapSSR, getClsName } = useCryptoInputStyle();

  // calculate token total price
  const tokenTotalPrice = useDeferredValue(
    inputString && balance
      ? `${balance.unit} ${new Decimal100(inputString).times(balance.price).toFixed()}`
      : undefined,
  );

  return wrapSSR(
    <Space direction="vertical" className={getClsName('wrapper')}>
      {header && <div className={getClsName('header')}>{header}</div>}
      <InputNumber
        stringMode
        size="large"
        variant="borderless"
        controls={false}
        value={inputString}
        // remove unnecessary 0 at the end of the number
        onChange={(amt) => {
          // if amount is null or token is not selected, clean the value
          if (isNull(amt) || !token) {
            onChange?.({
              token,
            });
            return;
          }

          const [integers, decimals] = String(amt).split('.');

          let inputAmt = amt;

          // if precision is more than token decimal, cut it
          if (decimals?.length > token.decimal) {
            inputAmt = `${integers}.${decimals.slice(0, token.decimal)}`;
          }

          // covert string amt to bigint

          const newAmt = BigInt(
            new Decimal100(inputAmt)
              .times(Decimal100.pow(10, token.decimal))
              .toFixed(0, Decimal100.ROUND_DOWN),
          );

          onChange?.({
            ...value,
            amount: newAmt,
            inputString: inputAmt,
          });
        }}
        placeholder={messages.placeholder}
        className={getClsName('amount')}
        addonAfter={
          <TokenSelect
            variant="borderless"
            {...selectProps}
            value={value?.token}
            onChange={(newToken) =>
              onChange?.({
                token: newToken,
              })
            }
          />
        }
      />
      {footer !== false && (
        <div className={getClsName('footer')}>
          {footer || (
            <Flex className="default-footer" justify="space-between">
              <Typography.Text ellipsis={{ tooltip: tokenTotalPrice }} className="total-price">
                {tokenTotalPrice || '-'}
              </Typography.Text>
              <span className="token-balance">
                {!!token && (
                  <CryptoPrice
                    {...token}
                    decimals={token.decimal}
                    icon={false}
                    value={balance?.amount}
                  />
                )}
                {!!balance?.amount && (
                  <a
                    className="max-button"
                    onClick={() => {
                      onChange?.({
                        ...value,
                        amount: balance.amount,
                        inputString: new Decimal100(balance.amount.toString())
                          .div(Decimal100.pow(10, token!.decimal))
                          .toFixed(token!.decimal, Decimal100.ROUND_DOWN),
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
