---
nav: Guide
group: Basic
---

# Theme

Ant Design Web3 is developed based on Ant Design, and you can set the theme of Ant Design Web3 by configuring [Ant Design's theme](https://ant.design/docs/react/customize-theme).

## Style Switching

Ant Design Web3 has built-in support for dark mode, which inherits the configuration from Ant Design.

<code src="./demos/theme.tsx"></code>

## Custom Design Token

### Customize Ant Design's Design Token

You can fully customize Ant Design's [Design Token](https://ant.design/docs/react/customize-theme-cn#%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%E5%8F%98%E9%87%8F), which we will inherit and use in Ant Design Web3. If you find any unsupported or incorrectly used Design Tokens, please [submit an issue](https://github.com/ant-design/ant-design-web3/issues) to let us know.

We provide a [theme editor](/theme-editor-cn) where you can modify Design Tokens online and see the effects.

<code src="./demos/custom-token.tsx"></code>

### Customize More Design Tokens for Ant Design Web3

In addition to Ant Design's Design Tokens, Ant Design Web3 also offers some additional Design Tokens that you can customize. The Design Tokens for components are continuously being supplemented, and you can view the supported Design Tokens on the corresponding component documentation pages. If you find any unsupported or incorrectly used Design Tokens, please [submit an issue](https://github.com/ant-design/ant-design-web3/issues) to let us know. Below is a specific example, you can customize the Design Tokens of Ant Design and Ant Design Web3 to achieve flexible custom styles. More examples can be viewed by visiting [Try It Out](/guide/ant-design-web3-cn#try-it-out).

<code src="./demos/custom-token-web3.tsx"></code>
