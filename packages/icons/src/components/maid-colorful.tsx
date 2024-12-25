// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/maid-colorful.svg';

/**![MaidColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLW1haWQtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTk4NC4zIDIyMDkuOCI+PHRpdGxlPm1haWQ8L3RpdGxlPjxwYXRoIGQ9Ik0xNTk4LjEgNzMwLjNWMjIwOUwzNDguNSAxNDgzLjRDLTE4LjQgMTI3Mi4yIDkuMSAxMTM0LjQgMCA4NDAuNWwxMjg1LjUgNzQ0VjkwNC44bDMxMi4zLTE3NC41aC4zeiIgc3R5bGU9ImZpbGw6ICM5OWJlZTc7Ii8+PHBhdGggZD0iTTEyODUuNSAxNTg0LjVMMCA4NDAuNSAxMjQ5LjEgMTI0YzM2Ny4xLTIxMS4xIDQ2OC40LTExOS4yIDczNC43IDI4LjJMNjk4IDg5NS42bDU4Ny41IDMzOS45djM0OXoiIHN0eWxlPSJmaWxsOiAjNTU5MmQ3OyIvPjxwYXRoIGQ9Ik02OTggODk1LjZsMTI4Ni4zLTc0My41djE0MzMuMWMwIDQzMS43LTEyOSA0NjguNC0zODUuOCA2MjQuNVY3MzAuM0wxMDEzIDEwNzguMiA2OTggODk1LjZ6IiBzdHlsZT0iZmlsbDogIzI5NTc4YTsiLz48L3N2Zz4=) */
export const MaidColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-maid-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

MaidColorful.displayName = 'MaidColorful';
