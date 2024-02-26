import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/cusdt-circle-colorful.svg';

export const CusdtCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => {
    const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('web3-icon-cusdt-circle-colorful');

    return (
      <AntdIcon
        {...props}
        className={classnames(prefixCls, props.className)}
        ref={ref}
        component={SVGComponent}
      />
    );
  },
);

CusdtCircleColorful.displayName = 'CusdtCircleColorful';
