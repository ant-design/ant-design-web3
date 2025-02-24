// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/npxs-circle-colorful.svg';

/**![NpxsCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCI+PGNpcmNsZSBjeD0iMTI1MCIgY3k9IjEyNTAiIHI9IjEyNTAiIGZpbGw9IiMxODE4MTgiLz48cGF0aCBmaWxsPSIjZjZkMzBjIiBkPSJNMTMwNyAxMTAwbDQ5Ny00OTggMTAxIDEwMi00OTcgNDk3em0tNzEzIDcxMmw0OTgtNDk4IDEwMSAxMDItNDk3IDQ5N3ptNzEzLTM5NmwxMDEtMTAyIDQ5OCA0OTgtMTAyIDEwMXpNNTk0IDcwNGwxMDItMTAyIDQ5NyA0OTctMTAxIDEwMnptNTU0IDU1M2wxMDItMTAyIDEwMiAxMDItMTAyIDEwMnoiLz48L3N2Zz4=) */
export const NpxsCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-npxs-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NpxsCircleColorful.displayName = 'NpxsCircleColorful';
