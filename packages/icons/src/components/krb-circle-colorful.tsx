// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/krb-circle-colorful.svg';

/**![KrbCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMDBBRUVGIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE1Ljc2IDE0LjcwNmMuMjM4LS4wNDEuNDQ4LS4xMy42MzItLjI2NXMuMzU4LS4zNjMuNTIxLS42NzVsMy42MjUtNi45ODdjLjE0Mi0uMjM0LjMxNi0uNDIuNTE2LS41NjZhMS4yIDEuMiAwIDAgMSAuNy0uMjEzaDIuMjk5bC00LjUxNCA4LjIxOGMtLjIuMzM4LS40MjcuNjEzLS42OC44MjZhMi43NzIgMi43NzIgMCAwIDEtLjg1MS40ODNjLjQ4NC4xMjUuODg5LjMyOCAxLjIyLjYxMy4zMjYuMjguNjM3LjY3Ni45MjYgMS4xODVMMjQuNSAyNmgtMi41M2MtLjUxMSAwLS45MjItLjI3NS0xLjIzMi0uODJsLTMuNTYyLTcuMzUxYy0uMTg0LS4zMjgtLjM4NC0uNTYxLS42LS43MDItLjIxNS0uMTQtLjQ4OS0uMjIzLS44MTUtLjI0NHYzLjczaC0xLjk4OXYtMy43NDZIMTIuMzFWMjZIOS41VjZoMi44MXY4LjczOGgxLjQ2MnYtNC4zMjJoMS45ODl2NC4yOXoiLz48L2c+PC9zdmc+) */
export const KrbCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-krb-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KrbCircleColorful.displayName = 'KrbCircleColorful';
