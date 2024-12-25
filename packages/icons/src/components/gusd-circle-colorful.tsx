// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gusd-circle-colorful.svg';

/**![GusdCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAwRENGQSIvPjxwYXRoIGQ9Ik0xOS4zNzggNWMtMy44NyAwLTcuMTU3IDIuOTc2LTcuNTcgNi44MDdDNy45NzUgMTIuMjIxIDUgMTUuNTA4IDUgMTkuMzc3QTcuNjI3IDcuNjI3IDAgMCAwIDEyLjYyMiAyN2MzLjg3IDAgNy4xNy0yLjk3NiA3LjU3LTYuODA3IDMuODMyLS40MTQgNi44MDgtMy43MDEgNi44MDgtNy41N0E3LjYyNyA3LjYyNyAwIDAgMCAxOS4zNzggNXptNS44MzYgOC40NzZhNS45MyA1LjkzIDAgMCAxLTQuOTcgNC45N3YtNC45N2g0Ljk3ek02Ljc4NiAxOC41MjRhNS45MyA1LjkzIDAgMCAxIDQuOTctNC45ODN2NC45N2gtNC45N3YuMDEzem0xMS42NzMgMS43MmE1Ljg5NSA1Ljg5NSAwIDAgMS01LjgzNyA1LjAzNSA1Ljg5NCA1Ljg5NCAwIDAgMS01LjgzNi01LjAzNGgxMS42NzN6bS4wNjUtNi43Njh2NS4wMzVoLTUuMDQ4di01LjAzNWg1LjA0OHptNi42OS0xLjcySDEzLjU0MWE1Ljg5NSA1Ljg5NSAwIDAgMSA1LjgzNy01LjAzNSA1Ljg5NCA1Ljg5NCAwIDAgMSA1LjgzNiA1LjAzNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+) */
export const GusdCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gusd-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GusdCircleColorful.displayName = 'GusdCircleColorful';
