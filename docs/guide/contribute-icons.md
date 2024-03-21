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

Add new svg in `svgs` folder, file name should be the same as icon name, and use the [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) style for file name.

Also, please note that do not use `id` in the `style` attribute of the svg, because the `react-inline-svg-unique-id` plugin does not support `style`. We recommend that the properties in `style` be taken out as separate attributes as much as possible:

```diff
- <circle style="fill:url(#ant-web3-icon-aave-circle-colorful-3);" cx="400" cy="400" r="388"/> # bad
+ <circle fill="url(#ant-web3-icon-aave-circle-colorful-3)" cx="400" cy="400" r="388"/> # good
```

## Complete the icon react component

In the `components` directory, refer to the following template to complete the component. There are two parts that need to be changed:

1. Icon component name
2. SVG introduction name

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

The naming specification is: `{project name}-{type name}`, such as `aave-circle-colorful`. Using the correct naming specification will be automatically classified in the document.

Based on the functions of the corresponding projects of icons, the following diversions are made:

- Chain Icons
- Token Icons
- Tool Icons

If you need to make a special declaration, you can change it in the `.dumi/theme/builtins/IconSearch/fields.ts` file, otherwise it will be classified as the default classification.

## Test and verify

Export the newly added icon in `src/index.ts`, and then verify whether the icon is displayed correctly in the local debugging environment.
