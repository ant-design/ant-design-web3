// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xpa-circle-colorful.svg';

/**![XpaCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjNEZBNzg0Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1LjU3NSAxMi44NDZsLTguMTEtMi4zMjQtMi43NzQgNC43MjUtMy4yMjItMy43MzcgMS40Ni0uMTg4IDEuNTA1IDEuNzY4IDEuNjctMi45NTktNy4zNS0yLjEwN2EuNTg2LjU4NiAwIDAgMC0uNzM2LjdMMTEuMjc0IDIxLjhsMy40OTctNS44ODggMy4yMjIgMy43MzctMS40Ni4xODgtMS41MDQtMS43NjgtMy4zMSA1LjUxNy40OSAxLjk3YS41OS41OSAwIDAgMCAuOTguMjhsMTIuNjMtMTIuMDFhLjU4LjU4IDAgMCAwLS4yNDQtLjk4eiIvPjwvZz48L3N2Zz4=) */
export const XpaCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xpa-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XpaCircleColorful.displayName = 'XpaCircleColorful';
