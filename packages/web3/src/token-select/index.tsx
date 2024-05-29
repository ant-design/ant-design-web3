import React, { useEffect, useState } from 'react';
import type { Token } from '@ant-design/web3-common';
import type { SelectProps } from 'antd';
import { Flex, Select, Spin } from 'antd';

import { useTokenSelectStyle } from './style';

export interface TokenSelectProps extends SelectProps {
  /**
   * controlled token list
   */
  tokenList?: Token[];
  /**
   * query allow select token list
   * @returns token list
   */
  queryTokenList?: () => Promise<Token[] | undefined>;
  /**
   * allow clear
   */
  allowClear?: boolean;
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

export const TokenSelect = ({ tokenList, queryTokenList, ...selectProps }: TokenSelectProps) => {
  const { wrapSSR } = useTokenSelectStyle();

  // full Token List
  const [fullTokenList, setFullTokenList] = useState<Token[] | undefined>(tokenList);

  // query token list loading
  const [loading, setLoading] = useState<boolean>();

  // when controlled tokenList change, update fullTokenList
  useEffect(() => {
    setFullTokenList(tokenList);
  }, [tokenList]);

  // when trigger select open, query dynamic token list
  const handleQueryTokenList = async () => {
    /**
     * query token list condition:
     * 1. controlled tokenList is highest priority, if tokenList has value, queryTokenList will not be executed
     * 2. queryTokenList is exist
     */
    if (!queryTokenList || tokenList?.length) {
      return;
    }

    setLoading(true);

    try {
      setFullTokenList(await queryTokenList?.());

      console.log('tokenList', tokenList);
    } catch (error) {
      console.error('queryTokenList error', error);
    } finally {
      setLoading(false);
    }
  };

  return wrapSSR(
    <Select<Token>
      {...selectProps}
      showSearch
      onDropdownVisibleChange={(nextOpen) => {
        if (nextOpen) {
          handleQueryTokenList();
        }
      }}
      placeholder={'Enter name / contract'}
      options={fullTokenList}
      fieldNames={{
        value: 'symbol',
      }}
      labelRender={({ value }) => {
        const selectedToken = fullTokenList?.find(({ symbol }) => symbol === value);

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

        return [nameLower, symbolLower, availableChains[0]?.contract].some((content) =>
          content?.includes(keywordLower),
        );
      }}
      optionRender={({ data: token }) => {
        return <SingleToken token={token as Token} />;
      }}
      dropdownRender={
        loading ? () => <Spin spinning size="small" style={{ padding: 4 }} /> : undefined
      }
    />,
  );
};
