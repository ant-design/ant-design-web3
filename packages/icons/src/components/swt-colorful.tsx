// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/swt-colorful.svg';

/**![SwtColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXN3dC1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAwIDIwMDAiPjxwYXRoIGQ9Ik0wIDBoMjAwMHYyMDAwSDB6IiBzdHlsZT0iZmlsbDogI2VmZDk2ZjsiLz48ZyBpZD0iYW50LXdlYjMtaWNvbi1zd3QtY29sb3JmdWwtVGhhbmtzX3RvX1BpZXRlcl9Cb2Vsc194MjFfIj48cGF0aCBkPSJNMTQyMyA3MzJjLTIyOCAwLTQxNiAxODMtNTg2IDMzNS00OS00My0xMDQtOTYtMTQ2LTE0Ni00LTUtMTAtNi0xMy00LTQgMy01IDktMSAxMyAzOSA0OCA5MSAxMDYgMTQwIDE1NS05MSA4Ni0yMzAgMTkwLTM0MiAxOTAtMjI2IDAtMjI3LTMxMy0yOS0zNzIgOS0yIDktMTMgMC0xMC0yNTkgNjQtMjQ1IDQyOSAzNCA0MjkgMTMzIDAgMjU1LTg5IDM3OC0xOTQgMTMzIDEyMCAzMDEgMjE4IDUxNyAyMTggNTQ4IDAgNTMyLTYxNCA0OC02MTR6bS01MiA1NjdjLTE3My0xLTM0MS03Ny00ODgtMTkyIDE2Ny0xNDUgMzM2LTMxMSA1MzUtMzExIDM4OCAwIDM5OCA1MDYtNDcgNTAzeiIgc3R5bGU9ImZpbGw6ICMzMzM7Ii8+PGNpcmNsZSBjeD0iNTY0IiBjeT0iODYxIiByPSI1NiIgc3R5bGU9ImZpbGw6ICMzMzM7Ii8+PC9nPjwvc3ZnPg==) */
export const SwtColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-swt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

SwtColorful.displayName = 'SwtColorful';
