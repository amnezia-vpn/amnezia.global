import { useTranslation } from 'react-i18next';
import styles from './DwnHeader.module.scss';

const DwnHeader = () => {
  const { t } = useTranslation('downloads-page');
  return (
    <div className={styles.root}>
      <div className={styles.primaryWrapper}>{t('header')}</div>
    </div>
  );
};

export default DwnHeader;
