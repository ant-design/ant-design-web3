"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[862],{61461:function(i,e,l){l.r(e),l.d(e,{TinyColor:function(){return d.C},bounds:function(){return y},cmykToRgb:function(){return s.JT},convertDecimalToHex:function(){return s.Wl},convertHexToDecimal:function(){return s.T6},fromRatio:function(){return R},hslToRgb:function(){return s.ve},hsvToRgb:function(){return s.WE},inputToRGB:function(){return b.uA},isReadable:function(){return k},isValidCSSUnit:function(){return b.ky},legacyRandom:function(){return B},mostReadable:function(){return S},names:function(){return P.R},numberInputToObject:function(){return s.Yt},parseIntFromHex:function(){return s.VD},random:function(){return v},readability:function(){return g},rgbToCmyk:function(){return s.D5},rgbToHex:function(){return s.vq},rgbToHsl:function(){return s.lC},rgbToHsv:function(){return s.py},rgbToRgb:function(){return s.rW},rgbaToArgbHex:function(){return s.GC},rgbaToHex:function(){return s.s},stringInputToObject:function(){return b.uz},toMsFilter:function(){return A}});var d=l(11899),P=l(23375);function g(n,a){const t=new d.C(n),o=new d.C(a);return(Math.max(t.getLuminance(),o.getLuminance())+.05)/(Math.min(t.getLuminance(),o.getLuminance())+.05)}function k(n,a,t={level:"AA",size:"small"}){const o=g(n,a);switch((t.level??"AA")+(t.size??"small")){case"AAsmall":case"AAAlarge":return o>=4.5;case"AAlarge":return o>=3;case"AAAsmall":return o>=7;default:return!1}}function S(n,a,t={includeFallbackColors:!1,level:"AA",size:"small"}){let o=null,r=0;const{includeFallbackColors:u,level:c,size:h}=t;for(const m of a){const f=g(n,m);f>r&&(r=f,o=new d.C(m))}return k(n,o,{level:c,size:h})||!u?o:(t.includeFallbackColors=!1,S(n,["#fff","#000"],t))}var s=l(79158);function A(n,a){const t=new d.C(n),o="#"+(0,s.GC)(t.r,t.g,t.b,t.a);let r=o;const u=t.gradientType?"GradientType = 1, ":"";if(a){const c=new d.C(a);r="#"+(0,s.GC)(c.r,c.g,c.b,c.a)}return`progid:DXImageTransform.Microsoft.gradient(${u}startColorstr=${o},endColorstr=${r})`}var C=l(70979);function R(n,a){const t={r:(0,C.JX)(n.r),g:(0,C.JX)(n.g),b:(0,C.JX)(n.b)};return n.a!==void 0&&(t.a=Number(n.a)),new d.C(t,a)}function B(){return new d.C({r:Math.random(),g:Math.random(),b:Math.random()})}var b=l(41587);function v(n={}){if(n.count!==void 0&&n.count!==null){const u=n.count,c=[];for(n.count=void 0;u>c.length;)n.count=null,n.seed&&(n.seed+=1),c.push(v(n));return n.count=u,c}const a=x(n.hue,n.seed),t=_(a,n),o=M(a,t,n),r={h:a,s:t,v:o};return n.alpha!==void 0&&(r.a=n.alpha),new d.C(r)}function x(n,a){const t=E(n);let o=p(t,a);return o<0&&(o=360+o),o}function _(n,a){if(a.hue==="monochrome")return 0;if(a.luminosity==="random")return p([0,100],a.seed);const{saturationRange:t}=T(n);let o=t[0],r=t[1];switch(a.luminosity){case"bright":o=55;break;case"dark":o=r-10;break;case"light":r=55;break;default:break}return p([o,r],a.seed)}function M(n,a,t){let o=W(n,a),r=100;switch(t.luminosity){case"dark":r=o+20;break;case"light":o=(r+o)/2;break;case"random":o=0,r=100;break;default:break}return p([o,r],t.seed)}function W(n,a){const{lowerBounds:t}=T(n);for(let o=0;o<t.length-1;o++){const r=t[o][0],u=t[o][1],c=t[o+1][0],h=t[o+1][1];if(a>=r&&a<=c){const m=(h-u)/(c-r),f=u-m*r;return m*a+f}}return 0}function E(n){const a=parseInt(n,10);if(!Number.isNaN(a)&&a<360&&a>0)return[a,a];if(typeof n=="string"){const t=y.find(r=>r.name===n);if(t){const r=w(t);if(r.hueRange)return r.hueRange}const o=new d.C(n);if(o.isValid){const r=o.toHsv().h;return[r,r]}}return[0,360]}function T(n){n>=334&&n<=360&&(n-=360);for(const a of y){const t=w(a);if(t.hueRange&&n>=t.hueRange[0]&&n<=t.hueRange[1])return t}throw Error("Color not found")}function p(n,a){if(a===void 0)return Math.floor(n[0]+Math.random()*(n[1]+1-n[0]));const t=n[1]||1,o=n[0]||0;a=(a*9301+49297)%233280;const r=a/233280;return Math.floor(o+r*(t-o))}function w(n){const a=n.lowerBounds[0][0],t=n.lowerBounds[n.lowerBounds.length-1][0],o=n.lowerBounds[n.lowerBounds.length-1][1],r=n.lowerBounds[0][1];return{name:n.name,hueRange:n.hueRange,lowerBounds:n.lowerBounds,saturationRange:[a,t],brightnessRange:[o,r]}}const y=[{name:"monochrome",hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:"red",hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:"orange",hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:"yellow",hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:"green",hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:"blue",hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:"purple",hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:"pink",hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}]},81874:function(i,e){e.Z=`import React, { useEffect } from 'react';
import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

