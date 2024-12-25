// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gemini-filled.svg';

/**![GeminiFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGlkPSJnZW1pbmktZG9sbGFyIj4KICA8cGF0aCBkPSJNMTE1LjU5IDQ4LjE0YTM1LjcgMzUuNyAwIDAgMC03MS4xOS0zLjc4IDM1LjY5IDM1LjY5IDAgMSAwIDM5LjIgMzkuMjggMzUuNzQgMzUuNzQgMCAwIDAgMzEuOTktMzUuNVptLTM1LjctMjcuODlhMjcuOTMgMjcuOTMgMCAwIDEgMjcuNiAyMy45Mkg1Mi4zYTI3LjkzIDI3LjkzIDAgMCAxIDI3LjU5LTIzLjkyWk01MiA3NlY1MmgyNHYyNFptLTcuOC0yMy43NVY3NkgyMC40OUEyOCAyOCAwIDAgMSA0NC4yIDUyLjI1Wm0zLjkxIDU1LjVhMjcuOTMgMjcuOTMgMCAwIDEtMjcuNi0yMy45Mkg3NS43YTI3LjkzIDI3LjkzIDAgMCAxLTI3LjU5IDIzLjkyWm0zNS42OS0zMlY1MmgyMy43MUEyOCAyOCAwIDAgMSA4My44IDc1Ljc1WiI+PC9wYXRoPgo8L3N2Zz4K) */
export const GeminiFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gemini-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GeminiFilled.displayName = 'GeminiFilled';
