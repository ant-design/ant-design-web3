import React from 'react';
import type { Token } from '@ant-design/web3-common';
import type { SelectProps } from 'antd';
import { Flex, Select } from 'antd';

import { useStyle } from './style';

export interface TokenSelectProps extends SelectProps {
  /**
   * controlled token list
   */
  tokenList?: Token[];
}

/**
 * Single Token render
 */
const SingleToken = ({ token }: { token: Token }) => {
  return (
    <Flex gap={8}>
      <span className="icon">{token.icon}</span>
      <span>{token.name}</span>
    </Flex>
  );
};

export const TokenSelect = ({ tokenList, ...selectProps }: TokenSelectProps) => {
  const { wrapSSR } = useStyle('web3-token-select');

  return wrapSSR(
    <Select<Token>
      placeholder="Please Select"
      {...selectProps}
      options={tokenList}
      fieldNames={{
        value: 'symbol',
      }}
      labelRender={({ value }) => {
        const selectedToken = tokenList?.find(({ symbol }) => symbol === value);

        if (!selectedToken) {
          return;
        }

        return <SingleToken token={selectedToken} />;
      }}
      filterOption={(input, option) => {
        const { name, symbol, availableChains } = option as Token;

        const nameLower = name.toLowerCase();

        const symbolLower = symbol.toLowerCase();

        const keywordLower = input.toLowerCase();

        return [nameLower, symbolLower, ...availableChains?.map(({ contract }) => contract)].some(
          (content) => content?.includes(keywordLower),
        );
      }}
      optionRender={({ data: token }) => {
        return <SingleToken token={token as Token} />;
      }}
    />,
  );
};