const CONTRACT_ADDRESS = '0xEcd0D12E21805803f70de03B72B1C162dB0898d9';

const CallTest = () => {
  const { account } = useAccount();
  const result = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ type: 'uint256' }],
      },
    ],
    address: CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    args: [account?.address as \`0x\${string}\`],
  });
  const { writeContract, data: hash } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      message.success('Mint Success');
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
                  type: 'function',
                  name: 'mint',
                  stateMutability: 'payable',
                  inputs: [
                    {
                      internalType: 'uint256',
                      name: 'quantity',
                      type: 'uint256',
                    },
                  ],
                  outputs: [],
                },
              ],
              address: CONTRACT_ADDRESS,
              functionName: 'mint',
              args: [BigInt(1)],
              value: parseEther('0.01'),
            },
            {
              onError: (err) => {
                message.error(err.message);
              },
            },
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
    <WagmiWeb3ConfigProvider wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
`},41337:function(i,e){e.Z=`import { Address, ConnectButton, Connector, NFTCard } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[MetaMask()]}
    >
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
}
`},22730:function(i,e){e.Z=`import React, { useEffect } from 'react';
import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { Mainnet, MetaMask, Sepolia, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { http, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

// Sepolia test contract 0x81BaD6F768947D7741c83d9EB9007e1569115703
const CONTRACT_ADDRESS = '0x81BaD6F768947D7741c83d9EB9007e1569115703';

const CallTest = () => {
  const { account } = useAccount();
  const result = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ type: 'uint256' }],
      },
    ],
    address: CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    args: [account?.address as \`0x\${string}\`],
  });
  const { writeContract, data: hash } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      message.success('Mint Success');
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
                  type: 'function',
                  name: 'mint',
                  stateMutability: 'payable',
                  inputs: [
                    {
                      internalType: 'uint256',
                      name: 'quantity',
                      type: 'uint256',
                    },
                  ],
                  outputs: [],
                },
              ],
              address: CONTRACT_ADDRESS,
              functionName: 'mint',
              args: [BigInt(1)],
              value: parseEther('0.01'),
            },
            {
              onError: (err) => {
                message.error(err.message);
              },
            },
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
      transports={{
        [Mainnet.id]: http(),
        [Sepolia.id]: http(),
      }}
      chains={[Mainnet, Sepolia]}
      wallets={[MetaMask()]}
    >
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
`},71629:function(i,e){e.Z=`import React, { useState } from 'react';
import { BrowserLink, ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { useConnection, useWallet } from '@ant-design/web3-solana';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { Button, Card, ConfigProvider, Flex, Form, Input, InputNumber, message, Space } from 'antd';

type FormModel = {
  memo: string;
  amount: number;
};

const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export default function MemoTx() {
  const [messageApi, contextHolder] = message.useMessage({ maxCount: 1 });

  const { account } = useAccount();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [signatures, setSignatures] = useState<string[]>([]);

  const writeMemo = async (values: FormModel) => {
    if (!publicKey) {
      messageApi.error('Please connect wallet first');
      return;
    }

    // Create a transaction instruction to transfer 0.1 SOL
    const transferIns = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: new PublicKey('4wztJ4CAH4GbAUopZrVk7nLvoAC3KAF6ttMMWfnBRG1t'),
      lamports: values.amount * LAMPORTS_PER_SOL,
    });

    // Create a transaction instruction to write memo
    const memoIns = new TransactionInstruction({
      programId: MEMO_PROGRAM_ID,
      keys: [{ pubkey: publicKey, isSigner: true, isWritable: false }],
      data: Buffer.from(values.memo, 'utf-8'),
    });

    const tx = new Transaction().add(transferIns, memoIns);

    // Send transaction via wallet \uFF08\u901A\u8FC7\u94B1\u5305\u53D1\u9001\u4EA4\u6613\uFF09
    // Once the transaction is confirmed, the signature will be returned \uFF08\u4EA4\u6613\u786E\u8BA4\u540E\u4F1A\u8FD4\u56DE\u7B7E\u540D\uFF09
    const signature = await sendTransaction?.(tx, connection);

    setSignatures([...signatures, signature]);

    messageApi.info(
      <Space>
        <span>Transaction sent with signature: </span>
        <BrowserLink type="transaction" address={signature} ellipsis target="_blank" />
      </Space>,
      60,
    );
  };

  return (
    <Flex gap={16} flex={1}>
      <Form<FormModel>
        style={{ flex: 1 }}
        layout="vertical"
        disabled={!publicKey}
        initialValues={{ amount: 0.1, memo: 'Hello, Solana!' }}
        onFinish={writeMemo}
      >
        <Form.Item name="amount" label="Amount" required rules={[{ required: true }]}>
          <InputNumber min={0.1} precision={1} step={0.1} style={{ width: 400 }} />
        </Form.Item>

        <Form.Item name="memo" label="Memo" required rules={[{ required: true }]}>
          <Input.TextArea style={{ width: 400 }} />
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit">
            {publicKey ? 'Send Memo' : 'Please connect wallet first'}
          </Button>
          <Connector>
            <ConnectButton disabled={false} />
          </Connector>
        </Space>
      </Form>

      <Card
        title="Memo Signatures"
        style={{ flex: 1 }}
        actions={[
          <Space key="txs">
            <span>View all your transactions: </span>
            {account && <BrowserLink address={account.address} type="address" target="_blank" />}
          </Space>,
        ]}
      >
        <Space direction="vertical">
          <ConfigProvider theme={{ components: { Typography: { fontSize: 12 } } }}>
            <Space>
              Example Transaction:{' '}
              <BrowserLink
                type="transaction"
                address="48yFNeh7dfX2rVb3KzYWgNR8r9RKttAGbwpw4ZLypHnQ3qaT8dGDA8KvTEorYx6GBBiCGsVYkhyECiyn7XqYwQyu"
                target="_blank"
                ellipsis
              />
            </Space>
            {signatures.map((signature) => (
              <BrowserLink key={signature} type="transaction" address={signature} target="_blank" />
            ))}
          </ConfigProvider>
        </Space>
      </Card>

      {contextHolder}
    </Flex>
  );
}
`},75803:function(i,e){e.Z=`import React from 'react';
import { solanaDevnet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

import MemoTx from './solana-memo-call';

const rpcProvider = () => \`https://api.zan.top/node/v1/solana/devnet/\${YOUR_ZAN_API_KEY}\`;

export default function CallSolanaMemoApp() {
  return (
    <SolanaWeb3ConfigProvider
      autoAddRegisteredWallets
      chains={[solanaDevnet]}
      rpcProvider={rpcProvider}
    >
      <MemoTx />
    </SolanaWeb3ConfigProvider>
  );
}
`},74517:function(i,e){e.Z=`import React, { useState } from 'react';
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { Button, Input, InputNumber, Space } from 'antd';

const devnetEndpoint = \`https://api.zan.top/node/v1/solana/devnet/\${YOUR_ZAN_API_KEY}\`;

const connection = new Connection(devnetEndpoint);
const programId = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export default function App() {
  const [amount, setAmount] = useState(0.1);
  const [memo, setMemo] = useState('Hello, Web3!');

  const writeMemo = async () => {
    const keypair = Keypair.generate();
    console.log('Public key:', keypair.publicKey.toBase58());

    const airdropSignature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL);
    console.log(
      'Airdrop Transaction Detail:',
      \`https://solana.io/tx/\${airdropSignature}?cluster=devnet\`,
    );

    const latestBlockhash = await connection.getLatestBlockhash();
    await connection.confirmTransaction(
      {
        signature: airdropSignature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      },
      'finalized',
    );

    const transferInstruction = SystemProgram.transfer({
      fromPubkey: keypair.publicKey,
      toPubkey: new PublicKey('4wztJ4CAH4GbAUopZrVk7nLvoAC3KAF6ttMMWfnBRG1t'),
      lamports: amount * LAMPORTS_PER_SOL,
    });

    const memoInstruction = new TransactionInstruction({
      keys: [{ pubkey: keypair.publicKey, isSigner: true, isWritable: false }],
      programId: programId,
      data: Buffer.from(memo, 'utf-8'),
    });

    const tx = new Transaction();
    tx.add(transferInstruction, memoInstruction);

    const signature = await sendAndConfirmTransaction(connection, tx, [keypair]);

    console.log('Signature:', signature);
    console.log('Transaction Detail:', \`https://solana.io/tx/\${signature}?cluster=devnet\`);
  };

  return (
    <Space direction="vertical">
      <InputNumber
        value={amount}
        min={0.1}
        precision={1}
        step={0.1}
        style={{ width: 400 }}
        onChange={(e) => setAmount(e || 0.1)}
      />
      <Input.TextArea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        style={{ width: 400 }}
      />
      <Button type="primary" onClick={writeMemo}>
        Send Transfer with Memo
      </Button>
    </Space>
  );
}
`},56158:function(i,e){e.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Web3ConfigProvider, type Account, type Chain, type Wallet } from '@ant-design/web3-common';

