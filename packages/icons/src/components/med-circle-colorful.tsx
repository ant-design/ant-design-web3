// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/med-circle-colorful.svg';

/**![MedCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMDBCMEZGIi8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjQgMTIuMDYxdjguOTE1bC0yLjUzNiAxLjQ4di01Ljk1TDE2IDE5Ljc3NmwtNS40NjQtMy4yNzN2NS45NTNMOCAyMC45NzZWMTIuMDZsOCA0LjgwNSA4LTQuODA1em0tNy45NyAxMS4xMTdsMi4zNC0xLjM5OSAyLjMxIDEuMzk5TDE2LjAzIDI2bC00LjY0OC0yLjgyMiAyLjMxLTEuMzk5IDIuMzM5IDEuMzk5em00LjYyLTE0LjM1NmwtMi4zMTEgMS4zOTlMMTYgOC44MjJsLTIuMzM5IDEuMzk5LTIuMzEtMS4zOTlMMTYgNmw0LjY1IDIuODIyeiIvPjwvZz48L3N2Zz4=) */
export const MedCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-med-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

MedCircleColorful.displayName = 'MedCircleColorful';
