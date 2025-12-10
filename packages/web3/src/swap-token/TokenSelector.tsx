import React, { useMemo } from 'react';
import { ConfigProvider, Flex, Select } from 'antd';
import classNames from 'classnames';

import { CUSTOMIZE_PREFIX_CLS } from './constant';
import { FundFlowDirection, Token, TokenConfig } from './type';

export interface TokenSelectorProps<T> {
  /** Token列表
   * 每个token中fromToken和toToken成对出现
   * 可获取From Token 列表和To Token 列表
   */
  tokens?: TokenConfig<T, Token<T>>[];
  /** 当前选中的Token */
  token?: TokenConfig<T, Token<T>>;
  /** 切换Token */
  switchToken?: (token?: TokenConfig<T, Token<T>>) => void;
  fundFlowDirection?: FundFlowDirection;
  /** 是否禁用 */
  disabled?: boolean;
  customizePrefixCls?: string;
  hashId?: string;
}

/** 渲染代币标签 */
export const renderTokenLabel = <T,>(token: Token<T>) => {
  const { icon, name } = token;
  return (
    <Flex align="center" gap={8}>
      {!!icon && (
        <Flex align="center" justify="center">
          {icon}
        </Flex>
      )}
      {!!name && <span>{name}</span>}
    </Flex>
  );
};

export default <T,>({
  tokens,
  token,
  switchToken,
  fundFlowDirection,
  disabled = false,
  customizePrefixCls = CUSTOMIZE_PREFIX_CLS,
  hashId = '',
}: TokenSelectorProps<T>) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('swap-token', customizePrefixCls);

  const options = useMemo(() => {
    return tokens?.map((token) => {
      const { fromToken, toToken } = token;
      const optionToken = fundFlowDirection === FundFlowDirection.IN ? fromToken : toToken;
      return {
        label: renderTokenLabel<T>(optionToken as Token<T>),
        value: token.symbol,
      };
    });
  }, [tokens, fundFlowDirection]);

  const currentTokenData =
    fundFlowDirection === FundFlowDirection.IN ? token?.fromToken : token?.toToken;

  return (
    <div>
      {!!options?.length && options.length > 1 ? (
        <Select
          options={options}
          value={token?.symbol}
          onChange={(value) => {
            switchToken?.(tokens?.find((token) => token.symbol === value) || undefined);
          }}
          className={classNames(`${prefixCls}-token-selector`, hashId)}
          classNames={{
            popup: {
              root: classNames(`${prefixCls}-token-selector-dropdown`, hashId),
            },
          }}
          style={{ height: '40px' }}
          disabled={disabled}
        />
      ) : (
        <Flex className={classNames(`${prefixCls}-select-text`, hashId)} align="center" gap={4}>
          {currentTokenData && renderTokenLabel(currentTokenData)}
        </Flex>
      )}
    </div>
  );
};
