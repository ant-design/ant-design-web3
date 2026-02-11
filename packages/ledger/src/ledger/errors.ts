/**
 * Ledger error codes
 */
export type LedgerErrorCode =
  | 'NO_DEVICE'
  | 'CONNECTION_FAILED'
  | 'ETHEREUM_APP_NOT_OPEN'
  | 'CANNOT_GET_ADDRESS'
  | 'NO_SESSION'
  | 'SIGN_MESSAGE_FAILED'
  | 'SIGN_TYPED_DATA_FAILED'
  | 'WALLETCONNECT_NOT_CONFIGURED'
  | 'WALLETCONNECT_PROVIDER_NOT_AVAILABLE'
  | 'WALLETCONNECT_SESSION_NOT_AVAILABLE'
  | 'WALLETCONNECT_NO_ACCOUNTS'
  | 'WALLETCONNECT_INVALID_ACCOUNT'
  | 'WALLETCONNECT_CONNECTION_FAILED'
  | 'WALLETCONNECT_SESSION_TIMEOUT'
  | 'INVALID_ACCOUNT';

/**
 * Extended Error class with code and details
 */
export class LedgerError extends Error {
  code: LedgerErrorCode;
  details?: string;

  constructor(code: LedgerErrorCode, details: string) {
    super(details);
    this.code = code;
    this.details = details;
    this.name = 'LedgerError';
  }
}
