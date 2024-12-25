// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/fet-colorful.svg';

/**![FetColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWZldC1jb2xvcmZ1bC1DYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQuNiAyNSI+PHRpdGxlPmZldGNoLWZldC1sb2dvPC90aXRsZT48cGF0aCBkPSJNMCwwVjI1SDI0LjZWMFpNOC42LDIuOWgyLjNWNS4zSDguNlptLTUuOCwwSDUuMlY1LjNIMi44Wk01LjEsOC43djIuNEgyLjdWOC43Wk00LjUsMjEuOWgtMVYyMWguOXYuOVptLjctNC44SDIuOFYxNC44SDUuMlptNS4xLDQuOEg5LjRWMjFoLjlabTAtNS42SDkuNHYtLjloLjlabS43LTUuMUg4LjZWOC44SDExWm01LjEsMTAuN2gtLjlWMjFoLjlabTAtNS42aC0uOXYtLjloLjlabTAtNS45aC0uOVY5LjVoLjlabS44LTUuMUgxNC41VjIuOWgyLjRaTTIyLDIxLjloLS45VjIxSDIyWm0wLTUuNmgtLjl2LS45SDIyWm0wLTUuOWgtLjlWOS41SDIyWm0wLTUuOGgtLjlWMy43SDIyWiIgc3R5bGU9ImZpbGw6IzIwMjk0NCIvPjwvc3ZnPg==) */
export const FetColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-fet-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FetColorful.displayName = 'FetColorful';
