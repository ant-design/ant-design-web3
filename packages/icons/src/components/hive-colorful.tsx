// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/hive-colorful.svg';

/**![HiveColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIyMCAxOTAiPjxkZWZzLz48dGl0bGU+aGl2ZS1oaXZlLWxvZ288L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLWhpdmUtY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24taGl2ZS1jb2xvcmZ1bC1MYXllcl8xLTIiPjxwYXRoIGQ9Ik0xNTcuMjcsMTA3LjI2YTEsMSwwLDAsMSwuODIsMS40MmwtNDYuNzUsODAuODVhMSwxLDAsMCwxLS44Mi40N0g4MS45NGEuOTQuOTQsMCwwLDEtLjgxLTEuNDJsNDYuNzUtODAuODVhLjk0Ljk0LDAsMCwxLC44MS0uNDdaTTEyOS40OCw4NC4wOWExLDEsMCwwLDEtLjgyLS40N0w4MS4xMywxLjQyQS45NC45NCwwLDAsMSw4MS45NCwwaDI4LjU4YTEsMSwwLDAsMSwuODIuNDdsNDcuNTMsODIuMmEuOTQuOTQsMCwwLDEtLjgxLDEuNDJaIiBzdHlsZT0iZmlsbDogI2UzMTMzNzsiLz48cGF0aCBkPSJNMTM1LjEzLDEuNDJBLjk0Ljk0LDAsMCwxLDEzNiwwaDI4LjYyYS45My45MywwLDAsMSwuODEuNDdsNTQuNDksOTQuMDZhLjkzLjkzLDAsMCwxLDAsLjk0bC01NC40OSw5NC4wNmEuOTMuOTMsMCwwLDEtLjgxLjQ3SDEzNmEuOTQuOTQsMCwwLDEtLjgyLTEuNDJMMTg5LjM0LDk1Wm0tMjMuMjYsOTMuMWExLDEsMCwwLDEsMCwxTDU3LjEzLDE4OS41M2ExLDEsMCwwLDEtMS42NSwwTC4xMyw5NS40OGExLDEsMCwwLDEsMC0xTDU0Ljg3LjQ3YTEsMSwwLDAsMSwxLjY1LDBaIiBzdHlsZT0iZmlsbDogI2UzMTMzNzsiLz48L2c+PC9nPjwvc3ZnPg==) */
export const HiveColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hive-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HiveColorful.displayName = 'HiveColorful';
