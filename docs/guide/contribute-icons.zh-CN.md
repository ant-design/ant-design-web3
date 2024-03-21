---
nav: 指南
group:
  title: 其他
  order: 3
---

# 如何添加图标

加密行业日新月异，新的项目和标准不断涌现。我们欢迎社区贡献图标，以便更好地支持这些项目。

## 添加图标文件

`packages/icons` 目录对应了 `@ant-design/web3-icons` 包，新的图标应该添加在这个目录下，具体为：

<Tree>
  <ul>
    <li>
      src
      <ul>
        <li>
          components
          <ul>
            <li>YOUR-ICON.tsx<small>添加图标组件</small></li>
          </ul>
        </li>
        <li>
          svgs
          <ul>
            <li>YOUR-ICON.svg<small>添加图标 svg</small></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>index.ts<small>统一导出</small></li>
  </ul>
</Tree>

## 添加图标 svg

在 `svgs` 目录下添加新的 svg 文件，文件名应该和图标名称一致，注意文件名应该使用 [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) 风格。

另外需要注意的是，在 svg 的 `style` 属性中请勿使用 `id`，因为 `react-inline-svg-unique-id` 插件不支持识别 `style`，我们建议 `style` 中的属性尽量拿出来单独作为属性：

```diff
- <circle style="fill:url(#ant-web3-icon-aave-circle-colorful-3);" cx="400" cy="400" r="388"/> # bad
+ <circle fill="url(#ant-web3-icon-aave-circle-colorful-3)" cx="400" cy="400" r="388"/> # good
```

## 完成图标 react 组件

在 `components` 目录下参考如下模板完成组件，有两部分需要更改：

1. 图标组件名称
2. svg 引入地址

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

## 命名规范

通过 icon 的展示形式分了四种类型：

- circle colorful
- colorful
- circle filled
- filled

命名规范为：`项目名-类型名称`，比如 `aave-circle-colorful`，使用正确的命名规范会在文档中自动分类。

根据 icon 对应项目的功能做了以下几种区分：

- Chain Icons
- Token Icons
- Tool Icons

如果需要特别声明，可以在 `.dumi/theme/builtins/IconSearch/fields.ts` 文件中更改，否则会归为默认分类。

## 验证

在 `src/index.ts` 中将新添加的 icon 导出，然后可以在本地调试环境验证图标的展示是否正确。
