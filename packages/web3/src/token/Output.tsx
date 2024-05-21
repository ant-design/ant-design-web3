import React from 'react';
import { Flex, InputNumber } from 'antd';
import { isNull } from 'lodash';

import TokenSelect, { type TokenSelectProps } from './Select';
import { useTokenStyle } from './style';

export interface TokenOutputProps extends TokenSelectProps {
  /**
   * token amount
   */
  amount?: string | number;
  /**
   * token amount change callback
   */
  onAmountChange?: (amount?: TokenOutputProps['amount']) => void;
  /**
   * query selected TokenOutput
   * @returns selected TokenOutput
   */
  querySelectedTokenOutput?: () => Promise<{
    amount: string;
    price: string;
  }>;
}

const TokenOutput = ({
  amount,
  onAmountChange,
  querySelectedTokenOutput,
  ...selectProps
}: TokenOutputProps) => {
  const { wrapSSR, getClsName } = useTokenStyle();

  return wrapSSR(
    <Flex gap={16} className={getClsName('output')}>
      <InputNumber
        stringMode
        controls={false}
        value={amount}
        precision={selectProps?.token?.decimal}
        onChange={(amt) => {
          onAmountChange?.(isNull(amt) ? undefined : amt);
        }}
        placeholder="Please enter amount"
        className={getClsName('output-amount')}
      />
      <TokenSelect {...selectProps} />
    </Flex>,
  );
};

export default TokenOutput;
