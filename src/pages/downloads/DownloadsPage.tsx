import DwnHeader from '@src/pages/downloads/ui/DwnHeader/DwnHeader';
import DwnCard from '@src/pages/downloads/ui/DwnCard/DwnCard';
import DwnInfoCard from '@src/pages/downloads/ui/DwnInfoCard/DwnInfoCard';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import styles from './DownloadsPage.module.scss';

const DownloadsPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('downloads-page');
  return (
    <div className={styles.pageContainer}>
      <SeoUpdater title={t('metaTitle')} metaDesc={t('metaContent')} />
      <DwnHeader />
      <DwnCard />
      <DwnInfoCard />
    </div>
  );
};

export default DownloadsPage;
