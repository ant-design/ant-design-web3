"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3797],{87693:function(s,t,e){e.r(t);var d=e(52365),l=e(64967),m=e(68795),c=e(34916),p=e(31732),i=e(16028),h=e(77593),x=e(81686),v=e(2721),g=e(42819),E=e(66025),b=e(36458),w=e(25382),D=e(87492),C=e(98712),f=e(62182),I=e(7825),M=e(82750),a=e(44512),o=e(8136),r=e(1735),n=e(41563),_=e(72152);function u(){return(0,_.jsx)(a.DumiPage,{children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)(o.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"\u5408\u7EA6\u548C-dapp-\u5BF9\u63A5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5408\u7EA6\u548C-dapp-\u5BF9\u63A5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5408\u7EA6\u548C DApp \u5BF9\u63A5"]}),(0,_.jsx)("p",{children:n.texts[0].value}),(0,_.jsxs)("h2",{id:"\u5BF9\u63A5-dapp",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5BF9\u63A5-dapp",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5BF9\u63A5 DApp"]}),(0,_.jsx)("p",{children:n.texts[1].value}),(0,_.jsx)("p",{children:n.texts[2].value}),(0,_.jsx)(i.Z,{lang:"diff",children:n.texts[3].value}),(0,_.jsxs)("p",{children:[n.texts[4].value,(0,_.jsx)("code",{children:n.texts[5].value}),n.texts[6].value]}),(0,_.jsx)("p",{children:(0,_.jsx)("img",{alt:"",src:e(14953)})}),(0,_.jsxs)("p",{children:[n.texts[7].value,(0,_.jsx)("code",{children:n.texts[8].value}),n.texts[9].value,(0,_.jsx)("code",{children:n.texts[10].value}),n.texts[11].value]}),(0,_.jsxs)("h2",{id:"\u5B8C\u6574\u793A\u4F8B",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B8C\u6574\u793A\u4F8B",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5B8C\u6574\u793A\u4F8B"]}),(0,_.jsx)("p",{children:n.texts[12].value})]}),(0,_.jsx)(a.DumiDemo,{demo:{id:"docs-course-contract-dapp-demo-dapp"},previewerProps:{filename:"docs/course/demos/dapp.tsx"}}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("p",{children:[n.texts[13].value,(0,_.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3-demo",children:n.texts[14].value}),n.texts[15].value]}),(0,_.jsx)("p",{children:n.texts[16].value})]})]})})})}t.default=u},41563:function(s,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"\u8FD9\u4E00\u8282\u6211\u4EEC\u4F1A\u5C06\u7B2C\u4E8C\u7AE0\u5F00\u53D1\u7684 DApp \u548C\u8FD9\u4E00\u7AE0\u90E8\u7F72\u7684\u5408\u7EA6\u5BF9\u63A5\u8D77\u6765\uFF0C\u5B8C\u6210\u4E00\u4E2A\u5B8C\u6574\u7684 DApp \u5F00\u53D1\u4EFB\u52A1\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u5728\u4E0A\u4E00\u7AE0\u5F00\u53D1\u7684 DApp \u4E2D\uFF0C\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u53EF\u4EE5\u8C03\u7528\u5408\u7EA6\u7684\u9875\u9762\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u8FD9\u4E2A\u5408\u7EA6\u7684\u5730\u5740\u586B\u5165\u5230 DApp \u4E2D\uFF0C\u5C31\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u5408\u7EA6\u4E86\u3002",paraId:1,tocIndex:1},{value:"\u9664\u4E86\u5730\u5740\u4EE5\u5916\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5207\u6362\u5230\u6D4B\u8BD5\u7F51\u3002\u5177\u4F53\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:2,tocIndex:1},{value:`import { http, useReadContract, useWriteContract } from "wagmi";
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

`,paraId:3,tocIndex:1},{value:"\u7136\u540E\u5728 DApp \u9875\u9762\u4E2D\u5207\u6362\u5230 Sepolia \u6D4B\u8BD5\u7F51\uFF0C\u70B9\u51FB ",paraId:4,tocIndex:1},{value:"mint",paraId:4,tocIndex:1},{value:" \u6309\u94AE\u540E\u5982\u679C\u987A\u5229\u4F1A\u89E6\u53D1 MetaMask \u7684\u4EA4\u6613\u786E\u8BA4\u5F39\u7A97\uFF1A",paraId:4,tocIndex:1},{value:"\u4EA4\u6613\u4E0A\u94FE\u540E\uFF0C\u4F60\u4F1A\u53D1\u73B0\u4E4B\u524D ",paraId:5,tocIndex:1},{value:"balanceOf",paraId:5,tocIndex:1},{value:" \u7684\u7ED3\u679C\u53D8\u6210\u4E86 ",paraId:5,tocIndex:1},{value:"1",paraId:5,tocIndex:1},{value:"\uFF0C\u8FD9\u4EE3\u8868\u4F60\u5DF2\u7ECF\u6210\u529F\u94F8\u9020\u4E86\u4E00\u4E2A NFT\u3002\u5F53\u7136\uFF0C\u4E00\u4E2A\u771F\u6B63\u4F53\u9A8C\u597D\u7684 DApp \u4F1A\u5728\u667A\u80FD\u5408\u7EA6\u4E2D\u6DFB\u52A0\u4E8B\u4EF6\uFF0C\u5728\u524D\u7AEF\u76D1\u542C\u5408\u7EA6\u4E8B\u4EF6\uFF0C\u7136\u540E\u81EA\u52A8\u66F4\u65B0\u7ED3\u679C\u3002\u4F46\u662F\u5173\u4E8E\u4E8B\u4EF6\u8FD9\u90E8\u5206\u5185\u5BB9\u6211\u4EEC\u5C31\u4E0D\u5728\u8FD9\u4E2A\u5165\u95E8\u7684\u8BFE\u7A0B\u4E2D\u4ECB\u7ECD\u4E86\u3002",paraId:5,tocIndex:1},{value:"\u4E0B\u9762\u662F\u8BFE\u7A0B\u5B8C\u6574\u7684\u793A\u4F8B\uFF1A",paraId:6,tocIndex:2},{value:"\u4F60\u4E5F\u53EF\u4EE5\u53C2\u8003 GitHub \u9879\u76EE\u6E90\u4EE3\u7801",paraId:7},{value:"https://github.com/ant-design/ant-design-web3-demo",paraId:7},{value:"\u3002",paraId:7},{value:"\u81F3\u6B64\uFF0C\u6211\u4EEC\u5B8C\u6210\u4E86\u672C\u6B21\u8BFE\u7A0B\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5E0C\u671B\u4F60\u80FD\u591F\u4ECE\u4E2D\u5B66\u5230\u4E00\u4E9B\u4E1C\u897F\uFF0C\u8C22\u8C22\u5927\u5BB6\uFF01\u{1F389}",paraId:8}]},14953:function(s,t,e){s.exports=e.p+"static/mint-test-net.b0eee6ca.png"}}]);
