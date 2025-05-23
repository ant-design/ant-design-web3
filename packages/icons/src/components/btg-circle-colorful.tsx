// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/btg-circle-colorful.svg';

/**![BtgCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWJ0Zy1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTk5OS45IDIwMDAiPjxwYXRoIGQ9Ik05NDcgMGgxMDQuMkMxMTU5LjkgNy4yIDEyNjggMjguOSAxMzY5IDY5LjdjMjUwIDk4LjMgNDU2LjMgMzAyLjIgNTU3IDU1MS40IDEzOC42IDMzMS44IDc5LjEgNzM2LjUtMTUyLjMgMTAxMi42LTE1Ni42IDE5Mi4yLTM4Ni45IDMyMy4xLTYzMi43IDM1Ni40LTIzMC43IDMyLjktNDcyLjgtMTYuOC02NzAuMi0xNDEuNS0xNTIuMi05NC44LTI3OC4yLTIzMS4yLTM1OS44LTM5MUM2LjMgMTI1Ni45LTI1LjUgMTAxOS43IDIwLjUgNzk4LjNjNDkuMi0yNDUuNCAxOTUuNy00NjkuMyA0MDAtNjEzLjZDNTczLjUgNzQgNzU5IDExLjcgOTQ3IDBtLTYyIDQ1LjNDNTgwLjggODAuMiAzMDEuMiAyNzEuOCAxNTYuMiA1NDEuMiA1OC4xIDcyMC4zIDE4LjkgOTMxLjUgNDguNSAxMTMzLjhjMzMuNSAyNDMuNiAxNjYgNDcxLjUgMzYwIDYyMi4zIDE0Ny43IDExNi41IDMzMC40IDE4OCA1MTggMjAyIDIxMi41IDE2LjkgNDMwLjEtMzkuOCA2MDYuNS0xNTkuNSAyMTYuMy0xNDMuMiAzNjkuOC0zNzcuNCA0MTMuOS02MzMuMSAyNS40LTE1MC43IDE2LjgtMzA3LjctMjkuOC00NTMuNC02Ni41LTIxMS45LTIwOS0zOTkuMi0zOTYtNTE5LjJDMTMzNS4yIDcwLjkgMTEwNS43IDE4IDg4NSA0NS4zeiIgc3R5bGU9ImZpbGw6ICMwMDIwNmI7Ii8+PHBhdGggZD0iTTkwOS4xIDQzOS4xQzEwODMgNDEwIDEyNjkuNSA0NjcgMTM5NC42IDU5MS44YzExMSAxMDQuOCAxNzUuOCAyNTcuMSAxNzIuNiA0MDkuOCAyLjIgMTUxLjktNjIuOSAzMDMtMTczLjQgNDA2LjktMTIwLjMgMTE5LjYtMjk3LjIgMTc2LjctNDY0LjkgMTU0LjYtMTU4LTE5LTMwNS45LTEwOC44LTM5NS43LTI0MC4zQzQzMy44IDExODIgNDA2LjQgOTk0LjYgNDU4IDgzMC41YzYwLjQtMjAyIDI0Mi44LTM1OS45IDQ1MS4xLTM5MS40bTM0LjcgMzQuNmMuMSA0OS43LjIgOTkuNC4xIDE0OS4xIDI0LjggMCA0OS42IDAgNzQuNC4xLjEtNTEgLjItMTAyIDAtMTUyLjktMjQuOC44LTQ5LjcgMi03NC41IDMuN20xNzguOSAxNTEuNWM2NS4zIDguOCAxMzUuNSAxOC44IDE4Ny42IDYyLjkgNzkuNSA3MS40IDY5LjIgMjIxLjMtMjguMSAyNzMuMSA1OC4zIDEzLjYgMTE2IDUyLjUgMTMwLjQgMTEzLjcgMTguNyA4MC4zIDMuOCAxNzYuNy02MC43IDIzMy4zLTYzLjkgNTIuNi0xNTAuNCA1OS41LTIyOS40IDY3IC40IDQ2LjUuMiA5MyAuMSAxMzkuNiAxNjYuMy00MC43IDMwOS44LTE2NC41IDM3MC44LTMyNC43IDU3LjktMTQ3LjggNDQuMi0zMjEuNy0zNy41LTQ1Ny44LTcyLjItMTIyLjgtMTk1LTIxMy0zMzIuOS0yNDcuNi0uNCA0Ni44LS40IDkzLjYtLjMgMTQwLjVtLTQ5Ni4zLTJjNzIgMy41IDE0NC4xIDIuNyAyMTYuMiAyLjYgMC00My45LjEtODcuNy0uMi0xMzEuNi04MC43IDI2LjItMTUyLjYgNzMuMi0yMTYgMTI5bS04LjYgNS44Yy0xOS4xIDIzLjUtNTQuNSA2Ny45LTc1LjUgMTA3LjItODQuNyAxNDQuMy05NC4zIDMyOS41LTIzLjYgNDgxLjMgNjEgMTM2LjEgMTgyIDI0MiAzMjMuNyAyODcuNi4yLTQzLjguMS04Ny42LjEtMTMxLjMtNzIuMy0uNy0xNDQuOCAxLjktMjE3LTIgLjgtNDAuMyAxMC4zLTc5LjcgMjQtMTE3LjcgMzUuNC0uNyA3Mi4zIDUuNSAxMDYuNS02LjEgMjAtMTYuOCAxNC4zLTQ0LjYgMTUuNC02Ny42LTEuMS0xMzEuNS41LTI2My0uNy0zOTQuNCAxLjMtMjEuMi0xMi00NC4xLTM0LTQ4LjMtMzYuMy03LjMtNzMuNy00LjQtMTEwLjQtNC43LTQuMy0yOS42LTQuOC01OS41LTUuMi04OS40IDAgMCAuNS05LjQtMi43LTE1LjVsLS42Ljl6bTMyOS4xIDExM3YxOTMuOGM2NC43LTEuMiAxMzYuNSA2IDE5My4xLTMxLjYgNDctMzAuOCA0NC0xMDguNy00LjUtMTM2LjQtNTYuNy0zMy41LTEyNS44LTI0LTE4OC42LTI1LjhtMCAyOTguMXYyMTVjNzkuOS02LjQgMTY5LjUgNyAyMzktNDEuMiA0OS43LTMzIDQzLjctMTE0LjctNy41LTE0My4zLTY5LjYtNDEuNi0xNTQuMi0yOC40LTIzMS41LTMwLjVtLTIuOSAzMzYuNmMwIDQ5LjctLjEgOTkuNS0uMiAxNDkuMiAyNS45IDEuNyA1MS43IDIuNyA3Ny42IDMuNS4yLTUwLjkuMS0xMDEuOC4xLTE1Mi43SDk0NHoiIHN0eWxlPSJmaWxsOiAjMDAyMDZiOyIvPjxwYXRoIGQ9Ik04OTAuOCA5Ny4yYzE3NS4yLTE4LjggMzU2LjYgNy45IDUxNCA4OC43IDIwMi41IDk5LjMgMzY0LjQgMjc3LjggNDQ0LjIgNDg4LjcgODEuNCAyMTEuMiA3OS42IDQ1Mi44LTQuNyA2NjMtMTI4LjIgMzMxLjMtNDY2LjcgNTY5LjUtODIzLjEgNTcwLTIwOS4zIDcuNi00MTkuOS02Mi44LTU4My44LTE5My0xNzQuOC0xMzUuOS0yOTUuNy0zMzktMzMzLTU1Ny4zLTM4LjEtMjE2LjIgNC42LTQ0NS45IDEyMC4yLTYzMi44QzM2NS45IDI5MC4xIDYxOSAxMjguMSA4OTAuOCA5Ny4ybS0zMC41IDI5My40Yy0xNDIuNCAzMi4xLTI3Mi42IDExNi4yLTM1OS45IDIzMy4zLTk2LjQgMTI2LjgtMTQwLjYgMjkxLjctMTIwLjkgNDQ5LjYgMTguNSAxNjkgMTEwLjggMzI4LjQgMjQ4LjEgNDI4LjUgMTI4LjUgOTYuNiAyOTUuNSAxMzkgNDU0LjUgMTE3LjIgMTk2LjUtMjQgMzc3LjItMTQ5LjEgNDY4LjktMzI0LjYgNjguNy0xMjUuMiA4Ny41LTI3NCA2Mi4zLTQxMy43LTMyLjEtMTY5LjQtMTM3LjktMzIzLjMtMjg1LjEtNDEzLjEtMTM3LjgtODUuOC0zMDkuOC0xMTMuMy00NjcuOS03Ny4yeiIgc3R5bGU9ImZpbGw6ICNlYmE4MDk7Ii8+PC9zdmc+) */
export const BtgCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-btg-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BtgCircleColorful.displayName = 'BtgCircleColorful';
