import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesCard.module.scss';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { ReactComponent as MergeIcon } from './assets/merge.svg';
import { ReactComponent as FileDownIcon } from './assets/file-down.svg';

const FeaturesCard = () => {
  const { t } = useTranslation('main-page');
  return (
    <div className={styles.root}>
      <Card>
        <ul>
          <li>
            <ShareIcon className={styles.icon} />
            <div>
              <h3 className={styles.headerText}>{t('featuresCard.feature1.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('featuresCard.feature1.text')}
              </div>
            </div>
          </li>
          <li>
            <MergeIcon className={styles.icon} />
            <div>
              <h3 className={styles.headerText}>{t('featuresCard.feature2.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('featuresCard.feature2.text')}
              </div>
            </div>
          </li>
          <li>
            <FileDownIcon className={styles.icon} />
            <div>
              <h3 className={styles.headerText}>{t('featuresCard.feature3.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('featuresCard.feature3.text')}
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default FeaturesCard;
