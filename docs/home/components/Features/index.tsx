import { useIntl } from 'dumi';
import styles from './index.module.less';

type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

export default () => {
  const intl = useIntl();

  const features: FeatureType[] = [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*HR6IRIi3eDIAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.0.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.0.description' }),
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*VbthS5vDlCQAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.1.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.1.description' }),
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*agjbQpbtY2kAAAAAAAAAAAAADlrGAQ/original',
      title: intl.formatMessage({ id: 'app.docs.site.features.2.title' }),
      description: intl.formatMessage({ id: 'app.docs.site.features.2.description' }),
    },
  ];

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <div className={styles.item} key={index}>
          <img className={styles.icon} src={feature.icon} alt={feature.title} />
          <div className={styles.title}>{feature.title}</div>
          <div className={styles.desc}>{feature.description}</div>
        </div>
      ))}
    </div>
  );
};
