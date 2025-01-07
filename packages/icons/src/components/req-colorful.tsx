// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/req-colorful.svg';

/**![ReqColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOS43IDE0MS4xNiI+PGRlZnMvPjx0aXRsZT5pY29uPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1yZXEtY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24tcmVxLWNvbG9yZnVsLVJlcXVlc3RfR3JlZW5fTG9nb19mb3JfQmFja2dyb3VuZCI+PHBhdGggZD0iTTg3LjY1LDc5LjMxLDEyMy4wNyw0NGExNC4wNywxNC4wNywwLDAsMCw0LjE0LTEwbC4wNi0yOC41NGE1LjcxLDUuNzEsMCwwLDAtMS41OC0zLjkzTDU3Ljc0LDY5LjMzYTE0LjA4LDE0LjA4LDAsMCwwLDAsMjBsNDcuOTEsNDcuNzZhMTQuMSwxNC4xLDAsMSwwLDE5LjktMjBaIiBzdHlsZT0iZmlsbDogIzAwOGM2MjsiLz48cGF0aCBkPSJNMTIxLjczLDBIMTVDNi4zNywwLDAsNi41MiwwLDE1LjQyVjEyNi43N2ExNC4xNywxNC4xNywwLDAsMCwxNC4zNiwxNC4zNWgwYTE0LjExLDE0LjExLDAsMCwwLDE0LjM1LTE0LjM1VjI3LjQ3aDcxbDI2LTI1Ljg3QTUuNDUsNS40NSwwLDAsMCwxMjEuNzMsMFoiIHN0eWxlPSJmaWxsOiAjMDBlNmEwOyIvPjwvZz48L2c+PC9zdmc+) */
export const ReqColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-req-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ReqColorful.displayName = 'ReqColorful';
