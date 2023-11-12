import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './DwnInfoCard.module.scss';

const DwnInfoCard = () => {
  const { t } = useTranslation('downloads-page');
  return (
    <Link to="../instructions/0_starter-guide" className={styles.rootLinkWrapper}>
      <Card className={styles.root}>
        <div>
          <h2>{t('dwnInfoCard.header')}</h2>
          <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
            {t('dwnInfoCard.text')}
          </div>
        </div>
        <div className={styles.iconContainer}>
          <ArrowRight className={styles.icon} color="#FBB26A" strokeWidth={2} />
        </div>
      </Card>
    </Link>
  );
};

export default DwnInfoCard;
