// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/scroll-circle-colorful.svg';

/**![ScrollCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHQ9IjE3MTI1NzAzODExMjgiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwLWlkPSIxMDA5Ij4KICA8cGF0aCBkPSJNMCAwbTUxMiAwbDAgMHE1MTIgMCA1MTIgNTEybDAgMHEwIDUxMi01MTIgNTEybDAgMHEtNTEyIDAtNTEyLTUxMmwwIDBxMC01MTIgNTEyLTUxMloiIGZpbGw9IiNGQ0VGREUiIHAtaWQ9IjEwMTAiPjwvcGF0aD4KICA8cGF0aCBkPSJNNTEyIDcyNS4zMzMzMzNjMC02OC4yNjY2NjctMzUuNTQxMzMzLTEwNi42NjY2NjctNDIuNjY2NjY3LTEwNi42NjY2NjZoMjk4LjY2NjY2N2MyMS4zMzMzMzMgMCA2NCAyMS4zMzMzMzMgNjQgMTA2LjY2NjY2NnMtNDIuNjY2NjY3IDEwNi42NjY2NjctNjQgMTA2LjY2NjY2N2gtMzIwYzIxLjMzMzMzMy03LjEyNTMzMyA2NC0zOC40IDY0LTEwNi42NjY2Njd6IiBmaWxsPSIjRTNDMTkxIiBwLWlkPSIxMDExIj48L3BhdGg+CiAgPHBhdGggZD0iTTMzMy4yMjY2NjcgMTgxLjMzMzMzM2MtMzEuMjc0NjY3IDAtNjguNDggMTMuMjI2NjY3LTk4LjAwNTMzNCAzNi41NjUzMzQtMjkuODI0IDIzLjU5NDY2Ny01My44ODggNTkuMzA2NjY3LTUzLjg4OCAxMDQuODc0NjY2IDAgMzQuODU4NjY3IDMuNDEzMzMzIDYxLjQ4MjY2NyAxMy4wOTg2NjcgODUuMjQ4IDkuNzI4IDIzLjgwOCAyNS4wNDUzMzMgNDIuODggNDUuNTI1MzMzIDYzLjc0NGExOS41NDEzMzMgMTkuNTQxMzMzIDAgMCAwIDI4LjAzMiAwIDIwLjQ4IDIwLjQ4IDAgMCAwIDAtMjguNTg2NjY2Yy0xOS4xNTczMzMtMTkuNDk4NjY3LTMwLjIwOC0zNC4xMzMzMzMtMzYuOTkyLTUwLjczMDY2Ny02LjgyNjY2Ny0xNi42NC0xMC4wMjY2NjctMzcuMTYyNjY3LTEwLjAyNjY2Ni02OS42NzQ2NjcgMC0yOS44MjQgMTUuNTMwNjY3LTU0Ljc0MTMzMyAzOC41MjgtNzIuOTYgMjMuMzM4NjY3LTE4LjM4OTMzMyA1Mi4xMzg2NjctMjguMDc0NjY3IDczLjcyOC0yOC4wNzQ2NjZoNDIyLjU3MDY2NmMzLjY2OTMzMyAwIDYuNjEzMzMzIDMuMDI5MzMzIDYuNjEzMzM0IDYuNzQxMzMzdjM1MC4yNTA2NjdjMTIuOTI4IDAgMjUuNTU3MzMzIDMuODgyNjY3IDM2LjI2NjY2NiAxMS4xNzg2NjZsMy4zNzA2NjcgMi4yNjEzMzRWMjI4LjUyMjY2N2MwLTI2LjAyNjY2Ny0yMC42OTMzMzMtNDcuMTQ2NjY3LTQ2LjI1MDY2Ny00Ny4xNDY2NjdIMzMzLjIyNjY2N3oiIGZpbGw9IiMxRDBGMDciIHAtaWQ9IjEwMTIiPjwvcGF0aD4KICA8cGF0aCBkPSJNNDAxLjYyMTMzMyAzNDIuOTk3MzMzaDI1MC44OGEyMC4wMTA2NjcgMjAuMDEwNjY3IDAgMCAwIDE5Ljg0LTIwLjIyNCAyMC4wMTA2NjcgMjAuMDEwNjY3IDAgMCAwLTE5Ljc5NzMzMy0yMC4xODEzMzNINDAxLjYyMTMzM3Y0MC40MDUzMzN6TTQwMS42MjEzMzMgNTMxLjU4NGgyNDguNTMzMzM0YTIwLjAxMDY2NyAyMC4wMTA2NjcgMCAwIDAgMTkuNzk3MzMzLTIwLjIyNCAyMC4wMTA2NjcgMjAuMDEwNjY3IDAgMCAwLTE5Ljc5NzMzMy0yMC4xODEzMzNINDAxLjYyMTMzM3Y0MC40MDUzMzN6TTY4OS43OTIgNDM3LjI5MDY2N0g0MDEuNjIxMzMzdi00MC40MDUzMzRoMjg4LjE3MDY2N2MxMC45MjI2NjcgMCAxOS43OTczMzMgOS4wNDUzMzMgMTkuNzk3MzMzIDIwLjE4MTMzNGEyMC4wMTA2NjcgMjAuMDEwNjY3IDAgMCAxLTE5Ljc5NzMzMyAyMC4yMjR6IiBmaWxsPSIjMUQwRjA3IiBwLWlkPSIxMDEzIj48L3BhdGg+CiAgPHBhdGggZD0iTTI4MC4zNjI2NjcgMzI5LjUxNDY2N2gtMTMuMjI2NjY3di00MC40MDUzMzRoMTMuMjI2NjY3YzI1LjU1NzMzMyAwIDQ2LjI1MDY2NyAyMS4xMiA0Ni4yNTA2NjYgNDcuMTQ2NjY3djM5MS44OTMzMzNsLTAuMTcwNjY2IDEuMjhjLTEuNzQ5MzMzIDE0LjM3ODY2NyAwLjUxMiAzNi4wMTA2NjcgMTIuMjAyNjY2IDUzLjQxODY2NyAxMC44OCAxNi4xMjggMzEuNzg2NjY3IDMxLjU3MzMzMyA3My44MTMzMzQgMzEuNTczMzMzIDE0LjQyMTMzMyAwIDM2LjUyMjY2Ny00LjU2NTMzMyA1NC40NDI2NjYtMTcuNzA2NjY2IDE2Ljg5Ni0xMi40MTYgMzEuNDAyNjY3LTMzLjI4IDMxLjQwMjY2Ny02OS44MDI2NjcgMC0zNi41MjI2NjctMTQuNTA2NjY3LTU3LjM4NjY2Ny0zMS40MDI2NjctNjkuODQ1MzMzYTk2LjkzODY2NyA5Ni45Mzg2NjcgMCAwIDAtNTQuNDQyNjY2LTE3LjcwNjY2NyA2LjY1NiA2LjY1NiAwIDAgMC02LjYxMzMzNCA2LjY5ODY2N3Y0MC40NDhjMCAzLjcxMiAyLjk4NjY2NyA2LjY5ODY2NyA2LjYxMzMzNCA2LjY5ODY2NmgyNi40MTA2NjZ2NDAuNDQ4aC0yNi40NTMzMzNhNDYuNjc3MzMzIDQ2LjY3NzMzMyAwIDAgMS00Ni4yMDgtNDcuMTQ2NjY2di00MC40NDhjMC0yNi4wMjY2NjcgMjAuNjkzMzMzLTQ3LjE0NjY2NyA0Ni4yNTA2NjctNDcuMTQ2NjY3aDM0NS4wMDI2NjZsMS42MjEzMzQgMC4yOTg2NjdjMzMuMTA5MzMzIDUuNjMyIDk1Ljc4NjY2NyAzOS42OCA5NS43ODY2NjYgMTI3LjcwMTMzMyAwIDg3Ljk3ODY2Ny02Mi42NzczMzMgMTIyLjAyNjY2Ny05NS43ODY2NjYgMTI3LjY1ODY2N2wtMS42MjEzMzQgMC4yOTg2NjZINDEyLjQ1ODY2N2MtNTMuMDc3MzMzIDAtODcuMjEwNjY3LTIwLjQ4LTEwNi40OTYtNDkuMTk0NjY2LTE4LjA5MDY2Ny0yNi45NjUzMzMtMjEuMzMzMzMzLTU4LjQ1MzMzMy0xOC45ODY2NjctNzkuOTU3MzM0VjMzNi4yMTMzMzNhNi42NTYgNi42NTYgMCAwIDAtNi42MTMzMzMtNi43NDEzMzN6TTUwNi44OCA4MTQuNTA2NjY3aDI0Ny4xNjhjMjAuMzA5MzMzLTQuMTM4NjY3IDYxLjIyNjY2Ny0yNi4xOTczMzMgNjEuMjI2NjY3LTg3LjU1MiAwLTYxLjM5NzMzMy00MC45Ni04My40MTMzMzMtNjEuMjI2NjY3LTg3LjU1Mkg1MDYuODhjMTguNDMyIDIwLjEzODY2NyAzMS4wNjEzMzMgNDguNzY4IDMxLjA2MTMzMyA4Ny41NTJzLTEyLjYyOTMzMyA2Ny40MTMzMzMtMzEuMDYxMzMzIDg3LjU1MnoiIGZpbGw9IiMxRDBGMDciIHAtaWQ9IjEwMTQiPjwvcGF0aD4KPC9zdmc+Cg==) */
export const ScrollCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-scroll-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ScrollCircleColorful.displayName = 'ScrollCircleColorful';
