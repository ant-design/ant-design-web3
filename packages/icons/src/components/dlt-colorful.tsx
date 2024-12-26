// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/dlt-colorful.svg';

/**![DltColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWRsdC1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAwIDIwMDAiPjx0aXRsZT5hZ3JlbGxvLWRsdC1sb2dvPC90aXRsZT48cmVjdCB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiByeD0iMjguMDUiIHN0eWxlPSJmaWxsOiMzMjJhM2YiLz48cGF0aCBkPSJNOTg3Ljg0LDUzMi43LDYwMy4zMSwxMzM0LjQ2aDYzOC4zOGE0Ni4yMyw0Ni4yMywwLDAsMSw0Mi41LDI4bC42NywxLjU1YTM4LjcsMzguNywwLDAsMS0xLjk1LDM0LjQ2LDYwLjgxLDYwLjgxLDAsMCwxLTUyLjcxLDMwLjU0SDU1MS43NmE1Myw1MywwLDAsMS0yOS40LTguOTFsLTMuNTgtMi4zN2E1My4xNCw1My4xNCwwLDAsMS0xOC4zMS02Ny4yM0w5NTQuMTksNDE2LjgyQTc2Ljg5LDc2Ljg5LDAsMCwxLDk3NCwzOTEuNDlhNDQuNDUsNDQuNDUsMCwwLDEsNTYuMjgtLjU0LDMwLjQ2LDMwLjQ2LDAsMCwxLDguNTEsMTAuNTRMMTQ5OSwxMzQxLjYyYTU3LjY2LDU3LjY2LDAsMCwxLDMuNjUsNDEuMDgsMzUuODgsMzUuODgsMCwwLDEtMzQuNiwyNi4wOGgtNS4yN2E1NS4zOSw1NS4zOSwwLDAsMS01MC4xMy0zMS44MmwtMzk2LjktODQ0LjEyYTE1LjQsMTUuNCwwLDAsMC0yNy45LS4xNFoiIHN0eWxlPSJmaWxsOiNmNGFlOTUiLz48L3N2Zz4=) */
export const DltColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-dlt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DltColorful.displayName = 'DltColorful';
