import React from 'react';
import { type Token } from '@ant-design/web3-common';
import type { SelectProps } from 'antd';
import { Flex, Select } from 'antd';

import useIntl from '../hooks/useIntl';
import { useStyle } from './style';

export interface TokenSelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
  /**
   * selected value
   */
  value?: Token;
  /**
   * selected value change handler
   */
  onChange?: (value: Token) => void;
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

export const TokenSelect: React.FC<TokenSelectProps> = ({
  value,
  onChange,
  tokenList,
  ...selectProps
}) => {
  const { messages } = useIntl('TokenSelect');

  const { wrapSSR } = useStyle('web3-token-select');

  return wrapSSR(
    <Select
      placeholder={messages.placeholder}
      popupMatchSelectWidth={false}
      {...selectProps}
      options={tokenList}
      value={value?.symbol}
      onChange={(_, token) => onChange?.(token as Token)}
      fieldNames={{
        value: 'symbol',
      }}
      labelRender={() => {
        if (!value) {
          return;
        }

        return <SingleToken token={value} />;
      }}
      filterOption={(input, option) => {
        const { name, symbol, availableChains } = option as Token;

        const nameLower = name.toLowerCase();

        const symbolLower = symbol.toLowerCase();

        const keywordLower = input.toLowerCase();

        return [
          nameLower,
          symbolLower,
          ...availableChains?.map(({ contract }) => contract?.toLowerCase()),
        ].some((content) => content?.includes(keywordLower));
      }}
      optionRender={({ data }) => {
        return <SingleToken token={data as Token} />;
      }}
    />,
  );
};
