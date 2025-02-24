// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ksm-colorful.svg';

/**![KsmColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0MSA0NDEiPjxkZWZzLz48dGl0bGU+a3VzYW1hLWtzbS1sb2dvPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1rc20tY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24ta3NtLWNvbG9yZnVsLUxheWVyXzEtMiI+PHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NDAiIGhlaWdodD0iNDQwIiBzdHlsZT0ic3Ryb2tlOiAjMDAwOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7Ii8+PHBhdGggZD0iTTM3My42LDEyNy40Yy01LjItNC4xLTExLjQtOS43LTIyLjctMTEuMS0xMC42LTEuNC0yMS40LDUuNy0yOC43LDEwLjRzLTIxLjEsMTguNS0yNi44LDIyLjctMjAuMyw4LjEtNDMuOCwyMi4yLTExNS43LDczLjMtMTE1LjcsNzMuM2wyNCwuMy0xMDcsNTUuMUg2My42TDQ4LjIsMzEyczEzLjYsMy42LDI1LTMuNnYzLjNzMTI3LjQtNTAuMiwxNTItMzcuMmwtMTUsNC40YzEuMywwLDI1LjUsMS42LDI1LjUsMS42YTM0LjM0LDM0LjM0LDAsMCwwLDE1LjQsMjQuOGMxNC42LDkuNiwxNC45LDE0LjksMTQuOSwxNC45cy03LjYsMy4xLTcuNiw3YzAsMCwxMS4yLTMuNCwyMS42LTMuMWE4Mi42NCw4Mi42NCwwLDAsMSwxOS41LDMuMXMtLjgtNC4yLTEwLjktNy0yMC4xLTEzLjgtMjUtMTkuOGEyOCwyOCwwLDAsMS00LjEtMjcuNGMzLjUtOS4xLDE1LjctMTQuMSw0MC45LTI3LjEsMjkuNy0xNS40LDM2LjUtMjYuOCw0MC43LTM1LjdzMTAuNC0yNi42LDEzLjktMzQuOWM0LjQtMTAuNyw5LjgtMTYuNCwxNC4zLTE5LjhzMjQuNS0xMC45LDI0LjUtMTAuOVMzNzguNSwxMzEuMywzNzMuNiwxMjcuNFoiIHN0eWxlPSJmaWxsOiAjZmZmOyIvPjwvZz48L2c+PC9zdmc+) */
export const KsmColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ksm-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KsmColorful.displayName = 'KsmColorful';
