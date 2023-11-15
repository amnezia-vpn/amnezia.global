import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import DownloadButtonMain from '@src/components/DownloadButtonMain/DownloadButtonMain';
import styles from './PlansSection.module.scss';
import { ReactComponent as Lightning } from './assets/cloud-lightning.svg';
import { ReactComponent as File } from './assets/file-text.svg';

const PlansSection = () => {
  const { t } = useTranslation('reverse-vpn');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.container}>
        <Card bg="plainGrayAlt" className={styles.card}>
          <div>
            <div className={styles.iconWrapper}>
              <File />
            </div>
            <div>
              <h2>{t('plansSection.plan1.header')}</h2>
              <div className={classNames('main-text', 'dimmed', styles.text)}>
                {t('plansSection.plan1.desc')}
              </div>
              <div className={classNames('main-text', 'dimmed', styles.text)}>
                {t('plansSection.plan1.speed')}
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <DownloadButtonMain text={t('plansSection.plan1.button')} link="." />
          </div>
        </Card>
        <div className={classNames(styles.card, styles.gradientBorderCard)}>
          <div>
            <div className={styles.iconWrapper}>
              <Lightning />
            </div>
            <div>
              <h2>{t('plansSection.plan2.header')}</h2>
              <div className={classNames('main-text', 'dimmed', styles.text)}>
                {t('plansSection.plan2.desc')}
              </div>
              <div className={classNames('main-text', 'dimmed', styles.text)}>
                {t('plansSection.plan2.speed')}
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <DownloadButtonMain text={t('plansSection.plan2.button')} link="." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansSection;
