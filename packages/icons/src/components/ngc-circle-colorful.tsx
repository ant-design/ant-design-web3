// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ngc-circle-colorful.svg';

/**![NgcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjZjgwMDAwIiByPSIxNiIvPjxwYXRoIGQ9Ik0yMC41IDE2Ljg0MkwxMy44MDQgMjZsLjI0Ny03LjQ0MUgxMi41bC42MzQtNi41MzIgNy4wODQtLjk3Ni0yLjMyNiA1LjkyNXptLTUuNDk4IDYuNDk4di0xLjc1YzAtLjEzLS4xMS0uMjM2LS4yNDYtLjIzNnMtLjI0Ny4xMDUtLjI0Ny4yMzV2MS43NTFjMCAuMTMuMTEuMjM2LjI0Ny4yMzZzLjI0Ni0uMTA2LjI0Ni0uMjM2em0tMS44MzItNS4yODZoMS40MWwtLjA2NSAyLjY5M2MtLjAwMS4wNzEuMDI3LjE0LjA3OS4xOXMuMTIzLjA4LjE5Ny4wOGguMDEyYS4yNy4yNyAwIDAgMCAuMjc1LS4yNThsLjA2NS0zLjE3N2gtMS40MWwuNDczLTUuMjE5Yy4wMDUtLjA2LS4wMTYtLjEyLS4wNTktLjE2NXMtLjEwMy0uMDctLjE2Ny0uMDdoLS4wNGEuMjIzLjIyMyAwIDAgMC0uMjI2LjE5N3ptMC02LjZMMTUuNzc4IDkuM2MuMTQtMi4xNTUtMS4yNy0yLjQ5Mi0xLjI3LTIuNDkyTDE0LjcyIDZjMi4zMjYuNjczIDEuOTc0IDMuMjMyIDEuOTc0IDMuMjMybDMuMzgzIDEuNDE0eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) */
export const NgcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ngc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NgcCircleColorful.displayName = 'NgcCircleColorful';
