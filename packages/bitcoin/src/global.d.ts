declare interface Window {
  unisat?: Unisat.Provider;
  // TODO: 与其他 okx 冲突
  okxwallet?: any;
  phantom?: any;
}

declare namespace Unisat {
  interface Provider {
    requestAccounts: () => Promise<string[]>;
    getBalance: () => Promise<{ confirmed: number; unconfirmed: number; total: number }>;
    getInscriptions: (
      cursor: number,
      size: number,
    ) => Promise<{ total: number; list: Inscription[] }>;
    sendBitcoin: (
      toAddress: string,
      satoshis: number,
      options?: { feeRate: number },
    ) => Promise<string>;
    signMessage: (msg: string, type?: string) => Promise<string>;
    signPsbt: (
      psbtHex: string,
      options?: {
        autoFinalized: boolean;
        toSignInputs?: {
          index: number;
          address: string;
          publicKey: string;
          sighashTypes?: number[];
          disableTweakSigner?: boolean;
        }[];
      },
    ) => Promise<string>;
  }

  interface Inscription {
    address: string;
    content: string;
    contentLength: number;
    contentType: string;
    genesisTransaction: string;
    inscriptionId: string;
    inscriptionNumber: number;
    location: string;
    offset: number;
    output: string;
    outputValue: number;
    preview: string;
    timestamp: number;
  }
}
