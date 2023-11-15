import DownloadButtonMain from '@src/components/DownloadButtonMain/DownloadButtonMain';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './HeroMap.module.scss';

const HeroMap = () => {
  const { t } = useTranslation(['hosting-page']);
  return (
    <div className={styles.root}>
      <div className={styles.textSection}>
        <div className={classNames('h-70', styles.text)}>{t('heroMap.header')}</div>
        <div className={classNames('main-text', styles.subtext)}>{t('heroMap.text')}</div>
        <div className={styles.dwnBtnContainer}>
          <DownloadButtonMain text={t('heroMap.button')} link="." />
        </div>
      </div>
    </div>
  );
};

export default HeroMap;
