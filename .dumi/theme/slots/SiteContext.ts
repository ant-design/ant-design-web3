import { createContext } from 'react';
import type { DirectionType } from 'antd/lib/config-provider';

import type { ThemeName } from '../common/ThemeSwitch';

export interface SiteContextProps {
  isMobile: boolean;
  direction: DirectionType;
  theme: ThemeName[];
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = createContext<SiteContextProps>({
  isMobile: false,
  direction: 'ltr',
  theme: ['light'],
  updateSiteConfig: () => {},
});

export default SiteContext;
