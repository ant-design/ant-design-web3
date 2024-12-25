// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tomo-colorful.svg';

/**![TomoColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi10b21vLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTg2LjcgMjgwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxODYuNyAyODA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjx0aXRsZT5Bc3NldCA1ODwvdGl0bGU+Cjxwb2x5Z29uIHBvaW50cz0iNDYuNywwIDQ2LjcsOTMuMyAwLDE0MCAwLDQ2LjcgIiBzdHlsZT0iZmlsbDogIzI0MjgyODsiLz4KPHBhdGggZD0iTTE4Ni43LDE4Ni43YzAsNTEuNS00MS44LDkzLjMtOTMuMyw5My4zQzQxLjgsMjgwLDAsMjM4LjIsMCwxODYuN2MwLDAsMCwwLDAsMFYxNDBoNDYuN3Y0Ni43CgljMCwyNS44LDIwLjksNDYuNyw0Ni43LDQ2LjdzNDYuNy0yMC45LDQ2LjctNDYuN0wxODYuNywxODYuN3oiIHN0eWxlPSJmaWxsOiAjMjQyODI4OyIvPgo8cG9seWdvbiBwb2ludHM9IjE4Ni43LDkzLjMgMTQwLDE0MCAwLDE0MCA0Ni43LDkzLjMgIiBzdHlsZT0iZmlsbDogIzAwRThCNTsiLz4KPC9zdmc+Cg==) */
export const TomoColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tomo-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TomoColorful.displayName = 'TomoColorful';
