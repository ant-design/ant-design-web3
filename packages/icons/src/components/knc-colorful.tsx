// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/knc-colorful.svg';

/**![KncColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWtuYy1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NyA2Ny4wNSI+PHRpdGxlPmt5YmVyLW5ldHdvcmsta25jLWxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0yMCwzMy41Mkw0NSw0Ny44NGExLjMyLDEuMzIsMCwwLDAsMi0xLjE0VjIwLjMyYTEuMzEsMS4zMSwwLDAsMC0yLTEuMTNaIiBzdHlsZT0iZmlsbDojMzFjYjllIi8+PHBhdGggZD0iTTQ0LjQ3LDEyLjg1TDI3LjM4LDAuMjhBMS4zNiwxLjM2LDAsMCwwLDI1LjI0LDFMMTksMjksNDQuMzIsMTVhMS4yNiwxLjI2LDAsMCwwLC4xNS0yLjE1IiBzdHlsZT0iZmlsbDojMzFjYjllIi8+PHBhdGggZD0iTTI3LjM2LDY2Ljc1TDQ0LjQ3LDU0LjE4QTEuMjgsMS4yOCwwLDAsMCw0NC4zMyw1MkwxOSwzOGw2LjI0LDI4YTEuMzUsMS4zNSwwLDAsMCwyLjEyLjc3IiBzdHlsZT0iZmlsbDojMzFjYjllIi8+PHBhdGggZD0iTTEzLjUsMzNMMjAsMi42YTEuMjksMS4yOSwwLDAsMC0yLTEuMzFMMS4zNSwxNC4wNkEzLjQ1LDMuNDUsMCwwLDAsMCwxNi44MXYzMi40QTMuNDUsMy40NSwwLDAsMCwxLjM1LDUyTDE3LjkyLDY0LjczYTEuMjksMS4yOSwwLDAsMCwyLTEuMzFaIiBzdHlsZT0iZmlsbDojMzFjYjllIi8+PC9zdmc+) */
export const KncColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-knc-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KncColorful.displayName = 'KncColorful';
