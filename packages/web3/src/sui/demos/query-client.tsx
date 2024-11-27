import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: typeof window !== 'undefined' ? window.localStorage : undefined,
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
