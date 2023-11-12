import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './PrivacyTextSection.module.scss';

const PrivacyTextSection = () => {
  const { t } = useTranslation('main-page');

  return (
    <div className={classNames(styles.root)}>
      <div className={styles.header}>{t('privacyTextSection.header')}</div>
      <div className={styles.text}>{t('privacyTextSection.text')}</div>
    </div>
  );
};

export default PrivacyTextSection;
