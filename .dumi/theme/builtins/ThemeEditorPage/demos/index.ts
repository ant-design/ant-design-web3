import { ComponentDemo, defaultAntdComponents } from 'antd-token-previewer-web3';

import ConnectButton from './connect-button';

export const components: typeof defaultAntdComponents = { Web3: ['ConnectButton'] };

export const demos: Record<string, ComponentDemo[]> = { ConnectButton };
