// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/niox-circle-colorful.svg';

/**![NioxCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzcwQzlDOSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNiAxMy43NjRoLTQuODIyTDE2IDUuNWw0LjgyMiA4LjI2NEgxNnptLjY1NSA5LjczNmwyLjUxNS00LjMwOSAyLjQxMS00LjEzMUwyNi41IDIzLjVoLTkuODQ1em0tMy44MjUtNC4zMDlsMi41MTUgNC4zMDlINS41bDQuOTE5LTguNDQgMi40MSA0LjEzMXoiLz48L2c+PC9zdmc+) */
export const NioxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-niox-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NioxCircleColorful.displayName = 'NioxCircleColorful';
