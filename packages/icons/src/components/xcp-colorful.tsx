// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xcp-colorful.svg';

/**![XcpColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMDAgMTI0MCI+PHBhdGggZD0iTTIwMDAsMTA3My4zMkwxNzA4LjkxLDEzNjQuNkgxNDMyLjM0YTU2Ljc2LDU2Ljc2LDAsMCwwLTU2LjY0LDU2LjY0djE2NmEzMy4zNCwzMy4zNCwwLDAsMS0zMy4zNiwzMi43NkgxMTMxLjE4YTMzLjM0LDMzLjM0LDAsMCwxLTMzLjM2LTMzLjM2VjExODMuMzhsMTcyLjg2LTE3Mi44NWEzMy4zNiwzMy4zNiwwLDAsMSw0Ni4zNi42bDc2LjMsNzYuM2gyMDBsMTI5LTEyOC45MVY3ODkuM0wxNTkwLjE4LDY1Ni41NmgtMTc3LjhMNzA1LjU0LDEzNjMuMzlIMjkzLjZMMCwxMDcwVjY3NC4xTDI5My45MSwzODAuMkg2OTUuNjZMODY5LjgzLDU1NC4zNmEzMy40MiwzMy40MiwwLDAsMSwwLDQ2LjI2TDcyMS43Nyw3NDguMThhMzIuNjksMzIuNjksMCwwLDEtNDYuMDYsMy4zM2MtMC44MS0uNzEtMS42MS0xLjUxLTIuNDItMi4yMmwtOTIuMzItOTJINDA4LjYxTDI3Ny4wOCw3ODguOFY5NTUuNUw0MDguMiwxMDg2LjgzSDU5MC43NEwxMjk3LjY5LDM4MEgxNzA1bDI5NSwyOTV2Mzk4LjMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC0zODApIiBmaWxsPSIjZWMxNTUwIi8+PC9zdmc+) */
export const XcpColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xcp-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XcpColorful.displayName = 'XcpColorful';
