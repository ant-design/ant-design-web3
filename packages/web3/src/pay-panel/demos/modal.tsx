import React, { useState } from 'react';
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
