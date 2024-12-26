// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/via-circle-colorful.svg';

/**![ViaCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjNTY1NjU2IiByPSIxNiIvPjxwYXRoIGQ9Ik0xMS4xMzMgMTQuMjk2SDguMDA1di0xLjcxOWgyLjQ3TDguNTggNy42MjcgMTAuMTQ0IDdsMy41NSA5LjI2NyA0LjYwMS4wM0wyMS44NTYgN2wxLjU2NS42MjctMS44OTYgNC45NWgyLjQ3djEuNzJoLTMuMTI4bC0uNzcxIDIuMDEgMy45MDQuMDI1LS4wMSAxLjcxOS00LjU1LS4wMjlMMTYgMjdsLTMuNDU2LTkuMDIxTDggMTcuOTQ5bC4wMS0xLjcxOCAzLjg3NC4wMjV6bTMuMjIgMy42OTRMMTYgMjIuMjg4bDEuNjM4LTQuMjc3eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) */
export const ViaCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-via-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ViaCircleColorful.displayName = 'ViaCircleColorful';
