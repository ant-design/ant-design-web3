// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/sib-circle-colorful.svg';

/**![SibCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzA1N0JDMSIvPjxwYXRoIGQ9Ik0xNiA0QzkuMzczIDQgNCA5LjM3MyA0IDE2czUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyQTEyIDEyIDAgMCAwIDE2IDR6bTQuMTc2IDE2LjUyN2gtLjQ4OHYyLjczMmgtMS42NHYtMi43MzJoLTIuNDk3di0xLjAxNWgyLjUzN3YtMS44MzRhNi40MzkgNi40MzkgMCAwIDEtNC4zMzIuNzAyYy0uODItLjE5NS0xLjYzOS0uNjQzLTIuMDY4LTEuMzg1YTQuNTg3IDQuNTg3IDAgMCAxLS41ODYtMi4zOHYtNC4zMzJoMS42NTl2NC40ODhjLjAzOS45NzUuNjYzIDEuOTUxIDEuNjIgMi4yNDRhNC45OTEgNC45OTEgMCAwIDAgMy42ODctLjU4NmMwLTEuMzY2LS4wMi0zLjQxNCAwLTYuMTQ2aDEuNjc4djkuMjNoLjQzdjEuMDE0eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=) */
export const SibCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-sib-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

SibCircleColorful.displayName = 'SibCircleColorful';
