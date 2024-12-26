// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gas-colorful.svg';

/**![GasColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzMy45MSAzNzMuMDIiPjxkZWZzLz48dGl0bGU+Z2FzLWdhcy1sb2dvPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1nYXMtY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24tZ2FzLWNvbG9yZnVsLUxheWVyXzEtMiI+PGcgaWQ9ImFudC13ZWIzLWljb24tZ2FzLWNvbG9yZnVsLUxheWVyXzItMiI+PGcgaWQ9ImFudC13ZWIzLWljb24tZ2FzLWNvbG9yZnVsLUxheWVyXzEtMi0yIj48cG9seWxpbmUgcG9pbnRzPSIzMjUuNzQgNjEuNzUgMTY2Ljk0IDEyMC44NSAxNjYuOTQgMzYxLjQ1IDguMTMgMzA0LjQ1IDguMTMgNzAuMDUgMTc1LjYzIDguNjUgMzI0Ljk0IDYyLjA1IDMyNS43NCAzMDMuODUgMTY2Ljc0IDI0NC45NSIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogIzAxZTM5Nzsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDE2LjI3cHg7Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==) */
export const GasColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gas-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GasColorful.displayName = 'GasColorful';
