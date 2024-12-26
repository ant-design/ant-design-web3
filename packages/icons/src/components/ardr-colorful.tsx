// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ardr-colorful.svg';

/**![ArdrColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWFyZHItY29sb3JmdWwtTGFhZ18xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTg0LjMgMTcyNi4xIiA+PHRpdGxlPmFyZHI8L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLWFyZHItY29sb3JmdWwtTGFhZ18yIj48cGF0aCBkPSJNOTg0LjMgMEwwIDE3MTkuNWg0OTAuOGw3NDcuNC0xMjgyTDk4NC4zIDB6IiBzdHlsZT0iZmlsbDogIzE1NjJhMTsiLz48cGF0aCBkPSJNNTI1LjcgMTcyNi4xbDY1My44LTM4MC43LTI1MS4zLTMxMS4xLTQwMi41IDY5MS44eiIgc3R5bGU9ImZpbGw6ICMwYzQyNmM7Ii8+PHBhdGggZD0iTTE0MTEuOSA3NDguN2wtNDcxLjQgMjU3IDU5MC40IDcyMGg0NTMuM2wtNTcyLjMtOTc3eiIgc3R5bGU9ImZpbGw6ICMzYzg3Yzc7Ii8+PC9nPjwvc3ZnPg==) */
export const ArdrColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ardr-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ArdrColorful.displayName = 'ArdrColorful';
