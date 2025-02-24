// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ethereum-circle-filled.svg';

/**![EthereumCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxjaXJjbGUgZmlsbD0iY3VycmVudENvbG9yIiBjeD0iNTEzIiBjeT0iNTEyIiByPSI1MTIiPjwvY2lyY2xlPgogICAgPGcgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgPHJlY3QgZmlsbC1vcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0Ij48L3JlY3Q+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg2LCAxNTIpIj4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIwIDQwNyAyMjYuNSA1MzYuNzExOTM0IDQ1MyA0MDcgMjI2LjUgNzE4Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjI2LjUyODY1NCAwIDIuNTYxOTkyOGUtMTUgMzY2LjQ1MjkwMiAyMjYuNTI4NjU0IDQ5NyA0NTMgMzY2LjQ1MjkwMiI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=) */
export const EthereumCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ethereum-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EthereumCircleFilled.displayName = 'EthereumCircleFilled';
