import React, { useContext } from 'react';
import { devUseWarning, type Token } from '@ant-design/web3-common';
import type { SelectProps } from 'antd';
import { ConfigProvider, Flex, Select } from 'antd';

import useIntl from '../hooks/useIntl';
import { useStyle } from './style';

export interface TokenSelectProps
  extends Omit<SelectProps, 'value' | 'onChange' | 'options' | 'mode'> {
  /**
   * selected value
   */
  value?: Token | Token[];
  /**
   * selected value change handler
   */
  onChange?: (value: Token) => void;
  /**
   * @deprecated
   * controlled token list
   * please use options instead
   */
  tokenList?: Token[];
  /**
   * token list
   */
  options?: Token[];
  /**
   * select mode
   */
  mode?: 'multiple';
}

/**
 * Single Token render
 */
const SingleToken = ({
  token,
  hideName,
  prefixCls,
}: {
  token: Token;
  hideName?: boolean;
  prefixCls: string;
}) => {
  return (
    <Flex gap={8}>
      <span className={`${prefixCls}-token-icon`}>{token.icon}</span>
      {!hideName && <span className={`${prefixCls}-token-name`}>{token.name}</span>}
    </Flex>
  );
};

export const TokenSelect: React.FC<TokenSelectProps> = ({
  value,
  onChange,
  tokenList,
  options,
  mode,
  ...selectProps
}) => {
  // Warning for deprecated usage
  const warning = devUseWarning('TokenSelect');

  warning.deprecated(!tokenList, 'tokenList', 'options');

  const { messages } = useIntl('TokenSelect');

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('web3-token-select');

  const { wrapSSR } = useStyle(prefixCls);

  // Multiple mode
  const isMultipleMode = mode === 'multiple';

  // effective options
  const effectiveOptions = options || tokenList;

  return wrapSSR(
    <Select
      placeholder={messages.placeholder}
      popupMatchSelectWidth={false}
      {...selectProps}
      mode={mode}
      options={effectiveOptions}
      value={
        isMultipleMode ? (value as Token[])?.map((token) => token.symbol) : (value as Token)?.symbol
      }
      onChange={(_, token) => onChange?.(token as Token)}
      fieldNames={{
        value: 'symbol',
      }}
      labelRender={({ value: symbol }) => {
        const token = effectiveOptions?.find((item) => item.symbol === symbol);

        if (!token) {
          return symbol;
        }

        return <SingleToken prefixCls={prefixCls} token={token} hideName={isMultipleMode} />;
      }}
      filterOption={(input, option) => {
        const { name, symbol, availableChains } = option as Token;

        const nameLower = name.toLowerCase();

        const symbolLower = symbol.toLowerCase();

        const keywordLower = input.toLowerCase();

        return [
          nameLower,
          symbolLower,
          ...availableChains.map(({ contract }) => contract?.toLowerCase()),
        ].some((content) => content?.includes(keywordLower));
      }}
      optionRender={({ data }) => {
        return <SingleToken prefixCls={prefixCls} token={data as Token} />;
      }}
    />,
  );
};
