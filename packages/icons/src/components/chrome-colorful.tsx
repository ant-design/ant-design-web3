import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { ReactComponent as SVGComponent } from '../svgs/chrome-colorful.svg';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import classnames from 'classnames';

export const ChromeColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => (
  <AntdIcon
    {...props}
    className={classnames('ant-web3-icon-chrome-colorful', props.className)}
    ref={ref}
    component={SVGComponent}
  />
));

ChromeColorful.displayName = 'ChromeColorful';
