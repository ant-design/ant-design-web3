// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/sumo-circle-colorful.svg';

/**![SumoCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzJEOUNEQiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xOC4wNjEgOS4wODRjMy40MDQgMy41NjYgNC4yNjggNC4xOTYgNS4wOTUgNC40MjMtMi44NzUtLjM2LTQuNDk3LS41NjQtNy4yMDYtMS45ODZsLTEuNzEgMS45OUwyNSAxNS45Yy0zLjM2NiAyLjg2Mi00LjgyNCA0LjM4Ny02LjkzOSA3LjAxNEgxMy45OWMtMS43ODktMi42MTgtMi45ODItMy40NjgtNS4yOC00LjUyNyAzLjA1OC4yODIgNC43NTguNDcgNy4yNCAxLjk0bDEuODYxLTIuMDlMNyAxNS45YzIuNTE0LTIuMDcyIDMuOTc3LTMuNDU0IDYuOTg5LTYuODE2aDQuMDcyem0tMy44MjEtLjQ5N2MuOTMtMS4xNDUgMS4zMS0xLjcwMiAxLjgxLTIuNTg3LjQ5LjkxMi44NjkgMS40NzUgMS43NiAyLjU4N2gtMy41N3ptMy41NyAxNC44MjZDMTYuODc5IDI0LjU1OCAxNi40OTggMjUuMTE1IDE2IDI2Yy0uNDktLjkxMi0uODctMS40NzUtMS43Ni0yLjU4N2gzLjU3eiIvPjwvZz48L3N2Zz4=) */
export const SumoCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-sumo-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

SumoCircleColorful.displayName = 'SumoCircleColorful';