export interface YourAdapterProps {
  wallets?: Wallet[];
  children?: React.ReactNode;
  availableChains?: Chain[];
}

export const YourAdapterPropsProvider: React.FC<YourAdapterProps> = (props) => {
  const { children, availableChains, wallets } = props;
  const [account] = React.useState<Account>({
    address: '0xtestaccount',
  });
  const [currentChain] = React.useState<Chain>();

  return (
    <Web3ConfigProvider
      availableChains={availableChains}
      chain={currentChain}
      account={account}
      availableWallets={wallets}
      connect={async (wallet) => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u8FDE\u63A5\u94B1\u5305\u7684\u903B\u8F91
        return;
      }}
      disconnect={async () => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u65AD\u5F00\u8FDE\u63A5\u7684\u903B\u8F91
        return;
      }}
      switchChain={async () => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u5207\u6362\u94FE\u7684\u903B\u8F91
        return;
      }}
      getNFTMetadata={async () => {
        // \u8FD9\u91CC\u53EF\u4EE5\u5B9E\u73B0\u83B7\u53D6 NFT \u5143\u6570\u636E\u7684\u903B\u8F91
        return {
          name: 'NFT',
          description: 'NFT description',
          image: 'https://avatars.githubusercontent.com/u/1061968',
        };
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};

const App: React.FC = () => {
  return (
    <YourAdapterPropsProvider>
      <Connector>
        <ConnectButton />
      </Connector>
    </YourAdapterPropsProvider>
  );
};

export default App;
`},37356:function(i,e){e.Z=`// /components/pay-button.tsx
import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, Space } from 'antd';
import { createConfig, http } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

