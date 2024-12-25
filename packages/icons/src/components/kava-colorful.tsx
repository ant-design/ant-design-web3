// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/kava-colorful.svg';

/**![KavaColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2FjYWNhIiB2ZXJzaW9uPSIxLjEiIGlkPSJhbnQtd2ViMy1pY29uLWthdmEtY29sb3JmdWwtTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDEuMjAwMDEgMzQ2IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJhbnQtd2ViMy1pY29uLWthdmEtY29sb3JmdWwtZGVmczEiLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNjAuNDAwMDAyIiBoZWlnaHQ9IjM0NiIgaWQ9ImFudC13ZWIzLWljb24ta2F2YS1jb2xvcmZ1bC1yZWN0MSIvPjxwb2x5Z29uIHBvaW50cz0iMjI1LjgsMCAzMDEuNSwwIDE3MSwxNzMgMzAxLjUsMzQ2IDIyNS44LDM0NiA5My41LDE3MyAiIGlkPSJhbnQtd2ViMy1pY29uLWthdmEtY29sb3JmdWwtcG9seWdvbjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjMwMDAwMDAxKSIvPjwvc3ZnPgo=) */
export const KavaColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-kava-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KavaColorful.displayName = 'KavaColorful';
