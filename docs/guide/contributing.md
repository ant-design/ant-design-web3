---
nav: Contributing
group:
  title: Others
  order: 3
---

# Contributing

## Open Development

All work on Ant Design Web3 happens directly on [GitHub](https://github.com/ant-design/ant-design-web3). Both core team members and external contributors send pull requests which go through the same review process.

## How to Contribute

**When submitting a PR, please execute `pnpm changeset` to generate the changelog first, and then submit the PR.** We manage version releases through [changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md). Executing this command will generate changelog files under `.changeset`, and these files will be automatically merged into `CHANGELOG.md` when released. But not every PR needs a changelog, for example, PRs that do not involve package content modifications such as documents and official websites do not need to execute this command. For more changesets usage guide, please refer to: [How to add Changelog](https://web3.ant.design/guide/changelog).

### Contribute Code

Go to [issues](https://github.com/ant-design/ant-design-web3/issues) to find issues marked with `development task` and `bug` labels, assign them to yourself, and complete the development as soon as possible within **three days** and submit a PR. Except for bugs, all development tasks should be split into small tasks that can be completed within one hour or one day. Assigning an issue to yourself means claiming the task, please make sure you understand the task before claiming it, and if you have any questions, you can discuss it in the issue. Also try to arrange time reasonably to ensure that you can submit a high-quality PR within three days. PR needs to be assigned to the core development members, and can be merged after at least one person approves (Approved).

Novices can first look for issues with the `good first issue` label, and issues with the `help wanted` label need more participation from the community.

### Bugs

We are using [GitHub Issues](https://github.com/ant-design/ant-design-web3/issues) for bug tracking. To report a bug, submit a new issue. If you want a quick resolution to the bug you've discovered, please provide a specific reproduction example.

Before reporting a bug, please search existing [issues](https://github.com/ant-design/ant-design-web3/issues) to see if it has already been reported.

### Features

Create a new issue to track the clear feature, and add the `feature` label. Before development, the task needs to be split. **Ensure that the split of each task can be completed within one hour or one day.** Create a separate issue for each split task and associate it, and add the `development task` label to facilitate multi-person collaboration. If the feature is small, you may not need to split it, and directly add the `development task` label. Adding the `development task` label means that no further discussion is needed and you can go directly to development. If the split task is not clear, please discuss it in the issue. If the entire feature is not clear, please close the issue and refer to the instructions below to discuss in the discussion.

For unclear features and proposals that need to be discussed, please create a discussion in the [discussion](https://github.com/ant-design/ant-design-web3/discussions).

## How to Release

The release is responsible by the core members, and one version is released every week. If there is an urgent bug fix, it can be released at any time. The release complies with the [Semver](https://semver.org/) specification.

The release is published by executing `pnpm run release`, which will first execute `changeset version` to merge the changelog under `.changeset` into `CHANGELOG.md` and update the version of the package. Then execute `changeset publish` to publish to npm and add the corresponding tag.

After the release, the related modifications are submitted to the main branch, and the corresponding tag also needs to be pushed to GitHub. A [Release](https://github.com/ant-design/ant-design-web3/releases/new) is created based on the tag of the new version of `@ant-design/web3`.

If it is an alpha or beta version, please execute `pnpm run release:alpha` or `pnpm run release:beta` to release.

## Core Members

The core members are adjusted irregularly according to their activities. PRs must be **reviewed and approved by at least one core member** before merged. The issues in the discussion area also need to be confirmed by at least two core members before they can be converted into development tasks.

The current core members are:

- [@yutingzhao1991](https://github.com/yutingzhao1991)
- [@kiner-tang](https://github.com/kiner-tang)
- [@jeasonstudio](https://github.com/jeasonstudio)
- [@gin-lsl](https://github.com/gin-lsl)
- [@liangchaofei](https://github.com/liangchaofei)
- [@thinkasany](https://github.com/thinkasany)

Design-related issues can @ our designers:

- [@wenqing993](https://github.com/wenqing993)

## Labels

- `feature` Independent new features.
- `bug` Defects or bugs.
- `development task` The development workload can be completed within one hour or one day, and no further discussion is required. The task can be directly developed.
- `help wanted` Problems that need the community to help solve.
- `good first issue` Small problems that are very suitable for new contributors to get started.
- `Someone working on it` Someone is already working on this issue, please don't repeat it.
- `wontfix` This will not be fixed.
- `question` More information is needed.
- `invalid` Invalid issue.
- `duplicate` Duplicate issue.
- `enhancement` New feature.
- `documentation` Documentation related.
- `dependencies` Dependency related.
- `Need Changelog` Need to generate changelog (after adding this label, the bot will automatically add relevant operation instructions comments).
- `site` Some issues about the website.
