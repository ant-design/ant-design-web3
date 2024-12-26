// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/eul-circle-colorful.svg';

/**![EulCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWV1bC1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+PGRlZnMvPjx0aXRsZT5FRl9sb2dvXzwvdGl0bGU+PGNpcmNsZSBjeD0iNDAwIiBjeT0iNDAwIiByPSIzOTguOSIgc3R5bGU9ImZpbGw6ICMwYzIxMjk7Ii8+PHJlY3QgeD0iMTM5LjcxIiB5PSIyMTMuNDgiIHdpZHRoPSIzOTguOSIgaGVpZ2h0PSI5OS43MyIgcng9IjQ5Ljg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzcuNzkgMTYwLjcyKSByb3RhdGUoLTI0KSIgc3R5bGU9ImZpbGw6ICMzN2JlYzE7Ii8+PHJlY3QgeD0iMTU5LjMxIiB5PSIzOTAuNyIgd2lkdGg9IjI5OS4xOCIgaGVpZ2h0PSI5OS43MyIgcng9IjQ5Ljg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUyLjQ5IDE2My43Mykgcm90YXRlKC0yNCkiIHN0eWxlPSJmaWxsOiAjZmJiMTQ0OyIvPjxyZWN0IHg9IjI2MS4zOSIgeT0iNDg2Ljc5IiB3aWR0aD0iMzk4LjkiIGhlaWdodD0iOTkuNzMiIHJ4PSI0OS44NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OC40NCAyMzMuODQpIHJvdGF0ZSgtMjQpIiBzdHlsZT0iZmlsbDogI2U0NjE1ZTsiLz48L3N2Zz4=) */
export const EulCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-eul-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EulCircleColorful.displayName = 'EulCircleColorful';
