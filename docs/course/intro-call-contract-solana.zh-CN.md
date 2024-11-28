---
nav: 课程
group:
  title: DApp 是什么？
order: 4
---

# 与 Solana 合约交互

DApp 与区块链合约的交互是 DApp 的核心功能之一。实现这一点并不困难，但是需要写一些逻辑。在这个示例中，我们将演示如何使用 Ant Design Web3 连接 Solana 网络，并调用 Memo 合约。

Memo Program 是 Solana 上的一个示例程序，它是一个简单的合约，用于在交易中添加备注信息。

我们接下来通过两种方式来演示如何与 Solana 合约交互：

1. 不使用钱包，直接调用合约
2. 使用钱包调用合约

无论使用哪种方式，都需要用到 `@solana/web3.js`，一个 Solana 官方提供的，用于与 Solana 区块链进行交互的 JavaScript 库。

<NormalInstallDependencies packageNames="@solana/web3.js" save="true"></NormalInstallDependencies>

## 直接调用合约

<code src="./demos/solana-tx.tsx"></code>

## 使用钱包调用合约

<code src="./demos/solana-tx-with-wallet.tsx"></code>