import EvmSignTransaction from './send';

type PayButtonsProps = {
  setTokenEcosystem?: (token: string) => void;
  tokenEcosystem: string;
  signCallback: (signTransfer: (toAddress: string, amount: number) => void) => void;
  payCallback: (signTransfer: string, address: string) => void;
  onRejectSwitchChain?: (id: number) => void;
};

export const EvmPayButton: React.FC<PayButtonsProps> = ({
  setTokenEcosystem,
  tokenEcosystem,
  signCallback,
  payCallback,
  onRejectSwitchChain,
}) => {
  const config = createConfig({
    chains: [mainnet, polygon, arbitrum, optimism],
    transports: {
      [mainnet.id]: http(),
      [polygon.id]: http(),
      [arbitrum.id]: http(),
      [optimism.id]: http(),
    },
    connectors: [
      injected({
        target: 'metaMask',
      }),
    ],
  });

  return (
    <div>
      <WagmiWeb3ConfigProvider
        config={config}
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        wallets={[MetaMask()]}
        chains={[mainnet, polygon, arbitrum, optimism]}
      >
        <Space size="middle">
          <Connector
            modalProps={{
              footer: (
                <>
                  Powered by{' '}
                  <a href="https://web3.ant.design/" target="_blank" rel="noreferrer">
                    Ant Design Web3
                  </a>
                </>
              ),
            }}
          >
            <ConnectButton chainSelect={false} />
          </Connector>
          <EvmSignTransaction
            setTokenEcosystem={setTokenEcosystem}
            tokenEcosystem={tokenEcosystem}
            signTransaction={(signTransfer, address) => {
              payCallback(signTransfer, address);
            }}
            onRejectSwitchChain={onRejectSwitchChain}
            renderSignButton={(signTransfer, disabled, signLoading) => (
              <Button
                type="primary"
                style={{ width: 200 }}
                loading={signLoading}
                disabled={disabled}
                onClick={() => {
                  signCallback(signTransfer);
                }}
              >
                Pay
              </Button>
            )}
          />
        </Space>
      </WagmiWeb3ConfigProvider>
    </div>
  );
};
`},80575:function(i,e){e.Z=`// /components/select.tsx
import React from 'react';
import { Radio, Space } from 'antd';

import { TOKEN_PAY_ADDRESS } from '../constants/tokenPayAddress';

interface ChainSelectGroupProps {
  ecosystem: string;
  onChange: (ecosystem: string) => void;
}

