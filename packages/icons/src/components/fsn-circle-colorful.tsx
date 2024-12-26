// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/fsn-circle-colorful.svg';

/**![FsnCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWZzbi1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjE4LjQ0IDIxOC40NCI+PHRpdGxlPmZ1c2lvbi1mc24tbG9nbzwvdGl0bGU+PHBhdGggZD0iTTMwNS4yMiwyODdBMTA5LjIyLDEwOS4yMiwwLDEsMSwxOTYsMzk2LjIyLDEwOS4yMiwxMDkuMjIsMCwwLDEsMzA1LjIyLDI4N2gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5NiAtMjg3KSIgc3R5bGU9ImZpbGw6IzFlOWFkYTtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yODAuODQsMzQ4Yy0yNy4wOSw0MS41NS00My43Myw5OS4yNS01MC4yMiwxMTguODUtMy42NS0zNywxNS42Mi04Ny4zNiwyOS43My0xMTcuMTMtNi40OS4zLTQxLjA5LDIuNzQtNjAuMjYsMjIuNTUsMCwwLDEwLjM1LTMxLjgsNzAuMTEtNDEuNDVsMC4yLS40MWM0Ni43Ny02OC4zNyw4MS44Ny0yNy41Myw4MS44Ny0yNy41My0yMS4zMS0zLjU2LTM5Ljg3LDcuMTEtNTUuNywyNC40OCw3LjcxLS4zLDU3LjYzLTAuOTEsNzIsMzguNiwwLDAtMjguOTItMjAuNzItODcuNzYtMThoMFptMzMuNzksNDcuNjRhMjEuNzQsMjEuNzQsMCwxLDAsMjEuNzEsMjEuNzRoMGEyMS42OSwyMS42OSwwLDAsMC0yMS43MS0yMS43NGgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5NiAtMjg3KSIgc3R5bGU9ImZpbGw6I2ZlZmVmZSIvPjwvc3ZnPg==) */
export const FsnCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-fsn-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FsnCircleColorful.displayName = 'FsnCircleColorful';
