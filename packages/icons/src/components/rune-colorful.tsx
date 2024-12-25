// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/rune-colorful.svg';

/**![RuneColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1ydW5lLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUzLjMgMjkwLjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1My4zIDI5MC41IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjx0aXRsZT5UaG9yY2hhaW5fbG9nb193aGl0ZV90ZXh0PC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1ydW5lLWNvbG9yZnVsLVNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0zMjEuNzI0NiIgeTE9IjY0NC4yODE0IiB4Mj0iLTMyMC43MjQ2IiB5Mj0iNjQ0LjI4MTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMjUzLjI2IDAgMCAtMjkwLjUgODE0NzkuOTc2NiAxODczMDkpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwQ0NGRiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzNGRjk5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGQ9Ik0wLDI5MC41bDIwMi44LTg1LjRMMTM4LjYsMTQwTDAsMjkwLjV6IE03NC41LDc1bDY0LjIsNjVMMjUzLjMsMEw3NC41LDc1eiIgZmlsbD0iIHVybCgjYW50LXdlYjMtaWNvbi1ydW5lLWNvbG9yZnVsLVNWR0lEXzFfKSIvPgo8L3N2Zz4K) */
export const RuneColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-rune-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

RuneColorful.displayName = 'RuneColorful';
