import React from 'react';

import { ThemeItem, themes } from './Theme/components/Thumbnail';

export type ThemeContextProps = {
  curTheme: ThemeItem;
  updateTheme: (theme: ThemeItem) => void;
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  curTheme: themes.default,
  updateTheme: () => {},
});
