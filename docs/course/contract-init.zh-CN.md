---
nav: 课程
group:
  title: 开发智能合约
  order: 3
order: 1
---

# 初始化合约

<!-- prettier-ignore -->
:::warning
课程编写中，欢迎给我们提建议或者直接提 PR。
:::

### 打开 Remix

> [Remix](https://remix.ethereum.org)是一个集成开发环境（IDE），用于在以太坊和以太坊兼容链上开发智能合约。它提供了一个易于使用的界面，供开发者编写、编译和部署智能合约。

![](./img/remix.png)

### 新建一个项目

> [ERC721](https://eips.ethereum.org/EIPS/eip-721)（Ethereum Request for Comments 721），由 William Entriken、Dieter Shirley、Jacob Evans、Nastassia Sachs 在 2018 年 1 月提出，是一个在智能合约中实现代币 API 的非同质化代币标准。  
> [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/)是一个用于安全智能合约开发的库，内置了很多常用合约的标准实现。

1. 点击左上角更多，创建，选择创建 OpenZeppelin 库的 ERC721

![](./img/create.png)

2. 然后我们勾选上 Mintable，点击 OK

![](./img/mintable.png)

3. 我们的合约就初始化好啦

![](./img/initCode.png)
