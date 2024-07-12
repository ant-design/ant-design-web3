import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
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
      <SuiWeb3ConfigProvider>
        <Connector>
          <ConnectButton />
        </Connector>
      </SuiWeb3ConfigProvider>
    </PersistQueryClientProvider>
  );
};

export default App;
