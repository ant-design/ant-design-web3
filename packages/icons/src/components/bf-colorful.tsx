// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bf-colorful.svg';

/**![BfColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWJmLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjx0aXRsZT5iaXRmb3JleDwvdGl0bGU+PHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHN0eWxlPSJmaWxsOiMyNjVmYWMiLz48cGF0aCBkPSJNOTg5LjY5LTIwYy00LjkyLDUzLjY4LTU4LjExLDQ2Ljk0LTU4LjExLDQ2Ljk0Vi0yMEg4NzguMjVWMjYuOTRINzYzLjEzVi0yMEg3MTAuOTFWMjYuOEM2NTguNDYsMzAsNjU1LTE5LDY1NS0xOUg2MDIuNTZ2Mi4xNmE5NS4zNSw5NS4zNSwwLDAsMCw5Mi43Myw5NS4zMmwxNS4xMywwLjQxdjY2Ljg2QTEwMi4zMSwxMDIuMzEsMCwwLDAsODEyLjcyLDI0OC4wNmgxNi42NUExMDIuNjMsMTAyLjYzLDAsMCwwLDkzMS42OSwxNDUuNzRWNzguNTFoMTUuNzdhOTQuNDMsOTQuNDMsMCwwLDAsOTQuNDMtOTQuNDNWLTIwaC01Mi4yWk04NzguNSwxNDBhNTcuNDUsNTcuNDUsMCwxLDEtMTE0Ljg4LDEuODRxMC0uOTIsMC0xLjg0Vjc3LjRIODc4LjVWMTQwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2Ni4yMiAxOTAuMDgpIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+) */
export const BfColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bf-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BfColorful.displayName = 'BfColorful';
