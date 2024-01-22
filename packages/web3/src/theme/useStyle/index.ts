import type React from 'react';
import { useContext } from 'react';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import { useStyleRegister } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import { ConfigProvider as AntdConfigProvider, theme as AntTheme } from 'antd';
import type { GlobalToken } from 'antd';

const { useToken } = AntTheme;

/**
 * Set alpha for a color
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
export const setAlpha = (baseColor: string, alpha: number) =>
  new TinyColor(baseColor).setAlpha(alpha).toRgbString();

/**
 * Lighten a color
 * @example (#000, 50) => #808080
 * @param baseColor {string}
 * @param brightness {0-100}
 * @returns hexColor {string}
 */
export const lighten = (baseColor: string, brightness: number) => {
  const instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};

export type GenerateStyle<
  ComponentToken extends object = GlobalToken,
  ReturnType = CSSInterpolation,
> = (token: ComponentToken, ...rest: any[]) => ReturnType;

export type UseStyleResult = {
  wrapSSR: (node: React.ReactElement) => React.ReactElement;
  hashId: string;
};

export type Web3AliasToken = GlobalToken & {
  /**
   * classname for web3 compoennts
   * @type {string}
   * @example .ant-pro
   */
  web3ComponentsCls: string;
  /**
   * antd 的 className
   * @type {string}
   * @example .ant
   */
  antCls: string;
};

/**
 * useStyle for css in js
 * @param componentName {string} 组件的名字
 * @param styleFn {GenerateStyle} 生成样式的函数
 * @returns UseStyleResult
 */
export function useStyle(
  componentName: string,
  styleFn: (token: Web3AliasToken) => CSSInterpolation,
) {
  const { theme, token, hashId } = useToken();
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const web3Token = {
    ...token,
    web3ComponentsCls: `.${getPrefixCls('web3')}`,
    antCls: `.${getPrefixCls()}`,
  };

  return {
    wrapSSR: useStyleRegister(
      {
        theme,
        token: web3Token,
        hashId,
        path: [componentName],
      },
      () => styleFn(web3Token as Web3AliasToken),
    ),
    hashId,
  };
}
