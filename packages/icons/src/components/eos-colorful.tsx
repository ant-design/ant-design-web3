// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/eos-colorful.svg';

/**![EosColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzLjIgNTAiPjx0aXRsZT5Bc3NldCAxPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1lb3MtY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24tZW9zLWNvbG9yZnVsLUxheWVyXzEtMiI+PHBhdGggZD0iTTE2LjYsMCw0LjksMTYuMSwwLDM5LjksMTYuNiw1MCwzMy4yLDM5LjksMjguMiwxNlpNMi43LDM4LjgsNi40LDIwLjdsOC40LDI1LjVaTTcuNiwxNi42bDktMTIuNCw5LDEyLjQtOSwyNy4yWk0xOC4zLDQ2LjJsOC40LTI1LjUsMy43LDE4LjFaIi8+PC9nPjwvZz48L3N2Zz4=) */
export const EosColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-eos-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EosColorful.displayName = 'EosColorful';
