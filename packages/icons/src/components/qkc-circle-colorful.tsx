// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/qkc-circle-colorful.svg';

/**![QkcCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1xa2MtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1xa2MtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzFfIiBkPSJNMjUsMGMxMy44LDAsMjUsMTEuMiwyNSwyNVMzOC44LDUwLDI1LDUwUzAsMzguOCwwLDI1UzExLjIsMCwyNSwwTDI1LDB6IiBzdHlsZT0iZmlsbDogIzA3MTYzMDsiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLXFrYy1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODEuMTYiIHkxPSItMjAwMC45MjAzIiB4Mj0iODEuMTYiIHkyPSItMTk3Ni42MDk1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC01NS45MSAtMTk2My42KSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMzRjVDQUEiLz4KCTxzdG9wIG9mZnNldD0iMC4yIiBzdHlsZT0ic3RvcC1jb2xvcjojM0Y1RkFDIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuMzMiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MTY4QjIiLz4KCTxzdG9wIG9mZnNldD0iMC40NiIgc3R5bGU9InN0b3AtY29sb3I6IzQzNzhCRCIvPgoJPHN0b3Agb2Zmc2V0PSIwLjU3IiBzdHlsZT0ic3RvcC1jb2xvcjojNDY4RUNDIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuNjQiIHN0eWxlPSJzdG9wLWNvbG9yOiM0OEEwRDkiLz4KCTxzdG9wIG9mZnNldD0iMC44IiBzdHlsZT0ic3RvcC1jb2xvcjojM0FCQkVDIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuOSIgc3R5bGU9InN0b3AtY29sb3I6IzM1QzZGNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBkPSJNNDEuMSwzNi4xYzAsMC43LTAuNiwxLjItMS41LDEuMmMtMC44LDAtMS40LTAuNS0xLjQtMS4yVjE3LjhjMC0wLjEsMC0wLjEtMC4xLTAuMWwwLDBjLTAuMSwwLTAuMSwwLTAuMiwwCglMMjYuNCwzMi40Yy0wLjUsMC41LTEuNCwwLjctMiwwLjNjLTAuMi0wLjEtMC4zLTAuMi0wLjQtMC4zTDEyLjUsMTcuN2MtMC4xLDAtMC4xLDAtMC4yLDBsLTAuMSwwLjF2MTguNGMwLDAuNy0wLjcsMS4yLTEuNSwxLjIKCXMtMS40LTAuNS0xLjQtMS4ydi0yMmMwLTAuNCwwLjMtMC44LDAuNi0xYzAuNy0wLjQsMS41LTAuMiwyLDAuM2wxMi43LDE2LjFjMC4zLDAuMywwLjcsMC4zLDEsMC4xYzAsMCwwLjEsMCwwLjEtMC4xbDEyLjctMTYuMQoJYzAuMy0wLjQsMC44LTAuNiwxLjMtMC42YzAuOCwwLDEuNSwwLjUsMS41LDEuMkw0MS4xLDM2LjF6IiBzdHlsZT0ib3BhY2l0eTogMC45OyBmaWxsOiB1cmwoI2FudC13ZWIzLWljb24tcWtjLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8yXyk7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1xa2MtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjgxLjE2IiB5MT0iLTIwMDAuOTQwMSIgeDI9IjgxLjE2IiB5Mj0iLTE5NzYuNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtNTUuOTEgLTE5NjMuNikiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojNDA2OEIxIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuMTMiIHN0eWxlPSJzdG9wLWNvbG9yOiMzRDdGQzEiLz4KCTxzdG9wIG9mZnNldD0iMC4zOSIgc3R5bGU9InN0b3AtY29sb3I6IzM5QTVERCIvPgoJPHN0b3Agb2Zmc2V0PSIwLjU5IiBzdHlsZT0ic3RvcC1jb2xvcjojMzZCREVFIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuNzIiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNUM2RjQiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZD0iTTQxLjEsMzYuMWMwLDAuNi0wLjYsMS4yLTEuNSwxLjJjLTAuNSwwLTEtMC4yLTEuMy0wLjZMMjUuNywyMC42Yy0wLjMtMC4zLTAuNy0wLjMtMS0wLjFjMCwwLTAuMSwwLjEtMC4yLDAuMwoJTDEyLDM2LjhjLTAuNSwwLjYtMS4zLDAuNy0yLDAuM2MtMC40LTAuMi0wLjYtMC42LTAuNi0xVjE0LjJjMC0wLjcsMC42LTEuMiwxLjQtMS4yYzAuOCwwLDEuNSwwLjUsMS41LDEuMnYxOC40CgljMCwwLjEsMCwwLjEsMC4xLDAuMXMwLjEsMCwwLjIsMGwxMS4yLTE0LjNjMC4xLTAuMiwwLjUtMC42LDAuNy0wLjdjMC43LTAuNCwxLjUtMC4zLDIsMC4zbDExLjQsMTQuN2MwLDAsMC4xLDAsMC4yLDAKCWMwLjEsMCwwLjEtMC4xLDAuMS0wLjFsMCwwVjE0LjJjMC0wLjcsMC42LTEuMiwxLjQtMS4yczEuNSwwLjUsMS41LDEuMlYzNi4xeiIgc3R5bGU9ImZpbGw6IHVybCgjYW50LXdlYjMtaWNvbi1xa2MtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzNfKTsiLz4KPC9zdmc+Cg==) */
export const QkcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-qkc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

QkcCircleColorful.displayName = 'QkcCircleColorful';
