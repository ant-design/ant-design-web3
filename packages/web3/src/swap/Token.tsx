import React, { useContext } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Flex, Input, InputNumber } from 'antd';
import classNames from 'classnames';

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

export interface TokenProps {
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
   * query allow select token list
   * @returns token list
   */
  queryTokenList?: () => Promise<TokenType[] | undefined>;
  /**
   * query selected token
   * @returns selected token
   */
  querySelectedToken?: () => Promise<{
    amount: string;
    price: string;
  }>;
}

const Token = ({ queryTokenList }: TokenProps) => {
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
        <Dropdown
          trigger={['click']}
          dropdownRender={() => {
            return (
              <div className={getClsName('token-select')}>
                <Input addonBefore={<SearchOutlined />} placeholder="Please enter" />
              </div>
            );
          }}
        >
          <Flex className={getClsName('token-selected')}>
            <span>selected</span>
          </Flex>
        </Dropdown>
      </Flex>
    </div>,
  );
};

export default Token;
