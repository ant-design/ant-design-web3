---
nav: 课程
group:
  title: 开发智能合约
order: 2
---

# 合约开发和测试

### 开发合约

[OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/) 的模板合约所需版本为`^0.8.20`，因此编译器需要设置为 `0.8.20` 及以上的版本。  
我们简单实现一个 tokenId 自增的功能，并把 initialOwner 传为合约发行人

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721, Ownable {
+    uint256 private _nextTokenId;

-    constructor(address initialOwner)
+    constructor()
        ERC721("MyToken", "MTK")
-        Ownable(initialOwner)
+        Ownable(msg.sender)
    {}

-    function safeMint(address to, uint256 tokenId) public onlyOwner {
+    function safeMint(address to) public onlyOwner {
+        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
}
```

简单学习下这个合约文件

1. `pragma solidity ^0.8.20;` 标注好了合约文件要使用的版本
2. `import` 导入外部 sol 文件，导的 sol 文件和本身的 sol 文件相当于变成同一个 sol 合约
3. `contract MyToken is ERC721, Ownable {}` 表明定义的合约`MyToken`继承了引入的`ERC721`和`Ownable`合约
4. 然后定义了一个名为`_nextTokenId`类型为`uint256`合约私有变量`private`
5. 在构造器中我们传入了继承来的合约定义好的参数，为`ERC721`传入 token 的 name 和 symbol，Ownable 传合约调用者的地址。
6. 然后定义了`public`的对外开放的方法，需要传入类型为`address`的`to`参数，方法里执行，私有变量`_nextTokenId`的自增和合约私有方法`_safeMint()`
   > private 是指只有部署前合约里才能调用的方法和变量，public 方法和变量则是所有人都可以访问的

### 测试合约

1. 我们选择 Remix 的 VM 环境 点击 Deploy

Solidity 编译器插件也允许您更改一些设置并应用编译器的高级配置，在 Advanced Configurations 菜单中，您可以更改 EVM 版本、启用优化功能，并设置预计在合约生命周期内运行字节码的次数（默认设置为 200 次）。有关合约优化的更多信息，请参考[Optimizer 上的 Solidity 文档](https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options)。

> Remix 虚拟机带有 10 个账户，每个账户都有 100 个以太币。

在本示例中，无需额外的配置。要编译 MyToken.sol 合约，只需点击 Compile MyToken.sol 合约。如果编译成功，您可以在 Solidity compiler 插件旁的插件面板中出现绿色的完成标记。

![](./img/test.jpeg)

2. 在更真实的区块链环境中，您需要批准交易，然后等待交易被打包和确认。然而，由于我们使用的是 Remix VM ，将立即执行。  
   终端将提供有关交易的信息。  
   新创建的实例显示在已部署合约部分。

可以愉快的测试合约方法啦  
返回值会显示在方法名按钮的正下方。

![](./img/testSend.png)

那如果不想使用在线 IDE 的方式，也可以考虑使用[hardhat](https://github.com/NomicFoundation/hardhat)  
hardhat 是可以在本地运行开发测试部署的框架,也有丰富的[插件列表](https://hardhat.org/plugins/)  
要安装 Hardhat，转到一个空文件夹，初始化一个`npm`项目 (即`npm init`) ，然后运行

```
npm install --save-dev hardhat
```

从 CLI 运行 Hardhat 时:

```
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.0.8

? What do you want to do? …
❯ Create a sample project
  Create an empty hardhat.config.js
  Quit
```

如果对本地开发更感兴趣，我们会续也会出很详细的教程文档。
