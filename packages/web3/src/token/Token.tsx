import React, { useContext } from 'react';
import { ConfigProvider, Flex, InputNumber } from 'antd';
import classNames from 'classnames';

import type { TokenSelectProps } from './Select';
import TokenSelect from './Select';
import { useStyle } from './style';

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
   * chain name
   */
  chain: string;
  /**
   * chain icon
   */
  chainIcon: React.ReactNode;
  /**
   * contract address
   */
  contract: string;
};

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
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('web3-swap');

  const { wrapSSR, hashId } = useStyle(prefixCls);

  const getClsName = (cls: string) => classNames(`${prefixCls}-${cls}`, hashId);

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
