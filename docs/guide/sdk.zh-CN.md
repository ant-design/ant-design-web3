---
nav: 指南
group:
  title: 高级
  order: 2
---

# 和 SDK 一起使用

`@ant-design/web3-ethereum` 中的 `createProvider` 创建出来的 Provider 满足 EIP1193 的规范，你可以很方便的和各种流行的区块链 SDK 结合使用。比如和 `ethers.js` 结合使用如下：

```tsx | pure
import { createProvider } from '@ant-design/web3-ethereum';
import { ethers } from 'ethers';

const provider = createProvider({
  rpcs: [
    new ZANJsonRpcProvider({
      apiKey: 'd0eeefc2a4da4a8ba707889259b437d6',
    }),
  ],
});

const etherProvider = new ethers.BrowserProvider(provider);
```
