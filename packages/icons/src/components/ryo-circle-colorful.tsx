// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ryo-circle-colorful.svg';

/**![RyoCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzNENThCMCIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xNS45ODYgNEM5LjM3NiA0IDQgOS4zNzYgNCAxNS45ODZTOS4zNzYgMjcuOTcgMTUuOTg2IDI3Ljk3IDI3Ljk3IDIyLjU5NSAyNy45NyAxNS45ODZDMjcuOTcxIDkuMzc2IDIyLjU5NSA0IDE1Ljk4NiA0em0wIDEuNjMyYTEwLjM0IDEwLjM0IDAgMCAxIDEwLjM1MyAxMC4zNTQgMTAuMzQgMTAuMzQgMCAwIDEtMTAuMzUzIDEwLjM1M0ExMC4zNCAxMC4zNCAwIDAgMSA1LjYzMiAxNS45ODYgMTAuMzQxIDEwLjM0MSAwIDAgMSAxNS45ODYgNS42MzJ6Ii8+PHBhdGggZD0iTTExLjUzMyAxMS41NnY4Ljg1aDguOTA1di04Ljg1aC04LjkwNXptMS40NSAxLjQ1aDYuMDA0djUuOTVoLTYuMDAzdi01Ljk1eiIvPjwvZz48L2c+PC9zdmc+) */
export const RyoCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ryo-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

RyoCircleColorful.displayName = 'RyoCircleColorful';
