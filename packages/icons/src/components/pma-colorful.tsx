// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/pma-colorful.svg';

/**![PmaColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXBtYS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDguOSAyNTIuNiI+PHRpdGxlPmxvZ29fcHVtYXBheTwvdGl0bGU+PHBvbHlnb24gcG9pbnRzPSIzNS44IDEzNC4zIDAgMjUyLjYgNzYuOSAyNTIuNiAxMTIuNyAxMzQuMyAzNS44IDEzNC4zIiBzdHlsZT0iZmlsbDojMWU2OWZmIi8+PHBhdGggZD0iTTI3MC4yLDBIMTc0LjhMMTUwLjcsNzguN2g4NS43YzE1LjIsMCwyNCwxMi41LDE5LjMsMjcuOHMtMjEsMjcuOC0zNi4zLDI3LjhIMTMzLjZsLTEuNiw1LjFMMTA5LjYsMjEzSDIwNWM1OC43LDAsMTIxLjEtNDcuOCwxMzktMTA2LjRDMzYyLDQ3LjcsMzI4LjksMCwyNzAuMiwwWiIgc3R5bGU9ImZpbGw6IzFlNjlmZiIvPjxwb2x5Z29uIHBvaW50cz0iMTUzLjggMCA3Ni44IDAgNTIuOCA3OC43IDEyOS44IDc4LjcgMTUzLjggMCIgc3R5bGU9ImZpbGw6IzFlNjlmZiIvPjwvc3ZnPg==) */
export const PmaColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-pma-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PmaColorful.displayName = 'PmaColorful';
