# @ant-design/web3-wagmi

## 2.4.4

### Patch Changes

- 1270c95: chore(ethers): adjusted the compatibility form of the old version of etherjs
- 02e74aa: fix: set sideEffects false for enable treeshaking
- Updated dependencies [02e74aa]
  - @ant-design/web3-assets@1.7.1
  - @ant-design/web3-common@1.9.1

## 2.4.3

### Patch Changes

- a90c674: refactor: remove unused code
- b9977a2: fix: useCallback for getNFTMetadata for avoid `Error: Maximum update depth exceeded`
- Updated dependencies [994ead5]
  - @ant-design/web3-assets@1.7.0
  - @ant-design/web3-common@1.9.0

## 2.4.2

### Patch Changes

- b1b8a46: feat: supoort ethers adapter
- 6ac3c69: fix: Correct typos for connect
- f4f80a7: chore: Optimize if-else statements
- 176299c: fix: move @tanstack/react-query to peerDependencies for fix react-query context error
- Updated dependencies [7fb2d02]
- Updated dependencies [dfef374]
- Updated dependencies [71d281a]
- Updated dependencies [b1b8a46]
- Updated dependencies [ab3eac4]
- Updated dependencies [b950d50]
  - @ant-design/web3-common@1.8.0
  - @ant-design/web3-assets@1.6.0

## 2.4.1

### Patch Changes

- 813ec32: chore: modify NFTCard className prefix
- Updated dependencies [b5eccf9]
- Updated dependencies [cb0a288]
- Updated dependencies [6f4c55f]
  - @ant-design/web3-assets@1.5.0
  - @ant-design/web3-common@1.7.0

## 2.4.0

### Minor Changes

- 52d58e5: feat: Add ConnectType for wallet connect

### Patch Changes

- 8d71a6d: fix: The button status is incorrect when requesting ENS information
- 6eaee12: chore: adjust the display dom structure of wallet icon in eip6963 mode
- Updated dependencies [52d58e5]
- Updated dependencies [201c2ec]
- Updated dependencies [d273651]
  - @ant-design/web3-common@1.6.0
  - @ant-design/web3-assets@1.4.1

## 2.3.0

### Minor Changes

- e5b4fe9: feat: add imToken wallet info.

### Patch Changes

- 935b2e2: fix: prop name of error message is wrong
- 0673036: fix: cache WalletConnect qrcode uri for fix qrcode display bug
- 8731741: fix: UniversalWallet getQrCode bug on the second times
- Updated dependencies [e5b4fe9]
  - @ant-design/web3-assets@1.4.0

## 2.2.5

### Patch Changes

- Updated dependencies [21a3e3b]
  - @ant-design/web3-common@1.5.0
  - @ant-design/web3-assets@1.3.1

## 2.2.4

### Patch Changes

- Updated dependencies [d601345]
  - @ant-design/web3-assets@1.3.0

## 2.2.3

### Patch Changes

- Updated dependencies [dead69b]
  - @ant-design/web3-common@1.4.0
  - @ant-design/web3-assets@1.2.3

## 2.2.2

### Patch Changes

- f1b0b17: fix: use esm import as the default import way for fix use in Remix and NextJS
- eca5578: feat: upgrade antd to 5.13.2 & @ant-design/cssinjs to 1.18.2
- Updated dependencies [f1b0b17]
  - @ant-design/web3-assets@1.2.2
  - @ant-design/web3-common@1.3.3

## 2.2.1

### Patch Changes

- 30f43b0: fix: Show wallet which not config connector when eip6963 is true

## 2.2.0

### Minor Changes

- fe1ec95: feat: support EIP6963 wallet

### Patch Changes

- 1e663c3: chore: Optimize import type

## 2.1.1

### Patch Changes

- cf6c520: fix: Add exports field for fix require bug in nextjs
- Updated dependencies [cf6c520]
  - @ant-design/web3-assets@1.2.1
  - @ant-design/web3-common@1.3.2

## 2.1.0

### Minor Changes

- 77615f9: feat: Add OKX wallet info

### Patch Changes

- Updated dependencies [f135178]
- Updated dependencies [77615f9]
  - @ant-design/web3-common@1.3.1
  - @ant-design/web3-assets@1.2.0

## 2.0.1

### Patch Changes

- 47a879d: chore: release @ant-design/web3-wagmi 2.x for wagmi 2.x

## 2.0.0

### Major Changes

- 337971f: feat: upgrade wagmi to 2.0

### Patch Changes

- Updated dependencies [879548d]
  - @ant-design/web3-common@1.3.0
  - @ant-design/web3-assets@1.1.4

## 1.2.0

### Minor Changes

- e5db9b7: feat: Add UniversalWallet for support TokenPocket and more wallets

### Patch Changes

- 17ca201: perf: Modify import type
- Updated dependencies [e5db9b7]
- Updated dependencies [18def13]
- Updated dependencies [17ca201]
  - @ant-design/web3-common@1.2.0
  - @ant-design/web3-assets@1.1.3

## 1.1.2

### Patch Changes

- d6a5339: chore: release 1.1.2 for republish
- Updated dependencies [d6a5339]
  - @ant-design/web3-assets@1.1.2
  - @ant-design/web3-common@1.1.2

## 1.1.1

### Patch Changes

- 32f276a: chore: 1.1.1
- Updated dependencies [32f276a]
  - @ant-design/web3-assets@1.1.1
  - @ant-design/web3-common@1.1.1

## 1.1.0

### Minor Changes

- b00a377: feat: add TokenPocket wallet icon and metadata
- b3e95c2: feat: support safeheron browser wallet
- 3547f6b: feat: ConnectButton support internationalization

### Patch Changes

- 69a3597: fix: Improve the package.json information and add a main field to accommodate more projects.
- Updated dependencies [73e8e32]
- Updated dependencies [69a3597]
- Updated dependencies [b00a377]
- Updated dependencies [b3e95c2]
- Updated dependencies [3547f6b]
- Updated dependencies [9de319c]
  - @ant-design/web3-common@1.1.0
  - @ant-design/web3-assets@1.1.0

## 1.0.0

### Major Changes

- f330908: docs: Update new logo and prepare release 1.0.0

### Patch Changes

- Updated dependencies [f330908]
  - @ant-design/web3-assets@1.0.0
  - @ant-design/web3-common@1.0.0

## 0.2.0

### Minor Changes

- a2119bf: refactor: rename hasBrowserExtensionInstalled to hasWalletReady and rename onSelectWallet to onWalletSelected

### Patch Changes

- f74fb2c: fix: switch chain bug when use with wagmi
- Updated dependencies [a2119bf]
  - @ant-design/web3-common@0.2.0
  - @ant-design/web3-assets@0.1.2

## 0.1.1

### Patch Changes

- 2d7ae4f: refactor: auto config wagmi provider chains
- 39782e4: feat: ethereum adapter support show balance
- e4535ff: feat: add new wallet CoinbaseWallet
- Updated dependencies [2d7ae4f]
- Updated dependencies [0df085f]
- Updated dependencies [3fbd1eb]
- Updated dependencies [39782e4]
- Updated dependencies [c15bfdf]
- Updated dependencies [e4535ff]
  - @ant-design/web3-assets@0.1.1
  - @ant-design/web3-common@0.1.1

## 0.1.0

### Patch Changes

- Release new alpha version
- Updated dependencies
  - @ant-design/web3-assets@0.1.0
  - @ant-design/web3-common@0.1.0
