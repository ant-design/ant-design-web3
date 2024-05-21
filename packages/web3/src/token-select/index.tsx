import React, { useEffect, useState } from 'react';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Dropdown, Flex, Input } from 'antd';

import { useTokenSelectStyle } from './style';

export type TokenType = {
  /**
   * token fullname
   */
  name: string;
  /**
   * token symbol
   */
  symbol: string;
  /**
   * token icon
   */
  icon: React.ReactNode;
  /**
   * token decimal
   */
  decimal?: number;
  /**
   * contract address
   */
  contract: string;
  /**
   * chain
   */
  chain?: {
    name: string;
    icon: React.ReactNode;
  };
};

export interface TokenSelectProps {
  /**
   * selected token
   */
  token?: TokenType;
  /**
   * change selected token callback
   * @param token
   * @returns
   */
  onSelect?: (token: TokenType) => void;
  /**
   * controlled token list
   */
  tokenList?: TokenType[];
  /**
   * default token list
   */
  defaultTokenList?: TokenType[];
  /**
   * query allow select token list
   * @returns token list
   */
  queryTokenList?: () => Promise<TokenType[] | undefined>;
}

/**
 * Single Token render
 */
const SingleToken = ({
  token,
  onSelect,
  className,
}: {
  token?: TokenType;
  onSelect?: TokenSelectProps['onSelect'];
  className?: string;
}) => {
  const { getClsName } = useTokenSelectStyle();

  if (!token) {
    return 'Please select';
  }

  return (
    <Flex
      gap={12}
      key={token.contract}
      className={getClsName('token-profile', className)}
      onClick={() => onSelect?.(token)}
    >
      <span className="icon">{token.icon}</span>
      <span>{token.name}</span>
    </Flex>
  );
};

export const TokenSelect = ({
  token: selectedToken,
  onSelect,
  tokenList,
  defaultTokenList,
  queryTokenList,
}: TokenSelectProps) => {
  const { wrapSSR, getClsName } = useTokenSelectStyle();

  // Token List
  const [selfTokenList, setSelfTokenList] = useState<TokenType[] | undefined>(defaultTokenList);

  useEffect(() => {
    setSelfTokenList(tokenList);
  }, [tokenList]);

  const handleQueryTokenList = async () => {
    /**
     * query token list condition:
     * 1. controlled tokenList is highest priority, if tokenList has value, queryTokenList will not be executed
     * 2. queryTokenList is exist
     */
    if (!queryTokenList || tokenList?.length) {
      return;
    }

    try {
      setSelfTokenList(await queryTokenList?.());

      console.log('tokenList', tokenList);
    } catch (error) {
      console.error('queryTokenList error', error);
    }
  };

  return wrapSSR(
    <Dropdown
      trigger={['click']}
      onOpenChange={(open) => {
        if (open) {
          handleQueryTokenList();
        }
      }}
      dropdownRender={() => {
        return (
          <div className={getClsName('wrapper')}>
            <Input addonBefore={<SearchOutlined />} placeholder="Please enter" />
            {selfTokenList?.map((token) => {
              return (
                <SingleToken
                  className="selection"
                  token={token}
                  onSelect={onSelect}
                  key={token.contract}
                />
              );
            })}
          </div>
        );
      }}
    >
      <Flex className={getClsName('token-selected')} align="center">
        <SingleToken token={selectedToken} className="selected" />
        <DownOutlined className="icon" />
      </Flex>
    </Dropdown>,
  );
};
