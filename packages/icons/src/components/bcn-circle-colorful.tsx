// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bcn-circle-colorful.svg';

/**![BcnCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE1Ljk5OSIgY3k9IjE1Ljk5OSIgcj0iMTUuOTk5IiBmaWxsPSIjRjA0MDg2Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIzLjQzNyAxNi43NTRjLS42My0uNjk2LTEuNTM2LTEuMTI4LTIuNzItMS4yOTZ2LS4wMjVjMS4wMzctLjE2OCAxLjg1Mi0uNTkzIDIuNDA2LTEuMjczYTMuNzE3IDMuNzE3IDAgMCAwIC44NjItMi40MDRjMC0xLjQ2MS0uNDctMi40NTQtMS40NDQtMy4yMzUtLjk3NC0uNzgtMi40MzYtMS4wMzctNC40MTctMS4wMzdoLTcuNDgxdjYuOTYzSDYuMzQ3djIuNjY3aDExLjcyN2MuOTIzIDAgMS42MTYuMDY1IDIuMDc0LjQzNC40NTguMzY5LjY5Mi44NDYuNjkyIDEuNTUxcy0uMjMxIDEuMzA3LS42OTIgMS42ODVjLS40Ni4zNzctMS4xNTQuNjI2LTIuMDc0LjYyNkgxNC4wNXYtMi4wNzRoLTMuNDA3djQuNzQxaDcuNzI3YzEuOTY1IDAgMy40NjctLjUxMyA0LjUwOS0xLjMxIDEuMDQxLS43OTcgMS41My0xLjk3NCAxLjUzLTMuNDE5YTMuODEgMy44MSAwIDAgMC0uOTcyLTIuNTk0em0tNS43OTMtMi4zMTRIMTQuMDV2LTQuMjk2aDMuNTk0YzEuODQ4IDAgMi43Ny43MjEgMi43NyAyLjE0OHMtLjkyMiAyLjE0OC0yLjc3IDIuMTQ4eiIvPjwvZz48L3N2Zz4=) */
export const BcnCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bcn-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BcnCircleColorful.displayName = 'BcnCircleColorful';
