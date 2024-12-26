// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ignis-colorful.svg';

/**![IgnisColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWlnbmlzLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2MCA2MzUiID48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU1Ljk0NiAtMzcyKSI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24taWduaXMtY29sb3JmdWwtcGF0aDBfZmlsbCIgZD0iTTUzNiA0NTkuOUw0MDUuMiAzNzIgMzA1LjEgNjM1bDY0IDEyMS4zTDUzNiA0NTkuOXoiIHN0eWxlPSJmaWxsOiAjZjljMDExOyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU4LjM4MSAtMzY3LjE5MikiPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWlnbmlzLWNvbG9yZnVsLXBhdGgxX2ZpbGwiIGQ9Ik02MTguNCA1OTcuM2wtNzQuMi0xMzMtMjg1LjggNTIwLjloMTQzLjNsMjE2LjctMzg3Ljl6IiBzdHlsZT0iZmlsbDogI2RiNzEyYTsiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1MC40MjIgLTM1MC45ODcpIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1pZ25pcy1jb2xvcmZ1bC1wYXRoMl9maWxsIiBkPSJNNTI5LjMgNzc1LjJMNDExLjEgOTg2bDE5MS4yLTExNS40LTczLTk1LjR6IiBzdHlsZT0iZmlsbDogI2I3MjMwZjsiLz48L2c+PC9zdmc+) */
export const IgnisColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ignis-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

IgnisColorful.displayName = 'IgnisColorful';
