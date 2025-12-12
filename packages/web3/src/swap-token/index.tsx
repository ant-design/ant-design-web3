import React, { useCallback, useState } from 'react';
import { ConfigProvider, Flex, message } from 'antd';
import classNames from 'classnames';
import Decimal from 'decimal.js';

import { CUSTOMIZE_PREFIX_CLS } from './constant';
import CryptoInput from './CryptoInput';
import swapBg from './icons/swapBg.png';
import swapBgNoAccount from './icons/swapBgNoAccount.png';
import PrimaryButton from './PrimaryButton';
import { useStyle } from './style';
import { TokenSelectorProps } from './TokenSelector';
import { FundFlowDirection, Token, TokenConfig } from './type';
import { decimalToBigInt, formatAmount, formatValue } from './utils/format';

export interface SwapInputProps<T> extends TokenSelectorProps<T> {
  className?: string;
  swapIcon: React.ReactNode;
  extra?: (
    tokenPair: (TokenConfig<T, Token<T>> | undefined)[],
    valueIn: string,
    valueOut: string,
  ) => React.ReactNode;
  btnText?: string;
  swap?: boolean;
  onButtonClick?: (
    tokenPair: (TokenConfig<T, Token<T>> | undefined)[],
    valueIn: string,
    valueOut: string,
  ) => Promise<void>;
  title?: {
    in: string;
    out: string;
  };
  loading?: boolean;
  swapTextColor?: string;
  buttonDisabled?: boolean;
  extraRenders?: {
    upper?: (balance?: Token<T>, token?: TokenConfig<T, Token<T>>) => React.ReactNode;
    under?: (balance?: Token<T>, token?: TokenConfig<T, Token<T>>) => React.ReactNode;
  };
  underButtonRender?: (tokens?: (TokenConfig<T, Token<T>> | undefined)[]) => React.ReactNode;
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
  /** 手续费率: 每个token的手续费率，包含在交易的输入值中的费率（比如交易手续费）, 默认是0.00, Decimal类型的字符串 */
  estFeeRate?: string;
  /** 手续费： 包含在交易的输入值中的费用（比如跨链桥费用），单位必须是token的精度 */
  estFee?: Decimal;
  /** 开始预估费用 */
  onCalculateFee?: (valueIn?: string) => void;
  /** 渲染一些描述信息 */
  extraDesc?: React.ReactNode;
  showConnectButton?: boolean;
  /** 上报GA4 根据输入计算的输出，发生了变化时回调，参数重加入输入输出 */
  onValueOutChange?: (valueIn?: string, valueOut?: string) => void;
  quota?: {
    /** 是否显示全局限额 */
    show?: boolean;
    /** 当前周期全局最大限额, 单位必须是token的精度 */
    maxLimit?: bigint;
    /** 当前周期全局剩余限额, 单位必须是token的精度 */
    remainQuota?: bigint;
  };
  /** 资金流动方向 */
  fundFlowDirection?: FundFlowDirection;
  /** 切换资金流动方向的事件 */
  switchFundFlowDirection?: (direction: FundFlowDirection) => void;
  /** 根据输入值计算输出的方法,
   * @param valueIn 输入金额，单位是token的精度
   * @returns 输出金额，单位必须是token的精度
   */
  calculateValueOut?: (valueIn?: bigint) => bigint;
  /** 根据输出值计算输入的方法
   * @param valueOut 输出金额，单位是token的精度
   * @returns 输入金额，单位必须是token的精度
   */
  calculateValueIn?: (valueOut?: bigint) => bigint;
}

export interface SwapInputRef {
  reset: () => void;
}

type SwapTokenComponent = <T>(
  props: SwapInputProps<T> & React.RefAttributes<SwapInputRef>,
) => React.ReactElement | null;

