// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/lsk-colorful.svg';

/**![LskColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWxzay1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzYgMzI2Ij48dGl0bGU+bGlzazwvdGl0bGU+PHBhdGggZD0iTTEzOC4xNiwwTDEwOC44OCw0OC43LDIxNC41OCwyMjkuODQsMTI4LjgzLDMyNnM2Ny40LS40LDY3LDBTMjc2LDIzNS40MywyNzYsMjM1LjQzWk05OS43MSw2Ni42NkwwLDIzNi4yMyw3OC41NywzMjZoMjkuNTVsNDMuMi01MC4yOGgtNDhMNjEsMjI4LjY1bDY3LjgtMTE1LjMxWiIgc3R5bGU9ImZpbGw6IzA0MTgzZCIvPjwvc3ZnPg==) */
export const LskColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-lsk-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LskColorful.displayName = 'LskColorful';
