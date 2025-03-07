// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xch-colorful.svg';

/**![XchColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi14Y2gtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA5OS43IDM3LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk5LjcgMzcuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZD0iTTU5LjksMTIuM2g4Ljd2MjUuMWgtOC43VjEyLjN6IiBzdHlsZT0iZmlsbDogIzNBQUM1OTsiLz4KPHBhdGggZD0iTTQ4LDEwLjRjLTMuMywwLTYuNywwLjgtNy42LDIuM2MwLDAsMCwwLDAsMC4xVjIuMmgtOC45djE2Ljd2MGMwLjksMC40LDEuOCwwLjksMi43LDEuNAoJYzAuMywwLjIsMC42LDAuMywwLjgsMC40YzAuMSwwLjEsMC4yLDAuMSwwLjQsMC4yYzAsMC01LjEsNy45LTEyLDkuNWMtNC4xLDEtOC45LTAuMi05LjktNC4zYzAtMC4yLTAuMS0wLjMtMC4xLTAuNQoJYzAuNy0wLjQsMS4zLTAuNywyLTEuMWMxLjctMC43LDMtMS4zLDMuNS0xLjVjMCwwLDAuMSwwLDAuMSwwYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwYzQuMS0xLjUsNy41LTIsNy41LTJjLTMuMS0wLjMtNS43LTAuMS04LDAuNAoJYzAsMCwwLDAsMCwwczAsMCwwLDBjLTIsMC40LTMuNywxLTQuOSwxLjZjMC43LTIuOSwzLjMtNS41LDYuNC02LjJjMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjJjMC4xLDAsMC4yLDAsMC4yLDAKCWMwLjIsMCwwLjQtMC4xLDAuNi0wLjFjMC4xLDAsMC4xLDAsMC4yLDBjMC4zLDAsMC41LDAsMC44LDBjMC4xLDAsMC4xLDAsMC4yLDBjMC4yLDAsMC41LDAsMC43LDBjMC4xLDAsMC4yLDAsMC4yLDAKCWMwLjEsMCwwLjIsMCwwLjIsMGMxLjMsMC4xLDIuOSwwLjUsNC43LDEuMVYxMmMtMC45LTAuMy0xLjgtMC41LTIuNy0wLjhDMjMuMywxMC42LDE5LDkuOSwxNC4zLDExYy03LjYsMS44LTkuNyw3LjQtOS43LDE0LjIKCWMwLDAuOSwwLjEsMS43LDAuMiwyLjRjLTEuNiwxLjEtMy4zLDIuMy00LjcsMy43YzAsMCwyLjItMSw1LjEtMi4yYzEuOSw2LjUsOC43LDguNywxMy43LDguN2M1LjMsMCw4LjctMS41LDEyLjctNFYzN2g4LjlWMjEuMwoJYzAsMCwwLDAsMC0wLjFWMjFjMC44LTIuMiwyLjMtMi44LDMuOS0yLjhjMi4xLDAsMy40LDEuNSwzLjQsMy45djE1aDguOVYxOS41QzU2LjcsMTQsNTMuMiwxMC40LDQ4LDEwLjR6IiBzdHlsZT0iZmlsbDogIzNBQUM1OTsiLz4KPHBhdGggZD0iTTY0LjEsMGMtMi43LDAtNC42LDEuOS00LjYsNC42YzAsMi43LDEuOSw0LjYsNC42LDQuNmMyLjcsMCw0LjYtMS45LDQuNi00LjZDNjguNywxLjksNjYuOCwwLDY0LjEsMHoiIHN0eWxlPSJmaWxsOiAjM0FBQzU5OyIvPgo8cGF0aCBkPSJNOTguMiwyMi44TDk4LjIsMjIuOGwwLTExLjJoLTguOWwwLDEuNmMtOC42LTUuNS0xNC4xLDAuMi0xNC4xLDAuMmMtMi42LDIuNC00LjEsNi4xLTQuMSwxMC45CgljMCw4LjQsNS4xLDEzLjQsMTEuNiwxMy40YzIuNSwwLDQuNy0wLjYsNi43LTMuM2MwLjIsMC42LDAuNywyLjIsMS4xLDIuN2g5LjNDOTguMSwzNC40LDk4LjEsMjUuNCw5OC4yLDIyLjh6IE04NC43LDMwLjMKCWMtMi45LDAtNC45LTIuNS00LjktNmMwLTMuNSwyLTYsNC45LTZjMiwwLDMuNiwxLjIsNC40LDMuMnY1LjdDODguMywyOS4xLDg2LjcsMzAuMyw4NC43LDMwLjN6IiBzdHlsZT0iZmlsbDogIzNBQUM1OTsiLz4KPC9zdmc+Cg==) */
export const XchColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xch-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XchColorful.displayName = 'XchColorful';
