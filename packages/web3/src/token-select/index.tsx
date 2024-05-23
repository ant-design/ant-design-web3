import React, { useDeferredValue, useEffect, useState } from 'react';
import { CloseCircleOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Token } from '@ant-design/web3-common';
import { Dropdown, Flex, Input, InputRef, Spin } from 'antd';

import { useTokenSelectStyle } from './style';

export interface TokenSelectProps {
  /**
   * selected token
   */
  value?: Token;
  /**
   * change selected token callback
   * @param token
   * @returns
   */
  onChange?: (token?: Token) => void;
  /**
   * controlled token list
   */
  tokenList?: Token[];
  /**
   * default token list
   */
  defaultTokenList?: Token[];
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
const SingleToken = ({
  token,
  onSelect,
  className,
}: {
  token?: Token;
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
  const [fullTokenList, setFullTokenList] = useState<Token[] | undefined>(defaultTokenList);

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
      ? fullTokenList?.filter(({ name, symbol, availableChains }) => {
          const nameLower = name.toLowerCase();

          const symbolLower = symbol.toLowerCase();

          const keywordLower = keyword.toLowerCase();

          return [nameLower, symbolLower, availableChains[0]?.contract].some((content) =>
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
                  key={token.availableChains?.[0]?.contract}
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
