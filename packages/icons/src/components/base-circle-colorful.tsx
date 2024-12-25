// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/base-circle-colorful.svg';

/**![BaseCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYwLCAtNTIxNCkiIGZpbGw9IiMwMDRFRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDcyLDUyMTQgQzIzNTQuNzY5NzksNTIxNCAyNTg0LDU0NDMuMjMwMjEgMjU4NCw1NzI2IEMyNTg0LDYwMDguNzY5NzkgMjM1NC43Njk3OSw2MjM4IDIwNzIsNjIzOCBDMTc4OS4yMzAyMSw2MjM4IDE1NjAsNjAwOC43Njk3OSAxNTYwLDU3MjYgQzE1NjAsNTQ0My4yMzAyMSAxNzg5LjIzMDIxLDUyMTQgMjA3Miw1MjE0IFogTTIwNzIsNTM2MS45MTExMSBDMTg4MS42NDg2NCw1MzYxLjkxMTExIDE3MjUuNDE1MjgsNTUwNy45ODc2IDE3MDkuMjg0NDUsNTY5NC4xNTYwMiBMMjI0OC4zNTU1Niw1Njk0LjE0MjIyIEwyMjQ4LjM1NTU2LDU3NTYuNzIgTDE3MDkuMTg5MjksNTc1Ni43MjU4NCBDMTcyNC43OTAxMiw1OTQzLjQyNzE3IDE4ODEuMjY3NzIsNjA5MC4wODg4OSAyMDcyLDYwOTAuMDg4ODkgQzIyNzMuMDgwNzQsNjA5MC4wODg4OSAyNDM2LjA4ODg5LDU5MjcuMDgwNzQgMjQzNi4wODg4OSw1NzI2IEMyNDM2LjA4ODg5LDU1MjQuOTE5MjYgMjI3My4wODA3NCw1MzYxLjkxMTExIDIwNzIsNTM2MS45MTExMSBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) */
export const BaseCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-base-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BaseCircleColorful.displayName = 'BaseCircleColorful';
