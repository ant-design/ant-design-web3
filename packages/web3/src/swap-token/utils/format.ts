import Decimal from 'decimal.js';
import { parseUnits } from 'viem';

/** 按精度格式化余额，保留小数位数
 * @param value 余额
 * @param decimals 精度
 * @param fixed 保留小数位数，默认保留6位小数
 * @returns 格式化后的余额
 */
export const formatBalance = (
  { value, decimals }: { value?: bigint | string | number; decimals?: number },
  fixed: number = 6,
) => {
  if (!value) {
    return '0';
  }
  const decimal = new Decimal(value.toString()).div(Decimal(10).pow(decimals || 0));
  const res = decimal.toFixed(fixed, Decimal.ROUND_DOWN);
  return res;
};

/** 将原始余额按精度转换为字符串，不截取小数位。 */
export const formatBalanceWithoutFixed = ({
  value,
  decimals,
}: {
  value?: bigint | string | number;
  decimals?: number;
}): string => {
  if (!value || !decimals) {
    return '0';
  }
  const decimal = new Decimal(value.toString()).div(Decimal(10).pow(decimals || 0));
  const res = decimal.toFixed();

  return res;
};

/** 整数部分使用千分位分隔符格式化值，小数部分没有千分位分隔符
 * @param value 值
 * @returns 格式化后的值
 */
export const formatValue = (value?: string) => {
  if (!value) return undefined;

  // 分割整数部分和小数部分
  const [integerPart, decimalPart = ''] = value.split('.');

  // 对整数部分添加千位分隔符
  const formattedIntegerPart = integerPart.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 如果有小数部分，则重新组合整数和小数部分
  // 如果小数部分有千位分隔符，则去掉
  if (decimalPart) {
    return `${formattedIntegerPart}.${decimalPart?.replace(/,/g, '')}`;
  }

  if (value.endsWith('.')) {
    return `${formattedIntegerPart}.`;
  }

  // 如果没有小数部分，直接返回格式化后的整数部分
  return formattedIntegerPart;
};

/** 按精度格式化代币数量，不保留小数位数
 * @param amount 代币数量
 * @param decimals 精度
 * @returns Decimal 对象，格式化后的代币数量
 */
export const formatAmount = ({
  amount,
  decimals,
}: {
  amount?: string;
  decimals?: number;
}): Decimal => {
  if (!amount || !decimals) {
    return Decimal(0);
  }
  const amount_ = amount.replace(/,/g, '');
  return Decimal(amount_).mul(Decimal(10).pow(decimals));
};

/** 将小数值转换为 bigint，用于合约调用 */
export const decimalToBigInt = (value: string, decimals: number = 18): bigint => {
  const value_ = value.replace(/,/g, '');
  try {
    return parseUnits(value_, decimals);
  } catch (error) {
    // 如果 parseUnits 失败，使用 Decimal.js 作为备选方案
    const decimal = new Decimal(value_);
    const multiplier = new Decimal(10).pow(decimals);
    const result = decimal.mul(multiplier);
    return BigInt(result.toFixed());
  }
};
