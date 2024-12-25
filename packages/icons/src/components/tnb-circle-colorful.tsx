// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tnb-circle-colorful.svg';

/**![TnbCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiNmZmMwNGUiIHI9IjE2Ii8+PHBhdGggZD0iTTE1LjU5OCAxMS44NTdoLjAwM2wtLjAzLjEzLS4yNiAxLjIyN2gtLjAzTDEzLjU2OCAyMC41aC0yLjE3OWwxLjc0Ny03LjI4NmgtMi45MzJMOC41NTggMjAuNUg2LjE2MmwyLjE3OC05aDcuMzMzem00LjE0MS0uMzU3aDMuNjNjMy4xMjMuMTQzIDIuODMyIDIuMjE0IDIuODMyIDIuMjE0SDI3bC0uMjkuODU3aC0uNzI3Yy0uMjE3Ljc4Ni0xLjY3IDEuMjE1LTEuNjcgMS4yMTUgMS42Ny4yMTQgMS41OTggMS41IDEuNTk4IDEuNWguNzk5bC0uMjE4Ljg1N2gtLjY1NGMtLjE2NyAxLjE5LTEuMjIyIDEuNzY4LTIuMDg5IDIuMDQzYTUuMzUgNS4zNSAwIDAgMS0xLjYyLjI0M0gxNy41NnpNNy4zMjMgMTMuMjE0SDVsLjQzNi0xLjcxNGgyLjMyM3ptOS45NDggNi4yODZsLTEuODg4LTQuNDI5Ljc5OS0zLjQyOCAxLjg4NyA0LjIxNHptNS41NTQtNC40MjljLjI2IDAgLjUxLS4xLjY5My0uMjgycy4yODctLjQyNi4yODctLjY4MmMwLS4yNTYtLjEwMy0uNTAxLS4yODctLjY4MnMtLjQzMy0uMjgyLS42OTMtLjI4MkgyMS40MWwtLjQzNSAxLjkyOHptLS40ODkgMy43MTVjLjY1MSAwIDEuMTc5LS40OTYgMS4xNzktMS4xMDcgMC0uNjEyLS41MjUtMS4xMDgtMS4xNzktMS4xMDhoLTEuNzAybC0uNTI0IDIuMjE1eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) */
export const TnbCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tnb-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TnbCircleColorful.displayName = 'TnbCircleColorful';
