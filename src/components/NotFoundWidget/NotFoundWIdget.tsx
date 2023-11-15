import PrimaryLinkButton from '@src/components/PrimaryLinkButton/PrimaryLinkButton';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import styles from './NotFoundWIdget.module.scss';

const NotFoundWIdget = () => {
  const { t } = useTranslation();
  return (
    <>
      <SeoUpdater title={`404 - ${t('notFoundPage.header')}`} hrefLang={false} />
      <div className={styles.root}>
        <img src="/img/404.png" width="270" height="230" alt="" />
        <h1 className={styles.header}>{t('notFoundPage.header')}</h1>
        <div className={styles.text}>{t('notFoundPage.text')}</div>
        <PrimaryLinkButton text={t('notFoundPage.button')} link="../support" />
      </div>
    </>
  );
};

export default NotFoundWIdget;
