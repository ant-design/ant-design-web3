export type { SignPsbtResult } from 'sats-connect';

export interface SignPsbtOptions {
  signInputs?: Record<string, number[]>;
  broadcast?: boolean;
  signHash?: number;
}

export interface SignPsbtParams {
  psbt: string;
  options?: SignPsbtOptions;
}

export interface TransferParams {
  to: string;
  sats: number;
  // feeRate is only for unisat. Users can set their desired transaction fee by xverse.
  options?: { feeRate: number };
}
