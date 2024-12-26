// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gemini-circle-colorful.svg';

/**![GeminiCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMDBEQ0ZBIi8+PHBhdGggZD0iTTE5LjM3OCA1Yy0zLjg3IDAtNy4xNTcgMi45NzYtNy41NyA2LjgwN0M3Ljk3NSAxMi4yMjEgNSAxNS41MDggNSAxOS4zNzdBNy42MjcgNy42MjcgMCAwIDAgMTIuNjIyIDI3YzMuODcgMCA3LjE3LTIuOTc2IDcuNTctNi44MDcgMy44MzItLjQxNCA2LjgwOC0zLjcwMSA2LjgwOC03LjU3QTcuNjI3IDcuNjI3IDAgMCAwIDE5LjM3OCA1em01LjgzNiA4LjQ3NmE1LjkzIDUuOTMgMCAwIDEtNC45NyA0Ljk3di00Ljk3aDQuOTd6TTYuNzg2IDE4LjUyNGE1LjkzIDUuOTMgMCAwIDEgNC45Ny00Ljk4M3Y0Ljk3aC00Ljk3di4wMTN6bTExLjY3MyAxLjcyYTUuODk1IDUuODk1IDAgMCAxLTUuODM3IDUuMDM1IDUuODk0IDUuODk0IDAgMCAxLTUuODM2LTUuMDM0aDExLjY3M3ptLjA2NS02Ljc2OHY1LjAzNWgtNS4wNDh2LTUuMDM1aDUuMDQ4em02LjY5LTEuNzJIMTMuNTQxYTUuODk1IDUuODk1IDAgMCAxIDUuODM3LTUuMDM1IDUuODk0IDUuODk0IDAgMCAxIDUuODM2IDUuMDM0eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=) */
export const GeminiCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gemini-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GeminiCircleColorful.displayName = 'GeminiCircleColorful';
