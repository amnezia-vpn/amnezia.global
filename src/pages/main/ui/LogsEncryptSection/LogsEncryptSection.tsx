import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import styles from './LogsEncryptSection.module.scss';
import { ReactComponent as LockIcon } from './assets/lock.svg';
import { ReactComponent as WavesIcon } from './assets/waves.svg';

const LogsEncryptSection = () => {
  const { t } = useTranslation('main-page');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <div className={classNames(styles.root)}>
      <Card className={classNames(styles.logsCard, styles.card)}>
        <section>
          <h2>{t('logsEncryptSection.logs.header')}</h2>
          <div className={classNames('main-text', 'dimmed', styles.text)}>
            {t('logsEncryptSection.logs.text')}
          </div>
        </section>
        <WavesIcon />
      </Card>
      <Card className={classNames(styles.encryptCard, styles.card)}>
        <div className={styles.lockIconContainer}>
          <LockIcon />
        </div>
        <section>
          {isDesktop ? (
            <h1>{t('logsEncryptSection.encrypt.header')}</h1>
          ) : (
            <h2>{t('logsEncryptSection.encrypt.header')}</h2>
          )}
          <div className={classNames('main-text', 'dimmed', styles.text)}>
            {t('logsEncryptSection.encrypt.text')}
          </div>
        </section>
      </Card>
    </div>
  );
};

export default LogsEncryptSection;
