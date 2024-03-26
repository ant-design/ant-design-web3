---
nav: Course
group:
  title: Develop DApp
order: 2
---

# Connect to blockchain

## Overview

In this part of the course, we will guide you to connect the DApp to the blockchain through the wallet and the blockchain. We will take Ethereum as an example to connect to the blockchain and obtain the user's account information.

## Install dependencies

First, similar to the [Quick Start](../guide/quick-start.md) documentation guide, we need to install some dependencies. In the previous course, we have installed `antd` and `@ant-design/web3`, so we only need to install `@ant-design/web3-wagmi` and `wagmi` next.

```shell
npm i @ant-design/web3-wagmi wagmi viem @tanstack/react-query --save
```

`@ant-design/web3` is a UI component library, which connects to different blockchains through different [adapters](../guide/adapter.md). In this course, we mainly use [Ethereum](https://ethereum.org/) as an example. Correspondingly, we will also use the [adapter of Ethereum](../../packages/web3/src/wagmi/index.md) to implement the requirements of the course.

> [wagmi](https://wagmi.sh/) is an open source React Hooks library that serves Ethereum. The adapter `@ant-design/web3-wagmi` of Ant Design Web3 is based on it. In the later part of this course, unless otherwise specified, the adapter mentioned refers to `@ant-design/web3-wagmi`.

## Configure the adapter

The configuration of the adapter directly uses the [official configuration of wagmi](https://wagmi.sh/core/getting-started). For actual projects, you usually need to configure the JSON RPC address and various wallets. In this course, we will first use the simplest configuration, and then guide you to understand the configuration you need in your actual project.

First, please continue to edit the `pages/web3.tsx` file and introduce the content you need:

```diff
+ import { createConfig, http } from 'wagmi';
+ import { mainnet } from 'wagmi/chains';
+ import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Address } from "@ant-design/web3";

export default function Web3() {
  return (
    <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
  );
};
```

The introduction of the content is as follows:

- [createConfig](https://wagmi.sh/react/config): wagmi is used to create the method of configuration.
- [http]: wagmi is used to create the method of [HTTP JSON RPC](https://wagmi.sh/core/api/transports/http) connection. Through it, you can access the blockchain through HTTP request.
- [mainnet](https://wagmi.sh/react/chains): represents the Ethereum mainnet. In addition to `mainnet`, there will be other testnets similar to `goerli` and other EVM-compatible public chains similar to `bsc` and `base`. Some are L1 public chains like Ethereum, and some are L2 public chains. We will not go into details here.
- [WagmiWeb3ConfigProvider](https://web3.ant.design/components/wagmi#wagmiweb3configproviderprops): Ant Design Web3 is the Provider used to receive wagmi configuration.

Then create the configuration:

```diff
import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { Address } from "@ant-design/web3";

+ const config = createConfig({
+   chains: [mainnet],
+   transports: {
+     [mainnet.id]: http(),
+   },
+ });

export default function Web3() {
  return (
+     <WagmiWeb3ConfigProvider config={config}>
      <div
        style={{
          height: "100vh",
          padding: 64,
        }}
      >
        <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      </div>
+    </WagmiWeb3ConfigProvider>
  );
};

```

In this way, we have completed the basic configuration of wagmi, and then we can use Ant Design Web3 components to obtain data on the chain.

Let's us try the `NFTCard` component.

```diff
import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
- import { Address } from "@ant-design/web3";
+ import { Address, NFTCard } from "@ant-design/web3";

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <div
        style={{
          height: "100vh",
          padding: 64,
        }}
      >
         <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
+        <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      </div>
    </WagmiWeb3ConfigProvider>
  );
};
```

`NFTCard` is a component that displays NFT information. We will use it to display the NFT information of the address `0xEcd0D12E21805803f70de03B72B1C162dB0898d9` and the token ID `641`.

Result:

![](./img/nft-card.png)

Please check your network if the result is not displayed.

## Config wallet

In the previous section, we have successfully connected to the blockchain and obtained the data on the chain. However, we can see that the address displayed in the `Address` component is `0xEcd0D12E21805803f70de03B72B1C162dB0898d9`, which is not the address of the current wallet. In this section, we will guide you to connect to the wallet and obtain the address of the current wallet.

We use [MetaMask](https://metamask.io/) as an example to see how to configure the wallet.

```diff

import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
- import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
+ import { WagmiWeb3ConfigProvider, MetaMask } from "@ant-design/web3-wagmi";
- import { Address, NFTCard } from "@ant-design/web3";
+ import { Address, NFTCard, Connector, ConnectButton } from "@ant-design/web3";
+ import { injected } from "wagmi/connectors";

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
+   connectors: [
+     injected({
+       target: "metaMask",
+     }),
+   ],
});

export default function Web3() {
  return (
-   <WagmiWeb3ConfigProvider config={config}>
+    <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard
        address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9"
        tokenId={641}
      />
+       <Connector>
+         <ConnectButton />
+       </Connector>
    </WagmiWeb3ConfigProvider>
  );
};


```

The full code is as follows:

<code src="./demos/connect.tsx"></code>

The result is as follows:

![](./img/connect.png)

You can try to refer to [this document](../../packages/web3/src/wagmi/index.md#add-more-wallets) to configure support for more wallets.
