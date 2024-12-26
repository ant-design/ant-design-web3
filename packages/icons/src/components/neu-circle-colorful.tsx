// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/neu-circle-colorful.svg';

/**![NeuCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0IzQkEwMCIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMy4xMyAxMC42NjRsLS4xMy4wNzlMMTkgMjB2LTkuMjY1TDE2LjAwNCA5ek0xMyAyMS4xNjVMMTYuMTM2IDIzIDE5IDIxLjMyOCAxMyAxMnptLTMtOC44MDl2Ny4yODhMMTIgMjFWMTF6TTIwIDIxbDItMS4zODd2LTcuMjI2TDIwIDExeiIvPjxwYXRoIGQ9Ik0xNiA0QzkuMzc1IDQgNCA5LjM3NSA0IDE2czUuMzc1IDEyIDEyIDEyIDEyLTUuMzc1IDEyLTEyUzIyLjYyNSA0IDE2IDR6bS0uMDUgMTkuNjJsLTYuNDc2LTMuODR2LTcuNjY4bDYuNDc3LTMuODMgNi40NzYgMy44M3Y3LjY2OWwtNi40NzYgMy44Mzh6Ii8+PC9nPjwvZz48L3N2Zz4=) */
export const NeuCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-neu-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NeuCircleColorful.displayName = 'NeuCircleColorful';
