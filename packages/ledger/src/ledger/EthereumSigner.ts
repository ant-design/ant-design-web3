import { DeviceActionStatus } from '@ledgerhq/device-management-kit';
import {
  SignerEthBuilder,
  type Signature,
  type TypedData,
} from '@ledgerhq/device-signer-kit-ethereum';
import { Subscription } from 'rxjs';

import { getDMK } from './dmk';

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
        return;
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
        return;
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
          if (response?.status === DeviceActionStatus.Completed) {
            resolve(response?.output);
          } else if (response?.status === DeviceActionStatus.Error) {
            reject(response?.error);
          }
        },
        error: (error) => {
          console.log('***11', sessionId, derivationPath, typedData);
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
