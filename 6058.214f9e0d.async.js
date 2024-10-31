"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6058],{18082:function(t,n,o){o.r(n),o.d(n,{CoinbaseWallet:function(){return M.G},EthWeb3jsConfigProvider:function(){return S},ImToken:function(){return y.V},MetaMask:function(){return G.M},OkxWallet:function(){return x.Y},SafeheronWallet:function(){return H.V},TokenPocket:function(){return B.g},UniversalWallet:function(){return h.M},clientToWeb3js:function(){return N},useWeb3js:function(){return p}});var e=o(26068),r=o.n(e),C=o(15558),f=o.n(C),_=o(67825),g=o.n(_),a=o(75271),i=o(39218),c=o(28672),u=o(96683),W=o(97567),d=o(53840),w=o(50868),v=o(92171),Z=o(58253),j=o(52676),L=["children","walletConnect","storage"],S=function(l){var m,P=l.children,k=l.walletConnect,I=l.storage,T=g()(l,L),O=a.useMemo(function(){var A;return((A=T.chains)!==null&&A!==void 0?A:[i.ny]).map(function(s){var F,E=(F=Object.values(w).find(function(U){return U.id===s.id}))!==null&&F!==void 0?F:null;return E!=null&&E.id||console.warn("Chain ".concat(s.id," is not supported")),E}).filter(function(s){return s!==null})},[(m=T.chains)===null||m===void 0?void 0:m.map(function(A){return A.id}).join()]),z=a.useMemo(function(){var A,s=f()((A=T.wallets)!==null&&A!==void 0?A:[]);return k&&k.projectId&&s.push((0,c.b)()),s},[T.wallets,k]),K=a.useMemo(function(){var A,s=Object.fromEntries(O.map(function(U){return[U.id,(0,W.d)()]})),F=[v.L()];if(((A=T.wallets)!==null&&A!==void 0?A:[]).forEach(function(U){U.name&&F.push(v.L({target:U.name}))}),k&&k.projectId){var E;F.push(Z.a(r()(r()({},k),{},{showQrModal:(E=k.useWalletConnectOfficialModal)!==null&&E!==void 0?E:!1})))}return(0,d._)({chains:O,transports:s,connectors:F,storage:I===!1?null:I})},[O,k,T.wallets,I]);return(0,j.jsx)(u.h,r()(r()({},T),{},{config:K,wallets:z,children:P}))},G=o(54316),M=o(30532),B=o(19056),H=o(84273),h=o(61172),x=o(4755),y=o(94782),R=o(54179),D=o(67485),N=function(l){var m=l.transport;return m.type==="fallback"?new D.BvB(m.transports[0].value.url):new D.BvB(m)};function p(){var b=(0,R.L)(),l=b.data;return(0,a.useMemo)(function(){return l?N(l):null},[l])}},7872:function(t,n,o){o.d(n,{G:function(){return S}});var e=o(26068),r=o.n(e),C=o(15558),f=o.n(C),_=o(67825),g=o.n(_),a=o(75271),i=o(39218),c=o(28672),u=o(96683),W=o(97567),d=o(53840),w=o(50868),v=o(92171),Z=o(58253),j=o(52676),L=["children","walletConnect","storage"],S=function(M){var B,H=M.children,h=M.walletConnect,x=M.storage,y=g()(M,L),R=a.useMemo(function(){var p;return((p=y.chains)!==null&&p!==void 0?p:[i.ny]).map(function(b){var l,m=(l=Object.values(w).find(function(P){return P.id===b.id}))!==null&&l!==void 0?l:null;return m!=null&&m.id||console.warn("Chain ".concat(b.id," is not supported")),m}).filter(function(b){return b!==null})},[(B=y.chains)===null||B===void 0?void 0:B.map(function(p){return p.id}).join()]),D=a.useMemo(function(){var p,b=f()((p=y.wallets)!==null&&p!==void 0?p:[]);return h&&h.projectId&&b.push((0,c.b)()),b},[y.wallets,h]),N=a.useMemo(function(){var p,b=Object.fromEntries(R.map(function(P){return[P.id,(0,W.d)()]})),l=[v.L()];if(((p=y.wallets)!==null&&p!==void 0?p:[]).forEach(function(P){P.name&&l.push(v.L({target:P.name}))}),h&&h.projectId){var m;l.push(Z.a(r()(r()({},h),{},{showQrModal:(m=h.useWalletConnectOfficialModal)!==null&&m!==void 0?m:!1})))}return(0,d._)({chains:R,transports:b,connectors:l,storage:x===!1?null:x})},[R,h,y.wallets,x]);return(0,j.jsx)(u.h,r()(r()({},y),{},{config:N,wallets:D,children:H}))}},17863:function(t,n,o){o.d(n,{Z:function(){return g},j:function(){return _}});var e=o(75271),r=o(10327),C=o(26654),f=o(58225);function _(a){var i,c=a.chain,u=a.transport,W={chainId:c.id,name:c.name,ensAddress:(i=c.contracts)===null||i===void 0||(i=i.ensRegistry)===null||i===void 0?void 0:i.address};if(u.type==="fallback"){var d=u.transports.map(function(w){var v=w.value;return new r.r6(v==null?void 0:v.url,W)});return d.length===1?d[0]:new C.H(d)}return new r.r6(u.url,W)}function g(){var a=(0,f.m)();return(0,e.useMemo)(function(){return a?_(a):null},[a])}},44601:function(t,n,o){o.d(n,{r:function(){return _},z:function(){return g}});var e=o(75271),r=o(65178),C=o(10327),f=o(54179);function _(a){var i,c=a.account,u=a.chain,W=a.transport,d=u?{chainId:u.id,name:u.name,ensAddress:(i=u.contracts)===null||i===void 0||(i=i.ensRegistry)===null||i===void 0?void 0:i.address}:void 0,w=new r.Q(W,d),v=new C.C1(w,c.address);return v}function g(){var a=(0,f.L)(),i=a.data;return(0,e.useMemo)(function(){return i?_(i):null},[i])}},30658:function(t,n,o){o.r(n),o.d(n,{CoinbaseWallet:function(){return C.G},EthersWeb3ConfigProvider:function(){return e.G},ImToken:function(){return i.V},MetaMask:function(){return r.M},OkxWallet:function(){return a.Y},SafeheronWallet:function(){return _.V},TokenPocket:function(){return f.g},UniversalWallet:function(){return g.M},clientToProvider:function(){return c.j},clientToSigner:function(){return u.r},useEthersProvider:function(){return c.Z},useEthersSigner:function(){return u.z}});var e=o(7872),r=o(54316),C=o(30532),f=o(19056),_=o(84273),g=o(61172),a=o(4755),i=o(94782),c=o(17863),u=o(44601)},23860:function(t,n,o){o.r(n),o.d(n,{BaseError:function(){return e.BaseError},ChainNotConfiguredError:function(){return e.ChainNotConfiguredError},ConnectorAccountNotFoundError:function(){return e.ConnectorAccountNotFoundError},ConnectorAlreadyConnectedError:function(){return e.ConnectorAlreadyConnectedError},ConnectorChainMismatchError:function(){return e.ConnectorChainMismatchError},ConnectorNotFoundError:function(){return e.ConnectorNotFoundError},ConnectorUnavailableReconnectingError:function(){return e.ConnectorUnavailableReconnectingError},Context:function(){return e.Context},Hydrate:function(){return e.Hydrate},ProviderNotFoundError:function(){return e.ProviderNotFoundError},SwitchChainNotSupportedError:function(){return e.SwitchChainNotSupportedError},WagmiConfig:function(){return e.WagmiConfig},WagmiContext:function(){return e.WagmiContext},WagmiProvider:function(){return e.WagmiProvider},WagmiProviderNotFoundError:function(){return e.WagmiProviderNotFoundError},actions:function(){return r},chains:function(){return C},connectors:function(){return f},cookieStorage:function(){return e.cookieStorage},cookieToInitialState:function(){return e.cookieToInitialState},createConfig:function(){return e.createConfig},createConnector:function(){return e.createConnector},createStorage:function(){return e.createStorage},custom:function(){return e.custom},deepEqual:function(){return e.deepEqual},deserialize:function(){return e.deserialize},fallback:function(){return e.fallback},http:function(){return e.http},noopStorage:function(){return e.noopStorage},normalizeChainId:function(){return e.normalizeChainId},parseCookie:function(){return e.parseCookie},serialize:function(){return e.serialize},unstable_connector:function(){return e.unstable_connector},useAccount:function(){return e.useAccount},useAccountEffect:function(){return e.useAccountEffect},useBalance:function(){return e.useBalance},useBlock:function(){return e.useBlock},useBlockNumber:function(){return e.useBlockNumber},useBlockTransactionCount:function(){return e.useBlockTransactionCount},useBytecode:function(){return e.useBytecode},useCall:function(){return e.useCall},useChainId:function(){return e.useChainId},useChains:function(){return e.useChains},useClient:function(){return e.useClient},useConfig:function(){return e.useConfig},useConnect:function(){return e.useConnect},useConnections:function(){return e.useConnections},useConnectorClient:function(){return e.useConnectorClient},useConnectors:function(){return e.useConnectors},useContractInfiniteReads:function(){return e.useContractInfiniteReads},useContractRead:function(){return e.useContractRead},useContractReads:function(){return e.useContractReads},useContractWrite:function(){return e.useContractWrite},useDeployContract:function(){return e.useDeployContract},useDisconnect:function(){return e.useDisconnect},useEnsAddress:function(){return e.useEnsAddress},useEnsAvatar:function(){return e.useEnsAvatar},useEnsName:function(){return e.useEnsName},useEnsResolver:function(){return e.useEnsResolver},useEnsText:function(){return e.useEnsText},useEstimateFeesPerGas:function(){return e.useEstimateFeesPerGas},useEstimateGas:function(){return e.useEstimateGas},useEstimateMaxPriorityFeePerGas:function(){return e.useEstimateMaxPriorityFeePerGas},useFeeData:function(){return e.useFeeData},useFeeHistory:function(){return e.useFeeHistory},useGasPrice:function(){return e.useGasPrice},useInfiniteReadContracts:function(){return e.useInfiniteReadContracts},usePrepareTransactionRequest:function(){return e.usePrepareTransactionRequest},useProof:function(){return e.useProof},usePublicClient:function(){return e.usePublicClient},useReadContract:function(){return e.useReadContract},useReadContracts:function(){return e.useReadContracts},useReconnect:function(){return e.useReconnect},useSendTransaction:function(){return e.useSendTransaction},useSignMessage:function(){return e.useSignMessage},useSignTypedData:function(){return e.useSignTypedData},useSimulateContract:function(){return e.useSimulateContract},useStorageAt:function(){return e.useStorageAt},useSwitchAccount:function(){return e.useSwitchAccount},useSwitchChain:function(){return e.useSwitchChain},useToken:function(){return e.useToken},useTransaction:function(){return e.useTransaction},useTransactionConfirmations:function(){return e.useTransactionConfirmations},useTransactionCount:function(){return e.useTransactionCount},useTransactionReceipt:function(){return e.useTransactionReceipt},useVerifyMessage:function(){return e.useVerifyMessage},useVerifyTypedData:function(){return e.useVerifyTypedData},useWaitForTransactionReceipt:function(){return e.useWaitForTransactionReceipt},useWalletClient:function(){return e.useWalletClient},useWatchAsset:function(){return e.useWatchAsset},useWatchBlockNumber:function(){return e.useWatchBlockNumber},useWatchBlocks:function(){return e.useWatchBlocks},useWatchContractEvent:function(){return e.useWatchContractEvent},useWatchPendingTransactions:function(){return e.useWatchPendingTransactions},useWriteContract:function(){return e.useWriteContract},version:function(){return e.version},webSocket:function(){return e.webSocket}});var e=o(3734),r=o(61304),C=o(50868),f=o(42618)},70871:function(t,n,o){o.r(n),o.d(n,{getNonce:function(){return _},verifyMessage:function(){return a}});var e=o(90228),r=o.n(e),C=o(87999),f=o.n(C);function _(c){return g.apply(this,arguments)}function g(){return g=f()(r()().mark(function c(u){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return","PtZZs3w7ktHsbSFUcmwb");case 1:case"end":return d.stop()}},c)})),g.apply(this,arguments)}function a(c,u){return i.apply(this,arguments)}function i(){return i=f()(r()().mark(function c(u,W){return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.abrupt("return",!0);case 1:case"end":return w.stop()}},c)})),i.apply(this,arguments)}},88774:function(t,n,o){o.r(n),o.d(n,{default:function(){return G}});var e=o(90228),r=o.n(e),C=o(87999),f=o.n(C),_=o(48305),g=o.n(_),a=o(75271),i=o(49193),c=o(44792),u=o(94486),W=o(39218),d=o(19037),w=o(47109),v=o(30888),Z=o(51895),j=o(94723),L=o(70871),S=o(52676);function G(){var M=(0,i.Z)(),B=M.account,H=(0,a.useState)(!1),h=g()(H,2),x=h[0],y=h[1],R=(0,a.useState)(!1),D=g()(R,2),N=D[0],p=D[1],b=(0,j.Q)(),l=b.signMessageAsync,m=(0,a.useCallback)(function(){var P=f()(r()().mark(function k(I){var T,O,z,K;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(T=I==null?void 0:I.address,T){s.next=4;break}return d.ZP.error("Please connect wallet first."),s.abrupt("return");case 4:return s.next=6,(0,L.getNonce)(T);case 6:if(O=s.sent,O){s.next=10;break}return d.ZP.error("Failed to get nonce."),s.abrupt("return");case 10:return s.prev=10,z=(0,Z.e)({domain:window.location.hostname,address:T,statement:"Sign in with Ethereum",uri:window.location.origin,version:"1",chainId:W.ny.id,nonce:O}),p(!0),console.log("signing message"),s.next=16,l({message:z});case 16:return K=s.sent,console.log("get signature",K),s.next=20,(0,L.verifyMessage)(z,K);case 20:d.ZP.success("Sign in successfully."),y(!0),p(!1),s.next=29;break;case 25:s.prev=25,s.t0=s.catch(10),d.ZP.error(s.t0.message),p(!1);case 29:case"end":return s.stop()}},k,null,[[10,25]])}));return function(k){return P.apply(this,arguments)}}(),[]);return(0,S.jsxs)(w.Z,{children:[(0,S.jsx)(c.w,{modalProps:{mode:"simple"},onDisconnected:function(){y(!1)},onConnected:function(k){return m(k)},children:(0,S.jsx)(u.N,{})}),!x&&B&&(0,S.jsx)(v.ZP,{type:"primary",loading:N,onClick:function(){m(B)},children:"Sign"})]})}},35780:function(t,n,o){o.r(n),o.d(n,{fillWithPrefix:function(){return r.fillWithPrefix},formatAddress:function(){return r.formatAddress},formatBalance:function(){return r.formatBalance},getPlatform:function(){return e.getPlatform},writeCopyText:function(){return e.writeCopyText}});var e=o(43242),r=o(17083)},24224:function(t,n){n.Z=`import { Address } from '@ant-design/web3';

const App: React.FC = () => {
  return <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />;
};

export default App;
`},63964:function(t,n){n.Z=`import { Address } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Address
      ellipsis={{
        headClip: 8,
        tailClip: 6,
      }}
      copyable
      address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
    />
  );
};

export default App;
`},90126:function(t,n){n.Z=`import { Address } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip />
      <Address
        ellipsis
        address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        tooltip={<span>hello</span>}
      />
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip={'hi'} />
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip={false} />
    </Space>
  );
};

export default App;
`},96091:function(t,n){n.Z=`import { Address } from '@ant-design/web3';
import { Space } from 'antd';

import { formatAddress } from '../../utils';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <div>
        Default format: <Address address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} format />
      </div>
      <div>
        Custom format:{' '}
        <Address
          address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
          format={(input) => {
            return formatAddress(input, 5);
          }}
        />
      </div>
    </Space>
  );
};

export default App;
`},22568:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';

