// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/nmc-circle-colorful.svg';

/**![NmcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxODZDOUQiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOS4yNjEgMjMuNWwuMDAxLS4wMDJhMS44IDEuOCAwIDAgMCAuNDU4LS4wNWMuODc2LS4yMDUgMS42MTctLjk3IDEuNzkzLTEuNzk2TDI1IDguNTU2bC0yLjc3Mi0uMDE0LTIuMjg2IDguNTY4LTYuMTgtOC41OTctLjAwNC4wMDQuMDAzLS4wMUwxMi43NCA4LjV2LjAwMWExLjkgMS45IDAgMCAwLS40NTkuMDQ5Yy0uODc1LjIwNi0xLjYxNi45NzEtMS43OTMgMS43OTZMNyAyMy40NDVsMi43NzMuMDEyIDIuMjg1LTguNTY4IDYuMTggOC41OThoLjAwM2wxLjAyLjAxM3ptLTYuNTkzLTEwLjg5NGwuNDgzLTEuODEgNi4xODEgOC41OTktLjQ4MyAxLjgxLTYuMTgtOC42eiIvPjwvZz48L3N2Zz4=) */
export const NmcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-nmc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NmcCircleColorful.displayName = 'NmcCircleColorful';
