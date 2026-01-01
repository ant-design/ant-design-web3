import React, { useRef, useState } from 'react';
import { ConfigProvider, Flex, Input } from 'antd';
import type { InputRef } from 'antd';
import classNames from 'classnames';
import Decimal from 'decimal.js';

import { AMOUNT_IN_DECIMALS, CUSTOMIZE_PREFIX_CLS, TOKEN_DECIMALS_DEFAULT } from './constant';
import TokenSelector from './TokenSelector';
import type { TokenSelectorProps } from './TokenSelector';
import { FundFlowDirection } from './type';
import type { Token, TokenConfig } from './type';
import { formatAmount, formatBalance, formatValue } from './utils/format';

/** 单个币种输入框的参数，继承 TokenSelector 的能力并补充输入控制。 */
interface InputProps<T> extends Omit<TokenSelectorProps<T>, 'hashId' | 'customizePrefixCls'> {
  inputValue: string;
  setInputValue: (value: string) => void;
  hashId: string;
  customizePrefixCls?: string;
  disabledInNoAccount?: boolean;
  edit?: boolean;
  title: string;
  /** 是否显示余额及选择最大值按钮 */
  max?: boolean;
  /** 最大可输入金额。
   * 该字段存在的意义：输入的金额是否包含网络费用/跨链桥费用。
   * 如果包含， 最大输入值为余额大小；
   * 如果不包含， 最大输入值为余额大小减去网络费用/跨链桥费用。
   */
  maxInputAmount?: {
    /** 代币符号 */
    symbol: T;
    /** 最大输入金额，单位必须是token的精度 */
    amount: bigint;
  };
  /** 是否校验最大可输入值 */
  isValidMaxInputAmount?: boolean;
  onStatusChange?: (status: 'error' | 'success') => void;
  swapTextColor?: string;
  extraRender?: (balance?: Token<T>, token?: TokenConfig<T, Token<T>>) => React.ReactNode;
  onChangeValue?: (value?: string) => void;
  quota?: {
    /** 是否显示全局限额 */
    show?: boolean;
    /** 当前周期全局最大限额, 单位必须是token的精度 */
    maxLimit?: bigint;
    /** 当前周期全局剩余限额, 单位必须是token的精度 */
    remainQuota?: bigint;
  };
  /** 当前容器的高度 */
  height?: number;
}

