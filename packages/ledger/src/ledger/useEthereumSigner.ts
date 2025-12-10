import { useCallback, useEffect, useState } from 'react';
import { DeviceActionStatus } from '@ledgerhq/device-management-kit';
import type { DeviceSessionId } from '@ledgerhq/device-management-kit';
import {
  SignerEthBuilder,
  type AddressOptions,
  type Signature,
  type TypedData,
} from '@ledgerhq/device-signer-kit-ethereum';
import { Subscription } from 'rxjs';

import { getDMK } from './dmk';

export interface UseEthereumSignerOptions {
  sessionId?: DeviceSessionId | null;
  derivationPath?: string;
  addressOptions?: AddressOptions;
}

/**
 * Convert Ledger signature to hash signature format
 */
export function toHashSignature(sig: Signature): `0x${string}` {
  const { r, s, v } = sig;
  const rHex = r.slice(2);
  const sHex = s.slice(2);
  const vHex = v.toString(16).padStart(2, '0');
  return `0x${rHex}${sHex}${vHex}`;
}

/**
 * Hook to interact with Ethereum on Ledger device
 */
export const useEthereumSigner = (options: UseEthereumSignerOptions = {}) => {
  const { sessionId, derivationPath = "44'/60'/0'/0/0", addressOptions } = options;

  const [address, setAddress] = useState<string | null>(null);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [isSigningMessage, setIsSigningMessage] = useState(false);
  const [isSigningTypedData, setIsSigningTypedData] = useState(false);

  // Get address when sessionId changes
  useEffect(() => {
    if (!sessionId) {
      setAddress(null);
      return;
    }

    const dmk = getDMK();
    const signer = new SignerEthBuilder({
      dmk,
      sessionId,
      originToken: 'ant-design-web3-ledger',
    }).build();

    setIsLoadingAddress(true);

    const { observable } = signer.getAddress(derivationPath, addressOptions);

    const subscription = observable.subscribe({
      next: (response) => {
        if (response.status === DeviceActionStatus.Completed) {
          setAddress(response.output.address);
          setIsLoadingAddress(false);
        }
      },
      error: (error) => {
        console.error('Get address error:', error);
        setIsLoadingAddress(false);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [sessionId, derivationPath, addressOptions]);

  const signMessage = useCallback(
    async (message: string): Promise<Signature> => {
      if (!sessionId) {
        throw new Error('No session ID available');
      }

      const dmk = getDMK();
      const signer = new SignerEthBuilder({
        dmk,
        sessionId,
        originToken: 'ant-design-web3-ledger',
      }).build();

      setIsSigningMessage(true);

      return new Promise((resolve, reject) => {
        const { observable } = signer.signMessage(derivationPath, message);

        observable.subscribe({
          next: (response) => {
            if (response.status === DeviceActionStatus.Completed) {
              setIsSigningMessage(false);
              resolve(response.output);
            } else if (response.status === DeviceActionStatus.Error) {
              setIsSigningMessage(false);
              reject(response.error);
            }
          },
          error: (error) => {
            setIsSigningMessage(false);
            reject(error);
          },
        });
      });
    },
    [sessionId, derivationPath],
  );

  const signTypedData = useCallback(
    async (typedData: TypedData): Promise<Signature> => {
      if (!sessionId) {
        throw new Error('No session ID available');
      }

      const dmk = getDMK();
      const signer = new SignerEthBuilder({
        dmk,
        sessionId,
        originToken: 'ant-design-web3-ledger',
      }).build();

      setIsSigningTypedData(true);

      return new Promise((resolve, reject) => {
        const { observable } = signer.signTypedData(derivationPath, typedData);

        observable.subscribe({
          next: (response) => {
            if (response.status === DeviceActionStatus.Completed) {
              setIsSigningTypedData(false);
              resolve(response.output);
            } else if (response.status === DeviceActionStatus.Error) {
              setIsSigningTypedData(false);
              reject(response.error);
            }
          },
          error: (error) => {
            setIsSigningTypedData(false);
            reject(error);
          },
        });
      });
    },
    [sessionId, derivationPath],
  );

  return {
    address,
    isLoadingAddress,
    signMessage,
    isSigningMessage,
    signTypedData,
    isSigningTypedData,
  };
};

class EthereumSigner {
  public address: string | null = null;

  private getAddressSubscription: Subscription | null = null;
  private signMessageSubscription: Subscription | null = null;
  private signTypedDataSubscription: Subscription | null = null;

  public getAddress = async (sessionId: string, derivationPath: string): Promise<`0x${string}`> => {
    return new Promise((resolve, reject) => {
      if (!sessionId || !derivationPath) {
        this.address = null;
        reject(new Error('No session ID or derivation path available'));
      }

      this.unsubscribeGetAddress();

      const dmk = getDMK();
      const signer = new SignerEthBuilder({
        dmk,
        sessionId,
        originToken: 'ant-design-web3-ledger',
      }).build();

      const { observable } = signer.getAddress(derivationPath);

      this.getAddressSubscription = observable.subscribe({
        next: (response) => {
          if (response.status === DeviceActionStatus.Completed) {
            this.address = response.output.address;
            resolve(response.output.address);
          }
        },
        error: (error) => {
          console.error('Get address error:', error);
          this.address = null;
          reject(error);
        },
      });
    });
  };

  public signMessage = async (
    sessionId: string,
    derivationPath: string,
    message: string,
  ): Promise<Signature> => {
    return new Promise((resolve, reject) => {
      if (!sessionId || !derivationPath) {
        reject(new Error('No session ID or derivation path available'));
      }

      this.unsubscribeSignMessage();

      const dmk = getDMK();
      const signer = new SignerEthBuilder({
        dmk,
        sessionId,
        originToken: 'ant-design-web3-ledger',
      }).build();

      const { observable } = signer.signMessage(derivationPath, message);

      this.signMessageSubscription = observable.subscribe({
        next: (response) => {
          if (response.status === DeviceActionStatus.Completed) {
            resolve(response.output);
          } else if (response.status === DeviceActionStatus.Error) {
            reject(response.error);
          }
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  public signTypedData = async (
    sessionId: string,
    derivationPath: string,
    typedData: TypedData,
  ): Promise<Signature> => {
    return new Promise((resolve, reject) => {
      if (!sessionId || !derivationPath) {
        reject(new Error('No session ID or derivation path available'));
      }

      this.unsubscribeSignTypedData();

      const dmk = getDMK();
      const signer = new SignerEthBuilder({
        dmk,
        sessionId,
        originToken: 'ant-design-web3-ledger',
      }).build();

      const { observable } = signer.signTypedData(derivationPath, typedData);
      this.signTypedDataSubscription = observable.subscribe({
        next: (response) => {
          if (response.status === DeviceActionStatus.Completed) {
            resolve(response.output);
          } else if (response.status === DeviceActionStatus.Error) {
            reject(response.error);
          }
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  public unsubscribeGetAddress = () => {
    if (this.getAddressSubscription) {
      this.getAddressSubscription.unsubscribe();
      this.getAddressSubscription = null;
    }
  };

  public unsubscribeSignMessage = () => {
    if (this.signMessageSubscription) {
      this.signMessageSubscription.unsubscribe();
      this.signMessageSubscription = null;
    }
  };

  public unsubscribeSignTypedData = () => {
    if (this.signTypedDataSubscription) {
      this.signTypedDataSubscription.unsubscribe();
      this.signTypedDataSubscription = null;
    }
  };

  public unsubscribe = () => {
    this.unsubscribeGetAddress();
    this.unsubscribeSignMessage();
    this.unsubscribeSignTypedData();
  };
}

export default EthereumSigner;
