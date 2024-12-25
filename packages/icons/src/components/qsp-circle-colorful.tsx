// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/qsp-circle-colorful.svg';

/**![QspCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjNDU0NTQ1IiByPSIxNiIvPjxwYXRoIGQ9Ik0xMS41IDE2YzAtMi40ODEgMi4wMTktNC41IDQuNS00LjVzNC41IDIuMDE5IDQuNSA0LjVjMCAuNjUzLS4xNDMgMS4yNzItLjM5NCAxLjgzM2wtMi45Ny0yLjk3LTIuMjcyIDIuMjczIDIuOTcgMi45N0E0LjQ2OCA0LjQ2OCAwIDAgMSAxNiAyMC41YTQuNTA1IDQuNTA1IDAgMCAxLTQuNS00LjVtMTEuODEzIDBhNy4yNzMgNy4yNzMgMCAwIDAtMS4xOC0zLjk3OEwyNSA5LjE1NCAyMi44NDYgN2wtMi44NjggMi44NjhjLTEuMTQ2LS43NDUtMi41MS0xLjE4MS0zLjk3OC0xLjE4MXMtMi44MzIuNDM2LTMuOTc4IDEuMThMOS4xNTQgNyA3IDkuMTU0bDIuODY4IDIuODY4Yy0uNzQ1IDEuMTQ2LTEuMTgxIDIuNTEtMS4xODEgMy45NzhzLjQzNyAyLjgzMiAxLjE4MSAzLjk3OEw3IDIyLjg0NiA5LjE1NCAyNWwyLjg2OC0yLjg2OGMxLjE0Ni43NDUgMi41MSAxLjE4MSAzLjk3OCAxLjE4MXMyLjgzMi0uNDM2IDMuOTc4LTEuMTgxTDIyLjg0NiAyNSAyNSAyMi44NDZsLTIuODY4LTIuODY4QTcuMjcyIDcuMjcyIDAgMCAwIDIzLjMxMyAxNiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=) */
export const QspCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-qsp-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

QspCircleColorful.displayName = 'QspCircleColorful';
