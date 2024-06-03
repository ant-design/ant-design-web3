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
    amountString?: string;
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
  header?: false | ((value?: CryptoInputProps['value']) => React.ReactNode);
  /**
   * custom render for footer
   */
  footer?: CryptoInputProps['header'];
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

  const { token, amountString } = value || {};

  const { wrapSSR, getClsName } = useCryptoInputStyle();

  /**
   * calculate token amount
   * when amount input change, the value will multiply by 10 ** token decimal
   * so when we need restore the value, we need to divide it by 10 ** token decimal
   */
  const tokenAmount = token
    ? /**
       * exist two situation:
       * 1. token already selected, then we need to calculate the amount, use passed amountString
       * 2. select token right now, the select callback will clean the amount, so we need to return empty string to reset the input
       */
      amountString
      ? new Decimal100(amountString)
          .div(Decimal100.pow(10, token.decimal))
          .toDecimalPlaces(token.decimal, Decimal100.ROUND_DOWN)
          .toString()
      : ''
    : undefined;

  // calculate token total price
  const tokenTotalPrice = useDeferredValue(
    tokenAmount && balance
      ? `${balance.unit} ${new Decimal100(tokenAmount).times(balance.price).toFixed()}`
      : undefined,
  );

  return wrapSSR(
    <Space direction="vertical" className={getClsName('wrapper')}>
      {!!header && header()}
      <InputNumber
        stringMode
        size="large"
        variant="borderless"
        controls={false}
        value={tokenAmount}
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

          let calcAmt = amt;

          // if precision is more than token decimal, cut it
          if (decimals?.length > token.decimal) {
            calcAmt = `${integers}.${decimals.slice(0, token.decimal)}`;
          }

          // covert string amt to bigint

          const newAmt = BigInt(
            new Decimal100(calcAmt)
              .times(Decimal100.pow(10, token.decimal))
              .toFixed(0, Decimal100.ROUND_DOWN),
          );

          onChange?.({
            ...value,
            amount: newAmt,
            amountString: newAmt.toString(),
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
          {footer ? (
            footer()
          ) : (
            <Flex className="default-footer" justify="space-between">
              <Typography.Text ellipsis={{ tooltip: tokenTotalPrice }} className="total-price">
                {tokenTotalPrice || '-'}
              </Typography.Text>
              <span className="token-balance">
                {!!token && (
                  <CryptoPrice {...token} decimals={token.decimal} value={balance?.amount} />
                )}
                {!!balance?.amount && (
                  <a
                    className="max-button"
                    onClick={() => {
                      onChange?.({
                        ...value,
                        amount: balance.amount,
                        amountString: balance.amount.toString(),
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
