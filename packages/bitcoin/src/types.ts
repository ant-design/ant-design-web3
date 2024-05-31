export type { SignPsbtResult, BitcoinProvider } from 'sats-connect';

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

export type Inscription = Unisat.Inscription;

export interface HiroInscription {
  id: string;
  number: number;
  address: string;
  genesis_tx_id: string;
  location: string;
  output: string;
  value: string;
  offset: string;
  content_type: string;
  content_length: number;
  timestamp: number;
}
