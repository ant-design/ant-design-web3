---
nav: 课程
group:
  title: DApp 是什么？
order: 4
---

# 与 Solana 合约交互

DApp 与区块链合约的交互是 DApp 的核心功能之一。实现这一点并不困难，但是需要写一些逻辑。在这个示例中，我们将演示如何使用 Ant Design Web3 连接 Solana 网络，并调用 Memo 合约。

Memo Program 是 Solana 上的一个示例程序，它是一个简单的合约，用于在交易中添加备注信息。你可以在这里找到它的文档：[Memo Program | Solana Program Library Docs](https://spl.solana.com/memo)。

我们接下来通过两种方式来演示如何与 Solana 合约交互：

1. 不使用钱包，直接调用合约
2. 使用钱包调用合约

无论使用哪种方式，都需要用到 `@solana/web3.js`，一个 Solana 官方提供的，用于与 Solana 区块链进行交互的 JavaScript 库。我们这里使用 1.x 版本，相比最新版本，它使用起来简单一些，对于我们这个例子来说也足够了。

<NormalInstallDependencies packageNames="@solana/web3.js@1" save="true"></NormalInstallDependencies>

## 直接调用合约

所谓的直接调用合约，是指不使用钱包，而是直接使用私钥来签署交易。这种方式适用于一些简单的场景，比如在测试网络上进行一些调试。

<code src="./demos/solana-tx.tsx"></code>

在上面的代码中，我们并没有使用任何 `@ant-design/web3-solana` 中的内容，实际调用位于 `writeMemo` 函数。

在其中，我们先使用 Keypair 生成了一个密钥对，其中包含公钥和私钥。当然，由于我们并没有使用它进行过交互，所以它实际上就仅仅是一组数值而已，并没有实际的意义。

> 你可以将 writeMemo 中除了生成密钥对的代码注释掉，然后在浏览器控制台查看生成的公钥，并在区块链浏览器上查看这个公钥的信息。或者也可以查看这个地址： [61QgmBmUw1Nekq7wGXtA7CCETUcbmTBJPjDWGLSrPqRK](https://solscan.io/account/61QgmBmUw1Nekq7wGXtA7CCETUcbmTBJPjDWGLSrPqRK)
>
> 会发现页面上显示的数据并没有什么异常的地方，因为它确实是一个合法的、位于椭圆曲线上的公钥。

继续往下，由于刚生成的密钥对中并没有任何余额，所以我们需要从测试网的水龙头获取一些测试币。这里我们使用了 `requestAirdrop` 方法，它会向指定的地址发送一些测试币。

接着我们使用 `confirmTransaction` 方法来确认交易是否成功。如果成功，我们就可以调用 Memo 合约了。

> 请求测试币和确认交易完成这一步并不是必须的，你可以使用自己已有的账户，只要确保账户中有足够的余额用于运行我们的示例代码即可。
>
> 🛑 注意：请不要在任何网站上随意输入自己的私钥！！！

好了，确保我们刚刚创建的账户中有足够的余额后，我们就可以调用 Memo 合约了。

在 Solana 中，一个交易可以包含一条或多条指令，每条指令都是一个合约调用。我们当然可以只创建一个包含 memo 指令的交易。但是为了稍微有趣一些，让我们尝试在一条交易中执行两条指令：转账和写备忘。

继续往下看，我们先通过 `SystemProgram` 的 `transfer` 方法创建了一个转账指令，赋值给了 `transferInstruction`。然后通过创建 `TransactionInstruction` 对象，创建了一个指向 Memo 合约的指令，赋值给了 `memoInstruction`。

再然后，我们创建了一个 `Transaction` 对象，将这两个指令添加到了交易中。

在创建 transfer 指令时，我们使用了 `SystemProgram.transfer` 方法。由于转账是通过 Solana 提供的内置合约进行，并且它非常常用，所以 @solana/web3.js 直接提供了方法来方便我们调用。使用 transfer 时，我们需要提供支付方地址、接收方地址、转账金额等信息。

而在创建 memo 指令时，由于 @solana/web3.js 中没有提供对应的函数，所以我们选择手动构造转账指令对象。我们需要指明要调用的合约（Memo）的地址（[MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr](https://solscan.io/account/MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr?cluster=devnet)）、参与这条指令的公钥、以及要传递的数据（这里是一个字符串，但是转为了 Buffer）。注意：参与者账户必须是交易的签名者，所以 `isSigner` 值为 `true`。具体文档可以在这里找到：https://spl.solana.com/memo#operational-notes

最后，我们使用 `sendAndConfirmTransaction` 方法来发送交易。这个方法会将交易发送到网络，并等待确认。如果交易成功，它会返回一个 TransactionSignature 对象。实际上是一个字符串，表示交易的哈希值，我们可以通过它去区块链浏览器上查看交易的详情。

让我们点击【Send】按钮，运行一下代码，看看效果吧！

如果一切正常，你会看到控制台输出了交易哈希值，这意味着交易已经成功发送到了网络。你可以在 [Solana 区块链浏览器](https://solscan.io/?cluster=devnet) 上查看这笔交易的详情。

如有有地方失败了，可能是由于 RPC 用了太多次，导致触发了限流。你可以自己在[这里](https://zan.top/service/public-rpc/solana?chInfo=ch_antdweb3)注册并替换一个新的 RPC 地址，或者等待一段时间后再试。

## 使用钱包调用合约

<code src="./demos/solana-tx-with-wallet.tsx"></code>
