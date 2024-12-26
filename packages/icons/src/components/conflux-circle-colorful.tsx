// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/conflux-circle-colorful.svg';

/**![ConfluxCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDEyMCAxMjAiPjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjRURGMEY0Ii8+PHBhdGggZmlsbD0iIzFBMUExQSIgZD0iTTM0LjcwMTIgNzYuMDEyNEw2MC40MTI2IDUwLjMwMDlMNjguMjM3OSA1OC4xMjYyTDUwLjM1MTYgNzYuMDEyNEw2MC40MTI2IDg2LjA3MzRMNzguMjk4OSA2OC4xODcyTDg2LjEyNDEgNzYuMDEyNEw2MC40MTI2IDEwMS43MjRMMzQuNzAxMiA3Ni4wMTI0WiIvPjxwYXRoIGZpbGw9IiM1N0EwRDYiIGQ9Ik0yNyA1Mi4yODgzVjY4LjE4NzJMNjAuMjg4MyAzNC44OTg5TDkzLjU3NjYgNjguMTg3MlY1Mi4yODgzTDYwLjI4ODMgMTlMMjcgNTIuMjg4M1oiLz48L3N2Zz4=) */
export const ConfluxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-conflux-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ConfluxCircleColorful.displayName = 'ConfluxCircleColorful';
