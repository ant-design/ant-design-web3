// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ht-colorful.svg';

/**![HtColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDg4IDEzNS45IiB2aWV3Qm94PSIwIDAgODggMTM1LjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTU3LjggNDEuOGMwLTE5LjUtOS40LTM2LjMtMTYuNi00MS44IDAgMC0uNS0uMy0uNS41LS42IDM3LjctMTkuNyA0OC0zMC4zIDYxLjctMjQuMyAzMS44LTEuNyA2Ni42IDIxLjMgNzMgMTIuOSAzLjYtMy02LjQtNS0yNy40LTIuNC0yNS41IDMxLjEtNDQuOSAzMS4xLTY2IiBmaWxsPSIjMjgyZTViIi8+PHBhdGggZD0ibTcwLjQgNTQuN2MtLjEtLjEtLjMtLjEtLjUgMCAwIDAgMCAwLS4xLjEtLjQgNC43LTUuNiAxNC45LTEyLjEgMjQuMi0yMi4xIDMxLjYtOS41IDQ2LjgtMi40IDU1IDQuMSA0LjggMCAwIDEwLjMtNC45LjgtLjQgMjAtMTAuNiAyMi4xLTMzLjcgMi4xLTIyLjUtMTIuMi0zNi42LTE3LjMtNDAuNyIgZmlsbD0iIzA1OWJkYyIvPjwvc3ZnPg==) */
export const HtColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ht-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HtColorful.displayName = 'HtColorful';
