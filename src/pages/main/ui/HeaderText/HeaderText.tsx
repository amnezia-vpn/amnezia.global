import { useTranslation } from 'react-i18next';
import styles from './HeaderText.module.scss';

const HeaderText = () => {
  const { t } = useTranslation('main-page');
  return (
    <div className={styles.root}>
      <div className={styles.primaryWrapper}>{t('header.mainText')}</div>
      <div className={styles.secondaryWrapper}>{t('header.subtext')}</div>
    </div>
  );
};

export default HeaderText;
