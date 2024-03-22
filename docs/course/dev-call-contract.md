---
nav: Course
group:
  title: Develop DApp
order: 3
---

# Call contract

## Overview

In this course, you will be guided to call a real contract in DApp. We will take Ethereum as an example and call the contract of an NFT [0xEcd0D12E21805803f70de03B72B1C162dB0898d9](https://etherscan.io/address/0xEcd0D12E21805803f70de03B72B1C162dB0898d9).

Contract [0xEcd0D12E21805803f70de03B72B1C162dB0898d9](https://etherscan.io/address/0xEcd0D12E21805803f70de03B72B1C162dB0898d9) is a contract of NFT project [OurMetaverse](https://our-metaverse.xyz/). It is a contract that conforms to the [ERC721](https://ethereum.org/developers/docs/standards/tokens/erc-721) standard. We try to call its `totalSupply` method to get how many NFTs this contract has issued.

## Configure node service

Because we only need to read the contract data and do not need to modify the contract data. So we don't need to initiate a transaction to the blockchain, that is, we don't need to consume tokens as [GAS](https://ethereum.org/developers/docs/gas). But we need a node to help us read the contract data. In the Web3 ecosystem, there are many vendors that provide node services, and you can choose your favorite node service. Here is an example of [ZAN's node service](https://zan.top/home/node-service?chInfo=ch_antdweb3) to guide you on how to configure the node service.

First register and log in to [https://zan.top](https://zan.top?chInfo=ch_antdweb3) and then enter the node service console [https://zan.top/service/apikeys](https://zan.top/service/apikeys?chInfo=ch_antdweb3) to create a Key. Each Key has a default free quota, which is enough for micro projects, but for production environment projects, please purchase node services according to the actual situation.

After the creation is successful, you will see the following page:

![](./img/zan-service.png)

Select the node service address of the Ethereum mainnet and copy it. The copied address is added to the `http()` method of wagmi, as follows:

```diff
const config = createConfig({
  chains: [mainnet],
  transports: {
-    [mainnet.id]: http(),
+    [mainnet.id]: http('https://api.zan.top/node/v1/eth/mainnet/{YourZANApiKey}'),
  },
  connectors: [
    injected({
      target: "metaMask",
    }),
  ],
});
```

The `YourZANApiKey` in the above code needs to be replaced with your own Key. In addition, in the actual project, in order to avoid your Key being abused, it is recommended that you put the Key in the backend service, and then call the node service through the backend service, or set the domain name whitelist in the ZAN console to reduce the risk of abuse. Of course, in the tutorial, you can continue to use `http()` to use the built-in default experimental node service of wagmi.

### Call contract method in read mode

After configuring the node service, we can start calling the contract. We use the [useReadContract](https://wagmi.sh/react/api/hooks/useReadContract) Hook provided by wagmi to read the contract data. The sample code is as follows:

```diff
- import { createConfig, http } from "wagmi";
+ import { createConfig, http, useReadContract } from "wagmi";
import { mainnet } from "wagmi/chains";
import { WagmiWeb3ConfigProvider, MetaMask } from "@ant-design/web3-wagmi";
- import { Address, NFTCard, Connector, ConnectButton } from "@ant-design/web3";
+ import { Address, NFTCard, Connector, ConnectButton, useAccount } from "@ant-design/web3";
import { injected } from "wagmi/connectors";

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: "metaMask",
    }),
  ],
});

+ const CallTest = () => {
+  const { account } = useAccount();
+  const result = useReadContract({
+    abi: [
+      {
+        type: 'function',
+        name: 'balanceOf',
+        stateMutability: 'view',
+        inputs: [{ name: 'account', type: 'address' }],
+        outputs: [{ type: 'uint256' }],
+      },
+    ],
+    address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
+    functionName: 'balanceOf',
+    args: [account?.address as `0x${string}`],
+   });
+   return (
+     <div>{result.data?.toString()}</div>
+   );
+ }

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard
        address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9"
        tokenId={641}
      />
      <Connector>
        <ConnectButton />
      </Connector>
+      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
};

```

Refer to the above code to add the `balanceOf` method of the contract. We created a `CallTest` component, and then added this component in `WagmiWeb3ConfigProvider`. Because `useReadContract` must work inside `WagmiWeb3ConfigProvider`, we cannot use `useReadContract` directly below the `export default function Web3() {` line of code. In the actual project, `WagmiWeb3ConfigProvider` should usually be at the outermost layer of your project component, so that all components of your project can use related Hooks normally.

`BalanceOf` is a method used to get how many NFTs of this contract are under an address. So we also need to use the `useAccount` Hook provided by `@ant-design/web3` to get the address of the current connected account. Then pass the account address as the parameter of the `balanceOf` method, so that you can get how many NFTs are under the current account address. If nothing unexpected happens, you will get the result of `0`.

`abi` in the code defines the type of the method, so that wagmi can know how to handle the input parameters and returns of the method, and convert the JavaScript object into blockchain transaction information. Usually abi is automatically generated through contract code, we will talk about this part in the next chapter.

### Call contract method in write mode

Only reading the contract is not enough. A real DApp will definitely involve writing data to the smart contract. Writing data to the smart contract is usually done by executing the smart contract method on the blockchain, and the method execution process will modify the data in the contract.

Next, we will try to call the [mint](https://etherscan.io/address/0xEcd0D12E21805803f70de03B72B1C162dB0898d9#writeContract#F6) method of the contract used in the next course. The `mint` method is not a method in the ERC721 specification, it is defined by the contract itself. In this contract, calling the `mint` method requires consuming GAS and at least `0.01ETH` to obtain NFT.

The code that needs to be modified is as follows:

```diff
- import { createConfig, http, useReadContract } from "wagmi";
+ import { createConfig, http, useReadContract, useWriteContract } from "wagmi";
+ import { Button, message } from "antd";
+ import { parseEther } from "viem";

// ...

const CallTest = () => {

// ...
+ const { writeContract } = useWriteContract();

  return (
    <div>
      {result.data?.toString()}
+      <Button
+        onClick={() => {
+          writeContract(
+            {
+              abi: [
+                {
+                  type: "function",
+                  name: "mint",
+                  stateMutability: "payable",
+                  inputs: [
+                    {
+                      internalType: "uint256",
+                      name: "quantity",
+                      type: "uint256",
+                    },
+                  ],
+                  outputs: [],
+                },
+              ],
+              address: "0xEcd0D12E21805803f70de03B72B1C162dB0898d9",
+              functionName: "mint",
+              args: [1],
+              value: parseEther("0.01"),
+            },
+            {
+              onSuccess: () => {
+                message.success("Mint Success");
+              },
+              onError: (err) => {
+                message.error(err.message);
+              },
+            }
+          );
+        }}
+      >
+        mint
+      </Button>
    </div>
  );
};

// ...

```

In the above code, we used the `viem` library, which is a library that `wagmi` depends on at the bottom layer. You need to install it in the project:

```bash
npm install viem
```

In the above code, we implemented the `mint` method of the contract after clicking the `mint` button, passing in the parameter `1`. In the implementation logic of the contract, this means that an NFT is to be minted. Since the price of each NFT minted is `0.01 ETH`, we also need to send a fee of `0.01 ETH` in the transaction, so that we can successfully mint the NFT. So the above code will configure `value: parseEther("0.01")` in the contract call. In the execution of the contract method in Ethereum, the contract cannot directly extract the ETH of the caller, so we need to actively send ETH to the contract when calling the contract, which is a consideration of the contract security design.

Contract calls will have corresponding prompts for success and failure. If the account is not connected, an error of unconnected account will be thrown. So you need to click the connection button we implemented in the previous course to connect your account address. If your account has enough ETH, then click After that, a similar authorization pop-up window will appear:

![](./img/call-contract.png)

Click **Reject**, the contract call will not be executed, and your ETH will not be consumed. In the next chapter, we will guide you to deploy a test contract and experience the complete process in the test environment. Of course, if you are very rich, you can also click OK, so that the contract call will be executed, your ETH will be consumed, and you will get an NFT.

Full code:

<code src="./demos/call-contract.tsx"></code>
