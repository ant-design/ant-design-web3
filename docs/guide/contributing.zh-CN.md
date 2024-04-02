---
nav: 指南
group:
  title: 其他
  order: 3
---

# 贡献指南

## 透明的开发

我们所有的工作都会放在 [GitHub](https://github.com/ant-design/ant-design-web3) 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要经过同样流程的 review。

## 如何贡献

**提交 PR 时请先执行 `pnpm changeset` 生成变更说明，然后再提交 PR。** 我们通过 [changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) 管理版本发布，执行该命令会在 `.changeset` 下生成变更说明文件，这些文件会在发布时自动合并到 `CHANGELOG.md` 中。但是并不是每个 PR 都需要变更说明，比如文档、官网等不涉及到包内容修改的 PR，可以不用执行该命令。更多 changesets 的使用指南详见：[如何添加 Changelog](https://web3.ant.design/guide/changelog-cn)。

### 贡献代码

前往 [issues](https://github.com/ant-design/ant-design-web3/issues) 中寻找被标记上 `development task` 和 `bug` 标签的 issue，指派给自己，然后尽可能在**三天内**完成开发并提交 PR。除了 bug 外，所有的开发任务都应该被拆分为开发工作量在一个小时内，一天内可以完成的小任务。issue 指派给自己就代表认领任务，请确保认领前对任务已经理解，如果有问题可以在 issue 中回复讨论。另外尽量合理安排时间，确保在三天内能够提交较高质量的 PR。PR 需要指派给核心开发成员，需要至少一人通过（Approved）后可以合并。

新手可以优先寻找打上了 `good first issue` 标签的 issue，另外标记上了 `help wanted` 标签的 issue 更需要社区同学的参与。

### Bugs

我们使用 [GitHub Issues](https://github.com/ant-design/ant-design-web3/issues) 来做 bug 追踪。通过提交 issue 来反馈 bug，如果你想要你发现的 bug 被快速解决，请提供具体的重现示例。

在你报告一个 bug 之前，请先确保已经搜索过已有的 [issues](https://github.com/ant-design/ant-design-web3/issues)。

### Features

明确的 Feature 新建 issue 来跟进，需要打上 `feature` 标签，在开发之前需要对任务进行拆分，**请确保拆分的任务开发工作量在一个小时内，一天内可以完成**。每个拆分的任务建立单独的 issue 并关联，并打上 `development task` 标签，方便多人协作共建。如果 feature 较小，可以不拆分，直接打上 `development task` 标签。打上 `development task` 标签意味找不需要再讨论，可以直接进入开发，如果还有不明确的地方，请在 issue 中讨论。如果整个 Feature 都不明确，那么请关闭 Issue 并参考下方的说明在讨论区讨论。

对于不明确的 Feature 和需要讨论的提案请在[讨论区](https://github.com/ant-design/ant-design-web3/discussions) 新建讨论。

## 如何发布

发布由核心成员负责，每周发布一个版本，如果遇到紧急 bug 修复，可以随时发布。发布遵守 [Semver](https://semver.org/lang/zh-CN/) 规范。

发布通过执行 `pnpm run release` 发布，该命令会先执行 `changeset version` 将 `.changeset` 下的变更说明合并到 `CHANGELOG.md` 中，并更新包的版本。然后执行 `changeset publish` 发布到 npm 并新增对应 tag。

发布后将相关修改提交 PR 更新到 main 分支，对应 tag 也需要 push 到 GitHub，并基于新版本的 `@ant-design/web3` 的 tag 新建一个 [Release](https://github.com/ant-design/ant-design-web3/releases/new)。

如果是 alpha 或者 beta 版本，请执行 `pnpm run release:alpha` 或者 `pnpm run release:beta` 发布。

## 核心成员

核心成员按照活跃度不定期调整，PR 需要经过**至少一名核心成员 review approved** 后才可以合并。讨论区的问题也需要经过至少两名核心成员确认后才可以转变为开发任务。

当前核心成员有：

- [@yutingzhao1991](https://github.com/yutingzhao1991)
- [@kiner-tang](https://github.com/kiner-tang)
- [@jeasonstudio](https://github.com/jeasonstudio)
- [@gin-lsl](https://github.com/gin-lsl)
- [@liangchaofei](https://github.com/liangchaofei)
- [@thinkasany](https://github.com/thinkasany)

设计相关问题可以 @ 我们的设计师：

- [@wenqing993](https://github.com/wenqing993)

## 标签

- `feature` 独立的新功能。
- `bug` 缺陷。
- `development task` 开发工作量在一个小时内，一天内可以完成，不需要再讨论，可以直接进入开发的任务。
- `help wanted` 希望社区帮忙一起来解决的问题。
- `good first issue` 很适合新人贡献者上手的小问题。
- `Someone working on it` 该任务已经有人跟进了，不要重复开发。
- `wontfix` 这将不会被处理。
- `question` 需要提供进一步的信息。
- `invalid` 无效的问题。
- `duplicate` 重复的问题。
- `enhancement` 新增功能。
- `documentation` 文档相关。
- `dependencies` 依赖更新。
- `Need Changelog` 需要生成 changelog（打上该标签后 bot 会自动添加相关操作指引评论）。
- `site` 关于网站的一些问题。
