// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/icx-colorful.svg';

/**![IcxColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NDQo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjkgMjkiPjxkZWZzLz48dGl0bGU+aWNvbjwvdGl0bGU+PGcgaWQ9ImFudC13ZWIzLWljb24taWN4LWNvbG9yZnVsLWFhOGQ3MmYzLWU5MWQtNDY2OC04NjRmLWY2Y2NkMzJhYjVlZSI+PGcgaWQ9ImFudC13ZWIzLWljb24taWN4LWNvbG9yZnVsLWY0ODQzN2VlLWRmMmUtNGQxZi04MTU1LWE1MWI5NDVmMzRlYyI+PGcgaWQ9ImFudC13ZWIzLWljb24taWN4LWNvbG9yZnVsLWZiNTZhNjdmLTFhMWItNGZjYi1hZmFmLTViZGZiN2MyMGI5MiI+PGNpcmNsZSBjeD0iMjYuNSIgY3k9IjIuNSIgcj0iMi41IiBzdHlsZT0iZmlsbDogIzE4YTBiMTsiLz48cGF0aCBkPSJNNy4yOCwxOC43OUE4LjM3LDguMzcsMCwwLDEsMTguNzQsNy4zM2wyLTItLjEtLjA4QTExLjE0LDExLjE0LDAsMCwwLDUuMjgsMjAuNzlaIiBzdHlsZT0iZmlsbDogIzE4YTBiMTsiLz48cGF0aCBkPSJNMjEuNzIsMTAuMzJBOC4zNyw4LjM3LDAsMCwxLDEwLjI2LDIxLjc4bC0yLDJBMTEuMTMsMTEuMTMsMCwwLDAsMjMuNzIsOC4zMloiIHN0eWxlPSJmaWxsOiAjMThhMGIxOyIvPjxjaXJjbGUgY3g9IjIuNSIgY3k9IjI2LjUiIHI9IjIuNSIgc3R5bGU9ImZpbGw6ICMxOGEwYjE7Ii8+PC9nPjwvZz48L2c+PC9zdmc+) */
export const IcxColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-icx-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

IcxColorful.displayName = 'IcxColorful';
