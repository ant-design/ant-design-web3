// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tnc-circle-colorful.svg';

/**![TncCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjZmY0MzliIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHI9IjE2Ii8+PHBhdGggZD0iTTE4LjIyNiAxMy44MDRsNS42MzMgOS42OTZIOC4yNDVsMS44NzEtMy4xMDMgOC40MTIuMDAyLTIuMTMyLTMuNDh6bS01Ljc1IDIuMjU2bDUuNzI3LTkuNTJMMjYgMTkuNjY3aC0zLjc0NGwtNC4xMi03LjE2LTIuMDAxIDMuNTU0em00Ljg4NSAzLjYxOUw2IDE5LjYyNSAxMy44MDcgNi41bDEuODYgMy4xNDYtNC4zMDMgNi45MThoNC4xNjd6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==) */
export const TncCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tnc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TncCircleColorful.displayName = 'TncCircleColorful';
