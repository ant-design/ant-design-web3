export const createGetBrowserLink = (url: string) => (address: string, type: string) => {
  if (type === 'address') {
    return `${url}/address/${address}`;
  }
  if (type === 'transaction') {
    return `${url}/tx/${address}`;
  }
  throw new Error(`getBrowserLink unsupported type ${type}`);
};
