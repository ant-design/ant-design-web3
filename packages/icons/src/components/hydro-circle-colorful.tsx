// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/hydro-circle-colorful.svg';

/**![HydroCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYxLjQ5IDYxLjU3Ij48ZGVmcy8+PHRpdGxlPmh5ZHJvPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1oeWRyby1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMiI+PGcgaWQ9ImFudC13ZWIzLWljb24taHlkcm8tY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEtMiI+PGNpcmNsZSBjeD0iMzAuNzkiIGN5PSIzMC43OSIgcj0iMjguMTciIHN0eWxlPSJmaWxsOiAjZmZmOyIvPjxwYXRoIGQ9Ik0zMi4zNSwwYTMwLjc4LDMwLjc4LDAsMSwwLDI5LjEsMzJBMzAuODUsMzAuODUsMCwwLDAsMzIuMzUsMFptLTEuNyw1MC45Yy05LjksMC0xNy41LTEwLTE1LTE5LjZhMjguNjUsMjguNjUsMCwwLDEsMy45LTguMyw5Mi4xNyw5Mi4xNywwLDAsMSw5LjktMTIuNWMuOS0xLDEuNi0xLDIuNS0uMWE3OS4zNiw3OS4zNiwwLDAsMSwxMS4yLDE0LjdjMS44LDMuMywzLjIsNi43LDMuMSwxMC41QTE2LDE2LDAsMCwxLDMwLjY1LDUwLjk0WiIgc3R5bGU9ImZpbGw6ICMxNjhkZmY7Ii8+PC9nPjwvZz48L3N2Zz4=) */
export const HydroCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hydro-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HydroCircleColorful.displayName = 'HydroCircleColorful';
