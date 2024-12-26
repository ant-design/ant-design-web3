// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ubq-colorful.svg';

/**![UbqColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE3ODUgMjAwMCIgPjxwYXRoIGQ9Ik0xMDg5LjMgMjEzbDI1LjI0IDgwNC43M0wxNzg1IDU5NC4wOHoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNMTc4MC4yNyAxNDM2LjY5VjU5MC45M0w4MTkuNTQgMTIwMHY4MDBoMzIuMzQiIGZpbGw9IiM0OTQ5NDkiLz48cGF0aCBkPSJNNjk1LjcgMTc4N2wtMjUuMjQtODA0Ljc1TDAgMTQwNS45MnoiIGZpbGw9IiMwY2E1NzkiLz48cGF0aCBkPSJNNC43MyA1NjMuMzF2ODQ1Ljc2bDk2MC43My02MDguMjhWMGgtMzIuMzQiIGZpbGw9IiMwMGVhOTAiLz48L3N2Zz4=) */
export const UbqColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ubq-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

UbqColorful.displayName = 'UbqColorful';
