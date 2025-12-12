import React, { useRef, useState } from 'react';
import { ConfigProvider, Flex, Input, InputRef } from 'antd';
import classNames from 'classnames';
import Decimal from 'decimal.js';

import { AMOUNT_IN_DECIMALS, CUSTOMIZE_PREFIX_CLS, TOKEN_DECIMALS_DEFAULT } from './constant';
import TokenSelector, { TokenSelectorProps } from './TokenSelector';
import { FundFlowDirection, Token, TokenConfig } from './type';
import { formatAmount, formatBalance, formatValue } from './utils/format';

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

  // 判断输入的数据是否大于最大值
  const isGreaterThanGlobalRemainQuota = (value: string) => {
    if (!isValidMaxInputAmount) return false;
    try {
      if (!value?.length) return false;
      if (!quota?.show) return false;
      // 验证是否是合法的 Decimal：允许整数、小数和千位分隔符,小数位中不能有千位分隔符
      const regex = /^(\d{1,3}(,\d{3})*|\d+)(.\d+)?$/;
      if (!regex.test(value?.replace(/,/g, ''))) {
        return false;
      }
      if (!remainQuota || remainQuota === 0n) return true;
      const result = Decimal(value?.replace(/,/g, '') ?? '0').mul(
        Decimal.pow(10, token?.decimals ?? TOKEN_DECIMALS_DEFAULT),
      );
      return result.gt(remainQuota);
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
      if (amount.gt(balanceAmount)) {
        return 'error';
      } else {
        return undefined;
      }
    } catch (error) {
      return 'error';
    }
  }, [inputValue, token, balance, maxInputAmountValue, remainQuota]);

  React.useEffect(() => {
    if (status === 'error') {
      onStatusChange?.('error');
    } else {
      onStatusChange?.('success');
    }
  }, [status]);

  // 判断输入的数据是否大于最大值
  const isGreaterThanMaxAmount = (value: string) => {
    if (!isValidMaxInputAmount) return false;
    try {
      if (!value?.length) return false;

      // 验证是否是合法的 Decimal：允许整数、小数和千位分隔符,小数位中不能有千位分隔符
      const regex = /^(\d{1,3}(,\d{3})*|\d+)(.\d+)?$/;
      if (!regex.test(value?.replace(/,/g, ''))) {
        return false;
      }
      if (!maxInputAmountValue) return false;
      const result = Decimal(value?.replace(/,/g, '') ?? '0').mul(
        Decimal.pow(10, token?.decimals ?? TOKEN_DECIMALS_DEFAULT),
      );
      return result.gt(maxInputAmountValue);
    } catch (error) {
      return false;
    }
  };

  const inputRef = useRef<InputRef>(null);

  // 可编辑自动focus输入框
  React.useEffect(() => {
    if (edit) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [edit]);

  const formatInputValue = (value: string) => {
    if (typeof value === 'string' && value?.length === 0) {
      return '';
    }
    return formatValue(value);
  };

  React.useEffect(() => {
    if (!!status) return;
    onChangeValue?.(inputValue);
  }, [inputValue, status]);

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
            onChange={(e) => {
              // 如果只有小数点. 自动在小数点前补0
              if (e.target.value === '.') {
                setInputValue('0.');
                return;
              }

              // 只能输入一个小数点
              if (e.target.value.split('.').length > 2) {
                setInputValue(inputValue ?? '');
                return;
              }
              // 只能输入千分位,小数点.数字
              const newValue = e.target.value.replace(/[^\d,.]/g, '');
              if (newValue?.length !== e.target.value.length) {
                setInputValue(inputValue ?? '');
                return;
              }

              // 匹配小数点后面的值
              const [integerPart, decimalPart] = e.target.value.split('.');
              // 限制最大输入长度, 如果输入的值只有0，则设置为0.00
              if (integerPart?.replace(/[0,.]/g, '') === '' && integerPart?.length > 1) {
                // 如果输入的值只有0，则设置为0.00
                const dp = !decimalPart?.length
                  ? ''
                  : '.' + decimalPart?.slice(0, AMOUNT_IN_DECIMALS);
                setInputValue('0' + dp);
                return;
              }

              if (decimalPart && decimalPart?.length > AMOUNT_IN_DECIMALS) {
                // 截取小数点后面的值
                const newInputValue = integerPart + '.' + decimalPart?.slice(0, AMOUNT_IN_DECIMALS);
                setInputValue(newInputValue);
                return;
              }

              // 检测开头是否时无效的0，012/0012/00012/00000.12无效，0.1/0.01/0.001/0.0001有效
              const hasInvalidLeadingZero =
                integerPart?.length > 1 &&
                integerPart?.startsWith('0') &&
                !integerPart?.includes(',');
              if (hasInvalidLeadingZero) {
                // 去除前导 0，若全为 0 则保留一个 0
                const normalizedInteger = integerPart?.replace(/^0+/, '') || '0';
                const normalizedValue = decimalPart
                  ? `${normalizedInteger}.${decimalPart}`
                  : normalizedInteger;
                setInputValue(normalizedValue);
                return;
              }

              // 大于最大值时，设置为最大值
              if (isGreaterThanMaxAmount(e.target.value)) {
                setInputValue(
                  formatBalance({
                    value: maxInputAmountValue ?? '0',
                    decimals: token?.decimals ?? TOKEN_DECIMALS_DEFAULT,
                  }),
                );
                return;
              }

              setInputValue(e.target.value);
            }}
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
              Decimal(remainQuota || 0n),
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
