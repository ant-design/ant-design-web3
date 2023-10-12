---
nav: Guide
group:
  title: Advance
  order: 2
---

# Using with SDKs

The Provider created by `createProvider` in `@ant-design/web3-ethereum` conforms to the EIP1193 specification, allowing you to easily integrate it with various popular blockchain SDKs. For example, you can combine it with `ethers.js` as follows:

```typescript
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