/** 带币种选择器和余额展示的输入组件，负责金额格式校验与限额提示。 */
const CryptoInput = <T,>({
  inputValue,
  setInputValue,
  hashId,
  customizePrefixCls = CUSTOMIZE_PREFIX_CLS,
  disabledInNoAccount = false,
  title,
  max = false,
  edit = true,
  onStatusChange,
  swapTextColor = 'black',
  extraRender,
  maxInputAmount,
  isValidMaxInputAmount = true,
  onChangeValue,
  quota = {
    show: false,
    maxLimit: BigInt(0),
    remainQuota: BigInt(0),
  },
  height = 150,
  fundFlowDirection,
  tokens,
  token,
  switchToken,
}: InputProps<T>) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('swap-token', customizePrefixCls);

  /** 全局限额配置 */
  const { maxLimit, remainQuota } = quota;

  const balance = React.useMemo(() => {
    return fundFlowDirection === FundFlowDirection.IN ? token?.fromToken : token?.toToken;
  }, [fundFlowDirection, token]);

  const maxInputAmountValue =
    maxInputAmount?.symbol === token?.symbol
      ? (balance?.amount ?? 0n) > BigInt(maxInputAmount?.amount || 0n)
        ? maxInputAmount?.amount || 0n
        : balance?.amount
      : balance?.amount;

  /** 校验字符串是否为合法金额，允许整数、小数及千分位分隔。 */
  const isValidValue = (value: string) => {
    if (typeof value !== 'string' || value.length === 0) {
      return false;
    }
    const [integerPart, decimalPart, ...rest] = value.split('.');
    if (rest.length > 0) {
      return false;
    }
    if (!integerPart) {
      return false;
    }

    const thousandsPattern = /^\d{1,3}(,\d{3})*$/;
    const plainIntegerPattern = /^\d+$/;

    if (integerPart.includes(',')) {
      if (!thousandsPattern.test(integerPart)) {
        return false;
      }
    } else if (!plainIntegerPattern.test(integerPart)) {
      return false;
    }

    if (decimalPart !== undefined) {
      if (decimalPart.length === 0) {
        return true;
      }
      if (decimalPart.includes(',') || !/^\d+$/.test(decimalPart)) {
        return false;
      }
    }

    return true;
  };

  /** 判断输入值是否超过当前周期全局剩余额度。 */
  const isGreaterThanGlobalRemainQuota = (value: string) => {
    if (!isValidMaxInputAmount) return false;
    try {
      if (!value?.length) return false;
      if (!quota?.show) return false;
      if (!remainQuota || remainQuota === 0n) return true;
      if (!isValidValue(value)) return false;
      const result = formatAmount({ amount: value, decimals: token?.decimals });
      return result.gt(Decimal(remainQuota.toString()));
    } catch (error) {
      return false;
    }
  };

  const status = React.useMemo(() => {
    if (!isValidMaxInputAmount) return undefined;
    const amount = formatAmount({
      amount: inputValue,
      decimals: token?.decimals,
    });
    if (!token || !balance || inputValue === '' || Decimal(amount).eq(0)) return undefined;
    try {
      // 判断输入的数据是否大于当前周期全局剩余限额，如果大于则显示错误状态
      if (isGreaterThanGlobalRemainQuota(inputValue)) {
        return 'error';
      }

      const balanceAmount = maxInputAmountValue ?? balance?.amount ?? '0';
      if (amount.gt(Decimal(balanceAmount.toString()))) {
        return 'error';
      } else {
        return undefined;
      }
    } catch (error) {
      return 'error';
    }
  }, [inputValue, token, balance, maxInputAmountValue, remainQuota, isValidMaxInputAmount, quota]);

  React.useEffect(() => {
    if (status === 'error') {
      onStatusChange?.('error');
    } else {
      onStatusChange?.('success');
    }
  }, [status, onStatusChange]);

  /** 判断输入值是否超过当前设定的最大可输入金额。 */
  const isGreaterThanMaxAmount = (value: string) => {
    if (!isValidMaxInputAmount) return false;
    try {
      if (!value?.length) return false;
      if (!maxInputAmountValue) return false;

      if (!isValidValue(value)) return false;
      const result = formatAmount({ amount: value, decimals: token?.decimals });
      return result.gt(Decimal(maxInputAmountValue.toString()));
    } catch (error) {
      return false;
    }
  };

  const inputRef = useRef<InputRef>(null);

  // 可编辑自动focus输入框
  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (edit) {
      timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    return () => timer && clearTimeout(timer);
  }, [edit]);

  /** 对输入框显示值做格式化，兼容空字符串的场景。 */
  const formatInputValue = (value: string) => {
    if (typeof value === 'string' && value?.length === 0) {
      return '';
    }
    return formatValue(value);
  };

  React.useEffect(() => {
    if (!!status) return;
    onChangeValue?.(inputValue);
  }, [inputValue, status, onChangeValue]);

  // 单独输入 "." 时补全为 "0."
  const normalizeDotInput = (value: string) => {
    if (value === '.') {
      return '0.';
    }
    return undefined;
  };

  // 检测是否存在多个小数点
  const hasMultipleDecimalPoints = (value: string) => value.split('.').length > 2;

  // 仅保留数字、千分位逗号、小数点，非法字符返回 null
  const sanitizeAllowedCharacters = (value: string) => {
    const sanitized = value.replace(/[^\d,.]/g, '');
    if (sanitized?.length !== value.length) {
      return null;
    }
    return sanitized;
  };

  // 全为 0 的整数部分统一为 "0"（保留小数部分）
  const normalizeAllZeroInteger = (integerPart: string, decimalPart?: string) => {
    if (integerPart?.replace(/[0,.]/g, '') === '' && integerPart?.length > 1) {
      const dp = !decimalPart?.length ? '' : '.' + decimalPart?.slice(0, AMOUNT_IN_DECIMALS);
      return '0' + dp;
    }
    return null;
  };

  // 限制小数位长度
  const clampDecimalDigits = (integerPart: string, decimalPart?: string) => {
    if (decimalPart && decimalPart?.length > AMOUNT_IN_DECIMALS) {
      return `${integerPart}.${decimalPart?.slice(0, AMOUNT_IN_DECIMALS)}`;
    }
    return null;
  };

  // 去除无效前导零，保留必要的一个零
  const normalizeLeadingZero = (integerPart: string, decimalPart?: string) => {
    const hasInvalidLeadingZero =
      integerPart?.length > 1 && integerPart?.startsWith('0') && !integerPart?.includes(',');
    if (hasInvalidLeadingZero) {
      const normalizedInteger = integerPart?.replace(/^0+/, '') || '0';
      return decimalPart ? `${normalizedInteger}.${decimalPart}` : normalizedInteger;
    }
    return null;
  };

  const handleInputChange = (value: string) => {
    const normalizedDotValue = normalizeDotInput(value);
    if (normalizedDotValue !== undefined) {
      setInputValue(normalizedDotValue);
      return;
    }

    if (hasMultipleDecimalPoints(value)) {
      setInputValue(inputValue ?? '');
      return;
    }

    const sanitizedValue = sanitizeAllowedCharacters(value);
    if (sanitizedValue === null) {
      setInputValue(inputValue ?? '');
      return;
    }

    const [integerPart = '', decimalPart] = sanitizedValue.split('.');

    const normalizedZeroInteger = normalizeAllZeroInteger(integerPart, decimalPart);
    if (normalizedZeroInteger !== null) {
      setInputValue(normalizedZeroInteger);
      return;
    }

    const clampedDecimal = clampDecimalDigits(integerPart, decimalPart);
    if (clampedDecimal !== null) {
      setInputValue(clampedDecimal);
      return;
    }

    const normalizedLeadingZero = normalizeLeadingZero(integerPart, decimalPart);
    if (normalizedLeadingZero !== null) {
      setInputValue(normalizedLeadingZero);
      return;
    }

    if (isGreaterThanMaxAmount(sanitizedValue)) {
      setInputValue(
        formatBalance({
          value: maxInputAmountValue ?? '0',
          decimals: token?.decimals ?? TOKEN_DECIMALS_DEFAULT,
        }),
      );
      return;
    }

    setInputValue(sanitizedValue);
  };

  const [isFocus, setIsFocus] = useState(false);
  const inputTextColor = React.useMemo(() => {
    if (status === 'error') {
      return '#FF4D4F';
    }
    if (isFocus) {
      return '#326CFF';
    }
    return swapTextColor ?? '#000';
  }, [isFocus, status, swapTextColor]);

  /** 未登录状态下渲染资金来源的余额 */
  const renderBalanceIfNoLogin = () => {
    return (
      <Flex gap={6}>
        <span style={{ color: '#666F8D' }}>Balance:</span>
        <span style={{ color: '#000' }}>-</span>
      </Flex>
    );
  };

  const renderBalance = () => {
    if (extraRender) {
      return extraRender(balance, token);
    } else if (max) {
      if (disabledInNoAccount) {
        return renderBalanceIfNoLogin();
      } else {
        return (
          <Flex gap={6}>
            <span>Balance: {formatValue(balance?.balance?.toString()) ?? '-'}</span>
            <a
              className={`${prefixCls}-max`}
              style={{
                cursor: disabledInNoAccount ? 'not-allowed' : 'pointer',
              }}
              onClick={() => {
                if (disabledInNoAccount) return;
                const currentInputValue =
                  formatValue(
                    formatBalance({
                      value: maxInputAmountValue,
                      decimals: token?.decimals,
                    }),
                  ) ?? '';
                setInputValue(currentInputValue);
                onChangeValue?.(currentInputValue);
              }}
            >
              Max
            </a>
          </Flex>
        );
      }
    }
    return null;
  };

  return (
    <Flex
      className={classNames(`${prefixCls}-crypto-input`, hashId)}
      justify="space-between"
      align="center"
      gap={8}
      style={{
        height: height,
      }}
    >
      <div className={`${prefixCls}-crypto-input-left`}>
        <div className={`${prefixCls}-title`}>{title}</div>
        {edit ? (
          <Input
            ref={inputRef}
            value={formatInputValue(inputValue)}
            disabled={disabledInNoAccount}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={() => {
              setIsFocus(true);
              if (inputValue === '0.00') {
                setInputValue('');
              }
            }}
            onBlur={() => {
              setIsFocus(false);
              if (inputValue === '') {
                setInputValue('0.00');
              }
              // onBlur?.(inputValue);
            }}
            style={{
              color: inputTextColor,
            }}
          />
        ) : (
          <div
            className={`${prefixCls}-input-value`}
            style={{ color: swapTextColor ?? '#000', opacity: 0.45 }}
          >
            {inputValue}
          </div>
        )}
        {/* 全局限额提示 */}
        {!!quota?.show && (
          <Flex
            vertical
            justify="center"
            gap={10}
            style={{
              fontSize: 12,
            }}
          >
            {/* 如果输入的值大于当前周期全局剩余限额，则显示提示 */}
            {formatAmount({ amount: inputValue, decimals: token?.decimals }).gt(
              Decimal((remainQuota || 0n).toString()),
            ) && (
              <div style={{ color: '#f00' }}>Amount exceeds the current remaining daily limit.</div>
            )}
            <Flex style={{ opacity: 0.35, maxWidth: 350 }} gap={2} wrap>
              <span>Today&apos;s remaining quota:</span>
              <span>
                {formatBalance(
                  {
                    value: remainQuota?.toString() || '0',
                    decimals: token?.decimals,
                  },
                  2,
                ).toString()}
              </span>
              <span>/</span>
              <span>
                {formatBalance(
                  {
                    value: maxLimit?.toString() || '0',
                    decimals: token?.decimals,
                  },
                  2,
                ).toString()}
              </span>
              <span>{token?.symbol}</span>
            </Flex>
          </Flex>
        )}
      </div>
      <div className={`${prefixCls}-crypto-input-right`}>
        <TokenSelector<T>
          tokens={tokens}
          token={token}
          switchToken={switchToken}
          fundFlowDirection={fundFlowDirection}
          disabled={disabledInNoAccount}
          customizePrefixCls={customizePrefixCls}
          hashId={hashId}
        />
        <Flex className={`${prefixCls}-balance`} gap={8}>
          {renderBalance()}
        </Flex>
      </div>
    </Flex>
  );
};

export default CryptoInput;
