export function getWeb3AssetUrl(url?: string): string | undefined {
  if (!url) {
    return url;
  }
  let requestURL = url;
  if (url.startsWith('ipfs://')) {
    requestURL = `https://ipfs.io/ipfs/${url.replace('ipfs://', '')}`;
  }
  return requestURL;
}

export async function requestWeb3Asset<T = any>(url: string): Promise<T> {
  if (!url) {
    throw new Error('URL not set');
  }
  return fetch(getWeb3AssetUrl(url)!).then((res) => res.json());
}
