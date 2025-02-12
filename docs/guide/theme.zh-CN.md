---
nav: 指南
group: 基础
---

# 主题

Ant Design Web3 基于 Ant Design 研发，你可以通过配置 [Ant Design 的主题](https://ant.design/docs/react/customize-theme-cn)来设置 Ant Design Web3 的主题。

## 风格切换

Ant Design Web3 内置了对暗黑模式的支持，继承自 Ant Design 的配置。

<code src="./demos/theme.tsx"></code>

## 自定义 Design Token

### 自定义 Ant Design 的 Design Token

你可以完全自定义 Ant Design 的 [Design Token](https://ant.design/docs/react/customize-theme-cn#%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%E5%8F%98%E9%87%8F)，我们会在 Ant Design Web3 中继承使用。如果你发现不支持或者使用有误的 Design Token，请[提交 issue](https://github.com/ant-design/ant-design-web3/issues) 告诉我们。

我们提供了一个[主题编辑器](/theme-editor-cn)，你可以在线修改 Design Token 查看效果。

<code src="./demos/custom-token.tsx"></code>

### 自定义更多 Ant Design Web3 的 Design Token

除了 Ant Design 的 Design Token，Ant Design Web3 还提供了一些额外的 Design Token，你也可以自定义这些 Design Token。组件的 Design Token 在持续的补充中，你可以在对应的组件文档页面查看支持的 Design Token。如果你发现不支持或者使用有误的 Design Token，请[提交 issue](https://github.com/ant-design/ant-design-web3/issues) 告诉我们。下面是一个具体的示例，你可以通过定义 Ant Design 和 Ant Design Web3 的组件的 Design Token 实现灵活的自定义样式。更多的示例你可以通过访问[试试看](/guide/ant-design-web3-cn#试试看)查看。

<code src="./demos/custom-token-web3.tsx"></code>
