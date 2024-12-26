// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/game-circle-colorful.svg';

/**![GameCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiMyZDQ3NWIiIHI9IjE2Ii8+PHBhdGggZD0iTTEyLjg2OSAxMi42ODVoMTEuMDg1djIuNDg4SDEyLjg2OXptMTEuMDg1IDQuMTQ0SDI0djYuNTQzcy04LjY0NyA2LjI2NS0xNS4zNjMtLjU1MmMwIDAtMy42OC0zLjczMi0yLjM0Ni05LjE2OCAwIDAgMS4wNTgtNi43NzEgOS4xMDgtNy42IDAgMCA0Ljk2Ny0uNjkyIDguMTg3IDIuOTk0bC0xLjkzMiAxLjg4OHMtNC4wOTQtNC4yMzgtOS41NjctLjkyYzAgMC00LjQ2MiAyLjQ4Ny0yLjYyMiA4Ljc1MiAwIDAgMi4wMjQgNS40MzYgOC4zNzEgNC4zMyAwIDAgMi4xNjItLjQ5MiAzLjI2Ni0xLjQ0NHYtMi4zMzVIMTIuODd2LTIuNDg4eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) */
export const GameCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-game-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GameCircleColorful.displayName = 'GameCircleColorful';
