import React from 'react';

import { FullTheme, themes } from './Theme/components/Thumbnail';

export type ThemeContextProps = {
  curTheme: FullTheme;
  updateTheme: (theme: FullTheme) => void;
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  curTheme: themes[0],
  updateTheme: () => {},
});
