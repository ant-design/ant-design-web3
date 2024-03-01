---
nav: Contributing
group:
  title: Others
  order: 3
---

# How to Contribute Icons

The crypto industry is evolving rapidly with new projects and standards emerging all the time. We welcome community contributions of icons to better support these projects.

## Add icon files

The `packages/icons` directory corresponds to the `@ant-design/web3-icons` package, and new icons should be added in this directory, specifically:

<Tree>
  <ul>
    <li>
      src
      <ul>
        <li>
          components
          <ul>
            <li>YOUR-ICON.tsx<small>Add icon components</small></li>
          </ul>
        </li>
        <li>
          svgs
          <ul>
            <li>YOUR-ICON.svg<small>Add icon svg</small></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>index.ts<small>export it</small></li>
  </ul>
</Tree>

## Add icon svg

Add new svg in `svgs` folder, file name should be the same as icon name, and use the kebab-case for file name.

If you need to use `id` or `classname` in svg, you need to add the prefix `ant-web3-icon-`. This is to prevent `svgo` from simplifying it, which causes the type to not be found. In svg, try to use the inline way to write styles, such as `fill: fff` for colors.

Good writing:

```svg
<path
  style="fill:#020041;"
  d="M1494.8,856.4c171.5,289.1,336.4,582.2,505.2,873c-168.6,0.6-337.1-1-505.6,0C1493.8,1438.3,1492.9,1147.3,1494.8,856.4"
/>
```

There may be problems with the writing:

```svg
<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="color">
  <stop stop-color="#FF8B8B" offset="0%"></stop>
  <stop stop-color="#FF1717" offset="100%"></stop>
</linearGradient>
```

```svg
<path
  fill:url(#color)
  d="M1494.8,856.4c171.5,289.1,336.4,582.2,505.2,873c-168.6,0.6-337.1-1-505.6,0C1493.8,1438.3,1492.9,1147.3,1494.8,856.4"
/>
```

In these examples, the ids are used as the match, which causes style conflicts or loss when multiple identical svgs appear at the same time.

## Complete the icon react component

In the `components` directory, refer to the following template to complete the component. There are two parts that need to be changed:

1. Icon component name
2. Svg introduction name

```tsx | pure
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/aave-circle-colorful.svg';

export const AAVECircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-aave-circle-colorful');
  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});
AAVECircleColorful.displayName = 'AAVECircleColorful';
```

## Naming specification

There are four types through the display form of icon:

- circle colorful
- colorful
- circle filled
- filled

The naming specification is: `project name-type name`, such as `aave-circle-colorful`. Using the correct naming specification will be automatically classified in the document.

## Test and verify

Export the newly added icon in `src/index.ts`, and then verify whether the icon is displayed correctly in the local debugging environment.
