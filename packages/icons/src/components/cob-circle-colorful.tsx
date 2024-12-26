// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/cob-circle-colorful.svg';

/**![CobCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiMxM2JmOTkiIHI9IjE2Ii8+PHBhdGggZD0iTTE2IDI1aC00LjUzNmwyLjI3Mi0zLjk1N2g0LjUyOEwyMC41MzYgMjVIMTZ6bS0yLjI2My0xNC4wNDRoLS4wMDFMMTEuNDY0IDdoOS4wNzJsLTIuMjcyIDMuOTU2aC00LjUyOHptOS45OTkgOS41MzloLS4wMDIuMDAybC0yLjI3MyAzLjk1OC0yLjI2NC0zLjk1N2guMDAxbDIuMjYzLTMuOTU4SDI2bC0yLjI2NCAzLjk1N3pNOC4yNjQgMTEuNDk2bDIuMjcyLTMuOTU3IDIuMjY0IDMuOTU3LTIuMjY0IDMuOTU2SDZ6bTQuNTM1IDloLjAwMWwtMi4yNjQgMy45NTctMi4yNzItMy45NTdMNiAxNi41MzdoNC41MzZsMi4yNjQgMy45NTd6bTEwLjkzNy05TDI2IDE1LjQ1M2gtNC41MzZsLTIuMjY1LTMuOTU3IDIuMjY0LTMuOTU3IDIuMjczIDMuOTU3eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) */
export const CobCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-cob-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CobCircleColorful.displayName = 'CobCircleColorful';
