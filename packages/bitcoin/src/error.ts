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
