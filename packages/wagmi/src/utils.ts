import debug from 'debug';

const createDebug = (namespace: string) => {
  return debug(`antd-web3:wagmi:${namespace}`);
};

export { createDebug };
