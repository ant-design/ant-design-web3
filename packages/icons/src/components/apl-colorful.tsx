// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/apl-colorful.svg';

/**![AplColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQxLjcgMzYuNCIgdmlld0JveD0iMCAwIDQxLjcgMzYuNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYuMiA4LjQgMi44IDQuNi0xMy44IDIzLjRoLTUuMnptNS4yLTguNGgtNi4xbDE5LjMgMzEuN2gtNS4zbC04LjYtMTQuOC0xMS4yIDE4LjloNS44bDUuNC0xMC4xIDUuOSAxMC4xaDE1LjF6IiBmaWxsPSIjZTViMzQ5Ii8+PC9zdmc+) */
export const AplColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-apl-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

AplColorful.displayName = 'AplColorful';
