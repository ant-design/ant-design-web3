---
nav: 课程
group:
  title: DApp 是什么？
order: 3
---

# DApp 如何调用智能合约

我们以 Ethereum 举例，当智能合约被部署到区块链上后，我们可以通过构建以太坊交易（Transaction），调用合约中的相应方法，前提是知道合约的 ABI 文件和合约的 HASH 地址。

<!-- prettier-ignore -->
:::info
ABI 是 Application Binary Interface 的缩写，是一种二进制接口标准，用于定义智能合约的函数和参数，合约 HASH 是合约在区块链上的地址，它们都可以在部署智能合约时获得。
:::

调用 DApp 调用合约方法一般有两种方式：通过钱包插件连接、通过节点 RPC 直接连接，我们主要介绍第一种方式。

## 通过 MetaMask 钱包

[MetaMask](https://metamask.io/) 是目前以太坊生态中用户最多的钱包插件，它提供了一个简单的方式，让用户在浏览器中管理自己的以太坊资产，同时也是 DApp 与以太坊网络交互的桥梁。如果你还没有使用过，可以在[这里下载](https://metamask.io/download/)安装，并参考官网的教程完成初始的配置。

![metamask](./img/metamask.png)

MetaMask 钱包安装完成后，我们可以在浏览器的右上角看到 MetaMask 的图标，同时它也会给每一个页面注入 `window.ethereum` 对象，这个对象是 DApp 与以太坊网络交互的接口，我们可以通过它来调用以太坊的 API。比如我们可以可以发起一个 `eth_chainId` 的 RPC 请求，获取当前网络的 ID：

```js
await window.ethereum.request({ method: 'eth_chainId' }); // 0x1 代表以太坊主网
```

我们也可以通过下面这段代码，获取当前钱包的账户地址和其他信息：

```js
async function getAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((err) => {
    if (err.code === 4001) {
      // EIP-1193 userRejectedRequest error
      // If this happens, the user rejected the connection request.
      console.log('Please connect to MetaMask.');
    } else {
      console.error(err);
    }
  });
  const account = accounts[0];
  return account;
}

await getAccount(); // 你的账户地址
```

更多的钱包 RPC 和 API 可以参考 [MetaMask 官方文档](https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods)。

<!-- prettier-ignore -->
:::info
直接使用 js 访问钱包是复杂且容易出错的，我们推荐在项目中使用 [Ant Design Web3](./dev-init.zh-CN.md)，让 DApp 开发更方便。
:::

## 通过节点 RPC

通过前面的学习，我们了解到区块链是一个去中心化的网络，我们可以通过访问其中一个节点来获取数据。以太坊网络中有很多节点，我们可以通过 [ZAN](https://zan.top/?chInfo=ch_antdweb3)、[Infura](https://infura.io/) 等节点服务提供商来获取 RPC 接口。

在 ZAN.top 提供的[文档](https://docs.zan.top/reference/eth-accounts)中，我们可以方便的测试 RPC，以及通过 RPC 调用智能合约的方法。

![zan](./img/zan-api-doc.png)

## 总结

通过本节的学习，我们了解到了 DApp 如何调用智能合约，以及如何通过钱包插件和节点 RPC 来连接以太坊网络，获取数据和调用智能合约的方法。接下来我们通过一个实战项目来学习如何构建 DApp 的前端用户界面。
