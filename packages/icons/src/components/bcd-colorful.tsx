// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bcd-colorful.svg';

/**![BcdColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDY0LjYgNTUuMyI+PHBhdGggZD0iTTU0LjcgNS4zTDQ0LjYgMEgxOS43bC05LjYgNS40TDAgMTguN2wzMi4zIDM2LjcgMzIuMy0zNi43em02LjYgMTIuOGwtMTIuNiA2LjRMNDQuNiAxMmw5LjMtNC41ek0yMC41IDJoMjMuM2w3LjkgNC4xLTggMy44SDIwLjRsLTctMy43em0tOS43IDUuNUwxOSAxMmwtMi45IDEyLjUtMTMuMy02Ljd6TTUuNCAyMS42bDEwLjMgNS4zIDEyLjYgMjEuN3ptMjYuOCAyOS43TDE3LjkgMjYuNSAyMS40IDEyaDIxLjNsMy44IDE0LjF6bTMuNi0yLjhMNDguNiAyN2wxMC43LTUuNHoiLz48cGF0aCBmaWxsPSIjZmNjMzM5IiBkPSJNNDEuNCAyOC44YTYuMSA2LjEgMCAwIDAtMi45LTMuMiAzIDMgMCAwIDAgMS44LTEuN2MuMi0uNi4yLTEuMS4xLTEuNyAwIDAtLjEtLjktLjQtMS43LS42LTEuMy0yLjYtMi41LTUuNC0yLjh2LTMuMmgtMi41djMuMmgtMS45di0zLjJoLTIuNnYzLjJoLTQuMXYyLjFhMyAzIDAgMCAxIDIuMiAxLjRjLjQuNi40IDEuMS41IDEuNGwuMiA4YzAgMS0uNCAxLjktMS4yIDIuNC0xIC42LTIgLjMtMi4yLjN2Mi4zaDQuNVYzOWgyLjd2LTNoMS45bC4xIDNoMi41di0zLjNoMi40YTUgNSAwIDAgMCAyLjYtLjdjMS45LTEuMyAyLjUtNC4xIDEuNy02LjJ6bS0xMS03LjloMy4yYzEuMiAwIDIuMi45IDIuMiAyLjFzLS45IDIuMi0yLjEgMi4yaC0zLjN6bTQgMTEuOGgtMy44VjI4aDMuOGMxLjIuMSAyLjIgMS4xIDIuMyAyLjIuMSAxLjMtLjkgMi40LTIuMyAyLjV6Ii8+PC9zdmc+) */
export const BcdColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bcd-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BcdColorful.displayName = 'BcdColorful';
