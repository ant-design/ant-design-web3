// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/dgb-circle-colorful.svg';

/**![DgbCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ3OS44IDQ3OS44Ij48Y2lyY2xlIGN4PSIyMzkuOSIgY3k9IjIzOS45IiByPSIyMTkuNSIgZmlsbD0iIzAwMjM1MiIgc3Ryb2tlPSIjMDZjIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNDAuOCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMTYuOSAxODIuOWgxNTVzNTMuNS0uNSAxNi41IDY4LjVjMCAwLTI3IDU0LTk0IDUzbDM2LjEtOTIuMmE3LjMgNy4zIDAgMCAwLTYuNi0xMGwtNDcuNS0uOC02MCAxNDZzMjAgMiAzMSAxbC02IDE1aDI4LjNhMy44IDMuOCAwIDAgMCAzLjYtMi41bDUuMS0xMy41IDEyLTEtNyAxN0gyMTFhNSA1IDAgMCAwIDQuNy0zLjJsNy43LTE5LjhzODQtMTQgMTIyLTgyYzAgMCA1MS03OS05LTEwN2ExMTYgMTE2IDAgMCAwLTM3LTEwbDctMTcuM2EzLjQgMy40IDAgMCAwLTMuMS00LjdoLTI1LjlsLTggMjFoLTExbDYuMi0xNi4zYTMuNSAzLjUgMCAwIDAtMy4yLTQuN2gtMjZsLTggMjFoLTgwLjhhMTIgMTIgMCAwIDAtMTAuNiA2LjN6Ii8+PC9zdmc+) */
export const DgbCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-dgb-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DgbCircleColorful.displayName = 'DgbCircleColorful';
