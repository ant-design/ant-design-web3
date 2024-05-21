import React from 'react';
import { Flex, InputNumber } from 'antd';

import TokenSelect, { type TokenSelectProps } from './Select';
import { useTokenStyle } from './style';

export interface TokenOutputProps extends TokenSelectProps {
  /**
   * query selected TokenOutput
   * @returns selected TokenOutput
   */
  querySelectedTokenOutput?: () => Promise<{
    amount: string;
    price: string;
  }>;
}

const TokenOutput = ({ querySelectedTokenOutput, ...props }: TokenOutputProps) => {
  const { wrapSSR, getClsName } = useTokenStyle();

  return wrapSSR(
    <Flex gap={16} className={getClsName('output')}>
      <InputNumber
        stringMode
        controls={false}
        placeholder="Please enter amount"
        className={getClsName('output-amount')}
      />
      <TokenSelect {...props} />
    </Flex>,
  );
};

export default TokenOutput;
