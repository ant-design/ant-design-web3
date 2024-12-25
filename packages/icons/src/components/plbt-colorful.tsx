// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/plbt-colorful.svg';

/**![PlbtColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXBsYnQtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTMwLjIgMTA0LjIiPjx0aXRsZT5wb2x5Yml1cy1wbGJ0LWxvZ288L3RpdGxlPjxyZWN0IHg9IjYwLjciIHdpZHRoPSIzNC43IiBoZWlnaHQ9IjM0LjciIHN0eWxlPSJmaWxsOiMwNjlkZDgiLz48cmVjdCB4PSI2MC43IiB5PSI2OS41IiB3aWR0aD0iMzQuNyIgaGVpZ2h0PSIzNC43IiBzdHlsZT0iZmlsbDojMDY5ZGQ4Ii8+PHJlY3QgeD0iOTUuNSIgeT0iMzQuNyIgd2lkdGg9IjM0LjciIGhlaWdodD0iMzQuNyIgc3R5bGU9ImZpbGw6IzFmNzk5NSIvPjxyZWN0IHg9IjcuMTkiIHk9IjM0Ljc5IiB3aWR0aD0iMzQuNyIgaGVpZ2h0PSIzNC43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkuNjggMzIuNjIpIHJvdGF0ZSgtNDUpIiBzdHlsZT0iZmlsbDojYTRiZTM5Ii8+PC9zdmc+) */
export const PlbtColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-plbt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PlbtColorful.displayName = 'PlbtColorful';
