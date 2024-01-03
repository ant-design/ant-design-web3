import { Grid } from 'antd';

import { type ConnectModalProps } from '../interface';

export default function useMode(mode: ConnectModalProps['mode'] = 'auto') {
  const { md } = Grid.useBreakpoint();
  const isSimple = mode === 'simple' || (mode === 'auto' && !md);
  return {
    isSimple,
    md,
  };
}
