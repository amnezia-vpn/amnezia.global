import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import Card from '@src/shared/ui/Card/Card';
import DwnVariantsList from '@src/pages/downloads/ui/DwnCard/ui/DwnVariantsList/DwnVariantsList';
import downloadLinks from '@src/shared/config/downloadLinks';
import styles from './DwnCard.module.scss';

const DwnCard = () => {
  const { t } = useTranslation('downloads-page');
  return (
    <div className={styles.root}>
      <Card>
        <div className={styles.cardContent}>
          <DwnVariantsList />
        </div>
      </Card>
      <a href={downloadLinks.github} target="_blank" className={styles.cardFooter} rel="noreferrer">
        {t('dwnCard.oldVersions')}
        <ChevronRight size="20px" strokeWidth={2.5} />
      </a>
    </div>
  );
};

export default DwnCard;
