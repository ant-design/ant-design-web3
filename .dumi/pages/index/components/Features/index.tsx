import { useContext } from 'react';
import { useTheme } from 'antd-style';
import { useIntl } from 'dumi';

import { ThemeContext } from '../ThemeContext';
import styles from './index.module.less';

type FeatureType = {
  preview: string;
  title: string;
  description: string;
};

export const Features: React.FC = () => {
  const intl = useIntl();
  const { curTheme } = useContext(ThemeContext);
  const token = useTheme();

  const features: FeatureType[] = [
    {
      preview:
        curTheme.name === 'Dark'
          ? 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*c7xpS7iRaO0AAAAAAAAAAAAADlrGAQ/original'
          : 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*lg4mQrmwvQMAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.0.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.0.description' }),
    },
    {
      preview:
        curTheme.name === 'Dark'
          ? 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*q8CHTZn_t9cAAAAAAAAAAAAADlrGAQ/original'
          : 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*BGOrT7hmCK0AAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.1.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.1.description' }),
    },
    {
      preview:
        curTheme.name === 'Dark'
          ? 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*0XwWSZPgjiYAAAAAAAAAAAAADlrGAQ/original'
          : 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*QIPWQJicUxYAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.2.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.2.description' }),
    },
  ];

  const themeStyle = {
    '--theme-text-color': curTheme.name === 'Dark' ? token.colorWhite : token.colorTextBase,
    '--theme-container-bg': curTheme.name === 'Dark' ? '#222' : '#fff',
    '--theme-item-bg': curTheme.name === 'Dark' ? '#303030' : '#fbfafc',
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={themeStyle}>
      {features.map((feature) => (
        <div className={styles.item} key={feature.title}>
          <h2 className={styles.title}>{feature.title}</h2>
          <div className={styles.desc}>{feature.description}</div>
          <img className={styles.preview} src={feature.preview} alt={feature.title} />
        </div>
      ))}
    </div>
  );
};

export default Features;
