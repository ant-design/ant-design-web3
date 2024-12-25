// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/pasc-circle-colorful.svg';

/**![PascCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXBhc2MtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjx0aXRsZT5wYXNjYWw8L3RpdGxlPjxwYXRoIGQ9Ik0yNTYsMTI4QTEyOCwxMjgsMCwxLDEsMTI4LDAsMTI4LDEyOCwwLDAsMSwyNTYsMTI4Wk0xODAuMTMsNjJMMTgyLDUzYTMuMTQsMy4xNCwwLDAsMC0zLjE1LTRoLTZBNS4yMSw1LjIxLDAsMCwwLDE2OCw1M2wtMS45MSw5aC0xNEwxNTQsNTNhMy4xNCwzLjE0LDAsMCwwLTMuMTUtNGgtNkE1LjIxLDUuMjEsMCwwLDAsMTQwLDUzbC0xLjkxLDlINjBMNDAsODZIMTcyYTEyLDEyLDAsMCwxLDEyLDEydjEyYTEyLDEyLDAsMCwxLTEyLDEySDExMC4zOGw1LjEtMjRoLTMyTDYwLjEsMjA4aDMybDEzLjE4LTYyaDE1bC0xLjkxLDlhMy4xNCwzLjE0LDAsMCwwLDMuMTUsNGg2YTUuMjEsNS4yMSwwLDAsMCw0Ljg1LTRsMS45MS05aDE0bC0xLjkxLDlhMy4xNCwzLjE0LDAsMCwwLDMuMTUsNGg2YTUuMjEsNS4yMSwwLDAsMCw0Ljg1LTRsMS45MS05SDE5MmEyNCwyNCwwLDAsMCwyNC0yNFY4NmEyNCwyNCwwLDAsMC0yNC0yNEgxODAuMTNaIiBzdHlsZT0iZmlsbDojZjc5MzFlIi8+PC9zdmc+) */
export const PascCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-pasc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PascCircleColorful.displayName = 'PascCircleColorful';
