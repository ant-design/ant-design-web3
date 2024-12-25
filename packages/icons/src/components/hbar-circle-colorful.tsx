// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/hbar-circle-colorful.svg';

/**![HbarCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCI+PGRlZnMvPjx0aXRsZT5oZWRlcmEtLWxvZ288L3RpdGxlPjxnIGlkPSJhbnQtd2ViMy1pY29uLWhiYXItY2lyY2xlLWNvbG9yZnVsLUxheWVyXzIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLWhiYXItY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEtMiI+PHBhdGggZD0iTTEyNTAsMEM1NTkuNjQsMCwwLDU1OS42NCwwLDEyNTBTNTU5LjY0LDI1MDAsMTI1MCwyNTAwczEyNTAtNTU5LjY0LDEyNTAtMTI1MFMxOTQwLjM2LDAsMTI1MCwwIi8+PHBhdGggZD0iTTE3NTguMTIsMTc5MC42MkgxNTk5LjM4VjE0NTMuMTNIOTAwLjYydjMzNy40OUg3NDEuODdWNjk2LjI1SDkwMC42MnYzMjkuMzdoNjk4Ljc2VjY5Ni4yNWgxNTguNzVabS04NTAtNDYzLjc1aDY5OC43NVYxMTUyLjVIOTA4LjEyWiIgc3R5bGU9ImZpbGw6ICNmZmY7Ii8+PC9nPjwvZz48L3N2Zz4=) */
export const HbarCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hbar-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HbarCircleColorful.displayName = 'HbarCircleColorful';
