import React, { useContext } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { useTheme } from 'antd-style';
import classNames from 'classnames';

import { ThemeContext } from '../../ThemeContext';
import styles from './Thumbnail.module.less';

export type ThemeType = 'default' | 'black' | 'green' | 'pink' | 'violet';

export type ThemeItem = {
  /**
   * @zh 主题名称
   */
  name: 'Default' | 'Black' | 'Green' | 'Pink' | 'Violet';
  /**
   * @zh 主题颜色
   */
  primary: string;
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

export type ThumbnailItemProps = ThemeItem & {
  selected?: boolean;
  onSelect?: (item: ThemeItem) => void;
};

const ThumbnailItem: React.FC<ThumbnailItemProps> = (item) => {
  const { name, primary, onSelect, selected } = item;
  const token = useTheme();
  const { curTheme } = useContext(ThemeContext);
  const style: React.CSSProperties = {
    '--theme-primary-color': primary,
    '--theme-text-color':
      curTheme.name === 'Black'
        ? new TinyColor(token.colorWhite).setAlpha(0.55).toRgbString()
        : token.colorTextDescription,
    '--theme-text-color-selected':
      curTheme.name === 'Black' ? token.colorWhite : token.colorTextBase,
  } as React.CSSProperties;
  return (
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

export type Themes = Record<ThemeType, ThemeItem>;

export const themes: Themes = {
  default: {
    name: 'Default',
    primary: '#1677FF',
    mainBg: '#fbfdff',
    bannerBg: 'https://github.com/user-attachments/assets/4f880b46-fc9f-4559-b580-d34e9c0e05d0',
    themeBg: 'https://github.com/user-attachments/assets/d40e0eea-f22c-4ccd-b443-53a7f1334762',
    showCaseItemBg:
      '#EFF6FF radial-gradient(circle at 94% 97%, #C8DDFF 0%, rgba(236,233,255,0.00) 53%)',
  },
  black: {
    name: 'Black',
    primary: '#000000',
    mainBg: '#161616',
    bannerBg: 'https://github.com/user-attachments/assets/499e93ca-cffb-40ac-b407-0a9fe9282465',
    themeBg: 'https://github.com/user-attachments/assets/0230d29c-5fec-4e4e-9922-7ddd269d0979',
    showCaseItemBg:
      '#303030 radial-gradient(circle at 94% 97%, rgba(8,8,23,0.50) 0%, rgba(0,0,0,0.00) 53%)',
    darkLogo: 'https://github.com/user-attachments/assets/e2b50b5a-c7ab-43c6-a7ac-5064b7ae2bfd',
    darkSloganColor: 'rgba(255, 255, 255, .85)',
  },
  green: {
    name: 'Green',
    primary: '#00B96B',
    mainBg: '#fbfffd',
    bannerBg: 'https://github.com/user-attachments/assets/651449fa-8527-4fc2-a34a-4607f883a02d',
    themeBg: 'https://github.com/user-attachments/assets/86923205-960a-4fb9-9744-6a8546ef0fcf',
    showCaseItemBg:
      '#F5FFFB radial-gradient(circle at 94% 97%, #CDFFEA 0%, rgba(236,233,255,0.00) 53%)',
  },
  pink: {
    name: 'Pink',
    primary: '#EF4092',
    mainBg: '#fef9fc',
    bannerBg: 'https://github.com/user-attachments/assets/80d12a58-7ea8-40e8-952d-11153080ed9f',
    themeBg: 'https://github.com/user-attachments/assets/9a7fdd87-61b0-4108-a437-7d45856949ea',
    showCaseItemBg:
      '#FFF3F9 radial-gradient(circle at 94% 97%, #FFCFE6 0%, rgba(236,233,255,0.00) 53%)',
  },
  violet: {
    name: 'Violet',
    primary: '#8343FF',
    mainBg: '#fbfafc',
    bannerBg: 'https://github.com/user-attachments/assets/7fea3c6a-077f-4bf3-a518-ac87a8e32a63',
    themeBg: 'https://github.com/user-attachments/assets/5e214f97-deea-44f6-9d40-bc4684ffd078',
    showCaseItemBg:
      '#F7F5FF radial-gradient(circle at 94% 97%, #EEE5FF 0%, rgba(236,233,255,0.00) 53%)',
  },
};

const themesArray = Object.values(themes);

export type ThumbnailProps = {
  selectedTheme: ThemeItem;
  onSelect: (item: ThemeItem) => void;
};

export const Thumbnail: React.FC<ThumbnailProps> = ({ selectedTheme, onSelect }) => {
  return (
    <div className={styles.thumbnail}>
      {themesArray.map((theme, index) => (
        <ThumbnailItem
          key={index}
          {...theme}
          selected={theme.name === selectedTheme.name}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
