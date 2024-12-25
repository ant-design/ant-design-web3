// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/mona-circle-colorful.svg';

/**![MonaCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0RFQzc5OSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMy41MyAxMy40MTRMMjIuMTA1IDdsLTIuNzk3IDQuNDE0YTE0LjA5NiAxNC4wOTYgMCAwIDAtNi42MTcgMEw5LjkwMiA3bC0xLjQzIDYuNDE0QzYuOTM3IDE0LjY0MiA2IDE2LjI0NyA2IDE4LjAwOWMwIDMuODYgNC40NzYgNi45ODkgOS45OTcgNi45ODlzOS45OTctMy4xMyA5Ljk5Ny02Ljk4OWMtLjAwMS0xLjc2Mi0uOTMtMy4zNjctMi40NjUtNC41OTV6TTEwLjQ0MiAxNi4zNWgtLjY2NmwxLjYyNy0xLjg3NmgxLjE4NGwtMi4xNDUgMS44NzZ6bTUuNTA0IDQuNTg0bC0yLjc2Ni00Ljg3Mi42ODMtLjM5LjYxNyAxLjA4NWgzLjAyMWwuNjQ0LTEuMDkuNjc2LjQwMi0yLjg3NSA0Ljg2NXptNS42MTMtNC41ODRsLTIuMTQ2LTEuODc2aDEuMTkybDEuNjI1IDEuODc2aC0uNjcxem0tNS42IDMuMDE1bC0xLjAzMy0xLjgyaDIuMTA4bC0xLjA3NSAxLjgyeiIvPjwvZz48L3N2Zz4=) */
export const MonaCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-mona-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

MonaCircleColorful.displayName = 'MonaCircleColorful';
