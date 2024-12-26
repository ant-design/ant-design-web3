// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/dcn-circle-colorful.svg';

/**![DcnCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMTM2NDg1Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEwLjQzNiAzMS4wMDZhMTYuMDA4IDE2LjAwOCAwIDAgMS01LjYwNC0zLjU0OGwuMTQ3LS4yNTdjMi4zODgtMy43NzMgNC41MzMtNy42NzggNi4xNDgtMTEuODUgMS43MTMtNC40MjUgMy4wODQtOC45NjcgNC4zOS0xMy41MjcuMTE3LS40MDcuMjU2LS44MDcuMzg0LTEuMjEuMTM4LjE1OC4xODguMzA1LjIzLjQ1NC44MiAyLjkyNiAxLjYxMyA1Ljg2IDIuNDY0IDguNzc2IDEuNTUgNS4zMTMgMy43MyAxMC4zNTMgNi42MTcgMTUuMDc3LjMzNy41NS45MSAxLjQ3MiAxLjcyIDIuNzYyYTE1Ljk4OCAxNS45ODggMCAwIDEtNi4wMzUgMy41NTQgNDMyMC4xOTMgNDMyMC4xOTMgMCAwIDAtNS4wMDItMTUuMTdsLS4xNTQtLjAwMmMtMS4xNjYgMy4yNzctMi45MzQgOC4yNTctNS4zMDUgMTQuOTQxek0xNi4wNzUuMDQ5aC0uMTI0TDE2IDBsLjA3NS4wNDl6Ii8+PC9nPjwvc3ZnPg==) */
export const DcnCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-dcn-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DcnCircleColorful.displayName = 'DcnCircleColorful';
