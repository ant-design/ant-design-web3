// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/emc2-colorful.svg';

/**![Emc2Colorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMDAgMTM2MiI+PHBhdGggZmlsbD0iIzAxNzViMCIgZD0iTTE4OSA5ODlMMCAxMzYyaDQ0MGwxODktMzczSDE4OW0yNTEtNDk1TDI1MSA4NjdoNDQwbDE4OS0zNzNINDQwTTY5MSAwTDUwMiAzNzNoNDM5TDExMzAgMEg2OTEiLz48cGF0aCBmaWxsPSIjMDBhMmQwIiBkPSJNNjI4IDk4OGwtMTkwIDM3NGg0NDBsMTg5LTM3NEg2MjhtMjUwLTQ5NEw2ODkgODY3aDQ0MGwxODktMzczSDg3OE0xMTI5IDBMOTQwIDM3Mmg0NDBMMTU2OSAwaC00NDAiLz48cGF0aCBmaWxsPSIjMGNmIiBkPSJNMTA1OSA5ODhsLTE4OSAzNzRoNDM5bDE5MC0zNzRoLTQ0MG0yNTEtNDk0bC0xODkgMzczaDQ0MGwxODgtMzczaC00MzlNMTU2MCAwbC0xODkgMzcyaDQ0MEwyMDAwIDBoLTQ0MCIvPjwvc3ZnPg==) */
export const Emc2Colorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-emc2-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

Emc2Colorful.displayName = 'Emc2Colorful';
