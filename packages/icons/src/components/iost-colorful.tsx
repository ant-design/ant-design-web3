// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/iost-colorful.svg';

/**![IostColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ1MCA1MTkuNiI+PHRpdGxlPui1hOa6kCA3eGhkcGk8L3RpdGxlPjxwYXRoIGQ9Ik0yMjUgMEwwIDEyOS45djI1OS44bDIyNSAxMjkuOSAyMjUtMTI5LjlWMTI5LjlMMjI1IDB6bTQuNiA0MjAuOEw1Ni45IDMyMi4zbC43LTQ3LjkgMTcxLjkgOTguNCA4Mi45LTQ3LjgtNTUuNi0zMi4xLTIwLjggMTItMzktMjIuNCAyMC45LTEyLjEtMjcuMy0xNS44LTE2LjUgOS42LTM5LjEtMjIuNCAxNi42LTkuNi04OC4xLTUwLjkgMTY2LTk1LjggMTU2LjYgODkuMy00MiAyNC40LTExNC42LTY1LjctODIuOSA0Ny44IDQ2LjQgMjYuOCAyMy43LTEzLjggMzkuMSAyMi40LTIzLjkgMTMuOCAyNy4zIDE1LjggMTkuNC0xMS4zIDM5LjEgMjIuNC0xOS42IDExLjQgOTcuMiA1Ni4xLTE2NS43IDk1Ljl6Ii8+PC9zdmc+) */
export const IostColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-iost-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

IostColorful.displayName = 'IostColorful';
