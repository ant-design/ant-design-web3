import React, { useContext } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { useTheme } from 'antd-style';
import classNames from 'classnames';

import { ThemeContext } from '../../ThemeContext';
import styles from './Thumbnail.module.less';
import { themeList, ThemeSetting } from './tokens';

export type ThemeType = 'default' | 'dark' | 'green' | 'pink' | 'violet';

export type ThemeItem = {
  /**
   * @zh 页面主背景
   */
  mainBg: string;
  /**
   * @zh Banner 区域背景图
   */
  bannerBg: string;
  /**
   * @zh 主题区域背景图
   */
  themeBg: string;
  /**
   * @zh show case 区域 item 的背景图
   */
  showCaseItemBg: string;
  /**
   * @zh 暗色模式下 logo url
   */
  darkLogo?: string;
  /**
   * 暗色模式下 slogan 的颜色
   */
  darkSloganColor?: string;
};

export type Themes = Record<ThemeType, ThemeItem>;
export type FullTheme = ThemeItem & ThemeSetting;

export type ThumbnailItemProps = FullTheme & {
  selected?: boolean;
  onSelect?: (item: FullTheme) => void;
};

const ThumbnailItem: React.FC<ThumbnailItemProps> = (item) => {
  const { name, color, onSelect, selected } = item;
  const token = useTheme();
  const { curTheme } = useContext(ThemeContext);
  const style: React.CSSProperties = {
    '--theme-primary-color': color,
    '--theme-text-color':
      curTheme.name === 'Dark'
        ? new TinyColor(token.colorWhite).setAlpha(0.55).toRgbString()
        : token.colorTextDescription,
    '--theme-text-color-selected':
      curTheme.name === 'Dark' ? token.colorWhite : token.colorTextBase,
  } as React.CSSProperties;
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: by design
    <div
      className={classNames(styles.thumbnailItem, {
        [styles.selected]: selected,
      })}
      onClick={() => {
        onSelect?.(item);
      }}
      style={style}
    >
      <div className={styles.thumbnailIcon} />
      <div className={styles.thumbnailItemName}>{name}</div>
    </div>
  );
};

export const sizeThemes: Themes = {
  default: {
    mainBg: '#fbfdff',
    bannerBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*dlP7SrSAbc4AAAAAAAAAAAAADlrGAQ/original',
    themeBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*-xZrSLob8iIAAAAAAAAAAAAADlrGAQ/original',
    showCaseItemBg:
      '#EFF6FF radial-gradient(circle at 94% 97%, #C8DDFF 0%, rgba(236,233,255,0.00) 53%)',
  },
  dark: {
    mainBg: '#161616',
    bannerBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*EzS8QrmIqUAAAAAAAAAAAAAADlrGAQ/original',
    themeBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*gy2JQbp751wAAAAAAAAAAAAADlrGAQ/original',
    showCaseItemBg:
      '#303030 radial-gradient(circle at 94% 97%, rgba(8,8,23,0.50) 0%, rgba(0,0,0,0.00) 53%)',
    darkLogo:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*a9TOS4uSj4kAAAAAAAAAAAAADlrGAQ/original',
    darkSloganColor: 'rgba(255, 255, 255, .85)',
  },
  green: {
    mainBg: '#fbfffd',
    bannerBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*z85mQ4alwjwAAAAAAAAAAAAADlrGAQ/original',
    themeBg: 'https://github.com/user-attachments/assets/86923205-960a-4fb9-9744-6a8546ef0fcf',
    showCaseItemBg:
      '#F5FFFB radial-gradient(circle at 94% 97%, #CDFFEA 0%, rgba(236,233,255,0.00) 53%)',
  },
  pink: {
    mainBg: '#fef9fc',
    bannerBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*MLqZT7GhUpQAAAAAAAAAAAAADlrGAQ/original',
    themeBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*-9lOTaXI20kAAAAAAAAAAAAADlrGAQ/original',
    showCaseItemBg:
      '#FFF3F9 radial-gradient(circle at 94% 97%, #FFCFE6 0%, rgba(236,233,255,0.00) 53%)',
  },
  violet: {
    mainBg: '#fbfafc',
    bannerBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*tQ2fQK1hjMsAAAAAAAAAAAAADlrGAQ/original',
    themeBg:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*v7QVR5JcrooAAAAAAAAAAAAADlrGAQ/original',
    showCaseItemBg:
      '#F7F5FF radial-gradient(circle at 94% 97%, #EEE5FF 0%, rgba(236,233,255,0.00) 53%)',
  },
};

export const themes: FullTheme[] = themeList.map((item) => ({
  ...item,
  ...sizeThemes[item.value],
}));

// const themesArray = Object.values(themes);

export type ThumbnailProps = {
  selectedTheme: FullTheme;
  onSelect: (item: FullTheme) => void;
};

export const Thumbnail: React.FC<ThumbnailProps> = ({ selectedTheme, onSelect }) => {
  return (
    <div className={styles.thumbnail}>
      {themes.map((theme) => (
        <ThumbnailItem
          key={theme.value}
          {...theme}
          selected={theme.name === selectedTheme.name}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
