import React, { Suspense, useCallback, useDeferredValue, useEffect, useRef, useState } from 'react';
import { CloseCircleOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Dropdown, Flex, Input, InputRef, Spin } from 'antd';
import { debounce } from 'lodash';

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
  value?: TokenType;
  /**
   * change selected token callback
   * @param token
   * @returns
   */
  onChange?: (token?: TokenType) => void;
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
  /**
   * allow clear
   */
  allowClear?: boolean;
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
  onSelect?: TokenSelectProps['onChange'];
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
  value: selectedToken,
  onChange,
  tokenList,
  defaultTokenList,
  queryTokenList,
  allowClear,
}: TokenSelectProps) => {
  const { wrapSSR, getClsName } = useTokenSelectStyle();

  // full Token List
  const [fullTokenList, setFullTokenList] = useState<TokenType[] | undefined>(defaultTokenList);

  // filter token keyword
  const [keyword, setKeyword] = useState<string>();

  // dropdown open status
  const [open, setOpen] = useState<boolean>();

  // when controlled tokenList change, update fullTokenList
  useEffect(() => {
    setFullTokenList(tokenList);
  }, [tokenList]);

  // deferred calculate show token list
  const showTokenList = useDeferredValue(
    keyword
      ? fullTokenList?.filter(({ name, symbol, contract }) => {
          const nameLower = name.toLowerCase();

          const symbolLower = symbol.toLowerCase();

          const keywordLower = keyword.toLowerCase();

          return [nameLower, symbolLower, contract].some((content) =>
            content.includes(keywordLower),
          );
        })
      : fullTokenList,
  );

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
      setFullTokenList(await queryTokenList?.());

      console.log('tokenList', tokenList);
    } catch (error) {
      console.error('queryTokenList error', error);
    }
  };

  return wrapSSR(
    <Dropdown
      open={open}
      trigger={['click']}
      onOpenChange={(open) => {
        setOpen(open);

        if (open) {
          handleQueryTokenList();
        }
      }}
      dropdownRender={() => {
        return (
          <div className={getClsName('wrapper')}>
            <Input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              addonBefore={<SearchOutlined />}
              placeholder="Enter name / address"
            />
            {showTokenList?.map((token) => {
              return (
                <SingleToken
                  className="selection"
                  token={token}
                  onSelect={(token) => {
                    onChange?.(token);

                    setOpen(false);
                  }}
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
        {allowClear && (
          <CloseCircleOutlined
            className="inner-icon"
            onClick={(event) => {
              event.stopPropagation();

              onChange?.(undefined);
            }}
          />
        )}
        <DownOutlined className="inner-icon" />
      </Flex>
    </Dropdown>,
  );
};