const SwapToken = React.forwardRef(
  <T,>(
    {
      className,
      swapIcon,
      extra,
      btnText = 'Exchange',
      swap = true,
      onButtonClick,
      title,
      loading = false,
      swapTextColor = 'black',
      extraRenders,
      underButtonRender,
      buttonDisabled = false,
      maxInputAmount,
      estFeeRate = '0.00',
      estFee = Decimal(0),
      extraDesc,
      showConnectButton = true,
      onCalculateFee,
      onValueOutChange,
      quota,
      fundFlowDirection = FundFlowDirection.IN,
      switchFundFlowDirection,
      tokens,
      token,
      switchToken,
      calculateValueOut,
      calculateValueIn,
    }: SwapInputProps<T>,
    ref: React.ForwardedRef<SwapInputRef>,
  ) => {
    const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('swap-token', CUSTOMIZE_PREFIX_CLS);
    //================== Style ==================
    const { wrapSSR, hashId } = useStyle(prefixCls);

    const mergeCls = classNames(`${prefixCls}-content`, className, hashId);

    const [buttonLoading, setButtonLoading] = useState(false);
    const [valueIn, setValueIn] = useState<string>('0.00');
    const [valueOut, setValueOut] = useState<string>('0.00');
    const [status, setStatus] = useState<'error' | 'success'>('success');

    React.useImperativeHandle(ref, () => ({
      reset: () => {
        setValueIn('0.00');
        handleValueInChange('0.00');
      },
    }));

    const tokenPair = React.useMemo(() => {
      if (!token) {
        return [];
      }
      const { fromToken, toToken } = token;
      return fundFlowDirection === FundFlowDirection.IN
        ? [fromToken, toToken]
        : [toToken, fromToken];
    }, [fundFlowDirection, token]);

    // const invalidInput = React.useMemo(() => {
    //   const tokenIn = tokenInfo?.find(
    //     (item) => item?.symbol === tokenPair[0]?.symbol,
    //   );

    //   const amount = formatAmount({amount: valueIn, decimals: tokenIn?.decimals})

    //   return buttonDisabled || amount.eq(0) || status === 'error';
    // }, [buttonDisabled, valueIn, tokenInfo, tokenPair, status]);

    const invalidInput = React.useMemo(() => {
      if (!tokenPair[0]) {
        return false;
      }
      const amount = formatAmount({
        amount: valueIn,
        decimals: tokenPair?.[0]?.decimals,
      });

      return buttonDisabled || amount.eq(0) || status === 'error';
    }, [buttonDisabled, valueIn, tokenPair, status]);

    const handleValueInChange = useCallback(
      (valueIn: string) => {
        if (valueIn && !/[^\d,.]/g.test(valueIn)) {
          if (['', ',', '.'].includes(valueIn)) {
            setValueOut('');
            return;
          }
          try {
            // 防止输入的值导致程序崩溃
            const valueInWithoutComma = valueIn?.replace(/,/g, '') ?? '';
            if (Decimal(valueInWithoutComma).eq(0)) {
              setValueOut('0.00');
              return;
            }
            // 实现了根据输入值计算输出的方法
            if (calculateValueOut) {
              const valueOut = calculateValueOut(
                decimalToBigInt(valueInWithoutComma, token?.decimals || 0),
              );
              const out = Decimal(valueOut);
              setValueOut(formatValue(out.toFixed()) ?? '0.00');
              onValueOutChange?.(valueInWithoutComma, formatValue(out.toFixed()) ?? '0.00');
              return;
            }
            // 手续费 = 输入金额 * 手续费率 + 网络预估费用
            const fee = Decimal(valueInWithoutComma)
              .mul(Decimal(estFeeRate))
              .add(Decimal(estFee).div(Decimal(10).pow(Decimal(token?.decimals || 0))));
            const out = Decimal(valueInWithoutComma).minus(fee);
            setValueOut(formatValue(out.toFixed()) ?? '0.00');
            onValueOutChange?.(valueInWithoutComma, formatValue(out.toFixed()) ?? '0.00');
          } catch (error) {
            setValueOut('0.00');
          }
        } else {
          setValueOut('0.00');
        }
      },
      [estFeeRate, estFee, token, calculateValueOut, onValueOutChange],
    );

    const handleValueOutChange = (value: string) => {
      if (value && !/[^\d,.]/g.test(value)) {
        if (['', ',', '.'].includes(value)) {
          setValueIn('');
          return;
        }
        try {
          const valueOutWithoutComma = value?.replace(/,/g, '') ?? '';
          if (Decimal(valueOutWithoutComma).eq(0) && value?.match(/^[\d.]+$/)) {
            setValueIn('0.00');
            return;
          }
          // 自定义计算
          if (calculateValueIn) {
            const valueIn = calculateValueIn(
              decimalToBigInt(valueOutWithoutComma, token?.decimals || 0),
            );
            if (Decimal(valueIn).lte(0)) {
              setValueIn('0.00');
              return;
            }
            setValueIn(formatValue(Decimal(valueIn).toFixed()) ?? '0.00');
            return;
          }
          // valueIn = valueOut + 跨链桥费用（按目标币种精度）
          const networkFee = Decimal(estFee).div(Decimal(10).pow(Decimal(token?.decimals || 0)));
          const inVal = Decimal(valueOutWithoutComma).add(networkFee);
          setValueIn(formatValue(inVal.toFixed()) ?? '0.00');
        } catch (error) {
          setValueIn('0.00');
        }
      } else {
        setValueIn('0.00');
      }
    };

    const handleSwap = () => {
      const newFundFlowDirection =
        fundFlowDirection === FundFlowDirection.IN ? FundFlowDirection.OUT : FundFlowDirection.IN;
      switchFundFlowDirection?.(newFundFlowDirection);
      setValueIn(valueOut);
      setValueOut(valueIn);
    };

    const handleSwapClick = async () => {
      setButtonLoading(true);
      try {
        if (status === 'error') {
          message.error('Invalid input');
        } else {
          await onButtonClick?.(tokenPair, valueIn, valueOut);
        }
      } catch (error) {
        setButtonLoading(false);
      }
      setButtonLoading(false);
    };

    const [isCalculatingFee, setIsCalculatingFee] = useState(false);
    /** 计算手续费 */
    const handleCalculateFee = async (valueIn?: string) => {
      if (!onCalculateFee || !valueIn?.length) {
        return;
      }
      try {
        setIsCalculatingFee(true);
        await onCalculateFee?.(valueIn);
        setIsCalculatingFee(false);
      } catch (error) {
        setIsCalculatingFee(false);
      }
    };

    React.useEffect(() => {
      if (!token) return;
      // token发生变化时，重新计算手续费
      handleCalculateFee(valueIn);
    }, [token]);

    return wrapSSR(
      <div className={mergeCls}>
        <div className={`${prefixCls}-background`}>
          <img src={showConnectButton ? swapBgNoAccount : swapBg} alt="swap-bg" />
        </div>
        <Flex className={`${prefixCls}-main-content`} vertical gap={12}>
          <CryptoInput<T>
            swapTextColor={swapTextColor}
            title={title?.in ?? 'Cash In'}
            inputValue={valueIn}
            setInputValue={(value) => {
              setValueIn(value);
              handleValueInChange(value);
            }}
            onChangeValue={handleCalculateFee}
            max
            maxInputAmount={maxInputAmount}
            onStatusChange={setStatus}
            disabledInNoAccount={showConnectButton}
            edit={!showConnectButton}
            quota={quota}
            height={200}
            tokens={tokens}
            token={token}
            switchToken={switchToken}
            fundFlowDirection={fundFlowDirection}
            extraRender={extraRenders?.upper}
            customizePrefixCls={CUSTOMIZE_PREFIX_CLS}
            hashId={hashId}
          />
          <CryptoInput<T>
            swapTextColor={swapTextColor}
            title={title?.out ?? 'Cash Out'}
            inputValue={valueOut}
            setInputValue={(value) => {
              setValueOut(value);
              handleValueOutChange(value);
            }}
            disabledInNoAccount={showConnectButton}
            edit={!showConnectButton}
            extraRender={extraRenders?.under}
            isValidMaxInputAmount={false}
            tokens={tokens}
            token={token}
            switchToken={switchToken}
            fundFlowDirection={
              fundFlowDirection === FundFlowDirection.IN
                ? FundFlowDirection.OUT
                : FundFlowDirection.IN
            }
            customizePrefixCls={CUSTOMIZE_PREFIX_CLS}
            hashId={hashId}
          />
        </Flex>
        <div
          className={`${prefixCls}-swap-icon`}
          onClick={() => {
            if (swap) {
              handleSwap();
            }
          }}
          style={{ cursor: swap ? 'pointer' : 'default' }}
        >
          {swapIcon}
        </div>
        {extraDesc && <div>{extraDesc}</div>}
        <div className={`${prefixCls}-operation`}>
          {!invalidInput && extra?.(tokenPair, valueIn, valueOut)}
          <PrimaryButton
            disabled={invalidInput || isCalculatingFee || buttonDisabled || showConnectButton}
            block
            size="large"
            style={{
              height: 48,
            }}
            onClick={handleSwapClick}
            loading={loading || buttonLoading}
          >
            {btnText}
          </PrimaryButton>
        </div>
        <div className={`${prefixCls}-btn-container`}></div>
        <div className={`${prefixCls}-under-button`}>{underButtonRender?.(tokenPair)}</div>
      </div>,
    );
  },
) as SwapTokenComponent;

export type { Token as SwapTokenToken, TokenConfig as SwapTokenConfig } from './type';

export default SwapToken;
