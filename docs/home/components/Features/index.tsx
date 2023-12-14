import styles from './index.module.less';

type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

const features: FeatureType[] = [
  {
    icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*HR6IRIi3eDIAAAAAAAAAAAAADlrGAQ/original',
    title: 'Ant Design Friendly',
    description:
      'Ant Design Web3 is Specifically designed to seamlessly integrate with Ant Design, making it easy for developers.',
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*VbthS5vDlCQAAAAAAAAAAAAADlrGAQ/original',
    title: 'Out-of-the-Box Experience',
    description:
      'You can quickly set up their projects and leverage the pre-built components to create your DApps.',
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*agjbQpbtY2kAAAAAAAAAAAAADlrGAQ/original',
    title: 'Compatibility with Different Chains',
    description:
      'Ant Design Web3 is designed with good extensibility, allowing you to adapt to different chains through adapters.',
  },
];

export default () => {
  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <div className={styles.item} key={index}>
          <img src={feature.icon} alt={feature.title} />
          <div className={styles.title}>{feature.title}</div>
          <div className={styles.desc}>{feature.description}</div>
        </div>
      ))}
    </div>
  );
};
