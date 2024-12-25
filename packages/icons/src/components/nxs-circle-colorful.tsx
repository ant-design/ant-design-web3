// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/nxs-circle-colorful.svg';

/**![NxsCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM0MDk5Q0QiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMi4wMDUgMjMuNzZjLjYwNS0xLjc2NCAxLjc3MS0zLjY3NCAzLjM5NS01LjU2YTIgMiAwIDAgMSAyLjc4OC0yLjgxIDM0Ljk3MyAzNC45NzMgMCAwIDEgNC4xMDQtMy4xMDljNi45MzQtNC41MDMgMTQuMjYyLTUuOTQgMTcuODM2LTMuNzk4YTE1LjkgMTUuOSAwIDAgMSAxLjgyMSA2LjIzNmMtMS4xNTQgMy43NzgtNC45NjYgOC4yOTItMTAuMzk4IDExLjgyLTMuNzQ3IDIuNDMzLTcuNjEgMy45NzItMTAuOTMzIDQuNTMzYTE2LjA1MiAxNi4wNTIgMCAwIDEtOC42MTMtNy4zMTJ6bTMuNzUtNS4xOTVjLTIuMzQ0IDIuNzA4LTMuMjgzIDUuNDk0LTIuMTQ3IDcuMjQ0IDEuNzE2IDIuNjQzIDcuNTIgMS45MiAxMi45NjEtMS42MTMgNS40NDItMy41MzQgOC40NjItOC41NDIgNi43NDYtMTEuMTg1LTEuNzE3LTIuNjQzLTcuNTItMS45Mi0xMi45NjIgMS42MTMtLjYwMy4zOTItMS4xNzcuODAyLTEuNzE3IDEuMjI1YTIgMiAwIDAgMS0yLjg4MSAyLjcxNnoiLz48L2c+PC9zdmc+) */
export const NxsCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-nxs-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NxsCircleColorful.displayName = 'NxsCircleColorful';
