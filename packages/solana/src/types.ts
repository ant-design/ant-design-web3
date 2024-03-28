import type { UniversalProvider } from '@walletconnect/universal-provider';

export type IUniversalProvider = Awaited<ReturnType<(typeof UniversalProvider)['init']>>;
