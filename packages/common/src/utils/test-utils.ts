export function mockFetch(expect: any) {
  expect.json = () => Promise.resolve(expect);
  const oriFetch = () => Promise.resolve(expect);
  const fetch = () => {
    return oriFetch();
  };
  Object.defineProperty(window, 'fetch', {
    value: fetch,
  });
}