/**
 * The main application component that sets up the BitcoinWeb3ConfigProvider and Connector.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider autoConnect wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]}>
      <Connector
        modalProps={{
          group: false,
          mode: 'simple',
        }}
      >
        <ConnectButton />
      </Connector>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},44668:function(t,n){n.Z=`import React, { useState } from 'react';
import { ConnectButton, Connector, NFTImage } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
  type Inscription,
} from '@ant-design/web3-bitcoin';
import { Button, message, Space } from 'antd';

/**
 * Component to get and display inscriptions.
 * @returns {JSX.Element | null} The rendered component.
 */
const GetInscriptions: React.FC = () => {
  const { account, getInscriptions } = useBitcoinWallet();
  const [inscription, setInscription] = useState<Inscription>();

  return account ? (
    <Space direction="vertical">
      <Button
        onClick={async () => {
          try {
            const res = await getInscriptions();
            const { total, list } = res;
            if (total === 0) {
              message.info('no inscription');
              return;
            }
            setInscription(list[0]);
          } catch (error) {
            console.log('sign message error:', error);
          }
        }}
      >
        show the first inscription
      </Button>
      {!inscription ? null : inscription.contentType.includes('image') ? (
        <NFTImage src={inscription.content} width={200} />
      ) : (
        <iframe src={inscription.content} width={200} height={200} />
      )}
    </Space>
  ) : null;
};

