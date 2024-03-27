import { BaseError } from 'wagmi';

export { ProviderNotFoundError } from 'wagmi';

export class ProviderNotSupportedError extends BaseError {
  constructor() {
    super('Provider not supported');
  }
}
