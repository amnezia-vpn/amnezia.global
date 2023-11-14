import { useTranslation } from 'react-i18next';
import styles from './LogoWithText.module.scss';
import { ReactComponent as Logo } from './logo.svg';

const LogoWithText = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.header}>Amnezia VPN</div>
        <div className={styles.subtext}>{t('logoSubtext')}</div>
      </div>
    </div>
  );
};

export default LogoWithText;
