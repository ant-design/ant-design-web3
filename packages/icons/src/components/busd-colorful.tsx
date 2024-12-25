// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/busd-colorful.svg';

/**![BusdColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzNi40MSAzMzcuNDIiPjxkZWZzLz48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9ImFudC13ZWIzLWljb24tYnVzZC1jb2xvcmZ1bC1MYXllcl8yIj48ZyBpZD0iYW50LXdlYjMtaWNvbi1idXNkLWNvbG9yZnVsLUxheWVyXzEtMiI+PHBhdGggZD0iTTE2OC4yLjcxbDQxLjUsNDIuNUwxMDUuMiwxNDcuNzFsLTQxLjUtNDEuNVoiIHN0eWxlPSJmaWxsOiAjZjBiOTBiOyBzdHJva2U6ICNmMGI5MGI7Ii8+PHBhdGggZD0iTTIzMS4yLDYzLjcxbDQxLjUsNDIuNUwxMDUuMiwyNzMuNzFsLTQxLjUtNDEuNVoiIHN0eWxlPSJmaWxsOiAjZjBiOTBiOyBzdHJva2U6ICNmMGI5MGI7Ii8+PHBhdGggZD0iTTQyLjIsMTI2LjcxbDQxLjUsNDIuNS00MS41LDQxLjVMLjcsMTY5LjIxWiIgc3R5bGU9ImZpbGw6ICNmMGI5MGI7IHN0cm9rZTogI2YwYjkwYjsiLz48cGF0aCBkPSJNMjk0LjIsMTI2LjcxbDQxLjUsNDIuNUwxNjguMiwzMzYuNzFsLTQxLjUtNDEuNVoiIHN0eWxlPSJmaWxsOiAjZjBiOTBiOyBzdHJva2U6ICNmMGI5MGI7Ii8+PC9nPjwvZz48L3N2Zz4=) */
export const BusdColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-busd-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BusdColorful.displayName = 'BusdColorful';
