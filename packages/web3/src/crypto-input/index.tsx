import React, { useDeferredValue } from 'react';
import type { Token } from '@ant-design/web3-common';
import { Flex, InputNumber, Typography } from 'antd';
import Decimal from 'decimal.js';

import { CryptoPrice } from '../crypto-price';
import useIntl from '../hooks/useIntl';
import { TokenSelect, type TokenSelectProps } from '../token-select';
import { useCryptoInputStyle } from './style';

// get CryptoInput self decimal instance with precision 100
const Decimal100 = Decimal.clone({ precision: 100 });
interface FooterProps {
  setMaxButton?: boolean;
}
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
  footer?: FooterProps | React.ReactNode | false;
  /**
   * size of the input
   */
  size?: 'small' | 'middle' | 'large';
}

export const CryptoInput: React.FC<CryptoInputProps> = ({
  value,
  onChange,
  header,
  footer = true,
  balance,
  size = 'middle',
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

  // 将 InputNumber 的 onChange 和 TokenSelect 的 onChange 合并
  const handleChange = (amt: string | null, curToken?: Token) => {
    if (!amt && !curToken) {
      onChange?.({});
      return;
    }
    if (!curToken) {
      onChange?.({ inputString: amt! });
      return;
    }
    if (!amt) {
      onChange?.({ token: curToken });
      return;
    }

    const [integers, decimals] = String(amt).split('.');

    let inputAmt = amt;

    // if precision is more than token decimal, cut it
    if (decimals?.length > curToken.decimal) {
      inputAmt = `${integers}.${decimals.slice(0, curToken.decimal)}`;
    }

    // covert string amt to bigint

    const newAmt = BigInt(
      new Decimal100(inputAmt)
        .times(Decimal100.pow(10, curToken.decimal))
        .toFixed(0, Decimal100.ROUND_DOWN),
    );

    onChange?.({
      ...value,
      amount: newAmt,
      inputString: inputAmt,
      token: curToken,
    });
  };

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
        onChange={(amt) => handleChange(amt, token)}
        addonAfter={
          <TokenSelect
            variant="borderless"
            {...selectProps}
            value={value?.token}
            onChange={(newToken) => handleChange(inputString || '', newToken)}
            size={size}
          />
        }
      />
      {footer !== false && (
        <div className={getClsName('footer')}>
          {React.isValidElement(footer) ? (
            footer
          ) : (
            <Flex className={getClsName('default-footer')} justify="space-between">
              <Typography.Text
                ellipsis={{ tooltip: tokenTotalPrice }}
                className={getClsName('total-price')}
              >
                {tokenTotalPrice || '-'}
              </Typography.Text>
              <span className={getClsName('token-balance')}>
                {!!token && (
                  <CryptoPrice
                    {...token}
                    decimals={token.decimal}
                    icon={false}
                    value={balance?.amount}
                  />
                )}
                {!!balance?.amount && footer && !(footer as FooterProps)?.setMaxButton && (
                  <a
                    className={getClsName('max-button')}
                    role="button"
                    // biome-ignore lint/a11y/useValidAnchor: by design
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