const ChainSelect: React.FC<ChainSelectGroupProps> = (props) => {
  const chainList = TOKEN_PAY_ADDRESS.chains;

  return (
    <Space size="middle">
      <Radio.Group
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        value={props.ecosystem}
      >
        {chainList.map((info) => {
          return (
            <Radio key={info.ecosystem} value={info.ecosystem}>
              {info.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </Space>
  );
};

export default ChainSelect;
`},4817:function(i,e){e.Z=`// /components/send.tsx
import React, { useEffect, useState } from 'react';
import { useAccount } from '@ant-design/web3';
import { parseAbi, parseUnits } from 'viem';
import { useChainId, useSwitchChain, useWriteContract } from 'wagmi';

import { TOKEN_PAY_ADDRESS } from '../constants/tokenPayAddress';

type SignTransactionProps = {
  setTokenEcosystem?: (token: string) => void;
  tokenEcosystem: string;
  signTransaction: (signTransfer: string, address: string) => void;
  renderSignButton: (
    signTransfer: (toAddress: string, amount: number) => void,
    disabled: boolean,
    loading: boolean,
  ) => React.ReactNode;
  onRejectSwitchChain?: (id: number) => void;
};

const EvmSignTransaction: React.FC<SignTransactionProps> = ({
  setTokenEcosystem,
  tokenEcosystem,
  signTransaction,
  renderSignButton,
  onRejectSwitchChain,
}) => {
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const { writeContractAsync } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const { account } = useAccount();

  useEffect(() => {
    if (account?.address) {
      const chainList = TOKEN_PAY_ADDRESS.chains;
      const changeChainId = chainList.find((item) => item.ecosystem === tokenEcosystem)?.id;
      if (changeChainId && changeChainId !== chainId) {
        switchChain?.(
          { chainId: changeChainId },
          {
            onError: (error) => {
              if (error.message.includes('User rejected')) {
                onRejectSwitchChain?.(chainId);
              }
            },
          },
        );
      }
    }
  }, [tokenEcosystem, account]);

  useEffect(() => {
    if (chainId && !tokenEcosystem) {
      const chainList = TOKEN_PAY_ADDRESS.chains;
      const initTokenEcosystem = chainList.find((item) => item.id === chainId)?.ecosystem;
      if (initTokenEcosystem && account) {
        setTokenEcosystem?.(initTokenEcosystem);
      } else {
        setTokenEcosystem?.(chainList[0].ecosystem);
      }
    }
  }, [account]);

  const signTransfer = async (toAddress: string, amount: number) => {
    try {
      setSignLoading(true);
      // transfer ABI
      // {
      //   "constant": false,
      //   "inputs": [
      //     { "name": "_to", "type": "address" },
      //     { "name": "_value", "type": "uint256" }
      //   ],
      //   "name": "transfer",
      //   "outputs": [],
      //   "payable": false,
      //   "stateMutability": "nonpayable",
      //   "type": "function"
      // },
      const decimals = TOKEN_PAY_ADDRESS.chains.find(
        (item) => item.ecosystem === tokenEcosystem,
      )?.decimals;
      const contractAddress = TOKEN_PAY_ADDRESS.chains.find(
        (item) => item.ecosystem === tokenEcosystem,
      )?.address;
      const signTransferHash = await writeContractAsync({
        abi: parseAbi(['function transfer(address _to, uint256 _value)']),
        address: contractAddress as \`0x\${string}\`,
        functionName: 'transfer',
        args: [
          toAddress.toLocaleLowerCase() as \`0x\${string}\`,
          parseUnits(amount.toString(), decimals!),
        ],
      });
      setSignLoading(false);
      signTransaction?.(signTransferHash, account?.address || '');
    } catch (error) {
      console.log('error', (error as any).message);
      setSignLoading(false);
    }
  };

  return <div>{renderSignButton(signTransfer, !account, signLoading)}</div>;
};
export default EvmSignTransaction;
`},22839:function(i,e){e.Z=`// /constants/tokenPayAddress.ts
interface TokenInfo {
  name: string;
  icon: string;
  symbol: string;
  chains: {
    name: string;
    id?: number;
    decimals: number;
    ecosystem: string;
    address: string;
    txScan?: string;
    network?: string;
  }[];
}
export const TOKEN_PAY_ADDRESS: TokenInfo = {
  name: 'USDT',
  icon: 'https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*HkpaQoYlReEAAAAAAAAAAAAADiOMAQ/original',
  symbol: 'usdt',
  chains: [
    {
      name: 'Ethereum',
      id: 1,
      decimals: 6,
      ecosystem: 'ethereum',
      network: 'mainnet',
      txScan: 'https://etherscan.io/tx/',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    {
      name: 'Polygon',
      id: 137,
      decimals: 6,
      ecosystem: 'polygon',
      network: 'polygon',
      txScan: 'https://polygonscan.com/tx/',
      address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    },
    {
      name: 'Arbitrum',
      id: 42161,
      decimals: 6,
      ecosystem: 'arbitrum',
      network: 'arbitrum',
      txScan: 'https://arbiscan.io/tx/',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    },
    {
      name: 'Optimism',
      id: 10,
      decimals: 6,
      ecosystem: 'optimism',
      network: 'optimism',
      txScan: 'https://optimistic.etherscan.io/tx/',
      address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    },
  ],
};
`},12006:function(i,e){e.Z=`// /usdt.tsx
import React, { useState } from 'react';
import { Card, message, Space, Typography } from 'antd';

import { EvmPayButton } from './components/pay-button';
import ChainSelect from './components/select';
import { TOKEN_PAY_ADDRESS } from './constants/tokenPayAddress';

const { Title } = Typography;

const PaymentInUSDT: React.FC = () => {
  // token ecosystem
  const [tokenEcosystem, setTokenEcosystem] = useState<string>('');

  const onSubmitCashier = async (sign: (toAddress: string, amount: number) => void) => {
    // The address and amount are obtained from the backend service
    sign('0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76', 10);
  };

  const runPay = async (sign: string, address: string) => {
    message.success('Pay success');
  };

  return (
    <Card title="Payment in USDT">
      <Space direction="vertical" size="middle">
        <Title level={3}>Select Chain</Title>
        <ChainSelect ecosystem={tokenEcosystem} onChange={setTokenEcosystem} />
        <EvmPayButton
          setTokenEcosystem={setTokenEcosystem}
          tokenEcosystem={tokenEcosystem}
          signCallback={onSubmitCashier}
          payCallback={runPay}
          onRejectSwitchChain={(id) => {
            const oldTokenEcosystem = TOKEN_PAY_ADDRESS.chains.find(
              (item) => item.id === id,
            )?.ecosystem;
            setTokenEcosystem(oldTokenEcosystem || '');
          }}
        />
      </Space>
    </Card>
  );
};

export default PaymentInUSDT;
`},46435:function(i,e){e.Z=`import React from 'react';
import { ConnectModal, Web3ConfigProvider, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, Space } from 'antd';

const App: React.FC = () => {
  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
  ];

  return (
    <Web3ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
          colorLink: '#8b837d',
          colorBgContainer: '#eadcd1',
        },
        components: {
          Button: {
            defaultShadow: '-4px 4px 0px #000000,inset 0 0 0 2px #000000',
            defaultHoverBg: '#f3eae4',
            defaultBorderColor: '#000000',
            defaultBg: '#fff',
          },
        },
        web3Components: {
          ConnectModal: {
            hoverWalletBg: '#f3eae4',
          },
        },
      }}
    >
      <Space>
        <Card
          style={{
            boxShadow: '-10px 10px 0px #000000,inset 0 0 0 2px #000000',
            border: 'none',
          }}
          styles={{
            body: {
              padding: 0,
              maxWidth: 795,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </Space>
    </Web3ConfigProvider>
  );
};

export default App;
`},90216:function(i,e){e.Z=`import React from 'react';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, ConfigProvider, Space } from 'antd';

import { customToken } from './tokens';

const App: React.FC = () => {
  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
  ];

  return (
    <ConfigProvider theme={customToken}>
      <Space>
        <Card
          styles={{
            body: {
              padding: 0,
              maxWidth: 795,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},14755:function(i,e){e.Z=`import { ConnectButton, Web3ConfigProvider, zh_CN } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider locale={zh_CN}>
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},3397:function(i,e){e.Z=`import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider
      locale={{
        ConnectButton: {
          connect: '\u8FDE\u63A5\u94B1\u5305',
        },
      }}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},856:function(i,e){e.Z=`import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <ConnectButton
      locale={{
        connect: '\u8FDE\u63A5\u94B1\u5305',
      }}
    />
  );
};

export default App;
`},69586:function(i,e){e.Z=`import { NFTImage } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},34972:function(i,e){e.Z=`import React from 'react';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, ConfigProvider, Radio, Space, theme } from 'antd';

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');

  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
      group: 'More',
      name: 'Test Wallet3',
      remark: 'remark 3',
      app: {
        link: 'https://test.com/xxx',
      },
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: \`https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=\${Date.now()}&random=\${Math.random()}\`,
              }),
            2000,
          ),
        );
      },
    },
  ];

  return (
    <Space direction="vertical">
      <Radio.Group
        onChange={(e) => {
          setMode(e.target.value);
        }}
        value={mode}
      >
        <Radio.Button value="dark">Dark</Radio.Button>
        <Radio.Button value="light">Light</Radio.Button>
      </Radio.Group>
      <ConfigProvider
        theme={{
          algorithm: mode === 'dark' ? theme.darkAlgorithm : undefined,
        }}
      >
        <Card
          styles={{
            body: {
              padding: 0,
              maxWidth: 795,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </ConfigProvider>
    </Space>
  );
};

export default App;
`},84679:function(i,e){e.Z=`import type { Web3ThemeConfig } from '@ant-design/web3';
import { theme } from 'antd';

export type ThemeValue =
  | 'default'
  | 'violet'
  | 'dark'
  | 'green'
  | 'pink'
  | 'retro'
  | 'win95'
  | 'material';

export const customToken: Web3ThemeConfig = {
  token: {
    borderRadius: 16,
    wireframe: false,
    padding: 24,
    paddingSM: 16,
    paddingXS: 12,
    fontSize: 16,
    fontSizeLG: 18,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontSizeHeading2: 36,
    fontSizeXL: 24,
    colorPrimary: '#8442ff',
    colorInfo: '#8442ff',
    paddingContentHorizontal: 20,
    paddingContentHorizontalSM: 16,
    paddingContentHorizontalLG: 24,
  },
  components: {
    Button: {
      controlHeight: 44,
      marginXS: 8,
      fontSizeLG: 18,
      controlHeightLG: 52,
      controlHeightSM: 36,
      paddingXS: 16,
    },
    List: {
      paddingLG: 24,
      marginLG: 24,
      marginXXL: 48,
      paddingContentHorizontalLG: 24,
      fontSizeLG: 20,
      padding: 16,
      paddingContentVertical: 24,
      paddingXS: 8,
      paddingSM: 12,
    },

    Modal: {
      controlHeightLG: 44,
      fontSizeHeading5: 20,
      fontSizeLG: 18,
      marginSM: 12,
      margin: 16,
      marginLG: 24,
      marginXS: 8,
      padding: 16,
      paddingContentHorizontalLG: 24,
      paddingLG: 24,
      paddingMD: 20,
      paddingXS: 12,
    },
  },
};

export type ThemeSetting = {
  color: string;
  value: ThemeValue;
  name: string;
  token: Web3ThemeConfig;
  buttonType?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
};

// \u90E8\u5206\u53C2\u8003 antd \u5B98\u7F51\u7684\u4E3B\u9898 https://github.com/ant-design/ant-design/blob/master/.dumi/pages/index/components/Theme/index.tsx#L305
export const themeList: ThemeSetting[] = [
  {
    color: '#1677FF',
    value: 'default',
    name: 'Default',
    token: {
      token: {},
    },
  },
  {
    color: '#000',
    value: 'dark',
    name: 'Dark',
    token: {
      token: {
        borderRadius: 2,
        colorPrimary: '#000',
        colorPrimaryTextHover: 'rgba(255, 255, 255, 0.8)',
        colorLink: 'rgba(255, 255, 255, 0.75)',
        colorText: 'rgba(255, 255, 255, 0.75)',
      },
      components: {
        Button: {
          defaultHoverColor: 'rgba(255, 255, 255, 0.8)',
          defaultHoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
      algorithm: theme.darkAlgorithm,
    },
  },
  {
    color: '#008080',
    value: 'win95',
    name: 'Windows 95',
    buttonType: 'default',
    token: {
      token: {
        colorPrimary: '#008080',
        colorLink: '#0000FF',
        colorBgContainer: '#C0C0C0',
        borderRadius: 0,
      },
      components: {
        Button: {
          defaultBg: '#C0C0C0',
          defaultBorderColor: '#FFFFFF #808080 #808080 #FFFFFF',
          defaultHoverBg: '#C0C0C0',
          defaultShadow: 'inset -1px -1px #0a0a0a,inset 1px 1px #fff',
        },
        Modal: {
          contentBg: '#C0C0C0',
          boxShadow: 'inset -1px -1px #0a0a0a,inset 1px 1px #fff',
        },
      },
      web3Components: {
        ConnectModal: {
          hoverWalletBg: '#DFDFDF',
        },
      },
    },
  },
  {
    color: '#796d6f',
    value: 'retro',
    name: 'Retro',
    buttonType: 'default',
    token: {
      token: {
        colorPrimary: '#000000',
        colorLink: '#8b837d',
        colorBgContainer: '#f3eae4',
      },
      components: {
        Button: {
          defaultShadow: '-4px 4px 0px #000000,inset 0 0 0 2px #000000',
          defaultHoverBg: '#f3eae4',
          defaultBg: '#fff',
          defaultBorderColor: '#000000',
        },
        Modal: {
          boxShadow: '-10px 10px 0px #000000,inset 0 0 0 2px #000000',
          contentBg: '#eadcd1',
        },
      },
      web3Components: {
        ConnectModal: {
          hoverWalletBg: '#f3eae4',
        },
      },
    },
  },
  {
    color: '#6750A4',
    value: 'material',
    name: 'Material Design 3',
    buttonType: 'primary',
    token: {
      token: {
        colorPrimary: '#6750a4',
        colorBorderBg: '',
        colorLink: '#6750a4',
        colorBgBase: '#fdfbff',
        colorBgContainer: '#fdfbff',
        colorBgMask: 'rgba(0, 0, 0, 0.32)',
        controlHeight: 40,
      },
      components: {
        Button: {
          colorBorder: 'transparent',
          colorText: '#6750a4',
          colorPrimaryBg: '#6750a4',
          primaryShadow: 'none',
          dangerShadow: 'none',
          defaultShadow: 'none',
        },
        Modal: {
          contentBg: '#fffbfe',
          boxShadow: 'none',
        },
      },
    },
  },
  {
    value: 'green',
    name: 'Forest green',
    color: '#00B96B',
    token: {
      token: {
        colorPrimary: '#00B96B',
        borderRadius: 4,
        colorLink: '#00B96B',
      },
    },
  },
  {
    value: 'pink',
    name: 'Blossom',
    color: '#ED4192',
    token: {
      token: {
        colorPrimary: '#ED4192',
        borderRadius: 16,
        colorLink: '#ED4192',
      },
    },
  },
  {
    color: '#8343FF',
    value: 'violet',
    name: 'Violet',
    token: customToken,
  },
];
`},87923:function(i,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
  buttonType: 'primary' | 'dashed' | 'link' | 'text' | 'default';
}

const App: React.FC<Props> = ({ mode, size, quickConnect, buttonType }) => {
  return (
    <BitcoinWeb3ConfigProvider autoConnect wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type={buttonType}
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},57590:function(i,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
  buttonType: 'primary' | 'dashed' | 'link' | 'text' | 'default';
}

const App: React.FC<Props> = ({ mode, size, quickConnect, buttonType }) => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      ens
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
    >
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type={buttonType}
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},41715:function(i,e){e.Z=`import React from 'react';
import { Web3ConfigProvider } from '@ant-design/web3';
import type { ConnectModalProps } from '@ant-design/web3';
import { TinyColor } from '@ctrl/tinycolor';
import { Col, Radio, Row, Select, Slider, Space, Switch, Tabs } from 'antd';
import type { ConfigProviderProps } from 'antd';

import { themeList } from '../tokens';
import type { ThemeSetting, ThemeValue } from '../tokens';
import BitcoinApp from './bitcoin';
import EthereumApp from './ethereum';
import styles from './index.module.less';
import SolanaApp from './solana';
import SuiApp from './sui';
import TonApp from './ton';

type SizeType = ConfigProviderProps['componentSize'];

const defaultRadius = 8;

const ThemeLabel: React.FC<{ theme: ThemeSetting }> = ({ theme }) => {
  return (
    <Space
      style={{
        paddingTop: 6,
      }}
    >
      <div
        className={styles.themeLabel}
        style={{
          backgroundColor: new TinyColor(theme.color).lighten(30).toString(),
        }}
      >
        <div
          style={{
            backgroundColor: theme.color,
          }}
        />
      </div>
      {theme.name}
    </Space>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = React.useState<ConnectModalProps['mode']>('simple');
  const [size, setSize] = React.useState<SizeType>('large'); // default is 'middle'
  const [quickConnect, setQuickConnect] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<ThemeValue>('default');
  const [radius, setRadius] = React.useState<number>(defaultRadius);
  const currentTheme = themeList.find((t) => t.value === theme);

  const buttonType = currentTheme?.buttonType || 'primary';

  return (
    <>
      <Web3ConfigProvider
        theme={{
          ...currentTheme?.token,
          token: {
            ...currentTheme?.token.token,
            borderRadius: radius,
          },
        }}
      >
        <Tabs
          defaultActiveKey="ethereum"
          centered
          items={[
            {
              label: 'Ethereum',
              key: 'ethereum',
              children: (
                <div className={styles.connectorContainer}>
                  <EthereumApp
                    mode={mode}
                    quickConnect={quickConnect}
                    size={size}
                    buttonType={buttonType}
                  />
                </div>
              ),
            },
            {
              label: 'Bitcoin',
              key: 'bitcoin',
              children: (
                <div className={styles.connectorContainer}>
                  <BitcoinApp
                    mode={mode}
                    quickConnect={quickConnect}
                    size={size}
                    buttonType={buttonType}
                  />
                </div>
              ),
            },
            {
              label: 'Solana',
              key: 'solana',
              children: (
                <div className={styles.connectorContainer}>
                  <SolanaApp
                    mode={mode}
                    quickConnect={quickConnect}
                    size={size}
                    buttonType={buttonType}
                  />
                </div>
              ),
            },
            {
              label: 'Sui',
              key: 'sui',
              children: (
                <div className={styles.connectorContainer}>
                  <SuiApp
                    mode={mode}
                    quickConnect={quickConnect}
                    size={size}
                    buttonType={buttonType}
                  />
                </div>
              ),
            },
            {
              label: 'TON',
              key: 'ton',
              children: (
                <div className={styles.connectorContainer}>
                  <TonApp
                    mode={mode}
                    quickConnect={quickConnect}
                    size={size}
                    buttonType={buttonType}
                  />
                </div>
              ),
            },
          ]}
        />
      </Web3ConfigProvider>
      <div className={styles.configContainer}>
        <Row>
          <Col xs={24} sm={12}>
            <div className={styles.groupTitle}>Basic</div>
            <Space direction="vertical">
              <Radio.Group
                onChange={(e) => {
                  setMode(e.target.value);
                }}
                value={mode}
              >
                <Radio value="simple">simple mode</Radio>
                <Radio value="auto">auto mode</Radio>
              </Radio.Group>
              <Space>
                <Switch
                  checked={quickConnect}
                  onChange={(checked) => {
                    setQuickConnect(checked);
                  }}
                />
                Quick Connect
              </Space>
            </Space>
          </Col>
          <Col xs={24} sm={12}>
            <div className={styles.groupTitle}>Theme</div>
            <Space direction="vertical">
              <Select
                style={{
                  width: 300,
                }}
                size="large"
                value={theme}
                onChange={(v) => {
                  setTheme(v);
                  const selectedTheme = themeList.find((t) => t.value === v);
                  setRadius(selectedTheme?.token.token?.borderRadius || defaultRadius);
                }}
                options={themeList.map((item) => {
                  return { value: item.value, label: <ThemeLabel theme={item} /> };
                })}
              />
              <Space>
                Border Radius:
                <Slider
                  value={radius}
                  style={{
                    width: 190,
                  }}
                  defaultValue={defaultRadius}
                  min={0}
                  max={24}
                  onChange={setRadius}
                />
              </Space>
              <Space>
                Button Size:
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
`},89723:function(i,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
  buttonType: 'primary' | 'dashed' | 'link' | 'text' | 'default';
}

const App: React.FC<Props> = ({ mode, size, quickConnect, buttonType }) => {
  return (
    <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type={buttonType}
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},66627:function(i,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWallet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
  buttonType: 'primary' | 'dashed' | 'link' | 'text' | 'default';
}

const App: React.FC<Props> = ({ mode, size, quickConnect, buttonType }) => {
  return (
    <SuiWeb3ConfigProvider balance autoConnect wallets={[Suiet(), SuiWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type={buttonType}
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
`},32388:function(i,e){e.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { okxTonWallet, tonkeeper, TonWeb3ConfigProvider } from '@ant-design/web3-ton';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
  buttonType: 'primary' | 'dashed' | 'link' | 'text' | 'default';
}

const App: React.FC<Props> = ({ mode, size, quickConnect, buttonType }) => {
  return (
    <TonWeb3ConfigProvider wallets={[tonkeeper, okxTonWallet, { key: 'safepalwallet' }]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type={buttonType}
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};

export default App;
`}}]);
