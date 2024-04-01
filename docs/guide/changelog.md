---
nav: changelog
group:
  title: Others
  order: 4
---

# How to add Changelog

## What changes need a Changelog?

Modified files under `packages`

- @ant-design/web3-assets
- @ant-design/web3-common
- @ant-design/web3-icons
- @ant-design/web3-solana
- @ant-design/web3-wagmi
- @ant-design/web3

## How to generate changelog

1. First of all, you need to run the command:

<NormalCommand command="changeset"></NormalCommand>

```
MacBook-Pro ant-design-web3 % pnpm changeset

> @ant-design/web3-docs@0.0.0 changeset ant-design-web3
> changeset
```

2. Select the modified package by space and press enter to confirm。

```
🦋  Which packages would you like to include? …
◉ changed packages
  ◉ @ant-design/web3
◯ unchanged packages
  ◯ @ant-design/web3-assets
  ◯ @ant-design/web3-common
  ◯ @ant-design/web3-icons
  ◯ @ant-design/web3-solana
  ◯ @ant-design/web3-wagmi
```

```
🦋  Which packages would you like to include? · @ant-design/web3
🦋  Which packages should have a major bump? …
◯ all packages
  ◯ @ant-design/web3@1.9.0
```

3. At this point, we should skip it with a carriage return. For bugfixes in general, we select the last `patch` version, and we select `minor` for newer features.。

```
🦋  Which packages should have a major bump? · No items were selected
🦋  Which packages should have a minor bump? · No items were selected
🦋  The following packages will be patch bumped:
🦋  @ant-design/web3@1.9.0
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary ›
```

4. As a final step, we submit message in the `Summary` that conforms to [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

```
🦋  Summary › feat: support more icons
```
