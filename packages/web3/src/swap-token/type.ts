import type React from 'react';

export interface Token<T> {
  /** 链上的代币符号；
   * 强制约束只能是string类型；
   * 如：USDC： Ethereum上是USDC, Jovay上是USDC.jovay
   */
  symbol: T extends string ? (string extends T ? never : T) : never;
  /** 代币小数位数 */
  decimals: number;
  /** 代币图标 */
  icon?: React.ReactNode;
  /** 代币名称 */
  name?: string;
  /** 代币余额, 除以10^decimals */
  balance?: string;
  /** 代币数量：未除以小数位数的代币余额 */
  amount?: bigint;
  /** 链ID */
  chainId?: number;
}

/** Token配置, Token必须是成对的。
 * T是所有的Token类型：包含ERC20 Token及其在不同链上的映射
 */
export interface TokenConfig<T, U extends Token<T>> {
  fromToken?: U;
  toToken?: U;
  /** 只能是string，当前这一组ERC20 token的符号统称，如：USDC */
  symbol: T extends string ? (string extends T ? never : T) : never;
  /**
   * 代币小数位数, 用于计算代币余额及交易时以精度值计算代币数量
   * 取值来源：读余额时返回。
   * 例如：USDC的精度为6，则1 USDC = 10^6 最小单位
   * 例如：ETH的精度为18，则1 ETH = 10^18 wei
   */
  decimals: number;
}

/** 资金流向：
 *  IN: FromToken -> ToToken;
 *  OUT: ToToken -> FromToken;
 */
export enum FundFlowDirection {
  /** 流入： FromToken -> ToToken */
  IN = 'in',
  /** 流出： ToToken -> FromToken */
  OUT = 'out',
}
