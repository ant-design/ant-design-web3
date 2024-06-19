import React, { useDeferredValue } from 'react';
import type { Token } from '@ant-design/web3-common';
import { theme as antdTheme, Flex, InputNumber, Typography } from 'antd';
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
  /**
   * size of the input
   */
  size?: 'small' | 'middle' | 'large';
}

export const CryptoInput: React.FC<CryptoInputProps> = ({
  value,
  onChange,
  header,
  footer,
  balance,
  size = 'middle',
  ...selectProps
}) => {
  const { messages } = useIntl('CryptoInput');

  const {
    token: { InputNumber: CUSTOM_TOKEN },
  } = antdTheme.useToken();

  const { token, inputString } = value || {};

  const { wrapSSR, getClsName } = useCryptoInputStyle();

  // calculate token total price
  const tokenTotalPrice = useDeferredValue(
    inputString && balance
      ? `${balance.unit} ${new Decimal100(inputString).times(balance.price).toFixed()}`
      : undefined,
  );

  return wrapSSR(
    <Flex vertical className={getClsName('wrapper')}>
      {header && <div className={getClsName('header')}>{header}</div>}
      <InputNumber
        stringMode
        size={size}
        controls={false}
        variant="borderless"
        className={getClsName('amount')}
        placeholder={messages.placeholder}
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
            size={size}
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
                    {messages.maxButtonText}
                  </a>
                )}
              </span>
            </Flex>
          )}
        </div>
      )}
    </Flex>,
  );
};
