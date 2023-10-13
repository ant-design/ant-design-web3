---
nav: Guide
group: Basic
---

# Quick Start

<!-- prettier-ignore -->
:::warning
Ant Design Web3 is still in *ALPHA*, and we are continuously improving it. If you have any suggestions, please feel free to provide them to us through [Github Issue](https://github.com/ant-design/ant-design-web3/issues).
:::

## Install Dependencies

You can install the necessary dependencies using package management tools such as `npm` or `pnpm`. Here's an example:

```shell
npm i @ant-design/web3 @ant-design/web3-ethereum --save
```

## Using UI Components

`@ant-design/web3` is a pure UI component library that you can directly use. For example, you can use the `BrowserLink` component:

```tsx | pure
import { BrowserLink } from '@ant-design/web3';

export default () => {
  return <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />;
};
```

## Connecting to the Blockchain

You can also connect certain UI components to the blockchain by importing the `Web3Provider` from `@ant-design/web3-ethereum`. The following example demonstrates how to display an NFT image using the `NFTImage` component.

```tsx | pure
import { Web3Provider, createProvider, ZANJsonRpcProvider } from '@ant-design/web3-ethereum';
import { NFTImage } from '@ant-design/web3';

const provider = createProvider({
  rpcs: [
    new ZANJsonRpcProvider({
      apiKey: 'd0eeefc2a4da4a8ba707889259b437d6',
    }),
  ],
});

export default () => {
  return (
    <Web3Provider provider={provider}>
      <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42} />
    </Web3Provider>
  );
};
```
