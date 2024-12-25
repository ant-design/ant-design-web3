// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/stak-circle-colorful.svg';

/**![StakCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0YyOTQxQiIvPjxwYXRoIGQ9Ik0xNi41NjYgNWguMDExYzIuMDcyIDIuMDUgNC4xMjEgNC4xMiA2LjE4MSA2LjE4MWg1LjE0bC0xMS41NyAxNi4zOTNjLS4xOTItMS45MjUtLjM0LTMuODUtLjUxLTUuNzc0IDEuNjc2LTIuNDExIDMuMzk3LTQuOCA1LjA3My03LjJsLTMuODI3LTMuODE1YTguODg5IDguODg5IDAgMCAwLS4xMTMtMS4zNDdjLS4xMjUtMS40NzItLjIwNC0yLjk2Ni0uMzg1LTQuNDM4ek00LjAxMSAyMS40NmMzLjg4My01LjQ1NiA3LjczMi0xMC45MzUgMTEuNjA0LTE2LjQwM2wuNDg3IDUuNzk2Yy0xLjY4NyAyLjQxMS0zLjM4NSA0Ljc4OS01LjA3MiA3LjE4OSAxLjI1NyAxLjI1NiAyLjUxMyAyLjUzNSAzLjc5MyAzLjc5Mi4xNyAxLjkyNC4zMTcgMy44NzIuNTEgNS44MDhoLS4wMjRsLTYuMTQ3LTYuMTU5Yy0xLjcyLjAyMy0zLjQ0MS0uMDExLTUuMTYyLjAyM3YtLjA0NmguMDExeiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=) */
export const StakCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-stak-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

StakCircleColorful.displayName = 'StakCircleColorful';
