// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/lpt-colorful.svg';

/**![LptColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCA2NDAgNjgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSI1MjAiIHk9IjQwMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHRyYW5zZm9ybT0icm90YXRlKC05MCA1MjAgNDAwKSIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMjYwIiB5PSIyNjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMjYwIDI2MCkiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjI2MCIgeT0iNTQwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDI2MCA1NDApIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSI2ODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCA2ODApIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSI0MDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCA0MDApIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCAxMjApIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K) */
export const LptColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-lpt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LptColorful.displayName = 'LptColorful';
