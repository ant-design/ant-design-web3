import debug from 'debug';

const createDebug = (namespace: string) => {
  return debug(`antd-web3:ethereum:${namespace}`);
};

export { createDebug };
