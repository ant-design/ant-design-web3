// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gemini-colorful.svg';

/**![GeminiColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMjQgMzI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMTEuNzQgMGMtNTcgMC0xMDUuMzkgNDMuODQtMTExLjQ5IDEwMC4yNS01Ni40MSA2LjEtMTAwLjI1IDU0LjUxLTEwMC4yNSAxMTEuNDlhMTEyLjM0IDExMi4zNCAwIDAgMCAxMTIuMjYgMTEyLjI2YzU3IDAgMTA1LjU4LTQzLjg0IDExMS40OS0xMDAuMjUgNTYuNDEtNi4xIDEwMC4yNS01NC41MSAxMDAuMjUtMTExLjQ5YTExMi4zNCAxMTIuMzQgMCAwIDAgLTExMi4yNi0xMTIuMjZ6bTg2IDEyNC44NGE4Ny4zNSA4Ny4zNSAwIDAgMSAtNzMuMjMgNzMuMTZ2LTczLjE2em0tMjcxLjQ0IDc0LjMyYTg3LjM1IDg3LjM1IDAgMCAxIDczLjE5LTczLjM3djczLjIxaC03My4xOXptMTcxLjkxIDI1LjM1YTg2LjkgODYuOSAwIDAgMSAtMTcxLjkxIDB6bS45NS05OS42N3Y3NC4xNmgtNzQuMzJ2LTc0LjE2em05OC41NC0yNS4zNWgtMTcxLjkxYTg2LjkgODYuOSAwIDAgMSAxNzEuOTEgMHoiIGZpbGw9IiMwMGRjZmEiLz48L3N2Zz4=) */
export const GeminiColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gemini-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GeminiColorful.displayName = 'GeminiColorful';
