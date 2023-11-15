import { useTranslation } from 'react-i18next';
import styles from './SupportHeaderText.module.scss';

const SupportHeaderText = () => {
  const { t } = useTranslation('support-page');
  return (
    <div className={styles.root}>
      <div className={styles.primaryWrapper}>{t('header.mainText')}</div>
      <div className={styles.secondaryWrapper}>{t('header.subText')}</div>
    </div>
  );
};

export default SupportHeaderText;
