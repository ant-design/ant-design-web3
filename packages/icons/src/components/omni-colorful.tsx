// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/omni-colorful.svg';

/**![OmniColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI5OC45MyAyOTguODQiPjxnIGZpbGw9IiMxYzM0N2EiPjxwYXRoIGQ9Ik0yOTguOTMgMTQ5LjQ2YTE0OS41MiAxNDkuNTIgMCAwIDEtMTQ5LjQ2IDE0OS4zOGMtODIuNjEgMC0xNTAtNjcuMjEtMTQ5LjQ3LTE1MC4zNUMuNTQgNjUuODcgNjcuOTMtLjA5IDE0OS42NSAwYzgxIC4wOSAxNDkuMSA2NS42MSAxNDkuMjggMTQ5LjQ2em0tMzkuNyAwYTExMCAxMTAgMCAwIDAtMTA5LjUtMTA5Ljg1Yy02MC4yNi0uMTctMTEwIDQ4Ljg4LTExMCAxMDkuNjgtLjA5IDYxIDQ5LjQ5IDEwOS4zMSAxMDguNiAxMDkuOTRhMTEwLjExIDExMC4xMSAwIDAgMCAxMTAuOS0xMDkuNzd6Ii8+PHBhdGggZD0iTTIzNi44NSAxMi4zMmMxNi41Ni0uMTcgMzMuMTItLjE3IDQ5LjY4LS4xN1Y2MmExNzAuNTcgMTcwLjU3IDAgMCAwLTQ5LjY4LTQ5LjY4em00OS42OCAyMjQuNTNWMjg3aC00OS42OGExNjkuNzkgMTY5Ljc5IDAgMCAwIDQ5LjY4LTUwLjE1ek02Mi4wOSAxMi4zN2ExNjguNTkgMTY4LjU5IDAgMCAwLTQ5Ljk0IDQ5LjVWMTIuNDZjMS4wNi0uMzUgNDYuNDYtLjQ2IDQ5Ljk0LS4wOXptLS4yMiAyNzQuMzRIMTIuNDZjLS4zNS0xLjE2LS40NC00Ny44MS0uMDktNDkuODZhMTY5LjQ5IDE2OS40OSAwIDAgMCA0OS41IDQ5Ljg2eiIvPjwvZz48L3N2Zz4=) */
export const OmniColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-omni-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

OmniColorful.displayName = 'OmniColorful';
