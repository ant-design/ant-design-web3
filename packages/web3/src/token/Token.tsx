import React from 'react';
import { Flex, InputNumber } from 'antd';

import TokenSelect, { type TokenSelectProps } from './Select';
import { useTokenStyle } from './style';

export interface TokenProps extends TokenSelectProps {
  /**
   * query selected token
   * @returns selected token
   */
  querySelectedToken?: () => Promise<{
    amount: string;
    price: string;
  }>;
}

const Token = ({ querySelectedToken, ...props }: TokenProps) => {
  const { wrapSSR, getClsName } = useTokenStyle();

  return wrapSSR(
    <div className={getClsName('token-wrapper')}>
      <Flex gap={16} className={getClsName('token-profile')}>
        <InputNumber
          stringMode
          controls={false}
          placeholder="Please enter amount"
          className={getClsName('token-amount')}
        />
        <TokenSelect {...props} />
      </Flex>
    </div>,
  );
};

Token.Select = TokenSelect;

export default Token;
