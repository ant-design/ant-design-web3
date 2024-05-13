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
