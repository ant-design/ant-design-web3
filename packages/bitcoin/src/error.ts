/* v8 ignore start */
export class NoProviderError extends Error {
  name: string;

  constructor(message = 'No Bitcoin wallet installed') {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
  }
}

export class NoAddressError extends Error {
  name: string;

  constructor(message = "Can't get address from Bitcoin wallet") {
    super(message);
    this.name = this.constructor.name;
  }
}

export class NoBalanceError extends Error {
  name: string;

  constructor(message = "Can't fetch the balance") {
    super(message);
    this.name = this.constructor.name;
  }
}

export class NoInscriptionError extends Error {
  name: string;

  constructor(message = 'Failed to get inscriptions') {
    super(message);
    this.name = this.constructor.name;
  }
}

export class NotImplementedError extends Error {
  name: string;

  constructor(message = 'Not implemented') {
    super(message);
    this.name = this.constructor.name;
  }
}
