import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import styles from './MoreFeaturesSection.module.scss';
import { ReactComponent as TorIcon } from './assets/tor.svg';
import { ReactComponent as NetIcon } from './assets/net.svg';
import { ReactComponent as PlayIcon } from './assets/play.svg';

const MoreFeaturesSection = () => {
  const { t } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <h1>{t('moreFeaturesSection.header')}</h1>
      <div className={styles.container}>
        <Card className={styles.card}>
          <div>
            <h2>{t('moreFeaturesSection.tor.header')}</h2>
            <div className={classNames('main-text', 'dimmed', styles.text)}>
              {t('moreFeaturesSection.tor.text')}
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <TorIcon />
          </div>
        </Card>
        <Card className={styles.card}>
          <div>
            <h2>{t('moreFeaturesSection.dns.header')}</h2>
            <div className={classNames('main-text', 'dimmed', styles.text)}>
              {t('moreFeaturesSection.dns.text')}
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <NetIcon />
          </div>
        </Card>
        <Card className={styles.card}>
          <div>
            <h2>{t('moreFeaturesSection.stash.header')}</h2>
            <div className={classNames('main-text', 'dimmed', styles.text)}>
              {t('moreFeaturesSection.stash.text')}
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <PlayIcon />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MoreFeaturesSection;