/**
 * Main application component that sets up the BitcoinWeb3ConfigProvider and Connector.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[UnisatWallet(), XverseWallet(), OkxWallet()]}>
      <Space direction="vertical">
        <Connector>
          <ConnectButton />
        </Connector>
        <GetInscriptions />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},96815:function(t,n){n.Z=`import { NFTCard } from '@ant-design/web3';
import { BitcoinWeb3ConfigProvider } from '@ant-design/web3-bitcoin';
import { Space } from 'antd';

/**
 * The main application component that sets up the BitcoinWeb3ConfigProvider and displays NFT cards.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider>
      <Space size={16}>
        <NFTCard
          name="Bitcoin Puppet #2087"
          description="Vibing, thriving, and striving for world peace."
          address="53151380"
          tokenId={2087n}
        />
        <NFTCard
          type="pithy"
          name="NodeMonkes"
          description="The first original 10k collection inscribed on bitcoin."
          address="d5bd29bdbd768ef54442c11707e3b958803c3dc7f0a3026db90058b798ab7575i0"
          tokenId={9740n}
        />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},90858:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button, Space } from 'antd';

/**
 * Component to send Bitcoin transfer.
 * @returns {JSX.Element | null} The rendered component.
 */
const SendBitcoin: React.FC = () => {
  const { sendTransfer, account } = useBitcoinWallet();

  return account ? (
    <Button
      onClick={async () => {
        try {
          // Don't send in main network!!
          await sendTransfer({
            to: 'bc1pcdv3h6nuq705e3yk4pvdlqrcfchzvd9se9zwlhke3menvxlc58zshl0ryv',
            sats: 10000,
          });
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Send Bitcoin
    </Button>
  ) : null;
};

/**
 * Main application component that sets up the BitcoinWeb3ConfigProvider and Connector.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]} balance>
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SendBitcoin />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},27495:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button, Space } from 'antd';

/**
 * Component to sign a message.
 * @returns {JSX.Element | null} The rendered component.
 */
const SignMessage: React.FC = () => {
  const { signMessage, account } = useBitcoinWallet();
  return account ? (
    <Button
      onClick={async () => {
        try {
          const result = await signMessage?.('Hello World!');
          console.log('sign message success!', result);
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Sign Message
    </Button>
  ) : null;
};

/**
 * Component to sign a PSBT (Partially Signed Bitcoin Transaction).
 * @returns {JSX.Element | null} The rendered component.
 */
const SignPsbt: React.FC = () => {
  const { signPsbt, account } = useBitcoinWallet();

  // You can use libraries like 'bitcoinjs-lib' or 'scure-btc-signer' to create PSBTs.
  // This is a real PSBT base64 data for example.
  const psbt =
    'cHNidP8BAF4CAAAAAa/v4ZPYjm+iJc1pB3IybYY6wPpScPDlxvHmNE557J2vAQAAAAD/////AWqKAAAAAAAAIlEgZDcUdAs/gCZIkazJyMw1I54n2QGxN1W2ph6m+4zYHBkAAAAACPwCbWUDc2lnQE+yrULMRi3UwxQDf8idtfykJVzjE08jIP9fdU/6yvEfdlqCAWNwXFgSx1Nb7jrfPFYlY7gLaQ87EpcDpwaLdzQL/AJtZQZzaWdleHAIQnj3E+QqoAAAAQErIgIAAAAAAAAiUSBkNxR0Cz+AJkiRrMnIzDUjnifZAbE3VbamHqb7jNgcGQEDBIMAAAABFyCauIGVY+9bxYwyEp3poW+sSayOhwQuSrI4DnH80/zCuwAA';
  return account ? (
    <Button
      onClick={async () => {
        try {
          const result = await signPsbt?.({ psbt });
          console.log('sign psbt success!', result);
        } catch (error) {
          console.log('sign psbt error:', error);
        }
      }}
    >
      Sign PSBT
    </Button>
  ) : null;
};

/**
 * Main application component that sets up the BitcoinWeb3ConfigProvider and Connector.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]}>
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SignMessage />
        <SignPsbt />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},86044:function(t,n){n.Z=`import { BrowserLink } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';

const App: React.FC = () => {
  return (
    <BrowserLink
      chain={Mainnet}
      address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default App;
`},29284:function(t,n){n.Z=`import { BrowserLink } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        chain={Mainnet}
        iconStyle={{
          fontSize: 40,
          background: '#eee',
          boxShadow: '0 0 5px #999',
          padding: 8,
          borderRadius: '50%',
        }}
        target="_blank"
        rel="noopener noreferrer"
      />
    </Space>
  );
};

export default App;
`},12640:function(t,n){n.Z=`import { LinkOutlined } from '@ant-design/icons';
import { BrowserLink } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <BrowserLink
      icon={<LinkOutlined />}
      address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
      name="Custom name"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default App;
`},3314:function(t,n){n.Z=`import { BrowserLink } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <div
      style={{
        fontSize: 64,
      }}
    >
      <BrowserLink
        iconOnly
        address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default App;
`},14023:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        size="small"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        size="large"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
    </Space>
  );
};

export default App;
`},57110:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'test.eth',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1000000000000000000n,
        }}
      />
    </Space>
  );
};

export default App;
`},86745:function(t,n){n.Z=`import React from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  const mockAccount = { address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' };
  const [account, setAccount] = React.useState<Account | undefined>(mockAccount);
  return (
    <ConnectButton
      account={account}
      onConnectClick={() => {
        setAccount(mockAccount);
      }}
      onDisconnectClick={() => {
        setAccount(undefined);
      }}
    />
  );
};

export default App;
`},58063:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, type Chain } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import { Space } from 'antd';

const App: React.FC = () => {
  const [chain, setChain] = React.useState<Chain>(Polygon);
  return (
    <Space>
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        type="primary"
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        size="large"
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
    </Space>
  );
};

export default App;
`},10415:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { WalletColorful, WalletWhiteColorful } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        icon={<WalletWhiteColorful />}
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
      />
      <ConnectButton
        icon={<WalletColorful />}
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
    </Space>
  );
};

export default App;
`},10860:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

import type { MenuItemType } from '../interface';

const App: React.FC = () => {
  const menuItems: MenuItemType[] = [
    {
      label: 'Menu Item 1',
      key: '1',
      onClick: () => {
        console.log('Menu Item 1 clicked');
      },
    },
    {
      label: 'Menu Item 2',
      key: '2',
      onClick: () => {
        console.log('Menu Item 2 clicked');
      },
    },
  ];
  return (
    <Space>
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'Display default menu',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu
      />
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'Insert menu items before default items',
        }}
        profileModal={false}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        onMenuItemClick={(item) => console.log('onMenuItemClick', item)}
        actionsMenu={{
          extraItems: menuItems,
        }}
      />
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'Override menu items',
        }}
        profileModal={false}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        onMenuItemClick={(item) => console.log('onMenuItemClick', item)}
        actionsMenu={{
          items: menuItems,
        }}
      />
    </Space>
  );
};

export default App;
`},19005:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <ConnectButton
      account={{
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        name: 'wanderingearth.eth',
      }}
      tooltip
    />
  );
};

export default App;
`},78556:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Alert, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display profileModal by default',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Do not show profileModal',
        }}
        actionsMenu={false}
        profileModal={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Customize profileModal',
        }}
        actionsMenu={false}
        profileModal={{
          width: 400,
          footer: <Alert message="Custom footer" type="success" style={{ textAlign: 'center' }} />,
        }}
      />
    </Space>
  );
};

export default App;
`},57486:function(t,n){n.Z=`import React from 'react';
import type { Wallet } from '@ant-design/web3';
import { ConnectButton } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { message } from 'antd';

const App: React.FC = () => {
  return (
    <ConnectButton
      availableWallets={[
        {
          ...metadata_MetaMask,
          hasExtensionInstalled: async () => true,
        },
        {
          ...metadata_WalletConnect,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_TokenPocket,
          hasExtensionInstalled: async () => true,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
      ]}
      onConnectClick={(wallet?: Wallet) => {
        message.info(\`Connect with \${wallet?.name || 'More'}\`);
      }}
      quickConnect
    />
  );
};

export default App;
`},26682:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }} tooltip />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'Custom Title' }}
        tooltip={{
          title: 'aaaaaabbbbbbcccccc',
        }}
      />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'UnCopyable' }}
        tooltip={{
          title: 'aaaaaabbbbbbcccccc',
          copyable: false,
        }}
      />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'Default Formatter' }}
        tooltip={{ format: true }}
      />
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18', name: 'Custom Formatter' }}
        tooltip={{ format: (address) => address.slice(0, 10) }}
      />
    </Space>
  );
};

export default App;
`},39302:function(t,n){n.Z=`import { ConnectButton } from '@ant-design/web3';
import { ConfigProvider, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
        tooltip
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
        }}
      >
        <ConnectButton
          type="primary"
          account={{
            address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          }}
          tooltip
        />
      </ConfigProvider>
      <ConnectButton
        type="dashed"
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
      <ConnectButton
        type="link"
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
    </Space>
  );
};

export default App;
`},19119:function(t,n){n.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectModal } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_MobileConnect,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_TokenPocket,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
  metadata_MobileConnect,
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
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: 'Test Wallet3 Has a Long Name',
    remark: 'remark 3',
    app: {
      link: 'https://test.com/xxx',
    },
  },
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_TokenPocket,
  metadata_Trust,
];
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC<ConnectModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        {...props}
      />
    </>
  );
};

export default App;
`},12599:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { DefaultGuide, Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};
const guide: DefaultGuide = {
  title: 'What is a Wallet?',
  infos: [
    {
      title: 'A Home for your Digital Assets',
      description:
        'Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
    },
    {
      title: 'A New Way to Log In',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In2',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In3',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
  ],
  moreLink: 'https://test.com/xxx',
};

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        guide={guide}
      />
    </>
  );
};

export default App;
`},8045:function(t,n){n.Z=`import React from 'react';
import { ConfigProvider, Space, theme } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Space>
        <BasiceDemo />
        <SimpleDemo />
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},68159:function(t,n){n.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectModal } from '@ant-design/web3';
import { Button, Space } from 'antd';
import type { EmptyProps } from 'antd';

const App: React.FC<ConnectModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [emptyProps, setEmptyProps] = React.useState<EmptyProps>();

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setEmptyProps(undefined);
            setOpen(true);
          }}
        >
          Open
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setEmptyProps({
              image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
              description: (
                <>
                  Not find Wallet,{' '}
                  <a href="https://www.tokenpocket.pro/" target="_blank" rel="noreferrer">
                    Get TokenPocket
                  </a>
                </>
              ),
            });
            setOpen(true);
          }}
        >
          Open with custom
        </Button>
      </Space>
      <ConnectModal
        open={open}
        walletList={[]}
        onCancel={() => setOpen(false)}
        mode="simple"
        emptyProps={emptyProps}
        {...props}
      />
    </>
  );
};

export default App;
`},10215:function(t,n){n.Z=`import React from 'react';
import { Space } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';

const App: React.FC = () => {
  return (
    <Space>
      <BasiceDemo
        footer={
          <div>
            Powered By <a href="https://web3.ant.design">Ant Design Web3</a>
          </div>
        }
      />
      <SimpleDemo
        footer={
          <div>
            Powered By <a href="https://web3.ant.design">Ant Design Web3</a>
          </div>
        }
      />
    </Space>
  );
};

export default App;
`},7746:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC = () => {
  return (
    <Card
      style={{
        maxWidth: 797,
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <ConnectModal.ModalPanel
        group={{
          groupOrder,
        }}
        walletList={walletList}
      />
    </Card>
  );
};

export default App;
`},39816:function(t,n){n.Z=`import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC<ConnectModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with simple
      </Button>
      <ConnectModal
        open={open}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        mode="simple"
        {...props}
      />
    </>
  );
};

export default App;
`},4877:function(t,n){n.Z=`import React from 'react';
import { ConfigProvider, Space } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';
import { customToken } from './tokens';

const App: React.FC = () => {
  return (
    <Space>
      <ConfigProvider theme={customToken}>
        <BasiceDemo />
      </ConfigProvider>
      <ConfigProvider theme={customToken}>
        <SimpleDemo />
      </ConfigProvider>
    </Space>
  );
};

export default App;
`},32861:function(t,n){n.Z=`import type { ThemeConfig } from 'antd';

export const customToken: ThemeConfig = {
  token: {
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
    borderRadius: 6,
    colorPrimary: '#8442ff',
    colorInfo: '#8442ff',
  },
  components: {
    Button: {
      borderRadius: 16,
      borderRadiusLG: 24,
      borderRadiusSM: 8,
      controlHeight: 44,
      marginXS: 8,
      paddingContentHorizontal: 24,
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
      borderRadiusLG: 10,
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
      borderRadiusLG: 24,
      borderRadiusSM: 10,
    },
  },
};
`},34046:function(t,n){n.Z=`import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        footer={'Powered by AntChain'}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        group={false}
      />
    </>
  );
};

export default App;
`},44782:function(t,n){n.Z=`import React from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Connector
      availableWallets={[metadata_MetaMask, metadata_WalletConnect]}
      connect={async () =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
            resolve();
          }, 2000);
        })
      }
      account={account}
      onConnect={() => {
        console.log('onConnect');
      }}
      onDisconnect={() => {
        console.log('onDisconnect');
      }}
      onConnected={() => {
        console.log('onConnected');
      }}
      onDisconnected={() => {
        console.log('onDisconnected');
      }}
      modalProps={{
        title: 'Ant Design Web3',
      }}
    >
      <ConnectButton />
    </Connector>
  );
};

export default App;
`},32808:function(t,n){n.Z=`import React from 'react';
import type { Account, ConnectorTriggerProps } from '@ant-design/web3';
import { Connector } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Typography } from 'antd';

const CustomTrigger: React.FC<ConnectorTriggerProps> = (props) => {
  const { loading, onConnectClick, account } = props;
  return (
    <Typography.Title level={5} onClick={() => onConnectClick?.()}>
      {loading ? 'Connecting...' : account?.address || 'Connect Your Wallet'}
    </Typography.Title>
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Connector
      availableWallets={[metadata_MetaMask, metadata_WalletConnect]}
      connect={async () =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
            resolve();
          }, 2000);
        })
      }
      account={account}
      onConnect={() => {
        console.log('onConnect');
      }}
      onDisconnect={() => {
        console.log('onDisconnect');
      }}
      onConnected={() => {
        console.log('onConnected');
      }}
      onDisconnected={() => {
        console.log('onDisconnected');
      }}
    >
      <CustomTrigger />
    </Connector>
  );
};

export default App;
`},43466:function(t,n){n.Z=`import React, { useState } from 'react';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<CryptoInputProps['balance']>();

  const handleQueryCrypto = async (token?: Token) => {
    if (!token) {
      return setTokenBalance(undefined);
    }

    // mock query token balance
    setTimeout(() => {
      setTokenBalance({
        amount: 10000000000000000000000n,
        unit: '$',
        price: 3984.57,
      });
    }, 500);
  };

  return (
    <div style={{ width: 456 }}>
      <CryptoInput
        value={crypto}
        balance={tokenBalance}
        onChange={(value) => {
          setCrypto(value);

          if (value?.token?.symbol !== crypto?.token?.symbol) {
            handleQueryCrypto(value?.token);
          }
        }}
        options={[ETH, USDT]}
      />
    </div>
  );
};

export default App;
`},65590:function(t,n){n.Z=`import React, { useState } from 'react';
import type { CryptoInputProps } from '@ant-design/web3';
import { CryptoInput } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <div style={{ width: 456 }}>
      <CryptoInput
        footer={'Custom Footer'}
        value={crypto}
        onChange={setCrypto}
        options={[ETH, USDT]}
      />
    </div>
  );
};

export default App;
`},9524:function(t,n){n.Z=`import React, { useState } from 'react';
import { CryptoInput, type CryptoInputProps } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <div style={{ width: 456 }}>
      <CryptoInput
        value={crypto}
        onChange={setCrypto}
        header={'Crypto Input Header'}
        options={[ETH, USDT]}
      />
    </div>
  );
};

export default App;
`},50951:function(t,n){n.Z=`import React, { useState } from 'react';
import { CryptoInput, type CryptoInputProps } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <div style={{ width: 456 }}>
      <CryptoInput value={crypto} footer={false} onChange={setCrypto} options={[ETH, USDT]} />
    </div>
  );
};

export default App;
`},25230:function(t,n){n.Z=`import React, { useState } from 'react';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';
import { Radio } from 'antd';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<CryptoInputProps['balance']>();

  const [size, setSize] = useState<CryptoInputProps['size']>('middle');

  const handleQueryCrypto = async (token?: Token) => {
    if (!token) {
      return setTokenBalance(undefined);
    }

    // mock query token balance
    setTimeout(() => {
      setTokenBalance({
        amount: 10000000000000000000000n,
        unit: '$',
        price: 3984.57,
      });
    }, 500);
  };

  return (
    <div style={{ width: 480, rowGap: 16 }}>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
        optionType="button"
        options={[
          {
            label: 'small',
            value: 'small',
          },
          {
            label: 'middle',
            value: 'middle',
          },
          {
            label: 'large',
            value: 'large',
          },
        ]}
        style={{ marginBottom: 16 }}
      />
      <CryptoInput
        value={crypto}
        balance={tokenBalance}
        onChange={(value) => {
          setCrypto(value);

          if (value?.token?.symbol !== crypto?.token?.symbol) {
            handleQueryCrypto(value?.token);
          }
        }}
        options={[ETH, USDT]}
        size={size}
      />
    </div>
  );
};

export default App;
`},69442:function(t,n){n.Z=`import React, { useState } from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';
import { Button, Flex } from 'antd';
import Decimal from 'decimal.js';

const App: React.FC = () => {
  const [cryptoPair, setCryptoPair] = useState<CryptoInputProps['value'][]>([]);

  const [tokenBalances, setTokenBalances] = useState<CryptoInputProps['balance'][]>([]);

  const handleQueryCrypto = async (crptoIndex: number, token?: Token) => {
    const newTokenBalances = [...tokenBalances];
    if (!token) {
      newTokenBalances[crptoIndex] = undefined;

      return setTokenBalances(newTokenBalances);
    }

    // mock query token balance
    console.log('Decimal.pow(10, token.decimal)', Decimal.pow(10, token.decimal).toFixed());

    setTimeout(() => {
      newTokenBalances[crptoIndex] = {
        amount: BigInt(new Decimal(1000).times(Decimal.pow(10, token.decimal)).toFixed()),
        unit: '$',
        price: token.name.includes('USD') ? 0.99 : 3984.57,
      };

      setTokenBalances(newTokenBalances);
    }, 500);
  };

  return (
    <Flex vertical align="center" style={{ width: 456 }} gap={16}>
      <CryptoInput
        header={'Sell'}
        value={cryptoPair[0]}
        balance={tokenBalances[0]}
        onChange={(crypto) => {
          setCryptoPair([crypto, cryptoPair[1]]);

          if (crypto?.token?.symbol !== cryptoPair?.[0]?.token?.symbol) {
            handleQueryCrypto(0, crypto?.token);
          }
        }}
        options={[ETH, USDT]}
      />
      <span
        style={{
          width: 30,
          height: 30,
          background: '#fff',
          border: '1px solid #d9d9d9',
          borderRadius: 8,
          marginBlock: -24,
          zIndex: 2,
          textAlign: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        }}
        onClick={() => {
          setCryptoPair([cryptoPair[1], cryptoPair[0]]);

          setTokenBalances([tokenBalances[1], tokenBalances[0]]);
        }}
      >
        <SwapOutlined
          style={{
            fontSize: 18,
            transform: 'rotate(90deg)',
            marginBlockStart: 6,
          }}
        />
      </span>
      <CryptoInput
        header={'Buy'}
        value={cryptoPair[1]}
        balance={tokenBalances[1]}
        onChange={(crypto) => {
          setCryptoPair([cryptoPair[0], crypto]);

          if (crypto?.token?.symbol !== cryptoPair?.[1]?.token?.symbol) {
            handleQueryCrypto(1, crypto?.token);
          }
        }}
        options={[ETH, USDT]}
      />
      <Button
        type="primary"
        size="large"
        style={{ width: '100%' }}
        onClick={() => {
          console.log('current crypto pair:', cryptoPair);
        }}
      >
        Swap
      </Button>
    </Flex>
  );
};

export default App;
`},3497:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';

const App: React.FC = () => {
  return <CryptoPrice value={1230000000000000000n} />;
};

export default App;
`},38226:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';
import { EthereumCircleFilled } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <CryptoPrice
      icon
      chain={{
        id: 1,
        name: 'Ethereum',
        nativeCurrency: {
          name: 'Ether',
          symbol: 'WETH',
          decimals: 18,
          icon: <EthereumCircleFilled />,
        },
      }}
      value={1230000000000000000n}
    />
  );
};

export default App;
`},56220:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';

function formatMoney(value: number) {
  // \u4F7F\u7528\u5343\u5206\u7B26\u5206\u9694\u91D1\u989D
  return value.toLocaleString();
}

const App: React.FC = () => {
  const customFormat = (
    preFormatValue: string,
    info: { originValue: number | bigint; symbol: string; decimals?: number; fixed?: number },
  ) => {
    return \`\${formatMoney(Number(preFormatValue))} \${info.symbol}\`;
  };
  return <CryptoPrice format={customFormat} value={123456700000000000000000n} />;
};

export default App;
`},52949:function(t,n){n.Z=`import { CryptoPrice } from '@ant-design/web3';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <CryptoPrice icon value={1230000000000000000n} />
      <CryptoPrice icon={<BitcoinCircleColorful />} value={1230000000000000000n} />
    </Space>
  );
};

export default App;
`},11984:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  EthersWeb3ConfigProvider,
  MetaMask,
  OkxWallet,
  useEthersProvider,
  useEthersSigner,
} from '@ant-design/web3-ethers';
import { useBlockNumber } from '@ant-design/web3-ethers/wagmi';
import { Typography } from 'antd';

const AddressPreviewer = () => {
  const provider = useEthersProvider(); // ethers provider
  const signer = useEthersSigner();
  const blockNumber = useBlockNumber();

  return (
    <Typography.Paragraph>
      address: {signer?.address ?? '-'} (at {Number(blockNumber.data)})
    </Typography.Paragraph>
  );
};

const App: React.FC = () => {
  return (
    <EthersWeb3ConfigProvider
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
      wallets={[MetaMask(), OkxWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
      <AddressPreviewer />
    </EthersWeb3ConfigProvider>
  );
};

export default App;
`},98876:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { EthWeb3jsConfigProvider, useWeb3js } from '@ant-design/web3-eth-web3js';

const App: React.FC = () => {
  const web3 = useWeb3js();
  const [blockNum, setBlockNum] = React.useState('0x');
  React.useEffect(() => {
    web3?.eth.getBlockNumber().then((num) => {
      console.log('current block number:', num);
      setBlockNum('0x' + num.toString(16));
    });
  }, [web3]);

  return <div>Current block height: {blockNum}</div>;
};

export default () => {
  return (
    <EthWeb3jsConfigProvider ens eip6963={{ autoAddInjectedWallets: true }} chains={[Mainnet]}>
      <Connector modalProps={{ mode: 'simple' }}>
        <ConnectButton quickConnect style={{ minWidth: 120 }} />
      </Connector>
      <App />
    </EthWeb3jsConfigProvider>
  );
};
`},29767:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { EthWeb3jsConfigProvider, useWeb3js } from '@ant-design/web3-eth-web3js';
import { Button, Input, message, Space } from 'antd';

const SignerButton = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const web3 = useWeb3js();
  const [msg, setMsg] = React.useState('Hi, Ant Design Web3!!');
  const [signature, setSignature] = React.useState('');

  if (!web3) return <>\u{1F446} Please connect wallet.</>;
  return (
    <Space>
      {contextHolder}
      <Input
        placeholder="Enter message to sign"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <Button
        onClick={async () => {
          const [address] = await web3!.eth.getAccounts();

          if (!address) {
            messageApi.error('Please connect wallet first!');
            return;
          }

          const sig = await web3.eth.personal.sign(web3.utils.utf8ToHex(msg), address, '');
          setSignature(sig);
        }}
      >
        Sign Message
      </Button>
      <div>Signature: {signature}</div>
    </Space>
  );
};

const App: React.FC = () => {
  return (
    <EthWeb3jsConfigProvider ens eip6963={{ autoAddInjectedWallets: true }} chains={[Mainnet]}>
      <Space direction="vertical">
        <Connector modalProps={{ mode: 'simple' }}>
          <ConnectButton quickConnect style={{ minWidth: 120 }} />
        </Connector>
        <SignerButton />
      </Space>
    </EthWeb3jsConfigProvider>
  );
};

export default App;
`},17998:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  Hardhat,
  Localhost,
  Mainnet,
  MetaMask,
  Polygon,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  X1Testnet,
} from '@ant-design/web3-wagmi';
import { http } from 'wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      eip6963
      transports={{
        [Mainnet.id]: http(),
        [Polygon.id]: http(),
        [X1Testnet.id]: http(),
        [Hardhat.id]: http(),
        [Localhost.id]: http(),
      }}
      wallets={[MetaMask(), WalletConnect()]}
      chains={[Mainnet, Polygon, X1Testnet, Hardhat, Localhost]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},38236:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { EthereumCircleColorful } from '@ant-design/web3-icons';
import {
  MetaMask,
  TokenPocket,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { injected } from 'wagmi/connectors';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        new UniversalWallet(
          {
            name: 'TestWallet',
            remark: 'My TestWallet',
            icon: <EthereumCircleColorful />,
            extensions: [],
            group: 'Popular',
          },
          () => {
            return injected({
              target() {
                return {
                  id: 'testWallet',
                  name: 'TestWallet',
                  provider: window.ethereum,
                };
              },
            });
          },
        ),
        TokenPocket({
          group: 'Popular',
        }),
        MetaMask({
          group: 'More',
        }),
      ]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},33158:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[MetaMask()]}
    >
      <Connector
        onConnected={(account) => {
          messageApi.success(\`Connected to \${account?.address}\`);
        }}
      >
        <ConnectButton />
      </Connector>
      {contextHolder}
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},51891:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  ImToken,
  MetaMask,
  MobileWallet,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        CoinbaseWallet(
          {},
          {
            appName: 'ant.design.web3',
            jsonRpcUrl: \`https://api.zan.top/node/v1/eth/mainnet/\${YOUR_ZAN_API_KEY}\`,
          },
        ),
        OkxWallet(),
        ImToken(),
        MobileWallet(),
      ]}
    >
      <Connector
        modalProps={{
          mode: 'simple',
          footer: (
            <div>
              Powered By <a href="https://web3.ant.design">Ant Design Web3</a>
            </div>
          ),
        }}
      >
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},13838:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  ImToken,
  MetaMask,
  MobileWallet,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        TokenPocket({
          group: 'Popular',
        }),
        MobileWallet({
          group: 'Popular',
        }),
        WalletConnect(),
        CoinbaseWallet(
          {},
          {
            appName: 'ant.design.web3',
            jsonRpcUrl: \`https://api.zan.top/node/v1/eth/mainnet/\${YOUR_ZAN_API_KEY}\`,
          },
        ),
        OkxWallet(),
        ImToken(),
      ]}
    >
      <Connector
        modalProps={{
          footer: (
            <div>
              Powered By <a href="https://web3.ant.design">Ant Design Web3</a>
            </div>
          ),
        }}
      >
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},3716:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider eip6963 ens balance wallets={[MetaMask()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},37072:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  Mainnet,
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { http } from 'wagmi';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[Mainnet]}
      transports={{
        [Mainnet.id]: http(),
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
      queryClient={queryClient}
    >
      <Connector
        modalProps={{
          mode: 'simple',
        }}
      >
        <ConnectButton quickConnect />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},14107:function(t,n){n.Z=`import {
  Mainnet,
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { http } from 'wagmi';

import SignBtn from './sign-btn';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[Mainnet]}
      transports={{
        [Mainnet.id]: http(),
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
      queryClient={queryClient}
    >
      <SignBtn />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},69040:function(t,n){n.Z=`export async function getNonce(chainAddress: string) {
  // mock getNonce
  return 'PtZZs3w7ktHsbSFUcmwb';
}

export async function verifyMessage(message: string, signature: string) {
  // mock verifyMessage
  return true;
}
`},5174:function(t,n){n.Z=`import { useCallback, useState } from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-wagmi';
import { Button, message, Space } from 'antd';
import { createSiweMessage } from 'viem/siwe';
import { useSignMessage } from 'wagmi';

import { getNonce, verifyMessage } from './mock-api';

export default function App() {
  const { account } = useAccount();

  const [signed, setSigned] = useState<boolean>(false);
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const { signMessageAsync } = useSignMessage();

  const signIn = useCallback(async (a?: Account) => {
    const address = a?.address as \`0x\${string}\`;

    if (!address) {
      message.error('Please connect wallet first.');
      return;
    }

    // get nonce
    const nonce = await getNonce(address);
    if (!nonce) {
      message.error('Failed to get nonce.');
      return;
    }

    let msg: string;
    let signature: \`0x\${string}\`;

    try {
      msg = createSiweMessage({
        domain: window.location.hostname,
        address,
        statement: 'Sign in with Ethereum',
        uri: window.location.origin,
        version: '1',
        chainId: Mainnet.id,
        nonce,
      });
      setSignLoading(true);
      console.log('signing message');
      signature = await signMessageAsync({ message: msg });
      console.log('get signature', signature);
      await verifyMessage(msg!, signature!);
      message.success('Sign in successfully.');
      setSigned(true);
      setSignLoading(false);
    } catch (error: any) {
      message.error(error.message);
      setSignLoading(false);
    }
  }, []);

  return (
    <Space>
      <Connector
        modalProps={{
          mode: 'simple',
        }}
        onDisconnected={() => {
          setSigned(false);
        }}
        onConnected={(a) => signIn(a)}
      >
        <ConnectButton />
      </Connector>
      {!signed && account && (
        <Button
          type="primary"
          loading={signLoading}
          onClick={() => {
            signIn(account);
          }}
        >
          Sign
        </Button>
      )}
    </Space>
  );
}
`},22839:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
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
      config={config}
      queryClient={queryClient}
    >
      <Connector
        modalProps={{
          mode: 'simple',
        }}
      >
        <ConnectButton quickConnect />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},80896:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[MetaMask(), WalletConnect()]}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
        useWalletConnectOfficialModal: true,
      }}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},65418:function(t,n){n.Z=`import React from 'react';
import { useAccount } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  const { account } = useAccount();
  if (!account) {
    return <div>Not Connected</div>;
  }
  return <Space direction="vertical">{account.address}</Space>;
};

export default App;
`},40928:function(t,n){n.Z=`import React from 'react';
import { useAccount, useConnection, Web3ConfigProvider, type Account } from '@ant-design/web3';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const { account } = useAccount();
  const { connect, disconnect } = useConnection();
  return (
    <>
      <Button
        onClick={() => {
          if (account) {
            disconnect?.();
            return;
          }
          console.log('connect');
          connect?.();
        }}
      >
        {account ? 'Disconnect' : 'Connect'}
      </Button>
      {account ? <p>Account: {account?.address}</p> : <p>Not Connected</p>}
    </>
  );
};

const App: React.FC = () => {
  const [testAccount, setTestAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
      account={testAccount}
      connect={async () => {
        console.log('connect call');
        setTestAccount({
          address: '0x1234567890123456789012345678901234567890',
        });
      }}
      disconnect={async () => {
        setTestAccount(undefined);
      }}
    >
      <Demo />
    </Web3ConfigProvider>
  );
};

export default App;
`},77394:function(t,n){n.Z=`import React from 'react';
import { useNFT } from '@ant-design/web3';
import { Spin } from 'antd';

const App: React.FC = () => {
  const { metadata, error, loading } = useNFT('0x79fcdef22feed20eddacbb2587640e45491b757f', 42n);
  if (error) {
    return <div>{error.message}</div>;
  }
  return <Spin spinning={loading}>{metadata.name}</Spin>;
};

export default App;
`},52116:function(t,n){n.Z=`import { BitcoinCircleColorful, EthereumFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful />
      <EthereumFilled />
    </Space>
  );
};

export default App;
`},98217:function(t,n){n.Z=`import { BitcoinCircleColorful, EthereumFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful
        style={{
          fontSize: 48,
        }}
      />
      <div
        style={{
          fontSize: 48,
        }}
      >
        <EthereumFilled />
      </div>
    </Space>
  );
};

export default App;
`},99252:function(t,n){n.Z=`import React from 'react';
import { NFTCard } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space size={16}>
      <NFTCard
        name="My NFT"
        tokenId={16}
        price={{
          value: 1230000000000000000n,
        }}
        like={{
          totalLikes: 1600,
        }}
        description="This is description"
        showAction
        footer="This is footer"
        image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
      />
      <NFTCard
        type="pithy"
        name="My NFT"
        tokenId={16}
        price={{
          value: 1230000000000000000n,
        }}
        like={{
          totalLikes: 1600,
        }}
        description="This is description"
        showAction
        footer="This is footer"
        image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
      />
    </Space>
  );
};

export default App;
`},18857:function(t,n){n.Z=`import { NFTCard } from '@ant-design/web3';
import { ConfigProvider, Space, theme } from 'antd';

const { darkAlgorithm } = theme;

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <Space size={16}>
        <NFTCard
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
        <NFTCard
          type="pithy"
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},40250:function(t,n){n.Z=`import React from 'react';
import { NFTCard } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <NFTCard
        style={{
          height: 498,
        }}
        getNFTMetadata={async () => {
          throw new Error('This is an error');
        }}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />
      <NFTCard
        style={{
          height: 498,
        }}
        getNFTMetadata={async () => {
          throw new Error('This is an error');
        }}
        errorRender={(e) => e.message}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />
      <NFTCard
        name="My NFT"
        tokenId={16}
        description="This is description"
        showAction
        footer="This is footer"
        image="errorimageurl"
      />
    </Space>
  );
};

export default App;
`},92038:function(t,n){n.Z=`import { NFTCard } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <NFTCard address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42n} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},1830:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <NFTImage
      src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"
      width={200}
    />
  );
};

export default App;
`},11975:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <NFTImage
      address="0x79fcdef22feed20eddacbb2587640e45491b757f"
      tokenId={42n}
      width={200}
      getNFTMetadata={({ address: _address, tokenId: _tokenId }) => {
        return Promise.resolve({
          name: \`Test_\${_address}_\${_tokenId}\`,
          image:
            'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        });
      }}
    />
  );
};

export default App;
`},78984:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';
import { BitcoinWeb3ConfigProvider } from '@ant-design/web3-bitcoin';

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider>
      <NFTImage
        address="d5bd29bdbd768ef54442c11707e3b958803c3dc7f0a3026db90058b798ab7575i0"
        tokenId={9740n}
        width={200}
      />
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
`},64975:function(t,n){n.Z=`import { NFTImage } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42n} width={200} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
`},60333:function(t,n){n.Z=`import React from 'react';
import { PayPanel } from '@ant-design/web3';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { Card } from 'antd';
import { parseUnits } from 'viem';

const App: React.FC = () => {
  return (
    <Card style={{ width: 450 }}>
      <PayPanel
        target={{
          [Mainnet.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
          [BSC.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
        }}
        supportedChains={[{ chain: Mainnet }, { chain: BSC }]}
        token={USDT}
        amount={parseUnits('1', USDT.decimal)}
        wallets={[metadata_MetaMask, metadata_imToken, metadata_TokenPocket]}
        onFinish={() => {
          console.log('complete');
        }}
      />
    </Card>
  );
};

export default App;
`},10463:function(t,n){n.Z=`import React, { useState } from 'react';
import { PayPanel } from '@ant-design/web3';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { Button, Modal } from 'antd';
import { parseUnits } from 'viem';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with PayPanel
      </Button>
      <Modal open={open} footer={null} width={450} onCancel={hideModal}>
        <PayPanel
          target={{
            [Mainnet.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
            [BSC.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
          }}
          supportedChains={[{ chain: Mainnet }, { chain: BSC }]}
          token={USDT}
          amount={parseUnits('1', USDT.decimal)}
          wallets={[metadata_MetaMask, metadata_imToken, metadata_TokenPocket]}
          onFinish={() => {
            hideModal();
            console.log('complete');
          }}
        />
      </Modal>
    </>
  );
};

export default App;
`},29398:function(t,n){n.Z=`import React from 'react';
import { PayPanel } from '@ant-design/web3';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { Card } from 'antd';
import { parseUnits } from 'viem';

const GasRender: React.FC = () => {
  const supportedChains = [
    { chain: Mainnet, extra: <>GAS\u22480.003 ETH ($37.02)</> },
    { chain: BSC, extra: <>GAS\u22480.003 ETH ($37.02)</> },
  ];
  return (
    <Card style={{ width: 450 }}>
      <PayPanel
        target={{
          [Mainnet.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
          [BSC.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
        }}
        supportedChains={supportedChains}
        token={USDT}
        amount={parseUnits('1', USDT.decimal)}
        wallets={[metadata_MetaMask, metadata_imToken, metadata_TokenPocket]}
        onFinish={() => {
          console.log('complete');
        }}
      />
    </Card>
  );
};
export default GasRender;
`},88333:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider balance wallets={[CoinbaseWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},75904:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},61686:function(t,n){n.Z=`import React from 'react';
import { Address, BrowserLink, NFTCard } from '@ant-design/web3';
import { CoinbaseWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      rpcProvider={() => \`https://api.zan.top/node/v1/solana/mainnet/\${YOUR_ZAN_API_KEY}\`}
      wallets={[CoinbaseWallet()]}
    >
      <Space direction="vertical">
        <BrowserLink address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" ellipsis />
        <Address address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" ellipsis />
        <NFTCard address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" tokenId={3332} />
      </Space>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},54576:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},29201:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  solana,
  solanaDevnet,
  solanaTestnet,
  SolanaWeb3ConfigProvider,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      balance={false}
      chains={[solana, solanaTestnet, solanaDevnet]}
      wallets={[CoinbaseWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},29700:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  WalletConnectWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoAddRegisteredWallets
      balance
      wallets={[PhantomWallet(), OKXWallet(), WalletConnectWallet()]}
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
    >
      <Connector modalProps={{ mode: 'simple', group: false }}>
        <ConnectButton quickConnect />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},37669:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  PhantomWallet,
  solana,
  solanaDevnet,
  SolanaWeb3ConfigProvider,
  useWallet,
} from '@ant-design/web3-solana';
import { Button, Space } from 'antd';
import base58 from 'bs58';

const SignMessage: React.FC = () => {
  const { connected, signMessage } = useWallet();

  if (!connected) {
    return;
  }

  return (
    <Button
      onClick={async () => {
        const message = new TextEncoder().encode('Hello World!');

        try {
          const result = await signMessage?.(message);
          console.log('sign message success!', result ? base58.encode(result) : 'unknown');
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Sign Message
    </Button>
  );
};

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      balance={false}
      chains={[solana, solanaDevnet]}
      rpcProvider={() => \`https://api.zan.top/node/v1/solana/mainnet/\${YOUR_ZAN_API_KEY}\`}
      wallets={[PhantomWallet()]}
    >
      <Space direction="vertical">
        <Connector>
          <ConnectButton />
        </Connector>

        <SignMessage />
      </Space>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},63226:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { PhantomWallet, SolanaWeb3ConfigProvider, TipLinkWallet } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      wallets={[
        PhantomWallet(),
        TipLinkWallet({
          clientId: YOUR_TIPLINK_CLIENT_ID,
          theme: 'system',
          title: 'Ant Design Web3',
          hideDraggableWidget: true,
        }),
      ]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},15940:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  WalletConnectWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      wallets={[PhantomWallet(), WalletConnectWallet()]}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
`},55055:function(t,n){n.Z=`import React from 'react';
import { NFTCard, NFTImage } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider wallets={[Suiet()]}>
      <Space>
        <NFTCard address="0x110e5f6b7113ac27cad69b561d0cc595f6b875d07d2d8714e439bb73059aa6f8" />
        <NFTImage address="0x110e5f6b7113ac27cad69b561d0cc595f6b875d07d2d8714e439bb73059aa6f8" />
      </Space>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
`},85604:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createNetworkConfig } from '@mysten/dapp-kit';

const { networkConfig } = createNetworkConfig({
  testnet: { url: \`https://api.zan.top/node/v1/sui/testnet/\${YOUR_ZAN_API_KEY}\` },
  mainnet: { url: \`https://api.zan.top/node/v1/sui/mainnet/\${YOUR_ZAN_API_KEY}\` },
});

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider wallets={[Suiet()]} balance networkConfig={networkConfig}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
`},77169:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createNetworkConfig } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  devnet: { url: getFullnodeUrl('devnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
});

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider
      wallets={[Suiet()]}
      balance
      networkConfig={networkConfig}
      defaultNetwork="testnet"
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
`},78651:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const App: React.FC = () => {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <SuiWeb3ConfigProvider wallets={[Suiet()]}>
        <Connector>
          <ConnectButton />
        </Connector>
      </SuiWeb3ConfigProvider>
    </PersistQueryClientProvider>
  );
};

export default App;
`},48441:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWallet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider balance autoConnect wallets={[Suiet(), SuiWallet()]}>
      <Connector modalProps={{ mode: 'simple', group: false }}>
        <ConnectButton quickConnect />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
`},11300:function(t,n){n.Z=`import React, { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>();

  return <TokenSelect value={token} onChange={setToken} options={[ETH, USDT]} />;
};

export default App;
`},96817:function(t,n){n.Z=`import React, { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>();

  return (
    <div style={{ width: 230 }}>
      <TokenSelect
        value={token}
        onChange={setToken}
        options={[
          ETH,
          USDT,
          { ...ETH, symbol: 'ETH_CLONE', name: 'ETH_CLONE' },
          { ...USDT, symbol: 'USDT_CLONE', name: 'USDT_CLONE' },
        ]}
        mode="multiple"
        style={{ width: '100%' }}
        maxTagCount={3}
      />
    </div>
  );
};

export default App;
`},57465:function(t,n){n.Z=`import React, { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>({ ...USDT, symbol: 'Solana' });

  return <TokenSelect value={token} onChange={setToken} options={[ETH, USDT]} />;
};

export default App;
`},72420:function(t,n){n.Z=`import React, { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>();

  return (
    <TokenSelect
      showSearch
      value={token}
      onChange={setToken}
      placeholder={'Enter name / contract'}
      options={[ETH, USDT]}
    />
  );
};

export default App;
`},63090:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import { okxTonWallet, tonkeeper, TonWeb3ConfigProvider } from '@ant-design/web3-ton';

const Basic = () => {
  return (
    <TonWeb3ConfigProvider wallets={[tonkeeper, okxTonWallet, { key: 'safepalwallet' }]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};

export default Basic;
`},94595:function(t,n){n.Z=`import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CHAIN,
  dewallet,
  myTonWallet,
  openmask,
  tonhub,
  tonkeeper,
  TonWeb3ConfigProvider,
  useTonConnector,
} from '@ant-design/web3-ton';
import { Button, Space } from 'antd';

const SendTransfer: React.FC = () => {
  const { connector, account, connectConfig } = useTonConnector();
  if (account?.address && connector) {
    return (
      <Button
        onClick={() => {
          connector.sendTransaction({
            validUntil: Math.floor(Date.now() / 1000) + 360,
            network: connectConfig?.chain,
            messages: [
              {
                address: '0QBLw4PC68wCqWRLq-DtRehPkKNs0Lf-XB097tPfO10bDUWi',
                amount: '500',
              },
            ],
          });
        }}
      >
        Send Transactions
      </Button>
    );
  }
  return null;
};

const Basic = () => {
  return (
    <TonWeb3ConfigProvider
      wallets={[tonkeeper, myTonWallet, tonhub, dewallet, openmask]}
      balance
      chain={CHAIN.TESTNET}
      reconnect={false}
    >
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SendTransfer />
      </Space>
    </TonWeb3ConfigProvider>
  );
};

export default Basic;
`},96114:function(t,n){n.Z=`import copy from 'copy-to-clipboard';

export const getPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('edge')) {
    return 'Edge';
  } else if (userAgent.includes('safari')) {
    return 'Safari';
  } else {
    return 'Other';
  }
};

export const writeCopyText = async (text: string): Promise<boolean> => {
  return copy(text);
};
`},40217:function(t,n){n.Z=`/**
 * @param address address
 * @param prefixProp addressPrefix from props
 * @param prefixContext addressPrefix from context
 */
export const fillWithPrefix = (
  address: string = '',
  prefixProp?: string | false,
  prefixContext?: string | false,
): string => {
  let prefix = undefined;

  // \`0x\` is the default prefix
  if (prefixProp === undefined && prefixContext === undefined) {
    prefix = '0x';
  }

  // has prefix be set
  else {
    // use props first
    if (prefixProp !== undefined) {
      prefix = prefixProp === false ? '' : prefixProp;
    }

    // use context
    else if (prefixContext !== undefined) {
      prefix = prefixContext === false ? '' : prefixContext;
    }
  }

  if (!prefix) return address;

  return address.startsWith(prefix) ? address : \`\${prefix}\${address}\`;
};

export const formatAddress = (address: string = '', groupSize = 4): string => {
  const formattedGroups = [];

  const has0x = address.startsWith('0x');
  /* v8 ignore next */
  const formatText = has0x ? address.slice(2) : address;

  for (let i = 0; i < formatText.length; i += groupSize) {
    const group = formatText.slice(i, i + groupSize);
    formattedGroups.push(group);
  }

  const formattedText = formattedGroups.join(' ');

  /* v8 ignore next */
  return has0x ? \`0x \${formattedText}\` : formattedText;
};

export const formatBalance = (value: bigint | number, decimals: number, fixed?: number): string => {
  const bigValue = typeof value === 'bigint' ? value : BigInt(value);
  const divisor = BigInt(10 ** decimals);
  const displayValue = bigValue / divisor;
  const fraction = bigValue % divisor;

  if (fraction === 0n && fixed === undefined) {
    return \`\${displayValue}\`;
  }

  let fractionStr = fraction.toString().padStart(decimals, '0');
  if (fixed === undefined) {
    return \`\${displayValue}.\${fractionStr.replace(/0+$/, '')}\`;
  }
  fractionStr = fractionStr.substring(0, fixed).padEnd(fixed, '0');
  return \`\${displayValue}.\${fractionStr}\`;
};
`},61265:function(t,n){n.Z=`export * from './browser';
export * from './format';
`},7926:function(t,n){n.Z=`import React from 'react';
import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <Web3ConfigProvider
      locale={{
        ConnectButton: {
          connect: 'CONNECT',
        },
      }}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
`},99107:function(t,n){n.Z=`import React from 'react';
import { useProvider, Web3ConfigProvider, type Account } from '@ant-design/web3';
import { Button } from 'antd';

const ConnectTrigger: React.FC = () => {
  const { connect, account, disconnect } = useProvider();
  return (
    <Button
      onClick={() => {
        if (!account) {
          connect?.();
        } else {
          disconnect?.();
        }
      }}
    >
      {account ? account.address : 'Connect'}
    </Button>
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
      connect={async () => {
        const newAccount = {
          address: '0x1234567890123456789012345678901234567890',
        };
        setAccount(newAccount);
        console.log('newAccount', newAccount);
      }}
      disconnect={async () => {
        setAccount(undefined);
      }}
      account={account}
    >
      <ConnectTrigger />
    </Web3ConfigProvider>
  );
};

export default App;
`}}]);
