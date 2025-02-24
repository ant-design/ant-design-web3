// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/hedg-colorful.svg';

/**![HedgColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWhlZGctY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDcxLjA4IDkwLjU5Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24taGVkZy1jb2xvcmZ1bC1saW5lYXItZ3JhZGllbnQiIHgxPSI5LjUxIiB5MT0iNzIuNzQiIHgyPSI2MS41NyIgeTI9IjIwLjY3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIC0xLCAwLCA5MikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhNmZmMzMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxM2FmYmMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+aGVkZ2V0cmFkZS1oZWRnLWxvZ288L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iNTIuOCAxNS41NCA0OC41MiAzOS44MiAyNC40OSAzOS44MiAyOC43NyAxNS41NCAxMy4yMyAxNS41NCAyLjc0IDc1LjA1IDAgOTAuNTkgMTguMjggNzUuMDUgMTguMjggNzUuMDUgMjIuMyA1Mi4yMiA0Ni4zMyA1Mi4yMiA0Mi4zIDc1LjA1IDU3Ljg0IDc1LjA1IDY4LjM0IDE1LjU0IDcxLjA4IDAgNTIuOCAxNS41NCIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLWhlZGctY29sb3JmdWwtbGluZWFyLWdyYWRpZW50KSIvPjwvc3ZnPg==) */
export const HedgColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hedg-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HedgColorful.displayName = 'HedgColorful';
