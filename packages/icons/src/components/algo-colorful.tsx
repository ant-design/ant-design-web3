// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/algo-colorful.svg';

/**![AlgoColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWFsZ28tY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTEzIDExMy40Ij48dGl0bGU+YWxnb3JhbmQtYWxnby1sb2dvPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjE5LjYgMTEzLjQgMzYgODUgNTIuNCA1Ni43IDY4LjcgMjguMyA3MS40IDIzLjggNzIuNiAyOC4zIDc3LjYgNDcgNzIgNTYuNyA1NS42IDg1IDM5LjMgMTEzLjQgNTguOSAxMTMuNCA3NS4zIDg1IDgzLjggNzAuMyA4Ny44IDg1IDk1LjQgMTEzLjQgMTEzIDExMy40IDEwNS40IDg1IDk3LjggNTYuNyA5NS44IDQ5LjQgMTA4IDI4LjMgOTAuMiAyOC4zIDg5LjYgMjYuMiA4My40IDMgODIuNiAwIDY1LjUgMCA2NS4xIDAuNiA0OS4xIDI4LjMgMzIuNyA1Ni43IDE2LjQgODUgMCAxMTMuNCAxOS42IDExMy40Ii8+PC9zdmc+) */
export const AlgoColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-algo-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

AlgoColorful.displayName = 'AlgoColorful';
