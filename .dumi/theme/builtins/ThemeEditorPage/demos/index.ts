import { ComponentDemo, defaultAntdComponents } from 'antd-token-previewer-web3';

import * as address from './address';
import * as browserLink from './browser-link';
import * as connectButton from './connect-button';
import * as connectModal from './connect-modal';
import * as cryptoPrice from './crypto-price';
import * as nftCard from './nft-card';

export const components: typeof defaultAntdComponents = {
  ...connectModal.components,
  ...nftCard.components,
  ...address.components,
  ...browserLink.components,
  ...connectButton.components,
  ...cryptoPrice.components,
};

export const demos: Record<string, ComponentDemo[]> = {
  ...connectModal.demos,
  ...address.demos,
  ...browserLink.demos,
  ...connectButton.demos,
  ...cryptoPrice.demos,
  ...nftCard.demos,
};
