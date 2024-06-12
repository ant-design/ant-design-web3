import React, { useEffect } from 'react';
import classNames from 'classnames';
import { usePrefersColor } from 'dumi';

import { Banner } from './components/Banner';
import { Features } from './components/Features';
import { ShowCase } from './components/ShowCase';
import { Theme } from './components/Theme';
import styles from './index.module.less';

export const HomePage: React.FC = () => {
  const [color, prefersColor] = usePrefersColor();

  useEffect(() => {
    // zh-CN: 临时修复主题跟随系统时先切换到亮色主题的问题，后续在 dumi 中修复后再删掉
    // en-US: Temporarily fix the problem that the theme follows the system and switch to the light theme first,
    // and then delete it after fixing it in dumi
    if (prefersColor === 'auto') {
      document.documentElement.setAttribute(
        'data-prefers-color',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      );
    }
  }, [prefersColor]);

  return (
    <div
      className={classNames(styles.container, {
        dark: color === 'dark',
      })}
    >
      <Banner />
      <Features />
      <Theme />
      <ShowCase />
    </div>
  );
};

export default HomePage;
