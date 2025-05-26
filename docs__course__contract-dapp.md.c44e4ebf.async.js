"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6880],{49823:function(a,t,n){n.r(t);var s=n(52365),u=n(64967),c=n(68795),m=n(34916),p=n(31732),o=n(16028),h=n(77593),g=n(81686),v=n(2721),x=n(42819),w=n(66025),b=n(36458),E=n(25382),f=n(87492),D=n(98712),I=n(62182),C=n(7825),M=n(82750),d=n(44512),i=n(8136),r=n(1735),_=n(92241),e=n(72152);function l(){return(0,e.jsx)(d.DumiPage,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"contract-and-dapp-integration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#contract-and-dapp-integration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Contract and DApp Integration"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsxs)("h2",{id:"integrate-dapp",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#integrate-dapp",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Integrate DApp"]}),(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsx)("p",{children:_.texts[2].value}),(0,e.jsx)(o.Z,{lang:"diff",children:_.texts[3].value}),(0,e.jsxs)("p",{children:[_.texts[4].value,(0,e.jsx)("code",{children:_.texts[5].value}),_.texts[6].value]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{alt:"",src:n(14953)})}),(0,e.jsxs)("p",{children:[_.texts[7].value,(0,e.jsx)("code",{children:_.texts[8].value}),_.texts[9].value,(0,e.jsx)("code",{children:_.texts[10].value}),_.texts[11].value]}),(0,e.jsxs)("h2",{id:"complete-example",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#complete-example",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Complete example"]}),(0,e.jsx)("p",{children:_.texts[12].value})]}),(0,e.jsx)(d.DumiDemo,{demo:{id:"docs-course-contract-dapp-demo-dapp"},previewerProps:{filename:"docs/course/demos/dapp.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[_.texts[13].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3-demo",children:_.texts[14].value}),_.texts[15].value]}),(0,e.jsx)("p",{children:_.texts[16].value})]})]})})})}t.default=l},92241:function(a,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"In this section, we will integrate the DApp developed in Chapter 2 with the contract deployed in this chapter to complete a complete DApp development task.",paraId:0,tocIndex:0},{value:"In the DApp developed in the previous chapter, there is already a page that can call the contract. We only need to fill in the address of this contract in the DApp to call this contract.",paraId:1,tocIndex:1},{value:"In addition to the address, we also need to switch to the testnet. The specific code is as follows:",paraId:2,tocIndex:1},{value:`import { http, useReadContract, useWriteContract } from "wagmi";
import {
  WagmiWeb3ConfigProvider,
  MetaMask,
+  Mainnet,
+  Sepolia,
} from "@ant-design/web3-wagmi";
import {
  Address,
  NFTCard,
  Connector,
  ConnectButton,
  useAccount,
} from "@ant-design/web3";
import { injected } from "wagmi/connectors";
import { Button, message } from "antd";
import { parseEther } from "viem";

- const CONTRACT_ADDRESS = "0xEcd0D12E21805803f70de03B72B1C162dB0898d9";
+ const CONTRACT_ADDRESS = "0x81BaD6F768947D7741c83d9EB9007e1569115703"; // use your own contract address

const CallTest = () => {
  const { account } = useAccount();
  const result = useReadContract({
    abi: [
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ name: "account", type: "address" }],
        outputs: [{ type: "uint256" }],
      },
    ],
    address: CONTRACT_ADDRESS,
    functionName: "balanceOf",
    args: [account?.address as \`0x\${string}\`],
  });
  const { data: hash, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  useEffect(() => {
    if (isConfirmed) {
      message.success("Mint Success");
      result.refetch();
    }
  }, [isConfirmed]);

  return (
    <div>
      {result.data?.toString()}
      <Button
        loading={isConfirming}
        onClick={() => {
          writeContract(
            {
              abi: [
                {
                  type: "function",
                  name: "mint",
                  stateMutability: "payable",
                  inputs: [
                    {
                      internalType: "uint256",
                      name: "quantity",
                      type: "uint256",
                    },
                  ],
                  outputs: [],
                },
              ],
              address: CONTRACT_ADDRESS,
              functionName: "mint",
              args: [BigInt(1)],
              value: parseEther("0.01"),
            },
            {
              onError: (err) => {
                message.error(err.message);
              },
            }
          );
        }}
      >
        mint
      </Button>
    </div>
  );
};

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider
       eip6963={{
         autoAddInjectedWallets: true,
       }}
+      chains={[Mainnet, Sepolia]}
       transports={{
         [Mainnet.id]: http(),
+        [Sepolia.id]: http(),
      }}
      wallets={[MetaMask()]}
    >
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard
        address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9"
        tokenId={641}
      />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
};

`,paraId:3,tocIndex:1},{value:"Switch to the Sepolia testnet in the DApp page, and if you click the ",paraId:4,tocIndex:1},{value:"mint",paraId:4,tocIndex:1},{value:" button, the MetaMask transaction confirmation pop-up window will be triggered if everything goes well:",paraId:4,tocIndex:1},{value:"After the transaction is online, and you will find that the previous ",paraId:5,tocIndex:1},{value:"balanceOf",paraId:5,tocIndex:1},{value:" result has become ",paraId:5,tocIndex:1},{value:"1",paraId:5,tocIndex:1},{value:", which means that you have successfully minted an NFT. Of course, a truly good DApp will add events to the smart contract, listen to contract events on the front end, and then automatically update the results. But we will not introduce the event part in this introductory course.",paraId:5,tocIndex:1},{value:"The following is the complete example of the course:",paraId:6,tocIndex:2},{value:"You can also refer to the GitHub project source code ",paraId:7},{value:"https://github.com/ant-design/ant-design-web3-demo",paraId:7},{value:".",paraId:7},{value:"So far, we have completed all the content of this course, I hope you can learn something from it, thank you all! \u{1F389}",paraId:8}]},14953:function(a,t,n){a.exports=n.p+"static/mint-test-net.b0eee6ca.png"}}]);
