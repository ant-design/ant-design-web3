import { DeviceActionStatus } from '@ledgerhq/device-management-kit';
import {
  SignerEthBuilder,
  type Signature,
  type SignerEth,
  type TypedData,
} from '@ledgerhq/device-signer-kit-ethereum';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

/**
 * 以太坊签名器，封装 Ledger DMK 的 SignerEth。
 *
 * 提供 getAddress / signMessage / signTypedData 三个核心方法，
 * 均通过 RxJS Observable 订阅设备响应。
 * 按 sessionId 缓存 signer 实例，避免每次操作重复创建。
 * 每个操作对应独立的 subscription，支持单独或批量取消。
 */
class EthereumSigner {
  private getAddressSubscription: Subscription | null = null;
  private signMessageSubscription: Subscription | null = null;
  private signTypedDataSubscription: Subscription | null = null;

  private _cachedSigner: SignerEth | null = null;
  private _cachedSessionId: string | null = null;

  private getSigner(sessionId: string): SignerEth {
    if (this._cachedSigner && this._cachedSessionId === sessionId) {
      return this._cachedSigner;
    }
    const dmk = getDMK();
    this._cachedSigner = new SignerEthBuilder({
      dmk,
      sessionId,
      originToken: 'ant-design-web3-ledger',
    }).build();
    this._cachedSessionId = sessionId;
    return this._cachedSigner;
  }

  private static readonly DEFAULT_TIMEOUT_MS = 60_000;

  public getAddress = async (
    sessionId: string,
    derivationPath: string,
    timeoutMs = EthereumSigner.DEFAULT_TIMEOUT_MS,
  ): Promise<`0x${string}`> => {
    return new Promise((resolve, reject) => {
      if (!sessionId || !derivationPath) {
        reject(new Error('No session ID or derivation path available'));
        return;
      }

      this.unsubscribeGetAddress();

      const timer = setTimeout(() => {
        this.unsubscribeGetAddress();
        reject(new Error(`getAddress timeout (${timeoutMs}ms)`));
      }, timeoutMs);

      const signer = this.getSigner(sessionId);
      const { observable } = signer.getAddress(derivationPath);

      this.getAddressSubscription = observable.subscribe({
        next: (response) => {
          if (response.status === DeviceActionStatus.Completed) {
            clearTimeout(timer);
            resolve(response.output.address);
          } else if (response.status === DeviceActionStatus.Error) {
            clearTimeout(timer);
            reject(response.error ?? new Error('Device action failed'));
          }
        },
        error: (error) => {
          clearTimeout(timer);
          reject(error);
        },
      });
    });
  };

  /** USB 直连签名无超时，等待用户在设备上确认 */
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

      const signer = this.getSigner(sessionId);
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

  /** USB 直连签名无超时，等待用户在设备上确认 */
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

      const signer = this.getSigner(sessionId);
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
    this._cachedSigner = null;
    this._cachedSessionId = null;
  };
}

export default EthereumSigner;
