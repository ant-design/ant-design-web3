// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xrp-colorful.svg';

/**![XrpColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA0MjQiPjxkZWZzLz48dGl0bGU+eDwvdGl0bGU+PGcgaWQ9ImFudC13ZWIzLWljb24teHJwLWNvbG9yZnVsLUxheWVyXzIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLXhycC1jb2xvcmZ1bC1MYXllcl8xLTIiPjxwYXRoIGQ9Ik00MzcsMGg3NEwzNTcsMTUyLjQ4Yy01NS43Nyw1NS4xOS0xNDYuMTksNTUuMTktMjAyLDBMLjk0LDBINzVMMTkyLDExNS44M2E5MS4xMSw5MS4xMSwwLDAsMCwxMjcuOTEsMFoiIHN0eWxlPSJmaWxsOiAjMjMyOTJmOyIvPjxwYXRoIGQ9Ik03NC4wNSw0MjRIMEwxNTUsMjcwLjU4YzU1Ljc3LTU1LjE5LDE0Ni4xOS01NS4xOSwyMDIsMEw1MTIsNDI0SDQzOEwzMjAsMzA3LjIzYTkxLjExLDkxLjExLDAsMCwwLTEyNy45MSwwWiIgc3R5bGU9ImZpbGw6ICMyMzI5MmY7Ii8+PC9nPjwvZz48L3N2Zz4=) */
export const XrpColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xrp-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XrpColorful.displayName = 'XrpColorful';
