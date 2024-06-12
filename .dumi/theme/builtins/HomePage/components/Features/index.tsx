import { useIntl } from 'dumi';

import styles from './index.module.less';

type FeatureType = {
  preview: string;
  title: string;
  description: string;
};

export const Features: React.FC = () => {
  const intl = useIntl();

  const features: FeatureType[] = [
    {
      preview:
        'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*Lp3NQJVHki8AAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.0.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.0.description' }),
    },
    {
      preview:
        'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*npFNQYXN0UUAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.1.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.1.description' }),
    },
    {
      preview:
        'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*idc2SL2Fd4sAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.2.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.2.description' }),
    },
  ];

  return (
    <div className={styles.container}>
      {features.map((feature) => (
        <div className={styles.item} key={feature.title}>
          <div className={styles.title}>{feature.title}</div>
          <div className={styles.desc}>{feature.description}</div>
          <img className={styles.preview} src={feature.preview} alt={feature.title} />
        </div>
      ))}
    </div>
  );
};

export default Features;
